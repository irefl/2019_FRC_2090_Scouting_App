/**
 * 
 * hi_reg = requests.get(url="https://www.thebluealliance.com/api/v3/event/2018hiho/teams/simple", headers=headers)
 * 
 * teams = hi_reg.json()
 * finalteams = []
 * for team in teams:
 *    finalteams.append({
 *      "team_number": team["team_number"],
 *      "nickname": team["nickname"]
 *    })
 * def sortKey(elem):
 *   return elem["team_number"]
 * finalteams.sort(key=sortKey)
 * finalteams
 */

const Teams = [216,
    244,
    288,
    359,
    368,
    1378,
    1622,
    1661,
    1739,
    2090,
    2437,
    2438,
    2439,
    2441,
    2443,
    2444,
    2445,
    2465,
    2477,
    2853,
    2896,
    3008,
    3721,
    3800,
    3878,
    3881,
    3882,
    4253,
    4270,
    4984,
    5625,
    5701,
    6308,
    6309,
    6704,
    6909,
    7069]

const TeamsMapping = {
    1378: 'Hilo Viking Robotics',
    1622: 'Team Spyder',
    1661: 'Griffitrons',
    1739: 'Chicago Knights',
    2090: "Buff 'n Blue",
    216: 'More RoboDawgs',
    2437: 'Lancer Robotics',
    2438: "'Iobotics",
    2439: 'Bearbotics',
    244: 'RoboDawgs 3D',
    2441: 'Spartechs',
    2443: 'Blue Thunder',
    2444: 'Kamehameha RoboWarriors',
    2445: 'RoboKAP',
    2465: 'Kauaibots',
    2477: 'Marauder Rascals',
    2853: 'Hot Spot Robotics',
    288: 'The RoboDawgs',
    2896: 'MechaMonarchs',
    3008: 'Team Magma',
    359: 'Hawaiian Kids',
    368: 'Team Kika Mana',
    3721: 'Charger Robotics',
    3800: 'Mustangs',
    3878: 'Wildcats',
    3881: 'WHEA Sharkbots',
    3882: 'Lunas',
    4253: 'Raid Zero',
    4270: 'Crusaders',
    4984: 'Bullseye',
    5625: 'TrojanBots',
    5701: 'RAIJINbotics',
    6308: 'SPCS - Hafabots',
    6309: 'SPCS - Koko Tek',
    6704: 'Mid Pacific Owl Robotics',
    6909: 'SAKURA Tempesta',
    7069: 'Taipei 101'
}

export { Teams, TeamsMapping }