import { useState, useEffect } from "react";
import { commentService } from "../services/comment.service.js";
import { socketService } from "../services/socket.service.js";

export const FeedList = () => {
	const [comments, setComments] = useState([]);
	let commentsBind;

	useEffect(async () => {
		const comments = await commentService.query();
		setComments(comments);
		console.log(comments);
		socketService.on("comment-added", commentAdded);
	}, []);

	async function commentAdded() {
		const comments = await commentService.query();
		setComments(comments);
	}

	if (!comments.length) return <div>no comments yet</div>;
	return (
		<section>
			<input type='text' placeholder='Filter' />
			<ul>
				{comments.map((comment) => (
					<li key={comment._id}>
						<div>
							<img style={{ width: "50px" }} src={`https://www.gravatar.com/avatar/${comment.imgHash}?s=300`} />
						</div>
						<div>{comment.email}</div>
						<div>{comment.comment}</div>
					</li>
				))}
			</ul>
		</section>
	);
};
