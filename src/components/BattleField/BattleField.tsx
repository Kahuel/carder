import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "state";
import { Player, Enemy } from "components";
import { LosingScreen, WinningScreen } from "./components";

export const BattleField: React.FC = () => {
  const dispatch = useDispatch<Dispatch>();
  const playerHp = useSelector((state: RootState) => state.combat.player?.hp);
  const enemyHp = useSelector((state: RootState) => state.combat.enemy?.hp);

  const initBattle = () => {
    dispatch.combat.initBattle();
  };

  useEffect(() => {
    if (enemyHp < 1) {
      dispatch.player.addToKilledCounter();
    }
  }, [enemyHp]);

  if (playerHp < 1) {
    return <LosingScreen />;
  }
  if (enemyHp < 1) {
    return <WinningScreen />;
  }

  return (
    <div>
      {playerHp !== undefined && (
        <div>
          <Player />
        </div>
      )}
      {enemyHp !== undefined && (
        <div>
          <Enemy />
        </div>
      )}
      {!playerHp && (
        <div>
          <button
            onClick={() => {
              initBattle();
            }}
          >
            Start battle.
          </button>
        </div>
      )}
    </div>
  );
};
