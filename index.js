// Code your solution here
function findMatching(arrayInput, toFind){
    let theNames = []
    for(const names of arrayInput){
        if(names.toLowerCase() === toFind.toLowerCase()){
            theNames.push(names)
        }
    }
    return theNames
}

function fuzzyMatch(arrayInput, toFind) {
    let theNames = []   
    for(const names of arrayInput){
        let findMatch = ""
        for(let i=0;i<toFind.length;++i){
            findMatch += names[i]
        }
        if(findMatch === toFind){
            theNames.push(names)
        }
    }
    return theNames;
}

function matchName(arrayInput, theName) {
    let newArray = []
    for(const theDrivers of arrayInput){
        console.log(theDrivers)
        if(theDrivers.name === theName){
            newArray.push(theDrivers)
        }
    }
    return newArray
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
];