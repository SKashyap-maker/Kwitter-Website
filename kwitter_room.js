var firebaseConfig = {
      apiKey: "AIzaSyBinH4P-QOzgTuYUvHmJIWZOwDr1UDu3Mw",
      authDomain: "practice-activity-1ca01.firebaseapp.com",
      databaseURL: "https://practice-activity-1ca01-default-rtdb.firebaseio.com",
      projectId: "practice-activity-1ca01",
      storageBucket: "practice-activity-1ca01.appspot.com",
      messagingSenderId: "659405031451",
      appId: "1:659405031451:web:f81f836f75627ccf2690be"
    };
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({purpose: "adding room name"});

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log(Room_names);

      row = "<div class='room_name' id="+ Room_names +" onclick='redirect_to_room_name(this.id)'> # "+ Room_names +" </div><hr>";
      document.getElementById("output").innerHTML = row;    
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
