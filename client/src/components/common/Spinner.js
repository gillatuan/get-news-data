import React, {Component} from "react"
import spinner from "./imageLoading.gif"

class Spinner extends Component {
	render () {
		let toggleSpinner = "none"
		if(this.props.loadingStatus) {
			toggleSpinner = "block"
		}

		return (
			<div
				className='loading'
				style={{
					background: "rgba(0, 0, 0, .5)",
					display: toggleSpinner,
					height: "100%",
					left: 0,
					position: "fixed",
					top: 0,
					width: "100%",
					zIndex: 10000,
					...(this.props.style || null)
				}}
			>
				<img
					src={spinner}
					alt='Loading...'
					style={{
						height: 100,
						left: "50%",
						position: "absolute",
						transform: "translate(-50%, -50%)",
						top: "50%",
						width: 100,
					}}
				/>
			</div>
		)
	}
}

export default Spinner
