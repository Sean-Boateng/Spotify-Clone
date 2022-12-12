import { useEffect, useState } from "react";
import axios from 'axios';
import MusicTable from "./Components/MusicTable";


function App(){
  const[songs,setSongs]= useState([{title:"mountain", artist:"drake", album: "unk", release_date: "today", genre:"rock"}])

  return (
    <div>
      <MusicTable parentSongs={songs}/>
    </div>
  );
}


export default App;
