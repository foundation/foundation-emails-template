/**
 * Bullet Proof Background Images
 * https://backgrounds.cm/
 * 
 * @example
 * {{#bg-img src="assets/img/image.jpg" classes="hero-header" imgwidth="900" imgheight="520" bgcolor="#212831" top_padding="30" bottom_padding="30" fitcontent="true"}}
 * Your Content Here
 * {{/bg-img}}
 * 
 * Attribute Options
 * src: Path to your background image
 * classes: Adds custom classes to main <table> tag for custom css styling
 * imgwidth: Sets the width for Outlooks <v:rect> tag.
 * imgheight: Sets the height for Outlooks <v:rect> tag.
 * bgcolor: Sets background color for the block of code. Must be hex value (#212831)
 * top_padding: Adds padding to the top the background image block
 * bottom_padding: Adds padding to the bottom the background image block.
 * fitcontent: Sets mso-fit-shape-to-text:true. Use at your own risk.
 * 
 */

module.exports = function(options) {

	// Trim Non-Numberic Chracters
	String.prototype.trimUnit = function() { return this.replace(/\D/g, ''); }

	// Variables & Options
	var src = options.hash.src,
		  bgcolor = options.hash.bgcolor,
		  classes = options.hash.classes,
		  imgwidth = options.hash.imgwidth,
		  imgheight = options.hash.imgheight,
		  top_padding = options.hash.top_padding,
		  bottom_padding = options.hash.bottom_padding,
		  fitcontent = options.hash.fitcontent,
		  msofit = '',
		  unitHeight = '',
		  spacer_top = '',
		  spacer_bot = '',
		  unitHeight = 'height: '+imgheight+'px;';
	
	// Set Undefined Options
	if (typeof src === 'undefined') src = '';
	if (typeof bgcolor === 'undefined') bgcolor = '';
	if (typeof classes === 'undefined') classes = '';
	if (typeof imgwidth === 'undefined') imgwidth = '';
	if (typeof imgheight === 'undefined') imgheight = '';
	if (typeof top_padding === 'undefined') top_padding = '';
	if (typeof bottom_padding === 'undefined') bottom_padding = '';
	if (typeof fitcontent === 'undefined') fitcontent = '';

	if (fitcontent === 'true') {
		msofit = 'style="mso-fit-shape-to-text:true"';
	}

	if (top_padding.length > 0) {
		top_padding = top_padding.trimUnit();
		spacer_top = '<tr class="bulletproof-bg-spacer"><td height="'+top_padding+'" style="height: '+top_padding+'px !important;"></td></tr>';
	}

	if (bottom_padding.length > 0) {
		bottom_padding = bottom_padding.trimUnit();
		spacer_bot = '<tr class="bulletproof-bg-spacer"><td height="'+bottom_padding+'" style="height: '+bottom_padding+'px !important;"></td></tr>';
	}

	// HTML Output
	var bg = '<table background="assets/img/hero-header.jpg" align="center" class="bulletproof-bg '+classes+'" border="0" cellpadding="0" cellspacing="0" width="100%">\
			<tr valign="top">\
				<td background="'+ src +'" bgcolor="'+ bgcolor +'" valign="top" align="center" style="text-align: center; background-position: center center !important; background-size: auto 100% !important; background-repeat: no-repeat !important;">\
					<!--[if gte mso 9]>\
						<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:'+imgwidth+'px;'+unitHeight+' background-position: center center !important;">\
						<v:fill type="tile" src="'+ src +'" color="'+ bgcolor +'" />\
						<v:textbox '+msofit+' inset="0,0,0,0">\
					<![endif]-->\
					<div>\
						<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">'
							+ spacer_top +
							'<tr valign="top">\
								<td valign="top">'
									+ options.fn(this) +
								'</td>\
							</tr>'
							+ spacer_bot +
						'</table>\
					</div>\
					<!--[if gte mso 9]>\
					<p style="margin:0 !important;mso-hide:all !important;"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p>\
					</v:textbox>\
					</v:rect>\
					<![endif]-->\
				</td>\
			</tr>\
      </table>';

	return bg;
}
