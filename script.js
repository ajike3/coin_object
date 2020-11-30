let coin = {
    state: 0,
    flip: function() {
        let this.state = Math.random();
        if (this.state >= 0.5) {
            this.state = 1;
        }
        else {this.state = 0;
        }
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
           //if state is 0  //return tails
           //else state is 1 //return heads
            if (this.state == 0) {
                return "Tails"
            }
            else {
                this.state == 1
                return "Heads"
    }
    toHTML: function() {
        let image = document.createElement('img');
        image.src = "./images/head.jpg"
        
        console.log(coin.toHTML())
        let container = document.createElement('div');

        container.append(coin.toHTML ());
        //if state is 0
            //set image to tails
           //else state is 1
            //set image to heads
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
},
let container = document.createElement('div');
container.append(coin.toHTML());
document.body.append(coin.toHTML())
function display20Flips() {
/*uses a loop to flip the coin 20 times. toString */
}

function display20Images() {
/* use a loop to flip the coin 20 times.display the result of each flip as an ING
toHTML*/
}