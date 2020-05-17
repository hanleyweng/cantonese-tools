$(document).ready(function() {
	var header = ''+
	'<div class="header-section">'+
		'<div id="site-header">'+
			'<ul>'+
				'<li><a class="index" href="index.html">Home</a></li>'+
				'<li><a class="ios" href="ios.html">iPhone</a></li>'+
				'<li><a class="mac" href="mac.html">Mac</a></li>'+
				'<li><a class="android" href="android.html">Android</a></li>'+
				'<li><span class="unavailable">Windows</li></span>'+
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
			'<a href="index.html" class="index"><span class="fa"></span> Home</a> | '+
			'<a href="ios.html" class="ios"><span class="fa"></span> iPhone & iPad</a> | '+
			'<a href="mac.html" class="mac"><span class="fa"></span> Mac</a> | '+
			'<a href="android.html class="android"><span class="fa"></span> Android</a> | '+
			'<span class="unavailable"><span class="fa"></span> Windows</span>'+
		'</p>'+
		'<p>'+
			'<a href="about.html">About</a> | '+
			'<a href="mailto:cantonese.tools@gmail.com">Contact</a>'+
		'</p>'+
		'<p><em>© Cantonese Tools, 2020 – Updated May 2020</em></p>'+
	'</div>'

	$('body').append(footer);
});
