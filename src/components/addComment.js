import { useMemo } from "react";
import DropDown from "./dropDown";
import "../styles/addComment.css";

const AddComment = () => {
	// Box here and dropdown import here here

	const options = useMemo(() => {
		return [
			{
				id: 0,
				name: "Arnold Papis"
			},
			{
				id: 1,
				name: "Bob Haylett"
			},
			{
				id: 2,
				name: "Dan Jenkin"
			},
			{
				id: 3,
				name: "Holmes Pond"
			},
			{
				id: 4,
				name: "James Pond"
			}
		]
	}, [])

	return(
		<div className="add-comment-section">
			<div className="initials-container">?</div>
			<DropDown options={options}></DropDown>
		</div>
	)
}

export default AddComment
