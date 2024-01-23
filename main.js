// Arrays holding different muscle groups to work out, which workout, and recovery.
const target = ['chest', 'core', 'shoulders', 'legs'];
const activity = ['bench press', 'planks', 'overhead press', 'squats'];
const recovery = ['drink a protein shake!', 'take a nap...', 'EXERCISE MORE!!!', 'eat something healthy.'];

// Strings to store target, activity, and recovery.
const t = target[Math.floor(Math.random() * 4)];
const r = recovery[Math.floor(Math.random() * 4)];

const randMessage = (target, recovery) => {
    let a = '';
    switch(target) {
        case 'chest':
            a = activity[0];
            return a;
        case 'core':
            a = activity[1];
            return a;
        case 'shoulders':
            a = activity[2];
            return a;
        case 'legs':
            a = activity[3];
            return a;
        default:
            break;
    }
    console.log(`I want to work out my ${target}.`);
    console.log(`To do this, I need to do ${a}.`);
    console.log(`For recovery, I need to ${r}`);

}

console.log(randMessage(t, r));