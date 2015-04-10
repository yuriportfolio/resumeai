$(document).ready(function(){
	app.c.init();
});
/////////////////////////////

var app={m:{},v:{},c:{},t:{}};

/////////////////////////////


/////////////////////////////

app.c.init=function(){
  Parse.initialize(creds().apk, creds().jsk);
  app.v.init();
	app.v.listeners();
};

//////////////////////////////

app.v.init=function(){
	$("body").html(app.t.splash() );
};


app.v.listeners=function(){
  $("body").on("click","#save-to-parse",function(){
    var organization = _.escape($("#organization").val() );
    var role = _.escape($("#role").val() );
    var description = _.escape($("#description").val() );
    var coverLetter = _.escape($("#coverLetter").val() );
    $("#organization").val("");
    $("#role").val("");
    $("#description").val("");
    $("#coverLetter").val("");
    
    var Lead = Parse.Object.extend("Leads", {});
    var lead = new Lead();
    lead.set("organization",organization);
    lead.set("role",role);
    lead.set("description",description);
    lead.set("coverLetter",coverLetter);
    lead.save();
  });
};

//////////////////////////////

app.t.splash=function(){
  var d="";
  d+="<img src='icon.png' alt='resume ai icon' />";
  d+="<div class='wrapper'>";
    d+="<input type='text' placeholder='Organization' id='organization'></input>";
    d+="<input type='text' placeholder='Role' id='role'></input>";
    d+="<textarea rows='16' placeholder='Cover Letter Text' id='coverLetter'></textarea>";  
    d+="<textarea rows='16' placeholder='Lead' id='description'></textarea>";  
  d+="<input type='button' value='Save' id='save-to-parse'></input>";
  d+="</div>";    
  return d;
};