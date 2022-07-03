import { createContext, useState } from "react";

// create context
const TodoContext = createContext();

// create provider
function TodoProvider({ children }) {
    const [list, setList] = useState([]);

    const handleAdd = ({ name, des, date }) => {
        const newID = list.length + 1;
        setList(prev => [...prev, {
            id: newID,
            name,
            des,
            date
        }]);
    };


    const handleDel = (delId) => {
        const newList = list.filter(({ id }) => id != delId)
            .map(({ name, des, date }, index) => {
                return {
                    id: index + 1,
                    name,
                    des,
                    date
                }
            })
        setList(newList);
    };

    const handleEdit = ({ id: editID, name2, des2, date2 }) => {
        const newList = list.map(({ id, name, des, date }) => {
            return id === editID ?
                {
                    id,
                    name: name2,
                    des: des2,
                    date: date2
                }
                : { id, name, des, date }
        })
        setList(newList);
        console.log('Da Edit thanh mang moi', newList);
    };

    const value = {
        list,
        handleAdd,
        handleDel,
        handleEdit
    }

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}
export { TodoContext, TodoProvider };