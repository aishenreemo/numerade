import { Command } from "../../structures/command";
import { Numerade } from "../../lib/numerade";

export default new Command({
  name: "search",
  description: "Search the given problem from numerade",
  options: [{
    name: 'problem',
    description: 'The given problem to be search',
    type: 3,
    required: true
  }],
  run: async ({ interaction }) => {
    let n = new Numerade({ url: "https://numerade.com" });
    let problem = interaction.options.get('problem').value;
    let rate = 4;
    n.search({problem: problem.toString(), rate: rate});
    interaction.reply({
      content: `H Search Result for **${interaction.options.get('problem').value}**`,
    })
      .then(() => console.log(`${interaction.user.username} used 'search' command`))
      .catch(console.error);
  }
})
