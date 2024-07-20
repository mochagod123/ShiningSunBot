const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('slot')
		.setDescription(`let's play slot game.`),
	async execute(interaction) {
        let a = Math.floor( Math.random() * 9);
        let b = Math.floor( Math.random() * 9);
        let c = Math.floor( Math.random() * 9);
        interaction.reply(`-------  o\n| ${a} ${b} ${c} | -I\n-------`);
	},
};