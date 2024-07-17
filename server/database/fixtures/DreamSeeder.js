const AbstractSeeder = require("./AbstractSeeder");
const UserSeeder = require("./UserSeeder");

class DreamSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "dream", truncate: true, dependencies: [UserSeeder] });
  }

  run() {
    const dreams = [
      {
        title: "Flying Over a Magical City",
        content:
          "Last night, I had the most incredible dream where I was flying over a magical city with towering crystal buildings and vibrant lights. It felt so real as if I could touch the clouds. I soared above the bustling streets and even flew through a rainbow! It was exhilarating. Has anyone else experienced a flying dream like this? 🕊️",
        user_id: 6,
      },
      {
        title: "Chased by a Shadow",
        content:
          "I had a nightmare where I was being chased by a shadowy figure through a dense forest. No matter how fast I ran, it was always right behind me. I could hear its heavy breathing and footsteps getting closer. Just as it was about to catch me, I woke up in a cold sweat. What could this mean? 😱",
        user_id: 7,
      },
      {
        title: "Meeting a Talking Cat",
        content:
          "In my dream, I met a talking cat who claimed to be from another dimension. The cat had wise, sparkling eyes and told me secrets about the universe and my own life. It was such a bizarre yet enlightening experience. Have you ever dreamt of talking animals? 🐱✨",
        user_id: 8,
      },
      {
        title: "The Endless Maze",
        content:
          "I found myself in an endless maze with walls covered in ancient symbols. I walked for what felt like hours, turning corners and trying to find my way out. There was an eerie silence, and I could feel a presence watching me. Just when I thought I was lost forever, I woke up. Has anyone had a similar experience? 🌀",
        user_id: 9,
      },
      {
        title: "Dancing with Stars",
        content:
          "Last night, I dreamt that I was dancing among the stars in space. Each step I took created a ripple of light and music. It was the most beautiful and surreal experience. I felt weightless and free. It made me wonder about the mysteries of the universe. Has anyone else had a dream like this? ✨💃",
        user_id: 10,
      },
      {
        title: "Lost in a Time Loop",
        content:
          "I dreamt that I was stuck in a time loop, repeating the same day over and over again. Each time, I tried different things to break the loop, but nothing worked. It was frustrating and fascinating at the same time. I wonder what my subconscious is trying to tell me. Has anyone else experienced this? 🔄",
        user_id: 11,
      },
      {
        title: "A Castle in the Clouds",
        content:
          "In my dream, I discovered a castle floating among the clouds. It was grand and majestic, with golden spires and intricate designs. Inside, I met a wise old sage who shared ancient knowledge with me. The whole experience felt like a journey through a fairy tale. Do you believe in dream messages? 🏰☁️",
        user_id: 12,
      },
      {
        title: "Riding a Dragon",
        content:
          "I had an exhilarating dream where I was riding a dragon through the skies. The wind rushed past my face as we soared above mountains and oceans. The dragon was friendly and spoke to me in a language I somehow understood. It was an epic adventure! Have you ever had a dream that felt like a fantasy story? 🐉🌄",
        user_id: 13,
      },
      {
        title: "The Haunted House",
        content:
          "I dreamt that I was exploring an old, abandoned house that was said to be haunted. As I walked through the creaky hallways, I could hear whispers and see shadows moving. It was both terrifying and intriguing. I found a hidden room with old photographs and letters. What do you think this dream means? 👻",
        user_id: 14,
      },
      {
        title: "Swimming with Dolphins",
        content:
          "In my dream, I was swimming in a crystal-clear ocean surrounded by friendly dolphins. They swam around me, playfully jumping and communicating with each other. It was such a peaceful and joyful experience. I felt completely at ease and connected with nature. Have you ever dreamt of swimming with sea creatures? 🐬",
        user_id: 15,
      },
      {
        title: "A Journey Through Time",
        content:
          "I had a fascinating dream where I traveled through different periods of history. I visited ancient civilizations, medieval castles, and futuristic cities. Each era was vivid and detailed, and I interacted with people from different times. It was like a time-traveling adventure! What do you think this symbolizes? ⏳",
        user_id: 16,
      },
      {
        title: "The Mysterious Garden",
        content:
          "I dreamt of a beautiful garden filled with exotic plants and flowers. As I wandered through, I discovered hidden paths and secret nooks. There was a sense of mystery and wonder, as if the garden held ancient secrets. It was so calming and enchanting. Have you ever dreamt of a magical place like this? 🌸🌿",
        user_id: 17,
      },
      {
        title: "Chased by Robots",
        content:
          "I had a thrilling dream where I was being chased by robots in a futuristic city. The streets were filled with neon lights and flying cars. I kept running and hiding, trying to outsmart the robots. It felt like a high-stakes adventure. What could this dream mean? 🤖🏙️",
        user_id: 18,
      },
      {
        title: "A Meeting with an Alien",
        content:
          "In my dream, I encountered an alien being who communicated with me telepathically. The alien shared insights about the universe and our place in it. It was both strange and enlightening. The experience left me pondering about life beyond our planet. Have you ever dreamt of extraterrestrial encounters? 👽✨",
        user_id: 19,
      },
      {
        title: "The Infinite Library",
        content:
          "I found myself in an infinite library with endless rows of books. Each book contained stories and knowledge from different worlds and dimensions. I spent what felt like hours reading and exploring. It was a dream come true for a book lover like me. Do you think dreams can be windows to other realities? 📚",
        user_id: 20,
      },
      {
        title: "Running on Water",
        content:
          "I dreamt that I had the ability to run on water. I dashed across oceans and lakes with ease, feeling the cool water beneath my feet. It was an exhilarating and freeing experience. The dream made me feel powerful and unstoppable. Has anyone else had a dream where they had superpowers? 🌊🏃",
        user_id: 21,
      },
      {
        title: "The Talking Mirror",
        content:
          "In my dream, I found a magical mirror that could talk. The mirror gave me advice and revealed truths about myself that I hadn't considered. It was like having a wise mentor. The experience was both surreal and insightful. Have you ever dreamt of magical objects? 🪞",
        user_id: 22,
      },
      {
        title: "The Forgotten Island",
        content:
          "I discovered a forgotten island in my dream, untouched by time. The island was lush and filled with exotic wildlife. I explored its hidden caves and ancient ruins, feeling like an adventurer. It was a peaceful and exciting dream. Do you think dreams can be a way to explore our subconscious? 🏝️",
        user_id: 23,
      },
      {
        title: "Riding a Rollercoaster",
        content:
          "I had a dream where I was on a rollercoaster that went through different dimensions. Each twist and turn took me to a new world, filled with vibrant colors and strange landscapes. It was a wild and exhilarating ride. The dream felt like a metaphor for life's ups and downs. What do you think? 🎢",
        user_id: 24,
      },
      {
        title: "The Time-Traveler's Dilemma",
        content:
          "In my dream, I was a time-traveler faced with the dilemma of changing the past or preserving it. I visited pivotal moments in history and had to make tough choices. The dream was intense and thought-provoking. It made me reflect on the impact of our actions. Has anyone else had a dream about time travel? ⏰",
        user_id: 25,
      },
    ];

    dreams.forEach((dream) => {
      this.insert(dream);
    });
  }
}

module.exports = DreamSeeder;
