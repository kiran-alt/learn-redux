import logo from './logo.svg';
import './App.css';
import { Adding_Form } from './Components/Adding_form';
import { Task } from './Components/task';
import { Cake } from './Components/Cake';
import { Provider } from 'react-redux';

import { pendingStore } from './Redux/pending/store';
import TaskContainer from './Components/taskContainer';
import store from './ReduxToolKit/todo/Store';

function App() {
  console.log(pendingStore.getState());
  const unsubscribe=pendingStore.subscribe(()=>{
    console.log("state changed "+JSON.stringify(pendingStore.getState().tasks));
  });

  return (
    <Provider store={store}>
      <div className="App">
        {/* <Cake></Cake> */}
        <Adding_Form></Adding_Form>
        <TaskContainer status="PENDING"></TaskContainer>
        <TaskContainer status="DONE"></TaskContainer>
        
      </div>
    </Provider>
    
  );
}

export default App;
