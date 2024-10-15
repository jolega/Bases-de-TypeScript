

interface AudioPlayer{
    audioVolume: number;
    songDuration:number;
    song: string;
    details : Details;
}

interface Details {
    author: string;
    year: number

}

const audioPlayer: AudioPlayer = {
    audioVolume: 0,
    songDuration: 0,
    song: "",
    details:  {
        author: "",
        year: 0
    }
}


const { song: anotherSong , songDuration: duration, details } = audioPlayer
const { author  } = details

console.log('Song:',anotherSong);
console.log('duration:',duration);
console.log('author:',author);

export {};