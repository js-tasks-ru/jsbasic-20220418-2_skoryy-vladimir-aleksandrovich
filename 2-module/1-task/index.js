function sumSalary(salaries) {
 let sum = 0;
 for (let key in salaries) {
   if (isNaN(salaries[key]) == false && isFinite(salaries[key]) == true) {
   sum += salaries[key];
   }
 }
 return sum;
}
