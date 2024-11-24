

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

const dbz: string[] = ['Goku','Vegeta','Trunks']
const trunk = dbz[4]  || 'not characters'

console.log('characters 3:',trunk  )


const [ ,p2, p3, turnks2 = 'not characters'] : string[] = ['Goku','Vegeta','Trunks']

console.log('characters 3:',turnks2  )

console.log('Song:',anotherSong);
console.log('duration:',duration);
console.log('author:',author);

export {};