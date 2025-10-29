import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentsList = ({ postid, comments }) => {
    // if (!comments) return null; // safeguard

    // const filteredComments = comments.filter(c => c.postId === postid);

    // return (
    //     <ul>
    //         {filteredComments.map(comment => (
    //             <li key={comment.id}>{comment.content}</li>
    //         ))}
    //     </ul>
    // );

    const renderedComments = comments.map(comment => (
        <li key={comment.id}>{comment.content}</li>
    ));

    return comments.length > 0 ? <ul>{  renderedComments  }</ul> :  <div style={{opacity: 0.5}}>No comments yet</div>;
};


export default CommentsList;