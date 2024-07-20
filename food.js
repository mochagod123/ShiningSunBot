const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('food')
		.setDescription('send food image!'),
	async execute(interaction) {
        const data = await fetch(`https://nekobot.xyz/api/image?type=food`)
            .then(res=>res.json());
		await interaction.reply(data.message);
	},
};