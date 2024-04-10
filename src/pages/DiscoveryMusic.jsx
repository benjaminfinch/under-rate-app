import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DiscoveryMusic = () => {
  const navigate = useNavigate();
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch("https://web-production-3722.up.railway.app/artists")
      .then((response) => response.json())
      .then((data) => {
        setArtists(data);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Descubre música</h1>
        <div className="container">
          <div className="row">
            {artists.map((artist) => {
              return (
                <>
                  <div className="col-md-4">
                    <div
                      class="card"
                      style={{ width: "18rem", cursor: "pointer"}}
                      onClick={() => navigate("/reproductor")}
                    >
                      <img
                        class="card-img-top"
                        src={artist.user_photo}
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <p class="card-text">
                            {artist.username}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
