function MeshComponent(){
	var _model;
	
	var _isAssigned;//To prevent multiple duplications of models data when a model mesh has been loaded into this component instance
	//or if the model loaded in was a geometry object instead of the mesh
	
	var _senderTag;
	var _senderId;
	var _actionData;
	
	//TO DO: Check to make sure we dont overwrite the same mesh!
	
	this.CreateCylinderGeometry = function(par1, par2 ,par3,  par4)
	{	
		model = new THREE.CylinderGeometry( par1, par2, par3, par4 );
		
		if(gameObject.ContainsTC()){
				//var vec = new THREE.Vector3(gameObject.GetTC().GetPosX(),gameObject.GetTC().GetPosY(),gameObject.GetTC().GetPosZ());
		}
	}
	
	this.CreateSphereGeometry = function()
	{
		
	}
	
	this.LoadModel = function(fileName)
	{
		var gameObject = new GameObject();
		if(typeof fileName == undefined || fileName == ""){
			Debug.Log(Err.Error00009);
			return false;
		}else{
			gameObject = GOManager.getGameObject_id(_senderId);
			//Debug.Log(_senderId);

			if(typeof gameObject == undefined){//What if the game object was deleted since calling this method?
				Debug.Log(Err.Error00005);
				return false;
			}else if(gameObject.ContainsMATC()) {//What if the material component was deleted since calling this method?
				var loader = new THREE.OBJLoader(manager);
			
				loader.load(fileName, function(object){
					object.traverse(function(child){
						if(child instanceof THREE.Mesh){
							child.material.map = gameObject.GetMATC().GetMaterial();
							scene.add(child);
						}
					});
				
					//TO DO: add the mesh to the list of world meshes
					if(gameObject.ContainsTC()){//What if the transform component was deleted since calling this method?
						//TO DO: Slack way of doing this, but will change when I implement better conversion for THREE.Vector3 and internal vector3
						var vec = new THREE.Vector3(gameObject.GetTC().GetPosX(),gameObject.GetTC().GetPosY(),gameObject.GetTC().GetPosZ());
						object.position = vec;
						Debug.Log(object.position);
						_model = object;
						//TO DO: There is an issue with scope here whereby I cannot access the reference to the object after this section
						scene.add(object);//This is annoying!
					}else{
						Debug.Log(Err.Error00007);
						return false;
					}
				});
				return true;
			}else{
				Debug.Log(Err.Error00337);
				return false;
			}
		}
	}
	
	this.GetModel = function()
	{
		if(typeof _model != undefined){
			return _model;
		}else{
			Debug.Log(Err.Error00057);
			return false;
		}
	}
		
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
		
	}
}