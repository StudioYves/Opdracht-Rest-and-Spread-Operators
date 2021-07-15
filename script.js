//FUNCTIE 1: REST OPERATOR

const sum = (...numbers) => {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })
}

console.log(sum(1, 2, 3, 4, 5));

//FUNCTIE 2: SPREAD OPERATOR

const cijferreeks = [1, 2, 3, 4, 5, 6];

const sum2 = (cijfer1, cijfer2, cijfer3, cijfer4, cijfer5, cijfer6) => {
    return cijferreeks.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })
}

console.log(sum2(...cijferreeks));

