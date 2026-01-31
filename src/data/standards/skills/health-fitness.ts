import { Standard } from "../types";

export const healthFitnessCategory: Standard = {
  id: "health-fitness",
  name: "Health & Fitness",
  displayName: "Health, Fitness & Body Awareness",
  description: "Take care of your physical health and well-being",
  color: "bg-green-500",
  subjects: [
    {
      id: "hf-nutrition",
      name: "Nutrition Basics",
      icon: "Apple",
      color: "text-green-500",
      lessonIds: ["hf-food-groups", "hf-balanced-diet", "hf-hydration", "hf-healthy-snacking"]
    },
    {
      id: "hf-fitness",
      name: "Physical Fitness",
      icon: "Dumbbell",
      color: "text-orange-500",
      lessonIds: ["hf-importance-exercise", "hf-types-exercise", "hf-stretching-flexibility", "hf-active-lifestyle"]
    },
    {
      id: "hf-body-awareness",
      name: "Body Awareness",
      icon: "Heart",
      color: "text-red-500",
      lessonIds: ["hf-body-systems", "hf-puberty-changes", "hf-personal-boundaries", "hf-body-positivity"]
    },
    {
      id: "hf-first-aid",
      name: "First Aid & Safety",
      icon: "Plus",
      color: "text-blue-500",
      lessonIds: ["hf-basic-first-aid", "hf-emergency-response", "hf-injury-prevention", "hf-when-seek-help"]
    }
  ]
};

export const healthFitnessLessons = [
  // ==================================================================================
  // NUTRITION BASICS
  // ==================================================================================
  { 
    id: "hf-food-groups", 
    title: "Understanding Food Groups", 
    description: "Learn about different food categories and their benefits", 
    category: "Health & Fitness", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
    tags: ["nutrition", "diet", "biology"],
    content: `
# Understanding Food Groups

## Fueling the Machine
Imagine your body is a high-performance car. You wouldn't put cheap sludge in a Ferrari. To run efficiently, your body needs specific types of fuel known as **Macronutrients** and **Micronutrients**.

![Fresh vegetables and fruits](https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80)

## The Three Macronutrients (Macros)
These provide the energy (calories) you need to survive.

### 1. Carbohydrates (Go Foods)
The body's main energy source.
* **Complex Carbs (Good):** Whole grains, oats, brown rice, vegetables. These digest slowly and give steady energy.
* **Simple Carbs (Limit):** Sugar, white bread, soda. These give a quick burst of energy followed by a "crash."
* *Role:* Fuels the brain and muscles.

### 2. Proteins (Grow Foods)
The building blocks of the body.
* **Sources:** Meat, fish, eggs, beans, nuts, tofu.
* *Role:* Repairs muscle tissue, builds skin/hair, and supports the immune system.

### 3. Fats (Glow Foods)
Essential for brain health and absorbing vitamins.
* **Healthy Fats:** Avocado, olive oil, nuts, salmon (Omega-3s).
* **Unhealthy Fats:** Trans fats (fried foods), excessive saturated fats.
* *Role:* Insulates organs and fuels the brain.

## Micronutrients (Vitamins & Minerals)
You need these in smaller amounts, but they are crucial.
* **Vitamin C:** Oranges/Peppers (Immune system).
* **Calcium:** Milk/Leafy Greens (Strong bones).
* **Iron:** Red meat/Spinach (Carries oxygen in blood).

## The Fiber Factor
Fiber is a type of carb that the body can't digest.
* *Why it matters:* It acts like a broom, cleaning out your digestive system and keeping you full.
* *Sources:* Fruits, vegetables, whole grains.

## Key Takeaway
No single food provides everything. Variety is not just the spice of life; it's the requirement for health. Eat the rainbow!

---

## Practical Exercises

### Exercise 1: Rainbow Food Journal
For one week, track every color of produce you eat each day (Red, Orange, Yellow, Green, Blue/Purple, White). Award yourself points: 1-2 colors = 1 point, 3-4 colors = 2 points, 5-6 colors = 3 points. Aim for a total of at least 15 points by week's end. Notice which colors you're missing.

### Exercise 2: Macro Detective
For your next three meals, identify the main macronutrient source: Where's the protein? Where's the carbohydrate? Where's the healthy fat? If any macro is missing, note what you could add next time (e.g., add nuts for healthy fat, beans for protein).

### Exercise 3: Food Label Investigation
Choose 5 packaged foods from your home. Read each nutrition label and identify: Serving size, Grams of sugar vs. protein vs. fiber. Which foods have more sugar than protein? Which have good fiber content? This builds label-reading habits that last a lifetime.

---

> "Let food be thy medicine and medicine be thy food." - Hippocrates

> "The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison." - Ann Wigmore
    `
  },
  { 
    id: "hf-balanced-diet", 
    title: "Building a Balanced Diet", 
    description: "Create meals that nourish your body", 
    category: "Health & Fitness", 
    difficulty: "Beginner" as const, 
    duration: "25 min", 
    points: 140, 
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800",
    tags: ["meal-planning", "health", "cooking"],
    content: `
# Building a Balanced Diet

## The Plate Method
You don't need to count calories to eat well. Just look at your plate. A balanced meal follows the **50-25-25 Rule**.

![Healthy meal plate](https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80)

### 50% Vegetables & Fruits
Half your plate should be plants.
* *Why:* They are low in calories but high in volume and nutrients.
* *Goal:* Two different colors (e.g., Broccoli and Carrots).

### 25% Lean Protein
A quarter of your plate is for repair.
* *Examples:* Chicken breast, fish, tofu, beans, eggs.
* *Size:* Roughly the size of your palm.

### 25% Whole Grains/Starch
A quarter of your plate is for energy.
* *Examples:* Brown rice, sweet potato, whole wheat pasta, quinoa.
* *Size:* Roughly the size of your cupped fist.

## Reading Nutrition Labels
Don't be fooled by the front of the box. Turn it over.

1.  **Serving Size:** Check this first! A small bag of chips might contain *2 servings*. If you eat the whole bag, double the numbers.
2.  **Ingredients List:** Ingredients are listed by quantity (highest to lowest).
    * If "Sugar" is in the top 3 ingredients, it's a dessert, not a meal.
3.  **Sugar:** Look for "Added Sugars." Natural sugar (in fruit) is fine; added sugar is what you want to limit.

## Portion Distortion
Restaurants often serve portions that are 2-3x larger than necessary.
* *Tip:* Eat slowly. It takes 20 minutes for your stomach to tell your brain "I'm full."

## Key Takeaway
Balance isn't about being perfect every meal. It's about the average. If you have a heavy lunch, have a lighter dinner.

> "Eat food. Not too much. Mostly plants." - Michael Pollan

---

## Practical Exercises

### Exercise 1: The Plate Method Challenge
For 5 meals this week, practice the 50-25-25 plate method: 50% vegetables/fruits, 25% lean protein, 25% whole grains. Take photos of your plates to see how well you're doing. Notice how full and satisfied you feel compared to unbalanced meals.

### Exercise 2: Grocery Store Scavenger Hunt
On your next grocery trip, spend 5 extra minutes in the produce section. Challenge yourself to buy one vegetable or fruit you've never tried before. Look up a simple recipe and prepare it this week. Expanding your produce repertoire expands your nutrition.

### Exercise 3: Mindful Eating Experiment
For one meal, put away all screens and distractions. Eat slowly, taking 20+ minutes for the meal. Notice flavors, textures, and your body's fullness signals. Rate your hunger before eating (1-10) and satisfaction after. Most people find they eat less and enjoy more.

---

> "Your diet is a bank account. Good food choices are good investments." - Bethenny Frankel

> "Take care of your body. It's the only place you have to live." - Jim Rohn
    `
  },
  { 
    id: "hf-hydration", 
    title: "Importance of Hydration", 
    description: "Why water is essential for your health", 
    category: "Health & Fitness", 
    difficulty: "Beginner" as const, 
    duration: "15 min", 
    points: 100, 
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800",
    tags: ["water", "hydration", "habits"],
    content: `
# Importance of Hydration

## You Are Mostly Water
The human body is about 60% water. Your brain is about 73% water. Even mild dehydration affects your mood, energy, and ability to think.

![Pouring water into glass](https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80)

## Functions of Water
1.  **Transport:** Carries nutrients and oxygen to cells.
2.  **Temperature:** Regulates body heat (sweating).
3.  **Lubrication:** Cushions joints and protects tissues.
4.  **Waste Removal:** Flushes toxins through kidneys.

## Signs of Dehydration
Don't wait until you are thirsty. Thirst is a late signal.
* **Headache:** One of the most common signs.
* **Fatigue:** Feeling tired or sluggish.
* **Brain Fog:** Trouble concentrating.
* **Dry Skin/Lips.**

## The Urine Test
The easiest way to check hydration is to look at your pee.
* **Pale Yellow / Clear:** Good! You are hydrated.
* **Dark Yellow / Amber:** Drink water immediately.
* **Brown:** Severe dehydration (or medical issue). Seek help.

## How Much Should I Drink?
The "8 glasses a day" rule is a myth, but a good starting point.
* **Better Rule:** Drink when you wake up, with every meal, and whenever you exercise.
* *Active People:* Need significantly more to replace sweat.

## Electrolytes
Water isn't the only thing you sweat out; you lose salts (sodium, potassium).
* If exercising for >1 hour, plain water might not be enough. You may need an electrolyte drink or a banana.

## Key Takeaway
If you have a headache or feel tired, try drinking a large glass of water before taking medicine or drinking caffeine.

> "Water is the driving force of all nature." - Leonardo da Vinci

---

## Practical Exercises

### Exercise 1: Hydration Tracking Week
For 7 days, track every glass of water you drink (use a simple tally sheet or app). Also note how you feel each day (energy, headaches, focus). At week's end, analyze: Is there a correlation between water intake and how you feel? What's your average daily intake?

### Exercise 2: The Urine Color Chart
Create or print a urine color chart (pale yellow = hydrated, dark = dehydrated). Post it in your bathroom. Check your hydration status each morning for a week. If you see dark urine more than twice, increase your water intake the next day.

### Exercise 3: Water Habit Stacking
Link drinking water to existing habits: One glass when you wake up, one with each meal, one before bed. For extra credit, keep a water bottle at your desk and finish it by lunch, refill and finish by dinner. Track your consistency for two weeks.

---

> "Pure water is the world's first and foremost medicine." - Slovakian Proverb

> "When the well is dry, we know the worth of water." - Benjamin Franklin
    `
  },
  { 
    id: "hf-healthy-snacking", 
    title: "Smart Snacking Choices", 
    description: "Choose snacks that fuel your body well", 
    category: "Health & Fitness", 
    difficulty: "Beginner" as const, 
    duration: "15 min", 
    points: 100, 
    image: "https://images.unsplash.com/photo-1511690656952-34342d5c2899?w=800",
    tags: ["food", "energy", "habits"],
    content: `
# Smart Snacking Choices

## Snacking: Friend or Foe?
Snacking gets a bad reputation, but it can be helpful. It keeps your metabolism running and prevents overeating at meals. The problem isn't *snacking*; it's *what* we snack on.

![Healthy snacks layout](https://images.unsplash.com/photo-1511690656952-34342d5c2899?w=800&q=80)

## The Sugar Crash
Eating a sugary snack (candy, soda) gives you a spike in energy (blood sugar rises) followed by a rapid drop (insulin crash).
* *Result:* You feel tired and hungry again 30 minutes later.

## The Power Pair Rule
To create a snack that actually kills hunger, combine **Fiber** + **Protein**.
* **Fiber:** Slows down digestion.
* **Protein:** Signals fullness to the brain.

### Good Combinations
1.  **Apple (Fiber) + Peanut Butter (Protein/Fat)**
2.  **Carrots (Fiber) + Hummus (Protein)**
3.  **Yogurt (Protein) + Berries (Fiber)**
4.  **Nuts (Protein/Fat) + Dried Fruit (Fiber)**

## Emotional Eating vs. Hunger
Are you actually hungry?
* **The Broccoli Test:** Ask yourself, "Would I eat raw broccoli right now?"
    * *Yes:* You are physically hungry. Go eat.
    * *No:* You are likely bored, stressed, or thirsty. Drink water or take a walk instead.

## Environment Design
* **Hide the Junk:** If cookies are on the counter, you will eat them. Put them in a high cupboard.
* **Display the Good:** Put a bowl of fruit on the table. We eat what we see.

## Key Takeaway
Think of snacks as "mini-meals," not "treats." They are an opportunity to add nutrients you missed at lunch.

---

## Practical Exercises

### Exercise 1: Power Pair Snack Prep
Prepare 5 "power pair" snacks for the week on Sunday: Apple slices + peanut butter portions, carrot sticks + hummus cups, yogurt + berry containers. Having healthy options ready makes healthy choices easy. Track how often you reach for these vs. less healthy options.

### Exercise 2: The Broccoli Test Journal
For one week, whenever you feel like snacking, pause and ask: "Would I eat raw broccoli right now?" If yes, you're truly hungry - eat a healthy snack. If no, you might be bored, stressed, or thirsty. Try drinking water or taking a 5-minute walk instead. Track your results.

### Exercise 3: Environment Redesign Challenge
Redesign your snacking environment: Put all "treat" foods in a high cabinet or opaque container. Place a fruit bowl in a visible spot. Move healthy snacks to eye level in the fridge. Track your snacking choices for a week after the redesign. Environment shapes behavior more than willpower.

---

> "The doctor of the future will no longer treat the human frame with drugs, but rather will cure and prevent disease with nutrition." - Thomas Edison

> "Snacking is easy when you plan for it." - Unknown
    `
  },

  // ==================================================================================
  // PHYSICAL FITNESS
  // ==================================================================================
  { 
    id: "hf-importance-exercise", 
    title: "Why Exercise Matters", 
    description: "Benefits of regular physical activity", 
    category: "Health & Fitness", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800",
    tags: ["exercise", "mental-health", "physiology"],
    content: `
# Why Exercise Matters

## It's Not Just About "Looking Good"
Society focuses on exercise for weight loss or muscles. But the internal benefits are far more important. Exercise is the closest thing we have to a "magic pill" for health.

![Person running outdoors](https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80)

## Physical Benefits
1.  **Heart Health:** Makes the heart pump stronger and lowers blood pressure.
2.  **Bone Density:** Impact exercise (running/lifting) tells bones to get denser, preventing osteoporosis.
3.  **Immunity:** Regular moderate exercise boosts the immune system.

## Mental Superpowers
1.  **Stress Reduction:** Lowers cortisol (stress hormone).
2.  **Mood Booster:** Releases **Endorphins** (natural painkillers) and **Dopamine** (happiness chemical).
3.  **Brain Fertilizer:** Increases **BDNF** (Brain-Derived Neurotrophic Factor), which helps grow new brain cells and improves memory.

## Sleep Connection
People who exercise fall asleep faster and have deeper "Slow Wave" sleep, which is when the body repairs itself.

## How Much is Enough?
* **Guidelines:** Aim for 150 minutes of moderate activity per week.
* That breaks down to just **30 minutes a day, 5 days a week**.

## The "Something is Better Than Nothing" Rule
You don't need to run a marathon.
* A 10-minute walk is better than 0 minutes.
* Standing is better than sitting.
* Taking the stairs is better than the elevator.

## Key Takeaway
Don't view exercise as punishment for what you ate. View it as a celebration of what your body can do.

> "Movement is a medicine for creating change in a person's physical, emotional, and mental states." - Carol Welch

---

## Practical Exercises

### Exercise 1: Exercise Benefits Journal
For two weeks, after each time you exercise (even a 10-minute walk), write down how you feel mentally and physically afterward. Rate your mood, energy, and stress level (1-10) before and after. This creates personal evidence of exercise benefits that motivates continued activity.

### Exercise 2: The "Something is Better Than Nothing" Challenge
Commit to moving for at least 10 minutes every day for 14 days - no excuses. It can be walking, dancing, stretching, or cleaning vigorously. Track each day. The goal is building consistency, not intensity. Most people find that starting is the hardest part.

### Exercise 3: Find Your Fun Movement
List 5 activities that involve movement but don't feel like "exercise" to you (dancing, gardening, playing with pets, hiking, swimming, sports). This week, do at least one. Notice how enjoyment changes your relationship with physical activity. The best exercise is the one you'll actually do.

---

> "Exercise is a celebration of what your body can do, not a punishment for what you ate." - Unknown

> "The only bad workout is the one that didn't happen." - Unknown
    `
  },
  { 
    id: "hf-types-exercise", 
    title: "Types of Exercise", 
    description: "Explore cardio, strength, and flexibility training", 
    category: "Health & Fitness", 
    difficulty: "Beginner" as const, 
    duration: "25 min", 
    points: 140, 
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
    tags: ["workout", "cardio", "strength"],
    content: `
# Types of Exercise

## The Three Pillars of Fitness
A complete fitness routine isn't just running or just lifting weights. It combines three main elements.

![Gym weights and equipment](https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80)

## 1. Cardiovascular (Cardio)
* **What:** Activities that raise your heart rate and breathing.
* **Examples:** Running, swimming, cycling, dancing, jumping rope.
* **Benefit:** Strengthens the heart and lungs. Increases endurance.
* *Analogy:* Cleaning the engine of your car.

## 2. Strength Training (Resistance)
* **What:** Moving against resistance to build muscle.
* **Examples:** Lifting weights, push-ups (bodyweight), resistance bands.
* **Benefit:** Increases metabolism (muscle burns more energy than fat), protects joints, strengthens bones.
* *Analogy:* Upgrading the engine's horsepower.

## 3. Flexibility & Mobility
* **What:** Stretching and moving joints through their full range.
* **Examples:** Yoga, Pilates, static stretching.
* **Benefit:** Prevents injury, reduces back pain, improves posture.
* *Analogy:* Oiling the joints so the car moves smoothly.

## Anaerobic vs. Aerobic
* **Aerobic (With Oxygen):** Long duration, lower intensity. (Jogging).
* **Anaerobic (Without Oxygen):** Short duration, high intensity. (Sprinting, Heavy Lifting).
* *Note:* You need both. Anaerobic builds power; Aerobic builds stamina.

## Building a Week
A balanced week might look like:
* **Mon/Wed/Fri:** 30 mins Cardio (Brisk walk/Jog).
* **Tue/Thu:** 20 mins Strength (Bodyweight exercises).
* **Sat/Sun:** Active recovery (Yoga/Hiking).

## Key Takeaway
Variety prevents boredom and overuse injuries. Mix it up!

---

## Practical Exercises

### Exercise 1: Three Pillars Week
Design and follow a one-week exercise plan that includes all three pillars: At least 2 cardio sessions, 2 strength sessions, and 2 flexibility sessions. After the week, note which you enjoyed most, which was hardest, and which had the best post-exercise feeling.

### Exercise 2: Bodyweight Circuit Design
Create your own 15-minute bodyweight workout with 5 exercises (example: push-ups, squats, lunges, planks, jumping jacks). Do each exercise for 1 minute, rest 30 seconds, repeat the circuit twice. Track how many reps you can do of each exercise - try to beat your numbers in 2 weeks.

### Exercise 3: Cardio Exploration
Try 3 different types of cardio this week (walking, jogging, cycling, swimming, dancing, jump rope, stairs). Rate each on a 1-10 scale for enjoyment and difficulty. Identify your preferred cardio activity - this is the one you're most likely to stick with long-term.

---

> "Fitness is not about being better than someone else. It's about being better than you used to be." - Khloe Kardashian

> "The body achieves what the mind believes." - Napoleon Hill
    `
  },
  { 
    id: "hf-stretching-flexibility", 
    title: "Stretching & Flexibility", 
    description: "Keep your body limber and prevent injuries", 
    category: "Health & Fitness", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800",
    tags: ["yoga", "stretching", "mobility"],
    content: `
# Stretching & Flexibility

## Why Stretch?
Muscles are like rubber bands. If they are tight and dry, they snap (injury). If they are warm and flexible, they stretch.

![Person stretching yoga](https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=80)

## The Golden Rule: Warm vs. Cold
**NEVER** do deep static stretching on cold muscles. This is a recipe for injury.
* Think of cold play-doh. It breaks.
* Think of warm play-doh. It stretches.

## Dynamic Stretching (The Warm Up)
Do this **BEFORE** exercise.
* **What:** Moving while stretching.
* **Examples:** Arm circles, leg swings, torso twists, high knees.
* **Goal:** Increase blood flow and "wake up" the muscles.

## Static Stretching (The Cool Down)
Do this **AFTER** exercise.
* **What:** Holding a stretch for 15-30 seconds.
* **Examples:** Touching toes, butterfly stretch, quad stretch.
* **Goal:** Lengthen the muscles while they are warm and pliable.

## Mobility vs. Flexibility
* **Flexibility:** How far a muscle can stretch (passive).
* **Mobility:** How well you can move a joint through its range of motion (active).
* *Example:* Pulling your leg up with your hands is flexibility. Lifting your leg up high with your muscles is mobility. You want both.

## Desk Stretches
If you sit all day, your hip flexors and chest get tight.
1.  **Neck Rolls:** Gently roll head side to side.
2.  **Chest Opener:** Clasp hands behind back and pull down.
3.  **Seated Twist:** Turn torso to look over shoulder.

## Key Takeaway
Stretching shouldn't be painful. Discomfort is okay; sharp pain is not. Listen to your body.

---

## Practical Exercises

### Exercise 1: Daily 5-Minute Stretch Routine
Create a simple 5-stretch routine you can do every morning: neck rolls, shoulder rolls, chest opener, forward fold, seated twist. Do it daily for 2 weeks, preferably at the same time. Notice improvements in how you feel and your range of motion.

### Exercise 2: Flexibility Baseline Test
Test and record your current flexibility: Can you touch your toes? How far can you reach in a seated forward fold (measure in inches from your toes)? How far can you twist? Retest in 4 weeks of regular stretching. Seeing progress is motivating.

### Exercise 3: Desk Stretch Breaks
Set a phone alarm for every 2 hours during school or study time. When it goes off, do 3 desk stretches: neck rolls, shoulder shrugs, and a seated twist. Track your consistency for a week. Notice if you have less stiffness and tension by the end of the day.

---

> "Flexibility is the key to stability." - John Wooden

> "The body is the servant of the mind." - James Allen
    `
  },
  { 
    id: "hf-active-lifestyle", 
    title: "Living an Active Lifestyle", 
    description: "Incorporate movement into your daily routine", 
    category: "Health & Fitness", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1538805060512-e2d9b6d4bc5c?w=800",
    tags: ["lifestyle", "habits", "walking"],
    content: `
# Living an Active Lifestyle

## NEAT (Non-Exercise Activity Thermogenesis)
This is the scientific term for all the calories you burn just living your life—walking to the car, typing, cooking, fidgeting.
* **Fact:** Increasing NEAT is often more effective for weight management than 1 hour of gym time.

![People walking in city](https://images.unsplash.com/photo-1538805060512-e2d9b6d4bc5c?w=800&q=80)

## The Sedentary Crisis
"Sitting is the new smoking."
Sitting for 8+ hours a day increases the risk of heart disease and diabetes, *even if you go to the gym for an hour*.
* **The Antidote:** Break up the sitting. Stand up every 30 minutes.

## Activity Hacks
Sneak movement into your day:
1.  **Park Far Away:** Don't circle for the closest spot. Take the back spot and walk.
2.  **Take the Stairs:** Ignore the elevator for anything less than 3 floors.
3.  **Walking Meetings:** If you don't need a screen, walk while you talk.
4.  **Commercial Breaks:** Do squats or lunges while watching TV commercials.
5.  **Carry the Basket:** At the grocery store, carry a basket instead of pushing a cart for an arm workout.

## Finding Your "Thing"
Exercise shouldn't be a chore. Find a hobby that *happens* to be active.
* Dancing, Gardening, Hiking, Geocaching, Martial Arts, Frisbee.
* If it's fun, you won't need "willpower" to do it.

## Tracking
Using a pedometer (Step Counter) is highly effective.
* **Goal:** 10,000 steps is a common goal, but even reaching 7,000 provides massive health benefits compared to 3,000.

## Key Takeaway
You don't have to be an athlete to be active. Just keep moving.

---

## Practical Exercises

### Exercise 1: Step Counting Challenge
Track your daily steps for one week using a phone or fitness tracker. Calculate your average. The next week, aim to increase that average by 1,000 steps. Simple changes: park farther, take stairs, walk while on the phone. Seeing the numbers makes movement tangible.

### Exercise 2: Sitting Audit and Intervention
For one day, track how many hours you sit (school, homework, screens, meals). The next day, set a timer for every 30 minutes of sitting - when it goes off, stand up and move for 1-2 minutes (walk, stretch, do 10 squats). Notice how this affects your energy and focus.

### Exercise 3: Activity Habit Stacking
Identify 3 daily habits and add movement to them: Walk while brushing teeth, do calf raises while waiting for food to heat, squat during TV commercials. Practice these "habit stacks" for two weeks until they become automatic. Small movements throughout the day add up.

---

> "Sitting is the new smoking." - Dr. James Levine

> "An active body hosts an active mind." - Unknown
    `
  },

  // ==================================================================================
  // BODY AWARENESS
  // ==================================================================================
  { 
    id: "hf-body-systems", 
    title: "Your Body Systems", 
    description: "Understand how your body works", 
    category: "Health & Fitness", 
    difficulty: "Intermediate" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    tags: ["anatomy", "biology", "science"],
    content: `
# Your Body Systems

## The Ultimate Machine
Your body performs millions of tasks every second without you thinking about it. It is organized into "Systems."

![Anatomical model](https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80)

## 1. Skeletal & Muscular (Support & Movement)
* **Bones (206 total):** The frame. Protects organs (ribs protect heart/lungs) and makes blood cells (marrow).
* **Muscles:** The pulley system. They pull on bones to create movement. Muscles can only pull, never push.

## 2. Circulatory (Transport)
* **Heart:** The pump. It beats ~100,000 times a day.
* **Blood:** The delivery trucks. Red cells carry oxygen; White cells fight germs; Platelets plug leaks (scabs).
* **Vessels:** The highways (Arteries go Away from heart, Veins go towards heart).

## 3. Respiratory (Gas Exchange)
* **Lungs:** The spongy organs where oxygen enters the blood and carbon dioxide (waste) leaves.

## 4. Digestive (Fuel Processing)
* **Stomach:** Acid bath to break down food.
* **Small Intestine:** Where nutrients are absorbed into blood.
* **Large Intestine:** Absorbs water and packs waste.

## 5. Nervous (Control Center)
* **Brain:** The CEO.
* **Nerves:** The wires. They send electrical signals at 270 mph.
* **Autonomic:** Controls things you don't think about (breathing, digestion, heartbeat).

## 6. Immune (Defense)
* An army of cells that hunt down viruses and bacteria.
* **Fever:** The body turning up the heat to cook the invaders.

## Key Takeaway
Your body is an interconnected web. If one system struggles (e.g., respiratory), the others suffer (muscles get less oxygen). Treat the whole system well.

---

## Practical Exercises

### Exercise 1: Body Systems Awareness Day
Choose one body system to focus on each day this week. Monday: Notice your heartbeat at rest and after stairs (circulatory). Tuesday: Pay attention to your breathing patterns (respiratory). Wednesday: Feel your muscles working when you move (muscular). This builds connection with your body's operations.

### Exercise 2: Heart Rate Experiment
Measure your resting heart rate (count beats for 60 seconds when calm). Then do 30 jumping jacks and measure again. Wait 2 minutes and measure recovery rate. Track these numbers weekly as you get more fit - you should see your resting rate lower and recovery get faster.

### Exercise 3: The Connection Map
Draw a simple body outline and label 3 major systems. Then draw lines showing how they connect: Heart pumps blood → Blood carries oxygen → Oxygen fuels muscles. Write one thing you can do to help each system (cardio for heart, deep breathing for lungs, protein for muscles).

---

> "The human body is the best picture of the human soul." - Ludwig Wittgenstein

> "Your body hears everything your mind says." - Naomi Judd
    `
  },
  { 
    id: "hf-puberty-changes", 
    title: "Understanding Body Changes", 
    description: "Navigate physical changes during growing up", 
    category: "Health & Fitness", 
    difficulty: "Intermediate" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=800",
    tags: ["puberty", "growth", "hygiene"],
    content: `
# Understanding Body Changes

## The Great Transformation
Puberty is the biological bridge between childhood and adulthood. It usually starts between ages 8-13 for females and 9-14 for males, but everyone is different.

![Measuring height](https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=800&q=80)

## The Trigger: Hormones
Chemical messengers turn on in the brain.
* **Estrogen:** Primary female hormone.
* **Testosterone:** Primary male hormone.

## Physical Changes
* **Growth Spurts:** Rapid height increase. This can cause "growing pains" in legs/joints.
* **Body Shape:** Shoulders widen (males), hips widen (females).
* **Skin/Hair:** Oil glands activate (acne may appear). Hair grows in new places (underarms, legs, groin).
* **Voice:** Vocal cords lengthen, causing the voice to drop (voice cracks are normal!).

## Hygiene Upgrades
As sweat glands change, body odor (B.O.) begins.
* **Action:** Daily showers are now mandatory, not optional.
* **Deodorant:** Start using it daily.
* **Face Washing:** Wash twice a day to manage oil/acne.

## Emotional Rollercoaster
The brain is remodeling itself.
* You may feel happy one minute and angry the next.
* Risk-taking behavior increases.
* Sleep patterns shift (staying up later, sleeping in).

## Normalcy
* **Fact:** It is normal to feel awkward in your body.
* **Fact:** It is normal to develop at a different speed than your friends.
* **Fact:** Everyone goes through this.

## Key Takeaway
Puberty is temporary. Be patient with your body (and your mood). It is hard work building an adult.

---

## Practical Exercises

### Exercise 1: Body Change Acceptance Letter
Write a letter to your body acknowledging the changes happening. Include: What changes you've noticed, what feelings you have about them, and a statement of acceptance ("Even though this is uncomfortable, I know it's normal and temporary"). This processes emotions about physical changes.

### Exercise 2: Hygiene Upgrade Checklist
Create a daily hygiene checklist appropriate for your stage of development: Shower, deodorant, face wash, clean clothes, etc. Check off each item daily for two weeks. Good habits established now become automatic for life.

### Exercise 3: Trusted Adult Conversation
Identify one trusted adult (parent, older sibling, school counselor) you can talk to about body changes. Prepare one question you've been curious about. Having open communication with a trusted adult makes navigating puberty much easier and less confusing.

---

> "Be patient with yourself. Self-growth is tender; it's holy ground." - Stephen Covey

> "Growing up is hard, but growing into yourself is worth it." - Unknown
    `
  },
  { 
    id: "hf-personal-boundaries", 
    title: "Personal Body Boundaries", 
    description: "Understand and maintain physical boundaries", 
    category: "Health & Fitness", 
    difficulty: "Beginner" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800",
    tags: ["consent", "safety", "respect"],
    content: `
# Personal Body Boundaries

## Your Body, Your Rules
Body autonomy means you are the boss of your own body. No one else has the right to touch you without your permission.

![Stop hand sign](https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80)

## The Concept of Consent
Consent is a clear "Yes."
* **FRIES Acronym:**
    * **F**reely Given (No pressure).
    * **R**eversible (You can change your mind).
    * **I**nformed (You know what is happening).
    * **E**nthusiastic (You want to do it).
    * **S**pecific (Saying yes to a hug isn't saying yes to a kiss).

## Types of Touch
1.  **Safe Touch:** High fives, handshakes, hugs from parents (if wanted), doctor exams (with permission).
2.  **Unwanted Touch:** Someone hugging you when you said no. Someone touching your hair.
3.  **Unsafe Touch:** Any touch that hurts, scares you, or involves private parts.

## The Swimsuit Rule
A simple guideline: The parts of your body covered by a bathing suit are private.
* No one should look at or touch these parts (except doctors/parents for health/hygiene).
* You should not look at or touch these parts on others.

## How to Set Boundaries
* **Verbal:** "I don't like that. Please stop." or "I'm not a hugger, let's high-five."
* **Physical:** Stepping back. Removing a hand from your shoulder.
* **You do not need to be polite about your safety.** If someone ignores your "No," you have the right to yell or leave.

## Secrets vs. Surprises
* **Surprise:** "Don't tell Mom about the birthday gift." (Temporary, happy).
* **Secret:** "Don't tell Mom we did this or you'll get in trouble." (Permanent, scary).
* *Rule:* Any adult asking you to keep a "body secret" is a major red flag. Tell a trusted adult immediately.

## Key Takeaway
"No" is a complete sentence. You don't owe anyone physical affection, not even relatives.

---

## Practical Exercises

### Exercise 1: Boundary Scripts Practice
Write and practice 3 boundary-setting scripts for different situations: 1) "I'm not comfortable with hugs, let's high-five instead." 2) "Please don't touch my hair." 3) "I need some personal space right now." Practice saying these out loud until they feel natural.

### Exercise 2: FRIES Consent Check
Think of a recent interaction involving physical contact (hug, handshake, etc.). Evaluate it using FRIES: Was it Freely given? Reversible? Informed? Enthusiastic? Specific? This framework helps you recognize healthy vs. unhealthy consent patterns.

### Exercise 3: Safe Person Identification
Make a list of 3 trusted adults you could tell if someone violated your boundaries. For each person, note: their name, how to contact them, and why you trust them. Having this list ready before you need it makes speaking up easier in difficult situations.

---

> "Daring to set boundaries is about having the courage to love ourselves." - Brené Brown

> "Your body is yours. You decide what happens to it." - Unknown
    `
  },
  { 
    id: "hf-body-positivity", 
    title: "Body Positivity & Self-Image", 
    description: "Develop a healthy relationship with your body", 
    category: "Health & Fitness", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=800",
    tags: ["mental-health", "self-love", "media"],
    content: `
# Body Positivity & Self-Image

## The Mirror Lie
We often look in the mirror and only see "flaws." This is often because we are comparing ourselves to unrealistic standards.

![Person looking in mirror](https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=800&q=80)

## Social Media vs. Reality
Most images you see online are:
1.  **Curated:** The best 1 out of 50 photos taken.
2.  **Filtered:** Skin smoothed, lighting fixed.
3.  **Posed:** Sucking in stomachs, finding the "good angle."
* *Fact:* Even models don't look like their photos in real life. Don't compare your "Behind the Scenes" to someone else's "Highlight Reel."

## Body Function > Body Form
Shift your focus from what your body *looks like* to what it *can do*.
* "My legs are strong enough to walk me to school."
* "My lungs breathe for me without asking."
* "My arms can hug my friends."
* This is called **Body Neutrality** or **Body Gratitude**.

## Health at Every Size (HAES)
You cannot determine a person's health just by looking at their size.
* Thin people can be unhealthy (smokers, poor diet).
* Larger people can be healthy (active, good vitals).
* Health is about *habits*, not a number on a scale.

## Dealing with Negative Thoughts
When you think "I hate my [body part]," try to reframe:
* *Negative:* "I hate my stomach."
* *Reframe:* "My stomach digests my food and gives me energy."

## Key Takeaway
Your body is the vehicle for your life, not an ornament to be looked at. Treat it with respect, feed it well, move it often, and thank it for carrying you.

> "To love yourself is the beginning of a lifelong romance." - Oscar Wilde

---

## Practical Exercises

### Exercise 1: Body Function Gratitude List
Write 10 things your body does for you that have nothing to do with appearance: breathes, digests food, heals cuts, lets you hug friends, walks you to school, etc. Read this list whenever you have negative body thoughts. Shift focus from how your body looks to what it does.

### Exercise 2: Social Media Audit
Review the accounts you follow. Unfollow or mute 3 accounts that make you feel bad about your body. Follow 3 new accounts that promote body diversity, body neutrality, or focus on activities rather than appearance. Notice how your feed affects your self-image after one week.

### Exercise 3: Reframe the Negative Thought
For one week, when you have a negative body thought, write it down, then reframe it: Negative: "I hate my thighs." Reframe: "My thighs carry me everywhere I need to go." Practice this reframing until it becomes automatic. What we repeatedly think becomes our reality.

---

> "Your body is not an ornament. It is the vehicle to your dreams." - Taryn Brumfitt

> "You are imperfect, permanently and inevitably flawed. And you are beautiful." - Amy Bloom
    `
  },

  // ==================================================================================
  // FIRST AID & SAFETY
  // ==================================================================================
  { 
    id: "hf-basic-first-aid", 
    title: "Basic First Aid Skills", 
    description: "Essential first aid knowledge everyone should have", 
    category: "Health & Fitness", 
    difficulty: "Intermediate" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1554734867-bf3c00a72b71?w=800",
    tags: ["first-aid", "safety", "skills"],
    content: `
# Basic First Aid Skills

## Be Prepared
First aid is the immediate help given before professional medical help arrives.

![First aid kit](https://images.unsplash.com/photo-1554734867-bf3c00a72b71?w=800&q=80)

## 1. Cuts and Scrapes (Bleeding)
* **Control Bleeding:** Apply direct pressure with a clean cloth/gauze. Hold for 5-10 mins. Don't peek!
* **Clean:** Rinse with water to remove dirt. (Avoid hydrogen peroxide/alcohol on open wounds as it damages tissue).
* **Cover:** Apply antibiotic ointment and a bandage.

## 2. Nosebleeds
* **Do NOT tilt head back:** This makes blood run down the throat (choking hazard).
* **Do:** Lean forward slightly. Pinch the soft part of the nose (nostrils) together firmly for 10 minutes.

## 3. Burns (Minor)
* **Cool It:** Run cool (not ice cold) water over the burn for 10-20 minutes.
* **Cover:** Use a loose bandage.
* **Don't:** Pop blisters or put butter/oil on it (this traps heat).

## 4. Sprains/Strains (The R.I.C.E Method)
* **R - Rest:** Stop using the injured part.
* **I - Ice:** Apply ice pack (wrapped in cloth) for 20 mins every hour to reduce swelling.
* **C - Compression:** Wrap with an elastic bandage (not too tight).
* **E - Elevation:** Raise the injury above heart level to drain fluid.

## 5. Choking
If someone cannot speak, cough, or breathe:
* **Heimlich Maneuver:** Stand behind them. Wrap arms around waist. Make a fist above the navel. Thrust inward and upward.

## Key Takeaway
A first aid kit is useless if you don't know where it is. Keep one in the kitchen and one in the car.

---

## Practical Exercises

### Exercise 1: First Aid Kit Inventory
Locate your home's first aid kit (or create one if you don't have one). Check that it contains: bandages, gauze, antiseptic, tape, scissors, tweezers, pain relievers, and emergency contact numbers. Note what's missing or expired. Knowing what you have before an emergency is essential.

### Exercise 2: RICE Practice Scenario
Imagine you or a friend twisted an ankle. Walk through the RICE protocol out loud: What would you use for Rest? How would you apply Ice (wrapped, 20 minutes)? What would you use for Compression? How would you Elevate? Practice makes this automatic during actual injuries.

### Exercise 3: Teach Someone Else
Teach one first aid skill to a family member or friend this week: how to control bleeding, treat a burn, or handle a nosebleed. Teaching reinforces your own learning, and you've now created another person who can help in emergencies.

---

> "First aid is the bridge between the incident and professional medical care." - Unknown

> "It's better to know first aid and not need it, than need it and not know it." - Unknown
    `
  },
  { 
    id: "hf-emergency-response", 
    title: "Emergency Response Basics", 
    description: "What to do in emergency situations", 
    category: "Health & Fitness", 
    difficulty: "Intermediate" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1599700403969-f77b37778b97?w=800",
    tags: ["emergency", "911", "crisis"],
    content: `
# Emergency Response Basics

## The First Rule: Stay Calm
Panic kills. In an emergency, your heart will race, but you must force your brain to think. Take one deep breath.

![Ambulance lights](https://images.unsplash.com/photo-1599700403969-f77b37778b97?w=800&q=80)

## The Three Cs
1.  **Check:** Is the scene safe? (Fire? Traffic? Live wires?). If it's not safe, **do not enter**. You cannot help if you become a second victim.
2.  **Call:** Call 911 (or your local emergency number).
3.  **Care:** Provide care to the level of your training.

## Calling 911: What to Say
The dispatcher needs specific info. Don't hang up until they say so.
1.  **Location:** The most important thing. "I am at 123 Main St." or "I am at the north entrance of the Park."
2.  **Nature of Emergency:** "Someone collapsed," "There is a fire," "Car accident."
3.  **Details:** Is the person breathing? Are they conscious?

## Assessing a Victim (ABC)
* **A - Airway:** Is something blocking their throat?
* **B - Breathing:** Look, listen, and feel for breath.
* **C - Circulation:** Is there a pulse? Is there severe bleeding?

## Hands-Only CPR
If a teen/adult collapses and is **not breathing**:
1.  Call 911.
2.  Push hard and fast in the center of the chest.
3.  **Rate:** 100-120 beats per minute (Tempo of the song "Stayin' Alive").
4.  Don't stop until help arrives.

## Key Takeaway
You don't need to be a doctor to save a life. You just need to be the person who calls for help and stays with the victim.

---

## Practical Exercises

### Exercise 1: 911 Practice Script
Write out what you would say in a 911 call: "My name is [X], I'm at [location], someone has [problem], they are [breathing/not breathing, conscious/unconscious]." Practice saying this out loud. In real emergencies, having a script in your head helps you stay calm.

### Exercise 2: ABC Assessment Practice
Practice the ABC assessment on a willing family member (pretend scenario): Check Airway (is anything blocking the throat?), Breathing (look, listen, feel for breath), Circulation (check pulse, look for severe bleeding). Talk through what you would do for each if there was a problem.

### Exercise 3: CPR Tutorial Video
Watch a hands-only CPR instructional video (American Heart Association or Red Cross). Practice the hand placement and rhythm on a pillow (100-120 beats per minute, song "Stayin' Alive"). Consider taking a certified CPR course - it could save a life someday.

---

> "In any moment of decision, the best thing you can do is the right thing. The worst thing you can do is nothing." - Theodore Roosevelt

> "The greatest gift is to save a life." - Unknown
    `
  },
  { 
    id: "hf-injury-prevention", 
    title: "Preventing Common Injuries", 
    description: "Stay safe during activities and sports", 
    category: "Health & Fitness", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800",
    tags: ["prevention", "safety", "sports"],
    content: `
# Preventing Common Injuries

## An Ounce of Prevention
Most injuries are predictable and preventable.

![Sports gear and helmet](https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80)

## 1. Protective Gear
It only works if you wear it.
* **Helmets:** Brains don't heal like bones do. Wear one for biking, skating, skiing. One bad fall can change your personality/life forever.
* **Pads/Guards:** Shin guards, knee pads, mouthguards.

## 2. Proper Technique
* **Lifting:** Lift with your legs, not your back. Keep the object close to your body. Never twist while lifting.
* **Sports:** Learn the correct form for throwing, running, or tackling. Bad form causes repetitive strain injuries.

## 3. The Warm Up
Never sprint cold muscles.
* Spend 5-10 minutes moving lightly before intense activity to get blood flowing.

## 4. Listen to Pain
* **"Good" Pain:** Muscle burn/fatigue.
* **"Bad" Pain:** Sharp, shooting, or popping sensations.
* If you feel Bad Pain, **STOP**. Playing through injury usually makes it 10x worse.

## 5. Environmental Awareness
* **Heat:** In hot weather, drink water and take breaks to avoid heatstroke.
* **Traffic:** When running/biking, assume cars *cannot* see you. Wear bright colors. Run against traffic; bike with traffic.

## 6. Ergonomics (Tech Neck)
Looking down at a phone puts 60lbs of pressure on your neck spine.
* **Fix:** Hold phone at eye level. Take breaks.

## Key Takeaway
Your body is the only piece of equipment you can't replace. Protect it.

---

## Practical Exercises

### Exercise 1: Safety Gear Check
Audit your safety gear: Is your bike helmet fitted properly (two fingers above eyebrows, snug straps)? Do you have appropriate gear for your activities? Make a list of safety equipment you need but don't have. Prevention is always cheaper than treatment.

### Exercise 2: Proper Lifting Practice
Practice proper lifting technique with a box or bag: Feet shoulder-width apart, squat down keeping back straight, grip the object close to your body, lift with your legs not your back, never twist while carrying. Teach this to a family member to reinforce your learning.

### Exercise 3: Tech Neck Assessment
Check your posture right now while reading this. Is your head forward? Shoulders hunched? Set 3 reminders throughout the day to check and correct your posture. Hold your phone at eye level for one full day and notice how your neck feels different.

---

> "Prevention is better than cure." - Desiderius Erasmus

> "Safety isn't expensive, it's priceless." - Unknown
    `
  },
  { 
    id: "hf-when-seek-help", 
    title: "When to Seek Medical Help", 
    description: "Recognize signs that need professional attention", 
    category: "Health & Fitness", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
    tags: ["doctor", "symptoms", "health-literacy"],
    content: `
# When to Seek Medical Help

## Don't Guess with Health
Sometimes it's just a cold; sometimes it's serious. Knowing the difference saves lives.

![Doctor office](https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80)

## Red Flags (Call Doctor/Go to ER)
1.  **Breathing:** Difficulty breathing, wheezing, or chest pain.
2.  **Head Injury:** Loss of consciousness, vomiting after a hit to the head, confusion (Concussion signs).
3.  **Fever:** Very high fever (>103°F/39.4°C) or a fever that lasts more than 3 days.
4.  **Abdominal Pain:** Severe pain, especially on the lower right side (Appendicitis).
5.  **Bleeding:** Blood that won't stop after 10 minutes of pressure.

## Infection Signs
If you have a cut/scrape, watch for:
* **Redness:** Spreading red streaks from the wound.
* **Heat:** The area feels hot to touch.
* **Pus:** Yellow/green discharge.
* **Swelling:** Getting bigger instead of smaller.

## Mental Health
Medical help isn't just for physical breaks.
* If you feel persistent sadness, hopelessness, or thoughts of self-harm, this is a medical emergency. Tell an adult or doctor immediately.

## Trust Your Gut
You know your body (or your child/friend's body) better than anyone.
* If something "feels wrong," getting checked out is better than regretting it later.
* Doctors would rather tell you "It's nothing" than have you stay home with something dangerous.

## Key Takeaway
It is not "weak" to go to the doctor. It is smart maintenance of a complex machine.

---

## Practical Exercises

### Exercise 1: Red Flags Flashcard Set
Create flashcards with medical red flags that require immediate attention: difficulty breathing, severe chest pain, head injury with vomiting, fever over 103°F, uncontrolled bleeding. Review weekly. Recognizing emergencies quickly can save lives.

### Exercise 2: Personal Health Information Card
Create a card with your important health information: allergies, medications, emergency contacts, blood type (if known), any medical conditions. Keep it in your wallet or phone case. In emergencies, this information helps responders help you faster.

### Exercise 3: "Trust Your Gut" Journal
For one week, practice tuning into your body's signals. Each day, note: How do I feel physically? Is anything different or concerning? What might my body be telling me? Building this awareness helps you recognize when something is off and needs attention.

---

> "An ounce of prevention is worth a pound of cure." - Benjamin Franklin

> "The best time to see a doctor is when you don't need one." - Unknown
    `
  }
];