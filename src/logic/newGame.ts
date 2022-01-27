import { wallet } from "../wallet";
import { connect4Contract } from "../contract";

export async function newGame(address: string): Promise<void> {
    connect4Contract.newGame(address)
}
