const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fox')
		.setDescription('send fox image!'),
	async execute(interaction) {
        const data = await fetch(`https://randomfox.ca/floof/`)
            .then(res=>res.json());
		await interaction.reply(data.image);
	},
};