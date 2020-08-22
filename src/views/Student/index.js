import React from 'react';
import {useHistory} from 'react-router-dom';
import {book} from '../../navigation/books';
import {useStudent} from './useHooks/useStudent';

export const Student = () => {

    const {studentState} = useStudent();
    const history = useHistory()

    const getDetail = () => {
        const {firstName, surname, age, email, sex, speciality} = studentState;

        return (
            <div>
                <h1>{firstName}</h1>
                <h1>{surname}</h1>
                <p>{age}</p>
                <p>{email}</p>
                <p>{sex}</p>
                <p>{speciality}</p>
            </div>
        )
    }

    const redirectToRegistrationForm = (event) => {
        event.preventDefault();
        history.push(book.registration);
    }

    return  getDetail();
}
