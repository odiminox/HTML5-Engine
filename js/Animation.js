
function Animation(x,y,z,s){

	this.meshes = new Array();
	this.geometry = new Array();
	this.loaded = new Array();
	this.currentMesh;
	this.noOfMeshes = 0;
	this.currentAnimation = new Array();
	
	this.x = x;
	this.y = y;
	this.z = z;
	this.s = s;
	

}

Animation.prototype.ensureLoop = function( animation ) {

	for ( var i = 0; i < animation.hierarchy.length; i ++ ) {

		var bone = animation.hierarchy[ i ];

		var first = bone.keys[ 0 ];
		var last = bone.keys[ bone.keys.length - 1 ];

		last.pos = first.pos;
		last.rot = first.rot;
		last.scl = first.scl;

	}

}

Animation.prototype.addAnimation = function( geometry, materials, animationNo) {


	//this.ensureLoop( geometry.animation );

	geometry.computeBoundingBox();
	var bb = geometry.boundingBox;

	THREE.AnimationHandler.add( geometry.animation );

	var path = "textures/cube/Park2/";
	var format = '.jpg';
	var urls = [
			path + 'posx' + format, path + 'negx' + format,
			path + 'posy' + format, path + 'negy' + format,
			path + 'posz' + format, path + 'negz' + format
		];


	//var envMap = THREE.ImageUtils.loadTextureCube( urls );

	//var map = THREE.ImageUtils.loadTexture( "textures/ash_uvgrid01.jpg" );

	//var bumpMap = THREE.ImageUtils.generateDataTexture( 1, 1, new THREE.Color() );
	//var bumpMap = THREE.ImageUtils.loadTexture( "textures/water.jpg" );

	for ( var i = 0; i < materials.length; i ++ ) {

		var m = materials[ i ];
		m.skinning = true;
		m.morphTargets = true;

		m.specular.setHSL( 0, 0, 0.1 );

		m.color.setHSL( 0.6, 0, 0.6 );
		m.ambient.copy( m.color );

		//m.map = map;
		//m.envMap = envMap;
		//m.bumpMap = bumpMap;
		//m.bumpScale = 2;

		//m.combine = THREE.MixOperation;
		//m.reflectivity = 0.75;

		m.wrapAround = true;

	}

	this.geometry[animationNo] = geometry;
	
	this.meshes[animationNo] = new THREE.SkinnedMesh( geometry, new THREE.MeshFaceMaterial( materials ) );
	this.meshes[animationNo].position.set( this.x, this.y - bb.min.y * this.s, this.z );
	this.meshes[animationNo].scale.set( this.s, this.s, this.s );
	//scene.add( this.meshes[this.noOfMeshes] );

	this.meshes[animationNo].castShadow = true;
	this.meshes[animationNo].receiveShadow = true;

	this.currentAnimation[animationNo] = new THREE.Animation( this.meshes[animationNo], this.geometry[animationNo].animation.name );
	this.currentAnimation[animationNo].JITCompile = false;
	this.currentAnimation[animationNo].interpolationType = THREE.AnimationHandler.LINEAR;

	// set when everything is loaded
	this.loaded[animationNo] = true;
	
	this.noOfMeshes += 1;		
	
	//this.currentAnimation.play();

};

Animation.prototype.setPosition = function(position){

	for (var i = 0; i < this.noOfMeshes; i++){
		this.meshes[i].position = position;
	}
	//this.meshes[this.currentMesh].position = position;
	
}

Animation.prototype.setCurrentAnimation = function(i){

	this.currentMesh = i;
	
	//this.currentAnimation = null;

	//this.currentAnimation = new THREE.Animation( this.meshes[this.currentMesh], this.geometry[this.currentMesh].animation.name );
	//this.currentAnimation.JITCompile = false;
	//this.currentAnimation.interpolationType = THREE.AnimationHandler.LINEAR;
};

Animation.prototype.startCurrentAnimation = function(){
	
	scene.add( this.meshes[this.currentMesh] );	
	
	this.currentAnimation[this.currentMesh].play();
};

Animation.prototype.stopCurrentAnimation = function(){
	
	this.currentAnimation[this.currentMesh].stop();
};

Animation.prototype.playCurrentAnimation = function(){
	
	this.currentAnimation[this.currentMesh].play();
};

Animation.prototype.pauseCurrentAnimation = function(){
	
	this.currentAnimation[this.currentMesh].pause();
}

Animation.prototype.removeCurrentAnimation = function(){
	
	this.currentAnimation[this.currentMesh].stop();
	
	scene.remove( this.meshes[this.currentMesh] );	
};

Animation.prototype.changeCurrentAnimation = function(i){
	
	this.currentAnimation[this.currentMesh].stop();
	
	scene.remove( this.meshes[this.currentMesh] );	
	
	this.setCurrentAnimation(i);
	
	this.startCurrentAnimation();
	
	
};
