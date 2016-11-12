import { EventEmitter } from "events";
import Dispatcher from "../Dispatcher";

class Store1 extends EventEmitter {

	constructor(){
		super();
		this.element = [
		];
		this.NumriFaqeve = [
		];
	}
	getAll(){
		var Array_qe_Shfaqet = JSON.parse(localStorage['Array qe shfaqet']);
		this.element = Array_qe_Shfaqet;
		return this.element;
	}
	getNumrinEFaqeve(){
		var NumriF = JSON.parse(localStorage['nr_faqeve']);
		this.NumriFaqeve = NumriF;
		return this.NumriFaqeve;
	}

	handleActions(action){
		/*
			Gjen cili aksion duhet Kryer
		*/
		switch(action.type){
			case "NEXTPAGE":{
				this.nextPage();
				break;
			}
			case "PREVIOUSPAGE":{
				this.previousPage();
				break;
			}
			case "SORT":{
				const cmimiZgjedhur = action.c;
				const vendiZgjedhur = action.v;
				const madhesiaZgjedhur = action.m;
				this.sortReklamat(vendiZgjedhur,madhesiaZgjedhur,cmimiZgjedhur);
				break;
			}
			case "FAQIA":{
				const NumriFaqes = action.numri;
				this.shfaqFaqen(NumriFaqes);
				break;
			}
		}
		
	}
	shfaqFaqen(NumriFaqes){
		/*
			Hap faqen e zgjedhur nga perdoruesi
			Merr Nr e faqes dhe me pas gjen elementet qe i perkasin asaj faqeje
			Ruan elementet ne local storage dhe me pas i shfaq
		*/

		var NumriF = JSON.parse(localStorage['nr_faqeve']);
		this.NumriFaqeve = NumriF;
		if(NumriFaqes<this.NumriFaqeve.length-1){
			var x = JSON.parse(localStorage['mundesite']);
			var b = x.slice(NumriFaqes*8,(NumriFaqes*8) +8);

			var JSON_array_qe_Shfaqet = JSON.stringify(b);
			localStorage.setItem('Array qe shfaqet',JSON_array_qe_Shfaqet);
		}
		else{
			var x = JSON.parse(localStorage['mundesite']);
			var b = x.slice(NumriFaqes*8);

			var JSON_array_qe_Shfaqet = JSON.stringify(b);
			localStorage.setItem('Array qe shfaqet',JSON_array_qe_Shfaqet);
		}
		this.element=b;
		this.emit("change");
	}
	nextPage()
	{
		/*
			Gjendet numri aktual i faqes.
			Kontrollohet nese ku nr eshte < this.NumriFaqeve.length-1 ---> Numri max i faqes
			Nese po zvoglohet Numri i faqes dhe me pas shfaqen elementet perkates nga [FaqiaAktuale*8,(FaqiaAktuale*8)+8)]
			Nese Jo dmth qe jemi ne faqen e fundit
			
			example: [0,1,2] jane nr e faqeve
					 1. nese jemi ne faqen 2 dmth qe FaqiaAktuale = this.NumriFaqeve.length-1 => nuk ka faqe me pas 
					    => Smund te kalojm me pas
					 2. nese jemi ne faqen 0 ose 1 dmth FaqiaAktuale < this.NumriFaqeve.length-1 => Ka faqe pas
		*/
		FaqiaAktuale = JSON.parse(localStorage['faqia_aktuale']);
		var NumriF = JSON.parse(localStorage['nr_faqeve']);
		this.NumriFaqeve = NumriF;

		if(FaqiaAktuale< this.NumriFaqeve.length-1){

			FaqiaAktuale=FaqiaAktuale+1;

			var JSON_Faqia_Aktuale = JSON.stringify(FaqiaAktuale);
			localStorage.setItem('faqia_aktuale',JSON_Faqia_Aktuale);

			if(FaqiaAktuale<this.NumriFaqeve.length-1){
				var x = JSON.parse(localStorage['mundesite']);
				var b = x.slice(FaqiaAktuale*8,(FaqiaAktuale*8) +8);

				var JSON_array_qe_Shfaqet = JSON.stringify(b);
				localStorage.setItem('Array qe shfaqet',JSON_array_qe_Shfaqet);
			}
			else{
				var x = JSON.parse(localStorage['mundesite']);
				var b = x.slice(FaqiaAktuale*8);

				var JSON_array_qe_Shfaqet = JSON.stringify(b);
				localStorage.setItem('Array qe shfaqet',JSON_array_qe_Shfaqet);
			}
			this.element=b;
			this.emit("change");
		}
	}
	previousPage()
	{
		/*
			Gjendet numri aktual i faqes.
			Kontrollohet nese ku nr eshte >= 0
			Nese po zvoglohet Numri i faqes dhe me pas shfaqen elementet perkates nga [FaqiaAktuale*8,(FaqiaAktuale*8)+8)]
		*/
		FaqiaAktuale = JSON.parse(localStorage['faqia_aktuale']);

		if(FaqiaAktuale>=0){

			FaqiaAktuale=FaqiaAktuale-1;

			var JSON_Faqia_Aktuale = JSON.stringify(FaqiaAktuale);
			localStorage.setItem('faqia_aktuale',JSON_Faqia_Aktuale);

			if(FaqiaAktuale>=0){
				var x = JSON.parse(localStorage['mundesite']);
				var b = x.slice(FaqiaAktuale*8,(FaqiaAktuale*8)+8);

				var JSON_array_qe_Shfaqet = JSON.stringify(b);
				localStorage.setItem('Array qe shfaqet',JSON_array_qe_Shfaqet);
			}
			this.element=b;
			this.emit("change");
		}
	}

	sortReklamat(VendiZgjedhur,MadhesiaZgjedhur,CmimiZgjedhur){
		/*
			Me ane te ketij funksjoni behet gjetja e te gjithe elemnteve qe permbushin kushtet e perdoruesit.
			Te gjitha elementet e mundshme futen ne Array "el".
			Numri i faqeve gjendet me poshte me formulen: NrFaqeve = Math.floor((el.length-1)/8)
		*/
		el=[];
		NumriFaqeve=[];
		console.log(VendiZgjedhur);
		console.log(MadhesiaZgjedhur);
		console.log(CmimiZgjedhur);
		if(VendiZgjedhur==""&&MadhesiaZgjedhur==""&&CmimiZgjedhur==""){
			el=E;
		}
		else{
			for (var i = 0; i <= E.length-1; i++) {

				var cmimiMundesise = E[i].Cmimi.substring(0,E[i].Cmimi.length-1);
				var madhesiaMundesise = E[i].Madhesia.substring(0,E[i].Madhesia.length-1);

				madhesiaMundesise = parseInt(madhesiaMundesise);
				MadhesiaZgjedhur = parseInt(MadhesiaZgjedhur);

				cmimiMundesise = parseInt(cmimiMundesise);
				CmimiZgjedhur = parseInt(CmimiZgjedhur);

				var vendiMundesise = E[i].Vendi;

				if((VendiZgjedhur==vendiMundesise && CmimiZgjedhur>=cmimiMundesise) && MadhesiaZgjedhur>=madhesiaMundesise){
					el.push(E[i]);
				}
			}
		}


		const NrFaqeve = Math.floor((el.length-1)/8);
		for (var i = 0; i <= NrFaqeve; i++) {
			NumriFaqeve.push(i);
		}

		/*
			Ruajtja ne local storage behet si me poshte:
			var emer = JSON.stringify(objekt);
			localStorage.setItem('emri si do ruhet ne local storage',objekti qe ruhet);

			leximi behet si me poshte :
			var emer = JSON.parse(localStorage['emri i objektit ne local storage']);

			[162-169] ---> ruhen: 1 Gjithe mundesite e gjetura qe plotesojne kushtet e perdoruesit.
								  2 Numri i gjithe faqeve.
								  3 Numri i faqes e cila eshte aktualisht e shfaqur ne ekran.

			[175-176] ---> ruhet: 4 te gjitha elementet qe jane ne faqen aktuale.
		*/
		var JSON_Mundesite = JSON.stringify(el);
		localStorage.setItem('mundesite',JSON_Mundesite);

		var JSON_Numri_Faqeve = JSON.stringify(NumriFaqeve);
		localStorage.setItem('nr_faqeve',JSON_Numri_Faqeve);

		var JSON_Faqia_Aktuale = JSON.stringify(FaqiaAktuale);
		localStorage.setItem('faqia_aktuale',JSON_Faqia_Aktuale);

		/*
			Te gjitha elementet e gjetura ndodhen ne Array "el".
			Ne nje faqe jane 8 elemente qe shfaqen.
			Math.floor((el.length-1)/8) gjen sa faqe me 8 element jane
			this.element mban vetem elementet qe duhen shfaqur

		*/

		if(el.length-1>8){
			var b = el.slice(0,8);
			var JSON_array_qe_Shfaqet = JSON.stringify(b);
			localStorage.setItem('Array qe shfaqet',JSON_array_qe_Shfaqet);
			this.element=b;
		}
		else
		{
			this.element=el;
			var JSON_array_qe_Shfaqet = JSON.stringify(el);
			localStorage.setItem('Array qe shfaqet',JSON_array_qe_Shfaqet);
		}
		this.emit("change");
	}
}
var FaqiaAktuale =0;
var el=[];
var NumriFaqeve=[];
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