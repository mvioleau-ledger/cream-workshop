import { wallet } from "../wallet";
import { connect4Contract } from "../contract";
import { BigNumber } from "ethers";

export async function getMyActiveGames(): Promise<number[]> {
    const ids:BigNumber[] = await connect4Contract.getActiveGamesIds()
    const activeGames:number[] = []
    for (const id of ids) {
        activeGames.push(id.toNumber())
    }

    return activeGames
}
