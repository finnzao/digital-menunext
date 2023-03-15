import styles from "./style.module.css";
import IndexTable from '@/componets/IndexTable';
import FormCreate from '@/componets/FormCreate';
import FormUpdate from '@/componets/FormUpdate';
import { useSelector } from 'react-redux';
import { useReducer } from 'react';
const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}
function DashBoard() {

    
    const formId = useSelector((state) => state.app.client.formId);
    const [formData, setFormData] = useReducer(formReducer, {})
    return (

        <div className={styles.container}>
             {FormCreate({formId,formData,setFormData})}

            <IndexTable />
        </div>

    )
}

export default DashBoard;