import 'bootstrap/dist/css/bootstrap.min.css';
import './GlobalStyles.css';
import { NavTop } from './components/NavBar/NavTop';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { Footer } from './components/Footer/Footer';

function App() {
  return(
    <BrowserRouter>
        <div>
          <NavTop />
          <Router />
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
  );

}

export default App
