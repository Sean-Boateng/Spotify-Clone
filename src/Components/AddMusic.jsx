import React, { useState } from 'react';

const AddMusic = (props) => {

    const[title,setTitle]=useState('')
    const[artist,setArtist]=useState('')
    const[album,setAlbum]=useState('')
    const[release_date,setReleaseDate]=useState('')
    const[genre,setGenre]=useState('')


    function addNewSong(songdetails){
        songdetails.preventDefault();
        let newEntry = {
            title: title,
            artist: artist,
            album:album,
            release_date:release_date,
            genre:genre
        };
        console.log(newEntry)
        props.addasong(newEntry)
    }
    return ( 
        <form onSubmit ={addNewSong}>
            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Title</label>
            <input type='string' value ={title} onChange={(songdetails)=>setTitle(songdetails.target.value )}/><br/>

            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}> Artist</label>
            <input type= 'string' value ={artist} onChange={(songdetails)=>setArtist(songdetails.target.value)}/><br/>

            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Album </label>
            <input type= 'string' value ={album} onChange={(songdetails)=>setAlbum(songdetails.target.value)}/><br/>
            
            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Release_Date </label>
            <input type='date' value = {release_date} onChange = {(songdetails)=> setReleaseDate(songdetails.target.value)}/><br/>

            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Genre </label>
            <input type= 'string' value ={genre} onChange={(songdetails)=>setGenre(songdetails.target.value)}/><br/>    
            <button type='submit' >Add</button>
        </form >
     );
}
 
export default AddMusic;