import React, { useEffect } from "react";
import ApiConfig from "../helpers/apiConfig";
import { comments as commentsLink } from "../helpers/url";
import Comment from "./comment";
import "../styles/comments.css";
import AddComment from "../containers/addCommentContainer";

const loadId = 11711183;

const Comments = ({ addCommentOperation, comments }) => {
	const apiConfig = new ApiConfig();

	useEffect(() => {
		getComments()
	}, [])

	const getComments = () => {
		apiConfig.get(commentsLink).then(response => {
			addCommentOperation(response.comments)
		})
	}

	return(
		<div className="comments-layout">
			<div>
				<div className="comments-header">
					<div className="comments-head">Comments ({comments.length ?? 0})</div>
					<div className="highlighted-text">LOAN ID - {loadId}</div>
				</div>
				<div className="all-comments">
					{
						comments.map((comment, index) => {
							return <Comment key={index} comment={comment}></Comment>
						})
					}
				</div>
				<AddComment></AddComment>
			</div>
			<div>
				<div className="close-icon">{'\u2A2F'}</div>
			</div>
		</div>
	)
}

export default Comments