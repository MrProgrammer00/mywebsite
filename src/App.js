
import './App.css';
import Loader from './components/Loader';
import Nav from './components/Nav';
import Menulist from './components/Menulist';
import Mainpage from './components/Mainpage';

function App() {
  
  return (
    <div className="App" id='app'>
      
      <Loader />
      <Nav />
      <Menulist />
      <Mainpage />
      
    </div>
  );
}

export default App;
