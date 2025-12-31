import { Standard } from "../types";

export const creativityCategory: Standard = {
  id: "creativity",
  name: "Creativity",
  displayName: "Creativity & Innovation",
  description: "Unlock your creative potential and innovative thinking",
  color: "bg-pink-500",
  subjects: [
    {
      id: "cr-creative-thinking",
      name: "Creative Thinking",
      icon: "Lightbulb",
      color: "text-pink-500",
      lessonIds: ["cr-what-is-creativity", "cr-overcoming-blocks", "cr-divergent-thinking", "cr-connecting-ideas"]
    },
    {
      id: "cr-artistic-expression",
      name: "Artistic Expression",
      icon: "Palette",
      color: "text-purple-500",
      lessonIds: ["cr-visual-arts-basics", "cr-music-appreciation", "cr-creative-writing-intro", "cr-performing-arts"]
    },
    {
      id: "cr-innovation",
      name: "Innovation & Design",
      icon: "Rocket",
      color: "text-blue-500",
      lessonIds: ["cr-design-thinking", "cr-prototyping-ideas", "cr-problem-innovation", "cr-future-thinking"]
    },
    {
      id: "cr-imagination",
      name: "Imagination & Play",
      icon: "Sparkles",
      color: "text-yellow-500",
      lessonIds: ["cr-power-imagination", "cr-play-creativity", "cr-curiosity-exploration", "cr-dreaming-big"]
    }
  ]
};

export const creativityLessons = [
  // ==================================================================================
  // CREATIVE THINKING
  // ==================================================================================
  { 
    id: "cr-what-is-creativity", 
    title: "What is Creativity?", 
    description: "Understand the nature of creative thinking", 
    category: "Creativity", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1491245338813-c6832976196e?w=800",
    tags: ["theory", "mindset", "brain"],
    content: `
# What is Creativity?

## It's Not Magic, It's a Muscle
Many people believe creativity is a divine spark given to a chosen few (artists, musicians). This is a myth. Creativity is simply **the ability to create something new and valuable**. It is a cognitive skill that can be trained, just like math or soccer.

![Brain glowing with ideas](https://images.unsplash.com/photo-1491245338813-c6832976196e?w=800&q=80)

## Big-C vs. Little-c Creativity
Psychologists distinguish between two types:
* **Big-C Creativity:** The genius-level breakthroughs that change history (Einstein, Picasso, Mozart). This is rare.
* **Little-c Creativity:** Everyday problem solving. Finding a new route to work, cooking a meal without a recipe, or fixing a broken zipper with a paperclip. **This is what we focus on.**

## The Combinatorial Theory
Steve Jobs said, "Creativity is just connecting things."
* You don't create from nothing (ex nihilo).
* You take existing blocks (ideas, memories, facts) and rearrange them into a new structure.
* *Example:* The iPhone was not a "new" invention. It was a combination of a Phone + iPod + Internet Communicator.

## The Creative Process (Wallas Model)
1.  **Preparation:** Researching and gathering information. (Loading the brain).
2.  **Incubation:** Stepping away. Letting the subconscious work. (The shower moment).
3.  **Illumination:** The "Aha!" moment.
4.  **Verification:** Testing the idea to see if it actually works.

## Neuroplasticity
Creativity rewires your brain.
* It increases the "White Matter" (connections) between the left hemisphere (logic) and right hemisphere (imagination).
* Creative people aren't "Right Brained"; they are "Whole Brained."

## Key Takeaway
You are already creative. Every time you construct a sentence you've never said before, you are creating. The goal is to do it on purpose.

> "You can't use up creativity. The more you use, the more you have." - Maya Angelou
    `
  },
  { 
    id: "cr-overcoming-blocks", 
    title: "Overcoming Creative Blocks", 
    description: "Break through barriers to creativity", 
    category: "Creativity", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1515890435782-59a5bb6e0627?w=800",
    tags: ["writer-block", "fear", "psychology"],
    content: `
# Overcoming Creative Blocks

## The Enemy Within
The biggest obstacle to creativity isn't lack of talent; it's **Resistance**.

![Person staring at blank paper](https://images.unsplash.com/photo-1515890435782-59a5bb6e0627?w=800&q=80)

## Types of Blocks
1.  **The Inner Critic:** That voice saying "This sucks" before you even finish.
2.  **Perfectionism:** The fear that if it isn't perfect, it's worthless.
3.  **Fear of Failure:** "What if people laugh?"
4.  **Blank Page Syndrome:** The paralysis of infinite choices.

## Strategy 1: Lower the Stakes
* **The "Bad Draft" Rule:** Give yourself permission to write the worst essay/draw the ugliest picture possible.
* Once the pressure is off, the creativity flows. You can't fix a blank page, but you can fix a bad draft.

## Strategy 2: Constraints
Paradoxically, limitations boost creativity.
* *Too much freedom:* "Write a story about anything." (Hard).
* *Constraint:* "Write a story about a dog, set on Mars, without using the letter 'E'." (Easier to start).
* Constraints force your brain to problem-solve.

## Strategy 3: Change the Mode
* Einstein would play violin when stuck on physics.
* If you are stuck writing, go for a walk.
* This engages the **Default Mode Network** (daydreaming brain) which makes connections the focused brain misses.

## Strategy 4: The 5-Minute Timer
* Tell yourself: "I will only work on this for 5 minutes."
* Usually, the pain is in the *starting*. Once you start, momentum takes over.

## The Gap (Ira Glass)
* **The Taste Gap:** When you start, your taste is killer, but your skill is weak. You know your work isn't good enough.
* *The Solution:* Do a huge volume of work. It is the only way to close the gap between what you want to make and what you actually make.

## Key Takeaway
Writer's block is just performance anxiety. Stop trying to be a genius and just be a worker.

> "Amateurs sit and wait for inspiration, the rest of us just get up and go to work." - Stephen King
    `
  },
  { 
    id: "cr-divergent-thinking", 
    title: "Divergent Thinking", 
    description: "Generate many ideas and possibilities", 
    category: "Creativity", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=800",
    tags: ["brainstorming", "ideas", "lateral-thinking"],
    content: `
# Divergent Thinking

## One Right Answer vs. Many Possible Answers
School teaches **Convergent Thinking** (focusing on the one correct answer, like in a multiple-choice test).
Creativity requires **Divergent Thinking** (generating as many possible answers as you can).

![Lightbulbs hanging](https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=800&q=80)

## The 30 Circles Challenge
* **Task:** Draw 30 circles on a page. Set a timer for 3 minutes. Turn as many circles as you can into recognizable objects (clock, face, ball, planet).
* **Goal:** Quantity, not quality.
* *Result:* Most adults struggle to fill 30. Children fill them easily. Adults self-edit; children just create.

## SCAMPER Method
A checklist to modify existing ideas:
* **S - Substitute:** Replace a part. (Tofu instead of meat).
* **C - Combine:** Merge two things. (Phone + Camera).
* **A - Adapt:** Change the context. (Use a drill motor for a blender).
* **M - Modify:** Change size/shape. (Giant candy bars).
* **P - Put to another use:** Use a brick as a doorstop.
* **E - Eliminate:** Remove parts. (Convertible car).
* **R - Reverse:** Do it backward. (Dessert first).

## The "Bad Idea" Brainstorm
Pressure to have "Good Ideas" stops flow.
* **Exercise:** Spend 10 minutes coming up with the worst solutions to a problem.
* *Problem:* Selling more ice cream.
* *Bad Ideas:* Make it taste like dirt. Charge $1000. Melt it first.
* *Why:* It relaxes the brain. Often, a bad idea leads to a good one (Melt it first \u2192 Hot Chocolate!).

## Quantity Leads to Quality
Dean Simonton's research shows that the most successful creators (Picasso, Edison) simply produced **more** work. They had more hits because they had more attempts.

## Key Takeaway
To have a good idea, you must first have lots of ideas. Turn off the filter.
    `
  },
  { 
    id: "cr-connecting-ideas", 
    title: "Connecting Ideas", 
    description: "Combine concepts in new and unique ways", 
    category: "Creativity", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    tags: ["synthesis", "innovation", "connections"],
    content: `
# Connecting Ideas (Combinatorial Creativity)

## The Medici Effect
Innovation happens at the "intersection" of fields. The Medici family in Renaissance Italy brought together sculptors, scientists, poets, and architects. The result was an explosion of new ideas.

![Puzzle pieces connecting](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80)

## Bisociation
The act of connecting two unrelated matrices of thought.
* *Example:* Gutenberg combined the **Wine Press** + **Coin Punch** to create the **Printing Press**.
* *Example:* Velcro was invented by combining **Burrs (nature)** + **Fabric (clothing)**.

## Cross-Pollination
* If you are a coder, learn to paint.
* If you are a chef, learn chemistry.
* **T-Shaped Knowledge:** Deep in one field, broad in many others. The unique insights come from the broad areas.

## Metaphor and Analogy
Using one thing to understand another.
* "The heart is a pump."
* "The brain is a computer."
* "DNA is a blueprint."
* Analogies allow us to transfer solutions from one field to another.

## Random Input Technique
1.  State your problem.
2.  Pick a random word from the dictionary (e.g., "Cloud").
3.  Force a connection between the problem and "Cloud."
4.  *Problem:* Designing a better shoe.
5.  *Cloud:* Soft, floating, rain, white.
6.  *Idea:* A shoe with air cushions (Nike Air).

## Serendipity
Happy accidents.
* Penicillin was discovered because of a dirty petri dish.
* Microwave ovens were discovered by a melted chocolate bar in a radar lab.
* **Mindset:** You must be observant enough to notice the accident and curious enough to explore it.

## Key Takeaway
Creativity is the art of remixing. Feed your brain diverse ingredients so it can cook up new recipes.
    `
  },

  // ==================================================================================
  // ARTISTIC EXPRESSION
  // ==================================================================================
  { 
    id: "cr-visual-arts-basics", 
    title: "Visual Arts Basics", 
    description: "Explore drawing, painting, and visual creativity", 
    category: "Creativity", 
    difficulty: "Beginner" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
    tags: ["art", "drawing", "design"],
    content: `
# Visual Arts Basics

## Seeing vs. Looking
Drawing isn't about hand skills; it's about seeing skills. Most people draw what they *think* an eye looks like (a symbol), not what it *actually* looks like (lines and shadows).

![Artist palette and brushes](https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80)

## The Elements of Art

### 1. Line
The foundation. Lines can be:
* **Organic:** Curvy, natural (leaves, waves).
* **Geometric:** Straight, angular (buildings, boxes).
* **Line Weight:** Thick lines feel heavy/close; thin lines feel light/far.

### 2. Shape vs. Form
* **Shape:** 2D (Circle, Square).
* **Form:** 3D (Sphere, Cube).
* *Tip:* To make a circle look like a sphere, you need light and shadow.

### 3. Value (Light & Shadow)
Value is the lightness or darkness of a color.
* It defines form. Without shadow, everything looks flat.
* **Contrast:** High contrast (Black vs White) creates drama. Low contrast creates calm.

### 4. Color Theory
* **Primary:** Red, Blue, Yellow (Cannot be mixed).
* **Secondary:** Green, Orange, Purple (Mix of primaries).
* **Complementary:** Opposite on the wheel (Blue/Orange, Red/Green). They make each other pop.
* **Warm vs. Cool:** Warm colors (Red/Yellow) come forward. Cool colors (Blue/Purple) recede.

### 5. Composition (Rule of Thirds)
Don't put the subject in the dead center.
* Divide the canvas into a 3x3 grid.
* Place interesting elements on the intersections.

## Negative Space
The space *around* the object.
* Sometimes it's easier to draw the shape of the air between the arm and the body than to draw the arm itself.

## Key Takeaway
You don't need to be "talented" to enjoy art. Art is a language. Even learning the alphabet (lines, shapes) allows you to express yourself.
    `
  },
  { 
    id: "cr-music-appreciation", 
    title: "Music & Sound Exploration", 
    description: "Discover the creative world of music", 
    category: "Creativity", 
    difficulty: "Beginner" as const, 
    duration: "25 min", 
    points: 140, 
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
    tags: ["music", "rhythm", "sound"],
    content: `
# Music & Sound Exploration

## The Universal Language
Music bypasses logic and speaks directly to emotion. It activates more parts of the brain than any other human activity.

![Musical instruments](https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80)

## The Building Blocks

### 1. Rhythm (The Pulse)
* The heartbeat of music.
* **Tempo:** The speed (BPM - Beats Per Minute). Fast = Excitement; Slow = Sadness/Calm.
* **Beat:** The steady pulse you tap your foot to.

### 2. Melody (The Tune)
* The part you whistle. A sequence of single notes that is satisfying.
* **Pitch:** How high or low a note is.

### 3. Harmony (The Context)
* Multiple notes played together (Chords).
* **Major Chord:** Sounds happy/bright.
* **Minor Chord:** Sounds sad/spooky.
* Harmony gives the melody emotion.

### 4. Timbre (The Color)
* Why a guitar sounds different from a piano playing the same note.
* Words: Bright, dark, metallic, wooden, fuzzy.

## Active Listening
Don't just hear music; listen to it.
* **Layering:** Try to pick out just the bass line. Now just the drums. Now just the vocals.
* **Visualization:** What movie scene would this song fit?

## Music and Creativity
* **The Mozart Effect:** Listening to classical music can temporarily boost spatial reasoning.
* **Flow State:** Instrumental music helps block distractions for deep work.

## Found Sound (Musique Concrète)
You don't need instruments to make music.
* Rhythm of a train.
* Melody of a bird.
* Percussion of rain.
* *Exercise:* Record 3 sounds on your phone and try to make a beat.

## Key Takeaway
Music is organized sound. By understanding the organization, you deepen the emotional impact.
    `
  },
  { 
    id: "cr-creative-writing-intro", 
    title: "Creative Writing Introduction", 
    description: "Express yourself through stories and words", 
    category: "Creativity", 
    difficulty: "Beginner" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
    tags: ["writing", "storytelling", "narrative"],
    content: `
# Creative Writing Introduction

## The Magic of Telepathy
Writing is telepathy. You have a thought, you write symbols on a page, and someone 100 years later reads them and has the same thought.

![Typewriter and paper](https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80)

## Show, Don't Tell
The Golden Rule of writing.
* **Tell:** "She was nervous." (Boring).
* **Show:** "Her hands trembled as she reached for the glass, the water rippling inside." (Immersive).
* Use sensory details: Sight, Sound, Smell, Touch, Taste.

## The Hero's Journey (Story Structure)
Most stories follow a pattern (Star Wars, Harry Potter):
1.  **The Call:** Life is normal, then something happens.
2.  **The Refusal:** The hero is scared.
3.  **Crossing the Threshold:** Leaving home/safety.
4.  **Tests & Allies:** Meeting friends and fighting enemies.
5.  **The Ordeal:** The biggest battle.
6.  **The Return:** Coming home changed.

## Character Development
Characters need **Agency** and **Flaws**.
* **Agency:** They make choices. Things shouldn't just happen *to* them.
* **Flaws:** Perfect characters (Mary Sues) are boring. We love characters who struggle (e.g., Ron Weasley's insecurity).
* **Want vs. Need:**
    * *Want:* To get rich.
    * *Need:* To learn that family matters more.

## Freewriting
A technique to bypass the inner critic.
* Set a timer for 10 minutes.
* Write non-stop. If you get stuck, write "I am stuck" until a new thought comes.
* *Rule:* Do not delete. Do not correct spelling. Just flow.

## The "What If" Game
Generative fiction starts with "What If."
* What if the sun stopped rising?
* What if dogs could talk but only lied?
* What if gravity reversed for 1 hour a day?

## Key Takeaway
Everyone has a story. The only difference between a writer and a non-writer is that the writer writes it down.
    `
  },
  { 
    id: "cr-performing-arts", 
    title: "Performing Arts Exploration", 
    description: "Discover drama, dance, and performance", 
    category: "Creativity", 
    difficulty: "Beginner" as const, 
    duration: "25 min", 
    points: 140, 
    image: "https://images.unsplash.com/photo-1503095392233-628963af0ebd?w=800",
    tags: ["drama", "acting", "dance"],
    content: `
# Performing Arts Exploration

## The Art of the Moment
Unlike painting or writing, performing arts happen *now*. They are ephemeral. They require full presence in the body.

![Theater stage lights](https://images.unsplash.com/photo-1503095392233-628963af0ebd?w=800&q=80)

## Acting Basics: The "Magic If"
Stanislavski's technique.
* Don't "pretend" to be sad.
* Ask: "What would I do **IF** I were in this situation?"
* This creates authentic emotion rather than fake "acting."

## Body Language and Status
* **High Status:** Takes up space, moves slowly, holds eye contact, stillness. (King/Boss).
* **Low Status:** Takes up little space, fidgets, looks down, touches face. (Servant/Nervous person).
* *Exercise:* Walk around the room as a High Status person. Now switch to Low Status. Feel the difference inside.

## Improv: "Yes, And..."
The core rule of improvisation.
* *Partner:* "Look at this giant alien!"
* *No:* "That's not an alien, it's a car." (Scene dies).
* *Yes, And:* "Yes! And it's eating my car!" (Scene grows).
* *Life Lesson:* Accept the reality presented to you and build on it.

## Dance: Thinking with the Body
You don't need steps to dance.
* **Proprioception:** Knowing where your body is in space.
* **Rhythm:** Syncing movement to sound.
* *Exercise:* "5 Rhythms." Move to Flowing, Staccato (choppy), Chaos, Lyrical, and Stillness.

## Voice Projection
* Speak from the **Diaphragm** (belly), not the throat.
* Throat speaking strains the voice. Belly speaking fills the room.
* Imagine your voice is a ball you are throwing to the back wall.

## Key Takeaway
Performance builds confidence. Being comfortable in your body and voice is a superpower in job interviews, dates, and speeches.
    `
  },

  // ==================================================================================
  // INNOVATION & DESIGN
  // ==================================================================================
  { 
    id: "cr-design-thinking", 
    title: "Introduction to Design Thinking", 
    description: "A creative approach to problem-solving", 
    category: "Creativity", 
    difficulty: "Intermediate" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800",
    tags: ["design", "problem-solving", "empathy"],
    content: `
# Introduction to Design Thinking

## Human-Centered Design
Design Thinking is a process used by Stanford and Apple to solve complex problems. It focuses on the **user**, not the product.

![Sticky notes on glass wall](https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80)

## The 5 Stages

### 1. Empathize
Understand the people you are designing for.
* Observe them. Interview them.
* *Goal:* Discover their *unmet needs*. (e.g., "People hate waiting in line").

### 2. Define
State the problem clearly.
* *Bad:* "We need a better toaster."
* *Good:* "Users need a way to warm bread quickly without burning it or drying it out."

### 3. Ideate
Generate solutions.
* Brainstorming. No judgment. Wild ideas encouraged.
* "What if the toaster was transparent?" "What if it shot the toast onto a plate?"

### 4. Prototype
Build a quick, cheap model.
* Use cardboard, tape, paper sketches.
* Don't code the app; draw the screens on paper.
* *Motto:* "Fake it 'til you make it."

### 5. Test
Give the prototype to users.
* Shut up and watch. Don't explain how to use it.
* See where they get confused.
* Gather feedback and go back to Step 1 or 3.

## Iteration
Design is a circle, not a straight line.
* You will fail. That's the point.
* **Fail Fast, Fail Cheap.** It's better to fail with a cardboard model than a million-dollar product.

## Wicked Problems
Design thinking is best for "Wicked Problems"—problems with no single right answer (e.g., poverty, climate change, boredom).

## Key Takeaway
Don't fall in love with your solution; fall in love with the user's problem.
    `
  },
  { 
    id: "cr-prototyping-ideas", 
    title: "Prototyping Your Ideas", 
    description: "Turn concepts into tangible creations", 
    category: "Creativity", 
    difficulty: "Intermediate" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
    tags: ["maker", "mvp", "building"],
    content: `
# Prototyping Your Ideas

## Thinking with Your Hands
A prototype is a physical manifestation of an idea. It answers the question: "Will this actually work?"

![Hands building model](https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80)

## Low-Fidelity vs. High-Fidelity

### Low-Fi (Sketch/Paper)
* **Cost:** $0.
* **Time:** 10 minutes.
* **Use:** Testing the concept.
* *Example:* Drawing an app interface on a napkin.

### High-Fi (3D Print/Code)
* **Cost:** $$$.
* **Time:** Days/Weeks.
* **Use:** Testing the look and feel.
* *Example:* A coded beta version of the app.

## The MVP (Minimum Viable Product)
What is the smallest version of your idea that still delivers value?
* *Idea:* A car.
* *Not MVP:* A wheel (useless alone).
* *MVP:* A skateboard (gets you from A to B, proves the concept of rolling transport).

## Rapid Prototyping Materials
You don't need a lab.
* **Cardboard:** The engineer's best friend.
* **Legos:** Great for structures.
* **Figma/Canva:** Great for digital design.
* **Roleplay:** Act out a service experience.

## The Feedback Grid
When showing your prototype, draw a grid:
* **+ (Plus):** What worked?
* **\u0394 (Delta):** What could change?
* **? (Questions):** What didn't they understand?
* **! (Ideas):** New ideas that came up.

## Killing Your Darlings
Be ready to throw your prototype in the trash.
* If you spent 100 hours on it, you will defend it even if it's bad.
* If you spent 10 minutes on it, you will listen to feedback.

## Key Takeaway
Stop talking about it. Build it. A bad prototype is worth more than a perfect theory.
    `
  },
  { 
    id: "cr-problem-innovation", 
    title: "Innovative Problem Solving", 
    description: "Find creative solutions to challenges", 
    category: "Creativity", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800",
    tags: ["logic", "reframing", "innovation"],
    content: `
# Innovative Problem Solving

## Reframing the Problem
Often, we can't solve a problem because we are asking the wrong question.
* *The Elevator Problem:* People complain the elevator is too slow.
    * *Engineering Solution:* Install a faster motor (Expensive).
    * *Reframed Problem:* The wait feels boring.
    * *Innovative Solution:* Install mirrors in the lobby. People look at themselves and forget the time (Cheap).

![Lightbulb glowing](https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800&q=80)

## Lateral Thinking (Edward de Bono)
Vertical thinking digs the same hole deeper. Lateral thinking digs a hole somewhere else.
* **Provocation:** Make a crazy statement to jolt your brain. "Cars should have square wheels."
    * *Thought:* Square wheels work if the road is bumpy in a specific pattern.
    * *Innovation:* Adaptive suspension systems.

## First Principles Thinking (Elon Musk)
Boil things down to the fundamental truths (physics) and build up.
* *Analogy:* "Battery packs cost $600/kWh because that's what they cost."
* *First Principles:* "What is a battery? Nickel, Cobalt, Aluminum. On the market, those metals cost $80. So we just need to be smarter about putting them together."

## Functional Fixedness
A cognitive bias where you only see an object's traditional use.
* *Test:* You have a candle, a box of tacks, and matches. Attach the candle to the wall so it doesn't drip.
* *Solution:* Empty the box of tacks, tack the **box** to the wall, put the candle in the box.
* Most people fail because they see the box only as a container for tacks, not as a shelf.

## Reverse Engineering
Take a finished product and work backward to understand how it was made.
* Read a great essay. Outline it backward. What was the thesis? How did they support it?

## Key Takeaway
If you are stuck, change the question. A well-defined problem is half-solved.
    `
  },
  { 
    id: "cr-future-thinking", 
    title: "Thinking About the Future", 
    description: "Imagine and design tomorrow's possibilities", 
    category: "Creativity", 
    difficulty: "Advanced" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    tags: ["futurism", "trends", "imagination"],
    content: `
# Thinking About the Future

## We Are All Futurists
Every time you plan your weekend, you are predicting the future. Strategic foresight is doing this for the next 10-20 years.

![Futuristic city concept](https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80)

## Signals vs. Noise
* **Noise:** Today's headlines, viral tweets.
* **Signals:** Weak indicators of a coming change. (e.g., A new law in a small country, a patent filed by Google).
* *Gibson's Law:* "The future is already here—it's just not very evenly distributed."

## Scenario Planning
Don't predict *one* future. Plan for *multiple*.
1.  **The Probable Future:** What happens if trends continue? (Status Quo).
2.  **The Plausible Future:** What *could* happen? (Good or Bad).
3.  **The Possible Future:** What is physically possible (Sci-Fi).
4.  **The Preferable Future:** What do we *want* to happen?

## Sci-Fi Prototyping
Writers invent the future before engineers build it.
* *Star Trek* inspired cell phones (Communicators).
* *Minority Report* inspired gesture interfaces.
* **Exercise:** Write a "Day in the Life" of yourself in 2050. What do you eat? How do you travel?

## Backcasting
Instead of forecasting forward, start at the goal and work backward.
* *Goal:* A carbon-neutral city in 2040.
* *2035:* All cars must be electric.
* *2030:* Gas stations stop being built.
* *2025:* Massive investment in charging grids.
* *Today:* Pass a law incentivizing chargers.

## Second-Order Effects
Ask "And then what?"
* *Event:* Self-driving cars become perfect.
* *1st Order:* No car accidents.
* *2nd Order:* Organ donations plummet (because many come from car accidents).
* *3rd Order:* Bio-printing organs becomes a massive industry necessity.

## Key Takeaway
The best way to predict the future is to create it.
    `
  },

  // ==================================================================================
  // IMAGINATION & PLAY
  // ==================================================================================
  { 
    id: "cr-power-imagination", 
    title: "Power of Imagination", 
    description: "Unlock your mind's creative potential", 
    category: "Creativity", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1490129374591-2719b26bdd1d?w=800",
    tags: ["visualization", "dreaming", "mind"],
    content: `
# Power of Imagination

## The Laboratory of the Mind
Imagination is the ability to simulate reality without moving a muscle. It is the simulator where we test ideas before risking them in the real world.

![Child wearing superhero cape](https://images.unsplash.com/photo-1490129374591-2719b26bdd1d?w=800&q=80)

## Visualization (Mental Rehearsal)
Athletes use this. If you visualize shooting a basketball, the same neurons fire as if you were actually doing it.
* **Process:** Close eyes. Visualize the *process*, not just the victory. Feel the texture of the ball, hear the crowd, feel the release.

## Counterfactual Thinking
Thinking about what *didn't* happen.
* "What if I had taken that other job?"
* This helps us learn from mistakes and plan better.

## The "What If" Technique
Disney Imagineering uses this.
* "What if the castle was pink?"
* "What if the boat flew?"
* Suspend the laws of physics for 10 minutes.

## Pareidolia
The ability to see shapes in clouds or faces in electrical sockets.
* It is a sign of an active imagination looking for patterns.
* *Exercise:* Look at a textured wall or carpet. What shapes do you see? Sketch them.

## Creating Inner Worlds (Paracosms)
Many creative geniuses (Brontë sisters, Tolkien) created elaborate fantasy worlds as children.
* Creating a world with its own rules exercises consistency, logic, and creativity.

## Key Takeaway
Imagination is the preview of life's coming attractions. (Einstein). It is a tool, not just a daydream.
    `
  },
  { 
    id: "cr-play-creativity", 
    title: "Play & Creativity", 
    description: "How playfulness fuels creative thinking", 
    category: "Creativity", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=800",
    tags: ["play", "fun", "experimentation"],
    content: `
# Play & Creativity

## Serious Business
We think of play as "wasteful" or "for kids." But play is how nature learns. Puppies play-fight to learn hunting. Humans play to learn social dynamics and physics.

![Toys and blocks](https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=800&q=80)

## Low Stakes = High Creativity
When the stakes are high (e.g., A final exam, a $1M project), we freeze. We play it safe.
When we are "playing," the stakes are zero. We try crazy things.
* **Tinkering:** Messing around with no goal. This is often where breakthroughs happen.

## Gamification
Applying game mechanics to non-game tasks.
* **Points & Levels:** Treat learning a language like an RPG.
* **Challenges:** "Can I write this email without using the letter 'S'?" (Makes a boring task fun).

## The Sandbox Mode
In video games, "Sandbox Mode" means you have unlimited resources and no enemies. You just build.
* Give yourself "Sandbox Time." No deadlines. No judgment. Just build.

## Humor and Creativity
Laughter involves a surprise connection between two unrelated things (the punchline).
* Humor helps creativity because it relaxes the brain and encourages lateral connections.
* Teams that laugh together solve problems faster.

## Beginner's Mind (Shoshin)
The expert knows what is impossible. The beginner doesn't, so they try it anyway.
* Play allows us to access the Beginner's Mind.

## Key Takeaway
"Man is most nearly himself when he achieves the seriousness of a child at play." - Heraclitus
    `
  },
  { 
    id: "cr-curiosity-exploration", 
    title: "Curiosity & Exploration", 
    description: "Let curiosity guide your creative journey", 
    category: "Creativity", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1532153955177-f59af40d6472?w=800",
    tags: ["questions", "discovery", "wonder"],
    content: `
# Curiosity & Exploration

## The Engine of Learning
Curiosity is the hunger of the mind. Without it, learning is a chore. With it, learning is inevitable.

![Magnifying glass in nature](https://images.unsplash.com/photo-1532153955177-f59af40d6472?w=800&q=80)

## Diverse Curiosity vs. Specific Curiosity
* **Diversive:** Being interested in everything briefly (Doomscrolling, clicking random links). Good for breadth.
* **Epistemic:** The deep desire to understand *how* something works. Good for mastery.

## The Curiosity Gap
We are curious when there is a gap between what we know and what we *want* to know.
* A mystery novel opens a gap: "Who killed him?"
* *Strategy:* Before learning a topic, write down 3 questions you want answered. This opens the gap and makes the information "stick."

## Rabbit Holes
Follow the thread.
* You read about coffee \u2192 Read about Ethiopia \u2192 Read about trade routes \u2192 Read about sailing.
* This builds a unique web of knowledge that no one else has.

## Ask "Why?" 5 Times (Root Cause)
* The car stopped. (Why?)
* Battery is dead. (Why?)
* Alternator is broken. (Why?)
* The belt snapped. (Why?)
* It was old and never replaced. (Root cause: Maintenance).

## Get Lost on Purpose
* Walk a new route home.
* Read a magazine you would never buy (e.g., "Plumbing Today").
* Listen to a genre of music you "hate."
* Novelty triggers dopamine and neuroplasticity.

## Key Takeaway
Curiosity didn't kill the cat; it made the cat smarter. Stay curious.
    `
  },
  { 
    id: "cr-dreaming-big", 
    title: "Dreaming Big", 
    description: "Set ambitious creative goals and visions", 
    category: "Creativity", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
    tags: ["vision", "goals", "moonshot"],
    content: `
# Dreaming Big

## Moonshot Thinking
Google X defines a Moonshot as:
1.  A huge problem.
2.  A radical solution.
3.  Breakthrough technology.
* Aim for **10x improvement**, not 10%. It is often easier to make something 10x better (requires a new path) than 10% better (requires grinding harder on the old path).

![Person looking at stars](https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80)

## The Vision Board
Visualizing your goals makes them tangible.
* Don't just paste pictures of Ferraris.
* Paste pictures of the *feeling* or *lifestyle* (Freedom, Health, Creativity).
* Look at it daily to prime your Reticular Activating System (RAS) to spot opportunities.

## BHAG (Big Hairy Audacious Goal)
A goal so big it scares you.
* *Example:* "Put a man on the moon in 10 years." (JFK).
* Even if you miss the moon, you land among the stars.

## Removing Limits
* **Exercise:** If you had $100 Million and could not fail, what would you do?
* This removes the constraints of money and fear, revealing what you *actually* care about.

## Reverse Engineering the Dream
1.  **The Dream:** Win an Oscar.
2.  **5 Years:** Direct a feature film.
3.  **1 Year:** Direct a short film.
4.  **1 Month:** Write a script.
5.  **Today:** Write one page.
* A big dream without small steps is just a hallucination.

## The Law of Attraction (Scientific Version)
It's not magic. It's **Selective Attention**.
* If you decide to buy a red car, you suddenly see red cars everywhere.
* If you decide to be an author, you suddenly see writing contests and story ideas everywhere.

## Key Takeaway
"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt
    `
  }
];