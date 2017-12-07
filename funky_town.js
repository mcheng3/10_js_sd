var fibonacci = function(n) {
  if ( typeof n != "number" || n < 0) { return NaN; }
  else if (n == 0) { return 0; }
  else if (n == 1) { return 1; }
  else { return fibonacci(n-2) + fibonacci(n-1); }
};

var gcd = function(a , b) {
  if (b == 0) return a;
  else return gcd(b, a % b);
};

var students = ['Helen', 'Shakil', 'Eric', 'Jennifer Y', 'Jennifer Z', 'Arif', 'Queenie', 'Jawadul', 'Shaina', 'Vivien', 'Brian', 'Naotaka', 'Bayan', 'Adam', 'Caleb', 'Terry', 'Jason', 'Alessandro', 'Samantha', 'Carol', 'Joyce', 'Shannon', 'Charles', 'Taylor', 'Kelly', 'Leo', 'Khyber', 'Ibnul', 'Eugene', 'Yuyang', 'Karina', 'Tiffany', 'Holden', 'Michael', 'Masha', 'Adrian', 'David', 'Eric', 'Josh', 'Jerome', 'Henry', 'Jackie', 'Giorgio', 'Karen', 'Sonal', 'Xavier', 'Bermet', 'Alex', 'Iris', 'Manahal', 'Donia', 'Md', 'Connie', 'Lisa', 'Xing', 'Angelica', 'Angel', 'Augie', 'Dimitriy', 'Yiduo', 'Gordon', 'Tiffany', 'Clive', 'Jonathan', 'Sasha', 'Daniel', 'Yu Qi', 'Michela', 'Kristin', 'Fabiha', 'Maxim', 'Marcus', 'Ish', 'James', 'Ryan', 'Edward', 'Adeeb', 'Jake', 'Cynthia', 'Kevin', 'Levi', 'Edmond', 'Kyle', 'Andrew', 'Max', 'Jenny', 'Philip', 'Shan', 'Mansour', 'Ray', 'Jake', 'Ida', 'Kerry', 'Stanley', 'Jackie', 'William', 'Tina', 'Michael'];

var randomStudent = function() {
  return students[Math.floor(Math.random() * students.length)];
};

console.log("Testing fibonacci function");
for (i = -5; i < 10; i++) {
  console.log("fibonacci(" + i + "): " + fibonacci(i));
}
console.log("fibonacci(\"NUMBER\"): " + fibonacci("NUMBER"));
console.log("fibonacci(true): " + fibonacci(true));

console.log("\nTesting gcd function");
console.log("gcd(24,36): " + gcd(24, 36));
console.log("gcd(56,64): " + gcd(56, 64));

console.log("\nTesting randomStudent function");
for (i = 0; i < 15; i++) {
  console.log(randomStudent());
}
