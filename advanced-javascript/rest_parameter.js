// Rest parameter
// adalah mempresentasikan argument pada function dengan jumalah yang tidak terbatas menjadi sebuah array

// rest parameter hanya bisa digunakan diakhir argumentnya
// function myFunc(a, b , ...values) {
//     return values
// }
// console.log(myFunc(1, 5, 7, 8, 2));


// function add(...values) {
//     // let total = 0;
//     // values.forEach(value => total += value);
//     // return total;

//     return values.reduce((total, number) => total + number, 0);
// }
// console.log(add(1, 2, 4, 7, 9));



// array destructuring
// const group1 = ['John Doe', 'Viktor', 'Alexander', 'Kardi'];
// const [leader, ...members] = group1;
// console.log(leader);
// console.log(members);



// object destructuring
// const team = {
//     projectManager: 'Kardiyansah',
//     frontEnd1: 'John Doe',
//     frontEnd2: 'Alexander',
//     backEnd: 'Victor',
//     ux: 'Lincoln',
//     devOps: 'Albert' 
// }

// const {projectManager, ...myTeam} = team;
// console.log(projectManager);
// console.log(myTeam);



// Filtering
// function filterBy(type, ...values) {
//     return values.filter(value => typeof value === type);
// }

// console.log(filterBy('boolean', 11, 2, 'John Doe', false, 9, true, 'Alexander'));
