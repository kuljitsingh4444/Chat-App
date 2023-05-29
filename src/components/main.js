import { useEffect } from "react";
import Popup from "./popup";
import Comments from "../containers/commentsContainer";
import "../styles/main.css"

const Main = (props) => {
		return(
			<div>
				<div className="overlay-text">
					<div>Background Text for Overlay Effect</div>
					<div>Background Text for Overlay Effect</div>
					<div>Background Text for Overlay Effect</div>
					<div>Background Text for Overlay Effect</div>
					<div>Background Text for Overlay Effect</div>
				</div>
				<Popup>
					<Comments></Comments>
				</Popup>
			</div>  
		)
}

export default Main