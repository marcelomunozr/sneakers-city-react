import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Senakers from './features/sneakers/containers/Sneakers';
import Header from './commons/components/Header';
import Footer from './commons/components/Footer';

const  App = () => {
  return (
    <div class="container-app">
      <Header />
      <Senakers />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
