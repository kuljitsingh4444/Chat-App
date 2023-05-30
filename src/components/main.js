import { useEffect } from "react";
import Popup from "./popup";
import Comments from "../containers/commentsContainer";

const Main = (props) => {
		return(
			<div>
				<Popup>
					<Comments></Comments>
				</Popup>
			</div>  
		)
}

export default Main