import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {planetsAction} from '../../../bus/planets/action';

export const usePlanetsFetch = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(planetsAction.fetchAsync())
    }, [dispatch])
    const {data, isFetching, error} = useSelector(state => state.planets);
    return  {data, isFetching, error}
}