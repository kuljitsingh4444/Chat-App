import { useEffect } from "react";
import "../styles/comment.css";

const Comment = ({ comment }) => {

	const getInitials = (commentor) => {
		const commentorParts = commentor.split(" ");
		commentorParts.length = 2;
		let initials = ""
		commentorParts.forEach(commentor => {
			initials += commentor.charAt(0)
		})

		return initials
	}

	const getFormattedDate = (inputDateString) => {
		const date = new Date(inputDateString);
		const day = date.getDate();
		const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
		const year = date.getFullYear();
		const hours = ('0' + date.getHours()).slice(-2);
		const minutes = ('0' + date.getMinutes()).slice(-2);
		const outputDateString = `${day} ${month} ${year}, ${hours}:${minutes}`;

		return outputDateString;
	}

	const getTaggedNames = (tags) => {
		return tags.map(tag => {
			return(
				<div key={tag} className="highlighted-text">{tag}</div>
			)
		})
	}

	return(
		<div className="comment-container">
			<div className="initials-container">
				{getInitials(comment.updatedBy)}
			</div>
			<div>
				<div className="updated-by">{comment.updatedBy}</div>
				<div className="comment">{comment.comment}</div>
				<div className="tagged-names">{getTaggedNames(comment.taggedTo)}</div>
				<div className="updated-on">{getFormattedDate(comment.updatedOn)}</div>
			</div>
		</div>
	)
}

export default Comment
