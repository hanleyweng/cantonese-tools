$(document).ready(function() {
	var header = ''+
	'<div class="header-section">'+
		'<div id="site-header">'+
			'<ul>'+
				'<li><a class="index" href="index.html">Home</a></li>'+
				'<li><a class="ios" href="ios.html">iPhone</a></li>'+
				'<li><a class="mac" href="mac.html">Mac</a></li>'+
				'<li><a class="android" href="android.html">Android</a></li>'+
				'<li><a class="windows" href="windows.html">Windows</a></li>'+
				'<li><a class="translate" href="translate.html">Translate</a></li>'+
				'<li><a class="siri" href="siri.html">Siri</a></li>'+
				// '<li><a class="mac" href="about.html">About</a></li>'+
			'</ul>'+
		'</div>'+
		'<hr>'+
	'</div>';
	$('body').prepend(header);

	var footer = 
	"<a href='https://ko-fi.com/X7X53BJ07' target='_blank' class='donation button'><img src='../images/general/support-button.png' height='42' style='text-align:center;height:42px;display:block;' alt='Support Cantonese Tools at ko-fi.com' /></a>"+
	''+
	'<hr>'+
	'<div id="site-footer">'+
		'<p>'+
			'<a href="index.html" class="index"><span class="fa"></span> Home</a> | '+
			'<a href="ios.html" class="ios"><span class="fa"></span> iPhone & iPad</a> | '+
			'<a href="mac.html" class="mac"><span class="fa"></span> Mac</a> | '+
			'<a href="android.html" class="android"><span class="fa"></span> Android</a> | '+
			'<a href="windows.html" class="windows"><span class="fa"></span> Windows</a> | ' +
			'<a href="translate.html" class="translate"><span class="fa"></span> Translate</a>'+ ' | ' +
			'<a href="siri.html" class="siri"><span class="fa"></span> Siri</a>'+
		'</p>'+
		'<p>'+
			'<a href="about.html">About</a> | '+
			'<a href="mailto:cantonese.tools@gmail.com">Contact</a>'+
		'</p>'+
		'<p><em>© Cantonese Tools, 2020 – Updated Mar 2021</em></p>'+
	'</div>'

	$('body').append(footer);
});
