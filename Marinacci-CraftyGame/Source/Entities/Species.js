/**
 * @author JP
 */


angular.module('speciesMod', [])
.factory('species', function() {
	return {
			species : [{
			name : 'Dwarf',
			description : 'Typically about 4 feet tall, stocky, lifespan of 300-400 years. Thick hair and beards',
			hitDie : 1,
			languages : ['Common', 'Dwarvish'],
			classes : ['Cleric', 'Fighter', 'Thief']
		}, {
			name : 'Halfling',
			description : 'Typically 3 tall, 60 lbs., with curly hair, no facial hair, lifespan of about 100 years.',
			hitDie : 6,
			languages : ['Common', 'Halfling'],
			classes : ['Cleric', 'Fighter', 'Thief']
		}, {
			name : 'Elf',
			description : 'Typically about 5 feet tall, slender, 130 lbs. Lifespan of 1200 years or more. Pale with dark hair, pointed ears, little or no facial hair.',
			hitDie : 6,
			languages : ['Common', 'Elvish'],
			classes : ['Fighter', 'Magic User']
		}, {
			name : 'Human',
			description : 'Average male is typically 6 feet tall, 175 lbs., and lives about 75 years.',
			hitDie : 1,
			languages : ['Common'],
			classes : ['Any']
		},{
			name: 'Dog',
			description: 'Dogs are about 2-3 feet tall, ranging from 50-125 lbs., and live about 10-20 years.',
			hitDie: 4,
			languages: ['none'],
			classes: ['Mutt','Scavaenger','Attack Dog']
		}]
	}
})