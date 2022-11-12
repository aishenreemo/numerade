import { Event } from "../structures/event";
import { client } from ".."
import { CommandInteractionOptionResolver } from "discord.js";

export default new Event('interactionCreate', async (interaction) => {
  if (interaction.isCommand()) {
    
    const command = client.commands.get(interaction.commandName);
    
    if (!command) return interaction.followUp("Command doesn't exist");
    console.log(`Interaction created for: ${command.name}`);

    if (command.name === "video") {
      await interaction.deferReply();
    }
    command.run({
      args: interaction.options as CommandInteractionOptionResolver,
      client,
      interaction
    })
  }
});
