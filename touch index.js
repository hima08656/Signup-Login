// index.js

// signup function: takes a string userName, declares an array inside the function
// If userName already exists -> return "User Already Registered, Please Login"
// If not present -> push the userName to the array and return "Signup Sucessfull, Please Login"

function signup(userName) {
  // array declared inside the function with some usernames already present
  const users = ["alice", "bob", "charlie"];

  if (users.includes(userName)) {
    return "User Already Registered, Please Login";
  } else {
    users.push(userName);
    return "Signup Sucessfull, Please Login";
  }
}

// login function: takes two strings userName and password, declares array inside function
// It should return:
// - "Login Sucessfull..." if userName present and password matches
// - "User Not Found, Please Signup" if userName not present
// - "Wrong Password...." if userName present but password is not Emp@123

function login(userName, password) {
  // array declared inside the function with some usernames and passwords
  // Note: per the problem statement the required password to check is Emp@123 for existing users
  const userRecords = [
    { userName: "alice", password: "Emp@123" },
    { userName: "bob",   password: "Emp@123" },
    { userName: "charlie", password: "Emp@123" }
  ];

  const found = userRecords.find(u => u.userName === userName);

  if (!found) {
    return "User Not Found, Please Signup";
  }

  if (found.password === password) {
    return "Login Sucessfull...";
  } else {
    return "Wrong Password....";
  }
}

// export the functions (so you can test with require in Node)
module.exports = { signup, login };
