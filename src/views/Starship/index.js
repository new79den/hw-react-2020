import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {starshipsAction} from '../../bus/starship/action';


export const Starship = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(starshipsAction.fetchAsync())
    }, [dispatch])

    return (<div>
        Starship
    </div>)
}