import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const NoteContext = createContext();

const NoteContextProvider = (props) => {
  const [notes, setNotes] = useState([
    {
      id: uuidv4(),
      title: "Emre Mert Akdağğ",
      text:
        "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.",
      value: 8,
    },
  ]);
  return (
    <NoteContext.Provider value={{ notes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteContextProvider;
