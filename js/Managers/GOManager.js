function GOManager(){

}

GOManager.m_population = new Array();
GOManager.m_totalPopulation = -1;

GOManager.getPopulationArray = function()
{
	return GOManager.m_population;
}
GOManager.GetPopulationCount = function()
{
	return GOManager.m_totalPopulation;
}

GOManager.createGameObject = function(id, tag)
{
	var gameObject = new GameObject();
	gameObject.AssignID(id);
	gameObject.AssignTag(tag);
	GOManager.m_population.push(gameObject);
	GOManager.m_totalPopulation++;
}

GOManager.removeGameObject =  function(id)
{
	if(Err.checkIfGOValid(id)){
		
	} else {
		Debug.Log(Err.Error00006);
	}
}
	

GOManager.getGameObject_id = function(id)
{

	if(Err.checkIfGOValid(id)){
		for(var i = 0; i <= GOManager.m_totalPopulation; i++){
			if(id == GOManager.m_population[i].GetID()){
				return GOManager.m_population[i];
			} else {
				Debug.Log(Err.Error00005);
			}
		}
	}
}

GOManager.LoadScene = function(id, name, textureArray, model, x, y, z)
{
	GOManager.createGameObject(id,name);
	var gameObject = GOManager.getGameObject_id(id);
	
	var tc = new TransformComponent();
	var matc = new MaterialComponent();
	var mc = new MeshComponent();
	
	gameObject.AssignTC(tc);
	gameObject.AssignMATC(matc);
	gameObject.AssignMC(mc);
	
	tc.AssignPosition_f(x,y,z);
	matc.LoadTextureArray(textureArray);
	mc.LoadModel(model);
}

GOManager.CreateStaticObject = function(id, name, texture, model, x, y, z)
{
	GOManager.createGameObject(id,name);
	var gameObject = GOManager.getGameObject_id(id);
	
	var tc = new TransformComponent();
	var matc = new MaterialComponent();
	var mc = new MeshComponent();
	
	gameObject.AssignTC(tc);
	gameObject.AssignMATC(matc);
	gameObject.AssignMC(mc);
	
	tc.AssignPosition_f(x,y,z);
	matc.LoadTexture(texture);
	mc.LoadModel(model);
}



	























