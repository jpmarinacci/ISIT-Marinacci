/**
 * @author JP
 */
var app = angular.module('booksMod', []).factory('bookFactory', function() {'use strict';
	return {
		books : [{
			book : 'Lord of the Rings',
			author : 'J.R. Tolkien'
		}, {
			book : 'The Lion, The Witch and the Wardrobe',
			author : 'C.S. Lewis'
		}, {
			book : 'The Grapes of Wrath',
			author : 'John Steinbeck'
		}, {
			book : 'Lord of the Flies',
			author : 'William Golding'
		}, {
			book : 'Dune',
			author : 'Frank Herbert'
		}, {
			book : 'The Call of the Wild',
			author : 'Jack London'
		}],
		getBookFromAuthor : function(authorName) {
			for (var i = 0; i < this.books.length; i++) {
				if (this.books[i].author === authorName) {
					return this.books[i].book;
				}
			}
		},
		getAuthorFromBook : function(bookName) {
			for (var i = 0; i < this.books.length; i++) {
				if (this.books[i].book === bookName) {
					return this.books[i].author;
				}
			}
		}
	};
}); 