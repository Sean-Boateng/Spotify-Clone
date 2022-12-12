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

 // async function searchSongs(){
  //  let response = await axios.get('http://127.0.0.1:8000/api/music/');
  //  let newResponse = response.filter(function(el){
  //    if((el.title || el.artist || el.album || el. release_date || el.genre).includes(getSongBy)){
 //       return true;
  //    }
  //    else{
   //     return('Not Found')
   ///   }
  //  })
//  }



  return (
    <div>
      <NavBar/>
      <MusicTable parentSongs={songs}/>
      <SearchBar searchSongs={songs}/>
  </div>
);
}


export default App;


