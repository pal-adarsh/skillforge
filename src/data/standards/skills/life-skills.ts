import { Standard } from "../types";

export const lifeSkillsCategory: Standard = {
  id: "life-skills",
  name: "Life Skills",
  displayName: "Life Skills & Daily Independence",
  description: "Essential skills for everyday living and self-reliance",
  color: "bg-amber-500",
  subjects: [
    {
      id: "ls-personal-care",
      name: "Personal Care",
      icon: "Heart",
      color: "text-amber-500",
      lessonIds: ["ls-hygiene-routine", "ls-grooming-basics", "ls-healthy-habits", "ls-sleep-hygiene"]
    },
    {
      id: "ls-home-management",
      name: "Home Management",
      icon: "Home",
      color: "text-orange-500",
      lessonIds: ["ls-organizing-space", "ls-basic-cleaning", "ls-laundry-basics", "ls-home-safety"]
    },
    {
      id: "ls-money-management",
      name: "Money Management",
      icon: "Wallet",
      color: "text-green-500",
      lessonIds: ["ls-understanding-money", "ls-budgeting-basics", "ls-saving-habits", "ls-smart-spending"]
    },
    {
      id: "ls-time-management",
      name: "Time Management",
      icon: "Clock",
      color: "text-blue-500",
      lessonIds: ["ls-planning-day", "ls-setting-priorities", "ls-avoiding-procrastination", "ls-creating-routines"]
    }
  ]
};

export const lifeSkillsLessons = [
  // ==================================================================================
  // PERSONAL CARE
  // ==================================================================================
  { 
    id: "ls-hygiene-routine", 
    title: "Building a Hygiene Routine", 
    description: "Create daily habits for personal cleanliness", 
    category: "Life Skills", 
    difficulty: "Beginner" as const, 
    duration: "15 min", 
    points: 100,
    image: "https://images.unsplash.com/photo-1556228578-8d85e78a8d56?w=800",
    tags: ["hygiene", "health", "daily-routine"],
    content: `
# Building a Hygiene Routine

## Why a Routine Matters

Hygiene is not just about appearance—it is about health, confidence, and self-respect. A good hygiene routine protects you from infections, improves how others perceive you, and makes you feel mentally fresh.

When hygiene becomes a routine, you don’t rely on motivation. You rely on habit. This is especially important during busy or stressful days.

A consistent routine:
- Reduces body odor and skin problems
- Prevents illness and infections
- Improves confidence in social and professional settings
- Builds discipline and self-care awareness

## The "Morning 5" Checklist

These five steps form the foundation of daily hygiene. Do them **every single morning**, no matter how busy you are.

1. **Oral Care**
   - Brush for at least 2 minutes
   - Floss to remove trapped food
   - Use mouthwash if available  
   *Why it matters:* Prevents cavities, bad breath, and gum disease.

2. **Face Wash**
   - Use water or a mild face cleanser
   - Removes sweat, oil, and bacteria from the night  
   *Example:* Skipping face wash often leads to acne and dull skin.

3. **Shower**
   - Clean the entire body
   - Focus on “hot zones”: underarms, groin, feet, behind ears  
   *Tip:* Use soap daily, especially in warm climates.

4. **Deodorant**
   - Apply immediately after drying off
   - Works best on clean skin  
   *Note:* Deodorant prevents odor; it does not replace bathing.

5. **Clean Clothes**
   - Fresh underwear and socks daily
   - Avoid re-wearing sweaty clothes  
   *Rule:* If it smells even slightly—don’t wear it.

## The Evening Wind-Down

Night hygiene prepares your body for rest and recovery.

- **Second Tooth Brushing:** Removes food residue and protects enamel overnight  
- **Face Wash:** Removes pollution, oil, and sweat from the day  
- **Optional Shower:** Necessary after workouts, travel, or heavy sweating

Evening hygiene improves skin health and sleep quality.

## Hygiene “On the Go”

Carry a small hygiene kit, especially for long days.

Suggested items:
- Hand sanitizer
- Tissues
- Breath mints
- Lip balm

These small tools prevent discomfort and embarrassment.

## Key Takeaway

Hygiene is self-discipline in action. Small daily habits protect your health and boost confidence automatically.

> "Take care of your body. It's the only place you have to live." — Jim Rohn
 `
  },
  { 
    id: "ls-grooming-basics", 
    title: "Grooming Essentials", 
    description: "Learn the basics of personal grooming and presentation", 
    category: "Life Skills", 
    difficulty: "Beginner" as const, 
    duration: "15 min", 
    points: 100,
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=800",
    tags: ["grooming", "style", "presentation"],
    content: `
# Grooming Essentials

## Presentation Is Respect

Grooming is not about fashion or luxury—it is about maintenance. Clean, well-kept grooming shows that you value yourself and respect the people around you.

Good grooming:
- Improves first impressions
- Signals professionalism
- Boosts self-confidence
- Requires consistency, not money

## Hair Care Basics

### Washing
Hair type matters:
- Oily hair → wash more frequently
- Dry or curly hair → wash every 2–3 days

Over-washing can cause dryness; under-washing causes odor.

### Haircuts
- Get trimmed every 4–6 weeks
- Keeps hair healthy and manageable
- Prevents split ends and uneven growth

## Nail Care

Hands communicate cleanliness instantly.

- Trim fingernails weekly
- Clean under nails
- Trim toenails straight (prevents ingrown nails)

Dirty nails are one of the fastest ways to create a bad impression.

## Scent Management

Golden Rule: **Scent should be discovered, not announced.**

- Use 1–2 sprays of perfume or cologne
- Apply on pulse points (neck, wrist)
- Never use fragrance to hide body odor—clean first

## Clothing Check (30-Second Rule)

Before leaving:
- Check for stains
- Smell test
- Remove wrinkles
- Ensure proper fit

Clean clothes matter more than expensive clothes.

## Key Takeaway

Grooming is daily maintenance. Attention to small details creates a big impact.

> "Style is a way to say who you are without having to speak." — Rachel Zoe
 `
  },
  { 
    id: "ls-healthy-habits", 
    title: "Developing Healthy Habits", 
    description: "Build habits that support your physical well-being", 
    category: "Life Skills", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120,
    image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=800",
    tags: ["health", "fitness", "nutrition"],
    content: `
# Developing Healthy Habits

## Proactive Maintenance

Your body works every day without complaint—until it breaks down. Healthy habits are not about perfection; they are about prevention.

Consistent habits help you:
- Maintain energy
- Improve immunity
- Reduce long-term health risks

## Hydration

Water is essential for:
- Brain function
- Digestion
- Temperature regulation

### Daily Goal
- 2–3 liters per day
- More in hot weather or during exercise

**Tip:** Carry a bottle. Thirst means dehydration has already started.

## Movement: NEAT vs Exercise

### NEAT (Non-Exercise Activity)
- Walking
- Standing
- Using stairs
- Household chores

These movements burn calories and improve circulation.

### Exercise
- Aim for 30 minutes daily
- Walking, cycling, yoga, sports

Movement keeps joints healthy and reduces stress.

## Nutrition Basics: The Plate Method

Visual guide for balanced meals:
- 50% vegetables & fruits
- 25% protein (eggs, beans, chicken, tofu)
- 25% whole grains (rice, roti, oats)

### Sugar Warning
Liquid sugar (soft drinks, energy drinks) causes:
- Energy crashes
- Fat gain
- Poor focus

## Key Takeaway

Health is built through small daily decisions—not extreme routines.

> "The first wealth is health." — Ralph Waldo Emerson
 `
  },
  { 
    id: "ls-sleep-hygiene", 
    title: "Better Sleep Habits", 
    description: "Learn how to improve your sleep quality", 
    category: "Life Skills", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120,
    image: "https://images.unsplash.com/photo-1541781777621-af13943727dd?w=800",
    tags: ["sleep", "recovery", "health"],
    content: `
# Better Sleep Habits (Sleep Hygiene)

## Why Sleep Matters

Sleep is when your body repairs and your brain resets. Poor sleep affects:
- Focus
- Mood
- Memory
- Immunity

Chronic sleep loss slowly damages physical and mental health.

## The 3-2-1 Rule

Simple countdown for better sleep:

- **3 Hours Before Bed:** Stop heavy meals
- **2 Hours Before Bed:** Stop work and studying
- **1 Hour Before Bed:** No screens (phones, laptops)

Blue light blocks melatonin—the sleep hormone.

## Optimizing Your Environment

- **Temperature:** Cool room (18–20°C)
- **Darkness:** Blackout curtains or eye mask
- **Noise:** Fan, white noise, or earplugs

Your bedroom should signal **sleep**, not stimulation.

## Consistency Is King

- Sleep and wake at the same time daily
- Even on weekends
- Builds a strong circadian rhythm

Irregular sleep confuses your body clock.

## Key Takeaway

Sleep is not laziness—it is recovery. Treat it as a non-negotiable health habit.

> "Sleep is the golden chain that ties health and our bodies together." — Thomas Dekker
 `
  },

  // ==================================================================================
  // HOME MANAGEMENT
  // ==================================================================================
  { 
    id: "ls-organizing-space", 
    title: "Organizing Your Space", 
    description: "Tips for keeping your room and belongings organized", 
    category: "Life Skills", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120,
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800",
    tags: ["organization", "cleaning", "minimalism"],
    content: `
# Organizing Your Space

## Clear Space, Clear Mind

Your surroundings directly affect your focus, mood, and energy. A cluttered room often leads to distraction, stress, and procrastination. An organized space, on the other hand, makes daily life smoother and calmer.

Organization is not about perfection or expensive storage—it’s about creating systems that work for *you*.

![Organized desk](https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80)

## The Golden Rule: Everything Has a Home

Every item must have a fixed place:
- Keys → key holder or bowl
- Books → shelf
- Clothes → wardrobe
- Bags → hook or rack

If something has no home, it will always end up on the floor, bed, or chair—and become clutter.

**Example:**  
If you always lose your charger, it’s not carelessness—it’s lack of a fixed spot.

## The "One Touch" Rule

Handle things once, not multiple times.

- Coat → hang it immediately
- Shoes → place in shoe rack
- Keys → drop in key bowl
- Bag → hang on hook

Avoid the “I’ll do it later” trap. Later becomes never.

## The Decluttering Method (Monthly Reset)

Once a month, review your belongings honestly.

| Category | Action |
|--------|--------|
| **Keep** | Used in last 6 months |
| **Donate/Sell** | Useful but unused |
| **Trash** | Broken, expired, unusable |

Decluttering reduces cleaning time and decision fatigue.

## Key Takeaway

Organization is a daily habit, not a weekend project.  
Five seconds of putting things back saves minutes of searching later.

> "For every minute spent organizing, an hour is earned." — Benjamin Franklin
`
  },
  { 
    id: "ls-basic-cleaning", 
    title: "Basic Cleaning Skills", 
    description: "Essential cleaning techniques for a tidy space", 
    category: "Life Skills", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120,
    image: "https://images.unsplash.com/photo-1581578731117-10d52b43c12c?w=800",
    tags: ["cleaning", "chores", "maintenance"],
    content: `
# Basic Cleaning Skills

## Maintenance vs. Deep Cleaning

Cleaning feels overwhelming only when it’s delayed. Small, regular cleaning keeps your home manageable and hygienic.

Think of cleaning as **maintenance**, not punishment.

![Cleaning supplies](https://images.unsplash.com/photo-1581578731117-10d52b43c12c?w=800&q=80)

## Daily Maintenance (10 Minutes)

These habits prevent mess buildup:

- **Dishes:** Wash immediately after meals
- **Surfaces:** Wipe kitchen counters and tables
- **Bed:** Make your bed every morning

Making your bed creates instant order and sets a positive tone for the day.

## The Weekly Reset (45 Minutes)

Once a week, reset your space:

1. **Dusting**
   - Go top to bottom (fans → shelves → floor)

2. **Floors**
   - Vacuum carpets
   - Sweep and mop hard floors

3. **Bathroom**
   - Scrub toilet
   - Clean sink & mirror
   - Rinse shower area

4. **Trash**
   - Empty all bins
   - Replace liners

## Essential Cleaning Tools

You don’t need many products:
- All-purpose cleaner
- Microfiber cloths
- Broom & dustpan
- Mop
- Toilet brush

Simple tools + consistency = clean home.

## Key Takeaway

A clean space reduces stress, improves focus, and makes rest truly restful.

> "Cleanliness is next to godliness." — Proverb
 `
  },
  { 
    id: "ls-laundry-basics", 
    title: "Laundry 101", 
    description: "Learn to wash, dry, and care for your clothes", 
    category: "Life Skills", 
    difficulty: "Beginner" as const, 
    duration: "25 min", 
    points: 140,
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800",
    tags: ["laundry", "clothing", "chores"],
    content: `
# Laundry 101

## Preserving Your Clothes

Laundry is not just washing—it’s clothing care. Wrong habits lead to shrinking, fading, and damaged fabric.

Good laundry habits save money and keep clothes looking new longer.

![Laundry basket and machine](https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80)

## Step 1: Sorting (Most Important)

Never mix everything.

- **Whites/Lights:** Warm water
- **Darks/Colors:** Cold water
- **Towels & Bedsheets:** Separate (lint producers)
- **Delicates:** Gentle cycle or hand wash

**Example:**  
One red shirt can turn all whites pink.

## Step 2: Reading Labels

Clothing labels are instruction manuals.

- 🟦 Square + circle → Tumble dry allowed
- ✋ Bucket with hand → Hand wash only
- ❌ Triangle → No bleach
- • One dot → Low heat
- ••• Three dots → High heat

Ignoring labels shortens clothing life.

## Step 3: The Process

1. **Pre-treat stains immediately**
2. **Do not overload machine**
3. **Clean dryer lint filter every time** (fire safety)
4. **Fold immediately after drying**

Laundry isn’t done until it’s put away.

## Key Takeaway

Clothing care is self-respect.  
Clean, well-maintained clothes improve confidence instantly.

> "Sorting laundry is a metaphor for life. Separate the darks from the lights."
 `
  },
  { 
    id: "ls-home-safety", 
    title: "Home Safety Basics", 
    description: "Important safety practices for the home", 
    category: "Life Skills", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120,
    image: "https://images.unsplash.com/photo-1558036117-15db5275252b?w=800",
    tags: ["safety", "emergency", "preparedness"],
    content: `
# Home Safety Basics

## Being Prepared

Emergencies don’t give warnings. Preparation reduces panic and damage.

Safety habits turn accidents into manageable situations.

![Fire extinguisher](https://images.unsplash.com/photo-1558036117-15db5275252b?w=800&q=80)

## Fire Safety

- **Smoke Detectors:** Test every 6 months
- **Kitchen Rule:** Never throw water on oil fires
- **Safer Option:** Cover with metal lid or use baking soda
- **Exit Plan:** Know two exit routes from your home

Fire safety knowledge saves lives.

## Security Habits

- Lock doors and windows at night
- Don’t hide spare keys in obvious places
- Give extra keys to trusted people only

Simple habits prevent major losses.

## The Emergency Kit

Keep an accessible kit with:
- Flashlight & batteries
- First aid supplies
- Bottled water
- Emergency contact numbers on paper

Phones can die—paper doesn’t.

## Key Takeaway

Safety is responsibility, not fear.  
Prepared homes protect lives and peace of mind.

> "Better safe than sorry."
 `
  },

  // ==================================================================================
  // MONEY MANAGEMENT
  // ==================================================================================
  { 
    id: "ls-understanding-money", 
    title: "Understanding Money", 
    description: "Learn the basics of currency and financial concepts", 
    category: "Life Skills", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
    tags: ["money", "finance", "economics"],
    content: `
# Understanding Money

## The Flow of Money

Money is not just something you earn—it is something you manage. Financial literacy means understanding where money comes from, where it goes, and how to control that flow instead of letting it control you.

When you understand money, you:
- Make better daily decisions
- Reduce financial stress
- Feel more confident about the future

![Calculator and money](https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80)

## Key Concepts

Understanding these basics is essential:

### Income
Money that comes **into** your life.
- Salary
- Allowance
- Freelancing
- Side hustles

### Fixed Expenses
Costs that stay mostly the same every month.
- Rent
- Internet
- Phone bills
- Subscriptions

### Variable Expenses
Costs that change month to month.
- Food
- Travel
- Entertainment
- Shopping

Knowing the difference helps you control spending.

## Needs vs. Wants

This is the foundation of smart money behavior.

### Needs
Essential for survival, health, or work.
- Groceries
- Electricity
- Transport
- Basic clothing

### Wants
Improve comfort, fun, or status.
- Eating out
- Brand clothes
- Gaming subscriptions
- Latest gadgets

**Rule:**  
Needs come first. Wants come *after* savings.

## Assets vs. Liabilities

This mindset changes how you view purchases.

- **Asset:** Puts money into your pocket or grows value  
  (Savings, investments, skills)
- **Liability:** Takes money out regularly  
  (Loans, credit card debt, unnecessary EMI)

Ask before buying:  
“Will this help my future—or drain it?”

## Key Takeaway

Wealth is not income—it’s control.

> "Do not save what is left after spending, but spend what is left after saving." — Warren Buffett
`
  },
  { 
    id: "ls-budgeting-basics", 
    title: "Budgeting for Beginners", 
    description: "Create and manage a simple budget", 
    category: "Life Skills", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150,
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800",
    tags: ["budgeting", "planning", "finance"],
    content: `
# Budgeting for Beginners

## Giving Every Dollar a Job

A budget is not punishment—it’s permission.  
It allows you to enjoy money *without guilt* because you know your responsibilities are handled.

![Budget planner](https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80)

## The 50/30/20 Rule

A beginner-friendly structure:

- **50% Needs**
  Rent, food, transport, utilities

- **30% Wants**
  Entertainment, eating out, hobbies

- **20% Savings**
  Emergency fund, goals, future plans

If income is low, even **5–10% savings** is a strong start.

## Zero-Based Budgeting

Formula:
**Income – Expenses = 0**

Every rupee/dollar is assigned:
- Bills
- Food
- Savings
- Fun
- Debt

Nothing is “unplanned.”

**Example:**  
If you have $1,000 income, all $1,000 must be assigned a purpose.

## Tracking Your Spending

Awareness creates control.

Ways to track:
- Budget apps
- Notes app
- Simple notebook

Review weekly.
Small expenses (coffee, snacks, delivery fees) leak money fastest.

## Key Takeaway

A budget gives freedom, not limits.

> "A budget is telling your money where to go instead of wondering where it went." — Dave Ramsey
 `
  },
  { 
    id: "ls-saving-habits", 
    title: "Building Saving Habits", 
    description: "Learn the importance of saving and how to start", 
    category: "Life Skills", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120,
    image: "https://images.unsplash.com/photo-1565514020176-db79339e6a5d?w=800",
    tags: ["saving", "future", "finance"],
    content: `
# Building Saving Habits

## Pay Yourself First

Savings should not depend on leftovers.

The moment you receive money:
1. Transfer a portion to savings
2. Spend what remains

This turns saving into a habit, not a struggle.

![Piggy bank](https://images.unsplash.com/photo-1565514020176-db79339e6a5d?w=800&q=80)

## The Emergency Fund

This is your financial safety net.

### Goal
Save $500–$1,000 initially.

### Used For
- Medical emergencies
- Phone repair
- Urgent travel

### Not For
- Shopping
- Parties
- Entertainment

Emergency savings reduce panic and debt.

## Goal-Based Saving

Saving feels easier when it has meaning.

- **Short-term:** Headphones, phone
- **Medium-term:** Laptop, vacation
- **Long-term:** Car, home, retirement

Name your savings goals.

## The Power of Compound Interest

Time matters more than amount.

- Saving early = money grows longer
- Delaying saving = losing free growth

Even small monthly savings become powerful over time.

## Key Takeaway

Saving is a mindset, not an amount.  
Consistency beats size.

> "It's not about how much money you make, but how much money you keep."
 `
  },
  { 
    id: "ls-smart-spending", 
    title: "Smart Spending Decisions", 
    description: "Make informed choices about purchases", 
    category: "Life Skills", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150,
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    tags: ["shopping", "decisions", "value"],
    content: `
# Smart Spending Decisions

## Value > Price

Smart spending means choosing long-term value, not short-term excitement.

Cheap items that break fast are expensive in the long run.

![Shopping bags](https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80)

## The 24-Hour Rule

For non-essential purchases:
1. Pause for 24 hours
2. Re-evaluate tomorrow
3. Most impulse desires fade

This rule protects your wallet from emotions.

## Cost Per Use (CPU)

Calculate real value.

- $100 jacket worn 100 times → $1 per use
- $20 shirt worn once → $20 per use

Choose purchases that serve you longer.

## Comparison Shopping

Before buying:
- Compare 2–3 options
- Check reviews
- Look for discounts
- Wait for seasonal sales

Patience saves money.

## Key Takeaway

Pause before you pay.  
Emotion spends. Logic saves.

> "Too many people spend money they haven't earned, to buy things they don't want, to impress people they don't like." — Will Rogers
 `
  },

  // ==================================================================================
  // TIME MANAGEMENT
  // ==================================================================================
  { 
    id: "ls-planning-day", 
    title: "Planning Your Day", 
    description: "Learn to structure your day effectively", 
    category: "Life Skills", 
    difficulty: "Beginner" as const, 
    duration: "15 min", 
    points: 100,
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800",
    tags: ["planning", "productivity", "schedule"],
    content: `
# Planning Your Day

## Intentional vs. Reactive

There are two ways to live a day:
- **Reactive:** Responding to messages, calls, and demands as they appear.
- **Intentional:** Deciding in advance what deserves your time.

Reactive days feel busy but unfulfilling. Intentional days feel calm and productive.

![Planner and coffee](https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80)

## The "Night Before" Technique

Spend just **5 minutes each evening** planning tomorrow.

Why it works:
- Reduces morning stress
- Prevents decision fatigue
- Improves sleep (your brain feels prepared)

Write only **3–5 important tasks**, not a long wishlist.

## Time Blocking

To-do lists show *what* to do.  
Time blocks show *when* to do it.

Example:
- **9:00–10:00:** Study / Deep Work
- **10:00–10:15:** Break
- **10:15–11:15:** Assignment

Time blocking prevents tasks from floating endlessly.

## Eat the Frog

Your hardest task should be done **first**.

Why?
- Energy is highest in the morning
- Anxiety disappears once it’s done
- Everything else feels easier afterward

If you don’t eat the frog, it eats your focus all day.

## Key Takeaway

A plan is not a prison—it’s a guide.  
You can change it, but having one keeps you in control.

> "By failing to prepare, you are preparing to fail." — Benjamin Franklin
 `
  },
  { 
    id: "ls-setting-priorities", 
    title: "Setting Priorities", 
    description: "Identify what's most important and focus on it", 
    category: "Life Skills", 
    difficulty: "Intermediate" as const, 
    duration: "20 min", 
    points: 130,
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
    tags: ["priorities", "focus", "goals"],
    content: `
# Setting Priorities

## Busy vs. Productive

Being busy means doing many things.  
Being productive means doing the **right** things.

Activity does not equal progress.

![Checklist](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80)

## The Eisenhower Matrix

Sort tasks into four categories:

1. **Do First (Urgent + Important)**
   - Deadlines
   - Emergencies

2. **Schedule (Important, Not Urgent)**
   - Exercise
   - Learning
   - Long-term goals  
   *This is where growth happens.*

3. **Delegate (Urgent, Not Important)**
   - Interruptions
   - Some emails

4. **Delete (Not Urgent, Not Important)**
   - Endless scrolling
   - Low-value distractions

Most people live in Urgent. Successful people invest in Important.

## The 80/20 Rule (Pareto Principle)

A small number of actions create most results.

Example:
- 20% of study topics → 80% of exam marks
- 20% of habits → 80% of life quality

Identify and protect that top 20%.

## Key Takeaway

Time is limited. Priorities decide your future.

> "The main thing is to keep the main thing the main thing." — Stephen Covey
  `
  },
  { 
    id: "ls-avoiding-procrastination", 
    title: "Beating Procrastination", 
    description: "Strategies to stop putting things off", 
    category: "Life Skills", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150,
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800",
    tags: ["procrastination", "motivation", "action"],
    content: `
# Beating Procrastination

## Understanding Friction

Procrastination is not laziness.  
It is avoidance of discomfort—boredom, fear, confusion, or overwhelm.

The brain chooses short-term comfort over long-term benefit.

![Clock and stress](https://images.unsplash.com/photo-1506784926709-22f1ec395907?w=800&q=80)

## The 5-Minute Rule

Tell yourself:
"I will do this for just 5 minutes."

Why it works:
- Starting is the hardest part
- Momentum builds naturally
- Motivation follows action

Most tasks continue once started.

## Break It Down

Large tasks create resistance.

Instead of:
- “Study for exams”

Break into:
- Open notebook
- Read one page
- Solve one question

Small wins remove fear.

## Remove Friction

Make good behavior easier:
- Phone in another room
- Clean desk
- Tools ready before starting

Increase friction for bad habits:
- Log out of social apps
- Keep phone charger far away

## Key Takeaway

You don’t need motivation to start.  
You need to start to get motivation.

> "Someday is not a day of the week."
 `
  },
  { 
    id: "ls-creating-routines", 
    title: "Creating Effective Routines", 
    description: "Build routines that support your goals", 
    category: "Life Skills", 
    difficulty: "Intermediate" as const, 
    duration: "20 min", 
    points: 130,
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
    tags: ["habits", "routine", "discipline"],
    content: `
# Creating Effective Routines

## Automating Success

Willpower runs out. Routines don’t.

When behavior becomes routine, it no longer requires motivation. That’s how real progress is made.

![Morning coffee routine](https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80)

## Habit Stacking

Attach new habits to existing ones.

Formula:
After I [Existing Habit], I will [New Habit].

Examples:
- After brushing teeth → stretch for 1 minute
- After morning tea → plan the day
- After dinner → review expenses

Small habits grow naturally.

## The Morning Routine

A simple, powerful structure:
1. Drink water
2. Move body (stretch or walk)
3. Review today’s plan

Avoid screens for first 30 minutes—protect mental clarity.

## Consistency > Intensity

Small actions done daily beat large actions done rarely.

- 20 minutes daily study > 5-hour weekend study
- 10 pushups daily > 100 once a month

Progress loves repetition.

## Key Takeaway

Your habits shape your future quietly, every day.

> "Motivation is what gets you started. Habit is what keeps you going." — Jim Ryun
 `
  }
];