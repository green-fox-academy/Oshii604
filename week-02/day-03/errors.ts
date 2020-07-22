function divide(count: number): any {
    if(count !== 0){
    return{
        normalResult: count / 10,
        error: ``
    };
}
else{
    return{
        normalResult: null,
        error: `Something's not right`
    }
}
}
console.log(divide(100));
console.log(divide(1000));
console.log(divide(10000));
console.log(divide(0));