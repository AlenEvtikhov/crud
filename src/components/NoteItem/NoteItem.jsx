import React from 'react';
import './NoteItem.css';

export default function NoteItem (props) {
    const {note, deleteNote} = props;

    return (
        <li className='notes-item'>
            <div className='notes-item-content'>{note.content}</div>
            <div className='delete-btn' onClick={() => deleteNote(note.id)}>
                <img src="https://img.icons8.com/officexs/16/000000/delete-sign.png" alt='delete button'/>
            </div>
        </li>
    )

}