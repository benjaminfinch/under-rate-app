import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const TablaCanciones = () => {
  const [songs, setSongs] = useState([]);
  const params = useParams();

  
  useEffect(() => {
    fetch(`https://web-production-3722.up.railway.app/songs/${params.user_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSongs(data);
      });
  }, []);

  return (
    <>
      <br />
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Canción</th>
              <th scope="col">Promedio</th>
              <th scope="col">Reproducir</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
                return (
                    <tr>
                    <th scope="row">{song.song_id}</th>
                    <td>{song.song_name}</td>
                    <td>{song.average_ratings}</td>
                    <td>
                        <audio controls>
                            <source src={song.sound_archive} type="audio/mpeg" />
                        </audio>
                    </td>
                    </tr>
                );
            })}
           
          </tbody>
        </table>
      </div>
    </>
  );
};
