
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
document.getElementById("user_name").innerHTML = "Welcome " + user_name +"!!!";

function addRoom() {

room_name = document.getElementById("room_name").value;
localStorage.setItem("room_name" , room_name);

firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"
});
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) {

console.log(name);
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html";

}

function logOut() {

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";

}