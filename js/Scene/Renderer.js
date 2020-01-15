function Renderer()
{
	var _webGlRenderer;
	
	
	this.CreateRenderer = function(boolAntiAlias){
		_webGlRenderer = new THREE.WebGLRenderer({
			antialias: boolAntiAlias,
        	clearAlpha: 1
		});
	}
	
	this.SetGammaInput = function(boolGammaInput){
		_webGlRenderer.gammaInput = boolGammaInput;
	}
	this.SetAammaOutput = function(boolGammaOutput){
		_webGlRenderer.gammaOutput = boolGammaOutput;
	}
	this.SetPhysicallyBasedShading = function(boolPhysicalShading){
		_webGlRenderer.physicallyBasedShading = boolPhysicalShading;
	}
	this.SetRendererSize = function(width, height){
		_webGlRenderer.setSize(width, height);
	}
	this.Render = function(){
		_webGlRenderer.clear();
		_webGlRenderer.render(/*need to access params from either form respective manager classes*/);//Active scene and active camera
	}
}
