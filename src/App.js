import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel'
import HelpWidget from './components/HelpWidget'
import FixedImageWidget from './components/FixedImageWidget'
import WhatsAppIcon from './components/WhatsAppIcon'

function App() {
  return (
    <div>
      <FixedImageWidget/>
      <Carousel/>
      <HelpWidget/>
      <WhatsAppIcon/>
    </div>
  );
}

export default App;
