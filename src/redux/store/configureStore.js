import { configureStore } from '@reduxjs/toolkit'
import hiraganaReducer from '../reducers/hiraganaReducer';
import katakanaReducer from '../reducers/katakanaReducer';

const store = configureStore({
    reducer: {
        hiragana: hiraganaReducer,
        katakana: katakanaReducer
    }
});

export default store;