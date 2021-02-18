import { Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import Container from "./Container";
import { NoteContext } from "./contexts/NoteContext";
import Team from "./Team";

const App = () => {
  const { notes } = useContext(NoteContext);
  return (
    <Container bgSrc="notesbg.svg">
      {notes.map((note) => (
        <Team title={note.title} text={note.text} value={note.value} />
      ))}
    </Container>
  );
};

export default App;
