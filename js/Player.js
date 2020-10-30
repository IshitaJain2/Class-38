class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;

    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();

        })
    }

    updateCount(count){
        database.ref('/').update({
           playerCount:count
        
        })
    }

    update(){
        var playerIndex = "players/player"+this.index;
        //previsious things deleted and new things will be added (set function)
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
   
    static getPlayerInfo (){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}