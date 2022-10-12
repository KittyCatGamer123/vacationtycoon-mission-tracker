// IMPORTANT:
// When new balance is out, copy all missions and rewards in Balance files to here
// @@@@@@@@@

const Missions = 
[
  {
    "Id": "R001T1M01",
    "Slot": 1,
    "Rank": 1,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 12,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "corecurrency_rank1_mission1"
  },
  {
    "Id": "R001T1M02",
    "Slot": 1,
    "Rank": 1,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 26,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "Legendary_administration_mentor_7"
  },
  {
    "Id": "R001T1M03",
    "Slot": 1,
    "Rank": 1,
    "Condition": {
      "ConditionType": "GeneratorFirstPurchase",
      "Threshold": 1,
      "ConditionId": "EvergreenRestaurant"
    },
    "RewardId": "Common_hotel_gustave_5"
  },
  {
    "Id": "R001T1M04",
    "Slot": 1,
    "Rank": 1,
    "Condition": {
      "ConditionType": "GeneratorFirstPurchase",
      "Threshold": 1,
      "ConditionId": "EvergreenSpa"
    },
    "RewardId": "Gacha_Scripted_Ramsay_1"
  },
  {
    "Id": "R001T1M05",
    "Slot": 1,
    "Rank": 1,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 250000,
      "ConditionId": "corecurrency"
    },
    "RewardId": "Gacha_Scripted_Ramsay_5"
  },
  {
    "Id": "R001T1M06",
    "Slot": 1,
    "Rank": 1,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "Gacha_Scripted_Gustave_1"
  },
  {
    "Id": "R002T1M01",
    "Slot": 1,
    "Rank": 2,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 15,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Cucumber_1"
  },
  {
    "Id": "R002T1M02",
    "Slot": 1,
    "Rank": 2,
    "Condition": {
      "ConditionType": "GeneratorFirstPurchase",
      "Threshold": 1,
      "ConditionId": "EvergreenSpa"
    },
    "RewardId": "Gacha_Scripted_Cucumber_1"
  },
  {
    "Id": "R002T1M05",
    "Slot": 1,
    "Rank": 2,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 80,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "Gacha_Scripted_Gustave_1"
  },
  {
    "Id": "R002T2M03",
    "Slot": 2,
    "Rank": 2,
    "Condition": {
      "ConditionType": "ManagerCardsEarnedSinceSubscription",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Gustave_1"
  },
  {
    "Id": "R002T2M04",
    "Slot": 2,
    "Rank": 2,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 20,
      "ConditionId": "EvergreenRestaurant"
    },
    "RewardId": "Gacha_Scripted_Gustave_1"
  },
  {
    "Id": "R003T0M01",
    "Slot": 0,
    "Rank": 3,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 3000000,
      "ConditionId": "corecurrency"
    },
    "RewardId": "Gacha_Scripted_Cucumber_1"
  },
  {
    "Id": "R003T0M04",
    "Slot": 0,
    "Rank": 3,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 35,
      "ConditionId": "EvergreenRestaurant"
    },
    "RewardId": "Gacha_Scripted_Gustave_1"
  },
  {
    "Id": "R003T1M02",
    "Slot": 1,
    "Rank": 3,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Cucumber_1"
  },
  {
    "Id": "R003T2M03",
    "Slot": 2,
    "Rank": 3,
    "Condition": {
      "ConditionType": "GeneratorFirstPurchase",
      "Threshold": 1,
      "ConditionId": "EvergreenEntertainment"
    },
    "RewardId": "Gacha_Scripted_Gustave_1"
  },
  {
    "Id": "R003T3M05",
    "Slot": 3,
    "Rank": 3,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "Gacha_Scripted_Cucumber_1"
  },
  {
    "Id": "R004T0M01",
    "Slot": 0,
    "Rank": 4,
    "Condition": {
      "ConditionType": "ResourcesSpentSinceSubscription",
      "Threshold": 120000,
      "ConditionId": "corecurrency"
    },
    "RewardId": "Gacha_Scripted_Gustave_1"
  },
  {
    "Id": "R004T0M02",
    "Slot": 0,
    "Rank": 4,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 100,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "Gacha_Scripted_Gustave_1"
  },
  {
    "Id": "R004T0M04",
    "Slot": 0,
    "Rank": 4,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 67,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Animatronic_3"
  },
  {
    "Id": "R004T1M05",
    "Slot": 1,
    "Rank": 4,
    "Condition": {
      "ConditionType": "ManagersUpgradedSinceSubscription",
      "Threshold": 1,
      "ConditionId": "MAN014"
    },
    "RewardId": "Gacha_Scripted_Janitor_5"
  },
  {
    "Id": "R004T2M03",
    "Slot": 2,
    "Rank": 4,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 50,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "Gacha_Scripted_Gustave_1"
  },
  {
    "Id": "R004T3M06",
    "Slot": 3,
    "Rank": 4,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenRestaurant"
    },
    "RewardId": "MR_Regular_Rank4"
  },
  {
    "Id": "R005T0M01",
    "Slot": 0,
    "Rank": 5,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 198,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Rank5"
  },
  {
    "Id": "R005T0M05",
    "Slot": 0,
    "Rank": 5,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 30,
      "ConditionId": "EvergreenSpa"
    },
    "RewardId": "MR_Regular_Rank5"
  },
  {
    "Id": "R005T0M06",
    "Slot": 0,
    "Rank": 5,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 5,
      "ConditionId": "EvergreenSpa"
    },
    "RewardId": "Gacha_Scripted_Ramsay_1"
  },
  {
    "Id": "R005T1M02",
    "Slot": 1,
    "Rank": 5,
    "Condition": {
      "ConditionType": "GeneratorFirstPurchase",
      "Threshold": 1,
      "ConditionId": "EvergreenTours"
    },
    "RewardId": "MR_Regular_Rank5"
  },
  {
    "Id": "R005T1M04",
    "Slot": 1,
    "Rank": 5,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Rank5"
  },
  {
    "Id": "R005T2M03",
    "Slot": 2,
    "Rank": 5,
    "Condition": {
      "ConditionType": "ManagerCardsEarnedSinceSubscription",
      "Threshold": 6,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Rank5"
  },
  {
    "Id": "R005T3M07",
    "Slot": 3,
    "Rank": 5,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 80,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "MR_Regular_Rank5"
  },
  {
    "Id": "R005T3M08",
    "Slot": 3,
    "Rank": 5,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "all"
    },
    "RewardId": "MR_Regular_Rank5"
  },
  {
    "Id": "R006T0M01",
    "Slot": 0,
    "Rank": 6,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 56,
      "ConditionId": "EvergreenRestaurant"
    },
    "RewardId": "Gacha_Scripted_Irwin_1"
  },
  {
    "Id": "R006T0M02",
    "Slot": 0,
    "Rank": 6,
    "Condition": {
      "ConditionType": "GeneratorFirstPurchase",
      "Threshold": 1,
      "ConditionId": "EvergreenTours"
    },
    "RewardId": "MR_Regular_Rank6"
  },
  {
    "Id": "R006T0M04",
    "Slot": 0,
    "Rank": 6,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 20000000000,
      "ConditionId": "corecurrency"
    },
    "RewardId": "Gacha_Scripted_Irwin_1"
  },
  {
    "Id": "R006T1M03",
    "Slot": 1,
    "Rank": 6,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 6,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Ramsay_1"
  },
  {
    "Id": "R006T1M05",
    "Slot": 1,
    "Rank": 6,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 5,
      "ConditionId": "EvergreenEntertainment"
    },
    "RewardId": "MR_Regular_Rank6"
  },
  {
    "Id": "R006T2M06",
    "Slot": 2,
    "Rank": 6,
    "Condition": {
      "ConditionType": "ManagerCardsEarnedSinceSubscription",
      "Threshold": 4,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Rank6"
  },
  {
    "Id": "R006T3M07",
    "Slot": 3,
    "Rank": 6,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "all"
    },
    "RewardId": "MR_Regular_Rank6"
  },
  {
    "Id": "R007T0M01",
    "Slot": 0,
    "Rank": 7,
    "Condition": {
      "ConditionType": "ResourcesSpentSinceSubscription",
      "Threshold": 15500000000,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Rank7"
  },
  {
    "Id": "R007T0M04",
    "Slot": 0,
    "Rank": 7,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 450,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Rank7"
  },
  {
    "Id": "R007T1M02",
    "Slot": 1,
    "Rank": 7,
    "Condition": {
      "ConditionType": "GeneratorFirstPurchase",
      "Threshold": 1,
      "ConditionId": "EvergreenTours"
    },
    "RewardId": "Gacha_Scripted_Hope_5"
  },
  {
    "Id": "R007T1M07",
    "Slot": 1,
    "Rank": 7,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 150,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Rank7"
  },
  {
    "Id": "R007T2M05",
    "Slot": 2,
    "Rank": 7,
    "Condition": {
      "ConditionType": "ManagerCardsEarnedSinceSubscription",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Rank7"
  },
  {
    "Id": "R007T3M03",
    "Slot": 3,
    "Rank": 7,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 52,
      "ConditionId": "EvergreenEntertainment"
    },
    "RewardId": "MR_Good_Rank7"
  },
  {
    "Id": "R007T3M06",
    "Slot": 3,
    "Rank": 7,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "MR_Good_Rank7"
  },
  {
    "Id": "R008T0M01",
    "Slot": 0,
    "Rank": 8,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 160,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "Gacha_Scripted_Bates_5"
  },
  {
    "Id": "R008T0M02",
    "Slot": 0,
    "Rank": 8,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 165000000000,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Rank8"
  },
  {
    "Id": "R008T0M04",
    "Slot": 1,
    "Rank": 8,
    "Condition": {
      "ConditionType": "AutomateSpecificGenerator",
      "Threshold": 1,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "MR_Regular_Rank8"
  },
  {
    "Id": "R008T1M03",
    "Slot": 1,
    "Rank": 8,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 45,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Good_Rank8"
  },
  {
    "Id": "R008T1M05",
    "Slot": 1,
    "Rank": 8,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 17,
      "ConditionId": "EvergreenRestaurant"
    },
    "RewardId": "Gacha_Scripted_Ramsay_1"
  },
  {
    "Id": "R008T2M06",
    "Slot": 2,
    "Rank": 8,
    "Condition": {
      "ConditionType": "GeneratorFirstPurchase",
      "Threshold": 1,
      "ConditionId": "EvergreenTours"
    },
    "RewardId": "Gacha_Scripted_Ramsay_1"
  },
  {
    "Id": "R008T2M07",
    "Slot": 2,
    "Rank": 8,
    "Condition": {
      "ConditionType": "ResourcesSpentSinceSubscription",
      "Threshold": 400,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Good_Rank8"
  },
  {
    "Id": "R008T3M08",
    "Slot": 3,
    "Rank": 8,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 120,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Ramsay_1"
  },
  {
    "Id": "R008T3M09",
    "Slot": 3,
    "Rank": 8,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenRestaurant"
    },
    "RewardId": "MR_Good_Rank8"
  },
  {
    "Id": "R009T0M01",
    "Slot": 0,
    "Rank": 9,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 170000000000,
      "ConditionId": "corecurrency"
    },
    "RewardId": "Gacha_Scripted_Ramsay_1"
  },
  {
    "Id": "R009T0M04",
    "Slot": 0,
    "Rank": 9,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 535,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Rank9"
  },
  {
    "Id": "R009T0M05",
    "Slot": 0,
    "Rank": 9,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 165,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_Rank9"
  },
  {
    "Id": "R009T1M02",
    "Slot": 1,
    "Rank": 9,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 11,
      "ConditionId": "EvergreenRestaurant"
    },
    "RewardId": "Gacha_Scripted_Ramsay_1"
  },
  {
    "Id": "R009T1M03",
    "Slot": 1,
    "Rank": 9,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 70,
      "ConditionId": "EvergreenEntertainment"
    },
    "RewardId": "MR_Regular_Rank9"
  },
  {
    "Id": "R009T1M06",
    "Slot": 1,
    "Rank": 9,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 7,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Rank9"
  },
  {
    "Id": "R009T2M07",
    "Slot": 2,
    "Rank": 9,
    "Condition": {
      "ConditionType": "ManagerRankReached",
      "Threshold": 2,
      "ConditionId": "MAN025"
    },
    "RewardId": "MR_Regular_Rank9"
  },
  {
    "Id": "R009T3M08",
    "Slot": 3,
    "Rank": 9,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 75,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Good_Rank9"
  },
  {
    "Id": "R009T3M09",
    "Slot": 3,
    "Rank": 9,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenSpa"
    },
    "RewardId": "MR_Good_Rank9"
  },
  {
    "Id": "R010T0M01",
    "Slot": 0,
    "Rank": 10,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 3,
      "ConditionId": "EvergreenEntertainment"
    },
    "RewardId": "Gacha_Scripted_Jetson_1"
  },
  {
    "Id": "R010T0M03",
    "Slot": 0,
    "Rank": 10,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 525,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Rank10"
  },
  {
    "Id": "R010T0M06",
    "Slot": 0,
    "Rank": 10,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 1500000000000,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Rank10"
  },
  {
    "Id": "R010T0M07",
    "Slot": 0,
    "Rank": 10,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 70,
      "ConditionId": "EvergreenTours"
    },
    "RewardId": "MR_Regular_Rank10"
  },
  {
    "Id": "R010T1M02",
    "Slot": 1,
    "Rank": 10,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 6,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Jetson_1"
  },
  {
    "Id": "R010T1M04",
    "Slot": 1,
    "Rank": 10,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 60,
      "ConditionId": "EvergreenRestaurant"
    },
    "RewardId": "MR_Regular_Rank10"
  },
  {
    "Id": "R010T1M05",
    "Slot": 1,
    "Rank": 10,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 120,
      "ConditionId": "EvergreenSpa"
    },
    "RewardId": "MR_Regular_Rank10"
  },
  {
    "Id": "R010T2M08",
    "Slot": 2,
    "Rank": 10,
    "Condition": {
      "ConditionType": "ManagersUpgradedSinceSubscription",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_Rank10"
  },
  {
    "Id": "R010T3M09",
    "Slot": 3,
    "Rank": 10,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 250,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_Rank10"
  },
  {
    "Id": "R010T3M10",
    "Slot": 3,
    "Rank": 10,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "MR_Good_Rank10"
  },
  {
    "Id": "R011T0M01",
    "Slot": 0,
    "Rank": 11,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 900000000000,
      "ConditionId": "corecurrency"
    },
    "RewardId": "Gacha_Scripted_Michelin_1"
  },
  {
    "Id": "R011T0M04",
    "Slot": 0,
    "Rank": 11,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 825,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Michelin_1"
  },
  {
    "Id": "R011T1M02",
    "Slot": 1,
    "Rank": 11,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 385,
      "ConditionId": "EvergreenSpa"
    },
    "RewardId": "Gacha_Scripted_Jetson_1"
  },
  {
    "Id": "R011T1M06",
    "Slot": 1,
    "Rank": 11,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 10,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Michelin_1"
  },
  {
    "Id": "R011T2M03",
    "Slot": 2,
    "Rank": 11,
    "Condition": {
      "ConditionType": "ManagerCardsEarnedSinceSubscription",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Rank11"
  },
  {
    "Id": "R011T2M05",
    "Slot": 2,
    "Rank": 11,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 3E+15,
      "ConditionId": "corecurrency"
    },
    "RewardId": "Gacha_Scripted_Michelin_1"
  },
  {
    "Id": "R011T3M07",
    "Slot": 3,
    "Rank": 11,
    "Condition": {
      "ConditionType": "ResourcesSpentSinceSubscription",
      "Threshold": 400,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "Gacha_Scripted_Jetson_1"
  },
  {
    "Id": "R011T3M08",
    "Slot": 3,
    "Rank": 11,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenRestaurant"
    },
    "RewardId": "Gacha_Scripted_Michelin_1"
  },
  {
    "Id": "R012T0M01",
    "Slot": 0,
    "Rank": 12,
    "Condition": {
      "ConditionType": "GeneratorFirstPurchase",
      "Threshold": 1,
      "ConditionId": "EvergreenTours"
    },
    "RewardId": "Gacha_Scripted_Pilates_1"
  },
  {
    "Id": "R012T0M02",
    "Slot": 0,
    "Rank": 12,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 552,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Rank12"
  },
  {
    "Id": "R012T0M05",
    "Slot": 0,
    "Rank": 12,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 3.2E+15,
      "ConditionId": "corecurrency"
    },
    "RewardId": "Gacha_Scripted_Pilates_1"
  },
  {
    "Id": "R012T0M07",
    "Slot": 0,
    "Rank": 12,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 160,
      "ConditionId": "EvergreenEntertainment"
    },
    "RewardId": "Gacha_Scripted_Pilates_1"
  },
  {
    "Id": "R012T1M03",
    "Slot": 1,
    "Rank": 12,
    "Condition": {
      "ConditionType": "ActivateSecondaryStationSinceSubscription",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_Rank12"
  },
  {
    "Id": "R012T1M04",
    "Slot": 1,
    "Rank": 12,
    "Condition": {
      "ConditionType": "AirdropsClaimedSinceSubscription",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Pilates_1"
  },
  {
    "Id": "R012T1M06",
    "Slot": 1,
    "Rank": 12,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 8,
      "ConditionId": "EvergreenFitness"
    },
    "RewardId": "MR_Regular_Rank12"
  },
  {
    "Id": "R012T2M10",
    "Slot": 2,
    "Rank": 12,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 70,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Better_WP_Rank12"
  },
  {
    "Id": "R012T2M11",
    "Slot": 2,
    "Rank": 12,
    "Condition": {
      "ConditionType": "ManagersUpgradedSinceSubscription",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_Rank12"
  },
  {
    "Id": "R012T3M08",
    "Slot": 3,
    "Rank": 12,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 7,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Rank12"
  },
  {
    "Id": "R012T3M09",
    "Slot": 3,
    "Rank": 12,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenTours"
    },
    "RewardId": "MR_Good_Rank12"
  },
  {
    "Id": "R013T0M01",
    "Slot": 0,
    "Rank": 13,
    "Condition": {
      "ConditionType": "ResourcesSpentSinceSubscription",
      "Threshold": 10000000000000,
      "ConditionId": "corecurrency"
    },
    "RewardId": "Gacha_Scripted_Fitnessgoal_1"
  },
  {
    "Id": "R013T0M02",
    "Slot": 0,
    "Rank": 13,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 200,
      "ConditionId": "EvergreenRestaurant"
    },
    "RewardId": "Gacha_Scripted_Pilates_1"
  },
  {
    "Id": "R013T0M04",
    "Slot": 0,
    "Rank": 13,
    "Condition": {
      "ConditionType": "AdsWatched",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Fitnessgoal_1"
  },
  {
    "Id": "R013T0M05",
    "Slot": 3,
    "Rank": 13,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 1075,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Fitnessgoal_1"
  },
  {
    "Id": "R013T0M06",
    "Slot": 0,
    "Rank": 13,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 1.5E+16,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Rank13"
  },
  {
    "Id": "R013T1M03",
    "Slot": 1,
    "Rank": 13,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 6500,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Rank13"
  },
  {
    "Id": "R013T2M07",
    "Slot": 2,
    "Rank": 13,
    "Condition": {
      "ConditionType": "ResourcesSpentSinceSubscription",
      "Threshold": 400,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Better_WP_Rank13"
  },
  {
    "Id": "R013T3M08",
    "Slot": 3,
    "Rank": 13,
    "Condition": {
      "ConditionType": "AirdropsClaimedSinceSubscription",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "MR_Better_WP_Rank13"
  },
  {
    "Id": "R013T3M09",
    "Slot": 3,
    "Rank": 13,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "MR_Good_Rank13"
  },
  {
    "Id": "R014T0M01",
    "Slot": 0,
    "Rank": 14,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 107,
      "ConditionId": "EvergreenTours"
    },
    "RewardId": "Gacha_Scripted_Irwin_1"
  },
  {
    "Id": "R014T0M04",
    "Slot": 0,
    "Rank": 14,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 9.5E+16,
      "ConditionId": "corecurrency"
    },
    "RewardId": "Gacha_Scripted_Irwin_1"
  },
  {
    "Id": "R014T0M06",
    "Slot": 0,
    "Rank": 14,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 216,
      "ConditionId": "EvergreenRestaurant"
    },
    "RewardId": "Gacha_Scripted_Irwin_1"
  },
  {
    "Id": "R014T1M02",
    "Slot": 1,
    "Rank": 14,
    "Condition": {
      "ConditionType": "ActivateSecondaryStationSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Fitnessgoal_1"
  },
  {
    "Id": "R014T1M03",
    "Slot": 1,
    "Rank": 14,
    "Condition": {
      "ConditionType": "AirdropsClaimedSinceSubscription",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Rank14"
  },
  {
    "Id": "R014T1M05",
    "Slot": 1,
    "Rank": 14,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 70,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Regular_Rank14"
  },
  {
    "Id": "R014T1M07",
    "Slot": 1,
    "Rank": 14,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 14,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_Rank14"
  },
  {
    "Id": "R014T2M08",
    "Slot": 2,
    "Rank": 14,
    "Condition": {
      "ConditionType": "ManagersUpgradedSinceSubscription",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "MR_Better_WP_Rank14"
  },
  {
    "Id": "R014T3M09",
    "Slot": 3,
    "Rank": 14,
    "Condition": {
      "ConditionType": "ManagerCardsEarnedSinceSubscription",
      "Threshold": 7,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Rank14"
  },
  {
    "Id": "R014T3M10",
    "Slot": 3,
    "Rank": 14,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 2.5E+17,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Rank14"
  },
  {
    "Id": "R014T3M11",
    "Slot": 3,
    "Rank": 14,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 1200,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Fitnessgoal_1"
  },
  {
    "Id": "R014T3M12",
    "Slot": 3,
    "Rank": 14,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenEntertainment"
    },
    "RewardId": "MR_Better_WP_Rank14"
  },
  {
    "Id": "R015T0M01",
    "Slot": 0,
    "Rank": 15,
    "Condition": {
      "ConditionType": "ResourcesSpentSinceSubscription",
      "Threshold": 1.05E+15,
      "ConditionId": "corecurrency"
    },
    "RewardId": "Gacha_Scripted_Irwin_1"
  },
  {
    "Id": "R015T0M03",
    "Slot": 0,
    "Rank": 15,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 165,
      "ConditionId": "EvergreenTours"
    },
    "RewardId": "MR_Regular_Rank15"
  },
  {
    "Id": "R015T0M05",
    "Slot": 0,
    "Rank": 15,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 2.9E+17,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Consumable_Rank15"
  },
  {
    "Id": "R015T0M07",
    "Slot": 0,
    "Rank": 15,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 460,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "Gacha_Scripted_Irwin_1"
  },
  {
    "Id": "R015T1M02",
    "Slot": 1,
    "Rank": 15,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 4,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Magician_1"
  },
  {
    "Id": "R015T1M04",
    "Slot": 1,
    "Rank": 15,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 382,
      "ConditionId": "EvergreenFitness"
    },
    "RewardId": "Gacha_Scripted_Irwin_1"
  },
  {
    "Id": "R015T1M06",
    "Slot": 1,
    "Rank": 15,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 50,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "Gacha_Scripted_Magician_1"
  },
  {
    "Id": "R015T1M08",
    "Slot": 1,
    "Rank": 15,
    "Condition": {
      "ConditionType": "AdsWatched",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Irwin_1"
  },
  {
    "Id": "R015T1M12",
    "Slot": 1,
    "Rank": 15,
    "Condition": {
      "ConditionType": "ManagerCardsEarnedSinceSubscription",
      "Threshold": 5,
      "ConditionId": "any"
    },
    "RewardId": "MR_Better_WP_Rank15"
  },
  {
    "Id": "R015T2M09",
    "Slot": 2,
    "Rank": 15,
    "Condition": {
      "ConditionType": "ConsumablesUsedSinceSubscription",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "MR_Better_WP_Rank15"
  },
  {
    "Id": "R015T3M10",
    "Slot": 3,
    "Rank": 15,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 1245,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Irwin_1"
  },
  {
    "Id": "R015T3M11",
    "Slot": 3,
    "Rank": 15,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Rank15"
  },
  {
    "Id": "R015T3M13",
    "Slot": 3,
    "Rank": 15,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenFitness"
    },
    "RewardId": "MR_Good_Rank15"
  },
  {
    "Id": "R016T0M01",
    "Slot": 0,
    "Rank": 16,
    "Condition": {
      "ConditionType": "GeneratorFirstPurchase",
      "Threshold": 1,
      "ConditionId": "EvergreenFitness"
    },
    "RewardId": "Gacha_Scripted_Barista_1"
  },
  {
    "Id": "R016T0M03",
    "Slot": 0,
    "Rank": 16,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 9.4E+18,
      "ConditionId": "corecurrency"
    },
    "RewardId": "Gacha_Scripted_Magician_1"
  },
  {
    "Id": "R016T0M04",
    "Slot": 0,
    "Rank": 16,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 1445,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Barista_1"
  },
  {
    "Id": "R016T1M02",
    "Slot": 1,
    "Rank": 16,
    "Condition": {
      "ConditionType": "ActivateSecondaryStationSinceSubscription",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Magician_1"
  },
  {
    "Id": "R016T1M05",
    "Slot": 1,
    "Rank": 16,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 225,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "Gacha_Scripted_Barista_1"
  },
  {
    "Id": "R016T2M06",
    "Slot": 2,
    "Rank": 16,
    "Condition": {
      "ConditionType": "CardsSpentSinceSubscription",
      "Threshold": 8,
      "ConditionId": "any"
    },
    "RewardId": "MR_Better_WP_Standard"
  },
  {
    "Id": "R016T3M07",
    "Slot": 3,
    "Rank": 16,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 9300,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R016T3M08",
    "Slot": 3,
    "Rank": 16,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenFitness"
    },
    "RewardId": "MR_Good_WP_Standard"
  },
  {
    "Id": "R017T0M02",
    "Slot": 0,
    "Rank": 17,
    "Condition": {
      "ConditionType": "ResourcesSpentSinceSubscription",
      "Threshold": 8.3E+18,
      "ConditionId": "corecurrency"
    },
    "RewardId": "Gacha_Scripted_Barista_1"
  },
  {
    "Id": "R017T0M03",
    "Slot": 0,
    "Rank": 17,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 233,
      "ConditionId": "EvergreenEntertainment"
    },
    "RewardId": "Gacha_Scripted_Magician_1"
  },
  {
    "Id": "R017T0M05",
    "Slot": 0,
    "Rank": 17,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 281,
      "ConditionId": "EvergreenFitness"
    },
    "RewardId": "Gacha_Scripted_Ladyplant_1"
  },
  {
    "Id": "R017T1M01",
    "Slot": 1,
    "Rank": 17,
    "Condition": {
      "ConditionType": "AdsWatched",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Barista_1"
  },
  {
    "Id": "R017T1M04",
    "Slot": 1,
    "Rank": 17,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 44200,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Ladyplant_1"
  },
  {
    "Id": "R017T1M06",
    "Slot": 1,
    "Rank": 17,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 12,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Magician_1"
  },
  {
    "Id": "R017T1M07",
    "Slot": 1,
    "Rank": 17,
    "Condition": {
      "ConditionType": "AirdropsClaimedSinceSubscription",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Ladyplant_1"
  },
  {
    "Id": "R017T2M08",
    "Slot": 2,
    "Rank": 17,
    "Condition": {
      "ConditionType": "ManagersUpgradedSinceSubscription",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "MR_Better_Consumable_Standard"
  },
  {
    "Id": "R017T3M09",
    "Slot": 3,
    "Rank": 17,
    "Condition": {
      "ConditionType": "ManagerCardsEarnedSinceSubscription",
      "Threshold": 6,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R017T3M10",
    "Slot": 3,
    "Rank": 17,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "all"
    },
    "RewardId": "MR_Good_WP_Standard"
  },
  {
    "Id": "R018T0M01",
    "Slot": 0,
    "Rank": 18,
    "Condition": {
      "ConditionType": "ResourcesSpentSinceSubscription",
      "Threshold": 1.06E+16,
      "ConditionId": "corecurrency"
    },
    "RewardId": "Gacha_Scripted_Ladyplant_1"
  },
  {
    "Id": "R018T0M02",
    "Slot": 0,
    "Rank": 18,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 1352,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Magician_1"
  },
  {
    "Id": "R018T0M05",
    "Slot": 0,
    "Rank": 18,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 244,
      "ConditionId": "EvergreenDrink"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R018T1M03",
    "Slot": 1,
    "Rank": 18,
    "Condition": {
      "ConditionType": "ActivateSecondaryStationSinceSubscription",
      "Threshold": 4,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R018T1M04",
    "Slot": 1,
    "Rank": 18,
    "Condition": {
      "ConditionType": "AdsWatched",
      "Threshold": 4,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Magician_1"
  },
  {
    "Id": "R018T1M06",
    "Slot": 1,
    "Rank": 18,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 70,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R018T1M07",
    "Slot": 1,
    "Rank": 18,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 366,
      "ConditionId": "EvergreenFitness"
    },
    "RewardId": "Gacha_Scripted_Magician_1"
  },
  {
    "Id": "R018T2M08",
    "Slot": 2,
    "Rank": 18,
    "Condition": {
      "ConditionType": "ConsumablesUsedSinceSubscription",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "MR_Better_WP_Standard"
  },
  {
    "Id": "R018T3M09",
    "Slot": 3,
    "Rank": 18,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 4.09E+18,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R018T3M10",
    "Slot": 3,
    "Rank": 18,
    "Condition": {
      "ConditionType": "AirdropsClaimedSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R018T3M11",
    "Slot": 3,
    "Rank": 18,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenEntertainment"
    },
    "RewardId": "MR_Better_WP_Standard"
  },
  {
    "Id": "R019T0M01",
    "Slot": 0,
    "Rank": 19,
    "Condition": {
      "ConditionType": "ResourcesSpentSinceSubscription",
      "Threshold": 1.2E+15,
      "ConditionId": "corecurrency"
    },
    "RewardId": "Gacha_Scripted_Magician_1"
  },
  {
    "Id": "R019T0M02",
    "Slot": 0,
    "Rank": 19,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 255,
      "ConditionId": "EvergreenFitness"
    },
    "RewardId": "Gacha_Scripted_Magician_1"
  },
  {
    "Id": "R019T0M04",
    "Slot": 0,
    "Rank": 19,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 3.9E+19,
      "ConditionId": "corecurrency"
    },
    "RewardId": "Gacha_Scripted_Magician_1"
  },
  {
    "Id": "R019T0M05",
    "Slot": 0,
    "Rank": 19,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 545,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "Gacha_Scripted_Sergeant_1"
  },
  {
    "Id": "R019T0M09",
    "Slot": 3,
    "Rank": 19,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenFitness"
    },
    "RewardId": "Gacha_Scripted_Sergeant_1"
  },
  {
    "Id": "R019T1M03",
    "Slot": 1,
    "Rank": 19,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 50,
      "ConditionId": "EvergreenTours"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R019T1M06",
    "Slot": 1,
    "Rank": 19,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 45,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R019T1M07",
    "Slot": 1,
    "Rank": 19,
    "Condition": {
      "ConditionType": "AdsWatched",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Sergeant_1"
  },
  {
    "Id": "R019T1M08",
    "Slot": 1,
    "Rank": 19,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R019T1M10",
    "Slot": 3,
    "Rank": 19,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 17750,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R019T2M11",
    "Slot": 2,
    "Rank": 19,
    "Condition": {
      "ConditionType": "CardsSpentSinceSubscription",
      "Threshold": 8,
      "ConditionId": "any"
    },
    "RewardId": "MR_Better_WP_Standard"
  },
  {
    "Id": "R019T3M12",
    "Slot": 3,
    "Rank": 19,
    "Condition": {
      "ConditionType": "ManagerCardsEarnedSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_Consumable_Standard"
  },
  {
    "Id": "R020T0M02",
    "Slot": 0,
    "Rank": 20,
    "Condition": {
      "ConditionType": "GeneratorFirstPurchase",
      "Threshold": 1,
      "ConditionId": "EvergreenLive"
    },
    "RewardId": "Gacha_Scripted_CircusMC_1"
  },
  {
    "Id": "R020T0M03",
    "Slot": 0,
    "Rank": 20,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 1086,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Sergeant_1"
  },
  {
    "Id": "R020T0M05",
    "Slot": 0,
    "Rank": 20,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 5.1E+17,
      "ConditionId": "corecurrency"
    },
    "RewardId": "Gacha_Scripted_CircusMC_1"
  },
  {
    "Id": "R020T0M08",
    "Slot": 0,
    "Rank": 20,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 204,
      "ConditionId": "EvergreenEntertainment"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R020T0M09",
    "Slot": 0,
    "Rank": 20,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenLive"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R020T1M01",
    "Slot": 1,
    "Rank": 20,
    "Condition": {
      "ConditionType": "ActivateSecondaryStationSinceSubscription",
      "Threshold": 4,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Sergeant_1"
  },
  {
    "Id": "R020T1M04",
    "Slot": 1,
    "Rank": 20,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 14,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R020T1M06",
    "Slot": 1,
    "Rank": 20,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 5,
      "ConditionId": "EvergreenLive"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R020T1M07",
    "Slot": 1,
    "Rank": 20,
    "Condition": {
      "ConditionType": "AdsWatched",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_CircusMC_1"
  },
  {
    "Id": "R020T1M10",
    "Slot": 1,
    "Rank": 20,
    "Condition": {
      "ConditionType": "AirdropsClaimedSinceSubscription",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R020T1M11",
    "Slot": 1,
    "Rank": 20,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 299,
      "ConditionId": "EvergreenFitness"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R020T2M13",
    "Slot": 2,
    "Rank": 20,
    "Condition": {
      "ConditionType": "ManagersUpgradedSinceSubscription",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "MR_Better_WP_Standard"
  },
  {
    "Id": "R020T3M12",
    "Slot": 3,
    "Rank": 20,
    "Condition": {
      "ConditionType": "ManagerCardsEarnedSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R020T3M14",
    "Slot": 3,
    "Rank": 20,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "MR_Good_WP_Standard"
  },
  {
    "Id": "R021T0M01",
    "Slot": 0,
    "Rank": 21,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 217,
      "ConditionId": "EvergreenDrink"
    },
    "RewardId": "Gacha_Scripted_CircusMC_1"
  },
  {
    "Id": "R021T0M02",
    "Slot": 0,
    "Rank": 21,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 4.2E+17,
      "ConditionId": "corecurrency"
    },
    "RewardId": "Gacha_Scripted_EcoWarrior_1"
  },
  {
    "Id": "R021T0M03",
    "Slot": 0,
    "Rank": 21,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 233,
      "ConditionId": "EvergreenFitness"
    },
    "RewardId": "Gacha_Scripted_CircusMC_1"
  },
  {
    "Id": "R021T0M05",
    "Slot": 0,
    "Rank": 21,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 209,
      "ConditionId": "EvergreenEntertainment"
    },
    "RewardId": "Gacha_Scripted_EcoWarrior_1"
  },
  {
    "Id": "R021T0M07",
    "Slot": 0,
    "Rank": 21,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 1337,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_EcoWarrior_1"
  },
  {
    "Id": "R021T0M09",
    "Slot": 0,
    "Rank": 21,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 1.4E+18,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R021T0M10",
    "Slot": 0,
    "Rank": 21,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R021T0M13",
    "Slot": 0,
    "Rank": 21,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenDrink"
    },
    "RewardId": "MR_Good_Consumable_Standard"
  },
  {
    "Id": "R021T1M04",
    "Slot": 1,
    "Rank": 21,
    "Condition": {
      "ConditionType": "ResourcesSpentSinceSubscription",
      "Threshold": 2.35E+18,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R021T1M06",
    "Slot": 1,
    "Rank": 21,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 17,
      "ConditionId": "EvergreenLive"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R021T1M08",
    "Slot": 1,
    "Rank": 21,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 45,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R021T2M11",
    "Slot": 2,
    "Rank": 21,
    "Condition": {
      "ConditionType": "ActivateSecondaryStationSinceSubscription",
      "Threshold": 4,
      "ConditionId": "any"
    },
    "RewardId": "MR_Better_WP_Standard"
  },
  {
    "Id": "R021T3M12",
    "Slot": 3,
    "Rank": 21,
    "Condition": {
      "ConditionType": "ConsumablesUsedSinceSubscription",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R021T3M14",
    "Slot": 3,
    "Rank": 21,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 4900,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R021T3M15",
    "Slot": 3,
    "Rank": 21,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenEntertainment"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R022T0M01",
    "Slot": 0,
    "Rank": 22,
    "Condition": {
      "ConditionType": "ResourcesSpentSinceSubscription",
      "Threshold": 13000000000,
      "ConditionId": "corecurrency"
    },
    "RewardId": "Gacha_Scripted_EcoWarrior_1"
  },
  {
    "Id": "R022T0M02",
    "Slot": 0,
    "Rank": 22,
    "Condition": {
      "ConditionType": "GeneratorFirstPurchase",
      "Threshold": 1,
      "ConditionId": "EvergreenWater"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R022T0M04",
    "Slot": 0,
    "Rank": 22,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 1031,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R022T0M07",
    "Slot": 0,
    "Rank": 22,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 207,
      "ConditionId": "EvergreenWater"
    },
    "RewardId": "Gacha_Scripted_SwimInstructor_1"
  },
  {
    "Id": "R022T0M09",
    "Slot": 0,
    "Rank": 22,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 1.25E+18,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R022T0M11",
    "Slot": 0,
    "Rank": 22,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 509,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R022T1M03",
    "Slot": 1,
    "Rank": 22,
    "Condition": {
      "ConditionType": "ActivateSecondaryStationSinceSubscription",
      "Threshold": 5,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R022T1M05",
    "Slot": 1,
    "Rank": 22,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 711,
      "ConditionId": "EvergreenDrink"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R022T1M06",
    "Slot": 1,
    "Rank": 22,
    "Condition": {
      "ConditionType": "AirdropsClaimedSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_SwimInstructor_1"
  },
  {
    "Id": "R022T1M08",
    "Slot": 1,
    "Rank": 22,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 80,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R022T1M10",
    "Slot": 1,
    "Rank": 22,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_SwimInstructor_1"
  },
  {
    "Id": "R022T1M12",
    "Slot": 1,
    "Rank": 22,
    "Condition": {
      "ConditionType": "AdsWatched",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R022T2M14",
    "Slot": 2,
    "Rank": 22,
    "Condition": {
      "ConditionType": "ConsumablesUsedSinceSubscription",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "MR_Better_WP_Standard"
  },
  {
    "Id": "R022T3M13",
    "Slot": 3,
    "Rank": 22,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenDrink"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R022T3M15",
    "Slot": 3,
    "Rank": 22,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 1.8E+18,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R022T3M16",
    "Slot": 3,
    "Rank": 22,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenLive"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R023T0M02",
    "Slot": 0,
    "Rank": 23,
    "Condition": {
      "ConditionType": "ResourcesSpentSinceSubscription",
      "Threshold": 1.1E+19,
      "ConditionId": "corecurrency"
    },
    "RewardId": "Gacha_Scripted_SwimInstructor_1"
  },
  {
    "Id": "R023T0M04",
    "Slot": 0,
    "Rank": 23,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 266,
      "ConditionId": "EvergreenFitness"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R023T0M05",
    "Slot": 0,
    "Rank": 23,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 9.3E+18,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R023T0M07",
    "Slot": 0,
    "Rank": 23,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 247,
      "ConditionId": "EvergreenWater"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R023T0M10",
    "Slot": 0,
    "Rank": 23,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R023T1M01",
    "Slot": 1,
    "Rank": 23,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 8877,
      "ConditionId": "any"
    },
    "RewardId": "Gacha_Scripted_Bates_1"
  },
  {
    "Id": "R023T1M03",
    "Slot": 1,
    "Rank": 23,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 115,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "Gacha_Scripted_Bates_1"
  },
  {
    "Id": "R023T1M06",
    "Slot": 1,
    "Rank": 23,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 42,
      "ConditionId": "EvergreenLive"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R023T1M08",
    "Slot": 1,
    "Rank": 23,
    "Condition": {
      "ConditionType": "AirdropsClaimedSinceSubscription",
      "Threshold": 4,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R023T1M09",
    "Slot": 1,
    "Rank": 23,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R023T2M13",
    "Slot": 2,
    "Rank": 23,
    "Condition": {
      "ConditionType": "ResourcesSpentSinceSubscription",
      "Threshold": 400,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Better_WP_Standard"
  },
  {
    "Id": "R023T3M11",
    "Slot": 3,
    "Rank": 23,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 45,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Regular_Consumable_Standard"
  },
  {
    "Id": "R023T3M12",
    "Slot": 3,
    "Rank": 23,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 1.2E+19,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R023T3M14",
    "Slot": 3,
    "Rank": 23,
    "Condition": {
      "ConditionType": "AdsWatched",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R023T3M15",
    "Slot": 3,
    "Rank": 23,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenDrink"
    },
    "RewardId": "MR_Good_WP_Standard"
  },
  {
    "Id": "R024T0M02",
    "Slot": 0,
    "Rank": 24,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 237,
      "ConditionId": "EvergreenLive"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R024T0M05",
    "Slot": 0,
    "Rank": 24,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 1466,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R024T0M06",
    "Slot": 0,
    "Rank": 24,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 3.5E+16,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R024T0M09",
    "Slot": 0,
    "Rank": 24,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 253,
      "ConditionId": "EvergreenDrink"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R024T0M12",
    "Slot": 0,
    "Rank": 24,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 8.7E+16,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R024T0M13",
    "Slot": 0,
    "Rank": 24,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 266,
      "ConditionId": "EvergreenWater"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R024T1M01",
    "Slot": 1,
    "Rank": 24,
    "Condition": {
      "ConditionType": "AdsWatched",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R024T1M03",
    "Slot": 1,
    "Rank": 24,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 599,
      "ConditionId": "EvergreenFitness"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R024T1M04",
    "Slot": 1,
    "Rank": 24,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R024T1M07",
    "Slot": 1,
    "Rank": 24,
    "Condition": {
      "ConditionType": "AirdropsClaimedSinceSubscription",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R024T1M10",
    "Slot": 1,
    "Rank": 24,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 1299,
      "ConditionId": "EvergreenDrink"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R024T1M11",
    "Slot": 1,
    "Rank": 24,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R024T1M14",
    "Slot": 1,
    "Rank": 24,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 11999,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R024T2M08",
    "Slot": 2,
    "Rank": 24,
    "Condition": {
      "ConditionType": "ActivateSecondaryStationSinceSubscription",
      "Threshold": 1,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R024T3M15",
    "Slot": 3,
    "Rank": 24,
    "Condition": {
      "ConditionType": "CardsSpentSinceSubscription",
      "Threshold": 8,
      "ConditionId": "any"
    },
    "RewardId": "MR_Better_WP_Standard"
  },
  {
    "Id": "R024T3M16",
    "Slot": 3,
    "Rank": 24,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenFitness"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R024T3M17",
    "Slot": 3,
    "Rank": 24,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 85,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R024T3M18",
    "Slot": 3,
    "Rank": 24,
    "Condition": {
      "ConditionType": "ManagerCardsEarnedSinceSubscription",
      "Threshold": 4,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_WP_Standard"
  },
  {
    "Id": "R024T3M19",
    "Slot": 3,
    "Rank": 24,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenLive"
    },
    "RewardId": "MR_Good_WP_Standard"
  },
  {
    "Id": "R025T0M01",
    "Slot": 0,
    "Rank": 25,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 308,
      "ConditionId": "EvergreenSpa"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R025T0M04",
    "Slot": 0,
    "Rank": 25,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 1.7E+22,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R025T0M09",
    "Slot": 0,
    "Rank": 25,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 637,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R025T0M10",
    "Slot": 0,
    "Rank": 25,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 6.7E+21,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R025T1M03",
    "Slot": 1,
    "Rank": 25,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 405,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R025T1M05",
    "Slot": 1,
    "Rank": 25,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 27,
      "ConditionId": "EvergreenWater"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R025T1M06",
    "Slot": 1,
    "Rank": 25,
    "Condition": {
      "ConditionType": "AdsWatched",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R025T1M07",
    "Slot": 1,
    "Rank": 25,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 7,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R025T1M08",
    "Slot": 1,
    "Rank": 25,
    "Condition": {
      "ConditionType": "AirdropsClaimedSinceSubscription",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R025T2M02",
    "Slot": 2,
    "Rank": 25,
    "Condition": {
      "ConditionType": "ManagerCardsEarnedSinceSubscription",
      "Threshold": 6,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R025T2M13",
    "Slot": 2,
    "Rank": 25,
    "Condition": {
      "ConditionType": "ManagersUpgradedSinceSubscription",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_Consumable_Standard"
  },
  {
    "Id": "R025T2M14",
    "Slot": 2,
    "Rank": 25,
    "Condition": {
      "ConditionType": "ConsumablesUsedSinceSubscription",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R025T3M11",
    "Slot": 3,
    "Rank": 25,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 29000,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R025T3M12",
    "Slot": 3,
    "Rank": 25,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 318,
      "ConditionId": "EvergreenDrink"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R025T3M15",
    "Slot": 3,
    "Rank": 25,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenLive"
    },
    "RewardId": "MR_Better_WP_Standard"
  },
  {
    "Id": "R026T0M01",
    "Slot": 0,
    "Rank": 26,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 333,
      "ConditionId": "EvergreenWater"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R026T0M03",
    "Slot": 0,
    "Rank": 26,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 5.5E+22,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R026T0M04",
    "Slot": 0,
    "Rank": 26,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 1934,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R026T0M06",
    "Slot": 0,
    "Rank": 26,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 657,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R026T0M07",
    "Slot": 0,
    "Rank": 26,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 1.6E+21,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R026T0M10",
    "Slot": 0,
    "Rank": 26,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 327,
      "ConditionId": "EvergreenSpa"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R026T0M12",
    "Slot": 0,
    "Rank": 26,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 1E+23,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R026T1M02",
    "Slot": 1,
    "Rank": 26,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 385,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R026T1M05",
    "Slot": 1,
    "Rank": 26,
    "Condition": {
      "ConditionType": "AirdropsClaimedSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R026T1M08",
    "Slot": 1,
    "Rank": 26,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 11,
      "ConditionId": "EvergreenLive"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R026T1M09",
    "Slot": 1,
    "Rank": 26,
    "Condition": {
      "ConditionType": "AdsWatched",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R026T1M11",
    "Slot": 1,
    "Rank": 26,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 4444,
      "ConditionId": "EvergreenRestaurant"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R026T2M17",
    "Slot": 2,
    "Rank": 26,
    "Condition": {
      "ConditionType": "ResourcesSpentSinceSubscription",
      "Threshold": 800,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R026T2M18",
    "Slot": 2,
    "Rank": 26,
    "Condition": {
      "ConditionType": "ConsumablesUsedSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Better_WP_Standard"
  },
  {
    "Id": "R026T3M13",
    "Slot": 3,
    "Rank": 26,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 2000,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R026T3M14",
    "Slot": 3,
    "Rank": 26,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 677,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R026T3M15",
    "Slot": 3,
    "Rank": 26,
    "Condition": {
      "ConditionType": "ManagerCardsEarnedSinceSubscription",
      "Threshold": 7,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R026T3M16",
    "Slot": 3,
    "Rank": 26,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenWater"
    },
    "RewardId": "MR_Good_WP_Standard"
  },
  {
    "Id": "R027T0M01",
    "Slot": 0,
    "Rank": 27,
    "Condition": {
      "ConditionType": "GeneratorFirstPurchase",
      "Threshold": 1,
      "ConditionId": "EvergreenWater"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R027T0M04",
    "Slot": 0,
    "Rank": 27,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 1869,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R027T0M07",
    "Slot": 0,
    "Rank": 27,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 2.1E+24,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R027T0M09",
    "Slot": 0,
    "Rank": 27,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 331,
      "ConditionId": "EvergreenRestaurant"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R027T0M10",
    "Slot": 0,
    "Rank": 27,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 2120,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R027T1M02",
    "Slot": 1,
    "Rank": 27,
    "Condition": {
      "ConditionType": "ActivateSecondaryStationSinceSubscription",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R027T1M05",
    "Slot": 1,
    "Rank": 27,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 180,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R027T1M06",
    "Slot": 1,
    "Rank": 27,
    "Condition": {
      "ConditionType": "AirdropsClaimedSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R027T1M08",
    "Slot": 1,
    "Rank": 27,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 3800,
      "ConditionId": "EvergreenSpa"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R027T1M11",
    "Slot": 1,
    "Rank": 27,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 95,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R027T2M03",
    "Slot": 2,
    "Rank": 27,
    "Condition": {
      "ConditionType": "ManagerCardsEarnedSinceSubscription",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R027T2M16",
    "Slot": 2,
    "Rank": 27,
    "Condition": {
      "ConditionType": "CardsSpentSinceSubscription",
      "Threshold": 10,
      "ConditionId": "any"
    },
    "RewardId": "MR_Better_Consumable_Standard"
  },
  {
    "Id": "R027T2M17",
    "Slot": 2,
    "Rank": 27,
    "Condition": {
      "ConditionType": "ConsumablesUsedSinceSubscription",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_WP_Standard"
  },
  {
    "Id": "R027T3M12",
    "Slot": 3,
    "Rank": 27,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 389,
      "ConditionId": "EvergreenLive"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R027T3M13",
    "Slot": 3,
    "Rank": 27,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 1.3E+24,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R027T3M14",
    "Slot": 3,
    "Rank": 27,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 4,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R027T3M15",
    "Slot": 3,
    "Rank": 27,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenWater"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R028T0M02",
    "Slot": 0,
    "Rank": 28,
    "Condition": {
      "ConditionType": "ResourcesSpentSinceSubscription",
      "Threshold": 2.6E+23,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R028T0M04",
    "Slot": 0,
    "Rank": 28,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 343,
      "ConditionId": "EvergreenFitness"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R028T0M05",
    "Slot": 0,
    "Rank": 28,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 1995,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R028T1M01",
    "Slot": 1,
    "Rank": 28,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 365,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R028T1M03",
    "Slot": 1,
    "Rank": 28,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 355,
      "ConditionId": "EvergreenWater"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R028T1M06",
    "Slot": 1,
    "Rank": 28,
    "Condition": {
      "ConditionType": "AirdropsClaimedSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R028T2M11",
    "Slot": 2,
    "Rank": 28,
    "Condition": {
      "ConditionType": "ManagersUpgradedSinceSubscription",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_WP_Standard"
  },
  {
    "Id": "R028T2M12",
    "Slot": 2,
    "Rank": 28,
    "Condition": {
      "ConditionType": "ConsumablesUsedSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Better_WP_Standard"
  },
  {
    "Id": "R028T3M07",
    "Slot": 3,
    "Rank": 28,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 9.9E+22,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R028T3M08",
    "Slot": 3,
    "Rank": 28,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 42500,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R028T3M09",
    "Slot": 3,
    "Rank": 28,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 351,
      "ConditionId": "EvergreenLive"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R028T3M10",
    "Slot": 3,
    "Rank": 28,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R028T3M13",
    "Slot": 3,
    "Rank": 28,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "EvergreenRestaurant"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R029T0M01",
    "Slot": 0,
    "Rank": 29,
    "Condition": {
      "ConditionType": "GeneratorFirstPurchase",
      "Threshold": 1,
      "ConditionId": "EvergreenTours"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T0M05",
    "Slot": 0,
    "Rank": 29,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 343,
      "ConditionId": "EvergreenTours"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T0M06",
    "Slot": 0,
    "Rank": 29,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 1.3E+24,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T0M08",
    "Slot": 0,
    "Rank": 29,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 367,
      "ConditionId": "EvergreenFitness"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T0M09",
    "Slot": 0,
    "Rank": 29,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 2078,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T0M11",
    "Slot": 0,
    "Rank": 29,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 711,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T0M12",
    "Slot": 0,
    "Rank": 29,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 7.5E+20,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T0M15",
    "Slot": 0,
    "Rank": 29,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 329,
      "ConditionId": "EvergreenRestaurant"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T0M16",
    "Slot": 0,
    "Rank": 29,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 2123,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T1M02",
    "Slot": 1,
    "Rank": 29,
    "Condition": {
      "ConditionType": "ActivateSecondaryStationSinceSubscription",
      "Threshold": 4,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T1M04",
    "Slot": 1,
    "Rank": 29,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 21,
      "ConditionId": "EvergreenTours"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T1M07",
    "Slot": 1,
    "Rank": 29,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 80,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T1M10",
    "Slot": 1,
    "Rank": 29,
    "Condition": {
      "ConditionType": "AirdropsClaimedSinceSubscription",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T1M13",
    "Slot": 1,
    "Rank": 29,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 99999,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T1M14",
    "Slot": 1,
    "Rank": 29,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 8,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T1M17",
    "Slot": 1,
    "Rank": 29,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 1270,
      "ConditionId": "EvergreenFitness"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T1M18",
    "Slot": 1,
    "Rank": 29,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T2M03",
    "Slot": 2,
    "Rank": 29,
    "Condition": {
      "ConditionType": "ManagerCardsEarnedSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T2M22",
    "Slot": 2,
    "Rank": 29,
    "Condition": {
      "ConditionType": "ConsumablesUsedSinceSubscription",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_WP_Standard"
  },
  {
    "Id": "R029T2M23",
    "Slot": 2,
    "Rank": 29,
    "Condition": {
      "ConditionType": "ResourcesSpentSinceSubscription",
      "Threshold": 1600,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Better_Consumable_Standard"
  },
  {
    "Id": "R029T3M19",
    "Slot": 3,
    "Rank": 29,
    "Condition": {
      "ConditionType": "ManagerCardsEarnedSinceSubscription",
      "Threshold": 5,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T3M20",
    "Slot": 3,
    "Rank": 29,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 367,
      "ConditionId": "EvergreenWater"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T3M21",
    "Slot": 3,
    "Rank": 29,
    "Condition": {
      "ConditionType": "AirdropsClaimedSinceSubscription",
      "Threshold": 1,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R029T3M24",
    "Slot": 3,
    "Rank": 29,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "all"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R030T0M01",
    "Slot": 0,
    "Rank": 30,
    "Condition": {
      "ConditionType": "GeneratorFirstPurchase",
      "Threshold": 1,
      "ConditionId": "EvergreenFitness"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R030T0M02",
    "Slot": 0,
    "Rank": 30,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 2E+20,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R030T0M04",
    "Slot": 0,
    "Rank": 30,
    "Condition": {
      "ConditionType": "GeneratorFirstPurchase",
      "Threshold": 1,
      "ConditionId": "EvergreenTours"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R030T0M06",
    "Slot": 0,
    "Rank": 30,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 300,
      "ConditionId": "EvergreenRestaurant"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R030T0M10",
    "Slot": 0,
    "Rank": 30,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 385,
      "ConditionId": "EvergreenFitness"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R030T0M12",
    "Slot": 0,
    "Rank": 30,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 8E+24,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R030T0M13",
    "Slot": 0,
    "Rank": 30,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 2157,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R030T0M15",
    "Slot": 0,
    "Rank": 30,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 4E+23,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R030T1M03",
    "Slot": 1,
    "Rank": 30,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 4,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R030T1M05",
    "Slot": 1,
    "Rank": 30,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 2500,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R030T1M07",
    "Slot": 1,
    "Rank": 30,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 50,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R030T1M09",
    "Slot": 1,
    "Rank": 30,
    "Condition": {
      "ConditionType": "AirdropsClaimedSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R030T1M11",
    "Slot": 1,
    "Rank": 30,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 1400,
      "ConditionId": "EvergreenEntertainment"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R030T1M14",
    "Slot": 1,
    "Rank": 30,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 80,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R030T1M16",
    "Slot": 1,
    "Rank": 30,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 4,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R030T2M08",
    "Slot": 2,
    "Rank": 30,
    "Condition": {
      "ConditionType": "ManagerCardsEarnedSinceSubscription",
      "Threshold": 6,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R030T2M20",
    "Slot": 2,
    "Rank": 30,
    "Condition": {
      "ConditionType": "ConsumablesUsedSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_WP_Standard"
  },
  {
    "Id": "R030T2M21",
    "Slot": 2,
    "Rank": 30,
    "Condition": {
      "ConditionType": "ResourcesSpentSinceSubscription",
      "Threshold": 800,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Better_WP_Standard"
  },
  {
    "Id": "R030T3M17",
    "Slot": 3,
    "Rank": 30,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 735,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R030T3M18",
    "Slot": 3,
    "Rank": 30,
    "Condition": {
      "ConditionType": "AirdropsClaimedSinceSubscription",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R030T3M19",
    "Slot": 3,
    "Rank": 30,
    "Condition": {
      "ConditionType": "ManagerCardsEarnedSinceSubscription",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R030T3M22",
    "Slot": 3,
    "Rank": 30,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "all"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R031T0M01",
    "Slot": 0,
    "Rank": 31,
    "Condition": {
      "ConditionType": "ResourcesSpentSinceSubscription",
      "Threshold": 1.5E+22,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R031T0M03",
    "Slot": 0,
    "Rank": 31,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 370,
      "ConditionId": "EvergreenFitness"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R031T0M06",
    "Slot": 0,
    "Rank": 31,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 2105,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R031T0M08",
    "Slot": 0,
    "Rank": 31,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 1.6E+25,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R031T0M11",
    "Slot": 0,
    "Rank": 31,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 373,
      "ConditionId": "EvergreenEntertainment"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R031T0M13",
    "Slot": 0,
    "Rank": 31,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 395,
      "ConditionId": "EvergreenTours"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R031T1M02",
    "Slot": 1,
    "Rank": 31,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 5,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R031T1M04",
    "Slot": 1,
    "Rank": 31,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 90,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R031T1M07",
    "Slot": 1,
    "Rank": 31,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 2900,
      "ConditionId": "EvergreenDrink"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R031T1M09",
    "Slot": 1,
    "Rank": 31,
    "Condition": {
      "ConditionType": "AirdropsClaimedSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R031T1M12",
    "Slot": 1,
    "Rank": 31,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 40,
      "ConditionId": "secondarycurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R031T1M14",
    "Slot": 1,
    "Rank": 31,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 75000,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R031T2M05",
    "Slot": 3,
    "Rank": 31,
    "Condition": {
      "ConditionType": "CustomersSinceSubscription",
      "Threshold": 38000,
      "ConditionId": "EvergreenHotel"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R031T2M10",
    "Slot": 2,
    "Rank": 31,
    "Condition": {
      "ConditionType": "ManagerCardsEarnedSinceSubscription",
      "Threshold": 8,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R031T2M17",
    "Slot": 2,
    "Rank": 31,
    "Condition": {
      "ConditionType": "ManagersUpgradedSinceSubscription",
      "Threshold": 2,
      "ConditionId": "any"
    },
    "RewardId": "MR_Good_WP_Standard"
  },
  {
    "Id": "R031T2M18",
    "Slot": 2,
    "Rank": 31,
    "Condition": {
      "ConditionType": "ConsumablesUsedSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Better_Consumable_Standard"
  },
  {
    "Id": "R031T3M15",
    "Slot": 3,
    "Rank": 31,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 1.1E+25,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R031T3M16",
    "Slot": 3,
    "Rank": 31,
    "Condition": {
      "ConditionType": "AirdropsClaimedSinceSubscription",
      "Threshold": 3,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R031T3M19",
    "Slot": 3,
    "Rank": 31,
    "Condition": {
      "ConditionType": "GeneratorMaxed",
      "Threshold": -1,
      "ConditionId": "all"
    },
    "RewardId": "MR_Good_Standard"
  },
  {
    "Id": "R032T0M01",
    "Slot": 0,
    "Rank": 32,
    "Condition": {
      "ConditionType": "GeneratorFirstPurchase",
      "Threshold": 1,
      "ConditionId": "EvergreenTours"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R032T0M03",
    "Slot": 0,
    "Rank": 32,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 1.2E+26,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R032T0M05",
    "Slot": 0,
    "Rank": 32,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 395,
      "ConditionId": "EvergreenSpa"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R032T0M07",
    "Slot": 0,
    "Rank": 32,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 2305,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R032T0M10",
    "Slot": 0,
    "Rank": 32,
    "Condition": {
      "ConditionType": "ResourcesEarnedSinceSubscription",
      "Threshold": 7E+26,
      "ConditionId": "corecurrency"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R032T0M12",
    "Slot": 0,
    "Rank": 32,
    "Condition": {
      "ConditionType": "ResourceQuantity",
      "Threshold": 396,
      "ConditionId": "EvergreenDrink"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R032T0M14",
    "Slot": 0,
    "Rank": 32,
    "Condition": {
      "ConditionType": "AllGeneratorLevels",
      "Threshold": 2415,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
  {
    "Id": "R032T1M02",
    "Slot": 1,
    "Rank": 32,
    "Condition": {
      "ConditionType": "ActivateManagerPowerSinceSubscription",
      "Threshold": 4,
      "ConditionId": "any"
    },
    "RewardId": "MR_Regular_Standard"
  },
];

const Rewards =
[
  {
    "Id": "AD011",
    "Type": "Experiment",
    "RewardId": "EXAD6",
    "Value": 1
  },
  {
    "Id": "AD012",
    "Type": "None"
  },
  {
    "Id": "corecurrency_rank1_mission1",
    "Type": "Resources",
    "RewardId": "corecurrency",
    "Value": 8500
  },
  {
    "Id": "premium_5",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 5
  },
  {
    "Id": "premium_10",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 10
  },
  {
    "Id": "premium_25",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 25
  },
  {
    "Id": "premium_50",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 50
  },
  {
    "Id": "premium_100",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 100
  },
  {
    "Id": "premium_250",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 250
  },
  {
    "Id": "secondary_5",
    "Type": "Resources",
    "RewardId": "secondarycurrency",
    "Value": 5
  },
  {
    "Id": "secondary_10",
    "Type": "Resources",
    "RewardId": "secondarycurrency",
    "Value": 10
  },
  {
    "Id": "secondary_15",
    "Type": "Resources",
    "RewardId": "secondarycurrency",
    "Value": 15
  },
  {
    "Id": "secondary_20",
    "Type": "Resources",
    "RewardId": "secondarycurrency",
    "Value": 20
  },
  {
    "Id": "secondary_50",
    "Type": "Resources",
    "RewardId": "secondarycurrency",
    "Value": 50
  },
  {
    "Id": "secondary_100",
    "Type": "Resources",
    "RewardId": "secondarycurrency",
    "Value": 100
  },
  {
    "Id": "secondary_400",
    "Type": "Resources",
    "RewardId": "secondarycurrency",
    "Value": 400
  },
  {
    "Id": "secondary_800",
    "Type": "Resources",
    "RewardId": "secondarycurrency",
    "Value": 800
  },
  {
    "Id": "secondary_3500",
    "Type": "Resources",
    "RewardId": "secondarycurrency",
    "Value": 3500
  },
  {
    "Id": "Common_drink_soda_1",
    "Type": "Manager",
    "RewardId": "MAN001",
    "Value": 1
  },
  {
    "Id": "Common_drink_barista_1",
    "Type": "Manager",
    "RewardId": "MAN002",
    "Value": 1
  },
  {
    "Id": "Common_entertainment_animatronic_1",
    "Type": "Manager",
    "RewardId": "MAN005",
    "Value": 1
  },
  {
    "Id": "Common_entertainment_magician_1",
    "Type": "Manager",
    "RewardId": "MAN006",
    "Value": 1
  },
  {
    "Id": "Common_fitness_pilates_1",
    "Type": "Manager",
    "RewardId": "MAN009",
    "Value": 1
  },
  {
    "Id": "Common_fitness_sergeant_1",
    "Type": "Manager",
    "RewardId": "MAN010",
    "Value": 1
  },
  {
    "Id": "Common_hotel_bates_1",
    "Type": "Manager",
    "RewardId": "MAN013",
    "Value": 1
  },
  {
    "Id": "Common_hotel_gustave_1",
    "Type": "Manager",
    "RewardId": "MAN014",
    "Value": 1
  },
  {
    "Id": "Common_venue_circusMC_1",
    "Type": "Manager",
    "RewardId": "MAN017",
    "Value": 1
  },
  {
    "Id": "Common_venue_auctioneer_1",
    "Type": "Manager",
    "RewardId": "MAN018",
    "Value": 1
  },
  {
    "Id": "Common_water_swim_1",
    "Type": "Manager",
    "RewardId": "MAN021",
    "Value": 1
  },
  {
    "Id": "Common_water_pirate_1",
    "Type": "Manager",
    "RewardId": "MAN022",
    "Value": 1
  },
  {
    "Id": "Common_restaurant_ramsay_1",
    "Type": "Manager",
    "RewardId": "MAN025",
    "Value": 1
  },
  {
    "Id": "Common_restaurant_michelin_1",
    "Type": "Manager",
    "RewardId": "MAN026",
    "Value": 1
  },
  {
    "Id": "Common_spa_mud_1",
    "Type": "Manager",
    "RewardId": "MAN029",
    "Value": 1
  },
  {
    "Id": "Common_spa_cucumber_1",
    "Type": "Manager",
    "RewardId": "MAN030",
    "Value": 1
  },
  {
    "Id": "Common_tours_irwin_1",
    "Type": "Manager",
    "RewardId": "MAN033",
    "Value": 1
  },
  {
    "Id": "Common_tours_knowitall_1",
    "Type": "Manager",
    "RewardId": "MAN034",
    "Value": 1
  },
  {
    "Id": "Epic_drink_rootbeer_1",
    "Type": "Manager",
    "RewardId": "MAN004",
    "Value": 1
  },
  {
    "Id": "Epic_entertainment_grandmaboy_1",
    "Type": "Manager",
    "RewardId": "MAN008",
    "Value": 1
  },
  {
    "Id": "Epic_fitness_droz_1",
    "Type": "Manager",
    "RewardId": "MAN012",
    "Value": 1
  },
  {
    "Id": "Epic_hotel_alfred_1",
    "Type": "Manager",
    "RewardId": "MAN016",
    "Value": 1
  },
  {
    "Id": "Epic_venue_poshlady_1",
    "Type": "Manager",
    "RewardId": "MAN020",
    "Value": 1
  },
  {
    "Id": "Epic_water_sunscreen_1",
    "Type": "Manager",
    "RewardId": "MAN024",
    "Value": 1
  },
  {
    "Id": "Epic_restaurant_jabba_1",
    "Type": "Manager",
    "RewardId": "MAN028",
    "Value": 1
  },
  {
    "Id": "Epic_spa_yogi_1",
    "Type": "Manager",
    "RewardId": "MAN032",
    "Value": 1
  },
  {
    "Id": "Rare_tours_knope_1",
    "Type": "Manager",
    "RewardId": "MAN036",
    "Value": 1
  },
  {
    "Id": "Legendary_administration_janitor_1",
    "Type": "Manager",
    "RewardId": "MAN037",
    "Value": 1
  },
  {
    "Id": "Legendary_administration_influencer_1",
    "Type": "Manager",
    "RewardId": "MAN038",
    "Value": 1
  },
  {
    "Id": "Legendary_administration_mentor_1",
    "Type": "Manager",
    "RewardId": "MAN015",
    "Value": 1
  },
  {
    "Id": "Legendary_administration_fashion_1",
    "Type": "Manager",
    "RewardId": "MAN040",
    "Value": 1
  },
  {
    "Id": "Legendary_administration_interior_1",
    "Type": "Manager",
    "RewardId": "MAN041",
    "Value": 1
  },
  {
    "Id": "Rare_drink_ecowarrior_1",
    "Type": "Manager",
    "RewardId": "MAN003",
    "Value": 1
  },
  {
    "Id": "Rare_entertainment_ladyplant_1",
    "Type": "Manager",
    "RewardId": "MAN007",
    "Value": 1
  },
  {
    "Id": "Rare_fitness_fitnessgoal_1",
    "Type": "Manager",
    "RewardId": "MAN011",
    "Value": 1
  },
  {
    "Id": "Rare_hotel_hope_1",
    "Type": "Manager",
    "RewardId": "MAN039",
    "Value": 1
  },
  {
    "Id": "Rare_hotel_hope_3",
    "Type": "Manager",
    "RewardId": "MAN039",
    "Value": 3
  },
  {
    "Id": "Rare_hotel_hope_5",
    "Type": "Manager",
    "RewardId": "MAN039",
    "Value": 5
  },
  {
    "Id": "Rare_hotel_hope_10",
    "Type": "Manager",
    "RewardId": "MAN039",
    "Value": 10
  },
  {
    "Id": "Rare_hotel_hope_20",
    "Type": "Manager",
    "RewardId": "MAN039",
    "Value": 20
  },
  {
    "Id": "Rare_hotel_hope_50",
    "Type": "Manager",
    "RewardId": "MAN039",
    "Value": 50
  },
  {
    "Id": "Rare_venue_octopus_1",
    "Type": "Manager",
    "RewardId": "MAN019",
    "Value": 1
  },
  {
    "Id": "Rare_water_aquaman_1",
    "Type": "Manager",
    "RewardId": "MAN023",
    "Value": 1
  },
  {
    "Id": "Rare_restaurant_jetson_1",
    "Type": "Manager",
    "RewardId": "MAN027",
    "Value": 1
  },
  {
    "Id": "Rare_spa_fad_1",
    "Type": "Manager",
    "RewardId": "MAN031",
    "Value": 1
  },
  {
    "Id": "Epic_tours_gopro_1",
    "Type": "Manager",
    "RewardId": "MAN035",
    "Value": 1
  },
  {
    "Id": "Common_drink_soda_3",
    "Type": "Manager",
    "RewardId": "MAN001",
    "Value": 3
  },
  {
    "Id": "Common_drink_barista_3",
    "Type": "Manager",
    "RewardId": "MAN002",
    "Value": 3
  },
  {
    "Id": "Common_entertainment_animatronic_3",
    "Type": "Manager",
    "RewardId": "MAN005",
    "Value": 3
  },
  {
    "Id": "Common_entertainment_magician_3",
    "Type": "Manager",
    "RewardId": "MAN006",
    "Value": 3
  },
  {
    "Id": "Common_fitness_pilates_3",
    "Type": "Manager",
    "RewardId": "MAN009",
    "Value": 3
  },
  {
    "Id": "Common_fitness_sergeant_3",
    "Type": "Manager",
    "RewardId": "MAN010",
    "Value": 3
  },
  {
    "Id": "Common_hotel_bates_3",
    "Type": "Manager",
    "RewardId": "MAN013",
    "Value": 3
  },
  {
    "Id": "Common_hotel_gustave_3",
    "Type": "Manager",
    "RewardId": "MAN014",
    "Value": 3
  },
  {
    "Id": "Common_venue_circusMC_3",
    "Type": "Manager",
    "RewardId": "MAN017",
    "Value": 3
  },
  {
    "Id": "Common_venue_auctioneer_3",
    "Type": "Manager",
    "RewardId": "MAN018",
    "Value": 3
  },
  {
    "Id": "Common_water_swim_3",
    "Type": "Manager",
    "RewardId": "MAN021",
    "Value": 3
  },
  {
    "Id": "Common_water_pirate_3",
    "Type": "Manager",
    "RewardId": "MAN022",
    "Value": 3
  },
  {
    "Id": "Common_restaurant_ramsay_3",
    "Type": "Manager",
    "RewardId": "MAN025",
    "Value": 3
  },
  {
    "Id": "Common_restaurant_michelin_3",
    "Type": "Manager",
    "RewardId": "MAN026",
    "Value": 3
  },
  {
    "Id": "Common_spa_mud_3",
    "Type": "Manager",
    "RewardId": "MAN029",
    "Value": 3
  },
  {
    "Id": "Common_spa_cucumber_3",
    "Type": "Manager",
    "RewardId": "MAN030",
    "Value": 3
  },
  {
    "Id": "Common_tours_irwin_3",
    "Type": "Manager",
    "RewardId": "MAN033",
    "Value": 3
  },
  {
    "Id": "Common_tours_knowitall_3",
    "Type": "Manager",
    "RewardId": "MAN034",
    "Value": 3
  },
  {
    "Id": "Epic_drink_rootbeer_3",
    "Type": "Manager",
    "RewardId": "MAN004",
    "Value": 3
  },
  {
    "Id": "Epic_entertainment_grandmaboy_3",
    "Type": "Manager",
    "RewardId": "MAN008",
    "Value": 3
  },
  {
    "Id": "Epic_fitness_droz_3",
    "Type": "Manager",
    "RewardId": "MAN012",
    "Value": 3
  },
  {
    "Id": "Epic_hotel_alfred_3",
    "Type": "Manager",
    "RewardId": "MAN016",
    "Value": 3
  },
  {
    "Id": "Epic_venue_poshlady_3",
    "Type": "Manager",
    "RewardId": "MAN020",
    "Value": 3
  },
  {
    "Id": "Epic_water_sunscreen_3",
    "Type": "Manager",
    "RewardId": "MAN024",
    "Value": 3
  },
  {
    "Id": "Epic_restaurant_jabba_3",
    "Type": "Manager",
    "RewardId": "MAN028",
    "Value": 3
  },
  {
    "Id": "Epic_spa_yogi_3",
    "Type": "Manager",
    "RewardId": "MAN032",
    "Value": 3
  },
  {
    "Id": "Rare_tours_knope_3",
    "Type": "Manager",
    "RewardId": "MAN036",
    "Value": 3
  },
  {
    "Id": "Legendary_administration_janitor_3",
    "Type": "Manager",
    "RewardId": "MAN037",
    "Value": 3
  },
  {
    "Id": "Legendary_administration_influencer_3",
    "Type": "Manager",
    "RewardId": "MAN038",
    "Value": 3
  },
  {
    "Id": "Legendary_administration_mentor_3",
    "Type": "Manager",
    "RewardId": "MAN015",
    "Value": 3
  },
  {
    "Id": "Legendary_administration_fashion_3",
    "Type": "Manager",
    "RewardId": "MAN040",
    "Value": 3
  },
  {
    "Id": "Legendary_administration_interior_3",
    "Type": "Manager",
    "RewardId": "MAN041",
    "Value": 3
  },
  {
    "Id": "Rare_drink_ecowarrior_3",
    "Type": "Manager",
    "RewardId": "MAN003",
    "Value": 3
  },
  {
    "Id": "Rare_entertainment_ladyplant_3",
    "Type": "Manager",
    "RewardId": "MAN007",
    "Value": 3
  },
  {
    "Id": "Rare_fitness_fitnessgoal_3",
    "Type": "Manager",
    "RewardId": "MAN011",
    "Value": 3
  },
  {
    "Id": "Rare_venue_octopus_3",
    "Type": "Manager",
    "RewardId": "MAN019",
    "Value": 3
  },
  {
    "Id": "Rare_water_aquaman_3",
    "Type": "Manager",
    "RewardId": "MAN023",
    "Value": 3
  },
  {
    "Id": "Rare_restaurant_jetson_3",
    "Type": "Manager",
    "RewardId": "MAN027",
    "Value": 3
  },
  {
    "Id": "Rare_spa_fad_3",
    "Type": "Manager",
    "RewardId": "MAN031",
    "Value": 3
  },
  {
    "Id": "Epic_tours_gopro_3",
    "Type": "Manager",
    "RewardId": "MAN035",
    "Value": 3
  },
  {
    "Id": "Common_drink_soda_5",
    "Type": "Manager",
    "RewardId": "MAN001",
    "Value": 5
  },
  {
    "Id": "Common_drink_barista_5",
    "Type": "Manager",
    "RewardId": "MAN002",
    "Value": 5
  },
  {
    "Id": "Common_entertainment_animatronic_5",
    "Type": "Manager",
    "RewardId": "MAN005",
    "Value": 5
  },
  {
    "Id": "Common_entertainment_magician_5",
    "Type": "Manager",
    "RewardId": "MAN006",
    "Value": 5
  },
  {
    "Id": "Common_fitness_pilates_5",
    "Type": "Manager",
    "RewardId": "MAN009",
    "Value": 5
  },
  {
    "Id": "Common_fitness_sergeant_5",
    "Type": "Manager",
    "RewardId": "MAN010",
    "Value": 5
  },
  {
    "Id": "Common_hotel_bates_5",
    "Type": "Manager",
    "RewardId": "MAN013",
    "Value": 5
  },
  {
    "Id": "Common_hotel_gustave_5",
    "Type": "Manager",
    "RewardId": "MAN014",
    "Value": 5
  },
  {
    "Id": "Common_venue_circusMC_5",
    "Type": "Manager",
    "RewardId": "MAN017",
    "Value": 5
  },
  {
    "Id": "Common_venue_auctioneer_5",
    "Type": "Manager",
    "RewardId": "MAN018",
    "Value": 5
  },
  {
    "Id": "Common_water_swim_5",
    "Type": "Manager",
    "RewardId": "MAN021",
    "Value": 5
  },
  {
    "Id": "Common_water_pirate_5",
    "Type": "Manager",
    "RewardId": "MAN022",
    "Value": 5
  },
  {
    "Id": "Common_restaurant_ramsay_5",
    "Type": "Manager",
    "RewardId": "MAN025",
    "Value": 5
  },
  {
    "Id": "Common_restaurant_michelin_5",
    "Type": "Manager",
    "RewardId": "MAN026",
    "Value": 5
  },
  {
    "Id": "Common_spa_mud_5",
    "Type": "Manager",
    "RewardId": "MAN029",
    "Value": 5
  },
  {
    "Id": "Common_spa_cucumber_5",
    "Type": "Manager",
    "RewardId": "MAN030",
    "Value": 5
  },
  {
    "Id": "Common_tours_irwin_5",
    "Type": "Manager",
    "RewardId": "MAN033",
    "Value": 5
  },
  {
    "Id": "Common_tours_knowitall_5",
    "Type": "Manager",
    "RewardId": "MAN034",
    "Value": 5
  },
  {
    "Id": "Epic_drink_rootbeer_5",
    "Type": "Manager",
    "RewardId": "MAN004",
    "Value": 5
  },
  {
    "Id": "Epic_entertainment_grandmaboy_5",
    "Type": "Manager",
    "RewardId": "MAN008",
    "Value": 5
  },
  {
    "Id": "Epic_fitness_droz_5",
    "Type": "Manager",
    "RewardId": "MAN012",
    "Value": 5
  },
  {
    "Id": "Epic_hotel_alfred_5",
    "Type": "Manager",
    "RewardId": "MAN016",
    "Value": 5
  },
  {
    "Id": "Epic_venue_poshlady_5",
    "Type": "Manager",
    "RewardId": "MAN020",
    "Value": 5
  },
  {
    "Id": "Epic_water_sunscreen_5",
    "Type": "Manager",
    "RewardId": "MAN024",
    "Value": 5
  },
  {
    "Id": "Epic_restaurant_jabba_5",
    "Type": "Manager",
    "RewardId": "MAN028",
    "Value": 5
  },
  {
    "Id": "Epic_spa_yogi_5",
    "Type": "Manager",
    "RewardId": "MAN032",
    "Value": 5
  },
  {
    "Id": "Rare_tours_knope_5",
    "Type": "Manager",
    "RewardId": "MAN036",
    "Value": 5
  },
  {
    "Id": "Legendary_administration_janitor_5",
    "Type": "Manager",
    "RewardId": "MAN037",
    "Value": 5
  },
  {
    "Id": "Legendary_administration_influencer_5",
    "Type": "Manager",
    "RewardId": "MAN038",
    "Value": 5
  },
  {
    "Id": "Legendary_administration_mentor_5",
    "Type": "Manager",
    "RewardId": "MAN015",
    "Value": 5
  },
  {
    "Id": "Legendary_administration_fashion_5",
    "Type": "Manager",
    "RewardId": "MAN040",
    "Value": 5
  },
  {
    "Id": "Legendary_administration_interior_5",
    "Type": "Manager",
    "RewardId": "MAN041",
    "Value": 5
  },
  {
    "Id": "Rare_drink_ecowarrior_5",
    "Type": "Manager",
    "RewardId": "MAN003",
    "Value": 5
  },
  {
    "Id": "Rare_entertainment_ladyplant_5",
    "Type": "Manager",
    "RewardId": "MAN007",
    "Value": 5
  },
  {
    "Id": "Rare_fitness_fitnessgoal_5",
    "Type": "Manager",
    "RewardId": "MAN011",
    "Value": 5
  },
  {
    "Id": "Rare_venue_octopus_5",
    "Type": "Manager",
    "RewardId": "MAN019",
    "Value": 5
  },
  {
    "Id": "Rare_water_aquaman_5",
    "Type": "Manager",
    "RewardId": "MAN023",
    "Value": 5
  },
  {
    "Id": "Rare_restaurant_jetson_5",
    "Type": "Manager",
    "RewardId": "MAN027",
    "Value": 5
  },
  {
    "Id": "Rare_spa_fad_5",
    "Type": "Manager",
    "RewardId": "MAN031",
    "Value": 5
  },
  {
    "Id": "Epic_tours_gopro_5",
    "Type": "Manager",
    "RewardId": "MAN035",
    "Value": 5
  },
  {
    "Id": "Common_drink_soda_10",
    "Type": "Manager",
    "RewardId": "MAN001",
    "Value": 10
  },
  {
    "Id": "Common_drink_barista_10",
    "Type": "Manager",
    "RewardId": "MAN002",
    "Value": 10
  },
  {
    "Id": "Common_entertainment_animatronic_10",
    "Type": "Manager",
    "RewardId": "MAN005",
    "Value": 10
  },
  {
    "Id": "Common_entertainment_magician_10",
    "Type": "Manager",
    "RewardId": "MAN006",
    "Value": 10
  },
  {
    "Id": "Common_fitness_pilates_10",
    "Type": "Manager",
    "RewardId": "MAN009",
    "Value": 10
  },
  {
    "Id": "Common_fitness_sergeant_10",
    "Type": "Manager",
    "RewardId": "MAN010",
    "Value": 10
  },
  {
    "Id": "Common_hotel_bates_10",
    "Type": "Manager",
    "RewardId": "MAN013",
    "Value": 10
  },
  {
    "Id": "Common_hotel_gustave_10",
    "Type": "Manager",
    "RewardId": "MAN014",
    "Value": 10
  },
  {
    "Id": "Common_venue_circusMC_10",
    "Type": "Manager",
    "RewardId": "MAN017",
    "Value": 10
  },
  {
    "Id": "Common_venue_auctioneer_10",
    "Type": "Manager",
    "RewardId": "MAN018",
    "Value": 10
  },
  {
    "Id": "Common_water_swim_10",
    "Type": "Manager",
    "RewardId": "MAN021",
    "Value": 10
  },
  {
    "Id": "Common_water_pirate_10",
    "Type": "Manager",
    "RewardId": "MAN022",
    "Value": 10
  },
  {
    "Id": "Common_restaurant_ramsay_10",
    "Type": "Manager",
    "RewardId": "MAN025",
    "Value": 10
  },
  {
    "Id": "Common_restaurant_michelin_10",
    "Type": "Manager",
    "RewardId": "MAN026",
    "Value": 10
  },
  {
    "Id": "Common_spa_mud_10",
    "Type": "Manager",
    "RewardId": "MAN029",
    "Value": 10
  },
  {
    "Id": "Common_spa_cucumber_10",
    "Type": "Manager",
    "RewardId": "MAN030",
    "Value": 10
  },
  {
    "Id": "Common_tours_irwin_10",
    "Type": "Manager",
    "RewardId": "MAN033",
    "Value": 10
  },
  {
    "Id": "Common_tours_knowitall_10",
    "Type": "Manager",
    "RewardId": "MAN034",
    "Value": 10
  },
  {
    "Id": "Epic_drink_rootbeer_10",
    "Type": "Manager",
    "RewardId": "MAN004",
    "Value": 10
  },
  {
    "Id": "Epic_entertainment_grandmaboy_10",
    "Type": "Manager",
    "RewardId": "MAN008",
    "Value": 10
  },
  {
    "Id": "Epic_fitness_droz_10",
    "Type": "Manager",
    "RewardId": "MAN012",
    "Value": 10
  },
  {
    "Id": "Epic_hotel_alfred_10",
    "Type": "Manager",
    "RewardId": "MAN016",
    "Value": 10
  },
  {
    "Id": "Epic_venue_poshlady_10",
    "Type": "Manager",
    "RewardId": "MAN020",
    "Value": 10
  },
  {
    "Id": "Epic_water_sunscreen_10",
    "Type": "Manager",
    "RewardId": "MAN024",
    "Value": 10
  },
  {
    "Id": "Epic_restaurant_jabba_10",
    "Type": "Manager",
    "RewardId": "MAN028",
    "Value": 10
  },
  {
    "Id": "Epic_spa_yogi_10",
    "Type": "Manager",
    "RewardId": "MAN032",
    "Value": 10
  },
  {
    "Id": "Rare_tours_knope_10",
    "Type": "Manager",
    "RewardId": "MAN036",
    "Value": 10
  },
  {
    "Id": "Legendary_administration_janitor_10",
    "Type": "Manager",
    "RewardId": "MAN037",
    "Value": 10
  },
  {
    "Id": "Legendary_administration_influencer_10",
    "Type": "Manager",
    "RewardId": "MAN038",
    "Value": 10
  },
  {
    "Id": "Legendary_administration_mentor_10",
    "Type": "Manager",
    "RewardId": "MAN015",
    "Value": 10
  },
  {
    "Id": "Legendary_administration_fashion_10",
    "Type": "Manager",
    "RewardId": "MAN040",
    "Value": 10
  },
  {
    "Id": "Legendary_administration_interior_10",
    "Type": "Manager",
    "RewardId": "MAN041",
    "Value": 10
  },
  {
    "Id": "Rare_drink_ecowarrior_10",
    "Type": "Manager",
    "RewardId": "MAN003",
    "Value": 10
  },
  {
    "Id": "Rare_entertainment_ladyplant_10",
    "Type": "Manager",
    "RewardId": "MAN007",
    "Value": 10
  },
  {
    "Id": "Rare_fitness_fitnessgoal_10",
    "Type": "Manager",
    "RewardId": "MAN011",
    "Value": 10
  },
  {
    "Id": "Rare_venue_octopus_10",
    "Type": "Manager",
    "RewardId": "MAN019",
    "Value": 10
  },
  {
    "Id": "Rare_water_aquaman_10",
    "Type": "Manager",
    "RewardId": "MAN023",
    "Value": 10
  },
  {
    "Id": "Rare_restaurant_jetson_10",
    "Type": "Manager",
    "RewardId": "MAN027",
    "Value": 10
  },
  {
    "Id": "Rare_spa_fad_10",
    "Type": "Manager",
    "RewardId": "MAN031",
    "Value": 10
  },
  {
    "Id": "Epic_tours_gopro_10",
    "Type": "Manager",
    "RewardId": "MAN035",
    "Value": 10
  },
  {
    "Id": "Common_drink_soda_20",
    "Type": "Manager",
    "RewardId": "MAN001",
    "Value": 20
  },
  {
    "Id": "Common_drink_barista_20",
    "Type": "Manager",
    "RewardId": "MAN002",
    "Value": 20
  },
  {
    "Id": "Common_entertainment_animatronic_20",
    "Type": "Manager",
    "RewardId": "MAN005",
    "Value": 20
  },
  {
    "Id": "Common_entertainment_magician_20",
    "Type": "Manager",
    "RewardId": "MAN006",
    "Value": 20
  },
  {
    "Id": "Common_fitness_pilates_20",
    "Type": "Manager",
    "RewardId": "MAN009",
    "Value": 20
  },
  {
    "Id": "Common_fitness_sergeant_20",
    "Type": "Manager",
    "RewardId": "MAN010",
    "Value": 20
  },
  {
    "Id": "Common_hotel_bates_20",
    "Type": "Manager",
    "RewardId": "MAN013",
    "Value": 20
  },
  {
    "Id": "Common_hotel_gustave_20",
    "Type": "Manager",
    "RewardId": "MAN014",
    "Value": 20
  },
  {
    "Id": "Common_venue_circusMC_20",
    "Type": "Manager",
    "RewardId": "MAN017",
    "Value": 20
  },
  {
    "Id": "Common_venue_auctioneer_20",
    "Type": "Manager",
    "RewardId": "MAN018",
    "Value": 20
  },
  {
    "Id": "Common_water_swim_20",
    "Type": "Manager",
    "RewardId": "MAN021",
    "Value": 20
  },
  {
    "Id": "Common_water_pirate_20",
    "Type": "Manager",
    "RewardId": "MAN022",
    "Value": 20
  },
  {
    "Id": "Common_restaurant_ramsay_20",
    "Type": "Manager",
    "RewardId": "MAN025",
    "Value": 20
  },
  {
    "Id": "Common_restaurant_michelin_20",
    "Type": "Manager",
    "RewardId": "MAN026",
    "Value": 20
  },
  {
    "Id": "Common_spa_mud_20",
    "Type": "Manager",
    "RewardId": "MAN029",
    "Value": 20
  },
  {
    "Id": "Common_spa_cucumber_20",
    "Type": "Manager",
    "RewardId": "MAN030",
    "Value": 20
  },
  {
    "Id": "Common_tours_irwin_20",
    "Type": "Manager",
    "RewardId": "MAN033",
    "Value": 20
  },
  {
    "Id": "Common_tours_knowitall_20",
    "Type": "Manager",
    "RewardId": "MAN034",
    "Value": 20
  },
  {
    "Id": "Epic_drink_rootbeer_20",
    "Type": "Manager",
    "RewardId": "MAN004",
    "Value": 20
  },
  {
    "Id": "Epic_entertainment_grandmaboy_20",
    "Type": "Manager",
    "RewardId": "MAN008",
    "Value": 20
  },
  {
    "Id": "Epic_fitness_droz_20",
    "Type": "Manager",
    "RewardId": "MAN012",
    "Value": 20
  },
  {
    "Id": "Epic_hotel_alfred_20",
    "Type": "Manager",
    "RewardId": "MAN016",
    "Value": 20
  },
  {
    "Id": "Epic_venue_poshlady_20",
    "Type": "Manager",
    "RewardId": "MAN020",
    "Value": 20
  },
  {
    "Id": "Epic_water_sunscreen_20",
    "Type": "Manager",
    "RewardId": "MAN024",
    "Value": 20
  },
  {
    "Id": "Epic_restaurant_jabba_20",
    "Type": "Manager",
    "RewardId": "MAN028",
    "Value": 20
  },
  {
    "Id": "Epic_spa_yogi_20",
    "Type": "Manager",
    "RewardId": "MAN032",
    "Value": 20
  },
  {
    "Id": "Rare_tours_knope_20",
    "Type": "Manager",
    "RewardId": "MAN036",
    "Value": 20
  },
  {
    "Id": "Legendary_administration_janitor_20",
    "Type": "Manager",
    "RewardId": "MAN037",
    "Value": 20
  },
  {
    "Id": "Legendary_administration_influencer_20",
    "Type": "Manager",
    "RewardId": "MAN038",
    "Value": 20
  },
  {
    "Id": "Legendary_administration_mentor_20",
    "Type": "Manager",
    "RewardId": "MAN015",
    "Value": 20
  },
  {
    "Id": "Legendary_administration_fashion_20",
    "Type": "Manager",
    "RewardId": "MAN040",
    "Value": 20
  },
  {
    "Id": "Legendary_administration_interior_20",
    "Type": "Manager",
    "RewardId": "MAN041",
    "Value": 20
  },
  {
    "Id": "Rare_drink_ecowarrior_20",
    "Type": "Manager",
    "RewardId": "MAN003",
    "Value": 20
  },
  {
    "Id": "Rare_entertainment_ladyplant_20",
    "Type": "Manager",
    "RewardId": "MAN007",
    "Value": 20
  },
  {
    "Id": "Rare_fitness_fitnessgoal_20",
    "Type": "Manager",
    "RewardId": "MAN011",
    "Value": 20
  },
  {
    "Id": "Rare_venue_octopus_20",
    "Type": "Manager",
    "RewardId": "MAN019",
    "Value": 20
  },
  {
    "Id": "Rare_water_aquaman_20",
    "Type": "Manager",
    "RewardId": "MAN023",
    "Value": 20
  },
  {
    "Id": "Rare_restaurant_jetson_20",
    "Type": "Manager",
    "RewardId": "MAN027",
    "Value": 20
  },
  {
    "Id": "Rare_spa_fad_20",
    "Type": "Manager",
    "RewardId": "MAN031",
    "Value": 20
  },
  {
    "Id": "Epic_tours_gopro_20",
    "Type": "Manager",
    "RewardId": "MAN035",
    "Value": 20
  },
  {
    "Id": "Common_drink_soda_50",
    "Type": "Manager",
    "RewardId": "MAN001",
    "Value": 50
  },
  {
    "Id": "Common_drink_barista_50",
    "Type": "Manager",
    "RewardId": "MAN002",
    "Value": 50
  },
  {
    "Id": "Common_entertainment_animatronic_50",
    "Type": "Manager",
    "RewardId": "MAN005",
    "Value": 50
  },
  {
    "Id": "Common_entertainment_magician_50",
    "Type": "Manager",
    "RewardId": "MAN006",
    "Value": 50
  },
  {
    "Id": "Common_fitness_pilates_50",
    "Type": "Manager",
    "RewardId": "MAN009",
    "Value": 50
  },
  {
    "Id": "Common_fitness_sergeant_50",
    "Type": "Manager",
    "RewardId": "MAN010",
    "Value": 50
  },
  {
    "Id": "Common_hotel_bates_50",
    "Type": "Manager",
    "RewardId": "MAN013",
    "Value": 50
  },
  {
    "Id": "Common_hotel_gustave_50",
    "Type": "Manager",
    "RewardId": "MAN014",
    "Value": 50
  },
  {
    "Id": "Common_venue_circusMC_50",
    "Type": "Manager",
    "RewardId": "MAN017",
    "Value": 50
  },
  {
    "Id": "Common_venue_auctioneer_50",
    "Type": "Manager",
    "RewardId": "MAN018",
    "Value": 50
  },
  {
    "Id": "Common_water_swim_50",
    "Type": "Manager",
    "RewardId": "MAN021",
    "Value": 50
  },
  {
    "Id": "Common_water_pirate_50",
    "Type": "Manager",
    "RewardId": "MAN022",
    "Value": 50
  },
  {
    "Id": "Common_restaurant_ramsay_50",
    "Type": "Manager",
    "RewardId": "MAN025",
    "Value": 50
  },
  {
    "Id": "Common_restaurant_michelin_50",
    "Type": "Manager",
    "RewardId": "MAN026",
    "Value": 50
  },
  {
    "Id": "Common_spa_mud_50",
    "Type": "Manager",
    "RewardId": "MAN029",
    "Value": 50
  },
  {
    "Id": "Common_spa_cucumber_50",
    "Type": "Manager",
    "RewardId": "MAN030",
    "Value": 50
  },
  {
    "Id": "Common_tours_irwin_50",
    "Type": "Manager",
    "RewardId": "MAN033",
    "Value": 50
  },
  {
    "Id": "Common_tours_knowitall_50",
    "Type": "Manager",
    "RewardId": "MAN034",
    "Value": 50
  },
  {
    "Id": "Epic_drink_rootbeer_50",
    "Type": "Manager",
    "RewardId": "MAN004",
    "Value": 50
  },
  {
    "Id": "Epic_entertainment_grandmaboy_50",
    "Type": "Manager",
    "RewardId": "MAN008",
    "Value": 50
  },
  {
    "Id": "Epic_fitness_droz_50",
    "Type": "Manager",
    "RewardId": "MAN012",
    "Value": 50
  },
  {
    "Id": "Epic_hotel_alfred_50",
    "Type": "Manager",
    "RewardId": "MAN016",
    "Value": 50
  },
  {
    "Id": "Epic_venue_poshlady_50",
    "Type": "Manager",
    "RewardId": "MAN020",
    "Value": 50
  },
  {
    "Id": "Epic_water_sunscreen_50",
    "Type": "Manager",
    "RewardId": "MAN024",
    "Value": 50
  },
  {
    "Id": "Epic_restaurant_jabba_50",
    "Type": "Manager",
    "RewardId": "MAN028",
    "Value": 50
  },
  {
    "Id": "Epic_spa_yogi_50",
    "Type": "Manager",
    "RewardId": "MAN032",
    "Value": 50
  },
  {
    "Id": "Rare_tours_knope_50",
    "Type": "Manager",
    "RewardId": "MAN036",
    "Value": 50
  },
  {
    "Id": "Legendary_administration_janitor_50",
    "Type": "Manager",
    "RewardId": "MAN037",
    "Value": 50
  },
  {
    "Id": "Legendary_administration_influencer_50",
    "Type": "Manager",
    "RewardId": "MAN038",
    "Value": 50
  },
  {
    "Id": "Legendary_administration_mentor_50",
    "Type": "Manager",
    "RewardId": "MAN015",
    "Value": 50
  },
  {
    "Id": "Legendary_administration_fashion_50",
    "Type": "Manager",
    "RewardId": "MAN040",
    "Value": 50
  },
  {
    "Id": "Legendary_administration_interior_50",
    "Type": "Manager",
    "RewardId": "MAN041",
    "Value": 50
  },
  {
    "Id": "Rare_drink_ecowarrior_50",
    "Type": "Manager",
    "RewardId": "MAN003",
    "Value": 50
  },
  {
    "Id": "Rare_entertainment_ladyplant_50",
    "Type": "Manager",
    "RewardId": "MAN007",
    "Value": 50
  },
  {
    "Id": "Rare_fitness_fitnessgoal_50",
    "Type": "Manager",
    "RewardId": "MAN011",
    "Value": 50
  },
  {
    "Id": "Rare_venue_octopus_50",
    "Type": "Manager",
    "RewardId": "MAN019",
    "Value": 50
  },
  {
    "Id": "Rare_water_aquaman_50",
    "Type": "Manager",
    "RewardId": "MAN023",
    "Value": 50
  },
  {
    "Id": "Rare_restaurant_jetson_50",
    "Type": "Manager",
    "RewardId": "MAN027",
    "Value": 50
  },
  {
    "Id": "Rare_spa_fad_50",
    "Type": "Manager",
    "RewardId": "MAN031",
    "Value": 50
  },
  {
    "Id": "Epic_tours_gopro_50",
    "Type": "Manager",
    "RewardId": "MAN035",
    "Value": 50
  },
  {
    "Id": "MR_Regular_Rank2",
    "Type": "Gacha",
    "RewardId": "regular_rank2",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Rank3",
    "Type": "Gacha",
    "RewardId": "regular_rank3",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Rank4",
    "Type": "Gacha",
    "RewardId": "regular_rank4",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Rank5",
    "Type": "Gacha",
    "RewardId": "regular_rank5",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Rank6",
    "Type": "Gacha",
    "RewardId": "regular_rank6",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Rank7",
    "Type": "Gacha",
    "RewardId": "regular_rank7",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Rank8",
    "Type": "Gacha",
    "RewardId": "regular_rank8",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Rank9",
    "Type": "Gacha",
    "RewardId": "regular_rank9",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Rank10",
    "Type": "Gacha",
    "RewardId": "regular_rank10",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Rank11",
    "Type": "Gacha",
    "RewardId": "regular_rank11",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Rank12",
    "Type": "Gacha",
    "RewardId": "regular_rank12",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Rank13",
    "Type": "Gacha",
    "RewardId": "regular_rank13",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Rank14",
    "Type": "Gacha",
    "RewardId": "regular_rank14",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Rank15",
    "Type": "Gacha",
    "RewardId": "regular_rank15",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Standard",
    "Type": "Gacha",
    "RewardId": "regular_standard",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Consumable_Rank2",
    "Type": "Gacha",
    "RewardId": "regular_consumable_rank2",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Consumable_Rank3",
    "Type": "Gacha",
    "RewardId": "regular_consumable_rank3",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Consumable_Rank4",
    "Type": "Gacha",
    "RewardId": "regular_consumable_rank4",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Consumable_Rank5",
    "Type": "Gacha",
    "RewardId": "regular_consumable_rank5",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Consumable_Rank6",
    "Type": "Gacha",
    "RewardId": "regular_consumable_rank6",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Consumable_Rank7",
    "Type": "Gacha",
    "RewardId": "regular_consumable_rank7",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Consumable_Rank8",
    "Type": "Gacha",
    "RewardId": "regular_consumable_rank8",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Consumable_Rank9",
    "Type": "Gacha",
    "RewardId": "regular_consumable_rank9",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Consumable_Rank10",
    "Type": "Gacha",
    "RewardId": "regular_consumable_rank10",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Consumable_Rank11",
    "Type": "Gacha",
    "RewardId": "regular_consumable_rank11",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Consumable_Rank12",
    "Type": "Gacha",
    "RewardId": "regular_consumable_rank12",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Consumable_Rank13",
    "Type": "Gacha",
    "RewardId": "regular_consumable_rank13",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Consumable_Rank14",
    "Type": "Gacha",
    "RewardId": "regular_consumable_rank14",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Consumable_Rank15",
    "Type": "Gacha",
    "RewardId": "regular_consumable_rank15",
    "Value": 1
  },
  {
    "Id": "MR_Regular_Consumable_Standard",
    "Type": "Gacha",
    "RewardId": "regular_consumable_standard",
    "Value": 1
  },
  {
    "Id": "MR_Good_Rank7",
    "Type": "Gacha",
    "RewardId": "good_rank7",
    "Value": 1
  },
  {
    "Id": "MR_Good_Rank8",
    "Type": "Gacha",
    "RewardId": "good_rank8",
    "Value": 1
  },
  {
    "Id": "MR_Good_Rank9",
    "Type": "Gacha",
    "RewardId": "good_rank9",
    "Value": 1
  },
  {
    "Id": "MR_Good_Rank10",
    "Type": "Gacha",
    "RewardId": "good_rank10",
    "Value": 1
  },
  {
    "Id": "MR_Good_Rank11",
    "Type": "Gacha",
    "RewardId": "good_rank11",
    "Value": 1
  },
  {
    "Id": "MR_Good_Rank12",
    "Type": "Gacha",
    "RewardId": "good_rank12",
    "Value": 1
  },
  {
    "Id": "MR_Good_Rank13",
    "Type": "Gacha",
    "RewardId": "good_rank13",
    "Value": 1
  },
  {
    "Id": "MR_Good_Rank14",
    "Type": "Gacha",
    "RewardId": "good_rank14",
    "Value": 1
  },
  {
    "Id": "MR_Good_Rank15",
    "Type": "Gacha",
    "RewardId": "good_rank15",
    "Value": 1
  },
  {
    "Id": "MR_Good_Standard",
    "Type": "Gacha",
    "RewardId": "good_standard",
    "Value": 1
  },
  {
    "Id": "MR_Good_WP_Rank7",
    "Type": "Gacha",
    "RewardId": "good_premium_rank7",
    "Value": 1
  },
  {
    "Id": "MR_Good_WP_Rank8",
    "Type": "Gacha",
    "RewardId": "good_premium_rank8",
    "Value": 1
  },
  {
    "Id": "MR_Good_WP_Rank9",
    "Type": "Gacha",
    "RewardId": "good_premium_rank9",
    "Value": 1
  },
  {
    "Id": "MR_Good_WP_Rank10",
    "Type": "Gacha",
    "RewardId": "good_premium_rank10",
    "Value": 1
  },
  {
    "Id": "MR_Good_WP_Rank11",
    "Type": "Gacha",
    "RewardId": "good_premium_rank11",
    "Value": 1
  },
  {
    "Id": "MR_Good_WP_Rank12",
    "Type": "Gacha",
    "RewardId": "good_premium_rank12",
    "Value": 1
  },
  {
    "Id": "MR_Good_WP_Rank13",
    "Type": "Gacha",
    "RewardId": "good_premium_rank13",
    "Value": 1
  },
  {
    "Id": "MR_Good_WP_Rank14",
    "Type": "Gacha",
    "RewardId": "good_premium_rank14",
    "Value": 1
  },
  {
    "Id": "MR_Good_WP_Rank15",
    "Type": "Gacha",
    "RewardId": "good_premium_rank15",
    "Value": 1
  },
  {
    "Id": "MR_Good_WP_Standard",
    "Type": "Gacha",
    "RewardId": "good_premium_standard",
    "Value": 1
  },
  {
    "Id": "MR_Good_Consumable_Rank7",
    "Type": "Gacha",
    "RewardId": "good_consumable_rank7",
    "Value": 1
  },
  {
    "Id": "MR_Good_Consumable_Rank8",
    "Type": "Gacha",
    "RewardId": "good_consumable_rank8",
    "Value": 1
  },
  {
    "Id": "MR_Good_Consumable_Rank9",
    "Type": "Gacha",
    "RewardId": "good_consumable_rank9",
    "Value": 1
  },
  {
    "Id": "MR_Good_Consumable_Rank10",
    "Type": "Gacha",
    "RewardId": "good_consumable_rank10",
    "Value": 1
  },
  {
    "Id": "MR_Good_Consumable_Rank11",
    "Type": "Gacha",
    "RewardId": "good_consumable_rank11",
    "Value": 1
  },
  {
    "Id": "MR_Good_Consumable_Rank12",
    "Type": "Gacha",
    "RewardId": "good_consumable_rank12",
    "Value": 1
  },
  {
    "Id": "MR_Good_Consumable_Rank13",
    "Type": "Gacha",
    "RewardId": "good_consumable_rank13",
    "Value": 1
  },
  {
    "Id": "MR_Good_Consumable_Rank14",
    "Type": "Gacha",
    "RewardId": "good_consumable_rank14",
    "Value": 1
  },
  {
    "Id": "MR_Good_Consumable_Rank15",
    "Type": "Gacha",
    "RewardId": "good_consumable_rank15",
    "Value": 1
  },
  {
    "Id": "MR_Good_Consumable_Standard",
    "Type": "Gacha",
    "RewardId": "good_consumable_standard",
    "Value": 1
  },
  {
    "Id": "MR_Better_WP_Rank7",
    "Type": "Gacha",
    "RewardId": "better_premium_rank7",
    "Value": 1
  },
  {
    "Id": "MR_Better_WP_Rank8",
    "Type": "Gacha",
    "RewardId": "better_premium_rank8",
    "Value": 1
  },
  {
    "Id": "MR_Better_WP_Rank9",
    "Type": "Gacha",
    "RewardId": "better_premium_rank9",
    "Value": 1
  },
  {
    "Id": "MR_Better_WP_Rank10",
    "Type": "Gacha",
    "RewardId": "better_premium_rank10",
    "Value": 1
  },
  {
    "Id": "MR_Better_WP_Rank11",
    "Type": "Gacha",
    "RewardId": "better_premium_rank11",
    "Value": 1
  },
  {
    "Id": "MR_Better_WP_Rank12",
    "Type": "Gacha",
    "RewardId": "better_premium_rank12",
    "Value": 1
  },
  {
    "Id": "MR_Better_WP_Rank13",
    "Type": "Gacha",
    "RewardId": "better_premium_rank13",
    "Value": 1
  },
  {
    "Id": "MR_Better_WP_Rank14",
    "Type": "Gacha",
    "RewardId": "better_premium_rank14",
    "Value": 1
  },
  {
    "Id": "MR_Better_WP_Rank15",
    "Type": "Gacha",
    "RewardId": "better_premium_rank15",
    "Value": 1
  },
  {
    "Id": "MR_Better_WP_Standard",
    "Type": "Gacha",
    "RewardId": "better_premium_standard",
    "Value": 1
  },
  {
    "Id": "MR_Better_Consumable_Rank7",
    "Type": "Gacha",
    "RewardId": "better_consumable_rank7",
    "Value": 1
  },
  {
    "Id": "MR_Better_Consumable_Rank8",
    "Type": "Gacha",
    "RewardId": "better_consumable_rank8",
    "Value": 1
  },
  {
    "Id": "MR_Better_Consumable_Rank9",
    "Type": "Gacha",
    "RewardId": "better_consumable_rank9",
    "Value": 1
  },
  {
    "Id": "MR_Better_Consumable_Rank10",
    "Type": "Gacha",
    "RewardId": "better_consumable_rank10",
    "Value": 1
  },
  {
    "Id": "MR_Better_Consumable_Rank11",
    "Type": "Gacha",
    "RewardId": "better_consumable_rank11",
    "Value": 1
  },
  {
    "Id": "MR_Better_Consumable_Rank12",
    "Type": "Gacha",
    "RewardId": "better_consumable_rank12",
    "Value": 1
  },
  {
    "Id": "MR_Better_Consumable_Rank13",
    "Type": "Gacha",
    "RewardId": "better_consumable_rank13",
    "Value": 1
  },
  {
    "Id": "MR_Better_Consumable_Rank14",
    "Type": "Gacha",
    "RewardId": "better_consumable_rank14",
    "Value": 1
  },
  {
    "Id": "MR_Better_Consumable_Rank15",
    "Type": "Gacha",
    "RewardId": "better_consumable_rank15",
    "Value": 1
  },
  {
    "Id": "MR_Better_Consumable_Standard",
    "Type": "Gacha",
    "RewardId": "better_consumable_standard",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_2",
    "Type": "Gacha",
    "RewardId": "rankup_rank2",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_3",
    "Type": "Gacha",
    "RewardId": "rankup_rank3",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_4",
    "Type": "Gacha",
    "RewardId": "rankup_rank4",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_5",
    "Type": "Gacha",
    "RewardId": "rankup_rank5",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_6",
    "Type": "Gacha",
    "RewardId": "rankup_rank6",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_7",
    "Type": "Gacha",
    "RewardId": "rankup_rank7",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_8",
    "Type": "Gacha",
    "RewardId": "rankup_rank8",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_9",
    "Type": "Gacha",
    "RewardId": "rankup_rank9",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_10",
    "Type": "Gacha",
    "RewardId": "rankup_rank10",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_11",
    "Type": "Gacha",
    "RewardId": "rankup_rank11",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_12",
    "Type": "Gacha",
    "RewardId": "rankup_rank12",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_13",
    "Type": "Gacha",
    "RewardId": "rankup_rank13",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_14",
    "Type": "Gacha",
    "RewardId": "rankup_rank14",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_15",
    "Type": "Gacha",
    "RewardId": "rankup_rank15",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_Standard",
    "Type": "Gacha",
    "RewardId": "rankup_standard",
    "Value": 1
  },
  {
    "Id": "Store_Minibox_Standard",
    "Type": "Gacha",
    "RewardId": "minibox_standard",
    "Value": 1
  },
  {
    "Id": "Store_BigBox_Standard",
    "Type": "Gacha",
    "RewardId": "bigbox_standard",
    "Value": 1
  },
  {
    "Id": "Store_Megabox_Standard",
    "Type": "Gacha",
    "RewardId": "megabox_standard",
    "Value": 1
  },
  {
    "Id": "Common_drink_soda_7",
    "Type": "Manager",
    "RewardId": "MAN001",
    "Value": 7
  },
  {
    "Id": "Common_drink_barista_7",
    "Type": "Manager",
    "RewardId": "MAN002",
    "Value": 7
  },
  {
    "Id": "Common_entertainment_animatronic_7",
    "Type": "Manager",
    "RewardId": "MAN005",
    "Value": 7
  },
  {
    "Id": "Common_entertainment_magician_7",
    "Type": "Manager",
    "RewardId": "MAN006",
    "Value": 7
  },
  {
    "Id": "Common_fitness_pilates_7",
    "Type": "Manager",
    "RewardId": "MAN009",
    "Value": 7
  },
  {
    "Id": "Common_fitness_sergeant_7",
    "Type": "Manager",
    "RewardId": "MAN010",
    "Value": 7
  },
  {
    "Id": "Common_hotel_bates_7",
    "Type": "Manager",
    "RewardId": "MAN013",
    "Value": 7
  },
  {
    "Id": "Common_hotel_gustave_7",
    "Type": "Manager",
    "RewardId": "MAN014",
    "Value": 7
  },
  {
    "Id": "Common_venue_circusMC_7",
    "Type": "Manager",
    "RewardId": "MAN017",
    "Value": 7
  },
  {
    "Id": "Common_venue_auctioneer_7",
    "Type": "Manager",
    "RewardId": "MAN018",
    "Value": 7
  },
  {
    "Id": "Common_water_swim_7",
    "Type": "Manager",
    "RewardId": "MAN021",
    "Value": 7
  },
  {
    "Id": "Common_water_pirate_7",
    "Type": "Manager",
    "RewardId": "MAN022",
    "Value": 7
  },
  {
    "Id": "Common_restaurant_ramsay_7",
    "Type": "Manager",
    "RewardId": "MAN025",
    "Value": 7
  },
  {
    "Id": "Common_restaurant_michelin_7",
    "Type": "Manager",
    "RewardId": "MAN026",
    "Value": 7
  },
  {
    "Id": "Common_spa_mud_7",
    "Type": "Manager",
    "RewardId": "MAN029",
    "Value": 7
  },
  {
    "Id": "Common_spa_cucumber_7",
    "Type": "Manager",
    "RewardId": "MAN030",
    "Value": 7
  },
  {
    "Id": "Common_tours_irwin_7",
    "Type": "Manager",
    "RewardId": "MAN033",
    "Value": 7
  },
  {
    "Id": "Common_tours_knowitall_7",
    "Type": "Manager",
    "RewardId": "MAN034",
    "Value": 7
  },
  {
    "Id": "Epic_drink_rootbeer_7",
    "Type": "Manager",
    "RewardId": "MAN004",
    "Value": 7
  },
  {
    "Id": "Epic_entertainment_grandmaboy_7",
    "Type": "Manager",
    "RewardId": "MAN008",
    "Value": 7
  },
  {
    "Id": "Epic_fitness_droz_7",
    "Type": "Manager",
    "RewardId": "MAN012",
    "Value": 7
  },
  {
    "Id": "Epic_hotel_alfred_7",
    "Type": "Manager",
    "RewardId": "MAN016",
    "Value": 7
  },
  {
    "Id": "Epic_venue_poshlady_7",
    "Type": "Manager",
    "RewardId": "MAN020",
    "Value": 7
  },
  {
    "Id": "Epic_water_sunscreen_7",
    "Type": "Manager",
    "RewardId": "MAN024",
    "Value": 7
  },
  {
    "Id": "Epic_restaurant_jabba_7",
    "Type": "Manager",
    "RewardId": "MAN028",
    "Value": 7
  },
  {
    "Id": "Epic_spa_yogi_7",
    "Type": "Manager",
    "RewardId": "MAN032",
    "Value": 7
  },
  {
    "Id": "Rare_tours_knope_7",
    "Type": "Manager",
    "RewardId": "MAN036",
    "Value": 7
  },
  {
    "Id": "Legendary_administration_janitor_7",
    "Type": "Manager",
    "RewardId": "MAN037",
    "Value": 7
  },
  {
    "Id": "Legendary_administration_influencer_7",
    "Type": "Manager",
    "RewardId": "MAN038",
    "Value": 7
  },
  {
    "Id": "Legendary_administration_mentor_7",
    "Type": "Manager",
    "RewardId": "MAN015",
    "Value": 7
  },
  {
    "Id": "Legendary_administration_fashion_7",
    "Type": "Manager",
    "RewardId": "MAN040",
    "Value": 7
  },
  {
    "Id": "Legendary_administration_interior_7",
    "Type": "Manager",
    "RewardId": "MAN041",
    "Value": 7
  },
  {
    "Id": "Rare_drink_ecowarrior_7",
    "Type": "Manager",
    "RewardId": "MAN003",
    "Value": 7
  },
  {
    "Id": "Rare_entertainment_ladyplant_7",
    "Type": "Manager",
    "RewardId": "MAN007",
    "Value": 7
  },
  {
    "Id": "Rare_fitness_fitnessgoal_7",
    "Type": "Manager",
    "RewardId": "MAN011",
    "Value": 7
  },
  {
    "Id": "Rare_venue_octopus_7",
    "Type": "Manager",
    "RewardId": "MAN019",
    "Value": 7
  },
  {
    "Id": "Rare_water_aquaman_7",
    "Type": "Manager",
    "RewardId": "MAN023",
    "Value": 7
  },
  {
    "Id": "Rare_restaurant_jetson_7",
    "Type": "Manager",
    "RewardId": "MAN027",
    "Value": 7
  },
  {
    "Id": "Rare_spa_fad_7",
    "Type": "Manager",
    "RewardId": "MAN031",
    "Value": 7
  },
  {
    "Id": "Epic_tours_gopro_7",
    "Type": "Manager",
    "RewardId": "MAN035",
    "Value": 7
  },
  {
    "Id": "Gacha_Scripted_Gustave_5",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Gustave_5",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Ramsay_5",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Ramsay_5",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Mentor_7",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Wick_7",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Gustave_10",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Gustave_10",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Cucumber_7",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Cucumber_7",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Wick_7",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Wick_7",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Pirate_7",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Pirate_7",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Irwin_7",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Irwin_7",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Irwin_1",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Irwin_1",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Janitor_7",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Janitor_7",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Jabba_7",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Jabba_7",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Alfred_7",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Alfred_7",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Gustave_1",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Gustave_1",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Gustave_3",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Gustave_3",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Ramsay_1",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Ramsay_1",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Cucumber_1",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Cucumber_1",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Cucumber_3",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Cucumber_3",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Animatronic_3",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Animatronic_3",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Bates_5",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Bates_5",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Animatronic_7",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Animatronic_7",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Michelin_1",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Michelin_1",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Hope_5",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Hope_5",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Jetson_1",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Jetson_1",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Bates_3",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Bates_3",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Pilates_3",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Pilates_3",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Michelin_3",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Michelin_3",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_MC_3",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_MC_3",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Magician_3",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Magician_3",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Barista_7",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Barista_7",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Rootbeer_1",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Rootbeer_1",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_EcoWarrior_1",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_EcoWarrior_1",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Pirate_3",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Pirate_3",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Mud_3",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Mud_3",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Swim_3",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Swim_3",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Fitnessgoal_1",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Fitnessgoal_1",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Pilates_1",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Pilates_1",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Ladyplant_1",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Ladyplant_1",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Magician_1",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Magician_1",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Barista_1",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Barista_1",
    "Value": 1
  },
  {
    "Id": "secondarycurrency_small",
    "Type": "Resources",
    "RewardId": "secondarycurrency",
    "Value": 350
  },
  {
    "Id": "secondarycurrency_medium",
    "Type": "Resources",
    "RewardId": "secondarycurrency",
    "Value": 1200
  },
  {
    "Id": "secondarycurrency_big",
    "Type": "Resources",
    "RewardId": "secondarycurrency",
    "Value": 7500
  },
  {
    "Id": "instantcash_1",
    "Type": "Experiment",
    "RewardId": "EX167",
    "Value": 1
  },
  {
    "Id": "instantcash_4",
    "Type": "Experiment",
    "RewardId": "EX164",
    "Value": 1
  },
  {
    "Id": "instantcash_24",
    "Type": "Experiment",
    "RewardId": "EX165",
    "Value": 1
  },
  {
    "Id": "instantcustomers_1",
    "Type": "Experiment",
    "RewardId": "EX187",
    "Value": 1
  },
  {
    "Id": "instantcustomers_4",
    "Type": "Experiment",
    "RewardId": "EX184",
    "Value": 1
  },
  {
    "Id": "instantcustomers_24",
    "Type": "Experiment",
    "RewardId": "EX185",
    "Value": 1
  },
  {
    "Id": "t02_premiumcurrency",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 120
  },
  {
    "Id": "t05_premiumcurrency",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 400
  },
  {
    "Id": "t10_premiumcurrency",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 1000
  },
  {
    "Id": "t20_premiumcurrency",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 2500
  },
  {
    "Id": "t30_premiumcurrency",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 3000
  },
  {
    "Id": "t50_premiumcurrency",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 6500
  },
  {
    "Id": "t60_premiumcurrency",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 16000
  },
  {
    "Id": "instantcash_1x3",
    "Type": "Experiment",
    "RewardId": "EX167",
    "Value": 3
  },
  {
    "Id": "instantcash_4x3",
    "Type": "Experiment",
    "RewardId": "EX164",
    "Value": 3
  },
  {
    "Id": "instantcash_24x3",
    "Type": "Experiment",
    "RewardId": "EX165",
    "Value": 3
  },
  {
    "Id": "instantcustomers_1x3",
    "Type": "Experiment",
    "RewardId": "EX187",
    "Value": 3
  },
  {
    "Id": "instantcustomers_4x3",
    "Type": "Experiment",
    "RewardId": "EX184",
    "Value": 3
  },
  {
    "Id": "instantcustomers_24x3",
    "Type": "Experiment",
    "RewardId": "EX185",
    "Value": 3
  },
  {
    "Id": "Gacha_Scripted_interior_5",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Interior_5",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Janitor_5",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Janitor_5",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_16",
    "Type": "Gacha",
    "RewardId": "rankup_rank16",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Sergeant_1",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Sergeant_1",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_CircusMC_1",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_CircusMC_1",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_SwimInstructor_1",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Swim1",
    "Value": 1
  },
  {
    "Id": "Gacha_Scripted_Bates_1",
    "Type": "Gacha",
    "RewardId": "MS_Gacha_Bates_1",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_10_DesertIslandLTE",
    "Type": "Gacha",
    "RewardId": "desertislandlte_rankup_rank10",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_10_DinosaurLTE",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_rankup_rank10",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_10_PurpleGrassLTE",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_rankup_rank10",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_11_DesertIslandLTE",
    "Type": "Gacha",
    "RewardId": "desertislandlte_rankup_rank11",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_11_DinosaurLTE",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_rankup_rank11",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_11_PurpleGrassLTE",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_rankup_rank11",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_12_DesertIslandLTE",
    "Type": "Gacha",
    "RewardId": "desertislandlte_rankup_rank12",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_12_DinosaurLTE",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_rankup_rank12",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_12_PurpleGrassLTE",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_rankup_rank12",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_13_DesertIslandLTE",
    "Type": "Gacha",
    "RewardId": "desertislandlte_rankup_rank13",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_13_DinosaurLTE",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_rankup_rank13",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_13_PurpleGrassLTE",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_rankup_rank13",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_14_DesertIslandLTE",
    "Type": "Gacha",
    "RewardId": "desertislandlte_rankup_rank14",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_14_DinosaurLTE",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_rankup_rank14",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_14_PurpleGrassLTE",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_rankup_rank14",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_15_DesertIslandLTE",
    "Type": "Gacha",
    "RewardId": "desertislandlte_rankup_rank15",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_15_DinosaurLTE",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_rankup_rank15",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_15_PurpleGrassLTE",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_rankup_rank15",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_2_DesertIslandLTE",
    "Type": "Gacha",
    "RewardId": "desertislandlte_rankup_rank2",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_2_DinosaurLTE",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_rankup_rank2",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_2_PurpleGrassLTE",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_rankup_rank2",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_3_DesertIslandLTE",
    "Type": "Gacha",
    "RewardId": "desertislandlte_rankup_rank3",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_3_DinosaurLTE",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_rankup_rank3",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_3_PurpleGrassLTE",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_rankup_rank3",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_4_DesertIslandLTE",
    "Type": "Gacha",
    "RewardId": "desertislandlte_rankup_rank4",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_4_DinosaurLTE",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_rankup_rank4",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_4_PurpleGrassLTE",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_rankup_rank4",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_5_DesertIslandLTE",
    "Type": "Gacha",
    "RewardId": "desertislandlte_rankup_rank5",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_5_DinosaurLTE",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_rankup_rank5",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_5_PurpleGrassLTE",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_rankup_rank5",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_6_DesertIslandLTE",
    "Type": "Gacha",
    "RewardId": "desertislandlte_rankup_rank6",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_6_DinosaurLTE",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_rankup_rank6",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_6_PurpleGrassLTE",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_rankup_rank6",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_7_DesertIslandLTE",
    "Type": "Gacha",
    "RewardId": "desertislandlte_rankup_rank7",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_7_DinosaurLTE",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_rankup_rank7",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_7_PurpleGrassLTE",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_rankup_rank7",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_8_DesertIslandLTE",
    "Type": "Gacha",
    "RewardId": "desertislandlte_rankup_rank8",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_8_DinosaurLTE",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_rankup_rank8",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_8_PurpleGrassLTE",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_rankup_rank8",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_9_DesertIslandLTE",
    "Type": "Gacha",
    "RewardId": "desertislandlte_rankup_rank9",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_9_DinosaurLTE",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_rankup_rank9",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_9_PurpleGrassLTE",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_rankup_rank9",
    "Value": 1
  },
  {
    "Id": "PMR_DesertIslandLTE_Diff1",
    "Type": "Gacha",
    "RewardId": "desertislandlte_reward_diff1",
    "Value": 1
  },
  {
    "Id": "PMR_DesertIslandLTE_Diff10",
    "Type": "Gacha",
    "RewardId": "desertislandlte_reward_diff10",
    "Value": 1
  },
  {
    "Id": "PMR_DesertIslandLTE_Diff2",
    "Type": "Gacha",
    "RewardId": "desertislandlte_reward_diff2",
    "Value": 1
  },
  {
    "Id": "PMR_DesertIslandLTE_Diff3",
    "Type": "Gacha",
    "RewardId": "desertislandlte_reward_diff3",
    "Value": 1
  },
  {
    "Id": "PMR_DesertIslandLTE_Diff4",
    "Type": "Gacha",
    "RewardId": "desertislandlte_reward_diff4",
    "Value": 1
  },
  {
    "Id": "PMR_DesertIslandLTE_Diff5",
    "Type": "Gacha",
    "RewardId": "desertislandlte_reward_diff5",
    "Value": 1
  },
  {
    "Id": "PMR_DesertIslandLTE_Diff6",
    "Type": "Gacha",
    "RewardId": "desertislandlte_reward_diff6",
    "Value": 1
  },
  {
    "Id": "PMR_DesertIslandLTE_Diff7",
    "Type": "Gacha",
    "RewardId": "desertislandlte_reward_diff7",
    "Value": 1
  },
  {
    "Id": "PMR_DesertIslandLTE_Diff8",
    "Type": "Gacha",
    "RewardId": "desertislandlte_reward_diff8",
    "Value": 1
  },
  {
    "Id": "PMR_DesertIslandLTE_Diff9",
    "Type": "Gacha",
    "RewardId": "desertislandlte_reward_diff9",
    "Value": 1
  },
  {
    "Id": "PMR_DinosaurLTE_Diff1",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_reward_diff1",
    "Value": 1
  },
  {
    "Id": "PMR_DinosaurLTE_Diff10",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_reward_diff10",
    "Value": 1
  },
  {
    "Id": "PMR_DinosaurLTE_Diff2",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_reward_diff2",
    "Value": 1
  },
  {
    "Id": "PMR_DinosaurLTE_Diff3",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_reward_diff3",
    "Value": 1
  },
  {
    "Id": "PMR_DinosaurLTE_Diff4",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_reward_diff4",
    "Value": 1
  },
  {
    "Id": "PMR_DinosaurLTE_Diff5",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_reward_diff5",
    "Value": 1
  },
  {
    "Id": "PMR_DinosaurLTE_Diff6",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_reward_diff6",
    "Value": 1
  },
  {
    "Id": "PMR_DinosaurLTE_Diff7",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_reward_diff7",
    "Value": 1
  },
  {
    "Id": "PMR_DinosaurLTE_Diff8",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_reward_diff8",
    "Value": 1
  },
  {
    "Id": "PMR_DinosaurLTE_Diff9",
    "Type": "Gacha",
    "RewardId": "dinosaurlte_reward_diff9",
    "Value": 1
  },
  {
    "Id": "PMR_PurpleGrassLTE_Diff1",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_reward_diff1",
    "Value": 1
  },
  {
    "Id": "PMR_PurpleGrassLTE_Diff10",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_reward_diff10",
    "Value": 1
  },
  {
    "Id": "PMR_PurpleGrassLTE_Diff2",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_reward_diff2",
    "Value": 1
  },
  {
    "Id": "PMR_PurpleGrassLTE_Diff3",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_reward_diff3",
    "Value": 1
  },
  {
    "Id": "PMR_PurpleGrassLTE_Diff4",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_reward_diff4",
    "Value": 1
  },
  {
    "Id": "PMR_PurpleGrassLTE_Diff5",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_reward_diff5",
    "Value": 1
  },
  {
    "Id": "PMR_PurpleGrassLTE_Diff6",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_reward_diff6",
    "Value": 1
  },
  {
    "Id": "PMR_PurpleGrassLTE_Diff7",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_reward_diff7",
    "Value": 1
  },
  {
    "Id": "PMR_PurpleGrassLTE_Diff8",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_reward_diff8",
    "Value": 1
  },
  {
    "Id": "PMR_PurpleGrassLTE_Diff9",
    "Type": "Gacha",
    "RewardId": "purplegrasslte_reward_diff9",
    "Value": 1
  },
  {
    "Id": "premium_15",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 15
  },
  {
    "Id": "premium_20",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 20
  },
  {
    "Id": "premium_2500",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 2500
  },
  {
    "Id": "premium_500",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 500
  },
  {
    "Id": "secondary_1200",
    "Type": "Resources",
    "RewardId": "secondarycurrency",
    "Value": 1200
  },
  {
    "Id": "secondary_5000",
    "Type": "Resources",
    "RewardId": "secondarycurrency",
    "Value": 5000
  },
  {
    "Id": "Store_BigBox_DesertIslandLTE",
    "Type": "Gacha",
    "RewardId": "bigbox_desertislandlte",
    "Value": 1
  },
  {
    "Id": "Store_BigBox_DinosaurLTE",
    "Type": "Gacha",
    "RewardId": "bigbox_dinosaurlte",
    "Value": 1
  },
  {
    "Id": "Store_BigBox_PurpleGrassLTE",
    "Type": "Gacha",
    "RewardId": "bigbox_purplegrasslte",
    "Value": 1
  },
  {
    "Id": "Store_Megabox_DesertIslandLTE",
    "Type": "Gacha",
    "RewardId": "megabox_desertislandlte",
    "Value": 1
  },
  {
    "Id": "Store_Megabox_DinosaurLTE",
    "Type": "Gacha",
    "RewardId": "megabox_dinosaurlte",
    "Value": 1
  },
  {
    "Id": "Store_Megabox_PurpleGrassLTE",
    "Type": "Gacha",
    "RewardId": "megabox_purplegrasslte",
    "Value": 1
  },
  {
    "Id": "Store_Minibox_DesertIslandLTE",
    "Type": "Gacha",
    "RewardId": "minibox_desertislandlte",
    "Value": 1
  },
  {
    "Id": "Store_Minibox_DinosaurLTE",
    "Type": "Gacha",
    "RewardId": "minibox_dinosaurlte",
    "Value": 1
  },
  {
    "Id": "Store_Minibox_PurpleGrassLTE",
    "Type": "Gacha",
    "RewardId": "minibox_purplegrasslte",
    "Value": 1
  },
  {
    "Id": "trophy_10",
    "Type": "Resources",
    "RewardId": "trophy",
    "Value": 10
  },
  {
    "Id": "trophy_100",
    "Type": "Resources",
    "RewardId": "trophy",
    "Value": 100
  },
  {
    "Id": "trophy_1000",
    "Type": "Resources",
    "RewardId": "trophy",
    "Value": 1000
  },
  {
    "Id": "trophy_1200",
    "Type": "Resources",
    "RewardId": "trophy",
    "Value": 1200
  },
  {
    "Id": "trophy_125",
    "Type": "Resources",
    "RewardId": "trophy",
    "Value": 125
  },
  {
    "Id": "trophy_15",
    "Type": "Resources",
    "RewardId": "trophy",
    "Value": 15
  },
  {
    "Id": "trophy_150",
    "Type": "Resources",
    "RewardId": "trophy",
    "Value": 150
  },
  {
    "Id": "trophy_1500",
    "Type": "Resources",
    "RewardId": "trophy",
    "Value": 1500
  },
  {
    "Id": "trophy_200",
    "Type": "Resources",
    "RewardId": "trophy",
    "Value": 200
  },
  {
    "Id": "trophy_240",
    "Type": "Resources",
    "RewardId": "trophy",
    "Value": 240
  },
  {
    "Id": "trophy_25",
    "Type": "Resources",
    "RewardId": "trophy",
    "Value": 25
  },
  {
    "Id": "trophy_300",
    "Type": "Resources",
    "RewardId": "trophy",
    "Value": 300
  },
  {
    "Id": "trophy_40",
    "Type": "Resources",
    "RewardId": "trophy",
    "Value": 40
  },
  {
    "Id": "trophy_450",
    "Type": "Resources",
    "RewardId": "trophy",
    "Value": 450
  },
  {
    "Id": "trophy_5",
    "Type": "Resources",
    "RewardId": "trophy",
    "Value": 5
  },
  {
    "Id": "trophy_50",
    "Type": "Resources",
    "RewardId": "trophy",
    "Value": 50
  },
  {
    "Id": "trophy_60",
    "Type": "Resources",
    "RewardId": "trophy",
    "Value": 60
  },
  {
    "Id": "trophy_600",
    "Type": "Resources",
    "RewardId": "trophy",
    "Value": 600
  },
  {
    "Id": "trophy_85",
    "Type": "Resources",
    "RewardId": "trophy",
    "Value": 85
  },
  {
    "Id": "trophy_900",
    "Type": "Resources",
    "RewardId": "trophy",
    "Value": 900
  },
  {
    "Id": "PMR_RainIslandLTE_Diff1",
    "Type": "Gacha",
    "RewardId": "rainislandlte_reward_diff1",
    "Value": 1
  },
  {
    "Id": "PMR_RainIslandLTE_Diff2",
    "Type": "Gacha",
    "RewardId": "rainislandlte_reward_diff2",
    "Value": 1
  },
  {
    "Id": "PMR_RainIslandLTE_Diff3",
    "Type": "Gacha",
    "RewardId": "rainislandlte_reward_diff3",
    "Value": 1
  },
  {
    "Id": "PMR_RainIslandLTE_Diff4",
    "Type": "Gacha",
    "RewardId": "rainislandlte_reward_diff4",
    "Value": 1
  },
  {
    "Id": "PMR_RainIslandLTE_Diff5",
    "Type": "Gacha",
    "RewardId": "rainislandlte_reward_diff5",
    "Value": 1
  },
  {
    "Id": "PMR_RainIslandLTE_Diff6",
    "Type": "Gacha",
    "RewardId": "rainislandlte_reward_diff6",
    "Value": 1
  },
  {
    "Id": "PMR_RainIslandLTE_Diff7",
    "Type": "Gacha",
    "RewardId": "rainislandlte_reward_diff7",
    "Value": 1
  },
  {
    "Id": "PMR_RainIslandLTE_Diff8",
    "Type": "Gacha",
    "RewardId": "rainislandlte_reward_diff8",
    "Value": 1
  },
  {
    "Id": "PMR_RainIslandLTE_Diff9",
    "Type": "Gacha",
    "RewardId": "rainislandlte_reward_diff9",
    "Value": 1
  },
  {
    "Id": "PMR_RainIslandLTE_Diff10",
    "Type": "Gacha",
    "RewardId": "rainislandlte_reward_diff10",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_2_RainIslandLTE",
    "Type": "Gacha",
    "RewardId": "rainislandlte_rankup_rank2",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_3_RainIslandLTE",
    "Type": "Gacha",
    "RewardId": "rainislandlte_rankup_rank3",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_4_RainIslandLTE",
    "Type": "Gacha",
    "RewardId": "rainislandlte_rankup_rank4",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_11_RainIslandLTE",
    "Type": "Gacha",
    "RewardId": "rainislandlte_rankup_rank11",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_12_RainIslandLTE",
    "Type": "Gacha",
    "RewardId": "rainislandlte_rankup_rank12",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_13_RainIslandLTE",
    "Type": "Gacha",
    "RewardId": "rainislandlte_rankup_rank13",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_14_RainIslandLTE",
    "Type": "Gacha",
    "RewardId": "rainislandlte_rankup_rank14",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_15_RainIslandLTE",
    "Type": "Gacha",
    "RewardId": "rainislandlte_rankup_rank15",
    "Value": 1
  },
  {
    "Id": "Store_Minibox_RainIslandLTE",
    "Type": "Gacha",
    "RewardId": "minibox_rainislandlte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_5_RainIslandLTE",
    "Type": "Gacha",
    "RewardId": "rainislandlte_rankup_rank5",
    "Value": 1
  },
  {
    "Id": "Store_BigBox_RainIslandLTE",
    "Type": "Gacha",
    "RewardId": "bigbox_rainislandlte",
    "Value": 1
  },
  {
    "Id": "Store_Megabox_RainIslandLTE",
    "Type": "Gacha",
    "RewardId": "megabox_rainislandlte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_7_RainIslandLTE",
    "Type": "Gacha",
    "RewardId": "rainislandlte_rankup_rank7",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_9_RainIslandLTE",
    "Type": "Gacha",
    "RewardId": "rainislandlte_rankup_rank9",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_6_RainIslandLTE",
    "Type": "Gacha",
    "RewardId": "rainislandlte_rankup_rank6",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_10_RainIslandLTE",
    "Type": "Gacha",
    "RewardId": "rainislandlte_rankup_rank10",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_8_RainIslandLTE",
    "Type": "Gacha",
    "RewardId": "rainislandlte_rankup_rank8",
    "Value": 1
  },
  {
    "Id": "PMR_NightLifeLTE_Diff1",
    "Type": "Gacha",
    "RewardId": "nightlifelte_reward_diff1",
    "Value": 1
  },
  {
    "Id": "PMR_NightLifeLTE_Diff2",
    "Type": "Gacha",
    "RewardId": "nightlifelte_reward_diff2",
    "Value": 1
  },
  {
    "Id": "PMR_NightLifeLTE_Diff3",
    "Type": "Gacha",
    "RewardId": "nightlifelte_reward_diff3",
    "Value": 1
  },
  {
    "Id": "PMR_NightLifeLTE_Diff4",
    "Type": "Gacha",
    "RewardId": "nightlifelte_reward_diff4",
    "Value": 1
  },
  {
    "Id": "PMR_NightLifeLTE_Diff5",
    "Type": "Gacha",
    "RewardId": "nightlifelte_reward_diff5",
    "Value": 1
  },
  {
    "Id": "PMR_NightLifeLTE_Diff6",
    "Type": "Gacha",
    "RewardId": "nightlifelte_reward_diff6",
    "Value": 1
  },
  {
    "Id": "PMR_NightLifeLTE_Diff7",
    "Type": "Gacha",
    "RewardId": "nightlifelte_reward_diff7",
    "Value": 1
  },
  {
    "Id": "PMR_NightLifeLTE_Diff8",
    "Type": "Gacha",
    "RewardId": "nightlifelte_reward_diff8",
    "Value": 1
  },
  {
    "Id": "PMR_NightLifeLTE_Diff9",
    "Type": "Gacha",
    "RewardId": "nightlifelte_reward_diff9",
    "Value": 1
  },
  {
    "Id": "PMR_NightLifeLTE_Diff10",
    "Type": "Gacha",
    "RewardId": "nightlifelte_reward_diff10",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_2_NightLifeLTE",
    "Type": "Gacha",
    "RewardId": "nightlifelte_rankup_rank2",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_3_NightLifeLTE",
    "Type": "Gacha",
    "RewardId": "nightlifelte_rankup_rank3",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_4_NightLifeLTE",
    "Type": "Gacha",
    "RewardId": "nightlifelte_rankup_rank4",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_11_NightLifeLTE",
    "Type": "Gacha",
    "RewardId": "nightlifelte_rankup_rank11",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_12_NightLifeLTE",
    "Type": "Gacha",
    "RewardId": "nightlifelte_rankup_rank12",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_13_NightLifeLTE",
    "Type": "Gacha",
    "RewardId": "nightlifelte_rankup_rank13",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_14_NightLifeLTE",
    "Type": "Gacha",
    "RewardId": "nightlifelte_rankup_rank14",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_15_NightLifeLTE",
    "Type": "Gacha",
    "RewardId": "nightlifelte_rankup_rank15",
    "Value": 1
  },
  {
    "Id": "Store_Minibox_NightLifeLTE",
    "Type": "Gacha",
    "RewardId": "minibox_nightlifelte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_5_NightLifeLTE",
    "Type": "Gacha",
    "RewardId": "nightlifelte_rankup_rank5",
    "Value": 1
  },
  {
    "Id": "Store_BigBox_NightLifeLTE",
    "Type": "Gacha",
    "RewardId": "bigbox_nightlifelte",
    "Value": 1
  },
  {
    "Id": "Store_Megabox_NightLifeLTE",
    "Type": "Gacha",
    "RewardId": "megabox_nightlifelte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_7_NightLifeLTE",
    "Type": "Gacha",
    "RewardId": "nightlifelte_rankup_rank7",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_9_NightLifeLTE",
    "Type": "Gacha",
    "RewardId": "nightlifelte_rankup_rank9",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_6_NightLifeLTE",
    "Type": "Gacha",
    "RewardId": "nightlifelte_rankup_rank6",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_10_NightLifeLTE",
    "Type": "Gacha",
    "RewardId": "nightlifelte_rankup_rank10",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_8_NightLifeLTE",
    "Type": "Gacha",
    "RewardId": "nightlifelte_rankup_rank8",
    "Value": 1
  },
  {
    "Id": "PMR_UnderwaterLTE_Diff1",
    "Type": "Gacha",
    "RewardId": "underwaterlte_reward_diff1",
    "Value": 1
  },
  {
    "Id": "PMR_UnderwaterLTE_Diff2",
    "Type": "Gacha",
    "RewardId": "underwaterlte_reward_diff2",
    "Value": 1
  },
  {
    "Id": "PMR_UnderwaterLTE_Diff3",
    "Type": "Gacha",
    "RewardId": "underwaterlte_reward_diff3",
    "Value": 1
  },
  {
    "Id": "PMR_UnderwaterLTE_Diff4",
    "Type": "Gacha",
    "RewardId": "underwaterlte_reward_diff4",
    "Value": 1
  },
  {
    "Id": "PMR_UnderwaterLTE_Diff5",
    "Type": "Gacha",
    "RewardId": "underwaterlte_reward_diff5",
    "Value": 1
  },
  {
    "Id": "PMR_UnderwaterLTE_Diff6",
    "Type": "Gacha",
    "RewardId": "underwaterlte_reward_diff6",
    "Value": 1
  },
  {
    "Id": "PMR_UnderwaterLTE_Diff7",
    "Type": "Gacha",
    "RewardId": "underwaterlte_reward_diff7",
    "Value": 1
  },
  {
    "Id": "PMR_UnderwaterLTE_Diff8",
    "Type": "Gacha",
    "RewardId": "underwaterlte_reward_diff8",
    "Value": 1
  },
  {
    "Id": "PMR_UnderwaterLTE_Diff9",
    "Type": "Gacha",
    "RewardId": "underwaterlte_reward_diff9",
    "Value": 1
  },
  {
    "Id": "PMR_UnderwaterLTE_Diff10",
    "Type": "Gacha",
    "RewardId": "underwaterlte_reward_diff10",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_2_UnderwaterLTE",
    "Type": "Gacha",
    "RewardId": "underwaterlte_rankup_rank2",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_3_UnderwaterLTE",
    "Type": "Gacha",
    "RewardId": "underwaterlte_rankup_rank3",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_4_UnderwaterLTE",
    "Type": "Gacha",
    "RewardId": "underwaterlte_rankup_rank4",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_11_UnderwaterLTE",
    "Type": "Gacha",
    "RewardId": "underwaterlte_rankup_rank11",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_12_UnderwaterLTE",
    "Type": "Gacha",
    "RewardId": "underwaterlte_rankup_rank12",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_13_UnderwaterLTE",
    "Type": "Gacha",
    "RewardId": "underwaterlte_rankup_rank13",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_14_UnderwaterLTE",
    "Type": "Gacha",
    "RewardId": "underwaterlte_rankup_rank14",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_15_UnderwaterLTE",
    "Type": "Gacha",
    "RewardId": "underwaterlte_rankup_rank15",
    "Value": 1
  },
  {
    "Id": "Store_Minibox_UnderwaterLTE",
    "Type": "Gacha",
    "RewardId": "minibox_underwaterlte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_5_UnderwaterLTE",
    "Type": "Gacha",
    "RewardId": "underwaterlte_rankup_rank5",
    "Value": 1
  },
  {
    "Id": "Store_BigBox_UnderwaterLTE",
    "Type": "Gacha",
    "RewardId": "bigbox_underwaterlte",
    "Value": 1
  },
  {
    "Id": "Store_Megabox_UnderwaterLTE",
    "Type": "Gacha",
    "RewardId": "megabox_underwaterlte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_7_UnderwaterLTE",
    "Type": "Gacha",
    "RewardId": "underwaterlte_rankup_rank7",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_9_UnderwaterLTE",
    "Type": "Gacha",
    "RewardId": "underwaterlte_rankup_rank9",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_6_UnderwaterLTE",
    "Type": "Gacha",
    "RewardId": "underwaterlte_rankup_rank6",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_10_UnderwaterLTE",
    "Type": "Gacha",
    "RewardId": "underwaterlte_rankup_rank10",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_8_UnderwaterLTE",
    "Type": "Gacha",
    "RewardId": "underwaterlte_rankup_rank8",
    "Value": 1
  },
  {
    "Id": "PMR_ProgressHotelLTE",
    "Type": "Gacha",
    "RewardId": "progresshotellte_reward",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_2_ProgressHotelLTE",
    "Type": "Gacha",
    "RewardId": "progresshotellte_rankup_rank2",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_3_ProgressHotelLTE",
    "Type": "Gacha",
    "RewardId": "progresshotellte_rankup_rank3",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_4_ProgressHotelLTE",
    "Type": "Gacha",
    "RewardId": "progresshotellte_rankup_rank4",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_11_ProgressHotelLTE",
    "Type": "Gacha",
    "RewardId": "progresshotellte_rankup_rank11",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_12_ProgressHotelLTE",
    "Type": "Gacha",
    "RewardId": "progresshotellte_rankup_rank12",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_13_ProgressHotelLTE",
    "Type": "Gacha",
    "RewardId": "progresshotellte_rankup_rank13",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_14_ProgressHotelLTE",
    "Type": "Gacha",
    "RewardId": "progresshotellte_rankup_rank14",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_15_ProgressHotelLTE",
    "Type": "Gacha",
    "RewardId": "progresshotellte_rankup_rank15",
    "Value": 1
  },
  {
    "Id": "Store_Minibox_ProgressHotelLTE",
    "Type": "Gacha",
    "RewardId": "minibox_progresshotellte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_5_ProgressHotelLTE",
    "Type": "Gacha",
    "RewardId": "progresshotellte_rankup_rank5",
    "Value": 1
  },
  {
    "Id": "Store_BigBox_ProgressHotelLTE",
    "Type": "Gacha",
    "RewardId": "bigbox_progresshotellte",
    "Value": 1
  },
  {
    "Id": "Store_Megabox_ProgressHotelLTE",
    "Type": "Gacha",
    "RewardId": "megabox_progresshotellte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_7_ProgressHotelLTE",
    "Type": "Gacha",
    "RewardId": "progresshotellte_rankup_rank7",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_9_ProgressHotelLTE",
    "Type": "Gacha",
    "RewardId": "progresshotellte_rankup_rank9",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_6_ProgressHotelLTE",
    "Type": "Gacha",
    "RewardId": "progresshotellte_rankup_rank6",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_10_ProgressHotelLTE",
    "Type": "Gacha",
    "RewardId": "progresshotellte_rankup_rank10",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_8_ProgressHotelLTE",
    "Type": "Gacha",
    "RewardId": "progresshotellte_rankup_rank8",
    "Value": 1
  },
  {
    "Id": "Epic_drink_rootbeer_8",
    "Type": "Manager",
    "RewardId": "MAN004",
    "Value": 8
  },
  {
    "Id": "Epic_entertainment_grandmaboy_8",
    "Type": "Manager",
    "RewardId": "MAN008",
    "Value": 8
  },
  {
    "Id": "Epic_fitness_droz_8",
    "Type": "Manager",
    "RewardId": "MAN012",
    "Value": 8
  },
  {
    "Id": "Epic_hotel_alfred_8",
    "Type": "Manager",
    "RewardId": "MAN016",
    "Value": 8
  },
  {
    "Id": "Epic_venue_poshlady_8",
    "Type": "Manager",
    "RewardId": "MAN020",
    "Value": 8
  },
  {
    "Id": "Epic_water_sunscreen_8",
    "Type": "Manager",
    "RewardId": "MAN024",
    "Value": 8
  },
  {
    "Id": "Epic_restaurant_jabba_8",
    "Type": "Manager",
    "RewardId": "MAN028",
    "Value": 8
  },
  {
    "Id": "Epic_spa_yogi_8",
    "Type": "Manager",
    "RewardId": "MAN032",
    "Value": 8
  },
  {
    "Id": "Epic_tours_gopro_8",
    "Type": "Manager",
    "RewardId": "MAN035",
    "Value": 8
  },
  {
    "Id": "Epic_drink_rootbeer_15",
    "Type": "Manager",
    "RewardId": "MAN004",
    "Value": 15
  },
  {
    "Id": "Epic_entertainment_grandmaboy_15",
    "Type": "Manager",
    "RewardId": "MAN008",
    "Value": 15
  },
  {
    "Id": "Epic_fitness_droz_15",
    "Type": "Manager",
    "RewardId": "MAN012",
    "Value": 15
  },
  {
    "Id": "Epic_hotel_alfred_15",
    "Type": "Manager",
    "RewardId": "MAN016",
    "Value": 15
  },
  {
    "Id": "Epic_venue_poshlady_15",
    "Type": "Manager",
    "RewardId": "MAN020",
    "Value": 15
  },
  {
    "Id": "Epic_water_sunscreen_15",
    "Type": "Manager",
    "RewardId": "MAN024",
    "Value": 15
  },
  {
    "Id": "Epic_restaurant_jabba_15",
    "Type": "Manager",
    "RewardId": "MAN028",
    "Value": 15
  },
  {
    "Id": "Epic_spa_yogi_15",
    "Type": "Manager",
    "RewardId": "MAN032",
    "Value": 15
  },
  {
    "Id": "Epic_tours_gopro_15",
    "Type": "Manager",
    "RewardId": "MAN035",
    "Value": 15
  },
  {
    "Id": "Epic_drink_rootbeer_25",
    "Type": "Manager",
    "RewardId": "MAN004",
    "Value": 25
  },
  {
    "Id": "Epic_entertainment_grandmaboy_25",
    "Type": "Manager",
    "RewardId": "MAN008",
    "Value": 25
  },
  {
    "Id": "Epic_fitness_droz_25",
    "Type": "Manager",
    "RewardId": "MAN012",
    "Value": 25
  },
  {
    "Id": "Epic_hotel_alfred_25",
    "Type": "Manager",
    "RewardId": "MAN016",
    "Value": 25
  },
  {
    "Id": "Epic_venue_poshlady_25",
    "Type": "Manager",
    "RewardId": "MAN020",
    "Value": 25
  },
  {
    "Id": "Epic_water_sunscreen_25",
    "Type": "Manager",
    "RewardId": "MAN024",
    "Value": 25
  },
  {
    "Id": "Epic_restaurant_jabba_25",
    "Type": "Manager",
    "RewardId": "MAN028",
    "Value": 25
  },
  {
    "Id": "Epic_spa_yogi_25",
    "Type": "Manager",
    "RewardId": "MAN032",
    "Value": 25
  },
  {
    "Id": "Epic_tours_gopro_25",
    "Type": "Manager",
    "RewardId": "MAN035",
    "Value": 25
  },
  {
    "Id": "Epic_drink_rootbeer_30",
    "Type": "Manager",
    "RewardId": "MAN004",
    "Value": 30
  },
  {
    "Id": "Epic_entertainment_grandmaboy_30",
    "Type": "Manager",
    "RewardId": "MAN008",
    "Value": 30
  },
  {
    "Id": "Epic_fitness_droz_30",
    "Type": "Manager",
    "RewardId": "MAN012",
    "Value": 30
  },
  {
    "Id": "Epic_hotel_alfred_30",
    "Type": "Manager",
    "RewardId": "MAN016",
    "Value": 30
  },
  {
    "Id": "Epic_venue_poshlady_30",
    "Type": "Manager",
    "RewardId": "MAN020",
    "Value": 30
  },
  {
    "Id": "Epic_water_sunscreen_30",
    "Type": "Manager",
    "RewardId": "MAN024",
    "Value": 30
  },
  {
    "Id": "Epic_restaurant_jabba_30",
    "Type": "Manager",
    "RewardId": "MAN028",
    "Value": 30
  },
  {
    "Id": "Epic_spa_yogi_30",
    "Type": "Manager",
    "RewardId": "MAN032",
    "Value": 30
  },
  {
    "Id": "Epic_tours_gopro_30",
    "Type": "Manager",
    "RewardId": "MAN035",
    "Value": 30
  },
  {
    "Id": "Epic_drink_rootbeer_40",
    "Type": "Manager",
    "RewardId": "MAN004",
    "Value": 40
  },
  {
    "Id": "Epic_entertainment_grandmaboy_40",
    "Type": "Manager",
    "RewardId": "MAN008",
    "Value": 40
  },
  {
    "Id": "Epic_fitness_droz_40",
    "Type": "Manager",
    "RewardId": "MAN012",
    "Value": 40
  },
  {
    "Id": "Epic_hotel_alfred_40",
    "Type": "Manager",
    "RewardId": "MAN016",
    "Value": 40
  },
  {
    "Id": "Epic_venue_poshlady_40",
    "Type": "Manager",
    "RewardId": "MAN020",
    "Value": 40
  },
  {
    "Id": "Epic_water_sunscreen_40",
    "Type": "Manager",
    "RewardId": "MAN024",
    "Value": 40
  },
  {
    "Id": "Epic_restaurant_jabba_40",
    "Type": "Manager",
    "RewardId": "MAN028",
    "Value": 40
  },
  {
    "Id": "Epic_spa_yogi_40",
    "Type": "Manager",
    "RewardId": "MAN032",
    "Value": 40
  },
  {
    "Id": "Epic_tours_gopro_40",
    "Type": "Manager",
    "RewardId": "MAN035",
    "Value": 40
  },
  {
    "Id": "premium_35",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 35
  },
  {
    "Id": "premium_60",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 60
  },
  {
    "Id": "premium_75",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 75
  },
  {
    "Id": "premium_125",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 125
  },
  {
    "Id": "premium_150",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 150
  },
  {
    "Id": "PMR_ProgressRestaurantLTE",
    "Type": "Gacha",
    "RewardId": "progressrestaurantlte_reward",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_2_ProgressRestaurantLTE",
    "Type": "Gacha",
    "RewardId": "progressrestaurantlte_rankup_rank2",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_3_ProgressRestaurantLTE",
    "Type": "Gacha",
    "RewardId": "progressrestaurantlte_rankup_rank3",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_4_ProgressRestaurantLTE",
    "Type": "Gacha",
    "RewardId": "progressrestaurantlte_rankup_rank4",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_11_ProgressRestaurantLTE",
    "Type": "Gacha",
    "RewardId": "progressrestaurantlte_rankup_rank11",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_12_ProgressRestaurantLTE",
    "Type": "Gacha",
    "RewardId": "progressrestaurantlte_rankup_rank12",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_13_ProgressRestaurantLTE",
    "Type": "Gacha",
    "RewardId": "progressrestaurantlte_rankup_rank13",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_14_ProgressRestaurantLTE",
    "Type": "Gacha",
    "RewardId": "progressrestaurantlte_rankup_rank14",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_15_ProgressRestaurantLTE",
    "Type": "Gacha",
    "RewardId": "progressrestaurantlte_rankup_rank15",
    "Value": 1
  },
  {
    "Id": "Store_Minibox_ProgressRestaurantLTE",
    "Type": "Gacha",
    "RewardId": "minibox_progressrestaurantlte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_5_ProgressRestaurantLTE",
    "Type": "Gacha",
    "RewardId": "progressrestaurantlte_rankup_rank5",
    "Value": 1
  },
  {
    "Id": "Store_BigBox_ProgressRestaurantLTE",
    "Type": "Gacha",
    "RewardId": "bigbox_progressrestaurantlte",
    "Value": 1
  },
  {
    "Id": "Store_Megabox_ProgressRestaurantLTE",
    "Type": "Gacha",
    "RewardId": "megabox_progressrestaurantlte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_7_ProgressRestaurantLTE",
    "Type": "Gacha",
    "RewardId": "progressrestaurantlte_rankup_rank7",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_9_ProgressRestaurantLTE",
    "Type": "Gacha",
    "RewardId": "progressrestaurantlte_rankup_rank9",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_6_ProgressRestaurantLTE",
    "Type": "Gacha",
    "RewardId": "progressrestaurantlte_rankup_rank6",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_10_ProgressRestaurantLTE",
    "Type": "Gacha",
    "RewardId": "progressrestaurantlte_rankup_rank10",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_8_ProgressRestaurantLTE",
    "Type": "Gacha",
    "RewardId": "progressrestaurantlte_rankup_rank8",
    "Value": 1
  },
  {
    "Id": "PMR_ProgressDrinkLTE",
    "Type": "Gacha",
    "RewardId": "progressdrinklte_reward",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_2_ProgressDrinkLTE",
    "Type": "Gacha",
    "RewardId": "progressdrinklte_rankup_rank2",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_3_ProgressDrinkLTE",
    "Type": "Gacha",
    "RewardId": "progressdrinklte_rankup_rank3",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_4_ProgressDrinkLTE",
    "Type": "Gacha",
    "RewardId": "progressdrinklte_rankup_rank4",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_11_ProgressDrinkLTE",
    "Type": "Gacha",
    "RewardId": "progressdrinklte_rankup_rank11",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_12_ProgressDrinkLTE",
    "Type": "Gacha",
    "RewardId": "progressdrinklte_rankup_rank12",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_13_ProgressDrinkLTE",
    "Type": "Gacha",
    "RewardId": "progressdrinklte_rankup_rank13",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_14_ProgressDrinkLTE",
    "Type": "Gacha",
    "RewardId": "progressdrinklte_rankup_rank14",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_15_ProgressDrinkLTE",
    "Type": "Gacha",
    "RewardId": "progressdrinklte_rankup_rank15",
    "Value": 1
  },
  {
    "Id": "Store_Minibox_ProgressDrinkLTE",
    "Type": "Gacha",
    "RewardId": "minibox_progressdrinklte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_5_ProgressDrinkLTE",
    "Type": "Gacha",
    "RewardId": "progressdrinklte_rankup_rank5",
    "Value": 1
  },
  {
    "Id": "Store_BigBox_ProgressDrinkLTE",
    "Type": "Gacha",
    "RewardId": "bigbox_progressdrinklte",
    "Value": 1
  },
  {
    "Id": "Store_Megabox_ProgressDrinkLTE",
    "Type": "Gacha",
    "RewardId": "megabox_progressdrinklte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_7_ProgressDrinkLTE",
    "Type": "Gacha",
    "RewardId": "progressdrinklte_rankup_rank7",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_9_ProgressDrinkLTE",
    "Type": "Gacha",
    "RewardId": "progressdrinklte_rankup_rank9",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_6_ProgressDrinkLTE",
    "Type": "Gacha",
    "RewardId": "progressdrinklte_rankup_rank6",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_10_ProgressDrinkLTE",
    "Type": "Gacha",
    "RewardId": "progressdrinklte_rankup_rank10",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_8_ProgressDrinkLTE",
    "Type": "Gacha",
    "RewardId": "progressdrinklte_rankup_rank8",
    "Value": 1
  },
  {
    "Id": "t05_ad_skip",
    "Type": "AdSkip",
    "RewardId": "ad_skip",
    "Value": 7
  },
  {
    "Id": "PMR_ProgressSpaLTE",
    "Type": "Gacha",
    "RewardId": "progressspalte_reward",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_2_ProgressSpaLTE",
    "Type": "Gacha",
    "RewardId": "progressspalte_rankup_rank2",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_3_ProgressSpaLTE",
    "Type": "Gacha",
    "RewardId": "progressspalte_rankup_rank3",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_4_ProgressSpaLTE",
    "Type": "Gacha",
    "RewardId": "progressspalte_rankup_rank4",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_11_ProgressSpaLTE",
    "Type": "Gacha",
    "RewardId": "progressspalte_rankup_rank11",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_12_ProgressSpaLTE",
    "Type": "Gacha",
    "RewardId": "progressspalte_rankup_rank12",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_13_ProgressSpaLTE",
    "Type": "Gacha",
    "RewardId": "progressspalte_rankup_rank13",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_14_ProgressSpaLTE",
    "Type": "Gacha",
    "RewardId": "progressspalte_rankup_rank14",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_15_ProgressSpaLTE",
    "Type": "Gacha",
    "RewardId": "progressspalte_rankup_rank15",
    "Value": 1
  },
  {
    "Id": "Store_Minibox_ProgressSpaLTE",
    "Type": "Gacha",
    "RewardId": "minibox_progressspalte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_5_ProgressSpaLTE",
    "Type": "Gacha",
    "RewardId": "progressspalte_rankup_rank5",
    "Value": 1
  },
  {
    "Id": "Store_BigBox_ProgressSpaLTE",
    "Type": "Gacha",
    "RewardId": "bigbox_progressspalte",
    "Value": 1
  },
  {
    "Id": "Store_Megabox_ProgressSpaLTE",
    "Type": "Gacha",
    "RewardId": "megabox_progressspalte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_7_ProgressSpaLTE",
    "Type": "Gacha",
    "RewardId": "progressspalte_rankup_rank7",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_9_ProgressSpaLTE",
    "Type": "Gacha",
    "RewardId": "progressspalte_rankup_rank9",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_6_ProgressSpaLTE",
    "Type": "Gacha",
    "RewardId": "progressspalte_rankup_rank6",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_10_ProgressSpaLTE",
    "Type": "Gacha",
    "RewardId": "progressspalte_rankup_rank10",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_8_ProgressSpaLTE",
    "Type": "Gacha",
    "RewardId": "progressspalte_rankup_rank8",
    "Value": 1
  },
  {
    "Id": "PMR_ProgressFitnessLTE",
    "Type": "Gacha",
    "RewardId": "progressfitnesslte_reward",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_2_ProgressFitnessLTE",
    "Type": "Gacha",
    "RewardId": "progressfitnesslte_rankup_rank2",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_3_ProgressFitnessLTE",
    "Type": "Gacha",
    "RewardId": "progressfitnesslte_rankup_rank3",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_4_ProgressFitnessLTE",
    "Type": "Gacha",
    "RewardId": "progressfitnesslte_rankup_rank4",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_11_ProgressFitnessLTE",
    "Type": "Gacha",
    "RewardId": "progressfitnesslte_rankup_rank11",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_12_ProgressFitnessLTE",
    "Type": "Gacha",
    "RewardId": "progressfitnesslte_rankup_rank12",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_13_ProgressFitnessLTE",
    "Type": "Gacha",
    "RewardId": "progressfitnesslte_rankup_rank13",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_14_ProgressFitnessLTE",
    "Type": "Gacha",
    "RewardId": "progressfitnesslte_rankup_rank14",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_15_ProgressFitnessLTE",
    "Type": "Gacha",
    "RewardId": "progressfitnesslte_rankup_rank15",
    "Value": 1
  },
  {
    "Id": "Store_Minibox_ProgressFitnessLTE",
    "Type": "Gacha",
    "RewardId": "minibox_progressfitnesslte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_5_ProgressFitnessLTE",
    "Type": "Gacha",
    "RewardId": "progressfitnesslte_rankup_rank5",
    "Value": 1
  },
  {
    "Id": "Store_BigBox_ProgressFitnessLTE",
    "Type": "Gacha",
    "RewardId": "bigbox_progressfitnesslte",
    "Value": 1
  },
  {
    "Id": "Store_Megabox_ProgressFitnessLTE",
    "Type": "Gacha",
    "RewardId": "megabox_progressfitnesslte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_7_ProgressFitnessLTE",
    "Type": "Gacha",
    "RewardId": "progressfitnesslte_rankup_rank7",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_9_ProgressFitnessLTE",
    "Type": "Gacha",
    "RewardId": "progressfitnesslte_rankup_rank9",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_6_ProgressFitnessLTE",
    "Type": "Gacha",
    "RewardId": "progressfitnesslte_rankup_rank6",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_10_ProgressFitnessLTE",
    "Type": "Gacha",
    "RewardId": "progressfitnesslte_rankup_rank10",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_8_ProgressFitnessLTE",
    "Type": "Gacha",
    "RewardId": "progressfitnesslte_rankup_rank8",
    "Value": 1
  },
  {
    "Id": "PMR_ProgressWaterLTE",
    "Type": "Gacha",
    "RewardId": "progresswaterlte_reward",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_2_ProgressWaterLTE",
    "Type": "Gacha",
    "RewardId": "progresswaterlte_rankup_rank2",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_3_ProgressWaterLTE",
    "Type": "Gacha",
    "RewardId": "progresswaterlte_rankup_rank3",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_4_ProgressWaterLTE",
    "Type": "Gacha",
    "RewardId": "progresswaterlte_rankup_rank4",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_11_ProgressWaterLTE",
    "Type": "Gacha",
    "RewardId": "progresswaterlte_rankup_rank11",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_12_ProgressWaterLTE",
    "Type": "Gacha",
    "RewardId": "progresswaterlte_rankup_rank12",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_13_ProgressWaterLTE",
    "Type": "Gacha",
    "RewardId": "progresswaterlte_rankup_rank13",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_14_ProgressWaterLTE",
    "Type": "Gacha",
    "RewardId": "progresswaterlte_rankup_rank14",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_15_ProgressWaterLTE",
    "Type": "Gacha",
    "RewardId": "progresswaterlte_rankup_rank15",
    "Value": 1
  },
  {
    "Id": "Store_Minibox_ProgressWaterLTE",
    "Type": "Gacha",
    "RewardId": "minibox_progresswaterlte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_5_ProgressWaterLTE",
    "Type": "Gacha",
    "RewardId": "progresswaterlte_rankup_rank5",
    "Value": 1
  },
  {
    "Id": "Store_BigBox_ProgressWaterLTE",
    "Type": "Gacha",
    "RewardId": "bigbox_progresswaterlte",
    "Value": 1
  },
  {
    "Id": "Store_Megabox_ProgressWaterLTE",
    "Type": "Gacha",
    "RewardId": "megabox_progresswaterlte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_7_ProgressWaterLTE",
    "Type": "Gacha",
    "RewardId": "progresswaterlte_rankup_rank7",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_9_ProgressWaterLTE",
    "Type": "Gacha",
    "RewardId": "progresswaterlte_rankup_rank9",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_6_ProgressWaterLTE",
    "Type": "Gacha",
    "RewardId": "progresswaterlte_rankup_rank6",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_10_ProgressWaterLTE",
    "Type": "Gacha",
    "RewardId": "progresswaterlte_rankup_rank10",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_8_ProgressWaterLTE",
    "Type": "Gacha",
    "RewardId": "progresswaterlte_rankup_rank8",
    "Value": 1
  },
  {
    "Id": "PMR_ProgressEntertainmentLTE",
    "Type": "Gacha",
    "RewardId": "progressentertainmentlte_reward",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_2_ProgressEntertainmentLTE",
    "Type": "Gacha",
    "RewardId": "progressentertainmentlte_rankup_rank2",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_3_ProgressEntertainmentLTE",
    "Type": "Gacha",
    "RewardId": "progressentertainmentlte_rankup_rank3",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_4_ProgressEntertainmentLTE",
    "Type": "Gacha",
    "RewardId": "progressentertainmentlte_rankup_rank4",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_11_ProgressEntertainmentLTE",
    "Type": "Gacha",
    "RewardId": "progressentertainmentlte_rankup_rank11",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_12_ProgressEntertainmentLTE",
    "Type": "Gacha",
    "RewardId": "progressentertainmentlte_rankup_rank12",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_13_ProgressEntertainmentLTE",
    "Type": "Gacha",
    "RewardId": "progressentertainmentlte_rankup_rank13",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_14_ProgressEntertainmentLTE",
    "Type": "Gacha",
    "RewardId": "progressentertainmentlte_rankup_rank14",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_15_ProgressEntertainmentLTE",
    "Type": "Gacha",
    "RewardId": "progressentertainmentlte_rankup_rank15",
    "Value": 1
  },
  {
    "Id": "Store_Minibox_ProgressEntertainmentLTE",
    "Type": "Gacha",
    "RewardId": "minibox_progressentertainmentlte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_5_ProgressEntertainmentLTE",
    "Type": "Gacha",
    "RewardId": "progressentertainmentlte_rankup_rank5",
    "Value": 1
  },
  {
    "Id": "Store_BigBox_ProgressEntertainmentLTE",
    "Type": "Gacha",
    "RewardId": "bigbox_progressentertainmentlte",
    "Value": 1
  },
  {
    "Id": "Store_Megabox_ProgressEntertainmentLTE",
    "Type": "Gacha",
    "RewardId": "megabox_progressentertainmentlte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_7_ProgressEntertainmentLTE",
    "Type": "Gacha",
    "RewardId": "progressentertainmentlte_rankup_rank7",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_9_ProgressEntertainmentLTE",
    "Type": "Gacha",
    "RewardId": "progressentertainmentlte_rankup_rank9",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_6_ProgressEntertainmentLTE",
    "Type": "Gacha",
    "RewardId": "progressentertainmentlte_rankup_rank6",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_10_ProgressEntertainmentLTE",
    "Type": "Gacha",
    "RewardId": "progressentertainmentlte_rankup_rank10",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_8_ProgressEntertainmentLTE",
    "Type": "Gacha",
    "RewardId": "progressentertainmentlte_rankup_rank8",
    "Value": 1
  },
  {
    "Id": "PMR_ProgressToursLTE",
    "Type": "Gacha",
    "RewardId": "progresstourslte_reward",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_2_ProgressToursLTE",
    "Type": "Gacha",
    "RewardId": "progresstourslte_rankup_rank2",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_3_ProgressToursLTE",
    "Type": "Gacha",
    "RewardId": "progresstourslte_rankup_rank3",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_4_ProgressToursLTE",
    "Type": "Gacha",
    "RewardId": "progresstourslte_rankup_rank4",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_11_ProgressToursLTE",
    "Type": "Gacha",
    "RewardId": "progresstourslte_rankup_rank11",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_12_ProgressToursLTE",
    "Type": "Gacha",
    "RewardId": "progresstourslte_rankup_rank12",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_13_ProgressToursLTE",
    "Type": "Gacha",
    "RewardId": "progresstourslte_rankup_rank13",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_14_ProgressToursLTE",
    "Type": "Gacha",
    "RewardId": "progresstourslte_rankup_rank14",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_15_ProgressToursLTE",
    "Type": "Gacha",
    "RewardId": "progresstourslte_rankup_rank15",
    "Value": 1
  },
  {
    "Id": "Store_Minibox_ProgressToursLTE",
    "Type": "Gacha",
    "RewardId": "minibox_progresstourslte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_5_ProgressToursLTE",
    "Type": "Gacha",
    "RewardId": "progresstourslte_rankup_rank5",
    "Value": 1
  },
  {
    "Id": "Store_BigBox_ProgressToursLTE",
    "Type": "Gacha",
    "RewardId": "bigbox_progresstourslte",
    "Value": 1
  },
  {
    "Id": "Store_Megabox_ProgressToursLTE",
    "Type": "Gacha",
    "RewardId": "megabox_progresstourslte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_7_ProgressToursLTE",
    "Type": "Gacha",
    "RewardId": "progresstourslte_rankup_rank7",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_9_ProgressToursLTE",
    "Type": "Gacha",
    "RewardId": "progresstourslte_rankup_rank9",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_6_ProgressToursLTE",
    "Type": "Gacha",
    "RewardId": "progresstourslte_rankup_rank6",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_10_ProgressToursLTE",
    "Type": "Gacha",
    "RewardId": "progresstourslte_rankup_rank10",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_8_ProgressToursLTE",
    "Type": "Gacha",
    "RewardId": "progresstourslte_rankup_rank8",
    "Value": 1
  },
  {
    "Id": "PMR_ProgressLiveLTE",
    "Type": "Gacha",
    "RewardId": "progresslivelte_reward",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_2_ProgressLiveLTE",
    "Type": "Gacha",
    "RewardId": "progresslivelte_rankup_rank2",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_3_ProgressLiveLTE",
    "Type": "Gacha",
    "RewardId": "progresslivelte_rankup_rank3",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_4_ProgressLiveLTE",
    "Type": "Gacha",
    "RewardId": "progresslivelte_rankup_rank4",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_11_ProgressLiveLTE",
    "Type": "Gacha",
    "RewardId": "progresslivelte_rankup_rank11",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_12_ProgressLiveLTE",
    "Type": "Gacha",
    "RewardId": "progresslivelte_rankup_rank12",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_13_ProgressLiveLTE",
    "Type": "Gacha",
    "RewardId": "progresslivelte_rankup_rank13",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_14_ProgressLiveLTE",
    "Type": "Gacha",
    "RewardId": "progresslivelte_rankup_rank14",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_15_ProgressLiveLTE",
    "Type": "Gacha",
    "RewardId": "progresslivelte_rankup_rank15",
    "Value": 1
  },
  {
    "Id": "Store_Minibox_ProgressLiveLTE",
    "Type": "Gacha",
    "RewardId": "minibox_progresslivelte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_5_ProgressLiveLTE",
    "Type": "Gacha",
    "RewardId": "progresslivelte_rankup_rank5",
    "Value": 1
  },
  {
    "Id": "Store_BigBox_ProgressLiveLTE",
    "Type": "Gacha",
    "RewardId": "bigbox_progresslivelte",
    "Value": 1
  },
  {
    "Id": "Store_Megabox_ProgressLiveLTE",
    "Type": "Gacha",
    "RewardId": "megabox_progresslivelte",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_7_ProgressLiveLTE",
    "Type": "Gacha",
    "RewardId": "progresslivelte_rankup_rank7",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_9_ProgressLiveLTE",
    "Type": "Gacha",
    "RewardId": "progresslivelte_rankup_rank9",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_6_ProgressLiveLTE",
    "Type": "Gacha",
    "RewardId": "progresslivelte_rankup_rank6",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_10_ProgressLiveLTE",
    "Type": "Gacha",
    "RewardId": "progresslivelte_rankup_rank10",
    "Value": 1
  },
  {
    "Id": "Gacha_RankUpTo_8_ProgressLiveLTE",
    "Type": "Gacha",
    "RewardId": "progresslivelte_rankup_rank8",
    "Value": 1
  },
  {
    "Id": "instantcash_1x5",
    "Type": "Experiment",
    "RewardId": "EX167",
    "Value": 5
  },
  {
    "Id": "instantcash_4x5",
    "Type": "Experiment",
    "RewardId": "EX164",
    "Value": 5
  },
  {
    "Id": "instantcash_24x5",
    "Type": "Experiment",
    "RewardId": "EX165",
    "Value": 5
  },
  {
    "Id": "instantcustomers_1x5",
    "Type": "Experiment",
    "RewardId": "EX187",
    "Value": 5
  },
  {
    "Id": "instantcustomers_4x5",
    "Type": "Experiment",
    "RewardId": "EX184",
    "Value": 5
  },
  {
    "Id": "instantcustomers_24x5",
    "Type": "Experiment",
    "RewardId": "EX185",
    "Value": 5
  },
  {
    "Id": "premium_10000",
    "Type": "Resources",
    "RewardId": "premiumcurrency",
    "Value": 10000
  },
  {
    "Id": "secondary_10000",
    "Type": "Resources",
    "RewardId": "secondarycurrency",
    "Value": 10000
  }
];