(function($){
	$.fn.ldatabind = $.fn.ldata = function(data,binds){
		var that = this,
			$el = $(this);
		binds = $.extend($el.data("ldata-bind")||{},binds||{});
		$el.data("ldata-bind",binds);
		var isVal = function(value){
			return value||value==""||value==0;
		};
		var attrs = {
			"data-func":function(dom,value,key,reverse){
				var f = binds[key];
				if(key&&f){ 
					if(!reverse)f(dom,data); 
					else { return f(dom); }
				} else { console.warn("No func specified: ",key); }
			},
			"data-text":function(dom,value){ return isVal(value)?dom.text(value):dom.text(); },
			"data-html":function(dom,value){ return isVal(value)?dom.html(value):dom.html(); },
			"data-src":function(dom,value){ return isVal(value)?dom.attr("src",value):dom.attr("src"); },
			"data-href":function(dom,value){ return isVal(value)?dom.attr("href",value):dom.attr("href"); },
			"data-value":function(dom,value){ return isVal(value)?dom.val(value):dom.val(); }
		};
		if(!data){ // dom to obj
			data = {};
			$.each(attrs,function(attr,bindFunc){
				$("["+attr+"]",that).each(function(){
					var d = $(this);
					var key = d.attr(attr);
					var val = bindFunc(d,null,key,true);
					if(isVal(val))data[key] = val;
				});
			});
			return data;
		}else { // obj to dom
			$.each(attrs,function(attr,bindFunc){
				$("["+attr+"]",that).each(function(){
					var d = $(this);
					var key = d.attr(attr);
					var value = data[key];
					bindFunc(d,value,key);
				});
			});
		}
		return $el;
	};
})(jQuery);
