var request = new XMLHttpRequest();
request.open("GET", "../../balance/ResortBalance.json", false);
request.send(null)
const BalanceFile = JSON.parse(request.responseText);

request = new XMLHttpRequest();
request.open("GET", "../../balance/CommonBalance.json", false);
request.send(null)
const RewardsFile = JSON.parse(request.responseText);

const MAXRANK = BalanceFile.MiscBalance.CurrentMaxRank;
let CurrentRank = 1;

function NewMenu(Text)
{
    console.clear();
    const DocBody = document.body;
    while (DocBody.children.length > 1) DocBody.removeChild(DocBody.lastChild);

    const MenuTitle = document.createElement("h2")
    MenuTitle.innerText = String(Text);
    DocBody.appendChild(MenuTitle);
}

function TimeToText(Time)
{
    let levels = 
    [
        [Math.floor(seconds / 31536000), 'y'],
        [Math.floor((seconds % 31536000) / 86400), 'd'],
        [Math.floor(((seconds % 31536000) % 86400) / 3600), 'h'],
        [Math.floor((((seconds % 31536000) % 86400) % 3600) / 60), 'm'],
        [(((seconds % 31536000) % 86400) % 3600) % 60, 's'],
    ];
    let returntext = '';
    
    for (let i = 0, max = levels.length; i < max; i++) {
        if ( levels[i][0] === 0 ) continue;
        returntext += ' ' + levels[i][0] + ' ' + (levels[i][0] === 1 ? levels[i][1].substr(0, levels[i][1].length-1): levels[i][1]);
    };
    return returntext.trim();
}
