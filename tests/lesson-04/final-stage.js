function findPairsDivisibleBy17() {
    const pairNumbers = [];
    for (let a = 1; a <= 100; a++) {
        for (let b = a; b <= 100; b++) {
            if ((a + b) % 17 === 0) {
                console.log('(' + a + ', ' + b + ') = ' + (a + b));
                pairNumbers.push([a, b]);
            };
        }
    }

    // console.log(pairNumbers);

    const countPairs = pairNumbers.length;

    console.log('There are ' + countPairs + " pairs of number.")
}

findPairsDivisibleBy17();