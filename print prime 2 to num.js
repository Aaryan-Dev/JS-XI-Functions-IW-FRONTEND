// PROBLEM 2
// Problem 2: Use the above function to print the Primes from 2 to a given limitfunction givenum(num){

    for(i=1; i<=num ; i++) {
        count= 0;
    
         for(j=1; j<=num; j++) {
             if(num%j==0){
              count++;
             } 
            }   
        }
        if(count==2){
        console.log("Yes "+num+" is prime");
        }else{
           
        }

    }

for(k=2; k<=50; k++){
  givenum(k);
}