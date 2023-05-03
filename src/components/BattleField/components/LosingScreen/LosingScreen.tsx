import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "state";

export const LosingScreen: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();

  return (
    <div>
      <p style={{ color: "red" }}>You died.</p>
      <button
        onClick={() => {
          dispatch.player.playerDied();
          dispatch.combat.initBattle();
        }}
      >
        Restart.
      </button>
    </div>
  );
};
