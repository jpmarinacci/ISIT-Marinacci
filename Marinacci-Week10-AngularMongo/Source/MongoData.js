/**
 * @author Charlie Calvert
 */

/* global angular */

angular.module('mongoModule', ['ngResource'])
.constant('CONFIG', {
	DB_NAME: 'elvenlab01',
	COLLECTION: 'address',
	API_KEY: 'qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy'
})
.factory('mongoData', function($resource, CONFIG) { 'use strict';
	console.log('Presidents factory called');
	var Presidents = $resource(
		'https://api.mongolab.com/api/1/databases/' + CONFIG.DB_NAME +
		'/collections/' + CONFIG.COLLECTION + '/:id', {
		apiKey: CONFIG.API_KEY
	},
	{
		update: {method:'PUT'}
	});

	Presidents.prototype.updateMe = function (callback, errorCallback) {
		console.log("update called");
		return Presidents.update(
			{id:this._id.$oid},
			angular.extend({}, this, {_id:undefined}),
			callback,
			errorCallback);
	};

	Presidents.prototype.getFirstName = function() {
		return this.firstName;
	};

	Presidents.prototype.getLastName = function() {
		return this.lastName;
	};

	Presidents.prototype.address = function() {
		return this.address;
	};

	Presidents.prototype.city = function() {
		return this.city;
	};

	Presidents.prototype.state = function() {
		return this.state;
	};

	Presidents.prototype.phoneMobile = function() {
		return this.phoneMobile;
	};

	Presidents.prototype.phoneHome = function() {
		return this.phoneHome;
	};

	Presidents.prototype.email = function() {
		return this.email;
	};

	Presidents.prototype.remove = function (cb, errorcb) {
		return Presidents.remove({id:this._id.$oid}, cb, errorcb);
	};

	Presidents.prototype['delete'] = function (cb, errorcb) {
		return this.remove(cb, errorcb);
	};

	return Presidents;

	// return { a: 2 };
});
