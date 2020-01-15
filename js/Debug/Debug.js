



function Debug(){
	
	var m_isDebugEnabled;

}




Debug.enableDebug = function(){
	m_isDebugEnabled = true;
	console.log("Debug Enabled");
}
Debug.disableDebug = function(){
	m_isDebugEnabled = false;
	console.log("Debug Disabled");
}

Debug.isDebug = function(){
	/*var temp;
	if(m_isDebugEnabled){
		temp = "Enabled";
}else if(!m_isDebugEnabled){
		temp = "Disabled";
	}
	console.log("Debug is: "+temp);*/
	return m_isDebugEnabled;
}

Debug.Log = function(message){
	if(Debug.isDebug)
		console.log(message);
}

