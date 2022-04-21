// Problem 5: Write a function to replace spaces in a given string with - .


function here(str){

    let bag= "";
    for(i=0; i<str.length; i++){
    
        if(str[i] == " "){
            bag = bag + "-";
        }else{
            bag = bag + str[i];
        }
    }
     
    console.log(bag);
    }
    
    here("djf kjd dkjdf fksjhf");