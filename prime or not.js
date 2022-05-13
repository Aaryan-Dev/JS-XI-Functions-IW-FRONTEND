// Problem 1: Create a function to check if a number is Prime or Not

function givenum(num){

for(i=1; i<=num ; i++) {

    let count= 0;
     for(j=1; j<=num; j++) {
         if(num%j==0){
          count++;
         } else{
           
         }
        }
        if(count==2){
        console.log("Yes");
        }else{
            console.log("No");
        }
    }
