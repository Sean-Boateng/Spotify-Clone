import React, {  useState } from 'react';



const SearchBar = (props) => {
    const[title,setTitle]=useState('')
    const[artist,setArtist]=useState('')
    const[album,setAlbum]=useState('')
    const[release_date,setReleaseDate]=useState('')
    const[genre,setGenre]=useState('')


    function getSongBy(song){
        song.preventDefault();
        let search= {
            title: title,
            artist: artist,
            album:album,
            release_date:release_date,
            genre:genre
        };
        console.log(search)
        props.searchSongs(search)
    }
    return(
        <form onSubmit={getSongBy}>
            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Title </label>
            <input type='string' value ={title} onChange={(song)=>setTitle(song.target.value )}/><br/>

            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}> Artist</label>
            <input type= 'string' value ={artist} onChange={(song)=>setArtist(song.target.value)}/><br/>

            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Album </label>
            <input type= 'string' value ={album} onChange={(song)=>setAlbum(song.target.value)}/><br/>
            
            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Release_Date </label>
            <input type='date' value = {release_date} onChange = {(song)=> setReleaseDate(song.target.value)}/>

            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Genre </label>
            <input type= 'string' value ={genre} onChange={(song)=>setGenre(song.target.value)}/><br/>

            
            
            <button >create</button>
        </form>
    )
     
    }
     

 
export default SearchBar ;