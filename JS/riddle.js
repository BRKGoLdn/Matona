let score = 0

function yap(){
    document.querySelector('#wrong').addEventListener('click', function(){
    document.getElementById("wrong").style.backgroundColor = "red";
    document.getElementById('correct').style.backgroundColor='lightgreen'
    document.getElementById("wrong2").style.backgroundColor = "#EEA47FFF";
    document.getElementById("wrong3").style.backgroundColor = "#EEA47FFF";
    })
    document.querySelector('#wrong2').addEventListener('click', function(){
        document.getElementById("wrong").style.backgroundColor = "#EEA47FFF";
        document.getElementById('correct').style.backgroundColor='lightgreen'
        document.getElementById("wrong2").style.backgroundColor = "red";
        document.getElementById("wrong3").style.backgroundColor = "#EEA47FFF";
    })
    document.querySelector('#wrong3').addEventListener('click', function(){
        document.getElementById("wrong").style.backgroundColor = "#EEA47FFF";
        document.getElementById('correct').style.backgroundColor='lightgreen'
        document.getElementById("wrong2").style.backgroundColor = "#EEA47FFF";
        document.getElementById("wrong3").style.backgroundColor = "red";
    })
    document.querySelector('#correct').addEventListener('click', function(){
        document.getElementById("wrong").style.backgroundColor = "#EEA47FFF";
        document.getElementById('correct').style.backgroundColor='lightgreen'
        document.getElementById("wrong2").style.backgroundColor = "#EEA47FFF";
        document.getElementById("wrong3").style.backgroundColor = "#EEA47FFF";
        score++
    })
    
            

}
function yap2(){
    document.querySelector('#y').addEventListener('click', function(){
    document.getElementById("y").style.backgroundColor = "red";
    document.getElementById('c').style.backgroundColor='lightgreen'
    document.getElementById("y2").style.backgroundColor = "#EEA47FFF";
    document.getElementById("y3").style.backgroundColor = "#EEA47FFF";
    })
    document.querySelector('#y2').addEventListener('click', function(){
        document.getElementById("y").style.backgroundColor = "#EEA47FFF";
        document.getElementById('c').style.backgroundColor='lightgreen'
        document.getElementById("y2").style.backgroundColor = "red";
        document.getElementById("y3").style.backgroundColor = "#EEA47FFF";
    })
    document.querySelector('#y3').addEventListener('click', function(){
        document.getElementById("y").style.backgroundColor = "#EEA47FFF";
        document.getElementById('c').style.backgroundColor='lightgreen'
        document.getElementById("y2").style.backgroundColor = "#EEA47FFF";
        document.getElementById("y3").style.backgroundColor = "red";
    })
    document.querySelector('#c').addEventListener('click', function(){
        document.getElementById("y").style.backgroundColor = "#EEA47FFF";
        document.getElementById('c').style.backgroundColor='lightgreen'
        document.getElementById("y2").style.backgroundColor = "#EEA47FFF";
        document.getElementById("y3").style.backgroundColor = "#EEA47FFF";
        score++
    })
    
            

}
function yap3(){
    document.querySelector('#f1').addEventListener('click', function(){
    document.getElementById("f1").style.backgroundColor = "red";
    document.getElementById('t').style.backgroundColor='lightgreen'
    document.getElementById("f2").style.backgroundColor = "#EEA47FFF";
    document.getElementById("f4").style.backgroundColor = "#EEA47FFF";
    })
    document.querySelector('#f2').addEventListener('click', function(){
        document.getElementById("f1").style.backgroundColor = "#EEA47FFF";
        document.getElementById('t').style.backgroundColor='lightgreen'
        document.getElementById("f2").style.backgroundColor = "red";
        document.getElementById("f4").style.backgroundColor = "#EEA47FFF";
    })
    document.querySelector('#f4').addEventListener('click', function(){
        document.getElementById("f1").style.backgroundColor = "#EEA47FFF";
        document.getElementById('t').style.backgroundColor='lightgreen'
        document.getElementById("f2").style.backgroundColor = "#EEA47FFF";
        document.getElementById("f4").style.backgroundColor = "red";
    })
    document.querySelector('#t').addEventListener('click', function(){
        document.getElementById("f1").style.backgroundColor = "#EEA47FFF";
        document.getElementById('t').style.backgroundColor='lightgreen'
        document.getElementById("f2").style.backgroundColor = "#EEA47FFF";
        document.getElementById("f4").style.backgroundColor = "#EEA47FFF";
        score++
    })
    
            

}

function yap4(){
    document.querySelector('#ff').addEventListener('click', function(){
    document.getElementById("ff").style.backgroundColor = "red";
    document.getElementById('cc').style.backgroundColor='lightgreen'
    document.getElementById("ff2").style.backgroundColor = "#EEA47FFF";
    document.getElementById("ff3").style.backgroundColor = "#EEA47FFF";
    })
    document.querySelector('#ff2').addEventListener('click', function(){
        document.getElementById("ff").style.backgroundColor = "#EEA47FFF";
        document.getElementById('cc').style.backgroundColor='lightgreen'
        document.getElementById("ff2").style.backgroundColor = "red";
        document.getElementById("ff3").style.backgroundColor = "#EEA47FFF";
    })
    document.querySelector('#ff3').addEventListener('click', function(){
        document.getElementById("ff").style.backgroundColor = "#EEA47FFF";
        document.getElementById('cc').style.backgroundColor='lightgreen'
        document.getElementById("ff2").style.backgroundColor = "#EEA47FFF";
        document.getElementById("ff3").style.backgroundColor = "red";
    })
    document.querySelector('#cc').addEventListener('click', function(){
        document.getElementById("ff").style.backgroundColor = "#EEA47FFF";
        document.getElementById('cc').style.backgroundColor='lightgreen'
        document.getElementById("ff2").style.backgroundColor = "#EEA47FFF";
        document.getElementById("ff3").style.backgroundColor = "#EEA47FFF";
        score++
    })
    
            

}


function total(){
    
    let answer = "Your score is: "+ (score/4)*100+"%"
    document.getElementById("score").innerHTML= answer
    console.log(score);
}