import { wallet } from "../wallet";
import { connect4Contract } from "../contract";

export async function getGameState(gameId: number): Promise<number[][]> {
    return connect4Contract.getBoard(gameId)
}
