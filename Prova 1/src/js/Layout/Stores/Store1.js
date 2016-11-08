import { EventEmitter } from "events";
import Dispatcher from "../Dispatcher";

class Store1 extends EventEmitter {

	constructor(){
		super();
		this.element = [
		];
	}
	getAll(){
		return this.element;
	}

	handleActions(action){
		switch(action.type){
			case "NEXTPAGE":{
				this.nextPage();
				break;
			}
			case "SORT":{
				const cmimi = action.c;
				const vendi = action.v;
				const madhesia = action.m;
				this.sortReklamat(vendi,madhesia,cmimi);
				break;
			}
		}
		
	}
	nextPage()
	{
		console.log(el.length-1);
		if(el.length-1 > 8 && g == 1){
			var b = el.splice(0,7);
			this.element = this.element.concat(b);
			console.log("Ka Akoma");
		}
		else if(el.length-1 < 8 && g == 1)
		{
			this.element = this.element.concat(el);
			console.log("Ska Akoma");
			g=0;
		}
		this.emit("change");
	}

	sortReklamat(v,m,c){
		g=1;
		el=[];
		for (var i = 0; i <= E.length-1; i++) {
			var cm = E[i].Cmimi.substring(0,E[i].Cmimi.length-1);
			var madh = E[i].Madhesia.substring(0,E[i].Madhesia.length-1);
			madh = parseInt(madh);
			m = parseInt(m);
			var vnd = E[i].Vendi;
			if((v==vnd && c>=cm) && m>=madh){
				console.log("m " + m);
				console.log("madh " + madh);
				console.log(m >= madh);
				el.push(E[i]);
			}
		}
		if(el.length-1>8){
			var b = el.splice(0,7);
			this.element=b;
		}
		else
		{
			this.element=el;
			g=0;
		}
		this.emit("change");
	}
}

var g=1;
var el=[];
var E = [
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"100m",
				Img:["./js/Layout/Images/1.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:10,
			},
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"100m",
				Img:["./js/Layout/Images/1.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:35,
			},
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"100m",
				Img:["./js/Layout/Images/1.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:34,
			},
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"100m",
				Img:["./js/Layout/Images/1.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:33,
			},
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"100m",
				Img:["./js/Layout/Images/1.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:32,
			},
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"100m",
				Img:["./js/Layout/Images/1.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:31,
			},
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"100m",
				Img:["./js/Layout/Images/1.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:30,
			},
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"100m",
				Img:["./js/Layout/Images/1.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:29,
			},
			{
				Cmimi:"100$",
				Vendi:"Selit",
				Madhesia:"250m",
				Img:["./js/Layout/Images/2.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:25,
			},	
			{
				Cmimi:"100$",
				Vendi:"Selit",
				Madhesia:"250m",
				Img:["./js/Layout/Images/3.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:26,
			},	
			{
				Cmimi:"120$",
				Vendi:"Bllok",
				Madhesia:"110m",
				Img:["./js/Layout/Images/4.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:11,
			},	
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"120m",
				Img:["./js/Layout/Images/5.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:12,
			},
			{
				Cmimi:"100$",
				Vendi:"Selit",
				Madhesia:"250m",
				Img:["./js/Layout/Images/1.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:27,
			},	
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"130m",
				Img:["./js/Layout/Images/8.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:13,
			},	
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"140m",
				Img:["./js/Layout/Images/2.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:14,
			},	
			{
				Cmimi:"100$",
				Vendi:"Myslym Shyr",
				Madhesia:"280m",
				Img:["./js/Layout/Images/5.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:28,
			},
			{
				Cmimi:"100$",
				Vendi:"Myslym Shyr",
				Madhesia:"290m",
				Img:["./js/Layout/Images/5.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:29,
			},
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"150m",
				Img:["./js/Layout/Images/1.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:15,
			},	
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"160m",
				Img:["./js/Layout/Images/2.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:16,
			},	
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"170m",
				Img:["./js/Layout/Images/3.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:17,
			},	
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"180m",
				Img:["./js/Layout/Images/4.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:18,
			},	
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"190m",
				Img:["./js/Layout/Images/3.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:19,
			},	
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"200m",
				Img:["./js/Layout/Images/7.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:20,
			},	
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"210m",
				Img:["./js/Layout/Images/8.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:21,
			},	
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"220m",
				Img:["./js/Layout/Images/2.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:22,
			},	
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"230m",
				Img:["./js/Layout/Images/1.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:23,
			},	
			{
				Cmimi:"100$",
				Vendi:"Bllok",
				Madhesia:"240m",
				Img:["./js/Layout/Images/4.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrCel:"0696969699",
				nrDhomave: 2,
				id:24,
			},		
		];
const Store = new Store1;
Dispatcher.register(Store.handleActions.bind(Store));
window.Dispatcher=Dispatcher;
export default Store;