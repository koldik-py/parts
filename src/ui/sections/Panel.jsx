import {useContext, useState,} from "react";
import './table.sass';
import {setting} from "./MyTable";
import TestProvider from "./testProvider";


const Panel = () => {
	const [data, id] = useContext(TestProvider);

	const [openSelect, setOpenSelect] = useState(false);
	const [useType, setUseType] = useState(setting.allVar[0]);
	const onOpen = (typeTag) => (useType !== typeTag) && openSelect ?
		setUseType(typeTag)
		: (setOpenSelect(() => (!openSelect)), setUseType(typeTag))

	const li = setting.allVar.map((i, index) => <Tag type={i} tagName={i} onOpen={onOpen} key={index}/>)

	return (
		<div className='panel'>
			<div className="panel__tags">
				{li}
			</div>
			<div className="panel__selections">
				<SelectionsTag open={openSelect} type={useType}/>
			</div>
		</div>
	)
}


const Tag = ({tagName, type, onOpen}) => {
	return (
		<div className="tag">
			<div
				className="btn tag__btn"
				onClick={() => onOpen(type)}
			>
				{tagName}
			</div>
		</div>
	)
}

const SelectionsTag = ({open, type}) => {

	const li = setting[(type + 'Data')].map((i, index) => <div className="btn tag__btn" key={index}>{i}</div>)
	return (
		<>
			{open ? li : null}
		</>
	)
}

export default Panel