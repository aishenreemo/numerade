
import {
    ApplicationCommandDataResolvable,
  Client,
  ClientEvents,
  Collection
} from "discord.js";
import glob from "glob";
import { promisify } from "util";

const g = promisify(glob);

import { CommandType } from "../types/command";
import { Event } from "./event";

export class NClient extends Client {
  commands: Collection<string, CommandType> = new Collection();

  constructor() {
    // Every single intents
    super({ intents: 32767 });
  }

  async importf(file: string) {
    return (await import(file))?.default;
  }

  run() {
    this.registerModules();
    this.login(process.env.TOKEN);
  }

  async registerCommands(commands: ApplicationCommandDataResolvable[]) {
    this.application?.commands.set(commands)
  } 

  async registerModules() {
    const slashCommands: ApplicationCommandDataResolvable[] = [];
    const commands = await g(`${__dirname}/../commands/*/*{.ts,.js}`);

    commands.forEach(async (f: string) => {
      const command: CommandType = await this.importf(f);
      if(!command.name) return;

      console.log(`Loading command: ${command.name}`);
      this.commands.set(command.name, command);
      slashCommands.push(command);
    });

    this.on("ready", () => {
      this.registerCommands(slashCommands);
    });

    const events = await g(`${__dirname}/../events/*{.ts,.js}`);
    events.forEach(async (f: string) => {
      const event: Event<keyof ClientEvents> = await this.importf(f);
      this.on(event.event, event.run)
      
    });

  }

}


