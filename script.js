console.log("Welcome to The Ultimate jQuery Course!🚀");

$(document).ready(function() {
  // $("#output").load("sample.txt", function(response, statusTxt, xhr) {
  //   if (statusTxt === "success") alert ("Success!")
  //   if (statusTxt === "error") alert ("Error:" + xhr.statusText)
  // })

  $.get("https://jsonplaceholder.typicode.com/users", function(data, status){
    console.log(data, status);
  })

  $.post("https://jsonplaceholder.typicode.com/posts", {title: "This is the title.", body: "This is the body"}, function(data, status){
    console.log(data, status);
  })
})