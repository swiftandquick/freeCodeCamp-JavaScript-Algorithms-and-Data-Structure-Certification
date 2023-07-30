let text = "<h1>Winter is coming</h1>";
// Returns array containing "<h1>".  
// . stands for any character, .* means zero or more of any characters, .*? means zero or one instance of ".*".    
// So returns a substring with any characters between < and >.  
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);