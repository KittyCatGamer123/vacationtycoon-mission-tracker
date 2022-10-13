function GachaReader(GachaID)
{
    const Index = RewardsFile.Gacha.find(Rewards => Rewards.Id === GachaID);
    const BoxType = ConvertToReadable(Index.PrefabId);
    const BoxContent = Index.GachaPoolGroupIds;
    
    const Content1 = BoxContent[0];
    const Content2 = BoxContent[1];
    const Content3 = BoxContent[2];
    
    var Result = BoxType + " (":
    
    if (typeof Content1 != "undefined") { Result += Content1; Result += " "; }
    if (typeof Content2 != "undefined") { Result += Content2; Result += " "; }
    if (typeof Content3 != "undefined") { Result += Content3; Result += " "; }
    Result += ")";

    return Result;
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
