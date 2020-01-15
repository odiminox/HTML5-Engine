function TwoDAssets(){

	this.loaded = false;

	// 2d asset variables
	this.test1;
	this.test2;
	
	//menu assets
	this.MenuBackground;
	this.StinaLogo;
	this.NewSelected; this.NewUnselected;
	this.LoadSelected; this.LoadUnselected;
	this.SettingsSelected; this.SettingsUnselected;
	this.DLCSelected; this.DLCUnselected;
	this.Blur;
	this.NewMenu; this.LoadMenu; this.SettingsMenu; this.DLCMenu;
	this.StartNewGame;
	
	// guiAssets
	this.GUIBackground;
	
}

// load all the assets
TwoDAssets.prototype.loadAssets = function(){
	
	this.test1 = this.loadImage("Textures/Test1.png");
	this.test2 = this.loadImage("Textures/Test2.png");
	
	// menu
	this.MenuBackground = this.loadImage("Textures/Menu/MenuBackground.png");
	this.StinaLogo = this.loadImage("Textures/Menu/StinaLogo.png");
	this.NewSelected = this.loadImage("Textures/Menu/NewSelected.png"); this.NewUnselected = this.loadImage("Textures/Menu/NewUnselected.png");
	this.LoadSelected = this.loadImage("Textures/Menu/LoadSelected.png"); this.LoadUnselected = this.loadImage("Textures/Menu/LoadUnselected.png");
	this.SettingsSelected = this.loadImage("Textures/Menu/SettingSelected.png"); this.SettingsUnselected = this.loadImage("Textures/Menu/SettingsUnselected.png");
	this.DLCSelected = this.loadImage("Textures/Menu/DLCSelected.png"); this.DLCUnselected = this.loadImage("Textures/Menu/DLCUnselected.png");
	this.Blur = this.loadImage("Textures/Menu/Blur.png");
	this.NewMenu = this.loadImage("Textures/Menu/NewGameMenu.png");
	this.LoadMenu = this.loadImage("Textures/Menu/LoadGameMenu.png");
	this.SettingsMenu = this.loadImage("Textures/Menu/SettingsMenu.png");
	this.DLCMenu = this.loadImage("Textures/Menu/DLCMenu.png");
	this.StartNewGame = this.loadImage("Textures/Menu/StartNewGame.png");
	
	// GUI
	this.GUIBackground = this.loadImage("Textures/GUI/GUIBackground.png");
	
	this.loaded = true;
}

// load each image into a sprite material
TwoDAssets.prototype.loadImage = function(fileName){
	var texture = THREE.ImageUtils.loadTexture( fileName);
			
	var spriteMaterial = new THREE.SpriteMaterial( { map: texture, alignment: THREE.SpriteAlignment.topLeft, opacity: 1 } );
	
	return spriteMaterial;

}

// create separate sprite for each object
TwoDAssets.prototype.createSprite = function(spriteMaterial, position, Xscale, Yscale){
	
	sprite = new THREE.Sprite( spriteMaterial );
	sprite.position.set( position.x, position.y, position.z );
	sprite = this.scaleSprite(sprite, Xscale, Yscale);

	return sprite
}

TwoDAssets.prototype.scaleSprite = function(sprite, Xscale, Yscale){

	var scaleX = sprite.material.map.image.width * Xscale;
	var scaleY = sprite.material.map.image.height * Yscale;

	sprite.scale.set( scaleX, scaleY, 1);

	return sprite
}




