function warnTheSheep(queue) {
    // your code here
    for (let i=0; i< queue.length; i++) {
        if(queue[queue.length-1] === "wolf") {
            return "Pls go away and stop eating my sheep"
        } else if(queue[i] === "wolf") {
            return `Oi! Sheep number ${queue.length - (i+1)}! You are about to be eaten by a wolf!`
        }
    }
}


// Test Function do not edit
function Test(fun, result) {
    console.log(fun === result)
}


// Test assertions
Test(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
Test(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");
Test(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
Test(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");