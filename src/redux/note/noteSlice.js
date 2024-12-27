import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: 'note',
    initialState: {
        message: [],
        search: [], // Arama sonuçları burada tutulacak
    },

    reducers: {
        getMessages: (state, action) => {
            const searchTerm = action.payload.toLowerCase(); // Kullanıcı tarafından girilen arama terimi
            const filteredMessages = state.message.filter((mes) =>
                mes.message.toLowerCase().includes(searchTerm) // Mesajın arama terimiyle eşleşmesi
            );
            state.search = filteredMessages; // Filtrelenen mesajları search dizisine atıyoruz
        },
        
        addMessages: (state, action) => {
            state.message.push(action.payload); // Yeni mesaj ekliyoruz
        },
    },
});

export default noteSlice.reducer;
export const { addMessages, getMessages } = noteSlice.actions;
