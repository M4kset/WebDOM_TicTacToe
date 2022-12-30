var workspace = document.getElementById("workspace");
var onevmac = document.getElementById("onevmac");
var mode = document.getElementById("mode");


function selectcell(){
    console.clear();
    var botcells = 0;
    var divs = workspace.getElementsByTagName("div");

    var btns1 = divs[0].getElementsByTagName("button");
    var btns2 = divs[1].getElementsByTagName("button");
    var btns3 = divs[2].getElementsByTagName("button");

    var row;
    var button;

    while(true){
        botcells= 0;
        row = Math.floor(Math.random()*3);
        button = Math.floor(Math.random()*3);
        
        //console.log(row);
        if(row==0){
            //console.log(btns2[button].textContent);
            if(btns1[button].textContent=="."){
                btns1[button].click()
                break;
            }
        }
        else  if(row==1){
            //console.log(btns2[button].textContent);
                if(btns2[button].textContent=="."){
                    btns2[button].click()
                    break;
                }
            }
        else  if(row==2){
            //console.log(btns3[button].textContent);
            if(btns3[button].textContent=="."){
                btns3[button].click()
                break;
            }
        }
       
        if (btns1[0].textContent!="."){
            if (btns1[1].textContent!="."){
                if (btns1[2].textContent!="."){
                    if (btns2[0].textContent!="."){
                        if (btns2[1].textContent!="."){
                            if (btns2[2].textContent!="."){
                                if (btns3[0].textContent!="."){
                                    if (btns3[1].textContent!="."){
                                        if (btns3[2].textContent!="."){
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    
    }
}

function CheckGrid(){
    var turn = mode.textContent
    if (turn == "o"){
        selectcell();
    }
}

onevmac.addEventListener("click",function(){
    onevmac.style.display = "none";
    onevone.style.display = "none";
    var divs = workspace.getElementsByTagName("div");
    for (var n = 0;n <divs.length;n++){
        var buttons = divs[n].getElementsByTagName("button");
        for (var k = 0;k < buttons.length;k++){
            buttons[k].addEventListener("click", CheckGrid)
        }
    }
})