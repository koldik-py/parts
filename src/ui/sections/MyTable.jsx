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
	allVar: ['tag', 'text', 'class'],
	tagData : ['p', 'h1', 'h2', 'li'],
	textData : ['b', 'i', 'u', 'center'],
	classData : ['class1', 'class2', 'class3', 'class4'],
	baseSizeTextarea : 16,
	baseLineHeight : 1.15
}




function useHook(data={}) {
	const [all, setAll] = useState(data)

	function editLine(id, tag, newContent) {
		setAll(() => (
			{...all, [id]: {
				...all[id],
				[tag] : newContent
				}
			}
		))
	}

	function addBlock () {
		setAll(() =>  ({...all, [Object.keys(all).length]:{
				tag: setting.startTag,
				text: ''
			}
		}))
	}

	return {all, editLine, addBlock}
}
const MyTable = () => {
	const data = useHook(dataMain);

	const lines = Object.keys(data.all).map(i => <Line data={data} id={i} key={i}/>)



	return(
		<div className="table">
			{lines}
			<button className="btn btn--add" onClick={e => data.addBlock()}>add</button>
		</div>
	)
}

export default MyTable;