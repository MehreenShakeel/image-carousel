import { useState } from 'react';
import './App.css';
import Carousel from './Components/carousel/Carousel';
import jsonData from './data/CarouselData.json';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);

  // Extract the "slides" array from the imported JSON data
  const slides = jsonData.slides;

  return (
    <>
    <Navbar/>
      <div className='App'>
        <Carousel data={slides} ></Carousel>
      </div>
    </>
  );
}

export default App;

