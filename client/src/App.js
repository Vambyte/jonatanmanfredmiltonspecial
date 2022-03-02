import './App.css';
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Content from './Components/Content.js'



function App() {
  return (
    <div className="App">
      <Header />

      <Content className="Content"/>

      <Footer />
    </div>
  );
}

export default App;
