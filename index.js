function receivesAFunction (HigherOrderFunctionWaitingForCB){
    console.log("Serving my  purpose");
    let name = "Moshe Menachem Mendel"
    HigherOrderFunctionWaitingForCB();
}


function doOtherThing (waiting) {
    let x = 7; 
    console.log (x*2);
    console.log("Hello");
}



receivesAFunction(doOtherThing);




// function returnsANamedFunction () {

// }



function returnsAnAnonymousFunction() {


    return function () {
        let x = 7; 
        console.log (x*2);
        console.log("Hello");
    }
}







// setTimeout (doOtherThing,2000);