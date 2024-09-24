import './App.css';
import Sidebar from './component/sidebar';
import Navbar from './component/Navbar';
import Loader from './component/loader'; 
import Pagenavigation from './component/pagenavigation';

function App() {
  return (
    <>
      <div className="main-container"> {/* Add a container div */}
      <Loader />
        <Pagenavigation />
        <Navbar title="search" />
        <Sidebar />
      </div>
    </>
  );
}

export default App;

