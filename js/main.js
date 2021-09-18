import { attach } from "../store.js";
import App from '../component/app.js'

attach((App),document.getElementById('root'))













































// function hithtlight([first, ...strings], ...values) {
//   return values
//     .reduce(
//       (arr, curr) => [...arr, `<span>${curr}}</span>`, strings.shift()],
//       [first]
//     )
//     .join("");
// }

// var brand = "F8";
// var course = "Javacsript";

// var htmls = hithtlight`Học lập trình ${course} tại ${brand}!`;
// console.log(htmls);
