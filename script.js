var click_Run = document.getElementById("run");
var click_Stop = document.getElementById("stop");
var click_Reset = document.getElementById("reset");
var cat_Pictures = document.getElementById("cat-run");

var iteration = 1

const attribute_Set = (bloc, name, value) => {
    bloc.setAttribute(name, value);
    };

var bolean = false

var iteration = 1;                                                     

function myLoop() {                                                     
  setTimeout(function() {                                               
    iteration++;
    if(iteration > 13) { iteration = 1};
    console.log(iteration);
    attribute_Set(cat_Pictures, "src", `./images/cat-${iteration}.jpg`);
    if (bolean == true) {                                            
      myLoop();                                                         
    };
    if (bolean == false) {
        attribute_Set(cat_Pictures, "src", `./images/cat-${iteration}.jpg`)
    }    
  }, 150)
}

click_Run.addEventListener("click", 
        function () {
            bolean = true;
            console.log(bolean);
            myLoop();
        }
);

click_Stop.addEventListener("click", 
        function () {
            bolean = false;
            console.log(bolean);
            myLoop();     
        }
)

click_Reset.addEventListener("click", 
        function () {
            bolean = false;
            iteration = 1
            console.log(iteration);
            attribute_Set(cat_Pictures, "src", `./images/cat-${iteration}.jpg`)
        }
)