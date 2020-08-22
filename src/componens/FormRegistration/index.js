import React from 'react';
import {Formik, Field, Form} from 'formik';
import style from './style.module.scss';
import {useStudent} from '../../views/Student/useHooks/useStudent'
import {useHistory} from 'react-router-dom';
import {book} from '../../navigation/books';
import {MyTextInput} from '../../assets/fields/MyTextInput';
import * as Yup from 'yup';


export const FormRegistration = () => {

    const {studentState, setStudentState} = useStudent();

    const history = useHistory();

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        surname: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .required('Required'),
        confirmpassword: Yup.string()
            .required('Required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });

    const submitForm = (values) => {
        console.log('submit');
        setStudentState(values);
        history.push(book.student);
        console.log('update', values)
    }


    return (
        <section className={style.wrap}>
            <Formik
                initialValues={studentState}
                onSubmit={submitForm}
                validationSchema={SignupSchema}
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
                            <br/>
                            <MyTextInput
                                label="password"
                                type="password"
                                name="password"
                                placeholder="password"
                            />
                            <br/>
                            <MyTextInput
                                label="confirmpassword"
                                type="password"
                                name="confirmpassword"
                                placeholder="confirmpassword"
                            />
                            <br/>
                            <button type="submit">Добавить</button>
                        </Form>
                    )
                }}
            </Formik>
        </section>
    )
}