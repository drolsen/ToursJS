//Tours JS 1.0
//Devin R. Olsen - 2017
//http://www.devinrolsen.com

let _this, history, tour, current, resizeWait;
class FeatureTour {
	constructor(options){
		this.options = options || {
			debounce: 260
		};
		tour = document.querySelectorAll('[data-tour-description]');
		_this = this;
		history = [];
		if(tour.length){ _this.init(); }
	}
	init(){
		var i = tour.length;
		while(i--){
			tour[i].addEventListener('click', function(e){
      			current = this;
				_this.openTour(this.dataset.tourId, current);
				e.preventDefault();
			})
			tour[i].setAttribute('data-tour-id', i);
			history.push(i);
		}
		history.reverse();
		window.addEventListener('resize', function(){
			if(typeof resizeWait != 'undefined'){ clearTimeout(resizeWait); }			
			resizeWait = setTimeout(function(){
				_this.closeTour(true);
			}, _this.options.debounce);
		});
	}
	openTour(entry){
		var element, top, left, back, forward, overlay, clone, viewportOffset, tourBox, tourInner;
    
		//entry check
		entry = (entry > (history.length-1)) ? 0 : (entry < 0) ? (history.length-1) : entry;
    	element = document.querySelector('[data-tour-id="'+entry+'"]');
    	current = element;
    
		//first, lets remove a tourBox that may be open
		if(document.querySelector('.tour-box')){ _this.closeTour(); }
    
    	//measure
		top = element.getBoundingClientRect().top;
		left = element.getBoundingClientRect().left;

		//overlay
		overlay = document.createElement('div');
		overlay.className = 'tour-overlay';

		//box
		tourBox = document.createElement('div');
		tourBox.setAttribute('class', 'tour-box tour-box__align-bottom');

		//inner
		tourInner = document.createElement('div');
		tourInner.setAttribute('class', 'tour-box-inner');
		tourInner.innerHTML = '<p>'+tour[entry].dataset.tourDescription+'</p>';

		//clone
		clone = element.cloneNode(true);
		clone.className += ' tour-clone';
		clone.style.left = getPosition(element).left + 'px';
		clone.style.top = getPosition(element).top + 'px';
		clone.style.width = element.offsetWidth + 'px';
		clone.style.height = element.offsetHeight + 'px';

		//buttons
		back = document.createElement('span');
		forward = document.createElement('span');
		close = document.createElement('span');
		back.setAttribute('class', 'tour-back tour-button');
		forward.setAttribute('class', 'tour-forward tour-button');
		close.setAttribute('class','tour-close tour-button');
		back.onclick = function(){ _this.backTour(); };
		forward.onclick = function(){ _this.forwardTour(); };		

		//appends
		tourBox.appendChild(back);
		tourBox.appendChild(forward);
		tourBox.appendChild(tourInner);
		tourBox.appendChild(close);
		tourBox.style.top = getPosition(element).top + element.offsetHeight + 10 + 'px';
		tourBox.style.left = (getPosition(element).left + element.offsetWidth) + 'px';

		//drop on DOM		
		document.body.appendChild(tourBox);
		document.body.appendChild(clone);
		document.body.appendChild(overlay);


		//edge detection measure
		viewportOffset = tourBox.getBoundingClientRect();
		top = viewportOffset.top; left = viewportOffset.left;
		if((left + tourBox.offsetWidth) > window.innerWidth){ //spilling over right hand side of screen
			tourBox.style.left = parseInt(tourBox.style.left) - parseInt(tourBox.offsetWidth) + 'px';
		}
		if((top + tourBox.offsetHeight) > window.innerHeight){ //spilling over bottom
			tourBox.style.top = parseInt(tourBox.style.top) - parseInt(tourBox.offsetHeight) - element.offsetHeight - 20 + 'px';
			tourBox.className = tourBox.className.replace(' tour-box__align-bottom', '');
			tourBox.className += ' tour-box__align-top';
		}

		//event listener
		overlay.onclick = function(){
			_this.closeTour();
		};

		close.onclick = function(){
			_this.closeTour();
		};
	}
	forwardTour(){
		_this.closeTour();
		_this.openTour((parseInt(current.dataset.tourId) + 1));
	}
	backTour(){
		_this.closeTour();
		_this.openTour((parseInt(current.dataset.tourId) - 1));
	}	
	closeTour(reset = false){
		var box, clone, overlay;
		box = document.querySelector('.tour-box');
		clone = document.querySelector('.tour-clone');
		overlay = document.querySelector('.tour-overlay');
		if(box){
			box.parentNode.removeChild(box);
			clone.parentNode.removeChild(clone);
      overlay.parentNode.removeChild(overlay);
			if(reset){
				_this.openTour(current.dataset.tourId, current);
			}
		}
	}
}

//Private methods
var getPosition = function offset(el) {
	var rect = el.getBoundingClientRect(),
	scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}