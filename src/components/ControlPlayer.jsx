import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import { useMusicStore } from "../store/musicStore";
import { Player } from "@dalanke/react-audio-player";

const testPlaylist = {
  name: "Temp Playlist",
  description: "",
  musics: [
    {
      src: "https://stayhome-api.herokuapp.com/stream?id=HdQCWXh3XXU",
      title: "Banda nro.1",
      author: "tema nro1",
      thumbnail: "src/assets/images/cover1.png",
    },
    {
      src: "https://stayhome-api.herokuapp.com/stream?id=E8S2IHiuWZA",
      title: "Banda nro.2",
      author: "tema nro2",
      thumbnail: "src/assets/images/cover2.png",
    },
    {
      src: "https://stayhome-api.herokuapp.com/stream?id=WWB01IuMvzA",
      title: "Banda nro.3",
      author: "tema nro3",
      thumbnail: "src/assets/images/cover3.png",
    },
    {
      src: "src/assets/images/cover3.png",
      title: "Banda nro.4",
      author: "tema nro4",
      thumbnail: "src/assets/images/cover4.png",
    },
  ],
};
function Controls() {
  const music = useMusicStore((state) => state.music);
  let [formatedMusic, setFormatedMusic] = useState({
    name: "Playin music",
    description: "",
    musics: [],
  });
  const [playlist, setPlaylist] = useState(null);
  const [hidePlayer, setHidePlayer] = useState(false);
  useEffect(() => {
    console.log("hola");
    music.forEach((song) => {
      const songData = {
        src: song.sound_archive,
        title: song.song_name,
      };
      setFormatedMusic((prev) => {
        return { ...prev, musics: [...prev.musics, songData] };
      });
      formatedMusic.musics.push(songData);
    });
    setPlaylist({ ...formatedMusic });
    console.log(music);
  }, []);
  // const shufflePlaylist = (callback) => {
  //   const copyList = [...music];
  //   for (let i = copyList.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [copyList[i], copyList[j]] = [copyList[j], copyList[i]];
  //   }
  //   setPlaylist({...playlist})
  //     // we need reset the current index after shuffle, pass the call back in here
  //   setPlaylist({...playlist, musics: copyList})
  //   this.setState(
  //     { playlist: { ...this.state.playlist, musics: copyList } },
  //     callback
  //   );
  // };

  return (
    <div className="App">
      <header className="App-header">
        <Player
          playlist={playlist}
          // shufflePlaylist={this.shufflePlaylist}
          // removeFromPlaylist={this.removeFromPlaylist}
          hide={this.state.hidePlayer}
        />
      </header>
    </div>
  );
}

/**---------------------------------------------------------------------------------------------------------- */
/**---------------------------------------------------------------------------------------------------------- */
/**---------------------------------------------------------------------------------------------------------- */
/**---------------------------------------------------------------------------------------------------------- */
class Controles extends React.Component {
  constructor() {
    super();
    this.state = {
      playlist: testPlaylist,
      hidePlayer: false,
    };
  }

  shufflePlaylist = (callback) => {
    const copyList = [...this.state.playlist.musics];
    for (let i = copyList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyList[i], copyList[j]] = [copyList[j], copyList[i]];
    }

    // we need reset the current index after shuffle, pass the call back in here
    this.setState(
      { playlist: { ...this.state.playlist, musics: copyList } },
      callback
    );
  };

  // remove a song from current playlist
  removeFromPlaylist = (index) => {
    const copyList = [...this.state.playlist.musics];
    copyList.splice(index, 1);
    this.setState({ playlist: { ...this.state.playlist, musics: copyList } });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Player
            playlist={this.state.playlist}
            shufflePlaylist={this.shufflePlaylist}
            removeFromPlaylist={this.removeFromPlaylist}
            hide={this.state.hidePlayer}
          />
        </header>
      </div>
    );
  }
}

export default Controles;
