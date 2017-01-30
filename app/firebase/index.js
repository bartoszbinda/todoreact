import firebase from "firebase";
  // Initialize Firebase
try {
	var config = {
	apiKey: "AIzaSyD0FJNF6ozFm2a4H_zuG4soO9lrc6ak2Dw",
	authDomain: "binda-todoapp.firebaseapp.com",
	databaseURL: "https://binda-todoapp.firebaseio.com",
	storageBucket: "binda-todoapp.appspot.com",
	messagingSenderId: "373733978266"
	};
	firebase.initializeApp(config);

} catch (e) {

}
var firebaseRef = firebase.database().ref();
export var firebaseRef = firebase.database().ref();
export default firebase;