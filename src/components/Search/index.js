import { useState } from 'react';
import { HStack, Button, Input, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
import { getMessages } from '../../redux/note/noteSlice';
import { useDispatch } from 'react-redux';

function Search() {
    const [search, setSearch] = useState(''); // Arama metni state
    const dispatch = useDispatch();

    // Arama metni değiştiğinde arama sonuçlarını filtreliyoruz
    const handleSearch = (e) => {
        setSearch(e.target.value);
        dispatch(getMessages(e.target.value)); // Redux'a arama terimini gönderiyoruz
    }

    return (
        <Flex justifyContent="center" mt="12px">
            <HStack p="10px">
                <Input
                    size="xs"
                    value={search}
                    onChange={handleSearch} // Kullanıcı yazdıkça handleSearch çalışacak
                    outlineColor="mainColors.200"
                    placeholder="Search..."
                    _placeholder={{ color: "black" }}
                    _hover={{ outlineColor: "black" }}
                />
                <Button size="xs" bg="mainColors.200">
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
            </HStack>
        </Flex>
    );
}

export default Search;
