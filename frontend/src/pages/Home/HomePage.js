import React, { useEffect, useReducer } from 'react'
import { getAll, search } from '../../services/antiqueService';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import { useParams } from 'react-router-dom';
import Search from '../../components/Search/Search';

const initialState = { antiques: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case 'ANTIQUES_LOADED':
            return { ...state, antiques: action.payload };
        // case 'TAGS_LOADED':
        //     return { ...state, tags: action.payload };
        default:
            return state;
    }
};
export default function HomePage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { antiques } = state;
    const { searchTerm } = useParams();
    useEffect(() => {

        const loadAntiques = searchTerm ? search(searchTerm) : getAll();

        loadAntiques.then(antiques => dispatch({ type: 'ANTIQUES_LOADED', payload: antiques }));
    }, [searchTerm]);

    return (
        <>
            <Search />
            <Thumbnails antiques={antiques} />
        </>
    )
}
