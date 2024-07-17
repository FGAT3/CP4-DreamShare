const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

  run() {
    const firstnames = [
      "John",
      "Jane",
      "Alice",
      "Robert",
      "Emily",
      "Michael",
      "Sarah",
      "David",
      "Laura",
      "Daniel",
      "Emma",
      "James",
      "Olivia",
      "Matthew",
      "Sophia",
      "Lucas",
      "Isabella",
      "Ethan",
      "Mia",
      "Alexander",
      "Ava",
      "Henry",
      "Charlotte",
      "Liam",
      "Amelia",
      "Benjamin",
      "Evelyn",
      "William",
      "Harper",
      "Jackson",
    ];
    const lastnames = [
      "Doe",
      "Smith",
      "Johnson",
      "Brown",
      "Davis",
      "Wilson",
      "Moore",
      "Taylor",
      "Anderson",
      "Thomas",
      "Jackson",
      "White",
      "Harris",
      "Martin",
      "Thompson",
      "Garcia",
      "Martinez",
      "Robinson",
      "Clark",
      "Rodriguez",
      "Lewis",
      "Lee",
      "Walker",
      "Hall",
      "Allen",
      "Young",
      "King",
      "Wright",
      "Scott",
      "Green",
    ];
    const avatars = Array.from({ length: 23 }, (_, i) => `avatar-${i + 1}.svg`);
    const editorPseudos = [
      "DreamWriter",
      "LucidDreamer",
      "NightmareExpert",
      "SleepScientist",
      "DreamResearcher",
    ];
    const userPseudos = [
      "DreamChaser",
      "NightOwl",
      "SleepyHead",
      "DreamWalker",
      "REMExplorer",
      "DreamSeeker",
      "NightVision",
      "LucidMaster",
      "SleepGuru",
      "DreamCatcher",
      "DreamAdventurer",
      "MoonlightDreamer",
      "StarlightSleeper",
      "DreamNavigator",
      "MysticDreamer",
      "EchoDreamer",
      "ShadowDreamer",
      "DreamPilot",
      "VisionaryDreamer",
      "DreamVoyager",
      "CelestialDreamer",
      "DreamChronicles",
      "DreamQuest",
      "DreamWanderer",
      "DreamWeaver",
    ];

    const users = [];

    for (let i = 0; i < 30; i += 1) {
      const role = i < 5 ? "editor" : "user";
      const pseudo = i < 5 ? editorPseudos[i] : userPseudos[i - 5];
      const firstname = firstnames[i];
      const lastname = lastnames[i];
      /* eslint-disable camelcase */
      const avatar_image = avatars[i % avatars.length];
      const email = `${firstname.toLowerCase()}.${lastname.toLowerCase()}@example.com`;
      const hashed_password = `hashedpassword${i + 1}`;

      users.push({
        firstname,
        lastname,
        avatar_image,
        pseudo,
        email,
        hashed_password,
        role,
      });
    }

    users.forEach((user) => {
      this.insert(user);
    });
  }
}

module.exports = UserSeeder;
