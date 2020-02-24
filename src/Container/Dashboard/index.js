import React from 'react'
import Imagecard from '../../Component/Imagecard'
import { ImgData } from '../../Const/data'

class Dashboard extends React.Component {
	render() {
		return (
			<div className="container-fluid" style={{ marginTop: "65px" }}>
				<div className="row text-center text-lg-left">
					<Imagecard data={ImgData} />
				</div>
			</div>
		)
	}
}
export default Dashboard;