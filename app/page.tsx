'use client'; // To use client-side interactivity
import { useEffect, useState } from 'react';

export default function Home() {
  const [isClientInThailand, setIsClientInThailand] = useState<boolean | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Check if within Thailand's lat/lon bounds
          const isThailand =
            latitude >= 5.0 && latitude <= 20.5 && longitude >= 97.3 && longitude <= 105.7;
          setIsClientInThailand(isThailand);
        },
        (error) => {
          console.error('Geolocation access denied:', error);
          setIsClientInThailand(null);
        }
      );
    }
  }, []);

  return (
    <div>
      <h1>Welcome to the Site</h1>
      {isClientInThailand !== null && (
        <p>
          Client-side Check: {isClientInThailand ? 'You are in Thailand!' : 'You are not in Thailand.'}
        </p>
      )}
    </div>
  );
}
