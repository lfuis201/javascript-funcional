datos = [
    {name:'luna', sex:'f', age:7, species:'dog'},
    {name:'jimmy', sex:'m', age:122, species:'human'},
    {name:'snoop', sex:'m', age:60, species:'human'},
    {name:'jennifer', sex:'f', age:250, species:'human'},
    {name:'yeller', sex:'20', age:20, species:'dog'},
];

let agep = datos.filter(arr => arr.species == 'human');
let ages = agep.map(agep => agep.age).reduce((total, amount) => total + amount);
console.log(ages/agep.length);