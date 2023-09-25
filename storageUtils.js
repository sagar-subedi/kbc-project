function saveUsers(users){
    localStorage.setItem('users', JSON.stringify(users));
}

//sets the currently logged in user
function setCurrentUser(user){
    localStorage.setItem('currentUser', JSON.stringify(user));
}

function getCurrentUser(){
    const currentUser = localStorage.getItem('currentUser');
    console.log(currentUser);
    return currentUser?JSON.parse(currentUser) : {}; 
}

//returns all list of registered users
function getUsers(){
    const users = localStorage.getItem('users');
    return JSON.parse(users) || []; 
}

//returns the leaderboard
function getLeaderboard(){
    const leaderboard = localStorage.getItem('leaderboard');
    return leaderboard?JSON.parse(leaderboard) : []; 
}

function setLeaderboard(leaderboard){
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

function insertToLeaderboard(email, score){
    const entry = {
        email,
        score,
        date:Date().toString()
    }
    const leaderboard = getLeaderboard();


    let insertIndex = leaderboard.length;

for (let i = 0; i < leaderboard.length; i++) {
  if (entry.score > leaderboard[i].score) {
    insertIndex = i;
    break; 
  }
}


leaderboard.splice(insertIndex, 0, entry);
setLeaderboard(leaderboard);



    //getLeaderboard
}