import './App.css';
import Form from './Components/Form';
import Task from './Components/Task'
import {TodoProvider} from './TodoContext'

function App() {
  return (
    <TodoProvider>
      <div style={{ padding: '16px 40px' }}>
        <h1>To do list</h1>
        <Form />
        <Task />
      </div>
    </TodoProvider>
  );
}

export default App;
