(function(doc, win,designWidth,maxWidth) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if(!clientWidth) return;			
			if(clientWidth>maxWidth) clientWidth=maxWidth;
			docEl.style.fontSize = 100 * (clientWidth / designWidth) + 'px';
		};


	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window,640,640);  
