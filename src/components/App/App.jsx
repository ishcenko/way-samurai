import Footer from 'components/Footer/Footer';
import Header from '../Header/Header';
import Technologies from '../Technologies/Technologies';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Technologies />
      <Footer />
    </div>
  );
};
