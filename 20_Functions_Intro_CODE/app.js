function singSong() {
    console.log('ド');
    console.log('レ');
    console.log('ミ');
}

// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();

function greet(firstName, lastName) {
    console.log(`Hi, ${firstName} ${lastName[0]}.`);
}

// greet('Ken', 'Fukuyama');

// repeat('hi', 3); // hihihi

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}