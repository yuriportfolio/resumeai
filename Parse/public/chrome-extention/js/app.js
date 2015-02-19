$(document).ready(function(){
	app.c.init();
});
/////////////////////////////

var app={m:{},v:{},c:{},t:{}};

/////////////////////////////


/////////////////////////////

app.c.init=function(){
	app.v.init();
	app.v.listeners();
};

//////////////////////////////

app.v.init=function(){
	$("body").html(app.t.splash() );
};


app.v.listeners=function(){

};

//////////////////////////////

app.t.splash=function(){
  var d="";
  d+="<img src='icon.png' alt='resume ai icon' />";
  d+="<div class='wrapper'>";
    d+="<input type='text' placeholder='Organization'></input>";
    
    d+="<input type='text' placeholder='Role'></input>";
    d+="<textarea rows='22' placeholder='Bullshit'></textarea>";  
  d+="<input type='button' value='Save'></input>";
  d+="</div>";    
  return d;
};