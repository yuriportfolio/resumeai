$(document).ready(function(){app.c.init();});

var app={};

////////////////////////////////////////////

app.m={};
app.c={};
app.v={};
app.t={};

////////////////////////////////////////////

app.m.name="Luke Davis";
app.m.phone="(415) 610-2391";
app.m.email="lucaswadedavis@gmail.com";
app.m.twitter="@lukedavis";
app.m.linkedin="linkedin.com/specialsnowflake";

app.m.projects=[
  {title:"Lexponential",exposition:"the best language blah blah blah"},
  {title:"Resumai",exposition:"ai resume designer"},
  {title:"Coloroordinates",exposition:"displays the color contents of an image in 3 space"},
  {title:"Iconaria",exposition:"machine-generated art: logos for open source projects"}
];

app.m.positions=[
  {title:"Software Engineer",exposition:"built some stuff - it's classified.",period:"2013-2014",organization:"NSA"},
  {title:"Mission Manager",exposition:"managed some stuff",period:"2011-2013",organization:"NSA"},
  {title:"Cryptologic Technician (Interpretive)",exposition:"translated Arabic",period:"2009-2011",organization:"USN"}
];

app.m.personalNote="blah blah blah, stuff and things";

app.m.technologies={
  strengths:["javascript","node","express","backbone","jquery","html5 Canvas","data visualization"],
  experience:["python","sql","mongo","REST","AJAX","Buzzwords..."]
};

////////////////////////////////////////////

app.c.init=function(){
  app.v.init();
}

////////////////////////////////////////////

app.v.init=function(){
  zi.css();
  
  $("body").html(app.t.resume() );
};


////////////////////////////////////////////

app.t.resume=function(){
  var d="";
  d+=app.t.name();
  d+=app.t.contactInformation();
  d+=app.t.projects();
  d+=app.t.positions();
  d+=app.t.personalNote();
  return d;
};

app.t.name=function(){
  var d="";
  d+="<div id='name'>"+app.m.name+"</div>";
  return d;
};

app.t.contactInformation=function(){
  var d="";
  d+="<div id='contact-information'>";
    d+="<div id='contact-email'>email: "+app.m.email+"</div>";
    d+="<div id='contact-phone'>phone: "+app.m.phone+"</div>";
    d+="<div id='contact-twitter'>twitter: "+app.m.twitter+"</div>";
    d+="<div id='contact-linkedin'>linkedIn: "+app.m.linkedin+"</div>";
  d+="</div>";
  return d;
};

app.t.project=function(project){
  var d="";
  d+="<div>";
    d+="<span class='project-title'>"+project.title+"</span>";
    d+="<div>"+project.exposition+"</div>";
  d+="</div>";
  return d;
};

app.t.projects=function(){
  var projects=app.m.projects;
  var d="";
  d+="<div class='section-title'>Recent Projects</div>";
  d+="<div id='projects'>";
    for (var i=0;i<projects.length;i++){
      d+=app.t.project(projects[i]);
    }
  d+="</div>";
  return d;
};

app.t.position=function(position){
  var d="";
  d+="<div>";
    d+="<span class='position-title'>"+position.title+"</span>";
    d+="<span class='position-organization'>"+position.organization+"</span>";
    d+="<span class='position-period'>"+position.period+"</span>";
    d+="<div>"+position.exposition+"</div>";
  d+="</div>";
  return d;
};

app.t.positions=function(){
  var positions=app.m.positions;
  var d="";
  d+="<div class='section-title'>Prior Positions</div>";
  for (var i=0;i<positions.length;i++){
    d+=app.t.position(positions[i]);
  }
  return d;
};

app.t.personalNote=function(){
  var personalNote=app.m.personalNote;
  var d="";
  
  d+="<div class='section-title'>A Personal Note:</div>";
  d+="<div id='personal-note'>"+personalNote+"</div>";
  return d;
};

///////////////////////////////////////////////////////begin css

zi={};
zi.config=function(){
    var css={
      "body":{
        "font-size":(0.1*_.random(8,20))+"em"
      },
      "#name":{
        "font-size":(0.1*_.random(20,50))+"em"
      },
      ".section-title":{
        "font-size":(0.1*_.random(8,20))+"em"
      }
    };
    return css;
};
zi.transform=function(css){
    var c="";
    for (var selector in css){
        c+=selector+"{";
        for (var property in css[selector]){
            c+=property+" : "+css[selector][property]+";";
        }
        c+="}";
    }
    return c;
};
zi.css=function(){
    if ($("head#zi").length<1){
        $("head").append("<style type='text/css' id='zi'></style>");
    }
    $("head style#zi").html( this.transform( this.config() ) );
};
/////////////////////////////////////////////////////// end css section
///////////////////////////////////////////////////////