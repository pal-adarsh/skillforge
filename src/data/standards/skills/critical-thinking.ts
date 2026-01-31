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

Logic is not just "making sense" or "being reasonable." It is the **formal science of correct reasoning**—a systematic framework that has been refined over 2,400 years, from Aristotle to modern symbolic logic. Logic provides the ironclad rules for how to construct valid arguments, identify flawed reasoning, and navigate truth from falsehood.

![Chess board symbolizing strategy](https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80)

Think of logic as the operating system for your brain. Just as computers need precise code to function, our minds need logical frameworks to process information accurately. Without logic, we're vulnerable to manipulation, confusion, and error.

## The Three Pillars of Logic

### 1. Formal Logic
The mathematical structure of reasoning. Uses symbols and formulas (like \`p → q\`) to represent arguments. This is what you see in computer science and mathematics.

### 2. Informal Logic
The art of analyzing everyday arguments. This is what you use when reading news articles, listening to politicians, or debating with friends.

### 3. Philosophical Logic
The study of truth, meaning, and paradoxes. Questions like "Can this sentence be false if it claims to be false?"

## The Anatomy of an Argument
In logic, an "argument" isn't a heated exchange or a fight. It is a **structured set of statements** designed to persuade through reason.

### Components:
1.  **Premise(s):** The foundational statements that provide evidence or reasons.
2.  **Conclusion:** The statement that the premises are intended to support.
3.  **Inference:** The logical connection between premises and conclusion.

### Classic Example:
* **Premise 1:** All humans are mortal.
* **Premise 2:** Socrates is a human.
* **Conclusion:** Therefore, Socrates is mortal.

This is a **syllogism**—the oldest form of logical argument, dating back to Aristotle's *Prior Analytics* (350 BCE).

### Modern Example:
* **Premise 1:** If the server is down, users cannot log in.
* **Premise 2:** The server is down.
* **Conclusion:** Therefore, users cannot log in.

This is **modus ponens** (affirming the antecedent)—one of the most reliable forms of logical inference.

## Validity vs. Soundness: The Master Key
This distinction is **the most important concept** in all of logic. Master this, and you can dismantle any argument.

### Validity
An argument is **valid** if its logical structure guarantees that *if* the premises were true, the conclusion *must* be true. Validity is about **form**, not facts.

**Valid but Absurd Example:**
* Premise 1: All toasters are time machines.
* Premise 2: My cat is a toaster.
* Conclusion: Therefore, my cat is a time machine.

**Why it's valid:** The logical structure is perfect (\`All A are B, C is A, therefore C is B\`). The premises are false, but the *logic* is flawless.

### Soundness
An argument is **sound** if:
1.  It is **valid** (correct structure).
2.  ALL premises are **actually true** (factually accurate).

**Sound Example:**
* Premise 1: Water boils at 100°C at sea level.
* Premise 2: We are at sea level and the water reached 100°C.
* Conclusion: Therefore, the water is boiling.

### Why This Matters
Politicians and advertisers exploit the gap between validity and soundness. They construct *valid* arguments built on *false* premises. Example:
* "If we don't pass this law, chaos will ensue. We can't allow chaos. Therefore, we must pass this law."

The structure is valid. But is the premise true? Will chaos *actually* ensue? That's where critical thinking saves you.

## The Logic Toolkit: Argument Forms

### Modus Ponens (Affirming the Antecedent)
* If P, then Q.
* P is true.
* Therefore, Q.

**Example:** If it rains, the streets get wet. It is raining. Therefore, the streets are wet.

### Modus Tollens (Denying the Consequent)
* If P, then Q.
* Q is false.
* Therefore, P is false.

**Example:** If the alarm is working, it would have gone off. It didn't go off. Therefore, the alarm is not working.

### Disjunctive Syllogism
* Either P or Q.
* Not P.
* Therefore, Q.

**Example:** The light is either on or off. It's not on. Therefore, it's off.

## Common Logical Fallacies: The Hall of Shame

### Ad Hominem (Attacking the Person)
Instead of addressing the argument, you attack the person making it.
* **Example:** "You say we should cut taxes, but you're a college dropout, so what do you know?"
* **Why it fails:** Intelligence and education don't determine if a tax policy is sound. Address the *policy*, not the *person*.

### Straw Man (Misrepresentation)
Distorting an opponent's position to make it easier to attack.
* **Person A:** "We should increase funding for public schools."
* **Person B:** "So you want to waste taxpayer money and bankrupt the government?"
* **Why it fails:** Person B exaggerated Person A's position. No one said "bankrupt the government."

### Appeal to Emotion (Pathos Over Logos)
Using fear, pity, or anger instead of evidence.
* **Example:** "If you don't donate to our cause, children will suffer."
* **Why it fails:** Emotional manipulation bypasses rational evaluation. The cause might be worthy, but the argument itself is weak.

### False Dilemma (Black-and-White Thinking)
Presenting only two options when more exist.
* **Example:** "You're either with us or against us."
* **Why it fails:** There are often middle positions, neutral stances, or entirely different frameworks.

### Circular Reasoning (Begging the Question)
The conclusion is hidden in the premise.
* **Example:** "The Bible is true because it says so in the Bible."
* **Why it fails:** You're assuming what you're trying to prove.

### Appeal to Authority (Argument from Authority)
Claiming something is true because an authority figure said it.
* **Example:** "Einstein believed in God, so God must exist."
* **Why it fails:** Experts can be wrong, especially outside their field. Einstein's physics expertise doesn't make him a theological authority.

### Slippery Slope
Claiming that A will inevitably lead to Z without proving the intermediate steps.
* **Example:** "If we allow people to own one dog, soon they'll own 100 dogs and the neighborhood will be chaos."
* **Why it fails:** Each step requires its own justification.

## The Socratic Method: The Art of Productive Questioning

Socrates never wrote a single word, yet he revolutionized thinking by asking relentless questions. His method:

### Step 1: Define Terms
**Ask:** "What do you mean by 'justice'?" (Force precision).

### Step 2: Test Universality
**Ask:** "Does your definition apply to all cases, or are there exceptions?"

### Step 3: Expose Contradictions
**Ask:** "Earlier you said X, but now you're saying Y. Can both be true?"

### Step 4: Refine
**Ask:** "Based on what we've discovered, how should we revise our understanding?"

### Practical Example:
* **Claim:** "Stealing is always wrong."
* **Socratic Question:** "What if you steal medicine to save a dying child who can't afford it?"
* **Response:** "Well, maybe there are exceptions..."
* **Socratic Question:** "So stealing isn't *always* wrong. What determines when it's acceptable?"

This method doesn't provide answers—it forces *you* to think deeper.

## The Law of Non-Contradiction

One of the three classical laws of thought (along with the Law of Identity and the Law of Excluded Middle):

**"A statement cannot be both true and false at the same time and in the same sense."**

* You cannot be both 6 feet tall and 5 feet tall at the same moment.
* A light cannot be both on and off simultaneously (quantum mechanics aside).

This is the bedrock of rational thought. If we abandon this, all reasoning collapses.

## Logic in the Real World

### Law
Lawyers construct valid arguments to prove innocence or guilt. The entire legal system rests on logical principles like "innocent until proven guilty" (burden of proof).

### Computer Science
Code is pure logic. \`if (x > 10) { print("Hello") }\` is a logical statement. AI and machine learning are built on formal logic and probability.

### Science
The scientific method is applied logic: hypothesis (premise), experiment (test), conclusion. If experiments contradict the hypothesis, the hypothesis is rejected (modus tollens).

### Business
Consultants use logic trees to break down problems. "Our revenue is down. Is it because of fewer customers or lower prices? If fewer customers, is it marketing or product quality?"

## Exercises to Build Logical Thinking

1. **Identify the Premises:** Read a newspaper editorial. Highlight the premises and the conclusion. Are the premises true? Is the logic valid?

2. **Spot the Fallacy:** Watch a political debate. Count how many fallacies you can identify in 5 minutes.

3. **Construct a Syllogism:** Create your own valid argument using the classic structure (All A are B, C is A, therefore C is B).

4. **Play Devil's Advocate:** Take a position you believe strongly. Now argue the opposite side as convincingly as possible.

## The Paradoxes: Where Logic Gets Weird

### The Liar's Paradox
"This sentence is false."
* If it's true, then it's false.
* If it's false, then it's true.

### The Barber Paradox
A barber shaves all men who don't shave themselves. Who shaves the barber?
* If he shaves himself, he doesn't fit his rule.
* If he doesn't shave himself, he must shave himself.

These paradoxes reveal the limits of logical systems and led to breakthroughs in mathematics (Gödel's Incompleteness Theorems).

## Key Takeaway
Logic is not cold, robotic thinking. It is the **art and science of clear thought**. It's the difference between being persuaded by a charismatic speaker and being convinced by truth. Master logic, and you gain immunity to manipulation, clarity in confusion, and power in debate.

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

The human brain is evolution's most sophisticated pattern-recognition machine. This capability isn't just a neat trick—it's the reason our species survived. Our ancestors who could spot the pattern of rustling grass indicating a predator lived longer than those who couldn't. Today, this same mechanism helps us learn language, recognize faces, predict outcomes, and make sense of chaos.

![Abstract geometric pattern](https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80)

**Neuroscience Insight:** The brain's default mode is to seek patterns constantly. Your visual cortex processes patterns before you're even consciously aware of them. This is why optical illusions work—your brain "fills in" patterns that aren't really there.

## Why Patterns Matter

Pattern recognition is the foundation of:
* **Learning:** Recognizing spelling patterns helps you read new words.
* **Prediction:** Weather forecasting relies on atmospheric patterns.
* **Problem-Solving:** Debugging code means spotting patterns in errors.
* **Innovation:** Breakthroughs come from seeing patterns others miss.

## Types of Patterns: The Complete Taxonomy

### 1. Arithmetic Sequences (Linear Patterns)
The difference between consecutive terms is constant—we add or subtract the same amount each time.

**Structure:** \`a, a+d, a+2d, a+3d, ...\`

**Examples:**
* **Simple:** 2, 5, 8, 11, 14... (Common difference: +3)
* **Decreasing:** 100, 93, 86, 79... (Common difference: -7)
* **Practical:** Saving $50 every month: $50, $100, $150, $200...

**Formula:** The *nth* term = \`a + (n-1)d\`
* *Example:* What's the 100th term of 2, 5, 8, 11...?
* \`a = 2\`, \`d = 3\`, \`n = 100\`
* Result: \`2 + (100-1)×3 = 2 + 297 = 299\`

**Real-World Application:**
* **Depreciation:** A car loses $2,000 in value each year.
* **Salary:** Your salary increases by $3,000 annually.

### 2. Geometric Sequences (Exponential Patterns)
The ratio between consecutive terms is constant—we multiply by the same amount each time.

**Structure:** \`a, ar, ar², ar³, ...\`

**Examples:**
* **Doubling:** 3, 6, 12, 24, 48... (Common ratio: ×2)
* **Halving:** 64, 32, 16, 8, 4... (Common ratio: ×0.5)
* **Compound Interest:** $100, $110, $121, $133.10... (ratio: ×1.1)

**Formula:** The *nth* term = \`a × r^(n-1)\`
* *Example:* What's the 10th term of 3, 6, 12, 24...?
* \`a = 3\`, \`r = 2\`, \`n = 10\`
* Result: \`3 × 2^(10-1) = 3 × 512 = 1,536\`

**Real-World Application:**
* **Viral Growth:** Each person infects 2 others (exponential spread).
* **Technology:** Moore's Law—computer power doubles every 2 years.
* **Population:** Bacteria double every hour.

### 3. Quadratic Sequences
The *second* difference is constant.

**Example:** 1, 4, 9, 16, 25... (differences: 3, 5, 7, 9; second differences: 2, 2, 2)

**Recognition:** These are often squares: \`n²\` or involve quadratic formulas.

**Real-World:** The area of squares with side lengths 1, 2, 3, 4, 5...

### 4. Visual/Spatial Patterns
Used heavily in IQ tests and design. These require mental rotation, transformation, or symmetry detection.

**Types:**
* **Rotation:** A shape rotates 45° clockwise each step.
* **Reflection:** A shape mirrors across an axis.
* **Color Shifts:** Red, Blue, Green, Red, Blue, Green...
* **Progressive Addition:** A square gains one dot each step.

**Example:** 🔺 🔻 🔺 🔻 ? (Answer: 🔺)

**Professional Use:**
* **Architecture:** Tessellations and tile patterns.
* **Coding:** Recognizing UI/UX design patterns.

### 5. Alphabetical Patterns
Letters follow numerical positions (A=1, B=2, C=3...).

**Example:** A, C, E, G, I... (skipping one letter each time)
* **Pattern:** Odd-numbered letters.
* **Next:** K (11th letter).

**Advanced:** Mixing letters and numbers—A1, B2, C3, D4...

## The Fibonacci Sequence: Nature's Code

The Fibonacci sequence is one of the most famous patterns in mathematics, appearing everywhere from flower petals to galaxy spirals.

**Rule:** Each number is the sum of the two preceding ones.

**Sequence:** 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...

**Formula:** \`F(n) = F(n-1) + F(n-2)\`

### Where Fibonacci Appears:

1. **Botany:** The spiral arrangement of sunflower seeds follows Fibonacci numbers (34 spirals one way, 55 the other).
2. **Biology:** Rabbit population growth (the original problem Fibonacci studied in 1202).
3. **Art:** The Golden Ratio (φ ≈ 1.618), derived from Fibonacci, appears in the Parthenon and Da Vinci's paintings.
4. **Finance:** Fibonacci retracement levels are used in technical analysis of stock charts.
5. **Human Body:** Your finger bones have Fibonacci ratios.

**Mind-Blowing Fact:** Divide consecutive Fibonacci numbers (\`55÷34, 89÷55, 144÷89\`)—you get closer and closer to φ (the Golden Ratio).

## Pattern Recognition in Real Life

### 1. Financial Markets
Traders don't just guess—they spot patterns:

* **Head and Shoulders:** A peak (shoulder), higher peak (head), lower peak (shoulder)—indicates a price drop.
* **Double Bottom:** Price hits the same low twice—indicates a reversal upward.
* **Moving Averages:** Smoothing daily noise to see the trend.

**Example:** Bitcoin dropped from $20k to $3k in 2018. Pattern traders saw the "bear market bottom" pattern and bought. By 2021, it hit $60k.

### 2. Behavioral Patterns (Psychology)
Recognizing behavioral patterns helps you predict actions:

* **Example:** Your boss always asks for "quick updates" before announcing bad news. You recognize the pattern and prepare emotionally.
* **Relationships:** A partner who goes silent during stress is showing a predictable coping pattern.

### 3. Problem Solving (Debugging)
Software bugs often follow patterns:

* **Example:** Your app crashes every time the user enters a name with an apostrophe ("O'Brien"). Pattern spotted: input validation issue with special characters.

### 4. Weather Forecasting
Meteorologists study atmospheric patterns:

* **El Niño Pattern:** Warm Pacific waters = droughts in Australia, floods in South America.
* **Jet Stream Patterns:** Determines whether your winter is mild or brutal.

### 5. Medical Diagnosis
Doctors are pattern-recognition machines:

* **Example:** Fever + cough + loss of smell = COVID-19 pattern (2020-2021).
* **Example:** Chest pain radiating to the left arm = heart attack pattern.

## The Dark Side: Apophenia and Pareidolia

### Apophenia
The tendency to perceive **meaningful connections between unrelated things**. This is pattern recognition gone wrong.

**Examples:**
* **Conspiracy Theories:** Seeing intentional patterns in random events.
* **Gambler's Fallacy:** "Red came up 5 times in roulette, so black is 'due.'" (Each spin is independent; there's no pattern).
* **Superstition:** "I wore my lucky shirt and won the game, so the shirt caused the win."

### Pareidolia
A subset of apophenia—seeing faces or shapes in random stimuli.

**Examples:**
* Seeing Jesus on a piece of toast.
* Seeing a face in the Moon (the "Man in the Moon").
* Seeing animals in clouds.

**Why This Happens:** Evolution favored false positives ("That's probably a tiger in the bushes!") over false negatives ("That's probably not a tiger..." *gets eaten*).

### Critical Thinking Check:
**Ask:** "Is this a real pattern, or am I seeing a pattern because my brain *wants* to find one?"

**Test:** Can I predict the next outcome based on this pattern? If not, it's likely noise, not signal.

## Advanced Pattern Types

### Recursive Patterns
Patterns that reference themselves.

**Example:** Fractals—each part is a miniature version of the whole (Mandelbrot Set, coastlines, snowflakes).

### Alternating Patterns
**Example:** 2, 5, 3, 6, 4, 7, 5...
* **Pattern:** Two sub-patterns alternating (2, 3, 4, 5... and 5, 6, 7...).

### Combined Patterns
**Example:** 1, 1, 2, 3, 5, 8, 13... (Fibonacci) but now add +10 to each: 11, 11, 12, 13, 15, 18, 23...

## Exercises to Sharpen Pattern Recognition

1. **Number Sequences:** 
   * What's next? 2, 6, 12, 20, 30, ? (Answer: 42. Pattern: \`n(n+1)\`).

2. **Visual Puzzles:**
   * Complete the pattern: ■ □ ■ □ ■ ? (Answer: □).

3. **Real-World Observation:**
   * Track your mood for 30 days. Do you see patterns? (e.g., Mondays are always low energy).

4. **Predictive Challenge:**
   * Watch the first 3 episodes of a TV show. Can you predict the plot twist based on storytelling patterns?

5. **Data Analysis:**
   * Graph your monthly expenses. Do you see spending patterns? (e.g., high spending in December).

## The Mathematician's Secret: Induction

Once you spot a pattern, you can use **mathematical induction** to prove it's true for all cases.

**Example Pattern:** Sum of first *n* odd numbers = \`n²\`
* 1 = 1² (true for n=1)
* 1+3 = 4 = 2² (true for n=2)
* 1+3+5 = 9 = 3² (true for n=3)

**Proof:** If true for n, prove it's true for n+1. (This is beyond the scope, but knowing it exists is powerful.)

## Key Takeaway
Patterns are the universe's way of being predictable. To see the future, you must accurately decode the past. But remember: not all patterns are meaningful, and not all meaningful things follow patterns. The skill is knowing the difference.

> "In mathematics, you don't understand things. You just get used to them." - John von Neumann
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

## Top-Down Logic: From Universal to Specific

Deductive reasoning is the Sherlock Holmes of logic—starting with general principles and drilling down to inevitable conclusions. Unlike inductive reasoning (which we'll explore next), deduction provides **certainty**, not merely probability. When executed correctly, deductive arguments are ironclad: if the premises are true, the conclusion *cannot* be false.

![Magnifying glass on text](https://images.unsplash.com/photo-1453733190371-0a9bedd82893?w=800&q=80)

**Think of it this way:**
* **Deduction:** All birds have feathers → This is a bird → Therefore, this has feathers.
* **Induction:** This bird has feathers, that bird has feathers → Therefore, all birds have feathers.

Deduction moves from the **general rule** to the **specific case**. It's the foundation of mathematics, formal logic, and computer programming.

## The Architecture of Deduction: The Syllogism

The syllogism is the classical three-part structure invented by Aristotle. It's been the backbone of logical reasoning for 2,300 years.

### Structure:
1.  **Major Premise (Universal Rule):** All A are B.
2.  **Minor Premise (Specific Case):** C is A.
3.  **Conclusion (Necessary Result):** Therefore, C is B.

### Example 1: Legal Reasoning
* **Rule:** To drive legally in this state, you must be 16 or older.
* **Case:** John is 14.
* **Conclusion:** Therefore, John cannot drive legally.

**Why this matters:** The conclusion is 100% certain. There's no wiggle room. This is why legal systems rely heavily on deductive logic.

### Example 2: Everyday Life
* **Rule:** If the store is closed, I can't buy milk.
* **Case:** The store is closed.
* **Conclusion:** Therefore, I can't buy milk.

### Example 3: Software Logic
\`\`\`python
if age >= 18:
    print("You can vote")
\`\`\`
* **Rule:** If age ≥ 18, voting is allowed.
* **Case:** Age = 19.
* **Conclusion:** "You can vote" will print. (Guaranteed).

## The Two Pillars: Validity and Soundness (Revisited)

### Validity = Correct Structure
A deductive argument is **valid** if the *form* is correct—if the premises were true, the conclusion would logically follow.

**Valid but Absurd:**
* Major Premise: All unicorns can fly.
* Minor Premise: Steve is a unicorn.
* Conclusion: Therefore, Steve can fly.

**Analysis:** The logic is perfect. The problem? The premises are false. But the *structure* is impeccable.

### Soundness = Validity + True Premises
A deductive argument is **sound** if:
1.  The argument is **valid** (correct structure).
2.  ALL premises are **actually true** (factually accurate).

**Sound Example:**
* Major Premise: All mammals are warm-blooded. (True)
* Minor Premise: A dog is a mammal. (True)
* Conclusion: Therefore, a dog is warm-blooded. (Guaranteed true)

**Application:** In court, lawyers construct valid arguments. But juries must determine if the premises (evidence) are sound (true). "If the glove doesn't fit, you must acquit" is a valid structure, but is the premise sound? That's the debate.

## Modes of Deductive Inference: The Logical Toolbox

### 1. Modus Ponens (Affirming the Antecedent)
**Structure:**
* If P, then Q.
* P is true.
* Therefore, Q.

**Example:**
* If you study hard, you will pass the exam.
* You studied hard.
* Therefore, you will pass the exam.

**Real-World:** This is how algorithms work. \`if (button_clicked) { open_menu() }\`. Button clicked? Menu opens. Guaranteed.

### 2. Modus Tollens (Denying the Consequent)
**Structure:**
* If P, then Q.
* Q is false.
* Therefore, P is false.

**Example:**
* If the alarm is working, it would have sounded.
* The alarm didn't sound.
* Therefore, the alarm is not working.

**Real-World:** Doctors use this constantly. "If the patient had malaria, they'd have a fever. No fever? Not malaria."

### 3. Hypothetical Syllogism (Chain of Reasoning)
**Structure:**
* If P, then Q.
* If Q, then R.
* Therefore, if P, then R.

**Example:**
* If it rains, the streets get wet.
* If the streets are wet, driving is dangerous.
* Therefore, if it rains, driving is dangerous.

**Real-World:** This is how you build arguments with multiple steps. Each conclusion becomes the next premise.

### 4. Disjunctive Syllogism (Elimination)
**Structure:**
* Either P or Q.
* Not P.
* Therefore, Q.

**Example:**
* The light is either on or off.
* The light is not on.
* Therefore, the light is off.

**Real-World:** Elimination in multiple-choice tests. "It's not A, B, or C. Therefore, it must be D."

## Common Deductive Errors: Where Smart People Go Wrong

### Fallacy #1: Affirming the Consequent
**Bad Structure:**
* If P, then Q.
* Q is true.
* Therefore, P is true. ❌

**Example:**
* If it's raining, the street is wet.
* The street is wet.
* Therefore, it's raining. ❌

**Why it fails:** The street could be wet because a fire hydrant burst, someone washed their car, or a water pipe broke. Wet street doesn't prove rain.

**Real-World Trap:** "If you're smart, you'll get good grades. You got good grades. Therefore, you're smart." (Maybe you just memorized well, cheated, or had easy classes.)

### Fallacy #2: Denying the Antecedent
**Bad Structure:**
* If P, then Q.
* P is false.
* Therefore, Q is false. ❌

**Example:**
* If I study hard, I will pass.
* I did not study hard.
* Therefore, I will fail. ❌

**Why it fails:** You might pass anyway (the test was easy, you already knew the material, or you got lucky).

**Real-World Trap:** "If you go to college, you'll be successful. You didn't go to college. Therefore, you won't be successful." (Tell that to Bill Gates and Mark Zuckerberg.)

## Deduction in Action: Real-World Applications

### Mathematics
Math is **pure deduction**. Every theorem is proven using deductive steps from axioms.

**Example:**
* Axiom: \`a + b = b + a\` (Commutative Property)
* Case: \`3 + 5\`
* Conclusion: \`3 + 5 = 5 + 3 = 8\` (Certain, not probable)

### Computer Science & Programming
Code executes deductively. There's no "maybe"—only true or false, 1 or 0.

\`\`\`javascript
if (temperature > 100) {
  alert("Water is boiling!");
}
\`\`\`

If temperature is 101, the alert **must** fire. That's deduction.

### Legal Reasoning
Lawyers use deductive chains to prove cases.

**Example (Criminal Law):**
* **Law:** Murder = unlawful killing + malice aforethought.
* **Evidence:** Defendant killed victim unlawfully.
* **Evidence:** Defendant planned the act (malice).
* **Conclusion:** Therefore, defendant is guilty of murder.

### Medical Diagnosis (Differential Diagnosis)
Doctors eliminate possibilities deductively.

**Example:**
* Symptom: Chest pain.
* **If heart attack, then elevated troponin levels.**
* Test shows normal troponin.
* **Conclusion:** Not a heart attack. (Modus Tollens).

### Philosophical Proofs
**Descartes' Famous Argument:**
* I think.
* Therefore, I exist. (*Cogito, ergo sum*)

**Structure:**
* To doubt, I must think.
* I am doubting (thinking).
* Therefore, I exist. (Cannot doubt my existence while doubting.)

## The Limits of Deduction

### Garbage In, Garbage Out
Deduction is only as good as your premises. If you start with false assumptions, your conclusion will be false—even if the logic is perfect.

**Example:**
* All politicians are corrupt. (False premise)
* Senator X is a politician.
* Therefore, Senator X is corrupt. (False conclusion, despite valid structure)

### Cannot Create New Knowledge
Deduction **rearranges** what we already know. It doesn't discover new facts. That's the job of induction and the scientific method.

**Example:** You can't deduce the boiling point of water. You have to measure it (induction), then use that fact in future deductions.

## Sherlock Holmes: Deduction or Abduction?

Despite his famous line, "Elementary, my dear Watson," Sherlock Holmes doesn't actually use *deduction* most of the time. He uses **abduction** (inference to the best explanation).

**Example:**
* **Observation:** Mud on boots + specific type of clay.
* **Holmes:** "You were at Blackheath." 

**Analysis:** This isn't strictly deductive. There could be other places with that clay. Holmes is making a *probable* guess, not a certain conclusion. That's abductive reasoning.

**True Deduction Example:**
* **Rule:** Only members of the Reform Club have this specific cigar ash.
* **Case:** The victim has this ash on their jacket.
* **Conclusion:** The victim met a member of the Reform Club. (Certain, given the rule is true.)

## Exercises to Sharpen Deductive Reasoning

1. **Build a Syllogism:**
   * Create a valid syllogism about your morning routine.
   * Example: All coffee makes me alert. I drank coffee. Therefore, I am alert.

2. **Identify the Fallacy:**
   * "If you love me, you'll buy me flowers. You bought me flowers. Therefore, you love me."
   * (Affirming the consequent—maybe they just felt guilty!)

3. **Code Logic:**
   * Write an \`if-else\` statement in pseudocode for a decision you make daily.

4. **Spot the Error:**
   * "All dogs bark. This animal doesn't bark. Therefore, it's not a dog."
   * (Is the major premise true? Basenjis don't bark!)

5. **Chain of Reasoning:**
   * Build a 5-step hypothetical syllogism.
   * Example: If I wake up early → I'll exercise → I'll feel energized → I'll be productive → I'll finish my project → I'll get promoted.

## The Power of Deductive Certainty

In a world full of uncertainty, deduction offers something rare: **absolute confidence** in conclusions (when premises are sound). This is why:
* Mathematicians can prove theorems that remain true forever.
* Programmers can guarantee specific outcomes.
* Lawyers can demonstrate guilt beyond reasonable doubt.

Master deduction, and you gain the power to construct bulletproof arguments that no one can refute—provided your premises are ironclad.

## Key Takeaway
Deduction is the engine of **proof**. It allows us to apply universal rules to specific situations with absolute confidence—provided our starting rules are correct. It's the difference between "probably true" and "necessarily true."

> "Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth." - Arthur Conan Doyle

(Ironically, this quote describes abduction, not deduction. But it's still brilliant!)
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