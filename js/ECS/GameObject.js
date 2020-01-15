
/**
 * Description
 * @method GameObject
 * @return 
 */
function GameObject(){

	var m_transformComponent = new TransformComponent();
	var m_materialComponent = new MaterialComponent();
	var m_meshComponent = new MeshComponent();
	var m_animationComponent = new AnimationComponent(); 
	var m_lightingComponent = new LightingComponent();
	
	var m_isStatic;
	var m_ID;
	var m_tag;

	var _containsTC;
	var _containsMC;
	var _containsMATC;
	var _containsPC;
	var _containsCC;
	var _containsAC;
	var _containsLC;
	
	
	this.Update = function()
	{
		//We need to detect that the transform component has been assigned to this game obejct and then subsequently
		//detect this against compoents that are dependant on this TC and then chain them against each other,testing as we move
		//This update call will be used within the scen graphing system
	}

	/**
	 * Description
	 * @method ContainsTC
	 * @return _containsTC
	 */
	this.ContainsTC = function()
	{
		return _containsTC;
	}
 
	/**
	 * Description
	 * @method ContainsMC
	 * @return _containsMC
	 */
	this.ContainsMC = function()
	{
		return _containsMC;
	}
	/**
	 * Description
	 * @method ContainsMATC
	 * @return _containsMATC
	 */
	this.ContainsMATC = function()
	{
		return _containsMATC;
	}
	/**
	 * Description
	 * @method ContainsPC
	 * @return _containsPC
	 */
	this.ContainsPC = function()
	{
		return _containsPC;
	}
	/**
	 * Description
	 * @method ContainsCC
	 * @return _containsCC
	 */
	this.ContainsCC = function()
	{
		return _containsCC;
	}
	
	this.ContainsLC = function()
	{
		return _containsLC;
	}
	
	/**
	 * Description
	 * @method DoesContainTC
	 * @param {} isTC
	 * @return 
	 */
	this.DoesContainTC = function(isTC)
	{
		_containsTC = isTC;
	}
	
	this.DoesContainLC = function(isLC)
	{
		_containsLC = isLC;
	}
	
	/**
	 * Description
	 * @method DoesContainMC
	 * @param {} isMC
	 * @return 
	 */
	this.DoesContainMC = function(isMC)
	{
		_containsMC = isMC;
	}
	/**
	 * Description
	 * @method DoesContainMATC
	 * @param {} isMATC
	 * @return 
	 */
	this.DoesContainMATC = function(isMATC)
	{
		_containsMATC = isMATC;
	}
	/**
	 * Description
	 * @method DoesContainPC
	 * @param {} isPC
	 * @return 
	 */
	this.DoesContainPC = function(isPC)
	{
		_containsPC = isPC;
	}
	/**
	 * Description
	 * @method DoesContainCC
	 * @param {} isCC
	 * @return 
	 */
	this.DoesContainCC = function(isCC)
	{
		_containsCC = isCC;
	}
	
	/**
	 * Description
	 * @method AssignID
	 * @param {} id
	 * @return 
	 */
	this.AssignID = function(id)
	{
		if(id == -1)
			Debug.Log(Err.Error00001);
		else
			m_ID = id;
		
	}
	/**
	 * Description
	 * @method AssignTag
	 * @param {} tag
	 * @return 
	 */
	this.AssignTag = function(tag)
	{
		if(typeof tag == undefined)
			Debug.Log(Err.Error00027);
		else
			m_tag = tag;
	}
	
	/**
	 * Description
	 * @method GetID
	 * @return m_ID
	 */
	this.GetID = function()
	{
		return m_ID;	
	}
	/**
	 * Description
	 * @method GetTag
	 * @return m_tag
	 */
	this.GetTag = function()
	{
		return m_tag;
	}
	
	this.AssignLC = function(lightingComponent)
	{
		if(typeof lightingComponent == undefined){
			//Debug log error
			return false;
		}else{
			m_lightingComponent = lightingComponent;
			m_lightingComponent.AssignSenderTag(m_tag);
			m_lightingComponent.AssignSenderID(m_ID);
			_containsLC = true;
			return true;
			
		}
	}
	this.GetLC = function()
	{
		if(typeof m_lightingComponent != undefined){
			return m_lightingComponent;
		}else{
			//Debug error output
			return false;
		}
	}
	this.RemoveLC = function()
	{
		if(typeof m_lightingComponent != undefined){
			this.m_lightingComponent = undefined;
			_containsLC = false;
			return true;
		}else{
			//Debug error output
			return false;
		}
	}
	
	/**
	 * Description
	 * @method AssignAC
	 * @param {} animationComponent
	 * @return 
	 */
	this.AssignAC = function(animationComponent)
	{
		if(typeof animationComponent == undefined){
			Debug.Log(Err.Error00047);
			return false;
		}else{
			m_animationComponent = animationComponent;
			m_animationComponent.AssignSenderTag(m_tag);
			m_animationComponent.AssignSenderID(m_ID);
			_containsAC = true;
			return true;
		}
	}
	/**
	 * Description
	 * @method GetAC
	 * @return 
	 */
	this.GetAC = function()
	{
		if(typeof m_animationComponent != undefined){
			return m_animationComponent;
		}else{
			Debug.Log(Err.Error00337);
			return false;
		}
	}
	/**
	 * Description
	 * @method RemoveAC
	 * @return 
	 */
	this.RemoveAC = function()
	{
		if(typeof m_animationComponent != undefined){
			this.m_animationComponent = undefined;
			_containsAC = false;
			return true;
		}else{
			Debug.Log(Err.Error00037);
			return false;
		}
	}
	
	
	/**
	 * Description
	 * @method AssignMATC
	 * @param {} materialComponent
	 * @return 
	 */
	this.AssignMATC = function(materialComponent)
	{
		if(typeof materialComponent == undefined){
			Debug.Log(Err.Error00047);
			return false;
		}else{
			m_materialComponent = materialComponent;
			m_materialComponent.AssignSenderTag(m_tag);
			m_materialComponent.AssignSenderID(m_ID);
			_containsMATC = true;
			return true;
		}
	}
	/**
	 * Description
	 * @method GetMATC
	 * @return 
	 */
	this.GetMATC = function()
	{
		if(typeof m_materialComponent != undefined){
			return m_materialComponent;
		}else{
			Debug.Log(Err.Error00337);
			return false;
		}
	}
	/**
	 * Description
	 * @method RemoveMATC
	 * @return 
	 */
	this.RemoveMATC = function()
	{
		if(typeof m_materialComponent != undefined){
			this.m_materialComponent = undefined;
			_containsMATC = false;
			return true;
		}else{
			Debug.Log(Err.Error00037);
			return false;
		}
	}
	
	/**
	 * Description
	 * @method AssignMC
	 * @param {} meshComponent
	 * @return 
	 */
	this.AssignMC = function(meshComponent)
	{
		if(typeof meshComponent == undefined){
			Debug.Log(Err.Error00077);
			return false;
		}else if(typeof m_transformComponent == undefined){
			Debug.Log(Err.Error00017);
			return false;
		}else{
			m_meshComponent = meshComponent;
			m_meshComponent.AssignSenderTag(m_tag);
			m_meshComponent.AssignSenderId(m_ID);
			_containsMC = true;
			return true;
		}
	}
	/**
	 * Description
	 * @method GetMC
	 * @return 
	 */
	this.GetMC = function()
	{
		if(typeof m_meshComponent != undefined){
			return m_meshComponent;
		}else{
			Debug.Log(Err.Error00117);
			return false;
		}
	}
	/**
	 * Description
	 * @method RemoveMC
	 * @return 
	 */
	this.RemoveMC = function()
	{
		if(typeof m_meshComponent != undefined){
			this.m_meshComponent = undefined;
			_containsMC = false;
			return true;
		}else{
			Debug.Log(Err.Error00117);
			return false;
		}
	}

	/**
	 * Description
	 * @method AssignTC
	 * @param {} transformComponent
	 * @return 
	 */
	this.AssignTC = function(transformComponent)
	{
		if(typeof transformComponent == undefined){
			Debug.Log(Err.Error00007);
			return false;
		}else{
			m_transformComponent = transformComponent;
			m_transformComponent.AssignSenderTag(m_tag);
			m_transformComponent.AssignSenderId(m_ID);
			_containsTC = true;
			return true;
		}
			
	}

	/**
	 * Description
	 * @method GetTC
	 * @return 
	 */
	this.GetTC = function()
	{
		if(typeof m_transformComponent != undefined){
			return m_transformComponent;
		}else{
			Debug.Log(Err.Error00017);
			return false;
		}
			
	}
	
	/**
	 * Description
	 * @method RemoveTC
	 * @return 
	 */
	this.RemoveTC = function()
	{
		if(typeof m_transformComponent != undefined){
			this.m_transformComponent = undefined;
			_containsTC = false;
			return true;
		}else{
			Debug.Log(Err.Error00017);
			return false;
		}
	}

	/**
	 * Description
	 * @method AssignIsStatic
	 * @param {} isStatic
	 * @return 
	 */
	this.AssignIsStatic = function(isStatic)
	{
		m_isStatic = isStatic;
	}

	/**
	 * Description
	 * @method GetIsStatic
	 * @return m_isStatic
	 */
	this.GetIsStatic = function()
	{
		return m_isStatic;
	}

}

