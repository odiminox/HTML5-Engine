/**
 * Description
 * @method MaterialComponent
 * @return 
 */
function MaterialComponent(){
	var _material;
	
	var _materialArray = new Array();
	
	var _senderTag;
	var _senderId;
	var _actionData;
	
	
	/**
	 * Description
	 * @method LoadTexture
	 * @param {} filename
	 * @return 
	 */
	this.LoadTexture = function(filename)
	{
		if(typeof filename == undefined || filename == ""){
			Debug.Log(Err.Error00009);
			return false;
		}else{
			_material = new THREE.Texture();
			var loader = new THREE.ImageLoader(manager);
			loader.load(filename, function(image) {
				_material.image = image;
				_material.needsUpdate = true;
			});
			return true;
		}
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
