function SceneManager(){
	
	var _worldScenes = new Array();
	var _worldSceneCounter;
	var _worldSceneNames = new Array();
	var _worldScenePersonalId = new Array();
	
	this.CreateNewSceneName = function(sceneName)
	{
		var scene = new THREE.Scene();
		_worldScene.push(scene);
		var name = sceneName;
		_worldSceneNames.push(name);
		_worldScenePersonalId.push(_worldSceneCounter);
		_worldSceneCounter++;
	}
	this.CreateNewSceneId = function(sceneId)
	{
		var scene = new THREE.Scene();
		_worldScene.push(scene);
		var name = sceneName = _worldSceneCounter.toStirng();
		_worldSceneNames.push(name);
		_worldScenePersonalId.push(sceneId);
		_worldSceneCounter++;
	}
	this.CreateNewSceneNameId = function(sceneName, sceneId)
	{
		var scene = new THREE.Scene();
		_worldScene.push(scene);
		var name = sceneName = sceneName;
		_worldSceneNames.push(name);
		_worldScenePersonalId.push(sceneId);
		_worldSceneCounter++;
	}
	
	this.AddObjectToSceneByName = function(sceneName, object)
	{
		if(typeof object != undefined){
			for(var i = 0; i < _worldSceneCounter-1; i++){
				if(sceneName == _worldSceneNames[i]){
					_worldScenes[i].add(object);
				}	
			}			
		}else {
			//Error checking
		}
	}
	this.AddObjectToSceneById = function(sceneId, object)
	{
		if(typeof object != undefined){
			for(var i = 0; i < _worldSceneCounter-1; i++){
				if(sceneId == _worldScenePersonalId[i]){
					_worldScenes[i].add(object);
				}	
			}			
		}else{
			//Error checking			
		}
	}
	
}
