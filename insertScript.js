console.log('reddit speed sweep working');
var d;
var c;

$(document).ready(function() {
	c = $('.commentarea :nth-child(4)');
	d = c.find('.comment');
	$(document).keypress(function(e) {
		console.log(e);
		var tag = e.target.tagName.toLowerCase();
        if ( e.which === 113 && tag != 'input' && tag != 'textarea') {
       		d.first().remove();
       		c = $('.commentarea :nth-child(4)');
			d = c.find('.comment');
        }
    });
});