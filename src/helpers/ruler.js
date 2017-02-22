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

	// Trim Non-Numberic Chracters
	String.prototype.trimUnit = function() { return this.replace(/\D/g, ''); }
	
	// Variables & Options
	var color = options.hash.color,
	    spacing = options.hash.spacing.trimUnit(),
	    height = options.hash.height.trimUnit(),
	    width = options.hash.width,
	    widthType = '',
	    trimWidth = width.trimUnit(),
	    spacer = '';

	// Set Undefined Options
	if (typeof color === 'undefined') color = '';
	if (typeof height === 'undefined') height = '';
	if (typeof width === 'undefined') width = '';
	if (typeof spacing === 'undefined') {
		spacer = '';
	} else {
		spacer = '<tr height="'+spacing+'"><td height="'+spacing+'"></td></tr>';
	};

	// Set Width Variables
	if(width.match('%$')) {
		widthType = width = trimWidth+'%';
	} else if (width.match('px$')) {
		widthType = trimWidth+'px';
		width = trimWidth;
	} else {
		widthType = 'auto';
		width = trimWidth;
	}

	// HTML Output
	var ruler = '<table align="center" border="0" cellpadding="0" cellspacing="0" width="'+width+'" height="'+height+'" style="width:'+widthType+' !important; height: '+height+'px !important;">\
		'+spacer+'\
		<tr height="'+height+'"><td bgcolor="'+color+'" align="center" valign="top" width="'+width+'" height="'+height+'" style="font-size: 0%; line-height:'+height+'px; mso-line-height-rule:exactly;">\
			<img src="https://spacergif.org/spacer.gif" width="'+width+'" height="'+height+'" />\
		</td></tr>\
		'+spacer+'\
	</table>';

	return ruler;
}
