

function Err(){
	var m_failedGameObject = -1;
	
}

//TO DO: Refactor all error checking into one mega assert
Err.checkIfGOValid = function(id){
	if(id == -1){
		Debug.Log(Err.Error00001);
		return false;
	}else{
		var tempContainer = new Array();
		tempContainer = GOManager.getPopulationArray();
		if(GOManager.GetPopulationCount()!=-1){
			for(var i = 0; i <= GOManager.GetPopulationCount(); i++){
				if(id == i){
					if(typeof tempContainer[i] == undefined){
						Debug.Log(Err.Error00002);
						return false;
					}else {
						//Debug.Log(Err.Log00003);
						return true;
					}
				}else{
					Debug.Log(Err.Error00005);
				}
			}
			}else{
				Debug.Log(Err.Error00004);
			}
		
		}
}

Err.CheckIfEventValid = function(event){
	
	if(typeof event == undefined){
		Debug.Log()
	}else{
		var temp = event.getEventId();
		if(temp = -1){
			Debug.Log(Err.Error00001);
			Debug.Log(Err.Error00007);
			return false;
		}else{
			if(typeof event.getEventChain() == undefined){//We have an inert string, so
				// event chain == "" error checking
			}
			
		}
	}

}

Err.CheckIfUndefined = function(data){
	if(typeof data == undefined){
		Debug.Log(Err.Error00008);
		return false;
	}else{
		return true;
	}
}

Err.ErrorId;


//TO DO: Sort error code values out
Err.Error00001 = 'id is error code (-1)'
Err.Error00002 = 'Game Object Does not exist'
Err.Error00003 = 'Game Object already exits'
Err.Error00004 = 'No Game Objects in world'
Err.Error00005 = 'No matching Game Object in world'
Err.Error00006 = 'Could not remove Game Object'
Err.Error00007 = 'Transform Component does not exist'
Err.Error00447 = 'Material Component does not exist'
Err.Error00077 = 'Mesh Component does not exist'
Err.Error00017 = 'Game Object does not contain Transform Component'
Err.Error00117 = 'Game Object does not contain Mesh Component'
Err.Error00337 = 'Game Object does not contain Material Component'
Err.Error00027 = 'Not a valid tag'
Err.Error00557 = 'Material has not been loaded'
Err.Error00667 = 'Model has not been loaded'

Err.Error00007 = 'Event does not exist'
Err.Error00017 = 'Event does not contain any data'
Err.Error00027 = 'Failed to get action'
Err.Error00037 = 'Invalid id creating Event'
Err.Error00047 = 'Invalid Tag creating Event'
Err.Error00057 = 'Event chain empty'
Err.Error00067 = 'Did not assign action'
Err.Error00077 = 'Did not assign sender'
Err.Error00087 = 'Did not assign target'
Err.Error00097 = 'Contract Delegate is the same'
Err.Error00107 = 'Undefined Contract Delegate'
Err.Error00127 = 'Could not locate observer'

Err.Error00008 = 'Data is undefined'

Err.Error00009 = 'Invalid filename'

Err.Log00001 = 'First Game Object in world'
Err.Log00002 = 'Game Object Created'

Err.Log00003 = 'Object is valid'

Err.Log00004 = 'Init complete'

