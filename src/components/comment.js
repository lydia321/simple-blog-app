import { useState } from "react"
export default function Comments() {
    const [commentText, setCommentText] = useState('')
    const [comments, setComments] = useState([])

    const handleSumbit = (event) =>{
        event.preventDefault();
        const newComment = {
            text: commentText,
            time: Date.now(),

        };
        setComments([...comments,newComment])
        setCommentText('');
    };

      return(
        <form onSubmit={handleSumbit}>
            <textarea
            value = {commentText}
            onChange={(event) => setCommentText(event.target.value)}
            placeholder="Type your comment here"/>
            <button type = "submit">Add Comment</button>
        </form>

    );
}