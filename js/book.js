function ten() {
    var name = document.getElementById('namemember').value;
    if (name == '') {
        document.getElementById('errorname').style.display = 'inline'
    } else {
        document.getElementById('errorname').style.display = 'none'

    }
}

function tel() {

    var tel = document.getElementById('call').value;
    if (tel == '') {
        document.getElementById('errortel').style.display = 'inline'
    } else {
        document.getElementById('errortel').style.display = 'none'
    }
}

function set() {
    var set = document.getElementById('timeset').value;
    if (set == "") {
        document.getElementById('errorset').style.display = 'inline'
    } else {
        document.getElementById('errorset').style.display = 'none'
    }
}

function zone() {
    var zone = document.getElementById('timezone').value
    if (zone == "") {
        document.getElementById('errorzone2').style.display = 'inline'
    } else {
        document.getElementById('errorzone2').style.display = 'none'

        if (Number(zone) <= 0) {
            document.getElementById('errorzone').style.display = 'inline'
        } else {
            document.getElementById('errorzone').style.display = 'none'
        }
    }
}

function members() {
    var mem = document.getElementById('member').value;
    if (mem == "") {
        document.getElementById('errormem').style.display = 'inline'
    } else {
        document.getElementById('errormem').style.display = 'none'
    }
}

function teamnum() {
    var team = document.getElementById('team').value;
    console.log(team);
    if (team == "") {
        document.getElementById('errorteam').style.display = 'inline'
    } else {
        document.getElementById('errorteam').style.display = 'none'
    }
}

function sum() {
    var gia;
    var main = document.getElementById('timeset').value;
    switch (main) {
        case "1":
            gia = 300000;
            break;
        case "2":
            gia = 600000;
            break;
        case "3":
            gia = 800000;
            break;
        case "4":
            gia = 400000;
            break;
    }
    var end = document.getElementById("sumsend")
    var sum;
    var team = document.getElementById("team").value;
    console.log(team)
    var time = document.getElementById("timezone").value;
    sum = gia * Number(time);
    if (document.getElementById("chose2").checked) {
        sum = sum + team * 300000
    }
    if (document.getElementById("chose3").checked) {
        sum = sum + time * 200000
    }
    end.innerHTML = sum;

    return;
}