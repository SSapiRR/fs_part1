// Pratice 2 - Fill in the empty functions 


// Q1: instanceOf counts the number of instances of e in a collection
//let instanceOf = (element, collection) => {}

//instanceOf(1, [1, 2, 3, 1, 1, 4]) // 3
//instanceOf("a", "banana") // 3
//instanceOf(5, {a: 5, b: 5}) // 2


// Q2: 
    // 1.
    //count the number of users in "data_base_l1.json" 
    //and return a list of their names

    // 2.
    // in "data_base_l2.json" and return a list of lists with size 2  -> [[name, age], [name, age], ...]
    // each list contains the name and the age of the user

    // 3.
    // in "data_base_l3.json"
    // return a list of emails that are created from name+_+last_name + "@gmail.com" 
    // for example: "john doe" -> john_doe@gmail.com


// Q3:
    // 1. create a login page (you can reuse the code from the previous lesson)
    // 2. assume that the user is logged in if the user name is "admin" and the password is "1234"
    // 3. if the user is logged in, show a welcome message and table of all users in "data_base_l3.json" and their emails
    

    
    //  fetch("l1.json")
    // .then(function(resp){
    //     return resp.json();
    // })    
    // .then(function(data){
    //   console.log(data);
    //   allUsers = data.test_user;
    // })


 

    // let jsonObject = {
    //     "users" : {
    //         "user1" : {
    //             "name" : "John",
    //             "age" : 30
    //         },
    //         "user2" : {
    //             "name" : "Mary",
    //             "age" : 25
    //         },
    //         "user3" : {
    //             "name" : "Peter",
    //             "age" : 27
    //         },
    //         "user4" : {
    //             "name" : "Jane",
    //             "age" : 22
    //         },
    //         "user5" : {
    //             "name" : "Bob",
    //             "age" : 32
    //         },
    //         "user6" : {
    //             "name" : "Alice",
    //             "age" : 24
    //         }
    //     }};
    
    // console.log(Object.keys(data.users).length)


    // fetch("l1.json")
    // .then(function(resp){
    //     return resp.json();
    // })    
    // .then(function(data){
    //   console.log(data);
    //   allUsers = data;
    // })


    fetch("l1.json")
    .then((response) => response.json())
    .then((data) => console.log(data));