//Intercepts the contract data and interacts with the event handler to construct event chain data that can be sent
//back to the observer of the contract
//Contract handler is also responsible for processing the data of the contract and cleaning data up, instructing the event
//manager to clean its own data up also.

function ContractHandler(){
	var _worldContracts = new Array();
	var _selectedContract;
	var _contractIndex;
	
}

ContractHandler.CreateContract = function(ID){
	if(ID == -1){
		Debug.Log(Err.Error00001);
	}else{
		var contract = Contract(ID);
		_worldContracts.Add(contract);
		_contractIndex++;
	}
}

ContractHandler.AssignObserverToContract = function(observer, delegate, contractName){
	for(var i = 0; i <= _contractIndex; ++i){
		if(contractName == _worldContracts[i].GetName()){
			_worldContracts[i].AssignObserver(observer);
			_worldContracts[i].AssignContractDelegate(delegate);
		}else{
			Debug.Log(Err.Error00127);
		}
	}
}
ContractHandler.AssignSenderToContract = function(sender, contractName){
	for(var i = 0; i <= _contractIndex; ++i){
		if(contractName == _worldContracts[i].GetName()){
			_worldContracts[i].AssignSender(sender);
		}else{
			//Debug.Log()
		}
	}
}

ContractHandler.RemoveObserverFromContract = function(contractName){
	
}
ContractHandler.RemoveListenerFromContract = function(contractName){
	
}


