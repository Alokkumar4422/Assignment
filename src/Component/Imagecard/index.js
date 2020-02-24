import React, { useState } from 'react'
import Modal from '../../Component/Modal'

const Imagecard = ({ data, showimageinfo }) => {
	const [imageData, setImageData] = useState('')
	return (
		<React.Fragment>
			{data.length === 0 && <p>Nothing to show. please first save the data from the home page</p>}
			{
				data.map((user, id) => {
					return (
						<div key={id} className="col-lg-4 mx-auto col-md-6 col-6" data-toggle="modal" data-target={`${showimageinfo ? "" : "#exampleModalCenter"}`} onClick={() => setImageData(user)}>
							<span className="d-block mb-4 h-100">
								<img className="img-fluid img-thumbnail" src={user.imgUrl} alt="" style={{ cursor: 'pointer' }} />
								{showimageinfo && showimageinfo &&
									<>
										<p>Title : {user.title}</p>
										<p>Description : {user.desc}</p>
									</>
								}
							</span>
						</div>
					)
				})}
			{imageData && <Modal data={imageData} />}
		</React.Fragment>
	)
}

export default Imagecard