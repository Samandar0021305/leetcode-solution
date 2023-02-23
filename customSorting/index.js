var customSortString = function(order, s) {
    let arr = []
    for(let i =0;i<order.length;i++){
        for(let j=0;j<s.length;j++){
            if(order[i] == s[j]){
                arr.push(order[i])
            }
            if(!s.includes(order[i])){
                continue
            }
        }
    }
    
    for(let item of s){
        if(!order.includes(item)){
            arr = [...arr,item]
        }
    }
    return arr.join("")
};


console.log(customSortString('cba','abcd'))