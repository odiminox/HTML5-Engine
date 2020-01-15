/*
function loadjsfile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
  //fileref.type = 'text/javascript';
  //fileref.async = true;
  //fileref.src = 'jquery.js';
 }
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}

//loadjsfile("jquery.js", "js") //dynamically load and add this .js file


*/
var transformComponentLocation = new Array();
var cameraComponentLocation = new Array();
var meshComponentLocation = new Array();
var materialComponentLocation = new Array();
var parentID = new Array();
var objectTag = new Array();
var childID = new Array();



function LoadXML(){

	// File
	this.ReadXML = function(xmlName){

		jQuery(document).ready(function(){ 

			// Open the .xml file
			jQuery.get(xmlName,{},function(xml){
				
				// run loop for each object
				jQuery('GameObject',xml).each(function(i) {
					transformComponentLocation.push( $(this).find("Transform_Component_Location").attr("xmlns"));
					cameraComponentLocation.push( $(this).find("Camera_Component_Location").attr("xmlns"));
					meshComponentLocation.push( $(this).find("Mesh_Component_Location").attr("xmlns"));
					materialComponentLocation.push( $(this).find("Material_Component_Location").attr("xmlns"));
					parentID.push( $(this).find("Parent_ID").attr("xmlns"));
					objectTag.push( $(this).find("Object_Tag").attr("xmlns"));
					childID.push( $(this).find("Child_ID").attr("xmlns"));

				});
										 
			});
		});
		
		
	};
	
}



