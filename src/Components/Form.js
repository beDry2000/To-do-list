import { useState, useContext } from 'react'
import { TodoContext } from '../TodoContext'


function Form() {
    const data = useContext(TodoContext);

    const [name, setName] = useState('')
    const [des, setDes] = useState('')
    const [date, setDate] = useState('');
    const handleSubmit = () => {
        const task = {
            name,
            des,
            date
        }
        data.handleAdd(task);
        setName('');
        setDes('');
        setDate('');
        document.getElementById('name').focus();


    }
    return (
        <form>
            <fieldset>
                <legend>Task to do:</legend>
                <label htmlFor="name">Name: </label>
                <input
                    value={name}
                    id='name'
                    onChange={e => { setName(e.target.value) }}
                    required
                ></input>
                <br />
                <label htmlFor="des">Description: </label>
                <input
                    value={des}
                    id='des'
                    onChange={e => { setDes(e.target.value) }}
                ></input>
                <br />
                <label htmlFor="date">Date: </label>
                <input
                    value={date}
                    id='date'
                    type='date'
                    onChange={e => { setDate(e.target.value) }}
                ></input>
                <br />

                <input type="button" value='Submit' onClick={handleSubmit}></input>
            </fieldset>
        </form>
    )
}

export default Form;