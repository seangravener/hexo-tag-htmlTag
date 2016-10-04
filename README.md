# hexo-tag-htmltag

A Hexo tag for inserting arbitrary html tags (with attributes) into posts.

## Installation
```
npm install hexo-tag-htmltag --save
```

## Use
__Basic__
```
{% htmlTag span class="highlight text" %} Something important {% endhtmlTag %}
// -> <span class="highlight text">Something important</span>
```

__Multiple Attributes__
```
{% htmlTag button type="button" required data-action="add" aria-controls="calc"%} Add 10 {% endhtmlTag %}
// -> <button type="button" required data-action="add" aria-controls="calc">Add 10</button>
```

## License
MIT
