var box = document.getElementById("display");
//Store no's


//Function number for textbox

function addtoscreen(x){
    
    box.value= box.value + x;
    
    if(x=="c"){
        box.value="";
    }
    
}

function answer(){
    
    x=box.value;
    x=eval(x);
    box.value=x;
}
    
    
    
    
    



