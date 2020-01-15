

function TransformComponent(){
	var m_position = new Array();
	var m_rotation = new Array();
	var m_scale = new Array();
	
	//TO DO: Work out C-Style union between the var and the array index element
	var _x;
	var _y;
	var _z;
	
	var _senderTag;
	var _senderId;
	var _actionData;

	this.AssignPosition_f = function(x,y,z)
	{
		m_position[0] = x;
		m_position[1] = y;
		m_position[2] = z;
	}
	this.AssignPosition_vec = function(Vector3)
	{
		m_position = Vector3;
	}
	this.AssignPosition_vecf = function(Vector3)
	{
		m_position[0] = Vector3.x;
		m_position[1] = Vector3.y;
		m_position[2] = Vector3.z;
	}
	
	this.OffsetPosition_f = function(x,y,z)
	{
		m_position[0] += x;
		m_position[1] += y;
		m_position[2] += z;
	}
	this.OffsetPosition_vec = function(Vector3)
	{
		m_position += Vector3
	}
	this.OffsetPosition_vecf = function(Vector3)
	{
		m_position[0] += Vector3.x;
		m_position[1] += Vector3.y;
		m_position[2] += Vector3.z;
	}
	this.GetPosX = function()
	{
		return m_position[0];
	}
	this.GetPosY = function()
	{
		return m_position[1];
	}
	this.GetPosZ = function()
	{
		return m_position[2];
	}
	this.GetPosVec = function()
	{
		return m_position;
	}
	//TO DO: will need to have a base class that overrides these methods
	this.AssignSenderTag = function(tag)
	{
		_senderTag = tag;
	}
	this.AssignSenderId = function(id)
	{
		_senderId = id;
	}
	this.GetActionData = function()//Callback function
	{
		return "Vector3("+m_position[0]+","+m_position[1]+","+m_position[2]+")";
	}
	
}
