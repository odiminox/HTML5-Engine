var MenuState = {
	
	Start: 0,
	NewGame: 1,
	LoadGame: 2,
	Settings: 3,
	DLC: 4
};

function Menu(){
	
	// state
	this.menuState = MenuState.Start;
	this.MenuStarted = false;
	
	// vars
	this.NoOfButtons = 4;
	this.ButtonSelected;
	this.Opacity = new Array();
	
	//sprites
	this.Background;
	this.Button = new Array();
	this.Blur = new Array();
	this.Logo;
	this.NewMenu;
	this.LoadMenu;
	this.SettingsMenu;
	this.DLCMenu;
	this.StartNewGame;
	this.SpriteGroup;
	
	// positions
	this.LogoPos;
	this.ButtonPos = new Array();
	this.BlurPos = new Array();
	this.MenuPos;
	this.StartNewGamePos;
		
}

// create sprites positions and scales for each image
Menu.prototype.setMenu = function(scaleX, scaleY){	
	
	// set positions
	this.LogoPos = new THREE.Vector3(10,10,-4);
	for (var i = 0; i < this.NoOfButtons; i++){
		this.ButtonPos[i] = new THREE.Vector3(0, 400 + (i * 60),-4);
		this.BlurPos[i] = new THREE.Vector3(0, 400 + (i * 60) - 20,-4);
	}
	this.MenuPos = new THREE.Vector3(600, 30, -4);
	this.StartNewGamePos = new THREE.Vector3(this.MenuPos.x + 150, this.MenuPos.y + 560, -3);
	
	// set sprites
	this.SpriteGroup = new THREE.Object3D();
	this.Background = twoDAssets.createSprite(twoDAssets.MenuBackground, new THREE.Vector3(0, 0, -5), scaleX, scaleY); this.SpriteGroup.add(this.Background)
	this.Logo = twoDAssets.createSprite(twoDAssets.StinaLogo, this.LogoPos, scaleX, scaleY); this.SpriteGroup.add(this.Logo)
	this.Button[0] = twoDAssets.createSprite(twoDAssets.NewUnselected, this.ButtonPos[0], scaleX, scaleY); this.SpriteGroup.add(this.Button[0])
	this.Button[1] = twoDAssets.createSprite(twoDAssets.LoadUnselected, this.ButtonPos[1], scaleX, scaleY); this.SpriteGroup.add(this.Button[1])
	this.Button[2] = twoDAssets.createSprite(twoDAssets.SettingsUnselected, this.ButtonPos[2], scaleX, scaleY); this.SpriteGroup.add(this.Button[2])
	this.Button[3] = twoDAssets.createSprite(twoDAssets.DLCUnselected, this.ButtonPos[3], scaleX, scaleY); this.SpriteGroup.add(this.Button[3])
	for (var i = 0; i < this.NoOfButtons; i++){
		this.Blur[i] = twoDAssets.createSprite(twoDAssets.Blur.clone(), this.BlurPos[i], scaleX, scaleY); this.SpriteGroup.add(this.Blur[i])
	}
	this.NewMenu = twoDAssets.createSprite(twoDAssets.NewMenu, this.MenuPos, scaleX, scaleY); this.SpriteGroup.add(this.NewMenu);
	this.LoadMenu = twoDAssets.createSprite(twoDAssets.LoadMenu, this.MenuPos, scaleX, scaleY); this.SpriteGroup.add(this.LoadMenu);
	this.SettingsMenu = twoDAssets.createSprite(twoDAssets.SettingsMenu, this.MenuPos, scaleX, scaleY); this.SpriteGroup.add(this.SettingsMenu);
	this.DLCMenu = twoDAssets.createSprite(twoDAssets.DLCMenu, this.MenuPos, scaleX, scaleY); this.SpriteGroup.add(this.DLCMenu);
	this.StartNewGame = twoDAssets.createSprite(twoDAssets.StartNewGame, this.StartNewGamePos, scaleX, scaleY); this.SpriteGroup.add(this.StartNewGame);
	
	// initial scale positions
	this.scale(scaleX, scaleY);
	
	// update blur
	for(var i = 0; i <this.NoOfButtons; i++){
		this.Opacity[i] = 0;
		this.Blur[i].material.opacity = this.Opacity[i];
	}
	
}

Menu.prototype.isLoaded = function(){

	var result = true;
	
	for ( var i = 0; i < this.SpriteGroup.children.length; i ++ ) {
		if(this.SpriteGroup.children[i] == undefined){
			result = false;
			break;
		}

	}

	return result;
}

Menu.prototype.startMenu = function(){

	this.addToScreen(this.SpriteGroup);

	/*
	this.addToScreen(this.Background);
	this.addToScreen(this.Logo);
	
	for (var i = 0; i < this.NoOfButtons; i++){
		this.addToScreen(this.Button[i]);
	}
	this.addToScreen(this.NewMenu);
	this.addToScreen(this.LoadMenu);
	this.addToScreen(this.SettingsMenu);
	this.addToScreen(this.StartNewGame);
	*/
	
	this.NewMenu.visible = false;
	this.LoadMenu.visible = false;
	this.SettingsMenu.visible = false;
	this.DLCMenu.visible = false;
	this.StartNewGame.visible = false;
		
	this.MenuStarted = true;
}

Menu.prototype.mouseDown = function(mouseX, mouseY){
	// buttons
	if (this.buttonClicked(this.Button[0], mouseX, mouseY)){
		this.changeState(MenuState.NewGame);
	}	
	else if (this.buttonClicked(this.Button[1], mouseX, mouseY)){
		this.changeState(MenuState.LoadGame);
	}
	else if (this.buttonClicked(this.Button[2], mouseX, mouseY)){
		this.changeState(MenuState.Settings);
	}	
	else if (this.buttonClicked(this.Button[3], mouseX, mouseY)){
		this.changeState(MenuState.DLC);
	}
	else if (this.buttonClicked(this.NewMenu, mouseX, mouseY) != true){
		this.changeState(MenuState.Start);
	}
	
	// specific for menus
	switch (this.menuState){
		case MenuState.Start:
		
			break;
		case MenuState.NewGame:	
			if (this.buttonClicked(this.StartNewGame, mouseX, mouseY)){
				this.removeAllFromScreen();
				gState = GameState.Game;
				//gState = GameState.LoadGame;
			}
			
			break;
		case MenuState.LoadGame:

		
			break;
		case MenuState.Settings:	
		
			break;
		case MenuState.DLC:		
		
			break;
		default:
			break;
	
	}

}

Menu.prototype.mouseMove = function(mouseX, mouseY){

}

Menu.prototype.changeState = function(newState){
	
	// remove stuff from screen
	switch (this.menuState){
		case MenuState.Start:
		
			break;
		case MenuState.NewGame:
		
			this.NewMenu.visible = false;
			this.StartNewGame.visible = false;
			
			break;
		case MenuState.LoadGame:
		
			this.LoadMenu.visible = false;
		
			break;
		case MenuState.Settings:
		
			this.SettingsMenu.visible = false;
		
			break;
		case MenuState.DLC:
		
			this.DLCMenu.visible = false;
		
			break;
		default:
			break;
	
	}

	this.menuState = newState;
	
	// add stuff from screen
	switch (this.menuState){
		case MenuState.Start:
		
			break;
		case MenuState.NewGame:
			
			this.NewMenu.visible = true;
			this.StartNewGame.visible = true;
			
			break;
		case MenuState.LoadGame:
		
			this.LoadMenu.visible = true;
		
			break;
		case MenuState.Settings:
		
			this.SettingsMenu.visible = true;
		
			break;
		case MenuState.DLC:
		
			this.DLCMenu.visible = true;
		
			break;
		default:
			break;
	
	}
}

Menu.prototype.update = function(mouseX, mouseY){
		
	
	switch (this.menuState){
		case MenuState.Start:
		
			break;
		case MenuState.NewGame:
			
			break;
		case MenuState.LoadGame:
			break;
		case MenuState.Settings:
			break;
		case MenuState.DLC:
			break;
		default:
			break;
	
	}
	
	// update blur if need be
	this.updateBlur();
	
}

Menu.prototype.buttonClicked = function(sprite, mouseX, mouseY){
	
	result = false;
	
	if (this.collided(mouseX, mouseY, 1, 1, sprite.position.x, sprite.position.y, sprite.scale.x, sprite.scale.y)){
		result = true;
	}
	
	return result;
}

Menu.prototype.collided = function(x1, y1, w1, h1, x2, y2, w2, h2){

	result = false;
	
	if (x1 < x2 + w2 && x1 + w1 > x2 &&
		y1 < y2 + h2 && y1 + h1 > y2){

		result = true;
	}		

	return result;
}

Menu.prototype.scale = function(scaleX, scaleY){

	//scale images for all sprites in group
	for ( var i = 0; i < this.SpriteGroup.children.length; i ++ ) {
		this.SpriteGroup.children[i] = twoDAssets.scaleSprite(this.SpriteGroup.children[i], scaleX, scaleY); 
	}
	
	//scale sprite positions
	this.Logo.position.set(scaleX * this.LogoPos.x, scaleY * this.LogoPos.y, this.LogoPos.z);
	for (var i = 0; i < this.NoOfButtons; i++){
		this.Button[i].position.set(scaleX * this.ButtonPos[i].x, scaleY * this.ButtonPos[i].y, this.ButtonPos[i].z);
		this.Blur[i].position.set(scaleX * this.BlurPos[i].x, scaleY * this.BlurPos[i].y, this.BlurPos[i].z);
	}
	this.NewMenu.position.set(scaleX * this.MenuPos.x, scaleY * this.MenuPos.y, this.MenuPos.z);
	this.LoadMenu.position.set(scaleX * this.MenuPos.x, scaleY * this.MenuPos.y, this.MenuPos.z);
	this.SettingsMenu.position.set(scaleX * this.MenuPos.x, scaleY * this.MenuPos.y, this.MenuPos.yz);
	this.DLCMenu.position.set(scaleX * this.MenuPos.x, scaleY * this.MenuPos.y, this.MenuPos.z);
	this.StartNewGame.position.set(scaleX * this.StartNewGamePos.x, scaleY * this.StartNewGamePos.y, this.StartNewGamePos.z);

}

Menu.prototype.updateBlur = function(){
	for (var i = 0; i < this.NoOfButtons; i++){
	
		if (this.buttonClicked(this.Button[i], mouseX, mouseY)){
			//this.Blur[i].material.opacity = 1;
			this.Opacity[i] = 1;
		}
		else {
			this.Opacity[i] = 0;
			//this.Blur[i].material.opacity = 0;
		}
		
	
		if (this.Blur[i].material.opacity < this.Opacity[i]){
			this.Blur[i].material.opacity += 0.1;
		}
		else if(this.Blur[i].material.opacity > this.Opacity[i]){
			this.Blur[i].material.opacity -= 0.1;
		}
		else if(this.Blur[i].material.opacity == 1){
			// crapola
		}
			
	}
}

Menu.prototype.addToScreen = function(sprite){
	scene.add(sprite);
}

Menu.prototype.removeAllFromScreen = function(){

	this.removeFromScreen(this.SpriteGroup);

/*
	this.removeFromScreen(this.Background);
	this.removeFromScreen(this.Logo);
	
	for (var i = 0; i < this.NoOfButtons; i++){
		this.removeFromScreen(this.Button[i]);
	}
	this.removeFromScreen(this.NewMenu);
	this.removeFromScreen(this.LoadMenu);
	this.removeFromScreen(this.SettingsMenu);
	this.removeFromScreen(this.StartNewGame);
	*/
}

Menu.prototype.removeFromScreen = function(sprite){
	scene.remove(sprite);
}

