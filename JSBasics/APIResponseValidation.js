//Exercise 1 : API Response Validation
//You receive an array of API response codes. Write code to:
//Check if ALL responses are successful (200–299)
//Find the FIRST non-success code
//Return all unique error codes




let responses = [200, 201, 404, 500, 404, 200, 503];

let allSuccessful = responses.every(code => code >= 200 && code <= 299);
console.log("All responses successful:", allSuccessful);

let firstNonSuccess = responses.find(code => code < 200 || code > 299);
console.log("First non-success code:", firstNonSuccess);


let uniqueErrors = [...new Set(responses.filter(code => code < 200 || code > 299))];
console.log("Unique error codes:", uniqueErrors);