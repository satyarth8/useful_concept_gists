function maxTrafficFlow(trafficFlow, k) {
    let max =0
    let i=0
    let windowsum=0 // could be seen as max sum
    while(i<k){
        windowsum+=trafficFlow[i]
        i++ // sum till 0 to k then we will slide and remove start element and add next element
    }
    console.log("sum 1 to ",k," = ",windowsum);
    if(trafficFlow.length <=k){
        return windowsum  // case where the no of element is less then k , then the sum of entire array input is returned
    }
    slidesum=windowsum // considering the sum we did from the 0 to k is max and then we will compare in next while loop
   let startptr=0 , endptr=k
   // set the sart as 0 and end as k , we already have that sum 
    while(endptr<trafficFlow.length){

        slidesum-=trafficFlow[startptr] // subtract the start element from  sliding sum
        slidesum+=trafficFlow[endptr] // add the new/next element to the sliding sum
        
        console.log("sum from",startptr+1," to ",endptr," = ",slidesum);
        
        startptr++ 
        endptr++ 

        if(slidesum>windowsum){
            windowsum=slidesum
        }// if the window sum or max sum is  less than current slide window then replace window sum with slide sum

    }
    console.log(windowsum); // return or log the window sum
}

let trafficFlow = [10,20,30,10,10]
let k=3

maxTrafficFlow(trafficFlow,k)