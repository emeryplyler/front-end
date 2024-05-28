/**
 * Creating js objects based on real-life things
 */

const bird = {
    name: "Fred",
    colors: ("green", "blue"),
    limbs: 4,
    tail: true,
    age: 2,
    rename: function (newName) {
        this.name = newName;
        console.info("Renamed");
    },
};

const janeBluebird = {
    name: "Jane",
    colors: ("blue", "orange", "gray"),
    berryEater: true,
    smoothies: 16,
};

const birdsList = {
    jane: janeBluebird,
    knownBirds: 1,
};
