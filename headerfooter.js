$(document).ready(function() {
	var header = ''+
	'<div class="header-section">'+
		'<div id="site-header">'+
			'<ul>'+
				'<li><a class="index" href="index.html">Home</a></li>'+
				'<li><a class="ios" href="ios.html">iPhone</a></li>'+
				'<li><a class="mac" href="mac.html">Mac</a></li>'+
				'<li><a class="android" href="android.html">Android</a></li>'+
				'<li>Windows</li>'+
				// '<li><a class="mac" href="about.html">About</a></li>'+
			'</ul>'+
		'</div>'+
		'<hr>'+
	'</div>';
	$('body').prepend(header);

	var footer = ''+
	'<hr>'+
	'<div id="site-footer">'+
		'<p>'+
			'<a href="index.html"><span class="fa"></span> Home</a> | '+
			'<a href="ios.html"><span class="fa"></span> iPhone & iPad</a> | '+
			'<a href="mac.html"><span class="fa"></span> Mac</a> | '+
			'<a href="android.html"><span class="fa"></span> Android</a> | '+
			'<span class="fa"></span> Windows'+
		'</p>'+
		'<p>'+
			'<a href="about.html">About</a> | '+
			'<a href="mailto:cantonese.tools@gmail.com">Contact</a>'+
		'</p>'+
		'<p><em>© Cantonese Tools, 2017 – Updated October 2017</em></p>'+
	'</div>'

	$('body').append(footer);
});
