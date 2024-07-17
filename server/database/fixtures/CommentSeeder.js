const AbstractSeeder = require("./AbstractSeeder");
const ArticleSeeder = require("./ArticleSeeder");
const DreamSeeder = require("./DreamSeeder");
const UserSeeder = require("./UserSeeder");

class CommentSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "comment", truncate: true, dependencies: [UserSeeder, DreamSeeder, ArticleSeeder] });
  }

  run() {
    const comments = [
      {
        content:
          "I found your article on lucid dreaming fascinating! Have you tried any of these techniques yourself?",
        user_id: 6,
        article_id: 1,
      },
      {
        content:
          "This is such an interesting read about nightmares. I've had similar experiences!",
        user_id: 7,
        article_id: 2,
      },
      {
        content:
          "Great insights on sleep science. I learned a lot from this article!",
        user_id: 8,
        article_id: 3,
      },
      {
        content:
          "Thank you for sharing these tips on how to control dreams. Very helpful!",
        user_id: 9,
        article_id: 4,
      },
      {
        content:
          "I always wondered how REM sleep works. This article explained it so well.",
        user_id: 10,
        article_id: 5,
      },
      {
        content:
          "That was a spooky dream! I hope you don't have nightmares like this often.",
        user_id: 11,
        dream_id: 1,
      },
      {
        content:
          "Wow, a lucid dream! Did you manage to control everything in it?",
        user_id: 12,
        dream_id: 2,
      },
      {
        content:
          "This dream sounds like an adventure. Did you experience any emotions during it?",
        user_id: 13,
        dream_id: 3,
      },
      {
        content:
          "Such a vivid description of your dream. It felt like I was there!",
        user_id: 14,
        dream_id: 4,
      },
      {
        content:
          "Interesting recurring dream. Have you tried to understand its meaning?",
        user_id: 15,
        dream_id: 5,
      },
      {
        content:
          "Lucid dreams are so fascinating! Did you enjoy the experience?",
        user_id: 16,
        dream_id: 6,
      },
      {
        content:
          "Great article on dream interpretation. It's always intriguing to analyze dreams.",
        user_id: 17,
        article_id: 6,
      },
      {
        content:
          "This was a really detailed explanation about sleep cycles. Thanks for sharing!",
        user_id: 18,
        article_id: 7,
      },
      {
        content: "I had a similar dream once. It was quite unsettling!",
        user_id: 19,
        dream_id: 7,
      },
      {
        content:
          "Your article on sleep hygiene is very informative. I need to improve my habits.",
        user_id: 20,
        article_id: 8,
      },
      {
        content:
          "That was an amazing dream story! Did you tell anyone about it?",
        user_id: 21,
        dream_id: 8,
      },
      {
        content: "I loved reading about your dream adventure. So exciting!",
        user_id: 22,
        dream_id: 9,
      },
      {
        content:
          "Nightmares can be so scary. Hope you don't have them frequently.",
        user_id: 23,
        dream_id: 10,
      },
      {
        content:
          "This article on dream recall techniques is very useful. I'll try them out.",
        user_id: 24,
        article_id: 9,
      },
      {
        content: "What a peculiar dream! Did you notice any specific details?",
        user_id: 25,
        dream_id: 11,
      },
    ];

    comments.forEach((comment) => {
      this.insert(comment);
    });
  }
}

module.exports = CommentSeeder;
