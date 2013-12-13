/**
 * @author Charlie
 */

/* jshint browser: true */

// Load binary assets such as images and audio files
Crafty.scene('Loading', function(){ 'use strict';

	var assets = [
	'Assets/backgrounds.png', 
	'Assets/dog.png',
	'Assets/fourHydrantsSprite.png',
	'Assets/smb_kick.wav',
	'Assets/smb_coin.wav'
	];

	// Load our sprite map image
	Crafty.load(assets, function() {
		Crafty.sprite(48, 48, assets[0], {
			spr_rock : [0, 2],
			spr_bush : [0, 1],
			spr_food: [3, 2]			
		});
	Crafty.sprite(48, assets[2],{
			spr_enemy:[0,0],
			});
		//spr_enemy : {hydrant:[0,0],hydrantPissed:[0,1],hydrantSprayStart:[0,2],hydrantSprayEnd:[0,3]}
	
	//  The main character
	Crafty.sprite(48, assets[1], {
		spr_mainCharacter:  [0, 1],
	});

	// Define our sounds for later use
	Crafty.audio.add({
		marioKick: ['Assets/smb_kick.wav'],
		marioCoin: ['Assets/smb_coin.wav']
	});

	// Display text while loading
	Crafty.e('2D, DOM, Text')
		.attr({
		x: 0,
		y: Crafty.viewport.height / 2 - 24, 
		w: Crafty.viewport.width })
		.text('Loading...');

	// Now that our sprites are ready to draw, start the game
	Crafty.scene('Game');
	});
});

