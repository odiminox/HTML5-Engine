function CameraComponent(){
	
	var _camera;
	var _FOV;
	var _aspect;
	var _near;
	var _far;
	
	var _senderTag;
	var _senderId;
	var _actionData;
	
	this.AssignSenderTag = function(tag)
	{
		_senderTag = tag;
	}
	this.AssignSenderID = function(id)
	{
		_senderId = id;
	}
	this.GetActionData = function()//Callback function
	{
		
	}
}