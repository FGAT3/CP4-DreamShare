const AbstractSeeder = require("./AbstractSeeder");
const UserSeeder = require("./UserSeeder");

class ArticleSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "article", truncate: true, dependencies: [UserSeeder] });
  }

  run() {
    const articles = [
      {
        title: "Exploring the Mysteries of Lucid Dreams",
        image: "dream-1.jpg",
        content:
          "Lucid dreaming is the phenomenon of becoming aware that you are dreaming while still in the dream state. This intriguing state of consciousness allows dreamers to exert some control over the dream environment, characters, and narrative. The study of lucid dreams has gained traction in scientific communities for its potential benefits in psychological and neurological health, such as reducing anxiety, improving motor skills, and enhancing creativity. Techniques like reality testing and wake back to bed (WBTB) have been shown to increase the likelihood of experiencing lucid dreams. While still a developing field, lucid dream research opens up fascinating possibilities for understanding the human mind.",
        user_id: 1,
      },
      {
        title: "The Science Behind Nightmares and How to Combat Them",
        image: "dream-2.jpeg",
        content:
          "Nightmares are distressing dreams that can cause strong emotional responses, such as fear, sadness, or anxiety. They are common and can be triggered by a variety of factors, including stress, trauma, and certain medications. Understanding the science behind nightmares can help individuals manage and reduce their occurrence. Cognitive behavioral therapy (CBT) has been effective in treating chronic nightmares by helping individuals change their thought patterns and responses to dream content. Additionally, practicing good sleep hygiene, such as maintaining a regular sleep schedule and creating a calming bedtime routine, can also mitigate the frequency and intensity of nightmares.",
        user_id: 2,
      },
      {
        title: "Understanding the Stages of Sleep and Dream Formation",
        image: "dream-3.jpg",
        content:
          "Sleep is composed of multiple stages, each playing a critical role in physical and mental health. The sleep cycle includes rapid eye movement (REM) sleep and non-REM sleep stages, with REM being most closely associated with vivid dreaming. During REM sleep, brain activity increases, resembling the waking state, and the majority of dreams occur. This stage is essential for cognitive functions such as memory consolidation and emotional regulation. Non-REM stages, on the other hand, are crucial for physical restoration and growth. Disruptions in these stages can impact overall health and dream quality, highlighting the importance of consistent, restful sleep.",
        user_id: 3,
      },
      {
        title: "Dream Interpretation: Myth or Science?",
        image: "dream-4.jpg",
        content:
          "Dream interpretation has been a topic of fascination for centuries, with various cultures attributing different meanings to dream content. While some aspects of dream interpretation remain speculative and rooted in mythology, modern psychology provides a more scientific approach. Theories like Sigmund Freud's suggest that dreams are a window into the unconscious mind, revealing hidden desires and conflicts. Contemporary research explores the role of dreams in processing emotions and experiences. Although not all dreams have clear meanings, understanding common dream themes and their psychological underpinnings can offer insights into an individual's subconscious.",
        user_id: 4,
      },
      {
        title: "The Role of Dreams in Emotional Processing",
        image: "dream-5.jpg",
        content:
          "Dreams play a significant role in emotional processing, helping individuals cope with stress and traumatic experiences. During REM sleep, the brain processes emotional memories, allowing individuals to work through difficult emotions in a safe environment. This process can contribute to emotional resilience and mental well-being. Studies have shown that people who experience vivid or frequent dreams may have a better ability to handle stress and adapt to change. Understanding the connection between dreams and emotional health can provide valuable insights into mental health treatments and stress management techniques.",
        user_id: 5,
      },
      {
        title: "How to Induce Lucid Dreams: Tips and Techniques",
        image: "dream-6.jpeg",
        content:
          "Inducing lucid dreams can be a rewarding experience for those looking to explore their dream worlds with awareness. Techniques such as reality testing, where individuals frequently question their state of consciousness, and the wake back to bed (WBTB) method, which involves waking up during the night and then returning to sleep, have been shown to increase the likelihood of lucid dreaming. Keeping a dream journal can also help by enhancing dream recall and increasing awareness of dream patterns. With practice and patience, anyone can develop the skills needed to experience lucid dreams.",
        user_id: 1,
      },
      {
        title: "Common Themes in Nightmares and Their Meanings",
        image: "dream-7.jpg",
        content:
          "Nightmares often feature common themes such as falling, being chased, or losing teeth. These recurring motifs can reflect underlying anxieties and stressors in an individual's waking life. For example, falling dreams may indicate feelings of insecurity or lack of control, while being chased can symbolize avoidance of a problem or fear of confrontation. Understanding these themes can provide insight into personal fears and emotional struggles, offering an opportunity for self-reflection and growth. Analyzing and addressing these issues in waking life can help reduce the frequency and intensity of nightmares.",
        user_id: 2,
      },
      {
        title: "The Impact of Sleep Disorders on Dreaming",
        image: "dream-8.jpg",
        content:
          "Sleep disorders such as insomnia, sleep apnea, and narcolepsy can significantly impact dreaming. Insomnia often leads to fragmented sleep, reducing the time spent in REM sleep, where most vivid dreaming occurs. Sleep apnea, characterized by interrupted breathing during sleep, can also disrupt REM cycles and lead to poor dream recall. Narcolepsy, a condition marked by excessive daytime sleepiness and sudden sleep attacks, can cause vivid and often disturbing dreams or hallucinations. Addressing and managing these sleep disorders is crucial for maintaining healthy sleep patterns and improving dream quality.",
        user_id: 3,
      },
      {
        title: "Dreams and Creativity: Unlocking Your Potential",
        image: "dream-9.jpg",
        content:
          "Dreams have long been associated with creativity, providing a rich source of inspiration for artists, writers, and inventors. The unrestricted nature of dreams allows for free-flowing ideas and novel connections that might not emerge during waking hours. Techniques such as lucid dreaming can further enhance creative potential by allowing individuals to consciously explore and manipulate their dreamscapes. Many famous works of art and literature have been inspired by dreams, highlighting their powerful influence on creative expression. Embracing and exploring your dreams can unlock new avenues of creativity and innovation.",
        user_id: 4,
      },
      {
        title: "The Connection Between Dreams and Memory",
        image: "dream-10.jpg",
        content:
          "Dreams play a crucial role in memory consolidation, helping to process and integrate new information acquired during waking hours. During REM sleep, the brain actively replays and organizes memories, strengthening neural connections and facilitating long-term storage. This process not only aids in learning and retention but also in emotional regulation, as the brain processes and resolves emotional experiences. Understanding the connection between dreams and memory can provide valuable insights into cognitive functions and the importance of adequate sleep for mental health.",
        user_id: 5,
      },
      {
        title: "Cultural Perspectives on Dreams and Their Meanings",
        image: "dream-11.jpg",
        content:
          "Dreams have held significant cultural importance throughout history, with various societies attributing different meanings and interpretations to dream content. In ancient Egypt, dreams were believed to be messages from the gods, while in many Indigenous cultures, dreams are seen as a way to connect with the spiritual world. Modern psychological theories, such as those proposed by Carl Jung, suggest that dreams reflect universal archetypes and collective unconscious themes. Exploring these cultural perspectives can enrich our understanding of the multifaceted nature of dreams and their impact on human experience.",
        user_id: 1,
      },
      {
        title: "The Role of Technology in Dream Research",
        image: "dream-12.jpg",
        content:
          "Advancements in technology have significantly enhanced dream research, providing new tools and methods for studying the complexities of dreaming. Techniques such as functional magnetic resonance imaging (fMRI) and electroencephalography (EEG) allow scientists to observe brain activity during different sleep stages, shedding light on the neural mechanisms underlying dreams. Virtual reality (VR) and artificial intelligence (AI) are also being explored as potential tools for inducing and analyzing dreams. These technological innovations hold promise for deepening our understanding of the science of dreams and their potential applications in mental health and cognitive therapy.",
        user_id: 2,
      },
      {
        title: "How to Improve Dream Recall: Practical Tips",
        image: "dream-13.jpg",
        content:
          "Improving dream recall can enhance your ability to explore and understand your dreams. Simple practices such as keeping a dream journal, where you write down your dreams immediately upon waking, can significantly boost recall. Setting an intention before sleep to remember your dreams and avoiding alcohol or heavy meals before bedtime can also help. Engaging in mindfulness and relaxation techniques can improve overall sleep quality, leading to more vivid and memorable dreams. With consistent practice, you can develop a deeper connection with your dream world.",
        user_id: 3,
      },
      {
        title: "The Psychology of Recurring Dreams",
        image: "dream-14.jpg",
        content:
          "Recurring dreams, where the same dream or theme repeats over time, can provide valuable insights into unresolved issues and ongoing concerns in an individual's life. These dreams often reflect persistent thoughts, fears, or desires that have not been addressed. Understanding the symbolism and emotions associated with recurring dreams can offer clues to underlying psychological patterns. By paying attention to these recurring themes and exploring their meanings, individuals can gain a deeper understanding of their inner world and work towards resolving lingering conflicts.",
        user_id: 4,
      },
      {
        title: "The Benefits of Lucid Dreaming for Mental Health",
        image: "dream-15.jpg",
        content:
          "Lucid dreaming, where the dreamer becomes aware of and can control their dream, offers several potential benefits for mental health. It can be used as a tool for overcoming nightmares, as individuals can change the outcome of distressing dreams. Lucid dreaming also provides a safe space for practicing social and problem-solving skills, reducing anxiety and enhancing overall well-being. Techniques such as reality testing and the mnemonic induction of lucid dreams (MILD) can increase the frequency of lucid dreams, allowing individuals to harness these benefits for personal growth and mental health improvement.",
        user_id: 5,
      },
      {
        title: "Exploring the Role of Dreams in Problem Solving",
        image: "dream-16.jpg",
        content:
          "Dreams have been shown to play a role in problem-solving, providing unique insights and creative solutions to waking life challenges. During sleep, the brain continues to process and organize information, often making connections that are not apparent during conscious thought. This phenomenon, known as 'incubation,' can lead to sudden insights or 'aha' moments upon waking. Encouraging this process by focusing on a specific problem before sleep and reflecting on dreams upon waking can enhance problem-solving abilities. Embracing the problem-solving potential of dreams can lead to innovative solutions and personal breakthroughs.",
        user_id: 1,
      },
      {
        title: "The History and Evolution of Dream Theories",
        image: "dream-17.jpg",
        content:
          "Theories about the nature and purpose of dreams have evolved significantly throughout history. Early civilizations often viewed dreams as divine messages or prophecies. In the late 19th and early 20th centuries, pioneers like Sigmund Freud and Carl Jung introduced psychoanalytic theories, suggesting that dreams reveal unconscious desires and conflicts. Contemporary research has shifted towards understanding the neurological and cognitive functions of dreams, exploring their roles in memory consolidation, emotional regulation, and problem-solving. This evolution reflects a growing appreciation of the complexity and significance of dreams in human experience.",
        user_id: 2,
      },
      {
        title: "The Influence of Diet on Dream Patterns",
        image: "dream-18.jpg",
        content:
          "Diet can have a notable impact on dream patterns and vividness. Certain foods and nutrients, such as vitamin B6, have been linked to improved dream recall and more vivid dreams. Conversely, heavy meals, spicy foods, and alcohol consumption before bed can disrupt sleep and lead to unusual or disturbing dreams. Understanding the relationship between diet and dreams can help individuals make informed choices to enhance sleep quality and dream experiences. Maintaining a balanced diet and avoiding certain foods close to bedtime can promote healthier, more restorative sleep and more positive dream experiences.",
        user_id: 3,
      },
      {
        title: "The Potential of Dreams in Trauma Therapy",
        image: "dream-19.jpg",
        content:
          "Dreams can play a crucial role in trauma therapy, offering a means to process and integrate traumatic experiences. Techniques such as image rehearsal therapy (IRT), where individuals re-script distressing dreams to create positive outcomes, have shown effectiveness in reducing nightmare frequency and intensity in trauma survivors. Lucid dreaming can also be used therapeutically to confront and alter traumatic dream content in a safe environment. Incorporating dream work into trauma therapy can provide valuable tools for healing and emotional recovery, aiding individuals in overcoming the lingering effects of trauma.",
        user_id: 4,
      },
      {
        title: "The Future of Dream Research: Emerging Trends",
        image: "dream-20.jpg",
        content:
          "The future of dream research is poised to expand with advancements in technology and a growing interest in the cognitive and therapeutic potential of dreams. Emerging trends include the use of neuroimaging to map dream content, virtual reality to create dream-like experiences, and artificial intelligence to analyze dream patterns and provide insights into the subconscious. These innovations hold promise for enhancing our understanding of the brain, improving mental health treatments, and exploring the vast potential of the dream state. As research progresses, dreams may unlock new frontiers in neuroscience and psychology.",
        user_id: 5,
      },
    ];

    articles.forEach((article) => {
      this.insert(article);
    });
  }
}

module.exports = ArticleSeeder;
