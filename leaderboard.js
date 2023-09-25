const leaderboard = getLeaderboard();
let count = 1;
const winAmount = ['5,000', '10,000', '20,000', '40,000', '80,000', '1,60,000', '3,20,000','6,40,000','12,50,000', '25,00,000','50,00,000', '1,00,000'];

//for each item on leaderboard, append a <li> to userleaderboard
let leaderboardInnertext = '';
leaderboard.forEach(element => {
    leaderboardInnertext+=`<li class="leaderboard-entry">${count++}.  ${element.email} : \u20B9${winAmount[element.score]} on ${parseDate(element.date)}</li>`
});

const leaderboardUsersElement = document.getElementById('leaderboard-users');
leaderboardUsersElement.innerHTML = leaderboardInnertext;

function parseDate(dateString){
    let date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,'0')}-${(date.getDate()).toString().padStart(2,'0')} at ${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}`;

}