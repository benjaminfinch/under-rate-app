import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";

const artistas = () => {
  const [artistAlbums, setArtistAlbums] = useState([]);
  const navigate = useNavigate();

  
  useEffect(() => {
    fetch("https://web-production-3722.up.railway.app/artists", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setArtistAlbums(data);
      });
  }, []);

  return (
    <section className="fancy-features">
      <div className="continer-fluid p-0 bgGrey">
        <div className="pt-70 pb-30">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-title text-center mb-45 wow fadeInUp">
                  {/*  <div >
                <img src="src/assets/images/iso.svg" width={60} alt="Site Logo" />
              </div> */}
                  <h2 className="text-uppercase anclaDos">
                    Top Álbumes del mes
                  </h2>
                </div>
              </div>
            </div>
            <div className="row pb-10">
              {artistAlbums.map((album, index) => {
                return (
                  <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                    <div className="d-flex justify-content-center mb-40 wow fadeInUp">
                      <div className="" style={{cursor: "pointer"}}>
                        <Image
                          className="shadow"
                          src={album.user_photo}
                          width={260}
                          rounded
                          onClick={()=> navigate(`/reproductor/${album.user_id}`)}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default artistas;
