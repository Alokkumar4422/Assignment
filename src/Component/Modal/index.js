import React from 'react'
import { connect } from 'react-redux'

const Modal = ({ data, saveData }) => {
	return (
		<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLongTitle">Images view</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<p>Title - {data.title}</p>
						<img src={data.imgUrl} alt="" />
						<p>Description -{data.desc}</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => saveData(data)}>Save</button>
					</div>
				</div>
			</div>
		</div>
	)
}
const mapStateToProps = state => {
	return {
		state
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		saveData: data => dispatch({ type: "SAVE_DATA", payload: data }),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
