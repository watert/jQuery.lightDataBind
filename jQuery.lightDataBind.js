(function($){
	$.fn.ldatabind = function(data){
		var that = this;
		var attrs = {
			"data-text":function(dom,value){ dom.text(value); },
			"data-html":function(dom,value){ dom.html(value); },
			"data-src":function(dom,value){ dom.attr("src",value); },
			"data-href":function(dom,value){ dom.attr("href",value); },
		};
		$.each(attrs,function(attr){
			var bindFunc = this;
			$("["+attr+"]",that).each(function(){
				var d = $(this);
				var key = d.attr(attr);
				var value = data[key];
				bindFunc(d,value);
			});
		});
	};
})(jQuery);