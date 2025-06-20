import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import './MyGlobe.css';  // ✅ CSS import

const MyGlobe = () => {
  const globeEl = useRef();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    setPlaces([
      { lat: 37.5665, lng: 126.9780, name: 'Seoul' },
      { lat: 35.6895, lng: 139.6917, name: 'Tokyo' }
    ]);

    // 초기 시점 설정 (예: 서울 중심)
    setTimeout(() => {
      globeEl.current.pointOfView({ lat: 37.5665, lng: 126.9780, altitude: 2 }, 3000);
    }, 1000);
  }, []);

  return (
    <div className="globe-container">
      <Globe
        ref={globeEl}
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundImageUrl="https://unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={places}
        pointLat={(d) => d.lat}
        pointLng={(d) => d.lng}
        pointColor={() => '#38BDF8'}
        pointAltitude={() => 0.03}
        pointLabel={(d) => d.name}
        labelSize={2.4}
        labelDotRadius={1}
        labelColor={() => '#FACC15'}
      />
    </div>
  );
};

export default MyGlobe;
