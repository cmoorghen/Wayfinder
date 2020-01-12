// variables:
var x = 0;
var array = Array();
var array2 = Array();
var input = Array();
var subb,numm;
var honCS,minorData,major,ps = false;


// add course to form
function add_element_to_array()
{
    selectElement = document.querySelector('#course'); 
    output = selectElement.options[selectElement.selectedIndex].value; 
    document.querySelector('.output').textContent = output; 
    subb = output;
    array[x] = subb;

    selectElement = document.querySelector('#code'); 
    output = selectElement.options[selectElement.selectedIndex].value; 
    document.querySelector('.output').textContent = output; 
    numm = output
    array2[x]= numm;

    input[x]= {subb,numm};

    x++;
}

// displaying and saving (into an array) the courses that was just added.
function display_array()
{
   var e = "<hr/>";   
   for (var y=0; y<array.length; y++) {
     e += "Course " + (y+1) + " = " + array[y] +" " + array2[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}

function psych()
{
    for (var x=0; x<array.length; x++) {
      if ( (array[x] == "Psychology" )  && (array2[x] == "1000")) {
        console.log("SUCCESS MINOR IN PSYCH");
        ps = true;
        break;
    }
  }
}

var HCS1 = [ 
  {sub:"Computer Science",code:"1025A/B"},
  {sub:"Computer Science",code:"1026A/B"},
  {sub:"Engineering Science",code:"1036A/B"},
]
var HCS2 = [ 
  {sub:"Computer Science",code:"1037A/B"},
  {sub:"Computer Science",code:"1027A/B"},
]
var HCS3 = [ 
  {sub:"Calculus",code:"1000A/B"},
  {sub:"Calculus",code:"1301A/B"},
  {sub:"Calculus",code:"1500A/B"},
  {sub:"Calculus",code:"1501A/B"},
  {sub:"Mathematics",code:"1600A/B"},
  {sub:"Applied Mathematics",code:"1413"},
  {sub:"Applied Mathematics",code:"1201A/B"},
]

function honors()
{
  var count = 0;
  for (var y=0; y<3; y++) {
    for (var x=0; x<array.length; x++) {
      if ( (array[x] == HCS1[y].sub )  && (array2[x] == HCS1[y].code)) {
        count ++;
        break;
      }
    }
  }
  if (count == 0) { console.log("FAIL honors/major");return ; }

  count = 0;
  for (var y=0; y<2; y++) {
    for (var x=0; x<array.length; x++) {
      if ( (array[x] == HCS2[y].sub )  && (array2[x] == HCS2[y].code)) {
        count ++;
        break;
      }
    }
  }
  if (count == 0) { console.log("FAIL honors/major");return ; }

  count =0;
  for (var y=0; y<5; y++) {
    for (var x=0; x<array.length; x++) {
      if ( (array[x] == HCS3[y].sub )  && (array2[x] == HCS3[y].code)) {
        count ++;
      }
    }
  }

  if (count < 2) { console.log("FAIL honors/major");return ; }
  else {
    major = true;
    honCS = true;
    console.log("SUCCESS YOU CAN DO A HONORS && MAJOR COMP SCI");}

}

var min1 = [ 
  {sub:"Calculus",code:"1000A/B"},
  {sub:"Calculus",code:"1500A/B"},
  {sub:"Calculus",code:"1501A/B"},
]
var min2 = [ 
  {sub:"Mathematics",code:"1600A/B"},
  {sub:"Applied Mathematics",code:"1411A/B"},
]
var min3 = [ 
  {sub:"Computer Science",code:"1027A/B"},
  {sub:"Computer Science",code:"1026A/B"},
]

function minor()
{
  var count = 0;
  for (var y=0; y<3; y++) {
    for (var x=0; x<array.length; x++) {
      if ( (array[x] == min1[y].sub )  && (array2[x] == min1[y].code)) {
        count ++;
        break;
      }
    }
  }
  if (count == 0) { console.log("FAIL");return ; }

  count = 0;
  for (var y=0; y<2; y++) {
    for (var x=0; x<array.length; x++) {
      if ( (array[x] == min2[y].sub )  && (array2[x] == min2[y].code)) {
        count ++;
        break;
      }
    }
  }
  if (count == 0) { console.log("FAIL");return ; }

  count =0;
  for (var y=0; y<2; y++) {
    for (var x=0; x<array.length; x++) {
      if ( (array[x] == min3[y].sub )  && (array2[x] == min3[y].code)) {
        count ++;
      }
    }
  }
  if (count < 2) { console.log("FAIL");return ; }
  else {
    minorData = true;
    console.log("SUCCESS MINOR DATA SCI"); }

}


function show()
{
  var e = "<hr/>";   
  
  e += "<h3> YOU ARE ELIGBLE FOR THE FOLLOWING PROGRAMS: </h3>" + "<br/>";

    if (ps){
      e += "<i class='fa fa-users' style='margin-right:3px'></i> YOU CAN DO PSYCH MINOR" + "<br/>";
    }
    if (minorData) {
      e += "<i class='fa fa-area-chart' style='margin-right:3px'></i> YOU CAN DO DATA SCIENCE MINOR" + "<br/>";
    }
    if (honCS) {
      e += "<i class='fas fa-laptop-code' style='margin-right:3px></i> YOU CAN DO DATA SCIENCE MAJOR AND HONOR" + "<br/>";
    }
    if (!honCS && !minorData && !ps) {
      e += "YOU ARE NOT ELIGBLE FOR ANYTHING :(" + "<br/>";
    }

  
  document.getElementById("module").innerHTML = e;
}

function reset(){
  window.location.reload();
}