import './table.sass'

const TextBlock = () => {
	const x = (e) => {
    console.log(e.key === "Enter")
  }

	return (
		<div className="box bgg p10">
      {/*<div className="box__elem"><div className="btn box__btn">H1</div></div>*/}
      <textarea
	      className="input__textarea"
	      onKeyDown={(e) => x(e)}></textarea>
    </div>
	)
}

export default TextBlock