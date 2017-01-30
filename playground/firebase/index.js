import firebase from "firebase";
  // Initialize Firebase
var config = {
	apiKey: "AIzaSyD0FJNF6ozFm2a4H_zuG4soO9lrc6ak2Dw",
	authDomain: "binda-todoapp.firebaseapp.com",
	databaseURL: "https://binda-todoapp.firebaseio.com",
	storageBucket: "binda-todoapp.appspot.com",
	messagingSenderId: "373733978266"
};
firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();
firebaseRef.set({
	app: {
		name: "Todo App",
		version: "1.0.0"
	},
	isRunning: true,
	user: {
		name: "Bartosz",
		age: 22
	}
}).then(() => {
	console.log("Set worked");
}, (e) => {
	console.log("Set failed");
});
var notesRef = firebaseRef.child("notes");
notesRef.on('child_added', (snapshot) => {
	console.log("child_added: ", snapshot.key, snapshot.val());
});
var newNoteRef = notesRef.push({
	text: 'walk the dog!'
});

console.log("Todo ID : ", newNoteRef.key);