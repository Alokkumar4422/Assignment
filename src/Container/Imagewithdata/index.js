import React from 'react'
import { connect } from 'react-redux'
import Imagecard from '../../Component/Imagecard'

const Imagewithdata = ({ storeData }) => {
	return (
		<div className="container-fluid" style={{ marginTop: "65px" }}>
			<div className="row text-center text-lg-left">
				<Imagecard
					data={storeData.data}
					showimageinfo={true}
				/>
			</div>
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		storeData: state.saveData
	}
}
export default connect(mapStateToProps)(Imagewithdata);