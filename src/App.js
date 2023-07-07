import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import './style/style-null.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import PortfolioPages from './components/pages/PortfolioPages';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/portfolio/:id' element={<PortfolioPages  />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
