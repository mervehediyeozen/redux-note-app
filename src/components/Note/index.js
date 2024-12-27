import { useState } from 'react';
import { Textarea, HStack, Button, FormControl, Flex, Box, RadioGroup, Radio, Text, Heading } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons'; 
import { addMessages } from '../../redux/note/noteSlice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

function Note() {
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('blackAlpha.200'); // Varsayılan renk
    const dispatch = useDispatch();

    // Redux'dan notları alıyoruz (Arama varsa, search dizisini kullanıyoruz)
    const notes = useSelector((state) => state.note.search.length ? state.note.search : state.note.message);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message) {
            // Renk ve mesaj ile birlikte not ekleniyor
            dispatch(addMessages({ message, color, id: nanoid() }));
            setMessage('');
            setColor('blackAlpha.200'); // Rengi sıfırlıyoruz
        }
    };

    return (
        <Flex gap="10" width="full" pt="20px" direction="column">
            <form onSubmit={handleSubmit}>
                <FormControl p="15px">
                    <Textarea
                        w="400px"
                        placeholder="Start typing..."
                        variant="solid"
                        bg={color}  // Kullanıcının seçtiği renkle arka plan rengini değiştiriyoruz
                        _placeholder={{ color: "black" }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </FormControl>
                <Box justifyContent="right" alignContent="right" display="flex" pr="15px">
                    <Button size="xs" type="submit" variant="outline" outlineColor="blackAlpha.500">
                        <FontAwesomeIcon icon={faRightLong} />
                    </Button>
                </Box>

                {/* Renk Seçimi */}
                <Box p="10px">
                    <RadioGroup onChange={setColor} value={color}>
                        <Flex>
                            <Radio pl="25px" value="noteColors.100"> <Box bg="noteColors.100" w="20px" height="20px" /> </Radio>
                            <Radio pl="25px" value="noteColors.200"> <Box bg="noteColors.200" w="20px" height="20px" /> </Radio>
                            <Radio pl="25px" value="noteColors.300"> <Box bg="noteColors.300" w="20px" height="20px" /> </Radio>
                            <Radio pl="25px" value="noteColors.400"> <Box bg="noteColors.400" w="20px" height="20px" /> </Radio>
                        </Flex>
                    </RadioGroup>
                </Box>
            </form>

            <Heading pl="20px" size="xs" color="blackAlpha.700" textDecoration="underline">Notlar</Heading>

            <HStack pl="15px" pb="15px" justify="left">
                {notes.map((note, index) => (
                    <Box key={index} w="90px" height="50px" bg={note.color}>
                        <Text fontFamily="monospace" p="5px" fontSize="13px" color="blackAlpha.800">
                            {note.message}
                        </Text>
                    </Box>
                ))}
            </HStack>
        </Flex>
    );
}

export default Note;
