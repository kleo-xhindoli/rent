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
		if(U_Thirr==false){
			this.Reload();
			U_Thirr=true;
		}
		return this.element;
	}
	getNumrinEFaqeve(){
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
				const llojiZgjedhur = action.ll;
				const numriDhomave_i_Zgjedhur = action.dh;
				const mobilimiZgjedhur = action.mob;
				this.sortReklamat(vendiZgjedhur,madhesiaZgjedhur,cmimiZgjedhur,llojiZgjedhur,numriDhomave_i_Zgjedhur,mobilimiZgjedhur);
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
			var b = el.slice(NumriFaqes*8,(NumriFaqes*8) +8);
		}

		else{
			var b = el.slice(NumriFaqes*8);
		}
		this.element=b;
		var JSON_Faqia_Aktuale = JSON.stringify(NumriFaqes);
		localStorage.setItem('faqia_aktuale',JSON_Faqia_Aktuale);

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

		if(FaqiaAktuale < this.NumriFaqeve.length-1){

			FaqiaAktuale=FaqiaAktuale+1;

			var JSON_Faqia_Aktuale = JSON.stringify(FaqiaAktuale);
			localStorage.setItem('faqia_aktuale',JSON_Faqia_Aktuale);

			if(FaqiaAktuale<this.NumriFaqeve.length-1 && FaqiaAktuale>=0){
				var b = el.slice(FaqiaAktuale*8,(FaqiaAktuale*8) +8);
			}
			else{
				var b = el.slice(FaqiaAktuale*8);
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

		if(FaqiaAktuale>0){

			FaqiaAktuale=FaqiaAktuale-1;

			var JSON_Faqia_Aktuale = JSON.stringify(FaqiaAktuale);
			localStorage.setItem('faqia_aktuale',JSON_Faqia_Aktuale);

			if(FaqiaAktuale>=0){
				var b = el.slice(FaqiaAktuale*8,(FaqiaAktuale*8)+8);
			}
			this.element=b;
			this.emit("change");
		}
	}

	sortReklamat(VendiZgjedhur,MadhesiaZgjedhur,CmimiZgjedhur,LlojiZgjedhur,NumriDhomave_i_Zgjedhur,MobilimiZgjedhur){
		/*
			Me ane te ketij funksjoni behet gjetja e te gjithe elemnteve qe permbushin kushtet e perdoruesit.
			Te gjitha elementet e mundshme futen ne Array "el".
			Numri i faqeve gjendet me poshte me formulen: NrFaqeve = Math.floor((el.length-1)/8)
		*/
		el=[];
		NumriFaqeve=[];

		var Vendi_temp = VendiZgjedhur;
		var LlojiZgjedhur_temp = LlojiZgjedhur;
		var NumriDhomave_i_Zgjedhur_temp = NumriDhomave_i_Zgjedhur;
		var MobilimiZgjedhur_temp = MobilimiZgjedhur;

		if(VendiZgjedhur==""&&MadhesiaZgjedhur==""&&CmimiZgjedhur==""&&LlojiZgjedhur==""&&NumriDhomave_i_Zgjedhur==""&&MobilimiZgjedhur==""){
			el=E;
		}
		else{

			if(MadhesiaZgjedhur==""){
				MadhesiaZgjedhur=10000000;
			}
			if(CmimiZgjedhur==""){
				CmimiZgjedhur=100000;
			}
			if(VendiZgjedhur==""){
				VendiZgjedhur=".";
			}
			if(LlojiZgjedhur==""){
				LlojiZgjedhur=".";
			}
			if(NumriDhomave_i_Zgjedhur==""){
				NumriDhomave_i_Zgjedhur=".";
			}
			if(MobilimiZgjedhur==""){
				MobilimiZgjedhur=".";
			}

			for (var i = 0; i <= E.length-1; i++) {

				var cmimiMundesise = E[i].Cmimi.substring(0,E[i].Cmimi.length-1);
				var madhesiaMundesise = E[i].Madhesia.substring(0,E[i].Madhesia.length-1);
				var llojiMundesise = E[i].Lloji;
				var numriDhomaveMundesise = E[i].nrDhomave;
				var mobilimiMundesise = E[i].Mobilimi;

				madhesiaMundesise = parseInt(madhesiaMundesise);
				MadhesiaZgjedhur = parseInt(MadhesiaZgjedhur);

				cmimiMundesise = parseInt(cmimiMundesise);
				CmimiZgjedhur = parseInt(CmimiZgjedhur);

				var vendiMundesise = E[i].Vendi;

				if(vendiMundesise.includes(VendiZgjedhur) && CmimiZgjedhur>=cmimiMundesise && MadhesiaZgjedhur>=madhesiaMundesise && llojiMundesise.includes(LlojiZgjedhur) && numriDhomaveMundesise.includes(NumriDhomave_i_Zgjedhur) && mobilimiMundesise.includes(MobilimiZgjedhur)){
					el.push(E[i]);
				}
			}
		}


		const NrFaqeve = Math.floor((el.length-1)/8);
		for (var i = 0; i <= NrFaqeve; i++) {
			NumriFaqeve.push(i);
		}

		this.NumriFaqeve = NumriFaqeve;
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
		var JSON_Numri_Faqeve = JSON.stringify(NumriFaqeve);
		localStorage.setItem('nr_faqeve',JSON_Numri_Faqeve);

		var JSON_Faqia_Aktuale = JSON.stringify(0);
		localStorage.setItem('faqia_aktuale',JSON_Faqia_Aktuale);

		var Zgedhjet_e_Perdoruesit =[Vendi_temp, MadhesiaZgjedhur, CmimiZgjedhur, LlojiZgjedhur_temp, NumriDhomave_i_Zgjedhur_temp, MobilimiZgjedhur_temp];

		var JSON_Zgjedhjet = JSON.stringify(Zgedhjet_e_Perdoruesit);
		localStorage.setItem('Zgjedhjet',JSON_Zgjedhjet);

		/*
			Te gjitha elementet e gjetura ndodhen ne Array "el".
			Ne nje faqe jane 8 elemente qe shfaqen.
			Math.floor((el.length-1)/8) gjen sa faqe me 8 element jane
			this.element mban vetem elementet qe duhen shfaqur

		*/

		if(el.length-1>8){
			var b = el.slice(0,8);
			this.element=b;
		}
		else
		{
			this.element=el;
		}
		this.emit("change");
		U_Thirr=true;
	}

	Reload(){

		var Zgjedhjet = JSON.parse(localStorage['Zgjedhjet']);

		var VendiZgjedhur = Zgjedhjet[0];
		var MadhesiaZgjedhur = Zgjedhjet[1];
		var CmimiZgjedhur = Zgjedhjet[2];
		var LlojiZgjedhur = Zgjedhjet[3];
		var NumriDhomave_i_Zgjedhur = Zgjedhjet[4];
		var MobilimiZgjedhur = Zgjedhjet[5];
		el=[];
		NumriFaqeve=[];

		if(VendiZgjedhur==""&&MadhesiaZgjedhur==""&&CmimiZgjedhur==""&&LlojiZgjedhur==""&&NumriDhomave_i_Zgjedhur==""&&MobilimiZgjedhur==""){
			el=E;
		}
		else{

			if(MadhesiaZgjedhur==""){
				MadhesiaZgjedhur=10000000;
			}
			if(CmimiZgjedhur==""){
				CmimiZgjedhur=100000;
			}
			if(VendiZgjedhur==""){
				VendiZgjedhur=".";
			}
			if(LlojiZgjedhur==""){
				LlojiZgjedhur=".";
			}
			if(NumriDhomave_i_Zgjedhur==""){
				NumriDhomave_i_Zgjedhur=".";
			}
			if(MobilimiZgjedhur==""){
				MobilimiZgjedhur=".";
			}

			for (var i = 0; i <= E.length-1; i++) {

				var cmimiMundesise = E[i].Cmimi.substring(0,E[i].Cmimi.length-1);
				var madhesiaMundesise = E[i].Madhesia.substring(0,E[i].Madhesia.length-1);
				var llojiMundesise = E[i].Lloji;
				var numriDhomaveMundesise = E[i].nrDhomave;
				var mobilimiMundesise = E[i].Mobilimi;

				madhesiaMundesise = parseInt(madhesiaMundesise);
				MadhesiaZgjedhur = parseInt(MadhesiaZgjedhur);

				cmimiMundesise = parseInt(cmimiMundesise);
				CmimiZgjedhur = parseInt(CmimiZgjedhur);

				var vendiMundesise = E[i].Vendi;

				if(vendiMundesise.includes(VendiZgjedhur) && CmimiZgjedhur>=cmimiMundesise && MadhesiaZgjedhur>=madhesiaMundesise && llojiMundesise.includes(LlojiZgjedhur) && numriDhomaveMundesise.includes(NumriDhomave_i_Zgjedhur) && mobilimiMundesise.includes(MobilimiZgjedhur)){
					el.push(E[i]);
					console.log("U Fut");
				}
			}
		}


		const NrFaqeve = Math.floor((el.length-1)/8);
		for (var i = 0; i <= NrFaqeve; i++) {
			NumriFaqeve.push(i);
		}
		this.NumriFaqeve = NumriFaqeve;

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
		var JSON_Numri_Faqeve = JSON.stringify(NumriFaqeve);
		localStorage.setItem('nr_faqeve',JSON_Numri_Faqeve);

		/*
			Te gjitha elementet e gjetura ndodhen ne Array "el".
			Ne nje faqe jane 8 elemente qe shfaqen.
			Math.floor((el.length-1)/8) gjen sa faqe me 8 element jane
			this.element mban vetem elementet qe duhen shfaqur

		*/

		if(el.length-1>8){
			var b = el.slice(0,8);
			this.element=b;
		}
		else
		{
			this.element=el;
		}
		this.emit("change");
	}
}
var U_Thirr = false;
var FaqiaAktuale;
var el=[];
var NumriFaqeve=[];
var E = [
			{
				Cmimi:"100$",
				Vendi:"Dajt.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/8.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:10000000,
			},
			{
				Cmimi:"100$",
				Vendi:"Dajt.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/8.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:10,
			},
			{
				Cmimi:"100$",
				Vendi:"Dajt.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/7.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:35,
			},
			{
				Cmimi:"100$",
				Vendi:"Bllok.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/6.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:34,
			},
			{
				Cmimi:"100$",
				Vendi:"Kamez.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/6.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:33,
			},
			{
				Cmimi:"100$",
				Vendi:"Selit e Vogel.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/6.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:32,
			},
			{
				Cmimi:"100$",
				Vendi:"Kamez.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/5.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:31,
			},
			{
				Cmimi:"100$",
				Vendi:"Selit e Vogel.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/4.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Apartament.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:30,
			},
			{
				Cmimi:"100$",
				Vendi:"Medrese.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/4.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:29,
			},
			{
				Cmimi:"100$",
				Vendi:"Medrese.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/3.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:25,
			},	
			{
				Cmimi:"100$",
				Vendi:"Bllok.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/2.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:26,
			},	
			{
				Cmimi:"100$",
				Vendi:"Medrese.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/1.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:11,
			},	
			{
				Cmimi:"100$",
				Vendi:"Bllok.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/8.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:12,
			},
			{
				Cmimi:"100$",
				Vendi:"Medrese.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/7.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:27,
			},	
			{
				Cmimi:"100$",
				Vendi:"Selit.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/6.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Apartament.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:13,
			},	
			{
				Cmimi:"100$",
				Vendi:"Selit.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/5.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:14,
			},	
			{
				Cmimi:"100$",
				Vendi:"Bllok.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/3.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:28,
			},
			{
				Cmimi:"100$",
				Vendi:"Selit.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/4.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:29,
			},
			{
				Cmimi:"100$",
				Vendi:"Myslym Shyr.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/2.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:15,
			},	
			{
				Cmimi:"100$",
				Vendi:"Myslym Shyr.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/1.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:16,
			},	
			{
				Cmimi:"100$",
				Vendi:"Myslym Shyr.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/8.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Apartament.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:17,
			},	
			{
				Cmimi:"100$",
				Vendi:"Bllok.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/7.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:18,
			},	
			{
				Cmimi:"100$",
				Vendi:"Myslym Shyr.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/6.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:19,
			},	
			{
				Cmimi:"100$",
				Vendi:"Bllok.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/5.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:20,
			},	
			{
				Cmimi:"100$",
				Vendi:"Bllok.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/4.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Apartament.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:21,
			},	
			{
				Cmimi:"100$",
				Vendi:"Myslym Shyr.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/3.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Apartament.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:22,
			},	
			{
				Cmimi:"100$",
				Vendi:"Bllok.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/2.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:23,
			},	
			{
				Cmimi:"100$",
				Vendi:"Myslym Shyr.",
				Madhesia:"100m",
				Img:["./js/Layout/Images/1.png","./js/Layout/Images/6.png",],
				NrF: 2,
				nrDhomave:"2+1.",
				nrCel:"0696969699",
				Email:"reipano69@yahoo.com",
				Emri_i_Plote:"Saje Qorri",
				Pershkrimi:"Shpi super",
				Lloji:"Shtepi Private.",
				Kati:3,
				Mobilimi:"E Mobiluar.",
				Numri_Ballkoneve:"",
				Orientimi:"",
				Parkim:"",
				id:24,
			},		
		];
const Store = new Store1;
Dispatcher.register(Store.handleActions.bind(Store));
window.Dispatcher=Dispatcher;
export default Store;