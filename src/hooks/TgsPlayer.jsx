import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import pako from 'pako';

const TgsPlayer = ({ fileUrl }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(fileUrl)
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        // .tgs files are Gzipped JSON
        const decompressed = pako.inflate(new Uint8Array(buffer), { to: 'string' });
        setAnimationData(JSON.parse(decompressed));
      })
      .catch((err) => console.error("Error loading TGS file:", err));
  }, [fileUrl]);

  if (!animationData) return <div>Loading sticker...</div>;

  return (
    <div style={{ width: 200, height: 200 }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default TgsPlayer;