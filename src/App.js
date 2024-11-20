import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel'
import HelpWidget from './components/HelpWidget'
import FixedImageWidget from './components/FixedImageWidget'
import WhatsAppIcon from './components/WhatsAppIcon'
import PhotographerCategories from './components/PhotographerCategories'
import ImageSlider from './components/ImageSlider'

function App() {
  return (
    <div>
      <FixedImageWidget/>
      {/* <Carousel/> */}
      <ImageSlider/>
      <HelpWidget/>
      <PhotographerCategories/>
      <WhatsAppIcon/>
    </div>
  );
}

export default App;
