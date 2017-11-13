import angular from 'angular';

let Body = angular.module('Body', []).
component("bodySection", {
	template: '<div>BODY</div>',
	selector: 'bodySection',
	controller: class bodyCtrl{
		constructor(){
			console.log("Body Ctrl loaded!");
		}
	}
}).name;

export default Body;