var currentTab = 0;
var limoncello = 0;
var limonade = 0;
var totaal = 0;
var email;
var naam;
var calculated = false;


function showTab() {
    if (currentTab === 0) {
        document.getElementById("tab0").style.display = "block";
        document.getElementById("tab1").style.display = "none";
        document.getElementById("tab2").style.display = "none";
        document.getElementById("tab3").style.display = "none";
        document.getElementById("tab4").style.display = "none";
        document.getElementById("vorige").style.display = "none";
        document.getElementById("volgende").style.display = "block";
        document.getElementById("verzenden").style.display = "none";
    } else if (currentTab === 1) {
        document.getElementById("tab0").style.display = "none";
        document.getElementById("tab1").style.display = "block";
        document.getElementById("tab2").style.display = "none";
        document.getElementById("tab3").style.display = "none";
        document.getElementById("tab4").style.display = "none";
        document.getElementById("vorige").style.display = "block";
        document.getElementById("volgende").style.display = "block";
        document.getElementById("verzenden").style.display = "none";
    } else if (currentTab === 2) {
        document.getElementById("tab0").style.display = "none";
        document.getElementById("tab1").style.display = "none";
        document.getElementById("tab2").style.display = "block";
        document.getElementById("tab3").style.display = "none";
        document.getElementById("tab4").style.display = "none";
        document.getElementById("vorige").style.display = "block";
        document.getElementById("volgende").style.display = "block";
        document.getElementById("verzenden").style.display = "none";
    } else if (currentTab === 3) {
        document.getElementById("tab0").style.display = "none";
        document.getElementById("tab1").style.display = "none";
        document.getElementById("tab2").style.display = "none";
        document.getElementById("tab3").style.display = "block";
        document.getElementById("tab4").style.display = "none";
        document.getElementById("vorige").style.display = "block";
        document.getElementById("volgende").style.display = "block";
        document.getElementById("verzenden").style.display = "none";
    } else if (currentTab === 10) {
        calculate();
        document.getElementById("tab0").style.display = "none";
        document.getElementById("tab1").style.display = "none";
        document.getElementById("tab2").style.display = "none";
        document.getElementById("tab3").style.display = "block";
        document.getElementById("tab4").style.display = "none";
        document.getElementById("vorige").style.display = "block";
        document.getElementById("volgende").style.display = "none";
        document.getElementById("verzenden").style.display = "block";
        document.getElementById("verzendenButton").style.display = "block";
    }
}

function submit() {
    document.getElementById("tab0").style.display = "none";
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab2").style.display = "none";
    document.getElementById("tab3").style.display = "none";
    document.getElementById("tab4").style.display = "block";
    document.getElementById("vorige").style.display = "none";
    document.getElementById("volgende").style.display = "none";
    document.getElementById("verzenden").style.display = "none";
    var info = document.getElementById("tab4");
    var tekst = document.createElement('p');
    tekst = document.createTextNode('De betalingsdetails werden verzonden naar het opgegeven emailadres. Het te betalen bedrag (€' + totaal + ') kan gestort worden op BE80 0689 0960 3177 op naam van VZW BBC Campinia, BIC: GKCCBEBB.')
    info.appendChild(tekst);
}


function calculate() {
    calculated = true;

    if (document.getElementById("limoncelloList").value === "5") {
        limoncello = 50;
    } else if (document.getElementById("limoncelloList").value === "4") {
        limoncello = 40;
    } else if (document.getElementById("limoncelloList").value === "3") {
        limoncello = 30;
    } else if (document.getElementById("limoncelloList").value === "2") {
        limoncello = 20;
    } else if (document.getElementById("limoncelloList").value === "1") {
        limoncello = 10;
    }
    ;
    if (document.getElementById("limonadeList").value === "5") {
        limonade = 15;
    } else if (document.getElementById("limonadeList").value === "4") {
        limonade = 12;
    } else if (document.getElementById("limonadeList").value === "3") {
        limonade = 9;
    } else if (document.getElementById("limonadeList").value === "2") {
        limonade = 6;
    } else if (document.getElementById("limonadeList").value === "1") {
        limonade = 3;
    }
    ;
    totaal = limoncello + limonade;
    var overzicht = document.createElement('h1');
    overzicht.classList.add("overzicht");
    overzicht.appendChild(document.createTextNode('Overzicht bestelling'));
    var limoncelloOverzicht = document.createElement('p');
    limoncelloOverzicht = document.createTextNode('Totaal limoncello: €' + limoncello + '\r');
    var limonadeOverzicht = document.createElement('p');
    limonadeOverzicht = document.createTextNode('Totaal limonade: €' + limonade);
    var eindtotaal = document.createElement('p');
    eindtotaal = document.createTextNode('Totaal te betalen: €' + totaal);
    var br = document.createElement("br");
    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var br3 = document.createElement("br");
    var div = document.createElement("div");
    div.classList.add("div");
    var tab = document.getElementById('tab3');
    tab.appendChild(overzicht);
    tab.appendChild(br);
    tab.appendChild(br1);
    tab.appendChild(limoncelloOverzicht);
    tab.appendChild(br2);
    tab.appendChild(limonadeOverzicht);
    tab.appendChild(br3);
    tab.appendChild(div);
    tab.appendChild(eindtotaal);
    email = document.getElementById("email").value;
    naam = document.getElementById("voornaam").value + " " + document.getElementById("achternaam").value;
}



function nextTab() {
    if (document.getElementById("afhalen").checked === true) {
        currentTab = 10;
    } else if (currentTab === 2) {
        currentTab = 10;
    } else {
        currentTab += 1;
    }

    showTab();
}


function previousTab() {
    
    if (calculated) {
        document.getElementById('tab3').innerHTML = '';
    }

    if (currentTab === 10) {
        currentTab = 1;
    } else {
        currentTab -= 1;
    }
    showTab();
}

function sendEmail() {
    console.log("send mail...");
    Email.send({
        Host: "smtp.gmail.com",
        Username: "limoncellocampinia@gmail.com",
        Password: "CampiniLimon8",
        To: email,
        From: "limoncellocampinia@gmail.com",
        Subject: "Bevestiging bestelling limoncello",
        Body: "Bedankt voor je bestelling!\n\
\n\
            Het te betalen bedrag (€" + totaal + ") kan gestort worden op BE80 0689 0960 3177 op naam van VZW BBC Campinia met als mededeling 'Limoncello " + naam + "', BIC: GKCCBEBB."
    }).then(
            
    );
}
