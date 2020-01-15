//TO DO: Refactor Component and type safe it for errors
function AnimationComponent(){
	var _meshes = new Array();
	var _geometry = new Array();
	var _loaded = new Array();
	
	var _currentMesh;
	var _noOfMeshes=0;
	var _currentAnimation = new Array();
	
	var _x;
	var _y;
	var _z;
	var _s=20;
	
	this.EnsureLoop = function(animation)
	{
		for(var i = 0; i < animation.hierachy.length; i++){
			var bone = animation.hierachy[i];
			var first = bone.keys[0];
			var last = bone.keys[bone.keys.length-1];
			
			last.pos = first.pos;
			last.rot = first.rot;
			last.scl = first.scl;
		}
	}
	
	this.AddAnimation = function(geometry, materials, animationNo)
	{
		THREE.AnimationHandler.add(geometry.animation);
		 
		 for(var i = 0; i < materials.length; i++){
		 	var m = materials[i];
		 	//TO DO: Sort out this slack
		 	m.skinning = true;
		 	m.morphtargets = true;
		 	m.specular.setHSL(0,0,0.1);
		 	m.color.setHSL(0.6, 0, 0.6);
		 	m.ambient.copy(m.color);
		 	m.wrapAround = true;
		 }
		 
		 _geometry[animationNo] = geometry;
		 
		 _meshes[animationNo] = new THREE.SkinnedMesh(geometry,  new THREE.MeshFaceMaterial(materials));
		 //TO DO: link to transform component
		 _meshes[animationNo].position.set(_x,_y,_z);
		 _meshes[animationNo].scale.set(_s,_s,_s);
		 
		 _meshes[animationNo].castShadows=true;
		 _meshes[animationNo].receiveShadow=true;
		 
		 _currentAnimation[animationNo] = new THREE.Animation(_meshes[animationNo], _geometry[animationNo].animation.name);
		 console.log("one"+_currentAnimation[animationNo]);
		 _currentAnimation[animationNo].JITCompile = false;
		 _currentAnimation[animationNo].interpolateType = THREE.AnimationHandler.LINEAR;
		 _loaded[animationNo] = true;
		 
		 _noOfMeshes++;
	}
	
	this.SetPosition = function(position)
	{
		console.log("Yes");
		for(var i = 0; i < _noOfMeshes; ++i){
			_meshes[i].position = position;
		}
	}
	
	this.SetCurrentAnimation = function(current)
	{
		_currentMesh = current;
	}
	
	this.StartCurrentAnimation = function()
	{
		scene.add(_meshes[_currentMesh]);
		console.log(_currentAnimation[_currentMesh]);
		_currentAnimation[_currentMesh].play();
	}
	
	this.StopCurrentAnimation = function()
	{
		_currentAnimation[_currentMesh].stop();
	}
	
	this.PlayCurrentAnimation = function()
	{
		_currentAnimation[_currentMesh].play();
	}
	
	this.PauseCurrentAnimation = function()
	{
		_currentAnimation[_currentMesh].pause();
	}
	
	this.RemoveCurrentAnimation = function()
	{
		_currentAnimation[_currentMesh].stop();
		scene.remove(_meshes[_currentMesh]);
	}
	
	this.ChangeCurrentAnimation = function(animation)
	{
		_currentAnimation[_currentMesh].stop();
		scene.remove(_meshes[_currentMesh]);
		SetCurrentAnimation(animation);
		StartCurrentAnimation();
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
	this.AssignSenderID = function(id)
	{
		_senderId = id;
	}
	this.GetActionData = function()//Callback function
	{
		
	}
}
