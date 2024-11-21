console.log(document);

function testTheDom(){
    console.log("inside test the dom");
    var nodes=document.getElementsByTagName("li");
    console.log(nodes);
    for(let node of nodes){
        console.log(node.textContent);
    }

    var checkingNode=document.getElementById("checking");
    console.log(checkingNode.textContent);
    //checkingNode.textContent="Changed!";
    var balanca=parseInt(checkingNode.textContent);
    balance+=100;
    checkingNode.textContent=balance;
    
}

function depositChecking(){
    var td = document.getElementById('checking');
    checking = parseInt(td.textContent,10);
    checking += 100;
    td.textContent=checking;
}

function depositSavings(){
    var td = document.getElementById('savings');
    var savings = td.textContent;
    savings = parseInt(savings,10);
    if(savings == 0) {
        var title = document.getElementById('bankAccountTitle');
        title.textContent="Bank Account";
    }
    savings += 100;
    td.textContent=savings;
}


function emptySavings(){
    var td = document.getElementById("savings");
    td.textContent = 0;
    var title = document.getElementById('bankAccountTitle');
    title.textContent="ALERT: Savings Empty";
}
