function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    var chairWood = chairQuantity * perChairWood;
    var tableWood = tableQuantity * perTableWood; 
    var bedWood = bedQuantity * perBedWood;

    return chairWood + tableWood + bedWood;
}

const totalWood = woodCalculator(2, 5, 3);
console.log(totalWood, 'Cubic Foot');