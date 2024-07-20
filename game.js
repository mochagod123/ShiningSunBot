const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('game')
		.setDescription(`view help for game.`),
	async execute(interaction) {
        interaction.reply("Let's play game!\n```1./dice .. play dice game.\n2./slot .. play slot game.```");
	},
};