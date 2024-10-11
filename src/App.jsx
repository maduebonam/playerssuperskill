import React from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import PlayersList from "./PlayersList";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">FIFA Player Cards</h1>
      <PlayersList />
      <h2 className="italic text-white bg-black mt-3 roundedgi">all right reserved by Egwu Kingsley</h2>
    </div>
  );
}

export default App;