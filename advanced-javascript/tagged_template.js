// Tagged template
// Bentuk yang lebih kompleks dari template literals, memungkinkan kita untuk membaca template literals melalui sebuah function

// const name = 'Alexander';
// const age = 23;

// function example(strings, ...expressions) {
//     // let str = ``;
//     // // index pada forEach adalah parameter opsional
//     // strings.forEach((string, index) => {
//     //     str += `${string}${expressions[index] || ``}`;
//     // });

//     // parameter ketiga pada reduce adalah index dan itu opsional
//     return strings.reduce((result, str, i) => `${result}${str}${expressions[i] || ``}`, ``);
// }

// const string = example`Hello nama saya ${name}, saya ${age} tahun`;
// console.log(string);



// Highlight
// const name = 'Alexander';
// const age = 23;

// function highlight(strings, ...values) {
//     return strings.reduce((result, str, i) => `${result}${str}<span class="highlight">${values[i] || ``}</span>`, ``);
// }

// const string = highlight`Hello nama saya ${name}, saya ${age} tahun`;
// document.body.innerHTML = string;
// console.log(string);


// Fungsi Tagged template
// -Escaping HTML Tags
// -Translation & Internationalization
// -Styled Components