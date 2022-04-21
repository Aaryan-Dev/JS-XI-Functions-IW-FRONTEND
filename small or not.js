// Problem 4: Write a function to check if the char is a small case or not.


function what(char){

    let alpha = "abcdefghijklmnopqrstuvwxyz";
    
    
     var itis = false;
    for(i=0; i<=alpha.length-1; i++) {
    
        if(alpha[i]==char){
            var itis= true;
            break;
        }
    }
    if(itis== true){
    console.log("Yes")
    }else{
        console.log("No")
    }
    
    }
    what("e");
    