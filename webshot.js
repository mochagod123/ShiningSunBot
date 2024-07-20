const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('webshot')
		.setDescription(`take a screenshot of the website!`)
        .addStringOption(option =>
            option
                .setName('url')
                .setDescription('URLを指定します。')
                .setRequired(true)
        ),

	async execute(interaction) {
        await interaction.deferReply();
        try {
            const data = await fetch("https://securl.nu/jx/get_page_jx.php",{
                "method": "POST",
                "headers":{
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                "body": `url=${interaction.options.getString("url")}&waitTime=1&browserWidth=1000&browserHeight=1000`
            }).then(res=>res.json());
            const image = await fetch(`https://securl.nu${data.img}`)
            .then(res=>res.blob());
            const images = new AttachmentBuilder()
                .setFile(image.stream())
                .setName("screenshot.png")
            await interaction.editReply({ files:[images] });
        } catch(e) {
            await interaction.editReply("取得できませんでした。");
        }
	},
};