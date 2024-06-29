//creates a function containing an object
function gameObject(){
    const obj ={
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: "0",
                    shoe: "16",
                    points: "22",
                    rebounds: "12",
                    assists: "12",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "1",
                },
                "Reggie Evans": {
                    number: "30",
                    shoe: "14",
                    points: "12",
                    rebounds: "12",
                    assists: "12",
                    steals: "12",
                    blocks: "12",
                    slamDunks: "7",
                },
                "Brook Lopez": {
                    number: "11",
                    shoe: "17",
                    points: "17",
                    rebounds: "19",
                    assists: "10",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "15",
                },
                "Mason Plumlee": {
                    number: "1",
                    shoe: "19",
                    points: "26",
                    rebounds: "12",
                    assists: "6",
                    steals: "3",
                    blocks: "8",
                    slamDunks: "5",
                },
                "Jason Terry": {
                    number: "31",
                    shoe: "15",
                    points: "19",
                    rebounds: "2",
                    assists: "2",
                    steals: "4",
                    blocks: "11",
                    slamDunks: "1",
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: "4",
                    shoe: "18",
                    points: "10",
                    rebounds: "1",
                    assists: "1",
                    steals: "2",
                    blocks: "7",
                    slamDunks: "2",
                },
                "Bismak Biyombo": {
                    number: "0",
                    shoe: "16",
                    points: "12",
                    rebounds: "4",
                    assists: "7",
                    steals: "7",
                    blocks: "15",
                    slamDunks: "10",
                },
                "DeSagna Diop": {
                    number: "2",
                    shoe: "14",
                    points: "24",
                    rebounds: "12",
                    assists: "12",
                    steals: "4",
                    blocks: "5",
                    slamDunks: "5",
                },
                "Ben Gordon": {
                    number: "8",
                    shoe: "15",
                    points: "33",
                    rebounds: "3",
                    assists: "2",
                    steals: "1",
                    blocks: "1",
                    slamDunks: "0",
                },
                "Brendan Haywood": {
                    number: "33",
                    shoe: "15",
                    points: "6",
                    rebounds: "12",
                    assists: "12",
                    steals: "22",
                    blocks: "5",
                    slamDunks: "12",
                },
            },
        },
    }

    return obj;
    
}

function numPointsScored(name = "Brendan Haywood"){
    let playerPoints = gameObject();
    for(const team in playerPoints){        
        for(const player in playerPoints[team].players){            
            if(player === name){
                // console.log(name + "\'s points are " + playerPoints[team].players[name].points);
                return playerPoints[team].players[name].points;
            }
        }   
    }    
}

numPointsScored();

function shoeSize(name = "Ben Gordon"){
    let playerShoes = gameObject();
    for(const team in playerShoes){        
        for(const player in playerShoes[team].players){            
            if(player === name){
                // console.log(name + "\'s shoe size is " + playerShoes[team].players[name].shoe);
                return playerShoes[team].players[name].shoe;
            }
        }   
    }  
}

shoeSize();

function teamColors(teamName = "away"){
    const teamObj = gameObject();
    for(const team in teamObj){
        if(team === teamName){
            // console.log(teamObj[team].colors);            
            return teamObj[team].colors;
        }        
    }
}

teamColors();

function teamNames(){
    const teamArr = [];
    const teamName = gameObject();
    
    for(const team in teamName){
        teamArr.push(teamName[team].teamName);
        // console.log(teamArr);               
    }
    return teamArr;     
}

teamNames();

function playerNumbers(teamName){
    const jerseyNumbers = [];
    const teamObj = gameObject(); 
    
    for(const team in teamObj){
        if(team === teamName){
            const playersObj = teamObj[team].players;
                                 
            for(const playerName in playersObj){     
                const player = playersObj[playerName];                         
                jerseyNumbers.push(player.number);
                //console.log(jerseyNumbers);               
            } 
        }        
    }   
    //console.log(jerseyNumbers); 
    return jerseyNumbers;    
}

playerNumbers("away");

function playerStats(playerName = "Ben Gordon") {
    const teamObj = gameObject();

    for (const team in teamObj) {
        const playersObj = teamObj[team].players;
        
        if (playerName in playersObj) {
            return {...playersObj[playerName]}     
        }        
    }  
}

playerStats();

function bigShoeRebounds() {
    let largestShoeSize = -Infinity;
    let playerWithLargestShoe = null;
    const teamObj = gameObject();

    
    for (const team in teamObj) {
        const playersObj = teamObj[team].players;
        
        
        for (const playerName in playersObj) {
            const player = playersObj[playerName];
            
            
            if (player.shoe > largestShoeSize) {
                largestShoeSize = player.shoe;
                playerWithLargestShoe = player;
            }
        }
    }

    
    if (playerWithLargestShoe) {
        //console.log(playerWithLargestShoe.rebounds)
        return playerWithLargestShoe.rebounds;
    } else {
        
        return null;
    }
}

bigShoeRebounds();


// Bonus questions

function mostPointsScored() {
    let maxPoints = -Infinity;
    let playerWithMostPoints = null;
    const teamObj = gameObject();

    for (const team in teamObj) {
        const playersObj = teamObj[team].players;
        
        for (const playerName in playersObj) {
            const player = playersObj[playerName];
            
            if (player.points > maxPoints) {
                maxPoints = player.points;
                playerWithMostPoints = playerName;
            }
        }
    }
    
    //console.log(`Player with the most points: ${playerWithMostPoints}`);
    return playerWithMostPoints;
}

mostPointsScored();

function winningTeam() {
    let maxPoints = -Infinity;
    let teamWithMostPoints = null;
    const teamObj = gameObject();

    for (const team in teamObj) {
        let teamPoints = 0;
        const playersObj = teamObj[team].players;
        
        for (const playerName in playersObj) {
            const player = playersObj[playerName];
            teamPoints += player.points;
        }

        if (teamPoints > maxPoints) {
            maxPoints = teamPoints;
            teamWithMostPoints = team;
        }
    }

    //console.log(`Team with the most points: ${teamWithMostPoints}`);
    return teamWithMostPoints;
}

winningTeam();

function playerWithLongestName() {
    let longestNameLength = -Infinity;
    let playerWithLongestName = null;
    const teamObj = gameObject();

    for (const team in teamObj) {
        const playersObj = teamObj[team].players;
        
        for (const playerName in playersObj) {
            const nameLength = playerName.length;
            
            if (nameLength > longestNameLength) {
                longestNameLength = nameLength;
                playerWithLongestName = playerName;
            }
        }
    }

    //console.log(`Player with the longest name: ${playerWithLongestName}`);
    return playerWithLongestName;
}

playerWithLongestName();

// Super bonus

function doesLongNameStealATon() {
    let longestName = '';
    let longestNameSteals = -Infinity;
    const teamObj = gameObject();

    for (const team in teamObj) {
        const playersObj = teamObj[team].players;
        
        for (const playerName in playersObj) {
            const player = playersObj[playerName];
            
            if (playerName.length > longestName.length) {
                longestName = playerName;
                longestNameSteals = player.steals;
            }
        }
    }

    let longNameHasMostSteals = true;
    for (const team in teamObj) {
        const playersObj = teamObj[team].players;
        
        for (const playerName in playersObj) {
            const player = playersObj[playerName];
            
            if (player.steals > longestNameSteals) {
                longNameHasMostSteals = false;
            }
        }
    }

    //console.log(`Does the player with the longest name steal a ton? ${longNameHasMostSteals}`);
    return longNameHasMostSteals;
}

doesLongNameStealATon();