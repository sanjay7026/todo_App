import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  return (
    <Provider store={store} >
      <div className='container '>
        <AddTodo />
        <TodoList />
      </div>
      
    </Provider>
  );
}

export default App;
