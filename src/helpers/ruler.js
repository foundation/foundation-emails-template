/**
 * Add a horizontal ruler to your email
 * 
 * @example
 * {{{ruler color="#ec6225" width="60px" height="3px" spacing="15px"}}}
 * 
 * Attribute Options
 * color: Must be hex color value
 * width: Can be percentage (50%) or pixel (50px) unit
 * height: Defaults to pixel unit
 * spacing: Default to pixel unit
 * 
 */

module.exports = function(options) {

	String.prototype.trimUnit = function() { return this.replace(/\D/g, ''); }
	var color = options.hash.color;
	var spacing = options.hash.spacing.trimUnit();
	var height = options.hash.height.trimUnit();
	var width = options.hash.width;
	var widthType = '';
	var trimWidth = width.trimUnit();
	var spacer = '';

	if (typeof color === 'undefined') color = '';
	if (typeof height === 'undefined') height = '';
	if (typeof width === 'undefined') width = '';

	if (typeof spacing === 'undefined') {
		spacer = '';
	} else {
		spacer = '<tr height="'+spacing+'"><td height="'+spacing+'"></td></tr>';
	};

	if(width.match('%$')) {
		widthType = width = trimWidth+'%';
	} else if (width.match('px$')) {
		widthType = trimWidth+'px';
		width = trimWidth;
	} else {
		widthType = 'auto';
		width = trimWidth;
	}

	var ruler = '<table align="center" border="0" cellpadding="0" cellspacing="0" width="'+width+'" height="'+height+'" style="width:'+widthType+' !important; height: '+height+'px !important;">\
		'+spacer+'\
		<tr height="'+height+'"><td bgcolor="'+color+'" align="center" valign="top" width="'+width+'" height="'+height+'" style="font-size: 0%; line-height:'+height+'px; mso-line-height-rule:exactly;">\
			<img src="https://spacergif.org/spacer.gif" width="'+width+'" height="'+height+'" />\
		</td></tr>\
		'+spacer+'\
	</table>';

	return ruler;
}
