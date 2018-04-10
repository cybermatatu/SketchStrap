var that=this;function __skpm_run(e,t){that.context=t;var r=function(r){var n={};function a(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}return a.m=r,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t){function r(e){return 16*e.replace(/rem/g,"")}function o(e){var t;if(e=e.replace(/ /g,""),/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return 3==(t=e.substring(1).split("")).length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),[(t="0x"+t.join(""))>>16&255,t>>8&255,255&t].join(",")}Object.defineProperty(t,"__esModule",{value:!0}),t.manageUnits=function(e){var t=/([0-9.]+)(rem|px)?/g.exec(e);if(2==t.length)return e;return"rem"==t[2]?r(e):t[1]},t.remToPx=r,t.colorFromString=function(e){var t=MSImmutableColor.colorWithSVGString_(e);return MSColor.alloc().initWithImmutableObject_(t)},t.parseColor=function(e,t){var r=/(theme-color)\(\"(.*)\"\)/g,n=r.exec(e);{if(n){var a=n[2];return e.replace(r,o(t[a]))}return e}},t.hexToRgb=o},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.populate)(e)};var n=r(2)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.getControlPanel=i,t.updateControlPanel=function(t,o,a){i(t,function(e){t.api();var r=0,n=0;e.iterate(function(e){e.iterate(function(e){var t=e.name.substr(1);if(o&&o[t]){r++;var a=o[t].replace(/^ +/g,"");if(/^(#|rgba|transparent|white|black)(.*)/g.test(a))e.iterate(function(e){e.isShape&&(e.style.fills=[a.replace(/ +/g,"")])});else if(/^(\.|[0-9])+(rem)?/g.test(a)){/^(\.|[0-9])+(rem)?/g.exec(a);e.iterate(function(e){if(e.isShape){var t=manageUnits(a);e.sketchObject.layers().forEach(function(e){e.setCornerRadiusFromComponents([t,t,t,t].join(";"))})}})}else/(inset)/g.test(a)?e.iterate(function(e){if(e.isShape)for(var t=a.split("), "),r=0;r<t.length;r++){var n=/(inset )?(.+) (.+) (.+) (rgba|#)(.*)/g.exec(t[r]);n.splice(0,1),(0,s.setShadows)(n,o,e)}}):/(shadow)/g.test(t)?e.iterate(function(e){if(e.isShape){var t=/(.+) (.+) (.+) (rgba|#)(.*)/g.exec(a);(0,s.setShadows)(t,o,e)}}):n++}})}),log(r-n+" styles applied to control panel."),log(n+" unable to parse."),a()})},t.layerIterator=a,t.recurrentIteration=o,t.selectionIterator=c,t.processElement=l,t.getControlPanelElems=u,t.populate=function(r,n){i(r,function(e){var t=u(e);"selection"==n?c(r,function(e){l(r,e,t)}):a(r,function(e){l(r,e,t)})})},t.getColorFromAttributes=d,t.getCSS=function(e){for(var t="",r=Object.keys(e),n=0;n<r.length;n++){var a=r[n],o=e[a].sketchObject.CSSAttributeString().replace("/* color: */","");t+="$"+a+"{"+o+"}"}return t};var s=r(3),g=r(0);function i(e,t){for(var r=e.api().selectedDocument,n=0;n<r.pages.length;n++)"control-panel"==r.pages[n].sketchObject.name()&&t(r.pages[n])}function a(e,t){for(var r=e.api().selectedDocument.pages,n=0;n<r.length;n++){if("control-panel"!=r[n].name&&"Symbols"!=r[n].name)r[n].iterate(function(e){e.iterate(function(e){o(e,t)})})}}function o(e,t){e.isGroup?e.iterate(function(e){o(e,t)}):(e.isShape||e.isText)&&t(e.sketchObject)}function c(e,t){for(var r=e.selection,n=0;n<r.length;n++){var a=r[n];if("MSLayerGroup"==a.className())for(var o=0;o<a.children().length;o++){var s=a.children()[o];"MSShapeGroup"!=s.className()&&"MSTextLayer"!=s.className()||t(s)}else"MSShapeGroup"!=a.className()&&"MSTextLayer"!=a.className()||t(a)}}function l(e,t,r){var n,a=e.api();if(null!=(n=/_(.*)\((.*)\)/g.exec(t.name()))&&!(n.length<3)){n.splice(0,2);var o=n[0].match(/[A-z-0-9]+: *\$[A-z-]+;/g);if(null!=o)for(var s=0;s<o.length;s++){var i,c=o[s],l=/(.*): *\$(.*);/g.exec(c),u=l[2];switch(l[1]){case"fill":i=d(r[u].style.sketchObject.stylePartsOfType(0)),new a.Style(t.style()).fills=[i];break;case"fill-bright":i=d(r[u].style.sketchObject.stylePartsOfType(0)),new a.Style(t.style()).fills=[i,"rgba(255,255,255,.9)"];break;case"border-color":i=d(r[u].style.sketchObject.stylePartsOfType(0)),new a.Style(t.style()).borders=[i];break;case"border-color-bright":i=d(r[u].style.sketchObject.stylePartsOfType(0)),new a.Style(t.style()).borders=[i,"rgba(255,255,255,.8)"];break;case"border-radius":var f=r[u].sketchObject.layers()[0].cornerRadiusString();t.layers().forEach(function(e){void 0!==e.setCornerRadiusFromSimpleString&&e.setCornerRadiusFromSimpleString(f)});break;case"box-shadow":var h=r[u].style.sketchObject.shadows();t.style().shadows=[];for(var p=0;p<h.length;p++)t.style().shadows().addObject(h[p]);t.style().innerShadows=[];var b=r[u].style.sketchObject.innerShadows();for(p=0;p<b.length;p++)t.style().innerShadows().addObject(h[p]);break;case"color":i=d(r[u].style.sketchObject.stylePartsOfType(0)),t.textColor=(0,g.colorFromString)(i)}}}}function u(e){var r={};return e.iterate(function(e){e.iterate(function(e){e.isGroup&&e.iterate(function(e){if(e.isShape){var t=e.container.name.substr(1);r[t]=e}})})}),r}function d(e){return e.objectAtIndex(0).CSSAttributeString().replace(/background| |:|;/g,"")}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.createShadow=i,t.setShadows=function(e,t,r){if(null==e)return;if(2<e.length){var n=(0,s.parseColor)(e[4]+e[5],t),a="inset "==e[0],o=i((0,s.manageUnits)(e[1]),(0,s.manageUnits)(e[2]),(0,s.manageUnits)(e[3]),n,a);a?(r.style.sketchObject.innerShadows=[],r.style.sketchObject.innerShadows().addObject(o)):(r.style.sketchObject.shadows=[],r.style.sketchObject.shadows().addObject(o))}};var s=r(0);function i(e,t,r,n,a){var o;return(o=a?MSStyleInnerShadow.alloc().init():MSStyleShadow.alloc().init()).color=(0,s.colorFromString)(n),o.offsetY=t,o.blurRadius=r,o.offsetX=e,o.isEnabled=1,o}}]);"default"===e&&"function"==typeof r?r(t):r[e](t)}that.onRun=__skpm_run.bind(this,"default");