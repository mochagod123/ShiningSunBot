const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('uranai')
		.setDescription(`let's do some fortune telling!`),
	async execute(interaction) {
        let omikuji = ["大吉","吉","中吉","小吉","末吉","凶","大凶"];
        let r = Math.floor( Math.random() * omikuji.length);
        interaction.reply(omikuji[r]);
	},
};