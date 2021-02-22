import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const NoteContext = createContext();

const NoteContextProvider = (props) => {
  const [notes, setNotes] = useState([
    {
      id: uuidv4(),
      title: "Emre Mert Akdağğ",
      note:
        "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.",
      value: 8,
    },
  ]);

  const addNote = (title, note, value) => {
    setNotes([...notes, { id: uuidv4(), title, note, value }]);
  };
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  const updateNote = (id, updatedNote) => {
    setNotes(notes.map((note) => (note.id === id ? updatedNote : note)));
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteContextProvider;
