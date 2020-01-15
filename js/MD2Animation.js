
function MD2Animation(pos, url){
	
	// initiate
	this.pos = pos;
	this.url = url;
	this.controls;
	this.config;
	this.character;
	this.baseCharacter;	
	
	this.load();

}

MD2Animation.prototype.load = function(){

		//CONTROLS
	this.controls = {

		moveForward: false,
		moveBackward: false,
		moveLeft: false,
		moveRight: false

	};
	
	// CHARACTER
	/*
	this.config = {

		baseUrl: "Models/CyberDemonJSON/",

		body: "Cyber.js",
		skins: [ "cyber.jpg", "cyberblightpain1.jpg", "cyberblightpain2.jpg", "cyberblightpain3.jpg", 
				 "cyberbpain1.jpg", "cyberbpain2.jpg", "cyberbpain3.jpg", "cyberlight.jpg", "Cybershot.png"],
		weapons:  [ [ "weapon-light.js", "weapon.jpg" ] ],
		animations: {
			move: "walk",
			idle: "stand",
			jump: "jump",
			attack: "attack",
			crouchMove: "cwalk",
			crouchIdle: "cstand",
			crouchAttach: "crattack"
		},

		walkSpeed: 350,
		crouchSpeed: 175
	};
	*/
	/*
	this.config = {

		baseUrl: "Models/ogro/",

		body: "ogro-light.js",
		skins: [ "grok.jpg", "ogrobase.png", "arboshak.png", "ctf_r.png", "ctf_b.png", "darkam.png", "freedom.png",
				 "gib.png", "gordogh.png", "igdosh.png", "khorne.png", "nabogro.png",
				 "sharokh.png" ],
		weapons:  [ [ "weapon-light.js", "weapon.jpg" ] ],
		animations: {
			move: "run",
			idle: "stand",
			jump: "jump",
			attack: "attack",
			crouchMove: "cwalk",
			crouchIdle: "cstand",
			crouchAttach: "crattack"
		},

		walkSpeed: 350,
		crouchSpeed: 175

	};
	*/
	
	this.config = {

		baseUrl: "Models/Male/",

		body: "male.js",
		skins: [ "diffuse.png"],
		weapons:  [ [ "weapon-light.js", "weapon.jpg" ] ],
		animations: {
			move: "walk",
			idle: "idle",
			jump: "jump",
			attack: "attack",
			crouchMove: "cwalk",
			crouchIdle: "cstand",
			crouchAttach: "crattack"
		},

		walkSpeed: 250,
		crouchSpeed: 175

	};
	
	this.character = new THREE.MD2CharacterComplex();
	this.character.scale = 3;
	this.character.controls = this.controls;

	this.character.loadParts( this.config );

	this.character.enableShadows( true );

	this.character.setWeapon( 0 );
	this.character.setSkin( 0 );

	this.character.root.position.set(this.pos.x, this.pos.y, this.pos.z);


	scene.add( this.character.root );
	
	
	//baseCharacter.loadParts( this.config );

}

MD2Animation.prototype.moveTo = function(newPos){
	this.character.startMove = true;	
	this.character.moving = true;
	this.character.moveToPos = newPos;
}

MD2Animation.prototype.getMoving = function(){
	var result;
	result = this.character.moving;
	
	return result;
}

MD2Animation.prototype.setWalkForward = function(set){
	this.controls.moveForward = set;
}

MD2Animation.prototype.setWalkBackward = function(set){
	this.controls.moveBackward = set;
}

MD2Animation.prototype.setWalkLeft = function(set){
	this.controls.moveLeft = set;
}

MD2Animation.prototype.setWalkRight = function(set){
	this.controls.moveRight = set;
}


