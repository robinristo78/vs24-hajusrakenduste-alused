import axios from "axios";
import { useState } from "react";

const CommentCreate = ({postid, refreshPosts}) => {
    const [content, setContent] = useState('');

    const onChange = (event) => {
        setContent(event.target.value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        // Uus URL: posts.com, Ingress suunab /posts/ID/comments õigesti comments teenusesse
        await axios.post(`http://posts.com/posts/${postid}/comments`, {content}); 
        setContent('');
        refreshPosts();
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group m-3">
                    <label>New Comment</label>
                    <input 
                        value={content}
                        onChange={onChange}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default CommentCreate;