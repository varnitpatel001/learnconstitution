import './App.css';
import Sidebar from './component/sidebar';
import Navbar from './component/Navbar' ;
import Loader from './component/loader' ;
import Pagenavigation from './component/pagenavigation' ;
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (<>
    <Loader></Loader>
    <Pagenavigation></Pagenavigation>
    <Navbar title="search"></Navbar>
    <Router>
      <Sidebar></Sidebar>
      <div className="App"></div>
    </Router>
    </>
  );
}

export default App;