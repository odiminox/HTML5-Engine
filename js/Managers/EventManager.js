//We create a contract between a sender and an observer, the observer is awaiting to recieve some form of data from an event.
//The sender contains a callback method, which is parsed into the contract, then handled by the contract
//The contract will execute the callback when instructed to
//The event manager will create an event and construct an event chain that contains this data
//The observer of the contract can now retrieve the appropriate data they wish.

//The data contained within the contract that is retrieved from  the sender can be retrieved in various forms
//This allows an external application, such as the editor to intercept various level of that data. This also applies
//to when saving and we potentially only want a certain sample of data at a certain time. 


function EventManager(){
	var m_numOfEventsAlive;
	var m_eventsArray = new Array();
	var m_contractsArray = new Array();
	var m_numOfEvents=-1;
	var m_currentEvent;
	var m_eventCounter;
	
	var _highPriorityEvent;
	
	this.GetActionFromEvent = function(event){
		if(Err.CheckIfEventValid(event)){
				Debug.Log(Err.Error00017);
				Debug.Log(Err.Error00027);
				return -1;
			}else{
				return event.getAction();
			}
		}
		
	this.IncrementEventCntr = function(){
		m_eventCounter++;
	}
	this.DecrementEventCntr = function(){
		m_eventCounter--;
	}
	this.GetEventCounter = function(){
		return m_eventCounter;
	}
	//TO DO: Need lots of error checking to ensure that action, sender and target are valid input
	this.CreateEvent = function(id, Tag, eventchain){
		
		if(id == -1){
			Debug.Log(Err.Error00037);
			return false;
		}else if(Tag == ""){
			Debug.Log(Err.Error00047);
			return false;
		} else {
			var tempEvent = new Event(id, Tag);
		
			var length = eventchain.length;
			if(length == 0){
				Debug.Log(Err.Error00057);
				return false;
			}
				
			var buffer = new Array();
			var delimeter = "_";
			var cntr = 0;
			for(var i = 0; i <= length; ++i){
				var tempChar = eventchain.charAt(i);
				if(tempChar == delimeter || i == length){
					switch(cntr)
					{
						case 0:
							tempEvent.setEventAction(buffer);
							break;
						case 1:
							tempEvent.SetEventSender(buffer);
							break;
						case 2:
							tempEvent.SetEventTarget(buffer);
							break;
					}
					buffer = null;
					buffer = new Array();
					cntr++;
				}else{
					buffer.push(eventchain.charAt(i));
				}
			}
			
			tempEvent.constructEventChain();
			
			if(_highPriorityEvent){
				if(m_currentEvent)
					m_currentEvent = null;
					
				m_currentEvent = tempEvent;
			}

			m_eventsArray.push(tempEvent);
			m_eventCounter = m_numOfEvents++;
		}
	
	}
	
	this.FireEvent = function(event){
		
	}
	this.FireCurrentEvent = function(){
		
	}
	
	this.ProcessCurrentEvent = function(){
		
	}
	
	this.GetCurrentSender = function(){
		
	}
	//Need to make these delegates
	this.RecieveEvent = function(event){
		if(event.getEventId() == -1){
			Debug.Log(Err.Error0037);
		}else{
			event.SetWasEventRecieved(true);
			
			//Get the number of the event, remove it, and restore the order of the event array
		}
	}
	
	}

	EventManager.CreateContract = function(contractName){
		
	}

	EventManager.JoinObserverToContract = function(observer, contractName){
		
	}
	EventManager.JoinListenerToContract = function(listener, contractName){
		
	}
		
	EventManager.FireObjectEvent = function(senderTag, senderId, senderAction, senderData){
		
		var TagId;
		
		if(senderTag == "")
			TagId = senderId;
		else if(typeof senderTag != undefined)
			TagId = senderTag
		
		this.CreateEvent(this.GetEventCounter(), TagId+" objectEvent", senderData);
		
		m_currentEvent = m_eventsArray[this.GetEventCounter()];
		
		this.ProcessCurrentEvent();
	}
	


