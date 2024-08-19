import './App.css';
import { EcoSyatem } from './components/Ecosystem/Ecosystem';
import { Footer } from './components/footer/Footer';
import { Hero } from './components/Hero/HeroSection';
import { Navbar } from './components/Navbar/Navbar';
import { PlateForm } from './components/PlateformAssist/PlateForm';
import { Products } from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <EcoSyatem/>
      <Products/>
      <PlateForm/>
      <Footer/>
    </div>
  );
}

export default App;
