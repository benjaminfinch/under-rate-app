import React from 'react';
import '../App.css';
import { Player } from '@dalanke/react-audio-player';
import Cover1 from '../assets/images/cover1.png'
import Cover2 from '../assets/images/cover2.png'
import Cover3 from '../assets/images/cover3.png'
import Cover4 from '../assets/images/cover4.png'
import ImagenCD1 from "../assets/images/cd1.webp";

const testPlaylist = {
  name: 'Temp Playlist',
  description: '',
  musics: [
    {
      src: 'https://stayhome-api.herokuapp.com/stream?id=HdQCWXh3XXU',
      title: 'Banda nro.1',
      author: 'tema nro1',
      thumbnail: 'src={Cover1}'
    },
    {
      src: 'https://stayhome-api.herokuapp.com/stream?id=E8S2IHiuWZA',
      title: 'Banda nro.2',
      author: 'tema nro2',
      thumbnail: 'src={Cover2}'
    },
    {
      src: "https://stayhome-api.herokuapp.com/stream?id=WWB01IuMvzA",
      title: "Banda nro.3",
      author: "tema nro3",
      thumbnail: 'src={Cover3}'
    },
    {
      src : "src/assets/images/cover3.png",
      title : "Banda nro.4",
      author : "tema nro4",
      thumbnail : 'src={Cover4}'
  }
  ],
}

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
    this.setState({ playlist: { ...this.state.playlist, musics: copyList } }, callback);
  }

  // remove a song from current playlist
  removeFromPlaylist = (index) => {
    const copyList = [...this.state.playlist.musics];
    copyList.splice(index, 1);
    this.setState({ playlist: { ...this.state.playlist, musics: copyList } });
  }

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
