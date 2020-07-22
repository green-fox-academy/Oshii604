function addOne(count: number): number{
    return count+1;
}

let addTwo = function(count: number):number{
    return count+2;
};

let addThree = (count: number):number =>{
    return count+3;
};

let addFour = count => count+4;

[2, 4, 6].forEach(addOne);
[2, 4, 6].forEach(addTwo);
[2, 4, 6].forEach(addThree);
[2, 4, 6].forEach(addFour);

[2, 4, 6].forEach(count => count+4);