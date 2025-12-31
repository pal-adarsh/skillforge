import { Standard } from "../types";

export const valuesEthicsCategory: Standard = {
  id: "values-ethics",
  name: "Values & Ethics",
  displayName: "Values, Ethics & Character Building",
  description: "Develop strong moral character and ethical decision-making",
  color: "bg-emerald-500",
  subjects: [
    {
      id: "ve-core-values",
      name: "Core Values",
      icon: "Heart",
      color: "text-emerald-500",
      lessonIds: ["ve-honesty-integrity", "ve-respect-others", "ve-responsibility", "ve-gratitude"]
    },
    {
      id: "ve-character",
      name: "Character Building",
      icon: "Star",
      color: "text-yellow-500",
      lessonIds: ["ve-courage", "ve-perseverance", "ve-humility", "ve-self-discipline"]
    },
    {
      id: "ve-ethics",
      name: "Ethical Decision Making",
      icon: "Scale",
      color: "text-blue-500",
      lessonIds: ["ve-right-wrong", "ve-ethical-dilemmas", "ve-consequences", "ve-moral-courage"]
    },
    {
      id: "ve-relationships",
      name: "Healthy Relationships",
      icon: "Users",
      color: "text-pink-500",
      lessonIds: ["ve-trust-building", "ve-loyalty-friendship", "ve-family-bonds", "ve-community-responsibility"]
    }
  ]
};

export const valuesEthicsLessons = [
  // ==================================================================================
  // CORE VALUES
  // ==================================================================================
  { 
    id: "ve-honesty-integrity", 
    title: "Honesty & Integrity", 
    description: "The importance of being truthful and having strong morals", 
    category: "Values & Ethics", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
    tags: ["truth", "character", "reputation"],
    content: `
# Honesty & Integrity

## Defining the Difference
While often used interchangeably, Honesty and Integrity are distinct but related sisters.

* **Honesty** is telling the truth to others. It is an external act.
* **Integrity** is telling the truth to yourself and acting consistently with your values, even when no one is watching. It is an internal state.

![Reflection in water](https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=800&q=80)

## The Cost of Lies
Small lies (white lies) seem harmless, but they create a "Cognitive Load."
* When you tell the truth, you don't have to remember what you said.
* When you lie, you must maintain a database of false realities. This drains mental energy.

### The Trust Equation
Trust takes years to build, seconds to break, and forever to repair.
* *Scenario:* You break a vase.
    * **Option A (Lie):** "The cat did it." You save yourself immediate trouble, but you live with the anxiety of being caught. If found out, your parents/partner now doubt *everything* you say.
    * **Option B (Integrity):** "I broke it." You face immediate trouble (anger/cost), but you gain **Reputation Capital**. You are known as someone who owns their mistakes.

## Integrity in the Dark
The true test of character is what you do when there is zero chance of being caught.
* Returning the extra change the cashier gave you by mistake.
* Cleaning up a mess you made in a public restroom.
* Working a full 8 hours when your boss is on vacation.

## Alignment
Integrity comes from the Latin *integer*, meaning "whole" or "complete."
* When your actions match your words, you are "whole."
* When you say one thing (e.g., "I value health") but do another (e.g., smoke), you are fractured. This causes internal stress (Cognitive Dissonance).

## Key Takeaway
If you trade your integrity for a short-term gain, you have sold something priceless for something cheap.

> "Integrity is doing the right thing, even when no one is watching." - C.S. Lewis
    `
  },
  { 
    id: "ve-respect-others", 
    title: "Respecting Others", 
    description: "Treating everyone with dignity and consideration", 
    category: "Values & Ethics", 
    difficulty: "Beginner" as const, 
    duration: "15 min", 
    points: 100, 
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800",
    tags: ["dignity", "empathy", "manners"],
    content: `
# Respecting Others

## The Universal Right
Respect is not something people must "earn" to receive the basics of.
* **Basic Respect:** Owed to every human simply for existing (courtesy, non-violence, listening).
* **High Regard:** Owed to those who have demonstrated excellence or character (admiration).
* *Mistake:* Many people withhold Basic Respect until High Regard is earned. This is arrogance.

![Shaking hands](https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80)

## The Platinum Rule
You know the Golden Rule: *"Treat others how you want to be treated."*
The Platinum Rule is level 2: **"Treat others how THEY want to be treated."**

* *Example:* You might love loud surprise parties. Your shy friend might hate them.
* *Golden Rule:* Throw them a surprise party (because you'd like it). **Fail.**
* *Platinum Rule:* Take them for a quiet coffee (because they'd like it). **Success.**

## Respect in Disagreement
You can respect a person while totally rejecting their ideas.
* **Disrespect:** "You are an idiot for thinking that." (Attacking the person).
* **Respect:** "I strongly disagree with that idea because of X, Y, Z." (Attacking the idea).

## Practical Ways to Show Respect
1.  **Punctuality:** Being on time says, "I value your time as much as my own."
2.  **Active Listening:** Putting the phone away. Eye contact.
3.  **Names:** Learning and pronouncing someone's name correctly.
4.  **Cleanliness:** Leaving shared spaces (kitchens, parks) cleaner than you found them.

## Kant's Categorical Imperative
Philosopher Immanuel Kant argued: *Never treat people solely as a means to an end.*
* Don't just use the barista to get coffee. Recognize them as a human being *serving* coffee.

## Key Takeaway
Respect is a mirror. If you show it to everyone (from the CEO to the Janitor), it reflects your own dignity back to you.

> "Everyone you meet is fighting a battle you know nothing about. Be kind. Always."
    `
  },
  { 
    id: "ve-responsibility", 
    title: "Taking Responsibility", 
    description: "Owning your actions and their consequences", 
    category: "Values & Ethics", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
    tags: ["accountability", "maturity", "ownership"],
    content: `
# Taking Responsibility

## The Locus of Control
Psychologists divide people into two groups:
1.  **External Locus of Control:** "Life happens *to* me." (Victim mindset).
    * "The teacher failed me." "Traffic made me late."
2.  **Internal Locus of Control:** "I make life happen." (Owner mindset).
    * "I didn't study enough." "I didn't leave early enough."

* *Fact:* People with an Internal Locus are happier, more successful, and less anxious.

![Person holding a compass](https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80)

## Extreme Ownership (Jocko Willink)
The idea that a leader is responsible for *everything* in their world.
* If your team misunderstands your instructions, it's not their fault for being "stupid." It's your fault for being unclear.
* When you blame others, you give away your power to change the situation.
* When you take ownership, you retain the power to fix it.

## The Anatomy of a Good Apology
Taking responsibility often means apologizing.
* **Bad:** "I'm sorry you felt hurt." (Blaming their feelings).
* **Good:**
    1.  **Admit the Act:** "I was late."
    2.  **Acknowledge the Harm:** "This disrespected your time."
    3.  **Plan for Change:** "I will set two alarms next time."

## Responsibility vs. Fault
They are not the same.
* *Scenario:* Someone hits your parked car and drives off.
    * **Fault:** The other driver.
    * **Responsibility:** Yours. You are responsible for calling insurance, getting it fixed, and finding a ride to work.
* It is not fair, but it is reality. Complaining about fault delays the fix.

## Key Takeaway
Responsibility is "Response-Ability"—the ability to choose your response. It is the ultimate freedom.

> "The price of greatness is responsibility." - Winston Churchill
    `
  },
  { 
    id: "ve-gratitude", 
    title: "Practicing Gratitude", 
    description: "Appreciating what you have and expressing thanks", 
    category: "Values & Ethics", 
    difficulty: "Beginner" as const, 
    duration: "15 min", 
    points: 100, 
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800",
    tags: ["thankfulness", "happiness", "mindset"],
    content: `
# Practicing Gratitude

## The Science of Rewiring
Gratitude is not just "being nice." It is a cognitive training program.
* **The Negativity Bias:** Evolution wired our brains to notice threats (tigers/thorns) more than treats (sunsets/berries).
* **Gratitude Practice:** Forces the brain to scan the world for positives. Over time, this strengthens neural pathways, making you naturally more optimistic.

![Writing in a journal](https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80)

## The Hedonic Treadmill
Humans adapt to good things quickly.
* You get a new phone \u2192 You are happy for 2 weeks \u2192 It becomes "just a phone."
* Gratitude breaks this cycle. By consciously appreciating the phone (or house, or health), you renew the joy it brings.

## Active vs. Passive Gratitude
* **Passive:** Feeling good when something huge happens (winning a prize).
* **Active:** Hunting for the good in a normal day.
    * The warmth of coffee.
    * A green light when you were in a rush.
    * The fact that your lungs are pumping air without you asking.

## Practical Exercises

### 1. The Three Good Things
Every night, write down 3 things that went well and *why*.
* "I finished my project." (Why? Because I worked hard).
* "My friend called." (Why? Because we have a good bond).

### 2. The Gratitude Visit
Write a 300-word letter to someone who changed your life but whom you never properly thanked.
* *Bonus:* Read it to them in person.

### 3. Negative Visualization (The Stoics)
Imagine losing something you love (your sight, your home). Then, open your eyes and realize you still have it. The relief creates immense gratitude.

## Key Takeaway
Gratitude turns what we have into enough. It is the antidote to envy.

> "It is not happiness that makes us grateful, but gratitude that makes us happy." - David Steindl-Rast
    `
  },

  // ==================================================================================
  // CHARACTER BUILDING
  // ==================================================================================
  { 
    id: "ve-courage", 
    title: "Building Courage", 
    description: "Face fears and stand up for what's right", 
    category: "Values & Ethics", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1528642474493-227685b69b10?w=800",
    tags: ["bravery", "fear", "action"],
    content: `
# Building Courage

## Courage is Not Fearlessness
If you are not afraid, you cannot be courageous.
* **Bravado:** Acting without fear (often because you don't understand the danger).
* **Courage:** Understanding the danger, feeling the fear, and *acting anyway*.
* *Nelson Mandela:* "I learned that courage was not the absence of fear, but the triumph over it."

![Rock climber](https://images.unsplash.com/photo-1528642474493-227685b69b10?w=800&q=80)

## Types of Courage

### 1. Physical Courage
Facing bodily harm or death. (Firefighters, Soldiers).

### 2. Moral Courage
Facing social disapproval, shame, or financial loss to do what is right.
* *Example:* Speaking up when a friend tells a racist joke.
* *Difficulty:* Often harder than physical courage because humans are wired to fear social exclusion.

### 3. Vulnerable Courage (Brené Brown)
The willingness to show up and be seen when the outcome is uncertain.
* Saying "I love you" first.
* Starting a business.
* Admitting you were wrong.

## The Courage Muscle
Courage is a habit. You build it by doing small scary things.
1.  Raise your hand in class when you aren't 100% sure.
2.  Wear an outfit you like but others might judge.
3.  Have a difficult conversation without texting it.

## The 10-Second Rule
You don't need to be brave all day. You just need to be brave for **10 seconds**.
* The 10 seconds it takes to walk over and introduce yourself.
* The 10 seconds it takes to click "Send" on the application.
* Once the action is started, momentum takes over.

## Key Takeaway
Fear is a biological reaction. Courage is a decision.

> "A ship in harbor is safe, but that is not what ships are built for." - John A. Shedd
    `
  },
  { 
    id: "ve-perseverance", 
    title: "Power of Perseverance", 
    description: "Keep going even when things get difficult", 
    category: "Values & Ethics", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    tags: ["grit", "resilience", "growth"],
    content: `
# The Power of Perseverance (Grit)

## Talent vs. Effort
Society obsesses over talent. We love the "natural genius."
* *Angela Duckworth's Research:* Talent counts once, but **Effort counts twice**.
* *Formula:*
    * Talent x Effort = Skill
    * Skill x Effort = Achievement
* Without effort, talent is nothing more than unmet potential.

![Runner on track](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80)

## The "Dip"
In any new project (learning guitar, coding, gym), there is a predictable curve:
1.  **Honeymoon Phase:** "This is fun and easy!"
2.  **The Dip:** "This is hard, boring, and I'm not seeing results."
3.  **Mastery:** "I'm getting good at this."

* **Most people quit in The Dip.** Perseverance is the ability to push through the boring middle.

## Growth Mindset (Carol Dweck)
* **Fixed Mindset:** "I can't do math." (Belief that ability is static).
* **Growth Mindset:** "I can't do math *yet*." (Belief that ability is built).
* Perseverance requires a Growth Mindset. You have to believe the struggle is making you stronger.

## Sisu (The Finnish Concept)
A word that has no direct translation but means "stoic determination, tenacity of purpose, grit, bravery, resilience, and hardiness."
* It is what you tap into when you have reached your physical and mental limit, and you take one more step anyway.

## Practical Tactics
1.  **Remember Your "Why":** If the goal (e.g., being a doctor) matters deeply, the suffering (med school) is bearable.
2.  **Chunking:** Don't look at the mountain. Look at your feet. Just do today's work.
3.  **Rest, Don't Quit:** If you are exhausted, sleep. Do not give up.

## Key Takeaway
The river cuts through the rock not because of its power, but because of its persistence.

> "It does not matter how slowly you go as long as you do not stop." - Confucius
    `
  },
  { 
    id: "ve-humility", 
    title: "Understanding Humility", 
    description: "Stay grounded and open to learning", 
    category: "Values & Ethics", 
    difficulty: "Intermediate" as const, 
    duration: "20 min", 
    points: 130, 
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800",
    tags: ["modesty", "learning", "ego"],
    content: `
# Understanding Humility

## Not Thinking Less of Yourself
A common mistake is thinking humility means low self-esteem or being a doormat.
* **C.S. Lewis:** "Humility is not thinking less of yourself, it's thinking of yourself less."
* It is freedom from the need to constantly prove your worth.

![Person looking at vast landscape](https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80)

## The Learner's Mind (Shoshin)
In Zen Buddhism, "Shoshin" means "Beginner's Mind."
* **The Expert:** "I know how this works." (Closed to new info).
* **The Beginner:** "I don't know, teach me." (Open to infinite possibilities).
* Humility is the foundation of learning. If you think your cup is full, no one can pour knowledge into it.

## Confidence vs. Arrogance
* **Confidence:** "I have the ability to handle this." (Internal security).
* **Arrogance:** "I am better than you." (External comparison, usually masking insecurity).
* **Humility:** "I might be wrong, but I'm willing to try and learn."

## The Spotlight Effect
We often think everyone is watching us, judging our clothes or mistakes.
* *Reality:* Everyone else is worried about themselves.
* Humility is realizing you are not the main character of the universe. This is actually a relief—it removes the pressure to be perfect.

## Practical Humility
1.  **Ask Questions:** Be the person who asks the "dumb" question in the meeting.
2.  **Give Credit:** When you succeed, point to the team/luck/mentors that helped.
3.  **Own Mistakes:** Say "I was wrong" without adding "but..."

## Key Takeaway
The tallest bamboo bends the lowest in the wind. Humility is strength, not weakness.

> "Knowledge makes us proud. Wisdom makes us humble."
    `
  },
  { 
    id: "ve-self-discipline", 
    title: "Developing Self-Discipline", 
    description: "Control impulses and stay focused on goals", 
    category: "Values & Ethics", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
    tags: ["focus", "habits", "willpower"],
    content: `
# Developing Self-Discipline

## Freedom Through Discipline
We often think discipline restricts freedom.
* *Reality:* Discipline *creates* freedom.
    * Financial discipline creates financial freedom.
    * Health discipline creates physical freedom (mobility).
    * Study discipline creates career freedom.
* *Jocko Willink:* "Discipline equals Freedom."

![Alarm clock](https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80)

## The Marshmallow Test
A famous Stanford experiment. Kids were given a marshmallow. If they waited 15 minutes without eating it, they got two.
* *Result:* The kids who waited (Delayed Gratification) grew up to have better SAT scores, better health, and better jobs.
* Success is often choosing what you want **most** over what you want **now**.

## Motivation vs. Discipline
* **Motivation:** An emotion. It comes and goes. It is fickle.
* **Discipline:** A system. It is reliable.
* *Strategy:* Never rely on "feeling like it." Do it because it is on the schedule.

## Building the Muscle
1.  **Remove Friction:** If you want to run, put your shoes by the bed.
2.  **Add Friction:** If you want to stop scrolling, delete the app or put the phone in another room.
3.  **The 2-Minute Rule:** If you don't want to do a task, tell yourself "I will just do 2 minutes." Usually, starting is the hardest part.

## Identity-Based Habits (James Clear)
Don't say "I'm trying to quit smoking." Say "I am not a smoker."
* Change your identity, and the discipline follows.
* "I am the type of person who never misses a workout."

## Key Takeaway
Self-discipline is self-love. It is your current self acting in the best interest of your future self.

> "We must all suffer from one of two pains: the pain of discipline or the pain of regret." - Jim Rohn
    `
  },

  // ==================================================================================
  // ETHICAL DECISION MAKING
  // ==================================================================================
  { 
    id: "ve-right-wrong", 
    title: "Understanding Right & Wrong", 
    description: "Develop a moral compass for making choices", 
    category: "Values & Ethics", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800",
    tags: ["morality", "philosophy", "choices"],
    content: `
# Understanding Right & Wrong

## The Moral Compass
We aren't born with a map, but we all have a compass. Ethics is the study of how to calibrate that compass.

![Scales of justice](https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80)

## Three Major Frameworks (Simplified)

### 1. Utilitarianism (The Result)
* **Focus:** The Outcome.
* **Rule:** The best action is the one that produces the "Greatest Good for the Greatest Number."
* *Example:* Killing one dangerous terrorist to save 1,000 innocent lives is "Right."

### 2. Deontology (The Rule)
* **Focus:** The Action/Duty.
* **Rule:** Some rules (don't lie, don't kill) must be followed regardless of the outcome.
* *Example:* Killing is always wrong, even if it saves others. Lying is wrong, even if it saves feelings.

### 3. Virtue Ethics (The Person)
* **Focus:** Character.
* **Rule:** What would a virtuous person (someone kind, brave, wise) do in this situation?
* *Example:* I will help this person not because of the result or rule, but because I want to be a Helpful Person.

## The Front Page Test
When unsure if an action is right, ask:
* "How would I feel if this action was reported on the front page of the newspaper tomorrow, for all my family and friends to read?"
* If you would feel ashamed, it's probably wrong.

## Relativism vs. Absolutism
* **Relativism:** "What's right for you might not be right for me." (Culture/Context matters).
* **Absolutism:** "Some things (like torture) are always wrong, everywhere."
* *Balance:* Respect cultural differences (manners/dress), but uphold universal human rights.

## Key Takeaway
Ethics isn't about memorizing rules. It's about training your mind to stop and ask: "What is the impact of my choice?"

> "Wrong is wrong, even if everyone is doing it. Right is right, even if no one is doing it." - William Penn
    `
  },
  { 
    id: "ve-ethical-dilemmas", 
    title: "Navigating Ethical Dilemmas", 
    description: "Make tough choices when values conflict", 
    category: "Values & Ethics", 
    difficulty: "Advanced" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800",
    tags: ["dilemmas", "critical-thinking", "decisions"],
    content: `
# Navigating Ethical Dilemmas

## When Good Values Collide
An ethical dilemma isn't a choice between Good and Bad (that's easy). It's a choice between **Good and Good** or **Bad and Bad**.
* *Example:* Truth vs. Loyalty.
    * Your friend cheated on a test.
    * **Truth** demands you report it.
    * **Loyalty** demands you protect your friend.
    * Both are good values. Which one wins?

![Fork in the road](https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80)

## The Trolley Problem
A classic thought experiment.
* A runaway trolley is heading for 5 people tied to the tracks.
* You can pull a lever to switch it to a track with 1 person.
* **Do you pull the lever?**
    * *Yes:* You actively kill 1 to save 5 (Utilitarian).
    * *No:* You refuse to be a killer, allowing 5 to die (Deontological).
* *Variation:* What if the 1 person is your mother? Now emotion enters the logic.

## Steps to Solve a Dilemma
1.  **Define the Problem:** What are the conflicting values?
2.  **Gather Facts:** Do you have the whole story?
3.  **List Options:** It's rarely just A or B. Look for Option C (The "Third Way").
    * *In the cheating friend example:* Option C might be confronting the friend and making *them* confess, saving your integrity and giving them a chance to own it.
4.  **Test It:** Use the Front Page Test or ask a mentor.
5.  **Act and Reflect:** Make the choice and accept the cost.

## The Sleep Test
After analyzing everything, ask: "Which choice will allow me to sleep at night?"
* Your conscience is the final arbiter.

## Key Takeaway
There is often no "perfect" answer in a dilemma. There is only the most defensible choice made with the best intentions.
    `
  },
  { 
    id: "ve-consequences", 
    title: "Thinking About Consequences", 
    description: "Consider how your actions affect others", 
    category: "Values & Ethics", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=800",
    tags: ["cause-effect", "foresight", "impact"],
    content: `
# Thinking About Consequences

## The Ripple Effect
Every action is like a stone thrown into a pond. The ripples travel further than you can see.
* You make a rude comment to a cashier.
* She goes home angry and yells at her son.
* The son kicks the dog.
* Your comment kicked a dog.

![Water ripples](https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=800&q=80)

## First vs. Second Order Thinking
* **First Order (Immediate):** "I'll skip school to play video games. It will be fun."
* **Second Order (Consequence):** "I'll miss the lesson, fail the test, and have to go to summer school."
* **Third Order:** "I'll miss the summer trip with my friends."
* *Rule:* Stupid people think about the moment. Smart people think about the outcome. Wise people think about the outcome of the outcome.

## The Butterfly Effect
In chaos theory, a butterfly flapping its wings in Brazil can cause a tornado in Texas weeks later. Small actions can have massive, unpredictable results.
* *Application:* Small acts of kindness matter. A smile to a stranger might save their day, or their life. You never know.

## Intent vs. Impact
* **Intent:** What you meant to do. ("I was just joking").
* **Impact:** What actually happened. ("You hurt their feelings").
* In ethics, **Impact** usually outweighs **Intent**. If you accidentally break someone's nose, you are still responsible for the medical bill.

## Assessing Risk
Before acting, ask:
1.  What is the Best Case Scenario?
2.  What is the Worst Case Scenario?
3.  Can I live with the Worst Case?
* If the Worst Case is "I die" or "I go to jail," the risk is usually not worth the reward.

## Key Takeaway
We are free to choose our actions, but we are not free to choose the consequences of those actions.
    `
  },
  { 
    id: "ve-moral-courage", 
    title: "Having Moral Courage", 
    description: "Stand up for your beliefs even when it's hard", 
    category: "Values & Ethics", 
    difficulty: "Advanced" as const, 
    duration: "25 min", 
    points: 160, 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    tags: ["integrity", "bravery", "whistleblowing"],
    content: `
# Having Moral Courage

## The Hardest Courage
Physical courage is fueled by adrenaline. Moral courage is fueled by conviction. It is often quiet, lonely, and slow.

![Lone tree standing strong](https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80)

## The Asch Conformity Experiments
In the 1950s, psychologists showed a group of people lines of different lengths.
* Actors in the group intentionally gave the wrong answer.
* 37% of the real subjects agreed with the wrong answer just to fit in.
* **Moral Courage is being the one who says "No, that line is shorter" even when everyone else disagrees.**

## Whistleblowing
Reporting wrongdoings in an organization.
* It often costs the whistleblower their job, friends, and safety.
* Yet, without them, corruption (Enron, Watergate) continues unchecked.

## Why We Fail
We stay silent because of:
1.  **Diffusion of Responsibility:** "Someone else will say something."
2.  **Fear of Conflict:** "I don't want to make it awkward."
3.  **Fear of Retaliation:** "I might get fired/bullied."

## Building Moral Courage
1.  **Pre-scripting:** Decide *now* what you will do if asked to lie. "I'm sorry, I can't do that." Rehearsing makes it easier to say in the moment.
2.  **Find an Ally:** It is hard to stand alone. It is easy to stand with one other person.
3.  **Think Long Term:** Will you regret staying silent in 10 years? (Regret is usually heavier than awkwardness).

## Key Takeaway
"The only thing necessary for the triumph of evil is for good men to do nothing." - Edmund Burke
    `
  },

  // ==================================================================================
  // HEALTHY RELATIONSHIPS
  // ==================================================================================
  { 
    id: "ve-trust-building", 
    title: "Building Trust", 
    description: "Create and maintain trust in relationships", 
    category: "Values & Ethics", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
    tags: ["trust", "reliability", "connection"],
    content: `
# Building Trust

## The Marble Jar (Brené Brown)
Trust isn't a grand gesture. It's built in small moments, like putting marbles in a jar.
* Remembering a birthday = +1 marble.
* Keeping a secret = +1 marble.
* Showing up on time = +1 marble.
* *Betrayal* isn't taking one marble out; it's smashing the jar.

![Holding hands](https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80)

## The Trust Equation
**Trust = (Credibility + Reliability + Intimacy) / Self-Orientation**

1.  **Credibility:** Do you know what you're talking about? (Words).
2.  **Reliability:** Do you do what you say? (Actions).
3.  **Intimacy:** Do I feel safe sharing with you? (Emotions).
4.  **Self-Orientation (The Denominator):** Do you care about me, or just yourself?
    * *High self-orientation kills trust.*

## Vulnerability Loops
Trust requires risk.
* Person A shares a struggle (Risk).
* Person B responds with empathy (Safety).
* Person B shares a struggle (Risk).
* Trust deepens.
* *If Person B responds with judgment, the loop breaks.*

## Repairing Broken Trust
It is possible, but hard.
1.  **Total Transparency:** You lose the right to privacy for a while.
2.  **Consistency:** You must keep every promise, no matter how small.
3.  **Patience:** You cannot demand to be trusted again. It takes as long as it takes.

## Key Takeaway
Trust is the currency of relationships. Without it, you are bankrupt.
    `
  },
  { 
    id: "ve-loyalty-friendship", 
    title: "Loyalty in Friendship", 
    description: "Be a dependable and supportive friend", 
    category: "Values & Ethics", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800",
    tags: ["friendship", "support", "boundaries"],
    content: `
# Loyalty in Friendship

## What is True Loyalty?
Loyalty is often misunderstood as "blind support."
* **Blind Loyalty:** Supporting a friend even when they are wrong/harmful. (Enabling).
* **True Loyalty:** Wanting the best for your friend. Sometimes that means telling them the hard truth.
    * "I love you, but you're drinking too much."
    * "I'm on your side, but you were wrong in that argument."

![Friends laughing](https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80)

## Fair-Weather Friends
Friends who are there for the parties but disappear during the tragedies.
* *Test:* "A friend in need is a friend indeed."
* Loyalty is showing up when it's inconvenient. Helping them move house. Visiting them in the hospital.

## Confidentiality
A loyal friend is a vault.
* If they tell you a secret, it dies with you.
* *Exception:* If they are in danger (self-harm), loyalty demands you tell a professional to save them.

## Boundaries
Loyalty does not mean ownership.
* Your friend is allowed to have other friends.
* Jealousy is not loyalty; it is insecurity.
* Healthy friendships allow space for growth.

## Showing Up
Woody Allen said, "80% of success is showing up."
* Friendship is largely about presence. You don't need to be brilliant or rich. You just need to be *there*.

## Key Takeaway
To have a good friend, you must be a good friend.
    `
  },
  { 
    id: "ve-family-bonds", 
    title: "Strengthening Family Bonds", 
    description: "Nurture positive family relationships", 
    category: "Values & Ethics", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800",
    tags: ["family", "love", "conflict"],
    content: `
# Strengthening Family Bonds

## The Unchosen Bond
You choose your friends; you don't choose your family. This makes family the ultimate school for tolerance, forgiveness, and love.

![Family walking together](https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80)

## The Emotional Bank Account (Covey)
Every interaction is a deposit or withdrawal.
* **Deposits:** Kindness, keeping promises, listening, apologies.
* **Withdrawals:** Yelling, breaking promises, ignoring.
* *Family Reality:* We often treat strangers better than family because we assume family will "always be there." This is dangerous. You can overdraft a family account too.

## Rituals and Traditions
Shared experiences glue a family together.
* Friday Pizza Night.
* Yearly camping trip.
* No-phone Sunday dinners.
* These create a sense of "This is who we are."

## Conflict Resolution
Family fights are inevitable.
* **Rule:** Fight fair. No name-calling. No bringing up mistakes from 3 years ago.
* **Repair:** Don't let the sun go down on your anger. Apologize quickly.

## Forgiveness
Family members will hurt you. Holding grudges poisons the home.
* Forgiveness doesn't mean what they did was okay. It means you choose to let go of the desire for revenge so you can heal.

## Key Takeaway
"Family is not an important thing. It's everything." - Michael J. Fox
    `
  },
  { 
    id: "ve-community-responsibility", 
    title: "Community Responsibility", 
    description: "Contribute positively to your community", 
    category: "Values & Ethics", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800",
    tags: ["citizenship", "service", "civics"],
    content: `
# Community Responsibility

## We Are Not Islands
"Ubuntu" is an African philosophy: "I am because we are." Your well-being is tied to the well-being of your community.

![Volunteers working](https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80)

## The Tragedy of the Commons
If everyone acts selfishly in a shared space (e.g., littering in a park), the space is ruined for everyone.
* Community responsibility is the self-restraint to protect shared resources.

## Civic Duty
It goes beyond obeying the law.
* **Passive:** Not breaking windows.
* **Active:** Picking up broken glass.
* Voting, jury duty, and attending town halls are the "rent" we pay for living in a democracy.

## Service and Volunteering
The paradox of service: **The giver gets more than the receiver.**
* Helpers High: The release of endorphins when doing good.
* It provides purpose and connection.

## The Broken Window Theory
Visible signs of disorder (like a broken window) encourage more crime.
* *Application:* Small acts of order (mowing your lawn, painting a fence) signal that "People care about this place," which reduces crime and improves safety.

## How to Start
1.  **Micro-volunteering:** Pick up one piece of trash every day.
2.  **Neighborliness:** Know the names of the people living next to you.
3.  **Support Local:** Buy from local small businesses to keep money in the community.

## Key Takeaway
Ask not what your community can do for you; ask what you can do for your community.
    `
  }
];