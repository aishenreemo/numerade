import { Command } from "../../structures/command";
import { Numerade } from "../../lib/numerade";

export default new Command({
  name: "video",
  description: "Get the video tutorial for the given problem",
  options: [{
    name: 'link',
    description: 'The link of problem',
    type: 3,
    required: true
  }],
  run: async ({ interaction }) => {
    
    const n = new Numerade({ url: "https://numerade.com" });
    const link = interaction.options.get('link').value;
    let video = "";

    try {
       video = await n.getVideo(link.toString());
    } catch(error) {
      await interaction.editReply(
        'There is an error with the link. Please try the other one',
      )
        .then(i => {
          setTimeout(() => i.delete(), 5000)
        })
    }
    
    await interaction.editReply({
      files: [{
        attachment: video,
        name: 'videotutor.mp4'
      }]
    })
      .then(() => console.log(`${interaction.user.username} used 'video' command`))
      .catch(console.error);
  }
})
