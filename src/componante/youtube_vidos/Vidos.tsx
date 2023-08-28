import { useEffect, useState } from 'react';

const Vidos = () => {
  const [data, setData] = useState<any | null>(null);

  const apiKey:string = 'AIzaSyAtamv_SK-sQiO4K6uajd1xAC3KoKJMhZ8'; // Replace with your YouTube API key

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet&id=VIDEO_ID`)
      .then(res => res.json())
      .then(responseData => {
        setData(responseData);
      }) 
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return <div>Vidos</div>;
};

export default Vidos;