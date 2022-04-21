// Problem 3: Use the same function to print Non-Primes from 2 to a given limit


function givenum(num){

    for(i=1; i<=num ; i++) {
        count= 0;
    
         for(j=1; j<=num; j++) {
             if(num%j==0){
              count++;
             } 
            }   
        }
        if(count==2){
        
        }else{
           console.log("No "+num+" is not prime");
        }

    }

for(k=2; k<=50; k++){
  givenum(k);
}