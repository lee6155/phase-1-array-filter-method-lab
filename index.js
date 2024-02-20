
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

function findMatching (drivers, string) {
    let array = drivers.filter(function (drivers2){
        if(drivers2.toLowerCase() === string.toLowerCase()) {
            return drivers2
        }
    }
    )
    return array;
}

findMatching (drivers, string);


function fuzzyMatch (drivers, string) {
    let array = drivers.filter(function (drivers2){
        if (string === drivers2.substring(0,string.length)) {
            return drivers2;
        }
    }
    )
    return array;
}

fuzzyMatch (drivers,string);


function matchName (drivers, string) {
    let array = drivers.filter(function (drivers2){
        if(drivers2.name === string) {
            return drivers2;
        }
    }
    )
    return array;
}

matchName(drivers,string);