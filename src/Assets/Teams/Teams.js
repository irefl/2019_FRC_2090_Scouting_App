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

const Teams = [{ 'team_number': 216, 'nickname': 'More RoboDawgs' },
{ 'team_number': 244, 'nickname': 'RoboDawgs 3D' },
{ 'team_number': 288, 'nickname': 'The RoboDawgs' },
{ 'team_number': 359, 'nickname': 'Hawaiian Kids' },
{ 'team_number': 368, 'nickname': 'Team Kika Mana' },
{ 'team_number': 1378, 'nickname': 'Hilo Viking Robotics' },
{ 'team_number': 1622, 'nickname': 'Team Spyder' },
{ 'team_number': 1661, 'nickname': 'Griffitrons' },
{ 'team_number': 1739, 'nickname': 'Chicago Knights' },
{ 'team_number': 2090, 'nickname': "Buff 'n Blue" },
{ 'team_number': 2437, 'nickname': 'Lancer Robotics' },
{ 'team_number': 2438, 'nickname': "'Iobotics" },
{ 'team_number': 2439, 'nickname': 'Bearbotics' },
{ 'team_number': 2441, 'nickname': 'Spartechs' },
{ 'team_number': 2443, 'nickname': 'Blue Thunder' },
{ 'team_number': 2444, 'nickname': 'Kamehameha RoboWarriors' },
{ 'team_number': 2445, 'nickname': 'RoboKAP' },
{ 'team_number': 2465, 'nickname': 'Kauaibots' },
{ 'team_number': 2477, 'nickname': 'Marauder Rascals' },
{ 'team_number': 2853, 'nickname': 'Hot Spot Robotics' },
{ 'team_number': 2896, 'nickname': 'MechaMonarchs' },
{ 'team_number': 3008, 'nickname': 'Team Magma' },
{ 'team_number': 3721, 'nickname': 'Charger Robotics' },
{ 'team_number': 3800, 'nickname': 'Mustangs' },
{ 'team_number': 3878, 'nickname': 'Wildcats' },
{ 'team_number': 3881, 'nickname': 'WHEA Sharkbots' },
{ 'team_number': 3882, 'nickname': 'Lunas' },
{ 'team_number': 4253, 'nickname': 'Raid Zero' },
{ 'team_number': 4270, 'nickname': 'Crusaders' },
{ 'team_number': 4984, 'nickname': 'Bullseye' },
{ 'team_number': 5625, 'nickname': 'TrojanBots' },
{ 'team_number': 5701, 'nickname': 'RAIJINbotics' },
{ 'team_number': 6308, 'nickname': 'SPCS - Hafabots' },
{ 'team_number': 6309, 'nickname': 'SPCS - Koko Tek' },
{ 'team_number': 6704, 'nickname': 'Mid Pacific Owl Robotics' },
{ 'team_number': 6909, 'nickname': 'SAKURA Tempesta' },
{ 'team_number': 7069, 'nickname': 'Taipei 101' }]


export default Teams;