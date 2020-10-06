module.exports = function towelSort (matrix) {
    let resArr = [];
    if(matrix === undefined){
        return [];
    }
    matrix.forEach((item, i)=> {
        if(i%2 === 0){
            resArr.push(...item.sort((a,b)=>a-b));
        }else{
            resArr.push(...item.sort((a,b)=>b-a));
        }
    });
    return resArr;
}
