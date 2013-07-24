# jQuery.lightDataBind

Bind your JSON Data in one line code.

& The rest is all standard HTML attribute writing.

**NO MORE WEIRED TEMPLATE TAGS** 

like this: `<script type="template/text"><div>{{data?}}</div></script>`

Demo Here: [http://watert.github.io/jQuery.lightDataBind/](http://watert.github.io/jQuery.lightDataBind/)

## How to use it:

#### HTML Part
```html
<div id="resultHtml" class="clearfix well well-small">
    <img data-src="img" class=" pull-left">
    <h3><a data-text="title" data-href="url"></a></h3>
    <div data-html="content"> </div>
</div>
```
#### Javascript Part
```javascript
var data = {
    img:"https://a248.e.akamai.net/assets.github.com/images/modules/dashboard/bootcamp/octocat_setup.png",
    url:"http://github.com/",
    title:"This is a title with a href attribute. ",
    content:"Some HTML content with <strong>HTML Tag</strong> support."
};
$("#resultHtml").ldata(data);
```

#### Result BINGO!
```html
<div id="resultHtml" class="clearfix well well-small">
    <img data-src="img" class=" pull-left" src="https://a248.e.akamai.net/assets.github.com/images/modules/dashboard/bootcamp/octocat_setup.png">
    <h3><a data-text="title" data-href="url" href="http://github.com/">This is a title with a href attribute. </a></h3>
    <div data-html="content">Some HTML content with <strong>HTML Tag</strong> support.</div>
 </div>
```

## Methods:

Just Like jQuery's DOM accessing methods:

* `$.fn.ldata(jsonObject)`: binding data to DOM using attributes below.
* `$.fn.ldata()`: reserve method, return current values in the DOM. (NEW)

### Custom binding function example

```html
<div id="example">
    <span data-text="simple"></span> :
	<span data-func="complex"></span>
</div>
<script>
	var data = {
		simple:"hello world",
		complex:{
			className:"className",
			text:"complex content"
		}
	};
	$("#id").ldata(data,{
		complex:function(dom,data){
			if(data){ // dom to data
				dom.addClass(data.complex.className)
					.text(data.complex.text);
			}else { // data to dom
				return {complex:{text:dom.text();}};
			}
		}
	});
</script>
```

## Attributes can be used:

* data-text
* data-html: which supports HTML tags
* data-href
* data-src
* data-value: for form DOMs
* data-func: for customized rendering & reverse bind

## TO DOs

**I HAVE NO IDEA**  
