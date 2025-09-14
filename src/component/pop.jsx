import React from 'react';
import './pop.css';
import { useState } from 'react';

const Pop = ({handleSave, handleClose}) => {

    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');




    return (
        <>
            <div className="overlay">

                <div className="box">
                
                        <input type="text" placeholder="Title" className="title" value={title} 
                        
                        onChange={(e)=>{ setTitle(e.target.value)}}/>
                        <textarea placeholder="write here.." className="notehere" 
                        onChange={(e)=>{ setNote(e.target.value)}}
                        value={note} />

                        <div className="pop-btns">

                        <button className="clsbtn" onClick={handleClose}>Cancel</button>
                        <button className="savebtn" onClick={()=> {handleSave({title, note})}}>Save</button>
    
                        </div>
                </div>


            </div>
        </>
    );
}

export default Pop;
