// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDhqTlub3P3eUSaC0UdNfeN5FZJD3e0oTc",
    authDomain: "employeeproject-f1eb2.firebaseapp.com",
    databaseURL: "https://employeeproject-f1eb2.firebaseio.com",
    projectId: "employeeproject-f1eb2",
    storageBucket: "employeeproject-f1eb2.appspot.com",
    messagingSenderId: "966949729052"
  };
  firebase.initializeApp(config);

// Create variable to refer back to database
var database = firebase.database();
var name = "";
var role = "";
var startDate = "";
var pay = "";
var inputData = "";

$(document).ready(function(){
  event.preventDefault();

  $("#addEmployeeBtn").on("click", function() {
    name = $("#name").val().trim();
    role = $("#Role").val().trim();
    startDate = $("#start-date").val().trim();
    pay = $("#amount").val().trim();

    inputData = {
      name: name,
      role: role,
      startDate: startDate,
      pay: pay,
    };

    database.ref().push(inputData)

  });

  database.ref().on("child_added", function() {
    
  })

})