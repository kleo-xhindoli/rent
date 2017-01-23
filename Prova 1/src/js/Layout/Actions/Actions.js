import Dispatcher from "../Dispatcher";


export function Featured(){
	var b = [];
		$.post("./a/Gjej_Featured.php", function(data){
	        b = JSON.parse(data);
	        console.log(b);
	        Dispatcher.dispatch({
				type:"FEATURED",
				data:b,
			});
      	});
	
}
export function NextPage() {
	Dispatcher.dispatch({
			type:"NEXTPAGE",
		});
}
export function PreviousPage() {
	Dispatcher.dispatch({
			type:"PREVIOUSPAGE",
		});
}
export function Sort(vendi, madhesia, cmimi, dhomat, lloji, mobilimi) {
	
	var b = [] ;
	$.post("./a/Merr_te_gjitha.php",{Vendi:vendi,Madhesia:madhesia,Cmimi:cmimi,Dhomat:dhomat,LLoji:lloji,Mobilimi:mobilimi},function(data){
		b = JSON.parse(data);
		console.log(b);
		Dispatcher.dispatch(
			{
				data:b,
				type:"SORT",
				v:vendi,
				m:madhesia,
				c:cmimi,
				dh:dhomat,
				ll:lloji,
				mob:mobilimi,
			});
	});

}
export function ShkoTeFaqia(NumriFaqes) {
	Dispatcher.dispatch({
			type:"FAQIA",
			numri: NumriFaqes,
		});
}