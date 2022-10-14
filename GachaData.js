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

function CopiesToTokens()
{
    let TokenConvertList = RewardsFile.CardToSecondaryCurrencyConversion;
    let CommonToken = TokenConvertList.Common;
    let RareToken = TokenConvertList.Rare;
    let EpicToken = TokenConvertList.Epic;
    let LegendaryToken = TokenConvertList.Legendary;

    let NameList = ['Common', 'Rare', 'Epic', 'Legendary'];
    let TokenList = [CommonToken, RareToken, EpicToken, LegendaryToken];

    for (i = 0; i < NameList.length; i++)
    {
        document.getElementById('tokensforcard_' + NameList[i]).innerText = Powers(TokenList[i]) + ' Tokens per ' + NameList[i] + ' copy.';
    }
}