import './table.sass';

import TextBlock from "./TextBlock";
import ViewBlock from "./ViewBlock";
import testProvider from "./testProvider";

const Line = ({data, id}) => {

	return (
		<testProvider.Provider value={[data, id]}>
			<div className='line'>
				<TextBlock id={id}/>
				<ViewBlock id={id}/>
			</div>
		</testProvider.Provider>
	)
}

export default Line