import React, { useState, useEffect } from 'react';

const CreateNoteForm = ({ onAdd, onUpdate, editNote, setEditNote }) => {
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    if (editNote) {
      setNote({
        title: editNote.title,
        content: editNote.content
      });
    } else {
      setNote({
        title: '',
        content: ''
      });
    }
  }, [editNote]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editNote) {
      onUpdate(editNote.id, note);
      setEditNote(null);
    } else {
      onAdd(note);
    }
    setNote({
      title: '',
      content: ''
    });
  };

  return (
  <form className="create-note-form" onSubmit={handleSubmit}>
  <input
    name="title"
    onChange={handleChange}
    value={note.title}
    placeholder="Title"
  />
  <textarea
    name="content"
    onChange={handleChange}
    value={note.content}
    placeholder="Take a note..."
    rows="3"
  />
  
  <div className="form-actions">
    <button type="submit" className="add-update-btn">
      {editNote ? '✔' : '+'}
    </button>
    {editNote && (
      <button
        type="button"
        onClick={() => {
          setEditNote(null);
          setNote({ title: '', content: '' });
        }}
        className="cancel-btn"
      >
        ×
      </button>
    )}
  </div>
</form>

  );
};

export default CreateNoteForm;