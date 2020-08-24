import {useSelector, useDispatch} from 'react-redux';
import {studentAction} from '../../../bus/Student/action';

export const useStudent = () => {
    const studentState = useSelector(state => state.student);
    const dispatch = useDispatch();

    const setStudentState = (data) => {
        dispatch(studentAction.setStudent(data))
    }

    return {studentState, setStudentState}
}