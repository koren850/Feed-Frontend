import { useState, useEffect } from "react";
import { commentService } from "../services/comment.service.js";

export const FeedList = () => {
	const [comments, setComments] = useState([]);

	useEffect(async () => {
		const comments = await commentService.query();
		setComments(comments);
		console.log(comments);
	}, []);

	if (!comments.length) return <div>no comments yet</div>;
	return (
		<section>
			<input type='text' placeholder='Filter' />
			<ul>
				<li> the comments will be displayed here</li>
			</ul>
		</section>
	);
};
