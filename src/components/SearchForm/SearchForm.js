import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState('');
    const handleSearch = e => {
        e.preventDefault();
        dispatch(updateSearchString({ searchString }));
    }

    useEffect(() => {
        dispatch(updateSearchString({ searchString }));
    }, []);

    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search…" onChange={e => setSearchString(e.target.value)} />
            <Button onClick={handleSearch}>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;