import logo from './logo.svg';
import './App.css';
import Hooks from './HooksPractice/Hooks';
import Statusbar from './Components/Statusbar/StatusBar';
import Numeric from './Components/Buttons/Numeric';
import { store } from './store';
import { Provider } from 'react-redux';



function App() {
  return (
    <Provider  store={store}>
    <div className="App">
      <div className='Calculator_layout'>
       <Statusbar/>      
       <Numeric/>
      </div>
    </div>
    </Provider>
  );
}

export default App;
