/**
 * @author JP
 */
var app = angular.module('mongoBooksMod', ['ngResource']).constant('BOOKSCONFIG', {
	DB_NAME : 'jpdata',
	COLLECTION : 'Books',
	API_KEY : '8nZ9MUgCVTyWV-8vMfufSdjKb14fArUG'
}).factory('mongoBookFactory', function($resource, BOOKSCONFIG) {'use strict';
	console.log('book data factory called');

	var books = $resource('https://api.mongolab.com/api/1/databases/' + BOOKSCONFIG.DB_NAME + '/collections/' + BOOKSCONFIG.COLLECTION + '/:id', {
		apiKey : BOOKSCONFIG.API_KEY
	}, {
		update : {
			method : 'PUT'
		}
	});

	books.prototype.updateMe = function(callback, errorCallback) {
		console.log("update called");
		return books.update({
			id : this._id.$oid
		}, angular.extend({}, this, {
			_id : undefined
		}), callback, errorCallback);
	};

	books.prototype.getBook = function() {
		return this.book;
	};

	books.prototype.getAuthor = function() {
		return this.author;
	};

	books.prototype.remove = function(cb, errorcb) {
		return books.remove({
			id : this._id.$oid
		}, cb, errorcb);
	};

	books.prototype['delete'] = function(cb, errorcb) {
		return this.remove(cb, errorcb);
	};

	return books;
});
