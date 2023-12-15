// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
    apiKey: "[LEGG TIL DIN INFO HER]",
    authDomain: "[LEGG TIL DIN INFO HER]",
    projectId: "[LEGG TIL DIN INFO HER]",
    storageBucket: "[LEGG TIL DIN INFO HER]",
    messagingSenderId: "[LEGG TIL DIN INFO HER]",
    appId: "[LEGG TIL DIN INFO HER]"
});

// Initialize Firebase

const db = firebaseApp.firestore();

function addMovie() {
    // Legger til info i collection som heiter "movies"
    db.collection("movies").doc().set({
        title: "test",
        year: "2003"
    })
}

function getMovies() {
    let messagesText = "";

    db.collection("movies").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            messagesText += "<div class='movie'>" + doc.data().title + "</div>";
        });
        document.getElementById("movies").innerHTML = messagesText;
    });
}
getMovies();