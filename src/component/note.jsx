import React from 'react';
import './note.css';
import { useState, useEffect } from 'react';
import Pop from './pop'; 


const Note = () => {

    const [pop, setPop]= useState(false); 
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const savedNotes = localStorage.getItem('roughpaper-notes');
        if (savedNotes) {
            setNotes(JSON.parse(savedNotes));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('roughpaper-notes', JSON.stringify(notes));
    }, [notes]);

    const deleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
    };


    return (
        <>
        <div className="container">
            <div className="head">
                <img src="./paper.png" className="logo"/>
            <h1 className="webhead">roughpaper</h1>
            <button onClick={()=> setPop(true)} className="addbtn">Add rough +</button>
            </div>
            <p>This web is to create rough work, your data is saved locally on your device.</p>


            {/* popup form */}
            {pop && <Pop handleClose={()=> setPop(false)}
             handleSave={(note)=>{
                 setNotes([...notes, note]);
                 setPop(false);
                }}/>  }



            <div className="notebox">

             {notes.map((notes, i ) =>(
                 <div className="notecard" key={i}>
                <button className="delete-btn" onClick={() => deleteNote(i)}>×</button>
                <h2>{notes.title}</h2>
                <p>{notes.note}</p>
                
                </div>
             ))}

            </div>

        </div>
        <div className="footer">
            <p>created by <span>Aditya Kulkarni</span></p>
            <button onClick={()=> setPop(true)} className="addbtn-footer">+</button>
            
        </div>
        </>
    );
}

export default Note;
