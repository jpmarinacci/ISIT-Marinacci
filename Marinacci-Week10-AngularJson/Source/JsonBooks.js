/**
 * @author JP
 */
var app = angular.module('jsonBooksMod', [])
.factory('bookFactory', function() {'use strict';
	return {
		getBookFromAuthor : function(books, authorName) {
			for (var i = 0; i < books.length; i++) {
				if (books[i].author === authorName) {
					return books[i].book;
				}
			}
		},
		getAuthorFromBook : function(books, bookName) {
			for (var i = 0; i < books.length; i++) {
				if (books[i].book === bookName) {
					return books[i].author;
				}
			}
		}
	};
}); 