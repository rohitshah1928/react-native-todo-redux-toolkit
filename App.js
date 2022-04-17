

import React from 'react';
import { Provider } from 'react-redux'
import { store } from './src/app/store'






import Todo from './src/features/todo/Todo';

const App = () => {

  // const dispatch = useDispatch();
  // const todoList = useSelector((state) => state.todo.todoList)
  return (


    <Provider store={store}>

      <Todo />

    </Provider>

  )

}





export default App;
