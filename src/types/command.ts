
import { 
  ChatInputApplicationCommandData, 
  CommandInteraction, 
  CommandInteractionOptionResolver,  
  PermissionResolvable
} from "discord.js";
import { NClient } from "../structures/client";

interface RunOpt {
  client: NClient,
  interaction: CommandInteraction,
  args: CommandInteractionOptionResolver
}

type RunFn = (opt: RunOpt) => any;

export type CommandType = {
  userPerm?: PermissionResolvable[],
  run: RunFn,
} & ChatInputApplicationCommandData


