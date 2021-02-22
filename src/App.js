import { Button, useDisclosure } from "@chakra-ui/react";
import React, { useContext } from "react";
import ModalContainer from "./components/AddNote";
import Note from "./components/Note";
import Container from "./Container";
import { NoteContext } from "./contexts/NoteContext";

const App = () => {
  const { notes } = useContext(NoteContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container bgSrc="notesbg.svg">
      {notes.map((note) => (
        <Note title={note.title} text={note.text} value={note.value} />
      ))}
      <Button onClick={onOpen}>Open Modal</Button>
      <ModalContainer onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
    </Container>
  );
};

export default App;
