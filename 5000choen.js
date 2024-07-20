const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('5000choen')
		.setDescription('send 5000choen image!')
        .addStringOption(option =>
            option
                .setName('上')
                .setDescription('上を指定します。')
                .setRequired(true) //trueで必須、falseで任意
        ).addStringOption(option =>
            option
                .setName('下')
                .setDescription('下を指定します。')
                .setRequired(true) //trueで必須、falseで任意
        ),
	async execute(interaction) {
		await interaction.reply(`https://gsapi.cbrx.io/image?top=${interaction.options.getString("上")}&bottom=${interaction.options.getString("下")}`);
	},
};