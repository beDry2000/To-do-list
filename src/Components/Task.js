import { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext'
import Edit from './Edit';

function Task() {
    const list = useContext(TodoContext);
    const tasks = list.list;
    const [show, setShow] = useState(false);

    const [editTask, setEditTask] = useState({});
    const handleShow = (task) => {
        setEditTask(task);
        setShow(!show);
        console.log('lay duoc thk', task);
    }
    const handleDisplay = (bool) => {
        setShow(bool);
    }

    console.log('List moiw sau khi edit', tasks);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Task name</th>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task, index) => (
                            <tr key={index}>
                                <td>{task.id}</td>
                                <td>{task.name}</td>
                                <td>{task.des}</td>
                                <td>{task.date}</td>
                                <td>
                                    <button onClick={() => list.handleDel(task.id)}>Delete</button>
                                </td>
                                <td>
                                    <button onClick={() => handleShow(task)}>Edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {
                show && <Edit
                    task={editTask}
                    display={handleDisplay}
                />}
        </>
    )
}

export default Task;