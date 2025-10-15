import axios from "axios";
import { useState } from "react";

const CommentCreate = ({postid, refreshPosts}) => {
    const [content, setContent] = useState('');

    const onChange = (event) => {
        setContent(event.target.value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`http://localhost:5001/posts/${postid}/comments`, {content});
        setContent('');
        refreshPosts();
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
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