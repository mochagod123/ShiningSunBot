const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dog')
		.setDescription('send dog image!'),
	async execute(interaction) {
        const data = await fetch(`https://dog.ceo/api/breeds/image/random`)
            .then(res=>res.json());
		await interaction.reply(data.message);
	},
};