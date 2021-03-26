let movieIKnow =["dil",
"hum dil de chukhe sanam",
"ishq",
"kabhi kabhi"];
let yourFavoriteMovie = prompt("what is your favorite movie?");
if (movieIKnow.indexOf(yourFavoriteMovie)>-1){
    alert("oh ,cool i 've seen it "+ yourFavoriteMovie+"!");

}else{
    alert("no i have not heard about it"+ yourFavoriteMovie +"i will check it out .");
}
console.log (movieIKnow);