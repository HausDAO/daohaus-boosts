import { MolochTokenCreated } from "../generated/MolochTokenFactory/MolochTokenFactory";
import { MolochToken } from "../generated/schema";
import { addTransaction } from "./transactions";

// event MolochTokenCreated(address molochToken, address moloch, string name, string symbol);
export function handleNewMolochToken(event: MolochTokenCreated): void {
  let molochTokenId = event.params.molochToken.toHexString();
  let molochToken = new MolochToken(molochTokenId);

  molochToken.moloch = event.params.moloch;
  molochToken.name = event.params.name;
  molochToken.symbol = event.params.symbol;

  molochToken.save();

  addTransaction(event.block, event.transaction);
}
