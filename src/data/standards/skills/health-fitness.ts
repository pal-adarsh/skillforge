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
    `
  }
];