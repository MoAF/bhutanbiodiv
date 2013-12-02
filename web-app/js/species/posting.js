var selectedObjects = new Array();
var rejectedObjects = new Array();

function updateObjSelection(id, comp){
	//opening list of groups on any selection change
	$('#action-tabs').children('li').addClass('active');
	$("#action-tab-content .tab-pane").addClass('active');
	$(comp).parent().removeClass('mouseover').addClass('mouseoverfix');
	if($(comp).hasClass('selectedItem')){
		$(comp).removeClass('selectedItem');
		if($('.post-to-groups .select-all').hasClass('active')){
			rejectedObjects.push(id);
		}else{
			selectedObjects.splice(selectedObjects.indexOf(id), 1);
		}
	}else{
		$(comp).addClass('selectedItem');
		if($('.post-to-groups .select-all').hasClass('active')){
			rejectedObjects.splice(rejectedObjects.indexOf(id), 1);
		}else{
			selectedObjects.push(id);	
		}
	}
}

function updateListSelection(comp){
	selectedObjects = new Array();
	if($(comp).hasClass('select-all')){
		if(confirm('This will select all the resoures from list. Are you sure ?')){
			$('.post-to-groups .select-all').addClass('active')
			$('.post-to-groups .reset').removeClass('active')
			$('.mainContentList .selectable input[type="checkbox"]').prop('checked', true);
			rejectedObjects = new Array();
		}
	}else{
		$('.post-to-groups .select-all').removeClass('active')
		$('.post-to-groups .reset').addClass('active')
		$('.mainContentList .selectable input[type="checkbox"]').prop('checked', false);
	}
}

function submitToGroups(submitType, objectType, url, isBulkPull, id){
	
	function updateFeatureTab(html, userGroups){
		$(".feature-user-groups").replaceWith(html);
        for (var i = 0; i < userGroups.length; i++) {
            selectTickUserGroupsSignature("" + userGroups[i]);
        }
        $('#featureNotes').keydown(function(){
            if(this.value.length > 400){
                return false;
            }
            $("#remainingC").html("Remaining characters : " +(400 - this.value.length));
        });
	} 
	
	if(isBulkPull){
		if(!$('.post-to-groups .select-all').hasClass('active') && selectedObjects.length === 0){
			alert('Please select at least one object');
			return;
		}	
	}else{
		selectedObjects = rejectedObjects = [id];
	}
	
	userGroups = getSelectedUserGroups();
	if(userGroups.length === 0){
		alert('Please select at least one group')
		return; 
	}
	
	var pullType = (isBulkPull) ? 'bulk' : 'single'
	var selectionType = $('.post-to-groups .select-all').hasClass('active') ? 'selectAll' : 'reset'
	var objectIds = (selectionType === 'selectAll') ?  rejectedObjects : selectedObjects
	var filterUrl = window.location.href
	if(pullType !== 'single'){
		$(".alertMsg").removeClass('alert alert-error').removeClass('alert alert-success').addClass('alert alert-info').html("Processing...");
		$("html, body").animate({ scrollTop: 0 });
	}
	$.ajax({
 		url: url,
 		type: 'POST',
		dataType: "json",
		data:{'pullType':pullType, 'selectionType':selectionType, 'objectType':objectType, 'objectIds':objectIds.join(","), 'submitType':submitType, 'userGroups':userGroups.join(","), 'filterUrl':filterUrl},
		success: function(data) {
			if(data.success){
				if(pullType === 'single'){
					$(".resource_in_groups").replaceWith(data.resourceGroupHtml);
					updateFeatureTab(data.featureGroupHtml, userGroups);
                    
				}else{
					$(".alertMsg").removeClass('alert alert-info').addClass('alert alert-success').html(data.msg);
				}
                $('#action-tabs a:first').tab('show');
			}else{
				$(".alertMsg").removeClass('alert alert-info').addClass('alert alert-error').html(data.msg);
			}
			updateFeeds();
			return false;
		}, error: function(xhr, status, error) {
			console.log(xhr.responseText);
	   	}
	});
}

//this will be called in last action of load more
function updateGroupPostSelection(){
	var comp = $('.post-to-groups .select-all')
	if(comp && comp.hasClass('active')){
		$('.mainContentList .selectable input[type="checkbox"]').prop('checked', true);
	}
}

function getSelectedUserGroups($context){
    var userGroups = [], $selector; 
    if($context == undefined) {
        $selector = $('.userGroups button[class~="btn-success"]')
    } else {
        $selector = $context.find('.userGroups button[class~="btn-success"]')
    }
    $selector.each (function() {
        userGroups.push($(this).attr('value'));
    });
    return userGroups;	
}

function reInitializeGroupPost(){
	var selectedObjects = new Array();
	var rejectedObjects = new Array();
}

