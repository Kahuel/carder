import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "state";
import { Player, Enemy } from "components";

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
  }, [enemyHp, dispatch.player]);

  if (playerHp < 1) {
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
      <div>
        <button
          onClick={() => {
            initBattle();
          }}
          disabled={enemyHp > 0 && playerHp > 0}
        >
          Start battle.
        </button>
      </div>
    </div>
  );
};
