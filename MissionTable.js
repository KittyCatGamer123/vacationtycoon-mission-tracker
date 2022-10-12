function UpdateTable(Rank)
{
    const tbl = document.getElementById("mission_table");
    const tblBody = document.createElement("tbody");

    const TitleEdit = document.getElementById("mission_rank");
    TitleEdit.innerHTML = 'Season Missions <span style="color:#a7a7a7;">(Season ' + Rank + ')</span>';

    const MissionData = Missions.filter(Missions => Missions.Rank === Rank);

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

  const ScriptedData = Rewards.find(Rewards => Rewards.Id === Input);
  const RewardType = ScriptedData.Type;
  var RewardId = ScriptedData.RewardId;
  const RewardAmount = ScriptedData.Value;

  if (RewardType == "Manager") { var ManTrue = "x"; }
  else { var ManTrue = ""; }
  Result = ManTrue + Powers(RewardAmount) + " " + ConvertToReadable(RewardId);
  
  return Result;
}

function ConvertToReadable(Type)
{
  const TypeMap =
  {
    'corecurrency': 'Cash',
    'secondarycurrency': 'Tokens',
    'premiumcurrency': 'Gems',

    'ResourcesEarnedSinceSubscription': 'Collect',
    'ResourcesSpentSinceSubscription': 'Spend',

    'ResourceQuantity': 'Own',
    'GeneratorFirstPurchase': 'Unlock',
    'AllGeneratorLevels': 'Upgrade Businesses',
    'CustomersSinceSubscription': 'Serve Customers',
    'ActivateManagerPowerSinceSubscription': 'Use Manager Abilites',
    'AutomateSpecificGenerator': 'Automate Generator', // TODO: Figure out what this means
    'GeneratorMaxed': 'Max',

    'ActivateSecondaryStationSinceSubscription': 'Upgrade Kiosk',

    'ManagerCardsEarnedSinceSubscription': 'Collect Cards',
    'CardsSpentSinceSubscription': 'Use Manager Cards',
    'ManagerRankReached': 'Level Manager', // TODO: Figure out what this means also
    'ManagersUpgradedSinceSubscription': 'Promote Managers',

    'AdsWatched': 'Watch Ads',
    'AirdropsClaimedSinceSubscription': 'Claim Special Deliveries',
    'ConsumablesUsedSinceSubscription': 'Use', // E.g. "Use 3 Instant Profits" or "Use 3 Any Boosts"

    'EvergreenHotel': 'Hotel',
    'EvergreenRestaurant': 'Resturant',
    'EvergreenSpa': 'Spa',
    'EvergreenTours': 'Tours',
    'EvergreenEntertainment': 'Theme Park',
    'EvergreenFitness': 'Gym',
    'EvergreenDrink': 'Smoothies',
    'EvergreenLive': 'Convention',

    'MAN01': 'P.K. Soda',
    'MAN02': 'Bali Suta',
    'MAN03': 'Greta Greenberg',
    'MAN04': 'Bark Salsaparilla',
    'MAN05': 'Freddy',
    'MAN06': 'Job Dumphy',
    'MAN07': 'Lady Emily',
    'MAN08': 'The King',
    'MAN09': 'Jane Lycra',
    'MAN10': 'Sergeant Strayne',
    'MAN11': 'Betty Biceps',
    'MAN12': 'Dr. Morgan',
    'MAN13': 'Herman Gates',
    'MAN14': 'Gustave the Suave',
    'MAN15': 'Commodore Styx',
    'MAN16': 'Alf Wayne',
    'MAN17': 'P.T. Varnum',
    'MAN18': 'Lady Emily',
    'MAN19': 'Lady Emily',
    'MAN20': 'Lady Emily',
  }

  return TypeMap[Type] ?? 'Mission Type Issue';
}