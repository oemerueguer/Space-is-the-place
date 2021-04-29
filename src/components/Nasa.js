import {useState, useEffect} from "react";
import { Card, Icon } from 'semantic-ui-react';
import Axios from "axios";
import './Nasa.css'

const apiKey = process.env.REACT_APP_NASA_KEY;

function Nasa() {
  const [nasaData, setNasaData] = useState(null);

  useEffect(() => {
    fetchNasaData();
  }, []);

  const fetchNasaData = async () => {
    await Axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((response) => setNasaData(response.data))
      .catch((error) => console.log(error));
  };
  if (!nasaData) return (
    <div>
      <p>Loading...</p>
    </div>
    );

  console.log(nasaData);
  return (
    <>
    <div className="nasa-photo">
      {nasaData.media_type === "image" ? (
        <img
          src={nasaData.url}
          alt={nasaData.title}
          className="photo"
        />
      ) : (
        <iframe
          title="space-video"
          src={nasaData.url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="photo"
        />
      )}
                          <Card
                        className='CardLayOut'
                        header={nasaData.title}
                        meta='Nasa Astronomy Picture of the Day'
                        aligned="center"
                        description={nasaData.explanation}
                        extra={<p>
                            <Icon name='Copyright' />
                            {nasaData.copyright && `Copyright: ${nasaData.copyright}`}
                            <Icon name='created_at' />
                            {`Picture from: ${nasaData.date}`}
                        </p>}
                        centered
                    />
    </div>
    </>
  );
}

export default Nasa;