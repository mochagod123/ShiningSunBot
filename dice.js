const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice')
		.setDescription(`let's play dice game.`),
	async execute(interaction) {
        let r = Math.floor( Math.random() * 5);
        interaction.reply(`${r + 1}が出ました!`);
	},
};