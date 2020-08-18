import React from 'react';
import {useLocalStorage} from '../../assets/hooks/useLocalStorage';
import {useHistory} from 'react-router-dom';
import {book} from '../../navigation/books';


export const Student = () => {
    const {localStorageData} = useLocalStorage('formData');
    const history = useHistory()

    const getDetail = () => {
        const {firstName, surname, age, email, sex, speciality} = localStorageData;

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

    return localStorageData
        ? getDetail()
        : (
            <div>
                <p>Студент еще не создан, вы можете создать студента по этому <a onClick={redirectToRegistrationForm}
                                                                                 href="#">адресу</a></p>
            </div>
        );
}
