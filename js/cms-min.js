(function(b){function i(a){b.fn.cycle.debug&&h(a)}function h(){window.console&&window.console.log&&window.console.log("[cycle] "+Array.prototype.join.call(arguments," "))}function a(a,c,e){function g(a,s,c){if(!a&&!0===s){a=b(c).data("cycle.opts");if(!a)return h("options not found, can not resume"),!1;c.cycleTimeout&&(clearTimeout(c.cycleTimeout),c.cycleTimeout=0);o(a.elements,a,1,!a.backwards)}}void 0==a.cycleStop&&(a.cycleStop=0);if(void 0===c||null===c)c={};if(c.constructor==String)switch(c){case "destroy":case "stop":e=
b(a).data("cycle.opts");if(!e)return!1;a.cycleStop++;a.cycleTimeout&&clearTimeout(a.cycleTimeout);a.cycleTimeout=0;b(a).removeData("cycle.opts");"destroy"==c&&m(e);return!1;case "toggle":return a.cyclePause=1===a.cyclePause?0:1,g(a.cyclePause,e,a),!1;case "pause":return a.cyclePause=1,!1;case "resume":return a.cyclePause=0,g(!1,e,a),!1;case "prev":case "next":e=b(a).data("cycle.opts");if(!e)return h('options not found, "prev/next" ignored'),!1;b.fn.cycle[c](e);return!1;default:c={fx:c}}else if(c.constructor==
Number){var f=c,c=b(a).data("cycle.opts");if(!c)return h("options not found, can not advance slide"),!1;if(0>f||f>=c.elements.length)return h("invalid slide index: "+f),!1;c.nextSlide=f;a.cycleTimeout&&(clearTimeout(a.cycleTimeout),a.cycleTimeout=0);"string"==typeof e&&(c.oneTimeFx=e);o(c.elements,c,1,f>=c.currSlide);return!1}return c}function n(a,c){if(!b.support.opacity&&c.cleartype&&a.style.filter)try{a.style.removeAttribute("filter")}catch(e){}}function m(a){a.next&&b(a.next).unbind(a.prevNextEvent);
a.prev&&b(a.prev).unbind(a.prevNextEvent);if(a.pager||a.pagerAnchorBuilder)b.each(a.pagerAnchors||[],function(){this.unbind().remove()});a.pagerAnchors=null;a.destroy&&a.destroy(a)}function q(a,c,e,g,f){var d=b.extend({},b.fn.cycle.defaults,g||{},b.metadata?a.metadata():b.meta?a.data():{});d.autostop&&(d.countdown=d.autostopCount||e.length);var j=a[0];a.data("cycle.opts",d);d.$cont=a;d.stopCount=j.cycleStop;d.elements=e;d.before=d.before?[d.before]:[];d.after=d.after?[d.after]:[];d.after.unshift(function(){d.busy=
0});!b.support.opacity&&d.cleartype&&d.after.push(function(){n(this,d)});d.continuous&&d.after.push(function(){o(e,d,0,!d.backwards)});u(d);!b.support.opacity&&d.cleartype&&!d.cleartypeNoBg&&w(c);"static"==a.css("position")&&a.css("position","relative");d.width&&a.width(d.width);d.height&&"auto"!=d.height&&a.height(d.height);d.startingSlide?d.startingSlide=parseInt(d.startingSlide):d.backwards&&(d.startingSlide=e.length-1);if(d.random){d.randomMap=[];for(j=0;j<e.length;j++)d.randomMap.push(j);d.randomMap.sort(function(){return Math.random()-
0.5});d.randomIndex=1;d.startingSlide=d.randomMap[1]}else d.startingSlide>=e.length&&(d.startingSlide=0);d.currSlide=d.startingSlide||0;var k=d.startingSlide;c.css({position:"absolute",top:0,left:0}).hide().each(function(a){a=d.backwards?k?a<=k?e.length+(a-k):k-a:e.length-a:k?a>=k?e.length-(a-k):k-a:e.length-a;b(this).css("z-index",a)});b(e[k]).css("opacity",1).show();n(e[k],d);d.fit&&d.width&&c.width(d.width);d.fit&&d.height&&"auto"!=d.height&&c.height(d.height);if(d.containerResize&&!a.innerHeight()){for(var i=
j=0,m=0;m<e.length;m++){var q=b(e[m]),r=q[0],x=q.outerWidth(),y=q.outerHeight();x||(x=r.offsetWidth||r.width||q.attr("width"));y||(y=r.offsetHeight||r.height||q.attr("height"));j=x>j?x:j;i=y>i?y:i}0<j&&0<i&&a.css({width:j+"px",height:i+"px"})}d.pause&&a.hover(function(){this.cyclePause++},function(){this.cyclePause--});if(!1===t(d))return!1;var A=!1;g.requeueAttempts=g.requeueAttempts||0;c.each(function(){var a=b(this);this.cycleH=d.fit&&d.height?d.height:a.height()||this.offsetHeight||this.height||
a.attr("height")||0;this.cycleW=d.fit&&d.width?d.width:a.width()||this.offsetWidth||this.width||a.attr("width")||0;if(a.is("img")){var a=b.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete,c=b.browser.opera&&(this.cycleW==42&&this.cycleH==19||this.cycleW==37&&this.cycleH==17)&&!this.complete,s=this.cycleH==0&&this.cycleW==0&&!this.complete;if(b.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete||a||c||s){if(f.s&&d.requeueOnImageNotLoaded&&++g.requeueAttempts<100){h(g.requeueAttempts,
" - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){b(f.s,f.c).cycle(g)},d.requeueTimeout);A=true;return false}h("could not determine size of image: "+this.src,this.cycleW,this.cycleH)}}return true});if(A)return!1;d.cssBefore=d.cssBefore||{};d.animIn=d.animIn||{};d.animOut=d.animOut||{};c.not(":eq("+k+")").css(d.cssBefore);d.cssFirst&&b(c[k]).css(d.cssFirst);if(d.timeout){d.timeout=parseInt(d.timeout);d.speed.constructor==String&&(d.speed=b.fx.speeds[d.speed]||
parseInt(d.speed));d.sync||(d.speed/=2);for(j="shuffle"==d.fx?500:250;d.timeout-d.speed<j;)d.timeout+=d.speed}d.easing&&(d.easeIn=d.easeOut=d.easing);d.speedIn||(d.speedIn=d.speed);d.speedOut||(d.speedOut=d.speed);d.slideCount=e.length;d.currSlide=d.lastSlide=k;d.random?(++d.randomIndex==e.length&&(d.randomIndex=0),d.nextSlide=d.randomMap[d.randomIndex]):d.nextSlide=d.backwards?0==d.startingSlide?e.length-1:d.startingSlide-1:d.startingSlide>=e.length-1?0:d.startingSlide+1;if(!d.multiFx)if(j=b.fn.cycle.transitions[d.fx],
b.isFunction(j))j(a,c,d);else if("custom"!=d.fx&&!d.multiFx)return h("unknown transition: "+d.fx,"; slideshow terminating"),!1;a=c[k];d.before.length&&d.before[0].apply(a,[a,a,d,!0]);1<d.after.length&&d.after[1].apply(a,[a,a,d,!0]);d.next&&b(d.next).bind(d.prevNextEvent,function(){return l(d,1)});d.prev&&b(d.prev).bind(d.prevNextEvent,function(){return l(d,0)});(d.pager||d.pagerAnchorBuilder)&&z(e,d);v(d,e);return d}function u(a){a.original={before:[],after:[]};a.original.cssBefore=b.extend({},a.cssBefore);
a.original.cssAfter=b.extend({},a.cssAfter);a.original.animIn=b.extend({},a.animIn);a.original.animOut=b.extend({},a.animOut);b.each(a.before,function(){a.original.before.push(this)});b.each(a.after,function(){a.original.after.push(this)})}function t(a){var c,e,g=b.fn.cycle.transitions;if(0<a.fx.indexOf(",")){a.multiFx=!0;a.fxs=a.fx.replace(/\s*/g,"").split(",");for(c=0;c<a.fxs.length;c++){var f=a.fxs[c];e=g[f];if(!e||!g.hasOwnProperty(f)||!b.isFunction(e))h("discarding unknown transition: ",f),a.fxs.splice(c,
1),c--}if(!a.fxs.length)return h("No valid transitions named; slideshow terminating."),!1}else if("all"==a.fx)for(p in a.multiFx=!0,a.fxs=[],g)e=g[p],g.hasOwnProperty(p)&&b.isFunction(e)&&a.fxs.push(p);if(a.multiFx&&a.randomizeEffects){e=Math.floor(20*Math.random())+30;for(c=0;c<e;c++)g=Math.floor(Math.random()*a.fxs.length),a.fxs.push(a.fxs.splice(g,1)[0]);i("randomized fx sequence: ",a.fxs)}return!0}function v(a,c){a.addSlide=function(e,g){var f=b(e),d=f[0];a.autostopCount||a.countdown++;c[g?"unshift":
"push"](d);if(a.els)a.els[g?"unshift":"push"](d);a.slideCount=c.length;f.css("position","absolute");f[g?"prependTo":"appendTo"](a.$cont);g&&(a.currSlide++,a.nextSlide++);!b.support.opacity&&a.cleartype&&!a.cleartypeNoBg&&w(f);a.fit&&a.width&&f.width(a.width);a.fit&&a.height&&"auto"!=a.height&&f.height(a.height);d.cycleH=a.fit&&a.height?a.height:f.height();d.cycleW=a.fit&&a.width?a.width:f.width();f.css(a.cssBefore);(a.pager||a.pagerAnchorBuilder)&&b.fn.cycle.createPagerAnchor(c.length-1,d,b(a.pager),
c,a);if(b.isFunction(a.onAddSlide))a.onAddSlide(f);else f.hide()}}function o(a,c,e,g){e&&c.busy&&c.manualTrump&&(i("manualTrump in go(), stopping active transition"),b(a).stop(!0,!0),c.busy=!1);if(c.busy)i("transition active, ignoring new tx request");else{var f=c.$cont[0],d=a[c.currSlide],j=a[c.nextSlide];if(!(f.cycleStop!=c.stopCount||0===f.cycleTimeout&&!e))if(!e&&!f.cyclePause&&!c.bounce&&(c.autostop&&0>=--c.countdown||c.nowrap&&!c.random&&c.nextSlide<c.currSlide))c.end&&c.end(c);else{var k=!1;
if((e||!f.cyclePause)&&c.nextSlide!=c.currSlide){var k=!0,h=c.fx;d.cycleH=d.cycleH||b(d).height();d.cycleW=d.cycleW||b(d).width();j.cycleH=j.cycleH||b(j).height();j.cycleW=j.cycleW||b(j).width();if(c.multiFx){if(void 0==c.lastFx||++c.lastFx>=c.fxs.length)c.lastFx=0;h=c.fxs[c.lastFx];c.currFx=h}c.oneTimeFx&&(h=c.oneTimeFx,c.oneTimeFx=null);b.fn.cycle.resetState(c,h);c.before.length&&b.each(c.before,function(a,b){f.cycleStop==c.stopCount&&b.apply(j,[d,j,c,g])});h=function(){b.each(c.after,function(a,
b){f.cycleStop==c.stopCount&&b.apply(j,[d,j,c,g])})};i("tx firing; currSlide: "+c.currSlide+"; nextSlide: "+c.nextSlide);c.busy=1;if(c.fxFn)c.fxFn(d,j,c,h,g,e&&c.fastOnEvent);else if(b.isFunction(b.fn.cycle[c.fx]))b.fn.cycle[c.fx](d,j,c,h,g,e&&c.fastOnEvent);else b.fn.cycle.custom(d,j,c,h,g,e&&c.fastOnEvent)}if(k||c.nextSlide==c.currSlide)if(c.lastSlide=c.currSlide,c.random){if(c.currSlide=c.nextSlide,++c.randomIndex==a.length&&(c.randomIndex=0),c.nextSlide=c.randomMap[c.randomIndex],c.nextSlide==
c.currSlide)c.nextSlide=c.currSlide==c.slideCount-1?0:c.currSlide+1}else c.backwards?(e=0>c.nextSlide-1)&&c.bounce?(c.backwards=!c.backwards,c.nextSlide=1,c.currSlide=0):(c.nextSlide=e?a.length-1:c.nextSlide-1,c.currSlide=e?0:c.nextSlide+1):(e=c.nextSlide+1==a.length)&&c.bounce?(c.backwards=!c.backwards,c.nextSlide=a.length-2,c.currSlide=a.length-1):(c.nextSlide=e?0:c.nextSlide+1,c.currSlide=e?a.length-1:c.nextSlide-1);k&&c.pager&&c.updateActivePagerLink(c.pager,c.currSlide,c.activePagerClass);k=
0;c.timeout&&!c.continuous?k=r(a[c.currSlide],a[c.nextSlide],c,g):c.continuous&&f.cyclePause&&(k=10);0<k&&(f.cycleTimeout=setTimeout(function(){o(a,c,0,!c.backwards)},k))}}}function r(a,c,b,g){if(b.timeoutFn){for(a=b.timeoutFn.call(a,a,c,b,g);250>a-b.speed;)a+=b.speed;i("calculated timeout: "+a+"; speed: "+b.speed);if(!1!==a)return a}return b.timeout}function l(a,c){var e=c?1:-1,g=a.elements,f=a.$cont[0],d=f.cycleTimeout;d&&(clearTimeout(d),f.cycleTimeout=0);if(a.random&&0>e)a.randomIndex--,-2==--a.randomIndex?
a.randomIndex=g.length-2:-1==a.randomIndex&&(a.randomIndex=g.length-1),a.nextSlide=a.randomMap[a.randomIndex];else if(a.random)a.nextSlide=a.randomMap[a.randomIndex];else if(a.nextSlide=a.currSlide+e,0>a.nextSlide){if(a.nowrap)return!1;a.nextSlide=g.length-1}else if(a.nextSlide>=g.length){if(a.nowrap)return!1;a.nextSlide=0}f=a.onPrevNextEvent||a.prevNextClick;b.isFunction(f)&&f(0<e,a.nextSlide,g[a.nextSlide]);o(g,a,1,c);return!1}function z(a,c){var e=b(c.pager);b.each(a,function(g,f){b.fn.cycle.createPagerAnchor(g,
f,e,a,c)});c.updateActivePagerLink(c.pager,c.startingSlide,c.activePagerClass)}function w(a){function c(a){a=parseInt(a).toString(16);return 2>a.length?"0"+a:a}function e(a){for(;a&&"html"!=a.nodeName.toLowerCase();a=a.parentNode){var e=b.css(a,"background-color");if(0<=e.indexOf("rgb"))return a=e.match(/\d+/g),"#"+c(a[0])+c(a[1])+c(a[2]);if(e&&"transparent"!=e)return e}return"#ffffff"}i("applying clearType background-color hack");a.each(function(){b(this).css("background-color",e(this))})}void 0==
b.support&&(b.support={opacity:!b.browser.msie});b.fn.cycle=function(s,c){var e={s:this.selector,c:this.context};if(this.length===0&&s!="stop"){if(!b.isReady&&e.s){h("DOM not ready, queuing slideshow");b(function(){b(e.s,e.c).cycle(s,c)});return this}h("terminating; zero elements found by selector"+(b.isReady?"":" (DOM not ready)"));return this}return this.each(function(){var g=a(this,s,c);if(g!==false){g.updateActivePagerLink=g.updateActivePagerLink||b.fn.cycle.updateActivePagerLink;this.cycleTimeout&&
clearTimeout(this.cycleTimeout);this.cycleTimeout=this.cyclePause=0;var f=b(this),d=g.slideExpr?b(g.slideExpr,this):f.children(),j=d.get();if(j.length<2)h("terminating; too few slides: "+j.length);else{var k=q(f,d,j,g,e);if(k!==false)if(f=k.continuous?10:r(j[k.currSlide],j[k.nextSlide],k,!k.backwards)){f=f+(k.delay||0);f<10&&(f=10);i("first timeout: "+f);this.cycleTimeout=setTimeout(function(){o(j,k,0,!g.backwards)},f)}}}})};b.fn.cycle.resetState=function(a,c){c=c||a.fx;a.before=[];a.after=[];a.cssBefore=
b.extend({},a.original.cssBefore);a.cssAfter=b.extend({},a.original.cssAfter);a.animIn=b.extend({},a.original.animIn);a.animOut=b.extend({},a.original.animOut);a.fxFn=null;b.each(a.original.before,function(){a.before.push(this)});b.each(a.original.after,function(){a.after.push(this)});var e=b.fn.cycle.transitions[c];b.isFunction(e)&&e(a.$cont,b(a.elements),a)};b.fn.cycle.updateActivePagerLink=function(a,c,e){b(a).each(function(){b(this).children().removeClass(e).eq(c).addClass(e)})};b.fn.cycle.next=
function(a){l(a,1)};b.fn.cycle.prev=function(a){l(a,0)};b.fn.cycle.createPagerAnchor=function(a,c,e,g,f){if(b.isFunction(f.pagerAnchorBuilder)){c=f.pagerAnchorBuilder(a,c);i("pagerAnchorBuilder("+a+", el) returned: "+c)}else c='<a href="#">'+(a+1)+"</a>";if(c){var d=b(c);if(d.parents("body").length===0){var h=[];if(e.length>1){e.each(function(){var a=d.clone(true);b(this).append(a);h.push(a[0])});d=b(h)}else d.appendTo(e)}f.pagerAnchors=f.pagerAnchors||[];f.pagerAnchors.push(d);d.bind(f.pagerEvent,
function(c){c.preventDefault();f.nextSlide=a;var c=f.$cont[0],d=c.cycleTimeout;if(d){clearTimeout(d);c.cycleTimeout=0}c=f.onPagerEvent||f.pagerClick;b.isFunction(c)&&c(f.nextSlide,g[f.nextSlide]);o(g,f,1,f.currSlide<a)});!/^click/.test(f.pagerEvent)&&!f.allowPagerClickBubble&&d.bind("click.cycle",function(){return false});f.pauseOnPagerHover&&d.hover(function(){f.$cont[0].cyclePause++},function(){f.$cont[0].cyclePause--})}};b.fn.cycle.hopsFromLast=function(a,c){var b=a.lastSlide,g=a.currSlide;return c?
g>b?g-b:a.slideCount-b:g<b?b-g:b+a.slideCount-g};b.fn.cycle.commonReset=function(a,c,e,g,f,d){b(e.elements).not(a).hide();e.cssBefore.opacity=1;e.cssBefore.display="block";if(e.slideResize&&g!==false&&c.cycleW>0)e.cssBefore.width=c.cycleW;if(e.slideResize&&f!==false&&c.cycleH>0)e.cssBefore.height=c.cycleH;e.cssAfter=e.cssAfter||{};e.cssAfter.display="none";b(a).css("zIndex",e.slideCount+(d===true?1:0));b(c).css("zIndex",e.slideCount+(d===true?0:1))};b.fn.cycle.custom=function(a,c,e,g,f,d){var h=b(a),
i=b(c),n=e.speedIn,a=e.speedOut,l=e.easeIn,c=e.easeOut;i.css(e.cssBefore);if(d){n=typeof d=="number"?a=d:a=1;l=c=null}h.animate(e.animOut,a,c,function(){e.cssAfter&&h.css(e.cssAfter);e.sync||i.animate(e.animIn,n,l,g)});e.sync&&i.animate(e.animIn,n,l,g)};b.fn.cycle.transitions={fade:function(a,c,e){c.not(":eq("+e.currSlide+")").css("opacity",0);e.before.push(function(a,c,d){b.fn.cycle.commonReset(a,c,d);d.cssBefore.opacity=0});e.animIn={opacity:1};e.animOut={opacity:0};e.cssBefore={top:0,left:0}}};
b.fn.cycle.ver=function(){return"2.94"};b.fn.cycle.defaults={fx:"fade",timeout:4E3,timeoutFn:null,continuous:0,speed:1E3,speedIn:null,speedOut:null,next:null,prev:null,onPrevNextEvent:null,prevNextEvent:"click.cycle",pager:null,onPagerEvent:null,pagerEvent:"click.cycle",allowPagerClickBubble:!1,pagerAnchorBuilder:null,before:null,after:null,end:null,easing:null,easeIn:null,easeOut:null,shuffle:null,animIn:null,animOut:null,cssBefore:null,cssAfter:null,fxFn:null,height:"auto",startingSlide:0,sync:1,
random:0,fit:0,containerResize:1,slideResize:1,pause:0,pauseOnPagerHover:0,autostop:0,autostopCount:0,delay:0,slideExpr:null,cleartype:!b.support.opacity,cleartypeNoBg:!1,nowrap:0,fastOnEvent:0,randomizeEffects:1,rev:0,manualTrump:!0,requeueOnImageNotLoaded:!0,requeueTimeout:250,activePagerClass:"activeSlide",updateActivePagerLink:null,backwards:!1}})(jQuery);
(function(b){b.flexslider=function(i,h){var a=b(i);b.data(i,"flexslider",a);a.init=function(){a.vars=b.extend({},b.flexslider.defaults,h);b.data(i,"flexsliderInit",!0);a.container=b(".slides",a).first();a.slides=b(".slides:first > li",a);a.count=a.slides.length;a.animating=!1;a.currentSlide=a.vars.slideToStart;a.animatingTo=a.currentSlide;a.atEnd=0==a.currentSlide?!0:!1;a.eventType="ontouchstart"in document.documentElement?"touchstart":"click";a.cloneCount=0;a.cloneOffset=0;a.manualPause=!1;a.vertical=
"vertical"==a.vars.slideDirection;a.prop=a.vertical?"top":"marginLeft";a.args={};a.transitions="webkitTransition"in document.body.style;a.transitions&&(a.prop="-webkit-transform");""!=a.vars.controlsContainer&&(a.controlsContainer=b(a.vars.controlsContainer).eq(b(".slides").index(a.container)),a.containerExists=0<a.controlsContainer.length);""!=a.vars.manualControls&&(a.manualControls=b(a.vars.manualControls,a.containerExists?a.controlsContainer:a),a.manualExists=0<a.manualControls.length);a.vars.randomize&&
(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));if("slide"==a.vars.animation.toLowerCase()){a.transitions&&a.setTransition(0);a.css({overflow:"hidden"});a.vars.animationLoop&&(a.cloneCount=2,a.cloneOffset=1,a.container.append(a.slides.filter(":first").clone().addClass("clone")).prepend(a.slides.filter(":last").clone().addClass("clone")));a.newSlides=b(".slides:first > li",a);var n=-1*(a.currentSlide+a.cloneOffset);a.vertical?(a.newSlides.css({display:"block",
width:"100%","float":"left"}),a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){a.css({position:"relative"}).height(a.slides.filter(":first").height());a.args[a.prop]=a.transitions?"translate3d(0,"+n*a.height()+"px,0)":n*a.height()+"px";a.container.css(a.args)},100)):(a.args[a.prop]=a.transitions?"translate3d("+n*a.width()+"px,0,0)":n*a.width()+"px",a.container.width(200*(a.count+a.cloneCount)+"%").css(a.args),setTimeout(function(){a.newSlides.width(a.width()).css({"float":"left",
display:"block"})},100))}else a.transitions=!1,a.slides.css({width:"100%","float":"left",marginRight:"-100%"}).eq(a.currentSlide).fadeIn(a.vars.animationDuration);if(a.vars.controlNav){if(a.manualExists)a.controlNav=a.manualControls;else{for(var m=b('<ol class="flex-control-nav"></ol>'),q=1,u=0;u<a.count;u++)m.append("<li><a>"+q+"</a></li>"),q++;a.containerExists?(b(a.controlsContainer).append(m),a.controlNav=b(".flex-control-nav li a",a.controlsContainer)):(a.append(m),a.controlNav=b(".flex-control-nav li a",
a))}a.controlNav.eq(a.currentSlide).addClass("active");a.controlNav.bind(a.eventType,function(c){c.preventDefault();if(!b(this).hasClass("active")){a.controlNav.index(b(this))>a.currentSlide?a.direction="next":a.direction="prev";a.flexAnimate(a.controlNav.index(b(this)),a.vars.pauseOnAction)}})}a.vars.directionNav&&(m=b('<ul class="flex-direction-nav"><li><a class="prev" href="#">'+a.vars.prevText+'</a></li><li><a class="next" href="#">'+a.vars.nextText+"</a></li></ul>"),a.containerExists?(b(a.controlsContainer).append(m),
a.directionNav=b(".flex-direction-nav li a",a.controlsContainer)):(a.append(m),a.directionNav=b(".flex-direction-nav li a",a)),a.vars.animationLoop||(0==a.currentSlide?a.directionNav.filter(".prev").addClass("disabled"):a.currentSlide==a.count-1&&a.directionNav.filter(".next").addClass("disabled")),a.directionNav.bind(a.eventType,function(c){c.preventDefault();c=b(this).hasClass("next")?a.getTarget("next"):a.getTarget("prev");a.canAdvance(c)&&a.flexAnimate(c,a.vars.pauseOnAction)}));a.vars.keyboardNav&&
1==b("ul.slides").length&&b(document).bind("keyup",function(c){if(!a.animating&&!(c.keyCode!=39&&c.keyCode!=37)){if(c.keyCode==39)var b=a.getTarget("next");else c.keyCode==37&&(b=a.getTarget("prev"));a.canAdvance(b)&&a.flexAnimate(b,a.vars.pauseOnAction)}});a.vars.mousewheel&&(a.mousewheelEvent=/Firefox/i.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel",a.bind(a.mousewheelEvent,function(c){c.preventDefault();c=c?c:window.event;c=(c.detail?c.detail*-1:c.originalEvent.wheelDelta/40)<0?a.getTarget("next"):
a.getTarget("prev");a.canAdvance(c)&&a.flexAnimate(c,a.vars.pauseOnAction)}));a.vars.slideshow&&(a.vars.pauseOnHover&&a.vars.slideshow&&a.hover(function(){a.pause()},function(){a.manualPause||a.resume()}),a.animatedSlides=setInterval(a.animateSlides,a.vars.slideshowSpeed));a.vars.pausePlay&&(m=b('<div class="flex-pauseplay"><span></span></div>'),a.containerExists?(a.controlsContainer.append(m),a.pausePlay=b(".flex-pauseplay span",a.controlsContainer)):(a.append(m),a.pausePlay=b(".flex-pauseplay span",
a)),m=a.vars.slideshow?"pause":"play",a.pausePlay.addClass(m).text("pause"==m?a.vars.pauseText:a.vars.playText),a.pausePlay.bind(a.eventType,function(c){c.preventDefault();if(b(this).hasClass("pause")){a.pause();a.manualPause=true}else{a.resume();a.manualPause=false}}));if("ontouchstart"in document.documentElement){var t,v,o,r,l,z,w=!1;a.each(function(){"ontouchstart"in document.documentElement&&this.addEventListener("touchstart",s,false)});var s=function(b){if(a.animating)b.preventDefault();else if(b.touches.length==
1){a.pause();r=a.vertical?a.height():a.width();z=Number(new Date);o=a.vertical?(a.currentSlide+a.cloneOffset)*a.height():(a.currentSlide+a.cloneOffset)*a.width();t=a.vertical?b.touches[0].pageY:b.touches[0].pageX;v=a.vertical?b.touches[0].pageX:b.touches[0].pageY;a.setTransition(0);this.addEventListener("touchmove",c,false);this.addEventListener("touchend",e,false)}},c=function(c){l=a.vertical?t-c.touches[0].pageY:t-c.touches[0].pageX;w=a.vertical?Math.abs(l)<Math.abs(c.touches[0].pageX-v):Math.abs(l)<
Math.abs(c.touches[0].pageY-v);if(!w){c.preventDefault();if(a.vars.animation=="slide"&&a.transitions){a.vars.animationLoop||(l=l/(a.currentSlide==0&&l<0||a.currentSlide==a.count-1&&l>0?Math.abs(l)/r+2:1));a.args[a.prop]=a.vertical?"translate3d(0,"+(-o-l)+"px,0)":"translate3d("+(-o-l)+"px,0,0)";a.container.css(a.args)}}},e=function(){a.animating=false;if(a.animatingTo==a.currentSlide&&!w&&l!=null){var b=l>0?a.getTarget("next"):a.getTarget("prev");a.canAdvance(b)&&Number(new Date)-z<550&&Math.abs(l)>
20||Math.abs(l)>r/2?a.flexAnimate(b,a.vars.pauseOnAction):a.flexAnimate(a.currentSlide,a.vars.pauseOnAction)}this.removeEventListener("touchmove",c,false);this.removeEventListener("touchend",e,false);o=l=v=t=null}}"slide"==a.vars.animation.toLowerCase()&&b(window).resize(function(){if(!a.animating&&a.is(":visible")){if(a.vertical){a.height(a.slides.filter(":first").height());a.args[a.prop]=-1*(a.currentSlide+a.cloneOffset)*a.slides.filter(":first").height()+"px"}else{a.newSlides.width(a.width());
a.args[a.prop]=-1*(a.currentSlide+a.cloneOffset)*a.width()+"px"}if(a.transitions){a.setTransition(0);a.args[a.prop]=a.vertical?"translate3d(0,"+a.args[a.prop]+",0)":"translate3d("+a.args[a.prop]+",0,0)"}a.container.css(a.args)}});a.vars.start(a)};a.flexAnimate=function(b,h){if(!a.animating&&a.is(":visible"))if(a.animating=!0,a.animatingTo=b,a.vars.before(a),h&&a.pause(),a.vars.controlNav&&a.controlNav.removeClass("active").eq(b).addClass("active"),a.atEnd=0==b||b==a.count-1?!0:!1,!a.vars.animationLoop&&
a.vars.directionNav&&(0==b?a.directionNav.removeClass("disabled").filter(".prev").addClass("disabled"):b==a.count-1?a.directionNav.removeClass("disabled").filter(".next").addClass("disabled"):a.directionNav.removeClass("disabled")),!a.vars.animationLoop&&b==a.count-1&&(a.pause(),a.vars.end(a)),"slide"==a.vars.animation.toLowerCase()){var i=a.vertical?a.slides.filter(":first").height():a.slides.filter(":first").width();a.slideString=0==a.currentSlide&&b==a.count-1&&a.vars.animationLoop&&"next"!=a.direction?
"0px":a.currentSlide==a.count-1&&0==b&&a.vars.animationLoop&&"prev"!=a.direction?-1*(a.count+1)*i+"px":-1*(b+a.cloneOffset)*i+"px";a.args[a.prop]=a.slideString;a.transitions?(a.setTransition(a.vars.animationDuration),a.args[a.prop]=a.vertical?"translate3d(0,"+a.slideString+",0)":"translate3d("+a.slideString+",0,0)",a.container.css(a.args).one("webkitTransitionEnd transitionend",function(){a.wrapup(i)})):a.container.animate(a.args,a.vars.animationDuration,function(){a.wrapup(i)})}else a.slides.eq(a.currentSlide).fadeOut(a.vars.animationDuration),
a.slides.eq(b).fadeIn(a.vars.animationDuration,function(){a.wrapup()})};a.wrapup=function(b){"slide"==a.vars.animation&&(0==a.currentSlide&&a.animatingTo==a.count-1&&a.vars.animationLoop?(a.args[a.prop]=-1*a.count*b+"px",a.transitions&&(a.setTransition(0),a.args[a.prop]=a.vertical?"translate3d(0,"+a.args[a.prop]+",0)":"translate3d("+a.args[a.prop]+",0,0)"),a.container.css(a.args)):a.currentSlide==a.count-1&&0==a.animatingTo&&a.vars.animationLoop&&(a.args[a.prop]=-1*b+"px",a.transitions&&(a.setTransition(0),
a.args[a.prop]=a.vertical?"translate3d(0,"+a.args[a.prop]+",0)":"translate3d("+a.args[a.prop]+",0,0)"),a.container.css(a.args)));a.animating=!1;a.currentSlide=a.animatingTo;a.vars.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=function(){clearInterval(a.animatedSlides);a.vars.pausePlay&&a.pausePlay.removeClass("pause").addClass("play").text(a.vars.playText)};a.resume=function(){a.animatedSlides=setInterval(a.animateSlides,a.vars.slideshowSpeed);a.vars.pausePlay&&
a.pausePlay.removeClass("play").addClass("pause").text(a.vars.pauseText)};a.canAdvance=function(b){return!a.vars.animationLoop&&a.atEnd?0==a.currentSlide&&b==a.count-1&&"next"!=a.direction?!1:a.currentSlide==a.count-1&&0==b&&"next"==a.direction?!1:!0:!0};a.getTarget=function(b){a.direction=b;return"next"==b?a.currentSlide==a.count-1?0:a.currentSlide+1:0==a.currentSlide?a.count-1:a.currentSlide-1};a.setTransition=function(b){a.container.css({"-webkit-transition-duration":b/1E3+"s"})};a.init()};b.flexslider.defaults=
{animation:"fade",slideDirection:"horizontal",slideshow:!0,slideshowSpeed:7E3,animationDuration:600,directionNav:!0,controlNav:!0,keyboardNav:!0,mousewheel:!1,prevText:"Previous",nextText:"Next",pausePlay:!1,pauseText:"Pause",playText:"Play",randomize:!1,slideToStart:0,animationLoop:!0,pauseOnAction:!0,pauseOnHover:!1,controlsContainer:"",manualControls:"",start:function(){},before:function(){},after:function(){},end:function(){}};b.fn.flexslider=function(i){return this.each(function(){1==b(this).find(".slides li").length?
b(this).find(".slides li").fadeIn(400):!0!=b(this).data("flexsliderInit")&&new b.flexslider(this,i)})}})(jQuery);function initCopyright(){copyrightYear=(new Date).getFullYear();$("#tdr_copyright_year").empty();$("#tdr_copyright_year").append(copyrightYear)}
(function(b){b.fn.drawer=function(){function i(h){h.find(".drawer-toggle a").each(function(){element=b(this);element.hasClass("expand")?element.html("Collapse All"):element.html("Expand All");element.toggleClass("expand")})}this.each(function(){drawer=b(this);drawer.addClass("drawer");drawer.wrap('<div class="drawer-wrapper"/>');var h=drawer.parent();h.prepend('<div class="drawer-toggle"><a href="#" class="expand">Expand All</a></div>');h.append('<div class="drawer-toggle"><a href="#" class="expand">Expand All</a></div>');
drawer.children("div").toggle();drawer.children("h2").click(function(){b(this).toggleClass("expand");b(this).next().toggle();return!1});h.find(".drawer-toggle a").click(function(){b(this).hasClass("expand")?(h.children(".drawer").children("h2").addClass("expand"),h.children(".drawer").children("div").show()):(h.children(".drawer").children("h2").removeClass("expand"),h.children(".drawer").children("div").hide());i(h);return!1});drawer.children("h2").each(function(){window.location.hash=="#"+b(this).text().replace(/\s/g,
"-").substring(0,31)&&b(this).toggleClass("expand").next().toggle()})})}})(jQuery);(function(b){b(document).ready(function(){b(".flexslider").each(function(){var i=b(this),h={controlNav:!1,directionNav:!1,nextText:"&gt;",prevText:"&lt;"};0<i.has(".controls").size()&&(h=b.extend(h,{controlNav:!0,controlsContainer:".controls",pausePlay:!0}));i.hasClass("alt")&&(h=b.extend(h,{directionNav:!0}));i.hasClass("noSlideShow")&&(h=b.extend(h,{controlNav:!1,slideshow:!1,directionNav:!0}));b(this).flexslider(h)})})})(jQuery);
function initFooter(b){b+=location.pathname;b='<a href="'+b+'" onclick="window.open(\''+b+"', 'DYGWYW', 'menubar=0,resizable=1,scrollbars=1,width=450,height=650');\" target=\"DYGWYW\">Feedback</a>";$("#tdr_footer_feedback").empty();$("#tdr_footer_feedback").append(b)}
function initLogout(b){$.getJSON("https://a4.ucsd.edu/tritON/resources/bugscript.jsp?target=https%3A%2F%2Fwww.ucsd.edu&jsoncallback=?",function(i){i.eduUcsdActLoggedin&&(i='<div id="tdr_login_content">You are logged in | <a href="/security/logout?url='+b,i+='">Log Out</a></div>',$("div#tdr_login").empty(),$("div#tdr_login").append(i))})}
(function(b){b.fn.rotator=function(){this.each(function(){var i=b(this),h=i.attr("id");i.after('<div id="'+h+'-nav" class="tdr_slideshow_nav"></div>');i.next().after('<div id="'+h+'-control" class="tdr_slideshow_control playing">Pause</div>');i.cycle({fx:"fade",pager:"#"+h+"-nav"});i.next().next().toggle(function(){i.cycle("pause");var a=b(this);a.removeClass("playing");a.addClass("paused");a.html("Resume")},function(){i.cycle("resume",!0);var a=b(this);a.removeClass("paused");a.addClass("playing");
a.html("Pause")})})}})(jQuery);
(function(b){b.fn.toggler=function(){var i=this.is(".start_closed"),h=this.is(".top_control"),a=this.is(".bottom_control"),n="",m="",q="",u=this.find("dt");this.find("dd");var t=function(){b(q).each(function(){b(this).removeClass("sf_all_expanded").addClass("sf_all_collapsed")});u.each(function(){o(this)})},v=function(){b(q).each(function(){b(this).removeClass("sf_all_collapsed").addClass("sf_all_expanded")});u.each(function(){r(this)})},o=function(a){b(a).next().hide();b(a).removeClass("sf_one_expanded").addClass("sf_one_collapsed");
return!1},r=function(a){b(a).next().show();b(a).removeClass("sf_one_collapsed").addClass("sf_one_expanded");return!1};h&&(n=b('<p class="sf_toggle_master">Expand/Collapse All</p>'),b(this).before(n));a&&(m=b('<p class="sf_toggle_master">Expand/Collapse All</p>'),b(this).after(m));q=[n].concat([m]);u.each(function(){b(this).addClass("sf_one_expanded");b(this).click(function(){b(this).hasClass("sf_one_expanded")?o(this):r(this)})});b(q).each(function(){b(this).addClass("sf_all_expanded");b(this).click(function(){b(n).hasClass("sf_all_expanded")||
b(m).hasClass("sf_all_expanded")?t():v()})});i&&t()}})(jQuery);