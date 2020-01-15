


var MyClass = (function(){

	// constructor
	var LoadAssets = function(){

		// model type/ struct
		Model= function ( name, model ) {

			this.name = name;
			this.model = model;

		};

		// array for all models
		models = new Array();
		
		// loader manager
		manager = new THREE.LoadingManager();
		manager.onProgress = function ( item, loaded, total ) {

			console.log( item, loaded, total );

		};			

	}
	
	LoadAssets.LoadModel = function( modelFile, textureFile){
			// texture

			var texture = new THREE.Texture();

			var loader = new THREE.ImageLoader( manager );
			loader.load( textureFile, function ( image ) {

				texture.image = image;
				texture.needsUpdate = true;

			} );

			// model

			var loader = new THREE.OBJLoader( manager );
			loader.load( modelFile, function ( object ) {				
					
				// 
				object.traverse( function ( child ) {

					if ( child instanceof THREE.Mesh ) {

						// add texture
						child.material.map = texture;					
																				
					}

				} );

				models.push(new Model(modelFile, object));
																												
			} );
					
					
		}
		
		LoadAssets.LoadAllModelAssets = function(){
			
			LoadModel('Models/Player/male02.obj', 'Models/Player/ash_uvgrid01.jpg');
		
		}
		
		LoadAssets.LoadAllSoundAssets = function(){
		
		}
})();