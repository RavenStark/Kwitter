//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyD4HFiy7ISF7i0hhw61BdKsoB26IMkJiys",
      authDomain: "snigdhok-4e9a9.firebaseapp.com",
      databaseURL: "https://snigdhok-4e9a9-default-rtdb.firebaseio.com",
      projectId: "snigdhok-4e9a9",
      storageBucket: "snigdhok-4e9a9.appspot.com",
      messagingSenderId: "488116027777",
      appId: "1:488116027777:web:fed079f1d038d7f8812880"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {

msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name: user_name,
message: msg,
like: 0
});
document.getElementById("msg").value = "";

}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);

name = message_data['name'];
message = message_data['message'];
like = message_data['like'];

name_with_tag = "<h4>"+ name  + "<img src='tick.png' class='user_tick'> </h4> " ;
message_with_tag = "<h4 class='message_h4'> " + message + "</h4>";
like_button = "<button class='btn btn-warning' id=" +firebase_message_id +" value="+like+" onclick='updateLike(this.id)'> ";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> like: + " + like + "</span> </button> <hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;


//End code
      } });  }); }
getData();

function updateLike(message_id) {
console.log("Clicked on like button- " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
firebase.database().ref(room_name).child(button_id).update({
      like: updated_likes
      });

}



function logOut() {

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";

}