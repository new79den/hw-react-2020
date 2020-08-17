import React, {useState} from 'react';
import {Formik, Field, Form} from 'formik';
import style from './style.module.scss';
import {useLocalStorage} from '../../assets/hooks/useLocalStorage';

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
    })())

    const submitForm = (values) => {
        setLocalStorageData(values);
        setFormState(values);
        console.log('update', values)
    }


    return (
        <section className={style.wrap}>
            <Formik
                initialValues={formStage}
                onSubmit={submitForm}
            >

                {({values}) => {
                    return (
                        <Form>
                            <label htmlFor="sex">first name</label>
                            <Field type="text" name="firstName"/>

                            <label htmlFor="sex">surname</label>
                            <Field type="text" name="surname"/>

                            <label htmlFor="sex">age</label>
                            <Field type="number" name="age"/>

                            <label htmlFor="sex">email</label>
                            <Field type="email" name="email"/>

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