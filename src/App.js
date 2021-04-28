import axios from "axios";
import React, {useState, useEffect} from "react";
import "./App.css";
import Header from './Header.js'
import Information from './Information.js'
import { MainDiv } from "./Styling";
import Photo from "./Photo.js"

function App() {

  const [apiInfo, setInfo] = useState({})

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=HwggR62dhg1zztoJaD2i1B31L1cxwHSb7HmGKdpy')
    .then(({data}) => {setInfo(data)})
    .catch(err => {console.log('Retry')})
  }, [])
  
  if(!apiInfo.url) {
    return (
      <h1>Loading...</h1>
    )
  } else return (
    <MainDiv>
      <Header props = {apiInfo}/>
      <Photo props = {apiInfo}/>
      <Information props = {apiInfo}/>
    </MainDiv>
  );
}

export default App;