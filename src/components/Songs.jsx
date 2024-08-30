import { useState } from "react"
import "./Songs.css"
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';

export const Songs = () => {

  const DISC = "src/assets/photo_test.jpg"
  const songs = [
    {
      title: "PATRIOMACHISMO",
      src: "src/assets/song_1.mpeg",
      duration:"2:58"
    },
    {
      title: "LA INTRUSA",
      src: "src/assets/song_2.mpeg",
      duration:"3:57"
    },
    {
      title: "NO KIERO",
      src: "src/assets/song_3.mpeg",
      duration:"3:45"
    },
    {
      title: "BANG BANG",
      src: "src/assets/song_4.mpeg",
      duration:"2:05"
    },
    {
      title: "ALAS",
      src: "src/assets/song_5.mpeg",
      duration:"3:38"
    },
  ]
  
  const [currentSong, setCurrentSong] = useState(songs[0]);

  const handleSong = (event) => {
    setCurrentSong(songs[event.target.getAttribute("data-value")])
  }

  return (
    <div className="page songs" id="songs">
        <h2 className="page_title">ESCUCHANOS</h2>
        <div className="songs_page_container">
          <ul className="song_container">
            {songs.map((song,index) => {
              return (
                <div 
                  key={song.title} 
                  className="every_song_all" 
                  style={song.title == currentSong.title
                    ? {backgroundColor:"black"}
                    : {backgroundColor:"white"}
                  }  
                >
                  <div className="every_song">
                    <img className="disc_img" src={DISC} alt="Portada del disco al que pertenece la canción"/>
                    <i 
                      data-value={index} 
                      onClick={handleSong} 
                      className="fa-solid fa-play play_icon"
                      style={song.title == currentSong.title
                      ? {color:"white"}
                      : {color:"black"}
                      } 
                    ></i>
                    <li 
                      style={song.title == currentSong.title
                      ? {color:"white"}
                      : {color:"black"}
                      }
                    >{song.title}</li>
                  </div>
                  <p 
                    className="duration"
                    style={song.title == currentSong.title
                      ? {color:"white"}
                      : {color:"black"}
                    }
                  >{song.duration}</p>
                </div>
              )
            })}
          </ul>
          {/* <div className="audio_player">
            <p className="song_title">{currentSong.title}</p>
            <audio className="audio_controller" src={currentSong.src} type="audio/mpeg" controls>
            </audio>
          </div> */}
        </div>
        <AudioPlayer
          className="audio_player_react"
          src={currentSong?.src}
          autoPlayAfterSrcChange="false"
          volume={.5}
        />
    </div>
  )
}
