/**
 * This file needs to be cleaned up
 */

visibleSpeciesFieldId = undefined;
visibleSpeciesConceptId = undefined;
function showSpeciesField(fieldId) {
	if (!fieldId)
		return;
	fieldId = fieldId.indexOf("speciesField") === 0 ? fieldId : "speciesField"
			+ fieldId
	if (visibleSpeciesFieldId && visibleSpeciesFieldId != fieldId) {
		// $("#"+visibleSpeciesFieldId).hide();
	}
	$("#" + fieldId).show();
	visibleSpeciesFieldId = fieldId
}

function showSpeciesConcept(fieldId) {
	if (!fieldId)
		return;
	fieldId = fieldId.indexOf("speciesConcept") === 0 ? fieldId
			: "speciesConcept" + fieldId
	if (visibleSpeciesConceptId) {
		$("#" + visibleSpeciesConceptId).hide();
	}
	$("#" + fieldId).appendTo("#speciesFieldContainer").show();
	visibleSpeciesConceptId = fieldId
	if ($("#" + fieldId + " div.occurenceMap").length === 1
			&& $("#" + fieldId + " div.occurenceMap").is(":empty")) {
		showOccurence();
	}
}

var addReference = function(childCount, id) {
	sid = id + "_" + (childCount - 1)
	var clone = $("#reference" + sid).clone()
	var htmlId = 'referencesList[' + id + "_" + childCount + '].';
	var referenceInput = clone.find("input[id$=sid]");

	clone.find("input[id$=sid]").attr('id', htmlId + 'id').attr('name',
			htmlId + 'id');
	clone.find("input[id$=deleted]").attr('id', htmlId + 'deleted').attr(
			'name', htmlId + 'deleted');
	clone.find("input[id$=new]").attr('id', htmlId + 'new').attr('name',
			htmlId + 'new').attr('value', 'true');
	referenceInput.attr('id', htmlId + 'number')
			.attr('name', htmlId + 'number');
	clone.find("select[id$=type]").attr('id', htmlId + 'type').attr('name',
			htmlId + 'type');

	clone.attr('id', 'reference' + childCount);
	$("#childList" + id).append(clone);
	clone.show();
	referenceInput.focus();
}

var deleteReferenceHandler = function() {
	// find the parent div
	var prnt = $(this).parents(".reference-div");
	// find the deleted hidden input
	var delInput = prnt.find("input[id$=deleted]");
	// check if this is still not persisted
	var newValue = prnt.find("input[id$=new]").attr('value');
	// if it is new then i can safely remove from dom
	if (newValue == 'true') {
		prnt.remove();
	} else {
		// set the deletedFlag to true
		delInput.attr('value', 'true');
		// hide the div
		prnt.hide();
	}
}

var positionTOC = function() {
	var pos = $("#fieldstoc").position().top + $("#fieldstoc").height();
	$(window).scroll(function() {
		if ($(window).scrollTop() >= pos) {
			$("#fieldstoc").css({
				position : 'fixed',
				top : '0'
			});
		} else {
			$("#fieldstoc").css({
				position : 'fixed',
				top : $("#speciesFieldContainer").offset().top
			});
		}
	});
}

var showOccurence = function(speciesName) {
        loadGoogleMapsAPI(function() {
            var mapOptions = {
                    popup_enabled : true,
                    toolbar_enabled : true
                    //bbox : "5801108.428222222,674216.547942332, 12138100.077777777, 4439106.786632658"
            };
            var layersOptions = [
            {
                    title : 'Occurrence',
                    layers : 'bhutanmaps:occurrence',
                    styles : '',
                    cql_filter : "species_name='" + speciesName + "'",
                    opacity : 0.7
            },
            {
                    title : 'Observation',
                    layers : 'bhutanmaps:observation_locations',
                    styles : '',
                    cql_filter : "species_name='" + speciesName + "'",
                    opacity : 0.7
            },
            {
                    title : 'Checklist',
                    layers : 'bhutanmaps:checklist_species_locations',
                    styles : '',
                    cql_filter : "species_name='" + speciesName + "'",
                    opacity : 0.7
            }
            ]
	    console.log("before call");
            showMap("map1311326056727", mapOptions, layersOptions);
	    console.log("after call");
            $("#mapSpinner").hide();
        });
}

var updateEditorContent = function() {
	var editor = $('.fieldEditor').ckeditorGet();
	if (editor.checkDirty()) {
		$(textarea[name = 'description']).val(editor.getData());
	}
}

var expandAll = function(gridId, rowId, force) {
	var grid = $("#"+gridId);
	var rowData = grid.getRowData(rowId);
	if(force) {
		/*var children = grid.getNodeChildren(rowData);
		for ( var i = 0; i < children.length; i++) {
			grid.delTreeNode(children[i].id);	
		}
		rowData['expanded'] = 'false';
		rowData['loaded'] = 'false';
		*/
	}
	if (!grid.isNodeLoaded(rowData) || grid.isNodeLoaded(rowData) == 'false') {
		var postData = grid.getGridParam('postData');
		if(grid.getNodeChildren(rowData).length == 0)
			postData["expand_all"] = true;
		grid.expandRow(rowData);
		grid.expandNode(rowData);
		//$("#" + rowId + " div.treeclick").trigger('click');
	} 
}

var initializeCKEditor = function() {
	/*
	 * CKEDITOR.on('instanceReady', function(ev) { var editor = ev.editor; var
	 * dataProcessor = editor.dataProcessor; var htmlFilter = dataProcessor &&
	 * dataProcessor.htmlFilter; htmlFilter.addRules( { elements : { input:
	 * function(element) { return false; }, } }); });
	 */
}

var getGoogleImages = function(imageSearch, page) {
	if (page >= 8)
		return;
	imageSearch.gotoPage(page);
	var galleries = Galleria.get();
	var gallery = galleries[galleries.length -1]; // gallery is now the first galleria

	imageSearch
			.setSearchCompleteCallback(
					this,
					function() {
						for ( var i = 0; i < imageSearch.results.length; i++) {
							//var url = imageSearch.results[i].url.replace(/%2520/g, " ")
							var url = decodeURIComponent(imageSearch.results[i].url);
							gallery
									.push({
										image : url,
										title : imageSearch.results[i].titleNoFormatting,
										description : "<div class='notes'><a href="
												+ url
												+ " target='_blank'><b>View image source</b> </a></div>"
									})
						}
						gallery.show(page * 8);
					})
}

function loadIFrame() {
	var uBioLink = $('#uBioIframeLink'); 
	var url = uBioLink.attr('href')
	uBioLink.remove();
	$('iframe#uBioIframe').attr('src', url).height("500px").width("100%");
}


$(document).ready(function() {
	
	$('li.poor_species_content').hover(function(){
		$(this).children('.poor_species_content').slideDown(200);
	}, function(){
		$(this).children('.poor_species_content').slideUp(200);
	});
	$(".grid_view").toggle();
	
	$.fn.editable.defaults.mode = 'inline';
	$('.editField').editable({
			disabled:window.is_species_admin?!window.is_species_admin:true,
			wysihtml5 : {
				"font-styles": true, //Font styling, e.g. h1, h2, etc. Default true
				"emphasis": true, //Italics, bold, etc. Default true
				"lists": true, //(Un)ordered lists, e.g. Bullets, Numbers. Default true
				"html": true, //Button which allows you to edit the generated HTML. Default false
				"link": true, //Button to insert a link. Default true
				"image": true, //Button to insert an image. Default true,
				"color": false //Button to change color of font
			},
			success: function(response, newValue) {
				if(!response) {
		            return "Unknown error!";
		        }          
		        
			    if(!response.success) {
			    	$(this).next(".alert-error").html(response.msg).show();
			    	return response.msg
			    } else {
			    	$(this).next(".alert-error").hide();
			    }
			},
			error:function(xhr) {
				console.log(xhr)
			}
	});
});
