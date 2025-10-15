import axios from 'axios';
import { useState } from 'react';

const PostCreate =  () => {
    const [title, setTitle] = useState('');

    const onChange = (event) => {
        setTitle(event.target.value);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:5000/posts', {title});
        setTitle('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Title</label>
                    <input 
                        value={title}
                        onChange={onChange}
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default PostCreate;