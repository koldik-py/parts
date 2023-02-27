import {useContext, useState,} from "react";
import './table.sass';
import {setting} from "./MyTable";
import TestProvider from "./testProvider";


const Panel = () => {
	return (
		<>
			<Tag/>
		</>
	)
}


const Tag = () => {
	const [data, id] = useContext(TestProvider),
				[active, setActive] = useState(0);

	const li = setting.defaultTag.map(
		(i, index) => <span className="btn tag__btn"
		                    key={index}
		                    onClick={() => data.editLine(id, 'tag', i)}>{i}</span>)
	return (
		<div className="tag">
			<div className="btn tag__btn"
			     onClick={() => setActive((number) => (!number)) }>
				{data.all[id].tag}
			</div>
				<ul className={"tag__list" +(active ? " tag__list--active" : '')}>{li}</ul>
		</div>
	)
}

export default Panel