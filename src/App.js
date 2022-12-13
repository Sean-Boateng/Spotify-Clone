import React,{ useEffect, useState } from "react";
import axios from 'axios';
import MusicTable from "./Components/MusicTable";
import NavBar from './Components/NavBar'
import SearchBar from "./Components/SearchBar";



function App(){
  const[songs,setSongs]= useState([{title:"mountain", artist:"drake", album: "unk", release_date: "today", genre:"rock"}])
  
  useEffect(()=>{
    getAllSongs();
  },[])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
  }

 
  async function searchSongs(search){
    console.log(search)
    debugger
    let newResponse = songs.filter(function(el){
      if(el.title.includes(search) || el.artist.includes(search) || el.album.includes(search) || el.release_date.includes(search) || el.genre.includes(search) ){
        return true;
      }
    })
    
    
    setSongs(newResponse)

    
  }



  return (
    <div>
      <NavBar/>
      <MusicTable parentSongs={songs}/>
      <SearchBar searchSongs={searchSongs}/>
  </div>
);
}


export default App;


