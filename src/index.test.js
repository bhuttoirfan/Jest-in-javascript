const getFirstPlayer = require('./index')

let player1 = {
    name: "Amit",
    score: 20,
}

let player2 = {
    name: "Amit",
    score: 20,
    desc: "Healthy"
}

let player3 = {
    name: "Amit",
    score: 20,
}

test("Testing player 1", () => {
    expect(getFirstPlayer(player1,player2)).toEqual(player1);
})

test("Testing player 1 identity with player 2", () => {
    expect(getFirstPlayer(player1,player2)).not.toBe(player3);
})

test("Testing player 1 features with player 2", () => {
    expect(getFirstPlayer(player1,player2)).not.toEqual(player2);
})

test("Testing player 1 features with player 3", () => {
    // Features are same (p1 and p3)
    expect(getFirstPlayer(player1,player2)).not.toEqual(player3);
})
