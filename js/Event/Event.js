

function Event(id, Tag){
	var m_eventId = id;
	var m_eventTag = Tag;
	
	var m_action;
	var m_sender;
	var m_target;
	
	var m_eventChain;
	
	var m_isEventAlive;
	var m_isEventExpired;
	var m_wasEventRecieved;
	
	
	//TO DO: Events needs an observer and a reciever, containing a callback function
	
	//TO DO: Some kind of function call back within the event that sets if the event is expired
	
	this.getEventId = function(){
		return m_eventId;
	}
	this.getEventTag = function(){
		return m_eventTag;
	}
	this.getAction = function(){
		return m_action;
	}
	this.getSender = function(){
		return m_sender;	
	}
	this.getEventTarget = function(){
		return m_target;
	}
	this.getIsEventAlive = function(){
		return m_isEventAlive;
	}
	this.getIsEventExpired = function(){
		return m_isEventExpired;
	}
	this.getWasEventRecieved = function(){
		return m_wasEventRecieved;
	}
	
	
	this.getEventChain = function(){
	 	return m_eventChain;
	}
	
	
	this.setEventId = function(id){
		m_eventId = id;
	}
	this.setEventTag = function(Tag){
		m_eventTag = Tag;
	}
	this.setEventAction = function(action){
		m_action = action;
	}
	this.SetEventSender = function(sender){
		m_sender = sender;
	}
	this.SetEventTarget = function(target){
		m_target = target;
	}
	this.SetIsEventAlive = function(alive){
		m_isEventAlive = alive;
	}
	this.SetisEventExpired = function(expried){
		m_isEventExpired = expired;
	}
	this.SetWasEventRecieved = function(recieved){
		m_wasEventRecieved = recieved;
	}
	
	this.constructEventChain = function(){
		m_eventChain = m_action + "_" + m_sender + "_" + m_target;
	}
	
	
		
}
