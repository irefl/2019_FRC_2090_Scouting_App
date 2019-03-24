/**
 * 
 * let teamsMapping = {}
document.querySelectorAll(".team-name").forEach(d => {
	let text = d.children[0].innerText;
	let split = text.split("\n");
	let teamNumber = Number(split[0])
	teamsMapping[teamNumber] = split[1]
})
 */

const Teams = [359,
    368,
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
    2504,
    2853,
    2896,
    3008,
    3721,
    3800,
    3878,
    3882,
    4253,
    4270,
    5515,
    5701,
    6704,
    6766,
    6909,
    6998,
    7497,
    7505,
    7548,
    7550,
    7631,
    7724,
    7898]

const TeamsMapping = {
    359: "Hawaiian Kids",
    368: "Team Kika Mana",
    2090: "Buff 'n Blue",
    2437: "Lancer Robotics",
    2438: "'Iobotics",
    2439: "Bearbotics",
    2441: "Spartechs",
    2443: "Blue Thunder",
    2444: "Kamehameha RoboWarriors",
    2445: "RoboKAP",
    2465: "Kauaibots",
    2477: "Marauder Rascals",
    2504: "The Governors",
    2853: "Hot Spot Robotics",
    2896: "MechaMonarchs",
    3008: "Team Magma",
    3721: "Charger Robotics",
    3800: "Mustangs",
    3878: "Wildcats",
    3882: "Lunas",
    4253: "Raid Zero",
    4270: "Crusaders",
    5515: "Blue Power Robotics",
    5701: "RAIJINbotics",
    6704: "Mid Pacific Owl Robotics",
    6766: "Pharma Atom Storm",
    6909: "SAKURA Tempesta",
    6998: "NNKIEH",
    7497: "MARAHO",
    7505: "PTU",
    7548: "Le Jardin Academy",
    7550: "DieForTonga",
    7631: "Cool Guy",
    7724: "Molokai Robotics",
    7898: "Cool Geeks"
}

export { Teams, TeamsMapping }