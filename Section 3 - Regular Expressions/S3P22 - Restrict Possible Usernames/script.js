let username = "JackOfAllTrades";
// Usernames can only use alpha-numeric characters.
// The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
// Username letters can be lowercase and uppercase.
// Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
// ^[a-z][a-z]+\d*$:  String starts with a letter, follow by one or more letters, ends with zero or more number.  
// ^[a-z]\d\d+$:  String starts with a letter, follow by a number, then follow by one or more number, it must also be end with number.  
// | is the or condition between two regexes, and i is ignore ase.  
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);