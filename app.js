let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');
let img6 = document.getElementById('img6');
let img7 = document.getElementById('img7');
let img8 = document.getElementById('img8');
let img9 = document.getElementById('img9');
let img10 = document.getElementById('img10');
let img11 = document.getElementById('img11');
let img12 = document.getElementById('img12');
let img13 = document.getElementById('img13');
let img14 = document.getElementById('img14');
let img15 = document.getElementById('img15');
let img16 = document.getElementById('img16');

img1.onclick = f1
img2.onclick = f1
img3.onclick = f1
img4.onclick = f1
img5.onclick = f1
img6.onclick = f1
img7.onclick = f1
img8.onclick = f1
img9.onclick = f1
img10.onclick = f1
img11.onclick = f1
img12.onclick = f1
img13.onclick = f1
img14.onclick = f1
img15.onclick = f1
img16.onclick = f1

let arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
let pic = ['k.jpg', 'car.jpg', 'cat.jpg', 'dog.jpg', 'horse.jpg', 'money.jpg', 'planet.jpg', 'tiger.jpg', 'wolf.jpg']

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(arr);
arr.unshift(null);
console.log(arr);

let a = 0;
let i = 0;

function f1() {
    i = this.value
    this.src = pic[arr[i]];
    let b = arr[i]
    if (a == 0) {
        a = arr[i]
        return
    }
    if (a == b) {
        a = 0
        return
    }
    if (a != b) {
        window.setTimeout(() => {
            this.src = pic[0]
        },1000)
        return
    }
}