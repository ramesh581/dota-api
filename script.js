let body = document.querySelector('body');
body.innerHTML =
`<div class="main-container">
<h1>Dota players</h1>
</div>`;

let getData =  async ()=>{
    try{
        let database = await fetch('https://api.opendota.com/api/matches/271145478');
        database = await database.json();
        let dota = database.players;
        console.log(dota);
        let main = document.querySelector('.main-container');
        let div = document.createElement('div');
        main.appendChild(div);
        div.classList.add('user-container');
        dota.forEach(player=>{
            div.innerHTML +=`
            <div class="user-card">
            <h3>Name : ${player.name}</h3>
            <p>Wins : ${player.win}</p>
            <p>Lost : ${player.lose}</p>
            <p>Kills : ${player.kills}</p>
            <p>Deaths : ${player.deaths}</p>
            <p>Assists : ${player.assists}</p>
            </div>`
        });
        
        
    }catch(err){
        console.log(err);
    }
}
getData();

