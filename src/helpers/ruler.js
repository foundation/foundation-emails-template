/**
 * Add a horizontal ruler to your email
 * 
 * @example
 * {{ruler align="center" color="#ec6225" width="60px" height="3px" spacing="15px"}}
 * 
 * Attribute Options
 * align: Can be aligned left, right or center. If Undefined alignment defaults to center.
 * color: Must be hex color value
 * width: Can be percentage (50%) or pixel (50px) unit
 * height: Defaults to pixel unit
 * spacing: Default to pixel unit
 * 
 */

module.exports = function(options) {

  // Trim Non-Numberic Chracters
  String.prototype.trimUnit = function() {
    return this.replace(/\D/g, ''); 
  };

  // Variables & Options
  var
    align = options.hash.align,
    color = options.hash.color,
    spacing = options.hash.spacing.trimUnit(),
    height = options.hash.height.trimUnit(),
    width = options.hash.width,
    widthType = '',
    trimWidth = width.trimUnit(),
    spacer = '';

  // Set Undefined Options
  if (typeof align === 'undefined') align = 'center';
  if (typeof color === 'undefined') color = '';
  if (typeof height === 'undefined') height = '';
  if (typeof width === 'undefined') width = '';
  
  if (typeof spacing === 'undefined') {
    spacer = '';
  } else {
    spacer = '\
      <tr>\
        <td>\
          <table border="0" cellpadding="0" cellspacing="0" width="100%" height="'+ spacing +'" style="width:100% !important; height: '+ spacing +'px !important;">\
            <tr>\
              <td valign="top" height="'+ spacing +'" style="font-size: 0%; line-height: '+ spacing +'px; mso-line-height-rule:exactly;">&nbsp;</td>\
            </tr>\
          </table>\
        </td>\
      </tr>';
  };

  // Set Width Variables
  if (width.match('%$')) {
    widthType = width = trimWidth + '%';
  } else if (width.match('px$')) {
    widthType = trimWidth + 'px';
    width = trimWidth;
  } else {
    widthType = 'auto';
    width = trimWidth;
  }

  // HTML Output
  var ruler = '\
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="width:100% !important;">'
      + spacer +
      '<tr>\
        <td>\
          <table align="'+ align +'" border="0" cellpadding="0" cellspacing="0" width="'+ width +'" style="width: '+ width +'px !important;">\
            <tr>\
              <td bgcolor="'+ color +'" valign="top" width="'+ width +'" height="100%" style="width: '+ width +'px !important; font-size: 0%; line-height: '+ height +'px; mso-line-height-rule:exactly;">&nbsp;</td>\
            </tr>\
          </table>\
        </td>\
      </tr>'
      + spacer +
    '</table>\
  ';

  return ruler;
}
