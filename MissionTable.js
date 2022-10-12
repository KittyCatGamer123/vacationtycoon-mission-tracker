const MAXRANK = 50; // UPDATE THIS EVERY UPDATE MANUALLY!!
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
  if (isNaN(Rank)) { Rank = 1; }
  else { Rank = Math.max(Rank, 1); Rank = Math.min(Rank, MAXRANK); }
  
  const tbl = document.getElementById("mission_table");
  const tblBody = document.createElement("tbody");
  while (tbl.children.length > 1) tbl.removeChild(tbl.lastChild);

  const MissionData = BalanceFile.Missions.filter(Missions => Missions.Rank === Rank);

  const TitleEdit = document.getElementById("mission_rank");
  TitleEdit.innerHTML = 'Season Missions <span style="color:#a7a7a7;">(Season ' + Rank + ')</span>';
  CurrentRank = Rank;

  // i: Column
  // j: Row

  for (let i = 0; i < MissionData.length; i++) 
  {
    const row = document.createElement("tr");
    
    for (let j = 0; j < 3; j++) 
    {
      const cell = document.createElement("td");
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

    tblBody.appendChild(row);
  }
    
  tbl.appendChild(tblBody);
  document.body.appendChild(tbl);
}

function ReadableTextConvert(MissionIndex)
{
  var Result = "";

  const ConditionType = MissionIndex.Condition.ConditionType;
  Result += String(ConvertToReadable(ConditionType)) + " ";

  const ConditionID = MissionIndex.Condition.ConditionId;
  if (ConditionID != "any" && ConditionID != "all")
  { 
    const atText = ConditionType == "CustomersSinceSubscription" ? ' at ' : '';
    Result += atText + String(ConvertToReadable(ConditionID)) + " ";
  }
  else if (ConditionID == "all") { Result += "All Businesses "; }
  else if (ConditionType == "ConsumablesUsedSinceSubscription" && ConditionID == "any") { Result += "Any Boost "; }
  else if (ConditionType == "ManagersUpgradedSinceSubscription" && ConditionID == "any") 
  { Result += "Managers "; }
  else if (ConditionType == "ManagersUpgradedSinceSubscription" && ConditionID != "any") 
  { Result += String(ConvertToReadable(ConditionID)) + " "; }

  const Threshold = MissionIndex.Condition.Threshold;
  if (Threshold != -1 && ConditionType != "ManagerRankReached") 
  { 
    Result += "(" + String(Powers(Threshold)) + ")"; 
  }
  else if (ConditionType == "ManagerRankReached")
  {
    Result += "to Level " + String(Powers(Threshold)); 
  }

  console.log(ConditionType, ConditionID, Threshold);
  return Result;
}

function ScriptedTypeToText(Input)
{
  var Result = "";

  const ScriptedData = RewardsFile.Rewards.find(Rewards => Rewards.Id === Input);
  const RewardType = ScriptedData.Type;
  const RewardId = ScriptedData.RewardId;
  const RewardAmount = ScriptedData.Value;

  if (RewardType != "Gacha")
  {
    if (RewardType == "Manager") { var ManTrue = "×"; }
    else { var ManTrue = ""; }
    Result = ManTrue + Powers(RewardAmount) + " " + ConvertToReadable(RewardId);
  }
  else
  {
    Result = GachaReader(RewardId);
  }

  return Result;
}

function AdvanceToRank()
{
  let ToRank = prompt("Please enter the Season to navigate to.");
  console.clear();
  UpdateTable(ToRank);
}