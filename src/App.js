import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { Routes , Route } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About'
import PastWork from './components/Past-Work';
import ContactForm from './components/Contact-Form';
import { Helmet } from 'react-helmet';

const App = ()=> {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Darnell T. Alexander</title>
                <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path='/projects' element={<PastWork /> } /> 
        <Route path='/contact' element={<ContactForm />} />
      </Route>
    </Routes>
    </>
    
  );
}

export default App;
