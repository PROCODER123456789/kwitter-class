
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {

      apiKey: "AIzaSyA48AN8ayK-O3X-zBpHHt_rFLi7GGF6Dpc",
      authDomain: "kwitter-385e4.firebaseapp.com",
      databaseURL: "https://kwitter-385e4-default-rtdb.firebaseio.com",
      projectId: "kwitter-385e4",
      storageBucket: "kwitter-385e4.appspot.com",
      messagingSenderId: "428808750513",
      appId: "1:428808750513:web:5ba89e68b67452df072990"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    // Initialize Firebase
   
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names)
      row = "<div class='room_name' id= "+Room_names+" onclick= 'redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
      Room_names = document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_names).update({
            purpose : "adding room name"
      });
      window.location = "kwitter_page.html";

}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.js";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
