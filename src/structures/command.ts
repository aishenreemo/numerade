import { CommandType } from "../types/command";

export class Command {
  constructor(commandOpt: CommandType) {
    Object.assign(this, commandOpt);
  }
}
