/**
 * @seangravener
 *
 * use:
 * {% htmlTag span class="highlight" %} ... {% endhtmlTag %}
 */

'use strict';

hexo.extend.tag.register('htmlTag', function(args, body) {
  var tagName = args[0],
      tag = '<{tagName} {attrs}>{body}</{tagName}>',
      attrs = '';

  args.shift();
  attrs = args.join(' ');

  return tag
    .replace(/{tagName}/g, tagName)
    .replace(/{attrs}/g, attrs)
    .replace(/{body}/g, body);
}, {ends: true});
