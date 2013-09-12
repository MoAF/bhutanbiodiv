var selectedObjects = new Array();
var rejectedObjects = new Array();

function updateObjSelection(id, comp){
	$('.post-to-groups').parent().slideDown(1000);
	$(comp).parent().removeClass('mouseover').addClass('mouseoverfix');
	if($(comp).hasClass('selectedItem')){
		$(comp).removeClass('selectedItem');
		if($('.post-to-groups .select-all').hasClass('active')){
			rejectedObjects.push(id);
		}else{
			selectedObjects.splice(array.indexOf(id), 1);	
		}
		console.log("remove item " + selectedObjects);
	}else{
		$(comp).addClass('selectedItem');
		if($('.post-to-groups .select-all').hasClass('active')){
			rejectedObjects.splice(array.indexOf(id), 1);
		}else{
			selectedObjects.push(id);	
		}
		console.log("add item " + selectedObjects);
	}
}

function updateListSelection(comp){
	selectedObjects = new Array();
	if($(comp).hasClass('select-all')){
		if(confirm('This will select all the resoures from list. Are you sure ?')){
			$('.post-to-groups .select-all').addClass('active')
			$('.post-to-groups .reset').removeClass('active')
			//$('.observations_list .selectable').addClass('selectedItem');
			$('.thumbnail .selectable input[type="checkbox"]').prop('checked', true);
			//$('.snippet.tablet .figure .mouseover').removeClass('mouseover').addClass('mouseoverfix');
			//$('.snippet.tablet .figure .mouseoverfix').show();
			rejectedObjects = new Array();
			console.log("select all");
		}
	}else{
		$('.post-to-groups .select-all').removeClass('active')
		$('.post-to-groups .reset').addClass('active')
		//$('.observations_list .selectable').removeClass('selectedItem');
		//$('.snippet.tablet .figure .mouseoverfix').removeClass('mouseoverfix').addClass('mouseover');
		//$('.snippet.tablet .figure .mouseover').hide();
		$('.thumbnail .selectable input[type="checkbox"]').prop('checked', false);
		console.log("reset all");
	}
}

function submitToGroups(submitType, objectType, url){
	if(!$('.post-to-groups .select-all').hasClass('active') && selectedObjects.length === 0){
		alert('Please select at least one object');
		return;
	}
	
	userGroups = getSelectedUserGroups();
	if(userGroups.length === 0){
		alert('Please select at least one group')
		return; 
	}
	
	if(submitType === 'post'){
		console.log("posting " + selectedObjects +  ' on groups ' + userGroups);
	}else{
		console.log("unposting " + selectedObjects +  ' on groups ' + userGroups);
	}
	
	var selectionType = $('.post-to-groups .select-all').hasClass('active') ? 'selectAll' : 'reset'
	var objectIds = (selectionType === 'selectAll') ?  rejectedObjects : selectedObjects
	var filterUrl = window.location.href	
	$.ajax({
 		url: url,
 		type: 'POST',
		dataType: "json",
		data:{'selectionType':selectionType, 'objectType':objectType, 'objectIds':objectIds.join(","), 'submitType':submitType, 'userGroups':userGroups.join(","), 'filterUrl':filterUrl},
		success: function(data) {
			if(data.success){
				$(".alertMsg").removeClass('alert alert-error').addClass('alert alert-success').html(data.msg);
			}else{
				$(".alertMsg").removeClass('alert alert-success').addClass('alert alert-error').html(data.msg);
			}
			$("html, body").animate({ scrollTop: 0 });
			return false;
		}, error: function(xhr, status, error) {
			alert(xhr.responseText);
	   	}
	});
}

//this will be called in last action of load more
function updateGroupPostSelection(){
	var comp = $('.post-to-groups .select-all')
	if(comp && comp.hasClass('active')){
		$('.thumbnail .selectable input[type="checkbox"]').prop('checked', true);
		//$('.observations_list .selectable').addClass('selectedItem');
		//$('.snippet.tablet .figure .mouseover').removeClass('mouseover').addClass('mouseoverfix');
		//$('.snippet.tablet .figure .mouseoverfix').show();
	}
}

function getSelectedUserGroups() {
    var userGroups = []; 
    $('.userGroups button[class~="btn-success"]').each (function() {
        userGroups.push($(this).attr('value'));
    });
    return userGroups;	
}


