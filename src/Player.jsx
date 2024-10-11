import React from "react";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div className="max-w-sm h-96 bg-black rounded overflow-hidden shadow-xlg p-4">
      <img className="w-full h-44" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-white">Team: {team}</p>
        <p className="text-white">Nationality: {nationality}</p>
        <p className="text-white text-base">Jersey Number: {jerseyNumber}</p>
        <p className="text-white text-base">Age: {age}</p>
      </div>
    </div>
  );
};

// Default props (optional)
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/150"
};

export default Player;
