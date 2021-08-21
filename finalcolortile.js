timer();
const col = ['violet', 'pink', 'orange', 'yellow', 'green', 'brown'];

function shuffle() {
    var gitem = document.querySelectorAll('.item');
    var garray = [];
    function gcolor() {
        for (let i = 0; i < gitem.length; ++i) {
            let a = Math.random() * col.length;
            let j = Math.floor(a);
            gitem[i].style.backgroundColor = col[j];
            garray.push(col[j]);
        }
        document.getElementById("empty").style.backgroundColor = "rgb(149, 202, 153)";
        // })
    }

    gcolor();
    tcolor();

    function tcolor() {
        var tarray = subset(garray, 9);

        function subset(arr, n) {
            var res = new Array(n);
            var len = arr.length;
            var taken = new Array(len);
            while (n--) {
                var x = Math.floor(Math.random() * len);
                res[n] = arr[x in taken ? taken[x] : x];
                taken[x] = --len in taken ? taken[len] : len;
            }
            return res;
        }
        var titem = document.querySelectorAll('.box');
        for (let i = 0; i < titem.length; ++i) {
            titem[i].style.backgroundColor = tarray[i];
        }
    }
}
shuffle();
var ob2;
ob2 = document.getElementById('empty');
addEventListener('click', function (ob1) {
    var ob = ob1.target;
    console.log(ob);
    var a = ob.id;
    ob1 = document.getElementById(a);

    function rc() {

        var boxes = document.getElementsByClassName('box');
        var tar = document.querySelectorAll('.it');

        let grid = [[tar[0], tar[1], tar[2], tar[3], tar[4]],
        [tar[5], tar[6], tar[7], tar[8], tar[9]],
        [tar[10], tar[11], tar[12], tar[13], tar[14]],
        [tar[15], tar[16], tar[17], tar[18], tar[19]],
        [tar[20], tar[21], tar[22], tar[23], tar[24]]
        ]

        for (let i = 0; i < 5; ++i) {
            for (let j = 0; j < 5; ++j) {
                if (grid[i][j] === ob1) {
                    x = [i, j];
                }
            }
        }

        var chk = ob2;
        for (let i = 0; i < 5; ++i) {
            for (let j = 0; j < 5; ++j) {
                if (grid[i][j] === chk) {
                    y = [i, j];
                }
            }
        }
    }

    var coln = rc();
    var row = x[0] + 1;
    var col = x[1] + 1;
    var erow = y[0] + 1;
    var ecol = y[1] + 1;

    adjacent();

    function adjacent() {
        if ((row === erow && (col === ecol + 1 || col === ecol - 1)) || (col === ecol && (row === erow + 1 || row === erow - 1))) {
            swap(ob1, ob2);
        }
    }

    //swap
    function swap(ob1, ob2) {
        var temp = ob1.style.backgroundColor;
        ob1.style.backgroundColor = ob2.style.backgroundColor;
        ob2.style.backgroundColor = temp;
        iscomplete();
    }

    var blocks = document.getElementsByClassName("it");
    Array.from(blocks).forEach(function (e) {

        if (e.style.backgroundColor == "rgb(149, 202, 153)") {
            ob2 = e;
        }
    });

});

// timer
function timer() {
    mytimer = setInterval(clock, 1000);
    var c = 0;
    function clock() {
        ++c;
        sec.innerHTML = pad(c);
        function pad(val) {
            var valstr = val + "";
            if (valstr.length < 2) {
                return "Time: 0" + valstr;
            }
            else {
                return "Time: " + valstr;
            }
        }
    }
}

let moves = 0;
function iscomplete() {
    var bins = document.getElementsByClassName('box');
    var sel = document.querySelectorAll('.it');
    moves++;

    document.querySelector('.move').textContent = 'Move: ' + moves;
    if (bins[0].style.backgroundColor === sel[6].style.backgroundColor &&
        bins[1].style.backgroundColor === sel[7].style.backgroundColor &&
        bins[2].style.backgroundColor === sel[8].style.backgroundColor &&
        bins[3].style.backgroundColor === sel[11].style.backgroundColor &&
        bins[4].style.backgroundColor === sel[12].style.backgroundColor &&
        bins[5].style.backgroundColor === sel[13].style.backgroundColor &&
        bins[6].style.backgroundColor === sel[16].style.backgroundColor &&
        bins[7].style.backgroundColor === sel[17].style.backgroundColor &&
        bins[8].style.backgroundColor === sel[18].style.backgroundColor) {
   
            //declare win
            document.getElementById('score').textContent += moves;
        
    }
}