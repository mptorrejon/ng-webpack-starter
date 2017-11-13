import angular from 'angular';
import Header from '../components/header/header';
import Body from '../components/body/body';
import Footer from '../components/footer/footer'

let App = angular.module('MyApp',[Header, Body, Footer])
.component('app', {
	template: `
		<p>
			<header-section></header-section>
			<body-section></body-section>
			<footer-section></footer-section>
		</p>`,
	controller: class AppCtrl{
		constructor(){
			console.log("AppCtrl loaded");
			console.log(Header);
		}
	}
}).name;

export default App;