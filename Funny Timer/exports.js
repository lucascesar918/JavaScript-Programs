const ps =(dir,)=>{
    const player = require('play-sound')()

    player.play(dir, (err) => {
        if (err) console.log(`Could not play sound: ${err}`);
    });
}

module.exports = {ps}