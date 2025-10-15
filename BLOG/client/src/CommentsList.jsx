import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentsList = ({ postid, comments }) => {
    if (!comments) return null; // safeguard

    const filteredComments = comments.filter(c => c.postId === postid);

    return (
        <ul>
            {filteredComments.map(comment => (
                <li key={comment.id}>{comment.content}</li>
            ))}
        </ul>
    );
};


export default CommentsList;