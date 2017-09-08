$(document).ready(function() {
	var header = ''+
	'<div id="site-header">'+
		'<p>'+
			'<a href="index.html">Home</a>'+
			'<a href="ios.html">iPhone</a>'+
			'<a href="mac.html">Mac</a>'+
			'Android'+
			'Windows'+
			'<a href="about.html">About</a>'+
		'</p>'+
		'<hr>'+
	'</div>';
	$('body').prepend(header);

	var footer = ''+
	'<hr>'+
	'<div id="site-footer">'+
		'<p>'+
			'<a href="index.html">Home</a> | '+
			'<a href="ios.html">iPhone & iPad</a> | '+
			'<a href="mac.html">Mac</a> | '+
			'Android | '+
			'Windows<br>'+
			'<a href="about.html">About</a> | '+
			'<a href="mailto:cantonese.tools@gmail.com">Contact</a>'+
		'</p>'+
		'<p><em>© Cantonese Tools, 2017 – Updated October 2017</em></p>'+
	'</div>'

	$('body').append(footer);
});
