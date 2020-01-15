



function Sound(sources, radius, position, volume){

	var audio = document.createElement( 'audio' );
	
	audio.volume = volume;

	for ( var i = 0; i < sources.length; i ++ ) {

		var source = document.createElement( 'source' );
		source.src = sources[ i ];

		audio.appendChild( source );

	}
	
	// add function for 3D
	this.Update = function ( listenPos ) {

		//gets distance between sound point and position you want to hear from
		var distance = position.distanceTo( listenPos );

		// compare to see if close enough to hear
		if ( distance <= radius ) {

			audio.volume = volume * ( 1 - distance / radius );

		} else {

			audio.volume = 0;

		}

	}
	
	this.Play = function(){
		
		audio.play();
	
	}
	
	this.Pause = function(){
		
		audio.pause();
	
	}
	
	this.Loop = function(){
	
		audio.loop = true;
	}
	
	this.UnLoop = function(){
	
		audio.loop = false;
	}
	
	this.Stop = function(){
		
		audio.currentTime = 0;
		audio.pause();
	
	}
	
	this.SetVolume = function(newVolume){
		//between 0 and 1
		volume = newVolume;
		audio.volume = volume;
	
	}
	
	this.SetPosition = function(newPosition){
		position = newPosition;
	
	}

}

