function GachaReader(GachaID)
{
    const Index = RewardsFile.Gacha.find(Rewards => Rewards.Id === GachaID);
    const BoxType = ConvertToReadable(Index.PrefabId);
    console.log(Index.PrefabId);

    return BoxType;
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