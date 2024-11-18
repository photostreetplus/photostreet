import logo from './logo.svg';
import './App.css';
import HomeHeader from './components/HomeHeader'
import Carousel from './components/Carousel'
import HelpWidget from './components/HelpWidget'
import FixedImageWidget from './components/FixedImageWidget'

function App() {
  return (
    <div>
      <FixedImageWidget/>
      <Carousel/>
      <HelpWidget/>
    </div>
  );
}

export default App;
