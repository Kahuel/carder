import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "state";
import { actions } from "actions/actions";

export const Enemy: React.FC = () => {
  const enemy = useSelector((state: RootState) => state.combat.enemy);
  const {turn} = useSelector((state: RootState) => state.combat);

  const actionName = enemy.pattern[(turn - 1) % enemy.pattern.length];
  const action = actions(enemy.strength, enemy.hp)[actionName];
  return (
    <div>
      <p>{enemy.name}</p>
      {enemy.hp > 0 && (
        <p>Prepares to do <span style={{textDecoration: 'underline'}}>{actionName}</span> (damage: {action.damage})</p>
      )}
      <p>HP: {enemy.hp}</p>
    </div>
  );
};
