import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {starshipsAction} from '../../../bus/starship/action';

export const useStarshipFetch = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(starshipsAction.fetchAsync())
    }, [dispatch])
    const {data, isFetching} = useSelector(state => state.starship);
    return  {data, isFetching}
}