import { useState, useEffect } from "react";
import { commentService } from "../services/comment.service.js";
import { socketService } from "../services/socket.service.js";

export const FeedList = () => {
	const [comments, setComments] = useState([]);
	const [filteredComments, setFilteredComments] = useState([]);
	const [filterBy, setFilterBy] = useState("");

	useEffect(async () => {
		const comments = await commentService.query();
		setComments(comments);
		console.log(comments);
		socketService.on("comment-added", commentAdded);
	}, []);

	useEffect(() => {
		setFilteredComments(comments);
	}, [comments]);

	function handleFiller(ev) {
		setFilterBy(ev.target.value);
		let filteredComments = comments.filter((comment) => {
			if (comment.email.toLowerCase().includes(ev.target.value.toLowerCase())) return comment;
			if (comment.comment.toLowerCase().includes(ev.target.value.toLowerCase())) return comment;
		});

		setFilteredComments(filteredComments);
	}

	async function commentAdded() {
		const comments = await commentService.query();
		setComments(comments);
	}

	return (
		<section>
			<input onChange={handleFiller} value={filterBy} type='text' placeholder='Filter' />
			{filteredComments.length ? (
				<ul>
					{filteredComments.map((comment) => (
						<li key={comment._id}>
							<div>
								<img style={{ width: "50px" }} src={`https://www.gravatar.com/avatar/${comment.imgHash}?s=300`} />
							</div>
							<div>{comment.email}</div>
							<div>{comment.comment}</div>
						</li>
					))}
				</ul>
			) : (
				<div>no comments yet</div>
			)}
		</section>
	);
};
