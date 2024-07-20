const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('google')
		.setDescription(`search on google!`)
        .addStringOption(option =>
            option
                .setName('検索ワード')
                .setDescription('検索ワードを指定します。')
                .setRequired(true)
        ),
	async execute(interaction) {
        interaction.reply(`https://www.google.com/search?q=${interaction.options.getString("検索ワード")}`);
	},
};