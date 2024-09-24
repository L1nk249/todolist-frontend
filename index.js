import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001') // Appelle l'API backend sur le port 3001
      .then(response => response.text())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <p>Data from backend: {data}</p>
    </div>
  );
}