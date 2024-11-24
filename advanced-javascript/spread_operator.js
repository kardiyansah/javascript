// Spread operator
// Berfungsi memecah (expand / unpack) iterables menjadi single element

// const students = ['kardi', 'victor', 'john doe'];
// console.log(...students[0]);


// Menggabungkan 2 arrays
// const subjects = ['math', 'biology', 'economy'];
// const result = [...students, 'alexander', ...subjects];
// // const result = students.concat(subjects);
// console.log(result);



// Mengcopy value / nilai pada array
// const students = ['kardi', 'victor', 'john doe'];
// const newStudents = [...students];
// newStudents[0] = 'michael';
// console.log(newStudents);
// console.log(students);



// Mengubah nodeList menjadi array
// const liName = document.querySelectorAll('.name');
// const nameGroup = [];
// const test = [...liName].forEach(ln => nameGroup.push(ln.textContent));
// console.log(test);

// const name = [...liName].map(ln => ln.textContent);
// console.log(name);



const heading = document.querySelector('.heading');
const abjad = [...heading.textContent]
 .map(a => `<span>${a}</span>`).join(``);

heading.innerHTML = abjad;
console.log(abjad);
