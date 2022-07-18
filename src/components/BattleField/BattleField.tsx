import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "state";
import { Player, Enemy } from "components";

export const BattleField: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();
  const { player, enemy } = useSelector((state: RootState) => state.combat);

  const initBattle = () => {
    dispatch.combat.initBattle();
  };

  return (
    <div>
      {player && (
        <div>
          <Player />
        </div>
      )}
      {enemy && (
        <div>
          <Enemy />
        </div>
      )}
      <div>
        <button
          onClick={() => {
            initBattle();
          }}
          disabled={enemy?.hp > 0 && player?.hp > 0}
        >
          Start battle.
        </button>
      </div>
    </div>
  );
};
