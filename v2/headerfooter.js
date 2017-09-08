$(document).ready(function() {
	var header = ''+
	'<div id="site-header">'+
		'<ul>'+
			'<li><a class="index" href="index.html">Home</a></li>'+
			'<li><a class="ios" href="ios.html">iPhone</a></li>'+
			'<li><a class="mac" href="mac.html">Mac</a></li>'+
			'<li>Android</li>'+
			'<li>Windows</li>'+
		'</ul>'+
	'</div>'+
	'<hr>';
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
