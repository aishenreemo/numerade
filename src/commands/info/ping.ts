import { Command } from "../../structures/command";

export default new Command({
  name: "ping",
  description: "replies with pong",
  run: async ({ interaction }) => {
    interaction.reply(`Pong: ${Date.now() - interaction.createdTimestamp}ms\nAPI: ${Math.round(interaction.client.ws.ping)}ms`);
    }
});

