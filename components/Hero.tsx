'use client';
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [time, setTime] = useState<string>('');
  // const [version, setVersion] = useState("1.0")
  // console.log("version: ", VERSION)
  const version = process.env.VERSION;

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '120px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '6em', fontWeight: 'strong' }}>DEMO</h1>
      <p style={{ fontSize: '3em', fontWeight: 'strong' }}>{time}</p>
      <div style={{ padding: '20px' }}>
        <p>Version: {version ? version : "1,0"}</p>
      </div>
    </div>
  );
};

export default Hero;
