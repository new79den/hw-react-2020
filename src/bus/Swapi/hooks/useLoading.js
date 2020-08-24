import {useSelector} from 'react-redux';

export const useLoading = () => {
    const isDataLoading = useSelector(state => state.planets.isFetching
        && state.starship.isFetching);
    return {isDataLoading}
}