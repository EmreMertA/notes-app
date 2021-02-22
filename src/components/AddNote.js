import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Textarea,
} from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { NoteContext } from "../contexts/NoteContext";

const ModalContainer = ({ isOpen, onClose }) => {
  const { addNote } = useContext(NoteContext);

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const [value, setValue] = useState(3);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    addNote(title, note, value);
    onClose()
  };
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Not Oluştur</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Başlık</FormLabel>
            <Input
              onChange={(e) => setTitle(e.target.value)}
              ref={initialRef}
              placeholder="örn: Doğrum günü"
            />

            <FormLabel mt={4}>Not *</FormLabel>
            <Textarea
              onChange={(e) => setNote(e.target.value)}
              placeholder="örn: Emre -> 13 ağustos"
            />

            <FormLabel mt={4}>Önemi ({value})</FormLabel>
            <Slider
              onChange={(number) => setValue(number)}
              defaultValue={3}
              min={0}
              max={10}
              step={1}
            >
              <SliderTrack bg="red.100">
                <Box position="relative" right={10} />
                <SliderFilledTrack bg="tomato" />
              </SliderTrack>
              <SliderThumb boxSize={6} />
            </Slider>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={handleSumbit}
            type="submit"
            colorScheme="blue"
            mr={3}
          >
            Ekle
          </Button>
          <Button onClick={onClose}>İptal</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalContainer;
