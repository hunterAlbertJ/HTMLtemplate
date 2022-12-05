function findSquares(difference, endIndex, startIndex){

        
        if(startIndex === undefined){
            startIndex = 0;
            endIndex = difference;
        }
       let tempStart1 = startIndex;
       let tempEnd1 = endIndex;
       console.log(tempStart1);
       console.log(tempEnd1);
        // endIndex = 25;
        if(Number.isInteger(Math.sqrt(startIndex)) && Number.isInteger(Math.sqrt(endIndex)) && startIndex !== 0 ){
          //  console.log(startIndex)
            console.log("in if statement");
         let result = tempEnd1 + "-" + tempStart1;
            console.log(result)
         return result;
        } else {
            let tempStart = startIndex + 1;
            let tempEnd = endIndex + 1;
            console.log(tempEnd + "end new");
            console.log(tempStart + "start new");
           
                return findSquares(difference ,tempEnd, tempStart);
                
        }
            
            


}
console.log(findSquares(9))