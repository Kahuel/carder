import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "state";

export const Enemy: React.FC = () => {
  const enemy = useSelector((state: RootState) => state.combat.enemy);
  return (
    <div>
      <p>{enemy.name}</p>
      <p>HP: {enemy.hp}</p>
    </div>
  );
};
