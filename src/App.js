import logo from './logo.svg';
import './App.css';
import { Adding_Form } from './Components/Adding_form';
import { Task } from './Components/task';
import { Cake } from './Components/Cake';
import { Provider } from 'react-redux';
import store from './Redux/cake/cakeStore';
import { pendingStore } from './Redux/pending/store';
import TaskContainer from './Components/taskContainer';

function App() {
  console.log(pendingStore.getState());
  const unsubscribe=pendingStore.subscribe(()=>{
    console.log("state changed "+JSON.stringify(pendingStore.getState().tasks));
  });

  return (
    <Provider store={pendingStore}>
      <div className="App">
        {/* <Cake></Cake> */}
        <Adding_Form></Adding_Form>
        <TaskContainer type="PENDING"></TaskContainer>
        <TaskContainer type="DONE"></TaskContainer>
      </div>
    </Provider>
    
  );
}

export default App;
