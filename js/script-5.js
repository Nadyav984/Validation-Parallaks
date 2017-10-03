var onClickPrev = function (e) {
	var $el = e.target;
   $el.style.backgroundColor = 'yellow';
   alert('CLICK')
}


var onClickStop = function (e) {
	var $el = e.target;
   e.stopPropagation()
   $el.style.backgroundColor = 'yellow';
   alert('CLICK')
}

box1.onclick = onClickPrev;
box2.onclick = onClickPrev;
box3.onclick = onClickPrev;
box4.onclick = onClickPrev;

box5.onclick = onClickStop;
box6.onclick = onClickStop;
box7.onclick = onClickStop;
box8.onclick = onClickStop;
