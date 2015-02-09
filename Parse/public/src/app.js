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
  {
    title:"Lexponential",
    exposition:"the best second-semester foreign-language vocabulary learning app in history",
    role:"Creator",
    notes:"(Backbone, Parse)"
  },
  {
    title:"Resumai",
    exposition:"ai resume designer",
    role:"Creator",
    notes:"(Evolutionary Algorithm, Backbone)"
  },
  {
    title:"Coloroordinates",
    exposition:"displays the color contents of an image in 3 space",
    role:"Creator",
    notes:"(THREE JS, HTML5 Canvas)"
  },
  {
    title:"Iconaria",
    exposition:"machine-generated art: logos for open source projects",
    role:"Creator",
    notes:"(HTML5 Canvas, Procedural Generation)"
  }
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
  d+="<div class='screen-wrapper'>";
    d+=app.t.layouts();
  d+="</div>";
  return d;
};

app.t.layouts=function(){
  return _.sample([
    app.t.sequential(),
    app.t.sideBySide()
    ]);
};

app.t.sequential=function(){
  var d="";
  davis.maybe(0.5,function(){
    d+="<table>";
    d+="<tr>";
      d+="<td>";
        d+=app.t.name();
      d+="</td>";
      d+="<td>";
        d+=app.t.contactInformation();
      d+="</td>";
    d+="</tr>";
    d+="<tr>";
      d+="<td colspan=2>";
        d+=app.t.technologies();
        d+=app.t.projects();
        d+=app.t.positions();
        d+=app.t.personalNote();
      d+="</td>";
    d+="</tr>";
    d+="</table>";
  },function(){
    d+=app.t.name();
    d+=app.t.contactInformation();
    d+=app.t.technologies();
    d+=app.t.projects();
    d+=app.t.positions();
    d+=app.t.personalNote();
  });
  return d;
};

app.t.sideBySide=function(){
  var d="";
  d+="<table>";
    d+="<tr>";
      d+="<td>"
        d+=app.t.name();
        d+=app.t.contactInformation();
      d+="</td>";
      d+="<td>";
        d+=app.t.technologies();
        d+=app.t.projects();
        d+=app.t.positions();
        d+=app.t.personalNote();
      d+="</td>";
    d+="</tr>";
  d+="</table>";
  return d;
};

app.t.name=function(){
  var d="";
  d+="<div id='name'>"+app.m.name+"</div>";
  return d;
};

app.t.contactInformation=function(){
  var d="";
  d+="<div id='contact-information' class='section'>";
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
  d+="<div id='projects' class='section'>";
  d+="<div class='section-title'>Recent Projects</div>";
    for (var i=0;i<projects.length;i++){
      d+=app.t.project(projects[i]);
    }
  d+="</div>";
  return d;
};

app.t.technologies=function(){
  var d="";
  d+="<div class='section'>";
    d+="<div class='section-title'>Strengths</div>";
      for (var i=0, a=[];i<app.m.technologies.strengths.length;i++){
        a.push("<span class='technology-strength'>"+app.m.technologies.strengths[i]+"</span>");
      }
    d+=a.join(" ");
    d+="<div class='section-title'>Experienced</div>";
      for (var i=0, a=[];i<app.m.technologies.strengths.length;i++){
        a.push("<span class='technology-experience'>"+app.m.technologies.experience[i]+"</span>");
      }
    d+=a.join(" ");
  d+="</div>";
  return d;
};

app.t.position=function(position){
  var d="";
  d+="<div>";
    d+="<span class='position-title'>"+position.title+"</span>";
    d+="<span class='position-organization'> ("+position.organization+") </span>";
    d+="<span class='position-period'>"+position.period+"</span>";
    d+="<div>"+position.exposition+"</div>";
  d+="</div>";
  return d;
};

app.t.positions=function(){
  var positions=app.m.positions;
  var d="";
  d+="<div class='section'>";
    d+="<div class='section-title'>Prior Positions</div>";
    for (var i=0;i<positions.length;i++){
      d+=app.t.position(positions[i]);
    }
  d+="</div>";
  return d;
};

app.t.personalNote=function(){
  var personalNote=app.m.personalNote;
  var d="";
  d+="<div  class='section'>";
    d+="<div class='section-title'>A Personal Note:</div>";
    d+="<div id='personal-note'>"+personalNote+"</div>";
  d+="</div>";
  return d;
};

///////////////////////////////////////////////////////begin css

zi={};
zi.config=function(){
  var grey=davis.randomColor("gray");
  
  
  var css={
    "body":{
      "margin":"0",
      "padding":"0",
      "background":"#ccc",
      "font-size":(0.1*_.random(8,15))+"em",
      "font-family":_.sample(["arial","times","garamond","verdana"])
    },
    "table td":{
      "vertical-align":_.sample(["top","bottom"])
    },
    "table":{
      "width":"100%"
    },
    "#name":{
      "font-size":(0.1*_.random(20,50))+"em"
    },
    ".section-title":{
      "font-size":(0.1*_.random(8,20))+"em"
    },
    ".section":{
      
    },
    ".screen-wrapper":{
      "background":"#fff"
    },
    ".position-period":{
      "float":"right"
    }
  };
  
  davis.maybe(0.5,function(){
    css["#name"]["color"]="#fff";
    css["#name"]["background"]=grey;
  });
  
  davis.maybe(0.5,function(){
    css[".section"]["border-bottom"]=(_.random(0,5)+"px solid "+grey);
  },function(){
    css[".section-title"]["color"]="#fff";
    css[".section-title"]["background"]=grey;
  });
  
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