import angular from 'angular';

let Footer = angular.module("Footer", [])
.component('footerSection', {
	template: '<div>FOOTER</div>',
	selector: 'footer-section',
	controller: class footerCtrl{
		constructor(){
			console.log("Footer Ctrl loaded");
		}
	}
}).name;

export default Footer;