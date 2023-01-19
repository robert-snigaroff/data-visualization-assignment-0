var hour_xs = [], hour_ys = []
var minute_xs = [], minute_ys = []
var second_xs = [], second_ys = []

function setup(){
  createCanvas(900,640);
  frameRate(1);
  //noStroke();

  w = 0
  h = -70
  for (var i = 0; i < 24; i++){
	w += 130;
	if (i % 6 == 0){
		w = 60;
		h += 130;
	}
    append(hour_xs, w);
    append(hour_ys, h);
  }

  w = 0;
  h = 48;
  for (var i = 0; i < 60; i++){
	w += 15;
	if (i % 8 == 0){
		w = 61.5;
		h += 15;
	}
    append(minute_xs, w);
    append(minute_ys, h);
  }

  for (var i = 0; i < 60; i++){
	if (i < 18){
		append(second_xs, 5+(50*i));
    	append(second_ys, 10);
	} else if (i < 30){
		append(second_xs, 855);
    	append(second_ys, 10+(48*(i-17)));
	} else if (i < 47){
		append(second_xs, 855-(50*(i-29)));
    	append(second_ys, 586);
	} else{
		append(second_xs, 5);
    	append(second_ys, 586-(48*(i-46)));
	}
  }
}

function draw(){
  background(0);
  fill(100,150);

  for (var i = 0; i < second(); i++){
    square(second_xs[i], second_ys[i], 40);
  }

  woffset = (hour() % 6) * 130;
  hoffset = (hour() % 4) * 130;
  for (var i = 0; i < minute(); i++){
    square(minute_xs[i]+woffset, minute_ys[i]+hoffset, 13);
	console.log(minute())
  }

  for (var i = 0; i < hour(); i++){
    square(hour_xs[i], hour_ys[i], 121);
  }

}
