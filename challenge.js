function compareTriplets(a, b) {
    let re = [0 , 0];
    for(let i = 0; i < a.length; i ++) {
        if(a[i] > b[i]){
            re[0] +=1;
        }
        else if(a[i] < b[i]){
            re[1] +=1;
        }
    }
    return re;

}
