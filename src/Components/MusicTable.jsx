const MusicTable = (props) => {
    return ( 
        <table class="table">
        <thead>
          <tr>
            <th> Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release_Date</th>
            <th>Genre</th>
          </tr>
        </thead>

        <tbody>
          {props.parentSongs.map((songs) => {
              return(
                <tr >
                  <td>{songs.title}</td>
                  <td>{songs.artist}</td>
                  <td>{songs.album}</td>
                  <td>{songs.release_date}</td>
                  <td>{songs.genre}</td>
                </tr>
              );
          }
          )}           
        </tbody>
      </table>
     );
}
 
export default MusicTable;