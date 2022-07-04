import { useState, useContext } from 'react';
import { TodoContext } from '../TodoContext';


function Edit({ display, task: { id, name, des, date } }) {

    const data = useContext(TodoContext);
    

    const [name2, setName] = useState(name)
    const [des2, setDes] = useState(des)
    const [date2, setDate] = useState(date);

    const onEdit = () => {
        const editTask = {
            id,
            name2,
            des2,
            date2
        }
        data.handleEdit(editTask);
        display(false)
    }


    return (
        <form>
            <fieldset>
                <legend>Task to do:</legend>
                <label htmlFor="name">Name: </label>
                <input
                    value={name2}
                    id='name'
                    onChange={e => { setName(e.target.value) }}
                ></input>
                <br />
                <label htmlFor="des">Description: </label>
                <input
                    value={des2}
                    id='des'
                    onChange={e => { setDes(e.target.value) }}
                ></input>
                <br />
                <label htmlFor="date">Date: </label>
                <input
                    value={date2}
                    id='date'
                    type='date'
                    onChange={e => { setDate(e.target.value) }}
                ></input>
                <br />

                <input type="button" value='Submit' onClick={onEdit}></input>
            </fieldset>
        </form>
    )
}

export default Edit;