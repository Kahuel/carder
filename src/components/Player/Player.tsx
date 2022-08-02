import { actions } from "actions/actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "state";

export const Player: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();
  const player = useSelector((state: RootState) => state.combat.player);
  const enemyHP = useSelector((state: RootState) => state.combat.enemy.hp);

  return (
    <div>
      <p>{player.name}</p>
      <p>HP: {player.hp}</p>
      <p>Energy: {player.energy}</p>
      <p>Enemy killed: {player.enemyKilled}</p>
      <div>
        {player.actions.map((actionName: string, index: number) => {
          const action = actions(player.strength, player.hp)[actionName];

          return (
          <button key={String(index)}
            onClick={() => {
              dispatch.combat.playerAction(actionName);
            }}
            disabled={enemyHP < 1 || player.energy < action.cost}
          >
            {actionName}<br/>
            <span style={{fontSize: 'xx-small'}}>energy cost: {action.cost}</span><br/>
            <span style={{fontSize: 'xx-small'}}>{action.damage && `damage ${action.damage}`}</span>
          </button>
        )})}
        <button
          onClick={() => {
            dispatch.combat.endTurn();
          }}
          disabled={enemyHP < 1}
        >
          End turn
        </button>
      </div>
    </div>
  );
};
