import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "state";

export const WinningScreen: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();
  return (
    <div>
      <p style={{ color: "green" }}>You won.</p>
      <button
        onClick={() => {
          dispatch.combat.initBattle();
        }}
      >
        Next battle.
      </button>
    </div>
  );
};
