import { Flex } from "@chakra-ui/react";
import React from "react";
import Container from "./Container";
import Team from "./Team";

const App = () => {
  return (
    <Container bgSrc="notesbg.svg">
      <Team
        title="Emre Mert Akdağ"
        text="Lorem Ipsum, dizgi ve baskı endüstrisinde
         kullanılan mıgır metinlerdir."
        value={13}
      />
    </Container>
  );
};

export default App;
