import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Routing from './MyRouter'
import Navbar from './components/Navbar'
import './components/Header.css'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <Navbar />
    <Routing />
    <Footer />
    </>
  );
}

export default App;
