import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateNoteForm from './components/CreateNoteForm';
import NoteList from './components/NoteList';
import { Alert } from 'react-bootstrap';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [editNote, setEditNote] = useState(null); 

  const addNote = (newNote) => {
    if (newNote.title.trim() === '' || newNote.content.trim() === '') {
      setShowAlert(true);
      return;
    }
    setNotes(prevNotes => [...prevNotes, newNote]);
    setShowAlert(false);
  };

  
  const updateNote = (id, updatedNote) => {
    setNotes(prevNotes =>
      prevNotes.map((note, index) =>
        index === id ? { ...updatedNote } : note
      )
    );
    setEditNote(null); 
  };

  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter((note, index) => index !== id));
  };

  
  const startEditNote = (noteId) => {
    setEditNote({ ...notes[noteId], id: noteId });
  };

  return (
    <div>
      <Header />
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible className="mx-auto mt-3" style={{ maxWidth: '480px' }}>
          Please fill in both the title and content fields.
        </Alert>
      )}
      <CreateNoteForm
        onAdd={addNote}
        onUpdate={updateNote} 
        editNote={editNote} 
        setEditNote={setEditNote} 
      />
      <NoteList notes={notes} onDelete={deleteNote} onEdit={startEditNote} /> {}
      <Footer />
    </div>
  );
};

export default App;