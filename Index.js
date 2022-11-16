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