import './table.sass'
import {useContext} from "react";
import testProvider from "./testProvider";

const ViewBlock = () => {
	const [data, id] = useContext(testProvider)

	const UserTag = data.all[id].tag

	console.log(data.all[id].text.indexOf('\n'))

	return (
		<div className="textBlock">
			<UserTag className='view'>
				{data.all[id].text.replace(/\n/g, `<br>`)}
			</UserTag>
		</div>
	)
}
export default ViewBlock;