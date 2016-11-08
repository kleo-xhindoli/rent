import Dispatcher from "../Dispatcher";

export function NextPage() {
	Dispatcher.dispatch({
			type:"NEXTPAGE",
		});
}
export function Sort(vendi, madhesia, cmimi) {
	Dispatcher.dispatch(
		{
			type:"SORT",
			v:vendi,
			m:madhesia,
			c:cmimi
		});
}