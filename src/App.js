import React,{ useEffect, useState } from "react";
import axios from 'axios';
import MusicTable from "./Components/MusicTable";
import NavBar from './Components/NavBar'
import SearchBar from "./Components/SearchBar";
import AddMusic from "./Components/AddMusic";
import './Components/Decor.css'



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
    let newResponse = songs.filter(function(el){
      if(el.title.includes(search) || el.artist.includes(search) || el.album.includes(search) || el.release_date.includes(search) || el.genre.includes(search) ){
        return true;
      }
    })
    setSongs(newResponse)  
  }

  async function AddNewMusic(newEntry){
    console.log(newEntry)
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newEntry);
    if (response.status === 201){
      await getAllSongs()
    }
    setSongs(response)
  }



  return (
    <div id="overall" >
      <nav><NavBar/></nav>
        <div>
          <div id="box1">


            <div className="row" >
              <div class='col-md-6'>
                <div className="border-box">
                  <SearchBar searchSongs={searchSongs}/>
                </div>
              </div>
              <div class='col-md-6'>
                <div className="border-box">
                  <AddMusic addasong = {AddNewMusic}/>
                </div>
              </div>
               <div> 
            </div>      
          </div>
        </div>
      </div>

      <div class="container" st>
  
        <div class="row">
          <div class="col">
                
            </div>
              <div class="col-5" style={{padding: "3em"}}>
                <MusicTable  parentSongs={songs}/>  
              </div>
            <div class="col">
                
          </div>
        </div>
      </div>



    </div>
    
);
}


export default App;


