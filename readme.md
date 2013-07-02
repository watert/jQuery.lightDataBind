# jQuery.lightDataBind

Bind your JSON Data in one line code.

& The rest is all standard HTML attribute writing.

**NO MORE WEIRED TEMPLATE TAGS** 

like this: `<script type="template/text"><div>{{data?}}</div></script>`

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
$("#resultHtml").ldatabind(data);
```

## Attributes can be used:

* data-text
* data-html: which supports HTML tags
* data-href
* data-src

## TO DOs

**I HAVE NO IDEA**  