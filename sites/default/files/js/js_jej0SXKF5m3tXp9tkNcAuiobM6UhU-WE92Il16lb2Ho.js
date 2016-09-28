//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);

(function(t){var e=typeof self=="object"&&self.self==self&&self||typeof global=="object"&&global.global==global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.2.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],h(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],h(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var o=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var h=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return u(t);if(i.isString(t))return function(e){return e.get(t)};return t};var u=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var l=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,o;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(o=i.keys(r);a<o.length;a++){e=f(t,e,o[a],r[o[a]],s)}}else if(r&&c.test(r)){for(o=r.split(c);a<o.length;a++){e=t(e,o[a],n,s)}}else{e=t(e,r,n,s)}return e};l.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};l.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var o=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:o,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,o=r.listening;if(o)o.count++;n.push({callback:i,context:s,ctx:s||a,listening:o})}return t};l.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};l.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var o=n[s[a]];if(!o)break;o.obj.off(e,r,this)}if(i.isEmpty(n))this._listeningTo=void 0;return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var o=n.context,h=n.listeners;if(!e&&!r&&!o){var u=i.keys(h);for(;s<u.length;s++){a=h[u[s]];delete h[a.id];delete a.listeningTo[a.objId]}return}var l=e?[e]:i.keys(t);for(;s<l.length;s++){e=l[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||o&&o!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete h[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}if(i.size(t))return t};l.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));return this.on(n,void 0,r)};l.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};l.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,o);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};l.bind=l.on;l.unbind=l.off;i.extend(e,l);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,l,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=r;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],r)}}if(h)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};z(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else{if(!this._validate(n,r))return false}var a=this;var o=r.success;var h=this.attributes;r.success=function(t){a.attributes=h;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(o)o.call(r.context,a,t,r);a.trigger("sync",a,t,r)};z(this,r);if(n&&s)this.attributes=i.extend({},h,n);var u=this.isNew()?"create":r.patch?"patch":"update";if(u==="patch"&&!r.attrs)r.attrs=n;var l=this.sync(u,this,r);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{z(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.defaults({validate:true},t))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};o(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var k=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;for(var s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,l,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:i.clone(t);var n=this._removeModels(t,e);if(!e.silent&&n)this.trigger("update",this,e);return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.defaults({},e,w);if(e.parse&&!this._isModel(t))t=this.parse(t,e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n<0)n+=this.length+1;var s=[];var a=[];var o=[];var h={};var u=e.add;var l=e.merge;var c=e.remove;var f=false;var d=this.comparator&&n==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g;for(var p=0;p<t.length;p++){g=t[p];var m=this.get(g);if(m){if(l&&g!==m){var _=this._isModel(g)?g.attributes:g;if(e.parse)_=m.parse(_,e);m.set(_,e);if(d&&!f)f=m.hasChanged(v)}if(!h[m.cid]){h[m.cid]=true;s.push(m)}t[p]=m}else if(u){g=t[p]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);h[g.cid]=true;s.push(g)}}}if(c){for(p=0;p<this.length;p++){g=this.models[p];if(!h[g.cid])o.push(g)}if(o.length)this._removeModels(o,e)}var y=false;var b=!d&&u&&c;if(s.length&&b){y=this.length!=s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;k(this.models,s,0);this.length=this.models.length}else if(a.length){if(d)f=true;k(this.models,a,n==null?this.length:n);this.length=this.models.length}if(f)this.sort({silent:true});if(!e.silent){for(p=0;p<a.length;p++){if(n!=null)e.index=n+p;g=a[p];g.trigger("add",g,this,e)}if(f||y)this.trigger("sort",this,e);if(a.length||o.length)this.trigger("update",this,e)}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;var e=this.modelId(this._isModel(t)?t.attributes:t);return this._byId[t]||this._byId[e]||this._byId[t.cid]},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};z(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i.length?i:false},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3};o(x,S,"models");var I=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(I.prototype,l,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var o=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var h=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(h)h.call(n.context,t,e,i)};var u=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,u,n);return u};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,l,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var M=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;M.started=false;i.extend(M.prototype,l,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(M.started)throw new Error("Backbone.history has already been started");M.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);M.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!M.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new M;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);var s=function(){this.constructor=n};s.prototype=r.prototype;n.prototype=new s;if(t)i.extend(n.prototype,t);n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=I.extend=M.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var z=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});

/*!
 * jQuery Once v2.1.1 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var n=function(e){e=e||"once";if(typeof e!=="string"){throw new Error("The jQuery Once id parameter must be a string")}return e};e.fn.once=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)!==true}).data(r,true)};e.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+n(e))};e.fn.findOnce=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)===true})}});

/**
 * @file
 * Parse inline JSON and initialize the drupalSettings global object.
 */

(function () {

  'use strict';

  // Use direct child elements to harden against XSS exploits when CSP is on.
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  /**
   * Variable generated by Drupal with all the configuration created from PHP.
   *
   * @global
   *
   * @type {object}
   */
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();
;
/**
 * @file
 * Defines the Drupal JavaScript API.
 */

/**
 * A jQuery object, typically the return value from a `$(selector)` call.
 *
 * Holds an HTMLElement or a collection of HTMLElements.
 *
 * @typedef {object} jQuery
 *
 * @prop {number} length=0
 *   Number of elements contained in the jQuery object.
 */

/**
 * Variable generated by Drupal that holds all translated strings from PHP.
 *
 * Content of this variable is automatically created by Drupal when using the
 * Interface Translation module. It holds the translation of strings used on
 * the page.
 *
 * This variable is used to pass data from the backend to the frontend. Data
 * contained in `drupalSettings` is used during behavior initialization.
 *
 * @global
 *
 * @var {object} drupalTranslations
 */

/**
 * Global Drupal object.
 *
 * All Drupal JavaScript APIs are contained in this namespace.
 *
 * @global
 *
 * @namespace
 */
window.Drupal = {behaviors: {}, locale: {}};

// Class indicating that JavaScript is enabled; used for styling purpose.
document.documentElement.className += ' js';

// Allow other JavaScript libraries to use $.
if (window.jQuery) {
  jQuery.noConflict();
}

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it in an anonymous closure.
(function (domready, Drupal, drupalSettings, drupalTranslations) {

  'use strict';

  /**
   * Helper to rethrow errors asynchronously.
   *
   * This way Errors bubbles up outside of the original callstack, making it
   * easier to debug errors in the browser.
   *
   * @param {Error|string} error
   *   The error to be thrown.
   */
  Drupal.throwError = function (error) {
    setTimeout(function () { throw error; }, 0);
  };

  /**
   * Custom error thrown after attach/detach if one or more behaviors failed.
   * Initializes the JavaScript behaviors for page loads and Ajax requests.
   *
   * @callback Drupal~behaviorAttach
   *
   * @param {HTMLDocument|HTMLElement} context
   *   An element to detach behaviors from.
   * @param {?object} settings
   *   An object containing settings for the current context. It is rarely used.
   *
   * @see Drupal.attachBehaviors
   */

  /**
   * Reverts and cleans up JavaScript behavior initialization.
   *
   * @callback Drupal~behaviorDetach
   *
   * @param {HTMLDocument|HTMLElement} context
   *   An element to attach behaviors to.
   * @param {object} settings
   *   An object containing settings for the current context.
   * @param {string} trigger
   *   One of `'unload'`, `'move'`, or `'serialize'`.
   *
   * @see Drupal.detachBehaviors
   */

  /**
   * @typedef {object} Drupal~behavior
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Function run on page load and after an Ajax call.
   * @prop {Drupal~behaviorDetach} detach
   *   Function run when content is serialized or removed from the page.
   */

  /**
   * Holds all initialization methods.
   *
   * @namespace Drupal.behaviors
   *
   * @type {Object.<string, Drupal~behavior>}
   */

  /**
   * Defines a behavior to be run during attach and detach phases.
   *
   * Attaches all registered behaviors to a page element.
   *
   * Behaviors are event-triggered actions that attach to page elements,
   * enhancing default non-JavaScript UIs. Behaviors are registered in the
   * {@link Drupal.behaviors} object using the method 'attach' and optionally
   * also 'detach'.
   *
   * {@link Drupal.attachBehaviors} is added below to the `jQuery.ready` event
   * and therefore runs on initial page load. Developers implementing Ajax in
   * their solutions should also call this function after new page content has
   * been loaded, feeding in an element to be processed, in order to attach all
   * behaviors to the new content.
   *
   * Behaviors should use `var elements =
   * $(context).find(selector).once('behavior-name');` to ensure the behavior is
   * attached only once to a given element. (Doing so enables the reprocessing
   * of given elements, which may be needed on occasion despite the ability to
   * limit behavior attachment to a particular element.)
   *
   * @example
   * Drupal.behaviors.behaviorName = {
   *   attach: function (context, settings) {
   *     // ...
   *   },
   *   detach: function (context, settings, trigger) {
   *     // ...
   *   }
   * };
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to attach behaviors to.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none is given,
   *   the global {@link drupalSettings} object is used.
   *
   * @see Drupal~behaviorAttach
   * @see Drupal.detachBehaviors
   *
   * @throws {Drupal~DrupalBehaviorError}
   */
  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    // Execute all of them.
    for (var i in behaviors) {
      if (behaviors.hasOwnProperty(i) && typeof behaviors[i].attach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].attach(context, settings);
        }
        catch (e) {
          Drupal.throwError(e);
        }
      }
    }
  };

  // Attach all behaviors.
  domready(function () { Drupal.attachBehaviors(document, drupalSettings); });

  /**
   * Detaches registered behaviors from a page element.
   *
   * Developers implementing Ajax in their solutions should call this function
   * before page content is about to be removed, feeding in an element to be
   * processed, in order to allow special behaviors to detach from the content.
   *
   * Such implementations should use `.findOnce()` and `.removeOnce()` to find
   * elements with their corresponding `Drupal.behaviors.behaviorName.attach`
   * implementation, i.e. `.removeOnce('behaviorName')`, to ensure the behavior
   * is detached only from previously processed elements.
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to detach behaviors from.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none given,
   *   the global {@link drupalSettings} object is used.
   * @param {string} [trigger='unload']
   *   A string containing what's causing the behaviors to be detached. The
   *   possible triggers are:
   *   - `'unload'`: The context element is being removed from the DOM.
   *   - `'move'`: The element is about to be moved within the DOM (for example,
   *     during a tabledrag row swap). After the move is completed,
   *     {@link Drupal.attachBehaviors} is called, so that the behavior can undo
   *     whatever it did in response to the move. Many behaviors won't need to
   *     do anything simply in response to the element being moved, but because
   *     IFRAME elements reload their "src" when being moved within the DOM,
   *     behaviors bound to IFRAME elements (like WYSIWYG editors) may need to
   *     take some action.
   *   - `'serialize'`: When an Ajax form is submitted, this is called with the
   *     form as the context. This provides every behavior within the form an
   *     opportunity to ensure that the field elements have correct content
   *     in them before the form is serialized. The canonical use-case is so
   *     that WYSIWYG editors can update the hidden textarea to which they are
   *     bound.
   *
   * @throws {Drupal~DrupalBehaviorError}
   *
   * @see Drupal~behaviorDetach
   * @see Drupal.attachBehaviors
   */
  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    // Execute all of them.
    for (var i in behaviors) {
      if (behaviors.hasOwnProperty(i) && typeof behaviors[i].detach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].detach(context, settings, trigger);
        }
        catch (e) {
          Drupal.throwError(e);
        }
      }
    }
  };

  /**
   * Encodes special characters in a plain-text string for display as HTML.
   *
   * @param {string} str
   *   The string to be encoded.
   *
   * @return {string}
   *   The encoded string.
   *
   * @ingroup sanitization
   */
  Drupal.checkPlain = function (str) {
    str = str.toString()
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return str;
  };

  /**
   * Replaces placeholders with sanitized values in a string.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   An object of replacements pairs to make. Incidences of any key in this
   *   array are replaced with the corresponding value. Based on the first
   *   character of the key, the value is escaped and/or themed:
   *    - `'!variable'`: inserted as is.
   *    - `'@variable'`: escape plain text to HTML ({@link Drupal.checkPlain}).
   *    - `'%variable'`: escape text and theme as a placeholder for user-
   *      submitted content ({@link Drupal.checkPlain} +
   *      `{@link Drupal.theme}('placeholder')`).
   *
   * @return {string}
   *   The formatted string.
   *
   * @see Drupal.t
   */
  Drupal.formatString = function (str, args) {
    // Keep args intact.
    var processedArgs = {};
    // Transform arguments before inserting them.
    for (var key in args) {
      if (args.hasOwnProperty(key)) {
        switch (key.charAt(0)) {
          // Escaped only.
          case '@':
            processedArgs[key] = Drupal.checkPlain(args[key]);
            break;

          // Pass-through.
          case '!':
            processedArgs[key] = args[key];
            break;

          // Escaped and placeholder.
          default:
            processedArgs[key] = Drupal.theme('placeholder', args[key]);
            break;
        }
      }
    }

    return Drupal.stringReplace(str, processedArgs, null);
  };

  /**
   * Replaces substring.
   *
   * The longest keys will be tried first. Once a substring has been replaced,
   * its new value will not be searched again.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   Key-value pairs.
   * @param {Array|null} keys
   *   Array of keys from `args`. Internal use only.
   *
   * @return {string}
   *   The replaced string.
   */
  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    // If the array of keys is not passed then collect the keys from the args.
    if (!Array.isArray(keys)) {
      keys = [];
      for (var k in args) {
        if (args.hasOwnProperty(k)) {
          keys.push(k);
        }
      }

      // Order the keys by the character length. The shortest one is the first.
      keys.sort(function (a, b) { return a.length - b.length; });
    }

    if (keys.length === 0) {
      return str;
    }

    // Take next longest one from the end.
    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        // Process each fragment with a copy of remaining keys.
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  /**
   * Translates strings to the page language, or a given language.
   *
   * See the documentation of the server-side t() function for further details.
   *
   * @param {string} str
   *   A string containing the English text to translate.
   * @param {Object.<string, string>} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   * @param {object} [options]
   *   Additional options for translation.
   * @param {string} [options.context='']
   *   The context the source string belongs to.
   *
   * @return {string}
   *   The formatted string.
   *   The translated string.
   */
  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    // Fetch the localized version of the string.
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  /**
   * Returns the URL to a Drupal page.
   *
   * @param {string} path
   *   Drupal path to transform to URL.
   *
   * @return {string}
   *   The full URL.
   */
  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  /**
   * Returns the passed in URL as an absolute URL.
   *
   * @param {string} url
   *   The URL string to be normalized to an absolute URL.
   *
   * @return {string}
   *   The normalized, absolute URL.
   *
   * @see https://github.com/angular/angular.js/blob/v1.4.4/src/ng/urlUtils.js
   * @see https://grack.com/blog/2009/11/17/absolutizing-url-in-javascript
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L53
   */
  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    // Decode the URL first; this is required by IE <= 6. Decoding non-UTF-8
    // strings may throw an exception.
    try {
      url = decodeURIComponent(url);
    }
    catch (e) {
      // Empty.
    }

    urlParsingNode.setAttribute('href', url);

    // IE <= 7 normalizes the URL when assigned to the anchor node similar to
    // the other browsers.
    return urlParsingNode.cloneNode(false).href;
  };

  /**
   * Returns true if the URL is within Drupal's base path.
   *
   * @param {string} url
   *   The URL string to be tested.
   *
   * @return {bool}
   *   `true` if local.
   *
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L58
   */
  Drupal.url.isLocal = function (url) {
    // Always use browser-derived absolute URLs in the comparison, to avoid
    // attempts to break out of the base path using directory traversal.
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = location.protocol;

    // Consider URLs that match this site's base URL but use HTTPS instead of HTTP
    // as local as well.
    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + location.host + drupalSettings.path.baseUrl.slice(0, -1);

    // Decoding non-UTF-8 strings may throw an exception.
    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    }
    catch (e) {
      // Empty.
    }
    try {
      baseUrl = decodeURIComponent(baseUrl);
    }
    catch (e) {
      // Empty.
    }

    // The given URL matches the site's base URL, or has a path under the site's
    // base URL.
    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  /**
   * Formats a string containing a count of items.
   *
   * This function ensures that the string is pluralized correctly. Since
   * {@link Drupal.t} is called by this function, make sure not to pass
   * already-localized strings to it.
   *
   * See the documentation of the server-side
   * \Drupal\Core\StringTranslation\TranslationInterface::formatPlural()
   * function for more details.
   *
   * @param {number} count
   *   The item count to display.
   * @param {string} singular
   *   The string for the singular case. Please make sure it is clear this is
   *   singular, to ease translation (e.g. use "1 new comment" instead of "1
   *   new"). Do not use @count in the singular string.
   * @param {string} plural
   *   The string for the plural case. Please make sure it is clear this is
   *   plural, to ease translation. Use @count in place of the item count, as in
   *   "@count new comments".
   * @param {object} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   *   Note that you do not need to include @count in this array.
   *   This replacement is done automatically for the plural case.
   * @param {object} [options]
   *   The options to pass to the {@link Drupal.t} function.
   *
   * @return {string}
   *   A translated string.
   */
  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    // Determine the index of the plural form.
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula['default'];
    }
    else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  /**
   * Encodes a Drupal path for use in a URL.
   *
   * For aesthetic reasons slashes are not escaped.
   *
   * @param {string} item
   *   Unencoded path.
   *
   * @return {string}
   *   The encoded path.
   */
  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  /**
   * Generates the themed representation of a Drupal object.
   *
   * All requests for themed output must go through this function. It examines
   * the request and routes it to the appropriate theme function. If the current
   * theme does not provide an override function, the generic theme function is
   * called.
   *
   * @example
   * <caption>To retrieve the HTML for text that should be emphasized and
   * displayed as a placeholder inside a sentence.</caption>
   * Drupal.theme('placeholder', text);
   *
   * @namespace
   *
   * @param {function} func
   *   The name of the theme function to call.
   * @param {...args}
   *   Additional arguments to pass along to the theme function.
   *
   * @return {string|object|HTMLElement|jQuery}
   *   Any data the theme function returns. This could be a plain HTML string,
   *   but also a complex object.
   */
  Drupal.theme = function (func) {
    var args = Array.prototype.slice.apply(arguments, [1]);
    if (func in Drupal.theme) {
      return Drupal.theme[func].apply(this, args);
    }
  };

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param {string} str
   *   The text to format (plain-text).
   *
   * @return {string}
   *   The formatted text (html).
   */
  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };

})(domready, Drupal, window.drupalSettings, window.drupalTranslations);
;
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,r){var i,s,o,u=t.nodeName.toLowerCase();return"area"===u?(i=t.parentNode,s=i.name,!t.href||!s||i.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap='#"+s+"']")[0],!!o&&n(o))):(/^(input|select|textarea|button|object)$/.test(u)?!t.disabled:"a"===u?t.href||r:r)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return e.css(this,"visibility")==="hidden"}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var n=this.css("position"),r=n==="absolute",i=t?/(auto|scroll|hidden)/:/(auto|scroll)/,s=this.parents().filter(function(){var t=e(this);return r&&t.css("position")==="static"?!1:i.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return n==="fixed"||!s.length?e(this[0].ownerDocument||document):s},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(n){return t(n,!isNaN(e.attr(n,"tabindex")))},tabbable:function(n){var r=e.attr(n,"tabindex"),i=isNaN(r);return(i||r>=0)&&t(n,!i)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,n){function o(t,n,i,s){return e.each(r,function(){n-=parseFloat(e.css(t,"padding"+this))||0,i&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var r=n==="Width"?["Left","Right"]:["Top","Bottom"],i=n.toLowerCase(),s={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(t){return t===undefined?s["inner"+n].call(this):this.each(function(){e(this).css(i,o(this,t)+"px")})},e.fn["outer"+n]=function(t,r){return typeof t!="number"?s["outer"+n].call(this,t):this.each(function(){e(this).css(i,o(this,t,!0,r)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(n,r){return typeof n=="number"?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),r&&r.call(t)},n)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(t!==undefined)return this.css("zIndex",t);if(this.length){var n=e(this[0]),r,i;while(n.length&&n[0]!==document){r=n.css("position");if(r==="absolute"||r==="relative"||r==="fixed"){i=parseInt(n.css("zIndex"),10);if(!isNaN(i)&&i!==0)return i}n=n.parent()}}return 0}}),e.ui.plugin={add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n,r){var i,s=e.plugins[t];if(!s)return;if(!r&&(!e.element[0].parentNode||e.element[0].parentNode.nodeType===11))return;for(i=0;i<s.length;i++)e.options[s[i][0]]&&s[i][1].apply(e.element,n)}}});;
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){var t=0,n=Array.prototype.slice;return e.cleanData=function(t){return function(n){var r,i,s;for(s=0;(i=n[s])!=null;s++)try{r=e._data(i,"events"),r&&r.remove&&e(i).triggerHandler("remove")}catch(o){}t(n)}}(e.cleanData),e.widget=function(t,n,r){var i,s,o,u,a={},f=t.split(".")[0];return t=t.split(".")[1],i=f+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[f]=e[f]||{},s=e[f][t],o=e[f][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,r){if(!e.isFunction(r)){a[t]=r;return}a[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},i=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=i,s=r.apply(this,arguments),this._super=t,this._superApply=n,s}}()}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix||t:t},a,{constructor:o,namespace:f,widgetName:t,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){var r=n.call(arguments,1),i=0,s=r.length,o,u;for(;i<s;i++)for(o in r[i])u=r[i][o],r[i].hasOwnProperty(o)&&u!==undefined&&(e.isPlainObject(u)?t[o]=e.isPlainObject(t[o])?e.widget.extend({},t[o],u):e.widget.extend({},u):t[o]=u);return t},e.widget.bridge=function(t,r){var i=r.prototype.widgetFullName||t;e.fn[t]=function(s){var o=typeof s=="string",u=n.call(arguments,1),a=this;return o?this.each(function(){var n,r=e.data(this,i);if(s==="instance")return a=r,!1;if(!r)return e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+s+"'");if(!e.isFunction(r[s])||s.charAt(0)==="_")return e.error("no such method '"+s+"' for "+t+" widget instance");n=r[s].apply(r,u);if(n!==r&&n!==undefined)return a=n&&n.jquery?a.pushStack(n.get()):n,!1}):(u.length&&(s=e.widget.extend.apply(null,[s].concat(u))),this.each(function(){var t=e.data(this,i);t?(t.option(s||{}),t._init&&t._init()):e.data(this,i,new r(s,this))})),a}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(n,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),n),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,n){var r=t,i,s,o;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof t=="string"){r={},i=t.split("."),t=i.shift();if(i.length){s=r[t]=e.widget.extend({},this.options[t]);for(o=0;o<i.length-1;o++)s[i[o]]=s[i[o]]||{},s=s[i[o]];t=i.pop();if(arguments.length===1)return s[t]===undefined?null:s[t];s[t]=n}else{if(arguments.length===1)return this.options[t]===undefined?null:this.options[t];r[t]=n}}return this._setOptions(r),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^([\w:-]*)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(t,n){n=(n||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(n).undelegate(n),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&e.effects.effect[u]?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}}),e.widget});;
/**
 * @file
 * Attaches behaviors for the Contextual module.
 */

(function ($, Drupal, drupalSettings, _, Backbone, JSON, storage) {

  'use strict';

  var options = $.extend(drupalSettings.contextual,
    // Merge strings on top of drupalSettings so that they are not mutable.
    {
      strings: {
        open: Drupal.t('Open'),
        close: Drupal.t('Close')
      }
    }
  );

  // Clear the cached contextual links whenever the current user's set of
  // permissions changes.
  var cachedPermissionsHash = storage.getItem('Drupal.contextual.permissionsHash');
  var permissionsHash = drupalSettings.user.permissionsHash;
  if (cachedPermissionsHash !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 18) === 'Drupal.contextual.') {
          storage.removeItem(key);
        }
      });
    }
    storage.setItem('Drupal.contextual.permissionsHash', permissionsHash);
  }

  /**
   * Initializes a contextual link: updates its DOM, sets up model and views.
   *
   * @param {jQuery} $contextual
   *   A contextual links placeholder DOM element, containing the actual
   *   contextual links as rendered by the server.
   * @param {string} html
   *   The server-side rendered HTML for this contextual link.
   */
  function initContextual($contextual, html) {
    var $region = $contextual.closest('.contextual-region');
    var contextual = Drupal.contextual;

    $contextual
      // Update the placeholder to contain its rendered contextual links.
      .html(html)
      // Use the placeholder as a wrapper with a specific class to provide
      // positioning and behavior attachment context.
      .addClass('contextual')
      // Ensure a trigger element exists before the actual contextual links.
      .prepend(Drupal.theme('contextualTrigger'));

    // Set the destination parameter on each of the contextual links.
    var destination = 'destination=' + Drupal.encodePath(drupalSettings.path.currentPath);
    $contextual.find('.contextual-links a').each(function () {
      var url = this.getAttribute('href');
      var glue = (url.indexOf('?') === -1) ? '?' : '&';
      this.setAttribute('href', url + glue + destination);
    });

    // Create a model and the appropriate views.
    var model = new contextual.StateModel({
      title: $region.find('h2').eq(0).text().trim()
    });
    var viewOptions = $.extend({el: $contextual, model: model}, options);
    contextual.views.push({
      visual: new contextual.VisualView(viewOptions),
      aural: new contextual.AuralView(viewOptions),
      keyboard: new contextual.KeyboardView(viewOptions)
    });
    contextual.regionViews.push(new contextual.RegionView(
      $.extend({el: $region, model: model}, options))
    );

    // Add the model to the collection. This must happen after the views have
    // been associated with it, otherwise collection change event handlers can't
    // trigger the model change event handler in its views.
    contextual.collection.add(model);

    // Let other JavaScript react to the adding of a new contextual link.
    $(document).trigger('drupalContextualLinkAdded', {
      $el: $contextual,
      $region: $region,
      model: model
    });

    // Fix visual collisions between contextual link triggers.
    adjustIfNestedAndOverlapping($contextual);
  }

  /**
   * Determines if a contextual link is nested & overlapping, if so: adjusts it.
   *
   * This only deals with two levels of nesting; deeper levels are not touched.
   *
   * @param {jQuery} $contextual
   *   A contextual links placeholder DOM element, containing the actual
   *   contextual links as rendered by the server.
   */
  function adjustIfNestedAndOverlapping($contextual) {
    var $contextuals = $contextual
      // @todo confirm that .closest() is not sufficient
      .parents('.contextual-region').eq(-1)
      .find('.contextual');

    // Early-return when there's no nesting.
    if ($contextuals.length === 1) {
      return;
    }

    // If the two contextual links overlap, then we move the second one.
    var firstTop = $contextuals.eq(0).offset().top;
    var secondTop = $contextuals.eq(1).offset().top;
    if (firstTop === secondTop) {
      var $nestedContextual = $contextuals.eq(1);

      // Retrieve height of nested contextual link.
      var height = 0;
      var $trigger = $nestedContextual.find('.trigger');
      // Elements with the .visually-hidden class have no dimensions, so this
      // class must be temporarily removed to the calculate the height.
      $trigger.removeClass('visually-hidden');
      height = $nestedContextual.height();
      $trigger.addClass('visually-hidden');

      // Adjust nested contextual link's position.
      $nestedContextual.css({top: $nestedContextual.position().top + height});
    }
  }

  /**
   * Attaches outline behavior for regions associated with contextual links.
   *
   * Events
   *   Contextual triggers an event that can be used by other scripts.
   *   - drupalContextualLinkAdded: Triggered when a contextual link is added.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *  Attaches the outline behavior to the right context.
   */
  Drupal.behaviors.contextual = {
    attach: function (context) {
      var $context = $(context);

      // Find all contextual links placeholders, if any.
      var $placeholders = $context.find('[data-contextual-id]').once('contextual-render');
      if ($placeholders.length === 0) {
        return;
      }

      // Collect the IDs for all contextual links placeholders.
      var ids = [];
      $placeholders.each(function () {
        ids.push($(this).attr('data-contextual-id'));
      });

      // Update all contextual links placeholders whose HTML is cached.
      var uncachedIDs = _.filter(ids, function initIfCached(contextualID) {
        var html = storage.getItem('Drupal.contextual.' + contextualID);
        if (html !== null) {
          // Initialize after the current execution cycle, to make the AJAX
          // request for retrieving the uncached contextual links as soon as
          // possible, but also to ensure that other Drupal behaviors have had
          // the chance to set up an event listener on the Backbone collection
          // Drupal.contextual.collection.
          window.setTimeout(function () {
            initContextual($context.find('[data-contextual-id="' + contextualID + '"]'), html);
          });
          return false;
        }
        return true;
      });

      // Perform an AJAX request to let the server render the contextual links
      // for each of the placeholders.
      if (uncachedIDs.length > 0) {
        $.ajax({
          url: Drupal.url('contextual/render'),
          type: 'POST',
          data: {'ids[]': uncachedIDs},
          dataType: 'json',
          success: function (results) {
            _.each(results, function (html, contextualID) {
              // Store the metadata.
              storage.setItem('Drupal.contextual.' + contextualID, html);
              // If the rendered contextual links are empty, then the current
              // user does not have permission to access the associated links:
              // don't render anything.
              if (html.length > 0) {
                // Update the placeholders to contain its rendered contextual
                // links. Usually there will only be one placeholder, but it's
                // possible for multiple identical placeholders exist on the
                // page (probably because the same content appears more than
                // once).
                $placeholders = $context.find('[data-contextual-id="' + contextualID + '"]');

                // Initialize the contextual links.
                for (var i = 0; i < $placeholders.length; i++) {
                  initContextual($placeholders.eq(i), html);
                }
              }
            });
          }
        });
      }
    }
  };

  /**
   * Namespace for contextual related functionality.
   *
   * @namespace
   */
  Drupal.contextual = {

    /**
     * The {@link Drupal.contextual.View} instances associated with each list
     * element of contextual links.
     *
     * @type {Array}
     */
    views: [],

    /**
     * The {@link Drupal.contextual.RegionView} instances associated with each
     * contextual region element.
     *
     * @type {Array}
     */
    regionViews: []
  };

  /**
   * A Backbone.Collection of {@link Drupal.contextual.StateModel} instances.
   *
   * @type {Backbone.Collection}
   */
  Drupal.contextual.collection = new Backbone.Collection([], {model: Drupal.contextual.StateModel});

  /**
   * A trigger is an interactive element often bound to a click handler.
   *
   * @return {string}
   *   A string representing a DOM fragment.
   */
  Drupal.theme.contextualTrigger = function () {
    return '<button class="trigger visually-hidden focusable" type="button"></button>';
  };

})(jQuery, Drupal, drupalSettings, _, Backbone, window.JSON, window.sessionStorage);
;
/**
 * @file
 * A Backbone Model for the state of a contextual link's trigger, list & region.
 */

(function (Drupal, Backbone) {

  'use strict';

  /**
   * Models the state of a contextual link's trigger, list & region.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.contextual.StateModel = Backbone.Model.extend(/** @lends Drupal.contextual.StateModel# */{

    /**
     * @type {object}
     *
     * @prop {string} title
     * @prop {bool} regionIsHovered
     * @prop {bool} hasFocus
     * @prop {bool} isOpen
     * @prop {bool} isLocked
     */
    defaults: /** @lends Drupal.contextual.StateModel# */{

      /**
       * The title of the entity to which these contextual links apply.
       *
       * @type {string}
       */
      title: '',

      /**
       * Represents if the contextual region is being hovered.
       *
       * @type {bool}
       */
      regionIsHovered: false,

      /**
       * Represents if the contextual trigger or options have focus.
       *
       * @type {bool}
       */
      hasFocus: false,

      /**
       * Represents if the contextual options for an entity are available to
       * be selected (i.e. whether the list of options is visible).
       *
       * @type {bool}
       */
      isOpen: false,

      /**
       * When the model is locked, the trigger remains active.
       *
       * @type {bool}
       */
      isLocked: false
    },

    /**
     * Opens or closes the contextual link.
     *
     * If it is opened, then also give focus.
     *
     * @return {Drupal.contextual.StateModel}
     *   The current contextual state model.
     */
    toggleOpen: function () {
      var newIsOpen = !this.get('isOpen');
      this.set('isOpen', newIsOpen);
      if (newIsOpen) {
        this.focus();
      }
      return this;
    },

    /**
     * Closes this contextual link.
     *
     * Does not call blur() because we want to allow a contextual link to have
     * focus, yet be closed for example when hovering.
     *
     * @return {Drupal.contextual.StateModel}
     *   The current contextual state model.
     */
    close: function () {
      this.set('isOpen', false);
      return this;
    },

    /**
     * Gives focus to this contextual link.
     *
     * Also closes + removes focus from every other contextual link.
     *
     * @return {Drupal.contextual.StateModel}
     *   The current contextual state model.
     */
    focus: function () {
      this.set('hasFocus', true);
      var cid = this.cid;
      this.collection.each(function (model) {
        if (model.cid !== cid) {
          model.close().blur();
        }
      });
      return this;
    },

    /**
     * Removes focus from this contextual link, unless it is open.
     *
     * @return {Drupal.contextual.StateModel}
     *   The current contextual state model.
     */
    blur: function () {
      if (!this.get('isOpen')) {
        this.set('hasFocus', false);
      }
      return this;
    }

  });

})(Drupal, Backbone);
;
/**
 * @file
 * A Backbone View that provides the aural view of a contextual link.
 */

(function (Drupal, Backbone) {

  'use strict';

  Drupal.contextual.AuralView = Backbone.View.extend(/** @lends Drupal.contextual.AuralView# */{

    /**
     * Renders the aural view of a contextual link (i.e. screen reader support).
     *
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   Options for the view.
     */
    initialize: function (options) {
      this.options = options;

      this.listenTo(this.model, 'change', this.render);

      // Use aria-role form so that the number of items in the list is spoken.
      this.$el.attr('role', 'form');

      // Initial render.
      this.render();
    },

    /**
     * @inheritdoc
     */
    render: function () {
      var isOpen = this.model.get('isOpen');

      // Set the hidden property of the links.
      this.$el.find('.contextual-links')
        .prop('hidden', !isOpen);

      // Update the view of the trigger.
      this.$el.find('.trigger')
        .text(Drupal.t('@action @title configuration options', {
          '@action': (!isOpen) ? this.options.strings.open : this.options.strings.close,
          '@title': this.model.get('title')
        }))
        .attr('aria-pressed', isOpen);
    }

  });

})(Drupal, Backbone);
;
/**
 * @file
 * A Backbone View that provides keyboard interaction for a contextual link.
 */

(function (Drupal, Backbone) {

  'use strict';

  Drupal.contextual.KeyboardView = Backbone.View.extend(/** @lends Drupal.contextual.KeyboardView# */{

    /**
     * @type {object}
     */
    events: {
      'focus .trigger': 'focus',
      'focus .contextual-links a': 'focus',
      'blur .trigger': function () { this.model.blur(); },
      'blur .contextual-links a': function () {
        // Set up a timeout to allow a user to tab between the trigger and the
        // contextual links without the menu dismissing.
        var that = this;
        this.timer = window.setTimeout(function () {
          that.model.close().blur();
        }, 150);
      }
    },

    /**
     * Provides keyboard interaction for a contextual link.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function () {

      /**
       * The timer is used to create a delay before dismissing the contextual
       * links on blur. This is only necessary when keyboard users tab into
       * contextual links without edit mode (i.e. without TabbingManager).
       * That means that if we decide to disable tabbing of contextual links
       * without edit mode, all this timer logic can go away.
       *
       * @type {NaN|number}
       */
      this.timer = NaN;
    },

    /**
     * Sets focus on the model; Clears the timer that dismisses the links.
     */
    focus: function () {
      // Clear the timeout that might have been set by blurring a link.
      window.clearTimeout(this.timer);
      this.model.focus();
    }

  });

})(Drupal, Backbone);
;
/**
 * @file
 * A Backbone View that renders the visual view of a contextual region element.
 */

(function (Drupal, Backbone, Modernizr) {

  'use strict';

  Drupal.contextual.RegionView = Backbone.View.extend(/** @lends Drupal.contextual.RegionView# */{

    /**
     * Events for the Backbone view.
     *
     * @return {object}
     *   A mapping of events to be used in the view.
     */
    events: function () {
      var mapping = {
        mouseenter: function () { this.model.set('regionIsHovered', true); },
        mouseleave: function () {
          this.model.close().blur().set('regionIsHovered', false);
        }
      };
      // We don't want mouse hover events on touch.
      if (Modernizr.touchevents) {
        mapping = {};
      }
      return mapping;
    },

    /**
     * Renders the visual view of a contextual region element.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function () {
      this.listenTo(this.model, 'change:hasFocus', this.render);
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.contextual.RegionView}
     *   The current contextual region view.
     */
    render: function () {
      this.$el.toggleClass('focus', this.model.get('hasFocus'));

      return this;
    }

  });

})(Drupal, Backbone, Modernizr);
;
/**
 * @file
 * A Backbone View that provides the visual view of a contextual link.
 */

(function (Drupal, Backbone, Modernizr) {

  'use strict';

  Drupal.contextual.VisualView = Backbone.View.extend(/** @lends Drupal.contextual.VisualView# */{

    /**
     * Events for the Backbone view.
     *
     * @return {object}
     *   A mapping of events to be used in the view.
     */
    events: function () {
      // Prevents delay and simulated mouse events.
      var touchEndToClick = function (event) {
        event.preventDefault();
        event.target.click();
      };
      var mapping = {
        'click .trigger': function () { this.model.toggleOpen(); },
        'touchend .trigger': touchEndToClick,
        'click .contextual-links a': function () { this.model.close().blur(); },
        'touchend .contextual-links a': touchEndToClick
      };
      // We only want mouse hover events on non-touch.
      if (!Modernizr.touchevents) {
        mapping.mouseenter = function () { this.model.focus(); };
      }
      return mapping;
    },

    /**
     * Renders the visual view of a contextual link. Listens to mouse & touch.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.contextual.VisualView}
     *   The current contextual visual view.
     */
    render: function () {
      var isOpen = this.model.get('isOpen');
      // The trigger should be visible when:
      //  - the mouse hovered over the region,
      //  - the trigger is locked,
      //  - and for as long as the contextual menu is open.
      var isVisible = this.model.get('isLocked') || this.model.get('regionIsHovered') || isOpen;

      this.$el
        // The open state determines if the links are visible.
        .toggleClass('open', isOpen)
        // Update the visibility of the trigger.
        .find('.trigger').toggleClass('visually-hidden', !isVisible);

      // Nested contextual region handling: hide any nested contextual triggers.
      if ('isOpen' in this.model.changed) {
        this.$el.closest('.contextual-region')
          .find('.contextual .trigger:not(:first)')
          .toggle(!isOpen);
      }

      return this;
    }

  });

})(Drupal, Backbone, Modernizr);
;
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]:e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(h){var x=document.createElement("form").submit;x.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(y){i="parsererror",x.error=r=y||i}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;l<h.length;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++)if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});
;
/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){return function(){function h(e,t,n){return[parseFloat(e[0])*(l.test(e[0])?t/100:1),parseFloat(e[1])*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}function d(t){var n=t[0];return n.nodeType===9?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(n)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var t,n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+(\.[\d]+)?%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(){if(t!==undefined)return t;var n,r,i=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),s=i.children()[0];return e("body").append(i),n=s.offsetWidth,i.css("overflow","scroll"),r=s.offsetWidth,n===r&&(r=i[0].clientWidth),i.remove(),t=n-r},getScrollInfo:function(t){var n=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),r=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:s?e.position.scrollbarWidth():0,height:i?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]),i=!!n[0]&&n[0].nodeType===9;return{element:n,isWindow:r,isDocument:i,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r||i?n.width():n.outerWidth(),height:r||i?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return c.apply(this,arguments);t=e.extend({},t);var l,v,m,g,y,b,w=e(t.of),E=e.position.getWithinInfo(t.within),S=e.position.getScrollInfo(E),x=(t.collision||"flip").split(" "),T={};return b=d(w),w[0].preventDefault&&(t.at="left top"),v=b.width,m=b.height,g=b.offset,y=e.extend({},g),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),T[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]}),x.length===1&&(x[1]=x[0]),t.at[0]==="right"?y.left+=v:t.at[0]==="center"&&(y.left+=v/2),t.at[1]==="bottom"?y.top+=m:t.at[1]==="center"&&(y.top+=m/2),l=h(T.at,v,m),y.left+=l[0],y.top+=l[1],this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),d=p(this,"marginLeft"),b=p(this,"marginTop"),N=f+d+p(this,"marginRight")+S.width,C=c+b+p(this,"marginBottom")+S.height,k=e.extend({},y),L=h(T.my,a.outerWidth(),a.outerHeight());t.my[0]==="right"?k.left-=f:t.my[0]==="center"&&(k.left-=f/2),t.my[1]==="bottom"?k.top-=c:t.my[1]==="center"&&(k.top-=c/2),k.left+=L[0],k.top+=L[1],n||(k.left=s(k.left),k.top=s(k.top)),o={marginLeft:d,marginTop:b},e.each(["left","top"],function(n,r){e.ui.position[x[n]]&&e.ui.position[x[n]][r](k,{targetWidth:v,targetHeight:m,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:N,collisionHeight:C,offset:[l[0]+L[0],l[1]+L[1]],my:t.my,at:t.at,within:E,elem:a})}),t.using&&(u=function(e){var n=g.left-k.left,s=n+v-f,o=g.top-k.top,u=o+m-c,l={target:{element:w,left:g.left,top:g.top,width:v,height:m},element:{element:a,left:k.left,top:k.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};v<f&&i(n+s)<v&&(l.horizontal="center"),m<c&&i(o+u)<m&&(l.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?l.important="horizontal":l.important="vertical",t.using.call(this,e,l)}),a.offset(e.extend(k,{using:u}))})},e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f)e.left+=l+c+h}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;if(a<0){v=e.top+c+h+p+t.collisionHeight-s-r;if(v<0||v<i(a))e.top+=c+h+p}else if(f>0){d=e.top-t.collisionPosition.marginTop+c+h+p-o;if(d>0||i(d)<f)e.top+=c+h+p}}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,r,i,s,o,u=document.getElementsByTagName("body")[0],a=document.createElement("div");t=document.createElement(u?"div":"body"),i={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},u&&e.extend(i,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in i)t.style[o]=i[o];t.appendChild(a),r=u||document.documentElement,r.insertBefore(t,r.firstChild),a.style.cssText="position: absolute; left: 10.7432222px;",s=e(a).offset().left,n=s>10&&s<11,t.innerHTML="",r.removeChild(t)}()}(),e.ui.position});;
/**
 * @file
 * Adapted from underscore.js with the addition Drupal namespace.
 */

/**
 * Limits the invocations of a function in a given time frame.
 *
 * The debounce function wrapper should be used sparingly. One clear use case
 * is limiting the invocation of a callback attached to the window resize event.
 *
 * Before using the debounce function wrapper, consider first whether the
 * callback could be attached to an event that fires less frequently or if the
 * function can be written in such a way that it is only invoked under specific
 * conditions.
 *
 * @param {function} func
 *   The function to be invoked.
 * @param {number} wait
 *   The time period within which the callback function should only be
 *   invoked once. For example if the wait period is 250ms, then the callback
 *   will only be called at most 4 times per second.
 * @param {bool} immediate
 *   Whether we wait at the beginning or end to execute the function.
 *
 * @return {function}
 *   The debounced function.
 */
Drupal.debounce = function (func, wait, immediate) {

  'use strict';

  var timeout;
  var result;
  return function () {
    var context = this;
    var args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};
;
/**
 * @file
 * Manages elements that can offset the size of the viewport.
 *
 * Measures and reports viewport offset dimensions from elements like the
 * toolbar that can potentially displace the positioning of other elements.
 */

/**
 * @typedef {object} Drupal~displaceOffset
 *
 * @prop {number} top
 * @prop {number} left
 * @prop {number} right
 * @prop {number} bottom
 */

/**
 * Triggers when layout of the page changes.
 *
 * This is used to position fixed element on the page during page resize and
 * Toolbar toggling.
 *
 * @event drupalViewportOffsetChange
 */

(function ($, Drupal, debounce) {

  'use strict';

  /**
   * @name Drupal.displace.offsets
   *
   * @type {Drupal~displaceOffset}
   */
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  /**
   * Registers a resize handler on the window.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.drupalDisplace = {
    attach: function () {
      // Mark this behavior as processed on the first pass.
      if (this.displaceProcessed) {
        return;
      }
      this.displaceProcessed = true;

      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };

  /**
   * Informs listeners of the current offset dimensions.
   *
   * @function Drupal.displace
   *
   * @prop {Drupal~displaceOffset} offsets
   *
   * @param {bool} [broadcast]
   *   When true or undefined, causes the recalculated offsets values to be
   *   broadcast to listeners.
   *
   * @return {Drupal~displaceOffset}
   *   An object whose keys are the for sides an element -- top, right, bottom
   *   and left. The value of each key is the viewport displacement distance for
   *   that edge.
   *
   * @fires event:drupalViewportOffsetChange
   */
  function displace(broadcast) {
    offsets = Drupal.displace.offsets = calculateOffsets();
    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }
    return offsets;
  }

  /**
   * Determines the viewport offsets.
   *
   * @return {Drupal~displaceOffset}
   *   An object whose keys are the for sides an element -- top, right, bottom
   *   and left. The value of each key is the viewport displacement distance for
   *   that edge.
   */
  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }

  /**
   * Gets a specific edge's offset.
   *
   * Any element with the attribute data-offset-{edge} e.g. data-offset-top will
   * be considered in the viewport offset calculations. If the attribute has a
   * numeric value, that value will be used. If no value is provided, one will
   * be calculated using the element's dimensions and placement.
   *
   * @function Drupal.displace.calculateOffset
   *
   * @param {string} edge
   *   The name of the edge to calculate. Can be 'top', 'right',
   *   'bottom' or 'left'.
   *
   * @return {number}
   *   The viewport displacement distance for the requested edge.
   */
  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll('[data-offset-' + edge + ']');
    var n = displacingElements.length;
    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];
      // If the element is not visible, do consider its dimensions.
      if (el.style.display === 'none') {
        continue;
      }
      // If the offset data attribute contains a displacing value, use it.
      var displacement = parseInt(el.getAttribute('data-offset-' + edge), 10);
      // If the element's offset data attribute exits
      // but is not a valid number then get the displacement
      // dimensions directly from the element.
      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }
      // If the displacement value is larger than the current value for this
      // edge, use the displacement value.
      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  /**
   * Calculates displacement for element based on its dimensions and placement.
   *
   * @param {HTMLElement} el
   *   The jQuery element whose dimensions and placement will be measured.
   *
   * @param {string} edge
   *   The name of the edge of the viewport that the element is associated
   *   with.
   *
   * @return {number}
   *   The viewport displacement distance for the requested edge.
   */
  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = (edge === 'left' || edge === 'right');
    // Get the offset of the element itself.
    var placement = $el.offset()[horizontal ? 'left' : 'top'];
    // Subtract scroll distance from placement to get the distance
    // to the edge of the viewport.
    placement -= window['scroll' + (horizontal ? 'X' : 'Y')] || document.documentElement['scroll' + (horizontal) ? 'Left' : 'Top'] || 0;
    // Find the displacement value according to the edge.
    switch (edge) {
      // Left and top elements displace as a sum of their own offset value
      // plus their size.
      case 'top':
        // Total displacement is the sum of the elements placement and size.
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        // Total displacement is the sum of the elements placement and size.
        displacement = placement + $el.outerWidth();
        break;

      // Right and bottom elements displace according to their left and
      // top offset. Their size isn't important.
      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }
    return displacement;
  }

  /**
   * Assign the displace function to a property of the Drupal global object.
   *
   * @ignore
   */
  Drupal.displace = displace;
  $.extend(Drupal.displace, {

    /**
     * Expose offsets to other scripts to avoid having to recalculate offsets.
     *
     * @ignore
     */
    offsets: offsets,

    /**
     * Expose method to compute a single edge offsets.
     *
     * @ignore
     */
    calculateOffset: calculateOffset
  });

})(jQuery, Drupal, Drupal.debounce);
;
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});;
/**
 * @file
 * Form features.
 */

/**
 * Triggers when a value in the form changed.
 *
 * The event triggers when content is typed or pasted in a text field, before
 * the change event triggers.
 *
 * @event formUpdated
 */

(function ($, Drupal, debounce) {

  'use strict';

  /**
   * Retrieves the summary for the first element.
   *
   * @return {string}
   *   The text of the summary.
   */
  $.fn.drupalGetSummary = function () {
    var callback = this.data('summaryCallback');
    return (this[0] && callback) ? $.trim(callback(this[0])) : '';
  };

  /**
   * Sets the summary for all matched elements.
   *
   * @param {function} callback
   *   Either a function that will be called each time the summary is
   *   retrieved or a string (which is returned each time).
   *
   * @return {jQuery}
   *   jQuery collection of the current element.
   *
   * @fires event:summaryUpdated
   *
   * @listens event:formUpdated
   */
  $.fn.drupalSetSummary = function (callback) {
    var self = this;

    // To facilitate things, the callback should always be a function. If it's
    // not, we wrap it into an anonymous function which just returns the value.
    if (typeof callback !== 'function') {
      var val = callback;
      callback = function () { return val; };
    }

    return this
      .data('summaryCallback', callback)
      // To prevent duplicate events, the handlers are first removed and then
      // (re-)added.
      .off('formUpdated.summary')
      .on('formUpdated.summary', function () {
        self.trigger('summaryUpdated');
      })
      // The actual summaryUpdated handler doesn't fire when the callback is
      // changed, so we have to do this manually.
      .trigger('summaryUpdated');
  };

  /**
   * Prevents consecutive form submissions of identical form values.
   *
   * Repetitive form submissions that would submit the identical form values
   * are prevented, unless the form values are different to the previously
   * submitted values.
   *
   * This is a simplified re-implementation of a user-agent behavior that
   * should be natively supported by major web browsers, but at this time, only
   * Firefox has a built-in protection.
   *
   * A form value-based approach ensures that the constraint is triggered for
   * consecutive, identical form submissions only. Compared to that, a form
   * button-based approach would (1) rely on [visible] buttons to exist where
   * technically not required and (2) require more complex state management if
   * there are multiple buttons in a form.
   *
   * This implementation is based on form-level submit events only and relies
   * on jQuery's serialize() method to determine submitted form values. As such,
   * the following limitations exist:
   *
   * - Event handlers on form buttons that preventDefault() do not receive a
   *   double-submit protection. That is deemed to be fine, since such button
   *   events typically trigger reversible client-side or server-side
   *   operations that are local to the context of a form only.
   * - Changed values in advanced form controls, such as file inputs, are not
   *   part of the form values being compared between consecutive form submits
   *   (due to limitations of jQuery.serialize()). That is deemed to be
   *   acceptable, because if the user forgot to attach a file, then the size of
   *   HTTP payload will most likely be small enough to be fully passed to the
   *   server endpoint within (milli)seconds. If a user mistakenly attached a
   *   wrong file and is technically versed enough to cancel the form submission
   *   (and HTTP payload) in order to attach a different file, then that
   *   edge-case is not supported here.
   *
   * Lastly, all forms submitted via HTTP GET are idempotent by definition of
   * HTTP standards, so excluded in this implementation.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.formSingleSubmit = {
    attach: function () {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        var formValues = $form.serialize();
        var previousValues = $form.attr('data-drupal-form-submit-last');
        if (previousValues === formValues) {
          e.preventDefault();
        }
        else {
          $form.attr('data-drupal-form-submit-last', formValues);
        }
      }

      $('body').once('form-single-submit')
        .on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
    }
  };

  /**
   * Sends a 'formUpdated' event each time a form element is modified.
   *
   * @param {HTMLElement} element
   *   The element to trigger a form updated event on.
   *
   * @fires event:formUpdated
   */
  function triggerFormUpdated(element) {
    $(element).trigger('formUpdated');
  }

  /**
   * Collects the IDs of all form fields in the given form.
   *
   * @param {HTMLFormElement} form
   *   The form element to search.
   *
   * @return {Array}
   *   Array of IDs for form fields.
   */
  function fieldsList(form) {
    var $fieldList = $(form).find('[name]').map(function (index, element) {
      // We use id to avoid name duplicates on radio fields and filter out
      // elements with a name but no id.
      return element.getAttribute('id');
    });
    // Return a true array.
    return $.makeArray($fieldList);
  }

  /**
   * Triggers the 'formUpdated' event on form elements when they are modified.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches formUpdated behaviors.
   * @prop {Drupal~behaviorDetach} detach
   *   Detaches formUpdated behaviors.
   *
   * @fires event:formUpdated
   */
  Drupal.behaviors.formUpdated = {
    attach: function (context) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      var $forms = (contextIsForm ? $context : $context.find('form')).once('form-updated');
      var formFields;

      if ($forms.length) {
        // Initialize form behaviors, use $.makeArray to be able to use native
        // forEach array method and have the callback parameters in the right
        // order.
        $.makeArray($forms).forEach(function (form) {
          var events = 'change.formUpdated input.formUpdated ';
          var eventHandler = debounce(function (event) { triggerFormUpdated(event.target); }, 300);
          formFields = fieldsList(form).join(',');

          form.setAttribute('data-drupal-form-fields', formFields);
          $(form).on(events, eventHandler);
        });
      }
      // On ajax requests context is the form element.
      if (contextIsForm) {
        formFields = fieldsList(context).join(',');
        // @todo replace with form.getAttribute() when #1979468 is in.
        var currentFields = $(context).attr('data-drupal-form-fields');
        // If there has been a change in the fields or their order, trigger
        // formUpdated.
        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }

    },
    detach: function (context, settings, trigger) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      if (trigger === 'unload') {
        var $forms = (contextIsForm ? $context : $context.find('form')).removeOnce('form-updated');
        if ($forms.length) {
          $.makeArray($forms).forEach(function (form) {
            form.removeAttribute('data-drupal-form-fields');
            $(form).off('.formUpdated');
          });
        }
      }
    }
  };

  /**
   * Prepopulate form fields with information from the visitor browser.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for filling user info from browser.
   */
  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach: function (context, settings) {
      var userInfo = ['name', 'mail', 'homepage'];
      var $forms = $('[data-user-info-from-browser]').once('user-info-from-browser');
      if ($forms.length) {
        userInfo.map(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          var browserData = localStorage.getItem('Drupal.visitor.' + info);
          var emptyOrDefault = ($element.val() === '' || ($element.attr('data-drupal-default-value') === $element.val()));
          if ($element.length && emptyOrDefault && browserData) {
            $element.val(browserData);
          }
        });
      }
      $forms.on('submit', function () {
        userInfo.map(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          if ($element.length) {
            localStorage.setItem('Drupal.visitor.' + info, $element.val());
          }
        });
      });
    }
  };

})(jQuery, Drupal, Drupal.debounce);
;
/**
 * @file
 * Progress bar.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Theme function for the progress bar.
   *
   * @param {string} id
   *   The id for the progress bar.
   *
   * @return {string}
   *   The HTML for the progress bar.
   */
  Drupal.theme.progressBar = function (id) {
    return '<div id="' + id + '" class="progress" aria-live="polite">' +
      '<div class="progress__label">&nbsp;</div>' +
      '<div class="progress__track"><div class="progress__bar"></div></div>' +
      '<div class="progress__percentage"></div>' +
      '<div class="progress__description">&nbsp;</div>' +
      '</div>';
  };

  /**
   * A progressbar object. Initialized with the given id. Must be inserted into
   * the DOM afterwards through progressBar.element.
   *
   * Method is the function which will perform the HTTP request to get the
   * progress bar state. Either "GET" or "POST".
   *
   * @example
   * pb = new Drupal.ProgressBar('myProgressBar');
   * some_element.appendChild(pb.element);
   *
   * @constructor
   *
   * @param {string} id
   *   The id for the progressbar.
   * @param {function} updateCallback
   *   Callback to run on update.
   * @param {string} method
   *   HTTP method to use.
   * @param {function} errorCallback
   *   Callback to call on error.
   */
  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    // The WAI-ARIA setting aria-live="polite" will announce changes after
    // users
    // have completed their current activity and not interrupt the screen
    // reader.
    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, /** @lends Drupal.ProgressBar# */{

    /**
     * Set the percentage and status message for the progressbar.
     *
     * @param {number} percentage
     *   The progress percentage.
     * @param {string} message
     *   The message to show the user.
     * @param {string} label
     *   The text for the progressbar label.
     */
    setProgress: function (percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', percentage + '%');
        $(this.element).find('div.progress__percentage').html(percentage + '%');
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },

    /**
     * Start monitoring progress via Ajax.
     *
     * @param {string} uri
     *   The URI to use for monitoring.
     * @param {number} delay
     *   The delay for calling the monitoring URI.
     */
    startMonitoring: function (uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },

    /**
     * Stop monitoring progress via Ajax.
     */
    stopMonitoring: function () {
      clearTimeout(this.timer);
      // This allows monitoring to be stopped from within the callback.
      this.uri = null;
    },

    /**
     * Request progress data from server.
     */
    sendPing: function () {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;
        // When doing a post request, you need non-null data. Otherwise a
        // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        }
        else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function (progress) {
            // Display errors.
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }
            // Update display.
            pb.setProgress(progress.percentage, progress.message, progress.label);
            // Schedule next timer.
            pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
          },
          error: function (xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError('<pre>' + e.message + '</pre>');
          }
        });
      }
    },

    /**
     * Display errors on the page.
     *
     * @param {string} string
     *   The error message to show the user.
     */
    displayError: function (string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });

})(jQuery, Drupal);
;
/**
 * @file
 * Provides Ajax page updating via jQuery $.ajax.
 *
 * Ajax is a method of making a request via JavaScript while viewing an HTML
 * page. The request returns an array of commands encoded in JSON, which is
 * then executed to make any changes that are necessary to the page.
 *
 * Drupal uses this file to enhance form elements with `#ajax['url']` and
 * `#ajax['wrapper']` properties. If set, this file will automatically be
 * included to provide Ajax capabilities.
 */

(function ($, window, Drupal, drupalSettings) {

  'use strict';

  /**
   * Attaches the Ajax behavior to each Ajax form element.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Initialize all {@link Drupal.Ajax} objects declared in
   *   `drupalSettings.ajax` or initialize {@link Drupal.Ajax} objects from
   *   DOM elements having the `use-ajax-submit` or `use-ajax` css class.
   * @prop {Drupal~behaviorDetach} detach
   *   During `unload` remove all {@link Drupal.Ajax} objects related to
   *   the removed content.
   */
  Drupal.behaviors.AJAX = {
    attach: function (context, settings) {

      function loadAjaxBehavior(base) {
        var element_settings = settings.ajax[base];
        if (typeof element_settings.selector === 'undefined') {
          element_settings.selector = '#' + base;
        }
        $(element_settings.selector).once('drupal-ajax').each(function () {
          element_settings.element = this;
          element_settings.base = base;
          Drupal.ajax(element_settings);
        });
      }

      // Load all Ajax behaviors specified in the settings.
      for (var base in settings.ajax) {
        if (settings.ajax.hasOwnProperty(base)) {
          loadAjaxBehavior(base);
        }
      }

      // Bind Ajax behaviors to all items showing the class.
      $('.use-ajax').once('ajax').each(function () {
        var element_settings = {};
        // Clicked links look better with the throbber than the progress bar.
        element_settings.progress = {type: 'throbber'};

        // For anchor tags, these will go to the target of the anchor rather
        // than the usual location.
        var href = $(this).attr('href');
        if (href) {
          element_settings.url = href;
          element_settings.event = 'click';
        }
        element_settings.dialogType = $(this).data('dialog-type');
        element_settings.dialog = $(this).data('dialog-options');
        element_settings.base = $(this).attr('id');
        element_settings.element = this;
        Drupal.ajax(element_settings);
      });

      // This class means to submit the form to the action using Ajax.
      $('.use-ajax-submit').once('ajax').each(function () {
        var element_settings = {};

        // Ajax submits specified in this manner automatically submit to the
        // normal form action.
        element_settings.url = $(this.form).attr('action');
        // Form submit button clicks need to tell the form what was clicked so
        // it gets passed in the POST request.
        element_settings.setClick = true;
        // Form buttons use the 'click' event rather than mousedown.
        element_settings.event = 'click';
        // Clicked form buttons look better with the throbber than the progress
        // bar.
        element_settings.progress = {type: 'throbber'};
        element_settings.base = $(this).attr('id');
        element_settings.element = this;

        Drupal.ajax(element_settings);
      });
    },

    detach: function (context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          // Set this to null and allow garbage collection to reclaim
          // the memory.
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  /**
   * Extends Error to provide handling for Errors in Ajax.
   *
   * @constructor
   *
   * @augments Error
   *
   * @param {XMLHttpRequest} xmlhttp
   *   XMLHttpRequest object used for the failed request.
   * @param {string} uri
   *   The URI where the error occurred.
   * @param {string} customMessage
   *   The custom message.
   */
  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {

    var statusCode;
    var statusText;
    var pathText;
    var responseText;
    var readyStateText;
    if (xmlhttp.status) {
      statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', {'!status': xmlhttp.status});
    }
    else {
      statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
    }
    statusCode += '\n' + Drupal.t('Debugging information follows.');
    pathText = '\n' + Drupal.t('Path: !uri', {'!uri': uri});
    statusText = '';
    // In some cases, when statusCode === 0, xmlhttp.statusText may not be
    // defined. Unfortunately, testing for it with typeof, etc, doesn't seem to
    // catch that and the test causes an exception. So we need to catch the
    // exception here.
    try {
      statusText = '\n' + Drupal.t('StatusText: !statusText', {'!statusText': $.trim(xmlhttp.statusText)});
    }
    catch (e) {
      // Empty.
    }

    responseText = '';
    // Again, we don't have a way to know for sure whether accessing
    // xmlhttp.responseText is going to throw an exception. So we'll catch it.
    try {
      responseText = '\n' + Drupal.t('ResponseText: !responseText', {'!responseText': $.trim(xmlhttp.responseText)});
    }
    catch (e) {
      // Empty.
    }

    // Make the responseText more readable by stripping HTML tags and newlines.
    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    // We don't need readyState except for status == 0.
    readyStateText = xmlhttp.status === 0 ? ('\n' + Drupal.t('ReadyState: !readyState', {'!readyState': xmlhttp.readyState})) : '';

    customMessage = customMessage ? ('\n' + Drupal.t('CustomMessage: !customMessage', {'!customMessage': customMessage})) : '';

    /**
     * Formatted and translated error message.
     *
     * @type {string}
     */
    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

    /**
     * Used by some browsers to display a more accurate stack trace.
     *
     * @type {string}
     */
    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  /**
   * Provides Ajax page updating via jQuery $.ajax.
   *
   * This function is designed to improve developer experience by wrapping the
   * initialization of {@link Drupal.Ajax} objects and storing all created
   * objects in the {@link Drupal.ajax.instances} array.
   *
   * @example
   * Drupal.behaviors.myCustomAJAXStuff = {
   *   attach: function (context, settings) {
   *
   *     var ajaxSettings = {
   *       url: 'my/url/path',
   *       // If the old version of Drupal.ajax() needs to be used those
   *       // properties can be added
   *       base: 'myBase',
   *       element: $(context).find('.someElement')
   *     };
   *
   *     var myAjaxObject = Drupal.ajax(ajaxSettings);
   *
   *     // Declare a new Ajax command specifically for this Ajax object.
   *     myAjaxObject.commands.insert = function (ajax, response, status) {
   *       $('#my-wrapper').append(response.data);
   *       alert('New content was appended to #my-wrapper');
   *     };
   *
   *     // This command will remove this Ajax object from the page.
   *     myAjaxObject.commands.destroyObject = function (ajax, response, status) {
   *       Drupal.ajax.instances[this.instanceIndex] = null;
   *     };
   *
   *     // Programmatically trigger the Ajax request.
   *     myAjaxObject.execute();
   *   }
   * };
   *
   * @param {object} settings
   *   The settings object passed to {@link Drupal.Ajax} constructor.
   * @param {string} [settings.base]
   *   Base is passed to {@link Drupal.Ajax} constructor as the 'base'
   *   parameter.
   * @param {HTMLElement} [settings.element]
   *   Element parameter of {@link Drupal.Ajax} constructor, element on which
   *   event listeners will be bound.
   *
   * @return {Drupal.Ajax}
   *   The created Ajax object.
   *
   * @see Drupal.AjaxCommands
   */
  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }
    // Map those config keys to variables for the old Drupal.ajax function.
    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    // By default do not display progress for ajax calls without an element.
    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  /**
   * Contains all created Ajax objects.
   *
   * @type {Array.<Drupal.Ajax|null>}
   */
  Drupal.ajax.instances = [];

  /**
   * List all objects where the associated element is not in the DOM
   *
   * This method ignores {@link Drupal.Ajax} objects not bound to DOM elements
   * when created with {@link Drupal.ajax}.
   *
   * @return {Array.<Drupal.Ajax>}
   *   The list of expired {@link Drupal.Ajax} objects.
   */
  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  /**
   * Settings for an Ajax object.
   *
   * @typedef {object} Drupal.Ajax~element_settings
   *
   * @prop {string} url
   *   Target of the Ajax request.
   * @prop {?string} [event]
   *   Event bound to settings.element which will trigger the Ajax request.
   * @prop {bool} [keypress=true]
   *   Triggers a request on keypress events.
   * @prop {?string} selector
   *   jQuery selector targeting the element to bind events to or used with
   *   {@link Drupal.AjaxCommands}.
   * @prop {string} [effect='none']
   *   Name of the jQuery method to use for displaying new Ajax content.
   * @prop {string|number} [speed='none']
   *   Speed with which to apply the effect.
   * @prop {string} [method]
   *   Name of the jQuery method used to insert new content in the targeted
   *   element.
   * @prop {object} [progress]
   *   Settings for the display of a user-friendly loader.
   * @prop {string} [progress.type='throbber']
   *   Type of progress element, core provides `'bar'`, `'throbber'` and
   *   `'fullscreen'`.
   * @prop {string} [progress.message=Drupal.t('Please wait...')]
   *   Custom message to be used with the bar indicator.
   * @prop {object} [submit]
   *   Extra data to be sent with the Ajax request.
   * @prop {bool} [submit.js=true]
   *   Allows the PHP side to know this comes from an Ajax request.
   * @prop {object} [dialog]
   *   Options for {@link Drupal.dialog}.
   * @prop {string} [dialogType]
   *   One of `'modal'` or `'dialog'`.
   * @prop {string} [prevent]
   *   List of events on which to stop default action and stop propagation.
   */

  /**
   * Ajax constructor.
   *
   * The Ajax request returns an array of commands encoded in JSON, which is
   * then executed to make any changes that are necessary to the page.
   *
   * Drupal uses this file to enhance form elements with `#ajax['url']` and
   * `#ajax['wrapper']` properties. If set, this file will automatically be
   * included to provide Ajax capabilities.
   *
   * @constructor
   *
   * @param {string} [base]
   *   Base parameter of {@link Drupal.Ajax} constructor
   * @param {HTMLElement} [element]
   *   Element parameter of {@link Drupal.Ajax} constructor, element on which
   *   event listeners will be bound.
   * @param {Drupal.Ajax~element_settings} element_settings
   *   Settings for this Ajax object.
   */
  Drupal.Ajax = function (base, element, element_settings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? '#' + base : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };

    $.extend(this, defaults, element_settings);

    /**
     * @type {Drupal.AjaxCommands}
     */
    this.commands = new Drupal.AjaxCommands();

    /**
     * @type {bool|number}
     */
    this.instanceIndex = false;

    // @todo Remove this after refactoring the PHP code to:
    //   - Call this 'selector'.
    //   - Include the '#' for ID-based selectors.
    //   - Support non-ID-based selectors.
    if (this.wrapper) {

      /**
       * @type {string}
       */
      this.wrapper = '#' + this.wrapper;
    }

    /**
     * @type {HTMLElement}
     */
    this.element = element;

    /**
     * @type {Drupal.Ajax~element_settings}
     */
    this.element_settings = element_settings;

    // If there isn't a form, jQuery.ajax() will be used instead, allowing us to
    // bind Ajax to links as well.
    if (this.element && this.element.form) {

      /**
       * @type {jQuery}
       */
      this.$form = $(this.element.form);
    }

    // If no Ajax callback URL was given, use the link href or form action.
    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      }
      else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    // Replacing 'nojs' with 'ajax' in the URL allows for an easy method to let
    // the server detect when it needs to degrade gracefully.
    // There are four scenarios to check for:
    // 1. /nojs/
    // 2. /nojs$ - The end of a URL string.
    // 3. /nojs? - Followed by a query (e.g. path/nojs?destination=foobar).
    // 4. /nojs# - Followed by a fragment (e.g.: path/nojs#myfragment).
    var originalUrl = this.url;

    /**
     * Processed Ajax URL.
     *
     * @type {string}
     */
    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/g, '/ajax$1');
    // If the 'nojs' version of the URL is trusted, also trust the 'ajax'
    // version.
    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    // Set the options for the ajaxSubmit function.
    // The 'this' variable will not persist inside of the options object.
    var ajax = this;

    /**
     * Options for the jQuery.ajax function.
     *
     * @name Drupal.Ajax#options
     *
     * @type {object}
     *
     * @prop {string} url
     *   Ajax URL to be called.
     * @prop {object} data
     *   Ajax payload.
     * @prop {function} beforeSerialize
     *   Implement jQuery beforeSerialize function to call
     *   {@link Drupal.Ajax#beforeSerialize}.
     * @prop {function} beforeSubmit
     *   Implement jQuery beforeSubmit function to call
     *   {@link Drupal.Ajax#beforeSubmit}.
     * @prop {function} beforeSend
     *   Implement jQuery beforeSend function to call
     *   {@link Drupal.Ajax#beforeSend}.
     * @prop {function} success
     *   Implement jQuery success function to call
     *   {@link Drupal.Ajax#success}.
     * @prop {function} complete
     *   Implement jQuery success function to clean up ajax state and trigger an
     *   error if needed.
     * @prop {string} dataType='json'
     *   Type of the response expected.
     * @prop {string} type='POST'
     *   HTTP method to use for the Ajax request.
     */
    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function (element_settings, options) {
        return ajax.beforeSerialize(element_settings, options);
      },
      beforeSubmit: function (form_values, element_settings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(form_values, element_settings, options);
      },
      beforeSend: function (xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function (response, status, xmlhttprequest) {
        // Sanity check for browser support (object expected).
        // When using iFrame uploads, responses must be returned as a string.
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        // Prior to invoking the response's commands, verify that they can be
        // trusted by checking for a response header. See
        // \Drupal\Core\EventSubscriber\AjaxResponseSubscriber for details.
        // - Empty responses are harmless so can bypass verification. This
        //   avoids an alert message for server-generated no-op responses that
        //   skip Ajax rendering.
        // - Ajax objects with trusted URLs (e.g., ones defined server-side via
        //   #ajax) can bypass header verification. This is especially useful
        //   for Ajax with multipart forms. Because IFRAME transport is used,
        //   the response headers cannot be accessed for verification.
        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function (xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },
      dataType: 'json',
      type: 'POST'
    };

    if (element_settings.dialog) {
      ajax.options.data.dialogOptions = element_settings.dialog;
    }

    // Ensure that we have a valid URL by adding ? when no query parameter is
    // yet available, otherwise append using &.
    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    }
    else {
      ajax.options.url += '&';
    }
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=drupal_' + (element_settings.dialogType || 'ajax');

    // Bind the ajaxSubmit function to the element event.
    $(ajax.element).on(element_settings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {'!url': ajax.url}));
      }
      return ajax.eventResponse(this, event);
    });

    // If necessary, enable keyboard submission so that Ajax behaviors
    // can be triggered through keyboard input as well as e.g. a mousedown
    // action.
    if (element_settings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    // If necessary, prevent the browser default action of an additional event.
    // For example, prevent the browser default action of a click, even if the
    // Ajax behavior binds to mousedown.
    if (element_settings.prevent) {
      $(ajax.element).on(element_settings.prevent, false);
    }
  };

  /**
   * URL query attribute to indicate the wrapper used to render a request.
   *
   * The wrapper format determines how the HTML is wrapped, for example in a
   * modal dialog.
   *
   * @const {string}
   *
   * @default
   */
  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  /**
   * Request parameter to indicate that a request is a Drupal Ajax request.
   *
   * @const {string}
   *
   * @default
   */
  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  /**
   * Execute the ajax request.
   *
   * Allows developers to execute an Ajax request manually without specifying
   * an event to respond to.
   *
   * @return {object}
   *   Returns the jQuery.Deferred object underlying the Ajax request. If
   *   pre-serialization fails, the Deferred will be returned in the rejected
   *   state.
   */
  Drupal.Ajax.prototype.execute = function () {
    // Do not perform another ajax command if one is already in progress.
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);
      // Return the jqXHR so that external code can hook into the Deferred API.
      return $.ajax(this.options);
    }
    catch (e) {
      // Unset the ajax.ajaxing flag here because it won't be unset during
      // the complete response.
      this.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);
      // For consistency, return a rejected Deferred (i.e., jqXHR's superclass)
      // so that calling code can take appropriate action.
      return $.Deferred().reject();
    }
  };

  /**
   * Handle a key press.
   *
   * The Ajax object will, if instructed, bind to a key press response. This
   * will test to see if the key press is valid to trigger this event and
   * if it is, trigger it for us and prevent other keypresses from triggering.
   * In this case we're handling RETURN and SPACEBAR keypresses (event codes 13
   * and 32. RETURN is often used to submit a form when in a textfield, and
   * SPACE is often used to activate an element without submitting.
   *
   * @param {HTMLElement} element
   *   Element the event was triggered on.
   * @param {jQuery.Event} event
   *   Triggered event.
   */
  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    // Create a synonym for this to reduce code confusion.
    var ajax = this;

    // Detect enter key and space bar and allow the standard response for them,
    // except for form elements of type 'text', 'tel', 'number' and 'textarea',
    // where the spacebar activation causes inappropriate activation if
    // #ajax['keypress'] is TRUE. On a text-type widget a space should always
    // be a space.
    if (event.which === 13 || (event.which === 32 && element.type !== 'text' &&
      element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number')) {
      event.preventDefault();
      event.stopPropagation();
      $(ajax.element_settings.element).trigger(ajax.element_settings.event);
    }
  };

  /**
   * Handle an event that triggers an Ajax response.
   *
   * When an event that triggers an Ajax response happens, this method will
   * perform the actual Ajax call. It is bound to the event using
   * bind() in the constructor, and it uses the options specified on the
   * Ajax object.
   *
   * @param {HTMLElement} element
   *   Element the event was triggered on.
   * @param {jQuery.Event} event
   *   Triggered event.
   */
  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    // Create a synonym for this to reduce code confusion.
    var ajax = this;

    // Do not perform another Ajax command if one is already in progress.
    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        // If setClick is set, we must set this to ensure that the button's
        // value is passed.
        if (ajax.setClick) {
          // Mark the clicked button. 'form.clk' is a special variable for
          // ajaxSubmit that tells the system which element got clicked to
          // trigger the submit. Without it there would be no 'op' or
          // equivalent.
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      }
      else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    }
    catch (e) {
      // Unset the ajax.ajaxing flag here because it won't be unset during
      // the complete response.
      ajax.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
    }
  };

  /**
   * Handler for the form serialization.
   *
   * Runs before the beforeSend() handler (see below), and unlike that one, runs
   * before field data is collected.
   *
   * @param {object} [element]
   *   Ajax object's `element_settings`.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    // Allow detaching behaviors to update field values before collecting them.
    // This is only needed when field values are added to the POST data, so only
    // when there is a form such that this.$form.ajaxSubmit() is used instead of
    // $.ajax(). When there is no form and $.ajax() is used, beforeSerialize()
    // isn't called, but don't rely on that: explicitly check this.$form.
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    // Inform Drupal that this is an AJAX request.
    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    // Allow Drupal to return new JavaScript and CSS files to load without
    // returning the ones already loaded.
    // @see \Drupal\Core\Theme\AjaxBasePageNegotiator
    // @see \Drupal\Core\Asset\LibraryDependencyResolverInterface::getMinimalRepresentativeSubset()
    // @see system_js_settings_alter()
    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  /**
   * Modify form values prior to form submission.
   *
   * @param {Array.<object>} form_values
   *   Processed form values.
   * @param {jQuery} element
   *   The form node as a jQuery object.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSubmit = function (form_values, element, options) {
    // This function is left empty to make it simple to override for modules
    // that wish to add functionality here.
  };

  /**
   * Prepare the Ajax request before it is sent.
   *
   * @param {XMLHttpRequest} xmlhttprequest
   *   Native Ajax object.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    // For forms without file inputs, the jQuery Form plugin serializes the
    // form values, and then calls jQuery's $.ajax() function, which invokes
    // this handler. In this circumstance, options.extraData is never used. For
    // forms with file inputs, the jQuery Form plugin uses the browser's normal
    // form submission mechanism, but captures the response in a hidden IFRAME.
    // In this circumstance, it calls this handler first, and then appends
    // hidden fields to the form to submit the values in options.extraData.
    // There is no simple way to know which submission mechanism will be used,
    // so we add to extraData regardless, and allow it to be ignored in the
    // former case.
    if (this.$form) {
      options.extraData = options.extraData || {};

      // Let the server know when the IFRAME submission mechanism is used. The
      // server can use this information to wrap the JSON response in a
      // TEXTAREA, as per http://jquery.malsup.com/form/#file-upload.
      options.extraData.ajax_iframe_upload = '1';

      // The triggering element is about to be disabled (see below), but if it
      // contains a value (e.g., a checkbox, textfield, select, etc.), ensure
      // that value is included in the submission. As per above, submissions
      // that use $.ajax() are already serialized prior to the element being
      // disabled, so this is only needed for IFRAME submissions.
      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    // Disable the element that received the change to prevent user interface
    // interaction while the Ajax request is in progress. ajax.ajaxing prevents
    // the element from triggering a new request, but does not prevent the user
    // from changing its value.
    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    // Insert progress indicator.
    var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  /**
   * Sets the progress bar progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(progressBar.element).addClass('ajax-progress ajax-progress-bar');
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  /**
   * Sets the throbber progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
    if (this.progress.message) {
      this.progress.element.find('.throbber').after('<div class="message">' + this.progress.message + '</div>');
    }
    $(this.element).after(this.progress.element);
  };

  /**
   * Sets the fullscreen progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $('<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>');
    $('body').after(this.progress.element);
  };

  /**
   * Handler for the form redirection completion.
   *
   * @param {Array.<Drupal.AjaxCommands~commandDefinition>} response
   *   Drupal Ajax response.
   * @param {number} status
   *   XMLHttpRequest status.
   */
  Drupal.Ajax.prototype.success = function (response, status) {
    // Remove the progress element.
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    // Save element's ancestors tree so if the element is removed from the dom
    // we can try to refocus one of its parents. Using addBack reverse the
    // result array, meaning that index 0 is the highest parent in the hierarchy
    // in this situation it is usually a <form> element.
    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    // Track if any command is altering the focus so we can avoid changing the
    // focus set by the Ajax command.
    var focusChanged = false;
    for (var i in response) {
      if (response.hasOwnProperty(i) && response[i].command && this.commands[response[i].command]) {
        this.commands[response[i].command](this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    }

    // If the focus hasn't be changed by the ajax commands, try to refocus the
    // triggering element or one of its parents if that element does not exist
    // anymore.
    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n > 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    // Reattach behaviors, if they were detached in beforeSerialize(). The
    // attachBehaviors() called on the new content from processing the response
    // commands is not sufficient, because behaviors from the entire form need
    // to be reattached.
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    // Remove any response-specific settings so they don't get used on the next
    // call by mistake.
    this.settings = null;
  };

  /**
   * Build an effect object to apply an effect when adding new HTML.
   *
   * @param {object} response
   *   Drupal Ajax response.
   * @param {string} [response.effect]
   *   Override the default value of {@link Drupal.Ajax#element_settings}.
   * @param {string|number} [response.speed]
   *   Override the default value of {@link Drupal.Ajax#element_settings}.
   *
   * @return {object}
   *   Returns an object with `showEffect`, `hideEffect` and `showSpeed`
   *   properties.
   */
  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;

    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    }
    else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    }
    else {
      effect.showEffect = type + 'Toggle';
      effect.hideEffect = type + 'Toggle';
      effect.showSpeed = speed;
    }

    return effect;
  };

  /**
   * Handler for the form redirection error.
   *
   * @param {object} xmlhttprequest
   *   Native XMLHttpRequest object.
   * @param {string} uri
   *   Ajax Request URI.
   * @param {string} [customMessage]
   *   Extra message to print with the Ajax error.
   */
  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    // Remove the progress element.
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    // Undo hide.
    $(this.wrapper).show();
    // Re-enable the element.
    $(this.element).prop('disabled', false);
    // Reattach behaviors, if they were detached in beforeSerialize().
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  /**
   * @typedef {object} Drupal.AjaxCommands~commandDefinition
   *
   * @prop {string} command
   * @prop {string} [method]
   * @prop {string} [selector]
   * @prop {string} [data]
   * @prop {object} [settings]
   * @prop {bool} [asterisk]
   * @prop {string} [text]
   * @prop {string} [title]
   * @prop {string} [url]
   * @prop {object} [argument]
   * @prop {string} [name]
   * @prop {string} [value]
   * @prop {string} [old]
   * @prop {string} [new]
   * @prop {bool} [merge]
   * @prop {Array} [args]
   *
   * @see Drupal.AjaxCommands
   */

  /**
   * Provide a series of commands that the client will perform.
   *
   * @constructor
   */
  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {

    /**
     * Command to insert new content into the DOM.
     *
     * @param {Drupal.Ajax} ajax
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.data
     *   The data to use with the jQuery method.
     * @param {string} [response.method]
     *   The jQuery DOM manipulation method to be used.
     * @param {string} [response.selector]
     *   A optional jQuery selector string.
     * @param {object} [response.settings]
     *   An optional array of settings that will be used.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    insert: function (ajax, response, status) {
      // Get information from the response. If it is not there, default to
      // our presets.
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);
      var settings;

      // We don't know what response.data contains: it might be a string of text
      // without HTML, so don't rely on jQuery correctly interpreting
      // $(response.data) as new HTML rather than a CSS selector. Also, if
      // response.data contains top-level text nodes, they get lost with either
      // $(response.data) or $('<div></div>').replaceWith(response.data).
      var $new_content_wrapped = $('<div></div>').html(response.data);
      var $new_content = $new_content_wrapped.contents();

      // For legacy reasons, the effects processing code assumes that
      // $new_content consists of a single top-level element. Also, it has not
      // been sufficiently tested whether attachBehaviors() can be successfully
      // called with a context object that includes top-level text nodes.
      // However, to give developers full control of the HTML appearing in the
      // page, and to enable Ajax content to be inserted in places where DIV
      // elements are not allowed (e.g., within TABLE, TR, and SPAN parents),
      // we check if the new content satisfies the requirement of a single
      // top-level element, and only use the container DIV created above when
      // it doesn't. For more information, please see
      // https://www.drupal.org/node/736066.
      if ($new_content.length !== 1 || $new_content.get(0).nodeType !== 1) {
        $new_content = $new_content_wrapped;
      }

      // If removing content from the wrapper, detach behaviors first.
      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          settings = response.settings || ajax.settings || drupalSettings;
          Drupal.detachBehaviors($wrapper.get(0), settings);
      }

      // Add the new content to the page.
      $wrapper[method]($new_content);

      // Immediately hide the new content if we're using any effects.
      if (effect.showEffect !== 'show') {
        $new_content.hide();
      }

      // Determine which effect to use and what content will receive the
      // effect, then show the new content.
      if ($new_content.find('.ajax-new-content').length > 0) {
        $new_content.find('.ajax-new-content').hide();
        $new_content.show();
        $new_content.find('.ajax-new-content')[effect.showEffect](effect.showSpeed);
      }
      else if (effect.showEffect !== 'show') {
        $new_content[effect.showEffect](effect.showSpeed);
      }

      // Attach all JavaScript behaviors to the new content, if it was
      // successfully added to the page, this if statement allows
      // `#ajax['wrapper']` to be optional.
      if ($new_content.parents('html').length > 0) {
        // Apply any settings from the returned JSON if available.
        settings = response.settings || ajax.settings || drupalSettings;
        Drupal.attachBehaviors($new_content.get(0), settings);
      }
    },

    /**
     * Command to remove a chunk from the page.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {object} [response.settings]
     *   An optional array of settings that will be used.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    remove: function (ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      })
        .remove();
    },

    /**
     * Command to mark a chunk changed.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The JSON response object from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {bool} [response.asterisk]
     *   An optional CSS selector. If specified, an asterisk will be
     *   appended to the HTML inside the provided selector.
     * @param {number} [status]
     *   The request status.
     */
    changed: function (ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
        }
      }
    },

    /**
     * Command to provide an alert.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The JSON response from the Ajax request.
     * @param {string} response.text
     *   The text that will be displayed in an alert dialog.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    alert: function (ajax, response, status) {
      window.alert(response.text, response.title);
    },

    /**
     * Command to set the window.location, redirecting the browser.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.url
     *   The URL to redirect to.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    redirect: function (ajax, response, status) {
      window.location = response.url;
    },

    /**
     * Command to provide the jQuery css() function.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {object} response.argument
     *   An array of key/value pairs to set in the CSS for the selector.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    css: function (ajax, response, status) {
      $(response.selector).css(response.argument);
    },

    /**
     * Command to set the settings used for other commands in this response.
     *
     * This method will also remove expired `drupalSettings.ajax` settings.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {bool} response.merge
     *   Determines whether the additional settings should be merged to the
     *   global settings.
     * @param {object} response.settings
     *   Contains additional settings to add to the global settings.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    settings: function (ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      // Clean up drupalSettings.ajax.
      Drupal.ajax.expired().forEach(function (instance) {
        // If the Ajax object has been created through drupalSettings.ajax
        // it will have a selector. When there is no selector the object
        // has been initialized with a special class name picked up by the
        // Ajax behavior.
        if (instance.selector) {
          var selector = instance.selector.replace('#', '');
          if (selector in ajaxSettings) {
            delete ajaxSettings[selector];
          }
        }
      });

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      }
      else {
        ajax.settings = response.settings;
      }
    },

    /**
     * Command to attach data using jQuery's data API.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.name
     *   The name or key (in the key value pair) of the data attached to this
     *   selector.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {string|object} response.value
     *   The value of to be attached.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    data: function (ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },

    /**
     * Command to apply a jQuery method.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {Array} response.args
     *   An array of arguments to the jQuery method, if any.
     * @param {string} response.method
     *   The jQuery method to invoke.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    invoke: function (ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, response.args);
    },

    /**
     * Command to restripe a table.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    restripe: function (ajax, response, status) {
      // :even and :odd are reversed because jQuery counts from 0 and
      // we count from 1, so we're out of sync.
      // Match immediate children of the parent element to allow nesting.
      $(response.selector).find('> tbody > tr:visible, > tr:visible')
        .removeClass('odd even')
        .filter(':even').addClass('odd').end()
        .filter(':odd').addClass('even');
    },

    /**
     * Command to update a form's build ID.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.old
     *   The old form build ID.
     * @param {string} response.new
     *   The new form build ID.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    update_build_id: function (ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
    },

    /**
     * Command to add css.
     *
     * Uses the proprietary addImport method if available as browsers which
     * support that method ignore @import statements in dynamically added
     * stylesheets.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.data
     *   A string that contains the styles to be added.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    add_css: function (ajax, response, status) {
      // Add the styles in the normal way.
      $('head').prepend(response.data);
      // Add imports in the styles using the addImport method if available.
      var match;
      var importMatch = /^@import url\("(.*)"\);$/igm;
      if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
        importMatch.lastIndex = 0;
        do {
          match = importMatch.exec(response.data);
          document.styleSheets[0].addImport(match[1]);
        } while (match);
      }
    }
  };

})(jQuery, window, Drupal, drupalSettings);
;
/*!
 * jQuery UI Button 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/button/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery","./core","./widget"],e):e(jQuery)})(function(e){var t,n="ui-button ui-widget ui-state-default ui-corner-all",r="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",i=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},s=function(t){var n=t.name,r=t.form,i=e([]);return n&&(n=n.replace(/'/g,"\\'"),r?i=e(r).find("[name='"+n+"'][type=radio]"):i=e("[name='"+n+"'][type=radio]",t.ownerDocument).filter(function(){return!this.form})),i};return e.widget("ui.button",{version:"1.11.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,i),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var r=this,o=this.options,u=this.type==="checkbox"||this.type==="radio",a=u?"":"ui-state-active";o.label===null&&(o.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(n).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(o.disabled)return;this===t&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){if(o.disabled)return;e(this).removeClass(a)}).bind("click"+this.eventNamespace,function(e){o.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),u&&this.element.bind("change"+this.eventNamespace,function(){r.refresh()}),this.type==="checkbox"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(o.disabled)return!1}):this.type==="radio"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(o.disabled)return!1;e(this).addClass("ui-state-active"),r.buttonElement.attr("aria-pressed","true");var t=r.element[0];s(t).not(t).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(o.disabled)return!1;e(this).addClass("ui-state-active"),t=this,r.document.one("mouseup",function(){t=null})}).bind("mouseup"+this.eventNamespace,function(){if(o.disabled)return!1;e(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){if(o.disabled)return!1;(t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",o.disabled),this._resetButton()},_determineButtonType:function(){var e,t,n;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button",this.type==="checkbox"||this.type==="radio"?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),n=this.element.is(":checked"),n&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",n)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(n+" ui-state-active "+r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){this._super(e,t);if(e==="disabled"){this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),t&&(this.type==="checkbox"||this.type==="radio"?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active"));return}this._resetButton()},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),this.type==="radio"?s(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var t=this.buttonElement.removeClass(r),n=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),i=this.options.icons,s=i.primary&&i.secondary,o=[];i.primary||i.secondary?(this.options.text&&o.push("ui-button-text-icon"+(s?"s":i.primary?"-primary":"-secondary")),i.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+i.primary+"'></span>"),i.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+i.secondary+"'></span>"),this.options.text||(o.push(s?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(n)))):o.push("ui-button-text-only"),t.addClass(o.join(" "))}}),e.widget("ui.buttonset",{version:"1.11.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){e==="disabled"&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t=this.element.css("direction")==="rtl",n=this.element.find(this.options.items),r=n.filter(":ui-button");n.not(":ui-button").button(),r.button("refresh"),this.buttons=n.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}}),e.ui.button});;
/*!
 * jQuery UI Mouse 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery","./widget"],e):e(jQuery)})(function(e){var t=!1;return e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(n){if(t)return;this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(n),this._mouseDownEvent=n;var r=this,i=n.which===1,s=typeof this.options.cancel=="string"&&n.target.nodeName?e(n.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(n))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(n)&&this._mouseDelayMet(n)){this._mouseStarted=this._mouseStart(n)!==!1;if(!this._mouseStarted)return n.preventDefault(),!0}return!0===e.data(n.target,this.widgetName+".preventClickEvent")&&e.removeData(n.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),n.preventDefault(),t=!0,!0},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}if(t.which||t.button)this._mouseMoved=!0;return this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(n){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,n.target===this._mouseDownEvent.target&&e.data(n.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(n)),t=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})});;
/*!
 * jQuery UI Draggable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery","./core","./mouse","./widget"],e):e(jQuery)})(function(e){return e.widget("ui.draggable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){this.options.helper==="original"&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),e==="handle"&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){if((this.helper||this.element).is(".ui-draggable-dragging")){this.destroyOnClear=!0;return}this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;return this._blurActiveElement(t),this.helper||n.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(n.iframeFix===!0?"iframe":n.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var n=this.document[0];if(!this.handleElement.is(t.target))return;try{n.activeElement&&n.activeElement.nodeName.toLowerCase()!=="body"&&e(n.activeElement).blur()}catch(r){}},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return e(this).css("position")==="fixed"}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,n){this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n=this,r=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(r=e.ui.ddmanager.drop(this,t)),this.dropped&&(r=this.dropped,this.dropped=!1),this.options.revert==="invalid"&&!r||this.options.revert==="valid"&&r||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,r)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){n._trigger("stop",t)!==!1&&n._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper),i=r?e(n.helper.apply(this.element[0],[t])):n.helper==="clone"?this.element.clone().removeAttr("id"):this.element;return i.parents("body").length||i.appendTo(n.appendTo==="parent"?this.element[0].parentNode:n.appendTo),r&&i[0]===this.element[0]&&this._setPositionRelative(),i[0]!==this.element[0]&&!/(fixed|absolute)/.test(i.css("position"))&&i.css("position","absolute"),i},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),n=this.document[0];return this.cssPosition==="absolute"&&this.scrollParent[0]!==n&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition!=="relative")return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,n,r,i=this.options,s=this.document[0];this.relativeContainer=null;if(!i.containment){this.containment=null;return}if(i.containment==="window"){this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||s.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(i.containment==="document"){this.containment=[0,0,e(s).width()-this.helperProportions.width-this.margins.left,(e(s).height()||s.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(i.containment.constructor===Array){this.containment=i.containment;return}i.containment==="parent"&&(i.containment=this.helper[0].parentNode),n=e(i.containment),r=n[0];if(!r)return;t=/(scroll|auto)/.test(n.css("overflow")),this.containment=[(parseInt(n.css("borderLeftWidth"),10)||0)+(parseInt(n.css("paddingLeft"),10)||0),(parseInt(n.css("borderTopWidth"),10)||0)+(parseInt(n.css("paddingTop"),10)||0),(t?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(n.css("borderRightWidth"),10)||0)-(parseInt(n.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(n.css("borderBottomWidth"),10)||0)-(parseInt(n.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=n},_convertPositionTo:function(e,t){t||(t=this.position);var n=e==="absolute"?1:-1,r=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*n+this.offset.parent.top*n-(this.cssPosition==="fixed"?-this.offset.scroll.top:r?0:this.offset.scroll.top)*n,left:t.left+this.offset.relative.left*n+this.offset.parent.left*n-(this.cssPosition==="fixed"?-this.offset.scroll.left:r?0:this.offset.scroll.left)*n}},_generatePosition:function(e,t){var n,r,i,s,o=this.options,u=this._isRootNode(this.scrollParent[0]),a=e.pageX,f=e.pageY;if(!u||!this.offset.scroll)this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()};return t&&(this.containment&&(this.relativeContainer?(r=this.relativeContainer.offset(),n=[this.containment[0]+r.left,this.containment[1]+r.top,this.containment[2]+r.left,this.containment[3]+r.top]):n=this.containment,e.pageX-this.offset.click.left<n[0]&&(a=n[0]+this.offset.click.left),e.pageY-this.offset.click.top<n[1]&&(f=n[1]+this.offset.click.top),e.pageX-this.offset.click.left>n[2]&&(a=n[2]+this.offset.click.left),e.pageY-this.offset.click.top>n[3]&&(f=n[3]+this.offset.click.top)),o.grid&&(i=o.grid[1]?this.originalPageY+Math.round((f-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,f=n?i-this.offset.click.top>=n[1]||i-this.offset.click.top>n[3]?i:i-this.offset.click.top>=n[1]?i-o.grid[1]:i+o.grid[1]:i,s=o.grid[0]?this.originalPageX+Math.round((a-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,a=n?s-this.offset.click.left>=n[0]||s-this.offset.click.left>n[2]?s:s-this.offset.click.left>=n[0]?s-o.grid[0]:s+o.grid[0]:s),o.axis==="y"&&(a=this.originalPageX),o.axis==="x"&&(f=this.originalPageY)),{top:f-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.offset.scroll.top:u?0:this.offset.scroll.top),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.offset.scroll.left:u?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){this.options.axis!=="y"&&this.helper.css("right")!=="auto"&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),this.options.axis!=="x"&&this.helper.css("bottom")!=="auto"&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,n,r){return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),r.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n,r){var i=e.extend({},n,{item:r.element});r.sortables=[],e(r.options.connectToSortable).each(function(){var n=e(this).sortable("instance");n&&!n.options.disabled&&(r.sortables.push(n),n.refreshPositions(),n._trigger("activate",t,i))})},stop:function(t,n,r){var i=e.extend({},n,{item:r.element});r.cancelHelperRemoval=!1,e.each(r.sortables,function(){var e=this;e.isOver?(e.isOver=0,r.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,i))})},drag:function(t,n,r){e.each(r.sortables,function(){var i=!1,s=this;s.positionAbs=r.positionAbs,s.helperProportions=r.helperProportions,s.offset.click=r.offset.click,s._intersectsWith(s.containerCache)&&(i=!0,e.each(r.sortables,function(){return this.positionAbs=r.positionAbs,this.helperProportions=r.helperProportions,this.offset.click=r.offset.click,this!==s&&this._intersectsWith(this.containerCache)&&e.contains(s.element[0],this.element[0])&&(i=!1),i})),i?(s.isOver||(s.isOver=1,r._parent=n.helper.parent(),s.currentItem=n.helper.appendTo(s.element).data("ui-sortable-item",!0),s.options._helper=s.options.helper,s.options.helper=function(){return n.helper[0]},t.target=s.currentItem[0],s._mouseCapture(t,!0),s._mouseStart(t,!0,!0),s.offset.click.top=r.offset.click.top,s.offset.click.left=r.offset.click.left,s.offset.parent.left-=r.offset.parent.left-s.offset.parent.left,s.offset.parent.top-=r.offset.parent.top-s.offset.parent.top,r._trigger("toSortable",t),r.dropped=s.element,e.each(r.sortables,function(){this.refreshPositions()}),r.currentItem=r.element,s.fromOutside=r),s.currentItem&&(s._mouseDrag(t),n.position=s.position)):s.isOver&&(s.isOver=0,s.cancelHelperRemoval=!0,s.options._revert=s.options.revert,s.options.revert=!1,s._trigger("out",t,s._uiHash(s)),s._mouseStop(t,!0),s.options.revert=s.options._revert,s.options.helper=s.options._helper,s.placeholder&&s.placeholder.remove(),n.helper.appendTo(r._parent),r._refreshOffsets(t),n.position=r._generatePosition(t,!0),r._trigger("fromSortable",t),r.dropped=!1,e.each(r.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,n,r){var i=e("body"),s=r.options;i.css("cursor")&&(s._cursor=i.css("cursor")),i.css("cursor",s.cursor)},stop:function(t,n,r){var i=r.options;i._cursor&&e("body").css("cursor",i._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n,r){var i=e(n.helper),s=r.options;i.css("opacity")&&(s._opacity=i.css("opacity")),i.css("opacity",s.opacity)},stop:function(t,n,r){var i=r.options;i._opacity&&e(n.helper).css("opacity",i._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,n){n.scrollParentNotHidden||(n.scrollParentNotHidden=n.helper.scrollParent(!1)),n.scrollParentNotHidden[0]!==n.document[0]&&n.scrollParentNotHidden[0].tagName!=="HTML"&&(n.overflowOffset=n.scrollParentNotHidden.offset())},drag:function(t,n,r){var i=r.options,s=!1,o=r.scrollParentNotHidden[0],u=r.document[0];if(o!==u&&o.tagName!=="HTML"){if(!i.axis||i.axis!=="x")r.overflowOffset.top+o.offsetHeight-t.pageY<i.scrollSensitivity?o.scrollTop=s=o.scrollTop+i.scrollSpeed:t.pageY-r.overflowOffset.top<i.scrollSensitivity&&(o.scrollTop=s=o.scrollTop-i.scrollSpeed);if(!i.axis||i.axis!=="y")r.overflowOffset.left+o.offsetWidth-t.pageX<i.scrollSensitivity?o.scrollLeft=s=o.scrollLeft+i.scrollSpeed:t.pageX-r.overflowOffset.left<i.scrollSensitivity&&(o.scrollLeft=s=o.scrollLeft-i.scrollSpeed)}else{if(!i.axis||i.axis!=="x")t.pageY-e(u).scrollTop()<i.scrollSensitivity?s=e(u).scrollTop(e(u).scrollTop()-i.scrollSpeed):e(window).height()-(t.pageY-e(u).scrollTop())<i.scrollSensitivity&&(s=e(u).scrollTop(e(u).scrollTop()+i.scrollSpeed));if(!i.axis||i.axis!=="y")t.pageX-e(u).scrollLeft()<i.scrollSensitivity?s=e(u).scrollLeft(e(u).scrollLeft()-i.scrollSpeed):e(window).width()-(t.pageX-e(u).scrollLeft())<i.scrollSensitivity&&(s=e(u).scrollLeft(e(u).scrollLeft()+i.scrollSpeed))}s!==!1&&e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(r,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,n,r){var i=r.options;r.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var t=e(this),n=t.offset();this!==r.element[0]&&r.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:n.top,left:n.left})})},drag:function(t,n,r){var i,s,o,u,a,f,l,c,h,p,d=r.options,v=d.snapTolerance,m=n.offset.left,g=m+r.helperProportions.width,y=n.offset.top,b=y+r.helperProportions.height;for(h=r.snapElements.length-1;h>=0;h--){a=r.snapElements[h].left-r.margins.left,f=a+r.snapElements[h].width,l=r.snapElements[h].top-r.margins.top,c=l+r.snapElements[h].height;if(g<a-v||m>f+v||b<l-v||y>c+v||!e.contains(r.snapElements[h].item.ownerDocument,r.snapElements[h].item)){r.snapElements[h].snapping&&r.options.snap.release&&r.options.snap.release.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[h].item})),r.snapElements[h].snapping=!1;continue}d.snapMode!=="inner"&&(i=Math.abs(l-b)<=v,s=Math.abs(c-y)<=v,o=Math.abs(a-g)<=v,u=Math.abs(f-m)<=v,i&&(n.position.top=r._convertPositionTo("relative",{top:l-r.helperProportions.height,left:0}).top),s&&(n.position.top=r._convertPositionTo("relative",{top:c,left:0}).top),o&&(n.position.left=r._convertPositionTo("relative",{top:0,left:a-r.helperProportions.width}).left),u&&(n.position.left=r._convertPositionTo("relative",{top:0,left:f}).left)),p=i||s||o||u,d.snapMode!=="outer"&&(i=Math.abs(l-y)<=v,s=Math.abs(c-b)<=v,o=Math.abs(a-m)<=v,u=Math.abs(f-g)<=v,i&&(n.position.top=r._convertPositionTo("relative",{top:l,left:0}).top),s&&(n.position.top=r._convertPositionTo("relative",{top:c-r.helperProportions.height,left:0}).top),o&&(n.position.left=r._convertPositionTo("relative",{top:0,left:a}).left),u&&(n.position.left=r._convertPositionTo("relative",{top:0,left:f-r.helperProportions.width}).left)),!r.snapElements[h].snapping&&(i||s||o||u||p)&&r.options.snap.snap&&r.options.snap.snap.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[h].item})),r.snapElements[h].snapping=i||s||o||u||p}}}),e.ui.plugin.add("draggable","stack",{start:function(t,n,r){var i,s=r.options,o=e.makeArray(e(s.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(!o.length)return;i=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",i+t)}),this.css("zIndex",i+o.length)}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n,r){var i=e(n.helper),s=r.options;i.css("zIndex")&&(s._zIndex=i.css("zIndex")),i.css("zIndex",s.zIndex)},stop:function(t,n,r){var i=r.options;i._zIndex&&e(n.helper).css("zIndex",i._zIndex)}}),e.ui.draggable});;
/*!
 * jQuery UI Resizable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/resizable/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery","./core","./mouse","./widget"],e):e(jQuery)})(function(e){return e.widget("ui.resizable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)},_create:function(){var t,n,r,i,s,o=this,u=this.options;this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!u.aspectRatio,aspectRatio:u.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:u.helper||u.ghost||u.animate?u.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=u.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=e();if(this.handles.constructor===String){this.handles==="all"&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={};for(n=0;n<t.length;n++)r=e.trim(t[n]),s="ui-resizable-"+r,i=e("<div class='ui-resizable-handle "+s+"'></div>"),i.css({zIndex:u.zIndex}),"se"===r&&i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[r]=".ui-resizable-"+r,this.element.append(i)}this._renderAxis=function(t){var n,r,i,s;t=t||this.element;for(n in this.handles){if(this.handles[n].constructor===String)this.handles[n]=this.element.children(this.handles[n]).first().show();else if(this.handles[n].jquery||this.handles[n].nodeType)this.handles[n]=e(this.handles[n]),this._on(this.handles[n],{mousedown:o._mouseDown});this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(r=e(this.handles[n],this.element),s=/sw|ne|nw|se|n|s/.test(n)?r.outerHeight():r.outerWidth(),i=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join(""),t.css(i,s),this._proportionallyResize()),this._handles=this._handles.add(this.handles[n])}},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=i&&i[1]?i[1]:"se")}),u.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(u.disabled)return;e(this).removeClass("ui-resizable-autohide"),o._handles.show()}).mouseleave(function(){if(u.disabled)return;o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,n=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(n(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),n(this.originalElement),this},_mouseCapture:function(t){var n,r,i=!1;for(n in this.handles){r=e(this.handles[n])[0];if(r===t.target||e.contains(r,t.target))i=!0}return!this.options.disabled&&i},_mouseStart:function(t){var n,r,i,s=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),n=this._num(this.helper.css("left")),r=this._num(this.helper.css("top")),s.containment&&(n+=e(s.containment).scrollLeft()||0,r+=e(s.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:n,top:r},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:n,top:r},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio=typeof s.aspectRatio=="number"?s.aspectRatio:this.originalSize.width/this.originalSize.height||1,i=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor",i==="auto"?this.axis+"-resize":i),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var n,r,i=this.originalMousePosition,s=this.axis,o=t.pageX-i.left||0,u=t.pageY-i.top||0,a=this._change[s];this._updatePrevProperties();if(!a)return!1;n=a.apply(this,[t,o,u]),this._updateVirtualBoundaries(t.shiftKey);if(this._aspectRatio||t.shiftKey)n=this._updateRatio(n,t);return n=this._respectSize(n,t),this._updateCache(n),this._propagate("resize",t),r=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(r)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1},_mouseStop:function(t){this.resizing=!1;var n,r,i,s,o,u,a,f=this.options,l=this;return this._helper&&(n=this._proportionallyResizeElements,r=n.length&&/textarea/i.test(n[0].nodeName),i=r&&this._hasScroll(n[0],"left")?0:l.sizeDiff.height,s=r?0:l.sizeDiff.width,o={width:l.helper.width()-s,height:l.helper.height()-i},u=parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left)||null,a=parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top)||null,f.animate||this.element.css(e.extend(o,{top:a,left:u})),l.helper.height(l.size.height),l.helper.width(l.size.width),this._helper&&!f.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={};return this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px"),this.helper.css(e),e},_updateVirtualBoundaries:function(e){var t,n,r,i,s,o=this.options;s={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:Infinity,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:Infinity};if(this._aspectRatio||e)t=s.minHeight*this.aspectRatio,r=s.minWidth/this.aspectRatio,n=s.maxHeight*this.aspectRatio,i=s.maxWidth/this.aspectRatio,t>s.minWidth&&(s.minWidth=t),r>s.minHeight&&(s.minHeight=r),n<s.maxWidth&&(s.maxWidth=n),i<s.maxHeight&&(s.maxHeight=i);this._vBoundaries=s},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,n=this.size,r=this.axis;return this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio),r==="sw"&&(e.left=t.left+(n.width-e.width),e.top=null),r==="nw"&&(e.top=t.top+(n.height-e.height),e.left=t.left+(n.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,n=this.axis,r=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,i=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,s=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,o=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,u=this.originalPosition.left+this.originalSize.width,a=this.position.top+this.size.height,f=/sw|nw|w/.test(n),l=/nw|ne|n/.test(n);return s&&(e.width=t.minWidth),o&&(e.height=t.minHeight),r&&(e.width=t.maxWidth),i&&(e.height=t.maxHeight),s&&f&&(e.left=u-t.minWidth),r&&f&&(e.left=u-t.maxWidth),o&&l&&(e.top=a-t.minHeight),i&&l&&(e.top=a-t.maxHeight),!e.width&&!e.height&&!e.left&&e.top?e.top=null:!e.width&&!e.height&&!e.top&&e.left&&(e.left=null),e},_getPaddingPlusBorderDimensions:function(e){var t=0,n=[],r=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],i=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];for(;t<4;t++)n[t]=parseInt(r[t],10)||0,n[t]+=parseInt(i[t],10)||0;return{height:n[0]+n[2],width:n[1]+n[3]}},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length)return;var e,t=0,n=this.helper||this.element;for(;t<this._proportionallyResizeElements.length;t++)e=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e)),e.css({height:n.height()-this.outerDimensions.height||0,width:n.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,n=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++n.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var n=this.originalSize,r=this.originalPosition;return{left:r.left+t,width:n.width-t}},n:function(e,t,n){var r=this.originalSize,i=this.originalPosition;return{top:i.top+n,height:r.height-n}},s:function(e,t,n){return{height:this.originalSize.height+n}},se:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},sw:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,n,r]))},ne:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},nw:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,n,r]))}},_propagate:function(t,n){e.ui.plugin.call(this,t,[n,this.ui()]),t!=="resize"&&this._trigger(t,n,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var n=e(this).resizable("instance"),r=n.options,i=n._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),o=s&&n._hasScroll(i[0],"left")?0:n.sizeDiff.height,u=s?0:n.sizeDiff.width,a={width:n.size.width-u,height:n.size.height-o},f=parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left)||null,l=parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top)||null;n.element.animate(e.extend(a,l&&f?{top:l,left:f}:{}),{duration:r.animateDuration,easing:r.animateEasing,step:function(){var r={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)};i&&i.length&&e(i[0]).css({width:r.width,height:r.height}),n._updateCache(r),n._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,n,r,i,s,o,u,a=e(this).resizable("instance"),f=a.options,l=a.element,c=f.containment,h=c instanceof e?c.get(0):/parent/.test(c)?l.parent().get(0):c;if(!h)return;a.containerElement=e(h),/document/.test(c)||c===document?(a.containerOffset={left:0,top:0},a.containerPosition={left:0,top:0},a.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(h),n=[],e(["Top","Right","Left","Bottom"]).each(function(e,r){n[e]=a._num(t.css("padding"+r))}),a.containerOffset=t.offset(),a.containerPosition=t.position(),a.containerSize={height:t.innerHeight()-n[3],width:t.innerWidth()-n[1]},r=a.containerOffset,i=a.containerSize.height,s=a.containerSize.width,o=a._hasScroll(h,"left")?h.scrollWidth:s,u=a._hasScroll(h)?h.scrollHeight:i,a.parentData={element:h,left:r.left,top:r.top,width:o,height:u})},resize:function(t){var n,r,i,s,o=e(this).resizable("instance"),u=o.options,a=o.containerOffset,f=o.position,l=o._aspectRatio||t.shiftKey,c={top:0,left:0},h=o.containerElement,p=!0;h[0]!==document&&/static/.test(h.css("position"))&&(c=a),f.left<(o._helper?a.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-a.left:o.position.left-c.left),l&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=u.helper?a.left:0),f.top<(o._helper?a.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-a.top:o.position.top),l&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?a.top:0),i=o.containerElement.get(0)===o.element.parent().get(0),s=/relative|absolute/.test(o.containerElement.css("position")),i&&s?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),n=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-c.left:o.offset.left-a.left)),r=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-c.top:o.offset.top-a.top)),n+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-n,l&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),r+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-r,l&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=e(this).resizable("instance"),n=t.options,r=t.containerOffset,i=t.containerPosition,s=t.containerElement,o=e(t.helper),u=o.offset(),a=o.outerWidth()-t.sizeDiff.width,f=o.outerHeight()-t.sizeDiff.height;t._helper&&!n.animate&&/relative/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f}),t._helper&&!n.animate&&/static/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),n=t.options;e(n.alsoResize).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})},resize:function(t,n){var r=e(this).resizable("instance"),i=r.options,s=r.originalSize,o=r.originalPosition,u={height:r.size.height-s.height||0,width:r.size.width-s.width||0,top:r.position.top-o.top||0,left:r.position.left-o.left||0};e(i.alsoResize).each(function(){var t=e(this),r=e(this).data("ui-resizable-alsoresize"),i={},s=t.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(s,function(e,t){var n=(r[t]||0)+(u[t]||0);n&&n>=0&&(i[t]=n||null)}),t.css(i)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),n=t.options,r=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:r.height,width:r.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof n.ghost=="string"?n.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t,n=e(this).resizable("instance"),r=n.options,i=n.size,s=n.originalSize,o=n.originalPosition,u=n.axis,a=typeof r.grid=="number"?[r.grid,r.grid]:r.grid,f=a[0]||1,l=a[1]||1,c=Math.round((i.width-s.width)/f)*f,h=Math.round((i.height-s.height)/l)*l,p=s.width+c,d=s.height+h,v=r.maxWidth&&r.maxWidth<p,m=r.maxHeight&&r.maxHeight<d,g=r.minWidth&&r.minWidth>p,y=r.minHeight&&r.minHeight>d;r.grid=a,g&&(p+=f),y&&(d+=l),v&&(p-=f),m&&(d-=l);if(/^(se|s|e)$/.test(u))n.size.width=p,n.size.height=d;else if(/^(ne)$/.test(u))n.size.width=p,n.size.height=d,n.position.top=o.top-h;else if(/^(sw)$/.test(u))n.size.width=p,n.size.height=d,n.position.left=o.left-c;else{if(d-l<=0||p-f<=0)t=n._getPaddingPlusBorderDimensions(this);d-l>0?(n.size.height=d,n.position.top=o.top-h):(d=l-t.height,n.size.height=d,n.position.top=o.top+s.height-d),p-f>0?(n.size.width=p,n.position.left=o.left-c):(p=f-t.width,n.size.width=p,n.position.left=o.left+s.width-p)}}}),e.ui.resizable});;
/*!
 * jQuery UI Dialog 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/dialog/
 */(function(e){typeof define=="function"&&define.amd?define(["jquery","./core","./widget","./button","./draggable","./mouse","./position","./resizable"],e):e(jQuery)})(function(e){return e.widget("ui.dialog",{version:"1.11.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var n=e(this).css(t).offset().top;n<0&&e(this).css("top",t.top-n)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var n,r=this;if(!this._isOpen||this._trigger("beforeClose",t)===!1)return;this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance();if(!this.opener.filter(":focusable").focus().length)try{n=this.document[0].activeElement,n&&n.nodeName.toLowerCase()!=="body"&&e(n).blur()}catch(i){}this._hide(this.uiDialog,this.options.hide,function(){r._trigger("close",t)})},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,n){var r=!1,i=this.uiDialog.siblings(".ui-front:visible").map(function(){return+e(this).css("z-index")}).get(),s=Math.max.apply(null,i);return s>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",s+1),r=!0),r&&!n&&this._trigger("focus",t),r},open:function(){var t=this;if(this._isOpen){this._moveToTop()&&this._focusTabbable();return}this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._makeFocusTarget(),this._trigger("open")},_focusTabbable:function(){var e=this._focusedElement;e||(e=this.element.find("[autofocus]")),e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function n(){var t=this.document[0].activeElement,n=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);n||this._focusTabbable()}t.preventDefault(),n.call(this),this._delay(n)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE){t.preventDefault(),this.close(t);return}if(t.keyCode!==e.ui.keyCode.TAB||t.isDefaultPrevented())return;var n=this.uiDialog.find(":tabbable"),r=n.filter(":first"),i=n.filter(":last");t.target!==i[0]&&t.target!==this.uiDialog[0]||!!t.shiftKey?(t.target===r[0]||t.target===this.uiDialog[0])&&t.shiftKey&&(this._delay(function(){i.focus()}),t.preventDefault()):(this._delay(function(){r.focus()}),t.preventDefault())},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,n=this.options.buttons;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty();if(e.isEmptyObject(n)||e.isArray(n)&&!n.length){this.uiDialog.removeClass("ui-dialog-buttons");return}e.each(n,function(n,r){var i,s;r=e.isFunction(r)?{click:r,text:n}:r,r=e.extend({type:"button"},r),i=r.click,r.click=function(){i.apply(t.element[0],arguments)},s={icons:r.icons,text:r.showText},delete r.icons,delete r.showText,e("<button></button>",r).button(s).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog)},_makeDraggable:function(){function r(e){return{position:e.position,offset:e.offset}}var t=this,n=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(n,i){e(this).addClass("ui-dialog-dragging"),t._blockFrames(),t._trigger("dragStart",n,r(i))},drag:function(e,n){t._trigger("drag",e,r(n))},stop:function(i,s){var o=s.offset.left-t.document.scrollLeft(),u=s.offset.top-t.document.scrollTop();n.position={my:"left top",at:"left"+(o>=0?"+":"")+o+" "+"top"+(u>=0?"+":"")+u,of:t.window},e(this).removeClass("ui-dialog-dragging"),t._unblockFrames(),t._trigger("dragStop",i,r(s))}})},_makeResizable:function(){function o(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var t=this,n=this.options,r=n.resizable,i=this.uiDialog.css("position"),s=typeof r=="string"?r:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:n.maxWidth,maxHeight:n.maxHeight,minWidth:n.minWidth,minHeight:this._minHeight(),handles:s,start:function(n,r){e(this).addClass("ui-dialog-resizing"),t._blockFrames(),t._trigger("resizeStart",n,o(r))},resize:function(e,n){t._trigger("resize",e,o(n))},stop:function(r,i){var s=t.uiDialog.offset(),u=s.left-t.document.scrollLeft(),a=s.top-t.document.scrollTop();n.height=t.uiDialog.height(),n.width=t.uiDialog.width(),n.position={my:"left top",at:"left"+(u>=0?"+":"")+u+" "+"top"+(a>=0?"+":"")+a,of:t.window},e(this).removeClass("ui-dialog-resizing"),t._unblockFrames(),t._trigger("resizeStop",r,o(i))}}).css("position",i)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=e(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),n=e.inArray(this,t);n!==-1&&t.splice(n,1)},_trackingInstances:function(){var e=this.document.data("ui-dialog-instances");return e||(e=[],this.document.data("ui-dialog-instances",e)),e},_minHeight:function(){var e=this.options;return e.height==="auto"?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(t){var n=this,r=!1,i={};e.each(t,function(e,t){n._setOption(e,t),e in n.sizeRelatedOptions&&(r=!0),e in n.resizableRelatedOptions&&(i[e]=t)}),r&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",i)},_setOption:function(e,t){var n,r,i=this.uiDialog;e==="dialogClass"&&i.removeClass(this.options.dialogClass).addClass(t);if(e==="disabled")return;this._super(e,t),e==="appendTo"&&this.uiDialog.appendTo(this._appendTo()),e==="buttons"&&this._createButtons(),e==="closeText"&&this.uiDialogTitlebarClose.button({label:""+t}),e==="draggable"&&(n=i.is(":data(ui-draggable)"),n&&!t&&i.draggable("destroy"),!n&&t&&this._makeDraggable()),e==="position"&&this._position(),e==="resizable"&&(r=i.is(":data(ui-resizable)"),r&&!t&&i.resizable("destroy"),r&&typeof t=="string"&&i.resizable("option","handles",t),!r&&t!==!1&&this._makeResizable()),e==="title"&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))},_size:function(){var e,t,n,r=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),r.minWidth>r.width&&(r.width=r.minWidth),e=this.uiDialog.css({height:"auto",width:r.width}).outerHeight(),t=Math.max(0,r.minHeight-e),n=typeof r.maxHeight=="number"?Math.max(0,r.maxHeight-e):"none",r.height==="auto"?this.element.css({minHeight:t,maxHeight:n,height:"auto"}):this.element.height(Math.max(0,r.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return e(t.target).closest(".ui-dialog").length?!0:!!e(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(!this.options.modal)return;var t=!0;this._delay(function(){t=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(e){if(t)return;this._allowInteraction(e)||(e.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)},_destroyOverlay:function(){if(!this.options.modal)return;if(this.overlay){var e=this.document.data("ui-dialog-overlays")-1;e?this.document.data("ui-dialog-overlays",e):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}})});;
/**
 * @file
 * Dialog API inspired by HTML5 dialog element.
 *
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#the-dialog-element
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  /**
   * Default dialog options.
   *
   * @type {object}
   *
   * @prop {bool} [autoOpen=true]
   * @prop {string} [dialogClass='']
   * @prop {string} [buttonClass='button']
   * @prop {string} [buttonPrimaryClass='button--primary']
   * @prop {function} close
   */
  drupalSettings.dialog = {
    autoOpen: true,
    dialogClass: '',
    // Drupal-specific extensions: see dialog.jquery-ui.js.
    buttonClass: 'button',
    buttonPrimaryClass: 'button--primary',
    // When using this API directly (when generating dialogs on the client
    // side), you may want to override this method and do
    // `jQuery(event.target).remove()` as well, to remove the dialog on
    // closing.
    close: function (event) {
      Drupal.dialog(event.target).close();
      Drupal.detachBehaviors(event.target, null, 'unload');
    }
  };

  /**
   * @typedef {object} Drupal.dialog~dialogDefinition
   *
   * @prop {boolean} open
   *   Is the dialog open or not.
   * @prop {*} returnValue
   *   Return value of the dialog.
   * @prop {function} show
   *   Method to display the dialog on the page.
   * @prop {function} showModal
   *   Method to display the dialog as a modal on the page.
   * @prop {function} close
   *   Method to hide the dialog from the page.
   */

  /**
   * Polyfill HTML5 dialog element with jQueryUI.
   *
   * @param {HTMLElement} element
   *   The element that holds the dialog.
   * @param {object} options
   *   jQuery UI options to be passed to the dialog.
   *
   * @return {Drupal.dialog~dialogDefinition}
   *   The dialog instance.
   */
  Drupal.dialog = function (element, options) {
    var undef;
    var $element = $(element);
    var dialog = {
      open: false,
      returnValue: undef,
      show: function () {
        openDialog({modal: false});
      },
      showModal: function () {
        openDialog({modal: true});
      },
      close: closeDialog
    };

    function openDialog(settings) {
      settings = $.extend({}, drupalSettings.dialog, options, settings);
      // Trigger a global event to allow scripts to bind events to the dialog.
      $(window).trigger('dialog:beforecreate', [dialog, $element, settings]);
      $element.dialog(settings);
      dialog.open = true;
      $(window).trigger('dialog:aftercreate', [dialog, $element, settings]);
    }

    function closeDialog(value) {
      $(window).trigger('dialog:beforeclose', [dialog, $element]);
      $element.dialog('close');
      dialog.returnValue = value;
      dialog.open = false;
      $(window).trigger('dialog:afterclose', [dialog, $element]);
    }

    return dialog;
  };

})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Positioning extensions for dialogs.
 */

/**
 * Triggers when content inside a dialog changes.
 *
 * @event dialogContentResize
 */

(function ($, Drupal, drupalSettings, debounce, displace) {

  'use strict';

  // autoResize option will turn off resizable and draggable.
  drupalSettings.dialog = $.extend({autoResize: true, maxHeight: '95%'}, drupalSettings.dialog);

  /**
   * Resets the current options for positioning.
   *
   * This is used as a window resize and scroll callback to reposition the
   * jQuery UI dialog. Although not a built-in jQuery UI option, this can
   * be disabled by setting autoResize: false in the options array when creating
   * a new {@link Drupal.dialog}.
   *
   * @function Drupal.dialog~resetSize
   *
   * @param {jQuery.Event} event
   *   The event triggered.
   *
   * @fires event:dialogContentResize
   */
  function resetSize(event) {
    var positionOptions = ['width', 'height', 'minWidth', 'minHeight', 'maxHeight', 'maxWidth', 'position'];
    var adjustedOptions = {};
    var windowHeight = $(window).height();
    var option;
    var optionValue;
    var adjustedValue;
    for (var n = 0; n < positionOptions.length; n++) {
      option = positionOptions[n];
      optionValue = event.data.settings[option];
      if (optionValue) {
        // jQuery UI does not support percentages on heights, convert to pixels.
        if (typeof optionValue === 'string' && /%$/.test(optionValue) && /height/i.test(option)) {
          // Take offsets in account.
          windowHeight -= displace.offsets.top + displace.offsets.bottom;
          adjustedValue = parseInt(0.01 * parseInt(optionValue, 10) * windowHeight, 10);
          // Don't force the dialog to be bigger vertically than needed.
          if (option === 'height' && event.data.$element.parent().outerHeight() < adjustedValue) {
            adjustedValue = 'auto';
          }
          adjustedOptions[option] = adjustedValue;
        }
      }
    }
    // Offset the dialog center to be at the center of Drupal.displace.offsets.
    adjustedOptions = resetPosition(adjustedOptions);
    event.data.$element
      .dialog('option', adjustedOptions)
      .trigger('dialogContentResize');
  }

  /**
   * Position the dialog's center at the center of displace.offsets boundaries.
   *
   * @function Drupal.dialog~resetPosition
   *
   * @param {object} options
   *   Options object.
   *
   * @return {object}
   *   Altered options object.
   */
  function resetPosition(options) {
    var offsets = displace.offsets;
    var left = offsets.left - offsets.right;
    var top = offsets.top - offsets.bottom;

    var leftString = (left > 0 ? '+' : '-') + Math.abs(Math.round(left / 2)) + 'px';
    var topString = (top > 0 ? '+' : '-') + Math.abs(Math.round(top / 2)) + 'px';
    options.position = {
      my: 'center' + (left !== 0 ? leftString : '') + ' center' + (top !== 0 ? topString : ''),
      of: window
    };
    return options;
  }

  $(window).on({
    'dialog:aftercreate': function (event, dialog, $element, settings) {
      var autoResize = debounce(resetSize, 20);
      var eventData = {settings: settings, $element: $element};
      if (settings.autoResize === true || settings.autoResize === 'true') {
        $element
          .dialog('option', {resizable: false, draggable: false})
          .dialog('widget').css('position', 'fixed');
        $(window)
          .on('resize.dialogResize scroll.dialogResize', eventData, autoResize)
          .trigger('resize.dialogResize');
        $(document).on('drupalViewportOffsetChange', eventData, autoResize);
      }
    },
    'dialog:beforeclose': function (event, dialog, $element) {
      $(window).off('.dialogResize');
    }
  });

})(jQuery, Drupal, drupalSettings, Drupal.debounce, Drupal.displace);
;
/**
 * @file
 * Adds default classes to buttons for styling purposes.
 */

(function ($) {

  'use strict';

  $.widget('ui.dialog', $.ui.dialog, {
    options: {
      buttonClass: 'button',
      buttonPrimaryClass: 'button--primary'
    },
    _createButtons: function () {
      var opts = this.options;
      var primaryIndex;
      var $buttons;
      var index;
      var il = opts.buttons.length;
      for (index = 0; index < il; index++) {
        if (opts.buttons[index].primary && opts.buttons[index].primary === true) {
          primaryIndex = index;
          delete opts.buttons[index].primary;
          break;
        }
      }
      this._super();
      $buttons = this.uiButtonSet.children().addClass(opts.buttonClass);
      if (typeof primaryIndex !== 'undefined') {
        $buttons.eq(index).addClass(opts.buttonPrimaryClass);
      }
    }
  });

})(jQuery);
;
/**
 * @file
 * Attaches behavior for the Quick Edit module.
 *
 * Everything happens asynchronously, to allow for:
 *   - dynamically rendered contextual links
 *   - asynchronously retrieved (and cached) per-field in-place editing metadata
 *   - asynchronous setup of in-place editable field and "Quick edit" link.
 *
 * To achieve this, there are several queues:
 *   - fieldsMetadataQueue: fields whose metadata still needs to be fetched.
 *   - fieldsAvailableQueue: queue of fields whose metadata is known, and for
 *     which it has been confirmed that the user has permission to edit them.
 *     However, FieldModels will only be created for them once there's a
 *     contextual link for their entity: when it's possible to initiate editing.
 *   - contextualLinksQueue: queue of contextual links on entities for which it
 *     is not yet known whether the user has permission to edit at >=1 of them.
 */

(function ($, _, Backbone, Drupal, drupalSettings, JSON, storage) {

  'use strict';

  var options = $.extend(drupalSettings.quickedit,
    // Merge strings on top of drupalSettings so that they are not mutable.
    {
      strings: {
        quickEdit: Drupal.t('Quick edit')
      }
    }
  );

  /**
   * Tracks fields without metadata. Contains objects with the following keys:
   *   - DOM el
   *   - String fieldID
   *   - String entityID
   */
  var fieldsMetadataQueue = [];

  /**
   * Tracks fields ready for use. Contains objects with the following keys:
   *   - DOM el
   *   - String fieldID
   *   - String entityID
   */
  var fieldsAvailableQueue = [];

  /**
   * Tracks contextual links on entities. Contains objects with the following
   * keys:
   *   - String entityID
   *   - DOM el
   *   - DOM region
   */
  var contextualLinksQueue = [];

  /**
   * Tracks how many instances exist for each unique entity. Contains key-value
   * pairs:
   * - String entityID
   * - Number count
   */
  var entityInstancesTracker = {};

  /**
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.quickedit = {
    attach: function (context) {
      // Initialize the Quick Edit app once per page load.
      $('body').once('quickedit-init').each(initQuickEdit);

      // Find all in-place editable fields, if any.
      var $fields = $(context).find('[data-quickedit-field-id]').once('quickedit');
      if ($fields.length === 0) {
        return;
      }

      // Process each entity element: identical entities that appear multiple
      // times will get a numeric identifier, starting at 0.
      $(context).find('[data-quickedit-entity-id]').once('quickedit').each(function (index, entityElement) {
        processEntity(entityElement);
      });

      // Process each field element: queue to be used or to fetch metadata.
      // When a field is being rerendered after editing, it will be processed
      // immediately. New fields will be unable to be processed immediately,
      // but will instead be queued to have their metadata fetched, which occurs
      // below in fetchMissingMetaData().
      $fields.each(function (index, fieldElement) {
        processField(fieldElement);
      });

      // Entities and fields on the page have been detected, try to set up the
      // contextual links for those entities that already have the necessary
      // meta- data in the client-side cache.
      contextualLinksQueue = _.filter(contextualLinksQueue, function (contextualLink) {
        return !initializeEntityContextualLink(contextualLink);
      });

      // Fetch metadata for any fields that are queued to retrieve it.
      fetchMissingMetadata(function (fieldElementsWithFreshMetadata) {
        // Metadata has been fetched, reprocess fields whose metadata was
        // missing.
        _.each(fieldElementsWithFreshMetadata, processField);

        // Metadata has been fetched, try to set up more contextual links now.
        contextualLinksQueue = _.filter(contextualLinksQueue, function (contextualLink) {
          return !initializeEntityContextualLink(contextualLink);
        });
      });
    },
    detach: function (context, settings, trigger) {
      if (trigger === 'unload') {
        deleteContainedModelsAndQueues($(context));
      }
    }
  };

  /**
   *
   * @namespace
   */
  Drupal.quickedit = {

    /**
     * A {@link Drupal.quickedit.AppView} instance.
     */
    app: null,

    /**
     * @type {object}
     *
     * @prop {Array.<Drupal.quickedit.EntityModel>} entities
     * @prop {Array.<Drupal.quickedit.FieldModel>} fields
     */
    collections: {
      // All in-place editable entities (Drupal.quickedit.EntityModel) on the
      // page.
      entities: null,
      // All in-place editable fields (Drupal.quickedit.FieldModel) on the page.
      fields: null
    },

    /**
     * In-place editors will register themselves in this object.
     *
     * @namespace
     */
    editors: {},

    /**
     * Per-field metadata that indicates whether in-place editing is allowed,
     * which in-place editor should be used, etc.
     *
     * @namespace
     */
    metadata: {

      /**
       * Check if a field exists in storage.
       *
       * @param {string} fieldID
       *   The field id to check.
       *
       * @return {bool}
       *   Whether it was found or not.
       */
      has: function (fieldID) {
        return storage.getItem(this._prefixFieldID(fieldID)) !== null;
      },

      /**
       * Add metadata to a field id.
       *
       * @param {string} fieldID
       *   The field ID to add data to.
       * @param {object} metadata
       *   Metadata to add.
       */
      add: function (fieldID, metadata) {
        storage.setItem(this._prefixFieldID(fieldID), JSON.stringify(metadata));
      },

      /**
       * Get a key from a field id.
       *
       * @param {string} fieldID
       *   The field ID to check.
       * @param {string} [key]
       *   The key to check. If empty, will return all metadata.
       *
       * @return {object|*}
       *   The value for the key, if defined. Otherwise will return all metadata
       *   for the specified field id.
       *
       */
      get: function (fieldID, key) {
        var metadata = JSON.parse(storage.getItem(this._prefixFieldID(fieldID)));
        return (typeof key === 'undefined') ? metadata : metadata[key];
      },

      /**
       * Prefix the field id.
       *
       * @param {string} fieldID
       *   The field id to prefix.
       *
       * @return {string}
       *   A prefixed field id.
       */
      _prefixFieldID: function (fieldID) {
        return 'Drupal.quickedit.metadata.' + fieldID;
      },

      /**
       * Unprefix the field id.
       *
       * @param {string} fieldID
       *   The field id to unprefix.
       *
       * @return {string}
       *   An unprefixed field id.
       */
      _unprefixFieldID: function (fieldID) {
        // Strip "Drupal.quickedit.metadata.", which is 26 characters long.
        return fieldID.substring(26);
      },

      /**
       * Intersection calculation.
       *
       * @param {Array} fieldIDs
       *   An array of field ids to compare to prefix field id.
       *
       * @return {Array}
       *   The intersection found.
       */
      intersection: function (fieldIDs) {
        var prefixedFieldIDs = _.map(fieldIDs, this._prefixFieldID);
        var intersection = _.intersection(prefixedFieldIDs, _.keys(sessionStorage));
        return _.map(intersection, this._unprefixFieldID);
      }
    }
  };

  // Clear the Quick Edit metadata cache whenever the current user's set of
  // permissions changes.
  var permissionsHashKey = Drupal.quickedit.metadata._prefixFieldID('permissionsHash');
  var permissionsHashValue = storage.getItem(permissionsHashKey);
  var permissionsHash = drupalSettings.user.permissionsHash;
  if (permissionsHashValue !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 26) === 'Drupal.quickedit.metadata.') {
          storage.removeItem(key);
        }
      });
    }
    storage.setItem(permissionsHashKey, permissionsHash);
  }

  /**
   * Detect contextual links on entities annotated by quickedit.
   *
   * Queue contextual links to be processed.
   *
   * @param {jQuery.Event} event
   *   The `drupalContextualLinkAdded` event.
   * @param {object} data
   *   An object containing the data relevant to the event.
   *
   * @listens event:drupalContextualLinkAdded
   */
  $(document).on('drupalContextualLinkAdded', function (event, data) {
    if (data.$region.is('[data-quickedit-entity-id]')) {
      // If the contextual link is cached on the client side, an entity instance
      // will not yet have been assigned. So assign one.
      if (!data.$region.is('[data-quickedit-entity-instance-id]')) {
        data.$region.once('quickedit');
        processEntity(data.$region.get(0));
      }
      var contextualLink = {
        entityID: data.$region.attr('data-quickedit-entity-id'),
        entityInstanceID: data.$region.attr('data-quickedit-entity-instance-id'),
        el: data.$el[0],
        region: data.$region[0]
      };
      // Set up contextual links for this, otherwise queue it to be set up
      // later.
      if (!initializeEntityContextualLink(contextualLink)) {
        contextualLinksQueue.push(contextualLink);
      }
    }
  });

  /**
   * Extracts the entity ID from a field ID.
   *
   * @param {string} fieldID
   *   A field ID: a string of the format
   *   `<entity type>/<id>/<field name>/<language>/<view mode>`.
   *
   * @return {string}
   *   An entity ID: a string of the format `<entity type>/<id>`.
   */
  function extractEntityID(fieldID) {
    return fieldID.split('/').slice(0, 2).join('/');
  }

  /**
   * Initialize the Quick Edit app.
   *
   * @param {HTMLElement} bodyElement
   *   This document's body element.
   */
  function initQuickEdit(bodyElement) {
    Drupal.quickedit.collections.entities = new Drupal.quickedit.EntityCollection();
    Drupal.quickedit.collections.fields = new Drupal.quickedit.FieldCollection();

    // Instantiate AppModel (application state) and AppView, which is the
    // controller of the whole in-place editing experience.
    Drupal.quickedit.app = new Drupal.quickedit.AppView({
      el: bodyElement,
      model: new Drupal.quickedit.AppModel(),
      entitiesCollection: Drupal.quickedit.collections.entities,
      fieldsCollection: Drupal.quickedit.collections.fields
    });
  }

  /**
   * Assigns the entity an instance ID.
   *
   * @param {HTMLElement} entityElement
   *   A Drupal Entity API entity's DOM element with a data-quickedit-entity-id
   *   attribute.
   */
  function processEntity(entityElement) {
    var entityID = entityElement.getAttribute('data-quickedit-entity-id');
    if (!entityInstancesTracker.hasOwnProperty(entityID)) {
      entityInstancesTracker[entityID] = 0;
    }
    else {
      entityInstancesTracker[entityID]++;
    }

    // Set the calculated entity instance ID for this element.
    var entityInstanceID = entityInstancesTracker[entityID];
    entityElement.setAttribute('data-quickedit-entity-instance-id', entityInstanceID);
  }

  /**
   * Fetch the field's metadata; queue or initialize it (if EntityModel exists).
   *
   * @param {HTMLElement} fieldElement
   *   A Drupal Field API field's DOM element with a data-quickedit-field-id
   *   attribute.
   */
  function processField(fieldElement) {
    var metadata = Drupal.quickedit.metadata;
    var fieldID = fieldElement.getAttribute('data-quickedit-field-id');
    var entityID = extractEntityID(fieldID);
    // Figure out the instance ID by looking at the ancestor
    // [data-quickedit-entity-id] element's data-quickedit-entity-instance-id
    // attribute.
    var entityElementSelector = '[data-quickedit-entity-id="' + entityID + '"]';
    var entityElement = $(fieldElement).closest(entityElementSelector);
    // In the case of a full entity view page, the entity title is rendered
    // outside of "the entity DOM node": it's rendered as the page title. So in
    // this case, we find the lowest common parent element (deepest in the tree)
    // and consider that the entity element.
    if (entityElement.length === 0) {
      var $lowestCommonParent = $(entityElementSelector).parents().has(fieldElement).first();
      entityElement = $lowestCommonParent.find(entityElementSelector);
    }
    var entityInstanceID = entityElement
      .get(0)
      .getAttribute('data-quickedit-entity-instance-id');

    // Early-return if metadata for this field is missing.
    if (!metadata.has(fieldID)) {
      fieldsMetadataQueue.push({
        el: fieldElement,
        fieldID: fieldID,
        entityID: entityID,
        entityInstanceID: entityInstanceID
      });
      return;
    }
    // Early-return if the user is not allowed to in-place edit this field.
    if (metadata.get(fieldID, 'access') !== true) {
      return;
    }

    // If an EntityModel for this field already exists (and hence also a "Quick
    // edit" contextual link), then initialize it immediately.
    if (Drupal.quickedit.collections.entities.findWhere({entityID: entityID, entityInstanceID: entityInstanceID})) {
      initializeField(fieldElement, fieldID, entityID, entityInstanceID);
    }
    // Otherwise: queue the field. It is now available to be set up when its
    // corresponding entity becomes in-place editable.
    else {
      fieldsAvailableQueue.push({el: fieldElement, fieldID: fieldID, entityID: entityID, entityInstanceID: entityInstanceID});
    }
  }

  /**
   * Initialize a field; create FieldModel.
   *
   * @param {HTMLElement} fieldElement
   *   The field's DOM element.
   * @param {string} fieldID
   *   The field's ID.
   * @param {string} entityID
   *   The field's entity's ID.
   * @param {string} entityInstanceID
   *   The field's entity's instance ID.
   */
  function initializeField(fieldElement, fieldID, entityID, entityInstanceID) {
    var entity = Drupal.quickedit.collections.entities.findWhere({
      entityID: entityID,
      entityInstanceID: entityInstanceID
    });

    $(fieldElement).addClass('quickedit-field');

    // The FieldModel stores the state of an in-place editable entity field.
    var field = new Drupal.quickedit.FieldModel({
      el: fieldElement,
      fieldID: fieldID,
      id: fieldID + '[' + entity.get('entityInstanceID') + ']',
      entity: entity,
      metadata: Drupal.quickedit.metadata.get(fieldID),
      acceptStateChange: _.bind(Drupal.quickedit.app.acceptEditorStateChange, Drupal.quickedit.app)
    });

    // Track all fields on the page.
    Drupal.quickedit.collections.fields.add(field);
  }

  /**
   * Fetches metadata for fields whose metadata is missing.
   *
   * Fields whose metadata is missing are tracked at fieldsMetadataQueue.
   *
   * @param {function} callback
   *   A callback function that receives field elements whose metadata will just
   *   have been fetched.
   */
  function fetchMissingMetadata(callback) {
    if (fieldsMetadataQueue.length) {
      var fieldIDs = _.pluck(fieldsMetadataQueue, 'fieldID');
      var fieldElementsWithoutMetadata = _.pluck(fieldsMetadataQueue, 'el');
      var entityIDs = _.uniq(_.pluck(fieldsMetadataQueue, 'entityID'), true);
      // Ensure we only request entityIDs for which we don't have metadata yet.
      entityIDs = _.difference(entityIDs, Drupal.quickedit.metadata.intersection(entityIDs));
      fieldsMetadataQueue = [];

      $.ajax({
        url: Drupal.url('quickedit/metadata'),
        type: 'POST',
        data: {
          'fields[]': fieldIDs,
          'entities[]': entityIDs
        },
        dataType: 'json',
        success: function (results) {
          // Store the metadata.
          _.each(results, function (fieldMetadata, fieldID) {
            Drupal.quickedit.metadata.add(fieldID, fieldMetadata);
          });

          callback(fieldElementsWithoutMetadata);
        }
      });
    }
  }

  /**
   * Loads missing in-place editor's attachments (JavaScript and CSS files).
   *
   * Missing in-place editors are those whose fields are actively being used on
   * the page but don't have.
   *
   * @param {function} callback
   *   Callback function to be called when the missing in-place editors (if any)
   *   have been inserted into the DOM. i.e. they may still be loading.
   */
  function loadMissingEditors(callback) {
    var loadedEditors = _.keys(Drupal.quickedit.editors);
    var missingEditors = [];
    Drupal.quickedit.collections.fields.each(function (fieldModel) {
      var metadata = Drupal.quickedit.metadata.get(fieldModel.get('fieldID'));
      if (metadata.access && _.indexOf(loadedEditors, metadata.editor) === -1) {
        missingEditors.push(metadata.editor);
        // Set a stub, to prevent subsequent calls to loadMissingEditors() from
        // loading the same in-place editor again. Loading an in-place editor
        // requires talking to a server, to download its JavaScript, then
        // executing its JavaScript, and only then its Drupal.quickedit.editors
        // entry will be set.
        Drupal.quickedit.editors[metadata.editor] = false;
      }
    });
    missingEditors = _.uniq(missingEditors);
    if (missingEditors.length === 0) {
      callback();
      return;
    }

    // @see https://www.drupal.org/node/2029999.
    // Create a Drupal.Ajax instance to load the form.
    var loadEditorsAjax = Drupal.ajax({
      url: Drupal.url('quickedit/attachments'),
      submit: {'editors[]': missingEditors}
    });
    // Implement a scoped insert AJAX command: calls the callback after all AJAX
    // command functions have been executed (hence the deferred calling).
    var realInsert = Drupal.AjaxCommands.prototype.insert;
    loadEditorsAjax.commands.insert = function (ajax, response, status) {
      _.defer(callback);
      realInsert(ajax, response, status);
    };
    // Trigger the AJAX request, which will should return AJAX commands to
    // insert any missing attachments.
    loadEditorsAjax.execute();
  }

  /**
   * Attempts to set up a "Quick edit" link and corresponding EntityModel.
   *
   * @param {object} contextualLink
   *   An object with the following properties:
   *     - String entityID: a Quick Edit entity identifier, e.g. "node/1" or
   *       "block_content/5".
   *     - String entityInstanceID: a Quick Edit entity instance identifier,
   *       e.g. 0, 1 or n (depending on whether it's the first, second, or n+1st
   *       instance of this entity).
   *     - DOM el: element pointing to the contextual links placeholder for this
   *       entity.
   *     - DOM region: element pointing to the contextual region of this entity.
   *
   * @return {bool}
   *   Returns true when a contextual the given contextual link metadata can be
   *   removed from the queue (either because the contextual link has been set
   *   up or because it is certain that in-place editing is not allowed for any
   *   of its fields). Returns false otherwise.
   */
  function initializeEntityContextualLink(contextualLink) {
    var metadata = Drupal.quickedit.metadata;
    // Check if the user has permission to edit at least one of them.
    function hasFieldWithPermission(fieldIDs) {
      for (var i = 0; i < fieldIDs.length; i++) {
        var fieldID = fieldIDs[i];
        if (metadata.get(fieldID, 'access') === true) {
          return true;
        }
      }
      return false;
    }

    // Checks if the metadata for all given field IDs exists.
    function allMetadataExists(fieldIDs) {
      return fieldIDs.length === metadata.intersection(fieldIDs).length;
    }

    // Find all fields for this entity instance and collect their field IDs.
    var fields = _.where(fieldsAvailableQueue, {
      entityID: contextualLink.entityID,
      entityInstanceID: contextualLink.entityInstanceID
    });
    var fieldIDs = _.pluck(fields, 'fieldID');

    // No fields found yet.
    if (fieldIDs.length === 0) {
      return false;
    }
    // The entity for the given contextual link contains at least one field that
    // the current user may edit in-place; instantiate EntityModel,
    // EntityDecorationView and ContextualLinkView.
    else if (hasFieldWithPermission(fieldIDs)) {
      var entityModel = new Drupal.quickedit.EntityModel({
        el: contextualLink.region,
        entityID: contextualLink.entityID,
        entityInstanceID: contextualLink.entityInstanceID,
        id: contextualLink.entityID + '[' + contextualLink.entityInstanceID + ']',
        label: Drupal.quickedit.metadata.get(contextualLink.entityID, 'label')
      });
      Drupal.quickedit.collections.entities.add(entityModel);
      // Create an EntityDecorationView associated with the root DOM node of the
      // entity.
      var entityDecorationView = new Drupal.quickedit.EntityDecorationView({
        el: contextualLink.region,
        model: entityModel
      });
      entityModel.set('entityDecorationView', entityDecorationView);

      // Initialize all queued fields within this entity (creates FieldModels).
      _.each(fields, function (field) {
        initializeField(field.el, field.fieldID, contextualLink.entityID, contextualLink.entityInstanceID);
      });
      fieldsAvailableQueue = _.difference(fieldsAvailableQueue, fields);

      // Initialization should only be called once. Use Underscore's once method
      // to get a one-time use version of the function.
      var initContextualLink = _.once(function () {
        var $links = $(contextualLink.el).find('.contextual-links');
        var contextualLinkView = new Drupal.quickedit.ContextualLinkView($.extend({
          el: $('<li class="quickedit"><a href="" role="button" aria-pressed="false"></a></li>').prependTo($links),
          model: entityModel,
          appModel: Drupal.quickedit.app.model
        }, options));
        entityModel.set('contextualLinkView', contextualLinkView);
      });

      // Set up ContextualLinkView after loading any missing in-place editors.
      loadMissingEditors(initContextualLink);

      return true;
    }
    // There was not at least one field that the current user may edit in-place,
    // even though the metadata for all fields within this entity is available.
    else if (allMetadataExists(fieldIDs)) {
      return true;
    }

    return false;
  }

  /**
   * Delete models and queue items that are contained within a given context.
   *
   * Deletes any contained EntityModels (plus their associated FieldModels and
   * ContextualLinkView) and FieldModels, as well as the corresponding queues.
   *
   * After EntityModels, FieldModels must also be deleted, because it is
   * possible in Drupal for a field DOM element to exist outside of the entity
   * DOM element, e.g. when viewing the full node, the title of the node is not
   * rendered within the node (the entity) but as the page title.
   *
   * Note: this will not delete an entity that is actively being in-place
   * edited.
   *
   * @param {jQuery} $context
   *   The context within which to delete.
   */
  function deleteContainedModelsAndQueues($context) {
    $context.find('[data-quickedit-entity-id]').addBack('[data-quickedit-entity-id]').each(function (index, entityElement) {
      // Delete entity model.
      var entityModel = Drupal.quickedit.collections.entities.findWhere({el: entityElement});
      if (entityModel) {
        var contextualLinkView = entityModel.get('contextualLinkView');
        contextualLinkView.undelegateEvents();
        contextualLinkView.remove();
        // Remove the EntityDecorationView.
        entityModel.get('entityDecorationView').remove();
        // Destroy the EntityModel; this will also destroy its FieldModels.
        entityModel.destroy();
      }

      // Filter queue.
      function hasOtherRegion(contextualLink) {
        return contextualLink.region !== entityElement;
      }

      contextualLinksQueue = _.filter(contextualLinksQueue, hasOtherRegion);
    });

    $context.find('[data-quickedit-field-id]').addBack('[data-quickedit-field-id]').each(function (index, fieldElement) {
      // Delete field models.
      Drupal.quickedit.collections.fields.chain()
        .filter(function (fieldModel) { return fieldModel.get('el') === fieldElement; })
        .invoke('destroy');

      // Filter queues.
      function hasOtherFieldElement(field) {
        return field.el !== fieldElement;
      }

      fieldsMetadataQueue = _.filter(fieldsMetadataQueue, hasOtherFieldElement);
      fieldsAvailableQueue = _.filter(fieldsAvailableQueue, hasOtherFieldElement);
    });
  }

})(jQuery, _, Backbone, Drupal, drupalSettings, window.JSON, window.sessionStorage);
;
/**
 * @file
 * Provides utility functions for Quick Edit.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * @namespace
   */
  Drupal.quickedit.util = Drupal.quickedit.util || {};

  /**
   * @namespace
   */
  Drupal.quickedit.util.constants = {};

  /**
   *
   * @type {string}
   */
  Drupal.quickedit.util.constants.transitionEnd = 'transitionEnd.quickedit webkitTransitionEnd.quickedit transitionend.quickedit msTransitionEnd.quickedit oTransitionEnd.quickedit';

  /**
   * Converts a field id into a formatted url path.
   *
   * @example
   * Drupal.quickedit.util.buildUrl(
   *   'node/1/body/und/full',
   *   '/quickedit/form/!entity_type/!id/!field_name/!langcode/!view_mode'
   * );
   *
   * @param {string} id
   *   The id of an editable field.
   * @param {string} urlFormat
   *   The Controller route for field processing.
   *
   * @return {string}
   *   The formatted URL.
   */
  Drupal.quickedit.util.buildUrl = function (id, urlFormat) {
    var parts = id.split('/');
    return Drupal.formatString(decodeURIComponent(urlFormat), {
      '!entity_type': parts[0],
      '!id': parts[1],
      '!field_name': parts[2],
      '!langcode': parts[3],
      '!view_mode': parts[4]
    });
  };

  /**
   * Shows a network error modal dialog.
   *
   * @param {string} title
   *   The title to use in the modal dialog.
   * @param {string} message
   *   The message to use in the modal dialog.
   */
  Drupal.quickedit.util.networkErrorModal = function (title, message) {
    var $message = $('<div>' + message + '</div>');
    var networkErrorModal = Drupal.dialog($message.get(0), {
      title: title,
      dialogClass: 'quickedit-network-error',
      buttons: [
        {
          text: Drupal.t('OK'),
          click: function () {
            networkErrorModal.close();
          },
          primary: true
        }
      ],
      create: function () {
        $(this).parent().find('.ui-dialog-titlebar-close').remove();
      },
      close: function (event) {
        // Automatically destroy the DOM element that was used for the dialog.
        $(event.target).remove();
      }
    });
    networkErrorModal.showModal();
  };

  /**
   * @namespace
   */
  Drupal.quickedit.util.form = {

    /**
     * Loads a form, calls a callback to insert.
     *
     * Leverages {@link Drupal.Ajax}' ability to have scoped (per-instance)
     * command implementations to be able to call a callback.
     *
     * @param {object} options
     *   An object with the following keys:
     * @param {string} options.fieldID
     *   The field ID that uniquely identifies the field for which this form
     *   will be loaded.
     * @param {bool} options.nocssjs
     *   Boolean indicating whether no CSS and JS should be returned (necessary
     *   when the form is invisible to the user).
     * @param {bool} options.reset
     *   Boolean indicating whether the data stored for this field's entity in
     *   PrivateTempStore should be used or reset.
     * @param {function} callback
     *   A callback function that will receive the form to be inserted, as well
     *   as the ajax object, necessary if the callback wants to perform other
     *   Ajax commands.
     */
    load: function (options, callback) {
      var fieldID = options.fieldID;

      // Create a Drupal.ajax instance to load the form.
      var formLoaderAjax = Drupal.ajax({
        url: Drupal.quickedit.util.buildUrl(fieldID, Drupal.url('quickedit/form/!entity_type/!id/!field_name/!langcode/!view_mode')),
        submit: {
          nocssjs: options.nocssjs,
          reset: options.reset
        },
        error: function (xhr, url) {
          // Show a modal to inform the user of the network error.
          var fieldLabel = Drupal.quickedit.metadata.get(fieldID, 'label');
          var message = Drupal.t('Could not load the form for <q>@field-label</q>, either due to a website problem or a network connection problem.<br>Please try again.', {'@field-label': fieldLabel});
          Drupal.quickedit.util.networkErrorModal(Drupal.t('Network problem!'), message);

          // Change the state back to "candidate", to allow the user to start
          // in-place editing of the field again.
          var fieldModel = Drupal.quickedit.app.model.get('activeField');
          fieldModel.set('state', 'candidate');
        }
      });
      // Implement a scoped quickeditFieldForm AJAX command: calls the callback.
      formLoaderAjax.commands.quickeditFieldForm = function (ajax, response, status) {
        callback(response.data, ajax);
        Drupal.ajax.instances[this.instanceIndex] = null;
      };
      // This will ensure our scoped quickeditFieldForm AJAX command gets
      // called.
      formLoaderAjax.execute();
    },

    /**
     * Creates a {@link Drupal.Ajax} instance that is used to save a form.
     *
     * @param {object} options
     *   Submit options to the form.
     * @param {bool} options.nocssjs
     *   Boolean indicating whether no CSS and JS should be returned (necessary
     *   when the form is invisible to the user).
     * @param {Array.<string>} options.other_view_modes
     *   Array containing view mode IDs (of other instances of this field on the
     *   page).
     * @param {jQuery} $submit
     *   The submit element.
     *
     * @return {Drupal.Ajax}
     *   A {@link Drupal.Ajax} instance.
     */
    ajaxifySaving: function (options, $submit) {
      // Re-wire the form to handle submit.
      var settings = {
        url: $submit.closest('form').attr('action'),
        setClick: true,
        event: 'click.quickedit',
        progress: false,
        submit: {
          nocssjs: options.nocssjs,
          other_view_modes: options.other_view_modes
        },

        /**
         * Reimplement the success handler.
         *
         * Ensure {@link Drupal.attachBehaviors} does not get called on the
         * form.
         *
         * @param {Drupal.AjaxCommands~commandDefinition} response
         *   The Drupal AJAX response.
         * @param {number} [status]
         *   The HTTP status code.
         */
        success: function (response, status) {
          for (var i in response) {
            if (response.hasOwnProperty(i) && response[i].command && this.commands[response[i].command]) {
              this.commands[response[i].command](this, response[i], status);
            }
          }
        },
        base: $submit.attr('id'),
        element: $submit[0]
      };

      return Drupal.ajax(settings);
    },

    /**
     * Cleans up the {@link Drupal.Ajax} instance that is used to save the form.
     *
     * @param {Drupal.Ajax} ajax
     *   A {@link Drupal.Ajax} instance that was returned by
     *   {@link Drupal.quickedit.form.ajaxifySaving}.
     */
    unajaxifySaving: function (ajax) {
      $(ajax.element).off('click.quickedit');
    }

  };

})(jQuery, Drupal);
;
/**
 * @file
 * A Backbone Model subclass that enforces validation when calling set().
 */

(function (Drupal, Backbone) {

  'use strict';

  Drupal.quickedit.BaseModel = Backbone.Model.extend(/** @lends Drupal.quickedit.BaseModel# */{

    /**
     * @constructs
     *
     * @augments Backbone.Model
     *
     * @param {object} options
     *   Options for the base model-
     *
     * @return {Drupal.quickedit.BaseModel}
     *   A quickedit base model.
     */
    initialize: function (options) {
      this.__initialized = true;
      return Backbone.Model.prototype.initialize.call(this, options);
    },

    /**
     * Set a value on the model
     *
     * @param {object|string} key
     *   The key to set a value for.
     * @param {*} val
     *   The value to set.
     * @param {object} [options]
     *   Options for the model.
     *
     * @return {*}
     *   The result of `Backbone.Model.prototype.set` with the specified
     *   parameters.
     */
    set: function (key, val, options) {
      if (this.__initialized) {
        // Deal with both the "key", value and {key:value}-style arguments.
        if (typeof key === 'object') {
          key.validate = true;
        }
        else {
          if (!options) {
            options = {};
          }
          options.validate = true;
        }
      }
      return Backbone.Model.prototype.set.call(this, key, val, options);
    }

  });

}(Drupal, Backbone));
;
/**
 * @file
 * A Backbone Model for the state of the in-place editing application.
 *
 * @see Drupal.quickedit.AppView
 */

(function (Backbone, Drupal) {

  'use strict';

  /**
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.quickedit.AppModel = Backbone.Model.extend(/** @lends Drupal.quickedit.AppModel# */{

    /**
     * @type {object}
     *
     * @prop {Drupal.quickedit.FieldModel} highlightedField
     * @prop {Drupal.quickedit.FieldModel} activeField
     * @prop {Drupal.dialog~dialogDefinition} activeModal
     */
    defaults: /** @lends Drupal.quickedit.AppModel# */{

      /**
       * The currently state='highlighted' Drupal.quickedit.FieldModel, if any.
       *
       * @type {Drupal.quickedit.FieldModel}
       *
       * @see Drupal.quickedit.FieldModel.states
       */
      highlightedField: null,

      /**
       * The currently state = 'active' Drupal.quickedit.FieldModel, if any.
       *
       * @type {Drupal.quickedit.FieldModel}
       *
       * @see Drupal.quickedit.FieldModel.states
       */
      activeField: null,

      /**
       * Reference to a {@link Drupal.dialog} instance if a state change
       * requires confirmation.
       *
       * @type {Drupal.dialog~dialogDefinition}
       */
      activeModal: null
    }

  });

}(Backbone, Drupal));
;
/**
 * @file
 * A Backbone Model for the state of an in-place editable entity in the DOM.
 */

(function (_, $, Backbone, Drupal) {

  'use strict';

  Drupal.quickedit.EntityModel = Drupal.quickedit.BaseModel.extend(/** @lends Drupal.quickedit.EntityModel# */{

    /**
     * @type {object}
     */
    defaults: /** @lends Drupal.quickedit.EntityModel# */{

      /**
       * The DOM element that represents this entity.
       *
       * It may seem bizarre to have a DOM element in a Backbone Model, but we
       * need to be able to map entities in the DOM to EntityModels in memory.
       *
       * @type {HTMLElement}
       */
      el: null,

      /**
       * An entity ID, of the form `<entity type>/<entity ID>`
       *
       * @example
       * "node/1"
       *
       * @type {string}
       */
      entityID: null,

      /**
       * An entity instance ID.
       *
       * The first instance of a specific entity (i.e. with a given entity ID)
       * is assigned 0, the second 1, and so on.
       *
       * @type {number}
       */
      entityInstanceID: null,

      /**
       * The unique ID of this entity instance on the page, of the form
       * `<entity type>/<entity ID>[entity instance ID]`
       *
       * @example
       * "node/1[0]"
       *
       * @type {string}
       */
      id: null,

      /**
       * The label of the entity.
       *
       * @type {string}
       */
      label: null,

      /**
       * A FieldCollection for all fields of the entity.
       *
       * @type {Drupal.quickedit.FieldCollection}
       *
       * @see Drupal.quickedit.FieldCollection
       */
      fields: null,

      // The attributes below are stateful. The ones above will never change
      // during the life of a EntityModel instance.

      /**
       * Indicates whether this entity is currently being edited in-place.
       *
       * @type {bool}
       */
      isActive: false,

      /**
       * Whether one or more fields are already been stored in PrivateTempStore.
       *
       * @type {bool}
       */
      inTempStore: false,

      /**
       * Indicates whether a "Save" button is necessary or not.
       *
       * Whether one or more fields have already been stored in PrivateTempStore
       * *or* the field that's currently being edited is in the 'changed' or a
       * later state.
       *
       * @type {bool}
       */
      isDirty: false,

      /**
       * Whether the request to the server has been made to commit this entity.
       *
       * Used to prevent multiple such requests.
       *
       * @type {bool}
       */
      isCommitting: false,

      /**
       * The current processing state of an entity.
       *
       * @type {string}
       */
      state: 'closed',

      /**
       * IDs of fields whose new values have been stored in PrivateTempStore.
       *
       * We must store this on the EntityModel as well (even though it already
       * is on the FieldModel) because when a field is rerendered, its
       * FieldModel is destroyed and this allows us to transition it back to
       * the proper state.
       *
       * @type {Array.<string>}
       */
      fieldsInTempStore: [],

      /**
       * A flag the tells the application that this EntityModel must be reloaded
       * in order to restore the original values to its fields in the client.
       *
       * @type {bool}
       */
      reload: false
    },

    /**
     * @constructs
     *
     * @augments Drupal.quickedit.BaseModel
     */
    initialize: function () {
      this.set('fields', new Drupal.quickedit.FieldCollection());

      // Respond to entity state changes.
      this.listenTo(this, 'change:state', this.stateChange);

      // The state of the entity is largely dependent on the state of its
      // fields.
      this.listenTo(this.get('fields'), 'change:state', this.fieldStateChange);

      // Call Drupal.quickedit.BaseModel's initialize() method.
      Drupal.quickedit.BaseModel.prototype.initialize.call(this);
    },

    /**
     * Updates FieldModels' states when an EntityModel change occurs.
     *
     * @param {Drupal.quickedit.EntityModel} entityModel
     *   The entity model
     * @param {string} state
     *   The state of the associated entity. One of
     *   {@link Drupal.quickedit.EntityModel.states}.
     * @param {object} options
     *   Options for the entity model.
     */
    stateChange: function (entityModel, state, options) {
      var to = state;
      switch (to) {
        case 'closed':
          this.set({
            isActive: false,
            inTempStore: false,
            isDirty: false
          });
          break;

        case 'launching':
          break;

        case 'opening':
          // Set the fields to candidate state.
          entityModel.get('fields').each(function (fieldModel) {
            fieldModel.set('state', 'candidate', options);
          });
          break;

        case 'opened':
          // The entity is now ready for editing!
          this.set('isActive', true);
          break;

        case 'committing':
          // The user indicated they want to save the entity.
          var fields = this.get('fields');
          // For fields that are in an active state, transition them to
          // candidate.
          fields.chain()
            .filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], ['active']).length;
            })
            .each(function (fieldModel) {
              fieldModel.set('state', 'candidate');
            });
          // For fields that are in a changed state, field values must first be
          // stored in PrivateTempStore.
          fields.chain()
            .filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], Drupal.quickedit.app.changedFieldStates).length;
            })
            .each(function (fieldModel) {
              fieldModel.set('state', 'saving');
            });
          break;

        case 'deactivating':
          var changedFields = this.get('fields')
            .filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], ['changed', 'invalid']).length;
            });
          // If the entity contains unconfirmed or unsaved changes, return the
          // entity to an opened state and ask the user if they would like to
          // save the changes or discard the changes.
          //   1. One of the fields is in a changed state. The changed field
          //   might just be a change in the client or it might have been saved
          //   to tempstore.
          //   2. The saved flag is empty and the confirmed flag is empty. If
          //   the entity has been saved to the server, the fields changed in
          //   the client are irrelevant. If the changes are confirmed, then
          //   proceed to set the fields to candidate state.
          if ((changedFields.length || this.get('fieldsInTempStore').length) && (!options.saved && !options.confirmed)) {
            // Cancel deactivation until the user confirms save or discard.
            this.set('state', 'opened', {confirming: true});
            // An action in reaction to state change must be deferred.
            _.defer(function () {
              Drupal.quickedit.app.confirmEntityDeactivation(entityModel);
            });
          }
          else {
            var invalidFields = this.get('fields')
              .filter(function (fieldModel) {
                return _.intersection([fieldModel.get('state')], ['invalid']).length;
              });
            // Indicate if this EntityModel needs to be reloaded in order to
            // restore the original values of its fields.
            entityModel.set('reload', (this.get('fieldsInTempStore').length || invalidFields.length));
            // Set all fields to the 'candidate' state. A changed field may have
            // to go through confirmation first.
            entityModel.get('fields').each(function (fieldModel) {
              // If the field is already in the candidate state, trigger a
              // change event so that the entityModel can move to the next state
              // in deactivation.
              if (_.intersection([fieldModel.get('state')], ['candidate', 'highlighted']).length) {
                fieldModel.trigger('change:state', fieldModel, fieldModel.get('state'), options);
              }
              else {
                fieldModel.set('state', 'candidate', options);
              }
            });
          }
          break;

        case 'closing':
          // Set all fields to the 'inactive' state.
          options.reason = 'stop';
          this.get('fields').each(function (fieldModel) {
            fieldModel.set({
              inTempStore: false,
              state: 'inactive'
            }, options);
          });
          break;
      }
    },

    /**
     * Updates a Field and Entity model's "inTempStore" when appropriate.
     *
     * Helper function.
     *
     * @param {Drupal.quickedit.EntityModel} entityModel
     *   The model of the entity for which a field's state attribute has
     *   changed.
     * @param {Drupal.quickedit.FieldModel} fieldModel
     *   The model of the field whose state attribute has changed.
     *
     * @see Drupal.quickedit.EntityModel#fieldStateChange
     */
    _updateInTempStoreAttributes: function (entityModel, fieldModel) {
      var current = fieldModel.get('state');
      var previous = fieldModel.previous('state');
      var fieldsInTempStore = entityModel.get('fieldsInTempStore');
      // If the fieldModel changed to the 'saved' state: remember that this
      // field was saved to PrivateTempStore.
      if (current === 'saved') {
        // Mark the entity as saved in PrivateTempStore, so that we can pass the
        // proper "reset PrivateTempStore" boolean value when communicating with
        // the server.
        entityModel.set('inTempStore', true);
        // Mark the field as saved in PrivateTempStore, so that visual
        // indicators signifying just that may be rendered.
        fieldModel.set('inTempStore', true);
        // Remember that this field is in PrivateTempStore, restore when
        // rerendered.
        fieldsInTempStore.push(fieldModel.get('fieldID'));
        fieldsInTempStore = _.uniq(fieldsInTempStore);
        entityModel.set('fieldsInTempStore', fieldsInTempStore);
      }
      // If the fieldModel changed to the 'candidate' state from the
      // 'inactive' state, then this is a field for this entity that got
      // rerendered. Restore its previous 'inTempStore' attribute value.
      else if (current === 'candidate' && previous === 'inactive') {
        fieldModel.set('inTempStore', _.intersection([fieldModel.get('fieldID')], fieldsInTempStore).length > 0);
      }
    },

    /**
     * Reacts to state changes in this entity's fields.
     *
     * @param {Drupal.quickedit.FieldModel} fieldModel
     *   The model of the field whose state attribute changed.
     * @param {string} state
     *   The state of the associated field. One of
     *   {@link Drupal.quickedit.FieldModel.states}.
     */
    fieldStateChange: function (fieldModel, state) {
      var entityModel = this;
      var fieldState = state;
      // Switch on the entityModel state.
      // The EntityModel responds to FieldModel state changes as a function of
      // its state. For example, a field switching back to 'candidate' state
      // when its entity is in the 'opened' state has no effect on the entity.
      // But that same switch back to 'candidate' state of a field when the
      // entity is in the 'committing' state might allow the entity to proceed
      // with the commit flow.
      switch (this.get('state')) {
        case 'closed':
        case 'launching':
          // It should be impossible to reach these: fields can't change state
          // while the entity is closed or still launching.
          break;

        case 'opening':
          // We must change the entity to the 'opened' state, but it must first
          // be confirmed that all of its fieldModels have transitioned to the
          // 'candidate' state.
          // We do this here, because this is called every time a fieldModel
          // changes state, hence each time this is called, we get closer to the
          // goal of having all fieldModels in the 'candidate' state.
          // A state change in reaction to another state change must be
          // deferred.
          _.defer(function () {
            entityModel.set('state', 'opened', {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            });
          });
          break;

        case 'opened':
          // Set the isDirty attribute when appropriate so that it is known when
          // to display the "Save" button in the entity toolbar.
          // Note that once a field has been changed, there's no way to discard
          // that change, hence it will have to be saved into PrivateTempStore,
          // or the in-place editing of this field will have to be stopped
          // completely. In other words: once any field enters the 'changed'
          // field, then for the remainder of the in-place editing session, the
          // entity is by definition dirty.
          if (fieldState === 'changed') {
            entityModel.set('isDirty', true);
          }
          else {
            this._updateInTempStoreAttributes(entityModel, fieldModel);
          }
          break;

        case 'committing':
          // If the field save returned a validation error, set the state of the
          // entity back to 'opened'.
          if (fieldState === 'invalid') {
            // A state change in reaction to another state change must be
            // deferred.
            _.defer(function () {
              entityModel.set('state', 'opened', {reason: 'invalid'});
            });
          }
          else {
            this._updateInTempStoreAttributes(entityModel, fieldModel);
          }

          // Attempt to save the entity. If the entity's fields are not yet all
          // in a ready state, the save will not be processed.
          var options = {
            'accept-field-states': Drupal.quickedit.app.readyFieldStates
          };
          if (entityModel.set('isCommitting', true, options)) {
            entityModel.save({
              success: function () {
                entityModel.set({
                  state: 'deactivating',
                  isCommitting: false
                }, {saved: true});
              },
              error: function () {
                // Reset the "isCommitting" mutex.
                entityModel.set('isCommitting', false);
                // Change the state back to "opened", to allow the user to hit
                // the "Save" button again.
                entityModel.set('state', 'opened', {reason: 'networkerror'});
                // Show a modal to inform the user of the network error.
                var message = Drupal.t('Your changes to <q>@entity-title</q> could not be saved, either due to a website problem or a network connection problem.<br>Please try again.', {'@entity-title': entityModel.get('label')});
                Drupal.quickedit.util.networkErrorModal(Drupal.t('Network problem!'), message);
              }
            });
          }
          break;

        case 'deactivating':
          // When setting the entity to 'closing', require that all fieldModels
          // are in either the 'candidate' or 'highlighted' state.
          // A state change in reaction to another state change must be
          // deferred.
          _.defer(function () {
            entityModel.set('state', 'closing', {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            });
          });
          break;

        case 'closing':
          // When setting the entity to 'closed', require that all fieldModels
          // are in the 'inactive' state.
          // A state change in reaction to another state change must be
          // deferred.
          _.defer(function () {
            entityModel.set('state', 'closed', {
              'accept-field-states': ['inactive']
            });
          });
          break;
      }
    },

    /**
     * Fires an AJAX request to the REST save URL for an entity.
     *
     * @param {object} options
     *   An object of options that contains:
     * @param {function} [options.success]
     *   A function to invoke if the entity is successfully saved.
     */
    save: function (options) {
      var entityModel = this;

      // Create a Drupal.ajax instance to save the entity.
      var entitySaverAjax = Drupal.ajax({
        url: Drupal.url('quickedit/entity/' + entityModel.get('entityID')),
        error: function () {
          // Let the Drupal.quickedit.EntityModel Backbone model's error()
          // method handle errors.
          options.error.call(entityModel);
        }
      });
      // Entity saved successfully.
      entitySaverAjax.commands.quickeditEntitySaved = function (ajax, response, status) {
        // All fields have been moved from PrivateTempStore to permanent
        // storage, update the "inTempStore" attribute on FieldModels, on the
        // EntityModel and clear EntityModel's "fieldInTempStore" attribute.
        entityModel.get('fields').each(function (fieldModel) {
          fieldModel.set('inTempStore', false);
        });
        entityModel.set('inTempStore', false);
        entityModel.set('fieldsInTempStore', []);

        // Invoke the optional success callback.
        if (options.success) {
          options.success.call(entityModel);
        }
      };
      // Trigger the AJAX request, which will will return the
      // quickeditEntitySaved AJAX command to which we then react.
      entitySaverAjax.execute();
    },

    /**
     * Validate the entity model.
     *
     * @param {object} attrs
     *   The attributes changes in the save or set call.
     * @param {object} options
     *   An object with the following option:
     * @param {string} [options.reason]
     *   A string that conveys a particular reason to allow for an exceptional
     *   state change.
     * @param {Array} options.accept-field-states
     *   An array of strings that represent field states that the entities must
     *   be in to validate. For example, if `accept-field-states` is
     *   `['candidate', 'highlighted']`, then all the fields of the entity must
     *   be in either of these two states for the save or set call to
     *   validate and proceed.
     *
     * @return {string}
     *   A string to say something about the state of the entity model.
     */
    validate: function (attrs, options) {
      var acceptedFieldStates = options['accept-field-states'] || [];

      // Validate state change.
      var currentState = this.get('state');
      var nextState = attrs.state;
      if (currentState !== nextState) {
        // Ensure it's a valid state.
        if (_.indexOf(this.constructor.states, nextState) === -1) {
          return '"' + nextState + '" is an invalid state';
        }

        // Ensure it's a state change that is allowed.
        // Check if the acceptStateChange function accepts it.
        if (!this._acceptStateChange(currentState, nextState, options)) {
          return 'state change not accepted';
        }
        // If that function accepts it, then ensure all fields are also in an
        // acceptable state.
        else if (!this._fieldsHaveAcceptableStates(acceptedFieldStates)) {
          return 'state change not accepted because fields are not in acceptable state';
        }
      }

      // Validate setting isCommitting = true.
      var currentIsCommitting = this.get('isCommitting');
      var nextIsCommitting = attrs.isCommitting;
      if (currentIsCommitting === false && nextIsCommitting === true) {
        if (!this._fieldsHaveAcceptableStates(acceptedFieldStates)) {
          return 'isCommitting change not accepted because fields are not in acceptable state';
        }
      }
      else if (currentIsCommitting === true && nextIsCommitting === true) {
        return 'isCommitting is a mutex, hence only changes are allowed';
      }
    },

    /**
     * Checks if a state change can be accepted.
     *
     * @param {string} from
     *   From state.
     * @param {string} to
     *   To state.
     * @param {object} context
     *   Context for the check.
     * @param {string} context.reason
     *   The reason for the state change.
     * @param {bool} context.confirming
     *   Whether context is confirming or not.
     *
     * @return {bool}
     *   Whether the state change is accepted or not.
     *
     * @see Drupal.quickedit.AppView#acceptEditorStateChange
     */
    _acceptStateChange: function (from, to, context) {
      var accept = true;

      // In general, enforce the states sequence. Disallow going back from a
      // "later" state to an "earlier" state, except in explicitly allowed
      // cases.
      if (!this.constructor.followsStateSequence(from, to)) {
        accept = false;

        // Allow: closing -> closed.
        // Necessary to stop editing an entity.
        if (from === 'closing' && to === 'closed') {
          accept = true;
        }
        // Allow: committing -> opened.
        // Necessary to be able to correct an invalid field, or to hit the
        // "Save" button again after a server/network error.
        else if (from === 'committing' && to === 'opened' && context.reason && (context.reason === 'invalid' || context.reason === 'networkerror')) {
          accept = true;
        }
        // Allow: deactivating -> opened.
        // Necessary to be able to confirm changes with the user.
        else if (from === 'deactivating' && to === 'opened' && context.confirming) {
          accept = true;
        }
        // Allow: opened -> deactivating.
        // Necessary to be able to stop editing.
        else if (from === 'opened' && to === 'deactivating' && context.confirmed) {
          accept = true;
        }
      }

      return accept;
    },

    /**
     * Checks if fields have acceptable states.
     *
     * @param {Array} acceptedFieldStates
     *   An array of acceptable field states to check for.
     *
     * @return {bool}
     *   Whether the fields have an acceptable state.
     *
     * @see Drupal.quickedit.EntityModel#validate
     */
    _fieldsHaveAcceptableStates: function (acceptedFieldStates) {
      var accept = true;

      // If no acceptable field states are provided, assume all field states are
      // acceptable. We want to let validation pass as a default and only
      // check validity on calls to set that explicitly request it.
      if (acceptedFieldStates.length > 0) {
        var fieldStates = this.get('fields').pluck('state') || [];
        // If not all fields are in one of the accepted field states, then we
        // still can't allow this state change.
        if (_.difference(fieldStates, acceptedFieldStates).length) {
          accept = false;
        }
      }

      return accept;
    },

    /**
     * Destroys the entity model.
     *
     * @param {object} options
     *   Options for the entity model.
     */
    destroy: function (options) {
      Drupal.quickedit.BaseModel.prototype.destroy.call(this, options);

      this.stopListening();

      // Destroy all fields of this entity.
      this.get('fields').reset();
    },

    /**
     * @inheritdoc
     */
    sync: function () {
      // We don't use REST updates to sync.
      return;
    }

  }, /** @lends Drupal.quickedit.EntityModel */{

    /**
     * Sequence of all possible states an entity can be in during quickediting.
     *
     * @type {Array.<string>}
     */
    states: [
      // Initial state, like field's 'inactive' OR the user has just finished
      // in-place editing this entity.
      // - Trigger: none (initial) or EntityModel (finished).
      // - Expected behavior: (when not initial state): tear down
      //   EntityToolbarView, in-place editors and related views.
      'closed',
      // User has activated in-place editing of this entity.
      // - Trigger: user.
      // - Expected behavior: the EntityToolbarView is gets set up, in-place
      //   editors (EditorViews) and related views for this entity's fields are
      //   set up. Upon completion of those, the state is changed to 'opening'.
      'launching',
      // Launching has finished.
      // - Trigger: application.
      // - Guarantees: in-place editors ready for use, all entity and field
      //   views have been set up, all fields are in the 'inactive' state.
      // - Expected behavior: all fields are changed to the 'candidate' state
      //   and once this is completed, the entity state will be changed to
      //   'opened'.
      'opening',
      // Opening has finished.
      // - Trigger: EntityModel.
      // - Guarantees: see 'opening', all fields are in the 'candidate' state.
      // - Expected behavior: the user is able to actually use in-place editing.
      'opened',
      // User has clicked the 'Save' button (and has thus changed at least one
      // field).
      // - Trigger: user.
      // - Guarantees: see 'opened', plus: either a changed field is in
      //   PrivateTempStore, or the user has just modified a field without
      //   activating (switching to) another field.
      // - Expected behavior: 1) if any of the fields are not yet in
      //   PrivateTempStore, save them to PrivateTempStore, 2) if then any of
      //   the fields has the 'invalid' state, then change the entity state back
      //   to 'opened', otherwise: save the entity by committing it from
      //   PrivateTempStore into permanent storage.
      'committing',
      // User has clicked the 'Close' button, or has clicked the 'Save' button
      // and that was successfully completed.
      // - Trigger: user or EntityModel.
      // - Guarantees: when having clicked 'Close' hardly any: fields may be in
      //   a variety of states; when having clicked 'Save': all fields are in
      //   the 'candidate' state.
      // - Expected behavior: transition all fields to the 'candidate' state,
      //   possibly requiring confirmation in the case of having clicked
      //   'Close'.
      'deactivating',
      // Deactivation has been completed.
      // - Trigger: EntityModel.
      // - Guarantees: all fields are in the 'candidate' state.
      // - Expected behavior: change all fields to the 'inactive' state.
      'closing'
    ],

    /**
     * Indicates whether the 'from' state comes before the 'to' state.
     *
     * @param {string} from
     *   One of {@link Drupal.quickedit.EntityModel.states}.
     * @param {string} to
     *   One of {@link Drupal.quickedit.EntityModel.states}.
     *
     * @return {bool}
     *   Whether the 'from' state comes before the 'to' state.
     */
    followsStateSequence: function (from, to) {
      return _.indexOf(this.states, from) < _.indexOf(this.states, to);
    }

  });

  /**
   * @constructor
   *
   * @augments Backbone.Collection
   */
  Drupal.quickedit.EntityCollection = Backbone.Collection.extend(/** @lends Drupal.quickedit.EntityCollection# */{

    /**
     * @type {Drupal.quickedit.EntityModel}
     */
    model: Drupal.quickedit.EntityModel
  });

}(_, jQuery, Backbone, Drupal));
;
/**
 * @file
 * A Backbone Model for the state of an in-place editable field in the DOM.
 */

(function (_, Backbone, Drupal) {

  'use strict';

  Drupal.quickedit.FieldModel = Drupal.quickedit.BaseModel.extend(/** @lends Drupal.quickedit.FieldModel# */{

    /**
     * @type {object}
     */
    defaults: /** @lends Drupal.quickedit.FieldModel# */{

      /**
       * The DOM element that represents this field. It may seem bizarre to have
       * a DOM element in a Backbone Model, but we need to be able to map fields
       * in the DOM to FieldModels in memory.
       */
      el: null,

      /**
       * A field ID, of the form
       * `<entity type>/<id>/<field name>/<language>/<view mode>`
       *
       * @example
       * "node/1/field_tags/und/full"
       */
      fieldID: null,

      /**
       * The unique ID of this field within its entity instance on the page, of
       * the form `<entity type>/<id>/<field name>/<language>/<view
       * mode>[entity instance ID]`.
       *
       * @example
       * "node/1/field_tags/und/full[0]"
       */
      id: null,

      /**
       * A {@link Drupal.quickedit.EntityModel}. Its "fields" attribute, which
       * is a FieldCollection, is automatically updated to include this
       * FieldModel.
       */
      entity: null,

      /**
       * This field's metadata as returned by the
       * QuickEditController::metadata().
       */
      metadata: null,

      /**
       * Callback function for validating changes between states. Receives the
       * previous state, new state, context, and a callback.
       */
      acceptStateChange: null,

      /**
       * A logical field ID, of the form
       * `<entity type>/<id>/<field name>/<language>`, i.e. the fieldID without
       * the view mode, to be able to identify other instances of the same
       * field on the page but rendered in a different view mode.
       *
       * @example
       * "node/1/field_tags/und".
       */
      logicalFieldID: null,

      // The attributes below are stateful. The ones above will never change
      // during the life of a FieldModel instance.

      /**
       * In-place editing state of this field. Defaults to the initial state.
       * Possible values: {@link Drupal.quickedit.FieldModel.states}.
       */
      state: 'inactive',

      /**
       * The field is currently in the 'changed' state or one of the following
       * states in which the field is still changed.
       */
      isChanged: false,

      /**
       * Is tracked by the EntityModel, is mirrored here solely for decorative
       * purposes: so that FieldDecorationView.renderChanged() can react to it.
       */
      inTempStore: false,

      /**
       * The full HTML representation of this field (with the element that has
       * the data-quickedit-field-id as the outer element). Used to propagate
       * changes from this field to other instances of the same field storage.
       */
      html: null,

      /**
       * An object containing the full HTML representations (values) of other
       * view modes (keys) of this field, for other instances of this field
       * displayed in a different view mode.
       */
      htmlForOtherViewModes: null
    },

    /**
     * State of an in-place editable field in the DOM.
     *
     * @constructs
     *
     * @augments Drupal.quickedit.BaseModel
     *
     * @param {object} options
     *   Options for the field model.
     */
    initialize: function (options) {
      // Store the original full HTML representation of this field.
      this.set('html', options.el.outerHTML);

      // Enlist field automatically in the associated entity's field collection.
      this.get('entity').get('fields').add(this);

      // Automatically generate the logical field ID.
      this.set('logicalFieldID', this.get('fieldID').split('/').slice(0, 4).join('/'));

      // Call Drupal.quickedit.BaseModel's initialize() method.
      Drupal.quickedit.BaseModel.prototype.initialize.call(this, options);
    },

    /**
     * Destroys the field model.
     *
     * @param {object} options
     *   Options for the field model.
     */
    destroy: function (options) {
      if (this.get('state') !== 'inactive') {
        throw new Error('FieldModel cannot be destroyed if it is not inactive state.');
      }
      Drupal.quickedit.BaseModel.prototype.destroy.call(this, options);
    },

    /**
     * @inheritdoc
     */
    sync: function () {
      // We don't use REST updates to sync.
      return;
    },

    /**
     * Validate function for the field model.
     *
     * @param {object} attrs
     *   The attributes changes in the save or set call.
     * @param {object} options
     *   An object with the following option:
     * @param {string} [options.reason]
     *   A string that conveys a particular reason to allow for an exceptional
     *   state change.
     * @param {Array} options.accept-field-states
     *   An array of strings that represent field states that the entities must
     *   be in to validate. For example, if `accept-field-states` is
     *   `['candidate', 'highlighted']`, then all the fields of the entity must
     *   be in either of these two states for the save or set call to
     *   validate and proceed.
     *
     * @return {string}
     *   A string to say something about the state of the field model.
     */
    validate: function (attrs, options) {
      var current = this.get('state');
      var next = attrs.state;
      if (current !== next) {
        // Ensure it's a valid state.
        if (_.indexOf(this.constructor.states, next) === -1) {
          return '"' + next + '" is an invalid state';
        }
        // Check if the acceptStateChange callback accepts it.
        if (!this.get('acceptStateChange')(current, next, options, this)) {
          return 'state change not accepted';
        }
      }
    },

    /**
     * Extracts the entity ID from this field's ID.
     *
     * @return {string}
     *   An entity ID: a string of the format `<entity type>/<id>`.
     */
    getEntityID: function () {
      return this.get('fieldID').split('/').slice(0, 2).join('/');
    },

    /**
     * Extracts the view mode ID from this field's ID.
     *
     * @return {string}
     *   A view mode ID.
     */
    getViewMode: function () {
      return this.get('fieldID').split('/').pop();
    },

    /**
     * Find other instances of this field with different view modes.
     *
     * @return {Array}
     *   An array containing view mode IDs.
     */
    findOtherViewModes: function () {
      var currentField = this;
      var otherViewModes = [];
      Drupal.quickedit.collections.fields
        // Find all instances of fields that display the same logical field
        // (same entity, same field, just a different instance and maybe a
        // different view mode).
        .where({logicalFieldID: currentField.get('logicalFieldID')})
        .forEach(function (field) {
          // Ignore the current field.
          if (field === currentField) {
            return;
          }
          // Also ignore other fields with the same view mode.
          else if (field.get('fieldID') === currentField.get('fieldID')) {
            return;
          }
          else {
            otherViewModes.push(field.getViewMode());
          }
        });
      return otherViewModes;
    }

  }, /** @lends Drupal.quickedit.FieldModel */{

    /**
     * Sequence of all possible states a field can be in during quickediting.
     *
     * @type {Array.<string>}
     */
    states: [
      // The field associated with this FieldModel is linked to an EntityModel;
      // the user can choose to start in-place editing that entity (and
      // consequently this field). No in-place editor (EditorView) is associated
      // with this field, because this field is not being in-place edited.
      // This is both the initial (not yet in-place editing) and the end state
      // (finished in-place editing).
      'inactive',
      // The user is in-place editing this entity, and this field is a
      // candidate
      // for in-place editing. In-place editor should not
      // - Trigger: user.
      // - Guarantees: entity is ready, in-place editor (EditorView) is
      //   associated with the field.
      // - Expected behavior: visual indicators
      //   around the field indicate it is available for in-place editing, no
      //   in-place editor presented yet.
      'candidate',
      // User is highlighting this field.
      // - Trigger: user.
      // - Guarantees: see 'candidate'.
      // - Expected behavior: visual indicators to convey highlighting, in-place
      //   editing toolbar shows field's label.
      'highlighted',
      // User has activated the in-place editing of this field; in-place editor
      // is activating.
      // - Trigger: user.
      // - Guarantees: see 'candidate'.
      // - Expected behavior: loading indicator, in-place editor is loading
      //   remote data (e.g. retrieve form from back-end). Upon retrieval of
      //   remote data, the in-place editor transitions the field's state to
      //   'active'.
      'activating',
      // In-place editor has finished loading remote data; ready for use.
      // - Trigger: in-place editor.
      // - Guarantees: see 'candidate'.
      // - Expected behavior: in-place editor for the field is ready for use.
      'active',
      // User has modified values in the in-place editor.
      // - Trigger: user.
      // - Guarantees: see 'candidate', plus in-place editor is ready for use.
      // - Expected behavior: visual indicator of change.
      'changed',
      // User is saving changed field data in in-place editor to
      // PrivateTempStore. The save mechanism of the in-place editor is called.
      // - Trigger: user.
      // - Guarantees: see 'candidate' and 'active'.
      // - Expected behavior: saving indicator, in-place editor is saving field
      //   data into PrivateTempStore. Upon successful saving (without
      //   validation errors), the in-place editor transitions the field's state
      //   to 'saved', but to 'invalid' upon failed saving (with validation
      //   errors).
      'saving',
      // In-place editor has successfully saved the changed field.
      // - Trigger: in-place editor.
      // - Guarantees: see 'candidate' and 'active'.
      // - Expected behavior: transition back to 'candidate' state because the
      //   deed is done. Then: 1) transition to 'inactive' to allow the field
      //   to be rerendered, 2) destroy the FieldModel (which also destroys
      //   attached views like the EditorView), 3) replace the existing field
      //   HTML with the existing HTML and 4) attach behaviors again so that the
      //   field becomes available again for in-place editing.
      'saved',
      // In-place editor has failed to saved the changed field: there were
      // validation errors.
      // - Trigger: in-place editor.
      // - Guarantees: see 'candidate' and 'active'.
      // - Expected behavior: remain in 'invalid' state, let the user make more
      //   changes so that he can save it again, without validation errors.
      'invalid'
    ],

    /**
     * Indicates whether the 'from' state comes before the 'to' state.
     *
     * @param {string} from
     *   One of {@link Drupal.quickedit.FieldModel.states}.
     * @param {string} to
     *   One of {@link Drupal.quickedit.FieldModel.states}.
     *
     * @return {bool}
     *   Whether the 'from' state comes before the 'to' state.
     */
    followsStateSequence: function (from, to) {
      return _.indexOf(this.states, from) < _.indexOf(this.states, to);
    }

  });

  /**
   * @constructor
   *
   * @augments Backbone.Collection
   */
  Drupal.quickedit.FieldCollection = Backbone.Collection.extend(/** @lends Drupal.quickedit.FieldCollection */{

    /**
     * @type {Drupal.quickedit.FieldModel}
     */
    model: Drupal.quickedit.FieldModel
  });

}(_, Backbone, Drupal));
;
/**
 * @file
 * A Backbone Model for the state of an in-place editor.
 *
 * @see Drupal.quickedit.EditorView
 */

(function (Backbone, Drupal) {

  'use strict';

  /**
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.quickedit.EditorModel = Backbone.Model.extend(/** @lends Drupal.quickedit.EditorModel# */{

    /**
     * @type {object}
     *
     * @prop {string} originalValue
     * @prop {string} currentValue
     * @prop {Array} validationErrors
     */
    defaults: /** @lends Drupal.quickedit.EditorModel# */{

      /**
       * Not the full HTML representation of this field, but the "actual"
       * original value of the field, stored by the used in-place editor, and
       * in a representation that can be chosen by the in-place editor.
       *
       * @type {string}
       */
      originalValue: null,

      /**
       * Analogous to originalValue, but the current value.
       *
       * @type {string}
       */
      currentValue: null,

      /**
       * Stores any validation errors to be rendered.
       *
       * @type {Array}
       */
      validationErrors: null
    }

  });

}(Backbone, Drupal));
;
/**
 * @file
 * A Backbone View that controls the overall "in-place editing application".
 *
 * @see Drupal.quickedit.AppModel
 */

(function ($, _, Backbone, Drupal) {

  'use strict';

  // Indicates whether the page should be reloaded after in-place editing has
  // shut down. A page reload is necessary to re-instate the original HTML of
  // the edited fields if in-place editing has been canceled and one or more of
  // the entity's fields were saved to PrivateTempStore: one of them may have
  // been changed to the empty value and hence may have been rerendered as the
  // empty string, which makes it impossible for Quick Edit to know where to
  // restore the original HTML.
  var reload = false;

  Drupal.quickedit.AppView = Backbone.View.extend(/** @lends Drupal.quickedit.AppView# */{

    /**
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   An object with the following keys:
     * @param {Drupal.quickedit.AppModel} options.model
     *   The application state model.
     * @param {Drupal.quickedit.EntityCollection} options.entitiesCollection
     *   All on-page entities.
     * @param {Drupal.quickedit.FieldCollection} options.fieldsCollection
     *   All on-page fields
     */
    initialize: function (options) {
      // AppView's configuration for handling states.
      // @see Drupal.quickedit.FieldModel.states
      this.activeFieldStates = ['activating', 'active'];
      this.singleFieldStates = ['highlighted', 'activating', 'active'];
      this.changedFieldStates = ['changed', 'saving', 'saved', 'invalid'];
      this.readyFieldStates = ['candidate', 'highlighted'];

      // Track app state.
      this.listenTo(options.entitiesCollection, 'change:state', this.appStateChange);
      this.listenTo(options.entitiesCollection, 'change:isActive', this.enforceSingleActiveEntity);

      // Track app state.
      this.listenTo(options.fieldsCollection, 'change:state', this.editorStateChange);
      // Respond to field model HTML representation change events.
      this.listenTo(options.fieldsCollection, 'change:html', this.renderUpdatedField);
      this.listenTo(options.fieldsCollection, 'change:html', this.propagateUpdatedField);
      // Respond to addition.
      this.listenTo(options.fieldsCollection, 'add', this.rerenderedFieldToCandidate);
      // Respond to destruction.
      this.listenTo(options.fieldsCollection, 'destroy', this.teardownEditor);
    },

    /**
     * Handles setup/teardown and state changes when the active entity changes.
     *
     * @param {Drupal.quickedit.EntityModel} entityModel
     *   An instance of the EntityModel class.
     * @param {string} state
     *   The state of the associated field. One of
     *   {@link Drupal.quickedit.EntityModel.states}.
     */
    appStateChange: function (entityModel, state) {
      var app = this;
      var entityToolbarView;
      switch (state) {
        case 'launching':
          reload = false;
          // First, create an entity toolbar view.
          entityToolbarView = new Drupal.quickedit.EntityToolbarView({
            model: entityModel,
            appModel: this.model
          });
          entityModel.toolbarView = entityToolbarView;
          // Second, set up in-place editors.
          // They must be notified of state changes, hence this must happen
          // while the associated fields are still in the 'inactive' state.
          entityModel.get('fields').each(function (fieldModel) {
            app.setupEditor(fieldModel);
          });
          // Third, transition the entity to the 'opening' state, which will
          // transition all fields from 'inactive' to 'candidate'.
          _.defer(function () {
            entityModel.set('state', 'opening');
          });
          break;

        case 'closed':
          entityToolbarView = entityModel.toolbarView;
          // First, tear down the in-place editors.
          entityModel.get('fields').each(function (fieldModel) {
            app.teardownEditor(fieldModel);
          });
          // Second, tear down the entity toolbar view.
          if (entityToolbarView) {
            entityToolbarView.remove();
            delete entityModel.toolbarView;
          }
          // A page reload may be necessary to re-instate the original HTML of
          // the edited fields.
          if (reload) {
            reload = false;
            location.reload();
          }
          break;
      }
    },

    /**
     * Accepts or reject editor (Editor) state changes.
     *
     * This is what ensures that the app is in control of what happens.
     *
     * @param {string} from
     *   The previous state.
     * @param {string} to
     *   The new state.
     * @param {null|object} context
     *   The context that is trying to trigger the state change.
     * @param {Drupal.quickedit.FieldModel} fieldModel
     *   The fieldModel to which this change applies.
     *
     * @return {bool}
     *   Whether the editor change was accepted or rejected.
     */
    acceptEditorStateChange: function (from, to, context, fieldModel) {
      var accept = true;

      // If the app is in view mode, then reject all state changes except for
      // those to 'inactive'.
      if (context && (context.reason === 'stop' || context.reason === 'rerender')) {
        if (from === 'candidate' && to === 'inactive') {
          accept = true;
        }
      }
      // Handling of edit mode state changes is more granular.
      else {
        // In general, enforce the states sequence. Disallow going back from a
        // "later" state to an "earlier" state, except in explicitly allowed
        // cases.
        if (!Drupal.quickedit.FieldModel.followsStateSequence(from, to)) {
          accept = false;
          // Allow: activating/active -> candidate.
          // Necessary to stop editing a field.
          if (_.indexOf(this.activeFieldStates, from) !== -1 && to === 'candidate') {
            accept = true;
          }
          // Allow: changed/invalid -> candidate.
          // Necessary to stop editing a field when it is changed or invalid.
          else if ((from === 'changed' || from === 'invalid') && to === 'candidate') {
            accept = true;
          }
          // Allow: highlighted -> candidate.
          // Necessary to stop highlighting a field.
          else if (from === 'highlighted' && to === 'candidate') {
            accept = true;
          }
          // Allow: saved -> candidate.
          // Necessary when successfully saved a field.
          else if (from === 'saved' && to === 'candidate') {
            accept = true;
          }
          // Allow: invalid -> saving.
          // Necessary to be able to save a corrected, invalid field.
          else if (from === 'invalid' && to === 'saving') {
            accept = true;
          }
          // Allow: invalid -> activating.
          // Necessary to be able to correct a field that turned out to be
          // invalid after the user already had moved on to the next field
          // (which we explicitly allow to have a fluent UX).
          else if (from === 'invalid' && to === 'activating') {
            accept = true;
          }
        }

        // If it's not against the general principle, then here are more
        // disallowed cases to check.
        if (accept) {
          var activeField;
          var activeFieldState;
          // Ensure only one field (editor) at a time is active … but allow a
          // user to hop from one field to the next, even if we still have to
          // start saving the field that is currently active: assume it will be
          // valid, to allow for a fluent UX. (If it turns out to be invalid,
          // this block of code also handles that.)
          if ((this.readyFieldStates.indexOf(from) !== -1 || from === 'invalid') && this.activeFieldStates.indexOf(to) !== -1) {
            activeField = this.model.get('activeField');
            if (activeField && activeField !== fieldModel) {
              activeFieldState = activeField.get('state');
              // Allow the state change. If the state of the active field is:
              // - 'activating' or 'active': change it to 'candidate'
              // - 'changed' or 'invalid': change it to 'saving'
              // - 'saving' or 'saved': don't do anything.
              if (this.activeFieldStates.indexOf(activeFieldState) !== -1) {
                activeField.set('state', 'candidate');
              }
              else if (activeFieldState === 'changed' || activeFieldState === 'invalid') {
                activeField.set('state', 'saving');
              }

              // If the field that's being activated is in fact already in the
              // invalid state (which can only happen because above we allowed
              // the user to move on to another field to allow for a fluent UX;
              // we assumed it would be saved successfully), then we shouldn't
              // allow the field to enter the 'activating' state, instead, we
              // simply change the active editor. All guarantees and
              // assumptions for this field still hold!
              if (from === 'invalid') {
                this.model.set('activeField', fieldModel);
                accept = false;
              }
              // Do not reject: the field is either in the 'candidate' or
              // 'highlighted' state and we allow it to enter the 'activating'
              // state!
            }
          }
          // Reject going from activating/active to candidate because of a
          // mouseleave.
          else if (_.indexOf(this.activeFieldStates, from) !== -1 && to === 'candidate') {
            if (context && context.reason === 'mouseleave') {
              accept = false;
            }
          }
          // When attempting to stop editing a changed/invalid property, ask for
          // confirmation.
          else if ((from === 'changed' || from === 'invalid') && to === 'candidate') {
            if (context && context.reason === 'mouseleave') {
              accept = false;
            }
            else {
              // Check whether the transition has been confirmed?
              if (context && context.confirmed) {
                accept = true;
              }
            }
          }
        }
      }

      return accept;
    },

    /**
     * Sets up the in-place editor for the given field.
     *
     * Must happen before the fieldModel's state is changed to 'candidate'.
     *
     * @param {Drupal.quickedit.FieldModel} fieldModel
     *   The field for which an in-place editor must be set up.
     */
    setupEditor: function (fieldModel) {
      // Get the corresponding entity toolbar.
      var entityModel = fieldModel.get('entity');
      var entityToolbarView = entityModel.toolbarView;
      // Get the field toolbar DOM root from the entity toolbar.
      var fieldToolbarRoot = entityToolbarView.getToolbarRoot();
      // Create in-place editor.
      var editorName = fieldModel.get('metadata').editor;
      var editorModel = new Drupal.quickedit.EditorModel();
      var editorView = new Drupal.quickedit.editors[editorName]({
        el: $(fieldModel.get('el')),
        model: editorModel,
        fieldModel: fieldModel
      });

      // Create in-place editor's toolbar for this field — stored inside the
      // entity toolbar, the entity toolbar will position itself appropriately
      // above (or below) the edited element.
      var toolbarView = new Drupal.quickedit.FieldToolbarView({
        el: fieldToolbarRoot,
        model: fieldModel,
        $editedElement: $(editorView.getEditedElement()),
        editorView: editorView,
        entityModel: entityModel
      });

      // Create decoration for edited element: padding if necessary, sets
      // classes on the element to style it according to the current state.
      var decorationView = new Drupal.quickedit.FieldDecorationView({
        el: $(editorView.getEditedElement()),
        model: fieldModel,
        editorView: editorView
      });

      // Track these three views in FieldModel so that we can tear them down
      // correctly.
      fieldModel.editorView = editorView;
      fieldModel.toolbarView = toolbarView;
      fieldModel.decorationView = decorationView;
    },

    /**
     * Tears down the in-place editor for the given field.
     *
     * Must happen after the fieldModel's state is changed to 'inactive'.
     *
     * @param {Drupal.quickedit.FieldModel} fieldModel
     *   The field for which an in-place editor must be torn down.
     */
    teardownEditor: function (fieldModel) {
      // Early-return if this field was not yet decorated.
      if (typeof fieldModel.editorView === 'undefined') {
        return;
      }

      // Unbind event handlers; remove toolbar element; delete toolbar view.
      fieldModel.toolbarView.remove();
      delete fieldModel.toolbarView;

      // Unbind event handlers; delete decoration view. Don't remove the element
      // because that would remove the field itself.
      fieldModel.decorationView.remove();
      delete fieldModel.decorationView;

      // Unbind event handlers; delete editor view. Don't remove the element
      // because that would remove the field itself.
      fieldModel.editorView.remove();
      delete fieldModel.editorView;
    },

    /**
     * Asks the user to confirm whether he wants to stop editing via a modal.
     *
     * @param {Drupal.quickedit.EntityModel} entityModel
     *   An instance of the EntityModel class.
     *
     * @see Drupal.quickedit.AppView#acceptEditorStateChange
     */
    confirmEntityDeactivation: function (entityModel) {
      var that = this;
      var discardDialog;

      function closeDiscardDialog(action) {
        discardDialog.close(action);
        // The active modal has been removed.
        that.model.set('activeModal', null);

        // If the targetState is saving, the field must be saved, then the
        // entity must be saved.
        if (action === 'save') {
          entityModel.set('state', 'committing', {confirmed: true});
        }
        else {
          entityModel.set('state', 'deactivating', {confirmed: true});
          // Editing has been canceled and the changes will not be saved. Mark
          // the page for reload if the entityModel declares that it requires
          // a reload.
          if (entityModel.get('reload')) {
            reload = true;
            entityModel.set('reload', false);
          }
        }
      }

      // Only instantiate if there isn't a modal instance visible yet.
      if (!this.model.get('activeModal')) {
        var $unsavedChanges = $('<div>' + Drupal.t('You have unsaved changes') + '</div>');
        discardDialog = Drupal.dialog($unsavedChanges.get(0), {
          title: Drupal.t('Discard changes?'),
          dialogClass: 'quickedit-discard-modal',
          resizable: false,
          buttons: [
            {
              text: Drupal.t('Save'),
              click: function () {
                closeDiscardDialog('save');
              },
              primary: true
            },
            {
              text: Drupal.t('Discard changes'),
              click: function () {
                closeDiscardDialog('discard');
              }
            }
          ],
          // Prevent this modal from being closed without the user making a
          // choice as per http://stackoverflow.com/a/5438771.
          closeOnEscape: false,
          create: function () {
            $(this).parent().find('.ui-dialog-titlebar-close').remove();
          },
          beforeClose: false,
          close: function (event) {
            // Automatically destroy the DOM element that was used for the
            // dialog.
            $(event.target).remove();
          }
        });
        this.model.set('activeModal', discardDialog);

        discardDialog.showModal();
      }
    },

    /**
     * Reacts to field state changes; tracks global state.
     *
     * @param {Drupal.quickedit.FieldModel} fieldModel
     *   The `fieldModel` holding the state.
     * @param {string} state
     *   The state of the associated field. One of
     *   {@link Drupal.quickedit.FieldModel.states}.
     */
    editorStateChange: function (fieldModel, state) {
      var from = fieldModel.previous('state');
      var to = state;

      // Keep track of the highlighted field in the global state.
      if (_.indexOf(this.singleFieldStates, to) !== -1 && this.model.get('highlightedField') !== fieldModel) {
        this.model.set('highlightedField', fieldModel);
      }
      else if (this.model.get('highlightedField') === fieldModel && to === 'candidate') {
        this.model.set('highlightedField', null);
      }

      // Keep track of the active field in the global state.
      if (_.indexOf(this.activeFieldStates, to) !== -1 && this.model.get('activeField') !== fieldModel) {
        this.model.set('activeField', fieldModel);
      }
      else if (this.model.get('activeField') === fieldModel && to === 'candidate') {
        // Discarded if it transitions from a changed state to 'candidate'.
        if (from === 'changed' || from === 'invalid') {
          fieldModel.editorView.revert();
        }
        this.model.set('activeField', null);
      }
    },

    /**
     * Render an updated field (a field whose 'html' attribute changed).
     *
     * @param {Drupal.quickedit.FieldModel} fieldModel
     *   The FieldModel whose 'html' attribute changed.
     * @param {string} html
     *   The updated 'html' attribute.
     * @param {object} options
     *   An object with the following keys:
     * @param {bool} options.propagation
     *   Whether this change to the 'html' attribute occurred because of the
     *   propagation of changes to another instance of this field.
     */
    renderUpdatedField: function (fieldModel, html, options) {
      // Get data necessary to rerender property before it is unavailable.
      var $fieldWrapper = $(fieldModel.get('el'));
      var $context = $fieldWrapper.parent();

      var renderField = function () {
        // Destroy the field model; this will cause all attached views to be
        // destroyed too, and removal from all collections in which it exists.
        fieldModel.destroy();

        // Replace the old content with the new content.
        $fieldWrapper.replaceWith(html);

        // Attach behaviors again to the modified piece of HTML; this will
        // create a new field model and call rerenderedFieldToCandidate() with
        // it.
        Drupal.attachBehaviors($context.get(0));
      };

      // When propagating the changes of another instance of this field, this
      // field is not being actively edited and hence no state changes are
      // necessary. So: only update the state of this field when the rerendering
      // of this field happens not because of propagation, but because it is
      // being edited itself.
      if (!options.propagation) {
        // Deferred because renderUpdatedField is reacting to a field model
        // change event, and we want to make sure that event fully propagates
        // before making another change to the same model.
        _.defer(function () {
          // First set the state to 'candidate', to allow all attached views to
          // clean up all their "active state"-related changes.
          fieldModel.set('state', 'candidate');

          // Similarly, the above .set() call's change event must fully
          // propagate before calling it again.
          _.defer(function () {
            // Set the field's state to 'inactive', to enable the updating of
            // its DOM value.
            fieldModel.set('state', 'inactive', {reason: 'rerender'});

            renderField();
          });
        });
      }
      else {
        renderField();
      }
    },

    /**
     * Propagates changes to an updated field to all instances of that field.
     *
     * @param {Drupal.quickedit.FieldModel} updatedField
     *   The FieldModel whose 'html' attribute changed.
     * @param {string} html
     *   The updated 'html' attribute.
     * @param {object} options
     *   An object with the following keys:
     * @param {bool} options.propagation
     *   Whether this change to the 'html' attribute occurred because of the
     *   propagation of changes to another instance of this field.
     *
     * @see Drupal.quickedit.AppView#renderUpdatedField
     */
    propagateUpdatedField: function (updatedField, html, options) {
      // Don't propagate field updates that themselves were caused by
      // propagation.
      if (options.propagation) {
        return;
      }

      var htmlForOtherViewModes = updatedField.get('htmlForOtherViewModes');
      Drupal.quickedit.collections.fields
        // Find all instances of fields that display the same logical field
        // (same entity, same field, just a different instance and maybe a
        // different view mode).
        .where({logicalFieldID: updatedField.get('logicalFieldID')})
        .forEach(function (field) {
          // Ignore the field that was already updated.
          if (field === updatedField) {
            return;
          }
          // If this other instance of the field has the same view mode, we can
          // update it easily.
          else if (field.getViewMode() === updatedField.getViewMode()) {
            field.set('html', updatedField.get('html'));
          }
          // If this other instance of the field has a different view mode, and
          // that is one of the view modes for which a re-rendered version is
          // available (and that should be the case unless this field was only
          // added to the page after editing of the updated field began), then
          // use that view mode's re-rendered version.
          else {
            if (field.getViewMode() in htmlForOtherViewModes) {
              field.set('html', htmlForOtherViewModes[field.getViewMode()], {propagation: true});
            }
          }
        });
    },

    /**
     * If the new in-place editable field is for the entity that's currently
     * being edited, then transition it to the 'candidate' state.
     *
     * This happens when a field was modified, saved and hence rerendered.
     *
     * @param {Drupal.quickedit.FieldModel} fieldModel
     *   A field that was just added to the collection of fields.
     */
    rerenderedFieldToCandidate: function (fieldModel) {
      var activeEntity = Drupal.quickedit.collections.entities.findWhere({isActive: true});

      // Early-return if there is no active entity.
      if (!activeEntity) {
        return;
      }

      // If the field's entity is the active entity, make it a candidate.
      if (fieldModel.get('entity') === activeEntity) {
        this.setupEditor(fieldModel);
        fieldModel.set('state', 'candidate');
      }
    },

    /**
     * EntityModel Collection change handler.
     *
     * Handler is called `change:isActive` and enforces a single active entity.
     *
     * @param {Drupal.quickedit.EntityModel} changedEntityModel
     *   The entityModel instance whose active state has changed.
     */
    enforceSingleActiveEntity: function (changedEntityModel) {
      // When an entity is deactivated, we don't need to enforce anything.
      if (changedEntityModel.get('isActive') === false) {
        return;
      }

      // This entity was activated; deactivate all other entities.
      changedEntityModel.collection.chain()
        .filter(function (entityModel) {
          return entityModel.get('isActive') === true && entityModel !== changedEntityModel;
        })
        .each(function (entityModel) {
          entityModel.set('state', 'deactivating');
        });
    }

  });

}(jQuery, _, Backbone, Drupal));
;
/**
 * @file
 * A Backbone View that decorates the in-place edited element.
 */

(function ($, Backbone, Drupal) {

  'use strict';

  Drupal.quickedit.FieldDecorationView = Backbone.View.extend(/** @lends Drupal.quickedit.FieldDecorationView# */{

    /**
     * @type {null}
     */
    _widthAttributeIsEmpty: null,

    /**
     * @type {object}
     */
    events: {
      'mouseenter.quickedit': 'onMouseEnter',
      'mouseleave.quickedit': 'onMouseLeave',
      'click': 'onClick',
      'tabIn.quickedit': 'onMouseEnter',
      'tabOut.quickedit': 'onMouseLeave'
    },

    /**
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   An object with the following keys:
     * @param {Drupal.quickedit.EditorView} options.editorView
     *   The editor object view.
     */
    initialize: function (options) {
      this.editorView = options.editorView;

      this.listenTo(this.model, 'change:state', this.stateChange);
      this.listenTo(this.model, 'change:isChanged change:inTempStore', this.renderChanged);
    },

    /**
     * @inheritdoc
     */
    remove: function () {
      // The el property is the field, which should not be removed. Remove the
      // pointer to it, then call Backbone.View.prototype.remove().
      this.setElement();
      Backbone.View.prototype.remove.call(this);
    },

    /**
     * Determines the actions to take given a change of state.
     *
     * @param {Drupal.quickedit.FieldModel} model
     *   The `FieldModel` model.
     * @param {string} state
     *   The state of the associated field. One of
     *   {@link Drupal.quickedit.FieldModel.states}.
     */
    stateChange: function (model, state) {
      var from = model.previous('state');
      var to = state;
      switch (to) {
        case 'inactive':
          this.undecorate();
          break;

        case 'candidate':
          this.decorate();
          if (from !== 'inactive') {
            this.stopHighlight();
            if (from !== 'highlighted') {
              this.model.set('isChanged', false);
              this.stopEdit();
            }
          }
          this._unpad();
          break;

        case 'highlighted':
          this.startHighlight();
          break;

        case 'activating':
          // NOTE: this state is not used by every editor! It's only used by
          // those that need to interact with the server.
          this.prepareEdit();
          break;

        case 'active':
          if (from !== 'activating') {
            this.prepareEdit();
          }
          if (this.editorView.getQuickEditUISettings().padding) {
            this._pad();
          }
          break;

        case 'changed':
          this.model.set('isChanged', true);
          break;

        case 'saving':
          break;

        case 'saved':
          break;

        case 'invalid':
          break;
      }
    },

    /**
     * Adds a class to the edited element that indicates whether the field has
     * been changed by the user (i.e. locally) or the field has already been
     * changed and stored before by the user (i.e. remotely, stored in
     * PrivateTempStore).
     */
    renderChanged: function () {
      this.$el.toggleClass('quickedit-changed', this.model.get('isChanged') || this.model.get('inTempStore'));
    },

    /**
     * Starts hover; transitions to 'highlight' state.
     *
     * @param {jQuery.Event} event
     *   The mouse event.
     */
    onMouseEnter: function (event) {
      var that = this;
      that.model.set('state', 'highlighted');
      event.stopPropagation();
    },

    /**
     * Stops hover; transitions to 'candidate' state.
     *
     * @param {jQuery.Event} event
     *   The mouse event.
     */
    onMouseLeave: function (event) {
      var that = this;
      that.model.set('state', 'candidate', {reason: 'mouseleave'});
      event.stopPropagation();
    },

    /**
     * Transition to 'activating' stage.
     *
     * @param {jQuery.Event} event
     *   The click event.
     */
    onClick: function (event) {
      this.model.set('state', 'activating');
      event.preventDefault();
      event.stopPropagation();
    },

    /**
     * Adds classes used to indicate an elements editable state.
     */
    decorate: function () {
      this.$el.addClass('quickedit-candidate quickedit-editable');
    },

    /**
     * Removes classes used to indicate an elements editable state.
     */
    undecorate: function () {
      this.$el.removeClass('quickedit-candidate quickedit-editable quickedit-highlighted quickedit-editing');
    },

    /**
     * Adds that class that indicates that an element is highlighted.
     */
    startHighlight: function () {
      // Animations.
      var that = this;
      // Use a timeout to grab the next available animation frame.
      that.$el.addClass('quickedit-highlighted');
    },

    /**
     * Removes the class that indicates that an element is highlighted.
     */
    stopHighlight: function () {
      this.$el.removeClass('quickedit-highlighted');
    },

    /**
     * Removes the class that indicates that an element as editable.
     */
    prepareEdit: function () {
      this.$el.addClass('quickedit-editing');

      // Allow the field to be styled differently while editing in a pop-up
      // in-place editor.
      if (this.editorView.getQuickEditUISettings().popup) {
        this.$el.addClass('quickedit-editor-is-popup');
      }
    },

    /**
     * Removes the class that indicates that an element is being edited.
     *
     * Reapplies the class that indicates that a candidate editable element is
     * again available to be edited.
     */
    stopEdit: function () {
      this.$el.removeClass('quickedit-highlighted quickedit-editing');

      // Done editing in a pop-up in-place editor; remove the class.
      if (this.editorView.getQuickEditUISettings().popup) {
        this.$el.removeClass('quickedit-editor-is-popup');
      }

      // Make the other editors show up again.
      $('.quickedit-candidate').addClass('quickedit-editable');
    },

    /**
     * Adds padding around the editable element to make it pop visually.
     */
    _pad: function () {
      // Early return if the element has already been padded.
      if (this.$el.data('quickedit-padded')) {
        return;
      }
      var self = this;

      // Add 5px padding for readability. This means we'll freeze the current
      // width and *then* add 5px padding, hence ensuring the padding is added
      // "on the outside".
      // 1) Freeze the width (if it's not already set); don't use animations.
      if (this.$el[0].style.width === '') {
        this._widthAttributeIsEmpty = true;
        this.$el
          .addClass('quickedit-animate-disable-width')
          .css('width', this.$el.width());
      }

      // 2) Add padding; use animations.
      var posProp = this._getPositionProperties(this.$el);
      setTimeout(function () {
        // Re-enable width animations (padding changes affect width too!).
        self.$el.removeClass('quickedit-animate-disable-width');

        // Pad the editable.
        self.$el
          .css({
            'position': 'relative',
            'top': posProp.top - 5 + 'px',
            'left': posProp.left - 5 + 'px',
            'padding-top': posProp['padding-top'] + 5 + 'px',
            'padding-left': posProp['padding-left'] + 5 + 'px',
            'padding-right': posProp['padding-right'] + 5 + 'px',
            'padding-bottom': posProp['padding-bottom'] + 5 + 'px',
            'margin-bottom': posProp['margin-bottom'] - 10 + 'px'
          })
          .data('quickedit-padded', true);
      }, 0);
    },

    /**
     * Removes the padding around the element being edited when editing ceases.
     */
    _unpad: function () {
      // Early return if the element has not been padded.
      if (!this.$el.data('quickedit-padded')) {
        return;
      }
      var self = this;

      // 1) Set the empty width again.
      if (this._widthAttributeIsEmpty) {
        this.$el
          .addClass('quickedit-animate-disable-width')
          .css('width', '');
      }

      // 2) Remove padding; use animations (these will run simultaneously with)
      // the fading out of the toolbar as its gets removed).
      var posProp = this._getPositionProperties(this.$el);
      setTimeout(function () {
        // Re-enable width animations (padding changes affect width too!).
        self.$el.removeClass('quickedit-animate-disable-width');

        // Unpad the editable.
        self.$el
          .css({
            'position': 'relative',
            'top': posProp.top + 5 + 'px',
            'left': posProp.left + 5 + 'px',
            'padding-top': posProp['padding-top'] - 5 + 'px',
            'padding-left': posProp['padding-left'] - 5 + 'px',
            'padding-right': posProp['padding-right'] - 5 + 'px',
            'padding-bottom': posProp['padding-bottom'] - 5 + 'px',
            'margin-bottom': posProp['margin-bottom'] + 10 + 'px'
          });
      }, 0);
      // Remove the marker that indicates that this field has padding. This is
      // done outside the timed out function above so that we don't get numerous
      // queued functions that will remove padding before the data marker has
      // been removed.
      this.$el.removeData('quickedit-padded');
    },

    /**
     * Gets the top and left properties of an element.
     *
     * Convert extraneous values and information into numbers ready for
     * subtraction.
     *
     * @param {jQuery} $e
     *   The element to get position properties from.
     *
     * @return {object}
     *   An object containing css values for the needed properties.
     */
    _getPositionProperties: function ($e) {
      var p;
      var r = {};
      var props = [
        'top', 'left', 'bottom', 'right',
        'padding-top', 'padding-left', 'padding-right', 'padding-bottom',
        'margin-bottom'
      ];

      var propCount = props.length;
      for (var i = 0; i < propCount; i++) {
        p = props[i];
        r[p] = parseInt(this._replaceBlankPosition($e.css(p)), 10);
      }
      return r;
    },

    /**
     * Replaces blank or 'auto' CSS `position: <value>` values with "0px".
     *
     * @param {string} [pos]
     *   The value for a CSS position declaration.
     *
     * @return {string}
     *   A CSS value that is valid for `position`.
     */
    _replaceBlankPosition: function (pos) {
      if (pos === 'auto' || !pos) {
        pos = '0px';
      }
      return pos;
    }

  });

})(jQuery, Backbone, Drupal);
;
/**
 * @file
 * A Backbone view that decorates the in-place editable entity.
 */

(function (Drupal, $, Backbone) {

  'use strict';

  Drupal.quickedit.EntityDecorationView = Backbone.View.extend(/** @lends Drupal.quickedit.EntityDecorationView# */{

    /**
     * Associated with the DOM root node of an editable entity.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    /**
     * @inheritdoc
     */
    render: function () {
      this.$el.toggleClass('quickedit-entity-active', this.model.get('isActive'));
    },

    /**
     * @inheritdoc
     */
    remove: function () {
      this.setElement(null);
      Backbone.View.prototype.remove.call(this);
    }

  });

}(Drupal, jQuery, Backbone));
;
/**
 * @file
 * A Backbone View that provides an entity level toolbar.
 */

(function ($, _, Backbone, Drupal, debounce) {

  'use strict';

  Drupal.quickedit.EntityToolbarView = Backbone.View.extend(/** @lends Drupal.quickedit.EntityToolbarView# */{

    /**
     * @type {jQuery}
     */
    _fieldToolbarRoot: null,

    /**
     * @return {object}
     *   A map of events.
     */
    events: function () {
      var map = {
        'click button.action-save': 'onClickSave',
        'click button.action-cancel': 'onClickCancel',
        'mouseenter': 'onMouseenter'
      };
      return map;
    },

    /**
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   Options to construct the view.
     * @param {Drupal.quickedit.AppModel} options.appModel
     *   A quickedit `AppModel` to use in the view.
     */
    initialize: function (options) {
      var that = this;
      this.appModel = options.appModel;
      this.$entity = $(this.model.get('el'));

      // Rerender whenever the entity state changes.
      this.listenTo(this.model, 'change:isActive change:isDirty change:state', this.render);
      // Also rerender whenever a different field is highlighted or activated.
      this.listenTo(this.appModel, 'change:highlightedField change:activeField', this.render);
      // Rerender when a field of the entity changes state.
      this.listenTo(this.model.get('fields'), 'change:state', this.fieldStateChange);

      // Reposition the entity toolbar as the viewport and the position within
      // the viewport changes.
      $(window).on('resize.quickedit scroll.quickedit', debounce($.proxy(this.windowChangeHandler, this), 150));

      // Adjust the fence placement within which the entity toolbar may be
      // positioned.
      $(document).on('drupalViewportOffsetChange.quickedit', function (event, offsets) {
        if (that.$fence) {
          that.$fence.css(offsets);
        }
      });

      // Set the entity toolbar DOM element as the el for this view.
      var $toolbar = this.buildToolbarEl();
      this.setElement($toolbar);
      this._fieldToolbarRoot = $toolbar.find('.quickedit-toolbar-field').get(0);

      // Initial render.
      this.render();
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.quickedit.EntityToolbarView}
     *   The entity toolbar view.
     */
    render: function () {
      if (this.model.get('isActive')) {
        // If the toolbar container doesn't exist, create it.
        var $body = $('body');
        if ($body.children('#quickedit-entity-toolbar').length === 0) {
          $body.append(this.$el);
        }
        // The fence will define a area on the screen that the entity toolbar
        // will be position within.
        if ($body.children('#quickedit-toolbar-fence').length === 0) {
          this.$fence = $(Drupal.theme('quickeditEntityToolbarFence'))
            .css(Drupal.displace())
            .appendTo($body);
        }
        // Adds the entity title to the toolbar.
        this.label();

        // Show the save and cancel buttons.
        this.show('ops');
        // If render is being called and the toolbar is already visible, just
        // reposition it.
        this.position();
      }

      // The save button text and state varies with the state of the entity
      // model.
      var $button = this.$el.find('.quickedit-button.action-save');
      var isDirty = this.model.get('isDirty');
      // Adjust the save button according to the state of the model.
      switch (this.model.get('state')) {
        // Quick editing is active, but no field is being edited.
        case 'opened':
          // The saving throbber is not managed by AJAX system. The
          // EntityToolbarView manages this visual element.
          $button
            .removeClass('action-saving icon-throbber icon-end')
            .text(Drupal.t('Save'))
            .removeAttr('disabled')
            .attr('aria-hidden', !isDirty);
          break;

        // The changes to the fields of the entity are being committed.
        case 'committing':
          $button
            .addClass('action-saving icon-throbber icon-end')
            .text(Drupal.t('Saving'))
            .attr('disabled', 'disabled');
          break;

        default:
          $button.attr('aria-hidden', true);
          break;
      }

      return this;
    },

    /**
     * @inheritdoc
     */
    remove: function () {
      // Remove additional DOM elements controlled by this View.
      this.$fence.remove();

      // Stop listening to additional events.
      $(window).off('resize.quickedit scroll.quickedit');
      $(document).off('drupalViewportOffsetChange.quickedit');

      Backbone.View.prototype.remove.call(this);
    },

    /**
     * Repositions the entity toolbar on window scroll and resize.
     *
     * @param {jQuery.Event} event
     *   The scroll or resize event.
     */
    windowChangeHandler: function (event) {
      this.position();
    },

    /**
     * Determines the actions to take given a change of state.
     *
     * @param {Drupal.quickedit.FieldModel} model
     *   The `FieldModel` model.
     * @param {string} state
     *   The state of the associated field. One of
     *   {@link Drupal.quickedit.FieldModel.states}.
     */
    fieldStateChange: function (model, state) {
      switch (state) {
        case 'active':
          this.render();
          break;

        case 'invalid':
          this.render();
          break;
      }
    },

    /**
     * Uses the jQuery.ui.position() method to position the entity toolbar.
     *
     * @param {HTMLElement} [element]
     *   The element against which the entity toolbar is positioned.
     */
    position: function (element) {
      clearTimeout(this.timer);

      var that = this;
      // Vary the edge of the positioning according to the direction of language
      // in the document.
      var edge = (document.documentElement.dir === 'rtl') ? 'right' : 'left';
      // A time unit to wait until the entity toolbar is repositioned.
      var delay = 0;
      // Determines what check in the series of checks below should be
      // evaluated.
      var check = 0;
      // When positioned against an active field that has padding, we should
      // ignore that padding when positioning the toolbar, to not unnecessarily
      // move the toolbar horizontally, which feels annoying.
      var horizontalPadding = 0;
      var of;
      var activeField;
      var highlightedField;
      // There are several elements in the page that the entity toolbar might be
      // positioned against. They are considered below in a priority order.
      do {
        switch (check) {
          case 0:
            // Position against a specific element.
            of = element;
            break;

          case 1:
            // Position against a form container.
            activeField = Drupal.quickedit.app.model.get('activeField');
            of = activeField && activeField.editorView && activeField.editorView.$formContainer && activeField.editorView.$formContainer.find('.quickedit-form');
            break;

          case 2:
            // Position against an active field.
            of = activeField && activeField.editorView && activeField.editorView.getEditedElement();
            if (activeField && activeField.editorView && activeField.editorView.getQuickEditUISettings().padding) {
              horizontalPadding = 5;
            }
            break;

          case 3:
            // Position against a highlighted field.
            highlightedField = Drupal.quickedit.app.model.get('highlightedField');
            of = highlightedField && highlightedField.editorView && highlightedField.editorView.getEditedElement();
            delay = 250;
            break;

          default:
            var fieldModels = this.model.get('fields').models;
            var topMostPosition = 1000000;
            var topMostField = null;
            // Position against the topmost field.
            for (var i = 0; i < fieldModels.length; i++) {
              var pos = fieldModels[i].get('el').getBoundingClientRect().top;
              if (pos < topMostPosition) {
                topMostPosition = pos;
                topMostField = fieldModels[i];
              }
            }
            of = topMostField.get('el');
            delay = 50;
            break;
        }
        // Prepare to check the next possible element to position against.
        check++;
      } while (!of);

      /**
       * Refines the positioning algorithm of jquery.ui.position().
       *
       * Invoked as the 'using' callback of jquery.ui.position() in
       * positionToolbar().
       *
       * @param {*} view
       *   The view the positions will be calculated from.
       * @param {object} suggested
       *   A hash of top and left values for the position that should be set. It
       *   can be forwarded to .css() or .animate().
       * @param {object} info
       *   The position and dimensions of both the 'my' element and the 'of'
       *   elements, as well as calculations to their relative position. This
       *   object contains the following properties:
       * @param {object} info.element
       *   A hash that contains information about the HTML element that will be
       *   positioned. Also known as the 'my' element.
       * @param {object} info.target
       *   A hash that contains information about the HTML element that the
       *   'my' element will be positioned against. Also known as the 'of'
       *   element.
       */
      function refinePosition(view, suggested, info) {
        // Determine if the pointer should be on the top or bottom.
        var isBelow = suggested.top > info.target.top;
        info.element.element.toggleClass('quickedit-toolbar-pointer-top', isBelow);
        // Don't position the toolbar past the first or last editable field if
        // the entity is the target.
        if (view.$entity[0] === info.target.element[0]) {
          // Get the first or last field according to whether the toolbar is
          // above or below the entity.
          var $field = view.$entity.find('.quickedit-editable').eq((isBelow) ? -1 : 0);
          if ($field.length > 0) {
            suggested.top = (isBelow) ? ($field.offset().top + $field.outerHeight(true)) : $field.offset().top - info.element.element.outerHeight(true);
          }
        }
        // Don't let the toolbar go outside the fence.
        var fenceTop = view.$fence.offset().top;
        var fenceHeight = view.$fence.height();
        var toolbarHeight = info.element.element.outerHeight(true);
        if (suggested.top < fenceTop) {
          suggested.top = fenceTop;
        }
        else if ((suggested.top + toolbarHeight) > (fenceTop + fenceHeight)) {
          suggested.top = fenceTop + fenceHeight - toolbarHeight;
        }
        // Position the toolbar.
        info.element.element.css({
          left: Math.floor(suggested.left),
          top: Math.floor(suggested.top)
        });
      }

      /**
       * Calls the jquery.ui.position() method on the $el of this view.
       */
      function positionToolbar() {
        that.$el
          .position({
            my: edge + ' bottom',
            // Move the toolbar 1px towards the start edge of the 'of' element,
            // plus any horizontal padding that may have been added to the
            // element that is being added, to prevent unwanted horizontal
            // movement.
            at: edge + '+' + (1 + horizontalPadding) + ' top',
            of: of,
            collision: 'flipfit',
            using: refinePosition.bind(null, that),
            within: that.$fence
          })
          // Resize the toolbar to match the dimensions of the field, up to a
          // maximum width that is equal to 90% of the field's width.
          .css({
            'max-width': (document.documentElement.clientWidth < 450) ? document.documentElement.clientWidth : 450,
            // Set a minimum width of 240px for the entity toolbar, or the width
            // of the client if it is less than 240px, so that the toolbar
            // never folds up into a squashed and jumbled mess.
            'min-width': (document.documentElement.clientWidth < 240) ? document.documentElement.clientWidth : 240,
            'width': '100%'
          });
      }

      // Uses the jQuery.ui.position() method. Use a timeout to move the toolbar
      // only after the user has focused on an editable for 250ms. This prevents
      // the toolbar from jumping around the screen.
      this.timer = setTimeout(function () {
        // Render the position in the next execution cycle, so that animations
        // on the field have time to process. This is not strictly speaking, a
        // guarantee that all animations will be finished, but it's a simple
        // way to get better positioning without too much additional code.
        _.defer(positionToolbar);
      }, delay);
    },

    /**
     * Set the model state to 'saving' when the save button is clicked.
     *
     * @param {jQuery.Event} event
     *   The click event.
     */
    onClickSave: function (event) {
      event.stopPropagation();
      event.preventDefault();
      // Save the model.
      this.model.set('state', 'committing');
    },

    /**
     * Sets the model state to candidate when the cancel button is clicked.
     *
     * @param {jQuery.Event} event
     *   The click event.
     */
    onClickCancel: function (event) {
      event.preventDefault();
      this.model.set('state', 'deactivating');
    },

    /**
     * Clears the timeout that will eventually reposition the entity toolbar.
     *
     * Without this, it may reposition itself, away from the user's cursor!
     *
     * @param {jQuery.Event} event
     *   The mouse event.
     */
    onMouseenter: function (event) {
      clearTimeout(this.timer);
    },

    /**
     * Builds the entity toolbar HTML; attaches to DOM; sets starting position.
     *
     * @return {jQuery}
     *   The toolbar element.
     */
    buildToolbarEl: function () {
      var $toolbar = $(Drupal.theme('quickeditEntityToolbar', {
        id: 'quickedit-entity-toolbar'
      }));

      $toolbar
        .find('.quickedit-toolbar-entity')
        // Append the "ops" toolgroup into the toolbar.
        .prepend(Drupal.theme('quickeditToolgroup', {
          classes: ['ops'],
          buttons: [
            {
              label: Drupal.t('Save'),
              type: 'submit',
              classes: 'action-save quickedit-button icon',
              attributes: {
                'aria-hidden': true
              }
            },
            {
              label: Drupal.t('Close'),
              classes: 'action-cancel quickedit-button icon icon-close icon-only'
            }
          ]
        }));

      // Give the toolbar a sensible starting position so that it doesn't
      // animate on to the screen from a far off corner.
      $toolbar
        .css({
          left: this.$entity.offset().left,
          top: this.$entity.offset().top
        });

      return $toolbar;
    },

    /**
     * Returns the DOM element that fields will attach their toolbars to.
     *
     * @return {jQuery}
     *   The DOM element that fields will attach their toolbars to.
     */
    getToolbarRoot: function () {
      return this._fieldToolbarRoot;
    },

    /**
     * Generates a state-dependent label for the entity toolbar.
     */
    label: function () {
      // The entity label.
      var label = '';
      var entityLabel = this.model.get('label');

      // Label of an active field, if it exists.
      var activeField = Drupal.quickedit.app.model.get('activeField');
      var activeFieldLabel = activeField && activeField.get('metadata').label;
      // Label of a highlighted field, if it exists.
      var highlightedField = Drupal.quickedit.app.model.get('highlightedField');
      var highlightedFieldLabel = highlightedField && highlightedField.get('metadata').label;
      // The label is constructed in a priority order.
      if (activeFieldLabel) {
        label = Drupal.theme('quickeditEntityToolbarLabel', {
          entityLabel: entityLabel,
          fieldLabel: activeFieldLabel
        });
      }
      else if (highlightedFieldLabel) {
        label = Drupal.theme('quickeditEntityToolbarLabel', {
          entityLabel: entityLabel,
          fieldLabel: highlightedFieldLabel
        });
      }
      else {
        // @todo Add XSS regression test coverage in https://www.drupal.org/node/2547437
        label = Drupal.checkPlain(entityLabel);
      }

      this.$el
        .find('.quickedit-toolbar-label')
        .html(label);
    },

    /**
     * Adds classes to a toolgroup.
     *
     * @param {string} toolgroup
     *   A toolgroup name.
     * @param {string} classes
     *   A string of space-delimited class names that will be applied to the
     *   wrapping element of the toolbar group.
     */
    addClass: function (toolgroup, classes) {
      this._find(toolgroup).addClass(classes);
    },

    /**
     * Removes classes from a toolgroup.
     *
     * @param {string} toolgroup
     *   A toolgroup name.
     * @param {string} classes
     *   A string of space-delimited class names that will be removed from the
     *   wrapping element of the toolbar group.
     */
    removeClass: function (toolgroup, classes) {
      this._find(toolgroup).removeClass(classes);
    },

    /**
     * Finds a toolgroup.
     *
     * @param {string} toolgroup
     *   A toolgroup name.
     *
     * @return {jQuery}
     *   The toolgroup DOM element.
     */
    _find: function (toolgroup) {
      return this.$el.find('.quickedit-toolbar .quickedit-toolgroup.' + toolgroup);
    },

    /**
     * Shows a toolgroup.
     *
     * @param {string} toolgroup
     *   A toolgroup name.
     */
    show: function (toolgroup) {
      this.$el.removeClass('quickedit-animate-invisible');
    }

  });

})(jQuery, _, Backbone, Drupal, Drupal.debounce);
;
/**
 * @file
 * A Backbone View that provides a dynamic contextual link.
 */

(function ($, Backbone, Drupal) {

  'use strict';

  Drupal.quickedit.ContextualLinkView = Backbone.View.extend(/** @lends Drupal.quickedit.ContextualLinkView# */{

    /**
     * Define all events to listen to.
     *
     * @return {object}
     *   A map of events.
     */
    events: function () {
      // Prevents delay and simulated mouse events.
      function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      }

      return {
        'click a': function (event) {
          event.preventDefault();
          this.model.set('state', 'launching');
        },
        'touchEnd a': touchEndToClick
      };
    },

    /**
     * Create a new contextual link view.
     *
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   An object with the following keys:
     * @param {Drupal.quickedit.EntityModel} options.model
     *   The associated entity's model.
     * @param {Drupal.quickedit.AppModel} options.appModel
     *   The application state model.
     * @param {object} options.strings
     *   The strings for the "Quick edit" link.
     */
    initialize: function (options) {
      // Insert the text of the quick edit toggle.
      this.$el.find('a').text(options.strings.quickEdit);
      // Initial render.
      this.render();
      // Re-render whenever this entity's isActive attribute changes.
      this.listenTo(this.model, 'change:isActive', this.render);
    },

    /**
     * Render function for the contextual link view.
     *
     * @param {Drupal.quickedit.EntityModel} entityModel
     *   The associated `EntityModel`.
     * @param {bool} isActive
     *   Whether the in-place editor is active or not.
     *
     * @return {Drupal.quickedit.ContextualLinkView}
     *   The `ContextualLinkView` in question.
     */
    render: function (entityModel, isActive) {
      this.$el.find('a').attr('aria-pressed', isActive);

      // Hides the contextual links if an in-place editor is active.
      this.$el.closest('.contextual').toggle(!isActive);

      return this;
    }

  });

})(jQuery, Backbone, Drupal);
;
/**
 * @file
 * A Backbone View that provides an interactive toolbar (1 per in-place editor).
 */

(function ($, _, Backbone, Drupal) {

  'use strict';

  Drupal.quickedit.FieldToolbarView = Backbone.View.extend(/** @lends Drupal.quickedit.FieldToolbarView# */{

    /**
     * The edited element, as indicated by EditorView.getEditedElement.
     *
     * @type {jQuery}
     */
    $editedElement: null,

    /**
     * A reference to the in-place editor.
     *
     * @type {Drupal.quickedit.EditorView}
     */
    editorView: null,

    /**
     * @type {string}
     */
    _id: null,

    /**
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   Options object to construct the field toolbar.
     * @param {jQuery} options.$editedElement
     *   The element being edited.
     * @param {Drupal.quickedit.EditorView} options.editorView
     *   The EditorView the toolbar belongs to.
     */
    initialize: function (options) {
      this.$editedElement = options.$editedElement;
      this.editorView = options.editorView;

      /**
       * @type {jQuery}
       */
      this.$root = this.$el;

      // Generate a DOM-compatible ID for the form container DOM element.
      this._id = 'quickedit-toolbar-for-' + this.model.id.replace(/[\/\[\]]/g, '_');

      this.listenTo(this.model, 'change:state', this.stateChange);
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.quickedit.FieldToolbarView}
     *   The current FieldToolbarView.
     */
    render: function () {
      // Render toolbar and set it as the view's element.
      this.setElement($(Drupal.theme('quickeditFieldToolbar', {
        id: this._id
      })));

      // Attach to the field toolbar $root element in the entity toolbar.
      this.$el.prependTo(this.$root);

      return this;
    },

    /**
     * Determines the actions to take given a change of state.
     *
     * @param {Drupal.quickedit.FieldModel} model
     *   The quickedit FieldModel
     * @param {string} state
     *   The state of the associated field. One of
     *   {@link Drupal.quickedit.FieldModel.states}.
     */
    stateChange: function (model, state) {
      var from = model.previous('state');
      var to = state;
      switch (to) {
        case 'inactive':
          break;

        case 'candidate':
          // Remove the view's existing element if we went to the 'activating'
          // state or later, because it will be recreated. Not doing this would
          // result in memory leaks.
          if (from !== 'inactive' && from !== 'highlighted') {
            this.$el.remove();
            this.setElement();
          }
          break;

        case 'highlighted':
          break;

        case 'activating':
          this.render();

          if (this.editorView.getQuickEditUISettings().fullWidthToolbar) {
            this.$el.addClass('quickedit-toolbar-fullwidth');
          }

          if (this.editorView.getQuickEditUISettings().unifiedToolbar) {
            this.insertWYSIWYGToolGroups();
          }
          break;

        case 'active':
          break;

        case 'changed':
          break;

        case 'saving':
          break;

        case 'saved':
          break;

        case 'invalid':
          break;
      }
    },

    /**
     * Insert WYSIWYG markup into the associated toolbar.
     */
    insertWYSIWYGToolGroups: function () {
      this.$el
        .append(Drupal.theme('quickeditToolgroup', {
          id: this.getFloatedWysiwygToolgroupId(),
          classes: ['wysiwyg-floated', 'quickedit-animate-slow', 'quickedit-animate-invisible', 'quickedit-animate-delay-veryfast'],
          buttons: []
        }))
        .append(Drupal.theme('quickeditToolgroup', {
          id: this.getMainWysiwygToolgroupId(),
          classes: ['wysiwyg-main', 'quickedit-animate-slow', 'quickedit-animate-invisible', 'quickedit-animate-delay-veryfast'],
          buttons: []
        }));

      // Animate the toolgroups into visibility.
      this.show('wysiwyg-floated');
      this.show('wysiwyg-main');
    },

    /**
     * Retrieves the ID for this toolbar's container.
     *
     * Only used to make sane hovering behavior possible.
     *
     * @return {string}
     *   A string that can be used as the ID for this toolbar's container.
     */
    getId: function () {
      return 'quickedit-toolbar-for-' + this._id;
    },

    /**
     * Retrieves the ID for this toolbar's floating WYSIWYG toolgroup.
     *
     * Used to provide an abstraction for any WYSIWYG editor to plug in.
     *
     * @return {string}
     *   A string that can be used as the ID.
     */
    getFloatedWysiwygToolgroupId: function () {
      return 'quickedit-wysiwyg-floated-toolgroup-for-' + this._id;
    },

    /**
     * Retrieves the ID for this toolbar's main WYSIWYG toolgroup.
     *
     * Used to provide an abstraction for any WYSIWYG editor to plug in.
     *
     * @return {string}
     *   A string that can be used as the ID.
     */
    getMainWysiwygToolgroupId: function () {
      return 'quickedit-wysiwyg-main-toolgroup-for-' + this._id;
    },

    /**
     * Finds a toolgroup.
     *
     * @param {string} toolgroup
     *   A toolgroup name.
     *
     * @return {jQuery}
     *   The toolgroup element.
     */
    _find: function (toolgroup) {
      return this.$el.find('.quickedit-toolgroup.' + toolgroup);
    },

    /**
     * Shows a toolgroup.
     *
     * @param {string} toolgroup
     *   A toolgroup name.
     */
    show: function (toolgroup) {
      var $group = this._find(toolgroup);
      // Attach a transitionEnd event handler to the toolbar group so that
      // update events can be triggered after the animations have ended.
      $group.on(Drupal.quickedit.util.constants.transitionEnd, function (event) {
        $group.off(Drupal.quickedit.util.constants.transitionEnd);
      });
      // The call to remove the class and start the animation must be started in
      // the next animation frame or the event handler attached above won't be
      // triggered.
      window.setTimeout(function () {
        $group.removeClass('quickedit-animate-invisible');
      }, 0);
    }

  });

})(jQuery, _, Backbone, Drupal);
;
/**
 * @file
 * An abstract Backbone View that controls an in-place editor.
 */

(function ($, Backbone, Drupal) {

  'use strict';

  Drupal.quickedit.EditorView = Backbone.View.extend(/** @lends Drupal.quickedit.EditorView# */{

    /**
     * A base implementation that outlines the structure for in-place editors.
     *
     * Specific in-place editor implementations should subclass (extend) this
     * View and override whichever method they deem necessary to override.
     *
     * Typically you would want to override this method to set the
     * originalValue attribute in the FieldModel to such a value that your
     * in-place editor can revert to the original value when necessary.
     *
     * @example
     * <caption>If you override this method, you should call this
     * method (the parent class' initialize()) first.</caption>
     * Drupal.quickedit.EditorView.prototype.initialize.call(this, options);
     *
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   An object with the following keys:
     * @param {Drupal.quickedit.EditorModel} options.model
     *   The in-place editor state model.
     * @param {Drupal.quickedit.FieldModel} options.fieldModel
     *   The field model.
     *
     * @see Drupal.quickedit.EditorModel
     * @see Drupal.quickedit.editors.plain_text
     */
    initialize: function (options) {
      this.fieldModel = options.fieldModel;
      this.listenTo(this.fieldModel, 'change:state', this.stateChange);
    },

    /**
     * @inheritdoc
     */
    remove: function () {
      // The el property is the field, which should not be removed. Remove the
      // pointer to it, then call Backbone.View.prototype.remove().
      this.setElement();
      Backbone.View.prototype.remove.call(this);
    },

    /**
     * Returns the edited element.
     *
     * For some single cardinality fields, it may be necessary or useful to
     * not in-place edit (and hence decorate) the DOM element with the
     * data-quickedit-field-id attribute (which is the field's wrapper), but a
     * specific element within the field's wrapper.
     * e.g. using a WYSIWYG editor on a body field should happen on the DOM
     * element containing the text itself, not on the field wrapper.
     *
     * @return {jQuery}
     *   A jQuery-wrapped DOM element.
     *
     * @see Drupal.quickedit.editors.plain_text
     */
    getEditedElement: function () {
      return this.$el;
    },

    /**
     *
     * @return {object}
     * Returns 3 Quick Edit UI settings that depend on the in-place editor:
     *  - Boolean padding: indicates whether padding should be applied to the
     *    edited element, to guarantee legibility of text.
     *  - Boolean unifiedToolbar: provides the in-place editor with the ability
     *    to insert its own toolbar UI into Quick Edit's tightly integrated
     *    toolbar.
     *  - Boolean fullWidthToolbar: indicates whether Quick Edit's tightly
     *    integrated toolbar should consume the full width of the element,
     *    rather than being just long enough to accommodate a label.
     */
    getQuickEditUISettings: function () {
      return {padding: false, unifiedToolbar: false, fullWidthToolbar: false, popup: false};
    },

    /**
     * Determines the actions to take given a change of state.
     *
     * @param {Drupal.quickedit.FieldModel} fieldModel
     *   The quickedit `FieldModel` that holds the state.
     * @param {string} state
     *   The state of the associated field. One of
     *   {@link Drupal.quickedit.FieldModel.states}.
     */
    stateChange: function (fieldModel, state) {
      var from = fieldModel.previous('state');
      var to = state;
      switch (to) {
        case 'inactive':
          // An in-place editor view will not yet exist in this state, hence
          // this will never be reached. Listed for sake of completeness.
          break;

        case 'candidate':
          // Nothing to do for the typical in-place editor: it should not be
          // visible yet. Except when we come from the 'invalid' state, then we
          // clean up.
          if (from === 'invalid') {
            this.removeValidationErrors();
          }
          break;

        case 'highlighted':
          // Nothing to do for the typical in-place editor: it should not be
          // visible yet.
          break;

        case 'activating':
          // The user has indicated he wants to do in-place editing: if
          // something needs to be loaded (CSS/JavaScript/server data/…), then
          // do so at this stage, and once the in-place editor is ready,
          // set the 'active' state. A "loading" indicator will be shown in the
          // UI for as long as the field remains in this state.
          var loadDependencies = function (callback) {
            // Do the loading here.
            callback();
          };
          loadDependencies(function () {
            fieldModel.set('state', 'active');
          });
          break;

        case 'active':
          // The user can now actually use the in-place editor.
          break;

        case 'changed':
          // Nothing to do for the typical in-place editor. The UI will show an
          // indicator that the field has changed.
          break;

        case 'saving':
          // When the user has indicated he wants to save his changes to this
          // field, this state will be entered. If the previous saving attempt
          // resulted in validation errors, the previous state will be
          // 'invalid'. Clean up those validation errors while the user is
          // saving.
          if (from === 'invalid') {
            this.removeValidationErrors();
          }
          this.save();
          break;

        case 'saved':
          // Nothing to do for the typical in-place editor. Immediately after
          // being saved, a field will go to the 'candidate' state, where it
          // should no longer be visible (after all, the field will then again
          // just be a *candidate* to be in-place edited).
          break;

        case 'invalid':
          // The modified field value was attempted to be saved, but there were
          // validation errors.
          this.showValidationErrors();
          break;
      }
    },

    /**
     * Reverts the modified value to the original, before editing started.
     */
    revert: function () {
      // A no-op by default; each editor should implement reverting itself.
      // Note that if the in-place editor does not cause the FieldModel's
      // element to be modified, then nothing needs to happen.
    },

    /**
     * Saves the modified value in the in-place editor for this field.
     */
    save: function () {
      var fieldModel = this.fieldModel;
      var editorModel = this.model;
      var backstageId = 'quickedit_backstage-' + this.fieldModel.id.replace(/[\/\[\]\_\s]/g, '-');

      function fillAndSubmitForm(value) {
        var $form = $('#' + backstageId).find('form');
        // Fill in the value in any <input> that isn't hidden or a submit
        // button.
        $form.find(':input[type!="hidden"][type!="submit"]:not(select)')
          // Don't mess with the node summary.
          .not('[name$="\\[summary\\]"]').val(value);
        // Submit the form.
        $form.find('.quickedit-form-submit').trigger('click.quickedit');
      }

      var formOptions = {
        fieldID: this.fieldModel.get('fieldID'),
        $el: this.$el,
        nocssjs: true,
        other_view_modes: fieldModel.findOtherViewModes(),
        // Reset an existing entry for this entity in the PrivateTempStore (if
        // any) when saving the field. Logically speaking, this should happen in
        // a separate request because this is an entity-level operation, not a
        // field-level operation. But that would require an additional request,
        // that might not even be necessary: it is only when a user saves a
        // first changed field for an entity that this needs to happen:
        // precisely now!
        reset: !this.fieldModel.get('entity').get('inTempStore')
      };

      var self = this;
      Drupal.quickedit.util.form.load(formOptions, function (form, ajax) {
        // Create a backstage area for storing forms that are hidden from view
        // (hence "backstage" — since the editing doesn't happen in the form, it
        // happens "directly" in the content, the form is only used for saving).
        var $backstage = $(Drupal.theme('quickeditBackstage', {id: backstageId})).appendTo('body');
        // Hidden forms are stuffed into the backstage container for this field.
        var $form = $(form).appendTo($backstage);
        // Disable the browser's HTML5 validation; we only care about server-
        // side validation. (Not disabling this will actually cause problems
        // because browsers don't like to set HTML5 validation errors on hidden
        // forms.)
        $form.prop('novalidate', true);
        var $submit = $form.find('.quickedit-form-submit');
        self.formSaveAjax = Drupal.quickedit.util.form.ajaxifySaving(formOptions, $submit);

        function removeHiddenForm() {
          Drupal.quickedit.util.form.unajaxifySaving(self.formSaveAjax);
          delete self.formSaveAjax;
          $backstage.remove();
        }

        // Successfully saved.
        self.formSaveAjax.commands.quickeditFieldFormSaved = function (ajax, response, status) {
          removeHiddenForm();
          // First, transition the state to 'saved'.
          fieldModel.set('state', 'saved');
          // Second, set the 'htmlForOtherViewModes' attribute, so that when
          // this field is rerendered, the change can be propagated to other
          // instances of this field, which may be displayed in different view
          // modes.
          fieldModel.set('htmlForOtherViewModes', response.other_view_modes);
          // Finally, set the 'html' attribute on the field model. This will
          // cause the field to be rerendered.
          fieldModel.set('html', response.data);
        };

        // Unsuccessfully saved; validation errors.
        self.formSaveAjax.commands.quickeditFieldFormValidationErrors = function (ajax, response, status) {
          removeHiddenForm();
          editorModel.set('validationErrors', response.data);
          fieldModel.set('state', 'invalid');
        };

        // The quickeditFieldForm AJAX command is only called upon loading the
        // form for the first time, and when there are validation errors in the
        // form; Form API then marks which form items have errors. This is
        // useful for the form-based in-place editor, but pointless for any
        // other: the form itself won't be visible at all anyway! So, we just
        // ignore it.
        self.formSaveAjax.commands.quickeditFieldForm = function () {};

        fillAndSubmitForm(editorModel.get('currentValue'));
      });
    },

    /**
     * Shows validation error messages.
     *
     * Should be called when the state is changed to 'invalid'.
     */
    showValidationErrors: function () {
      var $errors = $('<div class="quickedit-validation-errors"></div>')
        .append(this.model.get('validationErrors'));
      this.getEditedElement()
        .addClass('quickedit-validation-error')
        .after($errors);
    },

    /**
     * Cleans up validation error messages.
     *
     * Should be called when the state is changed to 'candidate' or 'saving'. In
     * the case of the latter: the user has modified the value in the in-place
     * editor again to attempt to save again. In the case of the latter: the
     * invalid value was discarded.
     */
    removeValidationErrors: function () {
      this.getEditedElement()
        .removeClass('quickedit-validation-error')
        .next('.quickedit-validation-errors')
        .remove();
    }

  });

}(jQuery, Backbone, Drupal));
;
/**
 * @file
 * Provides theme functions for all of Quick Edit's client-side HTML.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Theme function for a "backstage" for the Quick Edit module.
   *
   * @param {object} settings
   *   Settings object used to construct the markup.
   * @param {string} settings.id
   *   The id to apply to the backstage.
   *
   * @return {string}
   *   The corresponding HTML.
   */
  Drupal.theme.quickeditBackstage = function (settings) {
    var html = '';
    html += '<div id="' + settings.id + '" />';
    return html;
  };

  /**
   * Theme function for a toolbar container of the Quick Edit module.
   *
   * @param {object} settings
   *   Settings object used to construct the markup.
   * @param {string} settings.id
   *   the id to apply to the backstage.
   *
   * @return {string}
   *   The corresponding HTML.
   */
  Drupal.theme.quickeditEntityToolbar = function (settings) {
    var html = '';
    html += '<div id="' + settings.id + '" class="quickedit quickedit-toolbar-container clearfix">';
    html += '<i class="quickedit-toolbar-pointer"></i>';
    html += '<div class="quickedit-toolbar-content">';
    html += '<div class="quickedit-toolbar quickedit-toolbar-entity clearfix icon icon-pencil">';
    html += '<div class="quickedit-toolbar-label" />';
    html += '</div>';
    html += '<div class="quickedit-toolbar quickedit-toolbar-field clearfix" />';
    html += '</div><div class="quickedit-toolbar-lining"></div></div>';
    return html;
  };

  /**
   * Theme function for a toolbar container of the Quick Edit module.
   *
   * @param {object} settings
   *   Settings object used to construct the markup.
   * @param {string} settings.entityLabel
   *   The title of the active entity.
   * @param {string} settings.fieldLabel
   *   The label of the highlighted or active field.
   *
   * @return {string}
   *   The corresponding HTML.
   */
  Drupal.theme.quickeditEntityToolbarLabel = function (settings) {
    // @todo Add XSS regression test coverage in https://www.drupal.org/node/2547437
    return '<span class="field">' + Drupal.checkPlain(settings.fieldLabel) + '</span>' + Drupal.checkPlain(settings.entityLabel);
  };

  /**
   * Element defining a containing box for the placement of the entity toolbar.
   *
   * @return {string}
   *   The corresponding HTML.
   */
  Drupal.theme.quickeditEntityToolbarFence = function () {
    return '<div id="quickedit-toolbar-fence" />';
  };

  /**
   * Theme function for a toolbar container of the Quick Edit module.
   *
   * @param {object} settings
   *   Settings object used to construct the markup.
   * @param {string} settings.id
   *   The id to apply to the toolbar container.
   *
   * @return {string}
   *   The corresponding HTML.
   */
  Drupal.theme.quickeditFieldToolbar = function (settings) {
    return '<div id="' + settings.id + '" />';
  };

  /**
   * Theme function for a toolbar toolgroup of the Quick Edit module.
   *
   * @param {object} settings
   *   Settings object used to construct the markup.
   * @param {string} [settings.id]
   *   The id of the toolgroup.
   * @param {string} settings.classes
   *   The class of the toolgroup.
   * @param {Array} settings.buttons
   *   See {@link Drupal.theme.quickeditButtons}.
   *
   * @return {string}
   *   The corresponding HTML.
   */
  Drupal.theme.quickeditToolgroup = function (settings) {
    // Classes.
    var classes = (settings.classes || []);
    classes.unshift('quickedit-toolgroup');
    var html = '';
    html += '<div class="' + classes.join(' ') + '"';
    if (settings.id) {
      html += ' id="' + settings.id + '"';
    }
    html += '>';
    html += Drupal.theme('quickeditButtons', {buttons: settings.buttons});
    html += '</div>';
    return html;
  };

  /**
   * Theme function for buttons of the Quick Edit module.
   *
   * Can be used for the buttons both in the toolbar toolgroups and in the
   * modal.
   *
   * @param {object} settings
   *   Settings object used to construct the markup.
   * @param {Array} settings.buttons
   * - String type: the type of the button (defaults to 'button')
   * - Array classes: the classes of the button.
   * - String label: the label of the button.
   *
   * @return {string}
   *   The corresponding HTML.
   */
  Drupal.theme.quickeditButtons = function (settings) {
    var html = '';
    for (var i = 0; i < settings.buttons.length; i++) {
      var button = settings.buttons[i];
      if (!button.hasOwnProperty('type')) {
        button.type = 'button';
      }
      // Attributes.
      var attributes = [];
      var attrMap = settings.buttons[i].attributes || {};
      for (var attr in attrMap) {
        if (attrMap.hasOwnProperty(attr)) {
          attributes.push(attr + ((attrMap[attr]) ? '="' + attrMap[attr] + '"' : ''));
        }
      }
      html += '<button type="' + button.type + '" class="' + button.classes + '"' + ' ' + attributes.join(' ') + '>';
      html += button.label;
      html += '</button>';
    }
    return html;
  };

  /**
   * Theme function for a form container of the Quick Edit module.
   *
   * @param {object} settings
   *   Settings object used to construct the markup.
   * @param {string} settings.id
   *   The id to apply to the toolbar container.
   * @param {string} settings.loadingMsg
   *   The message to show while loading.
   *
   * @return {string}
   *   The corresponding HTML.
   */
  Drupal.theme.quickeditFormContainer = function (settings) {
    var html = '';
    html += '<div id="' + settings.id + '" class="quickedit-form-container">';
    html += '  <div class="quickedit-form">';
    html += '    <div class="placeholder">';
    html += settings.loadingMsg;
    html += '    </div>';
    html += '  </div>';
    html += '</div>';
    return html;
  };

})(jQuery, Drupal);
;
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);;
(function($){
   "use strict";
	//----------> Site Preloader	
	$(window).load(function() {	
		 $('#preloader').fadeOut('slow', function(){
			  $(this).remove();
		 }); 
	});	
	$(document).ready(function() {
	  /*Go to top*/
	  $(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
		  $('#go-to-top').css({
			bottom: "10px"
		  });
		} else {
		  $('#go-to-top').css({
			bottom: "-100px"
		  });
		}
	  });
	  $('#go-to-top').click(function () {
		$('html, body').animate({
		  scrollTop: '0px'
		}, 800);
		return false;
	  });	
    /* Tooltips */
    if ($().tooltip) {
        $("[data-toggle='tooltip']").tooltip();
    }
    if ($('#section-page-title .inv-region').hasClass('region-banner')) {
        $('#section-page-title').addClass('has-banner');
    }
	if ($().hoverdir) {
		$('.teaser-style3').each( function() {
			$(this).hoverdir({
				hoverElem : '.portfolio-desc'
			});
		});
	}
	$('.simplenews-subscriber-form i').click(function(){
		$('.simplenews-subscriber-form form').submit();
	});
	$('.search-action').click(function () {
	        $(this).parents('form').submit();
    });
	$('.search-toggle').click(function (e) {
		e.stopPropagation();
		$(this).hide();
	    $(this).parents('.search-block-form').addClass("fullwidth");
    });
	$(document).click(function(){
		if ($('.search-block-form').hasClass("fullwidth")) {
			$('.search-block-form').removeClass("fullwidth");
			$('.search-toggle').show();
		}		
	});
	//----------------------------------> Magnific Popup Lightbox
	if ( $.isFunction($.fn.magnificPopup) ) {
		$('.expand_image').each(function(index, element) {
			$(this).click(function() {		
				$(this).parent().siblings("a").click();
				$(this).parent().siblings(".mf-popup").find(".mf-no-gallery a").click();
				$(this).parent().siblings(".mf-popup").find(".carousel .carousel-inner a:first").click();
				$(this).parent().siblings(".embed-container").find("a").click();
				$(this).parents().siblings(".mf-popup").find(".mf-no-gallery a").click();
				$(this).parents().siblings(".mf-popup").find(".carousel .carousel-inner a:first").click();
				return false;
			});
		});
		$(".magnific-popup, a[data-rel^='magnific-popup'],.mf-no-gallery a").magnificPopup({ 
			type: 'image',
			mainClass: 'mfp-with-zoom', // this class is for CSS animation below
			
			zoom: {
				enabled: true,
				duration: 300,
				easing: 'ease-in-out',
				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
					// openerElement is the element on which popup was initialized, in this case its <a> tag
					// you don't need to add "opener" option if this code matches your needs, it's defailt one.
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}

		});
		
		$('.mf-popup').find('.carousel .carousel-inner').once('mfp-processed').each(function() {
			$(this).magnificPopup({
				delegate: 'a',
				type: 'image',
				
				gallery: {
					enabled: true
				},
				removalDelay: 500,
				callbacks: {
					beforeOpen: function() {
						this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
						this.st.mainClass = /*this.st.el.attr('data-effect')*/ "mfp-zoom-in";
					}
				},
				closeOnContentClick: true,
				// allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source
				midClick: true ,	  
				retina: {
					ratio: 1,
					replaceSrc: function(item, ratio) {
					  return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
					} 
				}
			  
			});
		});
		$('.popup-youtube, .popup-vimeo, .popup-gmaps, .vid_con').magnificPopup({
			disableOn:700,
			type:'iframe',
			mainClass:'mfp-fade',
			removalDelay:160,
			preloader:false,
			fixedContentPos:false
		});
		
		$('.ajax-popup-link').magnificPopup({
			type: 'ajax',
			removalDelay: 500,
			mainClass: 'mfp-fade',
			callbacks: {
				beforeOpen: function() {
					this.st.mainClass = "mfp-fade hm_script_loaded";
				},
				parseAjax: function(mfpResponse) {
					
				},
				ajaxContentAdded: function() {
					$(".ajax_content_container").on("click", function(event){
						var target = $(event.target);
						if (target.hasClass("mfp-close")) {
							
						}else{
							event.stopPropagation();
						}
						
					});
					$.getScript('js/functions.js', function( data, textStatus, jqxhr ) { 
						$(".hm_script_loaded .ajax_content_container").css({"opacity" : "1"});
					});
				}
			},
			
		});
		
		$('.popup-with-zoom-anim').magnificPopup({
			type:'inline',
			fixedContentPos:false,
			fixedBgPos:true,
			overflowY:'auto',
			closeBtnInside:true,
			preloader:false,
			midClick:true,
			removalDelay:300,
			mainClass:'my-mfp-zoom-in'
		});
		$('.popup-with-move-anim').magnificPopup({
			type:'inline',
			fixedContentPos:false,
			fixedBgPos:true,
			overflowY:'auto',
			closeBtnInside:true,
			preloader:false,
			midClick:true,
			removalDelay:300,
			mainClass:'my-mfp-slide-bottom'
		});
	}
});
})(window.jQuery);

;
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});;
/**
 * @file
 * Attaches behaviors for Drupal's active link marking.
 */

(function (Drupal, drupalSettings) {

  'use strict';

  /**
   * Append is-active class.
   *
   * The link is only active if its path corresponds to the current path, the
   * language of the linked path is equal to the current language, and if the
   * query parameters of the link equal those of the current request, since the
   * same request with different query parameters may yield a different page
   * (e.g. pagers, exposed View filters).
   *
   * Does not discriminate based on element type, so allows you to set the
   * is-active class on any element: a, li…
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.activeLinks = {
    attach: function (context) {
      // Start by finding all potentially active links.
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? "[data-drupal-link-query='" + queryString + "']" : ':not([data-drupal-link-query])';
      var originalSelectors = ['[data-drupal-link-system-path="' + path.currentPath + '"]'];
      var selectors;

      // If this is the front page, we have to check for the <front> path as
      // well.
      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      // Add language filtering.
      selectors = [].concat(
        // Links without any hreflang attributes (most of them).
        originalSelectors.map(function (selector) { return selector + ':not([hreflang])'; }),
        // Links with hreflang equals to the current language.
        originalSelectors.map(function (selector) { return selector + '[hreflang="' + path.currentLanguage + '"]'; })
      );

      // Add query string selector for pagers, exposed filters.
      selectors = selectors.map(function (current) { return current + querySelector; });

      // Query the DOM.
      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;
      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function (context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;
        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };

})(Drupal, drupalSettings);
;
/*!
 * Shuffle.js by @Vestride
 * Categorize, sort, and filter a responsive grid of items.
 * Dependencies: jQuery 1.9+, Modernizr 2.6.2+
 * @license MIT license
 * @version 3.1.1
 */

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms-csstransforms3d-csstransitions-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
 */
window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.csstransforms=function(){return!!F("transform")},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document);

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'modernizr'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'), window.Modernizr);
  } else {
    window.Shuffle = factory(window.jQuery, window.Modernizr);
  }
})(function($, Modernizr, undefined) {

'use strict';


// Validate Modernizr exists.
// Shuffle requires `csstransitions`, `csstransforms`, `csstransforms3d`,
// and `prefixed` to exist on the Modernizr object.
if (typeof Modernizr !== 'object') {
  throw new Error('Shuffle.js requires Modernizr.\n' +
      'http://vestride.github.io/Shuffle/#dependencies');
}


/**
 * Returns css prefixed properties like `-webkit-transition` or `box-sizing`
 * from `transition` or `boxSizing`, respectively.
 * @param {(string|boolean)} prop Property to be prefixed.
 * @return {string} The prefixed css property.
 */
function dashify( prop ) {
  if (!prop) {
    return '';
  }

  // Replace upper case with dash-lowercase,
  // then fix ms- prefixes because they're not capitalized.
  return prop.replace(/([A-Z])/g, function( str, m1 ) {
    return '-' + m1.toLowerCase();
  }).replace(/^ms-/,'-ms-');
}

// Constant, prefixed variables.
var TRANSITION = Modernizr.prefixed('transition');
var TRANSITION_DELAY = Modernizr.prefixed('transitionDelay');
var TRANSITION_DURATION = Modernizr.prefixed('transitionDuration');

// Note(glen): Stock Android 4.1.x browser will fail here because it wrongly
// says it supports non-prefixed transitions.
// https://github.com/Modernizr/Modernizr/issues/897
var TRANSITIONEND = {
  'WebkitTransition' : 'webkitTransitionEnd',
  'transition' : 'transitionend'
}[ TRANSITION ];

var TRANSFORM = Modernizr.prefixed('transform');
var CSS_TRANSFORM = dashify(TRANSFORM);

// Constants
var CAN_TRANSITION_TRANSFORMS = Modernizr.csstransforms && Modernizr.csstransitions;
var HAS_TRANSFORMS_3D = Modernizr.csstransforms3d;
var HAS_COMPUTED_STYLE = !!window.getComputedStyle;
var SHUFFLE = 'shuffle';

// Configurable. You can change these constants to fit your application.
// The default scale and concealed scale, however, have to be different values.
var ALL_ITEMS = 'all';
var FILTER_ATTRIBUTE_KEY = 'groups';
var DEFAULT_SCALE = 1;
var CONCEALED_SCALE = 0.001;

// Underscore's throttle function.
function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  options = options || {};
  var later = function() {
    previous = options.leading === false ? 0 : $.now();
    timeout = null;
    result = func.apply(context, args);
    context = args = null;
  };
  return function() {
    var now = $.now();
    if (!previous && options.leading === false) {
      previous = now;
    }
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
      context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}

function each(obj, iterator, context) {
  for (var i = 0, length = obj.length; i < length; i++) {
    if (iterator.call(context, obj[i], i, obj) === {}) {
      return;
    }
  }
}

function defer(fn, context, wait) {
  return setTimeout( $.proxy( fn, context ), wait );
}

function arrayMax( array ) {
  return Math.max.apply( Math, array );
}

function arrayMin( array ) {
  return Math.min.apply( Math, array );
}


/**
 * Always returns a numeric value, given a value.
 * @param {*} value Possibly numeric value.
 * @return {number} `value` or zero if `value` isn't numeric.
 * @private
 */
function getNumber(value) {
  return $.isNumeric(value) ? value : 0;
}

var getStyles = window.getComputedStyle || function() {};

/**
 * Represents a coordinate pair.
 * @param {number} [x=0] X.
 * @param {number} [y=0] Y.
 */
var Point = function(x, y) {
  this.x = getNumber( x );
  this.y = getNumber( y );
};


/**
 * Whether two points are equal.
 * @param {Point} a Point A.
 * @param {Point} b Point B.
 * @return {boolean}
 */
Point.equals = function(a, b) {
  return a.x === b.x && a.y === b.y;
};

var COMPUTED_SIZE_INCLUDES_PADDING = (function() {
  if (!HAS_COMPUTED_STYLE) {
    return false;
  }

  var parent = document.body || document.documentElement;
  var e = document.createElement('div');
  e.style.cssText = 'width:10px;padding:2px;' +
    '-webkit-box-sizing:border-box;box-sizing:border-box;';
  parent.appendChild(e);

  var width = getStyles(e, null).width;
  var ret = width === '10px';

  parent.removeChild(e);

  return ret;
}());


// Used for unique instance variables
var id = 0;
var $window = $( window );


/**
 * Categorize, sort, and filter a responsive grid of items.
 *
 * @param {Element} element An element which is the parent container for the grid items.
 * @param {Object} [options=Shuffle.options] Options object.
 * @constructor
 */
var Shuffle = function( element, options ) {
  options = options || {};
  $.extend( this, Shuffle.options, options, Shuffle.settings );

  this.$el = $(element);
  this.element = element;
  this.unique = 'shuffle_' + id++;

  this._fire( Shuffle.EventType.LOADING );
  this._init();

  // Dispatch the done event asynchronously so that people can bind to it after
  // Shuffle has been initialized.
  defer(function() {
    this.initialized = true;
    this._fire( Shuffle.EventType.DONE );
  }, this, 16);
};


/**
 * Events the container element emits with the .shuffle namespace.
 * For example, "done.shuffle".
 * @enum {string}
 */
Shuffle.EventType = {
  LOADING: 'loading',
  DONE: 'done',
  LAYOUT: 'layout',
  REMOVED: 'removed'
};


/** @enum {string} */
Shuffle.ClassName = {
  BASE: SHUFFLE,
  SHUFFLE_ITEM: 'shuffle-item',
  FILTERED: 'filtered',
  CONCEALED: 'concealed'
};


// Overrideable options
Shuffle.options = {
  group: ALL_ITEMS, // Initial filter group.
  speed: 250, // Transition/animation speed (milliseconds).
  easing: 'ease-out', // CSS easing function to use.
  itemSelector: '', // e.g. '.picture-item'.
  sizer: null, // Sizer element. Use an element to determine the size of columns and gutters.
  gutterWidth: 0, // A static number or function that tells the plugin how wide the gutters between columns are (in pixels).
  columnWidth: 0, // A static number or function that returns a number which tells the plugin how wide the columns are (in pixels).
  delimeter: null, // If your group is not json, and is comma delimeted, you could set delimeter to ','.
  buffer: 0, // Useful for percentage based heights when they might not always be exactly the same (in pixels).
  columnThreshold: HAS_COMPUTED_STYLE ? 0.01 : 0.1, // Reading the width of elements isn't precise enough and can cause columns to jump between values.
  initialSort: null, // Shuffle can be initialized with a sort object. It is the same object given to the sort method.
  throttle: throttle, // By default, shuffle will throttle resize events. This can be changed or removed.
  throttleTime: 300, // How often shuffle can be called on resize (in milliseconds).
  sequentialFadeDelay: 150, // Delay between each item that fades in when adding items.
  supported: CAN_TRANSITION_TRANSFORMS // Whether to use transforms or absolute positioning.
};


// Not overrideable
Shuffle.settings = {
  useSizer: false,
  itemCss : { // default CSS for each item
    position: 'absolute',
    top: 0,
    left: 0,
    visibility: 'visible'
  },
  revealAppendedDelay: 300,
  lastSort: {},
  lastFilter: ALL_ITEMS,
  enabled: true,
  destroyed: false,
  initialized: false,
  _animations: [],
  _transitions: [],
  _isMovementCanceled: false,
  styleQueue: []
};


// Expose for testing.
Shuffle.Point = Point;


/**
 * Static methods.
 */

/**
 * If the browser has 3d transforms available, build a string with those,
 * otherwise use 2d transforms.
 * @param {Point} point X and Y positions.
 * @param {number} scale Scale amount.
 * @return {string} A normalized string which can be used with the transform style.
 * @private
 */
Shuffle._getItemTransformString = function(point, scale) {
  if ( HAS_TRANSFORMS_3D ) {
    return 'translate3d(' + point.x + 'px, ' + point.y + 'px, 0) scale3d(' + scale + ', ' + scale + ', 1)';
  } else {
    return 'translate(' + point.x + 'px, ' + point.y + 'px) scale(' + scale + ')';
  }
};


/**
 * Retrieve the computed style for an element, parsed as a float.
 * @param {Element} element Element to get style for.
 * @param {string} style Style property.
 * @param {CSSStyleDeclaration} [styles] Optionally include clean styles to
 *     use instead of asking for them again.
 * @return {number} The parsed computed value or zero if that fails because IE
 *     will return 'auto' when the element doesn't have margins instead of
 *     the computed style.
 * @private
 */
Shuffle._getNumberStyle = function( element, style, styles ) {
  if ( HAS_COMPUTED_STYLE ) {
    styles = styles || getStyles( element, null );
    var value = Shuffle._getFloat( styles[ style ] );

    // Support IE<=11 and W3C spec.
    if ( !COMPUTED_SIZE_INCLUDES_PADDING && style === 'width' ) {
      value += Shuffle._getFloat( styles.paddingLeft ) +
        Shuffle._getFloat( styles.paddingRight ) +
        Shuffle._getFloat( styles.borderLeftWidth ) +
        Shuffle._getFloat( styles.borderRightWidth );
    } else if ( !COMPUTED_SIZE_INCLUDES_PADDING && style === 'height' ) {
      value += Shuffle._getFloat( styles.paddingTop ) +
        Shuffle._getFloat( styles.paddingBottom ) +
        Shuffle._getFloat( styles.borderTopWidth ) +
        Shuffle._getFloat( styles.borderBottomWidth );
    }

    return value;
  } else {
    return Shuffle._getFloat( $( element ).css( style )  );
  }
};


/**
 * Parse a string as an float.
 * @param {string} value String float.
 * @return {number} The string as an float or zero.
 * @private
 */
Shuffle._getFloat = function(value) {
  return getNumber( parseFloat( value ) );
};


/**
 * Returns the outer width of an element, optionally including its margins.
 *
 * There are a few different methods for getting the width of an element, none of
 * which work perfectly for all Shuffle's use cases.
 *
 * 1. getBoundingClientRect() `left` and `right` properties.
 *   - Accounts for transform scaled elements, making it useless for Shuffle
 *   elements which have shrunk.
 * 2. The `offsetWidth` property (or jQuery's CSS).
 *   - This value stays the same regardless of the elements transform property,
 *   however, it does not return subpixel values.
 * 3. getComputedStyle()
 *   - This works great Chrome, Firefox, Safari, but IE<=11 does not include
 *   padding and border when box-sizing: border-box is set, requiring a feature
 *   test and extra work to add the padding back for IE and other browsers which
 *   follow the W3C spec here.
 *
 * @param {Element} element The element.
 * @param {boolean} [includeMargins] Whether to include margins. Default is false.
 * @return {number} The width.
 */
Shuffle._getOuterWidth = function( element, includeMargins ) {
  // Store the styles so that they can be used by others without asking for it again.
  var styles = getStyles( element, null );
  var width = Shuffle._getNumberStyle( element, 'width', styles );

  // Use jQuery here because it uses getComputedStyle internally and is
  // cross-browser. Using the style property of the element will only work
  // if there are inline styles.
  if ( includeMargins ) {
    var marginLeft = Shuffle._getNumberStyle( element, 'marginLeft', styles );
    var marginRight = Shuffle._getNumberStyle( element, 'marginRight', styles );
    width += marginLeft + marginRight;
  }

  return width;
};


/**
 * Returns the outer height of an element, optionally including its margins.
 * @param {Element} element The element.
 * @param {boolean} [includeMargins] Whether to include margins. Default is false.
 * @return {number} The height.
 */
Shuffle._getOuterHeight = function( element, includeMargins ) {
  var styles = getStyles( element, null );
  var height = Shuffle._getNumberStyle( element, 'height', styles );

  if ( includeMargins ) {
    var marginTop = Shuffle._getNumberStyle( element, 'marginTop', styles );
    var marginBottom = Shuffle._getNumberStyle( element, 'marginBottom', styles );
    height += marginTop + marginBottom;
  }

  return height;
};


/**
 * Change a property or execute a function which will not have a transition
 * @param {Element} element DOM element that won't be transitioned
 * @param {Function} callback A function which will be called while transition
 *     is set to 0ms.
 * @param {Object} [context] Optional context for the callback function.
 * @private
 */
Shuffle._skipTransition = function( element, callback, context ) {
  var duration = element.style[ TRANSITION_DURATION ];

  // Set the duration to zero so it happens immediately
  element.style[ TRANSITION_DURATION ] = '0ms'; // ms needed for firefox!

  callback.call( context );

  // Force reflow
  var reflow = element.offsetWidth;
  // Avoid jshint warnings: unused variables and expressions.
  reflow = null;

  // Put the duration back
  element.style[ TRANSITION_DURATION ] = duration;
};


/**
 * Instance methods.
 */

Shuffle.prototype._init = function() {
  this.$items = this._getItems();

  this.sizer = this._getElementOption( this.sizer );

  if ( this.sizer ) {
    this.useSizer = true;
  }

  // Add class and invalidate styles
  this.$el.addClass( Shuffle.ClassName.BASE );

  // Set initial css for each item
  this._initItems();

  // Bind resize events
  // http://stackoverflow.com/questions/1852751/window-resize-event-firing-in-internet-explorer
  $window.on('resize.' + SHUFFLE + '.' + this.unique, this._getResizeFunction());

  // Get container css all in one request. Causes reflow
  var containerCSS = this.$el.css(['position', 'overflow']);
  var containerWidth = Shuffle._getOuterWidth( this.element );

  // Add styles to the container if it doesn't have them.
  this._validateStyles( containerCSS );

  // We already got the container's width above, no need to cause another reflow getting it again...
  // Calculate the number of columns there will be
  this._setColumns( containerWidth );

  // Kick off!
  this.shuffle( this.group, this.initialSort );

  // The shuffle items haven't had transitions set on them yet
  // so the user doesn't see the first layout. Set them now that the first layout is done.
  if ( this.supported ) {
    defer(function() {
      this._setTransitions();
      this.element.style[ TRANSITION ] = 'height ' + this.speed + 'ms ' + this.easing;
    }, this);
  }
};


/**
 * Returns a throttled and proxied function for the resize handler.
 * @return {Function}
 * @private
 */
Shuffle.prototype._getResizeFunction = function() {
  var resizeFunction = $.proxy( this._onResize, this );
  return this.throttle ?
      this.throttle( resizeFunction, this.throttleTime ) :
      resizeFunction;
};


/**
 * Retrieve an element from an option.
 * @param {string|jQuery|Element} option The option to check.
 * @return {?Element} The plain element or null.
 * @private
 */
Shuffle.prototype._getElementOption = function( option ) {
  // If column width is a string, treat is as a selector and search for the
  // sizer element within the outermost container
  if ( typeof option === 'string' ) {
    return this.$el.find( option )[0] || null;

  // Check for an element
  } else if ( option && option.nodeType && option.nodeType === 1 ) {
    return option;

  // Check for jQuery object
  } else if ( option && option.jquery ) {
    return option[0];
  }

  return null;
};


/**
 * Ensures the shuffle container has the css styles it needs applied to it.
 * @param {Object} styles Key value pairs for position and overflow.
 * @private
 */
Shuffle.prototype._validateStyles = function(styles) {
  // Position cannot be static.
  if ( styles.position === 'static' ) {
    this.element.style.position = 'relative';
  }

  // Overflow has to be hidden
  if ( styles.overflow !== 'hidden' ) {
    this.element.style.overflow = 'hidden';
  }
};


/**
 * Filter the elements by a category.
 * @param {string} [category] Category to filter by. If it's given, the last
 *     category will be used to filter the items.
 * @param {ArrayLike} [$collection] Optionally filter a collection. Defaults to
 *     all the items.
 * @return {jQuery} Filtered items.
 * @private
 */
Shuffle.prototype._filter = function( category, $collection ) {
  category = category || this.lastFilter;
  $collection = $collection || this.$items;

  var set = this._getFilteredSets( category, $collection );

  // Individually add/remove concealed/filtered classes
  this._toggleFilterClasses( set.filtered, set.concealed );

  // Save the last filter in case elements are appended.
  this.lastFilter = category;

  // This is saved mainly because providing a filter function (like searching)
  // will overwrite the `lastFilter` property every time its called.
  if ( typeof category === 'string' ) {
    this.group = category;
  }

  return set.filtered;
};


/**
 * Returns an object containing the filtered and concealed elements.
 * @param {string|Function} category Category or function to filter by.
 * @param {ArrayLike.<Element>} $items A collection of items to filter.
 * @return {!{filtered: jQuery, concealed: jQuery}}
 * @private
 */
Shuffle.prototype._getFilteredSets = function( category, $items ) {
  var $filtered = $();
  var $concealed = $();

  // category === 'all', add filtered class to everything
  if ( category === ALL_ITEMS ) {
    $filtered = $items;

  // Loop through each item and use provided function to determine
  // whether to hide it or not.
  } else {
    each($items, function( el ) {
      var $item = $(el);
      if ( this._doesPassFilter( category, $item ) ) {
        $filtered = $filtered.add( $item );
      } else {
        $concealed = $concealed.add( $item );
      }
    }, this);
  }

  return {
    filtered: $filtered,
    concealed: $concealed
  };
};


/**
 * Test an item to see if it passes a category.
 * @param {string|Function} category Category or function to filter by.
 * @param {jQuery} $item A single item, wrapped with jQuery.
 * @return {boolean} Whether it passes the category/filter.
 * @private
 */
Shuffle.prototype._doesPassFilter = function( category, $item ) {
  if ( $.isFunction( category ) ) {
    return category.call( $item[0], $item, this );

  // Check each element's data-groups attribute against the given category.
  } else {
    var groups = $item.data( FILTER_ATTRIBUTE_KEY );
    var keys = this.delimeter && !$.isArray( groups ) ?
        groups.split( this.delimeter ) :
        groups;
    return $.inArray(category, keys) > -1;
  }
};


/**
 * Toggles the filtered and concealed class names.
 * @param {jQuery} $filtered Filtered set.
 * @param {jQuery} $concealed Concealed set.
 * @private
 */
Shuffle.prototype._toggleFilterClasses = function( $filtered, $concealed ) {
  $filtered
    .removeClass( Shuffle.ClassName.CONCEALED )
    .addClass( Shuffle.ClassName.FILTERED );
  $concealed
    .removeClass( Shuffle.ClassName.FILTERED )
    .addClass( Shuffle.ClassName.CONCEALED );
};


/**
 * Set the initial css for each item
 * @param {jQuery} [$items] Optionally specifiy at set to initialize
 */
Shuffle.prototype._initItems = function( $items ) {
  $items = $items || this.$items;
  $items.addClass([
    Shuffle.ClassName.SHUFFLE_ITEM,
    Shuffle.ClassName.FILTERED
  ].join(' '));
  $items.css( this.itemCss ).data('point', new Point()).data('scale', DEFAULT_SCALE);
};


/**
 * Updates the filtered item count.
 * @private
 */
Shuffle.prototype._updateItemCount = function() {
  this.visibleItems = this._getFilteredItems().length;
};


/**
 * Sets css transform transition on a an element.
 * @param {Element} element Element to set transition on.
 * @private
 */
Shuffle.prototype._setTransition = function( element ) {
  element.style[ TRANSITION ] = CSS_TRANSFORM + ' ' + this.speed + 'ms ' +
    this.easing + ', opacity ' + this.speed + 'ms ' + this.easing;
};


/**
 * Sets css transform transition on a group of elements.
 * @param {ArrayLike.<Element>} $items Elements to set transitions on.
 * @private
 */
Shuffle.prototype._setTransitions = function( $items ) {
  $items = $items || this.$items;
  each($items, function( el ) {
    this._setTransition( el );
  }, this);
};


/**
 * Sets a transition delay on a collection of elements, making each delay
 * greater than the last.
 * @param {ArrayLike.<Element>} $collection Array to iterate over.
 */
Shuffle.prototype._setSequentialDelay = function( $collection ) {
  if ( !this.supported ) {
    return;
  }

  // $collection can be an array of dom elements or jquery object
  each($collection, function( el, i ) {
    // This works because the transition-property: transform, opacity;
    el.style[ TRANSITION_DELAY ] = '0ms,' + ((i + 1) * this.sequentialFadeDelay) + 'ms';
  }, this);
};


Shuffle.prototype._getItems = function() {
  return this.$el.children( this.itemSelector );
};


Shuffle.prototype._getFilteredItems = function() {
  return this.$items.filter('.' + Shuffle.ClassName.FILTERED);
};


Shuffle.prototype._getConcealedItems = function() {
  return this.$items.filter('.' + Shuffle.ClassName.CONCEALED);
};


/**
 * Returns the column size, based on column width and sizer options.
 * @param {number} containerWidth Size of the parent container.
 * @param {number} gutterSize Size of the gutters.
 * @return {number}
 * @private
 */
Shuffle.prototype._getColumnSize = function( containerWidth, gutterSize ) {
  var size;

  // If the columnWidth property is a function, then the grid is fluid
  if ( $.isFunction( this.columnWidth ) ) {
    size = this.columnWidth(containerWidth);

  // columnWidth option isn't a function, are they using a sizing element?
  } else if ( this.useSizer ) {
    size = Shuffle._getOuterWidth(this.sizer);

  // if not, how about the explicitly set option?
  } else if ( this.columnWidth ) {
    size = this.columnWidth;

  // or use the size of the first item
  } else if ( this.$items.length > 0 ) {
    size = Shuffle._getOuterWidth(this.$items[0], true);

  // if there's no items, use size of container
  } else {
    size = containerWidth;
  }

  // Don't let them set a column width of zero.
  if ( size === 0 ) {
    size = containerWidth;
  }

  return size + gutterSize;
};


/**
 * Returns the gutter size, based on gutter width and sizer options.
 * @param {number} containerWidth Size of the parent container.
 * @return {number}
 * @private
 */
Shuffle.prototype._getGutterSize = function( containerWidth ) {
  var size;
  if ( $.isFunction( this.gutterWidth ) ) {
    size = this.gutterWidth(containerWidth);
  } else if ( this.useSizer ) {
    size = Shuffle._getNumberStyle(this.sizer, 'marginLeft');
  } else {
    size = this.gutterWidth;
  }

  return size;
};


/**
 * Calculate the number of columns to be used. Gets css if using sizer element.
 * @param {number} [theContainerWidth] Optionally specify a container width if it's already available.
 */
Shuffle.prototype._setColumns = function( theContainerWidth ) {
  var containerWidth = theContainerWidth || Shuffle._getOuterWidth( this.element );
  var gutter = this._getGutterSize( containerWidth );
  var columnWidth = this._getColumnSize( containerWidth, gutter );
  var calculatedColumns = (containerWidth + gutter) / columnWidth;

  // Widths given from getStyles are not precise enough...
  if ( Math.abs(Math.round(calculatedColumns) - calculatedColumns) < this.columnThreshold ) {
    // e.g. calculatedColumns = 11.998876
    calculatedColumns = Math.round( calculatedColumns );
  }

  this.cols = Math.max( Math.floor(calculatedColumns), 1 );
  this.containerWidth = containerWidth;
  this.colWidth = columnWidth;
};

/**
 * Adjust the height of the grid
 */
Shuffle.prototype._setContainerSize = function() {
  this.$el.css( 'height', this._getContainerSize() );
};


/**
 * Based on the column heights, it returns the biggest one.
 * @return {number}
 * @private
 */
Shuffle.prototype._getContainerSize = function() {
  return arrayMax( this.positions );
};


/**
 * Fire events with .shuffle namespace
 */
Shuffle.prototype._fire = function( name, args ) {
  this.$el.trigger( name + '.' + SHUFFLE, args && args.length ? args : [ this ] );
};


/**
 * Zeros out the y columns array, which is used to determine item placement.
 * @private
 */
Shuffle.prototype._resetCols = function() {
  var i = this.cols;
  this.positions = [];
  while (i--) {
    this.positions.push( 0 );
  }
};


/**
 * Loops through each item that should be shown and calculates the x, y position.
 * @param {Array.<Element>} items Array of items that will be shown/layed out in order in their array.
 *     Because jQuery collection are always ordered in DOM order, we can't pass a jq collection.
 * @param {boolean} [isOnlyPosition=false] If true this will position the items with zero opacity.
 */
Shuffle.prototype._layout = function( items, isOnlyPosition ) {
  each(items, function( item ) {
    this._layoutItem( item, !!isOnlyPosition );
  }, this);

  // `_layout` always happens after `_shrink`, so it's safe to process the style
  // queue here with styles from the shrink method.
  this._processStyleQueue();

  // Adjust the height of the container.
  this._setContainerSize();
};


/**
 * Calculates the position of the item and pushes it onto the style queue.
 * @param {Element} item Element which is being positioned.
 * @param {boolean} isOnlyPosition Whether to position the item, but with zero
 *     opacity so that it can fade in later.
 * @private
 */
Shuffle.prototype._layoutItem = function( item, isOnlyPosition ) {
  var $item = $(item);
  var itemData = $item.data();
  var currPos = itemData.point;
  var currScale = itemData.scale;
  var itemSize = {
    width: Shuffle._getOuterWidth( item, true ),
    height: Shuffle._getOuterHeight( item, true )
  };
  var pos = this._getItemPosition( itemSize );

  // If the item will not change its position, do not add it to the render
  // queue. Transitions don't fire when setting a property to the same value.
  if ( Point.equals(currPos, pos) && currScale === DEFAULT_SCALE ) {
    return;
  }

  // Save data for shrink
  itemData.point = pos;
  itemData.scale = DEFAULT_SCALE;

  this.styleQueue.push({
    $item: $item,
    point: pos,
    scale: DEFAULT_SCALE,
    opacity: isOnlyPosition ? 0 : 1,
    // Set styles immediately if there is no transition speed.
    skipTransition: isOnlyPosition || this.speed === 0,
    callfront: function() {
      if ( !isOnlyPosition ) {
        $item.css( 'visibility', 'visible' );
      }
    },
    callback: function() {
      if ( isOnlyPosition ) {
        $item.css( 'visibility', 'hidden' );
      }
    }
  });
};


/**
 * Determine the location of the next item, based on its size.
 * @param {{width: number, height: number}} itemSize Object with width and height.
 * @return {Point}
 * @private
 */
Shuffle.prototype._getItemPosition = function( itemSize ) {
  var columnSpan = this._getColumnSpan( itemSize.width, this.colWidth, this.cols );

  var setY = this._getColumnSet( columnSpan, this.cols );

  // Finds the index of the smallest number in the set.
  var shortColumnIndex = this._getShortColumn( setY, this.buffer );

  // Position the item
  var point = new Point(
    Math.round( this.colWidth * shortColumnIndex ),
    Math.round( setY[shortColumnIndex] ));

  // Update the columns array with the new values for each column.
  // e.g. before the update the columns could be [250, 0, 0, 0] for an item
  // which spans 2 columns. After it would be [250, itemHeight, itemHeight, 0].
  var setHeight = setY[shortColumnIndex] + itemSize.height;
  var setSpan = this.cols + 1 - setY.length;
  for ( var i = 0; i < setSpan; i++ ) {
    this.positions[ shortColumnIndex + i ] = setHeight;
  }

  return point;
};


/**
 * Determine the number of columns an items spans.
 * @param {number} itemWidth Width of the item.
 * @param {number} columnWidth Width of the column (includes gutter).
 * @param {number} columns Total number of columns
 * @return {number}
 * @private
 */
Shuffle.prototype._getColumnSpan = function( itemWidth, columnWidth, columns ) {
  var columnSpan = itemWidth / columnWidth;

  // If the difference between the rounded column span number and the
  // calculated column span number is really small, round the number to
  // make it fit.
  if ( Math.abs(Math.round( columnSpan ) - columnSpan ) < this.columnThreshold ) {
    // e.g. columnSpan = 4.0089945390298745
    columnSpan = Math.round( columnSpan );
  }

  // Ensure the column span is not more than the amount of columns in the whole layout.
  return Math.min( Math.ceil( columnSpan ), columns );
};


/**
 * Retrieves the column set to use for placement.
 * @param {number} columnSpan The number of columns this current item spans.
 * @param {number} columns The total columns in the grid.
 * @return {Array.<number>} An array of numbers represeting the column set.
 * @private
 */
Shuffle.prototype._getColumnSet = function( columnSpan, columns ) {
  // The item spans only one column.
  if ( columnSpan === 1 ) {
    return this.positions;

  // The item spans more than one column, figure out how many different
  // places it could fit horizontally.
  // The group count is the number of places within the positions this block
  // could fit, ignoring the current positions of items.
  // Imagine a 2 column brick as the second item in a 4 column grid with
  // 10px height each. Find the places it would fit:
  // [10, 0, 0, 0]
  //  |   |  |
  //  *   *  *
  //
  // Then take the places which fit and get the bigger of the two:
  // max([10, 0]), max([0, 0]), max([0, 0]) = [10, 0, 0]
  //
  // Next, find the first smallest number (the short column).
  // [10, 0, 0]
  //      |
  //      *
  //
  // And that's where it should be placed!
  } else {
    var groupCount = columns + 1 - columnSpan;
    var groupY = [];

    // For how many possible positions for this item there are.
    for ( var i = 0; i < groupCount; i++ ) {
      // Find the bigger value for each place it could fit.
      groupY[i] = arrayMax( this.positions.slice( i, i + columnSpan ) );
    }

    return groupY;
  }
};


/**
 * Find index of short column, the first from the left where this item will go.
 *
 * @param {Array.<number>} positions The array to search for the smallest number.
 * @param {number} buffer Optional buffer which is very useful when the height
 *     is a percentage of the width.
 * @return {number} Index of the short column.
 * @private
 */
Shuffle.prototype._getShortColumn = function( positions, buffer ) {
  var minPosition = arrayMin( positions );
  for (var i = 0, len = positions.length; i < len; i++) {
    if ( positions[i] >= minPosition - buffer && positions[i] <= minPosition + buffer ) {
      return i;
    }
  }
  return 0;
};


/**
 * Hides the elements that don't match our filter.
 * @param {jQuery} $collection jQuery collection to shrink.
 * @private
 */
Shuffle.prototype._shrink = function( $collection ) {
  var $concealed = $collection || this._getConcealedItems();

  each($concealed, function( item ) {
    var $item = $(item);
    var itemData = $item.data();

    // Continuing would add a transitionend event listener to the element, but
    // that listener would not execute because the transform and opacity would
    // stay the same.
    if ( itemData.scale === CONCEALED_SCALE ) {
      return;
    }

    itemData.scale = CONCEALED_SCALE;

    this.styleQueue.push({
      $item: $item,
      point: itemData.point,
      scale : CONCEALED_SCALE,
      opacity: 0,
      callback: function() {
        $item.css( 'visibility', 'hidden' );
      }
    });
  }, this);
};


/**
 * Resize handler.
 * @private
 */
Shuffle.prototype._onResize = function() {
  // If shuffle is disabled, destroyed, don't do anything
  if ( !this.enabled || this.destroyed ) {
    return;
  }

  // Will need to check height in the future if it's layed out horizontaly
  var containerWidth = Shuffle._getOuterWidth( this.element );

  // containerWidth hasn't changed, don't do anything
  if ( containerWidth === this.containerWidth ) {
    return;
  }

  this.update();
};


/**
 * Returns styles for either jQuery animate or transition.
 * @param {Object} opts Transition options.
 * @return {!Object} Transforms for transitions, left/top for animate.
 * @private
 */
Shuffle.prototype._getStylesForTransition = function( opts ) {
  var styles = {
    opacity: opts.opacity
  };

  if ( this.supported ) {
    styles[ TRANSFORM ] = Shuffle._getItemTransformString( opts.point, opts.scale );
  } else {
    styles.left = opts.point.x;
    styles.top = opts.point.y;
  }

  return styles;
};


/**
 * Transitions an item in the grid
 *
 * @param {Object} opts options.
 * @param {jQuery} opts.$item jQuery object representing the current item.
 * @param {Point} opts.point A point object with the x and y coordinates.
 * @param {number} opts.scale Amount to scale the item.
 * @param {number} opts.opacity Opacity of the item.
 * @param {Function} opts.callback Complete function for the animation.
 * @param {Function} opts.callfront Function to call before transitioning.
 * @private
 */
Shuffle.prototype._transition = function( opts ) {
  var styles = this._getStylesForTransition( opts );
  this._startItemAnimation( opts.$item, styles, opts.callfront || $.noop, opts.callback || $.noop );
};


Shuffle.prototype._startItemAnimation = function( $item, styles, callfront, callback ) {
  var _this = this;
  // Transition end handler removes its listener.
  function handleTransitionEnd( evt ) {
    // Make sure this event handler has not bubbled up from a child.
    if ( evt.target === evt.currentTarget ) {
      $( evt.target ).off( TRANSITIONEND, handleTransitionEnd );
      _this._removeTransitionReference(reference);
      callback();
    }
  }

  var reference = {
    $element: $item,
    handler: handleTransitionEnd
  };

  callfront();

  // Transitions are not set until shuffle has loaded to avoid the initial transition.
  if ( !this.initialized ) {
    $item.css( styles );
    callback();
    return;
  }

  // Use CSS Transforms if we have them
  if ( this.supported ) {
    $item.css( styles );
    $item.on( TRANSITIONEND, handleTransitionEnd );
    this._transitions.push(reference);

  // Use jQuery to animate left/top
  } else {
    // Save the deferred object which jQuery returns.
    var anim = $item.stop( true ).animate( styles, this.speed, 'swing', callback );
    // Push the animation to the list of pending animations.
    this._animations.push( anim.promise() );
  }
};


/**
 * Execute the styles gathered in the style queue. This applies styles to elements,
 * triggering transitions.
 * @param {boolean} noLayout Whether to trigger a layout event.
 * @private
 */
Shuffle.prototype._processStyleQueue = function( noLayout ) {
  if ( this.isTransitioning ) {
    this._cancelMovement();
  }

  var $transitions = $();

  // Iterate over the queue and keep track of ones that use transitions.
  each(this.styleQueue, function( transitionObj ) {
    if ( transitionObj.skipTransition ) {
      this._styleImmediately( transitionObj );
    } else {
      $transitions = $transitions.add( transitionObj.$item );
      this._transition( transitionObj );
    }
  }, this);


  if ( $transitions.length > 0 && this.initialized && this.speed > 0 ) {
    // Set flag that shuffle is currently in motion.
    this.isTransitioning = true;

    if ( this.supported ) {
      this._whenCollectionDone( $transitions, TRANSITIONEND, this._movementFinished );

    // The _transition function appends a promise to the animations array.
    // When they're all complete, do things.
    } else {
      this._whenAnimationsDone( this._movementFinished );
    }

  // A call to layout happened, but none of the newly filtered items will
  // change position. Asynchronously fire the callback here.
  } else if ( !noLayout ) {
    defer( this._layoutEnd, this );
  }

  // Remove everything in the style queue
  this.styleQueue.length = 0;
};

Shuffle.prototype._cancelMovement = function() {
  if (this.supported) {
    // Remove the transition end event for each listener.
    each(this._transitions, function( transition ) {
      transition.$element.off( TRANSITIONEND, transition.handler );
    });
  } else {
    // Even when `stop` is called on the jQuery animation, its promise will
    // still be resolved. Since it cannot be determine from within that callback
    // whether the animation was stopped or not, a flag is set here to distinguish
    // between the two states.
    this._isMovementCanceled = true;
    this.$items.stop(true);
    this._isMovementCanceled = false;
  }

  // Reset the array.
  this._transitions.length = 0;

  // Show it's no longer active.
  this.isTransitioning = false;
};

Shuffle.prototype._removeTransitionReference = function(ref) {
  var indexInArray = $.inArray(ref, this._transitions);
  if (indexInArray > -1) {
    this._transitions.splice(indexInArray, 1);
  }
};


/**
 * Apply styles without a transition.
 * @param {Object} opts Transitions options object.
 * @private
 */
Shuffle.prototype._styleImmediately = function( opts ) {
  Shuffle._skipTransition(opts.$item[0], function() {
    opts.$item.css( this._getStylesForTransition( opts ) );
  }, this);
};

Shuffle.prototype._movementFinished = function() {
  this.isTransitioning = false;
  this._layoutEnd();
};

Shuffle.prototype._layoutEnd = function() {
  this._fire( Shuffle.EventType.LAYOUT );
};

Shuffle.prototype._addItems = function( $newItems, addToEnd, isSequential ) {
  // Add classes and set initial positions.
  this._initItems( $newItems );

  // Add transition to each item.
  this._setTransitions( $newItems );

  // Update the list of
  this.$items = this._getItems();

  // Shrink all items (without transitions).
  this._shrink( $newItems );
  each(this.styleQueue, function( transitionObj ) {
    transitionObj.skipTransition = true;
  });

  // Apply shrink positions, but do not cause a layout event.
  this._processStyleQueue( true );

  if ( addToEnd ) {
    this._addItemsToEnd( $newItems, isSequential );
  } else {
    this.shuffle( this.lastFilter );
  }
};


Shuffle.prototype._addItemsToEnd = function( $newItems, isSequential ) {
  // Get ones that passed the current filter
  var $passed = this._filter( null, $newItems );
  var passed = $passed.get();

  // How many filtered elements?
  this._updateItemCount();

  this._layout( passed, true );

  if ( isSequential && this.supported ) {
    this._setSequentialDelay( passed );
  }

  this._revealAppended( passed );
};


/**
 * Triggers appended elements to fade in.
 * @param {ArrayLike.<Element>} $newFilteredItems Collection of elements.
 * @private
 */
Shuffle.prototype._revealAppended = function( newFilteredItems ) {
  defer(function() {
    each(newFilteredItems, function( el ) {
      var $item = $( el );
      this._transition({
        $item: $item,
        opacity: 1,
        point: $item.data('point'),
        scale: DEFAULT_SCALE
      });
    }, this);

    this._whenCollectionDone($(newFilteredItems), TRANSITIONEND, function() {
      $(newFilteredItems).css( TRANSITION_DELAY, '0ms' );
      this._movementFinished();
    });
  }, this, this.revealAppendedDelay);
};


/**
 * Execute a function when an event has been triggered for every item in a collection.
 * @param {jQuery} $collection Collection of elements.
 * @param {string} eventName Event to listen for.
 * @param {Function} callback Callback to execute when they're done.
 * @private
 */
Shuffle.prototype._whenCollectionDone = function( $collection, eventName, callback ) {
  var done = 0;
  var items = $collection.length;
  var self = this;

  function handleEventName( evt ) {
    if ( evt.target === evt.currentTarget ) {
      $( evt.target ).off( eventName, handleEventName );
      done++;

      // Execute callback if all items have emitted the correct event.
      if ( done === items ) {
        self._removeTransitionReference(reference);
        callback.call( self );
      }
    }
  }

  var reference = {
    $element: $collection,
    handler: handleEventName
  };

  // Bind the event to all items.
  $collection.on( eventName, handleEventName );

  // Keep track of transitionend events so they can be removed.
  this._transitions.push(reference);
};


/**
 * Execute a callback after jQuery `animate` for a collection has finished.
 * @param {Function} callback Callback to execute when they're done.
 * @private
 */
Shuffle.prototype._whenAnimationsDone = function( callback ) {
  $.when.apply( null, this._animations ).always( $.proxy( function() {
    this._animations.length = 0;
    if (!this._isMovementCanceled) {
      callback.call( this );
    }
  }, this ));
};


/**
 * Public Methods
 */

/**
 * The magic. This is what makes the plugin 'shuffle'
 * @param {string|Function} [category] Category to filter by. Can be a function
 * @param {Object} [sortObj] A sort object which can sort the filtered set
 */
Shuffle.prototype.shuffle = function( category, sortObj ) {
  if ( !this.enabled ) {
    return;
  }

  if ( !category ) {
    category = ALL_ITEMS;
  }

  this._filter( category );

  // How many filtered elements?
  this._updateItemCount();

  // Shrink each concealed item
  this._shrink();

  // Update transforms on .filtered elements so they will animate to their new positions
  this.sort( sortObj );
};


/**
 * Gets the .filtered elements, sorts them, and passes them to layout.
 * @param {Object} opts the options object for the sorted plugin
 */
Shuffle.prototype.sort = function( opts ) {
  if ( this.enabled ) {
    this._resetCols();

    var sortOptions = opts || this.lastSort;
    var items = this._getFilteredItems().sorted( sortOptions );

    this._layout( items );

    this.lastSort = sortOptions;
  }
};


/**
 * Reposition everything.
 * @param {boolean} isOnlyLayout If true, column and gutter widths won't be
 *     recalculated.
 */
Shuffle.prototype.update = function( isOnlyLayout ) {
  if ( this.enabled ) {

    if ( !isOnlyLayout ) {
      // Get updated colCount
      this._setColumns();
    }

    // Layout items
    this.sort();
  }
};


/**
 * Use this instead of `update()` if you don't need the columns and gutters updated
 * Maybe an image inside `shuffle` loaded (and now has a height), which means calculations
 * could be off.
 */
Shuffle.prototype.layout = function() {
  this.update( true );
};


/**
 * New items have been appended to shuffle. Fade them in sequentially
 * @param {jQuery} $newItems jQuery collection of new items
 * @param {boolean} [addToEnd=false] If true, new items will be added to the end / bottom
 *     of the items. If not true, items will be mixed in with the current sort order.
 * @param {boolean} [isSequential=true] If false, new items won't sequentially fade in
 */
Shuffle.prototype.appended = function( $newItems, addToEnd, isSequential ) {
  this._addItems( $newItems, addToEnd === true, isSequential !== false );
};


/**
 * Disables shuffle from updating dimensions and layout on resize
 */
Shuffle.prototype.disable = function() {
  this.enabled = false;
};


/**
 * Enables shuffle again
 * @param {boolean} [isUpdateLayout=true] if undefined, shuffle will update columns and gutters
 */
Shuffle.prototype.enable = function( isUpdateLayout ) {
  this.enabled = true;
  if ( isUpdateLayout !== false ) {
    this.update();
  }
};


/**
 * Remove 1 or more shuffle items
 * @param {jQuery} $collection A jQuery object containing one or more element in shuffle
 * @return {Shuffle} The shuffle object
 */
Shuffle.prototype.remove = function( $collection ) {

  // If this isn't a jquery object, exit
  if ( !$collection.length || !$collection.jquery ) {
    return;
  }

  function handleRemoved() {
    // Remove the collection in the callback
    $collection.remove();

    // Update things now that elements have been removed.
    this.$items = this._getItems();
    this._updateItemCount();

    this._fire( Shuffle.EventType.REMOVED, [ $collection, this ] );

    // Let it get garbage collected
    $collection = null;
  }

  // Hide collection first.
  this._toggleFilterClasses( $(), $collection );
  this._shrink( $collection );

  this.sort();

  this.$el.one( Shuffle.EventType.LAYOUT + '.' + SHUFFLE, $.proxy( handleRemoved, this ) );
};


/**
 * Destroys shuffle, removes events, styles, and classes
 */
Shuffle.prototype.destroy = function() {
  // If there is more than one shuffle instance on the page,
  // removing the resize handler from the window would remove them
  // all. This is why a unique value is needed.
  $window.off('.' + this.unique);

  // Reset container styles
  this.$el
      .removeClass( SHUFFLE )
      .removeAttr('style')
      .removeData( SHUFFLE );

  // Reset individual item styles
  this.$items
      .removeAttr('style')
      .removeData('point')
      .removeData('scale')
      .removeClass([
        Shuffle.ClassName.CONCEALED,
        Shuffle.ClassName.FILTERED,
        Shuffle.ClassName.SHUFFLE_ITEM
      ].join(' '));

  // Null DOM references
  this.$items = null;
  this.$el = null;
  this.sizer = null;
  this.element = null;
  this._transitions = null;

  // Set a flag so if a debounced resize has been triggered,
  // it can first check if it is actually destroyed and not doing anything
  this.destroyed = true;
};


// Plugin definition
$.fn.shuffle = function( opts ) {
  var args = Array.prototype.slice.call( arguments, 1 );
  return this.each(function() {
    var $this = $( this );
    var shuffle = $this.data( SHUFFLE );

    // If we don't have a stored shuffle, make a new one and save it
    if ( !shuffle ) {
      shuffle = new Shuffle( this, opts );
      $this.data( SHUFFLE, shuffle );
    } else if ( typeof opts === 'string' && shuffle[ opts ] ) {
      shuffle[ opts ].apply( shuffle, args );
    }
  });
};


// http://stackoverflow.com/a/962890/373422
function randomize( array ) {
  var tmp, current;
  var top = array.length;

  if ( !top ) {
    return array;
  }

  while ( --top ) {
    current = Math.floor( Math.random() * (top + 1) );
    tmp = array[ current ];
    array[ current ] = array[ top ];
    array[ top ] = tmp;
  }

  return array;
}


// You can return `undefined` from the `by` function to revert to DOM order
// This plugin does NOT return a jQuery object. It returns a plain array because
// jQuery sorts everything in DOM order.
$.fn.sorted = function(options) {
  var opts = $.extend({}, $.fn.sorted.defaults, options);
  var arr = this.get();
  var revert = false;

  if ( !arr.length ) {
    return [];
  }

  if ( opts.randomize ) {
    return randomize( arr );
  }

  // Sort the elements by the opts.by function.
  // If we don't have opts.by, default to DOM order
  if ( $.isFunction( opts.by ) ) {
    arr.sort(function(a, b) {

      // Exit early if we already know we want to revert
      if ( revert ) {
        return 0;
      }

      var valA = opts.by($(a));
      var valB = opts.by($(b));

      // If both values are undefined, use the DOM order
      if ( valA === undefined && valB === undefined ) {
        revert = true;
        return 0;
      }

      if ( valA < valB || valA === 'sortFirst' || valB === 'sortLast' ) {
        return -1;
      }

      if ( valA > valB || valA === 'sortLast' || valB === 'sortFirst' ) {
        return 1;
      }

      return 0;
    });
  }

  // Revert to the original array if necessary
  if ( revert ) {
    return this.get();
  }

  if ( opts.reverse ) {
    arr.reverse();
  }

  return arr;
};


$.fn.sorted.defaults = {
  reverse: false, // Use array.reverse() to reverse the results
  by: null, // Sorting function
  randomize: false // If true, this will skip the sorting and return a randomized order in the array
};

return Shuffle;

});
;
(function ($) {
  Drupal.behaviors.inv_grid = {
    attach: function (context, settings) {

      $('.inv-grid', context).once('inv-grid').each(function () {
        var $grid = $(this).find('.inv-grid-inner'),
        id = $(this).attr('id'),
        options = settings.invgrid[id];
        if (options == null) return false;
        $grid.data({
          resize: true,
          sameheight: false
        });
        options.columnWidth = inv_grid_adjust_column_width(options, $grid);
        var shuffle_options = {
          itemSelector: '.inv-grid-item',
          speed: 500,
          sizer: $grid.find('.shuffle__sizer')
        };
        var grid = {};
        grid.options = $.extend({}, options);
        grid.update = function () {
          $grid.shuffle('destroy');
          inv_grid_adjust_column_width(this.options, $grid);
          $grid.shuffle(shuffle_options);
        }
        grid.reset = function () {
          $grid.shuffle('destroy');
          options.columnWidth = inv_grid_adjust_column_width(options, $grid);
          $grid.shuffle(shuffle_options);
        }
        $grid.data('grid', grid);
        $grid.shuffle(shuffle_options).shuffle('shuffle', 'all');
        if ($grid.parent().hasClass('classic')) {
          $grid.on('layout.shuffle', function () {
            var columnNum = 0,
              ww = $(window).width();
            if (ww < 768) {
              columnNum = options.grid_cols_xs;
            } else if (ww >= 768 && ww < 992) {
              columnNum = options.grid_cols_sm;
            } else if (ww >= 992 && ww < 1200) {
              columnNum = options.grid_cols_md;
            } else if (ww >= 1200) {
              columnNum = options.grid_cols_lg;
            }
            if (columnNum < 2) return false;
            if ($grid.data('sameheight')) {
              return false;
            }
            $grid.data('sameheight', true);
            var maxheight = 0;
            $grid.find('.filtered').each(function (index) {
              if ($(this).height() > maxheight) {
                maxheight = $(this).height();
              }
              if (index % columnNum == columnNum - 1 && index > 0) {
                $grid.find(".filtered").slice(index - columnNum + 1, index + 1).css({
                  minHeight: maxheight + 1
                });
                maxheight = 0;
              }
            });
            $grid.shuffle('update');
            $grid.find('.filtered').css({
              minHeight: 'auto'
            });
            setTimeout(function () {
              $grid.data('sameheight', false)
            }, 1000);
          });
        }
        var window_w = $(window).width();
		var resize_h = null;
        $(window).resize(function () {
          clearTimeout(resize_h);
          resize_h = setTimeout(function(){
            if ($(window).width() == window_w) return;
            window_w = $(window).width();
            if ($grid.data('resize')) {
              $grid.width('auto');
              shuffle_options.columnWidth = inv_grid_adjust_column_width(options, $grid);
              $grid.shuffle('update');
            }
          },500);
        }).load(function () {
          $grid.shuffle('update');
        });
      });
      $('.grid-filter').once('grid-filter').each(function () {
        var $grid = $(this).next('.inv-grid').find('.inv-grid-inner');
        $(this).find('a').on('click', function (e) {
          e.preventDefault();
          if ($(this).hasClass('active')) return false;
          $grid.css({
            width: parseInt($grid.width()) + 5
          });
          var $this = $(this),
            filter = $this.data('filter');
          if (filter == '*') {
            $grid.shuffle('shuffle', 'all');
          } else {
            $grid.shuffle('shuffle', function ($el, shuffle) {
              /*Only search elements in the current group*/
              if (shuffle.group !== 'all' && $.inArray(shuffle.group, $el.data('groups')) === -1) {
                return false;
              }
              return $el.hasClass(filter);
            });
          }
          $(this).parents('.inv-grid-filter').find('a').removeClass('active');
          $(this).addClass('active');
          try {
            if (filter == '*') {
              window.location.hash = 'all';
            } else {
              window.location.hash = filter;
            }
          } catch (e) {
            console.log(e);
          }
          return false;
        });
        try {
          var url = window.location.href,
            idx = url.indexOf("#"),
            hash = idx != -1 ? url.substring(idx + 1) : "";
          if (hash != "") {
            $('a[data-filter=' + hash + ']').trigger('click');
          }
        } catch (e) {
          console.log(e)
        }
      });
    }
  }

  var inv_grid_adjust_column_width = function (options, $grid) {
    var ww = $(window).width(),
      columnNum = 0,
      columnWidth = 0;
    if (ww < 768) {
      columnNum = options.grid_cols_xs;
    } else if (ww >= 768 && ww < 992) {
      columnNum = options.grid_cols_sm;
    } else if (ww >= 992 && ww < 1200) {
      columnNum = options.grid_cols_md;
    } else if (ww >= 1200) {
      columnNum = options.grid_cols_lg;
    }
    var columnWidth = Math.ceil(($grid.width() - (columnNum - 1) * options.grid_margin) / columnNum);
    var columnHeight = Math.floor(columnWidth / options.grid_ratio);

    $grid.find('.shuffle__sizer').css({
      width: columnWidth,
      margin: parseInt(options.grid_margin)
    });

    $grid.css({
      width: parseInt($grid.width()) + parseInt(columnNum)
    });
    $grid.find('.inv-grid-item').each(function (index) {
      if ($grid.parent().hasClass('masonry-resize')) {
        var multiplier_w = $(this).attr('class').match(/item-w(\d)/),
          multiplier_h = $(this).attr('class').match(/item-h(\d)/);
        if (multiplier_w[1] == 0) multiplier_w[1] = 1;
        if (multiplier_h[1] == 0) multiplier_h[1] = 1;
        var item_width = columnNum == 1 ? columnWidth : multiplier_w[1] * columnWidth + (multiplier_w[1] - 1) * options.grid_margin,
          item_height = columnNum == 1 ? columnHeight : multiplier_h[1] * columnHeight + (multiplier_h[1] - 1) * options.grid_margin;
        $(this).css({
          width: item_width,
          height: item_height,
          marginBottom: parseInt(options.grid_margin)
        });
      } else {
        $(this).css({
          width: columnWidth,
          marginBottom: parseInt(options.grid_margin)
        });
      }
    });
    return columnWidth;
  }
})(jQuery)
;
/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {
    $.fn.appear = function(fn, options) {

        var settings = $.extend({

            //arbitrary data to pass to fn
            data: undefined,

            //call fn only on the first appear?
            one: true,

            // X & Y accuracy
            accX: 0,
            accY: 0

        }, options);

        return this.each(function() {

            var t = $(this);

            //whether the element is currently visible
            t.appeared = false;

            if (!fn) {

                //trigger the custom event
                t.trigger('appear', settings.data);
                return;
            }

            var w = $(window);

            //fires the appear event when appropriate
            var check = function() {

                //is the element hidden?
                if (!t.is(':visible')) {

                    //it became hidden
                    t.appeared = false;
                    return;
                }

                //is the element inside the visible window?
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;

                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();

                if (y + th + ay >= b &&
                    y <= b + wh + ay &&
                    x + tw + ax >= a &&
                    x <= a + ww + ax) {

                    //trigger the custom event
                    if (!t.appeared) t.trigger('appear', settings.data);

                } else {

                    //it scrolled out of view
                    t.appeared = false;
                }
            };

            //create a modified fn with some additional logic
            var modifiedFn = function() {

                //mark the element as visible
                t.appeared = true;

                //is this supposed to happen only once?
                if (settings.one) {

                    //remove the check
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }

                //trigger the original fn
                fn.apply(this, arguments);
            };

            //bind the modified fn to the element
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);

            //check whenever the window scrolls
            w.scroll(check);

            //check whenever the dom changes
            $.fn.appear.checks.push(check);

            //check now
            (check)();
        });
    };

    //keep a queue of appearance checks
    $.extend($.fn.appear, {

        checks: [],
        timeout: null,

        //process the queue
        checkAll: function() {
            var length = $.fn.appear.checks.length;
            if (length > 0) while (length--) ($.fn.appear.checks[length])();
        },

        //check the queue asynchronously
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });

    //run checks when these methods are called
    $.each(['append', 'prepend', 'after', 'before', 'attr',
        'removeAttr', 'addClass', 'removeClass', 'toggleClass',
        'remove', 'css', 'show', 'hide'], function(i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function() {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });

})(jQuery);
;
jQuery(document).ready(function($) {
    $(".inv-animate").each(function() {
        var $this = $(this);
        if ($('body').hasClass('mobile')) {
            $this.removeClass('inv-animate');
        } else {
            var animate_class = $this.data('animate'), delay = $this.data('animate-delay') || 0;
            $this.appear(function() {
                setTimeout(function() {
                    $this.addClass('animated').addClass(animate_class);
                }, delay*1000);
            }, {
                accX: 0,
                accY: 0,
                one: true
            });
        }
    });
});
;
/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);
;
(function($){
	// Responsive Slideshow v1.1
	Drupal.behaviors.inv_bxslider = {
		attach: function(context,settings) {
            $('.inv-bxslider').each(function(index){
            var $this = $(this),
            responsiveID = $(this).attr('id'),
            bxready = $this.data('bx-ready');
            if (bxready == 1) return;
            settings.invbxsliders[responsiveID].total = $('.bxslide',$this).length;
            var options = bxAdjustOptions(settings.invbxsliders[responsiveID], $(this).innerWidth());
            var slide = $(this).bxSlider(options);
            $this.data({
                'bx-ready': 1
            });

            var windowW = $(window).width();
            $(window).resize(function () {
              waitForFinalEvent(function () {
                  if (windowW == $(window).width()) return;
                  windowW = $(window).width();
                  slide.destroySlider();
                  options = bxAdjustOptions(settings.invbxsliders[responsiveID], $this.innerWidth());
                  slide = $this.bxSlider(options);
              }, 500, responsiveID)
              })
			});
		}
	};
	
	/*Adjust bxslider options to fix on any screen*/
	function bxAdjustOptions(options, container_width){
        var _options = {};
		$.extend(_options, options);
		var wWidth = $(window).width();
        if(wWidth >= 1200){
            _options.maxSlides = _options.minSlides = parseInt(options.lg_items);
        }else if(wWidth > 991 && wWidth < 1200){
            _options.maxSlides = _options.minSlides = parseInt(options.md_items);
        }else if(wWidth > 767 && wWidth < 992){
            _options.maxSlides = _options.minSlides = parseInt(options.sm_items);
        }else{
            _options.maxSlides = _options.minSlides = parseInt(options.xs_items);
        }
        if(_options.maxSlides > _options.total){
            _options.maxSlides = _options.minSlides = options.total;
        }
    
        if (options.mode == "horizontal") {
          _options.slideWidth = (container_width - (_options.slideMargin * (_options.maxSlides - 1))) / _options.maxSlides;
        }
        return _options;
	 }
    //
	var waitForFinalEvent = (function () {
        var d = {};
        return function (a, b, c) {
          if (!c) {
            c = "Don't call this twice without a uniqueId"
          }
          if (d[c]) {
            clearTimeout(d[c]);
          }
          d[c] = setTimeout(a, b);
        }
    })();
})(jQuery);;
/*jquery.mb.YTPlayer 16-10-2015
 _ jquery.mb.components
 _ email: matteo@open-lab.com
 _ Copyright (c) 2001-2015. Matteo Bicocchi (Pupunzi);
 _ blog: http://pupunzi.open-lab.com
 _ Open Lab s.r.l., Florence - Italy
 */
function onYouTubeIframeAPIReady(){ytp.YTAPIReady||(ytp.YTAPIReady=!0,jQuery(document).trigger("YTAPIReady"))}function uncamel(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function setUnit(a,b){return"string"!=typeof a||a.match(/^[\-0-9\.]+jQuery/)?""+a+b:a}function setFilter(a,b,c){var d=uncamel(b),e=jQuery.browser.mozilla?"":jQuery.CSS.sfx;a[e+"filter"]=a[e+"filter"]||"",c=setUnit(c>jQuery.CSS.filters[b].max?jQuery.CSS.filters[b].max:c,jQuery.CSS.filters[b].unit),a[e+"filter"]+=d+"("+c+") ",delete a[b]}var ytp=ytp||{},getYTPVideoID=function(a){var b,c;return a.indexOf("youtu.be")>0?(b=a.substr(a.lastIndexOf("/")+1,a.length),c=b.indexOf("?list=")>0?b.substr(b.lastIndexOf("="),b.length):null,b=c?b.substr(0,b.lastIndexOf("?")):b):a.indexOf("http")>-1?(b=a.match(/[\\?&]v=([^&#]*)/)[1],c=a.indexOf("list=")>0?a.match(/[\\?&]list=([^&#]*)/)[1]:null):(b=a.length>15?null:a,c=b?null:a),{videoID:b,playlistID:c}};!function(jQuery,ytp){jQuery.mbYTPlayer={name:"jquery.mb.YTPlayer",version:"2.9.5",build:"{{ build }}",author:"Matteo Bicocchi",apiKey:"",defaults:{containment:"body",ratio:"auto",videoURL:null,playlistURL:null,startAt:0,stopAt:0,autoPlay:!0,vol:50,addRaster:!1,opacity:1,quality:"default",mute:!1,loop:!0,showControls:!0,showAnnotations:!1,showYTLogo:!0,stopMovieOnBlur:!0,realfullscreen:!0,gaTrack:!0,optimizeDisplay:!0,onReady:function(a){}},controls:{play:"P",pause:"p",mute:"M",unmute:"A",onlyYT:"O",showSite:"R",ytLogo:"Y"},locationProtocol:"https:",buildPlayer:function(options){return this.each(function(){var YTPlayer=this,$YTPlayer=jQuery(YTPlayer);YTPlayer.loop=0,YTPlayer.opt={},YTPlayer.state={},YTPlayer.filtersEnabled=!0,YTPlayer.filters={grayscale:{value:0,unit:"%"},hue_rotate:{value:0,unit:"deg"},invert:{value:0,unit:"%"},opacity:{value:0,unit:"%"},saturate:{value:0,unit:"%"},sepia:{value:0,unit:"%"},brightness:{value:0,unit:"%"},contrast:{value:0,unit:"%"},blur:{value:0,unit:"px"}},$YTPlayer.addClass("mb_YTPlayer");var property=$YTPlayer.data("property")&&"string"==typeof $YTPlayer.data("property")?eval("("+$YTPlayer.data("property")+")"):$YTPlayer.data("property");"undefined"!=typeof property&&"undefined"!=typeof property.vol&&(property.vol=0===property.vol?property.vol=1:property.vol),jQuery.extend(YTPlayer.opt,jQuery.mbYTPlayer.defaults,options,property),YTPlayer.hasChanged||(YTPlayer.defaultOpt={},jQuery.extend(YTPlayer.defaultOpt,jQuery.mbYTPlayer.defaults,options,property)),YTPlayer.isRetina=window.retina||window.devicePixelRatio>1;var isIframe=function(){var a=!1;try{self.location.href!=top.location.href&&(a=!0)}catch(b){a=!0}return a};YTPlayer.canGoFullScreen=!(jQuery.browser.msie||jQuery.browser.opera||isIframe()),YTPlayer.canGoFullScreen||(YTPlayer.opt.realfullscreen=!1),$YTPlayer.attr("id")||$YTPlayer.attr("id","video_"+(new Date).getTime());var playerID="mbYTP_"+YTPlayer.id;YTPlayer.isAlone=!1,YTPlayer.hasFocus=!0;var videoID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).videoID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).videoID:!1,playlistID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).playlistID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).playlistID:!1;YTPlayer.videoID=videoID,YTPlayer.playlistID=playlistID,YTPlayer.opt.showAnnotations=YTPlayer.opt.showAnnotations?"0":"3";var playerVars={autoplay:0,modestbranding:1,controls:0,showinfo:0,rel:0,enablejsapi:1,version:3,playerapiid:playerID,origin:"*",allowfullscreen:!0,wmode:"transparent",iv_load_policy:YTPlayer.opt.showAnnotations};document.createElement("video").canPlayType&&jQuery.extend(playerVars,{html5:1}),jQuery.browser.msie&&jQuery.browser.version<9&&(this.opt.opacity=1);var playerBox=jQuery("<div/>").attr("id",playerID).addClass("playerBox"),overlay=jQuery("<div/>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).addClass("YTPOverlay");if(YTPlayer.isSelf="self"==YTPlayer.opt.containment,YTPlayer.defaultOpt.containment=YTPlayer.opt.containment=jQuery("self"==YTPlayer.opt.containment?this:YTPlayer.opt.containment),YTPlayer.isBackground="body"==YTPlayer.opt.containment.get(0).tagName.toLowerCase(),!YTPlayer.isBackground||!ytp.backgroundIsInited){var isPlayer=YTPlayer.opt.containment.is(jQuery(this));if(YTPlayer.canPlayOnMobile=isPlayer&&0===jQuery(this).children().length,isPlayer?YTPlayer.isPlayer=!0:$YTPlayer.hide(),jQuery.browser.mobile&&!YTPlayer.canPlayOnMobile)return void $YTPlayer.remove();var wrapper=jQuery("<div/>").addClass("mbYTP_wrapper").attr("id","wrapper_"+playerID);if(wrapper.css({position:"absolute",zIndex:0,minWidth:"100%",minHeight:"100%",left:0,top:0,overflow:"hidden",opacity:0}),playerBox.css({position:"absolute",zIndex:0,width:"100%",height:"100%",top:0,left:0,overflow:"hidden"}),wrapper.append(playerBox),YTPlayer.opt.containment.children().not("script, style").each(function(){"static"==jQuery(this).css("position")&&jQuery(this).css("position","relative")}),YTPlayer.isBackground?(jQuery("body").css({boxSizing:"border-box"}),wrapper.css({position:"fixed",top:0,left:0,zIndex:0}),$YTPlayer.hide()):"static"==YTPlayer.opt.containment.css("position")&&YTPlayer.opt.containment.css({position:"relative"}),YTPlayer.opt.containment.prepend(wrapper),YTPlayer.wrapper=wrapper,playerBox.css({opacity:1}),jQuery.browser.mobile||(playerBox.after(overlay),YTPlayer.overlay=overlay),YTPlayer.isBackground||overlay.on("mouseenter",function(){YTPlayer.controlBar&&YTPlayer.controlBar.addClass("visible")}).on("mouseleave",function(){YTPlayer.controlBar&&YTPlayer.controlBar.removeClass("visible")}),ytp.YTAPIReady)setTimeout(function(){jQuery(document).trigger("YTAPIReady")},100);else{jQuery("#YTAPI").remove();var tag=jQuery("<script></script>").attr({src:jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/iframe_api?v="+jQuery.mbYTPlayer.version,id:"YTAPI"});jQuery("head").prepend(tag)}jQuery(document).on("YTAPIReady",function(){YTPlayer.isBackground&&ytp.backgroundIsInited||YTPlayer.isInit||(YTPlayer.isBackground&&(ytp.backgroundIsInited=!0),YTPlayer.opt.autoPlay="undefined"==typeof YTPlayer.opt.autoPlay?YTPlayer.isBackground?!0:!1:YTPlayer.opt.autoPlay,YTPlayer.opt.vol=YTPlayer.opt.vol?YTPlayer.opt.vol:100,jQuery.mbYTPlayer.getDataFromAPI(YTPlayer),jQuery(YTPlayer).on("YTPChanged",function(){if(!YTPlayer.isInit){if(YTPlayer.isInit=!0,jQuery.browser.mobile&&YTPlayer.canPlayOnMobile){if(YTPlayer.opt.containment.outerWidth()>jQuery(window).width()){YTPlayer.opt.containment.css({maxWidth:"100%"});var h=.6*YTPlayer.opt.containment.outerWidth();YTPlayer.opt.containment.css({maxHeight:h})}return void new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),height:"100%",width:"100%",events:{onReady:function(a){YTPlayer.player=a.target,playerBox.css({opacity:1}),YTPlayer.wrapper.css({opacity:1})}}})}new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),playerVars:playerVars,events:{onReady:function(a){if(YTPlayer.player=a.target,!YTPlayer.isReady){YTPlayer.isReady=YTPlayer.isPlayer&&!YTPlayer.opt.autoPlay?!1:!0,YTPlayer.playerEl=YTPlayer.player.getIframe(),$YTPlayer.optimizeDisplay(),YTPlayer.videoID=videoID,jQuery(window).on("resize.YTP",function(){$YTPlayer.optimizeDisplay()}),jQuery.mbYTPlayer.checkForState(YTPlayer);var b=jQuery.Event("YTPUnstarted");b.time=YTPlayer.player.time,YTPlayer.canTrigger&&jQuery(YTPlayer).trigger(b)}},onStateChange:function(event){if("function"==typeof event.target.getPlayerState){var state=event.target.getPlayerState();if(YTPlayer.state!=state){YTPlayer.state=state;var eventType;switch(state){case-1:eventType="YTPUnstarted";break;case 0:eventType="YTPEnd";break;case 1:eventType="YTPStart",YTPlayer.controlBar&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause),"undefined"!=typeof _gaq&&eval(YTPlayer.opt.gaTrack)&&_gaq.push(["_trackEvent","YTPlayer","Play",YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString()]),"undefined"!=typeof ga&&eval(YTPlayer.opt.gaTrack)&&ga("send","event","YTPlayer","play",YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString());break;case 2:eventType="YTPPause",YTPlayer.controlBar&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 3:YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),eventType="YTPBuffering",YTPlayer.controlBar&&YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 5:eventType="YTPCued"}var YTPEvent=jQuery.Event(eventType);YTPEvent.time=YTPlayer.player.time,YTPlayer.canTrigger&&jQuery(YTPlayer).trigger(YTPEvent)}}},onPlaybackQualityChange:function(a){var b=a.target.getPlaybackQuality(),c=jQuery.Event("YTPQualityChange");c.quality=b,jQuery(YTPlayer).trigger(c)},onError:function(a){150==a.data&&(console.log("Embedding this video is restricted by Youtube."),YTPlayer.isPlayList&&jQuery(YTPlayer).playNext()),2==a.data&&YTPlayer.isPlayList&&jQuery(YTPlayer).playNext(),"function"==typeof YTPlayer.opt.onError&&YTPlayer.opt.onError($YTPlayer,a)}}})}}))})}})},getDataFromAPI:function(a){if(a.videoData=jQuery.mbStorage.get("YTPlayer_data_"+a.videoID),jQuery(a).off("YTPData.YTPlayer").on("YTPData.YTPlayer",function(){if(a.hasData&&a.isPlayer&&!a.opt.autoPlay){var b=a.videoData.thumb_max||a.videoData.thumb_high||a.videoData.thumb_medium;a.opt.containment.css({background:"rgba(0,0,0,0.5) url("+b+") center center",backgroundSize:"cover"}),a.opt.backgroundUrl=b}}),a.videoData)setTimeout(function(){a.opt.ratio="auto"==a.opt.ratio?"16/9":a.opt.ratio,a.dataReceived=!0,jQuery(a).trigger("YTPChanged");var b=jQuery.Event("YTPData");b.prop={};for(var c in a.videoData)b.prop[c]=a.videoData[c];jQuery(a).trigger(b)},500),a.hasData=!0;else if(jQuery.mbYTPlayer.apiKey)jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol+"//www.googleapis.com/youtube/v3/videos?id="+a.videoID+"&key="+jQuery.mbYTPlayer.apiKey+"&part=snippet",function(b){function c(b){a.videoData={},a.videoData.id=a.videoID,a.videoData.channelTitle=b.channelTitle,a.videoData.title=b.title,a.videoData.description=b.description.length<400?b.description:b.description.substring(0,400)+" ...",a.videoData.aspectratio="auto"==a.opt.ratio?"16/9":a.opt.ratio,a.opt.ratio=a.videoData.aspectratio,a.videoData.thumb_max=b.thumbnails.maxres?b.thumbnails.maxres.url:null,a.videoData.thumb_high=b.thumbnails.high?b.thumbnails.high.url:null,a.videoData.thumb_medium=b.thumbnails.medium?b.thumbnails.medium.url:null,jQuery.mbStorage.set("YTPlayer_data_"+a.videoID,a.videoData)}a.dataReceived=!0,jQuery(a).trigger("YTPChanged"),c(b.items[0].snippet),a.hasData=!0;var d=jQuery.Event("YTPData");d.prop={};for(var e in a.videoData)d.prop[e]=a.videoData[e];jQuery(a).trigger(d)});else{if(setTimeout(function(){jQuery(a).trigger("YTPChanged")},50),a.isPlayer&&!a.opt.autoPlay){var b=jQuery.mbYTPlayer.locationProtocol+"//i.ytimg.com/vi/"+a.videoID+"/hqdefault.jpg";a.opt.containment.css({background:"rgba(0,0,0,0.5) url("+b+") center center",backgroundSize:"cover"}),a.opt.backgroundUrl=b}a.videoData=null,a.opt.ratio="auto"==a.opt.ratio?"16/9":a.opt.ratio}a.isPlayer&&!a.opt.autoPlay&&(a.loading=jQuery("<div/>").addClass("loading").html("Loading").hide(),jQuery(a).append(a.loading),a.loading.fadeIn())},removeStoredData:function(){jQuery.mbStorage.remove()},getVideoData:function(){var a=this.get(0);return a.videoData},getVideoID:function(){var a=this.get(0);return a.videoID||!1},setVideoQuality:function(a){var b=this.get(0);jQuery.browser.chrome||b.player.setPlaybackQuality(a)},playlist:function(a,b,c){var d=this,e=d.get(0);return e.isPlayList=!0,b&&(a=jQuery.shuffle(a)),e.videoID||(e.videos=a,e.videoCounter=0,e.videoLength=a.length,jQuery(e).data("property",a[0]),jQuery(e).mb_YTPlayer()),"function"==typeof c&&jQuery(e).one("YTPChanged",function(){c(e)}),jQuery(e).on("YTPEnd",function(){jQuery(e).playNext()}),d},playNext:function(){var a=this.get(0);return a.videoCounter++,a.videoCounter>=a.videoLength&&(a.videoCounter=0),jQuery(a).changeMovie(a.videos[a.videoCounter]),this},playPrev:function(){var a=this.get(0);return a.videoCounter--,a.videoCounter<0&&(a.videoCounter=a.videoLength-1),jQuery(a).changeMovie(a.videos[a.videoCounter]),this},changeMovie:function(a){var b=this.get(0);b.opt.startAt=0,b.opt.stopAt=0,b.opt.mute=!0,b.hasData=!1,b.hasChanged=!0,a&&jQuery.extend(b.opt,b.defaultOpt,a),b.videoID=getYTPVideoID(b.opt.videoURL).videoID,jQuery(b.playerEl).CSSAnimate({opacity:0},200,function(){return jQuery(b).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/v/"+b.videoID),1,b.opt.quality),jQuery.mbYTPlayer.checkForState(b),jQuery(b).optimizeDisplay(),jQuery.mbYTPlayer.getDataFromAPI(b),this})},getPlayer:function(){return jQuery(this).get(0).player},playerDestroy:function(){var a=this.get(0);ytp.YTAPIReady=!1,ytp.backgroundIsInited=!1,a.isInit=!1,a.videoID=null;var b=a.wrapper;return b.remove(),jQuery("#controlBar_"+a.id).remove(),clearInterval(a.checkForStartAt),clearInterval(a.getState),this},fullscreen:function(real){function hideMouse(){YTPlayer.overlay.css({cursor:"none"})}function RunPrefixMethod(a,b){for(var c,d,e=["webkit","moz","ms","o",""],f=0;f<e.length&&!a[c];){if(c=b,""==e[f]&&(c=c.substr(0,1).toLowerCase()+c.substr(1)),c=e[f]+c,d=typeof a[c],"undefined"!=d)return e=[e[f]],"function"==d?a[c]():a[c];f++}}function launchFullscreen(a){RunPrefixMethod(a,"RequestFullScreen")}function cancelFullscreen(){(RunPrefixMethod(document,"FullScreen")||RunPrefixMethod(document,"IsFullScreen"))&&RunPrefixMethod(document,"CancelFullScreen")}var YTPlayer=this.get(0);"undefined"==typeof real&&(real=YTPlayer.opt.realfullscreen),real=eval(real);var controls=jQuery("#controlBar_"+YTPlayer.id),fullScreenBtn=controls.find(".mb_OnlyYT"),videoWrapper=YTPlayer.isSelf?YTPlayer.opt.containment:YTPlayer.wrapper;if(real){var fullscreenchange=jQuery.browser.mozilla?"mozfullscreenchange":jQuery.browser.webkit?"webkitfullscreenchange":"fullscreenchange";jQuery(document).off(fullscreenchange).on(fullscreenchange,function(){var a=RunPrefixMethod(document,"IsFullScreen")||RunPrefixMethod(document,"FullScreen");a?(jQuery(YTPlayer).YTPSetVideoQuality("default"),jQuery(YTPlayer).trigger("YTPFullScreenStart")):(YTPlayer.isAlone=!1,fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality),videoWrapper.removeClass("fullscreen"),videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500),videoWrapper.css({zIndex:0}),YTPlayer.isBackground?jQuery("body").after(controls):YTPlayer.wrapper.before(controls),jQuery(window).resize(),jQuery(YTPlayer).trigger("YTPFullScreenEnd"))})}return YTPlayer.isAlone?(jQuery(document).off("mousemove.YTPlayer"),YTPlayer.overlay.css({cursor:"auto"}),real?cancelFullscreen():(videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500),videoWrapper.css({zIndex:0})),fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),YTPlayer.isAlone=!1):(jQuery(document).on("mousemove.YTPlayer",function(a){YTPlayer.overlay.css({cursor:"auto"}),clearTimeout(YTPlayer.hideCursor),jQuery(a.target).parents().is(".mb_YTPBar")||(YTPlayer.hideCursor=setTimeout(hideMouse,3e3))}),hideMouse(),real?(videoWrapper.css({opacity:0}),videoWrapper.addClass("fullscreen"),launchFullscreen(videoWrapper.get(0)),setTimeout(function(){videoWrapper.CSSAnimate({opacity:1},1e3),YTPlayer.wrapper.append(controls),jQuery(YTPlayer).optimizeDisplay(),YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime()+.1,!0)},500)):videoWrapper.css({zIndex:1e4}).CSSAnimate({opacity:1},1e3),fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),YTPlayer.isAlone=!0),this},toggleLoops:function(){var a=this.get(0),b=a.opt;return 1==b.loop?b.loop=0:(b.startAt?a.player.seekTo(b.startAt):a.player.playVideo(),b.loop=1),this},play:function(){var a=this.get(0);if(a.isReady){var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");return c.html(jQuery.mbYTPlayer.controls.pause),a.player.playVideo(),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},2e3),jQuery(a.playerEl).CSSAnimate({opacity:1},1e3),jQuery(a).css("background-image","none"),this}},togglePlay:function(a){var b=this.get(0);return 1==b.state?this.YTPPause():this.YTPPlay(),"function"==typeof a&&a(b.state),this},stop:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");return c.html(jQuery.mbYTPlayer.controls.play),a.player.stopVideo(),this},pause:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");return c.html(jQuery.mbYTPlayer.controls.play),a.player.pauseVideo(),this},seekTo:function(a){var b=this.get(0);return b.player.seekTo(a,!0),this},setVolume:function(a){var b=this.get(0);return a||b.opt.vol||0!=b.player.getVolume()?!a&&b.player.getVolume()>0||a&&b.opt.vol==a?b.isMute?jQuery(b).YTPUnmute():jQuery(b).YTPMute():(b.opt.vol=a,b.player.setVolume(b.opt.vol),b.volumeBar&&b.volumeBar.length&&b.volumeBar.updateSliderVal(a)):jQuery(b).YTPUnmute(),this},mute:function(){var a=this.get(0);if(!a.isMute){a.player.mute(),a.isMute=!0,a.player.setVolume(0),a.volumeBar&&a.volumeBar.length&&a.volumeBar.width()>10&&a.volumeBar.updateSliderVal(0);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPMuteUnmute");c.html(jQuery.mbYTPlayer.controls.unmute),jQuery(a).addClass("isMuted"),a.volumeBar&&a.volumeBar.length&&a.volumeBar.addClass("muted");var d=jQuery.Event("YTPMuted");return d.time=a.player.time,a.canTrigger&&jQuery(a).trigger(d),this}},unmute:function(){var a=this.get(0);if(a.isMute){a.player.unMute(),a.isMute=!1,a.player.setVolume(a.opt.vol),a.volumeBar&&a.volumeBar.length&&a.volumeBar.updateSliderVal(a.opt.vol>10?a.opt.vol:10);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPMuteUnmute");c.html(jQuery.mbYTPlayer.controls.mute),jQuery(a).removeClass("isMuted"),a.volumeBar&&a.volumeBar.length&&a.volumeBar.removeClass("muted");var d=jQuery.Event("YTPUnmuted");return d.time=a.player.time,a.canTrigger&&jQuery(a).trigger(d),this}},applyFilter:function(a,b){var c=this.get(0);return c.filters[a].value=b,c.filtersEnabled&&this.YTPEnableFilters(),this},applyFilters:function(a){var b=this.get(0);return this.on("YTPReady",function(){for(var c in a)b.filters[c].value=a[c],jQuery(b).YTPApplyFilter(c,a[c]);jQuery(b).trigger("YTPFiltersApplied")}),this},toggleFilter:function(a,b){return this.each(function(){var c=this;c.filters[a].value?c.filters[a].value=0:c.filters[a].value=b,c.filtersEnabled&&jQuery(this).YTPEnableFilters()})},toggleFilters:function(a){return this.each(function(){var b=this;b.filtersEnabled?(jQuery(b).trigger("YTPDisableFilters"),jQuery(b).YTPDisableFilters()):(jQuery(b).YTPEnableFilters(),jQuery(b).trigger("YTPEnableFilters")),"function"==typeof a&&a(b.filtersEnabled)})},disableFilters:function(){return this.each(function(){var a=this,b=jQuery(a.playerEl);b.css("-webkit-filter",""),b.css("filter",""),a.filtersEnabled=!1})},enableFilters:function(){return this.each(function(){var a=this,b=jQuery(a.playerEl),c="";for(var d in a.filters)a.filters[d].value&&(c+=d.replace("_","-")+"("+a.filters[d].value+a.filters[d].unit+") ");b.css("-webkit-filter",c),b.css("filter",c),a.filtersEnabled=!0})},removeFilter:function(a,b){return this.each(function(){"function"==typeof a&&(b=a,a=null);var c=this;if(a)jQuery(this).YTPApplyFilter(a,0),"function"==typeof b&&b(a);else for(var d in c.filters)jQuery(this).YTPApplyFilter(d,0),"function"==typeof b&&b(d)})},manageProgress:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPProgress"),d=b.find(".mb_YTPLoaded"),e=b.find(".mb_YTPseekbar"),f=c.outerWidth(),g=Math.floor(a.player.getCurrentTime()),h=Math.floor(a.player.getDuration()),i=g*f/h,j=0,k=100*a.player.getVideoLoadedFraction();return d.css({left:j,width:k+"%"}),e.css({left:0,width:i}),{totalTime:h,currentTime:g}},buildControls:function(YTPlayer){var data=YTPlayer.opt;if(data.showYTLogo=data.showYTLogo||data.printUrl,!jQuery("#controlBar_"+YTPlayer.id).length){YTPlayer.controlBar=jQuery("<span/>").attr("id","controlBar_"+YTPlayer.id).addClass("mb_YTPBar").css({whiteSpace:"noWrap",position:YTPlayer.isBackground?"fixed":"absolute",zIndex:YTPlayer.isBackground?1e4:1e3}).hide();var buttonBar=jQuery("<div/>").addClass("buttonBar"),playpause=jQuery("<span>"+jQuery.mbYTPlayer.controls.play+"</span>").addClass("mb_YTPPlaypause ytpicon").click(function(){1==YTPlayer.player.getPlayerState()?jQuery(YTPlayer).YTPPause():jQuery(YTPlayer).YTPPlay()}),MuteUnmute=jQuery("<span>"+jQuery.mbYTPlayer.controls.mute+"</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function(){0==YTPlayer.player.getVolume()?jQuery(YTPlayer).YTPUnmute():jQuery(YTPlayer).YTPMute()}),volumeBar=jQuery("<div/>").addClass("mb_YTPVolumeBar").css({display:"inline-block"});YTPlayer.volumeBar=volumeBar;var idx=jQuery("<span/>").addClass("mb_YTPTime"),vURL=data.videoURL?data.videoURL:"";vURL.indexOf("http")<0&&(vURL=jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/watch?v="+data.videoURL);var movieUrl=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title","view on YouTube").on("click",function(){window.open(vURL,"viewOnYT")}),onlyVideo=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click",function(){jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)}),progressBar=jQuery("<div/>").addClass("mb_YTPProgress").css("position","absolute").click(function(a){timeBar.css({width:a.clientX-timeBar.offset().left}),YTPlayer.timeW=a.clientX-timeBar.offset().left,YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0});var b=Math.floor(YTPlayer.player.getDuration());YTPlayer["goto"]=timeBar.outerWidth()*b/progressBar.outerWidth(),YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]),!0),YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0})}),loadedBar=jQuery("<div/>").addClass("mb_YTPLoaded").css("position","absolute"),timeBar=jQuery("<div/>").addClass("mb_YTPseekbar").css("position","absolute");progressBar.append(loadedBar).append(timeBar),buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx),data.showYTLogo&&buttonBar.append(movieUrl),(YTPlayer.isBackground||eval(YTPlayer.opt.realfullscreen)&&!YTPlayer.isBackground)&&buttonBar.append(onlyVideo),YTPlayer.controlBar.append(buttonBar).append(progressBar),YTPlayer.isBackground?jQuery("body").after(YTPlayer.controlBar):(YTPlayer.controlBar.addClass("inlinePlayer"),YTPlayer.wrapper.before(YTPlayer.controlBar)),volumeBar.simpleSlider({initialval:YTPlayer.opt.vol,scale:100,orientation:"h",callback:function(a){0==a.value?jQuery(YTPlayer).YTPMute():jQuery(YTPlayer).YTPUnmute(),YTPlayer.player.setVolume(a.value),YTPlayer.isMute||(YTPlayer.opt.vol=a.value)}})}},checkForState:function(YTPlayer){var interval=YTPlayer.opt.showControls?100:400;return clearInterval(YTPlayer.getState),jQuery.contains(document,YTPlayer)?(jQuery.mbYTPlayer.checkForStart(YTPlayer),void(YTPlayer.getState=setInterval(function(){var prog=jQuery(YTPlayer).YTPManageProgress(),$YTPlayer=jQuery(YTPlayer),data=YTPlayer.opt,startAt=YTPlayer.opt.startAt?YTPlayer.opt.startAt:1,stopAt=YTPlayer.opt.stopAt>YTPlayer.opt.startAt?YTPlayer.opt.stopAt:0;if(stopAt=stopAt<YTPlayer.player.getDuration()?stopAt:0,YTPlayer.player.time!=prog.currentTime){var YTPEvent=jQuery.Event("YTPTime");YTPEvent.time=YTPlayer.player.time,jQuery(YTPlayer).trigger(YTPEvent)}if(YTPlayer.player.time=prog.currentTime,0==YTPlayer.player.getVolume()?$YTPlayer.addClass("isMuted"):$YTPlayer.removeClass("isMuted"),YTPlayer.opt.showControls&&(prog.totalTime?YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime)+" / "+jQuery.mbYTPlayer.formatTime(prog.totalTime)):YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")),eval(YTPlayer.opt.stopMovieOnBlur)&&(document.hasFocus()?document.hasFocus()&&!YTPlayer.hasFocus&&-1!=YTPlayer.state&&0!=YTPlayer.state&&(YTPlayer.hasFocus=!0,$YTPlayer.YTPPlay()):1==YTPlayer.state&&(YTPlayer.hasFocus=!1,$YTPlayer.YTPPause())),YTPlayer.controlBar&&YTPlayer.controlBar.outerWidth()<=400&&!YTPlayer.isCompact?(YTPlayer.controlBar.addClass("compact"),YTPlayer.isCompact=!0,!YTPlayer.isMute&&YTPlayer.volumeBar&&YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)):YTPlayer.controlBar&&YTPlayer.controlBar.outerWidth()>400&&YTPlayer.isCompact&&(YTPlayer.controlBar.removeClass("compact"),YTPlayer.isCompact=!1,!YTPlayer.isMute&&YTPlayer.volumeBar&&YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)),1==YTPlayer.player.getPlayerState()&&(parseFloat(YTPlayer.player.getDuration()-1.5)<YTPlayer.player.getCurrentTime()||stopAt>0&&parseFloat(YTPlayer.player.getCurrentTime())>stopAt)){if(YTPlayer.isEnded)return;if(YTPlayer.isEnded=!0,setTimeout(function(){YTPlayer.isEnded=!1},1e3),YTPlayer.isPlayList){clearInterval(YTPlayer.getState);var YTPEnd=jQuery.Event("YTPEnd");return YTPEnd.time=YTPlayer.player.time,void jQuery(YTPlayer).trigger(YTPEnd)}data.loop?(startAt=startAt||1,YTPlayer.player.pauseVideo(),YTPlayer.player.seekTo(startAt,!0),$YTPlayer.YTPPlay()):(YTPlayer.player.pauseVideo(),YTPlayer.wrapper.CSSAnimate({opacity:0},1e3,function(){var a=jQuery.Event("YTPEnd");a.time=YTPlayer.player.time,jQuery(YTPlayer).trigger(a),YTPlayer.player.seekTo(startAt,!0),YTPlayer.isBackground||YTPlayer.opt.containment.css({background:"rgba(0,0,0,0.5) url("+YTPlayer.opt.backgroundUrl+") center center",backgroundSize:"cover"})}))}},interval))):(jQuery(YTPlayer).YTPPlayerDestroy(),clearInterval(YTPlayer.getState),void clearInterval(YTPlayer.checkForStartAt))},checkForStart:function(a){var b=jQuery(a);if(!jQuery.contains(document,a))return void jQuery(a).YTPPlayerDestroy();if(jQuery.browser.chrome&&(a.opt.quality="default"),a.player.pauseVideo(),jQuery(a).muteYTPVolume(),jQuery("#controlBar_"+a.id).remove(),a.opt.showControls&&jQuery.mbYTPlayer.buildControls(a),a.opt.addRaster){var c="dot"==a.opt.addRaster?"raster-dot":"raster";a.overlay.addClass(a.isRetina?c+" retina":c)}else a.overlay.removeClass(function(a,b){var c=b.split(" "),d=[];return jQuery.each(c,function(a,b){/raster.*/.test(b)&&d.push(b)}),d.push("retina"),d.join(" ")});a.checkForStartAt=setInterval(function(){jQuery(a).YTPMute();var c=a.opt.startAt?a.opt.startAt:1,d=a.player.getVideoLoadedFraction()>c/a.player.getDuration();if(a.player.getDuration()>0&&a.player.getCurrentTime()>=c&&d){clearInterval(a.checkForStartAt),a.isReady=!0,"function"==typeof a.opt.onReady&&a.opt.onReady(a);var e=jQuery.Event("YTPReady");jQuery(a).trigger(e),a.player.pauseVideo(),a.opt.mute||jQuery(a).YTPUnmute(),a.canTrigger=!0,a.opt.autoPlay?(b.YTPPlay(),b.css("background-image","none"),jQuery(a.playerEl).CSSAnimate({opacity:1},1e3),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},1e3)):(a.player.pauseVideo(),a.isPlayer||(jQuery(a.playerEl).CSSAnimate({opacity:1},1e3),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},1e3))),a.isPlayer&&!a.opt.autoPlay&&(a.loading.html("Ready"),setTimeout(function(){a.loading.fadeOut()},100)),a.controlBar&&a.controlBar.slideDown(1e3)}else c>=0&&a.player.seekTo(c,!0)},1e3)},formatTime:function(a){var b=Math.floor(a/60),c=Math.floor(a-60*b);return(9>=b?"0"+b:b)+" : "+(9>=c?"0"+c:c)}},jQuery.fn.toggleVolume=function(){var a=this.get(0);if(a)return a.player.isMuted()?(jQuery(a).YTPUnmute(),!0):(jQuery(a).YTPMute(),!1)},jQuery.fn.optimizeDisplay=function(){var a=this.get(0),b=a.opt,c=jQuery(a.playerEl),d={},e=a.wrapper;d.width=e.outerWidth(),d.height=e.outerHeight();var f=24,g=100,h={};b.optimizeDisplay?(h.width=d.width+d.width*f/100,h.height="16/9"==b.ratio?Math.ceil(9*d.width/16):Math.ceil(3*d.width/4),h.marginTop=-((h.height-d.height)/2),h.marginLeft=-(d.width*(f/2)/100),h.height<d.height&&(h.height=d.height+d.height*f/100,h.width="16/9"==b.ratio?Math.floor(16*d.height/9):Math.floor(4*d.height/3),h.marginTop=-(d.height*(f/2)/100),h.marginLeft=-((h.width-d.width)/2)),h.width+=g,h.height+=g,h.marginTop-=g/2,h.marginLeft-=g/2):(h.width="100%",h.height="100%",h.marginTop=0,h.marginLeft=0),c.css({width:h.width,height:h.height,marginTop:h.marginTop,marginLeft:h.marginLeft})},jQuery.shuffle=function(a){for(var b=a.slice(),c=b.length,d=c;d--;){var e=parseInt(Math.random()*c),f=b[d];b[d]=b[e],b[e]=f}return b},jQuery.fn.YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.YTPGetPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.YTPGetVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.YTPChangeMovie=jQuery.mbYTPlayer.changeMovie,jQuery.fn.YTPPlayerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.YTPPlay=jQuery.mbYTPlayer.play,jQuery.fn.YTPTogglePlay=jQuery.mbYTPlayer.togglePlay,jQuery.fn.YTPStop=jQuery.mbYTPlayer.stop,jQuery.fn.YTPPause=jQuery.mbYTPlayer.pause,jQuery.fn.YTPSeekTo=jQuery.mbYTPlayer.seekTo,jQuery.fn.YTPlaylist=jQuery.mbYTPlayer.playlist,jQuery.fn.YTPPlayNext=jQuery.mbYTPlayer.playNext,jQuery.fn.YTPPlayPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.YTPMute=jQuery.mbYTPlayer.mute,jQuery.fn.YTPUnmute=jQuery.mbYTPlayer.unmute,jQuery.fn.YTPToggleVolume=jQuery.mbYTPlayer.toggleVolume,jQuery.fn.YTPSetVolume=jQuery.mbYTPlayer.setVolume,jQuery.fn.YTPGetVideoData=jQuery.mbYTPlayer.getVideoData,jQuery.fn.YTPFullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.YTPToggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.YTPSetVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.YTPManageProgress=jQuery.mbYTPlayer.manageProgress,jQuery.fn.YTPApplyFilter=jQuery.mbYTPlayer.applyFilter,jQuery.fn.YTPApplyFilters=jQuery.mbYTPlayer.applyFilters,jQuery.fn.YTPToggleFilter=jQuery.mbYTPlayer.toggleFilter,jQuery.fn.YTPToggleFilters=jQuery.mbYTPlayer.toggleFilters,jQuery.fn.YTPRemoveFilter=jQuery.mbYTPlayer.removeFilter,jQuery.fn.YTPDisableFilters=jQuery.mbYTPlayer.disableFilters,jQuery.fn.YTPEnableFilters=jQuery.mbYTPlayer.enableFilters,jQuery.fn.mb_YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.playNext=jQuery.mbYTPlayer.playNext,jQuery.fn.playPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.changeMovie=jQuery.mbYTPlayer.changeMovie,jQuery.fn.getVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.getPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.playerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.fullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.buildYTPControls=jQuery.mbYTPlayer.buildControls,jQuery.fn.playYTP=jQuery.mbYTPlayer.play,jQuery.fn.toggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.stopYTP=jQuery.mbYTPlayer.stop,jQuery.fn.pauseYTP=jQuery.mbYTPlayer.pause,jQuery.fn.seekToYTP=jQuery.mbYTPlayer.seekTo,jQuery.fn.muteYTPVolume=jQuery.mbYTPlayer.mute,jQuery.fn.unmuteYTPVolume=jQuery.mbYTPlayer.unmute,jQuery.fn.setYTPVolume=jQuery.mbYTPlayer.setVolume,jQuery.fn.setVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.manageYTPProgress=jQuery.mbYTPlayer.manageProgress,jQuery.fn.YTPGetDataFromFeed=jQuery.mbYTPlayer.getVideoData}(jQuery,ytp),jQuery.support.CSStransition=function(){var a=document.body||document.documentElement,b=a.style;return void 0!==b.transition||void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.MsTransition||void 0!==b.OTransition}(),jQuery.CSS={name:"mb.CSSAnimate",author:"Matteo Bicocchi",version:"2.0.0",transitionEnd:"transitionEnd",sfx:"",filters:{blur:{min:0,max:100,unit:"px"},brightness:{min:0,max:400,unit:"%"},contrast:{min:0,max:400,unit:"%"},grayscale:{min:0,max:100,unit:"%"},hueRotate:{min:0,max:360,unit:"deg"},invert:{min:0,max:100,unit:"%"},saturate:{min:0,max:400,unit:"%"},sepia:{min:0,max:100,unit:"%"}},normalizeCss:function(a){var b=jQuery.extend(!0,{},a);jQuery.browser.webkit||jQuery.browser.opera?jQuery.CSS.sfx="-webkit-":jQuery.browser.mozilla?jQuery.CSS.sfx="-moz-":jQuery.browser.msie&&(jQuery.CSS.sfx="-ms-");for(var c in b){"transform"===c&&(b[jQuery.CSS.sfx+"transform"]=b[c],delete b[c]),"transform-origin"===c&&(b[jQuery.CSS.sfx+"transform-origin"]=a[c],delete b[c]),"filter"!==c||jQuery.browser.mozilla||(b[jQuery.CSS.sfx+"filter"]=a[c],delete b[c]),"blur"===c&&setFilter(b,"blur",a[c]),"brightness"===c&&setFilter(b,"brightness",a[c]),"contrast"===c&&setFilter(b,"contrast",a[c]),"grayscale"===c&&setFilter(b,"grayscale",a[c]),"hueRotate"===c&&setFilter(b,"hueRotate",a[c]),
"invert"===c&&setFilter(b,"invert",a[c]),"saturate"===c&&setFilter(b,"saturate",a[c]),"sepia"===c&&setFilter(b,"sepia",a[c]);var d="";"x"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateX("+setUnit(a[c],"px")+")",delete b[c]),"y"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateY("+setUnit(a[c],"px")+")",delete b[c]),"z"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" translateZ("+setUnit(a[c],"px")+")",delete b[c]),"rotate"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotate("+setUnit(a[c],"deg")+")",delete b[c]),"rotateX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateX("+setUnit(a[c],"deg")+")",delete b[c]),"rotateY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateY("+setUnit(a[c],"deg")+")",delete b[c]),"rotateZ"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" rotateZ("+setUnit(a[c],"deg")+")",delete b[c]),"scale"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scale("+setUnit(a[c],"")+")",delete b[c]),"scaleX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleX("+setUnit(a[c],"")+")",delete b[c]),"scaleY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleY("+setUnit(a[c],"")+")",delete b[c]),"scaleZ"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" scaleZ("+setUnit(a[c],"")+")",delete b[c]),"skew"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skew("+setUnit(a[c],"deg")+")",delete b[c]),"skewX"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skewX("+setUnit(a[c],"deg")+")",delete b[c]),"skewY"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" skewY("+setUnit(a[c],"deg")+")",delete b[c]),"perspective"===c&&(d=jQuery.CSS.sfx+"transform",b[d]=b[d]||"",b[d]+=" perspective("+setUnit(a[c],"px")+")",delete b[c])}return b},getProp:function(a){var b=[];for(var c in a)b.indexOf(c)<0&&b.push(uncamel(c));return b.join(",")},animate:function(a,b,c,d,e){return this.each(function(){function f(){g.called=!0,g.CSSAIsRunning=!1,h.off(jQuery.CSS.transitionEnd+"."+g.id),clearTimeout(g.timeout),h.css(jQuery.CSS.sfx+"transition",""),"function"==typeof e&&e.apply(g),"function"==typeof g.CSSqueue&&(g.CSSqueue(),g.CSSqueue=null)}var g=this,h=jQuery(this);g.id=g.id||"CSSA_"+(new Date).getTime();var i=i||{type:"noEvent"};if(g.CSSAIsRunning&&g.eventType==i.type&&!jQuery.browser.msie&&jQuery.browser.version<=9)return void(g.CSSqueue=function(){h.CSSAnimate(a,b,c,d,e)});if(g.CSSqueue=null,g.eventType=i.type,0!==h.length&&a){if(a=jQuery.normalizeCss(a),g.CSSAIsRunning=!0,"function"==typeof b&&(e=b,b=jQuery.fx.speeds._default),"function"==typeof c&&(d=c,c=0),"string"==typeof c&&(e=c,c=0),"function"==typeof d&&(e=d,d="cubic-bezier(0.65,0.03,0.36,0.72)"),"string"==typeof b)for(var j in jQuery.fx.speeds){if(b==j){b=jQuery.fx.speeds[j];break}b=jQuery.fx.speeds._default}if(b||(b=jQuery.fx.speeds._default),"string"==typeof e&&(d=e,e=null),!jQuery.support.CSStransition){for(var k in a){if("transform"===k&&delete a[k],"filter"===k&&delete a[k],"transform-origin"===k&&delete a[k],"auto"===a[k]&&delete a[k],"x"===k){var l=a[k],m="left";a[m]=l,delete a[k]}if("y"===k){var l=a[k],m="top";a[m]=l,delete a[k]}("-ms-transform"===k||"-ms-filter"===k)&&delete a[k]}return void h.delay(c).animate(a,b,e)}var n={"default":"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};n[d]&&(d=n[d]),h.off(jQuery.CSS.transitionEnd+"."+g.id);var o=jQuery.CSS.getProp(a),p={};jQuery.extend(p,a),p[jQuery.CSS.sfx+"transition-property"]=o,p[jQuery.CSS.sfx+"transition-duration"]=b+"ms",p[jQuery.CSS.sfx+"transition-delay"]=c+"ms",p[jQuery.CSS.sfx+"transition-timing-function"]=d,setTimeout(function(){h.one(jQuery.CSS.transitionEnd+"."+g.id,f),h.css(p)},1),g.timeout=setTimeout(function(){return g.called||!e?(g.called=!1,void(g.CSSAIsRunning=!1)):(h.css(jQuery.CSS.sfx+"transition",""),e.apply(g),g.CSSAIsRunning=!1,void("function"==typeof g.CSSqueue&&(g.CSSqueue(),g.CSSqueue=null)))},b+c+10)}})}},jQuery.fn.CSSAnimate=jQuery.CSS.animate,jQuery.normalizeCss=jQuery.CSS.normalizeCss,jQuery.fn.css3=function(a){return this.each(function(){var b=jQuery(this),c=jQuery.normalizeCss(a);b.css(c)})};var nAgt=navigator.userAgent;if(!jQuery.browser){jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.msie=!1,jQuery.browser.ua=nAgt,jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion}jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.isMobile=jQuery.browser.mobile,jQuery.isTablet=jQuery.browser.mobile&&jQuery(window).width()>765,jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt),!function(a){/iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase());var b="ontouchstart"in window||window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture||window.DocumentTouch&&document instanceof DocumentTouch||!1;a.simpleSlider={defaults:{initialval:0,scale:100,orientation:"h",readonly:!1,callback:!1},events:{start:b?"touchstart":"mousedown",end:b?"touchend":"mouseup",move:b?"touchmove":"mousemove"},init:function(c){return this.each(function(){var d=this,e=a(d);e.addClass("simpleSlider"),d.opt={},a.extend(d.opt,a.simpleSlider.defaults,c),a.extend(d.opt,e.data());var f="h"==d.opt.orientation?"horizontal":"vertical",g=a("<div/>").addClass("level").addClass(f);e.prepend(g),d.level=g,e.css({cursor:"default"}),"auto"==d.opt.scale&&(d.opt.scale=a(d).outerWidth()),e.updateSliderVal(),d.opt.readonly||(e.on(a.simpleSlider.events.start,function(a){b&&(a=a.changedTouches[0]),d.canSlide=!0,e.updateSliderVal(a),e.css({cursor:"col-resize"}),a.preventDefault(),a.stopPropagation()}),a(document).on(a.simpleSlider.events.move,function(c){b&&(c=c.changedTouches[0]),d.canSlide&&(a(document).css({cursor:"default"}),e.updateSliderVal(c),c.preventDefault(),c.stopPropagation())}).on(a.simpleSlider.events.end,function(){a(document).css({cursor:"auto"}),d.canSlide=!1,e.css({cursor:"auto"})}))})},updateSliderVal:function(b){function c(a,b){return Math.floor(100*a/b)}var d=this,e=d.get(0);e.opt.initialval="number"==typeof e.opt.initialval?e.opt.initialval:e.opt.initialval(e);var f=a(e).outerWidth(),g=a(e).outerHeight();e.x="object"==typeof b?b.clientX+document.body.scrollLeft-d.offset().left:"number"==typeof b?b*f/e.opt.scale:e.opt.initialval*f/e.opt.scale,e.y="object"==typeof b?b.clientY+document.body.scrollTop-d.offset().top:"number"==typeof b?(e.opt.scale-e.opt.initialval-b)*g/e.opt.scale:e.opt.initialval*g/e.opt.scale,e.y=d.outerHeight()-e.y,e.scaleX=e.x*e.opt.scale/f,e.scaleY=e.y*e.opt.scale/g,e.outOfRangeX=e.scaleX>e.opt.scale?e.scaleX-e.opt.scale:e.scaleX<0?e.scaleX:0,e.outOfRangeY=e.scaleY>e.opt.scale?e.scaleY-e.opt.scale:e.scaleY<0?e.scaleY:0,e.outOfRange="h"==e.opt.orientation?e.outOfRangeX:e.outOfRangeY,e.value="undefined"!=typeof b?"h"==e.opt.orientation?e.x>=d.outerWidth()?e.opt.scale:e.x<=0?0:e.scaleX:e.y>=d.outerHeight()?e.opt.scale:e.y<=0?0:e.scaleY:"h"==e.opt.orientation?e.scaleX:e.scaleY,"h"==e.opt.orientation?e.level.width(c(e.x,f)+"%"):e.level.height(c(e.y,g)),"function"==typeof e.opt.callback&&e.opt.callback(e)}},a.fn.simpleSlider=a.simpleSlider.init,a.fn.updateSliderVal=a.simpleSlider.updateSliderVal}(jQuery),!function(a){a.mbCookie={set:function(a,b,c,d){b=JSON.stringify(b),c||(c=7),d=d?"; domain="+d:"";var e,f=new Date;f.setTime(f.getTime()+864e5*c),e="; expires="+f.toGMTString(),document.cookie=a+"="+b+e+"; path=/"+d},get:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return JSON.parse(e.substring(b.length,e.length))}return null},remove:function(b){a.mbCookie.set(b,"",-1)}},a.mbStorage={set:function(a,b){b=JSON.stringify(b),localStorage.setItem(a,b)},get:function(a){return localStorage[a]?JSON.parse(localStorage[a]):null},remove:function(a){a?localStorage.removeItem(a):localStorage.clear()}}}(jQuery);
;
jQuery(document).ready(function($) {
     $(".inv_video_bg").mb_YTPlayer();
});;
/**
 * @file
 * JavaScript API for the History module, with client-side caching.
 *
 * May only be loaded for authenticated users, with the History module enabled.
 */

(function ($, Drupal, drupalSettings, storage) {

  'use strict';

  var currentUserID = parseInt(drupalSettings.user.uid, 10);

  // Any comment that is older than 30 days is automatically considered read,
  // so for these we don't need to perform a request at all!
  var thirtyDaysAgo = Math.round(new Date().getTime() / 1000) - 30 * 24 * 60 * 60;

  // Use the data embedded in the page, if available.
  var embeddedLastReadTimestamps = false;
  if (drupalSettings.history && drupalSettings.history.lastReadTimestamps) {
    embeddedLastReadTimestamps = drupalSettings.history.lastReadTimestamps;
  }

  /**
   * @namespace
   */
  Drupal.history = {

    /**
     * Fetch "last read" timestamps for the given nodes.
     *
     * @param {Array} nodeIDs
     *   An array of node IDs.
     * @param {function} callback
     *   A callback that is called after the requested timestamps were fetched.
     */
    fetchTimestamps: function (nodeIDs, callback) {
      // Use the data embedded in the page, if available.
      if (embeddedLastReadTimestamps) {
        callback();
        return;
      }

      $.ajax({
        url: Drupal.url('history/get_node_read_timestamps'),
        type: 'POST',
        data: {'node_ids[]': nodeIDs},
        dataType: 'json',
        success: function (results) {
          for (var nodeID in results) {
            if (results.hasOwnProperty(nodeID)) {
              storage.setItem('Drupal.history.' + currentUserID + '.' + nodeID, results[nodeID]);
            }
          }
          callback();
        }
      });
    },

    /**
     * Get the last read timestamp for the given node.
     *
     * @param {number|string} nodeID
     *   A node ID.
     *
     * @return {number}
     *   A UNIX timestamp.
     */
    getLastRead: function (nodeID) {
      // Use the data embedded in the page, if available.
      if (embeddedLastReadTimestamps && embeddedLastReadTimestamps[nodeID]) {
        return parseInt(embeddedLastReadTimestamps[nodeID], 10);
      }
      return parseInt(storage.getItem('Drupal.history.' + currentUserID + '.' + nodeID) || 0, 10);
    },

    /**
     * Marks a node as read, store the last read timestamp client-side.
     *
     * @param {number|string} nodeID
     *   A node ID.
     */
    markAsRead: function (nodeID) {
      $.ajax({
        url: Drupal.url('history/' + nodeID + '/read'),
        type: 'POST',
        dataType: 'json',
        success: function (timestamp) {
          // If the data is embedded in the page, don't store on the client
          // side.
          if (embeddedLastReadTimestamps && embeddedLastReadTimestamps[nodeID]) {
            return;
          }

          storage.setItem('Drupal.history.' + currentUserID + '.' + nodeID, timestamp);
        }
      });
    },

    /**
     * Determines whether a server check is necessary.
     *
     * Any content that is >30 days old never gets a "new" or "updated"
     * indicator. Any content that was published before the oldest known reading
     * also never gets a "new" or "updated" indicator, because it must've been
     * read already.
     *
     * @param {number|string} nodeID
     *   A node ID.
     * @param {number} contentTimestamp
     *   The time at which some content (e.g. a comment) was published.
     *
     * @return {bool}
     *   Whether a server check is necessary for the given node and its
     *   timestamp.
     */
    needsServerCheck: function (nodeID, contentTimestamp) {
      // First check if the content is older than 30 days, then we can bail
      // early.
      if (contentTimestamp < thirtyDaysAgo) {
        return false;
      }

      // Use the data embedded in the page, if available.
      if (embeddedLastReadTimestamps && embeddedLastReadTimestamps[nodeID]) {
        return contentTimestamp > parseInt(embeddedLastReadTimestamps[nodeID], 10);
      }

      var minLastReadTimestamp = parseInt(storage.getItem('Drupal.history.' + currentUserID + '.' + nodeID) || 0, 10);
      return contentTimestamp > minLastReadTimestamp;
    }
  };

})(jQuery, Drupal, drupalSettings, window.localStorage);
;
/**
 * @file
 * Marks the nodes listed in drupalSettings.history.nodesToMarkAsRead as read.
 *
 * Uses the History module JavaScript API.
 *
 * @see Drupal.history
 */

(function (window, Drupal, drupalSettings) {

  'use strict';

  // When the window's "load" event is triggered, mark all enumerated nodes as
  // read. This still allows for Drupal behaviors (which are triggered on the
  // "DOMContentReady" event) to add "new" and "updated" indicators.
  window.addEventListener('load', function () {
    if (drupalSettings.history && drupalSettings.history.nodesToMarkAsRead) {
      Object.keys(drupalSettings.history.nodesToMarkAsRead).forEach(Drupal.history.markAsRead);
    }
  });

})(window, Drupal, drupalSettings);
;
/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 4.6.4 (26.11.2014)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/


function revslider_showDoubleJqueryError(e){var t="Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";t+="<br> This includes make eliminates the revolution slider libraries, and make it not work.";t+="<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";t+="<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";t="<span style='font-size:16px;color:#BC0C06;'>"+t+"</span>";jQuery(e).show().html(t)}(function(e,t){function n(){var e=false;if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)){if(navigator.userAgent.match(/OS 4_\d like Mac OS X/i)){e=true}}else{e=false}return e}function r(r,i){if(r==t)return false;if(r.data("aimg")!=t){if(r.data("aie8")=="enabled"&&a(8)||r.data("amobile")=="enabled"&&J())r.html('<img class="tp-slider-alternative-image" src="'+r.data("aimg")+'">')}if(i.navigationStyle=="preview1"||i.navigationStyle=="preview3"||i.navigationStyle=="preview4"){i.soloArrowLeftHalign="left";i.soloArrowLeftValign="center";i.soloArrowLeftHOffset=0;i.soloArrowLeftVOffset=0;i.soloArrowRightHalign="right";i.soloArrowRightValign="center";i.soloArrowRightHOffset=0;i.soloArrowRightVOffset=0;i.navigationArrows="solo"}if(i.simplifyAll=="on"&&(a(8)||n())){r.find(".tp-caption").each(function(){var t=e(this);t.removeClass("customin").removeClass("customout").addClass("fadein").addClass("fadeout");t.data("splitin","");t.data("speed",400)});r.find(">ul>li").each(function(){var t=e(this);t.data("transition","fade");t.data("masterspeed",500);t.data("slotamount",1);var n=t.find(">img").first();n.data("kenburns","off")})}i.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);if(i.fullWidth!="on"&&i.fullScreen!="on")i.autoHeight="off";if(i.fullScreen=="on")i.autoHeight="on";if(i.fullWidth!="on"&&i.fullScreen!="on")forceFulWidth="off";if(i.fullWidth=="on"&&i.autoHeight=="off")r.css({maxHeight:i.startheight+"px"});if(J()&&i.hideThumbsOnMobile=="on"&&i.navigationType=="thumb")i.navigationType="none";if(J()&&i.hideBulletsOnMobile=="on"&&i.navigationType=="bullet")i.navigationType="none";if(J()&&i.hideBulletsOnMobile=="on"&&i.navigationType=="both")i.navigationType="none";if(J()&&i.hideArrowsOnMobile=="on")i.navigationArrows="none";if(i.forceFullWidth=="on"&&r.closest(".forcefullwidth_wrapper_tp_banner").length==0){var f=r.parent().offset().left;var v=r.parent().css("marginBottom");var m=r.parent().css("marginTop");if(v==t)v=0;if(m==t)m=0;r.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:'+m+";margin-bottom:"+v+'" class="forcefullwidth_wrapper_tp_banner"></div>');r.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+r.height()+'px"></div>');r.css({backgroundColor:r.parent().css("backgroundColor"),backgroundImage:r.parent().css("backgroundImage")});r.parent().css({left:0-f+"px",position:"absolute",width:e(window).width()});i.width=e(window).width()}try{if(i.hideThumbsUnderResolution>e(window).width()&&i.hideThumbsUnderResolution!=0){r.parent().find(".tp-bullets.tp-thumbs").css({display:"none"})}else{r.parent().find(".tp-bullets.tp-thumbs").css({display:"block"})}}catch(g){}if(!r.hasClass("revslider-initialised")){r.addClass("revslider-initialised");if(r.attr("id")==t)r.attr("id","revslider-"+Math.round(Math.random()*1e3+5));i.firefox13=false;i.ie=!e.support.opacity;i.ie9=document.documentMode==9;i.origcd=i.delay;var b=e.fn.jquery.split("."),w=parseFloat(b[0]),E=parseFloat(b[1]),S=parseFloat(b[2]||"0");if(w==1&&E<7){r.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+b+" <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>")}if(w>1)i.ie=false;if(!e.support.transition)e.fn.transition=e.fn.animate;r.find(".caption").each(function(){e(this).addClass("tp-caption")});if(J()){r.find(".tp-caption").each(function(){var t=e(this);if(t.data("autoplayonlyfirsttime")==true||t.data("autoplayonlyfirsttime")=="true")t.data("autoplayonlyfirsttime","false");if(t.data("autoplay")==true||t.data("autoplay")=="true")t.data("autoplay",false)})}var x=0;var T=0;var C=0;var k="http";if(location.protocol==="https:"){k="https"}r.find(".tp-caption").each(function(n){try{if((e(this).data("ytid")!=t||e(this).find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&x==0){x=1;var r=document.createElement("script");var i="https";r.src=i+"://www.youtube.com/iframe_api";var s=document.getElementsByTagName("script")[0];var o=true;e("head").find("*").each(function(){if(e(this).attr("src")==i+"://www.youtube.com/iframe_api")o=false});if(o){s.parentNode.insertBefore(r,s)}}}catch(u){}try{if((e(this).data("vimeoid")!=t||e(this).find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&T==0){T=1;var a=document.createElement("script");a.src=k+"://a.vimeocdn.com/js/froogaloop2.min.js";var s=document.getElementsByTagName("script")[0];var o=true;e("head").find("*").each(function(){if(e(this).attr("src")==k+"://a.vimeocdn.com/js/froogaloop2.min.js")o=false});if(o)s.parentNode.insertBefore(a,s)}}catch(u){}try{if(e(this).data("videomp4")!=t||e(this).data("videowebm")!=t){}}catch(u){}});r.find(".tp-caption video").each(function(t){e(this).removeClass("video-js").removeClass("vjs-default-skin");e(this).attr("preload","");e(this).css({display:"none"})});r.find(">ul:first-child >li").each(function(){var t=e(this);t.data("origindex",t.index())});if(i.shuffle=="on"){var L=new Object,A=r.find(">ul:first-child >li:first-child");L.fstransition=A.data("fstransition");L.fsmasterspeed=A.data("fsmasterspeed");L.fsslotamount=A.data("fsslotamount");for(var O=0;O<r.find(">ul:first-child >li").length;O++){var M=Math.round(Math.random()*r.find(">ul:first-child >li").length);r.find(">ul:first-child >li:eq("+M+")").prependTo(r.find(">ul:first-child"))}var _=r.find(">ul:first-child >li:first-child");_.data("fstransition",L.fstransition);_.data("fsmasterspeed",L.fsmasterspeed);_.data("fsslotamount",L.fsslotamount)}i.slots=4;i.act=-1;i.next=0;if(i.startWithSlide!=t)i.next=i.startWithSlide;var D=o("#")[0];if(D.length<9){if(D.split("slide").length>1){var P=parseInt(D.split("slide")[1],0);if(P<1)P=1;if(P>r.find(">ul:first >li").length)P=r.find(">ul:first >li").length;i.next=P-1}}i.firststart=1;if(i.navigationHOffset==t)i.navOffsetHorizontal=0;if(i.navigationVOffset==t)i.navOffsetVertical=0;r.append('<div class="tp-loader '+i.spinner+'">'+'<div class="dot1"></div>'+'<div class="dot2"></div>'+'<div class="bounce1"></div>'+'<div class="bounce2"></div>'+'<div class="bounce3"></div>'+"</div>");if(r.find(".tp-bannertimer").length==0)r.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');var H=r.find(".tp-bannertimer");if(H.length>0){H.css({width:"0%"})}r.addClass("tp-simpleresponsive");i.container=r;i.slideamount=r.find(">ul:first >li").length;if(r.height()==0)r.height(i.startheight);if(i.startwidth==t||i.startwidth==0)i.startwidth=r.width();if(i.startheight==t||i.startheight==0)i.startheight=r.height();i.width=r.width();i.height=r.height();i.bw=i.startwidth/r.width();i.bh=i.startheight/r.height();if(i.width!=i.startwidth){i.height=Math.round(i.startheight*(i.width/i.startwidth));r.height(i.height)}if(i.shadow!=0){r.parent().append('<div class="tp-bannershadow tp-shadow'+i.shadow+'"></div>');var f=0;if(i.forceFullWidth=="on")f=0-i.container.parent().offset().left;r.parent().find(".tp-bannershadow").css({width:i.width,left:f})}r.find("ul").css({display:"none"});var B=r;r.find("ul").css({display:"block"});y(r,i);if(i.parallax!="off")et(r,i);if(i.slideamount>1)l(r,i);if(i.slideamount>1&&i.navigationType=="thumb")nt(r,i);if(i.slideamount>1)c(r,i);if(i.keyboardNavigation=="on")h(r,i);p(r,i);if(i.hideThumbs>0)d(r,i);setTimeout(function(){N(r,i)},i.startDelay);i.startDelay=0;if(i.slideamount>1)$(r,i);setTimeout(function(){r.trigger("revolution.slide.onloaded")},500);e("body").data("rs-fullScreenMode",false);e(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange",function(){e("body").data("rs-fullScreenMode",!e("body").data("rs-fullScreenMode"));if(e("body").data("rs-fullScreenMode")){setTimeout(function(){e(window).trigger("resize")},200)}});var j="resize.revslider-"+r.attr("id");e(window).on(j,function(){if(r==t)return false;if(e("body").find(r)!=0)if(i.forceFullWidth=="on"){var n=i.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;i.container.parent().css({left:0-n+"px",width:e(window).width()})}if(r.outerWidth(true)!=i.width||r.is(":hidden")){u(r,i)}});try{if(i.hideThumbsUnderResoluition!=0&&i.navigationType=="thumb"){if(i.hideThumbsUnderResoluition>e(window).width())e(".tp-bullets").css({display:"none"});else e(".tp-bullets").css({display:"block"})}}catch(g){}r.find(".tp-scrollbelowslider").on("click",function(){var t=0;try{t=e("body").find(i.fullScreenOffsetContainer).height()}catch(n){}try{t=t-parseInt(e(this).data("scrolloffset"),0)}catch(n){}e("body,html").animate({scrollTop:r.offset().top+r.find(">ul >li").height()-t+"px"},{duration:400})});var F=r.parent();if(e(window).width()<i.hideSliderAtLimit){r.trigger("stoptimer");if(F.css("display")!="none")F.data("olddisplay",F.css("display"));F.css({display:"none"})}s(r,i)}}e.fn.extend({revolution:function(n){var i={delay:9e3,startheight:500,startwidth:960,fullScreenAlignForce:"off",autoHeight:"off",hideTimerBar:"off",hideThumbs:200,hideNavDelayOnMobile:1500,thumbWidth:100,thumbHeight:50,thumbAmount:3,navigationType:"bullet",navigationArrows:"solo",navigationInGrid:"off",hideThumbsOnMobile:"off",hideBulletsOnMobile:"off",hideArrowsOnMobile:"off",hideThumbsUnderResoluition:0,navigationStyle:"round",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,keyboardNavigation:"on",touchenabled:"on",onHoverStop:"on",stopAtSlide:-1,stopAfterLoops:-1,hideCaptionAtLimit:0,hideAllCaptionAtLimit:0,hideSliderAtLimit:0,shadow:0,fullWidth:"off",fullScreen:"off",minFullScreenHeight:0,fullScreenOffsetContainer:"",fullScreenOffset:"0",dottedOverlay:"none",forceFullWidth:"off",spinner:"spinner0",swipe_treshold:75,swipe_min_touches:1,drag_block_vertical:false,isJoomla:false,parallax:"off",parallaxLevels:[10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],parallaxBgFreeze:"off",parallaxOpacity:"on",parallaxDisableOnMobile:"off",panZoomDisableOnMobile:"off",simplifyAll:"on",minHeight:0,nextSlideOnWindowFocus:"off",startDelay:0};n=e.extend({},i,n);return this.each(function(){if(window.tplogs==true)try{console.groupCollapsed("Slider Revolution 4.6.3 Initialisation on "+e(this).attr("id"));console.groupCollapsed("Used Options:");console.info(n);console.groupEnd();console.groupCollapsed("Tween Engine:")}catch(i){}if(punchgs.TweenLite==t){if(window.tplogs==true)try{console.error("GreenSock Engine Does not Exist!")}catch(i){}return false}punchgs.force3D=true;if(window.tplogs==true)try{console.info("GreenSock Engine Version in Slider Revolution:"+punchgs.TweenLite.version)}catch(i){}if(n.simplifyAll=="on"){}else{punchgs.TweenLite.lagSmoothing(1e3,16);punchgs.force3D="true"}if(window.tplogs==true)try{console.groupEnd();console.groupEnd()}catch(i){}r(e(this),n)})},revscroll:function(n){return this.each(function(){var r=e(this);if(r!=t&&r.length>0&&e("body").find("#"+r.attr("id")).length>0)e("body,html").animate({scrollTop:r.offset().top+r.find(">ul >li").height()-n+"px"},{duration:400})})},revredraw:function(n){return this.each(function(){var n=e(this);if(n!=t&&n.length>0&&e("body").find("#"+n.attr("id")).length>0){var r=n.parent().find(".tp-bannertimer");var i=r.data("opt");u(n,i)}})},revkill:function(n){var r=this,i=e(this);if(i!=t&&i.length>0&&e("body").find("#"+i.attr("id")).length>0){i.data("conthover",1);i.data("conthover-changed",1);i.trigger("revolution.slide.onpause");var s=i.parent().find(".tp-bannertimer");var o=s.data("opt");o.bannertimeronpause=true;i.trigger("stoptimer");punchgs.TweenLite.killTweensOf(i.find("*"),false);punchgs.TweenLite.killTweensOf(i,false);i.unbind("hover, mouseover, mouseenter,mouseleave, resize");var u="resize.revslider-"+i.attr("id");e(window).off(u);i.find("*").each(function(){var n=e(this);n.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer");n.off("on, hover, mouseenter,mouseleave,mouseover, resize");n.data("mySplitText",null);n.data("ctl",null);if(n.data("tween")!=t)n.data("tween").kill();if(n.data("kenburn")!=t)n.data("kenburn").kill();n.remove();n.empty();n=null});punchgs.TweenLite.killTweensOf(i.find("*"),false);punchgs.TweenLite.killTweensOf(i,false);s.remove();try{i.closest(".forcefullwidth_wrapper_tp_banner").remove()}catch(a){}try{i.closest(".rev_slider_wrapper").remove()}catch(a){}try{i.remove()}catch(a){}i.empty();i.html();i=null;o=null;delete r.container;delete r.opt;return true}else{return false}},revpause:function(n){return this.each(function(){var n=e(this);if(n!=t&&n.length>0&&e("body").find("#"+n.attr("id")).length>0){n.data("conthover",1);n.data("conthover-changed",1);n.trigger("revolution.slide.onpause");var r=n.parent().find(".tp-bannertimer");var i=r.data("opt");i.bannertimeronpause=true;n.trigger("stoptimer")}})},revresume:function(n){return this.each(function(){var n=e(this);if(n!=t&&n.length>0&&e("body").find("#"+n.attr("id")).length>0){n.data("conthover",0);n.data("conthover-changed",1);n.trigger("revolution.slide.onresume");var r=n.parent().find(".tp-bannertimer");var i=r.data("opt");i.bannertimeronpause=false;n.trigger("starttimer")}})},revnext:function(n){return this.each(function(){var n=e(this);if(n!=t&&n.length>0&&e("body").find("#"+n.attr("id")).length>0)n.parent().find(".tp-rightarrow").click()})},revprev:function(n){return this.each(function(){var n=e(this);if(n!=t&&n.length>0&&e("body").find("#"+n.attr("id")).length>0)n.parent().find(".tp-leftarrow").click()})},revmaxslide:function(t){return e(this).find(">ul:first-child >li").length},revcurrentslide:function(n){var r=e(this);if(r!=t&&r.length>0&&e("body").find("#"+r.attr("id")).length>0){var i=r.parent().find(".tp-bannertimer");var s=i.data("opt");return s.act}},revlastslide:function(n){var r=e(this);if(r!=t&&r.length>0&&e("body").find("#"+r.attr("id")).length>0){var i=r.parent().find(".tp-bannertimer");var s=i.data("opt");return s.lastslide}},revshowslide:function(n){return this.each(function(){var r=e(this);if(r!=t&&r.length>0&&e("body").find("#"+r.attr("id")).length>0){r.data("showus",n);r.parent().find(".tp-rightarrow").click()}})}});var i=function(){var e,t,n={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};for(e in n){if(e in document){t=n[e];break}}return function(n){if(n)document.addEventListener(t,n);return!document[e]}}();var s=function(n,r){var i=document.documentMode===t,s=window.chrome;if(i&&!s){e(window).on("focusin",function(){if(n==t)return false;setTimeout(function(){if(r.nextSlideOnWindowFocus=="on")n.revnext();n.revredraw()},300)}).on("focusout",function(){})}else{if(window.addEventListener){window.addEventListener("focus",function(e){if(n==t)return false;setTimeout(function(){if(r.nextSlideOnWindowFocus=="on")n.revnext();n.revredraw()},300)},false);window.addEventListener("blur",function(e){},false)}else{window.attachEvent("focus",function(e){setTimeout(function(){if(n==t)return false;if(r.nextSlideOnWindowFocus=="on")n.revnext();n.revredraw()},300)});window.attachEvent("blur",function(e){})}}};var o=function(e){var t=[],n;var r=window.location.href.slice(window.location.href.indexOf(e)+1).split("_");for(var i=0;i<r.length;i++){r[i]=r[i].replace("%3D","=");n=r[i].split("=");t.push(n[0]);t[n[0]]=n[1]}return t};var u=function(n,r){if(n==t)return false;try{if(r.hideThumbsUnderResoluition!=0&&r.navigationType=="thumb"){if(r.hideThumbsUnderResoluition>e(window).width())e(".tp-bullets").css({display:"none"});else e(".tp-bullets").css({display:"block"})}}catch(i){}n.find(".defaultimg").each(function(t){g(e(this),r)});var s=n.parent();if(e(window).width()<r.hideSliderAtLimit){n.trigger("stoptimer");if(s.css("display")!="none")s.data("olddisplay",s.css("display"));s.css({display:"none"})}else{if(n.is(":hidden")){if(s.data("olddisplay")!=t&&s.data("olddisplay")!="undefined"&&s.data("olddisplay")!="none")s.css({display:s.data("olddisplay")});else s.css({display:"block"});n.trigger("restarttimer");setTimeout(function(){u(n,r)},150)}}var o=0;if(r.forceFullWidth=="on")o=0-r.container.parent().offset().left;try{n.parent().find(".tp-bannershadow").css({width:r.width,left:o})}catch(i){}var a=n.find(">ul >li:eq("+r.act+") .slotholder");var f=n.find(">ul >li:eq("+r.next+") .slotholder");E(n,r,n);punchgs.TweenLite.set(f.find(".defaultimg"),{opacity:0});a.find(".defaultimg").css({opacity:1});f.find(".defaultimg").each(function(){var i=e(this);if(r.panZoomDisableOnMobile=="on"){}else{if(i.data("kenburn")!=t){i.data("kenburn").restart();Q(n,r,true)}}});var l=n.find(">ul >li:eq("+r.next+")");var c=n.parent().find(".tparrows");if(c.hasClass("preview2"))c.css({width:parseInt(c.css("minWidth"),0)});j(l,r,true);v(n,r)};var a=function(t,n){var r=e('<div style="display:none;"/>').appendTo(e("body"));r.html("<!--[if "+(n||"")+" IE "+(t||"")+"]><a>&nbsp;</a><![endif]-->");var i=r.find("a").length;r.remove();return i};var f=function(e,t){if(e.next==t.find(">ul >li").length-1){e.looptogo=e.looptogo-1;if(e.looptogo<=0)e.stopLoop="on"}N(t,e)};var l=function(t,n){var r="hidebullets";if(n.hideThumbs==0)r="";if(n.navigationType=="bullet"||n.navigationType=="both"){t.parent().append('<div class="tp-bullets '+r+" simplebullets "+n.navigationStyle+'"></div>')}var i=t.parent().find(".tp-bullets");t.find(">ul:first >li").each(function(e){var n=t.find(">ul:first >li:eq("+e+") img:first").attr("src");i.append('<div class="bullet"></div>');var r=i.find(".bullet:first")});i.find(".bullet").each(function(r){var i=e(this);if(r==n.slideamount-1)i.addClass("last");if(r==0)i.addClass("first");i.click(function(){var e=false,r=i.index();if(n.navigationArrows=="withbullet"||n.navigationArrows=="nexttobullets")r=i.index()-1;if(r==n.act)e=true;if(n.transition==0&&!e){n.next=r;f(n,t)}})});i.append('<div class="tpclear"></div>');v(t,n)};var c=function(e,n){function u(t){e.parent().append('<div style="'+i+'" class="tp-'+t+"arrow "+s+" tparrows "+o+'"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>')}var r=e.find(".tp-bullets"),i="",s="hidearrows",o=n.navigationStyle;if(n.hideThumbs==0)s="";if(n.navigationArrows=="none")i="visibility:hidden;display:none";n.soloArrowStyle="default"+" "+n.navigationStyle;if(n.navigationArrows!="none"&&n.navigationArrows!="nexttobullets")o=n.soloArrowStyle;u("left");u("right");e.parent().find(".tp-rightarrow").click(function(){if(n.transition==0){if(e.data("showus")!=t&&e.data("showus")!=-1)n.next=e.data("showus")-1;else n.next=n.next+1;e.data("showus",-1);if(n.next>=n.slideamount)n.next=0;if(n.next<0)n.next=0;if(n.act!=n.next)f(n,e)}});e.parent().find(".tp-leftarrow").click(function(){if(n.transition==0){n.next=n.next-1;n.leftarrowpressed=1;if(n.next<0)n.next=n.slideamount-1;f(n,e)}});v(e,n)};var h=function(n,r){e(document).keydown(function(e){if(r.transition==0&&e.keyCode==39){if(n.data("showus")!=t&&n.data("showus")!=-1)r.next=n.data("showus")-1;else r.next=r.next+1;n.data("showus",-1);if(r.next>=r.slideamount)r.next=0;if(r.next<0)r.next=0;if(r.act!=r.next)f(r,n)}if(r.transition==0&&e.keyCode==37){r.next=r.next-1;r.leftarrowpressed=1;if(r.next<0)r.next=r.slideamount-1;f(r,n)}});v(n,r)};var p=function(t,n){var r="vertical";if(n.touchenabled=="on"){if(n.drag_block_vertical==true)r="none";t.swipe({allowPageScroll:r,fingers:n.swipe_min_touches,treshold:n.swipe_treshold,swipe:function(i,s,o,u,a,l){switch(s){case"left":if(n.transition==0){n.next=n.next+1;if(n.next==n.slideamount)n.next=0;f(n,t)}break;case"right":if(n.transition==0){n.next=n.next-1;n.leftarrowpressed=1;if(n.next<0)n.next=n.slideamount-1;f(n,t)}break;case"up":if(r=="none")e("html, body").animate({scrollTop:t.offset().top+t.height()+"px"});break;case"down":if(r=="none")e("html, body").animate({scrollTop:t.offset().top-e(window).height()+"px"});break}}})}};var d=function(e,t){var n=e.parent().find(".tp-bullets"),r=e.parent().find(".tparrows");if(n==null){e.append('<div class=".tp-bullets"></div>');var n=e.parent().find(".tp-bullets")}if(r==null){e.append('<div class=".tparrows"></div>');var r=e.parent().find(".tparrows")}e.data("hideThumbs",t.hideThumbs);n.addClass("hidebullets");r.addClass("hidearrows");if(J()){try{e.hammer().on("touch",function(){e.addClass("hovered");if(t.onHoverStop=="on")e.trigger("stoptimer");clearTimeout(e.data("hideThumbs"));n.removeClass("hidebullets");r.removeClass("hidearrows")});e.hammer().on("release",function(){e.removeClass("hovered");e.trigger("starttimer");if(!e.hasClass("hovered")&&!n.hasClass("hovered"))e.data("hideThumbs",setTimeout(function(){n.addClass("hidebullets");r.addClass("hidearrows");e.trigger("starttimer")},t.hideNavDelayOnMobile))})}catch(i){}}else{n.hover(function(){t.overnav=true;if(t.onHoverStop=="on")e.trigger("stoptimer");n.addClass("hovered");clearTimeout(e.data("hideThumbs"));n.removeClass("hidebullets");r.removeClass("hidearrows")},function(){t.overnav=false;e.trigger("starttimer");n.removeClass("hovered");if(!e.hasClass("hovered")&&!n.hasClass("hovered"))e.data("hideThumbs",setTimeout(function(){n.addClass("hidebullets");r.addClass("hidearrows")},t.hideThumbs))});r.hover(function(){t.overnav=true;if(t.onHoverStop=="on")e.trigger("stoptimer");n.addClass("hovered");clearTimeout(e.data("hideThumbs"));n.removeClass("hidebullets");r.removeClass("hidearrows")},function(){t.overnav=false;e.trigger("starttimer");n.removeClass("hovered")});e.on("mouseenter",function(){e.addClass("hovered");if(t.onHoverStop=="on")e.trigger("stoptimer");clearTimeout(e.data("hideThumbs"));n.removeClass("hidebullets");r.removeClass("hidearrows")});e.on("mouseleave",function(){e.removeClass("hovered");e.trigger("starttimer");if(!e.hasClass("hovered")&&!n.hasClass("hovered"))e.data("hideThumbs",setTimeout(function(){n.addClass("hidebullets");r.addClass("hidearrows")},t.hideThumbs))})}};var v=function(t,n){var r=t.parent();var i=r.find(".tp-bullets");if(n.navigationType=="thumb"){i.find(".thumb").each(function(t){var r=e(this);r.css({width:n.thumbWidth*n.bw+"px",height:n.thumbHeight*n.bh+"px"})});var s=i.find(".tp-mask");s.width(n.thumbWidth*n.thumbAmount*n.bw);s.height(n.thumbHeight*n.bh);s.parent().width(n.thumbWidth*n.thumbAmount*n.bw);s.parent().height(n.thumbHeight*n.bh)}var o=r.find(".tp-leftarrow");var u=r.find(".tp-rightarrow");if(n.navigationType=="thumb"&&n.navigationArrows=="nexttobullets")n.navigationArrows="solo";if(n.navigationArrows=="nexttobullets"){o.prependTo(i).css({"float":"left"});u.insertBefore(i.find(".tpclear")).css({"float":"left"})}var a=0;if(n.forceFullWidth=="on")a=0-n.container.parent().offset().left;var f=0,l=0;if(n.navigationInGrid=="on"){f=t.width()>n.startwidth?(t.width()-n.startwidth)/2:0,l=t.height()>n.startheight?(t.height()-n.startheight)/2:0}if(n.navigationArrows!="none"&&n.navigationArrows!="nexttobullets"){var c=n.soloArrowLeftValign,h=n.soloArrowLeftHalign,p=n.soloArrowRightValign,d=n.soloArrowRightHalign,v=n.soloArrowLeftVOffset,m=n.soloArrowLeftHOffset,g=n.soloArrowRightVOffset,y=n.soloArrowRightHOffset;o.css({position:"absolute"});u.css({position:"absolute"});if(c=="center")o.css({top:"50%",marginTop:v-Math.round(o.innerHeight()/2)+"px"});else if(c=="bottom")o.css({top:"auto",bottom:0+v+"px"});else if(c=="top")o.css({bottom:"auto",top:0+v+"px"});if(h=="center")o.css({left:"50%",marginLeft:a+m-Math.round(o.innerWidth()/2)+"px"});else if(h=="left")o.css({left:f+m+a+"px"});else if(h=="right")o.css({right:f+m-a+"px"});if(p=="center")u.css({top:"50%",marginTop:g-Math.round(u.innerHeight()/2)+"px"});else if(p=="bottom")u.css({top:"auto",bottom:0+g+"px"});else if(p=="top")u.css({bottom:"auto",top:0+g+"px"});if(d=="center")u.css({left:"50%",marginLeft:a+y-Math.round(u.innerWidth()/2)+"px"});else if(d=="left")u.css({left:f+y+a+"px"});else if(d=="right")u.css({right:f+y-a+"px"});if(o.position()!=null)o.css({top:Math.round(parseInt(o.position().top,0))+"px"});if(u.position()!=null)u.css({top:Math.round(parseInt(u.position().top,0))+"px"})}if(n.navigationArrows=="none"){o.css({visibility:"hidden"});u.css({visibility:"hidden"})}var b=n.navigationVAlign,w=n.navigationHAlign,E=n.navigationVOffset*n.bh,S=n.navigationHOffset*n.bw;if(b=="center")i.css({top:"50%",marginTop:E-Math.round(i.innerHeight()/2)+"px"});if(b=="bottom")i.css({bottom:0+E+"px"});if(b=="top")i.css({top:0+E+"px"});if(w=="center")i.css({left:"50%",marginLeft:a+S-Math.round(i.innerWidth()/2)+"px"});if(w=="left")i.css({left:0+S+a+"px"});if(w=="right")i.css({right:0+S-a+"px"})};var m=function(n){var r=n.container;n.beforli=n.next-1;n.comingli=n.next+1;if(n.beforli<0)n.beforli=n.slideamount-1;if(n.comingli>=n.slideamount)n.comingli=0;var i=r.find(">ul:first-child >li:eq("+n.comingli+")"),s=r.find(">ul:first-child >li:eq("+n.beforli+")"),o=s.find(".defaultimg").attr("src"),u=i.find(".defaultimg").attr("src");if(n.arr==t){n.arr=r.parent().find(".tparrows"),n.rar=r.parent().find(".tp-rightarrow"),n.lar=r.parent().find(".tp-leftarrow"),n.raimg=n.rar.find(".tp-arr-imgholder"),n.laimg=n.lar.find(".tp-arr-imgholder"),n.raimg_b=n.rar.find(".tp-arr-imgholder2"),n.laimg_b=n.lar.find(".tp-arr-imgholder2"),n.ratit=n.rar.find(".tp-arr-titleholder"),n.latit=n.lar.find(".tp-arr-titleholder")}var a=n.arr,f=n.rar,l=n.lar,c=n.raimg,h=n.laimg,p=n.raimg_b,d=n.laimg_b,v=n.ratit,m=n.latit;if(i.data("title")!=t)v.html(i.data("title"));if(s.data("title")!=t)m.html(s.data("title"));if(f.hasClass("itishovered")){f.width(v.outerWidth(true)+parseInt(f.css("minWidth"),0))}if(l.hasClass("itishovered")){l.width(m.outerWidth(true)+parseInt(l.css("minWidth"),0))}if(a.hasClass("preview2")&&!a.hasClass("hashoveralready")){a.addClass("hashoveralready");if(!J())a.hover(function(){var t=e(this),n=t.find(".tp-arr-titleholder");if(e(window).width()>767)t.width(n.outerWidth(true)+parseInt(t.css("minWidth"),0));t.addClass("itishovered")},function(){var t=e(this),n=t.find(".tp-arr-titleholder");t.css({width:parseInt(t.css("minWidth"),0)});t.removeClass("itishovered")});else{var a=e(this),g=a.find(".tp-arr-titleholder");g.addClass("alwayshidden");punchgs.TweenLite.set(g,{autoAlpha:0})}}if(s.data("thumb")!=t)o=s.data("thumb");if(i.data("thumb")!=t)u=i.data("thumb");if(!a.hasClass("preview4")){punchgs.TweenLite.to(c,.5,{autoAlpha:0,onComplete:function(){c.css({backgroundImage:"url("+u+")"});h.css({backgroundImage:"url("+o+")"})}});punchgs.TweenLite.to(h,.5,{autoAlpha:0,onComplete:function(){punchgs.TweenLite.to(c,.5,{autoAlpha:1,delay:.2});punchgs.TweenLite.to(h,.5,{autoAlpha:1,delay:.2})}})}else{p.css({backgroundImage:"url("+u+")"});d.css({backgroundImage:"url("+o+")"});punchgs.TweenLite.fromTo(p,.8,{force3D:punchgs.force3d,x:0},{x:-c.width(),ease:punchgs.Power3.easeOut,delay:1,onComplete:function(){c.css({backgroundImage:"url("+u+")"});punchgs.TweenLite.set(p,{x:0})}});punchgs.TweenLite.fromTo(d,.8,{force3D:punchgs.force3d,x:0},{x:c.width(),ease:punchgs.Power3.easeOut,delay:1,onComplete:function(){h.css({backgroundImage:"url("+o+")"});punchgs.TweenLite.set(d,{x:0})}});punchgs.TweenLite.fromTo(c,.8,{x:0},{force3D:punchgs.force3d,x:-c.width(),ease:punchgs.Power3.easeOut,delay:1,onComplete:function(){punchgs.TweenLite.set(c,{x:0})}});punchgs.TweenLite.fromTo(h,.8,{x:0},{force3D:punchgs.force3d,x:c.width(),ease:punchgs.Power3.easeOut,delay:1,onComplete:function(){punchgs.TweenLite.set(h,{x:0})}})}if(f.hasClass("preview4")&&!f.hasClass("hashoveralready")){f.addClass("hashoveralready");f.hover(function(){var t=e(this).find(".tp-arr-iwrapper");var n=e(this).find(".tp-arr-allwrapper");punchgs.TweenLite.fromTo(t,.4,{x:t.width()},{x:0,delay:.3,ease:punchgs.Power3.easeOut,overwrite:"all"});punchgs.TweenLite.to(n,.2,{autoAlpha:1,overwrite:"all"})},function(){var t=e(this).find(".tp-arr-iwrapper");var n=e(this).find(".tp-arr-allwrapper");punchgs.TweenLite.to(t,.4,{x:t.width(),ease:punchgs.Power3.easeOut,delay:.2,overwrite:"all"});punchgs.TweenLite.to(n,.2,{delay:.6,autoAlpha:0,overwrite:"all"})});l.hover(function(){var t=e(this).find(".tp-arr-iwrapper");var n=e(this).find(".tp-arr-allwrapper");punchgs.TweenLite.fromTo(t,.4,{x:0-t.width()},{x:0,delay:.3,ease:punchgs.Power3.easeOut,overwrite:"all"});punchgs.TweenLite.to(n,.2,{autoAlpha:1,overwrite:"all"})},function(){var t=e(this).find(".tp-arr-iwrapper");var n=e(this).find(".tp-arr-allwrapper");punchgs.TweenLite.to(t,.4,{x:0-t.width(),ease:punchgs.Power3.easeOut,delay:.2,overwrite:"all"});punchgs.TweenLite.to(n,.2,{delay:.6,autoAlpha:0,overwrite:"all"})})}};var g=function(n,r){r.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({height:r.container.height()});r.container.closest(".rev_slider_wrapper").css({height:r.container.height()});r.width=parseInt(r.container.width(),0);r.height=parseInt(r.container.height(),0);r.bw=r.width/r.startwidth;r.bh=r.height/r.startheight;if(r.bh>r.bw)r.bh=r.bw;if(r.bh<r.bw)r.bw=r.bh;if(r.bw<r.bh)r.bh=r.bw;if(r.bh>1){r.bw=1;r.bh=1}if(r.bw>1){r.bw=1;r.bh=1}r.height=Math.round(r.startheight*(r.width/r.startwidth));if(r.height>r.startheight&&r.autoHeight!="on")r.height=r.startheight;if(r.fullScreen=="on"){r.height=r.bw*r.startheight;var i=r.container.parent().width();var s=e(window).height();if(r.fullScreenOffsetContainer!=t){try{var o=r.fullScreenOffsetContainer.split(",");e.each(o,function(t,n){s=s-e(n).outerHeight(true);if(s<r.minFullScreenHeight)s=r.minFullScreenHeight})}catch(u){}try{if(r.fullScreenOffset.split("%").length>1&&r.fullScreenOffset!=t&&r.fullScreenOffset.length>0){s=s-e(window).height()*parseInt(r.fullScreenOffset,0)/100}else{if(r.fullScreenOffset!=t&&r.fullScreenOffset.length>0)s=s-parseInt(r.fullScreenOffset,0)}if(s<r.minFullScreenHeight)s=r.minFullScreenHeight}catch(u){}}r.container.parent().height(s);r.container.closest(".rev_slider_wrapper").height(s);r.container.css({height:"100%"});r.height=s;if(r.minHeight!=t&&r.height<r.minHeight)r.height=r.minHeight}else{if(r.minHeight!=t&&r.height<r.minHeight)r.height=r.minHeight;r.container.height(r.height)}r.slotw=Math.ceil(r.width/r.slots);if(r.fullScreen=="on")r.sloth=Math.ceil(e(window).height()/r.slots);else r.sloth=Math.ceil(r.height/r.slots);if(r.autoHeight=="on")r.sloth=Math.ceil(n.height()/r.slots)};var y=function(n,r){n.find(".tp-caption").each(function(){e(this).addClass(e(this).data("transition"));e(this).addClass("start")});n.find(">ul:first").css({overflow:"hidden",width:"100%",height:"100%",maxHeight:n.parent().css("maxHeight")}).addClass("tp-revslider-mainul");if(r.autoHeight=="on"){n.find(">ul:first").css({overflow:"hidden",width:"100%",height:"100%",maxHeight:"none"});n.css({maxHeight:"none"});n.parent().css({maxHeight:"none"})}n.find(">ul:first >li").each(function(r){var i=e(this);i.addClass("tp-revslider-slidesli");i.css({width:"100%",height:"100%",overflow:"hidden"});if(i.data("link")!=t){var s=i.data("link");var o="_self";var u=60;if(i.data("slideindex")=="back")u=0;var a=checksl=i.data("linktoslide");if(a!=t){if(a!="next"&&a!="prev")n.find(">ul:first-child >li").each(function(){var t=e(this);if(t.data("origindex")+1==checksl)a=t.index()+1})}if(i.data("target")!=t)o=i.data("target");if(s!="slide")a="no";var f='<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:'+u+';" data-x="center" data-y="center" data-linktoslide="'+a+'" data-start="0"><a style="width:100%;height:100%;display:block"';if(s!="slide")f=f+' target="'+o+'" href="'+s+'"';f=f+'><span style="width:100%;height:100%;display:block"></span></a></div>';i.append(f)}});n.parent().css({overflow:"visible"});n.find(">ul:first >li >img").each(function(n){var i=e(this);i.addClass("defaultimg");if(i.data("lazyload")!=t&&i.data("lazydone")!=1){}else{g(i,r)}if(a(8)){i.data("kenburns","off")}if(r.panZoomDisableOnMobile=="on"&&J()){i.data("kenburns","off");i.data("bgfit","cover")}i.wrap('<div class="slotholder" style="width:100%;height:100%;"'+'data-duration="'+i.data("duration")+'"'+'data-zoomstart="'+i.data("zoomstart")+'"'+'data-zoomend="'+i.data("zoomend")+'"'+'data-rotationstart="'+i.data("rotationstart")+'"'+'data-rotationend="'+i.data("rotationend")+'"'+'data-ease="'+i.data("ease")+'"'+'data-duration="'+i.data("duration")+'"'+'data-bgpositionend="'+i.data("bgpositionend")+'"'+'data-bgposition="'+i.data("bgposition")+'"'+'data-duration="'+i.data("duration")+'"'+'data-kenburns="'+i.data("kenburns")+'"'+'data-easeme="'+i.data("ease")+'"'+'data-bgfit="'+i.data("bgfit")+'"'+'data-bgfitend="'+i.data("bgfitend")+'"'+'data-owidth="'+i.data("owidth")+'"'+'data-oheight="'+i.data("oheight")+'"'+"></div>");if(r.dottedOverlay!="none"&&r.dottedOverlay!=t)i.closest(".slotholder").append('<div class="tp-dottedoverlay '+r.dottedOverlay+'"></div>');var s=i.attr("src"),o=i.data("lazyload"),u=i.data("bgfit"),f=i.data("bgrepeat"),l=i.data("bgposition");if(u==t)u="cover";if(f==t)f="no-repeat";if(l==t)l="center center";var c=i.closest(".slotholder");i.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="'+i.data("lazyload")+'" data-bgfit="'+u+'"data-bgposition="'+l+'" data-bgrepeat="'+f+'" data-lazydone="'+i.data("lazydone")+'" src="'+s+'" data-src="'+s+'" style="background-color:'+i.css("backgroundColor")+";background-repeat:"+f+";background-image:url("+s+");background-size:"+u+";background-position:"+l+';width:100%;height:100%;"></div>');if(a(8)){c.find(".tp-bgimg").css({backgroundImage:"none","background-image":"none"});c.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="'+s+'" style="width:100%">')}i.css({opacity:0});i.data("li-id",n)})};var b=function(e,n,r,i){var s=e,o=s.find(".defaultimg"),u=s.data("zoomstart"),f=s.data("rotationstart");if(o.data("currotate")!=t)f=o.data("currotate");if(o.data("curscale")!=t&&i=="box")u=o.data("curscale")*100;else if(o.data("curscale")!=t)u=o.data("curscale");g(o,n);var l=o.data("src"),c=o.css("backgroundColor"),h=n.width,p=n.height,d=o.data("fxof"),v=0;if(n.autoHeight=="on")p=n.container.height();if(d==t)d=0;var m=0,y=o.data("bgfit"),b=o.data("bgrepeat"),E=o.data("bgposition");if(y==t)y="cover";if(b==t)b="no-repeat";if(E==t)E="center center";if(a(8)){s.data("kenburns","off");var S=l;l=""}switch(i){case"box":var x=0,T=0,N=0;if(n.sloth>n.slotw)x=n.sloth;else x=n.slotw;if(!r){var m=0-x}n.slotw=x;n.sloth=x;var T=0;var N=0;if(s.data("kenburns")=="on"){y=u;if(y.toString().length<4)y=K(y,s,n)}for(var C=0;C<n.slots;C++){N=0;for(var k=0;k<n.slots;k++){s.append('<div class="slot" '+'style="position:absolute;'+"top:"+(v+N)+"px;"+"left:"+(d+T)+"px;"+"width:"+x+"px;"+"height:"+x+"px;"+'overflow:hidden;">'+'<div class="slotslide" data-x="'+T+'" data-y="'+N+'" '+'style="position:absolute;'+"top:"+0+"px;"+"left:"+0+"px;"+"width:"+x+"px;"+"height:"+x+"px;"+'overflow:hidden;">'+'<div style="position:absolute;'+"top:"+(0-N)+"px;"+"left:"+(0-T)+"px;"+"width:"+h+"px;"+"height:"+p+"px;"+"background-color:"+c+";"+"background-image:url("+l+");"+"background-repeat:"+b+";"+"background-size:"+y+";background-position:"+E+';">'+"</div></div></div>");N=N+x;if(a(8)){s.find(".slot ").last().find(".slotslide").append('<img src="'+S+'">');w(s,n)}if(u!=t&&f!=t)punchgs.TweenLite.set(s.find(".slot").last(),{rotationZ:f})}T=T+x}break;case"vertical":case"horizontal":if(s.data("kenburns")=="on"){y=u;if(y.toString().length<4)y=K(y,s,n)}if(i=="horizontal"){if(!r)var m=0-n.slotw;for(var k=0;k<n.slots;k++){s.append('<div class="slot" style="position:absolute;'+"top:"+(0+v)+"px;"+"left:"+(d+k*n.slotw)+"px;"+"overflow:hidden;width:"+(n.slotw+.6)+"px;"+"height:"+p+'px">'+'<div class="slotslide" style="position:absolute;'+"top:0px;left:"+m+"px;"+"width:"+(n.slotw+.6)+"px;"+"height:"+p+'px;overflow:hidden;">'+'<div style="background-color:'+c+";"+"position:absolute;top:0px;"+"left:"+(0-k*n.slotw)+"px;"+"width:"+h+"px;height:"+p+"px;"+"background-image:url("+l+");"+"background-repeat:"+b+";"+"background-size:"+y+";background-position:"+E+';">'+"</div></div></div>");if(u!=t&&f!=t)punchgs.TweenLite.set(s.find(".slot").last(),{rotationZ:f});if(a(8)){s.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="'+S+'" style="width:100%;height:auto">');w(s,n)}}}else{if(!r)var m=0-n.sloth;for(var k=0;k<n.slots+2;k++){s.append('<div class="slot" style="position:absolute;'+"top:"+(v+k*n.sloth)+"px;"+"left:"+d+"px;"+"overflow:hidden;"+"width:"+h+"px;"+"height:"+n.sloth+'px">'+'<div class="slotslide" style="position:absolute;'+"top:"+m+"px;"+"left:0px;width:"+h+"px;"+"height:"+n.sloth+"px;"+'overflow:hidden;">'+'<div style="background-color:'+c+";"+"position:absolute;"+"top:"+(0-k*n.sloth)+"px;"+"left:0px;"+"width:"+h+"px;height:"+p+"px;"+"background-image:url("+l+");"+"background-repeat:"+b+";"+"background-size:"+y+";background-position:"+E+';">'+"</div></div></div>");if(u!=t&&f!=t)punchgs.TweenLite.set(s.find(".slot").last(),{rotationZ:f});if(a(8)){s.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="'+S+'" style="width:100%;height:auto;">');w(s,n)}}}break}};var w=function(e,t){if(a(8)){var n=e.find(".ieeightfallbackimage");var r=n.width(),i=n.height();if(t.startwidth/t.startheight<e.data("owidth")/e.data("oheight"))n.css({width:"auto",height:"100%"});else n.css({width:"100%",height:"auto"});setTimeout(function(){var r=n.width(),i=n.height(),s=e.data("bgposition");if(s=="center center")n.css({position:"absolute",top:t.height/2-i/2+"px",left:t.width/2-r/2+"px"});if(s=="center top"||s=="top center")n.css({position:"absolute",top:"0px",left:t.width/2-r/2+"px"});if(s=="center bottom"||s=="bottom center")n.css({position:"absolute",bottom:"0px",left:t.width/2-r/2+"px"});if(s=="right top"||s=="top right")n.css({position:"absolute",top:"0px",right:"0px"});if(s=="right bottom"||s=="bottom right")n.css({position:"absolute",bottom:"0px",right:"0px"});if(s=="right center"||s=="center right")n.css({position:"absolute",top:t.height/2-i/2+"px",right:"0px"});if(s=="left bottom"||s=="bottom left")n.css({position:"absolute",bottom:"0px",left:"0px"});if(s=="left center"||s=="center left")n.css({position:"absolute",top:t.height/2-i/2+"px",left:"0px"})},20)}};var E=function(t,n,r){r.find(".slot").each(function(){e(this).remove()});n.transition=0};var S=function(n,r){n.find("img, .defaultimg").each(function(n){var i=e(this),s=i.data("lazyload");if(s!=i.attr("src")&&r<3&&s!=t&&s!="undefined"){if(s!=t&&s!="undefined"){i.attr("src",s);var o=new Image;o.onload=function(e){i.data("lazydone",1);if(i.hasClass("defaultimg"))x(i,o)};o.error=function(){i.data("lazydone",1)};o.src=i.attr("src");if(o.complete){if(i.hasClass("defaultimg"))x(i,o);i.data("lazydone",1)}}}else{if((s===t||s==="undefined")&&i.data("lazydone")!=1){var o=new Image;o.onload=function(){if(i.hasClass("defaultimg"))x(i,o);i.data("lazydone",1)};o.error=function(){i.data("lazydone",1)};if(i.attr("src")!=t&&i.attr("src")!="undefined"){o.src=i.attr("src")}else o.src=i.data("src");if(o.complete){if(i.hasClass("defaultimg")){x(i,o)}i.data("lazydone",1)}}}})};var x=function(e,t){var n=e.closest("li"),r=t.width,i=t.height;n.data("owidth",r);n.data("oheight",i);n.find(".slotholder").data("owidth",r);n.find(".slotholder").data("oheight",i);n.data("loadeddone",1)};var T=function(n,r,i){S(n,0);var s=setInterval(function(){i.bannertimeronpause=true;i.container.trigger("stoptimer");i.cd=0;var o=0;n.find("img, .defaultimg").each(function(t){if(e(this).data("lazydone")!=1){o++}});if(o>0)S(n,o);else{clearInterval(s);if(r!=t)r()}},100)};var N=function(e,n){try{var r=e.find(">ul:first-child >li:eq("+n.act+")")}catch(i){var r=e.find(">ul:first-child >li:eq(1)")}n.lastslide=n.act;var s=e.find(">ul:first-child >li:eq("+n.next+")");var o=s.find(".defaultimg");n.bannertimeronpause=true;e.trigger("stoptimer");n.cd=0;if(o.data("lazyload")!=t&&o.data("lazyload")!="undefined"&&o.data("lazydone")!=1){if(!a(8))o.css({backgroundImage:'url("'+s.find(".defaultimg").data("lazyload")+'")'});else{o.attr("src",s.find(".defaultimg").data("lazyload"))}o.data("src",s.find(".defaultimg").data("lazyload"));o.data("lazydone",1);o.data("orgw",0);s.data("loadeddone",1);e.find(".tp-loader").css({display:"block"});T(e.find(".tp-static-layers"),function(){T(s,function(){var t=s.find(".slotholder");if(t.data("kenburns")=="on"){var r=setInterval(function(){var i=t.data("owidth");if(i>=0){clearInterval(r);C(n,o,e)}},10)}else C(n,o,e)},n)},n)}else{if(s.data("loadeddone")===t){s.data("loadeddone",1);T(s,function(){C(n,o,e)},n)}else C(n,o,e)}};var C=function(e,t,n){e.bannertimeronpause=false;e.cd=0;n.trigger("nulltimer");n.find(".tp-loader").css({display:"none"});g(t,e);v(n,e);g(t,e);k(n,e)};var k=function(e,n){e.trigger("revolution.slide.onbeforeswap");n.transition=1;n.videoplaying=false;try{var r=e.find(">ul:first-child >li:eq("+n.act+")")}catch(i){var r=e.find(">ul:first-child >li:eq(1)")}n.lastslide=n.act;var s=e.find(">ul:first-child >li:eq("+n.next+")");setTimeout(function(){m(n)},200);var o=r.find(".slotholder"),u=s.find(".slotholder");if(u.data("kenburns")=="on"||o.data("kenburns")=="on"){Z(e,n);e.find(".kenburnimg").remove()}if(s.data("delay")!=t){n.cd=0;n.delay=s.data("delay")}else{n.delay=n.origcd}if(n.firststart==1)punchgs.TweenLite.set(r,{autoAlpha:0});punchgs.TweenLite.set(r,{zIndex:18});punchgs.TweenLite.set(s,{autoAlpha:0,zIndex:20});var a=0;if(r.index()!=s.index()&&n.firststart!=1){a=z(r,n)}if(r.data("saveperformance")!="on")a=0;setTimeout(function(){e.trigger("restarttimer");L(e,n,s,r,o,u)},a)};var L=function(n,r,i,s,o,u){function x(){e.each(d,function(e,t){if(t[0]==h||t[8]==h){f=t[1];p=t[2];g=y}y=y+1})}if(i.data("differentissplayed")=="prepared"){i.data("differentissplayed","done");i.data("transition",i.data("savedtransition"));i.data("slotamount",i.data("savedslotamount"));i.data("masterspeed",i.data("savedmasterspeed"))}if(i.data("fstransition")!=t&&i.data("differentissplayed")!="done"){i.data("savedtransition",i.data("transition"));i.data("savedslotamount",i.data("slotamount"));i.data("savedmasterspeed",i.data("masterspeed"));i.data("transition",i.data("fstransition"));i.data("slotamount",i.data("fsslotamount"));i.data("masterspeed",i.data("fsmasterspeed"));i.data("differentissplayed","prepared")}n.find(".active-revslide").removeClass(".active-revslide");i.addClass("active-revslide");if(i.data("transition")==t)i.data("transition","random");var f=0,l=i.data("transition").split(","),c=i.data("nexttransid")==t?-1:i.data("nexttransid");if(i.data("randomtransition")=="on")c=Math.round(Math.random()*l.length);else c=c+1;if(c==l.length)c=0;i.data("nexttransid",c);var h=l[c];if(r.ie){if(h=="boxfade")h="boxslide";if(h=="slotfade-vertical")h="slotzoom-vertical";if(h=="slotfade-horizontal")h="slotzoom-horizontal"}if(a(8)){h=11}var p=0;if(r.parallax=="scroll"&&r.parallaxFirstGo==t){r.parallaxFirstGo=true;tt(n,r);setTimeout(function(){tt(n,r)},210);setTimeout(function(){tt(n,r)},420)}if(h=="slidehorizontal"){h="slideleft";if(r.leftarrowpressed==1)h="slideright"}if(h=="slidevertical"){h="slideup";if(r.leftarrowpressed==1)h="slidedown"}if(h=="parallaxhorizontal"){h="parallaxtoleft";if(r.leftarrowpressed==1)h="parallaxtoright"}if(h=="parallaxvertical"){h="parallaxtotop";if(r.leftarrowpressed==1)h="parallaxtobottom"}var d=[["boxslide",0,1,10,0,"box",false,null,0],["boxfade",1,0,10,0,"box",false,null,1],["slotslide-horizontal",2,0,0,200,"horizontal",true,false,2],["slotslide-vertical",3,0,0,200,"vertical",true,false,3],["curtain-1",4,3,0,0,"horizontal",true,true,4],["curtain-2",5,3,0,0,"horizontal",true,true,5],["curtain-3",6,3,25,0,"horizontal",true,true,6],["slotzoom-horizontal",7,0,0,400,"horizontal",true,true,7],["slotzoom-vertical",8,0,0,0,"vertical",true,true,8],["slotfade-horizontal",9,0,0,500,"horizontal",true,null,9],["slotfade-vertical",10,0,0,500,"vertical",true,null,10],["fade",11,0,1,300,"horizontal",true,null,11],["slideleft",12,0,1,0,"horizontal",true,true,12],["slideup",13,0,1,0,"horizontal",true,true,13],["slidedown",14,0,1,0,"horizontal",true,true,14],["slideright",15,0,1,0,"horizontal",true,true,15],["papercut",16,0,0,600,"",null,null,16],["3dcurtain-horizontal",17,0,20,100,"vertical",false,true,17],["3dcurtain-vertical",18,0,10,100,"horizontal",false,true,18],["cubic",19,0,20,600,"horizontal",false,true,19],["cube",19,0,20,600,"horizontal",false,true,20],["flyin",20,0,4,600,"vertical",false,true,21],["turnoff",21,0,1,1600,"horizontal",false,true,22],["incube",22,0,20,200,"horizontal",false,true,23],["cubic-horizontal",23,0,20,500,"vertical",false,true,24],["cube-horizontal",23,0,20,500,"vertical",false,true,25],["incube-horizontal",24,0,20,500,"vertical",false,true,26],["turnoff-vertical",25,0,1,200,"horizontal",false,true,27],["fadefromright",12,1,1,0,"horizontal",true,true,28],["fadefromleft",15,1,1,0,"horizontal",true,true,29],["fadefromtop",14,1,1,0,"horizontal",true,true,30],["fadefrombottom",13,1,1,0,"horizontal",true,true,31],["fadetoleftfadefromright",12,2,1,0,"horizontal",true,true,32],["fadetorightfadetoleft",15,2,1,0,"horizontal",true,true,33],["fadetobottomfadefromtop",14,2,1,0,"horizontal",true,true,34],["fadetotopfadefrombottom",13,2,1,0,"horizontal",true,true,35],["parallaxtoright",12,3,1,0,"horizontal",true,true,36],["parallaxtoleft",15,3,1,0,"horizontal",true,true,37],["parallaxtotop",14,3,1,0,"horizontal",true,true,38],["parallaxtobottom",13,3,1,0,"horizontal",true,true,39],["scaledownfromright",12,4,1,0,"horizontal",true,true,40],["scaledownfromleft",15,4,1,0,"horizontal",true,true,41],["scaledownfromtop",14,4,1,0,"horizontal",true,true,42],["scaledownfrombottom",13,4,1,0,"horizontal",true,true,43],["zoomout",13,5,1,0,"horizontal",true,true,44],["zoomin",13,6,1,0,"horizontal",true,true,45],["notransition",26,0,1,0,"horizontal",true,null,46]];var v=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];var m=[16,17,18,19,20,21,22,23,24,25,26,27];var f=0;var p=1;var g=0;var y=0;var w=new Array;if(u.data("kenburns")=="on"){if(h=="boxslide"||h==0||h=="boxfade"||h==1||h=="papercut"||h==16)h=11;Q(n,r,true,true)}if(h=="random"){h=Math.round(Math.random()*d.length-1);if(h>d.length-1)h=d.length-1}if(h=="random-static"){h=Math.round(Math.random()*v.length-1);if(h>v.length-1)h=v.length-1;h=v[h]}if(h=="random-premium"){h=Math.round(Math.random()*m.length-1);if(h>m.length-1)h=m.length-1;h=m[h]}var E=[12,13,14,15,16,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];if(r.isJoomla==true&&window.MooTools!=t&&E.indexOf(h)!=-1){var S=Math.round(Math.random()*(m.length-2))+1;if(S>m.length-1)S=m.length-1;if(S==0)S=1;h=m[S]}x();if(a(8)&&f>15&&f<28){h=Math.round(Math.random()*v.length-1);if(h>v.length-1)h=v.length-1;h=v[h];y=0;x()}var T=-1;if(r.leftarrowpressed==1||r.act>r.next)T=1;r.leftarrowpressed=0;if(f>26)f=26;if(f<0)f=0;var N=300;if(i.data("masterspeed")!=t&&i.data("masterspeed")>99&&i.data("masterspeed")<r.delay)N=i.data("masterspeed");if(i.data("masterspeed")!=t&&i.data("masterspeed")>r.delay)N=r.delay;w=d[g];n.parent().find(".bullet").each(function(){var t=e(this),n=t.index();t.removeClass("selected");if(r.navigationArrows=="withbullet"||r.navigationArrows=="nexttobullets")n=t.index()-1;if(n==r.next)t.addClass("selected")});var C=new punchgs.TimelineLite({onComplete:function(){A(n,r,u,o,i,s,C)}});C.add(punchgs.TweenLite.set(u.find(".defaultimg"),{opacity:0}));C.pause();if(i.data("slotamount")==t||i.data("slotamount")<1){r.slots=Math.round(Math.random()*12+4);if(h=="boxslide")r.slots=Math.round(Math.random()*6+3);else if(h=="flyin")r.slots=Math.round(Math.random()*4+1)}else{r.slots=i.data("slotamount")}if(i.data("rotate")==t)r.rotate=0;else if(i.data("rotate")==999)r.rotate=Math.round(Math.random()*360);else r.rotate=i.data("rotate");if(!e.support.transition||r.ie||r.ie9)r.rotate=0;if(r.firststart==1)r.firststart=0;N=N+w[4];if((f==4||f==5||f==6)&&r.slots<3)r.slots=3;if(w[3]!=0)r.slots=Math.min(r.slots,w[3]);if(f==9)r.slots=r.width/20;if(f==10)r.slots=r.height/20;if(w[7]!=null)b(o,r,w[7],w[5]);if(w[6]!=null)b(u,r,w[6],w[5]);if(f==0){var k=Math.ceil(r.height/r.sloth);var L=0;u.find(".slotslide").each(function(t){var n=e(this);L=L+1;if(L==k)L=0;C.add(punchgs.TweenLite.from(n,N/600,{opacity:0,top:0-r.sloth,left:0-r.slotw,rotation:r.rotate,force3D:"auto",ease:punchgs.Power2.easeOut}),(t*15+L*30)/1500)})}if(f==1){var O,M=0;u.find(".slotslide").each(function(t){var n=e(this),i=Math.random()*N+300,s=Math.random()*500+200;if(i+s>O){O=s+s;M=t}C.add(punchgs.TweenLite.from(n,i/1e3,{autoAlpha:0,force3D:"auto",rotation:r.rotate,ease:punchgs.Power2.easeInOut}),s/1e3)})}if(f==2){var _=new punchgs.TimelineLite;o.find(".slotslide").each(function(){var t=e(this);_.add(punchgs.TweenLite.to(t,N/1e3,{left:r.slotw,force3D:"auto",rotation:0-r.rotate}),0);C.add(_,0)});u.find(".slotslide").each(function(){var t=e(this);_.add(punchgs.TweenLite.from(t,N/1e3,{left:0-r.slotw,force3D:"auto",rotation:r.rotate}),0);C.add(_,0)})}if(f==3){var _=new punchgs.TimelineLite;o.find(".slotslide").each(function(){var t=e(this);_.add(punchgs.TweenLite.to(t,N/1e3,{top:r.sloth,rotation:r.rotate,force3D:"auto",transformPerspective:600}),0);C.add(_,0)});u.find(".slotslide").each(function(){var t=e(this);_.add(punchgs.TweenLite.from(t,N/1e3,{top:0-r.sloth,rotation:r.rotate,ease:punchgs.Power2.easeOut,force3D:"auto",transformPerspective:600}),0);C.add(_,0)})}if(f==4||f==5){setTimeout(function(){o.find(".defaultimg").css({opacity:0})},100);var D=N/1e3,P=D,_=new punchgs.TimelineLite;o.find(".slotslide").each(function(t){var n=e(this);var i=t*D/r.slots;if(f==5)i=(r.slots-t-1)*D/r.slots/1.5;_.add(punchgs.TweenLite.to(n,D*3,{transformPerspective:600,force3D:"auto",top:0+r.height,opacity:.5,rotation:r.rotate,ease:punchgs.Power2.easeInOut,delay:i}),0);C.add(_,0)});u.find(".slotslide").each(function(t){var n=e(this);var i=t*D/r.slots;if(f==5)i=(r.slots-t-1)*D/r.slots/1.5;_.add(punchgs.TweenLite.from(n,D*3,{top:0-r.height,opacity:.5,rotation:r.rotate,force3D:"auto",ease:punchgs.Power2.easeInOut,delay:i}),0);C.add(_,0)})}if(f==6){if(r.slots<2)r.slots=2;if(r.slots%2)r.slots=r.slots+1;var _=new punchgs.TimelineLite;setTimeout(function(){o.find(".defaultimg").css({opacity:0})},100);o.find(".slotslide").each(function(t){var n=e(this);if(t+1<r.slots/2)var i=(t+2)*90;else var i=(2+r.slots-t)*90;_.add(punchgs.TweenLite.to(n,(N+i)/1e3,{top:0+r.height,opacity:1,force3D:"auto",rotation:r.rotate,ease:punchgs.Power2.easeInOut}),0);C.add(_,0)});u.find(".slotslide").each(function(t){var n=e(this);if(t+1<r.slots/2)var i=(t+2)*90;else var i=(2+r.slots-t)*90;_.add(punchgs.TweenLite.from(n,(N+i)/1e3,{top:0-r.height,opacity:1,force3D:"auto",rotation:r.rotate,ease:punchgs.Power2.easeInOut}),0);C.add(_,0)})}if(f==7){N=N*2;if(N>r.delay)N=r.delay;var _=new punchgs.TimelineLite;setTimeout(function(){o.find(".defaultimg").css({opacity:0})},100);o.find(".slotslide").each(function(){var t=e(this).find("div");_.add(punchgs.TweenLite.to(t,N/1e3,{left:0-r.slotw/2+"px",top:0-r.height/2+"px",width:r.slotw*2+"px",height:r.height*2+"px",opacity:0,rotation:r.rotate,force3D:"auto",ease:punchgs.Power2.easeOut}),0);C.add(_,0)});u.find(".slotslide").each(function(t){var n=e(this).find("div");_.add(punchgs.TweenLite.fromTo(n,N/1e3,{left:0,top:0,opacity:0,transformPerspective:600},{left:0-t*r.slotw+"px",ease:punchgs.Power2.easeOut,force3D:"auto",top:0+"px",width:r.width,height:r.height,opacity:1,rotation:0,delay:.1}),0);C.add(_,0)})}if(f==8){N=N*3;if(N>r.delay)N=r.delay;var _=new punchgs.TimelineLite;o.find(".slotslide").each(function(){var t=e(this).find("div");_.add(punchgs.TweenLite.to(t,N/1e3,{left:0-r.width/2+"px",top:0-r.sloth/2+"px",width:r.width*2+"px",height:r.sloth*2+"px",force3D:"auto",opacity:0,rotation:r.rotate}),0);C.add(_,0)});u.find(".slotslide").each(function(t){var n=e(this).find("div");_.add(punchgs.TweenLite.fromTo(n,N/1e3,{left:0,top:0,opacity:0,force3D:"auto"},{left:0+"px",top:0-t*r.sloth+"px",width:u.find(".defaultimg").data("neww")+"px",height:u.find(".defaultimg").data("newh")+"px",opacity:1,rotation:0}),0);C.add(_,0)})}if(f==9||f==10){var H=0;u.find(".slotslide").each(function(t){var n=e(this);H++;C.add(punchgs.TweenLite.fromTo(n,N/1e3,{autoAlpha:0,force3D:"auto",transformPerspective:600},{autoAlpha:1,ease:punchgs.Power2.easeInOut,delay:t*5/1e3}),0)})}if(f==11||f==26){var H=0;if(f==26)N=0;u.find(".slotslide").each(function(t){var n=e(this);C.add(punchgs.TweenLite.from(n,N/1e3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power2.easeInOut}),0)})}if(f==12||f==13||f==14||f==15){N=N;if(N>r.delay)N=r.delay;setTimeout(function(){punchgs.TweenLite.set(o.find(".defaultimg"),{autoAlpha:0})},100);var B=r.width,F=r.height,I=u.find(".slotslide"),q=0,R=0,U=1,z=1,W=1,X=punchgs.Power2.easeInOut,V=punchgs.Power2.easeInOut,$=N/1e3,J=$;if(r.fullWidth=="on"||r.fullScreen=="on"){B=I.width();F=I.height()}if(f==12)q=B;else if(f==15)q=0-B;else if(f==13)R=F;else if(f==14)R=0-F;if(p==1)U=0;if(p==2)U=0;if(p==3){X=punchgs.Power2.easeInOut;V=punchgs.Power1.easeInOut;$=N/1200}if(p==4||p==5)z=.6;if(p==6)z=1.4;if(p==5||p==6){W=1.4;U=0;B=0;F=0;q=0;R=0}if(p==6)W=.6;var K=0;C.add(punchgs.TweenLite.from(I,$,{left:q,top:R,scale:W,opacity:U,rotation:r.rotate,ease:V,force3D:"auto"}),0);var G=o.find(".slotslide");if(p==4||p==5){B=0;F=0}if(p!=1)switch(f){case 12:C.add(punchgs.TweenLite.to(G,J,{left:0-B+"px",force3D:"auto",scale:z,opacity:U,rotation:r.rotate,ease:X}),0);break;case 15:C.add(punchgs.TweenLite.to(G,J,{left:B+"px",force3D:"auto",scale:z,opacity:U,rotation:r.rotate,ease:X}),0);break;case 13:C.add(punchgs.TweenLite.to(G,J,{top:0-F+"px",force3D:"auto",scale:z,opacity:U,rotation:r.rotate,ease:X}),0);break;case 14:C.add(punchgs.TweenLite.to(G,J,{top:F+"px",force3D:"auto",scale:z,opacity:U,rotation:r.rotate,ease:X}),0);break}}if(f==16){var _=new punchgs.TimelineLite;C.add(punchgs.TweenLite.set(s,{position:"absolute","z-index":20}),0);C.add(punchgs.TweenLite.set(i,{position:"absolute","z-index":15}),0);s.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>');s.find(".tp-half-one").clone(true).appendTo(s).addClass("tp-half-two");s.find(".tp-half-two").removeClass("tp-half-one");var B=r.width,F=r.height;if(r.autoHeight=="on")F=n.height();s.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:'+B+"px;height:"+F+'px;"></div>');s.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:'+B+"px;height:"+F+'px;"></div>');s.find(".tp-half-two .defaultimg").css({position:"absolute",top:"-50%"});s.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>');C.add(punchgs.TweenLite.set(s.find(".tp-half-two"),{width:B,height:F,overflow:"hidden",zIndex:15,position:"absolute",top:F/2,left:"0px",transformPerspective:600,transformOrigin:"center bottom"}),0);C.add(punchgs.TweenLite.set(s.find(".tp-half-one"),{width:B,height:F/2,overflow:"visible",zIndex:10,position:"absolute",top:"0px",left:"0px",transformPerspective:600,transformOrigin:"center top"}),0);var Y=s.find(".defaultimg"),Z=Math.round(Math.random()*20-10),et=Math.round(Math.random()*20-10),nt=Math.round(Math.random()*20-10),rt=Math.random()*.4-.2,it=Math.random()*.4-.2,st=Math.random()*1+1,ot=Math.random()*1+1,ut=Math.random()*.3+.3;C.add(punchgs.TweenLite.set(s.find(".tp-half-one"),{overflow:"hidden"}),0);C.add(punchgs.TweenLite.fromTo(s.find(".tp-half-one"),N/800,{width:B,height:F/2,position:"absolute",top:"0px",left:"0px",force3D:"auto",transformOrigin:"center top"},{scale:st,rotation:Z,y:0-F-F/4,autoAlpha:0,ease:punchgs.Power2.easeInOut}),0);C.add(punchgs.TweenLite.fromTo(s.find(".tp-half-two"),N/800,{width:B,height:F,overflow:"hidden",position:"absolute",top:F/2,left:"0px",force3D:"auto",transformOrigin:"center bottom"},{scale:ot,rotation:et,y:F+F/4,ease:punchgs.Power2.easeInOut,autoAlpha:0,onComplete:function(){punchgs.TweenLite.set(s,{position:"absolute","z-index":15});punchgs.TweenLite.set(i,{position:"absolute","z-index":20});if(s.find(".tp-half-one").length>0){s.find(".tp-half-one .defaultimg").unwrap();s.find(".tp-half-one .slotholder").unwrap()}s.find(".tp-half-two").remove()}}),0);_.add(punchgs.TweenLite.set(u.find(".defaultimg"),{autoAlpha:1}),0);if(s.html()!=null)C.add(punchgs.TweenLite.fromTo(i,(N-200)/1e3,{scale:ut,x:r.width/4*rt,y:F/4*it,rotation:nt,force3D:"auto",transformOrigin:"center center",ease:punchgs.Power2.easeOut},{autoAlpha:1,scale:1,x:0,y:0,rotation:0}),0);C.add(_,0)}if(f==17){u.find(".slotslide").each(function(t){var n=e(this);C.add(punchgs.TweenLite.fromTo(n,N/800,{opacity:0,rotationY:0,scale:.9,rotationX:-110,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:punchgs.Power3.easeOut,delay:t*.06}),0)})}if(f==18){u.find(".slotslide").each(function(t){var n=e(this);C.add(punchgs.TweenLite.fromTo(n,N/500,{autoAlpha:0,rotationY:310,scale:.9,rotationX:10,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{autoAlpha:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:punchgs.Power3.easeOut,delay:t*.06}),0)})}if(f==19||f==22){var _=new punchgs.TimelineLite;C.add(punchgs.TweenLite.set(s,{zIndex:20}),0);C.add(punchgs.TweenLite.set(i,{zIndex:20}),0);setTimeout(function(){o.find(".defaultimg").css({opacity:0})},100);var at=i.css("z-index"),ft=s.css("z-index"),lt=90,U=1,ct="center center ";if(T==1)lt=-90;if(f==19){ct=ct+"-"+r.height/2;U=0}else{ct=ct+r.height/2}punchgs.TweenLite.set(n,{transformStyle:"flat",backfaceVisibility:"hidden",transformPerspective:600});u.find(".slotslide").each(function(t){var n=e(this);_.add(punchgs.TweenLite.fromTo(n,N/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",left:0,rotationY:r.rotate,z:10,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:ct,rotationX:lt},{left:0,rotationY:0,top:0,z:0,scale:1,force3D:"auto",rotationX:0,delay:t*50/1e3,ease:punchgs.Power2.easeInOut}),0);_.add(punchgs.TweenLite.to(n,.1,{autoAlpha:1,delay:t*50/1e3}),0);C.add(_)});o.find(".slotslide").each(function(t){var n=e(this);var i=-90;if(T==1)i=90;_.add(punchgs.TweenLite.fromTo(n,N/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",autoAlpha:1,rotationY:0,top:0,z:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:ct,rotationX:0},{autoAlpha:1,rotationY:r.rotate,top:0,z:10,scale:1,rotationX:i,delay:t*50/1e3,force3D:"auto",ease:punchgs.Power2.easeInOut}),0);C.add(_)})}if(f==20){setTimeout(function(){o.find(".defaultimg").css({opacity:0})},100);var at=i.css("z-index"),ft=s.css("z-index");if(T==1){var ht=-r.width;var lt=70;var ct="left center -"+r.height/2}else{var ht=r.width;var lt=-70;var ct="right center -"+r.height/2}u.find(".slotslide").each(function(t){var n=e(this);C.add(punchgs.TweenLite.fromTo(n,N/1500,{left:ht,rotationX:40,z:-600,opacity:U,top:0,force3D:"auto",transformPerspective:600,transformOrigin:ct,rotationY:lt},{left:0,delay:t*50/1e3,ease:punchgs.Power2.easeInOut}),0);C.add(punchgs.TweenLite.fromTo(n,N/1e3,{rotationX:40,z:-600,opacity:U,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:ct,rotationY:lt},{rotationX:0,opacity:1,top:0,z:0,scale:1,rotationY:0,delay:t*50/1e3,ease:punchgs.Power2.easeInOut}),0);C.add(punchgs.TweenLite.to(n,.1,{opacity:1,force3D:"auto",delay:t*50/1e3+N/2e3}),0)});o.find(".slotslide").each(function(t){var n=e(this);if(T!=1){var i=-r.width;var s=70;var o="left center -"+r.height/2}else{var i=r.width;var s=-70;var o="right center -"+r.height/2}C.add(punchgs.TweenLite.fromTo(n,N/1e3,{opacity:1,rotationX:0,top:0,z:0,scale:1,left:0,force3D:"auto",transformPerspective:600,transformOrigin:o,rotationY:0},{opacity:1,rotationX:40,top:0,z:-600,left:i,force3D:"auto",scale:.8,rotationY:s,delay:t*50/1e3,ease:punchgs.Power2.easeInOut}),0);C.add(punchgs.TweenLite.to(n,.1,{force3D:"auto",opacity:0,delay:t*50/1e3+(N/1e3-N/1e4)}),0)})}if(f==21||f==25){setTimeout(function(){o.find(".defaultimg").css({opacity:0})},100);var at=i.css("z-index"),ft=s.css("z-index"),lt=90,ht=-r.width,pt=-lt;if(T==1){if(f==25){var ct="center top 0";lt=r.rotate}else{var ct="left center 0";pt=r.rotate}}else{ht=r.width;lt=-90;if(f==25){var ct="center bottom 0";pt=-lt;lt=r.rotate}else{var ct="right center 0";pt=r.rotate}}u.find(".slotslide").each(function(t){var n=e(this);C.add(punchgs.TweenLite.fromTo(n,N/1e3,{left:0,transformStyle:"flat",rotationX:pt,z:0,autoAlpha:0,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:ct,rotationY:lt},{left:0,rotationX:0,top:0,z:0,autoAlpha:1,scale:1,rotationY:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),0)});if(T!=1){ht=-r.width;lt=90;if(f==25){ct="center top 0";pt=-lt;lt=r.rotate}else{ct="left center 0";pt=r.rotate}}else{ht=r.width;lt=-90;if(f==25){ct="center bottom 0";pt=-lt;lt=r.rotate}else{ct="right center 0";pt=r.rotate}}o.find(".slotslide").each(function(t){var n=e(this);C.add(punchgs.TweenLite.fromTo(n,N/1e3,{left:0,transformStyle:"flat",rotationX:0,z:0,autoAlpha:1,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:ct,rotationY:0},{left:0,rotationX:pt,top:0,z:0,autoAlpha:1,force3D:"auto",scale:1,rotationY:lt,ease:punchgs.Power1.easeInOut}),0)})}if(f==23||f==24){setTimeout(function(){o.find(".defaultimg").css({opacity:0})},100);var at=i.css("z-index"),ft=s.css("z-index"),lt=-90,U=1,dt=0;if(T==1)lt=90;if(f==23){var ct="center center -"+r.width/2;U=0}else var ct="center center "+r.width/2;punchgs.TweenLite.set(n,{transformStyle:"preserve-3d",backfaceVisibility:"hidden",perspective:2500});u.find(".slotslide").each(function(t){var n=e(this);C.add(punchgs.TweenLite.fromTo(n,N/1e3,{left:dt,rotationX:r.rotate,force3D:"auto",opacity:U,top:0,scale:1,transformPerspective:600,transformOrigin:ct,rotationY:lt},{left:0,rotationX:0,autoAlpha:1,top:0,z:0,scale:1,rotationY:0,delay:t*50/500,ease:punchgs.Power2.easeInOut}),0)});lt=90;if(T==1)lt=-90;o.find(".slotslide").each(function(t){var n=e(this);C.add(punchgs.TweenLite.fromTo(n,N/1e3,{left:0,autoAlpha:1,rotationX:0,top:0,z:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:ct,rotationY:0},{left:dt,autoAlpha:1,rotationX:r.rotate,top:0,scale:1,rotationY:lt,delay:t*50/500,ease:punchgs.Power2.easeInOut}),0)})}C.pause();j(i,r,null,C);punchgs.TweenLite.to(i,.001,{autoAlpha:1});var vt={};vt.slideIndex=r.next+1;vt.slide=i;n.trigger("revolution.slide.onchange",vt);setTimeout(function(){n.trigger("revolution.slide.onafterswap")},N);n.trigger("revolution.slide.onvideostop")};var A=function(e,t,n,r,i,s,o){punchgs.TweenLite.to(n.find(".defaultimg"),.001,{autoAlpha:1,onComplete:function(){E(e,t,i)}});if(i.index()!=s.index()){punchgs.TweenLite.to(s,.2,{autoAlpha:0,onComplete:function(){E(e,t,s)}})}t.act=t.next;if(t.navigationType=="thumb")rt(e);if(n.data("kenburns")=="on"){Q(e,t)}e.find(".current-sr-slide-visible").removeClass("current-sr-slide-visible");i.addClass("current-sr-slide-visible");if(t.parallax=="scroll"||t.parallax=="scroll+mouse"||t.parallax=="mouse+scroll"){tt(e,t)}o.clear()};var O=function(t){var n=t.target.getVideoEmbedCode();var r=e("#"+n.split('id="')[1].split('"')[0]);var i=r.closest(".tp-simpleresponsive");var s=r.parent().data("player");if(t.data==YT.PlayerState.PLAYING){var o=i.find(".tp-bannertimer");var u=o.data("opt");if(r.closest(".tp-caption").data("volume")=="mute")s.mute();u.videoplaying=true;i.trigger("stoptimer");i.trigger("revolution.slide.onvideoplay")}else{var o=i.find(".tp-bannertimer");var u=o.data("opt");if(t.data!=-1&&t.data!=3){u.videoplaying=false;i.trigger("starttimer");i.trigger("revolution.slide.onvideostop")}if(t.data==0&&u.nextslideatend==true)u.container.revnext();else{u.videoplaying=false;i.trigger("starttimer");i.trigger("revolution.slide.onvideostop")}}};var M=function(e,t,n){if(e.addEventListener)e.addEventListener(t,n,false);else e.attachEvent(t,n,false)};var _=function(t,n){var r=$f(t),i=e("#"+t),s=i.closest(".tp-simpleresponsive"),o=i.closest(".tp-caption");setTimeout(function(){r.addEvent("ready",function(t){if(n)r.api("play");r.addEvent("play",function(e){var t=s.find(".tp-bannertimer");var n=t.data("opt");n.videoplaying=true;s.trigger("stoptimer");if(o.data("volume")=="mute")r.api("setVolume","0")});r.addEvent("finish",function(e){var t=s.find(".tp-bannertimer");var n=t.data("opt");n.videoplaying=false;s.trigger("starttimer");s.trigger("revolution.slide.onvideoplay");if(n.nextslideatend==true)n.container.revnext()});r.addEvent("pause",function(e){var t=s.find(".tp-bannertimer");var n=t.data("opt");n.videoplaying=false;s.trigger("starttimer");s.trigger("revolution.slide.onvideostop")});o.find(".tp-thumb-image").click(function(){punchgs.TweenLite.to(e(this),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut});r.api("play")})})},150)};var D=function(e,n){var r=n.width();var i=n.height();var s=e.data("mediaAspect");if(s==t)s=1;var o=r/i;e.css({position:"absolute"});var u=e.find("video");if(o<s){punchgs.TweenLite.to(e,1e-4,{width:i*s,force3D:"auto",top:0,left:0-(i*s-r)/2,height:i})}else{punchgs.TweenLite.to(e,1e-4,{width:r,force3D:"auto",top:0-(r/s-i)/2,left:0,height:r/s})}};var P=function(){var e=new Object;e.x=0;e.y=0;e.rotationX=0;e.rotationY=0;e.rotationZ=0;e.scale=1;e.scaleX=1;e.scaleY=1;e.skewX=0;e.skewY=0;e.opacity=0;e.transformOrigin="center, center";e.transformPerspective=400;e.rotation=0;return e};var H=function(t,n){var r=n.split(";");e.each(r,function(e,n){n=n.split(":");var r=n[0],i=n[1];if(r=="rotationX")t.rotationX=parseInt(i,0);if(r=="rotationY")t.rotationY=parseInt(i,0);if(r=="rotationZ")t.rotationZ=parseInt(i,0);if(r=="rotationZ")t.rotation=parseInt(i,0);if(r=="scaleX")t.scaleX=parseFloat(i);if(r=="scaleY")t.scaleY=parseFloat(i);if(r=="opacity")t.opacity=parseFloat(i);if(r=="skewX")t.skewX=parseInt(i,0);if(r=="skewY")t.skewY=parseInt(i,0);if(r=="x")t.x=parseInt(i,0);if(r=="y")t.y=parseInt(i,0);if(r=="z")t.z=parseInt(i,0);if(r=="transformOrigin")t.transformOrigin=i.toString();if(r=="transformPerspective")t.transformPerspective=parseInt(i,0)});return t};var B=function(t){var n=t.split("animation:");var r=new Object;r.animation=H(P(),n[1]);var i=n[0].split(";");e.each(i,function(e,t){t=t.split(":");var n=t[0],i=t[1];if(n=="typ")r.typ=i;if(n=="speed")r.speed=parseInt(i,0)/1e3;if(n=="start")r.start=parseInt(i,0)/1e3;if(n=="elementdelay")r.elementdelay=parseFloat(i);if(n=="ease")r.ease=i});return r};var j=function(n,r,i,s){function o(){}function u(){}if(n.data("ctl")==t){n.data("ctl",new punchgs.TimelineLite)}var f=n.data("ctl"),l=0,c=0,h=n.find(".tp-caption"),p=r.container.find(".tp-static-layers").find(".tp-caption");f.pause();e.each(p,function(e,t){h.push(t)});h.each(function(n){var s=i,f=-1,h=e(this);if(h.hasClass("tp-static-layer")){var p=h.data("startslide"),d=h.data("endslide");if(p==-1||p=="-1")h.data("startslide",0);if(d==-1||d=="-1")h.data("endslide",r.slideamount);if(p==0&&d==r.slideamount-1)h.data("endslide",r.slideamount+1);p=h.data("startslide"),d=h.data("endslide");if(!h.hasClass("tp-is-shown")){if(p<=r.next&&d>=r.next||p==r.next||d==r.next){h.addClass("tp-is-shown");f=1}else{f=0}}else{if(d==r.next||p>r.next||d<r.next){f=2}else{f=0}}}l=r.width/2-r.startwidth*r.bw/2;var v=r.bw;var m=r.bh;if(r.fullScreen=="on")c=r.height/2-r.startheight*r.bh/2;if(r.autoHeight=="on"||r.minHeight!=t&&r.minHeight>0)c=r.container.height()/2-r.startheight*r.bh/2;if(c<0)c=0;var g=0;if(r.width<r.hideCaptionAtLimit&&h.data("captionhidden")=="on"){h.addClass("tp-hidden-caption");g=1}else{if(r.width<r.hideAllCaptionAtLimit||r.width<r.hideAllCaptionAtLilmit){h.addClass("tp-hidden-caption");g=1}else{h.removeClass("tp-hidden-caption")}}if(g==0){if(h.data("linktoslide")!=t&&!h.hasClass("hasclicklistener")){h.addClass("hasclicklistener");h.css({cursor:"pointer"});if(h.data("linktoslide")!="no"){h.click(function(){var t=e(this);var n=t.data("linktoslide");if(n!="next"&&n!="prev"){r.container.data("showus",n);r.container.parent().find(".tp-rightarrow").click()}else if(n=="next")r.container.parent().find(".tp-rightarrow").click();else if(n=="prev")r.container.parent().find(".tp-leftarrow").click()})}}if(l<0)l=0;if(h.hasClass("tp-videolayer")||h.find("iframe").length>0||h.find("video").length>0){var y="iframe"+Math.round(Math.random()*1e5+1),b=h.data("videowidth"),w=h.data("videoheight"),E=h.data("videoattributes"),S=h.data("ytid"),x=h.data("vimeoid"),T=h.data("videpreload"),N=h.data("videomp4"),C=h.data("videowebm"),k=h.data("videoogv"),L=h.data("videocontrols"),A="http",j=h.data("videoloop")=="loop"?"loop":h.data("videoloop")=="loopandnoslidestop"?"loop":"";if(h.data("thumbimage")!=t&&h.data("videoposter")==t)h.data("videoposter",h.data("thumbimage"));if(S!=t&&String(S).length>1&&h.find("iframe").length==0){A="https";if(L=="none"){E=E.replace("controls=1","controls=0");if(E.toLowerCase().indexOf("controls")==-1)E=E+"&controls=0"}h.append('<iframe style="visible:hidden" src="'+A+"://www.youtube.com/embed/"+S+"?"+E+'" width="'+b+'" height="'+w+'" style="width:'+b+"px;height:"+w+'px"></iframe>')}if(x!=t&&String(x).length>1&&h.find("iframe").length==0){if(location.protocol==="https:")A="https";h.append('<iframe style="visible:hidden" src="'+A+"://player.vimeo.com/video/"+x+"?"+E+'" width="'+b+'" height="'+w+'" style="width:'+b+"px;height:"+w+'px"></iframe>')}if((N!=t||C!=t)&&h.find("video").length==0){if(L!="controls")L="";var I='<video style="visible:hidden" class="" '+j+' preload="'+T+'" width="'+b+'" height="'+w+'"';if(h.data("videoposter")!=t)if(h.data("videoposter")!=t)I=I+'poster="'+h.data("videoposter")+'">';if(C!=t&&F().toLowerCase()=="firefox")I=I+'<source src="'+C+'" type="video/webm" />';if(N!=t)I=I+'<source src="'+N+'" type="video/mp4" />';if(k!=t)I=I+'<source src="'+k+'" type="video/ogg" />';I=I+"</video>";h.append(I);if(L=="controls")h.append('<div class="tp-video-controls">'+'<div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div>'+'<div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div>'+'<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div>'+'<div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div>'+'<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div>'+"</div>")}var z=false;if(h.data("autoplayonlyfirsttime")==true||h.data("autoplayonlyfirsttime")=="true"||h.data("autoplay")==true){h.data("autoplay",true);z=true}h.find("iframe").each(function(){var n=e(this);punchgs.TweenLite.to(n,.1,{autoAlpha:1,zIndex:0,transformStyle:"preserve-3d",z:0,rotationX:0,force3D:"auto"});if(J()){var o=n.attr("src");n.attr("src","");n.attr("src",o)}r.nextslideatend=h.data("nextslideatend");if(h.data("videoposter")!=t&&h.data("videoposter").length>2&&h.data("autoplay")!=true&&!s){if(h.find(".tp-thumb-image").length==0)h.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url('+h.data("videoposter")+'); background-size:cover"></div>');else punchgs.TweenLite.set(h.find(".tp-thumb-image"),{autoAlpha:1})}if(n.attr("src").toLowerCase().indexOf("youtube")>=0){if(!n.hasClass("HasListener")){try{n.attr("id",y);var u;var a=setInterval(function(){if(YT!=t)if(typeof YT.Player!=t&&typeof YT.Player!="undefined"){u=new YT.Player(y,{events:{onStateChange:O,onReady:function(n){var r=n.target.getVideoEmbedCode(),i=e("#"+r.split('id="')[1].split('"')[0]),s=i.closest(".tp-caption"),o=s.data("videorate"),a=s.data("videostart");if(o!=t)n.target.setPlaybackRate(parseFloat(o));if(!J()&&s.data("autoplay")==true||z){s.data("timerplay",setTimeout(function(){n.target.playVideo()},s.data("start")))}s.find(".tp-thumb-image").click(function(){punchgs.TweenLite.to(e(this),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut});if(!J()){u.playVideo()}})}}})}n.addClass("HasListener");h.data("player",u);clearInterval(a)},100)}catch(f){}}else{if(!i){var u=h.data("player");if(h.data("forcerewind")=="on"&&!J())u.seekTo(0);if(!J()&&h.data("autoplay")==true||z){h.data("timerplay",setTimeout(function(){u.playVideo()},h.data("start")))}}}}else if(n.attr("src").toLowerCase().indexOf("vimeo")>=0){if(!n.hasClass("HasListener")){n.addClass("HasListener");n.attr("id",y);var l=n.attr("src");var c={},p=l,d=/([^&=]+)=([^&]*)/g,v;while(v=d.exec(p)){c[decodeURIComponent(v[1])]=decodeURIComponent(v[2])}if(c["player_id"]!=t)l=l.replace(c["player_id"],y);else l=l+"&player_id="+y;try{l=l.replace("api=0","api=1")}catch(f){}l=l+"&api=1";n.attr("src",l);var u=h.find("iframe")[0];var m=setInterval(function(){if($f!=t){if(typeof $f(y).api!=t&&typeof $f(y).api!="undefined"){$f(u).addEvent("ready",function(){_(y,z)});clearInterval(m)}}},100)}else{if(!i){if(!J()&&(h.data("autoplay")==true||h.data("forcerewind")=="on")){var n=h.find("iframe");var g=n.attr("id");var b=$f(g);if(h.data("forcerewind")=="on")b.api("seekTo",0);h.data("timerplay",setTimeout(function(){if(h.data("autoplay")==true)b.api("play")},h.data("start")))}}}}});if(J()&&h.data("disablevideoonmobile")==1||a(8))h.find("video").remove();if(h.find("video").length>0){h.find("video").each(function(n){var i=this,s=e(this);if(!s.parent().hasClass("html5vid"))s.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"></div>');var o=s.parent();M(i,"loadedmetadata",function(e){e.data("metaloaded",1)}(o));clearInterval(o.data("interval"));o.data("interval",setInterval(function(){if(o.data("metaloaded")==1||i.duration!=NaN){clearInterval(o.data("interval"));if(!o.hasClass("HasListener")){o.addClass("HasListener");if(h.data("dottedoverlay")!="none"&&h.data("dottedoverlay")!=t)if(h.find(".tp-dottedoverlay").length!=1)o.append('<div class="tp-dottedoverlay '+h.data("dottedoverlay")+'"></div>');if(s.attr("control")==t){if(o.find(".tp-video-play-button").length==0)o.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><div class="tp-revstop"></div></div>');o.find("video, .tp-poster, .tp-video-play-button").click(function(){if(o.hasClass("videoisplaying"))i.pause();else i.play()})}if(h.data("forcecover")==1||h.hasClass("fullscreenvideo")){if(h.data("forcecover")==1){D(o,r.container);o.addClass("fullcoveredvideo");h.addClass("fullcoveredvideo")}o.css({width:"100%",height:"100%"})}var e=h.find(".tp-vid-play-pause")[0],n=h.find(".tp-vid-mute")[0],u=h.find(".tp-vid-full-screen")[0],a=h.find(".tp-seek-bar")[0],f=h.find(".tp-volume-bar")[0];if(e!=t){M(e,"click",function(){if(i.paused==true)i.play();else i.pause()});M(n,"click",function(){if(i.muted==false){i.muted=true;n.innerHTML="Unmute"}else{i.muted=false;n.innerHTML="Mute"}});M(u,"click",function(){if(i.requestFullscreen){i.requestFullscreen()}else if(i.mozRequestFullScreen){i.mozRequestFullScreen()}else if(i.webkitRequestFullscreen){i.webkitRequestFullscreen()}});M(a,"change",function(){var e=i.duration*(a.value/100);i.currentTime=e});M(i,"timeupdate",function(){var e=100/i.duration*i.currentTime;a.value=e});M(a,"mousedown",function(){i.pause()});M(a,"mouseup",function(){i.play()});M(f,"change",function(){i.volume=f.value})}M(i,"play",function(){if(h.data("volume")=="mute")i.muted=true;o.addClass("videoisplaying");if(h.data("videoloop")=="loopandnoslidestop"){r.videoplaying=false;r.container.trigger("starttimer");r.container.trigger("revolution.slide.onvideostop")}else{r.videoplaying=true;r.container.trigger("stoptimer");r.container.trigger("revolution.slide.onvideoplay")}var e=h.find(".tp-vid-play-pause")[0],n=h.find(".tp-vid-mute")[0];if(e!=t)e.innerHTML="Pause";if(n!=t&&i.muted)n.innerHTML="Unmute"});M(i,"pause",function(){o.removeClass("videoisplaying");r.videoplaying=false;r.container.trigger("starttimer");r.container.trigger("revolution.slide.onvideostop");var e=h.find(".tp-vid-play-pause")[0];if(e!=t)e.innerHTML="Play"});M(i,"ended",function(){o.removeClass("videoisplaying");r.videoplaying=false;r.container.trigger("starttimer");r.container.trigger("revolution.slide.onvideostop");if(r.nextslideatend==true)r.container.revnext()})}var l=false;if(h.data("autoplayonlyfirsttime")==true||h.data("autoplayonlyfirsttime")=="true")l=true;var c=16/9;if(h.data("aspectratio")=="4:3")c=4/3;o.data("mediaAspect",c);if(o.closest(".tp-caption").data("forcecover")==1){D(o,r.container);o.addClass("fullcoveredvideo")}s.css({display:"block"});r.nextslideatend=h.data("nextslideatend");if(h.data("autoplay")==true||l==true){if(h.data("videoloop")=="loopandnoslidestop"){r.videoplaying=false;r.container.trigger("starttimer");r.container.trigger("revolution.slide.onvideostop")}else{r.videoplaying=true;r.container.trigger("stoptimer");r.container.trigger("revolution.slide.onvideoplay")}if(h.data("forcerewind")=="on"&&!o.hasClass("videoisplaying"))if(i.currentTime>0)i.currentTime=0;if(h.data("volume")=="mute")i.muted=true;o.data("timerplay",setTimeout(function(){if(h.data("forcerewind")=="on"&&!o.hasClass("videoisplaying"))if(i.currentTime>0)i.currentTime=0;if(h.data("volume")=="mute")i.muted=true;i.play()},10+h.data("start")))}if(o.data("ww")==t)o.data("ww",s.attr("width"));if(o.data("hh")==t)o.data("hh",s.attr("height"));if(!h.hasClass("fullscreenvideo")&&h.data("forcecover")==1){try{o.width(o.data("ww")*r.bw);o.height(o.data("hh")*r.bh)}catch(p){}}clearInterval(o.data("interval"))}}),100)})}if(h.data("autoplay")==true){setTimeout(function(){if(h.data("videoloop")!="loopandnoslidestop"){r.videoplaying=true;r.container.trigger("stoptimer")}},200);if(h.data("videoloop")!="loopandnoslidestop"){r.videoplaying=true;r.container.trigger("stoptimer")}if(h.data("autoplayonlyfirsttime")==true||h.data("autoplayonlyfirsttime")=="true"){h.data("autoplay",false);h.data("autoplayonlyfirsttime",false)}}}var V=0;var $=0;if(h.find("img").length>0){var K=h.find("img");if(K.width()==0)K.css({width:"auto"});if(K.height()==0)K.css({height:"auto"});if(K.data("ww")==t&&K.width()>0)K.data("ww",K.width());if(K.data("hh")==t&&K.height()>0)K.data("hh",K.height());var Q=K.data("ww");var G=K.data("hh");if(Q==t)Q=0;if(G==t)G=0;K.width(Q*r.bw);K.height(G*r.bh);V=K.width();$=K.height()}else{if(h.find("iframe").length>0||h.find("video").length>0){var Y=false,K=h.find("iframe");if(K.length==0){K=h.find("video");Y=true}K.css({display:"block"});if(h.data("ww")==t)h.data("ww",K.width());if(h.data("hh")==t)h.data("hh",K.height());var Q=h.data("ww"),G=h.data("hh");var Z=h;if(Z.data("fsize")==t)Z.data("fsize",parseInt(Z.css("font-size"),0)||0);if(Z.data("pt")==t)Z.data("pt",parseInt(Z.css("paddingTop"),0)||0);if(Z.data("pb")==t)Z.data("pb",parseInt(Z.css("paddingBottom"),0)||0);if(Z.data("pl")==t)Z.data("pl",parseInt(Z.css("paddingLeft"),0)||0);if(Z.data("pr")==t)Z.data("pr",parseInt(Z.css("paddingRight"),0)||0);if(Z.data("mt")==t)Z.data("mt",parseInt(Z.css("marginTop"),0)||0);if(Z.data("mb")==t)Z.data("mb",parseInt(Z.css("marginBottom"),0)||0);if(Z.data("ml")==t)Z.data("ml",parseInt(Z.css("marginLeft"),0)||0);if(Z.data("mr")==t)Z.data("mr",parseInt(Z.css("marginRight"),0)||0);if(Z.data("bt")==t)Z.data("bt",parseInt(Z.css("borderTop"),0)||0);if(Z.data("bb")==t)Z.data("bb",parseInt(Z.css("borderBottom"),0)||0);if(Z.data("bl")==t)Z.data("bl",parseInt(Z.css("borderLeft"),0)||0);if(Z.data("br")==t)Z.data("br",parseInt(Z.css("borderRight"),0)||0);if(Z.data("lh")==t)Z.data("lh",parseInt(Z.css("lineHeight"),0)||0);if(Z.data("lh")=="auto")Z.data("lh",Z.data("fsize")+4);var et=r.width,tt=r.height;if(et>r.startwidth)et=r.startwidth;if(tt>r.startheight)tt=r.startheight;if(!h.hasClass("fullscreenvideo"))h.css({"font-size":Z.data("fsize")*r.bw+"px","padding-top":Z.data("pt")*r.bh+"px","padding-bottom":Z.data("pb")*r.bh+"px","padding-left":Z.data("pl")*r.bw+"px","padding-right":Z.data("pr")*r.bw+"px","margin-top":Z.data("mt")*r.bh+"px","margin-bottom":Z.data("mb")*r.bh+"px","margin-left":Z.data("ml")*r.bw+"px","margin-right":Z.data("mr")*r.bw+"px","border-top":Z.data("bt")*r.bh+"px","border-bottom":Z.data("bb")*r.bh+"px","border-left":Z.data("bl")*r.bw+"px","border-right":Z.data("br")*r.bw+"px","line-height":Z.data("lh")*r.bh+"px",height:G*r.bh+"px"});else{l=0;c=0;h.data("x",0);h.data("y",0);var nt=r.height;if(r.autoHeight=="on")nt=r.container.height();h.css({width:r.width,height:nt})}if(Y==false){K.width(Q*r.bw);K.height(G*r.bh)}else if(h.data("forcecover")!=1&&!h.hasClass("fullscreenvideo")){K.width(Q*r.bw);K.height(G*r.bh)}V=K.width();$=K.height()}else{h.find(".tp-resizeme, .tp-resizeme *").each(function(){q(e(this),r)});if(h.hasClass("tp-resizeme")){h.find("*").each(function(){q(e(this),r)})}q(h,r);$=h.outerHeight(true);V=h.outerWidth(true);var rt=h.outerHeight();var it=h.css("backgroundColor");h.find(".frontcorner").css({borderWidth:rt+"px",left:0-rt+"px",borderRight:"0px solid transparent",borderTopColor:it});h.find(".frontcornertop").css({borderWidth:rt+"px",left:0-rt+"px",borderRight:"0px solid transparent",borderBottomColor:it});h.find(".backcorner").css({borderWidth:rt+"px",right:0-rt+"px",borderLeft:"0px solid transparent",borderBottomColor:it});h.find(".backcornertop").css({borderWidth:rt+"px",right:0-rt+"px",borderLeft:"0px solid transparent",borderTopColor:it})}}if(r.fullScreenAlignForce=="on"){l=0;c=0}if(h.data("voffset")==t)h.data("voffset",0);if(h.data("hoffset")==t)h.data("hoffset",0);var st=h.data("voffset")*v;var ot=h.data("hoffset")*v;var ut=r.startwidth*v;var at=r.startheight*v;if(r.fullScreenAlignForce=="on"){ut=r.container.width();at=r.container.height()}if(h.data("x")=="center"||h.data("xcenter")=="center"){h.data("xcenter","center");h.data("x",ut/2-h.outerWidth(true)/2+ot)}if(h.data("x")=="left"||h.data("xleft")=="left"){h.data("xleft","left");h.data("x",0/v+ot)}if(h.data("x")=="right"||h.data("xright")=="right"){h.data("xright","right");h.data("x",(ut-h.outerWidth(true)+ot)/v)}if(h.data("y")=="center"||h.data("ycenter")=="center"){h.data("ycenter","center");h.data("y",at/2-h.outerHeight(true)/2+st)}if(h.data("y")=="top"||h.data("ytop")=="top"){h.data("ytop","top");h.data("y",0/r.bh+st)}if(h.data("y")=="bottom"||h.data("ybottom")=="bottom"){h.data("ybottom","bottom");h.data("y",(at-h.outerHeight(true)+st)/v)}if(h.data("start")==t)h.data("start",1e3);var ft=h.data("easing");if(ft==t)ft="punchgs.Power1.easeOut";var lt=h.data("start")/1e3,ct=h.data("speed")/1e3;if(h.data("x")=="center"||h.data("xcenter")=="center")var ht=h.data("x")+l;else{var ht=v*h.data("x")+l}if(h.data("y")=="center"||h.data("ycenter")=="center")var pt=h.data("y")+c;else{var pt=r.bh*h.data("y")+c}punchgs.TweenLite.set(h,{top:pt,left:ht,overwrite:"auto"});if(f==0)s=true;if(h.data("timeline")!=t&&!s){if(f!=2)h.data("timeline").gotoAndPlay(0);s=true}if(!s){if(h.data("timeline")!=t){}var dt=new punchgs.TimelineLite({smoothChildTiming:true,onStart:u});dt.pause();if(r.fullScreenAlignForce=="on"){}var vt=h;if(h.data("mySplitText")!=t)h.data("mySplitText").revert();if(h.data("splitin")=="chars"||h.data("splitin")=="words"||h.data("splitin")=="lines"||h.data("splitout")=="chars"||h.data("splitout")=="words"||h.data("splitout")=="lines"){if(h.find("a").length>0)h.data("mySplitText",new punchgs.SplitText(h.find("a"),{type:"lines,words,chars",charsClass:"tp-splitted",wordsClass:"tp-splitted",linesClass:"tp-splitted"}));else if(h.find(".tp-layer-inner-rotation").length>0)h.data("mySplitText",new punchgs.SplitText(h.find(".tp-layer-inner-rotation"),{type:"lines,words,chars",charsClass:"tp-splitted",wordsClass:"tp-splitted",linesClass:"tp-splitted"}));else h.data("mySplitText",new punchgs.SplitText(h,{type:"lines,words,chars",charsClass:"tp-splitted",wordsClass:"tp-splitted",linesClass:"tp-splitted"}));h.addClass("splitted")}if(h.data("splitin")=="chars")vt=h.data("mySplitText").chars;if(h.data("splitin")=="words")vt=h.data("mySplitText").words;if(h.data("splitin")=="lines")vt=h.data("mySplitText").lines;var mt=P();var gt=P();if(h.data("repeat")!=t)repeatV=h.data("repeat");if(h.data("yoyo")!=t)yoyoV=h.data("yoyo");if(h.data("repeatdelay")!=t)repeatdelayV=h.data("repeatdelay");var yt=h.attr("class");if(yt.match("customin"))mt=H(mt,h.data("customin"));else if(yt.match("randomrotate")){mt.scale=Math.random()*3+1;mt.rotation=Math.round(Math.random()*200-100);mt.x=Math.round(Math.random()*200-100);mt.y=Math.round(Math.random()*200-100)}else if(yt.match("lfr")||yt.match("skewfromright"))mt.x=15+r.width;else if(yt.match("lfl")||yt.match("skewfromleft"))mt.x=-15-V;else if(yt.match("sfl")||yt.match("skewfromleftshort"))mt.x=-50;else if(yt.match("sfr")||yt.match("skewfromrightshort"))mt.x=50;else if(yt.match("lft"))mt.y=-25-$;else if(yt.match("lfb"))mt.y=25+r.height;else if(yt.match("sft"))mt.y=-50;else if(yt.match("sfb"))mt.y=50;if(yt.match("skewfromright")||h.hasClass("skewfromrightshort"))mt.skewX=-85;else if(yt.match("skewfromleft")||h.hasClass("skewfromleftshort"))mt.skewX=85;if(yt.match("fade")||yt.match("sft")||yt.match("sfl")||yt.match("sfb")||yt.match("skewfromleftshort")||yt.match("sfr")||yt.match("skewfromrightshort"))mt.opacity=0;if(F().toLowerCase()=="safari"){}var bt=h.data("elementdelay")==t?0:h.data("elementdelay");gt.ease=mt.ease=h.data("easing")==t?punchgs.Power1.easeInOut:h.data("easing");mt.data=new Object;mt.data.oldx=mt.x;mt.data.oldy=mt.y;gt.data=new Object;gt.data.oldx=gt.x;gt.data.oldy=gt.y;mt.x=mt.x*v;mt.y=mt.y*v;var wt=new punchgs.TimelineLite;if(f!=2){if(yt.match("customin")){if(vt!=h)dt.add(punchgs.TweenLite.set(h,{force3D:"auto",opacity:1,scaleX:1,scaleY:1,rotationX:0,rotationY:0,rotationZ:0,skewX:0,skewY:0,z:0,x:0,y:0,visibility:"visible",delay:0,overwrite:"all"}));mt.visibility="hidden";gt.visibility="visible";gt.overwrite="all";gt.opacity=1;gt.onComplete=o();gt.delay=lt;gt.force3D="auto";dt.add(wt.staggerFromTo(vt,ct,mt,gt,bt),"frame0")}else{mt.visibility="visible";mt.transformPerspective=600;if(vt!=h)dt.add(punchgs.TweenLite.set(h,{force3D:"auto",opacity:1,scaleX:1,scaleY:1,rotationX:0,rotationY:0,rotationZ:0,skewX:0,skewY:0,z:0,x:0,y:0,visibility:"visible",delay:0,overwrite:"all"}));gt.visibility="visible";gt.delay=lt;gt.onComplete=o();gt.opacity=1;gt.force3D="auto";if(yt.match("randomrotate")&&vt!=h){for(var n=0;n<vt.length;n++){var Et=new Object;var St=new Object;e.extend(Et,mt);e.extend(St,gt);mt.scale=Math.random()*3+1;mt.rotation=Math.round(Math.random()*200-100);mt.x=Math.round(Math.random()*200-100);mt.y=Math.round(Math.random()*200-100);if(n!=0)St.delay=lt+n*bt;dt.append(punchgs.TweenLite.fromTo(vt[n],ct,Et,St),"frame0")}}else dt.add(wt.staggerFromTo(vt,ct,mt,gt,bt),"frame0")}}h.data("timeline",dt);var xt=new Array;if(h.data("frames")!=t){var Tt=h.data("frames");Tt=Tt.replace(/\s+/g,"");Tt=Tt.replace("{","");var Nt=Tt.split("}");e.each(Nt,function(e,t){if(t.length>0){var n=B(t);W(h,r,n,"frame"+(e+10),v)}})}dt=h.data("timeline");if(h.data("end")!=t&&(f==-1||f==2)){X(h,r,h.data("end")/1e3,mt,"frame99",v)}else{if(f==-1||f==2)X(h,r,999999,mt,"frame99",v);else X(h,r,200,mt,"frame99",v)}dt=h.data("timeline");h.data("timeline",dt);R(h,v);dt.resume()}}if(s){U(h);R(h,v);if(h.data("timeline")!=t){var Ct=h.data("timeline").getTweensOf();e.each(Ct,function(e,n){if(n.vars.data!=t){var r=n.vars.data.oldx*v;var i=n.vars.data.oldy*v;if(n.progress()!=1&&n.progress()!=0){try{n.vars.x=r;n.vary.y=i}catch(s){}}else{if(n.progress()==1){punchgs.TweenLite.set(n.target,{x:r,y:i})}}}})}}});var d=e("body").find("#"+r.container.attr("id")).find(".tp-bannertimer");d.data("opt",r);if(s!=t)setTimeout(function(){s.resume()},30)};var F=function(){var e=navigator.appName,t=navigator.userAgent,n;var r=t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);if(r&&(n=t.match(/version\/([\.\d]+)/i))!=null)r[2]=n[1];r=r?[r[1],r[2]]:[e,navigator.appVersion,"-?"];return r[0]};var I=function(){var e=navigator.appName,t=navigator.userAgent,n;var r=t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);if(r&&(n=t.match(/version\/([\.\d]+)/i))!=null)r[2]=n[1];r=r?[r[1],r[2]]:[e,navigator.appVersion,"-?"];return r[1]};var q=function(e,n){if(e.data("fsize")==t)e.data("fsize",parseInt(e.css("font-size"),0)||0);if(e.data("pt")==t)e.data("pt",parseInt(e.css("paddingTop"),0)||0);if(e.data("pb")==t)e.data("pb",parseInt(e.css("paddingBottom"),0)||0);if(e.data("pl")==t)e.data("pl",parseInt(e.css("paddingLeft"),0)||0);if(e.data("pr")==t)e.data("pr",parseInt(e.css("paddingRight"),0)||0);if(e.data("mt")==t)e.data("mt",parseInt(e.css("marginTop"),0)||0);if(e.data("mb")==t)e.data("mb",parseInt(e.css("marginBottom"),0)||0);if(e.data("ml")==t)e.data("ml",parseInt(e.css("marginLeft"),0)||0);if(e.data("mr")==t)e.data("mr",parseInt(e.css("marginRight"),0)||0);if(e.data("bt")==t)e.data("bt",parseInt(e.css("borderTopWidth"),0)||0);if(e.data("bb")==t)e.data("bb",parseInt(e.css("borderBottomWidth"),0)||0);if(e.data("bl")==t)e.data("bl",parseInt(e.css("borderLeftWidth"),0)||0);if(e.data("br")==t)e.data("br",parseInt(e.css("borderRightWidth"),0)||0);if(e.data("ls")==t)e.data("ls",parseInt(e.css("letterSpacing"),0)||0);if(e.data("lh")==t)e.data("lh",parseInt(e.css("lineHeight"),0)||"auto");if(e.data("minwidth")==t)e.data("minwidth",parseInt(e.css("minWidth"),0)||0);if(e.data("minheight")==t)e.data("minheight",parseInt(e.css("minHeight"),0)||0);if(e.data("maxwidth")==t)e.data("maxwidth",parseInt(e.css("maxWidth"),0)||"none");if(e.data("maxheight")==t)e.data("maxheight",parseInt(e.css("maxHeight"),0)||"none");if(e.data("wii")==t)e.data("wii",parseInt(e.css("width"),0)||0);if(e.data("hii")==t)e.data("hii",parseInt(e.css("height"),0)||0);if(e.data("wan")==t)e.data("wan",e.css("-webkit-transition"));if(e.data("moan")==t)e.data("moan",e.css("-moz-animation-transition"));if(e.data("man")==t)e.data("man",e.css("-ms-animation-transition"));if(e.data("ani")==t)e.data("ani",e.css("transition"));if(e.data("lh")=="auto")e.data("lh",e.data("fsize")+4);if(!e.hasClass("tp-splitted")){e.css("-webkit-transition","none");e.css("-moz-transition","none");e.css("-ms-transition","none");e.css("transition","none");punchgs.TweenLite.set(e,{fontSize:Math.round(e.data("fsize")*n.bw)+"px",letterSpacing:Math.floor(e.data("ls")*n.bw)+"px",paddingTop:Math.round(e.data("pt")*n.bh)+"px",paddingBottom:Math.round(e.data("pb")*n.bh)+"px",paddingLeft:Math.round(e.data("pl")*n.bw)+"px",paddingRight:Math.round(e.data("pr")*n.bw)+"px",marginTop:e.data("mt")*n.bh+"px",marginBottom:e.data("mb")*n.bh+"px",marginLeft:e.data("ml")*n.bw+"px",marginRight:e.data("mr")*n.bw+"px",borderTopWidth:Math.round(e.data("bt")*n.bh)+"px",borderBottomWidth:Math.round(e.data("bb")*n.bh)+"px",borderLeftWidth:Math.round(e.data("bl")*n.bw)+"px",borderRightWidth:Math.round(e.data("br")*n.bw)+"px",lineHeight:Math.round(e.data("lh")*n.bh)+"px",minWidth:e.data("minwidth")*n.bw+"px",minHeight:e.data("minheight")*n.bh+"px",overwrite:"auto"});setTimeout(function(){e.css("-webkit-transition",e.data("wan"));e.css("-moz-transition",e.data("moan"));e.css("-ms-transition",e.data("man"));e.css("transition",e.data("ani"))},30);if(e.data("maxheight")!="none")e.css({maxHeight:e.data("maxheight")*n.bh+"px"});if(e.data("maxwidth")!="none")e.css({maxWidth:e.data("maxwidth")*n.bw+"px"})}};var R=function(n,r){n.find(".rs-pendulum").each(function(){var n=e(this);if(n.data("timeline")==t){n.data("timeline",new punchgs.TimelineLite);var i=n.data("startdeg")==t?-20:n.data("startdeg"),s=n.data("enddeg")==t?20:n.data("enddeg"),o=n.data("speed")==t?2:n.data("speed"),u=n.data("origin")==t?"50% 50%":n.data("origin"),a=n.data("easing")==t?punchgs.Power2.easeInOut:n.data("ease");i=i*r;s=s*r;n.data("timeline").append(new punchgs.TweenLite.fromTo(n,o,{force3D:"auto",rotation:i,transformOrigin:u},{rotation:s,ease:a}));n.data("timeline").append(new punchgs.TweenLite.fromTo(n,o,{force3D:"auto",rotation:s,transformOrigin:u},{rotation:i,ease:a,onComplete:function(){n.data("timeline").restart()}}))}});n.find(".rs-rotate").each(function(){var n=e(this);if(n.data("timeline")==t){n.data("timeline",new punchgs.TimelineLite);var i=n.data("startdeg")==t?0:n.data("startdeg"),s=n.data("enddeg")==t?360:n.data("enddeg");speed=n.data("speed")==t?2:n.data("speed"),origin=n.data("origin")==t?"50% 50%":n.data("origin"),easing=n.data("easing")==t?punchgs.Power2.easeInOut:n.data("easing");i=i*r;s=s*r;n.data("timeline").append(new punchgs.TweenLite.fromTo(n,speed,{force3D:"auto",rotation:i,transformOrigin:origin},{rotation:s,ease:easing,onComplete:function(){n.data("timeline").restart()}}))}});n.find(".rs-slideloop").each(function(){var n=e(this);if(n.data("timeline")==t){n.data("timeline",new punchgs.TimelineLite);var i=n.data("xs")==t?0:n.data("xs"),s=n.data("ys")==t?0:n.data("ys"),o=n.data("xe")==t?0:n.data("xe"),u=n.data("ye")==t?0:n.data("ye"),a=n.data("speed")==t?2:n.data("speed"),f=n.data("easing")==t?punchgs.Power2.easeInOut:n.data("easing");i=i*r;s=s*r;o=o*r;u=u*r;n.data("timeline").append(new punchgs.TweenLite.fromTo(n,a,{force3D:"auto",x:i,y:s},{x:o,y:u,ease:f}));n.data("timeline").append(new punchgs.TweenLite.fromTo(n,a,{force3D:"auto",x:o,y:u},{x:i,y:s,onComplete:function(){n.data("timeline").restart()}}))}});n.find(".rs-pulse").each(function(){var n=e(this);if(n.data("timeline")==t){n.data("timeline",new punchgs.TimelineLite);var r=n.data("zoomstart")==t?0:n.data("zoomstart"),i=n.data("zoomend")==t?0:n.data("zoomend"),s=n.data("speed")==t?2:n.data("speed"),o=n.data("easing")==t?punchgs.Power2.easeInOut:n.data("easing");n.data("timeline").append(new punchgs.TweenLite.fromTo(n,s,{force3D:"auto",scale:r},{scale:i,ease:o}));n.data("timeline").append(new punchgs.TweenLite.fromTo(n,s,{force3D:"auto",scale:i},{scale:r,onComplete:function(){n.data("timeline").restart()}}))}});n.find(".rs-wave").each(function(){var n=e(this);if(n.data("timeline")==t){n.data("timeline",new punchgs.TimelineLite);var i=n.data("angle")==t?10:n.data("angle"),s=n.data("radius")==t?10:n.data("radius"),o=n.data("speed")==t?-20:n.data("speed"),u=n.data("origin")==t?-20:n.data("origin");i=i*r;s=s*r;var a={a:0,ang:i,element:n,unit:s};n.data("timeline").append(new punchgs.TweenLite.fromTo(a,o,{a:360},{a:0,force3D:"auto",ease:punchgs.Linear.easeNone,onUpdate:function(){var e=a.a*(Math.PI/180);punchgs.TweenLite.to(a.element,.1,{force3D:"auto",x:Math.cos(e)*a.unit,y:a.unit*(1-Math.sin(e))})},onComplete:function(){n.data("timeline").restart()}}))}})};var U=function(n){n.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function(){var n=e(this);if(n.data("timeline")!=t){n.data("timeline").pause();n.data("timeline",null)}})};var z=function(n,r){var i=0;var s=n.find(".tp-caption"),o=r.container.find(".tp-static-layers").find(".tp-caption");e.each(o,function(e,t){s.push(t)});s.each(function(n){var s=-1;var o=e(this);if(o.hasClass("tp-static-layer")){if(o.data("startslide")==-1||o.data("startslide")=="-1")o.data("startslide",0);if(o.data("endslide")==-1||o.data("endslide")=="-1")o.data("endslide",r.slideamount);if(o.hasClass("tp-is-shown")){if(o.data("startslide")>r.next||o.data("endslide")<r.next){s=2;o.removeClass("tp-is-shown")}else{s=0}}else{s=2}}if(s!=0){U(o);if(o.find("iframe").length>0){punchgs.TweenLite.to(o.find("iframe"),.2,{autoAlpha:0});if(J())o.find("iframe").remove();try{var u=o.find("iframe");var a=u.attr("id");var f=$f(a);f.api("pause");clearTimeout(o.data("timerplay"))}catch(l){}try{var c=o.data("player");c.stopVideo();clearTimeout(o.data("timerplay"))}catch(l){}}if(o.find("video").length>0){try{o.find("video").each(function(t){var n=e(this).parent();var r=n.attr("id");clearTimeout(n.data("timerplay"));var i=this;i.pause()})}catch(l){}}try{var h=o.data("timeline");var p=h.getLabelTime("frame99");var d=h.time();if(p>d){var v=h.getTweensOf(o);e.each(v,function(e,t){if(e!=0)t.pause()});if(o.css("opacity")!=0){var m=o.data("endspeed")==t?o.data("speed"):o.data("endspeed");if(m>i)i=m;h.play("frame99")}else h.progress(1,false)}}catch(l){}}});return i};var W=function(e,n,r,i,s){var o=e.data("timeline");var u=new punchgs.TimelineLite;var a=e;if(r.typ=="chars")a=e.data("mySplitText").chars;else if(r.typ=="words")a=e.data("mySplitText").words;else if(r.typ=="lines")a=e.data("mySplitText").lines;r.animation.ease=r.ease;if(r.animation.rotationZ!=t)r.animation.rotation=r.animation.rotationZ;r.animation.data=new Object;r.animation.data.oldx=r.animation.x;r.animation.data.oldy=r.animation.y;r.animation.x=r.animation.x*s;r.animation.y=r.animation.y*s;o.add(u.staggerTo(a,r.speed,r.animation,r.elementdelay),r.start);o.addLabel(i,r.start);e.data("timeline",o)};var X=function(e,n,r,i,s,o){var u=e.data("timeline"),a=new punchgs.TimelineLite;var f=P(),l=e.data("endspeed")==t?e.data("speed"):e.data("endspeed"),c=e.attr("class");f.ease=e.data("endeasing")==t?punchgs.Power1.easeInOut:e.data("endeasing");l=l/1e3;if(c.match("ltr")||c.match("ltl")||c.match("str")||c.match("stl")||c.match("ltt")||c.match("ltb")||c.match("stt")||c.match("stb")||c.match("skewtoright")||c.match("skewtorightshort")||c.match("skewtoleft")||c.match("skewtoleftshort")||c.match("fadeout")||c.match("randomrotateout")){if(c.match("skewtoright")||c.match("skewtorightshort"))f.skewX=35;else if(c.match("skewtoleft")||c.match("skewtoleftshort"))f.skewX=-35;if(c.match("ltr")||c.match("skewtoright"))f.x=n.width+60;else if(c.match("ltl")||c.match("skewtoleft"))f.x=0-(n.width+60);else if(c.match("ltt"))f.y=0-(n.height+60);else if(c.match("ltb"))f.y=n.height+60;else if(c.match("str")||c.match("skewtorightshort")){f.x=50;f.opacity=0}else if(c.match("stl")||c.match("skewtoleftshort")){f.x=-50;f.opacity=0}else if(c.match("stt")){f.y=-50;f.opacity=0}else if(c.match("stb")){f.y=50;f.opacity=0}else if(c.match("randomrotateout")){f.x=Math.random()*n.width;f.y=Math.random()*n.height;f.scale=Math.random()*2+.3;f.rotation=Math.random()*360-180;f.opacity=0}else if(c.match("fadeout")){f.opacity=0}if(c.match("skewtorightshort"))f.x=270;else if(c.match("skewtoleftshort"))f.x=-270;f.data=new Object;f.data.oldx=f.x;f.data.oldy=f.y;f.x=f.x*o;f.y=f.y*o;f.overwrite="auto";var h=e;var h=e;if(e.data("splitout")=="chars")h=e.data("mySplitText").chars;else if(e.data("splitout")=="words")h=e.data("mySplitText").words;else if(e.data("splitout")=="lines")h=e.data("mySplitText").lines;var p=e.data("endelementdelay")==t?0:e.data("endelementdelay");u.add(a.staggerTo(h,l,f,p),r)}else if(e.hasClass("customout")){f=H(f,e.data("customout"));var h=e;if(e.data("splitout")=="chars")h=e.data("mySplitText").chars;else if(e.data("splitout")=="words")h=e.data("mySplitText").words;else if(e.data("splitout")=="lines")h=e.data("mySplitText").lines;var p=e.data("endelementdelay")==t?0:e.data("endelementdelay");f.onStart=function(){punchgs.TweenLite.set(e,{transformPerspective:f.transformPerspective,transformOrigin:f.transformOrigin,overwrite:"auto"})};f.data=new Object;f.data.oldx=f.x;f.data.oldy=f.y;f.x=f.x*o;f.y=f.y*o;u.add(a.staggerTo(h,l,f,p),r)}else{i.delay=0;u.add(punchgs.TweenLite.to(e,l,i),r)}u.addLabel(s,r);e.data("timeline",u)};var V=function(t,n){t.children().each(function(){try{e(this).die("click")}catch(t){}try{e(this).die("mouseenter")}catch(t){}try{e(this).die("mouseleave")}catch(t){}try{e(this).unbind("hover")}catch(t){}});try{t.die("click","mouseenter","mouseleave")}catch(r){}clearInterval(n.cdint);t=null};var $=function(n,r){r.cd=0;r.loop=0;if(r.stopAfterLoops!=t&&r.stopAfterLoops>-1)r.looptogo=r.stopAfterLoops;else r.looptogo=9999999;if(r.stopAtSlide!=t&&r.stopAtSlide>-1)r.lastslidetoshow=r.stopAtSlide;else r.lastslidetoshow=999;r.stopLoop="off";if(r.looptogo==0)r.stopLoop="on";if(r.slideamount>1&&!(r.stopAfterLoops==0&&r.stopAtSlide==1)){var i=n.find(".tp-bannertimer");n.on("stoptimer",function(){var t=e(this).find(".tp-bannertimer");t.data("tween").pause();if(r.hideTimerBar=="on")t.css({visibility:"hidden"})});n.on("starttimer",function(){if(r.conthover!=1&&r.videoplaying!=true&&r.width>r.hideSliderAtLimit&&r.bannertimeronpause!=true&&r.overnav!=true)if(r.stopLoop=="on"&&r.next==r.lastslidetoshow-1||r.noloopanymore==1)r.noloopanymore=1;else{i.css({visibility:"visible"});i.data("tween").resume()}if(r.hideTimerBar=="on")i.css({visibility:"hidden"})});n.on("restarttimer",function(){var t=e(this).find(".tp-bannertimer");if(r.stopLoop=="on"&&r.next==r.lastslidetoshow-1||r.noloopanymore==1)r.noloopanymore=1;else{t.css({visibility:"visible"});t.data("tween").kill();t.data("tween",punchgs.TweenLite.fromTo(t,r.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:s,delay:1}))}if(r.hideTimerBar=="on")t.css({visibility:"hidden"})});n.on("nulltimer",function(){i.data("tween").pause(0);if(r.hideTimerBar=="on")i.css({visibility:"hidden"})});var s=function(){if(e("body").find(n).length==0){V(n,r);clearInterval(r.cdint)}n.trigger("revolution.slide.slideatend");if(n.data("conthover-changed")==1){r.conthover=n.data("conthover");n.data("conthover-changed",0)}r.act=r.next;r.next=r.next+1;if(r.next>n.find(">ul >li").length-1){r.next=0;r.looptogo=r.looptogo-1;if(r.looptogo<=0){r.stopLoop="on"}}if(r.stopLoop=="on"&&r.next==r.lastslidetoshow-1){n.find(".tp-bannertimer").css({visibility:"hidden"});n.trigger("revolution.slide.onstop");r.noloopanymore=1}else{i.data("tween").restart()}N(n,r)};i.data("tween",punchgs.TweenLite.fromTo(i,r.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:s,delay:1}));i.data("opt",r);n.hover(function(){if(r.onHoverStop=="on"&&!J()){n.trigger("stoptimer");n.trigger("revolution.slide.onpause");var i=n.find(">ul >li:eq("+r.next+") .slotholder");i.find(".defaultimg").each(function(){var n=e(this);if(n.data("kenburn")!=t){n.data("kenburn").pause()}})}},function(){if(n.data("conthover")!=1){n.trigger("revolution.slide.onresume");n.trigger("starttimer");var i=n.find(">ul >li:eq("+r.next+") .slotholder");i.find(".defaultimg").each(function(){var n=e(this);if(n.data("kenburn")!=t){n.data("kenburn").play()}})}})}};var J=function(){var e=["android","webos","iphone","ipad","blackberry","Android","webos",,"iPod","iPhone","iPad","Blackberry","BlackBerry"];var t=false;for(var n in e){if(navigator.userAgent.split(e[n]).length>1){t=true}}return t};var K=function(e,t,n){var r=t.data("owidth");var i=t.data("oheight");if(r/i>n.width/n.height){var s=n.container.width()/r;var o=i*s;var u=o/n.container.height()*e;e=e*(100/u);u=100;e=e;return e+"% "+u+"%"+" 1"}else{var s=n.container.width()/r;var o=i*s;var u=o/n.container.height()*e;return e+"% "+u+"%"}};var Q=function(n,r,i,s){try{var o=n.find(">ul:first-child >li:eq("+r.act+")")}catch(u){var o=n.find(">ul:first-child >li:eq(1)")}r.lastslide=r.act;var f=n.find(">ul:first-child >li:eq("+r.next+")"),l=f.find(".slotholder"),c=l.data("bgposition"),h=l.data("bgpositionend"),p=l.data("zoomstart")/100,d=l.data("zoomend")/100,v=l.data("rotationstart"),m=l.data("rotationend"),g=l.data("bgfit"),y=l.data("bgfitend"),b=l.data("easeme"),w=l.data("duration")/1e3,E=100;if(g==t)g=100;if(y==t)y=100;var S=g,x=y;g=K(g,l,r);y=K(y,l,r);E=K(100,l,r);if(p==t)p=1;if(d==t)d=1;if(v==t)v=0;if(m==t)m=0;if(p<1)p=1;if(d<1)d=1;var T=new Object;T.w=parseInt(E.split(" ")[0],0),T.h=parseInt(E.split(" ")[1],0);var N=false;if(E.split(" ")[2]=="1"){N=true}l.find(".defaultimg").each(function(){var t=e(this);if(l.find(".kenburnimg").length==0)l.append('<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="'+t.attr("src")+'" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:'+T.w+"%;height:"+T.h+'%;"></div>');else{l.find(".kenburnimg img").css({width:T.w+"%",height:T.h+"%"})}var n=l.find(".kenburnimg img");var i=G(r,c,g,n,N),o=G(r,h,y,n,N);if(N){i.w=S/100;o.w=x/100}if(s){punchgs.TweenLite.set(n,{autoAlpha:0,transformPerspective:1200,transformOrigin:"0% 0%",top:0,left:0,scale:i.w,x:i.x,y:i.y});var u=i.w,f=u*n.width()-r.width,p=u*n.height()-r.height,d=Math.abs(i.x/f*100),v=Math.abs(i.y/p*100);if(p==0)v=0;if(f==0)d=0;t.data("bgposition",d+"% "+v+"%");if(!a(8))t.data("currotate",Y(n));if(!a(8))t.data("curscale",T.w*u+"%  "+(T.h*u+"%"));l.find(".kenburnimg").remove()}else t.data("kenburn",punchgs.TweenLite.fromTo(n,w,{autoAlpha:1,force3D:punchgs.force3d,transformOrigin:"0% 0%",top:0,left:0,scale:i.w,x:i.x,y:i.y},{autoAlpha:1,rotationZ:m,ease:b,x:o.x,y:o.y,scale:o.w,onUpdate:function(){var e=n[0]._gsTransform.scaleX;var i=e*n.width()-r.width,s=e*n.height()-r.height,o=Math.abs(n[0]._gsTransform.x/i*100),u=Math.abs(n[0]._gsTransform.y/s*100);if(s==0)u=0;if(i==0)o=0;t.data("bgposition",o+"% "+u+"%");if(!a(8))t.data("currotate",Y(n));if(!a(8))t.data("curscale",T.w*e+"%  "+(T.h*e+"%"))}}))})};var G=function(e,t,n,r,i){var s=new Object;if(!i)s.w=parseInt(n.split(" ")[0],0)/100;else s.w=parseInt(n.split(" ")[1],0)/100;switch(t){case"left top":case"top left":s.x=0;s.y=0;break;case"center top":case"top center":s.x=((0-r.width())*s.w+parseInt(e.width,0))/2;s.y=0;break;case"top right":case"right top":s.x=(0-r.width())*s.w+parseInt(e.width,0);s.y=0;break;case"center left":case"left center":s.x=0;s.y=((0-r.height())*s.w+parseInt(e.height,0))/2;break;case"center center":s.x=((0-r.width())*s.w+parseInt(e.width,0))/2;s.y=((0-r.height())*s.w+parseInt(e.height,0))/2;break;case"center right":case"right center":s.x=(0-r.width())*s.w+parseInt(e.width,0);s.y=((0-r.height())*s.w+parseInt(e.height,0))/2;break;case"bottom left":case"left bottom":s.x=0;s.y=(0-r.height())*s.w+parseInt(e.height,0);break;case"bottom center":case"center bottom":s.x=((0-r.width())*s.w+parseInt(e.width,0))/2;s.y=(0-r.height())*s.w+parseInt(e.height,0);break;case"bottom right":case"right bottom":s.x=(0-r.width())*s.w+parseInt(e.width,0);s.y=(0-r.height())*s.w+parseInt(e.height,0);break}return s};var Y=function(e){var t=e.css("-webkit-transform")||e.css("-moz-transform")||e.css("-ms-transform")||e.css("-o-transform")||e.css("transform");if(t!=="none"){var n=t.split("(")[1].split(")")[0].split(",");var r=n[0];var i=n[1];var s=Math.round(Math.atan2(i,r)*(180/Math.PI))}else{var s=0}return s<0?s+=360:s};var Z=function(n,r){try{var i=n.find(">ul:first-child >li:eq("+r.act+")")}catch(s){var i=n.find(">ul:first-child >li:eq(1)")}r.lastslide=r.act;var o=n.find(">ul:first-child >li:eq("+r.next+")");var u=i.find(".slotholder");var a=o.find(".slotholder");n.find(".defaultimg").each(function(){var n=e(this);punchgs.TweenLite.killTweensOf(n,false);punchgs.TweenLite.set(n,{scale:1,rotationZ:0});punchgs.TweenLite.killTweensOf(n.data("kenburn img"),false);if(n.data("kenburn")!=t){n.data("kenburn").pause()}if(n.data("currotate")!=t&&n.data("bgposition")!=t&&n.data("curscale")!=t)punchgs.TweenLite.set(n,{rotation:n.data("currotate"),backgroundPosition:n.data("bgposition"),backgroundSize:n.data("curscale")});if(n!=t&&n.data("kenburn img")!=t&&n.data("kenburn img").length>0)punchgs.TweenLite.set(n.data("kenburn img"),{autoAlpha:0})})};var et=function(t,n){if(J()&&n.parallaxDisableOnMobile=="on")return false;t.find(">ul:first-child >li").each(function(){var t=e(this);for(var r=1;r<=10;r++)t.find(".rs-parallaxlevel-"+r).each(function(){var t=e(this);t.wrap('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:'+t.css("zIndex")+'" class="tp-parallax-container" data-parallaxlevel="'+n.parallaxLevels[r-1]+'"></div>')})});if(n.parallax=="mouse"||n.parallax=="scroll+mouse"||n.parallax=="mouse+scroll"){t.mouseenter(function(e){var n=t.find(".current-sr-slide-visible");var r=t.offset().top,i=t.offset().left,s=e.pageX-i,o=e.pageY-r;n.data("enterx",s);n.data("entery",o)});t.on("mousemove.hoverdir, mouseleave.hoverdir",function(r){var i=t.find(".current-sr-slide-visible");switch(r.type){case"mousemove":var s=t.offset().top,o=t.offset().left,u=i.data("enterx"),a=i.data("entery"),f=u-(r.pageX-o),l=a-(r.pageY-s);i.find(".tp-parallax-container").each(function(){var t=e(this),r=parseInt(t.data("parallaxlevel"),0)/100,i=f*r,s=l*r;if(n.parallax=="scroll+mouse"||n.parallax=="mouse+scroll")punchgs.TweenLite.to(t,.4,{force3D:"auto",x:i,ease:punchgs.Power3.easeOut,overwrite:"all"});else punchgs.TweenLite.to(t,.4,{force3D:"auto",x:i,y:s,ease:punchgs.Power3.easeOut,overwrite:"all"})});break;case"mouseleave":i.find(".tp-parallax-container").each(function(){var t=e(this);if(n.parallax=="scroll+mouse"||n.parallax=="mouse+scroll")punchgs.TweenLite.to(t,1.5,{force3D:"auto",x:0,ease:punchgs.Power3.easeOut});else punchgs.TweenLite.to(t,1.5,{force3D:"auto",x:0,y:0,ease:punchgs.Power3.easeOut})});break}});if(J())window.ondeviceorientation=function(n){var r=Math.round(n.beta||0),i=Math.round(n.gamma||0);var s=t.find(".current-sr-slide-visible");if(e(window).width()>e(window).height()){var o=i;i=r;r=o}var u=360/t.width()*i,a=180/t.height()*r;s.find(".tp-parallax-container").each(function(){var t=e(this),n=parseInt(t.data("parallaxlevel"),0)/100,r=u*n,i=a*n;punchgs.TweenLite.to(t,.2,{force3D:"auto",x:r,y:i,ease:punchgs.Power3.easeOut})})}}if(n.parallax=="scroll"||n.parallax=="scroll+mouse"||n.parallax=="mouse+scroll"){e(window).on("scroll",function(e){tt(t,n)})}};var tt=function(t,n){if(J()&&n.parallaxDisableOnMobile=="on")return false;var r=t.offset().top,i=e(window).scrollTop(),s=r+t.height()/2,o=r+t.height()/2-i,u=e(window).height()/2,a=u-o;if(s<u)a=a-(u-s);var f=t.find(".current-sr-slide-visible");t.find(".tp-parallax-container").each(function(t){var n=e(this),r=parseInt(n.data("parallaxlevel"),0)/100,i=a*r;n.data("parallaxoffset",i);punchgs.TweenLite.to(n,.2,{force3D:"auto",y:i,ease:punchgs.Power3.easeOut})});if(n.parallaxBgFreeze!="on"){var l=n.parallaxLevels[0]/100,c=a*l;punchgs.TweenLite.to(t,.2,{force3D:"auto",y:c,ease:punchgs.Power3.easeOut})}};var nt=function(n,r){var i=n.parent();if(r.navigationType=="thumb"||r.navsecond=="both"){i.append('<div class="tp-bullets tp-thumbs '+r.navigationStyle+'"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>')}var s=i.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer");var o=s.parent();o.width(r.thumbWidth*r.thumbAmount);o.height(r.thumbHeight);o.parent().width(r.thumbWidth*r.thumbAmount);o.parent().height(r.thumbHeight);n.find(">ul:first >li").each(function(e){var i=n.find(">ul:first >li:eq("+e+")");var o=i.find(".defaultimg").css("backgroundColor");if(i.data("thumb")!=t)var u=i.data("thumb");else var u=i.find("img:first").attr("src");s.append('<div class="bullet thumb" style="background-color:'+o+";position:relative;width:"+r.thumbWidth+"px;height:"+r.thumbHeight+"px;background-image:url("+u+') !important;background-size:cover;background-position:center center;"></div>');var a=s.find(".bullet:first")});var u=10;s.find(".bullet").each(function(t){var i=e(this);if(t==r.slideamount-1)i.addClass("last");if(t==0)i.addClass("first");i.width(r.thumbWidth);i.height(r.thumbHeight);if(u<i.outerWidth(true))u=i.outerWidth(true);i.click(function(){if(r.transition==0&&i.index()!=r.act){r.next=i.index();f(r,n)}})});var a=u*n.find(">ul:first >li").length;var l=s.parent().width();r.thumbWidth=u;if(l<a){e(document).mousemove(function(t){e("body").data("mousex",t.pageX)});s.parent().mouseenter(function(){var t=e(this);var r=t.offset(),i=e("body").data("mousex")-r.left,s=t.width(),o=t.find(".bullet:first").outerWidth(true),u=o*n.find(">ul:first >li").length,a=u-s+15,f=a/s;t.addClass("over");i=i-30;var l=0-i*f;if(l>0)l=0;if(l<0-u+s)l=0-u+s;it(t,l,200)});s.parent().mousemove(function(){var t=e(this),r=t.offset(),i=e("body").data("mousex")-r.left,s=t.width(),o=t.find(".bullet:first").outerWidth(true),u=o*n.find(">ul:first >li").length-1,a=u-s+15,f=a/s;i=i-3;if(i<6)i=0;if(i+3>s-6)i=s;var l=0-i*f;if(l>0)l=0;if(l<0-u+s)l=0-u+s;it(t,l,0)});s.parent().mouseleave(function(){var t=e(this);t.removeClass("over");rt(n)})}};var rt=function(e){var t=e.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),n=t.parent(),r=n.offset(),i=n.find(".bullet:first").outerWidth(true),s=n.find(".bullet.selected").index()*i,o=n.width(),i=n.find(".bullet:first").outerWidth(true),u=i*e.find(">ul:first >li").length,a=u-o,f=a/o,l=0-s;if(l>0)l=0;if(l<0-u+o)l=0-u+o;if(!n.hasClass("over")){it(n,l,200)}};var it=function(e,t,n){punchgs.TweenLite.to(e.find(".tp-thumbcontainer"),.2,{force3D:"auto",left:t,ease:punchgs.Power3.easeOut,overwrite:"auto"})}})(jQuery);


/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 17.11.2014
*********************************************/


/*
* @fileOverview TouchSwipe - jQuery Plugin
* @version 1.6.6
*
* @author Matt Bryson http://www.github.com/mattbryson
* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* @see http://labs.skinkers.com/touchSwipe/
* @see http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var p="left",o="right",e="up",x="down",c="in",z="out",m="none",s="auto",l="swipe",t="pinch",A="tap",j="doubletap",b="longtap",y="hold",D="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,B="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};f.fn.swipe=function(G){var F=f(this),E=F.data(B);if(E&&typeof G==="string"){if(E[G]){return E[G].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+G+" does not exist on jQuery.swipe")}}else{if(!E&&(typeof G==="object"||!G)){return w.apply(this,arguments)}}return F};f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:z};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:D,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(E){if(E&&(E.allowPageScroll===undefined&&(E.swipe!==undefined||E.swipeStatus!==undefined))){E.allowPageScroll=m}if(E.click!==undefined&&E.tap===undefined){E.tap=E.click}if(!E){E={}}E=f.extend({},f.fn.swipe.defaults,E);return this.each(function(){var G=f(this);var F=G.data(B);if(!F){F=new C(this,E);G.data(B,F)}})}function C(a4,av){var az=(a||d||!av.fallbackToMouseEvents),J=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ay=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",U=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",S=az?null:"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,ab=0,a1=0,aZ=0,G=1,aq=0,aJ=0,M=null;var aR=f(a4);var Z="start";var W=0;var aQ=null;var T=0,a2=0,a5=0,ad=0,N=0;var aW=null,af=null;try{aR.bind(J,aN);aR.bind(aD,a9)}catch(ak){f.error("events not supported "+J+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(J,aN);aR.bind(aD,a9);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(B,null);return aR};this.option=function(bc,bb){if(av[bc]!==undefined){if(bb===undefined){return av[bc]}else{av[bc]=bb}}else{f.error("Option "+bc+" does not exist on jQuery.swipe.options")}return null};function aN(bd){if(aB()){return}if(f(bd.target).closest(av.excludedElements,aR).length>0){return}var be=bd.originalEvent?bd.originalEvent:bd;var bc,bb=a?be.touches[0]:be;Z=g;if(a){W=be.touches.length}else{bd.preventDefault()}ag=0;aP=null;aJ=null;ab=0;a1=0;aZ=0;G=1;aq=0;aQ=aj();M=aa();R();if(!a||(W===av.fingers||av.fingers===i)||aX()){ai(0,bb);T=at();if(W==2){ai(1,be.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}if(av.swipeStatus||av.pinchStatus){bc=O(be,Z)}}else{bc=false}if(bc===false){Z=q;O(be,Z);return bc}else{if(av.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[be.target]);if(av.hold){bc=av.hold.call(aR,be,be.target)}},this),av.longTapThreshold)}ao(true)}return null}function a3(be){var bh=be.originalEvent?be.originalEvent:be;if(Z===h||Z===q||am()){return}var bd,bc=a?bh.touches[0]:bh;var bf=aH(bc);a2=at();if(a){W=bh.touches.length}if(av.hold){clearTimeout(af)}Z=k;if(W==2){if(a1==0){ai(1,bh.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}else{aH(bh.touches[1]);aZ=au(aQ[0].end,aQ[1].end);aJ=ar(aQ[0].end,aQ[1].end)}G=a7(a1,aZ);aq=Math.abs(a1-aZ)}if((W===av.fingers||av.fingers===i)||!a||aX()){aP=aL(bf.start,bf.end);al(be,aP);ag=aS(bf.start,bf.end);ab=aM();aI(aP,ag);if(av.swipeStatus||av.pinchStatus){bd=O(bh,Z)}if(!av.triggerOnTouchEnd||av.triggerOnTouchLeave){var bb=true;if(av.triggerOnTouchLeave){var bg=aY(this);bb=E(bf.end,bg)}if(!av.triggerOnTouchEnd&&bb){Z=aC(k)}else{if(av.triggerOnTouchLeave&&!bb){Z=aC(h)}}if(Z==q||Z==h){O(bh,Z)}}}else{Z=q;O(bh,Z)}if(bd===false){Z=q;O(bh,Z)}}function L(bb){var bc=bb.originalEvent;if(a){if(bc.touches.length>0){F();return true}}if(am()){W=ad}a2=at();ab=aM();if(ba()||!an()){Z=q;O(bc,Z)}else{if(av.triggerOnTouchEnd||(av.triggerOnTouchEnd==false&&Z===k)){bb.preventDefault();Z=h;O(bc,Z)}else{if(!av.triggerOnTouchEnd&&a6()){Z=h;aF(bc,Z,A)}else{if(Z===k){Z=q;O(bc,Z)}}}}ao(false);return null}function a9(){W=0;a2=0;T=0;a1=0;aZ=0;G=1;R();ao(false)}function K(bb){var bc=bb.originalEvent;if(av.triggerOnTouchLeave){Z=aC(h);O(bc,Z)}}function aK(){aR.unbind(J,aN);aR.unbind(aD,a9);aR.unbind(ay,a3);aR.unbind(U,L);if(S){aR.unbind(S,K)}ao(false)}function aC(bf){var be=bf;var bd=aA();var bc=an();var bb=ba();if(!bd||bb){be=q}else{if(bc&&bf==k&&(!av.triggerOnTouchEnd||av.triggerOnTouchLeave)){be=h}else{if(!bc&&bf==h&&av.triggerOnTouchLeave){be=q}}}return be}function O(bd,bb){var bc=undefined;if(I()||V()){bc=aF(bd,bb,l)}else{if((P()||aX())&&bc!==false){bc=aF(bd,bb,t)}}if(aG()&&bc!==false){bc=aF(bd,bb,j)}else{if(ap()&&bc!==false){bc=aF(bd,bb,b)}else{if(ah()&&bc!==false){bc=aF(bd,bb,A)}}}if(bb===q){a9(bd)}if(bb===h){if(a){if(bd.touches.length==0){a9(bd)}}else{a9(bd)}}return bc}function aF(be,bb,bd){var bc=undefined;if(bd==l){aR.trigger("swipeStatus",[bb,aP||null,ag||0,ab||0,W,aQ]);if(av.swipeStatus){bc=av.swipeStatus.call(aR,be,bb,aP||null,ag||0,ab||0,W,aQ);if(bc===false){return false}}if(bb==h&&aV()){aR.trigger("swipe",[aP,ag,ab,W,aQ]);if(av.swipe){bc=av.swipe.call(aR,be,aP,ag,ab,W,aQ);if(bc===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ab,W,aQ]);if(av.swipeLeft){bc=av.swipeLeft.call(aR,be,aP,ag,ab,W,aQ)}break;case o:aR.trigger("swipeRight",[aP,ag,ab,W,aQ]);if(av.swipeRight){bc=av.swipeRight.call(aR,be,aP,ag,ab,W,aQ)}break;case e:aR.trigger("swipeUp",[aP,ag,ab,W,aQ]);if(av.swipeUp){bc=av.swipeUp.call(aR,be,aP,ag,ab,W,aQ)}break;case x:aR.trigger("swipeDown",[aP,ag,ab,W,aQ]);if(av.swipeDown){bc=av.swipeDown.call(aR,be,aP,ag,ab,W,aQ)}break}}}if(bd==t){aR.trigger("pinchStatus",[bb,aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchStatus){bc=av.pinchStatus.call(aR,be,bb,aJ||null,aq||0,ab||0,W,G,aQ);if(bc===false){return false}}if(bb==h&&a8()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchIn){bc=av.pinchIn.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break;case z:aR.trigger("pinchOut",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchOut){bc=av.pinchOut.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break}}}if(bd==A){if(bb===q||bb===h){clearTimeout(aW);clearTimeout(af);if(Y()&&!H()){N=at();aW=setTimeout(f.proxy(function(){N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}},this),av.doubleTapThreshold)}else{N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}}}}else{if(bd==j){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("doubletap",[be.target]);if(av.doubleTap){bc=av.doubleTap.call(aR,be,be.target)}}}else{if(bd==b){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("longtap",[be.target]);if(av.longTap){bc=av.longTap.call(aR,be,be.target)}}}}}return bc}function an(){var bb=true;if(av.threshold!==null){bb=ag>=av.threshold}return bb}function ba(){var bb=false;if(av.cancelThreshold!==null&&aP!==null){bb=(aT(aP)-ag)>=av.cancelThreshold}return bb}function ae(){if(av.pinchThreshold!==null){return aq>=av.pinchThreshold}return true}function aA(){var bb;if(av.maxTimeThreshold){if(ab>=av.maxTimeThreshold){bb=false}else{bb=true}}else{bb=true}return bb}function al(bb,bc){if(av.allowPageScroll===m||aX()){bb.preventDefault()}else{var bd=av.allowPageScroll===s;switch(bc){case p:if((av.swipeLeft&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case o:if((av.swipeRight&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case e:if((av.swipeUp&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break;case x:if((av.swipeDown&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break}}}function a8(){var bc=aO();var bb=X();var bd=ae();return bc&&bb&&bd}function aX(){return !!(av.pinchStatus||av.pinchIn||av.pinchOut)}function P(){return !!(a8()&&aX())}function aV(){var be=aA();var bg=an();var bd=aO();var bb=X();var bc=ba();var bf=!bc&&bb&&bd&&bg&&be;return bf}function V(){return !!(av.swipe||av.swipeStatus||av.swipeLeft||av.swipeRight||av.swipeUp||av.swipeDown)}function I(){return !!(aV()&&V())}function aO(){return((W===av.fingers||av.fingers===i)||!a)}function X(){return aQ[0].end.x!==0}function a6(){return !!(av.tap)}function Y(){return !!(av.doubleTap)}function aU(){return !!(av.longTap)}function Q(){if(N==null){return false}var bb=at();return(Y()&&((bb-N)<=av.doubleTapThreshold))}function H(){return Q()}function ax(){return((W===1||!a)&&(isNaN(ag)||ag<av.threshold))}function a0(){return((ab>av.longTapThreshold)&&(ag<r))}function ah(){return !!(ax()&&a6())}function aG(){return !!(Q()&&Y())}function ap(){return !!(a0()&&aU())}function F(){a5=at();ad=event.touches.length+1}function R(){a5=0;ad=0}function am(){var bb=false;if(a5){var bc=at()-a5;if(bc<=av.fingerReleaseThreshold){bb=true}}return bb}function aB(){return !!(aR.data(B+"_intouch")===true)}function ao(bb){if(bb===true){aR.bind(ay,a3);aR.bind(U,L);if(S){aR.bind(S,K)}}else{aR.unbind(ay,a3,false);aR.unbind(U,L,false);if(S){aR.unbind(S,K,false)}}aR.data(B+"_intouch",bb===true)}function ai(bc,bb){var bd=bb.identifier!==undefined?bb.identifier:0;aQ[bc].identifier=bd;aQ[bc].start.x=aQ[bc].end.x=bb.pageX||bb.clientX;aQ[bc].start.y=aQ[bc].end.y=bb.pageY||bb.clientY;return aQ[bc]}function aH(bb){var bd=bb.identifier!==undefined?bb.identifier:0;var bc=ac(bd);bc.end.x=bb.pageX||bb.clientX;bc.end.y=bb.pageY||bb.clientY;return bc}function ac(bc){for(var bb=0;bb<aQ.length;bb++){if(aQ[bb].identifier==bc){return aQ[bb]}}}function aj(){var bb=[];for(var bc=0;bc<=5;bc++){bb.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bb}function aI(bb,bc){bc=Math.max(bc,aT(bb));M[bb].distance=bc}function aT(bb){if(M[bb]){return M[bb].distance}return undefined}function aa(){var bb={};bb[p]=aw(p);bb[o]=aw(o);bb[e]=aw(e);bb[x]=aw(x);return bb}function aw(bb){return{direction:bb,distance:0}}function aM(){return a2-T}function au(be,bd){var bc=Math.abs(be.x-bd.x);var bb=Math.abs(be.y-bd.y);return Math.round(Math.sqrt(bc*bc+bb*bb))}function a7(bb,bc){var bd=(bc/bb)*1;return bd.toFixed(2)}function ar(){if(G<1){return z}else{return c}}function aS(bc,bb){return Math.round(Math.sqrt(Math.pow(bb.x-bc.x,2)+Math.pow(bb.y-bc.y,2)))}function aE(be,bc){var bb=be.x-bc.x;var bg=bc.y-be.y;var bd=Math.atan2(bg,bb);var bf=Math.round(bd*180/Math.PI);if(bf<0){bf=360-Math.abs(bf)}return bf}function aL(bc,bb){var bd=aE(bc,bb);if((bd<=45)&&(bd>=0)){return p}else{if((bd<=360)&&(bd>=315)){return p}else{if((bd>=135)&&(bd<=225)){return o}else{if((bd>45)&&(bd<135)){return x}else{return e}}}}}function at(){var bb=new Date();return bb.getTime()}function aY(bb){bb=f(bb);var bd=bb.offset();var bc={left:bd.left,right:bd.left+bb.outerWidth(),top:bd.top,bottom:bd.top+bb.outerHeight()};return bc}function E(bb,bc){return(bb.x>bc.left&&bb.x<bc.right&&bb.y>bc.top&&bb.y<bc.bottom)}}}));



if(typeof(console) === 'undefined') {
    var console = {}
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};
}

if (window.tplogs==true)
	try {
		console.groupCollapsed("ThemePunch GreenSocks Logs");
	} catch(e) { }


var oldgs = window.GreenSockGlobals;
	oldgs_queue = window._gsQueue;
	
var punchgs = window.GreenSockGlobals = {};

if (window.tplogs==true)
	try {
		console.info("Build GreenSock SandBox for ThemePunch Plugins");
		console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
	} catch(e) {}

/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-28
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,l=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},h=l("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},m=function(){},f=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),c={},p=function(s,r,n,a){this.sc=c[s]?c[s].sc:[],c[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(h){for(var _,u,m,f,d=r.length,v=d;--d>-1;)(_=c[r[d]]||new p(r[d],[])).gsClass?(o[d]=_.gsClass,v--):h&&_.sc.push(this);if(0===v&&n)for(u=("com.greensock."+s).split("."),m=u.pop(),f=l(u.join("."))[m]=this.gsClass=n.apply(n,o),a&&(i[m]=f,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return f}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=f)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new p(t,e,i,s)},v=h._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var g=[0,0,1,1],T=[],y=v("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?g.concat(e):g},!0),w=y.map={},P=y.register=function(t,e,i,s){for(var r,n,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=l[_],r=s?v("easing."+n,null,!0):h.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=y.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,P(new y(null,null,1,r),n,"easeOut",!0),P(new y(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),P(new y(null,null,3,r),n,"easeInOut");w.linear=h.easing.Linear.easeIn,w.swing=h.easing.Quad.easeInOut;var b=v("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)n=h[l],n.c===e&&n.s===i?h.splice(l,1):0===_&&r>n.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var k=t.requestAnimationFrame,A=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},x=S();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!k;)k=t[s[r]+"RequestAnimationFrame"],A=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];v("Ticker",function(t,e){var i,s,r,n,l,h=this,u=S(),f=e!==!1&&k,c=500,p=33,d=function(t){var e,a,o=S()-x;o>c&&(u+=o-p),x+=o,h.time=(x-u)/1e3,e=h.time-l,(!i||e>0||t===!0)&&(h.frame++,l+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(d)),a&&h.dispatchEvent("tick")};b.call(h),h.time=h.frame=0,h.tick=function(){d(!0)},h.lagSmoothing=function(t,e){c=t||1/_,p=Math.min(e,c,0)},h.sleep=function(){null!=r&&(f&&A?A(r):clearTimeout(r),s=m,r=null,h===a&&(o=!1))},h.wake=function(){null!==r?h.sleep():h.frame>10&&(x=S()-c+5),s=0===i?m:f&&k?k:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===a&&(o=!0),d(2)},h.fps=function(t){return arguments.length?(i=t,n=1/(i||60),l=this.time+n,h.wake(),void 0):i},h.useRAF=function(t){return arguments.length?(h.sleep(),f=t,h.fps(i),void 0):f},h.fps(t),setTimeout(function(){f&&(!r||5>h.frame)&&h.useRAF(!1)},1500)}),n=h.Ticker.prototype=new h.events.EventDispatcher,n.constructor=h.Ticker;var R=v("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,B){o||a.wake();var i=this.vars.useFrames?q:B;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=R.ticker=new h.Ticker,n=R.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var C=function(){o&&S()-x>2e3&&a.wake(),setTimeout(C,2e3)};C(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=f(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),z.length&&M())}return this},n.progress=n.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){o||t||a.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var D=v("core.SimpleTimeline",function(t){R.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=D.prototype=new R,n.constructor=D,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var I=v("TweenLite",function(e,i,s){if(R.call(this,i,s),this.render=I.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:I.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?Q[I.defaultOverwrite]:"number"==typeof l?l>>0:Q[l],(o||e instanceof Array||e.push&&f(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=$(n,this,!1),1===l&&this._siblings[r].length>1&&H(n,this,null,1,this._siblings[r])):(n=a[r--]=I.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=$(e,this,!1),1===l&&this._siblings.length>1&&H(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),E=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},O=function(t,e){var i,s={};for(i in t)G[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!U[i]||U[i]&&U[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=I.prototype=new R,n.constructor=I,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,I.version="1.14.2",I.defaultEase=n._ease=new y(null,null,1,1),I.defaultOverwrite="auto",I.ticker=a,I.autoSleep=!0,I.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},I.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(I.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var z=[],L={},N=I._internals={isArray:f,isSelector:E,lazyTweens:z},U=I._plugins={},F=N.tweenLookup={},j=0,G=N.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1},Q={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},q=R._rootFramesTimeline=new D,B=R._rootTimeline=new D,M=N.lazyRender=function(){var t,e=z.length;for(L={};--e>-1;)t=z[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);z.length=0};B._startTime=a.time,q._startTime=a.frame,B._active=q._active=!0,setTimeout(M,1),R._updateRoot=I.render=function(){var t,e,i;if(z.length&&M(),B.render((a.time-B._startTime)*B._timeScale,!1,!1),q.render((a.frame-q._startTime)*q._timeScale,!1,!1),z.length&&M(),!(a.frame%120)){for(i in F){for(e=F[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete F[i]}if(i=B._first,(!i||i._paused)&&I.autoSleep&&!q._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",R._updateRoot);var $=function(t,e,i){var s,r,n=t._gsTweenID;if(F[n||(t._gsTweenID=n="t"+j++)]||(F[n]={target:t,tweens:[]}),e&&(s=F[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return F[n].tweens},K=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),a=I.onOverwrite,a&&(n=a(t,e,i,s)),r!==!1&&n!==!1},H=function(t,e,i,s,r){var n,a,o,l;if(1===s||s>=4){for(l=r.length,n=0;l>n;n++)if((o=r[n])!==e)o._gc||K(o,e)&&o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var h,u=e._startTime+_,m=[],f=0,c=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(h=h||J(e,0,c),0===J(o,h,c)&&(m[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((c||!o._initted)&&2e-10>=u-o._startTime||(m[f++]=o)));for(n=f;--n>-1;)if(o=m[n],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!K(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},J=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,l=!!n.immediateRender,h=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=l&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=I.to(this.target,0,r),l)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(l=!1),i={};for(s in n)G[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=l&&n.lazy!==!1,i.immediateRender=l,this._startAt=I.to(this.target,0,i),l){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=h=h?h instanceof y?h:"function"==typeof h?new y(h,n.easeParams):w[h]||I.defaultEase:I.defaultEase,n.easeParams instanceof Array&&h.config&&(this._ease=h.config.apply(h,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&I._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,l,h,_;if(null==e)return!1;L[e._gsTweenID]&&M(),this.vars.css||e.style&&e!==t&&e.nodeType&&U.css&&this.vars.autoCSS!==!1&&O(this.vars,e);for(n in this.vars){if(_=this.vars[n],G[n])_&&(_ instanceof Array||_.push&&f(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(U[n]&&(l=new U[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=h={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},h.s=h.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),h.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-h.s||0;h&&h._next&&(h._next._prev=h)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&H(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(L[e._gsTweenID]=!0),o)},n.render=function(t,e,i){var s,r,n,a,o=this._time,l=this._duration,h=this._rawPrevTime;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>h||h===_)&&h!==t&&(i=!0,h>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||h===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&h>0&&h!==_)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(h>=0&&(i=!0),this._rawPrevTime=a=!e||t||h===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/l,m=this._easeType,f=this._easePower;(1===m||3===m&&u>=.5)&&(u=1-u),3===m&&(u*=2),1===f?u*=u:2===f?u*=u*u:3===f?u*=u*u*u:4===f&&(u*=u*u*u*u),this.ratio=1===m?1-u:2===m?u:.5>t/l?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=h,z.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||T))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||T)),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||T),0===l&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:I.selector(e)||e;var s,r,n,a,o,l,h,_,u;if((f(e)||E(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s])&&(l=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(h=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(I.onOverwrite||this.vars.onOverwrite)){for(n in h)o[n]&&(u||(u=[]),u.push(n));if(!K(this,i,e,u))return!1}for(n in h)(a=o[n])&&(a.pg&&a.t._kill(h)&&(l=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},n.invalidate=function(){return this._notifyPluginsOfEnabled&&I._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],R.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=$(s[i],this,!0);else this._siblings=$(this.target,this,!0)}return R.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?I._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},I.to=function(t,e,i){return new I(t,e,i)},I.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new I(t,e,i)},I.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new I(t,e,s)},I.delayedCall=function(t,e,i,s,r){return new I(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},I.set=function(t,e){return new I(t,0,e)},I.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:I.selector(t)||t;var i,s,r,n;if((f(t)||E(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(I.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=$(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},I.killTweensOf=I.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=I.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var V=v("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=V.prototype},!0);if(n=V.prototype,V.version="1.10.1",V.API=2,n._firstPT=null,n._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},n.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},I._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},V.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===V.API&&(U[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=v("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){V.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new V(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,V.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in c)c[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}})("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");

/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-18
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],o(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));o(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=n.isSelector,o=n.isArray,h=n.lazyTweens,l=n.lazyRender,_=[],u=_gsScope._gsDefine.globals,c=function(t){var e,i={};for(e in t)i[e]=t[e];return i},p=function(t,e,i,s){var r=t._timeline._totalTime;(e||!this._forcingPlayhead)&&(t._timeline.pause(t._startTime),e&&e.apply(s||t._timeline,i||_),this._forcingPlayhead&&t._timeline.seek(r))},f=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},m=s.prototype=new e;return s.version="1.14.2",m.constructor=s,m.kill()._gc=m._forcingPlayhead=!1,m.to=function(t,e,s,r){var n=s.repeat&&u.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},m.from=function(t,e,s,r){return this.add((s.repeat&&u.TweenMax||i).from(t,e,s),r)},m.fromTo=function(t,e,s,r,n){var a=r.repeat&&u.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},m.staggerTo=function(t,e,r,n,o,h,l,_){var u,p=new s({onComplete:h,onCompleteParams:l,onCompleteScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],a(t)&&(t=f(t)),n=n||0,0>n&&(t=f(t),t.reverse(),n*=-1),u=0;t.length>u;u++)r.startAt&&(r.startAt=c(r.startAt)),p.to(t[u],e,c(r),u*n);return this.add(p,o)},m.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},m.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},m.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},m.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},m.add=function(r,n,a,h){var l,_,u,c,p,f;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&o(r)){for(a=a||"normal",h=h||0,l=n,_=r.length,u=0;_>u;u++)o(c=r[u])&&(c=new s({tweens:c})),this.add(c,l),"string"!=typeof c&&"function"!=typeof c&&("sequence"===a?l=c._startTime+c.totalDuration()/c._timeScale:"start"===a&&(c._startTime-=c.delay())),l+=h;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(p=this,f=p.rawTime()>r._startTime;p._timeline;)f&&p._timeline.smoothChildTiming?p.totalTime(p._totalTime,!0):p._gc&&p._enabled(!0,!1),p=p._timeline;return this},m.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&o(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},m._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},m.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},m.insert=m.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},m.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},m.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},m.addPause=function(t,e,i,s){return this.call(p,["{self}",e,i,s],this,t)},m.removeLabel=function(t){return delete this._labels[t],this},m.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},m._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&o(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},m.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},m.stop=function(){return this.paused(!0)},m.gotoAndPlay=function(t,e){return this.play(t,e)},m.gotoAndStop=function(t,e){return this.pause(t,e)},m.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,u,c=this._dirty?this.totalDuration():this._totalDuration,p=this._time,f=this._startTime,m=this._timeScale,d=this._paused;if(t>=c?(this._totalTime=this._time=c,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(u=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=c+1e-4):1e-7>t?(this._totalTime=this._time=0,(0!==p||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t?(this._active=!1,this._rawPrevTime>=0&&this._first&&(u=!0),this._rawPrevTime=t):(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(u=!0))):this._totalTime=this._time=this._rawPrevTime=t,this._time!==p&&this._first||i||u){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==p&&t>0&&(this._active=!0),0===p&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||_)),this._time>=p)for(s=this._first;s&&(a=s._next,!this._paused||d);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||d);)(s._active||p>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(h.length&&l(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_))),o&&(this._gc||(f===this._startTime||m!==this._timeScale)&&(0===this._time||c>=this.totalDuration())&&(n&&(h.length&&l(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this.vars[o].apply(this.vars[o+"Scope"]||this,this.vars[o+"Params"]||_)))}},m._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},m.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},m.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},m.recent=function(){return this._recent},m._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},m.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},m._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},m.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},m.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},m._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},m.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},m.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},m.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},m.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},m.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=e())}("TimelineLite");

/*!
 * VERSION: beta 1.9.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},p=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",p("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),p("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),p("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),p=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--p>-1;)i=f?Math.random():1/u*p,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:p%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),p=u;--p>-1;)a=l[p],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();

/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-28
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,r,s,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},l=a.prototype=new t("css");l.constructor=a,a.version="1.14.2",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",l="px",a.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l,lineHeight:""};var h,u,f,p,_,c,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,m=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|e[+-]\d+)[^0-9]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,T=/opacity:([^;]*)/i,w=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,S=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,C=function(t,e){return e.toUpperCase()},k=/(?:Left|Right|Width)/i,O=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,A=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,L=180/Math.PI,N={},z=document,X=z.createElement("div"),I=z.createElement("img"),E=a._internals={_specialProps:o},F=navigator.userAgent,Y=function(){var t,e=F.indexOf("Android"),i=z.createElement("div");return f=-1!==F.indexOf("Safari")&&-1===F.indexOf("Chrome")&&(-1===e||Number(F.substr(e+8,1))>3),_=f&&6>Number(F.substr(F.indexOf("Version/")+8,1)),p=-1!==F.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(F)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(F))&&(c=parseFloat(RegExp.$1)),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),B=function(t){return x.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},U=function(t){window.console&&console.log(t)},j="",W="",V=function(t,e){e=e||X;var i,r,s=e.style;if(void 0!==s[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],r=5;--r>-1&&void 0===s[i[r]+t];);return r>=0?(W=3===r?"ms":i[r],j="-"+W.toLowerCase()+"-",W+t):null},q=z.defaultView?z.defaultView.getComputedStyle:function(){},H=a.getStyle=function(t,e,i,r,s){var n;return Y||"opacity"!==e?(!r&&t.style[e]?n=t.style[e]:(i=i||q(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(P,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==s||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:s):B(t)},G=E.convertToPixels=function(t,i,r,s,n){if("px"===s||!s)return r;if("auto"===s||!r)return 0;var o,l,h,u=k.test(i),f=t,p=X.style,_=0>r;if(_&&(r=-r),"%"===s&&-1!==i.indexOf("border"))o=r/100*(u?t.clientWidth:t.clientHeight);else{if(p.cssText="border:0 solid red;position:"+H(t,"position")+";line-height:0;","%"!==s&&f.appendChild)p[u?"borderLeftWidth":"borderTopWidth"]=r+s;else{if(f=t.parentNode||z.body,l=f._gsCache,h=e.ticker.frame,l&&u&&l.time===h)return l.width*r/100;p[u?"width":"height"]=r+s}f.appendChild(X),o=parseFloat(X[u?"offsetWidth":"offsetHeight"]),f.removeChild(X),u&&"%"===s&&a.cacheWidths!==!1&&(l=f._gsCache=f._gsCache||{},l.time=h,l.width=100*(o/r)),0!==o||n||(o=G(t,i,r,s,!0))}return _?-o:o},Q=E.calculateOffset=function(t,e,i){if("absolute"!==H(t,"position",i))return 0;var r="left"===e?"Left":"Top",s=H(t,"margin"+r,i);return t["offset"+r]-(G(t,e,parseFloat(s),s.replace(y,""))||0)},Z=function(t,e){var i,r,s={};if(e=e||q(t,null))if(i=e.length)for(;--i>-1;)s[e[i].replace(S,C)]=e.getPropertyValue(e[i]);else for(i in e)s[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===s[i]&&(s[i.replace(S,C)]=e[i]);return Y||(s.opacity=B(t)),r=Ae(t,e,!1),s.rotation=r.rotation,s.skewX=r.skewX,s.scaleX=r.scaleX,s.scaleY=r.scaleY,s.x=r.x,s.y=r.y,be&&(s.z=r.z,s.rotationX=r.rotationX,s.rotationY=r.rotationY,s.scaleZ=r.scaleZ),s.filters&&delete s.filters,s},$=function(t,e,i,r,s){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||s&&s[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:Q(t,a),void 0!==h[a]&&(o=new fe(h,a,h[a],o)));if(r)for(a in r)"className"!==a&&(l[a]=r[a]);return{difs:l,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var r=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),s=K[e],n=s.length;for(i=i||q(t,null);--n>-1;)r-=parseFloat(H(t,"padding"+s[n],i,!0))||0,r-=parseFloat(H(t,"border"+s[n]+"Width",i,!0))||0;return r},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),r=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],s=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==s?s="0":"center"===s&&(s="50%"),("center"===r||isNaN(parseFloat(r))&&-1===(r+"").indexOf("="))&&(r="50%"),e&&(e.oxp=-1!==r.indexOf("%"),e.oyp=-1!==s.indexOf("%"),e.oxr="="===r.charAt(1),e.oyr="="===s.charAt(1),e.ox=parseFloat(r.replace(v,"")),e.oy=parseFloat(s.replace(v,""))),r+" "+s+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},re=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},se=function(t,e,i,r){var s,n,a,o,l=1e-6;return null==t?o=e:"number"==typeof t?o=t:(s=360,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?1:L)-("="===t.charAt(1)?0:e),n.length&&(r&&(r[i]=e+a),-1!==t.indexOf("short")&&(a%=s,a!==a%(s/2)&&(a=0>a?a+s:a-s)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*s)%s-(0|a/s)*s:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*s)%s-(0|a/s)*s)),o=e+a),l>o&&o>-l&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=a.parseColor=function(t){var e,i,r,s,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),r=t.charAt(3),t="#"+e+e+i+i+r+r),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(d),s=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(s+1/3,e,i),t[1]=ae(s,e,i),t[2]=ae(s-1/3,e,i),t):(t=t.match(d)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},le="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in ne)le+="|"+l+"\\b";le=RegExp(le+")","gi");var he=function(t,e,i,r){if(null==t)return function(t){return t};var s,n=e?(t.match(le)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",h=-1!==t.indexOf(" ")?" ":",",u=a.length,f=u>0?a[0].replace(d,""):"";return u?s=e?function(t){var e,p,_,c;if("number"==typeof t)t+=f;else if(r&&D.test(t)){for(c=t.replace(D,"|").split("|"),_=0;c.length>_;_++)c[_]=s(c[_]);return c.join(",")}if(e=(t.match(le)||[n])[0],p=t.split(e).join("").match(g)||[],_=p.length,u>_--)for(;u>++_;)p[_]=i?p[0|(_-1)/2]:a[_];return o+p.join(h)+h+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=f;else if(r&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=s(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,u>p--)for(;u>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(h)+l}:function(t){return t}},ue=function(t){return t=t.split(","),function(e,i,r,s,n,a,o){var l,h=(i+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];return s.parse(e,o,n,a)}},fe=(E._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,r,s,n=this.data,a=n.proxy,o=n.firstMPT,l=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(s=i.xs0+i.s+i.xs1,r=1;i.l>r;r++)s+=i["xn"+r]+i["xs"+(r+1)];i.e=s}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,r,s){this.t=t,this.p=e,this.v=i,this.r=s,r&&(r._prev=this,this._next=r)}),pe=(E._parseToProxy=function(t,e,i,r,s,n){var a,o,l,h,u,f=r,p={},_={},c=i._transform,d=N;for(i._transform=null,N=e,r=u=i.parse(t,e,r,s),N=d,n&&(i._transform=c,f&&(f._prev=null,f._prev&&(f._prev._next=null)));r&&r!==f;){if(1>=r.type&&(o=r.p,_[o]=r.s+r.c,p[o]=r.s,n||(h=new fe(r,"s",o,h,r.r),r.c=0),1===r.type))for(a=r.l;--a>0;)l="xn"+a,o=r.p+"_"+l,_[o]=r.data[l],p[o]=r[l],n||(h=new fe(r,l,o,h,r.rxp[l]));r=r._next}return{proxy:p,end:_,firstMPT:h,pt:u}},E.CSSPropTween=function(t,e,r,s,a,o,l,h,u,f,p){this.t=t,this.p=e,this.s=r,this.c=s,this.n=l||e,t instanceof pe||n.push(this.n),this.r=h,this.type=o||0,u&&(this.pr=u,i=!0),this.b=void 0===f?r:f,this.e=void 0===p?r+s:p,a&&(this._next=a,a._prev=this)}),_e=a.parseComplex=function(t,e,i,r,s,n,a,o,l,u){i=i||n||"",a=new pe(t,e,0,0,a,u?2:1,null,!1,o,i,r),r+="";var f,p,_,c,g,v,y,x,T,w,P,S,R=i.split(", ").join(",").split(" "),C=r.split(", ").join(",").split(" "),k=R.length,O=h!==!1;for((-1!==r.indexOf(",")||-1!==i.indexOf(","))&&(R=R.join(" ").replace(D,", ").split(" "),C=C.join(" ").replace(D,", ").split(" "),k=R.length),k!==C.length&&(R=(n||"").split(" "),k=R.length),a.plugin=l,a.setRatio=u,f=0;k>f;f++)if(c=R[f],g=C[f],x=parseFloat(c),x||0===x)a.appendXtra("",x,ie(g,x),g.replace(m,""),O&&-1!==g.indexOf("px"),!0);else if(s&&("#"===c.charAt(0)||ne[c]||b.test(c)))S=","===g.charAt(g.length-1)?"),":")",c=oe(c),g=oe(g),T=c.length+g.length>6,T&&!Y&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(C[f]).join("transparent")):(Y||(T=!1),a.appendXtra(T?"rgba(":"rgb(",c[0],g[0]-c[0],",",!0,!0).appendXtra("",c[1],g[1]-c[1],",",!0).appendXtra("",c[2],g[2]-c[2],T?",":S,!0),T&&(c=4>c.length?1:c[3],a.appendXtra("",c,(4>g.length?1:g[3])-c,S,!1)));else if(v=c.match(d)){if(y=g.match(m),!y||y.length!==v.length)return a;for(_=0,p=0;v.length>p;p++)P=v[p],w=c.indexOf(P,_),a.appendXtra(c.substr(_,w-_),Number(P),ie(y[p],P),"",O&&"px"===c.substr(w+P.length,2),0===p),_=w+P.length;a["xs"+a.l]+=c.substr(_)}else a["xs"+a.l]+=a.l?" "+c:c;if(-1!==r.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,f=1;a.l>f;f++)S+=a["xs"+f]+a.data["xn"+f];a.e=S+a["xs"+f]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ce=9;for(l=pe.prototype,l.l=l.pr=0;--ce>0;)l["xn"+ce]=0,l["xs"+ce]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,i,r,s,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=r||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=s,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,s,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=s,a)):(a["xs"+o]+=e+(r||""),a)};var de=function(t,e){e=e||{},this.p=e.prefix?V(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||he(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},me=E._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var r,s,n=t.split(","),a=e.defaultValue;for(i=i||[a],r=0;n.length>r;r++)e.prefix=0===r&&e.prefix,e.defaultValue=i[r]||a,s=new de(n[r],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";me(t,{parser:function(t,i,r,s,n,a,l){var h=(_gsScope.GreenSockGlobals||_gsScope).com.greensock.plugins[e];return h?(h._cssRegister(),o[r].parse(t,i,r,s,n,a,l)):(U("Error: "+e+" js file not loaded."),n)}})}};l=de.prototype,l.parseComplex=function(t,e,i,r,s,n){var a,o,l,h,u,f,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),l=i.replace(D,"|").split("|")):p&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;h>a;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,p&&(u=e.indexOf(p),f=i.indexOf(p),u!==f&&(i=-1===f?l:o,i[a]+=" "+p));e=o.join(", "),i=l.join(", ")}return _e(t,this.p,e,i,this.clrs,this.dflt,r,this.pr,s,n)},l.parse=function(t,e,i,r,n,a){return this.parseComplex(t.style,this.format(H(t,this.p,s,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){me(t,{parser:function(t,r,s,n,a,o){var l=new pe(t,s,0,0,a,2,s,!1,i);return l.plugin=o,l.setRatio=e(t,r,n._tween,s),l},priority:i})};var ve,ye="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),xe=V("transform"),Te=j+"transform",we=V("transformOrigin"),be=null!==V("perspective"),Pe=E.Transform=function(){this.skewY=0},Se=window.SVGElement,Re=function(t,e,i){var r,s=z.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(r in i)s.setAttributeNS(null,r.replace(n,"$1-$2").toLowerCase(),i[r]);return e.appendChild(s),s},Ce=document.documentElement,ke=function(){var t,e,i,r=c||/Android/i.test(F)&&!window.chrome;return z.createElementNS&&!r&&(t=Re("svg",Ce),e=Re("rect",t,{width:100,height:50,x:100}),i=e.getBoundingClientRect().left,e.style[we]="50% 50%",e.style[xe]="scale(0.5,0.5)",r=i===e.getBoundingClientRect().left,Ce.removeChild(t)),r}(),Oe=function(t,e,i){var r=t.getBBox();e=ee(e).split(" "),i.xOrigin=(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*r.width:parseFloat(e[0]))+r.x,i.yOrigin=(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*r.height:parseFloat(e[1]))+r.y},Ae=E.getTransform=function(t,e,i,r){if(t._gsTransform&&i&&!r)return t._gsTransform;var n,o,l,h,u,f,p,_,c,d,m,g,v,y=i?t._gsTransform||new Pe:new Pe,x=0>y.scaleX,T=2e-5,w=1e5,b=179.99,P=b*M,S=be?parseFloat(H(t,we,e,!1,"0 0 0").split(" ")[2])||y.zOrigin||0:0,R=parseFloat(a.defaultTransformPerspective)||0;if(xe?n=H(t,Te,e,!0):t.currentStyle&&(n=t.currentStyle.filter.match(O),n=n&&4===n.length?[n[0].substr(4),Number(n[2].substr(4)),Number(n[1].substr(4)),n[3].substr(4),y.x||0,y.y||0].join(","):""),n&&"none"!==n&&"matrix(1, 0, 0, 1, 0, 0)"!==n){for(o=(n||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],l=o.length;--l>-1;)h=Number(o[l]),o[l]=(u=h-(h|=0))?(0|u*w+(0>u?-.5:.5))/w+h:h;if(16===o.length){var C=o[8],k=o[9],A=o[10],D=o[12],N=o[13],z=o[14];if(y.zOrigin&&(z=-y.zOrigin,D=C*z-o[12],N=k*z-o[13],z=A*z+y.zOrigin-o[14]),!i||r||null==y.rotationX){var X,I,E,F,Y,B,U,j=o[0],W=o[1],V=o[2],q=o[3],G=o[4],Q=o[5],Z=o[6],$=o[7],K=o[11],J=Math.atan2(Z,A),te=-P>J||J>P;y.rotationX=J*L,J&&(F=Math.cos(-J),Y=Math.sin(-J),X=G*F+C*Y,I=Q*F+k*Y,E=Z*F+A*Y,C=G*-Y+C*F,k=Q*-Y+k*F,A=Z*-Y+A*F,K=$*-Y+K*F,G=X,Q=I,Z=E),J=Math.atan2(C,j),y.rotationY=J*L,J&&(B=-P>J||J>P,F=Math.cos(-J),Y=Math.sin(-J),X=j*F-C*Y,I=W*F-k*Y,E=V*F-A*Y,k=W*Y+k*F,A=V*Y+A*F,K=q*Y+K*F,j=X,W=I,V=E),J=Math.atan2(W,Q),y.rotation=J*L,J&&(U=-P>J||J>P,F=Math.cos(-J),Y=Math.sin(-J),j=j*F+G*Y,I=W*F+Q*Y,Q=W*-Y+Q*F,Z=V*-Y+Z*F,W=I),U&&te?y.rotation=y.rotationX=0:U&&B?y.rotation=y.rotationY=0:B&&te&&(y.rotationY=y.rotationX=0),y.scaleX=(0|Math.sqrt(j*j+W*W)*w+.5)/w,y.scaleY=(0|Math.sqrt(Q*Q+k*k)*w+.5)/w,y.scaleZ=(0|Math.sqrt(Z*Z+A*A)*w+.5)/w,y.skewX=0,y.perspective=K?1/(0>K?-K:K):0,y.x=D,y.y=N,y.z=z}}else if(!(be&&!r&&o.length&&y.x===o[4]&&y.y===o[5]&&(y.rotationX||y.rotationY)||void 0!==y.x&&"none"===H(t,"display",e))){var ee=o.length>=6,ie=ee?o[0]:1,re=o[1]||0,se=o[2]||0,ne=ee?o[3]:1;y.x=o[4]||0,y.y=o[5]||0,f=Math.sqrt(ie*ie+re*re),p=Math.sqrt(ne*ne+se*se),_=ie||re?Math.atan2(re,ie)*L:y.rotation||0,c=se||ne?Math.atan2(se,ne)*L+_:y.skewX||0,d=f-Math.abs(y.scaleX||0),m=p-Math.abs(y.scaleY||0),Math.abs(c)>90&&270>Math.abs(c)&&(x?(f*=-1,c+=0>=_?180:-180,_+=0>=_?180:-180):(p*=-1,c+=0>=c?180:-180)),g=(_-y.rotation)%180,v=(c-y.skewX)%180,(void 0===y.skewX||d>T||-T>d||m>T||-T>m||g>-b&&b>g&&false|g*w||v>-b&&b>v&&false|v*w)&&(y.scaleX=f,y.scaleY=p,y.rotation=_,y.skewX=c),be&&(y.rotationX=y.rotationY=y.z=0,y.perspective=R,y.scaleZ=1)}y.zOrigin=S;for(l in y)T>y[l]&&y[l]>-T&&(y[l]=0)}else y={x:0,y:0,z:0,scaleX:1,scaleY:1,scaleZ:1,skewX:0,skewY:0,perspective:R,rotation:0,rotationX:0,rotationY:0,zOrigin:0};return i&&(t._gsTransform=y),y.svg=Se&&t instanceof Se&&t.parentNode instanceof Se,y.svg&&(Oe(t,H(t,we,s,!1,"50% 50%")+"",y),ve=a.useSVGTransformAttr||ke),y.xPercent=y.yPercent=0,y},De=function(t){var e,i,r=this.data,s=-r.rotation*M,n=s+r.skewX*M,a=1e5,o=(0|Math.cos(s)*r.scaleX*a)/a,l=(0|Math.sin(s)*r.scaleX*a)/a,h=(0|Math.sin(n)*-r.scaleY*a)/a,u=(0|Math.cos(n)*r.scaleY*a)/a,f=this.t.style,p=this.t.currentStyle;if(p){i=l,l=-h,h=-i,e=p.filter,f.filter="";var _,d,m=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,T="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+u,w=r.x+m*r.xPercent/100,b=r.y+g*r.yPercent/100;if(null!=r.ox&&(_=(r.oxp?.01*m*r.ox:r.ox)-m/2,d=(r.oyp?.01*g*r.oy:r.oy)-g/2,w+=_-(_*o+d*l),b+=d-(_*h+d*u)),v?(_=m/2,d=g/2,T+=", Dx="+(_-(_*o+d*l)+w)+", Dy="+(d-(_*h+d*u)+b)+")"):T+=", sizingMethod='auto expand')",f.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(A,T):T+" "+e,(0===t||1===t)&&1===o&&0===l&&0===h&&1===u&&(v&&-1===T.indexOf("Dx=0, Dy=0")||x.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&f.removeAttribute("filter")),!v){var P,S,R,C=8>c?1:-1;for(_=r.ieOffsetX||0,d=r.ieOffsetY||0,r.ieOffsetX=Math.round((m-((0>o?-o:o)*m+(0>l?-l:l)*g))/2+w),r.ieOffsetY=Math.round((g-((0>u?-u:u)*g+(0>h?-h:h)*m))/2+b),ce=0;4>ce;ce++)S=J[ce],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):G(this.t,S,parseFloat(P),P.replace(y,""))||0,R=i!==r[S]?2>ce?-r.ieOffsetX:-r.ieOffsetY:2>ce?_-r.ieOffsetX:d-r.ieOffsetY,f[S]=(r[S]=Math.round(i-R*(0===ce||2===ce?1:C)))+"px"}}},Me=E.set3DTransformRatio=function(t){var e,i,r,s,n,a,o,l,h,u,f,_,c,d,m,g,v,y,x,T,w,b,P,S=this.data,R=this.t.style,C=S.rotation*M,k=S.scaleX,O=S.scaleY,A=S.scaleZ,D=S.x,L=S.y,N=S.z,z=S.perspective;if(!(1!==t&&0!==t||"auto"!==S.force3D||S.rotationY||S.rotationX||1!==A||z||N))return Le.call(this,t),void 0;if(p){var X=1e-4;X>k&&k>-X&&(k=A=2e-5),X>O&&O>-X&&(O=A=2e-5),!z||S.z||S.rotationX||S.rotationY||(z=0)}if(C||S.skewX)y=Math.cos(C),x=Math.sin(C),e=y,n=x,S.skewX&&(C-=S.skewX*M,y=Math.cos(C),x=Math.sin(C),"simple"===S.skewType&&(T=Math.tan(S.skewX*M),T=Math.sqrt(1+T*T),y*=T,x*=T)),i=-x,a=y;else{if(!(S.rotationY||S.rotationX||1!==A||z||S.svg))return R[xe]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) translate3d(":"translate3d(")+D+"px,"+L+"px,"+N+"px)"+(1!==k||1!==O?" scale("+k+","+O+")":""),void 0;e=a=1,i=n=0}f=1,r=s=o=l=h=u=_=c=d=0,m=z?-1/z:0,g=S.zOrigin,v=1e5,C=S.rotationY*M,C&&(y=Math.cos(C),x=Math.sin(C),h=f*-x,c=m*-x,r=e*x,o=n*x,f*=y,m*=y,e*=y,n*=y),C=S.rotationX*M,C&&(y=Math.cos(C),x=Math.sin(C),T=i*y+r*x,w=a*y+o*x,b=u*y+f*x,P=d*y+m*x,r=i*-x+r*y,o=a*-x+o*y,f=u*-x+f*y,m=d*-x+m*y,i=T,a=w,u=b,d=P),1!==A&&(r*=A,o*=A,f*=A,m*=A),1!==O&&(i*=O,a*=O,u*=O,d*=O),1!==k&&(e*=k,n*=k,h*=k,c*=k),g&&(_-=g,s=r*_,l=o*_,_=f*_+g),S.svg&&(s+=S.xOrigin-(S.xOrigin*e+S.yOrigin*i),l+=S.yOrigin-(S.xOrigin*n+S.yOrigin*a)),s=(T=(s+=D)-(s|=0))?(0|T*v+(0>T?-.5:.5))/v+s:s,l=(T=(l+=L)-(l|=0))?(0|T*v+(0>T?-.5:.5))/v+l:l,_=(T=(_+=N)-(_|=0))?(0|T*v+(0>T?-.5:.5))/v+_:_,R[xe]=(S.xPercent||S.yPercent?"translate("+S.xPercent+"%,"+S.yPercent+"%) matrix3d(":"matrix3d(")+[(0|e*v)/v,(0|n*v)/v,(0|h*v)/v,(0|c*v)/v,(0|i*v)/v,(0|a*v)/v,(0|u*v)/v,(0|d*v)/v,(0|r*v)/v,(0|o*v)/v,(0|f*v)/v,(0|m*v)/v,s,l,_,z?1+-_/z:1].join(",")+")"},Le=E.set2DTransformRatio=function(t){var e,i,r,s,n,a,o,l,h,u,f,p=this.data,_=this.t,c=_.style,d=p.x,m=p.y;return!(p.rotationX||p.rotationY||p.z||p.force3D===!0||"auto"===p.force3D&&1!==t&&0!==t)||p.svg&&ve||!be?(s=p.scaleX,n=p.scaleY,p.rotation||p.skewX||p.svg?(e=p.rotation*M,i=e-p.skewX*M,r=1e5,a=Math.cos(e)*s,o=Math.sin(e)*s,l=Math.sin(i)*-n,h=Math.cos(i)*n,p.svg&&(d+=p.xOrigin-(p.xOrigin*a+p.yOrigin*l),m+=p.yOrigin-(p.xOrigin*o+p.yOrigin*h),f=1e-6,f>d&&d>-f&&(d=0),f>m&&m>-f&&(m=0)),u=(0|a*r)/r+","+(0|o*r)/r+","+(0|l*r)/r+","+(0|h*r)/r+","+d+","+m+")",p.svg&&ve?_.setAttribute("transform","matrix("+u):c[xe]=(p.xPercent||p.yPercent?"translate("+p.xPercent+"%,"+p.yPercent+"%) matrix(":"matrix(")+u):c[xe]=(p.xPercent||p.yPercent?"translate("+p.xPercent+"%,"+p.yPercent+"%) matrix(":"matrix(")+s+",0,0,"+n+","+d+","+m+")",void 0):(this.setRatio=Me,Me.call(this,t),void 0)};me("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",{parser:function(t,e,i,r,n,o,l){if(r._transform)return n;var h,u,f,p,_,c,d,m=r._transform=Ae(t,s,!0,l.parseTransform),g=t.style,v=1e-6,y=ye.length,x=l,T={};if("string"==typeof x.transform&&xe)f=X.style,f[xe]=x.transform,f.display="block",f.position="absolute",z.body.appendChild(X),h=Ae(X,null,!1),z.body.removeChild(X);else if("object"==typeof x){if(h={scaleX:re(null!=x.scaleX?x.scaleX:x.scale,m.scaleX),scaleY:re(null!=x.scaleY?x.scaleY:x.scale,m.scaleY),scaleZ:re(x.scaleZ,m.scaleZ),x:re(x.x,m.x),y:re(x.y,m.y),z:re(x.z,m.z),xPercent:re(x.xPercent,m.xPercent),yPercent:re(x.yPercent,m.yPercent),perspective:re(x.transformPerspective,m.perspective)},d=x.directionalRotation,null!=d)if("object"==typeof d)for(f in d)x[f]=d[f];else x.rotation=d;"string"==typeof x.x&&-1!==x.x.indexOf("%")&&(h.x=0,h.xPercent=re(x.x,m.xPercent)),"string"==typeof x.y&&-1!==x.y.indexOf("%")&&(h.y=0,h.yPercent=re(x.y,m.yPercent)),h.rotation=se("rotation"in x?x.rotation:"shortRotation"in x?x.shortRotation+"_short":"rotationZ"in x?x.rotationZ:m.rotation,m.rotation,"rotation",T),be&&(h.rotationX=se("rotationX"in x?x.rotationX:"shortRotationX"in x?x.shortRotationX+"_short":m.rotationX||0,m.rotationX,"rotationX",T),h.rotationY=se("rotationY"in x?x.rotationY:"shortRotationY"in x?x.shortRotationY+"_short":m.rotationY||0,m.rotationY,"rotationY",T)),h.skewX=null==x.skewX?m.skewX:se(x.skewX,m.skewX),h.skewY=null==x.skewY?m.skewY:se(x.skewY,m.skewY),(u=h.skewY-m.skewY)&&(h.skewX+=u,h.rotation+=u)}for(be&&null!=x.force3D&&(m.force3D=x.force3D,c=!0),m.skewType=x.skewType||m.skewType||a.defaultSkewType,_=m.force3D||m.z||m.rotationX||m.rotationY||h.z||h.rotationX||h.rotationY||h.perspective,_||null==x.scale||(h.scaleZ=1);--y>-1;)i=ye[y],p=h[i]-m[i],(p>v||-v>p||null!=x[i]||null!=N[i])&&(c=!0,n=new pe(m,i,m[i],p,n),i in T&&(n.e=T[i]),n.xs0=0,n.plugin=o,r._overwriteProps.push(n.n));return p=x.transformOrigin,p&&m.svg&&(Oe(t,p,h),n=new pe(m,"xOrigin",m.xOrigin,h.xOrigin-m.xOrigin,n,-1,"transformOrigin"),n.b=m.xOrigin,n.e=n.xs0=h.xOrigin,n=new pe(m,"yOrigin",m.yOrigin,h.yOrigin-m.yOrigin,n,-1,"transformOrigin"),n.b=m.yOrigin,n.e=n.xs0=h.yOrigin,p="0px 0px"),(p||be&&_&&m.zOrigin)&&(xe?(c=!0,i=we,p=(p||H(t,i,s,!1,"50% 50%"))+"",n=new pe(g,i,0,0,n,-1,"transformOrigin"),n.b=g[i],n.plugin=o,be?(f=m.zOrigin,p=p.split(" "),m.zOrigin=(p.length>2&&(0===f||"0px"!==p[2])?parseFloat(p[2]):f)||0,n.xs0=n.e=p[0]+" "+(p[1]||"50%")+" 0px",n=new pe(m,"zOrigin",0,0,n,-1,n.n),n.b=f,n.xs0=n.e=m.zOrigin):n.xs0=n.e=p):ee(p+"",m)),c&&(r._transformType=m.svg&&ve||!_&&3!==this._transformType?2:3),n},prefix:!0}),me("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),me("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,l,h,u,f,p,_,c,d,m,g,v,y,x,T,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(d=parseFloat(t.offsetWidth),m=parseFloat(t.offsetHeight),o=e.split(" "),l=0;b.length>l;l++)this.p.indexOf("border")&&(b[l]=V(b[l])),f=u=H(t,b[l],s,!1,"0px"),-1!==f.indexOf(" ")&&(u=f.split(" "),f=u[0],u=u[1]),p=h=o[l],_=parseFloat(f),v=f.substr((_+"").length),y="="===p.charAt(1),y?(c=parseInt(p.charAt(0)+"1",10),p=p.substr(2),c*=parseFloat(p),g=p.substr((c+"").length-(0>c?1:0))||""):(c=parseFloat(p),g=p.substr((c+"").length)),""===g&&(g=r[i]||v),g!==v&&(x=G(t,"borderLeft",_,v),T=G(t,"borderTop",_,v),"%"===g?(f=100*(x/d)+"%",u=100*(T/m)+"%"):"em"===g?(w=G(t,"borderLeft",1,"em"),f=x/w+"em",u=T/w+"em"):(f=x+"px",u=T+"px"),y&&(p=parseFloat(f)+c+g,h=parseFloat(u)+c+g)),a=_e(P,b[l],f+" "+u,p+" "+h,!1,"0px",a);return a},prefix:!0,formatter:he("0px 0px 0px 0px",!1,!0)}),me("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,r,n,a){var o,l,h,u,f,p,_="background-position",d=s||q(t,null),m=this.format((d?c?d.getPropertyValue(_+"-x")+" "+d.getPropertyValue(_+"-y"):d.getPropertyValue(_):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==m.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=H(t,"backgroundImage").replace(R,""),p&&"none"!==p)){for(o=m.split(" "),l=g.split(" "),I.setAttribute("src",p),h=2;--h>-1;)m=o[h],u=-1!==m.indexOf("%"),u!==(-1!==l[h].indexOf("%"))&&(f=0===h?t.offsetWidth-I.width:t.offsetHeight-I.height,o[h]=u?parseFloat(m)/100*f+"px":100*(parseFloat(m)/f)+"%");m=o.join(" ")}return this.parseComplex(t.style,m,g,n,a)},formatter:ee}),me("backgroundSize",{defaultValue:"0 0",formatter:ee}),me("perspective",{defaultValue:"0px",prefix:!0}),me("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),me("transformStyle",{prefix:!0}),me("backfaceVisibility",{prefix:!0}),me("userSelect",{prefix:!0}),me("margin",{parser:ue("marginTop,marginRight,marginBottom,marginLeft")}),me("padding",{parser:ue("paddingTop,paddingRight,paddingBottom,paddingLeft")}),me("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,r,n,a){var o,l,h;return 9>c?(l=t.currentStyle,h=8>c?" ":",",o="rect("+l.clipTop+h+l.clipRight+h+l.clipBottom+h+l.clipLeft+")",e=this.format(e).split(",").join(h)):(o=this.format(H(t,this.p,s,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),me("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),me("autoRound,strictUnits",{parser:function(t,e,i,r,s){return s}}),me("border",{defaultValue:"0px solid #000",parser:function(t,e,i,r,n,a){return this.parseComplex(t.style,this.format(H(t,"borderTopWidth",s,!1,"0px")+" "+H(t,"borderTopStyle",s,!1,"solid")+" "+H(t,"borderTopColor",s,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(le)||["#000"])[0]}}),me("borderWidth",{parser:ue("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),me("float,cssFloat,styleFloat",{parser:function(t,e,i,r,s){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,s,-1,i,!1,0,n[a],e)}});var Ne=function(t){var e,i=this.t,r=i.filter||H(this.data,"filter")||"",s=0|this.s+this.c*t;100===s&&(-1===r.indexOf("atrix(")&&-1===r.indexOf("radient(")&&-1===r.indexOf("oader(")?(i.removeAttribute("filter"),e=!H(this.data,"filter")):(i.filter=r.replace(w,""),e=!0)),e||(this.xn1&&(i.filter=r=r||"alpha(opacity="+s+")"),-1===r.indexOf("pacity")?0===s&&this.xn1||(i.filter=r+" alpha(opacity="+s+")"):i.filter=r.replace(x,"opacity="+s))};me("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,r,n,a){var o=parseFloat(H(t,"opacity",s,!1,"1")),l=t.style,h="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),h&&1===o&&"hidden"===H(t,"visibility",s)&&0!==e&&(o=0),Y?n=new pe(l,"opacity",o,e-o,n):(n=new pe(l,"opacity",100*o,100*(e-o),n),n.xn1=h?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Ne),h&&(n=new pe(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",r._overwriteProps.push(n.n),r._overwriteProps.push(i)),n}});var ze=function(t,e){e&&(t.removeProperty?("ms"===e.substr(0,2)&&(e="M"+e.substr(1)),t.removeProperty(e.replace(P,"-$1").toLowerCase())):t.removeAttribute(e))},Xe=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:ze(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};me("className",{parser:function(t,e,r,n,a,o,l){var h,u,f,p,_,c=t.getAttribute("class")||"",d=t.style.cssText;if(a=n._classNamePT=new pe(t,r,0,0,a,2),a.setRatio=Xe,a.pr=-11,i=!0,a.b=c,u=Z(t,s),f=t._gsClassPT){for(p={},_=f.data;_;)p[_.p]=1,_=_._next;f.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:c.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.setAttribute("class",a.e),h=$(t,u,Z(t),l,p),t.setAttribute("class",c),a.data=h.firstMPT,t.style.cssText=d,a=a.xfirst=n.parse(t,h.difs,a,o)),a}});var Ie=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,r,s,n=this.t.style,a=o.transform.parse;if("all"===this.e)n.cssText="",s=!0;else for(e=this.e.split(" ").join("").split(","),r=e.length;--r>-1;)i=e[r],o[i]&&(o[i].parse===a?s=!0:i="transformOrigin"===i?we:o[i].p),ze(n,i);s&&(ze(n,xe),this.t._gsTransform&&delete this.t._gsTransform)}};for(me("clearProps",{parser:function(t,e,r,s,n){return n=new pe(t,r,0,0,n,2),n.setRatio=Ie,n.e=e,n.pr=-10,n.data=s._tween,i=!0,n}}),l="bezier,throwProps,physicsProps,physics2D".split(","),ce=l.length;ce--;)ge(l[ce]);l=a.prototype,l._firstPT=null,l._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,h=e.autoRound,i=!1,r=e.suffixMap||a.suffixMap,s=q(t,""),n=this._overwriteProps;var l,p,c,d,m,g,v,y,x,w=t.style;if(u&&""===w.zIndex&&(l=H(t,"zIndex",s),("auto"===l||""===l)&&this._addLazySet(w,"zIndex",0)),"string"==typeof e&&(d=w.cssText,l=Z(t,s),w.cssText=d+";"+e,l=$(t,l,Z(t)).difs,!Y&&T.test(e)&&(l.opacity=parseFloat(RegExp.$1)),e=l,w.cssText=d),this._firstPT=p=this.parse(t,e,null),this._transformType){for(x=3===this._transformType,xe?f&&(u=!0,""===w.zIndex&&(v=H(t,"zIndex",s),("auto"===v||""===v)&&this._addLazySet(w,"zIndex",0)),_&&this._addLazySet(w,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(x?"visible":"hidden"))):w.zoom=1,c=p;c&&c._next;)c=c._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,c),y.setRatio=x&&be?Me:xe?Le:De,y.data=this._transform||Ae(t,s,!0),n.pop()}if(i){for(;p;){for(g=p._next,c=d;c&&c.pr>p.pr;)c=c._next;(p._prev=c?c._prev:m)?p._prev._next=p:d=p,(p._next=c)?c._prev=p:m=p,p=g}this._firstPT=d}return!0},l.parse=function(t,e,i,n){var a,l,u,f,p,_,c,d,m,g,v=t.style;for(a in e)_=e[a],l=o[a],l?i=l.parse(t,_,a,this,i,n,e):(p=H(t,a,s)+"",m="string"==typeof _,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||m&&b.test(_)?(m||(_=oe(_),_=(_.length>3?"rgba(":"rgb(")+_.join(",")+")"),i=_e(v,a,p,_,!0,"transparent",i,0,n)):!m||-1===_.indexOf(" ")&&-1===_.indexOf(",")?(u=parseFloat(p),c=u||0===u?p.substr((u+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(u=te(t,a,s),c="px"):"left"===a||"top"===a?(u=Q(t,a,s),c="px"):(u="opacity"!==a?0:1,c="")),g=m&&"="===_.charAt(1),g?(f=parseInt(_.charAt(0)+"1",10),_=_.substr(2),f*=parseFloat(_),d=_.replace(y,"")):(f=parseFloat(_),d=m?_.substr((f+"").length)||"":""),""===d&&(d=a in r?r[a]:c),_=f||0===f?(g?f+u:f)+d:e[a],c!==d&&""!==d&&(f||0===f)&&u&&(u=G(t,a,u,c),"%"===d?(u/=G(t,a,100,"%")/100,e.strictUnits!==!0&&(p=u+"%")):"em"===d?u/=G(t,a,1,"em"):"px"!==d&&(f=G(t,a,f,d),d="px"),g&&(f||0===f)&&(_=f+u+d)),g&&(f+=u),!u&&0!==u||!f&&0!==f?void 0!==v[a]&&(_||"NaN"!=_+""&&null!=_)?(i=new pe(v,a,f||u||0,0,i,-1,a,!1,0,p,_),i.xs0="none"!==_||"display"!==a&&-1===a.indexOf("Style")?_:p):U("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,u,f-u,i,0,a,h!==!1&&("px"===d||"zIndex"===a),0,p,_),i.xs0=d)):i=_e(v,a,p,_,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);
return i},l.setRatio=function(t){var e,i,r,s=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;s;){if(e=s.c*t+s.s,s.r?e=Math.round(e):n>e&&e>-n&&(e=0),s.type)if(1===s.type)if(r=s.l,2===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2;else if(3===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3;else if(4===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4;else if(5===r)s.t[s.p]=s.xs0+e+s.xs1+s.xn1+s.xs2+s.xn2+s.xs3+s.xn3+s.xs4+s.xn4+s.xs5;else{for(i=s.xs0+e+s.xs1,r=1;s.l>r;r++)i+=s["xn"+r]+s["xs"+(r+1)];s.t[s.p]=i}else-1===s.type?s.t[s.p]=s.xs0:s.setRatio&&s.setRatio(t);else s.t[s.p]=e+s.xs0;s=s._next}else for(;s;)2!==s.type?s.t[s.p]=s.b:s.setRatio(t),s=s._next;else for(;s;)2!==s.type?s.t[s.p]=s.e:s.setRatio(t),s=s._next},l._enableTransforms=function(t){this._transform=this._transform||Ae(this._target,s,!0),this._transformType=this._transform.svg&&ve||!t&&3!==this._transformType?2:3};var Ee=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};l._addLazySet=function(t,e,i){var r=this._firstPT=new pe(t,e,0,0,this._firstPT,2);r.e=i,r.setRatio=Ee,r.data=this},l._linkCSSP=function(t,e,i,r){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,r=!0),i?i._next=t:r||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},l._kill=function(e){var i,r,s,n=e;if(e.autoAlpha||e.alpha){n={};for(r in e)n[r]=e[r];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(s=i.xfirst,s&&s._prev?this._linkCSSP(s._prev,i._next,s._prev._prev):s===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,s._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var Fe=function(t,e,i){var r,s,n,a;if(t.slice)for(s=t.length;--s>-1;)Fe(t[s],e,i);else for(r=t.childNodes,s=r.length;--s>-1;)n=r[s],a=n.type,n.style&&(e.push(Z(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Fe(n,e,i)};return a.cascadeTo=function(t,i,r){var s,n,a,o=e.to(t,i,r),l=[o],h=[],u=[],f=[],p=e._internals.reservedProps;for(t=o._targets||o.target,Fe(t,h,f),o.render(i,!0),Fe(t,u),o.render(0,!0),o._enabled(!0),s=f.length;--s>-1;)if(n=$(f[s],h[s],u[s]),n.firstMPT){n=n.difs;for(a in r)p[a]&&(n[a]=r[a]);l.push(e.to(f[s],i,n))}return l},t.activate([a]),a},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=e())}("CSSPlugin");

/*!
 * VERSION: beta 0.3.3
 * DATE: 2014-10-29
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(function(t){"use strict";var e=t.GreenSockGlobals||t,i=function(t){var i,s=t.split("."),r=e;for(i=0;s.length>i;i++)r[s[i]]=r=r[s[i]]||{};return r},s=i("com.greensock.utils"),r=function(t){var e=t.nodeType,i="";if(1===e||9===e||11===e){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=r(t)}else if(3===e||4===e)return t.nodeValue;return i},n=document,a=n.defaultView?n.defaultView.getComputedStyle:function(){},o=/([A-Z])/g,h=function(t,e,i,s){var r;return(i=i||a(t,null))?(t=i.getPropertyValue(e.replace(o,"-$1").toLowerCase()),r=t||i.length?t:i[e]):t.currentStyle&&(i=t.currentStyle,r=i[e]),s?r:parseInt(r,10)||0},l=function(t){return t.length&&t[0]&&(t[0].nodeType&&t[0].style&&!t.nodeType||t[0].length&&t[0][0])?!0:!1},_=function(t){var e,i,s,r=[],n=t.length;for(e=0;n>e;e++)if(i=t[e],l(i))for(s=i.length,s=0;i.length>s;s++)r.push(i[s]);else r.push(i);return r},u=")eefec303079ad17405c",c=/(?:<br>|<br\/>|<br \/>)/gi,p=n.all&&!n.addEventListener,f="<div style='position:relative;display:inline-block;"+(p?"*display:inline;*zoom:1;'":"'"),m=function(t){t=t||"";var e=-1!==t.indexOf("++"),i=1;return e&&(t=t.split("++").join("")),function(){return f+(t?" class='"+t+(e?i++:"")+"'>":">")}},d=s.SplitText=e.SplitText=function(t,e){if("string"==typeof t&&(t=d.selector(t)),!t)throw"cannot split a null element.";this.elements=l(t)?_(t):[t],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=e||{},this.split(e)},g=function(t,e,i){var s=t.nodeType;if(1===s||9===s||11===s)for(t=t.firstChild;t;t=t.nextSibling)g(t,e,i);else(3===s||4===s)&&(t.nodeValue=t.nodeValue.split(e).join(i))},v=function(t,e){for(var i=e.length;--i>-1;)t.push(e[i])},y=function(t,e,i,s,o){c.test(t.innerHTML)&&(t.innerHTML=t.innerHTML.replace(c,u));var l,_,p,f,d,y,T,w,b,x,P,S,C,k,R=r(t),A=e.type||e.split||"chars,words,lines",O=-1!==A.indexOf("lines")?[]:null,D=-1!==A.indexOf("words"),M=-1!==A.indexOf("chars"),L="absolute"===e.position||e.absolute===!0,z=L?"&#173; ":" ",I=-999,E=a(t),N=h(t,"paddingLeft",E),F=h(t,"borderBottomWidth",E)+h(t,"borderTopWidth",E),X=h(t,"borderLeftWidth",E)+h(t,"borderRightWidth",E),U=h(t,"paddingTop",E)+h(t,"paddingBottom",E),B=h(t,"paddingLeft",E)+h(t,"paddingRight",E),j=h(t,"textAlign",E,!0),Y=t.clientHeight,q=t.clientWidth,G="</div>",V=m(e.wordsClass),Q=m(e.charsClass),W=-1!==(e.linesClass||"").indexOf("++"),H=e.linesClass,Z=-1!==R.indexOf("<"),$=!0,K=[],J=[],te=[];for(W&&(H=H.split("++").join("")),Z&&(R=R.split("<").join("{{LT}}")),l=R.length,f=V(),d=0;l>d;d++)if(T=R.charAt(d),")"===T&&R.substr(d,20)===u)f+=($?G:"")+"<BR/>",$=!1,d!==l-20&&R.substr(d+20,20)!==u&&(f+=" "+V(),$=!0),d+=19;else if(" "===T&&" "!==R.charAt(d-1)&&d!==l-1&&R.substr(d-20,20)!==u){for(f+=$?G:"",$=!1;" "===R.charAt(d+1);)f+=z,d++;(")"!==R.charAt(d+1)||R.substr(d+1,20)!==u)&&(f+=z+V(),$=!0)}else f+=M&&" "!==T?Q()+T+"</div>":T;for(t.innerHTML=f+($?G:""),Z&&g(t,"{{LT}}","<"),y=t.getElementsByTagName("*"),l=y.length,w=[],d=0;l>d;d++)w[d]=y[d];if(O||L)for(d=0;l>d;d++)b=w[d],p=b.parentNode===t,(p||L||M&&!D)&&(x=b.offsetTop,O&&p&&x!==I&&"BR"!==b.nodeName&&(_=[],O.push(_),I=x),L&&(b._x=b.offsetLeft,b._y=x,b._w=b.offsetWidth,b._h=b.offsetHeight),O&&(D!==p&&M||(_.push(b),b._x-=N),p&&d&&(w[d-1]._wordEnd=!0),"BR"===b.nodeName&&b.nextSibling&&"BR"===b.nextSibling.nodeName&&O.push([])));for(d=0;l>d;d++)b=w[d],p=b.parentNode===t,"BR"!==b.nodeName?(L&&(S=b.style,D||p||(b._x+=b.parentNode._x,b._y+=b.parentNode._y),S.left=b._x+"px",S.top=b._y+"px",S.position="absolute",S.display="block",S.width=b._w+1+"px",S.height=b._h+"px"),D?p&&""!==b.innerHTML?J.push(b):M&&K.push(b):p?(t.removeChild(b),w.splice(d--,1),l--):!p&&M&&(x=!O&&!L&&b.nextSibling,t.appendChild(b),x||t.appendChild(n.createTextNode(" ")),K.push(b))):O||L?(t.removeChild(b),w.splice(d--,1),l--):D||t.appendChild(b);if(O){for(L&&(P=n.createElement("div"),t.appendChild(P),C=P.offsetWidth+"px",x=P.offsetParent===t?0:t.offsetLeft,t.removeChild(P)),S=t.style.cssText,t.style.cssText="display:none;";t.firstChild;)t.removeChild(t.firstChild);for(k=!L||!D&&!M,d=0;O.length>d;d++){for(_=O[d],P=n.createElement("div"),P.style.cssText="display:block;text-align:"+j+";position:"+(L?"absolute;":"relative;"),H&&(P.className=H+(W?d+1:"")),te.push(P),l=_.length,y=0;l>y;y++)"BR"!==_[y].nodeName&&(b=_[y],P.appendChild(b),k&&(b._wordEnd||D)&&P.appendChild(n.createTextNode(" ")),L&&(0===y&&(P.style.top=b._y+"px",P.style.left=N+x+"px"),b.style.top="0px",x&&(b.style.left=b._x-x+"px")));0===l&&(P.innerHTML="&nbsp;"),D||M||(P.innerHTML=r(P).split(String.fromCharCode(160)).join(" ")),L&&(P.style.width=C,P.style.height=b._h+"px"),t.appendChild(P)}t.style.cssText=S}L&&(Y>t.clientHeight&&(t.style.height=Y-U+"px",Y>t.clientHeight&&(t.style.height=Y+F+"px")),q>t.clientWidth&&(t.style.width=q-B+"px",q>t.clientWidth&&(t.style.width=q+X+"px"))),v(i,K),v(s,J),v(o,te)},T=d.prototype;T.split=function(t){this.isSplit&&this.revert(),this.vars=t||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var e=this.elements.length;--e>-1;)this._originals[e]=this.elements[e].innerHTML,y(this.elements[e],this.vars,this.chars,this.words,this.lines);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},T.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var t=this._originals.length;--t>-1;)this.elements[t].innerHTML=this._originals[t];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},d.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(d.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)},d.version="0.3.3"})(_gsScope),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(module.exports=e())}("SplitText");


try{
	window.GreenSockGlobals = null;
	window._gsQueue = null;
	window._gsDefine = null;

	delete(window.GreenSockGlobals);
	delete(window._gsQueue);
	delete(window._gsDefine);	
   } catch(e) {}

try{
	window.GreenSockGlobals = oldgs;
	window._gsQueue = oldgs_queue;
	} catch(e) {}

if (window.tplogs==true)
	try {
		console.groupEnd();
	} catch(e) {}





(function(e,t){
		e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var i=e(this),s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached")){s.push({src:t.attr("src"),element:t[0]})}e.each(o,function(e,n){var r=t.css(n);if(!r){return true}var i;while(i=u.exec(r)){s.push({src:i[2],element:t[0]})}})})}else{i.find("img:uncached").each(function(){s.push({src:this.src,element:this})})}var f=s.length,l=0;if(f==0){t.call(i[0])}e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return false}});o.src=s.src})})};		
})(jQuery)
;
jQuery(document).ready(function($) {
    var offset_header = "";	
	get_header_offset();	
	
	function get_header_offset(){		
		offset_header = "";
		if(getScreenWidth() <= 992){
			offset_header = "";
		}else{
			offset_header = "#site_header";
		}
	}
	function getScreenWidth(){
		return document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
	}

	if ( $.isFunction($.fn.revolution) ) {
		//-------------------------------> Revolution Slider - Fullwidth
		$('.tp-banner-fullwidth').show().revolution({
				dottedOverlay:"none",
				delay:16000,
				startwidth:1170,
				startheight:700,
				hideThumbs:200,
				hideTimerBar:"off",
				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:5,
				spinned:"spinner4", //"spinner1" , "spinner2", "spinner3" , "spinner4", "spinner5"
				navigationType:"bullet",
				navigationArrows:"solo",
				navigationStyle:"preview4",
				
				touchenabled:"on",
				onHoverStop:"on",
				lazyLoad:"on",
				
				swipe_velocity: 0.7,
				swipe_min_touches: 1,
				swipe_max_touches: 1,
				drag_block_vertical: false,
										
				parallax:"scroll",
				parallaxBgFreeze:"off",
				parallaxLevels:[10,20,30,40,50,60,70,80,90,100],
										
				keyboardNavigation:"off",
				
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,
	
				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,
	
				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,
						
				shadow:0, //0,1,2,3  (0 == no Shadow, 1,2,3 - Different Shadow Types)
				fullWidth:"off",
				fullScreen:"on",
	
				spinner:"spinner4",
				
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
	
				shuffle:"off",
				
				autoHeight:"off",						
				forceFullWidth:"off",						
										
				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,						
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,
				
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0,
				fullScreenOffsetContainer: ""	
		});
		//-------------------------------> Revolution Slider - Panzoom fullscreen
		$('.tp-banner-panzoom-fullscreen').show().revolution({
				dottedOverlay:"none",
				delay:16000,
				startwidth:1170,
				startheight:700,
				hideThumbs:200,
				
				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:5,
				
				navigationType:"bullet",
				navigationArrows:"solo",
				navigationStyle:"preview4",
				
				touchenabled:"on",
				onHoverStop:"on",
				lazyLoad:"on",
				
				swipe_velocity: 0.7,
				swipe_min_touches: 1,
				swipe_max_touches: 1,
				drag_block_vertical: false,
										
										parallax:"scroll",
				parallaxBgFreeze:"on",
				parallaxLevels:[10,20,30,40,50,60,70,80,90,100],
										
				keyboardNavigation:"off",
				
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,
	
				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,
	
				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,
						
				shadow:0,
				fullWidth:"off",
				fullScreen:"on",
	
				spinner:"spinner4",
				
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
	
				shuffle:"off",
				
				autoHeight:"off",						
				forceFullWidth:"off",						
										
				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,						
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,
				
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0,
				fullScreenOffsetContainer: offset_header	
		});
	};
});
;
(function($) {
    var mobile_sticky = false;
    $.fn.invsticky = function(e) {
        this.each(function() {
            var b = $(this);
            b.addClass('inv-sticky');
            b.data('offset-top', b.data('offset-top') || b.offset().top);
            b.data('max-height', b.outerHeight());
            var c = $('<div>').addClass('sticky-wrapper');
            b.wrap(c);
            var d = b.parents('.sticky-wrapper');
            b.width(d.width());
            setInterval(function() {
                d.height(b.outerHeight());
                b.width(d.width());
            }, 50);
            var scrollTimeout;
            var delay = 15;
            var scrollHandler = function() {
                if(mobile_sticky == false && $(window).width() < 992){
                    return;
                }
                if ($(window).scrollTop() > b.data('offset-top')) {
                    b.addClass('fixed');
                    setTimeout(function() {
                        b.addClass('fixed-transition');
                    }, 10);
                } else {
                    b.removeClass('fixed');
                    setTimeout(function() {
                        b.removeClass('fixed-transition');
                    }, 10);
                }
            };
            $(window).bind('scroll', function() {
                if(b.hasClass('fixed')){
                    delay = 50;
                }else{
                    delay = 10;
                }
                if (scrollTimeout) {
                    clearTimeout(scrollTimeout);
                    scrollTimeout = null;
                }
                scrollTimeout = setTimeout(scrollHandler, 0);
            }).bind('resize', function() {
                b.removeClass('fixed fixed-transition').data('offset-top', b.offset().top);
                $(window).scroll();
            }).scroll();
        });
    };
    $(window).load(function() {
        if(!$('body').hasClass('menu-left') && !$('body').hasClass('menu-right')){
            $('.inv-sticky').invsticky();
        }
    });
}(jQuery));
;
Drupal.TBMegaMenu = Drupal.TBMegaMenu || {};

(function ($, Drupal, drupalSettings) {
  "use strict";

  Drupal.TBMegaMenu.oldWindowWidth = 0;
  Drupal.TBMegaMenu.displayedMenuMobile = false;
  Drupal.TBMegaMenu.supportedScreens = [980];
  Drupal.TBMegaMenu.menuResponsive = function () {
    var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    var navCollapse = $('.tb-megamenu').children('.nav-collapse');
    if (windowWidth < Drupal.TBMegaMenu.supportedScreens[0]) {
      navCollapse.addClass('collapse');
      if (Drupal.TBMegaMenu.displayedMenuMobile) {
        var left = 0-$('.tb-megamenu').children('.btn-navbar').offset().left;
        navCollapse.css('left',left+'px');
        navCollapse.css({height: 'auto', overflow: 'visible'});
      } else {
        navCollapse.css({height: 0, overflow: 'hidden'});
      }
    } else {
      // If width of window is greater than 980 (supported screen).
      navCollapse.removeClass('collapse');
      if (navCollapse.height() <= 0) {
        navCollapse.css({height: 'auto', overflow: 'visible'});
      }
    }
  };

  Drupal.behaviors.tbMegaMenuAction = {
    attach: function (context, settings) {
      var button = $(context).find('.tb-megamenu-button').once('tb-megamenu-action');
      $(button).click(function () {
        if (parseInt($(this).parent().children('.nav-collapse').height())) {
          $(this).parent().children('.nav-collapse').css({height: 0, overflow: 'hidden'});
          Drupal.TBMegaMenu.displayedMenuMobile = false;
        }
        else {
          $(this).parent().children('.nav-collapse').css({height: 'auto', overflow: 'visible'});
          Drupal.TBMegaMenu.displayedMenuMobile = true;
          Drupal.TBMegaMenu.menuResponsive();
        }
      });


      var isTouch = 'ontouchstart' in window && !(/hp-tablet/gi).test(navigator.appVersion);
      if (!isTouch) {
        $(document).ready(function ($) {
          var mm_duration = 0;
          $('.tb-megamenu').each(function () {
            if ($(this).data('duration')) {
              mm_duration = $(this).data('duration');
            }
          });
          var mm_timeout = mm_duration ? 100 + mm_duration : 500;
          $('.nav > li, li.mega').hover(function (event) {
            var $this = $(this);
            if ($this.hasClass('mega')) {
              $this.addClass('animating');
              clearTimeout($this.data('animatingTimeout'));
              $this.data('animatingTimeout', setTimeout(function () {
                $this.removeClass('animating');
              }, mm_timeout));
            }
            clearTimeout($this.data('hoverTimeout'));
            $this.data('hoverTimeout', setTimeout(function () {
              $this.addClass('open');
            }, 100));
          },
            function (event) {
              var $this = $(this);
              if ($this.hasClass('mega')) {
                $this.addClass('animating');
                clearTimeout($this.data('animatingTimeout'));
                $this.data('animatingTimeout', setTimeout(function () {
                  $this.removeClass('animating');
                }, mm_timeout));
              }
              clearTimeout($this.data('hoverTimeout'));
              $this.data('hoverTimeout', setTimeout(function () {
                $this.removeClass('open');
              }, 100));
            });
        });
      }

      $(window).resize(function () {
        var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
        if (windowWidth != Drupal.TBMegaMenu.oldWindowWidth) {
          Drupal.TBMegaMenu.oldWindowWidth = windowWidth;
          Drupal.TBMegaMenu.menuResponsive();
        }
      });
    }
  };
})(jQuery, Drupal, drupalSettings);

;
Drupal.TBMegaMenu = Drupal.TBMegaMenu || {};

(function ($, Drupal, drupalSettings) {
  "use strict";
  
  Drupal.TBMegaMenu.createTouchMenu = function(items) {
      items.children('a').each( function() {
        var $item = $(this);
        var tbitem = $(this).parent();
        $item.click( function(event){
          if ($item.hasClass('tb-megamenu-clicked')) {
            var $uri = $item.attr('href');
            window.location.href = $uri;
          }
          else {
            event.preventDefault();
            $item.addClass('tb-megamenu-clicked');
            if(!tbitem.hasClass('open')){	
              tbitem.addClass('open');
            }
          }
        }).closest('li').mouseleave( function(){
          $item.removeClass('tb-megamenu-clicked');
          tbitem.removeClass('open');
        });
     });
     /*
     items.children('a').children('span.caret').each( function() {
	var $item = $(this).parent();
        $item.click(function(event){
          tbitem = $item.parent();
          if ($item.hasClass('tb-megamenu-clicked')) {
            Drupal.TBMegaMenu.eventStopPropagation(event);
            if(tbitem.hasClass('open')){	
              tbitem.removeClass('open');
              $item.removeClass('tb-megamenu-clicked');
            }
          }
          else {
            Drupal.TBMegaMenu.eventStopPropagation(event);
            $item.addClass('tb-megamenu-clicked');
            if(!tbitem.hasClass('open')){	
              tbitem.addClass('open');
              $item.removeClass('tb-megamenu-clicked');
            }
          }
        });
     });
     */
  };
  
  Drupal.TBMegaMenu.eventStopPropagation = function(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    else if (window.event) {
      window.event.cancelBubble = true;
    }
  };
  
  Drupal.behaviors.tbMegaMenuTouchAction = {
    attach: function(context) {
      var isTouch = 'ontouchstart' in window && !(/hp-tablet/gi).test(navigator.appVersion);
      if(isTouch){
        $('html').addClass('touch');
        Drupal.TBMegaMenu.createTouchMenu($('.tb-megamenu ul.nav li.mega').has('.dropdown-menu'));
      }
    }
  };
})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Adds an HTML element and method to trigger audio UAs to read system messages.
 *
 * Use {@link Drupal.announce} to indicate to screen reader users that an
 * element on the page has changed state. For instance, if clicking a link
 * loads 10 more items into a list, one might announce the change like this.
 *
 * @example
 * $('#search-list')
 *   .on('itemInsert', function (event, data) {
 *     // Insert the new items.
 *     $(data.container.el).append(data.items.el);
 *     // Announce the change to the page contents.
 *     Drupal.announce(Drupal.t('@count items added to @container',
 *       {'@count': data.items.length, '@container': data.container.title}
 *     ));
 *   });
 */

(function (Drupal, debounce) {

  'use strict';

  var liveElement;
  var announcements = [];

  /**
   * Builds a div element with the aria-live attribute and add it to the DOM.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for drupalAnnouce.
   */
  Drupal.behaviors.drupalAnnounce = {
    attach: function (context) {
      // Create only one aria-live element.
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };

  /**
   * Concatenates announcements to a single string; appends to the live region.
   */
  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement;

    // Create an array of announcement strings to be joined and appended to the
    // aria live region.
    var il = announcements.length;
    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);
      // If any of the announcements has a priority of assertive then the group
      // of joined announcements will have this priority.
      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }

    if (text.length) {
      // Clear the liveElement so that repeated strings will be read.
      liveElement.innerHTML = '';
      // Set the busy state to true until the node changes are complete.
      liveElement.setAttribute('aria-busy', 'true');
      // Set the priority to assertive, or default to polite.
      liveElement.setAttribute('aria-live', priority);
      // Print the text to the live region. Text should be run through
      // Drupal.t() before being passed to Drupal.announce().
      liveElement.innerHTML = text.join('\n');
      // The live text area is updated. Allow the AT to announce the text.
      liveElement.setAttribute('aria-busy', 'false');
    }
  }

  /**
   * Triggers audio UAs to read the supplied text.
   *
   * The aria-live region will only read the text that currently populates its
   * text node. Replacing text quickly in rapid calls to announce results in
   * only the text from the most recent call to {@link Drupal.announce} being
   * read. By wrapping the call to announce in a debounce function, we allow for
   * time for multiple calls to {@link Drupal.announce} to queue up their
   * messages. These messages are then joined and append to the aria-live region
   * as one text node.
   *
   * @param {string} text
   *   A string to be read by the UA.
   * @param {string} [priority='polite']
   *   A string to indicate the priority of the message. Can be either
   *   'polite' or 'assertive'.
   *
   * @return {function}
   *   The return of the call to debounce.
   *
   * @see http://www.w3.org/WAI/PF/aria-practices/#liveprops
   */
  Drupal.announce = function (text, priority) {
    // Save the text and priority into a closure variable. Multiple simultaneous
    // announcements will be concatenated and read in sequence.
    announcements.push({
      text: text,
      priority: priority
    });
    // Immediately invoke the function that debounce returns. 200 ms is right at
    // the cusp where humans notice a pause, so we will wait
    // at most this much time before the set of queued announcements is read.
    return (debounce(announce, 200)());
  };
}(Drupal, Drupal.debounce));
;
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css";t.id="matchmediajs-test";i.parentNode.insertBefore(t,i);n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle;e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";if(t.styleSheet){t.styleSheet.cssText=i}else{t.textContent=i}return n.width==="1px"}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
;
(function(){if(window.matchMedia&&window.matchMedia("all").addListener){return false}var e=window.matchMedia,i=e("only all").matches,n=false,t=0,a=[],r=function(i){clearTimeout(t);t=setTimeout(function(){for(var i=0,n=a.length;i<n;i++){var t=a[i].mql,r=a[i].listeners||[],o=e(t.media).matches;if(o!==t.matches){t.matches=o;for(var s=0,l=r.length;s<l;s++){r[s].call(window,t)}}}},30)};window.matchMedia=function(t){var o=e(t),s=[],l=0;o.addListener=function(e){if(!i){return}if(!n){n=true;window.addEventListener("resize",r,true)}if(l===0){l=a.push({mql:o,listeners:s})}s.push(e)};o.removeListener=function(e){for(var i=0,n=s.length;i<n;i++){if(s[i]===e){s.splice(i,1)}}};return o}})();
;
/**
 * @file
 * Builds a nested accordion widget.
 *
 * Invoke on an HTML list element with the jQuery plugin pattern.
 *
 * @example
 * $('.toolbar-menu').drupalToolbarMenu();
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  /**
   * Store the open menu tray.
   */
  var activeItem = Drupal.url(drupalSettings.path.currentPath);

  $.fn.drupalToolbarMenu = function () {

    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };

    /**
     * Handle clicks from the disclosure button on an item with sub-items.
     *
     * @param {Object} event
     *   A jQuery Event object.
     */
    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');
      // Toggle the list item.
      toggleList($item);
      // Close open sibling menus.
      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }

    /**
     * Handle clicks from a menu item link.
     *
     * @param {Object} event
     *   A jQuery Event object.
     */
    function linkClickHandler(event) {
      // If the toolbar is positioned fixed (and therefore hiding content
      // underneath), then users expect clicks in the administration menu tray
      // to take them to that destination but for the menu tray to be closed
      // after clicking: otherwise the toolbar itself is obstructing the view
      // of the destination they chose.
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }
      // Stopping propagation to make sure that once a toolbar-box is clicked
      // (the whitespace part), the page is not redirected anymore.
      event.stopPropagation();
    }

    /**
     * Toggle the open/close state of a list is a menu.
     *
     * @param {jQuery} $item
     *   The li item to be toggled.
     *
     * @param {Boolean} switcher
     *   A flag that forces toggleClass to add or a remove a class, rather than
     *   simply toggling its presence.
     */
    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = (typeof switcher !== 'undefined') ? switcher : !$item.hasClass('open');
      // Toggle the item open state.
      $item.toggleClass('open', switcher);
      // Twist the toggle.
      $toggle.toggleClass('open', switcher);
      // Adjust the toggle text.
      $toggle
        .find('.action')
        // Expand Structure, Collapse Structure.
        .text((switcher) ? ui.handleClose : ui.handleOpen);
    }

    /**
     * Add markup to the menu elements.
     *
     * Items with sub-elements have a list toggle attached to them. Menu item
     * links and the corresponding list toggle are wrapped with in a div
     * classed with .toolbar-box. The .toolbar-box div provides a positioning
     * context for the item list toggle.
     *
     * @param {jQuery} $menu
     *   The root of the menu to be initialized.
     */
    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };
      // Initialize items and their links.
      $menu.find('li > a').wrap('<div class="toolbar-box">');
      // Add a handle to each list item if it has a menu.
      $menu.find('li').each(function (index, element) {
        var $item = $(element);
        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          options.text = Drupal.t('@label', {'@label': $box.find('a').text()});
          $item.children('.toolbar-box')
            .append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }

    /**
     * Adds a level class to each list based on its depth in the menu.
     *
     * This function is called recursively on each sub level of lists elements
     * until the depth of the menu is exhausted.
     *
     * @param {jQuery} $lists
     *   A jQuery object of ul elements.
     *
     * @param {number} level
     *   The current level number to be assigned to the list elements.
     */
    function markListLevels($lists, level) {
      level = (!level) ? 1 : level;
      var $lis = $lists.children('li').addClass('level-' + level);
      $lists = $lis.children('ul');
      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }

    /**
     * On page load, open the active menu item.
     *
     * Marks the trail of the active link in the menu back to the root of the
     * menu with .menu-item--active-trail.
     *
     * @param {jQuery} $menu
     *   The root of the menu.
     */
    function openActiveItem($menu) {
      var pathItem = $menu.find('a[href="' + location.pathname + '"]');
      if (pathItem.length && !activeItem) {
        activeItem = location.pathname;
      }
      if (activeItem) {
        var $activeItem = $menu.find('a[href="' + activeItem + '"]').addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }

    // Return the jQuery object.
    return this.each(function (selector) {
      var $menu = $(this).once('toolbar-menu');
      if ($menu.length) {
        // Bind event handlers.
        $menu
          .on('click.toolbar', '.toolbar-box', toggleClickHandler)
          .on('click.toolbar', '.toolbar-box a', linkClickHandler);

        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);
        // Restore previous and active states.
        openActiveItem($menu);
      }
    });
  };

  /**
   * A toggle is an interactive element often bound to a click handler.
   *
   * @param {object} options
   *   Options for the button.
   * @param {string} options.class
   *   Class to set on the button.
   * @param {string} options.action
   *   Action for the button.
   * @param {string} options.text
   *   Used as label for the button.
   *
   * @return {string}
   *   A string representing a DOM fragment.
   */
  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return '<button class="' + options['class'] + '"><span class="action">' + options.action + '</span><span class="label">' + options.text + '</span></button>';
  };

}(jQuery, Drupal, drupalSettings));
;
/**
 * @file
 * Defines the behavior of the Drupal administration toolbar.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  // Merge run-time settings with the defaults.
  var options = $.extend(
    {
      breakpoints: {
        'toolbar.narrow': '',
        'toolbar.standard': '',
        'toolbar.wide': ''
      }
    },
    drupalSettings.toolbar,
    // Merge strings on top of drupalSettings so that they are not mutable.
    {
      strings: {
        horizontal: Drupal.t('Horizontal orientation'),
        vertical: Drupal.t('Vertical orientation')
      }
    }
  );

  /**
   * Registers tabs with the toolbar.
   *
   * The Drupal toolbar allows modules to register top-level tabs. These may
   * point directly to a resource or toggle the visibility of a tray.
   *
   * Modules register tabs with hook_toolbar().
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the toolbar rendering functionality to the toolbar element.
   */
  Drupal.behaviors.toolbar = {
    attach: function (context) {
      // Verify that the user agent understands media queries. Complex admin
      // toolbar layouts require media query support.
      if (!window.matchMedia('only screen').matches) {
        return;
      }
      // Process the administrative toolbar.
      $(context).find('#toolbar-administration').once('toolbar').each(function () {

        // Establish the toolbar models and views.
        var model = Drupal.toolbar.models.toolbarModel = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')) || false,
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID')))
        });
        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: this,
          model: model
        });

        // Render collapsible menus.
        var menuModel = Drupal.toolbar.models.menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(this).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });

        // Handle the resolution of Drupal.toolbar.setSubtrees.
        // This is handled with a deferred so that the function may be invoked
        // asynchronously.
        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem('Drupal.toolbar.subtrees.' + theme, JSON.stringify(subtrees));
          // Indicate on the toolbarModel that subtrees are now loaded.
          model.set('areSubtreesLoaded', true);
        });

        // Attach a listener to the configured media query breakpoints.
        for (var label in options.breakpoints) {
          if (options.breakpoints.hasOwnProperty(label)) {
            var mq = options.breakpoints[label];
            var mql = Drupal.toolbar.mql[label] = window.matchMedia(mq);
            // Curry the model and the label of the media query breakpoint to
            // the mediaQueryChangeHandler function.
            mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));
            // Fire the mediaQueryChangeHandler for each configured breakpoint
            // so that they process once.
            Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
          }
        }

        // Trigger an initial attempt to load menu subitems. This first attempt
        // is made after the media query handlers have had an opportunity to
        // process. The toolbar starts in the vertical orientation by default,
        // unless the viewport is wide enough to accommodate a horizontal
        // orientation. Thus we give the Toolbar a chance to determine if it
        // should be set to horizontal orientation before attempting to load
        // menu subtrees.
        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();

        $(document)
          // Update the model when the viewport offset changes.
          .on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
            model.set('offsets', offsets);
          });

        // Broadcast model changes to other modules.
        model
          .on('change:orientation', function (model, orientation) {
            $(document).trigger('drupalToolbarOrientationChange', orientation);
          })
          .on('change:activeTab', function (model, tab) {
            $(document).trigger('drupalToolbarTabChange', tab);
          })
          .on('change:activeTray', function (model, tray) {
            $(document).trigger('drupalToolbarTrayChange', tray);
          });

        // If the toolbar's orientation is horizontal and no active tab is
        // defined then show the tray of the first toolbar tab by default (but
        // not the first 'Home' toolbar tab).
        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }
      });
    }
  };

  /**
   * Toolbar methods of Backbone objects.
   *
   * @namespace
   */
  Drupal.toolbar = {

    /**
     * A hash of View instances.
     *
     * @type {object.<string, Backbone.View>}
     */
    views: {},

    /**
     * A hash of Model instances.
     *
     * @type {object.<string, Backbone.Model>}
     */
    models: {},

    /**
     * A hash of MediaQueryList objects tracked by the toolbar.
     *
     * @type {object.<string, object>}
     */
    mql: {},

    /**
     * Accepts a list of subtree menu elements.
     *
     * A deferred object that is resolved by an inlined JavaScript callback.
     *
     * @type {jQuery.Deferred}
     *
     * @see toolbar_subtrees_jsonp().
     */
    setSubtrees: new $.Deferred(),

    /**
     * Respond to configured narrow media query changes.
     *
     * @param {Drupal.toolbar.ToolbarModel} model
     *   A toolbar model
     * @param {string} label
     *   Media query label.
     * @param {object} mql
     *   A MediaQueryList object.
     */
    mediaQueryChangeHandler: function (model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });
          // If the toolbar doesn't have an explicit orientation yet, or if the
          // narrow media query doesn't match then set the orientation to
          // vertical.
          if (!mql.matches || !model.get('orientation')) {
            model.set({orientation: 'vertical'}, {validate: true});
          }
          break;

        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;

        case 'toolbar.wide':
          model.set({
            orientation: ((mql.matches) ? 'horizontal' : 'vertical')
          }, {validate: true});
          // The tray orientation toggle visibility does not need to be
          // validated.
          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;

        default:
          break;
      }
    }
  };

  /**
   * A toggle is an interactive element often bound to a click handler.
   *
   * @return {string}
   *   A string representing a DOM fragment.
   */
  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' +
      '<button class="toolbar-icon" type="button"></button>' +
      '</div></div>';
  };

  /**
   * Ajax command to set the toolbar subtrees.
   *
   * @param {Drupal.Ajax} ajax
   *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
   * @param {object} response
   *   JSON response from the Ajax request.
   * @param {number} [status]
   *   XMLHttpRequest status.
   */
  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };

}(jQuery, Drupal, drupalSettings));
;
/**
 * @file
 * A Backbone Model for collapsible menus.
 */

(function (Backbone, Drupal) {

  'use strict';

  /**
   * Backbone Model for collapsible menus.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.toolbar.MenuModel = Backbone.Model.extend(/** @lends Drupal.toolbar.MenuModel# */{

    /**
     * @type {object}
     *
     * @prop {object} subtrees
     */
    defaults: /** @lends Drupal.toolbar.MenuModel# */{

      /**
       * @type {object}
       */
      subtrees: {}
    }
  });

}(Backbone, Drupal));
;
/**
 * @file
 * A Backbone Model for the toolbar.
 */

(function (Backbone, Drupal) {

  'use strict';

  /**
   * Backbone model for the toolbar.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend(/** @lends Drupal.toolbar.ToolbarModel# */{

    /**
     * @type {object}
     *
     * @prop activeTab
     * @prop activeTray
     * @prop isOriented
     * @prop isFixed
     * @prop areSubtreesLoaded
     * @prop isViewportOverflowConstrained
     * @prop orientation
     * @prop locked
     * @prop isTrayToggleVisible
     * @prop height
     * @prop offsets
     */
    defaults: /** @lends Drupal.toolbar.ToolbarModel# */{

      /**
       * The active toolbar tab. All other tabs should be inactive under
       * normal circumstances. It will remain active across page loads. The
       * active item is stored as an ID selector e.g. '#toolbar-item--1'.
       *
       * @type {string}
       */
      activeTab: null,

      /**
       * Represents whether a tray is open or not. Stored as an ID selector e.g.
       * '#toolbar-item--1-tray'.
       *
       * @type {string}
       */
      activeTray: null,

      /**
       * Indicates whether the toolbar is displayed in an oriented fashion,
       * either horizontal or vertical.
       *
       * @type {bool}
       */
      isOriented: false,

      /**
       * Indicates whether the toolbar is positioned absolute (false) or fixed
       * (true).
       *
       * @type {bool}
       */
      isFixed: false,

      /**
       * Menu subtrees are loaded through an AJAX request only when the Toolbar
       * is set to a vertical orientation.
       *
       * @type {bool}
       */
      areSubtreesLoaded: false,

      /**
       * If the viewport overflow becomes constrained, isFixed must be true so
       * that elements in the trays aren't lost off-screen and impossible to
       * get to.
       *
       * @type {bool}
       */
      isViewportOverflowConstrained: false,

      /**
       * The orientation of the active tray.
       *
       * @type {string}
       */
      orientation: 'vertical',

      /**
       * A tray is locked if a user toggled it to vertical. Otherwise a tray
       * will switch between vertical and horizontal orientation based on the
       * configured breakpoints. The locked state will be maintained across page
       * loads.
       *
       * @type {bool}
       */
      locked: false,

      /**
       * Indicates whether the tray orientation toggle is visible.
       *
       * @type {bool}
       */
      isTrayToggleVisible: false,

      /**
       * The height of the toolbar.
       *
       * @type {number}
       */
      height: null,

      /**
       * The current viewport offsets determined by {@link Drupal.displace}. The
       * offsets suggest how a module might position is components relative to
       * the viewport.
       *
       * @type {object}
       *
       * @prop {number} top
       * @prop {number} right
       * @prop {number} bottom
       * @prop {number} left
       */
      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },

    /**
     * @inheritdoc
     *
     * @param {object} attributes
     *   Attributes for the toolbar.
     * @param {object} options
     *   Options for the toolbar.
     *
     * @return {string|undefined}
     *   Returns an error message if validation failed.
     */
    validate: function (attributes, options) {
      // Prevent the orientation being set to horizontal if it is locked, unless
      // override has not been passed as an option.
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });

}(Backbone, Drupal));
;
/**
 * @file
 * A Backbone view for the body element.
 */

(function ($, Drupal, Backbone) {

  'use strict';

  Drupal.toolbar.BodyVisualView = Backbone.View.extend(/** @lends Drupal.toolbar.BodyVisualView# */{

    /**
     * Adjusts the body element with the toolbar position and dimension changes.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function () {
      this.listenTo(this.model, 'change:orientation change:offsets change:activeTray change:isOriented change:isFixed change:isViewportOverflowConstrained', this.render);
    },

    /**
     * @inheritdoc
     */
    render: function () {
      var $body = $('body');
      var orientation = this.model.get('orientation');
      var isOriented = this.model.get('isOriented');
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');

      $body
        // We are using JavaScript to control media-query handling for two
        // reasons: (1) Using JavaScript let's us leverage the breakpoint
        // configurations and (2) the CSS is really complex if we try to hide
        // some styling from browsers that don't understand CSS media queries.
        // If we drive the CSS from classes added through JavaScript,
        // then the CSS becomes simpler and more robust.
        .toggleClass('toolbar-vertical', (orientation === 'vertical'))
        .toggleClass('toolbar-horizontal', (isOriented && orientation === 'horizontal'))
        // When the toolbar is fixed, it will not scroll with page scrolling.
        .toggleClass('toolbar-fixed', (isViewportOverflowConstrained || this.model.get('isFixed')))
        // Toggle the toolbar-tray-open class on the body element. The class is
        // applied when a toolbar tray is active. Padding might be applied to
        // the body element to prevent the tray from overlapping content.
        .toggleClass('toolbar-tray-open', !!this.model.get('activeTray'))
        // Apply padding to the top of the body to offset the placement of the
        // toolbar bar element.
        .css('padding-top', this.model.get('offsets').top);
    }
  });

}(jQuery, Drupal, Backbone));
;
/**
 * @file
 * A Backbone view for the collapsible menus.
 */

(function ($, Backbone, Drupal) {

  'use strict';

  Drupal.toolbar.MenuVisualView = Backbone.View.extend(/** @lends Drupal.toolbar.MenuVisualView# */{

    /**
     * Backbone View for collapsible menus.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function () {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },

    /**
     * @inheritdoc
     */
    render: function () {
      var subtrees = this.model.get('subtrees');
      // Add subtrees.
      for (var id in subtrees) {
        if (subtrees.hasOwnProperty(id)) {
          this.$el
            .find('#toolbar-link-' + id)
            .once('toolbar-subtrees')
            .after(subtrees[id]);
        }
      }
      // Render the main menu as a nested, collapsible accordion.
      if ('drupalToolbarMenu' in $.fn) {
        this.$el
          .children('.toolbar-menu')
          .drupalToolbarMenu();
      }
    }
  });

}(jQuery, Backbone, Drupal));
;
/**
 * @file
 * A Backbone view for the aural feedback of the toolbar.
 */

(function (Backbone, Drupal) {

  'use strict';

  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend(/** @lends Drupal.toolbar.ToolbarAuralView# */{

    /**
     * Backbone view for the aural feedback of the toolbar.
     *
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   Options for the view.
     * @param {object} options.strings
     *   Various strings to use in the view.
     */
    initialize: function (options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },

    /**
     * Announces an orientation change.
     *
     * @param {Drupal.toolbar.ToolbarModel} model
     *   The toolbar model in question.
     * @param {string} orientation
     *   The new value of the orientation attribute in the model.
     */
    onOrientationChange: function (model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },

    /**
     * Announces a changed active tray.
     *
     * @param {Drupal.toolbar.ToolbarModel} model
     *   The toolbar model in question.
     * @param {HTMLElement} tray
     *   The new value of the tray attribute in the model.
     */
    onActiveTrayChange: function (model, tray) {
      var relevantTray = (tray === null) ? model.previous('activeTray') : tray;
      var action = (tray === null) ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text;
      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent, '@action': action
        });
      }
      else {
        text = Drupal.t('Tray @action.', {'@action': action});
      }
      Drupal.announce(text);
    }
  });

}(Backbone, Drupal));
;
/**
 * @file
 * A Backbone view for the toolbar element. Listens to mouse & touch.
 */

(function ($, Drupal, drupalSettings, Backbone) {

  'use strict';

  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend(/** @lends Drupal.toolbar.ToolbarVisualView# */{

    /**
     * Event map for the `ToolbarVisualView`.
     *
     * @return {object}
     *   A map of events.
     */
    events: function () {
      // Prevents delay and simulated mouse events.
      var touchEndToClick = function (event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        'click .toolbar-bar .toolbar-tab': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },

    /**
     * Backbone view for the toolbar element. Listens to mouse & touch.
     *
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   Options for the view object.
     * @param {object} options.strings
     *   Various strings to use in the view.
     */
    initialize: function (options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);

      // Add the tray orientation toggles.
      this.$el
        .find('.toolbar-tray .toolbar-lining')
        .append(Drupal.theme('toolbarOrientationToggle'));

      // Trigger an activeTab change so that listening scripts can respond on
      // page load. This will call render.
      this.model.trigger('change:activeTab');
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.toolbar.ToolbarVisualView}
     *   The `ToolbarVisualView` instance.
     */
    render: function () {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();
      // Load the subtrees if the orientation of the toolbar is changed to
      // vertical. This condition responds to the case that the toolbar switches
      // from horizontal to vertical orientation. The toolbar starts in a
      // vertical orientation by default and then switches to horizontal during
      // initialization if the media query conditions are met. Simply checking
      // that the orientation is vertical here would result in the subtrees
      // always being loaded, even when the toolbar initialization ultimately
      // results in a horizontal orientation.
      //
      // @see Drupal.behaviors.toolbar.attach() where admin menu subtrees
      // loading is invoked during initialization after media query conditions
      // have been processed.
      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }
      // Trigger a recalculation of viewport displacing elements. Use setTimeout
      // to ensure this recalculation happens after changes to visual elements
      // have processed.
      window.setTimeout(function () {
        Drupal.displace(true);
      }, 0);
      return this;
    },

    /**
     * Responds to a toolbar tab click.
     *
     * @param {jQuery.Event} event
     *   The event triggered.
     */
    onTabClick: function (event) {
      // If this tab has a tray associated with it, it is considered an
      // activatable tab.
      if (event.target.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.target;

        // Set the event target as the active item if it is not already.
        this.model.set('activeTab', (!activeTab || clickedTab !== activeTab) ? clickedTab : null);

        event.preventDefault();
        event.stopPropagation();
      }
    },

    /**
     * Toggles the orientation of a toolbar tray.
     *
     * @param {jQuery.Event} event
     *   The event triggered.
     */
    onOrientationToggleClick: function (event) {
      var orientation = this.model.get('orientation');
      // Determine the toggle-to orientation.
      var antiOrientation = (orientation === 'vertical') ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';
      // Remember the locked state.
      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      }
      else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }
      // Update the model.
      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });

      event.preventDefault();
      event.stopPropagation();
    },

    /**
     * Updates the display of the tabs: toggles a tab and the associated tray.
     */
    updateTabs: function () {
      var $tab = $(this.model.get('activeTab'));
      // Deactivate the previous tab.
      $(this.model.previous('activeTab'))
        .removeClass('is-active')
        .prop('aria-pressed', false);
      // Deactivate the previous tray.
      $(this.model.previous('activeTray'))
        .removeClass('is-active');

      // Activate the selected tab.
      if ($tab.length > 0) {
        $tab
          .addClass('is-active')
          // Mark the tab as pressed.
          .prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');
        // Store the active tab name or remove the setting.
        var id = $tab.get(0).id;
        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }
        // Activate the associated tray.
        var $tray = this.$el.find('[data-toolbar-tray="' + name + '"].toolbar-tray');
        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        }
        else {
          // There is no active tray.
          this.model.set('activeTray', null);
        }
      }
      else {
        // There is no active tray.
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },

    /**
     * Update the attributes of the toolbar bar element.
     */
    updateBarAttributes: function () {
      var isOriented = this.model.get('isOriented');
      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      }
      else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }
      // Toggle between a basic vertical view and a more sophisticated
      // horizontal and vertical display of the toolbar bar and trays.
      this.$el.toggleClass('toolbar-oriented', isOriented);
    },

    /**
     * Updates the orientation of the active tray if necessary.
     */
    updateTrayOrientation: function () {
      var orientation = this.model.get('orientation');
      // The antiOrientation is used to render the view of action buttons like
      // the tray orientation toggle.
      var antiOrientation = (orientation === 'vertical') ? 'horizontal' : 'vertical';
      // Update the orientation of the trays.
      var $trays = this.$el.find('.toolbar-tray')
        .removeClass('toolbar-tray-horizontal toolbar-tray-vertical')
        .addClass('toolbar-tray-' + orientation);

      // Update the tray orientation toggle button.
      var iconClass = 'toolbar-icon-toggle-' + orientation;
      var iconAntiClass = 'toolbar-icon-toggle-' + antiOrientation;
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation')
        .toggle(this.model.get('isTrayToggleVisible'));
      $orientationToggle.find('button')
        .val(antiOrientation)
        .attr('title', this.strings[antiOrientation])
        .text(this.strings[antiOrientation])
        .removeClass(iconClass)
        .addClass(iconAntiClass);

      // Update data offset attributes for the trays.
      var dir = document.documentElement.dir;
      var edge = (dir === 'rtl') ? 'right' : 'left';
      // Remove data-offset attributes from the trays so they can be refreshed.
      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');
      // If an active vertical tray exists, mark it as an offset element.
      $trays.filter('.toolbar-tray-vertical.is-active').attr('data-offset-' + edge, '');
      // If an active horizontal tray exists, mark it as an offset element.
      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },

    /**
     * Sets the tops of the trays so that they align with the bottom of the bar.
     */
    adjustPlacement: function () {
      var $trays = this.$el.find('.toolbar-tray');
      if (!this.model.get('isOriented')) {
        $trays.css('margin-top', 0);
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
      else {
        // The toolbar container is invisible. Its placement is used to
        // determine the container for the trays.
        $trays.css('margin-top', this.$el.find('.toolbar-bar').outerHeight());
      }
    },

    /**
     * Calls the endpoint URI that builds an AJAX command with the rendered
     * subtrees.
     *
     * The rendered admin menu subtrees HTML is cached on the client in
     * localStorage until the cache of the admin menu subtrees on the server-
     * side is invalidated. The subtreesHash is stored in localStorage as well
     * and compared to the subtreesHash in drupalSettings to determine when the
     * admin menu subtrees cache has been invalidated.
     */
    loadSubtrees: function () {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');
      // Only load and render the admin menu subtrees if:
      //   (1) They have not been loaded yet.
      //   (2) The active tab is the administration menu tab, indicated by the
      //       presence of the data-drupal-subtrees attribute.
      //   (3) The orientation of the tray is vertical.
      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url('toolbar/subtrees/' + subtreesHash);
        var cachedSubtreesHash = localStorage.getItem('Drupal.toolbar.subtreesHash.' + theme);
        var cachedSubtrees = JSON.parse(localStorage.getItem('Drupal.toolbar.subtrees.' + theme));
        var isVertical = this.model.get('orientation') === 'vertical';
        // If we have the subtrees in localStorage and the subtree hash has not
        // changed, then use the cached data.
        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        }
        // Only make the call to get the subtrees if the orientation of the
        // toolbar is vertical.
        else if (isVertical) {
          // Remove the cached menu information.
          localStorage.removeItem('Drupal.toolbar.subtreesHash.' + theme);
          localStorage.removeItem('Drupal.toolbar.subtrees.' + theme);
          // The AJAX response's command will trigger the resolve method of the
          // Drupal.toolbar.setSubtrees Promise.
          Drupal.ajax({url: endpoint}).execute();
          // Cache the hash for the subtrees locally.
          localStorage.setItem('Drupal.toolbar.subtreesHash.' + theme, subtreesHash);
        }
      }
    }
  });

}(jQuery, Drupal, drupalSettings, Backbone));
;
/* jQuery Foundation Joyride Plugin 2.1 | Copyright 2012, ZURB | www.opensource.org/licenses/mit-license.php */
(function(e,t,n){"use strict";var r={version:"2.0.3",tipLocation:"bottom",nubPosition:"auto",scroll:!0,scrollSpeed:300,timer:0,autoStart:!1,startTimerOnClick:!0,startOffset:0,nextButton:!0,tipAnimation:"fade",pauseAfter:[],tipAnimationFadeSpeed:300,cookieMonster:!1,cookieName:"joyride",cookieDomain:!1,cookiePath:!1,localStorage:!1,localStorageKey:"joyride",tipContainer:"body",modal:!1,expose:!1,postExposeCallback:e.noop,preRideCallback:e.noop,postRideCallback:e.noop,preStepCallback:e.noop,postStepCallback:e.noop,template:{link:'<a href="#close" class="joyride-close-tip">X</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper" role="dialog"></div>',button:'<a href="#" class="joyride-next-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',exposeCover:'<div class="joyride-expose-cover"></div>'}},i=i||!1,s={},o={init:function(n){return this.each(function(){e.isEmptyObject(s)?(s=e.extend(!0,r,n),s.document=t.document,s.$document=e(s.document),s.$window=e(t),s.$content_el=e(this),s.$body=e(s.tipContainer),s.body_offset=e(s.tipContainer).position(),s.$tip_content=e("> li",s.$content_el),s.paused=!1,s.attempts=0,s.tipLocationPatterns={top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},o.jquery_check(),e.isFunction(e.cookie)||(s.cookieMonster=!1),(!s.cookieMonster||!e.cookie(s.cookieName))&&(!s.localStorage||!o.support_localstorage()||!localStorage.getItem(s.localStorageKey))&&(s.$tip_content.each(function(t){o.create({$li:e(this),index:t})}),s.autoStart&&(!s.startTimerOnClick&&s.timer>0?(o.show("init"),o.startTimer()):o.show("init"))),s.$document.on("click.joyride",".joyride-next-tip, .joyride-modal-bg",function(e){e.preventDefault(),s.$li.next().length<1?o.end():s.timer>0?(clearTimeout(s.automate),o.hide(),o.show(),o.startTimer()):(o.hide(),o.show())}),s.$document.on("click.joyride",".joyride-close-tip",function(e){e.preventDefault(),o.end()}),s.$window.bind("resize.joyride",function(t){if(s.$li){if(s.exposed&&s.exposed.length>0){var n=e(s.exposed);n.each(function(){var t=e(this);o.un_expose(t),o.expose(t)})}o.is_phone()?o.pos_phone():o.pos_default()}})):o.restart()})},resume:function(){o.set_li(),o.show()},nextTip:function(){s.$li.next().length<1?o.end():s.timer>0?(clearTimeout(s.automate),o.hide(),o.show(),o.startTimer()):(o.hide(),o.show())},tip_template:function(t){var n,r,i;return t.tip_class=t.tip_class||"",n=e(s.template.tip).addClass(t.tip_class),r=e.trim(e(t.li).html())+o.button_text(t.button_text)+s.template.link+o.timer_instance(t.index),i=e(s.template.wrapper),t.li.attr("data-aria-labelledby")&&i.attr("aria-labelledby",t.li.attr("data-aria-labelledby")),t.li.attr("data-aria-describedby")&&i.attr("aria-describedby",t.li.attr("data-aria-describedby")),n.append(i),n.first().attr("data-index",t.index),e(".joyride-content-wrapper",n).append(r),n[0]},timer_instance:function(t){var n;return t===0&&s.startTimerOnClick&&s.timer>0||s.timer===0?n="":n=o.outerHTML(e(s.template.timer)[0]),n},button_text:function(t){return s.nextButton?(t=e.trim(t)||"Next",t=o.outerHTML(e(s.template.button).append(t)[0])):t="",t},create:function(t){var n=t.$li.attr("data-button")||t.$li.attr("data-text"),r=t.$li.attr("class"),i=e(o.tip_template({tip_class:r,index:t.index,button_text:n,li:t.$li}));e(s.tipContainer).append(i)},show:function(t){var r={},i,u=[],a=0,f,l=null;if(s.$li===n||e.inArray(s.$li.index(),s.pauseAfter)===-1){s.paused?s.paused=!1:o.set_li(t),s.attempts=0;if(s.$li.length&&s.$target.length>0){t&&(s.preRideCallback(s.$li.index(),s.$next_tip),s.modal&&o.show_modal()),s.preStepCallback(s.$li.index(),s.$next_tip),u=(s.$li.data("options")||":").split(";"),a=u.length;for(i=a-1;i>=0;i--)f=u[i].split(":"),f.length===2&&(r[e.trim(f[0])]=e.trim(f[1]));s.tipSettings=e.extend({},s,r),s.tipSettings.tipLocationPattern=s.tipLocationPatterns[s.tipSettings.tipLocation],s.modal&&s.expose&&o.expose(),!/body/i.test(s.$target.selector)&&s.scroll&&o.scroll_to(),o.is_phone()?o.pos_phone(!0):o.pos_default(!0),l=e(".joyride-timer-indicator",s.$next_tip),/pop/i.test(s.tipAnimation)?(l.outerWidth(0),s.timer>0?(s.$next_tip.show(),l.animate({width:e(".joyride-timer-indicator-wrap",s.$next_tip).outerWidth()},s.timer)):s.$next_tip.show()):/fade/i.test(s.tipAnimation)&&(l.outerWidth(0),s.timer>0?(s.$next_tip.fadeIn(s.tipAnimationFadeSpeed),s.$next_tip.show(),l.animate({width:e(".joyride-timer-indicator-wrap",s.$next_tip).outerWidth()},s.timer)):s.$next_tip.fadeIn(s.tipAnimationFadeSpeed)),s.$current_tip=s.$next_tip,e(".joyride-next-tip",s.$current_tip).focus(),o.tabbable(s.$current_tip)}else s.$li&&s.$target.length<1?o.show():o.end()}else s.paused=!0},is_phone:function(){return i?i.mq("only screen and (max-width: 767px)"):s.$window.width()<767?!0:!1},support_localstorage:function(){return i?i.localstorage:!!t.localStorage},hide:function(){s.modal&&s.expose&&o.un_expose(),s.modal||e(".joyride-modal-bg").hide(),s.$current_tip.hide(),s.postStepCallback(s.$li.index(),s.$current_tip)},set_li:function(e){e?(s.$li=s.$tip_content.eq(s.startOffset),o.set_next_tip(),s.$current_tip=s.$next_tip):(s.$li=s.$li.next(),o.set_next_tip()),o.set_target()},set_next_tip:function(){s.$next_tip=e(".joyride-tip-guide[data-index="+s.$li.index()+"]")},set_target:function(){var t=s.$li.attr("data-class"),n=s.$li.attr("data-id"),r=function(){return n?e(s.document.getElementById(n)):t?e("."+t).filter(":visible").first():e("body")};s.$target=r()},scroll_to:function(){var t,n;t=s.$window.height()/2,n=Math.ceil(s.$target.offset().top-t+s.$next_tip.outerHeight()),e("html, body").stop().animate({scrollTop:n},s.scrollSpeed)},paused:function(){return e.inArray(s.$li.index()+1,s.pauseAfter)===-1?!0:!1},destroy:function(){e.isEmptyObject(s)||s.$document.off(".joyride"),e(t).off(".joyride"),e(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),e(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(s.automate),s={}},restart:function(){s.autoStart?(o.hide(),s.$li=n,o.show("init")):(!s.startTimerOnClick&&s.timer>0?(o.show("init"),o.startTimer()):o.show("init"),s.autoStart=!0)},pos_default:function(t){var n=Math.ceil(s.$window.height()/2),r=s.$next_tip.offset(),i=e(".joyride-nub",s.$next_tip),u=Math.ceil(i.outerWidth()/2),a=Math.ceil(i.outerHeight()/2),f=t||!1;f&&(s.$next_tip.css("visibility","hidden"),s.$next_tip.show());if(!/body/i.test(s.$target.selector)){var l=s.tipSettings.tipAdjustmentY?parseInt(s.tipSettings.tipAdjustmentY):0,c=s.tipSettings.tipAdjustmentX?parseInt(s.tipSettings.tipAdjustmentX):0;o.bottom()?(s.$next_tip.css({top:s.$target.offset().top+a+s.$target.outerHeight()+l,left:s.$target.offset().left+c}),/right/i.test(s.tipSettings.nubPosition)&&s.$next_tip.css("left",s.$target.offset().left-s.$next_tip.outerWidth()+s.$target.outerWidth()),o.nub_position(i,s.tipSettings.nubPosition,"top")):o.top()?(s.$next_tip.css({top:s.$target.offset().top-s.$next_tip.outerHeight()-a+l,left:s.$target.offset().left+c}),o.nub_position(i,s.tipSettings.nubPosition,"bottom")):o.right()?(s.$next_tip.css({top:s.$target.offset().top+l,left:s.$target.outerWidth()+s.$target.offset().left+u+c}),o.nub_position(i,s.tipSettings.nubPosition,"left")):o.left()&&(s.$next_tip.css({top:s.$target.offset().top+l,left:s.$target.offset().left-s.$next_tip.outerWidth()-u+c}),o.nub_position(i,s.tipSettings.nubPosition,"right")),!o.visible(o.corners(s.$next_tip))&&s.attempts<s.tipSettings.tipLocationPattern.length&&(i.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),s.tipSettings.tipLocation=s.tipSettings.tipLocationPattern[s.attempts],s.attempts++,o.pos_default(!0))}else s.$li.length&&o.pos_modal(i);f&&(s.$next_tip.hide(),s.$next_tip.css("visibility","visible"))},pos_phone:function(t){var n=s.$next_tip.outerHeight(),r=s.$next_tip.offset(),i=s.$target.outerHeight(),u=e(".joyride-nub",s.$next_tip),a=Math.ceil(u.outerHeight()/2),f=t||!1;u.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),f&&(s.$next_tip.css("visibility","hidden"),s.$next_tip.show()),/body/i.test(s.$target.selector)?s.$li.length&&o.pos_modal(u):o.top()?(s.$next_tip.offset({top:s.$target.offset().top-n-a}),u.addClass("bottom")):(s.$next_tip.offset({top:s.$target.offset().top+i+a}),u.addClass("top")),f&&(s.$next_tip.hide(),s.$next_tip.css("visibility","visible"))},pos_modal:function(e){o.center(),e.hide(),o.show_modal()},show_modal:function(){e(".joyride-modal-bg").length<1&&e("body").append(s.template.modal).show(),/pop/i.test(s.tipAnimation)?e(".joyride-modal-bg").show():e(".joyride-modal-bg").fadeIn(s.tipAnimationFadeSpeed)},expose:function(){var n,r,i,u,a="expose-"+Math.floor(Math.random()*1e4);if(arguments.length>0&&arguments[0]instanceof e)i=arguments[0];else{if(!s.$target||!!/body/i.test(s.$target.selector))return!1;i=s.$target}if(i.length<1)return t.console&&console.error("element not valid",i),!1;n=e(s.template.expose),s.$body.append(n),n.css({top:i.offset().top,left:i.offset().left,width:i.outerWidth(!0),height:i.outerHeight(!0)}),r=e(s.template.exposeCover),u={zIndex:i.css("z-index"),position:i.css("position")},i.css("z-index",n.css("z-index")*1+1),u.position=="static"&&i.css("position","relative"),i.data("expose-css",u),r.css({top:i.offset().top,left:i.offset().left,width:i.outerWidth(!0),height:i.outerHeight(!0)}),s.$body.append(r),n.addClass(a),r.addClass(a),s.tipSettings.exposeClass&&(n.addClass(s.tipSettings.exposeClass),r.addClass(s.tipSettings.exposeClass)),i.data("expose",a),s.postExposeCallback(s.$li.index(),s.$next_tip,i),o.add_exposed(i)},un_expose:function(){var n,r,i,u,a=!1;if(arguments.length>0&&arguments[0]instanceof e)r=arguments[0];else{if(!s.$target||!!/body/i.test(s.$target.selector))return!1;r=s.$target}if(r.length<1)return t.console&&console.error("element not valid",r),!1;n=r.data("expose"),i=e("."+n),arguments.length>1&&(a=arguments[1]),a===!0?e(".joyride-expose-wrapper,.joyride-expose-cover").remove():i.remove(),u=r.data("expose-css"),u.zIndex=="auto"?r.css("z-index",""):r.css("z-index",u.zIndex),u.position!=r.css("position")&&(u.position=="static"?r.css("position",""):r.css("position",u.position)),r.removeData("expose"),r.removeData("expose-z-index"),o.remove_exposed(r)},add_exposed:function(t){s.exposed=s.exposed||[],t instanceof e?s.exposed.push(t[0]):typeof t=="string"&&s.exposed.push(t)},remove_exposed:function(t){var n;t instanceof e?n=t[0]:typeof t=="string"&&(n=t),s.exposed=s.exposed||[];for(var r=0;r<s.exposed.length;r++)if(s.exposed[r]==n){s.exposed.splice(r,1);return}},center:function(){var e=s.$window;return s.$next_tip.css({top:(e.height()-s.$next_tip.outerHeight())/2+e.scrollTop(),left:(e.width()-s.$next_tip.outerWidth())/2+e.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(s.tipSettings.tipLocation)},top:function(){return/top/i.test(s.tipSettings.tipLocation)},right:function(){return/right/i.test(s.tipSettings.tipLocation)},left:function(){return/left/i.test(s.tipSettings.tipLocation)},corners:function(e){var t=s.$window,n=t.height()/2,r=Math.ceil(s.$target.offset().top-n+s.$next_tip.outerHeight()),i=t.width()+t.scrollLeft(),o=t.height()+r,u=t.height()+t.scrollTop(),a=t.scrollTop();return r<a&&(r<0?a=0:a=r),o>u&&(u=o),[e.offset().top<a,i<e.offset().left+e.outerWidth(),u<e.offset().top+e.outerHeight(),t.scrollLeft()>e.offset().left]},visible:function(e){var t=e.length;while(t--)if(e[t])return!1;return!0},nub_position:function(e,t,n){t==="auto"?e.addClass(n):e.addClass(t)},startTimer:function(){s.$li.length?s.automate=setTimeout(function(){o.hide(),o.show(),o.startTimer()},s.timer):clearTimeout(s.automate)},end:function(){s.cookieMonster&&e.cookie(s.cookieName,"ridden",{expires:365,domain:s.cookieDomain,path:s.cookiePath}),s.localStorage&&localStorage.setItem(s.localStorageKey,!0),s.timer>0&&clearTimeout(s.automate),s.modal&&s.expose&&o.un_expose(),s.$current_tip&&s.$current_tip.hide(),s.$li&&(s.postStepCallback(s.$li.index(),s.$current_tip),s.postRideCallback(s.$li.index(),s.$current_tip)),e(".joyride-modal-bg").hide()},jquery_check:function(){return e.isFunction(e.fn.on)?!0:(e.fn.on=function(e,t,n){return this.delegate(t,e,n)},e.fn.off=function(e,t,n){return this.undelegate(t,e,n)},!1)},outerHTML:function(e){return e.outerHTML||(new XMLSerializer).serializeToString(e)},version:function(){return s.version},tabbable:function(t){e(t).on("keydown",function(n){if(!n.isDefaultPrevented()&&n.keyCode&&n.keyCode===27){n.preventDefault(),o.end();return}if(n.keyCode!==9)return;var r=e(t).find(":tabbable"),i=r.filter(":first"),s=r.filter(":last");n.target===s[0]&&!n.shiftKey?(i.focus(1),n.preventDefault()):n.target===i[0]&&n.shiftKey&&(s.focus(1),n.preventDefault())})}};e.fn.joyride=function(t){if(o[t])return o[t].apply(this,Array.prototype.slice.call(arguments,1));if(typeof t=="object"||!t)return o.init.apply(this,arguments);e.error("Method "+t+" does not exist on jQuery.joyride")}})(jQuery,this);
;
/**
 * @file
 * Attaches behaviors for the Tour module's toolbar tab.
 */

(function ($, Backbone, Drupal, document) {

  'use strict';

  var queryString = decodeURI(window.location.search);

  /**
   * Attaches the tour's toolbar tab behavior.
   *
   * It uses the query string for:
   * - tour: When ?tour=1 is present, the tour will start automatically after
   *   the page has loaded.
   * - tips: Pass ?tips=class in the url to filter the available tips to the
   *   subset which match the given class.
   *
   * @example
   * http://example.com/foo?tour=1&tips=bar
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attach tour functionality on `tour` events.
   */
  Drupal.behaviors.tour = {
    attach: function (context) {
      $('body').once('tour').each(function () {
        var model = new Drupal.tour.models.StateModel();
        new Drupal.tour.views.ToggleTourView({
          el: $(context).find('#toolbar-tab-tour'),
          model: model
        });

        model
          // Allow other scripts to respond to tour events.
          .on('change:isActive', function (model, isActive) {
            $(document).trigger((isActive) ? 'drupalTourStarted' : 'drupalTourStopped');
          })
          // Initialization: check whether a tour is available on the current
          // page.
          .set('tour', $(context).find('ol#tour'));

        // Start the tour immediately if toggled via query string.
        if (/tour=?/i.test(queryString)) {
          model.set('isActive', true);
        }
      });
    }
  };

  /**
   * @namespace
   */
  Drupal.tour = Drupal.tour || {

    /**
     * @namespace Drupal.tour.models
     */
    models: {},

    /**
     * @namespace Drupal.tour.views
     */
    views: {}
  };

  /**
   * Backbone Model for tours.
   *
   * @constructor
   *
   * @augments Backbone.Model
   */
  Drupal.tour.models.StateModel = Backbone.Model.extend(/** @lends Drupal.tour.models.StateModel# */{

    /**
     * @type {object}
     */
    defaults: /** @lends Drupal.tour.models.StateModel# */{

      /**
       * Indicates whether the Drupal root window has a tour.
       *
       * @type {Array}
       */
      tour: [],

      /**
       * Indicates whether the tour is currently running.
       *
       * @type {bool}
       */
      isActive: false,

      /**
       * Indicates which tour is the active one (necessary to cleanly stop).
       *
       * @type {Array}
       */
      activeTour: []
    }
  });

  Drupal.tour.views.ToggleTourView = Backbone.View.extend(/** @lends Drupal.tour.views.ToggleTourView# */{

    /**
     * @type {object}
     */
    events: {click: 'onClick'},

    /**
     * Handles edit mode toggle interactions.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function () {
      this.listenTo(this.model, 'change:tour change:isActive', this.render);
      this.listenTo(this.model, 'change:isActive', this.toggleTour);
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.tour.views.ToggleTourView}
     *   The `ToggleTourView` view.
     */
    render: function () {
      // Render the visibility.
      this.$el.toggleClass('hidden', this._getTour().length === 0);
      // Render the state.
      var isActive = this.model.get('isActive');
      this.$el.find('button')
        .toggleClass('is-active', isActive)
        .prop('aria-pressed', isActive);
      return this;
    },

    /**
     * Model change handler; starts or stops the tour.
     */
    toggleTour: function () {
      if (this.model.get('isActive')) {
        var $tour = this._getTour();
        this._removeIrrelevantTourItems($tour, this._getDocument());
        var that = this;
        if ($tour.find('li').length) {
          $tour.joyride({
            autoStart: true,
            postRideCallback: function () { that.model.set('isActive', false); },
            // HTML segments for tip layout.
            template: {
              link: '<a href=\"#close\" class=\"joyride-close-tip\">&times;</a>',
              button: '<a href=\"#\" class=\"button button--primary joyride-next-tip\"></a>'
            }
          });
          this.model.set({isActive: true, activeTour: $tour});
        }
      }
      else {
        this.model.get('activeTour').joyride('destroy');
        this.model.set({isActive: false, activeTour: []});
      }
    },

    /**
     * Toolbar tab click event handler; toggles isActive.
     *
     * @param {jQuery.Event} event
     *   The click event.
     */
    onClick: function (event) {
      this.model.set('isActive', !this.model.get('isActive'));
      event.preventDefault();
      event.stopPropagation();
    },

    /**
     * Gets the tour.
     *
     * @return {jQuery}
     *   A jQuery element pointing to a `<ol>` containing tour items.
     */
    _getTour: function () {
      return this.model.get('tour');
    },

    /**
     * Gets the relevant document as a jQuery element.
     *
     * @return {jQuery}
     *   A jQuery element pointing to the document within which a tour would be
     *   started given the current state.
     */
    _getDocument: function () {
      return $(document);
    },

    /**
     * Removes tour items for elements that don't have matching page elements.
     *
     * Or that are explicitly filtered out via the 'tips' query string.
     *
     * @example
     * <caption>This will filter out tips that do not have a matching
     * page element or don't have the "bar" class.</caption>
     * http://example.com/foo?tips=bar
     *
     * @param {jQuery} $tour
     *   A jQuery element pointing to a `<ol>` containing tour items.
     * @param {jQuery} $document
     *   A jQuery element pointing to the document within which the elements
     *   should be sought.
     *
     * @see Drupal.tour.views.ToggleTourView#_getDocument
     */
    _removeIrrelevantTourItems: function ($tour, $document) {
      var removals = false;
      var tips = /tips=([^&]+)/.exec(queryString);
      $tour
        .find('li')
        .each(function () {
          var $this = $(this);
          var itemId = $this.attr('data-id');
          var itemClass = $this.attr('data-class');
          // If the query parameter 'tips' is set, remove all tips that don't
          // have the matching class.
          if (tips && !$(this).hasClass(tips[1])) {
            removals = true;
            $this.remove();
            return;
          }
          // Remove tip from the DOM if there is no corresponding page element.
          if ((!itemId && !itemClass) ||
            (itemId && $document.find('#' + itemId).length) ||
            (itemClass && $document.find('.' + itemClass).length)) {
            return;
          }
          removals = true;
          $this.remove();
        });

      // If there were removals, we'll have to do some clean-up.
      if (removals) {
        var total = $tour.find('li').length;
        if (!total) {
          this.model.set({tour: []});
        }

        $tour
          .find('li')
          // Rebuild the progress data.
          .each(function (index) {
            var progress = Drupal.t('!tour_item of !total', {'!tour_item': index + 1, '!total': total});
            $(this).find('.tour-progress').text(progress);
          })
          // Update the last item to have "End tour" as the button.
          .eq(-1)
          .attr('data-text', Drupal.t('End tour'));
      }
    }

  });

})(jQuery, Backbone, Drupal, document);
;
/**
 * @file
 * Manages page tabbing modifications made by modules.
 */

/**
 * Allow modules to respond to the constrain event.
 *
 * @event drupalTabbingConstrained
 */

/**
 * Allow modules to respond to the tabbingContext release event.
 *
 * @event drupalTabbingContextReleased
 */

/**
 * Allow modules to respond to the constrain event.
 *
 * @event drupalTabbingContextActivated
 */

/**
 * Allow modules to respond to the constrain event.
 *
 * @event drupalTabbingContextDeactivated
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Provides an API for managing page tabbing order modifications.
   *
   * @constructor Drupal~TabbingManager
   */
  function TabbingManager() {

    /**
     * Tabbing sets are stored as a stack. The active set is at the top of the
     * stack. We use a JavaScript array as if it were a stack; we consider the
     * first element to be the bottom and the last element to be the top. This
     * allows us to use JavaScript's built-in Array.push() and Array.pop()
     * methods.
     *
     * @type {Array.<Drupal~TabbingContext>}
     */
    this.stack = [];
  }

  /**
   * Add public methods to the TabbingManager class.
   */
  $.extend(TabbingManager.prototype, /** @lends Drupal~TabbingManager# */{

    /**
     * Constrain tabbing to the specified set of elements only.
     *
     * Makes elements outside of the specified set of elements unreachable via
     * the tab key.
     *
     * @param {jQuery} elements
     *   The set of elements to which tabbing should be constrained. Can also
     *   be a jQuery-compatible selector string.
     *
     * @return {Drupal~TabbingContext}
     *   The TabbingContext instance.
     *
     * @fires event:drupalTabbingConstrained
     */
    constrain: function (elements) {
      // Deactivate all tabbingContexts to prepare for the new constraint. A
      // tabbingContext instance will only be reactivated if the stack is
      // unwound to it in the _unwindStack() method.
      var il = this.stack.length;
      for (var i = 0; i < il; i++) {
        this.stack[i].deactivate();
      }

      // The "active tabbing set" are the elements tabbing should be constrained
      // to.
      var $elements = $(elements).find(':tabbable').addBack(':tabbable');

      var tabbingContext = new TabbingContext({
        // The level is the current height of the stack before this new
        // tabbingContext is pushed on top of the stack.
        level: this.stack.length,
        $tabbableElements: $elements
      });

      this.stack.push(tabbingContext);

      // Activates the tabbingContext; this will manipulate the DOM to constrain
      // tabbing.
      tabbingContext.activate();

      // Allow modules to respond to the constrain event.
      $(document).trigger('drupalTabbingConstrained', tabbingContext);

      return tabbingContext;
    },

    /**
     * Restores a former tabbingContext when an active one is released.
     *
     * The TabbingManager stack of tabbingContext instances will be unwound
     * from the top-most released tabbingContext down to the first non-released
     * tabbingContext instance. This non-released instance is then activated.
     */
    release: function () {
      // Unwind as far as possible: find the topmost non-released
      // tabbingContext.
      var toActivate = this.stack.length - 1;
      while (toActivate >= 0 && this.stack[toActivate].released) {
        toActivate--;
      }

      // Delete all tabbingContexts after the to be activated one. They have
      // already been deactivated, so their effect on the DOM has been reversed.
      this.stack.splice(toActivate + 1);

      // Get topmost tabbingContext, if one exists, and activate it.
      if (toActivate >= 0) {
        this.stack[toActivate].activate();
      }
    },

    /**
     * Makes all elements outside of the tabbingContext's set untabbable.
     *
     * Elements made untabbable have their original tabindex and autofocus
     * values stored so that they might be restored later when this
     * tabbingContext is deactivated.
     *
     * @param {Drupal~TabbingContext} tabbingContext
     *   The TabbingContext instance that has been activated.
     */
    activate: function (tabbingContext) {
      var $set = tabbingContext.$tabbableElements;
      var level = tabbingContext.level;
      // Determine which elements are reachable via tabbing by default.
      var $disabledSet = $(':tabbable')
        // Exclude elements of the active tabbing set.
        .not($set);
      // Set the disabled set on the tabbingContext.
      tabbingContext.$disabledElements = $disabledSet;
      // Record the tabindex for each element, so we can restore it later.
      var il = $disabledSet.length;
      for (var i = 0; i < il; i++) {
        this.recordTabindex($disabledSet.eq(i), level);
      }
      // Make all tabbable elements outside of the active tabbing set
      // unreachable.
      $disabledSet
        .prop('tabindex', -1)
        .prop('autofocus', false);

      // Set focus on an element in the tabbingContext's set of tabbable
      // elements. First, check if there is an element with an autofocus
      // attribute. Select the last one from the DOM order.
      var $hasFocus = $set.filter('[autofocus]').eq(-1);
      // If no element in the tabbable set has an autofocus attribute, select
      // the first element in the set.
      if ($hasFocus.length === 0) {
        $hasFocus = $set.eq(0);
      }
      $hasFocus.trigger('focus');
    },

    /**
     * Restores that tabbable state of a tabbingContext's disabled elements.
     *
     * Elements that were made untabbable have their original tabindex and
     * autofocus values restored.
     *
     * @param {Drupal~TabbingContext} tabbingContext
     *   The TabbingContext instance that has been deactivated.
     */
    deactivate: function (tabbingContext) {
      var $set = tabbingContext.$disabledElements;
      var level = tabbingContext.level;
      var il = $set.length;
      for (var i = 0; i < il; i++) {
        this.restoreTabindex($set.eq(i), level);
      }
    },

    /**
     * Records the tabindex and autofocus values of an untabbable element.
     *
     * @param {jQuery} $el
     *   The set of elements that have been disabled.
     * @param {number} level
     *   The stack level for which the tabindex attribute should be recorded.
     */
    recordTabindex: function ($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices') || {};
      tabInfo[level] = {
        tabindex: $el[0].getAttribute('tabindex'),
        autofocus: $el[0].hasAttribute('autofocus')
      };
      $el.data('drupalOriginalTabIndices', tabInfo);
    },

    /**
     * Restores the tabindex and autofocus values of a reactivated element.
     *
     * @param {jQuery} $el
     *   The element that is being reactivated.
     * @param {number} level
     *   The stack level for which the tabindex attribute should be restored.
     */
    restoreTabindex: function ($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices');
      if (tabInfo && tabInfo[level]) {
        var data = tabInfo[level];
        if (data.tabindex) {
          $el[0].setAttribute('tabindex', data.tabindex);
        }
        // If the element did not have a tabindex at this stack level then
        // remove it.
        else {
          $el[0].removeAttribute('tabindex');
        }
        if (data.autofocus) {
          $el[0].setAttribute('autofocus', 'autofocus');
        }

        // Clean up $.data.
        if (level === 0) {
          // Remove all data.
          $el.removeData('drupalOriginalTabIndices');
        }
        else {
          // Remove the data for this stack level and higher.
          var levelToDelete = level;
          while (tabInfo.hasOwnProperty(levelToDelete)) {
            delete tabInfo[levelToDelete];
            levelToDelete++;
          }
          $el.data('drupalOriginalTabIndices', tabInfo);
        }
      }
    }
  });

  /**
   * Stores a set of tabbable elements.
   *
   * This constraint can be removed with the release() method.
   *
   * @constructor Drupal~TabbingContext
   *
   * @param {object} options
   *   A set of initiating values
   * @param {number} options.level
   *   The level in the TabbingManager's stack of this tabbingContext.
   * @param {jQuery} options.$tabbableElements
   *   The DOM elements that should be reachable via the tab key when this
   *   tabbingContext is active.
   * @param {jQuery} options.$disabledElements
   *   The DOM elements that should not be reachable via the tab key when this
   *   tabbingContext is active.
   * @param {bool} options.released
   *   A released tabbingContext can never be activated again. It will be
   *   cleaned up when the TabbingManager unwinds its stack.
   * @param {bool} options.active
   *   When true, the tabbable elements of this tabbingContext will be reachable
   *   via the tab key and the disabled elements will not. Only one
   *   tabbingContext can be active at a time.
   */
  function TabbingContext(options) {

    $.extend(this, /** @lends Drupal~TabbingContext# */{

      /**
       * @type {?number}
       */
      level: null,

      /**
       * @type {jQuery}
       */
      $tabbableElements: $(),

      /**
       * @type {jQuery}
       */
      $disabledElements: $(),

      /**
       * @type {bool}
       */
      released: false,

      /**
       * @type {bool}
       */
      active: false
    }, options);
  }

  /**
   * Add public methods to the TabbingContext class.
   */
  $.extend(TabbingContext.prototype, /** @lends Drupal~TabbingContext# */{

    /**
     * Releases this TabbingContext.
     *
     * Once a TabbingContext object is released, it can never be activated
     * again.
     *
     * @fires event:drupalTabbingContextReleased
     */
    release: function () {
      if (!this.released) {
        this.deactivate();
        this.released = true;
        Drupal.tabbingManager.release(this);
        // Allow modules to respond to the tabbingContext release event.
        $(document).trigger('drupalTabbingContextReleased', this);
      }
    },

    /**
     * Activates this TabbingContext.
     *
     * @fires event:drupalTabbingContextActivated
     */
    activate: function () {
      // A released TabbingContext object can never be activated again.
      if (!this.active && !this.released) {
        this.active = true;
        Drupal.tabbingManager.activate(this);
        // Allow modules to respond to the constrain event.
        $(document).trigger('drupalTabbingContextActivated', this);
      }
    },

    /**
     * Deactivates this TabbingContext.
     *
     * @fires event:drupalTabbingContextDeactivated
     */
    deactivate: function () {
      if (this.active) {
        this.active = false;
        Drupal.tabbingManager.deactivate(this);
        // Allow modules to respond to the constrain event.
        $(document).trigger('drupalTabbingContextDeactivated', this);
      }
    }
  });

  // Mark this behavior as processed on the first pass and return if it is
  // already processed.
  if (Drupal.tabbingManager) {
    return;
  }

  /**
   * @type {Drupal~TabbingManager}
   */
  Drupal.tabbingManager = new TabbingManager();

}(jQuery, Drupal));
;
/**
 * @file
 * Attaches behaviors for the Contextual module's edit toolbar tab.
 */

(function ($, Drupal, Backbone) {

  'use strict';

  var strings = {
    tabbingReleased: Drupal.t('Tabbing is no longer constrained by the Contextual module.'),
    tabbingConstrained: Drupal.t('Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.'),
    pressEsc: Drupal.t('Press the esc key to exit.')
  };

  /**
   * Initializes a contextual link: updates its DOM, sets up model and views.
   *
   * @param {HTMLElement} context
   *   A contextual links DOM element as rendered by the server.
   */
  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }

    var contextualToolbar = Drupal.contextualToolbar;
    var model = contextualToolbar.model = new contextualToolbar.StateModel({
      // Checks whether localStorage indicates we should start in edit mode
      // rather than view mode.
      // @see Drupal.contextualToolbar.VisualView.persist
      isViewing: localStorage.getItem('Drupal.contextualToolbar.isViewing') !== 'false'
    }, {
      contextualCollection: Drupal.contextual.collection
    });

    var viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: model,
      strings: strings
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }

  /**
   * Attaches contextual's edit toolbar tab behavior.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches contextual toolbar behavior on a contextualToolbar-init event.
   */
  Drupal.behaviors.contextualToolbar = {
    attach: function (context) {
      if ($('body').once('contextualToolbar-init').length) {
        initContextualToolbar(context);
      }
    }
  };

  /**
   * Namespace for the contextual toolbar.
   *
   * @namespace
   */
  Drupal.contextualToolbar = {

    /**
     * The {@link Drupal.contextualToolbar.StateModel} instance.
     *
     * @type {?Drupal.contextualToolbar.StateModel}
     */
    model: null
  };

})(jQuery, Drupal, Backbone);
;
/**
 * @file
 * A Backbone Model for the state of Contextual module's edit toolbar tab.
 */

(function (Drupal, Backbone) {

  'use strict';

  Drupal.contextualToolbar.StateModel = Backbone.Model.extend(/** @lends Drupal.contextualToolbar.StateModel# */{

    /**
     * @type {object}
     *
     * @prop {bool} isViewing
     * @prop {bool} isVisible
     * @prop {number} contextualCount
     * @prop {Drupal~TabbingContext} tabbingContext
     */
    defaults: /** @lends Drupal.contextualToolbar.StateModel# */{

      /**
       * Indicates whether the toggle is currently in "view" or "edit" mode.
       *
       * @type {bool}
       */
      isViewing: true,

      /**
       * Indicates whether the toggle should be visible or hidden. Automatically
       * calculated, depends on contextualCount.
       *
       * @type {bool}
       */
      isVisible: false,

      /**
       * Tracks how many contextual links exist on the page.
       *
       * @type {number}
       */
      contextualCount: 0,

      /**
       * A TabbingContext object as returned by {@link Drupal~TabbingManager}:
       * the set of tabbable elements when edit mode is enabled.
       *
       * @type {?Drupal~TabbingContext}
       */
      tabbingContext: null
    },

    /**
     * Models the state of the edit mode toggle.
     *
     * @constructs
     *
     * @augments Backbone.Model
     *
     * @param {object} attrs
     *   Attributes for the backbone model.
     * @param {object} options
     *   An object with the following option:
     * @param {Backbone.collection} options.contextualCollection
     *   The collection of {@link Drupal.contextual.StateModel} models that
     *   represent the contextual links on the page.
     */
    initialize: function (attrs, options) {
      // Respond to new/removed contextual links.
      this.listenTo(options.contextualCollection, 'reset remove add', this.countContextualLinks);
      this.listenTo(options.contextualCollection, 'add', this.lockNewContextualLinks);

      // Automatically determine visibility.
      this.listenTo(this, 'change:contextualCount', this.updateVisibility);

      // Whenever edit mode is toggled, lock all contextual links.
      this.listenTo(this, 'change:isViewing', function (model, isViewing) {
        options.contextualCollection.each(function (contextualModel) {
          contextualModel.set('isLocked', !isViewing);
        });
      });
    },

    /**
     * Tracks the number of contextual link models in the collection.
     *
     * @param {Drupal.contextual.StateModel} contextualModel
     *   The contextual links model that was added or removed.
     * @param {Backbone.Collection} contextualCollection
     *    The collection of contextual link models.
     */
    countContextualLinks: function (contextualModel, contextualCollection) {
      this.set('contextualCount', contextualCollection.length);
    },

    /**
     * Lock newly added contextual links if edit mode is enabled.
     *
     * @param {Drupal.contextual.StateModel} contextualModel
     *   The contextual links model that was added.
     * @param {Backbone.Collection} [contextualCollection]
     *    The collection of contextual link models.
     */
    lockNewContextualLinks: function (contextualModel, contextualCollection) {
      if (!this.get('isViewing')) {
        contextualModel.set('isLocked', true);
      }
    },

    /**
     * Automatically updates visibility of the view/edit mode toggle.
     */
    updateVisibility: function () {
      this.set('isVisible', this.get('contextualCount') > 0);
    }

  });

})(Drupal, Backbone);
;
/**
 * @file
 * A Backbone View that provides the aural view of the edit mode toggle.
 */

(function ($, Drupal, Backbone, _) {

  'use strict';

  Drupal.contextualToolbar.AuralView = Backbone.View.extend(/** @lends Drupal.contextualToolbar.AuralView# */{

    /**
     * Tracks whether the tabbing constraint announcement has been read once.
     *
     * @type {bool}
     */
    announcedOnce: false,

    /**
     * Renders the aural view of the edit mode toggle (screen reader support).
     *
     * @constructs
     *
     * @augments Backbone.View
     *
     * @param {object} options
     *   Options for the view.
     */
    initialize: function (options) {
      this.options = options;

      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.manageTabbing);

      $(document).on('keyup', _.bind(this.onKeypress, this));
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.contextualToolbar.AuralView}
     *   The current contextual toolbar aural view.
     */
    render: function () {
      // Render the state.
      this.$el.find('button').attr('aria-pressed', !this.model.get('isViewing'));

      return this;
    },

    /**
     * Limits tabbing to the contextual links and edit mode toolbar tab.
     */
    manageTabbing: function () {
      var tabbingContext = this.model.get('tabbingContext');
      // Always release an existing tabbing context.
      if (tabbingContext) {
        tabbingContext.release();
        Drupal.announce(this.options.strings.tabbingReleased);
      }
      // Create a new tabbing context when edit mode is enabled.
      if (!this.model.get('isViewing')) {
        tabbingContext = Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));
        this.model.set('tabbingContext', tabbingContext);
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
    },

    /**
     * Announces the current tabbing constraint.
     */
    announceTabbingConstraint: function () {
      var strings = this.options.strings;
      Drupal.announce(Drupal.formatString(strings.tabbingConstrained, {
        '@contextualsCount': Drupal.formatPlural(Drupal.contextual.collection.length, '@count contextual link', '@count contextual links')
      }));
      Drupal.announce(strings.pressEsc);
    },

    /**
     * Responds to esc and tab key press events.
     *
     * @param {jQuery.Event} event
     *   The keypress event.
     */
    onKeypress: function (event) {
      // The first tab key press is tracked so that an annoucement about tabbing
      // constraints can be raised if edit mode is enabled when the page is
      // loaded.
      if (!this.announcedOnce && event.keyCode === 9 && !this.model.get('isViewing')) {
        this.announceTabbingConstraint();
        // Set announce to true so that this conditional block won't run again.
        this.announcedOnce = true;
      }
      // Respond to the ESC key. Exit out of edit mode.
      if (event.keyCode === 27) {
        this.model.set('isViewing', true);
      }
    }

  });

})(jQuery, Drupal, Backbone, _);
;
/**
 * @file
 * A Backbone View that provides the visual view of the edit mode toggle.
 */

(function (Drupal, Backbone) {

  'use strict';

  Drupal.contextualToolbar.VisualView = Backbone.View.extend(/** @lends Drupal.contextualToolbar.VisualView# */{

    /**
     * Events for the Backbone view.
     *
     * @return {object}
     *   A mapping of events to be used in the view.
     */
    events: function () {
      // Prevents delay and simulated mouse events.
      var touchEndToClick = function (event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        click: function () {
          this.model.set('isViewing', !this.model.get('isViewing'));
        },
        touchend: touchEndToClick
      };
    },

    /**
     * Renders the visual view of the edit mode toggle.
     *
     * Listens to mouse & touch and handles edit mode toggle interactions.
     *
     * @constructs
     *
     * @augments Backbone.View
     */
    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.persist);
    },

    /**
     * @inheritdoc
     *
     * @return {Drupal.contextualToolbar.VisualView}
     *   The current contextual toolbar visual view.
     */
    render: function () {
      // Render the visibility.
      this.$el.toggleClass('hidden', !this.model.get('isVisible'));
      // Render the state.
      this.$el.find('button').toggleClass('is-active', !this.model.get('isViewing'));

      return this;
    },

    /**
     * Model change handler; persists the isViewing value to localStorage.
     *
     * `isViewing === true` is the default, so only stores in localStorage when
     * it's not the default value (i.e. false).
     *
     * @param {Drupal.contextualToolbar.StateModel} model
     *   A {@link Drupal.contextualToolbar.StateModel} model.
     * @param {bool} isViewing
     *   The value of the isViewing attribute in the model.
     */
    persist: function (model, isViewing) {
      if (!isViewing) {
        localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
      }
      else {
        localStorage.removeItem('Drupal.contextualToolbar.isViewing');
      }
    }

  });

})(Drupal, Backbone);
;
/**
 * @file
 * Replaces the home link in toolbar with a back to site link.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  var pathInfo = drupalSettings.path;
  var escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  var windowLocation = window.location;

  // Saves the last non-administrative page in the browser to be able to link
  // back to it when browsing administrative pages. If there is a destination
  // parameter there is not need to save the current path because the page is
  // loaded within an existing "workflow".
  if (!pathInfo.currentPathIsAdmin && !/destination=/.test(windowLocation.search)) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }

  /**
   * Replaces the "Home" link with "Back to site" link.
   *
   * Back to site link points to the last non-administrative page the user
   * visited within the same browser tab.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the replacement functionality to the toolbar-escape-admin element.
   */
  Drupal.behaviors.escapeAdmin = {
    attach: function () {
      var $toolbarEscape = $('[data-toolbar-escape-admin]').once('escapeAdmin');
      if ($toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        if (escapeAdminPath !== null) {
          $toolbarEscape.attr('href', escapeAdminPath);
        }
        else {
          $toolbarEscape.text(Drupal.t('Home'));
        }
        $toolbarEscape.closest('.toolbar-tab').removeClass('hidden');
      }
    }
  };

})(jQuery, Drupal, drupalSettings);
;
