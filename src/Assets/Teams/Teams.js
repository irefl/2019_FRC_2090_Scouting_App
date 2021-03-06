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

const TeamsInit = {
    359: true,
    368: true,
    2090: true,
    2437: true,
    2438: true,
    2439: true,
    2441: true,
    2443: true,
    2444: true,
    2445: true,
    2465: true,
    2477: true,
    2504: true,
    2853: true,
    2896: true,
    3008: true,
    3721: true,
    3800: true,
    3878: true,
    3882: true,
    4253: true,
    4270: true,
    5515: true,
    5701: true,
    6704: true,
    6766: true,
    6909: true,
    6998: true,
    7497: true,
    7505: true,
    7548: true,
    7550: true,
    7631: true,
    7724: true,
    7898: true
}

const TeamsInitF = {
    359: false,
    368: false,
    2090: false,
    2437: false,
    2438: false,
    2439: false,
    2441: false,
    2443: false,
    2444: false,
    2445: false,
    2465: false,
    2477: false,
    2504: false,
    2853: false,
    2896: false,
    3008: false,
    3721: false,
    3800: false,
    3878: false,
    3882: false,
    4253: false,
    4270: false,
    5515: false,
    5701: false,
    6704: false,
    6766: false,
    6909: false,
    6998: false,
    7497: false,
    7505: false,
    7548: false,
    7550: false,
    7631: false,
    7724: false,
    7898: false
}

export { Teams, TeamsMapping, TeamsInit, TeamsInitF }