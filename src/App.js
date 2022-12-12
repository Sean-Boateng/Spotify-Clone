import React,{ useEffect, useState } from "react";
import axios from 'axios';
import MusicTable from "./Components/MusicTable";
import NavBar from './Components/NavBar'



function App(){
  const[songs,setSongs]= useState([{title:"mountain", artist:"drake", album: "unk", release_date: "today", genre:"rock"}])
  
  useEffect(()=>{
    getAllSongs();
  },[])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
  }
  return (
    <div>
      <NavBar/>
      <MusicTable parentSongs={songs}/>
  </div>
);
}


export default App;


