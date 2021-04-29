import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Routing from './MyRouter'
import Navbar from './components/Navbar'
import './components/Header.css'


function App() {
  return (
    <>
    <Navbar />
    <Routing />
    </>
  );
}

export default App;
