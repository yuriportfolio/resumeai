davis=
{
random:function (x)
	{
		return (Math.floor(Math.random()*x));
	},

bell: function (x)
	{
		var i=Math.round((davis.random(x)+davis.random(x)+davis.random(x))/3);
		return i;
	},

randomColor:function (x)
	{

	if (x){	x=x.toLowerCase();}
	else{x=="none"}

	var red=davis.random(255);
	var green=davis.random(255);
	var blue=davis.random(255);
	var color="rgb("+red+","+green+","+blue+")";

	if (x=="mammal" || x=="mammalian"){
		red=160+davis.random(85);
		green=red-40;
		blue=green/2;
		}
	if (x==="grey" || x==="gray"){
		green=red;
		blue=red;
	}
	
	color="rgb("+red+","+green+","+blue+")";
	return color;
	},
	
maybe:function(f,cb1,cb2){
	if(Math.random()<f){
		cb1();
	} else {
		if (typeof cb2==='function'){
			cb2();
		}
	}
},

maybeString:function(f,s1,s2){
	if(Math.random()<f){
		return s1;
	} else {
		return s2;
	}
},

pick: function (x)
	{
	return x[davis.random(x.length)];
	},
	
	//this takes two arrays - one the source of new material, the other saved material from the past, and decides which to return an element from, then selects a random element from the ancestral or mutational array.
darwin:function(mutation,ancestry)
	{
	var anar=ancestry.length;
	var m=(9*anar*anar)/((anar*anar)+100);
	var d=1+this.random(10);
	if (m>d){ return this.pick(ancestry);}
	else{ return this.pick(mutation);}
	}
};

