var workspace = document.getElementById("workspace");
var onevone = document.getElementById("onevone");
var mode = document.getElementById("mode");
var winstate = false;

var winp = document.createElement("p"); 

var reloadbox = document.createElement("button");
reloadbox.appendChild(document.createTextNode("Jugar de nuevo"));
reloadbox.addEventListener("click",function(){
    location.reload();
})

function win(player){
    var wintext= "Gana "+player;
    winstate = true;
    
    winp.appendChild(document.createTextNode(wintext));
    workspace.appendChild(winp);

    var divs = workspace.getElementsByTagName("div");
    for (var n = 0;n <divs.length;n++){
        var buttons = divs[n].getElementsByTagName("button");
        for (var k = 0;k < buttons.length;k++){
            buttons[k].disabled = true;
        }
    }
   
    workspace.appendChild(reloadbox);
}

function gengrid(){
    mode.textContent = "x";
    for (var i = 0; i <3;i++){
        var section = document.createElement("div");
        section.className = "section";
        workspace.appendChild(section);
        for (var j = 0; j <3;j++){
            var button = document.createElement("button");
            button.className = "btngrid";
            var p = document.createElement("p");
            var text = document.createTextNode(".")
            p.appendChild(text);
            button.appendChild(p);
            
            button.addEventListener("click", change)
            section.appendChild(button);
        }
    }
}

onevmac.addEventListener("click",function(){
    onevmac.style.display = "none";
    onevone.style.display = "none";
    gengrid();
})

onevone.addEventListener("click",function(){
    onevmac.style.display = "none";
    onevone.style.display = "none";
    gengrid();
    var divs = workspace.getElementsByTagName("div");
    for (var n = 0;n <divs.length;n++){
        var buttons = divs[n].getElementsByTagName("button");
        for (var k = 0;k < buttons.length;k++){
            buttons[k].addEventListener("click",change)
        }
    }
})

function change(){
    var cells = 0;
    if(mode.textContent == "x"){
        mode.textContent = "o";
        this.innerHTML = "<p>x</p>";
        this.className="x";
    }
    else{
        mode.textContent = "x";
        this.innerHTML= "<p>o</p>";
        this.className="o";
    } 
    this.disabled = true;
  
   var divs = workspace.getElementsByTagName("div");
    
   var btns1 = divs[0].getElementsByTagName("button");
   var btns2 = divs[1].getElementsByTagName("button");
   var btns3 = divs[2].getElementsByTagName("button");

//X
    if (btns1[0].textContent=="x"){
        if (btns1[1].textContent=="x"){
            if (btns1[2].textContent=="x"){
                btns1[0].className="linea";
                btns1[1].className="linea";
                btns1[2].className="linea";
                win("x");
                return;
            }
        }
    }

    if (btns2[0].textContent=="x"){
        if (btns2[1].textContent=="x"){
            if (btns2[2].textContent=="x"){
                btns2[0].className="linea";
                btns2[1].className="linea";
                btns2[2].className="linea";
                win("x");
                return;
            }
        }
    }

    if (btns3[0].textContent=="x"){
        if (btns3[1].textContent=="x"){
            if (btns3[2].textContent=="x"){
                btns3[0].className="linea";
                btns3[1].className="linea";
                btns3[2].className="linea";
                win("x");
                return;
            }
        }
    }

    if (btns1[0].textContent=="x"){
        if (btns2[0].textContent=="x"){
            if (btns3[0].textContent=="x"){
                btns1[0].className="linea";
                btns2[0].className="linea";
                btns3[0].className="linea";
                win("x");
                return;
            }
        }
    }

    if (btns1[1].textContent=="x"){
        if (btns2[1].textContent=="x"){
            if (btns3[1].textContent=="x"){
                btns1[1].className="linea";
                btns2[1].className="linea";
                btns3[1].className="linea";
                win("x");
                return;
            }
        }
    }

    if (btns1[2].textContent=="x"){
        if (btns2[2].textContent=="x"){
            if (btns3[2].textContent=="x"){
                btns1[2].className="linea";
                btns2[2].className="linea";
                btns3[2].className="linea";
                win("x");
                return;
            }
        }
    }

    if (btns1[0].textContent=="x"){
        if (btns2[1].textContent=="x"){
            if (btns3[2].textContent=="x"){
                btns1[0].className="linea";
                btns2[1].className="linea";
                btns3[2].className="linea";
                win("x");
                return;
            }
        }
    }

    if (btns1[2].textContent=="x"){
        if (btns2[1].textContent=="x"){
            if (btns3[0].textContent=="x"){
                btns1[2].className="linea";
                btns2[1].className="linea";
                btns3[0].className="linea";
                win("x");
                return;
            }
        }
    }
//O
    if (btns1[0].textContent=="o"){
        if (btns1[1].textContent=="o"){
            if (btns1[2].textContent=="o"){
                btns1[0].className="linea";
                btns1[1].className="linea";
                btns1[2].className="linea";
                win("o");
                return;
            }
        }
    }

    if (btns2[0].textContent=="o"){
        if (btns2[1].textContent=="o"){
            if (btns2[2].textContent=="o"){
                btns2[0].className="linea";
                btns2[1].className="linea";
                btns2[2].className="linea";
                win("o");
                return;
            }
        }
    }

    if (btns3[0].textContent=="o"){
        if (btns3[1].textContent=="o"){
            if (btns3[2].textContent=="o"){
                btns3[0].className="linea";
                btns3[1].className="linea";
                btns3[2].className="linea";
                win("o");
                return;
            }
        }
    }

    if (btns1[0].textContent=="o"){
        if (btns2[0].textContent=="o"){
            if (btns3[0].textContent=="o"){
                btns1[0].className="linea";
                btns2[0].className="linea";
                btns3[0].className="linea";
                win("o");
                return;
            }
        }
    }

    if (btns1[1].textContent=="o"){
        if (btns2[1].textContent=="o"){
            if (btns3[1].textContent=="o"){
                btns1[1].className="linea";
                btns2[1].className="linea";
                btns3[1].className="linea";
                win("o");
                return;
            }
        }
    }

    if (btns1[2].textContent=="o"){
        if (btns2[2].textContent=="o"){
            if (btns3[2].textContent=="o"){
                btns1[2].className="linea";
                btns2[2].className="linea";
                btns3[2].className="linea";
                win("o");
                return;
            }
        }
    }

    if (btns1[0].textContent=="o"){
        if (btns2[1].textContent=="o"){
            if (btns3[2].textContent=="o"){
                btns1[0].className="linea";
                btns2[1].className="linea";
                btns3[2].className="linea";
                win("o");
                return;
            }
        }
    }

    if (btns1[2].textContent=="o"){
        if (btns2[1].textContent=="o"){
            if (btns3[0].textContent=="o"){
                btns1[2].className="linea";
                btns2[1].className="linea";
                btns3[0].className="linea";
                win("o");
                return;
            }
        }
    }

    for (var n = 0;n <divs.length;n++){
        var buttons = divs[n].getElementsByTagName("button");
        for (var k = 0;k < buttons.length;k++){
            if(buttons[k].textContent!="."){
                cells++;
            }
        }
    }

    if (cells==9 && winstate==false)
    {
        winp.appendChild(document.createTextNode("Empate"));
        workspace.appendChild(winp);
        workspace.appendChild(reloadbox);
    }
}