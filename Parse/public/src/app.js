$(document).ready(function(){app.c.init();});

var app={};

////////////////////////////////////////////

app.m={};
app.c={};
app.v={};
app.t={};

////////////////////////////////////////////

app.m.fontSize=1;

app.m.name="Luke Davis";
app.m.phone="(415) 610-2391";
app.m.email="lucaswadedavis@gmail.com";
app.m.twitter="@lukedavis";
app.m.linkedin="linkedin.com/luke";
app.m.github="http://github.com/lucaswadedavis";

app.m.projects=[
  {
    title:"Lexponential",
    exposition:"Accelerates foreign language vocabulary acquisition by using Zipf’s Law and the Google Translate API",
    role:"Creator",
    notes:"(Backbone, Parse, Stripe)"
  },
  {
    title:"ResumeAI",
    exposition:"AI resume designer (crafted the resume you're reading now, actually)",
    role:"Creator",
    notes:"(Evolutionary Algorithm, CSS3 Print Layouts)"
  },
  {
    title:"Faux Poe",
    notes:"(Parse, Express, Mandrill, Coinbase API)",
    exposition:"Procedurally generates imitation Edgar Allan Poe verse and sells it for Bitcoin",
    role:"Creator"
  },
  {
    title:"Coloroordinates",
    exposition:"Displays the colors of an uploaded image by projecting the  red, green, and blue color values of each pixel in the image along the x, y, and z axes in 3-space",
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
  {
    title:"Software Engineer",
    exposition:"Built over 2 dozen user-facing applications used daily by over REDACTED individuals, in areas spanning REDACTED, REDACTED, scheduling, productivity tools, and data visualization",
    period:"2013-2014",
    organization:"NSA"},
  {
    title:"Mission Manager",
    exposition:"Managed a team of highly qualified personnel from all branches of the armed service, civilians, and contractors in pursuit of national level military objectives",
    period:"2011-2013",
    organization:"NSA"},
  {
    title:"Cryptologic Technician, Interpretive",
    exposition:"Graduated from the intensive two year Modern Standard Arabic training program at the Defense Language Institute and went on to become an Arabic translator at the National Security Agency during the last days of the  American drawdown in Iraq and the beginning of the Arab Spring",
    period:"2009-2011",
    organization:"USN"}
];

app.m.personalNote="Vegetarian, Lover of Dinosaurs and Space-Things, Southerner, Darwinian";

app.m.technologies={
  strengths:["Evolutionary Algormithms","Javascript","Node","Express","Backbone","jQuery","HTML5 Canvas","Data Visualization","Git"],
  experience:["Python","SQL","Angular","Mongo","REST","Continuous Intigration (Travis, Circle CI, etc...)","TDD (Mocha, Chai, etc...)"]
};

////////////////////////////////////////////

app.c.init=function(){
  app.v.init();
};

app.c.fontIncrement=function(){
  app.m.fontSize+=0.02;
  app.v.fontMod();
};

app.c.fontDecrement=function(){
  app.m.fontSize=Math.max(app.m.fontSize-0.02,0.1);
  app.v.fontMod();
};

////////////////////////////////////////////

app.v.init=function(){
  zi.css();
  
  var d="<div class='screen-wrapper'></div>";
  d+="<div id='navigation'><span id='increment'>+</span></span><span id='decrement'>-</span></div>";
  $("body").html(d);
  $(".screen-wrapper").html(app.t.resume() );
  
  $("#increment").on("click",function(){
    app.c.fontIncrement();
  });
  $("#decrement").on("click",function(){
    app.c.fontDecrement();
  });
};


app.v.fontMod=function(){
  var d="body{font-size:"+app.m.fontSize+"em;}";
  if ($("head style#font-mod").length<1){
    $("head").append("<style type='text/css' id='font-mod'></style>");
  }
  $("head style#font-mod").html(d);
};

////////////////////////////////////////////

app.t.resume=function(){
  var d="";
    d+=app.t.layouts();
  return d;
};

app.t.layouts=function(){
  return app.t.hybrid();
  _.sample([
    app.t.sequential(),
    app.t.sideBySide(),
    app.t.hybrid()
    ]);
};

app.t.hybrid=function(){
  var d="";
  davis.maybe(0.5,function(){
    d+="<table>";
    d+="<tr>";
      d+="<td colspan=2>";
        d+=app.t.name();
      d+="</td>";
    d+="</tr>";
    d+="<tr>";
      d+="<td>";
        d+=app.t.personalNote();
        d+=app.t.contactInformation();
      d+="</td>";
      d+="<td>";
        d+=app.t.technologies();
        d+=app.t.projects();
        d+=app.t.positions();
      d+="</td>";
    d+="</tr>";
    d+="</table>";
  },function(){
    d+="<table>";
    d+="<tr>";
      d+="<td>";
        d+=app.t.name();
        d+=app.t.photo();
      d+="</td>";
      d+="<td>";
        d+=app.t.contactInformation();
      d+="</td>";
    d+="</tr>";
    d+="<tr>";
      d+="<td colspan=2>";
        d+=app.t.technologies();
      d+="</td>";
    d+="</tr>";
    d+="<tr>";
      d+="<td class='col-2'>";
        d+=app.t.projects();
      d+="</td><td>";
        d+=app.t.positions();
      d+="</td>";
    d+="</tr>";
    d+="<tr>";
      d+="<td colspan=2>";
        d+=app.t.personalNote();
      d+="</td>";
    d+="</tr>";
    d+="</table>";
  });
  return d;
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
      d+="</td>";
    d+="</tr>";
    d+="<tr>";
      d+="<td class='col-2'>";
        d+=app.t.projects();
      d+="</td><td>";
        d+=app.t.positions();
      d+="</td>";
    d+="</tr>";
    d+="<tr>";
      d+="<td colspan=2>";
        d+=app.t.personalNote();
      d+="</td>";
    d+="</tr>";
    d+="</table>";
  });
  return d;
};



app.t.sideBySide=function(){
  var d="";
  davis.maybe(0.5,function(){
    d+="<table>";
      d+="<tr>";
        d+="<td>";
          d+=app.t.name();
          d+=app.t.contactInformation();
          d+=app.t.technologies();
          d+=app.t.personalNote();
        d+="</td>";
        d+="<td>";
          d+=app.t.projects();
          d+=app.t.positions();
        d+="</td>";
      d+="</tr>";
    d+="</table>";
  },function(){
    d+="<table>";
      d+="<tr>";
        d+="<td>";
          d+=app.t.name();
          d+=app.t.contactInformation();
          d+=app.t.personalNote();
        d+="</td>";
        d+="<td>";
          d+=app.t.technologies();
          d+=app.t.projects();
          d+=app.t.positions();
        d+="</td>";
      d+="</tr>";
    d+="</table>";
  })
  return d;
};

app.t.name=function(){
  var d="";
  d+="<div id='name'>"+app.m.name+"</div>";
  return d;
};

app.t.photo=function(){
  return "<div id='canvas'></div>";
};

app.t.contactInformation=function(){
  var d="";
  d+="<div id='contact-information' class='section'>";
    d+="<div id='contact-github'>"+app.m.github+"</div>";
    d+="<div id='contact-email'>"+app.m.email+"</div>";
    d+="<div id='contact-phone'>"+app.m.phone+"</div>";
    //d+="<div id='contact-linkedin'>linkedIn: "+app.m.linkedin+"</div>";
  d+="</div>";
  return d;
};

app.t.project=function(project){
  var d="";
  d+="<div class='project'>";
    d+="<span class='project-title'>"+project.title+"</span>";
    d+="<span class='project-notes'> "+project.notes+"</span>";
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
    d+="<div class='collection'>";
      for (var i=0, a=[];i<app.m.technologies.strengths.length;i++){
        a.push("<span class='technology-strength'>"+app.m.technologies.strengths[i]+"</span>");
      }
    d+=a.join(", ");
    d+="</div>";
    d+="<div class='section-title'>Experience</div>";
    d+="<div class='collection'>";
      for (var i=0, a=[];i<app.m.technologies.experience.length;i++){
        a.push("<span class='technology-experience'>"+app.m.technologies.experience[i]+"</span>");
      }
    d+=a.join(", ");
    d+="</div>";
  d+="</div>";
  return d;
};

app.t.position=function(position){
  var d="";
  d+="<div class='position'>";
    d+="<div  class='position-metadata'>";      
      d+="<span class='position-period'>"+position.period+"</span>";
      d+="<span class='position-title'>"+position.title+"</span>";
      d+="<span class='position-organization'> ("+position.organization+") </span>";
    d+="</div>";
    d+="<div>"+position.exposition+"</div>";
  d+="</div>";
  return d;
};

app.t.positions=function(){
  var positions=app.m.positions;
  var d="";
  d+="<div class='section' id='positions'>";
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
    d+="<div class='section-title'>About Me</div>";
    d+="<div id='personal-note'>"+personalNote+"</div>";
  d+="</div>";
  return d;
};

///////////////////////////////////////////////////////begin css

zi={};
zi.config=function(){
  var grey=davis.randomColor("gray");
  var margin=(_.random(5,10))+"px";
  
  var css={
    "body":{
      "margin":"0",
      "padding":"0",
      "background":"#ccc",
      "font-size":app.m.fontSize+"em",
      "font-family":_.sample(["arial","times","garamond","verdana"])
    },
    "#navigation":{
      "position":"fixed",
      "top":"0px",
      "width":"100%",
      "background":"#000",
      "opacity":"0.7",
      "overflow":"hidden",
      "text-align":"right"
    },
    "#navigation span":{
      "padding":"25px",
      "margin-right":"40px",
      "width":"200px",
      "text-align":"center",
      "background":"#fff",
      "border":"1px solid #000",
      "cursor":"pointer",
      "font-size":"20px",
      "font-weight":"bold",
      "font-family":"courier"
    },
    "table td":{
      "vertical-align":"top"
    },
    "td.col-2":{
      "width":"50%"
    },
    "table":{
      "width":"100%",
      "border-spacing":margin,
      "border-collapse":"separate"
    },
    "#contact-information":{
      "padding-top":margin,
      "padding-bottom":margin,
      "font-size":(0.1*_.random(7,9))+"em"
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
    },
    ".position-metadata":{
    },
    ".position":{
      "margin-top":margin,
      "margin-bottom":margin,
    },
    ".project":{
      "margin-top":margin,
      "margin-bottom":margin,
    },
    ".project-title":{
    },
    ".project-notes":{
    },
    ".section":{
      "margin-bottom":margin
    },
    ".collection":{
      "margin-top":margin,
      "margin-bottom":margin
    },
    "#personal-note":{
      "margin-top":margin,
      "margin-bottom":margin,
    }
  };
  
  davis.maybe(0.5,function(){
    css["#name"]["color"]="#fff";
    css["#name"]["background"]=grey;
    css["#name"]["text-align"]="center";
    css["#name"]["padding"]=(_.random(20,50) )+"px";
  });
  
  /*
  davis.maybe(0.5,function(){
    css["#name"]["text-align"]="right";
    css["#contact-information"]["text-align"]="right";
  });
  */
  
  davis.maybe(0.5,function(){
    css[".position-metadata"]["font-weight"]="bold";
    css[".project-title"]["font-weight"]="bold";
    css[".project-notes"]["font-weight"]="bold";
  },function(){
    css[".position-metadata"]["color"]=grey;
    css[".project-title"]["color"]=grey;
    css[".project-notes"]["color"]=grey;
  });
  
  davis.maybe(0.5,function(){
    css[".section"]["border-bottom"]=(_.random(0,5)+"px solid "+grey);
  },function(){
    css[".section-title"]["color"]="#fff";
    css[".section-title"]["background"]=grey;
    css[".section-title"]["padding"]=(_.random(5,10))+"px";
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