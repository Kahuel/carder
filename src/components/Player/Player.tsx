import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "state";

export const Player: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();
  const { player, enemy } = useSelector((state: RootState) => state.combat);
  return (
    <div>
      <p>{player?.name}</p>
      <p>HP: {player?.hp}</p>
      <div>
        {player?.actions.map((el: string) => (
          <button
            onClick={() => {
              dispatch.combat.playerAction(el);
            }}
            disabled={enemy.hp < 1}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
};
