const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('neko')
		.setDescription('send neko image!'),
	async execute(interaction) {
        const data = await fetch(`https://nekobot.xyz/api/image?type=neko`)
            .then(res=>res.json());
		await interaction.reply(data.message);
	},
};