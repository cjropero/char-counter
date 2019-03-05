$(function () {
	var d = (diffHeight = newSaltos = 0);
	var e = 16;

	function refreshHeight(a) {
		var b = $(a).height();
		newSaltos = $(a).val().split('\n').length - 1;
		$.each($(a).val().split('\n'), function (i, v) {
			if (v.length >= 75) {
				newSaltos += Math.round(v.length / 75 - 0.5);
			}
		});
		if (newSaltos != d) {
			if (newSaltos >= 16) {
				newSaltos = 15;
			}
			if (newSaltos >= 1) {
				diffHeight = newSaltos * (22 - Math.round(newSaltos / 2 - 0.5)) - b;
			} else {
				diffHeight = e - b;
			}
			if (diffHeight && newSaltos != d) {
				$(a).stop().animate({ height: '+=' + diffHeight }, 100);
			}
			d = newSaltos;
		}
	}
	$('#counter').bind('input propertychange', function () {
		var a = $(this).val();
		var b = a.split(/\s/);
		var c = 0;
		$.each(b, function (i, v) {
			v != '' ? c++ : false;
		});
		$('.characteres-count').html(a.length);
		$('.words-count').html(c);
		refreshHeight(this);
	});
});
