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
    room_name = localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({name: user_name, message: msg, like:0});
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

