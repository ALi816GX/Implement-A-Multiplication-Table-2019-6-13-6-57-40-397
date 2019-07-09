
function isStartSmallerThanEnd(start,end){
    return start <= end;
}




function isInRange(start, end) {
    return (start>=1 && start<=1000) && (end>=1 && end<=1000);
}



function creatMutiplyTableByRange(start,end,isStartSmallerThanEnd,isInRange){

    var result = "";

    if(isStartSmallerThanEnd && isInRange){
        for(let i = start;i <= end; i++ ){
            for(let j = start;j <= i;j++){
                result += ""+j+"*"+i+"="+i*j+" ";
            }
        }
        return result;       
    }
    else{

        if(isStartSmallerThanEnd == true && isInRange == false){
            result = "outOfRange"
        }
        else if(isStartSmallerThanEnd == false && isInRange == true){
            result = null;
        }
        else{
            result = null;
        }

        return result;

    }

}


function getMutiplyTableByRange(start,end){

    return creatMutiplyTableByRange(start,end,isStartSmallerThanEnd(start,end),isInRange(start,end));

}


module.exports = {
    isStartSmallerThanEnd,
    isInRange,
    creatMutiplyTableByRange,
    getMutiplyTableByRange
};