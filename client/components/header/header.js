import angular from 'angular';

let Header =  angular.module('Header', [])
.component('headerSection', {
	template: '<div>HEADER</div>',
	selector: 'header-section',
	controller: class headerCtrl{
		constructor(){
			console.log("Header Ctrl loaded!");
		}
	}
}).name;

export default Header;