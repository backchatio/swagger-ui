// Underscore.js 1.1.7
// (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){var a=this,b=a._,c={},d=Array.prototype,e=Object.prototype,f=d.slice,g=d.unshift,h=e.toString,i=e.hasOwnProperty,j=d.forEach,k=d.map,l=d.reduce,m=d.reduceRight,n=d.filter,o=d.every,p=d.some,q=d.indexOf,r=d.lastIndexOf;e=Array.isArray;var s=Object.keys,t=Function.prototype.bind,u=function(a){return new z(a)};typeof module!="undefined"&&module.exports?(module.exports=u,u._=u):a._=u,u.VERSION="1.1.7";var v=u.each=u.forEach=function(a,b,d){if(a!=null)if(j&&a.forEach===j)a.forEach(b,d);else if(a.length===+a.length){for(var e=0,f=a.length;e<f;e++)if(e in a&&b.call(d,a[e],e,a)===c)break}else for(e in a)if(i.call(a,e)&&b.call(d,a[e],e,a)===c)break};u.map=function(a,b,c){var d=[];return a==null?d:k&&a.map===k?a.map(b,c):(v(a,function(a,e,f){d[d.length]=b.call(c,a,e,f)}),d)},u.reduce=u.foldl=u.inject=function(a,b,c,d){var e=c!==void 0;a==null&&(a=[]);if(l&&a.reduce===l)return d&&(b=u.bind(b,d)),e?a.reduce(b,c):a.reduce(b);v(a,function(a,f,g){e?c=b.call(d,c,a,f,g):(c=a,e=!0)});if(!e)throw new TypeError("Reduce of empty array with no initial value");return c},u.reduceRight=u.foldr=function(a,b,c,d){return a==null&&(a=[]),m&&a.reduceRight===m?(d&&(b=u.bind(b,d)),c!==void 0?a.reduceRight(b,c):a.reduceRight(b)):(a=(u.isArray(a)?a.slice():u.toArray(a)).reverse(),u.reduce(a,b,c,d))},u.find=u.detect=function(a,b,c){var d;return w(a,function(a,e,f){if(b.call(c,a,e,f))return d=a,!0}),d},u.filter=u.select=function(a,b,c){var d=[];return a==null?d:n&&a.filter===n?a.filter(b,c):(v(a,function(a,e,f){b.call(c,a,e,f)&&(d[d.length]=a)}),d)},u.reject=function(a,b,c){var d=[];return a==null?d:(v(a,function(a,e,f){b.call(c,a,e,f)||(d[d.length]=a)}),d)},u.every=u.all=function(a,b,d){var e=!0;return a==null?e:o&&a.every===o?a.every(b,d):(v(a,function(a,f,g){if(!(e=e&&b.call(d,a,f,g)))return c}),e)};var w=u.some=u.any=function(a,b,d){b=b||u.identity;var e=!1;return a==null?e:p&&a.some===p?a.some(b,d):(v(a,function(a,f,g){if(e|=b.call(d,a,f,g))return c}),!!e)};u.include=u.contains=function(a,b){var c=!1;return a==null?c:q&&a.indexOf===q?a.indexOf(b)!=-1:(w(a,function(a){if(c=a===b)return!0}),c)},u.invoke=function(a,b){var c=f.call(arguments,2);return u.map(a,function(a){return(b.call?b||a:a[b]).apply(a,c)})},u.pluck=function(a,b){return u.map(a,function(a){return a[b]})},u.max=function(a,b,c){if(!b&&u.isArray(a))return Math.max.apply(Math,a);var d={computed:-Infinity};return v(a,function(a,e,f){e=b?b.call(c,a,e,f):a,e>=d.computed&&(d={value:a,computed:e})}),d.value},u.min=function(a,b,c){if(!b&&u.isArray(a))return Math.min.apply(Math,a);var d={computed:Infinity};return v(a,function(a,e,f){e=b?b.call(c,a,e,f):a,e<d.computed&&(d={value:a,computed:e})}),d.value},u.sortBy=function(a,b,c){return u.pluck(u.map(a,function(a,d,e){return{value:a,criteria:b.call(c,a,d,e)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")},u.groupBy=function(a,b){var c={};return v(a,function(a,d){var e=b(a,d);(c[e]||(c[e]=[])).push(a)}),c},u.sortedIndex=function(a,b,c){c||(c=u.identity);for(var d=0,e=a.length;d<e;){var f=d+e>>1;c(a[f])<c(b)?d=f+1:e=f}return d},u.toArray=function(a){return a?a.toArray?a.toArray():u.isArray(a)?f.call(a):u.isArguments(a)?f.call(a):u.values(a):[]},u.size=function(a){return u.toArray(a).length},u.first=u.head=function(a,b,c){return b!=null&&!c?f.call(a,0,b):a[0]},u.rest=u.tail=function(a,b,c){return f.call(a,b==null||c?1:b)},u.last=function(a){return a[a.length-1]},u.compact=function(a){return u.filter(a,function(a){return!!a})},u.flatten=function(a){return u.reduce(a,function(a,b){return u.isArray(b)?a.concat(u.flatten(b)):(a[a.length]=b,a)},[])},u.without=function(a){return u.difference(a,f.call(arguments,1))},u.uniq=u.unique=function(a,b){return u.reduce(a,function(a,c,d){if(0==d||(b===!0?u.last(a)!=c:!u.include(a,c)))a[a.length]=c;return a},[])},u.union=function(){return u.uniq(u.flatten(arguments))},u.intersection=u.intersect=function(a){var b=f.call(arguments,1);return u.filter(u.uniq(a),function(a){return u.every(b,function(b){return u.indexOf(b,a)>=0})})},u.difference=function(a,b){return u.filter(a,function(a){return!u.include(b,a)})},u.zip=function(){for(var a=f.call(arguments),b=u.max(u.pluck(a,"length")),c=Array(b),d=0;d<b;d++)c[d]=u.pluck(a,""+d);return c},u.indexOf=function(a,b,c){if(a==null)return-1;var d;if(c)return c=u.sortedIndex(a,b),a[c]===b?c:-1;if(q&&a.indexOf===q)return a.indexOf(b);c=0;for(d=a.length;c<d;c++)if(a[c]===b)return c;return-1},u.lastIndexOf=function(a,b){if(a==null)return-1;if(r&&a.lastIndexOf===r)return a.lastIndexOf(b);for(var c=a.length;c--;)if(a[c]===b)return c;return-1},u.range=function(a,b,c){arguments.length<=1&&(b=a||0,a=0),c=arguments[2]||1;for(var d=Math.max(Math.ceil((b-a)/c),0),e=0,f=Array(d);e<d;)f[e++]=a,a+=c;return f},u.bind=function(a,b){if(a.bind===t&&t)return t.apply(a,f.call(arguments,1));var c=f.call(arguments,2);return function(){return a.apply(b,c.concat(f.call(arguments)))}},u.bindAll=function(a){var b=f.call(arguments,1);return b.length==0&&(b=u.functions(a)),v(b,function(b){a[b]=u.bind(a[b],a)}),a},u.memoize=function(a,b){var c={};return b||(b=u.identity),function(){var d=b.apply(this,arguments);return i.call(c,d)?c[d]:c[d]=a.apply(this,arguments)}},u.delay=function(a,b){var c=f.call(arguments,2);return setTimeout(function(){return a.apply(a,c)},b)},u.defer=function(a){return u.delay.apply(u,[a,1].concat(f.call(arguments,1)))};var x=function(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,a.apply(e,f)};c&&clearTimeout(d);if(c||!d)d=setTimeout(g,b)}};u.throttle=function(a,b){return x(a,b,!1)},u.debounce=function(a,b){return x(a,b,!0)},u.once=function(a){var b=!1,c;return function(){return b?c:(b=!0,c=a.apply(this,arguments))}},u.wrap=function(a,b){return function(){var c=[a].concat(f.call(arguments));return b.apply(this,c)}},u.compose=function(){var a=f.call(arguments);return function(){for(var b=f.call(arguments),c=a.length-1;c>=0;c--)b=[a[c].apply(this,b)];return b[0]}},u.after=function(a,b){return function(){if(--a<1)return b.apply(this,arguments)}},u.keys=s||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[],c;for(c in a)i.call(a,c)&&(b[b.length]=c);return b},u.values=function(a){return u.map(a,u.identity)},u.functions=u.methods=function(a){var b=[],c;for(c in a)u.isFunction(a[c])&&b.push(c);return b.sort()},u.extend=function(a){return v(f.call(arguments,1),function(b){for(var c in b)b[c]!==void 0&&(a[c]=b[c])}),a},u.defaults=function(a){return v(f.call(arguments,1),function(b){for(var c in b)a[c]==null&&(a[c]=b[c])}),a},u.clone=function(a){return u.isArray(a)?a.slice():u.extend({},a)},u.tap=function(a,b){return b(a),a},u.isEqual=function(a,b){if(a===b)return!0;var c=typeof a;if(c!=typeof b)return!1;if(a==b)return!0;if(!a&&b||a&&!b)return!1;a._chain&&(a=a._wrapped),b._chain&&(b=b._wrapped);if(a.isEqual)return a.isEqual(b);if(b.isEqual)return b.isEqual(a);if(u.isDate(a)&&u.isDate(b))return a.getTime()===b.getTime();if(u.isNaN(a)&&u.isNaN(b))return!1;if(u.isRegExp(a)&&u.isRegExp(b))return a.source===b.source&&a.global===b.global&&a.ignoreCase===b.ignoreCase&&a.multiline===b.multiline;if(c!=="object")return!1;if(a.length&&a.length!==b.length)return!1;c=u.keys(a);var d=u.keys(b);if(c.length!=d.length)return!1;for(var e in a)if(!(e in b)||!u.isEqual(a[e],b[e]))return!1;return!0},u.isEmpty=function(a){if(u.isArray(a)||u.isString(a))return a.length===0;for(var b in a)if(i.call(a,b))return!1;return!0},u.isElement=function(a){return!!a&&a.nodeType==1},u.isArray=e||function(a){return h.call(a)==="[object Array]"},u.isObject=function(a){return a===Object(a)},u.isArguments=function(a){return!!a&&!!i.call(a,"callee")},u.isFunction=function(a){return!(!a||!a.constructor||!a.call||!a.apply)},u.isString=function(a){return!!(a===""||a&&a.charCodeAt&&a.substr)},u.isNumber=function(a){return!!(a===0||a&&a.toExponential&&a.toFixed)},u.isNaN=function(a){return a!==a},u.isBoolean=function(a){return a===!0||a===!1},u.isDate=function(a){return!(!a||!a.getTimezoneOffset||!a.setUTCFullYear)},u.isRegExp=function(a){return!(!a||!a.test||!a.exec||!a.ignoreCase&&a.ignoreCase!==!1)},u.isNull=function(a){return a===null},u.isUndefined=function(a){return a===void 0},u.noConflict=function(){return a._=b,this},u.identity=function(a){return a},u.times=function(a,b,c){for(var d=0;d<a;d++)b.call(c,d)},u.mixin=function(a){v(u.functions(a),function(b){B(b,u[b]=a[b])})};var y=0;u.uniqueId=function(a){var b=y++;return a?a+b:b},u.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g},u.template=function(a,b){var c=u.templateSettings;return c="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(c.interpolate,function(a,b){return"',"+b.replace(/\\'/g,"'")+",'"}).replace(c.evaluate||null,function(a,b){return"');"+b.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",c=new Function("obj",c),b?c(b):c};var z=function(a){this._wrapped=a};u.prototype=z.prototype;var A=function(a,b){return b?u(a).chain():a},B=function(a,b){z.prototype[a]=function(){var a=f.call(arguments);return g.call(a,this._wrapped),A(b.apply(u,a),this._chain)}};u.mixin(u),v(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=d[a];z.prototype[a]=function(){return b.apply(this._wrapped,arguments),A(this._wrapped,this._chain)}}),v(["concat","join","slice"],function(a){var b=d[a];z.prototype[a]=function(){return A(b.apply(this._wrapped,arguments),this._chain)}}),z.prototype.chain=function(){return this._chain=!0,this},z.prototype.value=function(){return this._wrapped}})();