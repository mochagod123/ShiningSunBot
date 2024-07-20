const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hunter')
		.setDescription('send hunter image!'),
	async execute(interaction) {
		await interaction.reply('https://livedoor.blogimg.jp/huntercatjp/imgs/6/2/6284be11.png');
	},
};