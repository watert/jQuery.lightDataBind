(function($){
	$.fn.ldatabind = $.fn.ldata = function(data){
		var that = this;
		var isVal = function(value){
			return value&&value!=""&&value!=0;
		};
		var attrs = {
			"data-text":function(dom,value){ return isVal(value)?dom.text(value):dom.text(); },
			"data-html":function(dom,value){ return isVal(value)?dom.html(value):dom.html(); },
			"data-src":function(dom,value){ return isVal(value)?dom.attr("src",value):dom.attr("src"); },
			"data-href":function(dom,value){ return isVal(value)?dom.attr("href",value):dom.attr("href"); },
			"data-value":function(dom,value){ return isVal(value)?dom.val(value):dom.val(); }
		};
		if(!data){
			data = {};
			$.each(attrs,function(attr){
				var bindFunc = this;
				$("["+attr+"]",that).each(function(){
					var d = $(this);
					var key = d.attr(attr);
					data[key] = bindFunc(d);
				});
			});
			return data;
		}else {
			$.each(attrs,function(attr){
				var bindFunc = this;
				$("["+attr+"]",that).each(function(){
					var d = $(this);
					var key = d.attr(attr);
					var value = data[key];
					bindFunc(d,value);
				});
			});
		}
	};
})(jQuery);