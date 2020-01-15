

function GUI(){
	
	this.MenuStarted = false;
	
	//sprites
	this.Background;
}

GUI.prototype.setGUI = function(scaleX, scaleY){
	
	//set sprites
	this.SpriteGroup = new THREE.Object3D();
	this.Background = twoDAssets.createSprite(twoDAssets.GUIBackground, new THREE.Vector3(0, 0, -5), scaleX, scaleY); this.SpriteGroup.add(this.Background)
	
	// initial scale positions
	this.scale(scaleX, scaleY);
	
}

GUI.prototype.startGUI = function(){
	this.addToScreen(this.SpriteGroup);
	
	MenuStarted = true;
}

GUI.prototype.scale = function(scaleX, scaleY){

	//scale images for all sprites in group
	for ( var i = 0; i < this.SpriteGroup.children.length; i ++ ) {
		this.SpriteGroup.children[i] = twoDAssets.scaleSprite(this.SpriteGroup.children[i], scaleX, scaleY); 
	}
	
	//scale sprite positions
	//this.Logo.position.set(scaleX * this.LogoPos.x, scaleY * this.LogoPos.y, this.LogoPos.z);

}

GUI.prototype.addToScreen = function(sprite){
	scene.add(sprite);
}

GUI.prototype.removeAllFromScreen = function(){
	this.removeFromScreen(this.SpriteGroup);
}

GUI.prototype.removeFromScreen = function(sprite){
	scene.remove(sprite);
}