import React, { useEffect } from "react";
import ApiConfig from "../helpers/apiConfig";
import { comments as commentsLink } from "../helpers/url";
import Comment from "./comment";
import "../styles/comments.css";

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
					<div className="loan-info">LOAN ID - 11711183</div>
				</div>
				<div>
					{
						comments.map((comment, index) => {
							return <Comment key={index} comment={comment}></Comment>
						})
					}
				</div>
			</div>
			<div>
				<div className="close-icon">&#x2716;</div>
			</div>
		</div>
	)
}

export default Comments