import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onDelete, onEdit }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {notes.map((note, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3">
            <Note
              id={index}
              title={note.title}
              content={note.content}
              onDelete={onDelete}
              onEdit={onEdit} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;