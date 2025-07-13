import React from 'react';
import { Button } from 'react-bootstrap';

const Note = ({ id, title, content, onDelete, onEdit }) => {
  const handleDeleteClick = () => {
    onDelete(id);
  };

  const handleEditClick = () => {
    onEdit(id);
  };

  return (
    <div className="note-card">
      <h1>{title}</h1>
      <p>{content}</p>
      <Button variant="danger" onClick={handleDeleteClick} className="note-action-btn">
        <i className="bi bi-trash"></i>
      </Button>
      {}
      <Button variant="info" onClick={handleEditClick} className="note-action-btn me-2"> {}
        <i className="bi bi-pencil-square"></i> {}
      </Button>
    </div>
  );
};

export default Note;