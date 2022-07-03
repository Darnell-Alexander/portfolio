import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { Routes , Route } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About'



const App = ()=> {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Landing />} />
        <Route path="/about" element={<About />} /> 
      </Route>
    </Routes>
  );
}

export default App;
