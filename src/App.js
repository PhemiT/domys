import './App.css';
import { Brands, CTA, Featured, Features, Footer, Header, Navbar, Process} from './components'

function App() {
  return (
    <div className="App">
      <div className='App__header'>
        <Navbar />
        <Header />
      </div>
      <Brands />
      <Featured />
      <Features />
      <Process />
      <CTA />
      <Footer />    
    </div>
  );
}

export default App;
