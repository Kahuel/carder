import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "state";
import { Player, Enemy } from "components";

export const BattleField: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.combat.initBattle();
  }, []);

  return (
    <div>
      <div>
        <Player />
      </div>
      <div>
        <Enemy />
      </div>
    </div>
  );
};
