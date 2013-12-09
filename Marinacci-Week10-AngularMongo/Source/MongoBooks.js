/**
 * @author JP
 */
var app = angular.module('mongoBooksMod', ['ngResource'])
.constant('CONFIG', {
    DB_NAME: 'jpdata',
    COLLECTION: 'Books',
    API_KEY: '8nZ9MUgCVTyWV-8vMfufSdjKb14fArUG'
})
.factory('mongoBookFactory', function($resource, CONFIG) {
	console.log('book data factory called');
	
	var books = $resource(
        'https://api.mongolab.com/api/1/databases/' + CONFIG.DB_NAME + 
        '/collections/' + CONFIG.COLLECTION + '/:id', {      
        apiKey: CONFIG.API_KEY     
    },
    {
        update: {method:'PUT'}
    });

    books.prototype.updateMe = function (callback, errorCallback) {
        console.log("update called");
        return books.update(
            {id:this._id.$oid}, 
            angular.extend({}, this, {_id:undefined}), 
            callback, 
            errorCallback);
    };
    
    books.prototype.getBook= function() {
      return this.book;
    };
    
    books.prototype.getAuthor = function() {
    	return this.author;
    };  
    
    books.prototype.remove = function (cb, errorcb) {
      return books.remove({id:this._id.$oid}, cb, errorcb);
    };

	books.prototype['delete'] = function (cb, errorcb) {
      return this.remove(cb, errorcb);
    };
    
	/*getBookFromAuthor : function(authorName){
   		for(var i=0;i < this.books.length; i++){
   			if(this.books[i].author===authorName){
   				return this.books[i].book;
   			}
   		}
   	},
   	getAuthorFromBook: function(bookName){
   		for(var i=0;i < this.books.length; i++){
   			if(this.books[i].book===bookName){
   				return this.books[i].author;
   			}
   		}
   	}*/
    return books;
});