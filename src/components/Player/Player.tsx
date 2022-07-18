import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "state";

export const Player: React.FC = () => {
  const player = useSelector((state: RootState) => state.combat.player);
  return (
    <div>
      <p>{player?.name}</p>
      <p>HP: {player?.hp}</p>
    </div>
  );
};
