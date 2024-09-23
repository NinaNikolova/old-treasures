import React, { useEffect, useReducer } from 'react'
import { getAll, getAllByTag, getAllTags, search } from '../../services/antiqueService';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import { useParams } from 'react-router-dom';
import Search from '../../components/Search/Search';
import Tags from '../../components/Tags/Tags';

const initialState = { antiques: [], tags: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case 'ANTIQUES_LOADED':
            return { ...state, antiques: action.payload };
        case 'TAGS_LOADED':
            return { ...state, tags: action.payload };
        default:
            return state;
    }
};
export default function HomePage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { antiques, tags } = state;
    const { searchTerm, tag } = useParams();
    useEffect(() => {

        getAllTags().then(tags => dispatch({ type: 'TAGS_LOADED', payload: tags }));
        const loadAntiques = tag
            ? getAllByTag(tag)
            : searchTerm
                ? search(searchTerm)
                : getAll();

        loadAntiques.then(antiques => dispatch({ type: 'ANTIQUES_LOADED', payload: antiques }));
    }, [searchTerm, tag]);

    return (
        <>
            <Search />
            <Tags tags={tags} />
            <Thumbnails antiques={antiques} />
        </>
    )
}
