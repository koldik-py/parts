import {useContext, useState,} from "react";
import './table.sass'

import Panel from "./Panel";
import testProvider from "./testProvider";

const dataTag = ['p', 'h1', 'h2', 'li'],
			baseSizeTextarea = 16,
			baseLineHeight = 1.15;

const TextBlock = () => {

	const [data, id] = useContext(testProvider),
				[size, setSize] = useState(((baseSizeTextarea * baseLineHeight) * 3) + 10);

	const editSize = (e)  => {
		if (e.key === "Enter") {
			setSize(() => (size + (baseSizeTextarea * baseLineHeight)))
		}
	}

	const onSelect = (e) => {
		// const select = e.target.textContent.slice(e.target.selectionStart, e.target.selectionEnd)
	}
	return (
		<div className="textBlock">
			<Panel />
			<textarea className="textBlock__textarea"
			          style={{height: size}}
			          value={data.all[id].text}
			          onChange={e => data.editLine(id, 'text', e.target.value)}
			          onKeyDown={e => editSize(e)}
								onContextMenu={e => onSelect(e)}
			></textarea>
		</div>
	)
};


export default TextBlock