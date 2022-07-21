import { actionsCost } from "components/actions/actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "state";

//лютый костыль с энергией

export const Player: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();
  const { player, enemy } = useSelector((state: RootState) => state.combat);
  return (
    <div>
      <p>{player?.name}</p>
      <p>HP: {player?.hp}</p>
      <p>Energy: {player?.energy}</p>
      <div>
        {player?.actions.map((actionName: string) => (
          <button
            onClick={() => {
              dispatch.combat.playerAction(actionName);
            }}
            disabled={enemy.hp < 1 || player.energy < actionsCost[actionName]}
          >
            {actionName} {actionsCost[actionName]}
          </button>
        ))}
        <button
          onClick={() => {
            dispatch.combat.endTurn();
          }}
          disabled={enemy?.hp < 1}
        >
          End turn
        </button>
      </div>
    </div>
  );
};
