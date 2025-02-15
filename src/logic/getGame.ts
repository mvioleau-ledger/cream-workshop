import { wallet } from "../wallet";
import { connect4Contract } from "../contract";
import { GameData } from "../types";

export async function getGameData(gameId: number): Promise<GameData> {
    return connect4Contract.games(gameId)
}
