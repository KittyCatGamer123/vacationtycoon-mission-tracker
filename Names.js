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

    'MAN001': 'P.K. Soda',
    'MAN002': 'Bali Suta',
    'MAN003': 'Greta Greenberg',
    'MAN004': 'Bark Salsaparilla',
    'MAN005': 'Freddy',
    'MAN006': 'Job Dumphy',
    'MAN007': 'Lady Emily',
    'MAN008': 'The King',
    'MAN009': 'Jane Lycra',
    'MAN010': 'Sergeant Strayne',
    'MAN011': 'Betty Biceps',
    'MAN012': 'Dr. Morgan',
    'MAN013': 'Herman Gates',
    'MAN014': 'Gustave the Suave',
    'MAN015': 'Commodore Styx',
    'MAN016': 'Alf Wayne',
    'MAN017': 'P.T. Varnum',
    'MAN018': 'Hammer Rambler',
    'MAN019': 'Octavius Cephalus',
    'MAN020': 'Willa Wonky',
    'MAN021': 'River Winger',
    'MAN022': 'Ching Shih the Fifth',
    'MAN023': 'Velvaman',
    'MAN024': 'Rainbow Sun Zena',
    'MAN025': 'Jordan Ramspeak',
    'MAN026': 'Micheline Star',
    'MAN027': 'Wally 6',
    'MAN028': 'Java DeHotta',
    'MAN029': 'Luis Splitt',
    'MAN030': 'Cucu Rubita',
    'MAN031': 'Francis Fad',
    'MAN032': 'Yogi Ashram',
    'MAN033': 'Claire Irlose',
    'MAN034': 'Sheldon Smugh',
    'MAN035': 'Goborg Joe',
    'MAN036': 'Lindsay Knope',
    'MAN037': 'Master Custodian',
    'MAN038': 'Mark DiePuke',
    'MAN039': 'Belle Hope',
    'MAN040': 'Eddie Fashion',
    'MAN041': 'Silly Sal'
  }

  return TypeMap[Type] ?? 'Mission Type Issue';
}