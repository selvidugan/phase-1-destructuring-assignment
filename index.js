const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
let farmAnimalsArr = farmAnimals.split(' ');

const [moo, neigh, baa, oink, cluck] = farmAnimalsArr;


let removeHorse = farmAnimalsArr.splice(1, 1);

const [bessie, dolly, babe, little] = farmAnimalsArr;


const [blackAndWhite, black, pink] = farmAnimalsArr;


const [red, orange, yellow, green, blue, indigo, violet] = colors;


const [r, o, y, g, b, i, v] = colors;


const [, , , , , indg] = colors


const {muppetName, color, job, partner, song} = muppet;


const {nestedJob, nestedPartner} =  nestedMuppet;
const {song2, song4} =  nestedMuppet.album.theMuppetMovie;