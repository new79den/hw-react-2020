import React, {useState} from 'react';
import {Formik, Field, Form} from 'formik';
import style from './style.module.scss';
import {useLocalStorage} from '../../assets/hooks/useLocalStorage';
import {useHistory} from 'react-router-dom';
import {book} from '../../navigation/books';
import {MyTextInput} from '../../assets/fields/MyTextInput'

const initialValues = {
    firstName: '',
    surname: '',
    age: 0,
    email: '',
    sex: 'male',
    speciality: 'designer',
}

export const FormRegistration = () => {

    const {localStorageData, setLocalStorageData} = useLocalStorage('formData');
    const [formStage, setFormState] = useState((() => {
       return localStorageData ? localStorageData : initialValues;
    })());
    const history = useHistory();

    const submitForm = (values) => {
        console.log('submit');
        setLocalStorageData(values);
        setFormState(values);
        history.push(book.student);
        console.log('update', values)
    }


    const changeField = (value) => {
        let error = false
        if (!value) {
            error = 'Required';
        } else if (value.length < 2) {
            error = 'Нужно чуть подленее';
        }
        return error;
    }

    const validate = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if ( changeField(values.firstName) ){
            errors.firstName = changeField(values.firstName);
        }

        if ( changeField(values.surname) ){
            errors.surname = changeField(values.surname);
        }

        if (values.age < 6){
            errors.age = 'Должно быть больше 6'
        } else if(errors.age > 60){
            errors.age = 'Должно меньше больше 69'
        }

        return errors;
    };


    return (
        <section className={style.wrap}>
            <Formik
                initialValues={formStage}
                onSubmit={submitForm}
                validate = {validate}
            >

                {({values, errors, touched}) => {
                    console.log(errors);
                    return (
                        <Form>
                            <MyTextInput
                                label="first name"
                                name="firstName"
                                placeholder="Имя"
                            />

                            <br/>
                            <MyTextInput
                                label="surname"
                                name="surname"
                                placeholder="Фамилия"
                            />
                            <br/>

                            <label htmlFor="age">age</label>
                            <Field type="number" name="age"/>
                            {errors.age && touched.age ? <div className='error'>{errors.age}</div> : null}
                            <br/>

                            <MyTextInput
                                label="email"
                                name="email"
                                placeholder="email"
                            />

                            <div>

                                <label htmlFor="sex">male</label>
                                <Field
                                    checked={values.sex === 'male'}
                                    type="radio"
                                    name="sex"
                                    value="male"
                                />

                                <label htmlFor="sex">female</label>
                                <Field
                                    checked={values.sex === 'female'}
                                    type="radio"
                                    name="sex"
                                    value="female"
                                />

                            </div>
                            <Field as="select" name="speciality">
                                <option value="designer">designer</option>
                                <option value="developer">developer</option>
                                <option value="writer">writer</option>
                            </Field>
                            <button type="submit">{localStorageData ? 'Обновить': 'Добавить'}</button>
                        </Form>
                    )
                }}
            </Formik>
        </section>
    )
}