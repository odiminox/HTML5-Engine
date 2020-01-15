function Contract(ID, name){
	
	var _ID = ID;
	var _name = name;
	var _contractProcessID;
	var _contractName;
	var _isActivated;
	var _remove;
	
	var _observer;
	var _sender;
	
	var contractDataDelegate;//The object contains a delegate that we will use to retrive the data
							 //This delegate data is passed to the event data, which is the passed
							 //to the appropriate observer
							 
	this.AssignContractDelegate = function(delegate){
		if(typeof contractDataDelegate == undefined){
			Debug.Log(Err.Error00107);
			return false;
		}else if(contractDataDelegate == delegate){
			Debug.Log(Err.Error00097);
			return false;
		}else{
			contractDataDelegate = delegate();
			return true;
		}
	}
	this.ExecuteContractDelegate = function(){
		if(typeof contractDataDelegate == undefined){
			Debug.Log(Err.Error00107);
			return false;
		}else {
			contractDataDelegate();
			return true;
		}
		
	}
	
	this.AssignObserver = function(observer){
		_observer = observer;
	}
	this.AssignSender = function(sender){
		_sender = sender;
	}
	this.AssignName = function(name){
		_name = name;
	}
	this.GetName = function(){
		return _name;
	}
	
	
	this.AssignIndexID = function(id){
		_ID = id;
	}
	this.GetIndexID = function(){
		return _ID;
	}
	
	this.Activate = function(){
		_isActivated = true;
	}
	this.Deactivate = function(){
		_isActivated = false;
	}
	this.GetIsActivated = function(){
		return _isActivated;
	}
}
