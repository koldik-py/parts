import {useState} from "react";

import './table.sass';

import Line from "./Line";

const dataMain = {
	0 : {
		tag: 'p',
		text: ``,
	}
}

export const setting = {
	startTag : 'p',
	defaultTag : ['p', 'h1', 'h2', 'li'],
	baseSizeTextarea : 16,
	baseLineHeight : 1.15
}



function useHook(data={}) {
	const [all, setAll] = useState(data)

	function editLine(id, tag, newContent) {
		setAll(() => ({...all, [id]: {
			...all[id],
				[tag] : newContent
			}}))
	}




	return {all, editLine}
}
const MyTable = () => {
	const data = useHook(dataMain);

	const lines = Object.keys(data.all).map(i => <Line data={data} id={i} key={i}/>)



	return(
		<div className="table">
			{lines}
			<button className="btn btn--add">add</button>
		</div>
	)
}

export default MyTable;