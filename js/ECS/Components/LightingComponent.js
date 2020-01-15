/*
 * Within the Entity component system, only one transform game object may have one light attatched to it at a time currently
 * as otherwise the lights will stack upon each other. This can be resonolved when the scenegraph system is implemented in the future
 * 
 * Currently just the skeleton implementation of the lighting class that will be implemented fully within the future within the ECS system
 */

function LightingComponent(){
	
	var _lightingAssigned;//Bool is indicate that the lighting has already been assigned for this component and another cannot be assigned
	
	this.AddDirectionalLight = function(){
		if(_lightingAssigned!=true){
			_lightingAssigned=true;
			
			
			
			
		}
	}
	this.AddAmbientLight = function(){
	}
	this.AddAreaLight = function(){
		
	}
	this.AddhemisphereLight = function(){
		
	}
	this.AddPointLight = function(){
		
	}
	this.AddSpotLight = function(){
		
	}

	/**
	 * Description
	 * @method GetMaterial
	 * @return 
	 */
	this.GetMaterial = function()
	{
		if(typeof _material == undefined){
			Debug.Log(Err.Error00557);
			return false;
		}else{
			return _material;
		}
	}
	
	/**
	 * Description
	 * @method AssignSenderTag
	 * @param {} tag
	 * @return 
	 */
	this.AssignSenderTag = function(tag)
	{
		_senderTag = tag;
	}
	/**
	 * Description
	 * @method AssignSenderID
	 * @param {} id
	 * @return 
	 */
	this.AssignSenderID = function(id)
	{
		_senderId = id;
	}
	/**
	 * Description
	 * @method GetActionData
	 * @return 
	 */
	this.GetActionData = function()
	{
		
	}
	
}
