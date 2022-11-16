function MenuSeasons()
{
  NewMenu("Seasons");
  
  const TitleSeasonFeatures = document.createElement("h2");
  TitleSeasonFeatures.setAttribute("id", "mission_rank");
  TitleSeasonFeatures.innerHTML = "Season Features <span style='color:#a7a7a7;'>(Season 1)</span>";
  document.body.append(TitleSeasonFeatures)
  
  const SeasonAdvancePrev = document.createElement("button");
  SeasonAdvancePrev.setAttribute("class", "season_advance");
  SeasonAdvancePrev.setAttribute("onclick", "console.clear(); UpdateTable(CurrentRank - 1);");
  SeasonAdvancePrev.innerHTML = "Previous Season";
  document.body.append(SeasonAdvancePrev)

  const SeasonAdvanceSelect = document.createElement("button");
  SeasonAdvanceSelect.setAttribute("class", "season_advance");
  SeasonAdvanceSelect.setAttribute("onclick", "AdvanceToRank();");
  SeasonAdvanceSelect.innerHTML = "Advance to Season #";
  document.body.append(SeasonAdvanceSelect)

  const SeasonAdvanceNext = document.createElement("button");
  SeasonAdvanceNext.setAttribute("class", "season_advance");
  SeasonAdvanceNext.setAttribute("onclick", "console.clear(); UpdateTable(CurrentRank + 1);");
  SeasonAdvanceNext.innerHTML = "Next Season";
  document.body.append(SeasonAdvanceNext)

  const BusinessTableElement = document.createElement("table");
  BusinessTableElement.setAttribute("id", "BusinessTable");
  const BuisnessTableTitles = ["Business", "Opening Cost", "Primary Manager", "Kiosk Manager", "Max Level"];

  const tr = document.createElement("tr");
  for (let i = 0; i < 5; i++)
  {
    const row = document.createElement("th");
    let cellText = document.createTextNode(BuisnessTableTitles[i]);
    row.appendChild(cellText);
    tr.appendChild(row);
  }
  BusinessTableElement.appendChild(tr);
  document.body.appendChild(BusinessTableElement)
  UpdateBusinessTable(1);

  const MissionTableElement = document.createElement("table");
  MissionTableElement.setAttribute("id", "mission_table");
  const MissionTableTitles = ["#", "Mission Objective", "Mission Reward"];

  const missiontr = document.createElement("tr");
  for (let i = 0; i < 3; i++)
  {
    const row = document.createElement("th");
    let cellText = document.createTextNode(MissionTableTitles[i]);
    row.appendChild(cellText);
    missiontr.appendChild(row);
  }
  MissionTableElement.appendChild(missiontr);
  document.body.appendChild(MissionTableElement)
  UpdateTable(1); 
}

function UpdateTable(Rank)
{
  if (isNaN(Rank)) { Rank = 1; }
  else { Rank = Math.max(Rank, 1); Rank = Math.min(Rank, MAXRANK); }
  
  const tbl = document.getElementById("mission_table");
  const tblBody = document.createElement("tbody");
  while (tbl.children.length > 1) tbl.removeChild(tbl.lastChild);

  const MissionData = OrderRankData(Rank);
  console.log(MissionData)
  const MissionCount = MissionData.length;

  document.getElementById("mission_rank").innerHTML = 'Season Features <span style="color:#a7a7a7;">(Season ' + Rank + ')</span>';
  UpdateBusinessTable(Rank);
  CurrentRank = Rank;

  // i: Column
  // j: Row

  for (let i = 0; i < MissionCount; i++) 
  {
    const row = document.createElement("tr");
    
    for (let j = 0; j < 3; j++) 
    {
      const cell = document.createElement("td");
      let cellText = document.createTextNode(`Missing Data`);

      if (j == 0) { cellText = document.createTextNode(i + 1); }
      else if (j == 1)
      {
        cellText = document.createTextNode(ReadableTextConvert(MissionData[i][0]));
      }
      else if (j == 2)
      {
        cellText = document.createTextNode(ScriptedTypeToText(MissionData[i][0].RewardId));
      }

      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    tblBody.appendChild(row);
  }
    
  tbl.appendChild(tblBody);
  document.body.appendChild(tbl);
}

function OrderRankData(InputRank)
{
  let Data = BalanceFile.Missions.filter(Missions => Missions.Rank === InputRank);
  InputRank = (InputRank < 10) ? "00" + InputRank : InputRank;

  let T0 = [];
  let T1 = [];
  let T2 = [];

  for (i = 0; i < Data.length; i++)
  {
    let MissionID = Data[i].Id;
    let T = MissionID.substring(MissionID.indexOf("T") + 1);
    T = T.substring(0, T.indexOf("M"))

    let Filter = Data.filter(Missions => Missions.Id === MissionID)

    if (T == "0") { T0.push(Filter); }
    else if (T == "1") { T1.push(Filter); }
    else if (T == "2") { T2.push(Filter); }
  }

  let SortedData = [ ];

  for (j = 0; j < Data.length; j++)
  {
    let T0bool = (T0[j] != undefined);
    if (T0bool) { SortedData.push(T0[j]) }

    let T1bool = (T1[j] != undefined);
    if (T1bool) { SortedData.push(T1[j]) }

    let T2bool = (T2[j] != undefined);
    if (T2bool) { SortedData.push(T2[j]) }
  }

  return SortedData;
}

function ReadableTextConvert(MissionIndex)
{
  let Result = "";

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
  if (Threshold != -1 && ConditionType != "ManagerRankReached" && ConditionType != "GeneratorFirstPurchase") 
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
  const ScriptedData = RewardsFile.Rewards.find(Rewards => Rewards.Id === Input);
  const RewardType = ScriptedData.Type;
  const RewardId = ScriptedData.RewardId;
  const RewardAmount = ScriptedData.Value;

  if (RewardType != "Gacha")
  {
    if (RewardType == "Manager") { var ManTrue = "×"; }
    else { var ManTrue = ""; }
    return ManTrue + Powers(RewardAmount) + " " + ConvertToReadable(RewardId);
  }
  else
  {
    return GachaReader(RewardId);
  }
}

function AdvanceToRank()
{
  let ToRank = prompt("Please enter the Season to navigate to.");
  console.clear();

  if (!isNaN(ToRank) && ToRank != " ") { UpdateTable(ToRank); }
}

function GachaReader(GachaID)
{
    const Index = RewardsFile.Gacha.find(Rewards => Rewards.Id === GachaID);
    const BoxType = ConvertToReadable(Index.PrefabId);
    const BoxContent = Index.GachaPoolGroupIds;
    
    const Content1 = BoxContent[0];
    const Content2 = BoxContent[1];
    const Content3 = BoxContent[2];

    const BoxPoolMan = (RewardsFile.GachaPoolGroups.find(Pool => Pool.Id === Content1)).GachaPools[0].Id;
    const GachaContents = (RewardsFile.GachaPools.find(Pool => Pool.Id === BoxPoolMan)).WeightedRewards;
    const IsScripted = (GachaContents.length == 1);
    console.log(GachaContents)

    if (IsScripted) { return BoxType + " (Scripted)"; } else { return BoxType; }
}

function UpdateBusinessTable(Rank)
{
  if (isNaN(Rank)) { Rank = 1; }
  else { Rank = Math.max(Rank, 1); Rank = Math.min(Rank, MAXRANK); }

  const ActiveBusinesses = (BalanceFile.Ranks.filter(Buisness => Buisness.Rank === Rank))[0].GeneratorSlots;
  let BusinessList = [];

  for (i = 0; i < ActiveBusinesses.length; i++)
  {
      if (ActiveBusinesses[i].GeneratorCap != 0)
      {
          BusinessList[i] = ActiveBusinesses[i].GeneratorId;
      }
  }

  const BusinessTable = document.getElementById('BusinessTable');
  const TableBody = document.createElement("tbody");
  while (BusinessTable.children.length > 1) BusinessTable.removeChild(BusinessTable.lastChild);

  for (j = 0; j < BusinessList.length; j++)
  {
    const buisRow = document.createElement("tr");

    for (k = 0; k < 5; k++)
    {
      const buisCell = document.createElement("td");
      var cellText = document.createTextNode(`Missing Data`);

      if (k == 0)
      {
        cellText = document.createTextNode(ConvertToReadable(BusinessList[j]));
      }
      else if (k == 1)
      {
        cellText = document.createTextNode(Powers(ActiveBusinesses[j].OpeningCost));
      }
      else if (k == 2)
      {
        try
        {
          cellText = document.createTextNode(ConvertToReadable(ActiveBusinesses[j].Automation.ManagerId))
        }
        catch (_exception) { cellText = document.createTextNode("None"); }
      }
      else if (k == 3)
      {
        let KioskMan = ActiveBusinesses[j].SecondaryStationManagerId;

        if (KioskMan != undefined)
        {
          cellText = document.createTextNode(ConvertToReadable(ActiveBusinesses[j].SecondaryStationManagerId))
        }
        else
        {
          cellText = document.createTextNode("None");
        }
      }
      else if (k == 4)
      {
        cellText = document.createTextNode(Powers(ActiveBusinesses[j].GeneratorCap));
      }

      buisCell.appendChild(cellText);
      buisRow.appendChild(buisCell);
    }

    TableBody.appendChild(buisRow);
  }

  BusinessTable.appendChild(TableBody);
  document.body.appendChild(BusinessTable);
}