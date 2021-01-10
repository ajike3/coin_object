let coin = {
    state: 0,
    flip: function Side() {
        this.state = Math.random();
            if (this.state >= 0.5) {
            this.state = 1
        }
            else {this.state = 0;
        }
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    }, 
    toString: function ide() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
           //if state is 0  //return tails
           //else state is 1 //return heads
        if (this.state == 0) {
            return 'Tails'
            }
        else {
            this.state == 1;
            return 'Heads';
            }
    },

    toHTML: function image() {
        let image = document.createElement('img');
        if (this.state == 0){
           image.src = "./images/tails.jpg"
        }
        else if (this.state == 1) {
            image.src = "./images/head.jpg"  
        }      

  
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
}
display20flips();

function display20flips() {
    function display20Flips() {
        for (let index = 0; index < 20; index++) {
          coin.flip();
          let string = coin.toString();
          document.body.append(string);
        } 
    }

}


function display20images() {
    for (let index = 0; index < 20; index++) {
        coin.flip()
        let image = coin.toHTML();
        document.body.append(image);

    }
}
console.log (coin.toString());

console.log (coin.toHTML());

    let container = document.createElement('div');
    container.append(coin.toHTML());
    document.body.append(container);
