var firebaseConfig = {
    apiKey: "AIzaSyCJw3Jg0Yob192B9eKLDTa1SvG6p92tOi4",
    authDomain: "qwitter-is-a-quiter.firebaseapp.com",
    databaseURL: "https://qwitter-is-a-quiter-default-rtdb.firebaseio.com",
    projectId: "qwitter-is-a-quiter",
    storageBucket: "qwitter-is-a-quiter.appspot.com",
    messagingSenderId: "647104004358",
    appId: "1:647104004358:web:abc49bfbe9efbcc7e0de87"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  Username=localStorage.getItem("user_name")
  
  document.getElementById("user_name").innerHTML="Welcome "+ Username
  
  function Addrooom(){
   Roomname=document.getElementById("room_name").value 
   firebase.database().ref("/").child(Roomname).update({
  
        purpose:"Adding... Room names... Wait Right MWUAHAHAHA!"
   }) 
   localStorage.setItem("room_name", Roomname) 
   window.location="kwitter_page.html"
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log(Room_names)
        row ="<div class='room_name' id="+Room_names+"  onclick='redirectToRoomName(this.id)'>#"+Room_names+" </div><hr>";
        document.getElementById("output").innerHTML += row
        //End code
        });});}
  getData();
  
  
  function redirectToRoomName(name){
  console.log(name)
  localStorage.setItem("room_name", name)
  window.location="kwitter_page.html"
  }
  
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }