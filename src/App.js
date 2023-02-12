import './App.scss';
import MainSection from './components/MainView/MainSection';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className= "app">
    <Nav/>
    <MainSection/>
    <Footer/>

    </div>
  );
}

export default App;
