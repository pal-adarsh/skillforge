import { Standard } from "../types";

export const criticalThinkingCategory: Standard = {
  id: "critical-thinking",
  name: "Critical Thinking",
  displayName: "Critical Thinking & Logical Reasoning",
  description: "Develop analytical skills and sound reasoning abilities",
  color: "bg-indigo-500",
  subjects: [
    {
      id: "ct-logic",
      name: "Logical Reasoning",
      icon: "Brain",
      color: "text-indigo-500",
      lessonIds: ["ct-intro-logic", "ct-patterns-sequences", "ct-deductive-reasoning", "ct-inductive-reasoning"]
    },
    {
      id: "ct-problem-solving",
      name: "Problem Solving",
      icon: "Lightbulb",
      color: "text-yellow-500",
      lessonIds: ["ct-problem-identification", "ct-brainstorming", "ct-decision-making", "ct-trial-error"]
    },
    {
      id: "ct-analysis",
      name: "Analysis & Evaluation",
      icon: "Search",
      color: "text-purple-500",
      lessonIds: ["ct-breaking-down-problems", "ct-evidence-evaluation", "ct-bias-recognition", "ct-argument-analysis"]
    },
    {
      id: "ct-cognitive",
      name: "Cognitive Skills",
      icon: "Zap",
      color: "text-orange-500",
      lessonIds: ["ct-memory-techniques", "ct-focus-concentration", "ct-mental-math", "ct-brain-exercises"]
    }
  ]
};

export const criticalThinkingLessons = [
  // ==================================================================================
  // LOGICAL REASONING
  // ==================================================================================
  { 
    id: "ct-intro-logic", 
    title: "Introduction to Logic", 
    description: "Understand the basics of logical thinking", 
    category: "Critical Thinking", 
    difficulty: "Beginner" as const, 
    duration: "25 min", 
    points: 140, 
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800",
    tags: ["logic", "philosophy", "reasoning"],
    content: `
# Introduction to Logic

## What is Logic?

Logic is not just "making sense." It is the science of correct reasoning. It provides the rules for how to construct valid arguments and how to detect fallacies.

![Chess board symbolizing strategy](https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80)

## The Anatomy of an Argument
In logic, an "argument" isn't a fight. It is a set of statements used to persuade someone of something.

1.  **Premise(s):** The statements that provide evidence or reasons.
2.  **Conclusion:** The statement that the premises support.

### Example:
* **Premise 1:** All humans are mortal.
* **Premise 2:** Socrates is a human.
* **Conclusion:** Therefore, Socrates is mortal.

## Validity vs. Soundness
This is the most critical distinction in logic.

### Validity
An argument is **valid** if the structure is correct. If the premises *were* true, the conclusion *must* be true.
* *Example (Valid but not Sound):*
    * Premise 1: All toasters are time machines. (False)
    * Premise 2: My cat is a toaster. (False)
    * Conclusion: Therefore, my cat is a time machine.
    * *Why it's valid:* The logic flows perfectly, even though the facts are wrong.

### Soundness
An argument is **sound** if:
1.  It is Valid.
2.  ALL the premises are actually true.

## Common Logical Fallacies (The Basics)
A fallacy is a flaw in reasoning.

* **Ad Hominem:** Attacking the person instead of the argument.
    * *"You're wrong about the budget because you dress poorly."*
* **Straw Man:** Misrepresenting an opponent's argument to make it easier to attack.
    * *Person A:* "We should invest more in education."
    * *Person B:* "So you hate the military and want to leave us defenseless?"
* **Appeal to Emotion:** Using tears or anger instead of facts to win.

## The Socratic Method
A method of questioning to expose contradictions.
* Ask: "What do you mean by that?"
* Ask: "Is that always true?"
* Ask: "What would happen if we applied that rule to everyone?"

## Key Takeaway
Logic is the toolkit for truth. Before you debate *what* is right, you must understand *how* to determine if something is true.

> "Logic is the beginning of wisdom, not the end." - Leonard Nimoy
    `
  },
  { 
    id: "ct-patterns-sequences", 
    title: "Patterns & Sequences", 
    description: "Recognize and predict patterns in information", 
    category: "Critical Thinking", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800",
    tags: ["patterns", "math", "observation"],
    content: `
# Patterns & Sequences

## The Pattern-Seeking Brain
The human brain is a pattern-recognition machine. It's how our ancestors survived (identifying predators in the grass) and how we learn language. Critical thinking relies on spotting patterns in data to predict future outcomes.

![Abstract geometric pattern](https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80)

## Types of Patterns

### 1. Arithmetic Sequences
The difference between terms is constant.
* *Sequence:* 2, 5, 8, 11...
* *Pattern:* +3
* *Next:* 14

### 2. Geometric Sequences
The ratio between terms is constant (multiplication).
* *Sequence:* 3, 6, 12, 24...
* *Pattern:* x2
* *Next:* 48

### 3. Visual/Spatial Patterns
Used heavily in IQ tests. Rotating shapes, shifting colors.
* *Example:* A clock hand moving 90 degrees clockwise each step.

## The Fibonacci Sequence
A famous pattern found in nature (flowers, shells, galaxies).
* *Rule:* Each number is the sum of the two preceding ones.
* *Sequence:* 0, 1, 1, 2, 3, 5, 8, 13, 21...
* *Next:* 34 (13 + 21)

## Pattern Recognition in Real Life

### Financial Markets
Traders look for "Head and Shoulders" or "Double Bottom" patterns in stock charts to predict price movements.

### Behavior
"History doesn't repeat itself, but it rhymes."
* Noticing that a friend always cancels plans when they are stressed is recognizing a behavioral pattern.

### Troubleshooting
If your car makes a noise only when turning left at high speeds, you have identified a specific pattern that narrows down the mechanical issue.

## Apophenia: The Trap
**Apophenia** is the tendency to perceive connections and meaning between unrelated things.
* *Example:* Seeing a face in a cloud or believing that wearing a specific shirt caused your team to win.
* *Critical Thinking Check:* Is this a real pattern, or is it random noise?

## Key Takeaway
To predict the future, you must accurately decode the past. Look for the rule that governs the sequence.
    `
  },
  { 
    id: "ct-deductive-reasoning", 
    title: "Deductive Reasoning", 
    description: "Draw conclusions from general principles", 
    category: "Critical Thinking", 
    difficulty: "Intermediate" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1453733190371-0a9bedd82893?w=800",
    tags: ["deduction", "sherlock", "logic"],
    content: `
# Deductive Reasoning

## Top-Down Logic
Deductive reasoning moves from the **General** to the **Specific**. It starts with a general rule (premise) and applies it to a specific case to reach a certain conclusion.

![Magnifying glass on text](https://images.unsplash.com/photo-1453733190371-0a9bedd82893?w=800&q=80)

## The Syllogism
The classic structure of deduction.

1.  **Major Premise (Rule):** All A are B.
2.  **Minor Premise (Case):** C is A.
3.  **Conclusion:** Therefore, C is B.

### Example:
* *Rule:* To get a driver's license in this state, you must be 16.
* *Case:* John is 14.
* *Conclusion:* John cannot get a driver's license.
* *(This conclusion is 100% certain based on the premises).*

## Certainty vs. Probability
Deductive reasoning aims for **certainty**.
* If the premises are true and the logic is valid, the conclusion **cannot** be false.
* *Contrast:* Inductive reasoning (which we will learn next) only deals with probability.

## Deductive Reasoning in Action

### 1. Mathematics & Coding
* Math is purely deductive. $2 + 2 = 4$ is always true based on the axioms of arithmetic.
* Coding: \`If (x > 10) { print("Hello") }\`. If x is 11, the computer *must* print Hello.

### 2. The "Sherlock Holmes" Misconception
Sherlock Holmes often says he uses "Deduction," but he actually uses "Abduction" (inference to the best explanation).
* *Sherlock:* "He has mud on his boots, therefore he was in the fields."
* *Logic Check:* This is not strict deduction. He could have stepped in a puddle on the street. It is a probable guess, not a logical certainty.

## Common Deductive Errors

### Affirming the Consequent (Fallacy)
* *Rule:* If it is raining, the street is wet.
* *Observation:* The street is wet.
* *Conclusion:* Therefore, it is raining.
* *Why it fails:* A fire hydrant could have burst. The street being wet does not prove rain.

### Denying the Antecedent (Fallacy)
* *Rule:* If I study hard, I will pass.
* *Observation:* I did not study hard.
* *Conclusion:* Therefore, I will fail.
* *Why it fails:* You might get lucky or already know the material.

## Key Takeaway
Deduction is the engine of proof. It allows us to apply universal rules to specific situations with absolute confidence—provided our rules are correct.

> "Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth." - Arthur Conan Doyle
    `
  },
  { 
    id: "ct-inductive-reasoning", 
    title: "Inductive Reasoning", 
    description: "Make generalizations from specific observations", 
    category: "Critical Thinking", 
    difficulty: "Intermediate" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
    tags: ["induction", "science", "probability"],
    content: `
# Inductive Reasoning

## Bottom-Up Logic
Inductive reasoning moves from the **Specific** to the **General**. It gathers specific observations and looks for a trend to form a general conclusion or theory.

![Scientific experiment](https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80)

## The Structure of Induction
1.  **Observation:** I saw a white swan.
2.  **Pattern:** I saw 100 more swans, and they were all white.
3.  **Theory (Conclusion):** Therefore, all swans are white.

## The Problem of Induction (The Black Swan)
Inductive reasoning never provides 100% certainty; it only provides **probability**.
* In the swan example, you could see 1,000,000 white swans. Your theory is strong.
* But the moment you see **one** black swan, your theory is destroyed.
* *Lesson:* Be careful with words like "always" or "never" when using induction.

## Inductive Reasoning in Real Life

### 1. Science
The Scientific Method is largely inductive.
* Scientists observe data \u2192 Form a hypothesis \u2192 Test it.
* Gravity is a theory based on billions of observations that things fall down. We assume it will happen tomorrow, but we rely on induction for that belief.

### 2. Machine Learning / AI
AI uses induction. It looks at 10,000 photos of cats to learn the general rule of "what a cat looks like."

### 3. Stereotypes (The Dark Side)
Stereotyping is bad inductive reasoning.
* *Observation:* "I met one rude person from City X."
* *Bad Induction:* "Therefore, everyone from City X is rude."
* *Fix:* Increase your sample size before drawing conclusions.

## Strength vs. Weakness
Arguments in induction are not "valid" or "invalid"; they are **Strong** or **Weak**.

* **Weak Argument:** "My grandfather smoked and lived to 90; therefore, smoking is healthy." (Sample size: 1).
* **Strong Argument:** "We surveyed 100,000 smokers and found they have higher cancer rates; therefore, smoking causes cancer." (Sample size: 100,000).

## Bayesian Thinking
This is a modern approach to induction.
* Start with a "Prior" (your current belief).
* Update your belief as you get new "Evidence."
* Never be 100% certain; just increase or decrease your confidence level based on data.

## Key Takeaway
Induction is how we navigate the world and learn new things, but it always carries risk. Always ask: "Is my sample size big enough?"

> "The sun has risen every day of my life, but that does not prove it will rise tomorrow."
    `
  },

  // ==================================================================================
  // PROBLEM SOLVING
  // ==================================================================================
  { 
    id: "ct-problem-identification", 
    title: "Identifying the Real Problem", 
    description: "Learn to find the root cause of issues", 
    category: "Critical Thinking", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1504384308090-c54be3855091?w=800",
    tags: ["root-cause", "analysis", "problem-solving"],
    content: `
# Identifying the Real Problem

## Symptom vs. Cause
Most people waste time solving the wrong problem. They put a band-aid on a broken bone.
* **Symptom:** "I have a headache."
* **Cause:** "I am dehydrated."
* *Action:* If you just take a painkiller (treating the symptom), the headache comes back. If you drink water (treating the cause), it stops.

![Root system of a tree](https://images.unsplash.com/photo-1504384308090-c54be3855091?w=800&q=80)

## The 5 Whys Technique
Developed by Toyota, this method digs deep. Ask "Why?" five times.

* **Problem:** The car won't start.
1.  **Why?** The battery is dead.
2.  **Why?** The alternator is not functioning.
3.  **Why?** The alternator belt has broken.
4.  **Why?** The belt was well beyond its useful service life and not replaced.
5.  **Why?** The vehicle was not maintained according to the service schedule. (ROOT CAUSE).

* *Solution:* Don't just buy a battery; start a maintenance schedule.

## The Fishbone Diagram (Ishikawa)
A visual tool to brainstorm causes.
* **Head of Fish:** The Problem.
* **Bones:** Categories of causes (e.g., People, Process, Equipment, Environment).
* This prevents "Tunnel Vision" where you only blame one thing (usually a person) instead of the system.

## Problem Statement Framing
How you say the problem determines the solution.
* *Bad Frame:* "We need a new elevator." (Assumes the solution).
* *Good Frame:* "The wait times for the elevator are too long."
    * *Possible Solutions:* New elevator OR faster doors OR stagger work start times OR put mirrors in the lobby (psychology: makes wait feel shorter).

## Einstein's Rule
"If I had an hour to solve a problem, I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions."

## Key Takeaway
Don't jump to solutions. Fall in love with the problem first. Diagnosing the root cause is 90% of the battle.
    `
  },
  { 
    id: "ct-brainstorming", 
    title: "Creative Brainstorming", 
    description: "Generate multiple solutions to problems", 
    category: "Critical Thinking", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800",
    tags: ["creativity", "ideas", "innovation"],
    content: `
# Creative Brainstorming

## Divergent vs. Convergent Thinking
* **Divergent:** Creating choices. Throwing paint at the wall. "No bad ideas."
* **Convergent:** Making choices. Selecting the best idea. Logic and constraints.
* *Rule:* Never do both at the same time. If you judge ideas while brainstorming, you kill creativity.

![Sticky notes brainstorming](https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80)

## The SCAMPER Method
A checklist to modify existing ideas:
* **S - Substitute:** Can we change the rules? The materials? The people?
* **C - Combine:** Can we mix X and Y? (e.g., Phone + Camera = iPhone).
* **A - Adapt:** Has anyone else solved this? Can we copy nature (biomimicry)?
* **M - Modify:** Change the shape, look, or feel.
* **P - Put to another use:** Can this kitchen tool be a garden tool?
* **E - Eliminate:** Simplify. What can we remove? (e.g., removing headphone jack).
* **R - Reverse:** Do the opposite. (e.g., Instead of employees paying for lunch, the company pays).

## Mind Mapping
Start with the central problem in the middle of the page. Draw branches for themes.
* activates the visual brain.
* shows connections you might miss in a list.

## Reverse Brainstorming
Instead of asking "How do we solve this?", ask **"How could we cause this problem?"**
* *Goal:* Improve customer satisfaction.
* *Reverse:* How could we make customers hate us? (Be rude, long hold times, bad product).
* *Insight:* Now, ensure you do the exact opposite of those things.

## The "Bad Idea" Method
Pressure to be smart causes writer's block.
* *Task:* Spend 5 minutes coming up with the worst, stupidest ideas possible.
* *Result:* It lowers your filter. Often, a "stupid" idea contains the seed of a brilliant one.

## Key Takeaway
Quantity leads to quality. You have to get the bad ideas out of your system to let the good ones flow.
    `
  },
  { 
    id: "ct-decision-making", 
    title: "Making Good Decisions", 
    description: "Evaluate options and choose wisely", 
    category: "Critical Thinking", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1506501139174-099022df5260?w=800",
    tags: ["decisions", "strategy", "choice"],
    content: `
# Making Good Decisions

## Analysis Paralysis
Having too many choices leads to anxiety and inaction. A good decision made today is often better than a perfect decision made next week.

![Road sign choices](https://images.unsplash.com/photo-1506501139174-099022df5260?w=800&q=80)

## Decision Matrix (Weighted Scoring)
Use this when choosing between complex options (e.g., choosing a college, buying a car).
1.  List your Options (Rows).
2.  List your Criteria (Columns) - e.g., Cost, Location, Quality.
3.  Assign a "Weight" to each criteria (1-5 importance).
4.  Score each option. Multiply by weight.
5.  The math gives you the logical winner.

## The Eisenhower Matrix (Prioritization)
Deciding *what* to do.
* **Do:** Urgent & Important.
* **Decide:** Not Urgent & Important (Schedule it).
* **Delegate:** Urgent & Not Important.
* **Delete:** Not Urgent & Not Important.

## Second-Order Thinking
Ask: "And then what?"
* *First Order:* "I'll eat this donut. It tastes good."
* *Second Order:* "I'll have a sugar crash in an hour."
* *Third Order:* "If I do this daily, I will gain weight."
* *Smart decisions consider the ripple effects.*

## Opportunity Cost
Every decision is a trade-off. By choosing A, you are "paying" the cost of not doing B.
* "The cost of a thing is the amount of life which is required to be exchanged for it." - Thoreau.

## The 10-10-10 Rule
How will I feel about this decision:
* In 10 Minutes?
* In 10 Months?
* In 10 Years?
* *Use:* Helps overcome short-term emotion to see long-term value.

## WRAP Method (Chip & Dan Heath)
* **W**iden your options (Don't just do A vs B, look for C).
* **R**eality test your assumptions (Can you do a small trial?).
* **A**ttain distance before deciding (Sleep on it).
* **P**repare to be wrong (Have a Plan B).

## Key Takeaway
A decision is a bet on the future. You can't control the outcome, but you can control the process. Use logic, not just gut feeling.
    `
  },
  { 
    id: "ct-trial-error", 
    title: "Learning from Trial & Error", 
    description: "Use mistakes as learning opportunities", 
    category: "Critical Thinking", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800",
    tags: ["learning", "growth-mindset", "experimentation"],
    content: `
# Learning from Trial & Error

## The Scientific Method of Life
Trial and error is not "guessing." It is a systematic process of experimentation. It is how babies learn to walk and how scientists cure diseases.

![Lab experiment](https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80)

## Fail Fast, Fail Cheap
The goal isn't to avoid failure; it's to lower the *cost* of failure.
* *Bad:* Spending 3 years building a product nobody wants.
* *Good:* Spending 3 days building a prototype to see if anyone wants it.

## Feedback Loops
Trial and error only works if you get feedback.
1.  **Action:** Try something.
2.  **Observation:** What happened?
3.  **Adjustment:** Change one variable.
4.  **Repeat.**

## The A/B Test
A classic digital example.
* Show 50% of users a Red Button.
* Show 50% of users a Green Button.
* See which one gets clicked more.
* You don't *argue* about which is better; you *test* it.

## Growth Mindset (Carol Dweck)
* **Fixed Mindset:** "I failed, so I am not smart."
* **Growth Mindset:** "I failed, so I learned what doesn't work."
* In critical thinking, a "failed" experiment is still a success because it provides **Data**.

## Thomas Edison's Perspective
When asked about his failures inventing the lightbulb:
"I have not failed. I've just found 10,000 ways that won't work."

## When NOT to use Trial and Error
* High-stakes situations where failure is catastrophic (e.g., defusing a bomb, surgery).
* In these cases, rely on **Best Practices** and **Expertise**.

## Key Takeaway
Don't be afraid to be wrong. Be afraid of being wrong twice about the same thing. Treat your life like a laboratory.
    `
  },

  // ==================================================================================
  // ANALYSIS & EVALUATION
  // ==================================================================================
  { 
    id: "ct-breaking-down-problems", 
    title: "Breaking Down Complex Problems", 
    description: "Divide big problems into manageable parts", 
    category: "Critical Thinking", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1587613753310-0ba642887227?w=800",
    tags: ["analysis", "decomposition", "first-principles"],
    content: `
# Breaking Down Complex Problems

## The Art of Decomposition
A complex problem is just a pile of simple problems. If you try to solve the whole thing at once, you will get overwhelmed.

![Jigsaw puzzle](https://images.unsplash.com/photo-1587613753310-0ba642887227?w=800&q=80)

## How to Eat an Elephant?
**One bite at a time.**
* *Project:* "Start a Business." (Too big, scary).
* *Breakdown:*
    1.  Product Idea.
    2.  Market Research.
    3.  Legal Registration.
    4.  Website.
* Now, just focus on "Product Idea."

## First Principles Thinking
Made famous by Elon Musk.
1.  **Boil things down** to the most fundamental truths (physics/facts).
2.  **Reason up** from there.
* *Analogy:* "Battery packs are expensive because that's how they've always been."
* *First Principles:* "What is a battery made of? Cobalt, nickel, aluminum. If we buy those metals on the exchange, it costs $80/kWh. So, we just need to figure out how to put them together cheaper."

## Cartesian Method (Descartes)
1.  Accept nothing as true unless clearly known.
2.  **Divide every difficulty into as many parts as possible.**
3.  Start with the simplest objects and ascend to the complex.
4.  Review everything to ensure nothing is omitted.

## Flowcharts and Algorithms
Draw the flow.
* If X happens \u2192 Go to Step A.
* If Y happens \u2192 Go to Step B.
* Visualizing the breakdown exposes gaps in your logic.

## MECE Principle (McKinsey)
**M**utually **E**xclusive, **C**ollectively **E**xhaustive.
* When breaking down a problem, ensure categories don't overlap (Mutually Exclusive) and cover all possibilities (Collectively Exhaustive).
* *Example:* Categorizing customers by Age:
    * 0-18, 19-35, 36-60, 60+ (Good MECE).
    * Students, Workers, Retirees (Bad MECE - overlap exists, and unemployed are missed).

## Key Takeaway
Complexity is an illusion. Smash the big rocks into pebbles, and the pebbles into sand.
    `
  },
  { 
    id: "ct-evidence-evaluation", 
    title: "Evaluating Evidence", 
    description: "Assess the quality and relevance of information", 
    category: "Critical Thinking", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=800",
    tags: ["evidence", "research", "facts"],
    content: `
# Evaluating Evidence

## Not All Proof is Created Equal
In the age of the internet, finding "proof" is easy. Finding *good* proof is hard.

![Judge's gavel](https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=800&q=80)

## The Hierarchy of Evidence (Science)
1.  **Meta-Analysis:** A study of many studies. (Gold Standard).
2.  **Randomized Controlled Trials:** Testing with control groups.
3.  **Observational Studies:** Watching what happens.
4.  **Expert Opinion:** Smart people guessing.
5.  **Anecdotal Evidence:** "My cousin ate a berry and got sick." (Lowest quality).

## Primary vs. Secondary Sources
* **Primary:** The raw data. The original historical document. The video footage.
* **Secondary:** A news article *about* the document. A YouTuber *talking about* the video.
* *Rule:* Whenever possible, go to the Primary source. Secondary sources add bias and errors.

## Correlation vs. Causation
Just because two things happen together doesn't mean one caused the other.
* *Fact:* Ice cream sales and murder rates both rise in summer.
* *Wrong Conclusion:* Ice cream causes murder.
* *Right Conclusion:* Heat causes both (Third Variable).

## Sample Size Matters
"3 out of 4 Dentists Recommend..."
* If they only asked 4 dentists, this is meaningless.
* If they asked 4,000, it's significant.
* Always look for **n** (sample size).

## Conflict of Interest
Ask: **"Who paid for this study?"**
* A study saying "Sugar is healthy" funded by a soda company should be treated with extreme skepticism.

## Triangulation
Don't rely on one source. Find three independent sources that agree.
1.  BBC News.
2.  An academic paper.
3.  A government report.
* If they all align, the fact is likely solid.

## Key Takeaway
Be a detective. Interrogate the evidence. Ask "How do you know that?" and "Is that the whole story?"
    `
  },
  { 
    id: "ct-bias-recognition", 
    title: "Recognizing Bias", 
    description: "Identify bias in yourself and others", 
    category: "Critical Thinking", 
    difficulty: "Advanced" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1574066847285-48b79f809a47?w=800",
    tags: ["bias", "psychology", "self-awareness"],
    content: `
# Recognizing Bias

## The Glitch in the Matrix
Cognitive biases are systematic errors in thinking. They are "shortcuts" our brain takes to process information quickly, but they often lead us to the wrong conclusion.

![Distorted mirror reflection](https://images.unsplash.com/photo-1574066847285-48b79f809a47?w=800&q=80)

## The Big 5 Biases

### 1. Confirmation Bias
The tendency to search for, interpret, and remember information that confirms what we already believe.
* *Example:* You believe being a Gemini makes you moody. You notice every time a Gemini is moody, but ignore when they are calm.
* *Fix:* Actively search for evidence that proves you *wrong*.

### 2. Sunk Cost Fallacy
Continuing to do something just because you've already invested time/money in it.
* *Example:* Finishing a boring movie because "I already watched an hour."
* *Logic:* That hour is gone forever. Don't waste the next hour too.

### 3. Anchoring Bias
The first piece of information you see (the anchor) influences all subsequent judgments.
* *Example:* A shirt is marked "$100" then discounted to "$50." You think it's a bargain. If it was just marked "$50," you might think it's expensive.

### 4. Availability Heuristic
Judging the probability of events by how easily examples come to mind.
* *Example:* Fearing plane crashes more than car crashes because plane crashes make the news, even though cars are far more dangerous.

### 5. Dunning-Kruger Effect
Incompetent people overestimate their competence. Experts underestimate theirs.
* *Why:* You need a little bit of knowledge to realize how much you *don't* know.

## Fundamental Attribution Error
When others mess up, we blame their character ("They are lazy").
When we mess up, we blame the situation ("I was tired").
* *Fix:* Give others the same grace you give yourself.

## How to Debias
1.  **Slow Down:** Biases thrive on speed.
2.  **Devil's Advocate:** Ask "Why might the opposite be true?"
3.  **Blind Selection:** Remove identifying details (e.g., grading tests without looking at names) to reduce prejudice.

## Key Takeaway
You cannot eliminate bias—it's part of being human. But you can notice it, name it, and account for it.
    `
  },
  { 
    id: "ct-argument-analysis", 
    title: "Analyzing Arguments", 
    description: "Evaluate the strength of different arguments", 
    category: "Critical Thinking", 
    difficulty: "Advanced" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800",
    tags: ["debate", "rhetoric", "truth"],
    content: `
# Analyzing Arguments

## Dissecting the Debate
Analyzing an argument isn't about yelling louder. It's about X-raying the structure of what is being said to see if it holds up.

![Debate podiums](https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80)

## The Steel Man Technique
The opposite of the "Straw Man."
1.  Take your opponent's argument.
2.  Rephrase it to be the **strongest, best version** of that argument.
3.  Only then do you argue against it.
* *Why:* If you defeat the Steel Man, you have truly won. If you defeat a Straw Man, you've accomplished nothing.

## Identifying Hidden Assumptions
Every argument rests on unstated beliefs.
* *Argument:* "We should lower taxes to stimulate the economy."
* *Hidden Assumption:* The speaker assumes that people will spend the extra money (not save it) and that spending drives the economy effectively.
* *Attack point:* Challenge the assumption, not just the conclusion.

## The Slippery Slope Fallacy
Arguing that A will inevitably lead to Z.
* *Example:* "If we let kids play video games, they will all become violent criminals."
* *Analysis:* Is there proof of the steps between A and Z? Usually not.

## Whataboutism (Tu Quoque)
Deflecting criticism by pointing out flaws in the opponent.
* *A:* "Your climate policy is weak."
* *B:* "Yeah? Well, you took a private jet last year!"
* *Analysis:* Person B didn't answer the argument. They just attacked Person A. Person A's hypocrisy doesn't make their argument about policy wrong.

## Credibility Checks
* **Ethos (Credibility):** Can I trust the speaker?
* **Pathos (Emotion):** Are they manipulating my feelings?
* **Logos (Logic):** Do the facts support the claim?

## Key Takeaway
Good analysis is like structural engineering. You poke the argument, shake it, and see if it stands up or collapses under its own weight.
    `
  },

  // ==================================================================================
  // COGNITIVE SKILLS
  // ==================================================================================
  { 
    id: "ct-memory-techniques", 
    title: "Memory Enhancement Techniques", 
    description: "Improve your ability to remember information", 
    category: "Critical Thinking", 
    difficulty: "Beginner" as const, 
    duration: "25 min", 
    points: 140, 
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
    tags: ["memory", "learning", "mnemonics"],
    content: `
# Memory Enhancement Techniques

## Your Brain is a Muscle
Memory isn't a fixed container. It is a network of connections that grows stronger with use.

![Brain network nodes](https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80)

## How Memory Works
1.  **Encoding:** Taking info in.
2.  **Storage:** Keeping it.
3.  **Retrieval:** Getting it out.
* *Most "memory problems" are actually attention problems (Encoding failure).*

## The Method of Loci (Memory Palace)
Used by Sherlock Holmes and memory champions.
1.  Visualize a familiar place (your house).
2.  Place the items you want to remember in specific rooms.
3.  Make the images weird and vivid.
* *Example:* To remember "Milk," imagine a giant cow sitting on your sofa splashing milk everywhere.
* *Recall:* Just "walk" through your house in your mind.

## Chunking
Breaking info into small groups.
* *Hard:* 192837465
* *Easy:* 192 - 837 - 465
* This is why phone numbers are dashed.

## Spaced Repetition
The most efficient way to study.
* Review info right before you are about to forget it.
* Day 1, Day 3, Day 7, Day 21.
* Use apps like Anki or Quizlet.

## Mnemonics
Acronyms and rhymes.
* **ROY G BIV** (Colors of the rainbow).
* **PEMDAS** (Order of operations).
* The sillier the rhyme, the better it sticks.

## Dual Coding
Combine words with images.
* Don't just read the definition of "mitochondria." Look at a diagram while reading it. This creates two paths in the brain to the same information.

## Key Takeaway
Don't rely on rote repetition. Make information sticky by connecting it to things you already know, visualizing it, and spacing out your review.
    `
  },
  { 
    id: "ct-focus-concentration", 
    title: "Building Focus & Concentration", 
    description: "Train your mind to stay focused longer", 
    category: "Critical Thinking", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    tags: ["focus", "productivity", "deep-work"],
    content: `
# Building Focus & Concentration

## The Attention Economy
Your focus is a currency, and every app on your phone is trying to steal it. Reclaiming your attention is the superpower of the 21st century.

![Focus camera lens](https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80)

## Deep Work (Cal Newport)
**Deep Work:** Professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit.
* **Shallow Work:** Emails, meetings, admin.
* *Rule:* You cannot produce elite work while multitasking.

## The Pomodoro Technique
1.  Pick a task.
2.  Set a timer for 25 minutes.
3.  Work with **zero** interruptions.
4.  Take a 5-minute break.
5.  Repeat.
* *Why it works:* It creates urgency and gives your brain scheduled rest.

## Entering Flow State
The "Zone" where work feels effortless.
* **Requirement:** The challenge must match your skill level.
    * Too hard = Anxiety.
    * Too easy = Boredom.
    * Just right = Flow.
* **Trigger:** Clear goals and immediate feedback.

## Dealing with Distractions
* **External:** Phone notifications, noise. (Fix: Noise-canceling headphones, "Do Not Disturb" mode).
* **Internal:** "I wonder what's for lunch?" (Fix: Keep a "Distraction Notepad." Write the thought down to get it out of your head, then return to work).

## Single-Tasking vs. Multitasking
Multitasking is a myth. You are just "Task Switching."
* Every switch costs energy (Context Switching Penalty).
* Doing A and B together takes longer than doing A then B.

## Key Takeaway
Focus is a muscle. If you spend all day scrolling 15-second videos, your focus muscle atrophies. Train it by reading books or doing sustained work.
    `
  },
  { 
    id: "ct-mental-math", 
    title: "Mental Math Shortcuts", 
    description: "Quick calculation techniques for everyday use", 
    category: "Critical Thinking", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800",
    tags: ["math", "shortcuts", "numeracy"],
    content: `
# Mental Math Shortcuts

## Numeracy is Confidence
Being able to do quick math in your head protects you from bad deals and makes you faster in business and life.

![Numbers and calculations](https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&q=80)

## The Magic of 10% (Tipping & Percentages)
To find 10% of anything, just move the decimal one spot to the left.
* 10% of $54.00 = $5.40.
* 20%? Find 10% ($5.40) and double it ($10.80).
* 15%? Find 10% ($5.40), take half of that ($2.70), and add them ($8.10).

## The Rule of 72 (Investing)
How long will it take to double your money?
* Formula: **72 \u00F7 Interest Rate = Years.**
* *Example:* At 8% return, 72 / 8 = 9 years to double your money.

## Multiplying by 11
* *Example:* 23 x 11.
* Separate the digits (2 __ 3).
* Add them together (2+3=5).
* Put that number in the middle: **253**.

## Subtracting from 1,000
To subtract a number from 1,000 (e.g., 1000 - 648):
1.  Subtract the first digits from 9. (9-6 = 3)
2.  Subtract the next digit from 9. (9-4 = 5)
3.  Subtract the last digit from 10. (10-8 = 2)
* Answer: **352**.

## Rounding and Estimating
You don't always need the exact answer.
* *Question:* What is 32% of 5,103?
* *Estimate:* What is 33% (1/3) of 5,100?
* *Mental:* 51 / 3 = 17. So about 1,700.
* *Exact:* 1,632.96. (Close enough for a quick decision).

## Key Takeaway
Don't be dependent on your phone calculator. These tricks keep your brain sharp and impress your friends.
    `
  },
  { 
    id: "ct-brain-exercises", 
    title: "Brain Training Exercises", 
    description: "Fun activities to sharpen your mind", 
    category: "Critical Thinking", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800",
    tags: ["neuroplasticity", "games", "training"],
    content: `
# Brain Training Exercises

## Neuroplasticity
Your brain changes physically based on what you do. "Neurons that fire together, wire together." You can literally build a better brain.

![Brain artwork](https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80)

## Dual N-Back
This is one of the few games scientifically proven to increase working memory and fluid intelligence.
* *How:* You see a square appear on a grid AND hear a letter.
* *Task:* Match the position/sound from N steps ago (e.g., 2 steps back).
* It's frustratingly hard, which means it's working.

## The Stroop Effect
Test your processing speed.
* Look at a list of color words (RED, BLUE, GREEN).
* But... the word "RED" is printed in Blue ink.
* *Task:* Say the **color of the ink**, not the word.
* *Why:* Forces your executive control to override your automatic reading habit.

## Non-Dominant Hand Use
* Brush your teeth or eat with your left hand (if you are right-handed).
* *Why:* It forces the brain to build new neural pathways for fine motor skills.

## Mindfulness Meditation
Not just for relaxation. It is a "bicep curl" for your attention span.
* Focus on breath. Mind wanders. Bring it back.
* That "bringing it back" is the exercise.

## Learning a New Skill
The best brain game isn't an app; it's real life.
* Learn a language.
* Learn an instrument.
* Learn to juggle.
* Novelty triggers dopamine and neuroplasticity.

## Key Takeaway
Your brain is like a pet. If you don't give it interesting problems to solve, it will chew up the furniture (anxiety/boredom). Keep it challenged.

> "I am still learning." - Michelangelo, at age 87.
    `
  }
];