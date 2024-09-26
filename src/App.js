import './App.css';
import Sidebar from './component/sidebar';
import Navbar from './component/Navbar';
import Loader from './component/loader'; 
//import Pagenavigation from './component/pagenavigation';

import Login from './component/submitation';

function App() {
  return (

     <>      
      <Loader />
        <Sidebar />
        </>
     
  );
}

export default App;

