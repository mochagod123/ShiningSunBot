const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const { createCanvas, loadImage, GlobalFonts } = require('@napi-rs/canvas');
GlobalFonts.registerFromPath('font/BIZ-UDGothicB.ttc', 'migm');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mhavatar')
		.setDescription(`let's create monsterhunter avatar!`)
        .addStringOption(option =>
            option
                .setName('名前')
                .setDescription('名前を指定します。')
                .setRequired(true)
        ),
	async execute(interaction) {
        const background = await loadImage('data/hunter.jpg');
		const canvas = createCanvas(background.width, background.height);
		const context = canvas.getContext('2d');
        // This uses the canvas dimensions to stretch the image onto the entire canvas
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        context.font = '50px migm';
        // Select the style that will be used to fill the text in
        context.fillStyle = '#000000';
        // Actually fill the text with a solid color
        context.fillText(interaction.options.getString("名前"), 270, 50);
        // Use the helpful Attachment class structure to process the file for you
        const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'profile-image.png' });
        interaction.reply({ files: [attachment] });
	},
};