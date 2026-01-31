import { Standard } from "../types";

export const learningToLearnCategory: Standard = {
  id: "learning-to-learn",
  name: "Learning to Learn",
  displayName: "Learning How to Learn",
  description: "Master the skills of effective learning",
  color: "bg-teal-500",
  subjects: [
    {
      id: "ltl-study-skills",
      name: "Study Skills",
      icon: "BookOpen",
      color: "text-teal-500",
      lessonIds: ["ltl-effective-reading", "ltl-note-taking-methods", "ltl-study-environment", "ltl-review-techniques"]
    },
    {
      id: "ltl-learning-strategies",
      name: "Learning Strategies",
      icon: "Brain",
      color: "text-purple-500",
      lessonIds: ["ltl-active-learning", "ltl-visual-learning", "ltl-spaced-repetition", "ltl-practice-retrieval"]
    },
    {
      id: "ltl-motivation",
      name: "Motivation & Mindset",
      icon: "Flame",
      color: "text-orange-500",
      lessonIds: ["ltl-growth-mindset", "ltl-intrinsic-motivation", "ltl-overcoming-obstacles", "ltl-celebrating-progress"]
    },
    {
      id: "ltl-research",
      name: "Research Skills",
      icon: "Search",
      color: "text-blue-500",
      lessonIds: ["ltl-asking-questions", "ltl-finding-information", "ltl-evaluating-sources", "ltl-organizing-research"]
    }
  ]
};

export const learningToLearnLessons = [
  // ==================================================================================
  // STUDY SKILLS
  // ==================================================================================
  { 
    id: "ltl-effective-reading", 
    title: "Reading Effectively", 
    description: "Techniques to improve reading comprehension", 
    category: "Learning to Learn", 
    difficulty: "Beginner" as const, 
    duration: "25 min", 
    points: 140, 
    image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=800",
    tags: ["reading", "comprehension", "literacy"],
    content: `
# Reading Effectively

## Reading is Not Just Looking at Words
Many people read "passively"—letting their eyes scan the page while their brain thinks about dinner. Effective reading is an active interrogation of the text.

![Person reading intently with highlighter](https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=800&q=80)

## The SQ3R Method
Developed by educational psychologists, this is the gold standard for reading textbooks and dense material.

### 1. Survey (S)
Before reading, scan the landscape.
* Read the **Title** and **Headings**.
* Look at **pictures**, **charts**, and **captions**.
* Read the **introduction** and **conclusion**.
* *Goal:* Create a mental map of what you are about to learn.

### 2. Question (Q)
Turn headings into questions to give your brain a mission.
* *Heading:* "Photosynthesis Process"
* *Question:* "How does the process of photosynthesis work?"
* *Goal:* Your brain is now hunting for answers, not just wandering.

### 3. Read (R1)
Read the section to find the answer to your question.
* Focus on **Bold** terms.
* Don't just read words; look for meaning.

### 4. Recite (R2)
Look away from the book.
* Say the answer to your question out loud.
* If you can't say it, you didn't learn it. Read it again.

### 5. Review (R3)
When finished with the chapter, review your notes and questions.

## Skimming vs. Scanning
* **Skimming:** Reading rapidly to get a general overview. (Good for: Pre-reading, deciding if a source is useful).
* **Scanning:** Reading rapidly to find specific facts. (Good for: Finding a date, a name, or a specific answer).

## Active Reading Tactics
1.  **Highlighter Discipline:** Never highlight a whole sentence. Only highlight keywords. If everything is yellow, nothing is important.
2.  **Marginalia:** Write notes in the margins. Argue with the author. Write "Why?" or "Important!"
3.  **Visualization:** Turn the text into a movie in your head.

## Key Takeaway
Don't read to finish the page; read to find the answer.

> "Reading is to the mind what exercise is to the body." - Joseph Addison

---

## Practical Exercises

### Exercise 1: SQ3R Practice
Choose a textbook chapter you need to study. Apply the SQ3R method fully: Survey (5 min), Question (turn each heading into a question), Read (actively), Recite (look away and summarize), Review (check your understanding). Compare how much you remember vs. a chapter you read passively.

### Exercise 2: Highlighter Discipline Challenge
Read a 2-page article with this rule: You may only highlight 5 words total per page. This forces you to identify what's truly important. After reading, write a summary using only your highlighted words as prompts.

### Exercise 3: Active Reading Annotation
For your next assigned reading, annotate actively in the margins: write "?" for confusion, "!" for important, "*" for key terms, and short summaries in your own words. At the end, count your annotations. Aim for at least 5 per page.

---

> "The more that you read, the more things you will know. The more that you learn, the more places you'll go." - Dr. Seuss

> "Reading without reflecting is like eating without digesting." - Edmund Burke
    `
  },
  { 
    id: "ltl-note-taking-methods", 
    title: "Note-Taking Methods", 
    description: "Different ways to capture and organize information", 
    category: "Learning to Learn", 
    difficulty: "Beginner" as const, 
    duration: "25 min", 
    points: 140, 
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800",
    tags: ["notes", "organization", "cornell"],
    content: `
# Note-Taking Methods

## Transcription vs. Synthesis
**Bad note-taking** is trying to write down every word the teacher says (Transcription). You are a recording device, not a learner.
**Good note-taking** is processing the information and writing down the meaning (Synthesis).

![Notebook with structured notes](https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80)

## 1. The Cornell Method
Best for: Lectures and Textbook summaries.
* **Divide the page:**
    * Draw a vertical line 2.5 inches from the left.
    * Draw a horizontal line 2 inches from the bottom.
* **Right Column (Notes):** Take normal notes here during class.
* **Left Column (Cues):** After class, write keywords or "Test Questions" here.
* **Bottom Area (Summary):** Write a 2-sentence summary of the page.
* **How to Study:** Cover the right side. Look at the Cues on the left. Can you answer them?


## 2. The Outline Method
Best for: Highly structured lectures.
* **Main Topic**
    * Sub-topic
        * Detail 1
        * Detail 2
    * Sub-topic B
* *Pros:* Very organized.
* *Cons:* Hard to do if the teacher jumps around.

## 3. The Mapping Method (Mind Maps)
Best for: Visual learners and brainstorming.
* Start with the Main Idea in the center bubble.
* Draw branches to sub-topics.
* *Pros:* Shows relationships between ideas easily. Good for complex concepts.

## 4. The Flow Method
Best for: Fast-talking teachers and history/processes.
* Don't use strict lines.
* Use arrows to connect ideas.
* Draw little diagrams.
* Focus on *connections* rather than formatting.

## Digital vs. Paper
* **Paper:** Research shows writing by hand improves memory retention because it forces you to summarize (you can't write as fast as you type).
* **Digital:** Easier to search, edit, and back up.
* *Recommendation:* Take notes on paper, then type them up later (this counts as a review session!).

## Key Takeaway
Notes are a tool for *future you*. If you can't understand them in 2 weeks, they are useless.

---

## Practical Exercises

### Exercise 1: Cornell Method Trial
For your next class or video lesson, set up a Cornell-style page (2.5" left column, 2" bottom margin). Take notes in the right column. After class, add cue questions in the left column and a summary at the bottom. Test yourself the next day using only the cue column.

### Exercise 2: Method Comparison Week
Try a different note-taking method each day this week: Monday (Cornell), Tuesday (Outline), Wednesday (Mind Map), Thursday (Flow). At week's end, review all four and rate each for ease of creation and ease of studying from.

### Exercise 3: Note Quality Audit
Take out notes from 2 weeks ago. Can you understand them? Can you explain the concepts to someone else? Mark sections that are confusing and identify what you could have done differently. Use this insight to improve future note-taking.

---

> "The palest ink is better than the best memory." - Chinese Proverb

> "Note-taking is not just writing – it's thinking on paper." - Unknown
    `
  },
  { 
    id: "ltl-study-environment", 
    title: "Creating a Study Environment", 
    description: "Set up the perfect space for learning", 
    category: "Learning to Learn", 
    difficulty: "Beginner" as const, 
    duration: "15 min", 
    points: 100, 
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    tags: ["environment", "focus", "productivity"],
    content: `
# Creating a Study Environment

## Context-Dependent Memory
Your brain associates your environment with your behavior.
* If you study in bed, your brain thinks "Sleep time" or "Relax time."
* You need a dedicated space where your brain knows: "We are here to work."

![Clean desk setup](https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80)

## The Ideal Setup
1.  **Lighting:** Natural light is best. If not, use a cool-toned lamp (blue light wakes you up). Warm light makes you sleepy.
2.  **Ergonomics:**
    * Monitor at eye level (prevents neck strain).
    * Feet flat on the floor.
    * Back supported.
3.  **Temperature:** Slightly cool is better for alertness (around 70°F/21°C). Too warm makes you drowsy.

## The Digital Fortress
Your phone is the enemy of deep work.
* **Level 1:** Phone face down.
* **Level 2:** Phone in a drawer.
* **Level 3 (God Mode):** Phone in another room. *Research shows even having a phone visible reduces cognitive capacity.*

## Friction Design
* **Reduce Friction for Studying:** Have your books, pens, and water ready *before* you start. If you have to search for a pen, you might get distracted.
* **Increase Friction for Distractions:** Unplug the Xbox. Log out of Netflix. Make it annoying to stop studying.

## Background Noise
* **Silence:** Best for difficult, new material.
* **White Noise / Rain:** Good for blocking out household sounds.
* **Music:**
    * *Lyrics:* BAD. Your brain's language center gets confused processing lyrics and reading text.
    * *Instrumental/Lo-Fi:* GOOD. Provides a rhythm without distraction.

## Key Takeaway
Treat your study space like a cockpit. Everything you need is within reach, and all unnecessary systems are offline.

---

## Practical Exercises

### Exercise 1: Environment Audit
Rate your current study space on: Lighting (1-5), Comfort (1-5), Distractions (1-5, where 5 = no distractions), Organization (1-5). Identify your lowest score and make one improvement this week. Re-rate after the change.

### Exercise 2: Digital Fortress Challenge
For your next study session, put your phone in another room completely. Use a website blocker (Freedom, Cold Turkey) to block social media on your computer. Track how often you instinctively reach for your phone. Notice how your focus improves without digital temptations.

### Exercise 3: Study Zone Ritual
Create a consistent pre-study ritual: same place, same setup, same music (or silence). Practice this for one week. Notice how quickly your brain shifts into "study mode" when you perform the ritual. Consistency creates automatic focus triggers.

---

> "Your environment shapes your behavior more than your willpower." - James Clear

> "Focus is not something you have. It's something you create." - Unknown
    `
  },
  { 
    id: "ltl-review-techniques", 
    title: "Review & Revision Techniques", 
    description: "Effective methods for reviewing material", 
    category: "Learning to Learn", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
    tags: ["revision", "feynman", "exams"],
    content: `
# Review & Revision Techniques

## The Illusion of Competence
Re-reading your notes is the most common and **least effective** study method.
* Why? It creates "familiarity." You see the words and think "I know this."
* *Reality:* You recognize it, but you can't recall it. You need **Active Recall**.

![Student reviewing notes](https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80)

## The Feynman Technique
Named after Nobel prize physicist Richard Feynman.
1.  **Choose a concept.**
2.  **Teach it to a child (imaginary).** Write down an explanation in simple language. No jargon.
3.  **Identify gaps.** If you get stuck or use a big word because you can't explain it simply, that is a gap in your knowledge.
4.  **Review.** Go back to the source material to fix the gap.
* *Rule:* If you can't explain it simply, you don't understand it well enough.

## Blurting (Brain Dumping)
1.  Read a section of your textbook.
2.  Close the book.
3.  Get a blank sheet of paper.
4.  Write down everything you can remember.
5.  Open the book and check what you missed. Use a different color pen to fill in the gaps.

## Flashcards (Done Right)
* **Don't flip too fast.** When you see the front, force your brain to actually retrieve the answer.
* **Say it out loud.**
* **Shuffle the deck.** Don't memorize the order of the cards; memorize the concepts.

## Interleaving
Don't block-study (AAAA, BBBB, CCCC). Mix it up (ABC, BCA, CAB).
* *Example:* Don't do 50 multiplication problems, then 50 division. Do a mix.
* *Why:* It forces your brain to choose *which* strategy to use, which mimics real tests.

## Key Takeaway
Reviewing should feel hard. If it feels easy, you aren't learning; you're just recognizing.

---

## Practical Exercises

### Exercise 1: Feynman Technique Practice
Choose a concept you just learned. Get a blank piece of paper. Explain the concept as if teaching a 10-year-old – no jargon allowed. When you get stuck or use a complex word, that's a knowledge gap. Return to your materials to fill it, then try again.

### Exercise 2: Blurting Session
Read a section of your study material. Close the book. Set a 5-minute timer. Write everything you can remember on a blank page. Open the book and use a different color pen to add what you missed. The gaps you identify are exactly what you need to study more.

### Exercise 3: Create Your Own Test
After completing a chapter or topic, write 10 test questions you think a teacher might ask. Include a mix of factual recall and application questions. Wait 24 hours, then take your own test without looking at your notes. This is powerful retrieval practice.

---

> "The best way to learn is to teach." - Frank Oppenheimer

> "Testing is not just assessment; it's a learning event." - Robert Bjork
    `
  },

  // ==================================================================================
  // LEARNING STRATEGIES
  // ==================================================================================
  { 
    id: "ltl-active-learning", 
    title: "Active Learning Techniques", 
    description: "Engage deeply with what you're learning", 
    category: "Learning to Learn", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800",
    tags: ["active-learning", "engagement", "participation"],
    content: `
# Active Learning Techniques

## Passive vs. Active
* **Passive Learning:** Receiving info. (Listening to a lecture, watching a video, reading). Retention rate: Low (~10-20%).
* **Active Learning:** Doing something with info. (Discussing, creating, practicing). Retention rate: High (~50-90%).

![Group discussion](https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80)

## The Learning Pyramid
* **Lecture:** 5% retention.
* **Reading:** 10%.
* **Audio-Visual:** 20%.
* **Demonstration:** 30%.
* **Discussion:** 50%.
* **Practice Doing:** 75%.
* **Teaching Others:** 90%.

## Techniques to Switch to Active Mode

### 1. Stop and Jot
While watching a video/lecture, pause every 5 minutes. Write down a 1-sentence summary. If you can't, rewind.

### 2. Elaborative Interrogation
Ask "Why?" and "How?"
* *Fact:* The Roman Empire fell in 476 AD.
* *Elaboration:* Why? Political instability, economic troubles, barbarian invasions. How did that happen?
* Connect new facts to things you already know.

### 3. Self-Explanation
Talk to yourself. Explain the steps of a math problem as you do them.
* "First I need to isolate x, so I will subtract 5 from both sides..."

### 4. Application
Don't just memorize the formula; use it.
* Learning Spanish? Don't just read the vocab list. Write a paragraph about your day using the words.

## Key Takeaway
Learning is not a spectator sport. Get dirty. Get involved. Make the information yours.

---

## Practical Exercises

### Exercise 1: Stop and Jot Video Learning
Watch a 20-minute educational video on YouTube. Pause every 5 minutes and write a 1-sentence summary of what you just learned. At the end, you'll have 4 summary sentences. Try to recall the video content using only these prompts the next day.

### Exercise 2: Elaborative Interrogation Practice
Take any fact from your current studies. Ask "Why is this true?" and "How does this work?" Write at least 3 elaborations connecting this fact to other things you know. This deepens encoding and makes the information more memorable.

### Exercise 3: Teach It to Learn It
After your next study session, explain what you learned to someone (friend, family member, pet, or stuffed animal). Teaching requires you to organize your thoughts and identify gaps. Notice which parts are easy to explain and which are hard – the hard parts need more study.

---

> "Tell me and I forget. Teach me and I remember. Involve me and I learn." - Benjamin Franklin

> "Learning is not attained by chance; it must be sought for with ardor." - Abigail Adams
    `
  },
  { 
    id: "ltl-visual-learning", 
    title: "Visual Learning Tools", 
    description: "Use diagrams, mind maps, and visual aids", 
    category: "Learning to Learn", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800",
    tags: ["visuals", "diagrams", "dual-coding"],
    content: `
# Visual Learning Tools

## Dual Coding Theory
Your brain has two channels: Visual (Images) and Verbal (Words).
* If you use both at the same time, you double your chance of remembering.
* *Example:* Don't just write "The heart has 4 chambers." Draw a heart and label the 4 chambers.

![Mind map on whiteboard](https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80)

## Tools for Visualization

### 1. Mind Maps
* Start with the central concept.
* Branches radiate out.
* Use colors and small doodles.
* *Benefit:* Shows hierarchy and relationships instantly.

### 2. Flowcharts
* Best for processes (algorithms, history timelines, recipes).
* Box \u2192 Arrow \u2192 Box.
* *Benefit:* Clarifies sequence and cause-and-effect.

### 3. Venn Diagrams
* Best for comparisons (Compare/Contrast essays).
* Two overlapping circles.
* *Benefit:* Visually separates shared traits from unique traits.

### 4. Infographics
* Combine data with design.
* Summarize a whole chapter into one poster.

## Graphic Organizers
Use templates to structure your thoughts.
* **Story Map:** Characters, Setting, Plot, Conflict, Resolution.
* **Fishbone Diagram:** Root cause analysis.

## Key Takeaway
A picture is worth a thousand words—especially when you are studying. Draw your notes.

---

## Practical Exercises

### Exercise 1: Mind Map a Chapter
Choose a chapter or topic you're studying. Create a mind map with the main topic in the center and at least 5 branches to subtopics. Add colors and small doodles. Use this mind map to review instead of re-reading the chapter. Notice how relationships between ideas become clearer.

### Exercise 2: Dual Coding Challenge
For your next set of notes, add a simple drawing or diagram for every major concept. It doesn't have to be artistic – stick figures and arrows work! After a week, test yourself on concepts with drawings vs. concepts without. Compare which you remember better.

### Exercise 3: Infographic Creation
Summarize an entire topic onto one page using only visuals: diagrams, flowcharts, icons, and minimal text. This forces you to identify what's truly important and how concepts connect. The creation process itself is powerful learning.

---

> "Vision is the art of seeing what is invisible to others." - Jonathan Swift

> "If you can't draw it, you don't understand it." - Richard Feynman
    `
  },
  { 
    id: "ltl-spaced-repetition", 
    title: "Spaced Repetition", 
    description: "Optimize memory with timed review sessions", 
    category: "Learning to Learn", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1506784365371-1605cd091327?w=800",
    tags: ["memory", "anki", "forgetting-curve"],
    content: `
# Spaced Repetition

## The Forgetting Curve
Hermann Ebbinghaus discovered that we forget 50% of what we learn within 20 minutes and 70% within 24 hours.
* **Cramming:** You learn it, hold it for 1 day, then forget it all.
* **Spaced Repetition:** You review it just as you are about to forget it, which resets the curve and strengthens the memory.

![Calendar with marked dates](https://images.unsplash.com/photo-1506784365371-1605cd091327?w=800&q=80)

## The Schedule
To move info from Short-Term to Long-Term memory:
1.  **1st Review:** Immediately after class.
2.  **2nd Review:** 24 hours later.
3.  **3rd Review:** 1 week later.
4.  **4th Review:** 1 month later.

## The Leitner System (Analog)
Use 3 shoeboxes for flashcards.
* **Box 1:** Every Day. (New/Hard cards).
* **Box 2:** Every Tuesday/Thursday. (Medium cards).
* **Box 3:** Every Friday. (Easy cards).
* *Rules:*
    * Get a card right in Box 1 \u2192 Move to Box 2.
    * Get a card right in Box 2 \u2192 Move to Box 3.
    * Get a card **wrong** in Box 3 \u2192 Move ALL THE WAY back to Box 1.

## Digital Tools (Anki / Quizlet)
These apps use algorithms to handle the schedule for you.
* They show you difficult cards often and easy cards rarely.
* *Tip:* Be honest when grading yourself. If you hesitated, mark it "Hard."

## Key Takeaway
Study smarter, not longer. 10 minutes a day for a week is infinitely better than 70 minutes on Sunday.

---

## Practical Exercises

### Exercise 1: Leitner Box Setup
Create a simple 3-box system (or use envelopes). Make flashcards for material you're learning. Box 1 = review daily, Box 2 = review every 3 days, Box 3 = review weekly. Move cards based on accuracy: right answer = move up, wrong answer = back to Box 1. Use for 2 weeks and track retention.

### Exercise 2: Spaced Repetition Schedule
For your next topic, schedule specific review sessions: Review 1 (same day), Review 2 (next day), Review 3 (one week later), Review 4 (one month later). Put these in your calendar as appointments. Track how much you remember at each review point.

### Exercise 3: Anki or Quizlet Challenge
Create a deck of 20 flashcards in Anki or Quizlet for something you're learning. Practice daily for 2 weeks, being honest when grading yourself. Track how many cards you "mature" (know well). Compare your retention to material you studied by re-reading.

---

> "Repetition is the mother of learning." - Latin Proverb

> "The more you practice, the more automatic learning becomes." - Unknown
    `
  },
  { 
    id: "ltl-practice-retrieval", 
    title: "Practice & Retrieval", 
    description: "Test yourself to strengthen memory", 
    category: "Learning to Learn", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
    tags: ["testing", "memory", "active-recall"],
    content: `
# Practice & Retrieval

## The Testing Effect
Research shows that the mere act of testing yourself strengthens memory more than restudying.
* *Retrieval Practice* pulls information *out* of your brain. This effort builds stronger neural pathways.
* *Restudying* puts information *in* (which is passive).

![Student taking a test](https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80)

## How to Do It
1.  **Practice Tests:** Use past exams or textbook quizzes. Simulate test conditions (no phone, timed).
2.  **Flashcards:** The ultimate retrieval tool.
3.  **Two-Column Note Cover:** Cover your notes and try to recite them.
4.  **Write Questions:** Create your own test questions while you study. "If I were the teacher, what would I put on the exam?"

## The "Struggle" is Good
If retrieval feels hard, that means it's working.
* It's like lifting weights. If it's too light, muscles don't grow. If recalling the fact is too easy, memory doesn't grow.
* Don't look at the answer immediately. Squeeze your brain for 30 seconds.

## Feedback Loop
Retrieval only works if you check the answer.
* If you got it wrong, you have identified a specific weakness. Focus your study time there.
* This is efficient. Don't waste time studying what you already know.

## Key Takeaway
Don't wait until the exam to test yourself. Make testing your primary method of studying.

---

## Practical Exercises

### Exercise 1: Daily Retrieval Practice
At the end of each study session, close your materials and spend 5 minutes writing everything you remember. Don't worry about completeness – the struggle to recall is the exercise. Check your materials after to identify gaps. Do this daily for one week.

### Exercise 2: Practice Test Simulation
Find or create a practice test for your subject. Take it under realistic conditions: timed, no notes, no phone. After finishing, grade yourself and identify which topics need more work. Research shows practice tests boost actual test performance significantly.

### Exercise 3: Flashcard Deep Practice
When using flashcards, don't flip immediately if you're unsure. Force your brain to struggle for at least 10 seconds before checking the answer. Say your answer out loud before flipping. Rate each card: Easy (reduce frequency), Medium (maintain), Hard (increase frequency).

---

> "The act of retrieving knowledge changes knowledge itself." - Henry Roediger

> "Testing is studying in disguise." - Unknown
    `
  },

  // ==================================================================================
  // MOTIVATION & MINDSET
  // ==================================================================================
  { 
    id: "ltl-growth-mindset", 
    title: "Developing a Growth Mindset", 
    description: "Believe in your ability to learn and improve", 
    category: "Learning to Learn", 
    difficulty: "Beginner" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800",
    tags: ["mindset", "dweck", "potential"],
    content: `
# Developing a Growth Mindset

## The Power of "Yet"
Dr. Carol Dweck coined the terms "Fixed" and "Growth" mindset.
* **Fixed Mindset:** "I'm just bad at math." (Belief that intelligence is static).
* **Growth Mindset:** "I'm not good at math *yet*." (Belief that intelligence can be developed).

![Plant growing from soil](https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&q=80)

## Neuroplasticity
Your brain is not a rock; it's clay.
* Every time you learn something hard, neurons connect. Your brain physically changes.
* Struggling is the feeling of your brain growing.

## Reframing Failure
* **Fixed:** Failure = "I am stupid."
* **Growth:** Failure = "I need a new strategy."
* *Example:* Michael Jordan missed 9,000 shots. He didn't fail; he practiced resilience.

## Listening to Your Voice
* *Fixed Voice:* "What if you fail? You'll look like a loser."
* *Growth Response:* "If I don't try, I've already failed."
* *Fixed Voice:* "This is too hard."
* *Growth Response:* "This will take some time and effort."

## Key Takeaway
Talent is just a starting point. Effort and strategy determine where you finish.

---

## Practical Exercises

### Exercise 1: Fixed to Growth Reframe Journal
For one week, catch yourself every time you have a fixed mindset thought ("I'm bad at this," "I can't do math"). Write it down, then rewrite it as a growth mindset statement ("I'm learning this," "I haven't mastered math yet"). Track how many reframes you do – this rewires your thinking patterns.

### Exercise 2: Learning from Failure Analysis
Think of a recent failure or setback. Write down: What happened? What did I learn? What would I do differently? What skill did this experience help develop? Reframing failures as learning opportunities is the core of growth mindset.

### Exercise 3: "Yet" Practice
For the next week, whenever you say or think "I can't do X," add the word "yet" at the end: "I can't solve this... yet." "I don't understand this... yet." This small word shift opens the door to future growth and reminds your brain that skills are developable.

---

> "The view you adopt for yourself profoundly affects the way you lead your life." - Carol Dweck

> "Becoming is better than being." - Carol Dweck
    `
  },
  { 
    id: "ltl-intrinsic-motivation", 
    title: "Finding Intrinsic Motivation", 
    description: "Discover what drives you from within", 
    category: "Learning to Learn", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
    tags: ["motivation", "purpose", "drive"],
    content: `
# Finding Intrinsic Motivation

## Carrot vs. Stick vs. Drive
* **Extrinsic Motivation:** Doing it for a reward (grade, money) or to avoid punishment. This works for simple tasks but fails for long-term learning.
* **Intrinsic Motivation:** Doing it because you want to. Because it's interesting, meaningful, or fun.

![Compass on map](https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80)

## Self-Determination Theory (AMP)
To feel motivated, humans need 3 things:
1.  **Autonomy:** A sense of control. "I am choosing to study," not "I have to."
2.  **Mastery:** The desire to get better. Seeing progress.
3.  **Purpose:** Connecting the task to a bigger picture.

## Finding Your "Why"
* "I hate Chemistry."
* *Reframing with Purpose:* "I want to be a doctor to cure people. Chemistry is the language of medicine. I need this tool to save lives."
* Connect the boring task to your ultimate dream.

## Gamification
Make it a game to trigger intrinsic drive.
* "Can I finish this chapter in 20 minutes?" (Time trial).
* "Can I get 100% on this quiz?" (High score).

## Curiosity Gap
Start with a question that makes you wonder.
* Instead of "I have to read about WWII," ask "How did a failed art student (Hitler) convince a nation to go to war?" Now you *want* to know the answer.

## Key Takeaway
Don't wait for motivation to strike. Build it by connecting your work to your values.

---

## Practical Exercises

### Exercise 1: Find Your "Why" Map
Choose a subject you find boring or difficult. Draw a chain connecting it to your bigger life goals: This subject → helps me with [skill] → which I need for [goal] → which matters because [deeper value]. Finding personal relevance transforms tedious into meaningful.

### Exercise 2: Curiosity Question Before Study
Before starting any study session, write one genuine question you're curious about related to the topic. "I wonder why..." or "How does X work?" This curiosity gap gives your brain a mission and transforms studying from obligation to exploration.

### Exercise 3: AMP Self-Assessment
Rate your current learning experience on: Autonomy (Do I feel in control?), Mastery (Am I seeing progress?), Purpose (Does this connect to my values?). Score each 1-10. Identify your lowest score and brainstorm one way to increase it. Address the missing ingredient.

---

> "The secret of getting ahead is getting started." - Mark Twain

> "Motivation is what gets you started. Habit is what keeps you going." - Jim Ryun
    `
  },
  { 
    id: "ltl-overcoming-obstacles", 
    title: "Overcoming Learning Obstacles", 
    description: "Push through challenges and setbacks", 
    category: "Learning to Learn", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1528747045269-390fe33c19f2?w=800",
    tags: ["resilience", "grit", "obstacles"],
    content: `
# Overcoming Learning Obstacles

## The Wall
Everyone hits a wall. The subject gets too hard, or life gets too busy. This is the "Dip."

![Climber on rock wall](https://images.unsplash.com/photo-1528747045269-390fe33c19f2?w=800&q=80)

## Obstacle 1: Procrastination
* **Cause:** Fear of failure or feeling overwhelmed. It's an emotional regulation problem, not a time management problem.
* **Fix:** The 5-Minute Rule. "I will just do this for 5 minutes." Usually, once you start, the fear vanishes.

## Obstacle 2: Perfectionism
* **Cause:** "If I can't do it perfectly, I won't do it at all."
* **Fix:** "Done is better than perfect." A C-grade essay submitted is better than an A-grade essay that exists only in your head.

## Obstacle 3: Imposter Syndrome
* **Cause:** "Everyone else is smarter than me. I don't belong here."
* **Fix:** Realize that everyone is struggling; some just hide it better. Focus on your own growth, not their grades.

## Obstacle 4: Burnout
* **Cause:** Working hard without recovery.
* **Fix:** Scheduled rest. You cannot pour from an empty cup. Sleep, exercise, and social time are not "wasting time"; they are "maintenance."

## Learned Helplessness
When you fail repeatedly, you might stop trying because you believe "nothing I do matters."
* **Break the Cycle:** Set a tiny goal you can't fail (e.g., read 1 page). Prove to yourself that you have agency.

## Key Takeaway
The obstacle is the way. The struggle *is* the learning process. Embrace the grind.

---

## Practical Exercises

### Exercise 1: The 5-Minute Rule for Procrastination
Next time you're procrastinating, tell yourself: "I'll just do this for 5 minutes." Set a timer. Most often, once you start, you'll continue past 5 minutes. The hardest part is beginning. Track how often this trick works to build confidence in the technique.

### Exercise 2: Obstacle Pre-Planning
Before a big project or study period, identify 3 obstacles that might derail you (fatigue, distraction, confusion). For each, write a specific "If-Then" plan: "If I feel tired, then I'll take a 10-minute walk." "If I get distracted by my phone, then I'll put it in another room." Pre-planning makes obstacles manageable.

### Exercise 3: Recovery Scheduling
Look at your weekly schedule. Are you planning for rest, not just work? Add at least 3 "recovery" activities this week: exercise, social time, hobby, sleep. Color-code them. Burnout prevention is productivity – you can't perform if you're running on empty.

---

> "The impediment to action advances action. What stands in the way becomes the way." - Marcus Aurelius

> "Grit is living life like it's a marathon, not a sprint." - Angela Duckworth
    `
  },
  { 
    id: "ltl-celebrating-progress", 
    title: "Celebrating Progress", 
    description: "Recognize and appreciate your growth", 
    category: "Learning to Learn", 
    difficulty: "Beginner" as const, 
    duration: "15 min", 
    points: 100, 
    image: "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?w=800",
    tags: ["reward", "dopamine", "success"],
    content: `
# Celebrating Progress

## The Dopamine Loop
Dopamine is the molecule of "more." It motivates us to repeat behaviors that feel good.
* If you study hard and feel nothing, your brain won't want to do it again.
* If you study hard and celebrate, your brain marks that activity as "valuable."

![Confetti celebration](https://images.unsplash.com/photo-1533228876829-65c94e7b5025?w=800&q=80)

## Tracking Progress
You can't celebrate what you don't measure.
* **Don't Break the Chain:** (Seinfeld Strategy). Put a big X on the calendar every day you study. Seeing a streak of 10 Xs is highly motivating.
* **Progress Bars:** Visualize how far you've come (e.g., "Read 50/200 pages").

## The "Done" List
We obsess over "To-Do" lists, which remind us of what we haven't done.
* Keep a "Done" list. Write down everything you finished today.
* Look at it before bed to feel accomplished.

## Micro-Rewards
* "After I finish this math set, I can check Instagram for 5 minutes."
* "After I finish this essay, I will get a fancy coffee."
* *Rule:* The reward must come *after* the work, never before.

## Comparison is the Thief of Joy
* Don't compare your Chapter 1 to someone else's Chapter 20.
* Compare yourself to who you were yesterday. Did you learn one new thing? That is a win.

## Key Takeaway
Success is a series of small wins. Celebrate them to keep the fire burning.

---

## Practical Exercises

### Exercise 1: Don't Break the Chain
Get a calendar (paper or digital). Every day you complete your study goal, mark a big X. Your mission: don't break the chain. After 7 days, you've built momentum. Seeing a visual streak is powerfully motivating. Try for 21 days to establish a habit.

### Exercise 2: Daily "Done" List
At the end of each day, write down everything you accomplished – big and small. "Read 20 pages, took notes, reviewed flashcards, attended class." Looking at what you DID instead of what you didn't do builds positive momentum and self-efficacy.

### Exercise 3: Progress Comparison Journal
At the start of learning something new, write down your current skill level and a sample of your work. One month later, compare. Are you faster? More accurate? More confident? This before/after comparison provides concrete evidence of growth that motivates continued effort.

---

> "The more you celebrate your life, the more there is in life to celebrate." - Oprah Winfrey

> "Small progress is still progress." - Unknown
    `
  },

  // ==================================================================================
  // RESEARCH SKILLS
  // ==================================================================================
  { 
    id: "ltl-asking-questions", 
    title: "Asking Good Questions", 
    description: "Learn to ask questions that lead to understanding", 
    category: "Learning to Learn", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800",
    tags: ["curiosity", "inquiry", "socratic"],
    content: `
# Asking Good Questions

## The Quality of Your Life...
...depends on the quality of your questions.
* **Bad Question:** "Is this on the test?" (Focus: Minimal effort).
* **Good Question:** "How does this concept relate to what we learned last week?" (Focus: Deep understanding).

![Question mark sign](https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80)

## Open vs. Closed Questions
* **Closed:** Can be answered with Yes/No or a fact.
    * "Did the US win the Civil War?"
    * *Use:* Checking facts.
* **Open:** Requires explanation.
    * "Why did the North win the Civil War?"
    * *Use:* Deep learning and discussion.

## The 5 Whys
A technique to find the root cause.
* Problem: The Titanic sank.
1.  Why? It hit an iceberg.
2.  Why? It was going too fast in a danger zone.
3.  Why? The captain wanted to set a speed record.
4.  Why? The airline industry pushed for speed over safety.
5.  Why? (Root Cause found).

## Socratic Questioning
Challenge assumptions.
* "What do you mean by...?"
* "What is the evidence for...?"
* "Is there another way to look at this?"

## Asking for Help
Don't say "I don't get it."
* Say: "I understand step 1 and 2, but I get lost at step 3 because..."
* This shows you tried and helps the teacher give a specific answer.

## Key Takeaway
Don't be afraid to look stupid. The person who asks a question is a fool for five minutes; the person who doesn't remains a fool forever.

---

## Practical Exercises

### Exercise 1: Question Quality Upgrade
In your next class or meeting, challenge yourself to ask at least one question. Before asking, check: Is this open (requires explanation) or closed (yes/no)? Can I make it more specific? Aim for questions that show you've been thinking, not just questions to verify facts.

### Exercise 2: The 5 Whys Practice
Choose any topic you're curious about. Ask "Why?" five times in a chain, each time going deeper: "Why did X happen? Because of Y. Why Y? Because of Z..." This technique reveals root causes and deeper understanding. Write down your chain and see how deep you can go.

### Exercise 3: Question Journal
Carry a small notebook or use a phone note to record questions as they arise throughout the day. Don't try to answer them immediately – just capture them. At the end of the week, review your questions. Research answers to 3 of them. Cultivating curiosity is a superpower.

---

> "He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever." - Chinese Proverb

> "The important thing is not to stop questioning." - Albert Einstein
    `
  },
  { 
    id: "ltl-finding-information", 
    title: "Finding Information", 
    description: "Know where and how to look for answers", 
    category: "Learning to Learn", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800",
    tags: ["search", "google", "library"],
    content: `
# Finding Information

## Beyond the First Result
Most people Google something and click the first link. This is lazy research.
* **Google is an Ad Engine:** The top results are often paid or SEO-optimized, not necessarily the best.

![Library books](https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80)

## Boolean Search Operators
Supercharge your Google skills:
* **"Quotes":** Searches for that exact phrase.
    * *"Climate change effects"* (Finds those exact words together).
* **-Minus:** Excludes a word.
    * *Jaguar speed -car* (Finds the animal, not the vehicle).
* **site:** Searches only inside a specific website.
    * *site:edu photosynthesis* (Finds academic university sources).
* **filetype:** Finds specific files.
    * *filetype:pdf resume template*

## Deep Web vs. Surface Web
* **Surface Web:** Wikipedia, News sites, Blogs. Good for overview.
* **Deep Web:** Academic databases (JSTOR, Google Scholar), Library archives. Good for evidence.

## Wikipedia Strategy
Wikipedia is a starting point, not a finishing point.
* Read the summary to get the basics.
* **Scroll to the bottom:** The "References" section contains links to the real, credible sources. Cite those, not Wikipedia.

## Library Databases
If you are a student, your library pays thousands of dollars for access to journals. Use them.
* They are fact-checked and peer-reviewed (unlike random blogs).

## Key Takeaway
Information is abundant. Accurate information is scarce. Dig deeper.

---

## Practical Exercises

### Exercise 1: Boolean Search Challenge
Practice advanced Google searches: Use quotes for exact phrases, minus sign to exclude, site: to search specific domains. Try finding an academic source using: site:edu [your topic]. Compare results from a basic search vs. a Boolean-enhanced search on the same topic.

### Exercise 2: Wikipedia to Sources
Look up a topic on Wikipedia. Read the article, but don't cite it. Instead, scroll to the References section. Find 3 original sources from the reference list. Click through and read the actual sources. This is how researchers use Wikipedia properly.

### Exercise 3: Go Beyond Page One
For your next research project, force yourself to look at Google results on pages 2 and 3, not just page 1. Find at least one useful source that wasn't in the top 10 results. Often, the best sources aren't optimized for SEO and get buried.

---

> "Google can bring you back 100,000 answers. A librarian can bring you back the right one." - Neil Gaiman

> "Research is formalized curiosity. It is poking and prying with a purpose." - Zora Neale Hurston
    `
  },
  { 
    id: "ltl-evaluating-sources", 
    title: "Evaluating Sources", 
    description: "Determine if information is reliable", 
    category: "Learning to Learn", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800",
    tags: ["fake-news", "credibility", "craap-test"],
    content: `
# Evaluating Sources

## Information Hygiene
Just as you wouldn't eat food off the floor, don't consume information from trashy sources. You need a filter.

![Magnifying glass on text](https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80)

## The CRAAP Test
Use this checklist for every source:

### 1. Currency
* When was it published?
* Is the info outdated? (A medical article from 1990 is useless).

### 2. Relevance
* Does this actually answer my question?
* Who is the intended audience? (Kids? Doctors? General public?).

### 3. Authority
* Who wrote it?
* What are their credentials? (PhD? Journalist? Random YouTuber?).
* check the "About Us" page.

### 4. Accuracy
* Is it supported by evidence?
* Can you verify the facts in another source?
* Are there spelling errors? (Sign of low quality).

### 5. Purpose
* Why does this exist?
* To inform? To teach? To sell? To entertain?
* *Bias Check:* If a website selling vitamins says "Vitamins cure cancer," that is a conflict of interest.

## Lateral Reading
Fact-checkers don't stay on the page.
* Open a new tab.
* Search for the author's name.
* Search for the organization.
* See what *other* people say about them.

## Key Takeaway
Skepticism is a superpower. Assume everything is false until proven true with evidence.

---

## Practical Exercises

### Exercise 1: CRAAP Test Practice
Find an article online about a topic you're studying. Apply the full CRAAP test: Currency (when published?), Relevance (answers your question?), Authority (who wrote it?), Accuracy (evidence-based?), Purpose (why does it exist?). Rate each criterion 1-5. Would you cite this source?

### Exercise 2: Lateral Reading Exercise
Find a website or article that seems trustworthy. Before trusting it, practice lateral reading: Open a new tab and search for information ABOUT the author and organization. What do others say about their credibility? This is how professional fact-checkers work.

### Exercise 3: Bias Detection
Find two articles about the same news event from different sources (e.g., different news outlets). Compare: What facts are emphasized? What's left out? What language is used? Identify the perspective or bias in each. Understanding bias helps you read everything more critically.

---

> "Trust, but verify." - Russian Proverb

> "The first principle is that you must not fool yourself – and you are the easiest person to fool." - Richard Feynman
    `
  },
  { 
    id: "ltl-organizing-research", 
    title: "Organizing Your Research", 
    description: "Keep track of what you've learned", 
    category: "Learning to Learn", 
    difficulty: "Intermediate" as const, 
    duration: "20 min", 
    points: 130, 
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
    tags: ["research", "citation", "zettelkasten"],
    content: `
# Organizing Your Research

## The Knowledge Management Problem
Reading is easy. Remembering and finding it later is hard. If you don't organize, you lose the knowledge.

![Files and folders](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80)

## The Zettelkasten Method (Slip-box)
A system used by prolific writers.
1.  **Fleeting Notes:** Quick thoughts while reading.
2.  **Literature Notes:** Summaries of sources in your own words.
3.  **Permanent Notes:** One single idea per note.
4.  **Linking:** Connect new notes to old notes. "This idea relates to X."

## Digital Second Brains
Tools like Notion, Obsidian, or Evernote.
* **Tagging:** Don't just put files in folders. Tag them (e.g., #history, #essay, #important).
* **Search:** The power of digital notes is the "Ctrl+F" function.

## Citation Management
Don't wait until the night before the essay is due to find your sources.
* **Record immediately:** URL, Title, Author, Date.
* **Tools:** Use Zotero or EasyBib to auto-generate bibliographies.

## The Hierarchy of Knowledge
1.  **Data:** Raw numbers/facts.
2.  **Information:** Data with context.
3.  **Knowledge:** Information connected to other information.
4.  **Wisdom:** Knowledge applied to life.
* *Goal:* Your notes should help you climb this ladder.

## Key Takeaway
Your brain is for having ideas, not holding them. Dump your research into a trusted system so your brain is free to think.

---

## Practical Exercises

### Exercise 1: Source Log Setup
Create a simple research log (spreadsheet or document) with columns: Source Title, Author, URL, Date Accessed, Key Points, Citation. For your next assignment, log every source as you find it. No more scrambling to find sources at the last minute. Good organization starts with capture.

### Exercise 2: Note-to-Insight Upgrade
Take a set of research notes you've collected. For each note, add: 1) How does this connect to other notes? 2) What question does this answer? 3) What's MY thought about this? Transforming collected information into connected insights is the goal of research.

### Exercise 3: Citation Practice
Pick a citation style (MLA, APA, or Chicago). Find 3 different source types (book, website, journal article). Create proper citations for each. Use tools like EasyBib or Citation Machine to check your work. Building citation skills now saves hours of frustration later.

---

> "Knowledge is of no value unless you put it into practice." - Anton Chekhov

> "Organization isn't about perfection; it's about efficiency." - Unknown
    `
  }
];