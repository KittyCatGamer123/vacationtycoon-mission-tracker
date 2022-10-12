let CurrentRank = 1;

var request = new XMLHttpRequest();
request.open("GET", "../../balance/ResortBalance.json", false);
request.send(null)
const BalanceFile = JSON.parse(request.responseText);

request = new XMLHttpRequest();
request.open("GET", "../../balance/RewardsBalance.json", false);
request.send(null)
const RewardsFile = JSON.parse(request.responseText);

function UpdateTable(Rank)
{
    const tbl = document.getElementById("mission_table");
    const tblBody = document.createElement("tbody");

    const TitleEdit = document.getElementById("mission_rank");
    TitleEdit.innerHTML = 'Season Missions <span style="color:#a7a7a7;">(Season ' + Rank + ')</span>';

    const MissionData = BalanceFile.Missions.filter(Missions => Missions.Rank === Rank);

    // i: Column
    // j: Row

    for (let i = 0; i < MissionData.length; i++) 
    {
        const row = document.createElement("tr");
    
        for (let j = 0; j < 3; j++) 
        {
          // Create a <td> element and a text node, make the text
          // node the contents of the <td>, and put the <td> at
          // the end of the table row
          const cell = document.createElement("td");

          // Insert Text Here
          var cellText = document.createTextNode(`Missing Data`);

          if (j == 0) { cellText = document.createTextNode(i + 1); }
          else if (j == 1)
          {
            cellText = document.createTextNode(ReadableTextConvert(MissionData[i]));
          }
          else if (j == 2)
          {
            cellText = document.createTextNode(ScriptedTypeToText(MissionData[i].RewardId));
          }

          cell.appendChild(cellText);
          row.appendChild(cell);
        }
    
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }
    
      // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
}

function ReadableTextConvert(MissionIndex)
{
  var Result = "";

  const ConditionType = MissionIndex.Condition.ConditionType;
  Result += String(ConvertToReadable(ConditionType)) + " ";

  const ConditionID = MissionIndex.Condition.ConditionId;
  if (ConditionID != "any") 
  { 
    const atText = ConditionType == "CustomersSinceSubscription" ? ' at ' : '';
    Result += atText + String(ConvertToReadable(ConditionID)) + " ";
  }

  const Threshold = MissionIndex.Condition.Threshold;
  if (Threshold != -1) 
  { 
    Result += "(" + String(Powers(Threshold)) + ")"; 
  }

  return Result;
}

function ScriptedTypeToText(Input)
{
  var Result = "";

  const ScriptedData = RewardsFile.Rewards.find(Rewards => Rewards.Id === Input);
  const RewardType = ScriptedData.Type;
  var RewardId = ScriptedData.RewardId;
  const RewardAmount = ScriptedData.Value;

  if (RewardType == "Manager") { var ManTrue = "×"; }
  else { var ManTrue = ""; }
  Result = ManTrue + Powers(RewardAmount) + " " + ConvertToReadable(RewardId);

  return Result;
}