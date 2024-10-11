import React from "react";
import Player from "./Player";
import players from "./players";

const PlayersList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
