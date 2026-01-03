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
  description: "Learn how to establish simple, effective daily habits for personal cleanliness and health.",
  category: "Life Skills",
  difficulty: "Beginner" as const,
  duration: "20 min",
  points: 120,
  image: "https://images.unsplash.com/photo-1556228578-8d85e78a8d56?w=800",
  tags: ["hygiene", "wellness", "health", "daily-routine", "self-care"],
  content: `
# Building a Hygiene Routine

## Why a Routine Matters

Personal hygiene is more than looking clean — it’s about maintaining your physical health, emotional well-being, and social confidence. A well-structured hygiene routine prevents illness, helps you feel refreshed throughout the day, and builds long-term discipline.

When hygiene turns into a habit, it becomes automatic. You no longer need to rely on willpower or reminders — the routine takes care of itself. This consistency is especially valuable during busy mornings, travels, exams, or stressful periods.

A consistent hygiene routine can:
- Reduce skin irritations, acne, and body odor
- Lower the risk of bacterial and viral infections
- Boost confidence in personal, academic, and professional settings
- Encourage mindfulness and body awareness
- Improve sleep and overall daily performance

---

## The “Morning 5” Routine

Think of hygiene as your personal reset button. The following **five core steps** form a powerful morning foundation for cleanliness and focus.

### 1. Oral Care
- **Brush** your teeth for at least 2 minutes using fluoride toothpaste.
- **Floss** gently to remove food particles that brushing misses.
- **Mouthwash (optional):** Use a mild, alcohol-free mouthwash for freshness.  
*Why it matters:* Regular oral care prevents cavities, gum problems, and persistent bad breath — setting a confident tone for the day.

### 2. Face Wash
- Wash your face with lukewarm water or a mild cleanser suitable for your skin type.
- Morning cleansing removes oil and bacteria accumulated overnight.  
*Pro tip:* If you skip this, oil and dead skin cells may cause acne, dullness, or irritation.

### 3. Shower or Bath
- Clean your body thoroughly, focusing on “hot zones” — underarms, groin, feet, and behind ears.
- Use soap daily, especially in humid or hot climates.
- Dry yourself completely before dressing to prevent fungal infections.  
*Tip:* A morning shower boosts alertness and reduces stress hormones.

### 4. Deodorant or Antiperspirant
- Apply on clean, dry skin immediately after bathing.
- Choose unscented or mild products if you have sensitive skin.  
*Note:* Deodorants reduce odor, while antiperspirants also limit sweating. Neither replaces a proper wash.

### 5. Clean Clothes
- Wear fresh underwear, socks, and comfortable outerwear daily.
- Avoid reusing sweaty garments or clothes worn outdoors the day before.  
*Rule of thumb:* If it smells even a bit off, skip it. Clean clothes reflect respect for yourself and others.

---

## The Evening Wind-Down

Nighttime hygiene is just as essential as your morning routine. It helps your body relax, supports skin renewal, and ensures restful sleep.

**Evening essentials:**
- **Brush again:** Removes food and plaque build-up from the entire day and protects teeth overnight.
- **Face wash:** Clears dirt, makeup, and pollutants accumulated through the day.
- **Optional shower:** Refreshing after workouts, outdoor activities, or humid days.
- **Skin or hair care:** Apply moisturizers or serums suited to your needs.

*Tip:* Developing a calm hygiene routine signals to your brain that it’s time to unwind, improving both skin health and sleep quality.

---

## Hygiene “On the Go”

Even on busy days, maintain freshness and comfort by keeping a **portable hygiene kit** in your bag or locker.

### Recommended items:
- Small hand sanitizer or wipes
- Pocket tissues or napkins
- Fresh breath mints or sugar-free gum
- Lip balm and a small comb
- Deodorant roll-on or travel spray

These compact essentials prevent uncomfortable moments, especially after meals, workouts, or long commutes.

---

## Monthly Hygiene Upkeep

Apart from daily habits, remember to include **monthly hygiene checks**:
- Clean hairbrushes, razors, and makeup tools.
- Wash pillowcases, bedsheets, and towels regularly.
- Replace toothbrushes every 3–4 months.
- Disinfect frequently touched items like phones, earphones, and keyboards.

Routine maintenance supports long-term cleanliness and prevents recurring infections.

---

## Key Takeaway

Building a hygiene routine is one of the simplest yet most powerful forms of self-care. The more consistent you are, the more automatic — and rewarding — it becomes.

> “Take care of your body. It’s the only place you have to live.” — Jim Rohn

Remember: hygiene isn’t about perfection. It’s about progress, awareness, and respecting yourself enough to stay healthy — every single day.
`
},

 {
  id: "ls-grooming-basics",
  title: "Grooming Essentials",
  description: "Master the basics of personal grooming and presentation to look and feel your best every day.",
  category: "Life Skills",
  difficulty: "Beginner" as const,
  duration: "20 min",
  points: 120,
  image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=800",
  tags: ["grooming", "style", "presentation", "self-care", "confidence"],
  content: `
# Grooming Essentials

## Presentation Is Respect

Grooming isn’t about luxury or vanity — it’s about consistency and respect. The way you present yourself communicates how you value your body, your health, and the people you interact with. Neat, clean grooming builds credibility before you even speak.

Good grooming:
- Improves first impressions in social and professional situations
- Reflects discipline and attention to detail
- Boosts self-esteem and personal confidence
- Requires regular care, not expensive products

Remember, **grooming is self-respect in action.** The goal is not perfection — it’s consistency.

---

## Hair Care Fundamentals

### Washing
Your hair’s needs depend on its type:
- **Oily hair:** Wash every day or every other day to remove excess oil.
- **Dry or curly hair:** Wash every 2–3 days to retain natural moisture.
- **Normal hair:** Wash as needed, typically every two days.

*Tip:* Use a shampoo that suits your scalp type and follow with a mild conditioner. Over-washing strips natural oils and causes dryness, while under-washing can lead to odor, dandruff, and itchiness.

### Maintenance and Haircuts
- Trim hair every **4–6 weeks** to prevent split ends and keep a tidy shape.
- Comb or brush daily to detangle and distribute natural oils.
- Avoid excessive use of styling gels or sprays—they can build up and cause flakes.
- If you have facial hair, shape and clean it regularly.

*Why it matters:* Well-groomed hair (including beards and eyebrows) enhances your overall look and cleanliness.

---

## Nail and Hand Care

Your hands often give the first impression. Clean nails show attention to hygiene and detail.

Best practices:
- **Trim fingernails** once a week; keep them short and neat.
- **Clean under nails** to remove dirt and prevent discoloration.
- **Trim toenails straight** across to avoid ingrown nails.
- Use a **moisturizing hand cream** to prevent dryness or cracked skin.

*Shortcut tip:* Try keeping a small nail clipper in your hygiene kit — it’s an instant confidence booster before meetings or interviews.

---

## Skincare Basics

While not always discussed in grooming, skincare is essential for maintaining a refreshed appearance.

Core steps:
1. **Cleanse:** Wash your face twice a day to remove oil and dirt.
2. **Moisturize:** Use a moisturizer suited to your skin type.
3. **Sun protection:** Apply sunscreen or use moisturizer with SPF, even when indoors.

Healthy skin looks bright, feels smooth, and protects you from pollutants and premature aging.

---

## Scent Management

Golden rule: **Scent should be discovered, not announced.**

- Apply **1–2 sprays** of perfume, body mist, or cologne on pulse points (neck, wrists, or behind ears).
- Avoid mixing multiple strong scents (like deodorant + perfume + hair spray).
- Never use fragrance to cover up odor — shower first, then apply.
- Choose subtle, clean scents suitable for your environment.

*Pro tip:* Store fragrance bottles away from heat and sunlight to make them last longer.

---

## The 30-Second Clothing Check

Your outfit communicates more than you realize. Before stepping out, spend 30 seconds checking your appearance.

Clothing checklist:
- Look for stains, lint, or wrinkles.
- Do a quick **smell test** for freshness.
- Ensure **proper fit** — not too loose or too tight.
- Match your outfit to the occasion (school, office, meeting, outing).
- Check shoes — clean them often and replace worn-out socks.

Clean, well-fitted clothing always looks better than expensive brands worn carelessly.

---

## Grooming Kit Starter List

Start simple with a few basics you can build on over time:
- Hairbrush or comb
- Nail clipper and nail file
- Deodorant or perfume
- Moisturizer and sunscreen
- Razor and shaving cream
- Lint roller or cloth brush

Keeping these essentials makes daily maintenance effortless.

---

## Key Takeaway

Grooming is not about impressing others — it’s about taking pride in yourself. Small, consistent efforts build trust, confidence, and respect wherever you go.

> “Style is a way to say who you are without having to speak.” — Rachel Zoe

Stay clean, stay confident, and let your grooming speak for your discipline.
`
},

  {
  id: "ls-healthy-habits",
  title: "Developing Healthy Habits",
  description: "Learn how to build simple, consistent habits that support long-term physical and mental well-being.",
  category: "Life Skills",
  difficulty: "Beginner" as const,
  duration: "20 min",
  points: 120,
  image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=800",
  tags: ["health", "wellness", "fitness", "nutrition", "self-care"],
  content: `
# Developing Healthy Habits

## Proactive Maintenance

Your body works every day without complaint — until it’s pushed beyond its limits. Building healthy habits is not about being strict or perfect; it’s about *preventing* problems before they arise. Think of it as routine maintenance for your body and mind.

When practiced consistently, small habits make a **big impact**. Over time, they:
- Sustain daily energy levels
- Strengthen your immune system
- Enhance mood and focus
- Reduce long-term risks of lifestyle diseases
- Build discipline and self-awareness

*Health is not a one-time project. It’s a lifelong partnership with your body.*

---

## Hydration: Water as Fuel

Your body is mostly water — and every single cell depends on it. Without enough hydration, even your brain slows down, digestion becomes sluggish, and fatigue kicks in.

### Why Water Matters
- **Brain function:** Boosts concentration and memory.
- **Digestion:** Helps absorb nutrients efficiently.
- **Temperature regulation:** Prevents overheating and fatigue.
- **Detoxification:** Helps kidneys flush out waste naturally.

### Daily Goal
- **2–3 liters per day** (roughly 8–10 glasses).
- Increase intake in **hot weather, after exercise, or illness.**

**Tips:**
- Carry a refillable water bottle during the day.
- Drink a glass right after waking up — it helps rehydrate after sleep.
- If plain water feels boring, infuse it with lemon, cucumber, or mint.

*Rule of thumb:* If you’re feeling thirsty, you’re already dehydrated.

---

## Movement: NEAT vs Exercise

Movement keeps you alive — literally. It’s not only about hitting the gym; daily, moderate movement also supports your heart, joints, and mood.

### NEAT (Non-Exercise Activity Thermogenesis)
NEAT refers to all the small movements that keep your body active throughout the day:
- Walking to the shop instead of driving
- Taking stairs instead of using the lift
- Standing or stretching while on calls
- Doing household chores, gardening, or cleaning

These actions may seem small, but combined, they burn hundreds of calories and improve blood circulation — especially important for those with desk jobs.

### Exercise
While NEAT keeps you active, **structured exercise** strengthens your body on a deeper level.

- Aim for **30 minutes of moderate activity daily**.
- Mix activities such as:
  - Brisk walking or cycling
  - Yoga or stretching
  - Sports or dancing
  - Strength training (bodyweight or light weights)

**Bonus benefits:** Regular exercise releases endorphins, reduces stress, and supports better sleep and mental health.

*Consistency matters more than intensity. Even a 10-minute walk counts.*

---

## Nutrition Basics: The Plate Method

You don’t need to count calories to eat healthily — just balance your plate.

### The Plate Formula
Visualize your meal as a circle:
- **50% vegetables and fruits:** Add color — greens, carrots, tomatoes, apples — for vitamins and fiber.
- **25% protein:** Include lean sources like eggs, lentils, beans, tofu, fish, or chicken.
- **25% whole grains:** Choose whole rice, multigrain roti, or oats for steady energy.

**Additional tips:**
- Include healthy fats such as nuts, seeds, or olive oil in moderation.
- Prefer home-cooked meals and whole foods over processed snacks.
- Limit portion sizes — eat mindfully and stop when 80% full.

### Sugar and Processed Food Warnings

Modern diets often hide excess sugar and unhealthy fats in drinks and packaged snacks. 
Be aware of:
- **Liquid sugar** (soft drinks, energy drinks, sweetened teas)
- **Refined sugar** (desserts, juices, flavored yogurts)

These cause energy crashes, weight gain, and reduced focus.

**Better alternatives:** Water, coconut water, herbal tea, or fresh fruits.

---

## Rest and Sleep

Even with a great diet and workout routine, poor sleep can undo your progress. Adequate rest allows your body to:
- Repair muscles and tissues
- Regulate hormones
- Boost memory and focus

**Target:** 7–8 hours of quality sleep every night.

**Habits for better rest:**
- Keep a consistent bedtime.
- Avoid using phones 30 minutes before sleep.
- Keep your room dark, cool, and quiet.
- Practice calming habits: reading, gentle stretches, or deep breathing.

---

## Key Takeaway

True health isn’t built overnight — it’s a result of *small, consistent actions* performed daily. Drink water. Move your body. Eat real food. Rest deeply. Repeat.

Over time, these habits become second nature — your silent protective armor.

> “The first wealth is health.” — Ralph Waldo Emerson

Stay consistent, stay mindful, and let your habits shape a stronger, happier you.
`
},

 {
  id: "ls-sleep-hygiene",
  title: "Better Sleep Habits",
  description: "Discover science-backed strategies to improve your sleep quality and wake up feeling refreshed.",
  category: "Life Skills",
  difficulty: "Beginner" as const,
  duration: "20 min",
  points: 120,
  image: "https://images.unsplash.com/photo-1541781777621-af13943727dd?w=800",
  tags: ["sleep", "recovery", "rest", "health", "wellness"],
  content: `
# Better Sleep Habits (Sleep Hygiene)

## Why Sleep Matters

Sleep is one of the most powerful tools for physical restoration and mental clarity. While you sleep, your body repairs tissues, balances hormones, and strengthens memory and learning pathways.  
Lack of quality sleep weakens these processes and gradually leads to burnout.

Poor or irregular sleep can affect:
- **Focus:** Reduces attention span and learning capacity  
- **Mood:** Increases irritability and stress responses  
- **Memory:** Disrupts recall and retention  
- **Immunity:** Lowers resistance to infections and slows recovery  

Over time, chronic sleep loss increases the risk of obesity, depression, and heart disease.  
In short — **sleep is not a break from progress; it enables it.**

---

## The 3-2-1 Rule

A simple nightly countdown for optimal rest:

- **3 Hours Before Bed:** Finish heavy meals. Late-night eating forces your body to digest instead of rest.  
- **2 Hours Before Bed:** Stop work, studying, or mentally stimulating activities. Begin winding down.  
- **1 Hour Before Bed:** Avoid screens (phones, laptops, TVs). Blue light suppresses **melatonin**, the hormone that tells your body it's time to sleep.

**Bonus:** Try replacing screens with relaxing activities — reading, journaling, stretching, or calming music.

---

## Optimizing Your Environment

Your sleep setup can make or break your rest quality. Build a space that tells your brain: *“It’s time to relax.”*

### Key Elements for a Sleep-Friendly Room
- **Temperature:** Keep it cool — around **18–20°C** is ideal for most people.  
- **Darkness:** Block light using blackout curtains or a sleep mask. Light signals your brain to stay awake.  
- **Noise Control:** Try earplugs, white noise, or a steady fan if you live in a noisy area.  
- **Comfort:** Use a supportive mattress and clean bedding.  
- **Scent:** Calm scents like lavender can trigger relaxation.

Avoid turning your bed into a workspace. Train your brain to associate your bedroom with rest — not productivity or scrolling.

---

## Building a Healthy Sleep Routine

Your body thrives on rhythm. Going to bed and waking up at the same time every day strengthens your **circadian rhythm** (your body’s internal clock).

Best practices:
- Set a **regular bedtime** and follow it even on weekends.  
- Get **morning sunlight** exposure to help your body identify day vs. night.  
- If you can’t sleep after 20 minutes, get up and do a calm activity (like reading) before returning to bed.  
- Avoid **long daytime naps** — if needed, keep them under 20 minutes.

With time, regular sleep patterns train your brain to feel sleepy naturally at the right hour.

---

## Evening Wind-Down Ideas

Create a mini routine that signals to your body it’s time to rest:
- Take a warm shower — it relaxes muscles and slightly lowers body temperature afterward.  
- Write your thoughts or to-do list to clear mental clutter.  
- Practice slow breathing or meditation.  
- Dim room lights an hour before bedtime.  

Consistency with such simple patterns builds strong sleep habits without extra effort.

---

## Common Sleep Disruptors

Be mindful of everyday behaviors that sabotage rest:
- Caffeine after 4 PM (coffee, tea, chocolate, energy drinks)  
- Excessive screen time before bed  
- Heavy, spicy, or sugary meals late at night  
- Alcohol — it may make you sleepy initially but disrupts deep sleep cycles  

Awareness of these triggers makes managing sleep hygiene much easier.

---

## Key Takeaway

Sleep is not laziness — it’s recovery. Resting properly enhances your focus, creativity, emotional stability, and physical health.  
Treat your sleeping hours as seriously as your working hours; both are the pillars of high performance and a clear mind.

> “Sleep is the golden chain that ties health and our bodies together.” — Thomas Dekker
`
},


  // ==================================================================================
  // HOME MANAGEMENT
  // ==================================================================================
  {
  id: "ls-organizing-space",
  title: "Organizing Your Space",
  description: "Learn how to create a clutter-free, calm environment that supports focus, productivity, and peace of mind.",
  category: "Life Skills",
  difficulty: "Beginner" as const,
  duration: "20 min",
  points: 120,
  image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800",
  tags: ["organization", "cleaning", "productivity", "minimalism", "well-being"],
  content: `
# Organizing Your Space

## Clear Space, Clear Mind

Your environment doesn't just reflect your state of mind—it shapes it.  
A cluttered room can create visual noise that triggers stress, distraction, and procrastination, while an organized space helps your brain relax and focus.

Organization isn’t about being rigid or living minimally; it’s about **designing a space that supports your goals and lifestyle.** When things are where they belong, your day feels smoother and calmer.

Benefits of an organized environment:
- Improves focus and mental clarity  
- Saves time by reducing lost items  
- Promotes relaxation and better sleep  
- Builds discipline and reduces decision fatigue  

![Organized desk](https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80)

---

## The Golden Rule: Everything Has a Home

This is the foundation of all organization. Every single item you own should have a *designated spot*.

Examples:
- Keys → key bowl or wall hook  
- Clothes → folded in drawers or hung in wardrobe  
- Books → bookshelf or bedside tray  
- Bags → on a hook or stand  
- Chargers → dedicated drawer or box  

If something doesn’t have a home, it will continually wander around your space and become clutter.

**Example:**  
If you keep losing your phone charger, the solution isn’t memory—it’s assigning it a fixed drawer or basket. Once your items have homes, tidying up becomes automatic.

---

## The "One Touch" Rule

A simple system for staying organized without effort: **touch things only once.**

Instead of picking something up, moving it around, then dumping it again—return it to its place *immediately.*  
This approach prevents clutter buildup throughout the week.

Common examples:
- Coat → hang right after entering  
- Shoes → into the shoe rack  
- Backpack → hung on hook  
- Mail → sorted or discarded instantly  

Avoid the “I’ll do it later” trap—because later usually becomes *never*.

---

## The Decluttering Method (Monthly Reset)

Set aside one day each month to do a quick, honest audit of your belongings. Clutter often creeps in silently, and regular check-ins keep it under control.

| Category | Action |
|-----------|---------|
| **Keep** | Necessary or used within the last 6 months |
| **Donate / Sell** | Still useful, but no longer needed |
| **Recycle / Trash** | Broken, expired, or unusable |

This method frees space, lightens mental load, and prevents belongings from owning *you*.  

**Pro tip:** Keep a small “donation box” in your room so unused items can be collected gradually instead of waiting for big cleanup days.

---

## Optimize Your Space Layout

Think of your room as a system—each zone should serve a purpose.  
Organize your environment around how you actually live.

### Tips for Functional Design:
- **Work zone:** Desk with minimal objects, good light, and no distractions.  
- **Rest zone:** Bed area stays free of clutter and electronics.  
- **Storage zone:** Shelves, boxes, or baskets for neatly hiding items.  
- **Daily reach zone:** Keep frequently used items within easy reach; rarely used ones can be stored higher up.

Use vertical space (hooks, shelves) to reduce floor clutter. Label boxes or drawers if needed—it saves time and mental effort later.

---

## Sustainable Organization

Good organization also means mindful consumption. Before bringing anything new home, ask:
1. Do I already own something similar?  
2. Where will I keep this item?  
3. Will I use this regularly or is it an impulse buy?

Fewer, high-quality things that you love are easier to maintain than many items gathering dust.

---

## Maintaining the Habit

The real magic isn’t in cleaning—it’s in **maintenance.**  
Spend just **5 minutes** daily resetting your space:
- Make your bed  
- Return objects to their homes  
- Clear your desk before sleeping  

These micro-habits prevent weekend clean-up chaos and keep your mind clear for what truly matters.

---

## Key Takeaway

Clarity in your surroundings creates clarity in your thoughts.  
An organized space promotes efficiency, calmness, and control over your environment.

> “For every minute spent organizing, an hour is earned.” — Benjamin Franklin
`
},

 {
  id: "ls-basic-cleaning",
  title: "Basic Cleaning Skills",
  description: "Essential, simple cleaning techniques to keep your space consistently tidy, hygienic, and stress-free.",
  category: "Life Skills",
  difficulty: "Beginner" as const,
  duration: "20 min",
  points: 120,
  image: "https://plus.unsplash.com/premium_vector-1682306928835-d723950f7d84?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  tags: ["cleaning", "chores", "maintenance", "organization", "home-care"],
  content: `
# Basic Cleaning Skills

## Maintenance vs. Deep Cleaning

Cleaning feels overwhelming mostly when it’s delayed for too long. Small, regular cleaning sessions prevent dirt and clutter from building up, making your home easier to manage and far more hygienic. A clean space also supports better focus and reduces stress.

Think of cleaning as **maintenance**, not punishment. Just like brushing your teeth, frequent light cleaning keeps everything under control so deep cleaning becomes faster and less exhausting.

![Cleaning supplies](https://plus.unsplash.com/premium_vector-1682306928835-d723950f7d84?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

---

## Daily Maintenance (10–15 Minutes)

Short, daily actions keep mess from turning into chaos. These habits are usually enough to keep a small room or apartment looking presentable most of the time.

Daily essentials:
- **Dishes:** Wash or load them into the sink/dishwasher immediately after meals. Avoid letting plates sit overnight.  
- **Surfaces:** Wipe kitchen counters, tables, and frequently touched spots (like switches and handles).  
- **Bed:** Make your bed every morning—it instantly makes the room look tidier.  
- **Quick floor check:** Pick up visible trash or clutter from the floor.

Making your bed and doing dishes regularly create instant order and set a productive tone for the rest of the day.

---

## The Weekly Reset (30–60 Minutes)

Once a week, do a slightly deeper clean to reset your space. This prevents dust, stains, and odors from building up.

1. **Dusting**
   - Work from **top to bottom**: fans and shelves first, then tables, then floor.  
   - Use a microfiber cloth or duster to trap dust instead of just moving it around.

2. **Floors**
   - Vacuum carpets and rugs.  
   - Sweep and mop hard floors, especially in high-traffic areas like the kitchen and entrance.

3. **Bathroom**
   - Scrub the toilet bowl and clean the seat and handle.  
   - Wipe the sink, taps, and mirror to remove toothpaste, soap, and water marks.  
   - Rinse or scrub shower areas to prevent soap scum and mold.

4. **Trash**
   - Empty all bins (room, bathroom, kitchen).  
   - Replace liners and quickly wipe the bin if it smells or looks dirty.

Weekly resets help your home stay fresh, making it easier to invite guests without panic cleaning.

---

## Monthly or Deep Cleaning Tasks

Once a month (or every few weeks), focus on areas that are often ignored in daily or weekly routines:

- Clean under the bed, sofa, and behind furniture.  
- Wipe doors, switchboards, baseboards, and window sills.  
- Wash bedsheets, pillow covers, and cushion covers.  
- Clean inside appliances (microwave, fridge shelves, etc.).  

These deeper tasks keep hidden dust, germs, and odors under control.

---

## Essential Cleaning Tools

You don’t need a huge collection of products to keep your space clean. A few reliable basics are enough for most rooms:

- **All-purpose cleaner:** Works on most surfaces like tables, counters, and tiles.  
- **Microfiber cloths:** Trap dust and clean effectively, often with just water.  
- **Broom and dustpan or vacuum:** For daily or weekly floor cleaning.  
- **Mop or floor wiper:** For hard floors, especially in kitchens and bathrooms.  
- **Toilet brush and bathroom cleaner:** To maintain hygiene in the washroom.  
- **Scrub brush or sponge:** For stubborn stains or tough spots.

Simple tools + consistency = a clean, healthy home.

---

## Smart Cleaning Tips

- Start with the **most visible area** first for instant motivation.  
- Set a **10-minute timer** and clean as much as you can—short bursts add up.  
- Keep cleaning supplies in easy-to-reach spots (like a small caddy or basket).  
- Play music or a podcast while cleaning to make it more enjoyable.

---

## Key Takeaway

A clean space reduces stress, improves focus, and makes rest truly restful.  
You don’t need to clean for hours—just stay consistent with small daily and weekly habits.

> “Cleanliness is next to godliness.” — Proverb
`
}, 


  {
  id: "ls-laundry-basics",
  title: "Laundry 101",
  description: "Learn step-by-step how to wash, dry, and care for your clothes so they last longer and look better.",
  category: "Life Skills",
  difficulty: "Beginner" as const,
  duration: "25 min",
  points: 140,
  image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800",
  tags: ["laundry", "clothing", "chores", "home-care", "fabric-care"],
  content: `
# Laundry 101

## Preserving Your Clothes

Laundry is not just about “making clothes smell nice” — it is about **caring** for fabric so it lasts longer, keeps its shape, and looks fresh each time you wear it. Wrong habits can cause shrinking, fading, stretching, or even holes in your favorite items.

Good laundry habits:
- Save money by extending clothing life  
- Keep colors bright and whites truly white  
- Maintain fabric softness and comfort  
- Help you look neat and well put together  

![Laundry basket and machine](https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80)

---

## Step 1: Sorting (Most Important)

Never throw everything into one wash. Sorting clothes properly prevents color bleeding, fabric damage, and lint issues.

Basic sorting categories:
- **Whites & Light colors:** Usually washed in warm or cool water to keep them bright.  
- **Darks & Colors:** Wash in cold water to reduce fading and color transfer.  
- **Towels & Bedsheets:** Wash separately; they produce lint and need a more thorough wash.  
- **Delicates (lingerie, silk, lace, gym wear):** Use a gentle cycle or hand wash to protect the fabric.

**Example:**  
A single new red shirt washed with white clothes can turn the entire load pink. Always wash strong or new colors separately the first few times.

Additional tips:
- Turn dark clothes inside out to reduce fading.  
- Close zippers and hooks so they do not snag other fabrics.  
- Use a laundry bag for very delicate items (like bras or small garments).

---

## Step 2: Reading Labels

Clothing labels are small instruction manuals sewn into your garments. Learning to read them helps you choose the right water temperature, spin cycle, and drying method.

Common symbols:
- 🟦 **Square + circle** → Tumble dry allowed (you can use the dryer).  
- ✋ **Bucket with a hand** → Hand wash only; machine washing may damage it.  
- ❌ **Triangle crossed out** → Do not bleach.  
- • **One dot** → Low heat (gentle drying or cool iron).  
- ••• **Three dots** → High heat allowed.

Other helpful icons you might see:
- Iron symbol with X → Do not iron.  
- Circle with letter (P, F) → Dry clean instructions.  

Ignoring labels can cause shrinking, melting prints, or damaged fabric. Take 5 seconds to check the tag before washing or drying something new.

---

## Step 3: The Washing Process

Follow these steps to run a basic, effective laundry cycle:

1. **Pre-treat stains immediately**  
   - Dab (never rub hard) stains with water or a small amount of detergent.  
   - Treat food, sweat, or mud stains before they dry for better results.

2. **Choose the right settings**  
   - **Water temperature:**  
     - Cold → dark colors, delicate fabrics, clothes that may shrink.  
     - Warm → everyday loads, lightly soiled items.  
     - Hot → towels, bedsheets, and heavily soiled items (if fabric allows).  
   - **Cycle type:**  
     - Normal → regular cottons and mixed loads.  
     - Delicate → light, thin, or special fabrics.  
     - Heavy/Bulky → towels, bedding.

3. **Do not overload the machine**  
   - Clothes should have space to move and spin.  
   - Overloading leads to poor cleaning and more wrinkles.

4. **Measure detergent correctly**  
   - Use the scoop or cap markings; using too much can leave residue and stiffness.  
   - For high-efficiency machines, use HE-compatible detergent if required.

---

## Step 4: Drying and After-Care

Drying is just as important as washing for preserving shape and texture.

- **Dryer use:**  
  - Use low or medium heat for most clothes.  
  - High heat is mainly for towels and sturdy cottons.  
  - **Clean the lint filter every time** before or after drying — this improves efficiency and is important for safety.

- **Air drying:**  
  - Hang delicate, stretchy, or printed items to dry on a rack or hanger.  
  - Lay wool or heavy knitwear flat to dry to avoid stretching.

- **Folding and putting away:**  
  - Remove clothes from the machine or dryer quickly to avoid wrinkles and odor.  
  - Fold or hang them immediately and place them in their proper storage.  

Laundry isn’t truly finished until clothes are dry, folded, and put away.

---

## Special Cases

A few extra situations to remember:
- **New dark or bright clothes:** Wash separately the first 1–2 times to prevent color bleed.  
- **Gym clothes:** Wash soon after use; sweat left in fabric can cause odor and damage.  
- **Heavily soiled items (muddy, greasy):** Rinse or shake off excess dirt before putting them in the machine.

---

## Essential Laundry Tools

You do not need a lot of products to do laundry correctly. Start with:

- Laundry detergent (liquid or powder)  
- Fabric conditioner/softener (optional)  
- Stain remover or bar soap for pre-treating  
- Laundry basket or hamper  
- Drying rack or clothesline  
- Hangers for shirts, dresses, and delicate items  

---

## Key Takeaway

Laundry is clothing care and self-respect.  
When you wash, dry, and store clothes properly, they last longer, look better, and help you feel more confident every time you step out.

> "Sorting laundry is a metaphor for life. Separate the darks from the lights."
`
},


  {
  id: "ls-home-safety",
  title: "Home Safety Basics",
  description: "Learn simple, essential safety habits to protect yourself, your family, and your home.",
  category: "Life Skills",
  difficulty: "Beginner" as const,
  duration: "20 min",
  points: 120,
  image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80&auto=format&fit=crop",
  tags: ["safety", "emergency", "preparedness", "home-care"],
  content: `
# Home Safety Basics

## Being Prepared

Emergencies rarely arrive with warnings. Developing basic safety habits in advance reduces panic, protects lives, and minimizes damage when something does go wrong. Safety is not about living in fear—it is about being ready.

Small, consistent precautions:
- Help you respond calmly instead of freezing.
- Keep minor issues from becoming major disasters.
- Protect children, elders, and pets who depend on you.

![Fire extinguisher](https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80&auto=format&fit=crop
)

---

## Fire Safety

Fire can spread very quickly, but simple preparations make a big difference.

Key practices:
- **Smoke detectors:** Test them at least every 6 months and replace batteries as needed.  
- **Kitchen rule:** Never throw water on an oil or grease fire; it can make the flames spread.  
- **Safer option:** Turn off the stove and carefully cover the pan with a metal lid, or use baking soda on small grease fires.  
- **Exit plan:** Know at least **two exit routes** from your home (for example: front door + balcony or back door).  
- **Clear pathways:** Keep hallways and exits free of clutter so you can move quickly.

If a fire is large or spreading, leave immediately and call emergency services. Do not try to be a hero—your safety comes first.

---

## Electrical and Gas Safety

Many home accidents are caused by electricity or gas leaks.

Good habits:
- Do not overload plug points with too many devices.
- Unplug appliances like irons, kettles, and heaters when not in use.
- Replace damaged wires, loose plugs, or flickering switches.
- If you smell gas: do not light a match or turn on electrical switches—open windows and contact the gas provider or emergency services.

When in doubt, call a qualified professional instead of trying risky repairs yourself.

---

## Security Habits

Safety also includes protecting your home from theft or unauthorized entry.

Everyday security basics:
- Lock doors and windows, especially at night or when leaving home.
- Do not hide spare keys in obvious places (under mats, in planters, on door frames).
- Share extra keys only with trusted people.
- Be cautious about sharing your address and daily routine publicly (including on social media).

Simple habits can prevent major financial and emotional losses.

---

## The Emergency Kit

In a real emergency, there is no time to search for things. A small, accessible kit helps you act faster.

Useful items to include:
- Flashlight and extra batteries.
- Basic first aid supplies (bandages, antiseptic, pain relief, any personal medicines).
- Bottled water and a few non-perishable snacks.
- Photocopies of ID, important documents, and emergency contact numbers **written on paper**.
- Small amount of cash, if possible.

Phones can run out of battery or network—paper and a simple torch still work when technology fails.

---

## Emergency Contacts and Communication

Everyone in the home should know:
- Local emergency numbers (fire, ambulance, police).
- How to describe your location clearly.
- Who to call in case you cannot reach family (trusted neighbor, relative, or friend).

If you live with others, discuss what each person should do in a fire, injury, or power outage—clear roles reduce confusion.

---

## Key Takeaway

Safety is responsibility, not fear. Prepared homes protect lives, reduce stress, and create peace of mind even when things go wrong.

> "Better safe than sorry."
`
},


  // MONEY MANAGEMENT

  {
  id: "ls-understanding-money",
  title: "Understanding Money",
  description: "Learn how money works, how it flows, and how to build smart financial habits from an early age.",
  category: "Life Skills",
  difficulty: "Beginner" as const,
  duration: "20 min",
  points: 120,
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
  tags: ["money", "finance", "economics", "budgeting"],
  content: `
# Understanding Money

## The Flow of Money

Money is not just something you earn—it's something you **manage**.  
Financial literacy means knowing where money comes from, where it goes, and how to control it instead of letting it control you.

When you understand money, you:
- Make smarter daily spending decisions  
- Reduce stress related to finances  
- Feel confident about your future  
- Build habits that support long-term wealth  

![Money planning](https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop)

---

## Key Concepts

### Income
Money that comes **into** your life:
- Salary or wages
- Allowance or pocket money
- Freelancing or side projects
- Gifts, refunds, or bonuses

### Fixed Expenses
Expenses that remain mostly the same every month:
- Rent or hostel fees
- Mobile and internet bills
- Education fees
- Subscriptions

### Variable Expenses
Expenses that change regularly:
- Food and groceries
- Transport and fuel
- Entertainment and outings
- Shopping and personal care

**Tip:** Track your spending for one month—real numbers reveal real habits.

---

## Needs vs. Wants

Understanding this difference is the foundation of good money habits.

### Needs (Essential)
- Food and basic groceries  
- Electricity and water  
- Transport to school/work  
- Basic clothing and hygiene  

### Wants (Optional)
- Eating out
- Branded clothes
- Gaming and streaming subscriptions
- Latest gadgets

**Rule to remember:**  
👉 Needs → Savings → Wants

---

## Assets vs. Liabilities

How you spend money matters more than how much you earn.

- **Assets:** Help you grow financially  
  - Savings and investments  
  - Education and skills  
  - Income-generating tools  

- **Liabilities:** Cost you money regularly  
  - Credit card debt  
  - Unnecessary loans  
  - Expensive items with no long-term value  

Before spending, ask:  
**“Will this help my future—or hurt it?”**

---

## Key Takeaway

Wealth is not about earning more—it's about managing better.

> *“Do not save what is left after spending, but spend what is left after saving.”* — Warren Buffett
`
},


  {
  id: "ls-budgeting-basics",
  title: "Budgeting for Beginners",
  description: "Learn how to create and manage a simple, practical budget that fits your income and lifestyle.",
  category: "Life Skills",
  difficulty: "Intermediate" as const,
  duration: "25 min",
  points: 150,
  image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1200&auto=format&fit=crop",
  tags: ["budgeting", "planning", "finance", "money-management", "savings"],
  content: `
# Budgeting for Beginners

## Giving Every Rupee a Job

A budget is not about restriction—it's about **freedom and clarity**.  
When you know exactly where your money is going, you can spend confidently, save intentionally, and reduce financial stress.

Budgeting helps you:
- Avoid money-related anxiety and surprises  
- Prioritize what truly matters  
- Build saving habits automatically  
- Control spending instead of reacting to it  

![Budget planner](https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1200&auto=format&fit=crop)

---

## The 50 / 30 / 20 Rule

A simple and effective budgeting framework for most incomes.  
Divide your **after-tax income** into three parts:

**|  Category  |  Percentage  |  Examples  |**\n
**|-----------|-------------|-----------|**  \n
**| Needs     |** 50% **|** Rent, groceries, transport, utilities, insurance, minimum loan payments **|** \n
**| Wants    |** 30% **|** Eating out, entertainment, shopping, hobbies, travel **|**                    \n
**| Savings  |** 20% **|**  Emergency fund, investments, future goals, extra debt repayment **|**       \n

**Tip:** If saving 20% feels difficult, start with 5–10%. Consistency matters more than the amount.

---

## Zero-Based Budgeting

One of the most powerful budgeting methods:  
**Income – Expenses = 0**

Every single rupee is assigned a purpose—nothing is left unplanned.

### How to create a zero-based budget:
1. List your **total monthly income**  
2. Write down all **fixed expenses**  
3. Estimate **variable expenses**  
4. Allocate the remaining amount to **savings and goals**

### Example (₹25,000 monthly income)

**Needs (₹12,500)**
- Rent: ₹7,000  
- Groceries: ₹3,000  
- Transport: ₹1,500  
- Utilities: ₹1,000  

**Wants (₹7,500)**
- Eating out: ₹2,500  
- Entertainment: ₹2,000  
- Shopping: ₹3,000  

**Savings (₹5,000)**
- Emergency fund: ₹3,000  
- Phone upgrade goal: ₹2,000  

✔ Total: ₹25,000 — Zero-based budget complete

---

## Step-by-Step: Create Your First Budget

### Week 1: Track Everything
Write down **every expense** for 7 days—even ₹10 chai.  
Small daily habits reveal big monthly leaks (₹50 coffee × 30 = ₹1,500).

### Week 2: Categorize Spending
Group expenses into:
- Needs  
- Wants  
- Savings  

You’ll often discover:
- Subscriptions you forgot about  
- Higher food delivery costs than expected  
- Impulse purchases adding up quickly  

### Week 3: Build the Budget
1. Calculate average monthly income  
2. Apply the 50/30/20 rule (adjust if needed)  
3. Use a notebook, spreadsheet, or app  

### Week 4: Review & Adjust
See what worked and what didn’t.  
Budgets improve through small, regular adjustments.

---

## Tracking Tools (Choose One)

**Simple & effective options:**
- **Notebook method:** Daily manual entries  
- **Google Sheets / Excel:** Free templates with auto-calculation  
- **Apps:** Money Manager, Walnut, ET Money  
- **Bank apps:** Built-in spending analysis tools  

**Pro tip:** Track strictly for the first **30 days**—habits form after that.

---

## Common Budget Busters

Silent money leaks to watch for:
- Daily snacks/coffee: ₹50 × 30 = ₹1,500  
- Food delivery fees: ₹40 × 15 = ₹600  
- Unused subscriptions: ₹200–500  
- Impulse shopping: ₹1,000+  

### Quick Fixes
- Make coffee at home  
- Plan grocery shopping weekly  
- Cancel unused subscriptions  
- Apply a 24-hour pause before non-essential purchases  

---

## Emergency Fund Comes First

Before gadgets or vacations, build a small safety net.

**Starter goal:** ₹10,000–25,000  
**Where to keep:** Savings account or liquid mutual fund  
**Use only for:** Medical needs, urgent repairs, income gaps  

This fund protects you from falling into debt during emergencies.

---

## Key Takeaway

Budgeting is not about cutting joy—it's about **designing your financial future**.  
When every rupee has a purpose, you gain control, confidence, and peace of mind.

> *“A budget is telling your money where to go instead of wondering where it went.”* — Dave Ramsey
`
},


  {
  id: "ls-saving-habits",
  title: "Building Saving Habits",
  description: "Understand why saving matters and learn practical, realistic ways to start building wealth from today.",
  category: "Life Skills",
  difficulty: "Beginner" as const,
  duration: "20 min",
  points: 120,
  image: "https://images.unsplash.com/photo-1634474588707-de99f09285c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  tags: ["saving", "future", "finance", "emergency", "wealth-building"],
  content: `
# Building Saving Habits

## Pay Yourself First

Saving should not depend on whatever is "left over" at the end of the month—because most of the time, nothing is left.  
Instead, treat saving like a **mandatory bill you pay to yourself first**.

### What to do when money arrives:
1. Immediately move **10–20%** into a separate savings account  
2. Manage your expenses with the remaining **80–90%**  
3. Automate this transfer so saving happens without effort  

This simple mindset shift turns saving from a struggle into a habit.

![Saving money in piggy bank](https://images.unsplash.com/photo-1634474588707-de99f09285c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

---

## The Emergency Fund

An emergency fund is your **financial safety net**.  
It protects you from debt when life throws unexpected problems.

### Target Amount
**₹25,000 – ₹1,00,000**  
(Enough to cover 3–6 months of basic expenses like food and rent)

### Use it ONLY for:
- Medical emergencies  
- Urgent repairs (phone, laptop, bike)  
- Sudden job or income loss  
- Family emergencies  

### NEVER use it for:
- Shopping or gadgets  
- Vacations or parties  
- Regular bills or subscriptions  

**Pro tip:** Keep this fund in a separate savings account with no debit card attached.

---

## Goal-Based Saving

Saving becomes easier when your money has a **clear purpose**.

**| Goal Type | Timeframe | Examples |** \n
**|------------|------------|-----------|**   \n
**| Short-term |** 1–6 months **|** Headphones, clothes, phone accessories **|** \n
**| Medium-term |** 6–18 months **|** Laptop, vacation, bike down payment **|**\n
**| Long-term |** 2+ years **|** College fees, vehicle, home deposit **|**\n

**Motivation trick:**  
Rename accounts like *“Laptop Fund”* instead of just *“Savings”*.

---

## Simple Saving Strategies for Beginners

Easy ways to start saving without stress:

1. **Round-up saving:** Round expenses upward and save the difference  
2. **No-spend day:** One day per week with zero unnecessary spending  
3. **Subscription audit:** Cancel unused apps (₹200–₹500/month saved)  
4. **Cash envelopes:** Fixed limits for food, fun, and shopping  

### Example (₹20,000 monthly income):
- ₹500 → Emergency fund  
- ₹500 → Short-term goal  
- ₹500 → Long-term goal  
- ₹500 → Fixed deposit or investment  

✔ Total saved: ₹2,000/month (10%)

---

## The Power of Compound Interest

Time is more powerful than money.  
Even small amounts grow massively when given enough years.

**Saving ₹5,000 per month at ~7% interest:**
- 5 years → ₹3.5 lakh  
- 10 years → ₹8.2 lakh  
- 20 years → ₹23 lakh  
- 30 years → ₹52 lakh  

**Key truth:**  
The earlier you start, the more money works for you.  
Delaying by just a few years can cost lakhs in lost growth.

---

## Where to Keep Your Savings

Beginner-friendly, low-risk options:

- **Savings Account:** 3–4% interest, instant access  
- **Fixed Deposits (FD):** 6–7% interest, locked for a fixed period  
- **Recurring Deposits (RD):** Monthly saving with guaranteed returns  
- **Liquid Mutual Funds:** Slightly higher returns with quick withdrawal  

**Best start:**  
High-interest savings account + 1-year fixed or recurring deposit.

---

## Common Saving Mistakes to Avoid

❌ Waiting for “extra money” that never comes  
❌ Mixing savings with daily spending account  
❌ Using savings during emotional or stressful moments  
❌ Comparing your progress with others  

**Remember:** Everyone’s journey is different.

---

## Key Takeaway

Saving is a **habit and mindset**, not a big number.  
₹100 per week becomes ₹5,200 a year.  
Small, consistent actions create long-term security and freedom.

> *“It’s not about how much money you make, but how much money you keep.”*
`
},


  {
  id: "ls-smart-spending",
  title: "Smart Spending Decisions",
  description: "Learn how to make thoughtful purchase decisions that maximize value, avoid regret, and protect your future finances.",
  category: "Life Skills",
  difficulty: "Intermediate" as const,
  duration: "25 min",
  points: 150,
  image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
  tags: ["shopping", "decisions", "value", "consumer", "money-mindset"],
  content: `
# Smart Spending Decisions

## Value Over Price

Smart spending focuses on **long-term value**, not short-term excitement.  
The cheapest option today often becomes the most expensive choice tomorrow.

### Real cost comparison:
- ₹500 shirt lasting 2 months → **₹250/month**
- ₹2,000 shirt lasting 2 years → **₹83/month**
- ₹10,000 laptop lasting 3 years → **₹278/month**
- ₹3,000 laptop lasting 6 months → **₹500/month**

**Lesson:** Quality usually saves money over time.

![Smart shopping](https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop)

---

## The 24-Hour Rule

For **any non-essential purchase above ₹500**:

1. Add the item to cart or wishlist  
2. Do **not** checkout immediately  
3. Wait at least **24 hours**  
4. Review the decision with a calm mind  

**Why it works:**  
Most impulse urges fade overnight. Emotions spend quickly—logic protects your money.

**Tip:** Use notes or reminders to track paused purchases.

---

## Cost-Per-Use (CPU) Formula

**Real cost = Price ÷ Expected usage**

**| Item | Price | Expected Use | Cost per Use |** \n
|------|------|----------------|---------------|\n
**|** Jacket **|** ₹1,500 **|** 100 wears **|** ₹15/use **|**\n
**|** Cheap shirt **|** ₹400 **|** 5 wears **|** ₹80/use **|**\n
**|** Laptop **|** ₹12,000 **|** 2,000 hours **|** ₹6/hour **|**\n
**|** Earphones **|** ₹2,000 **|** 500 hours **|** ₹4/hour **|**

**Golden Rule:**  
Pay more upfront **only if** the cost per use is lower.

---

## The 5-Question Framework

Before buying anything non-essential, ask:

1. **Do I truly need this—or just want it right now?**  
2. **Can I afford it today without stress or debt?**  
3. **Will I use this regularly?**  
4. **Do I already own something similar?**  
5. **Is this the best quality for this price?**

If **any answer is “No” → Walk away.**

---

## Comparison Shopping Checklist

Before finalizing purchases above ₹1,000:

- [ ] Compare 2–3 similar options  
- [ ] Read recent reviews (not just star ratings)  
- [ ] Check warranty and return period  
- [ ] Apply student, bank, or festival offers  
- [ ] Wait for sales (Amazon, Flipkart, Myntra)  
- [ ] Use price trackers like Keepa  

**Patience saves 20–50% on electronics and gadgets.**

---

## Smart Shopping Habits

Daily habits that protect your wallet:

1. **Cash envelope system:** Fixed weekly fun money  
2. **Shopping list rule:** Never shop without a list  
3. **Unsubscribe from promo emails** (reduces temptation)  
4. **Avoid weekend mall visits**  
5. **Use cash for wants** (harder to overspend)

### Helpful apps:
- Price tracking: Keepa, PriceHistory  
- Coupons & deals: DesiDime, GrabOn  
- Cashback: CashKaro, Magicpin  

---

## Subscription Audit

One of the biggest hidden expenses.

**Example monthly costs:**
- Netflix → ₹149  
- Spotify → ₹119  
- Amazon Prime → ₹299  
- Gym → ₹1,000  

**Total:** ₹1,567/month → ₹18,804/year

### Monthly audit steps:
1. List all subscriptions  
2. Use each at least **3 times this week**  
3. Cancel unused services  
4. Share family plans where possible  

---

## The Opportunity Cost Mindset

Every rupee spent means giving up something else.

**₹2,000 could mean:**
- 4 months of emergency savings  
- 40 home-cooked meals  
- One month of phone bills  
- An investment worth ₹2,500 in 5 years  

**Ask yourself:**  
*“What future benefit am I giving up by spending this now?”*

---

## Key Takeaway

**Pause before you pay.**  
Emotion spends quickly. Logic builds wealth.  
Smart spending isn’t about deprivation—it’s about choosing future freedom over instant gratification.

> *“Too many people spend money they haven’t earned, to buy things they don’t want, to impress people they don’t like.”* — Will Rogers
`
},


  // ==================================================================================
  // TIME MANAGEMENT

  {
  id: "ls-planning-day",
  title: "Planning Your Day",
  description: "Learn simple techniques to structure your day for maximum productivity and calm.",
  category: "Life Skills",
  difficulty: "Beginner" as const,
  duration: "15 min",
  points: 100,
  image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800",
  tags: ["planning", "productivity", "schedule", "time-management", "focus"],
  content: `
# Planning Your Day

## Intentional vs. Reactive

You have two choices every morning:
- **Reactive Day:** Let emails, notifications, and urgent requests control your time
- **Intentional Day:** Decide in advance what matters most and protect that time

Reactive days feel busy but leave you exhausted and unfulfilled. Intentional days feel calm, controlled, and genuinely productive.

**The difference:**
\`\`\`
Reactive: "What should I do next?" → Constant decision fatigue
Intentional: "I know exactly what comes next" → Flow state + momentum
\`\`\`

![Planner and coffee](https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80)

---

## The "Night Before" Technique

Spend **5 minutes every evening** planning tomorrow. This simple habit eliminates morning chaos.

**Nightly planning checklist:**
1. Write your **top 3 priorities** for tomorrow (not 10, just 3)
2. Block specific **time slots** for each (9-10 AM, etc.)
3. Prepare tomorrow's clothes, bag, and workspace
4. Review your calendar for conflicts

**Why it works:**
- Morning brain makes better decisions with less stress
- Prevents "decision fatigue" from small choices
- Improves sleep quality (your subconscious feels prepared)

---

## Time Blocking Method

To-do lists tell you *what* to do. Time blocks tell you *when* to do it.

**Sample Morning Block Schedule:**
\`\`\`
8:00-9:00 → Morning routine (exercise, breakfast, hygiene)
9:00-10:30 → Deep work / Study (most important task)
10:30-10:45 → Break (walk, stretch, water)
10:45-12:00 → Secondary tasks / Assignments
12:00-13:00 → Lunch + light tasks (emails, calls)
\`\`\`

**Key rules:**
- Block time in **90-minute chunks max** (brain's natural focus cycle)
- Always schedule **breaks** (5-15 min between blocks)
- Include **buffer time** for unexpected delays

---

## Eat the Frog Principle

**Do your hardest, most important task first**—before checking phone or social media.

**Why mornings work best:**
- Highest willpower and mental energy
- Dopamine boost makes everything else easier
- Anxiety about "that task" disappears instantly

**Example:** Studying for exams, writing reports, difficult math problems, job applications.

**Pro tip:** If your frog feels overwhelming, break it into "first 25 minutes." Momentum takes over.

---

## The 1-3-5 Rule

Realistic daily task planning:
- **1 big task** (your frog)
- **3 medium tasks** (1-2 hours each)
- **5 small tasks** (15-30 min each)

**Sample day:**
\`\`\`
1 BIG: Complete chemistry chapter + practice questions
3 MEDIUM: Math assignment, essay outline, gym workout
5 SMALL: Reply emails, organize notes, laundry, grocery list, water plants
\`\`\`

This prevents overwhelming to-do lists while ensuring real progress.

---

## Handling Interruptions

**Protect your planned time:**
\`\`\`
Phone on silent / Do Not Disturb during deep work blocks
Email/social media → Check only 2x daily (noon + 6 PM)
Tell family/friends: "Working 9-11 AM, available after"
Unexpected tasks → Ask: "Can this wait 90 minutes?"
\`\`\`

**Emergency rule:** True emergencies interrupt. Preferences do not.

---

## Evening Review (3 Minutes)

Before bed, spend 3 minutes reviewing:
\`\`\`
✅ What went well today?
❌ What blocked progress?
🔄 What to adjust tomorrow?
\`\`\`

This continuous improvement makes planning sharper each day.

---

## Key Takeaway

**A plan is not a prison—it's a superpower.** You can always adjust, but starting with intention keeps you in control instead of reacting to chaos.

> "By failing to prepare, you are preparing to fail." — Benjamin Franklin
`
},

  {
  id: "ls-setting-priorities",
  title: "Setting Priorities",
  description: "Learn how to identify what truly matters and focus your time and energy on high-impact activities.",
  category: "Life Skills",
  difficulty: "Intermediate" as const,
  duration: "20 min",
  points: 130,
  image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
  tags: ["priorities", "focus", "goals", "productivity", "decision-making"],
  content: `
# Setting Priorities

## Busy vs. Productive

**Being busy does not mean being productive.**  
Many people fill their days with activity but make little real progress toward what truly matters.

\`\`\`
Busy people: Do many things, feel overwhelmed, see little progress
Productive people: Do few things well, feel focused, achieve real results
\`\`\`

The key difference is **priorities**—knowing what deserves your time, energy, and attention.

![Task checklist](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop)

---

## The Eisenhower Matrix

A simple system popularized by President Dwight Eisenhower to organize tasks based on **urgency** and **importance**.

### Important & Urgent — DO FIRST
These tasks require immediate attention.
- Deadlines
- Exams
- Crises or emergencies

**Action:** Handle these tasks immediately.

---

### Important but Not Urgent — SCHEDULE
These tasks are essential for long-term growth and success.
- Exercise
- Learning and skill building
- Planning and goal setting

**Action:** Schedule time for these activities.  
**Note:** This quadrant builds your future.

---

### Not Important but Urgent — DELEGATE
These tasks demand attention but add little long-term value.
- Interruptions
- Some emails or messages
- Minor or routine requests

**Action:** Delegate, limit, or handle quickly.

---

### Not Important & Not Urgent — DELETE
These activities waste time and energy.
- Social media scrolling
- Unnecessary distractions
- Mindless browsing

**Action:** Eliminate or strictly limit these activities.

---

### Reality Check
- Most people spend the majority of their time on **urgent tasks**
- Successful people spend most of their time on **important but not urgent tasks**

**Focus on scheduling important work to grow and stay ahead.**
**Reality check:** 80% of people live in Quadrant 1 (Urgent). Successful people spend most time in Quadrant 2 (Important, Not Urgent).
---

## How to Use the Matrix Daily

**5-minute morning routine:**
\`\`\`
1. List everything you need to do today
2. Place each task into one of the four quadrants
3. Spend 80% of your energy on Quadrant 2
4. Handle Quadrant 1 only when required
5. Avoid Quadrant 4 at all costs
\`\`\`

### Example: A student’s day
- **Quadrant 1:** Exam tomorrow (DO FIRST)  
- **Quadrant 2:** Daily study + exercise (SCHEDULE)  
- **Quadrant 3:** Replying to group chats (LIMIT)  
- **Quadrant 4:** Endless social media scrolling (DELETE)  

---

## The 80/20 Rule (Pareto Principle)

**80% of results come from 20% of efforts.**  
This principle applies to almost every area of life.

| Area | 80/20 Insight | \n
|------|---------------|    \n
| Studying | 20% key topics bring 80% marks |  \n
| Work | 20% tasks create 80% value |        \n
| Relationships | 20% people provide 80% support |  \n
| Habits | 20% routines shape 80% of your lifestyle |  \n

**Action step:** Identify your personal top 20% and protect that time fiercely.

---

## Priority Questions Framework

When overwhelmed or unsure, ask yourself:

1. **Does this move me closer to my biggest goal?**  
2. **Will this matter in three months?**  
3. **Can someone else handle this?**  
4. **What is the highest-value use of my time right now?**  

Writing down answers brings clarity faster than thinking alone.

---

## Common Priority Traps

Avoid these silent productivity killers:
- Saying “yes” to everything  
- Constant notification checking  
- Perfecting low-impact tasks  
- Living in other people’s emergencies  
- Confusing urgency with importance  

### Daily Priority Audit
Track where your time goes:
- Quadrant 2 (Growth & progress): ____ hours ✅  
- Quadrant 1 (Necessary): ____ hours  
- Quadrant 3 & 4 (Distractions): ____ hours ❌  

---

## Weekly Priority Reset

**Once a week (10 minutes):**
1. Review last week’s wins and struggles  
2. Choose **three key outcomes** for the next week  
3. Block Quadrant 2 time in your calendar first  
4. Share goals with a friend or accountability partner  

This simple reset prevents urgent tasks from hijacking your week.

---

## Key Takeaway

**You don’t have a time problem—you have a priority problem.**  
Time is limited. What you choose to focus on shapes your future.

> *“The main thing is to keep the main thing the main thing.”* — Stephen Covey
`
},


  {
  id: "ls-avoiding-procrastination",
  title: "Beating Procrastination",
  description: "Learn practical, science-backed strategies to overcome procrastination and take consistent action toward your goals.",
  category: "Life Skills",
  difficulty: "Intermediate" as const,
  duration: "25 min",
  points: 150,
  image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop",
  tags: ["procrastination", "motivation", "action", "productivity", "discipline"],
  content: `
# Beating Procrastination

## Understanding Friction

**Procrastination is not laziness—it is avoidance of discomfort.**  
Your brain prefers short-term pleasure (scrolling, videos) over long-term rewards (studying, exercising) because discomfort feels threatening.

### The procrastination loop:
Task feels difficult → Brain seeks comfort → Social media / entertainment → Temporary relief → Guilt → Repeat

### Common triggers:
- Feeling overwhelmed by large tasks  
- Fear of failure or perfectionism  
- Boredom or lack of clarity  
- Mental exhaustion and decision fatigue  

![Stress and time pressure](https://images.unsplash.com/photo-1506784926709-22f1ec395907?q=80&w=1200&auto=format&fit=crop)

---

## The 5-Minute Rule

One of the most effective anti-procrastination techniques:  
**“I’ll do this for just 5 minutes.”**

### Why it works:
- Starting is harder than continuing  
- Momentum beats resistance  
- Motivation appears *after* action  
- Perfectionism can’t fight “just 5 minutes”  

### Examples:
❌ “Study for 2 hours”  
✅ “Open the book and read for 5 minutes”

❌ “Clean the whole room”  
✅ “Pick up 5 items from the floor”

**Pro tip:**  
Set a 5-minute timer. You’ll usually continue once it rings.

---

## Task Breakdown Method

Big tasks create paralysis.  
Break them into **tiny actions** that feel almost too easy.

### Instead of:
**“Write an essay”**

Do this:
1. Open document  
2. Write title  
3. Write one sentence  
4. Write one paragraph  

### Instead of:
**“Study for exams”**

Do this:
1. Open textbook  
2. Read one page  
3. Write one note  
4. Solve one question  

**The 2-Minute Rule:**  
If something takes less than 2 minutes, do it immediately.

---

## Friction Engineering

**Make good habits easier and bad habits harder.**

### Reduce friction for good habits:
- Put phone on Do Not Disturb during focus time  
- Prepare study materials the night before  
- Keep desk clean and ready  
- Lay out workout clothes in advance  
- Keep water bottle filled  

### Increase friction for bad habits:
- Delete distracting apps  
- Charge phone in another room  
- Log out of social media accounts  
- Keep TV remote out of reach  

**Key insight:**  
Your environment controls behavior more than willpower.

---

## The Pomodoro Technique

A proven focus system that beats procrastination.

**How it works:**
- 25 minutes focused work  
- 5 minutes break  
- Repeat 4 times  
- Take a longer 15–30 minute break  

### Why it’s effective:
- Short commitment feels manageable  
- Built-in breaks reduce burnout  
- Timer creates urgency  
- Progress becomes visible  

---

## Procrastination Triggers & Solutions

| Trigger | Simple Fix |
|------|------------|
| Overwhelm | Break into 2-minute steps |
| Perfectionism | Start messy, edit later |
| Boredom | Pomodoro + light background music |
| Decision fatigue | Plan tasks the night before |
| Fear of failure | Focus on progress, not perfection |

---

## The Motivation Myth

❌ “I’ll start when I feel motivated”  
✅ “I’ll start, and motivation will follow”

Motivation is the **result of action**, not the cause.

### Daily anti-procrastination checklist:
- Used the 5-minute rule at least 3 times  
- Removed phone distractions  
- Broke tasks into micro-steps  
- Completed at least one Pomodoro  
- Reflected on what caused resistance  

---

## Accountability Systems

External pressure beats internal motivation.

Effective options:
1. **Public commitment:** Tell someone your goal  
2. **Study partner:** Work silently together  
3. **App blockers:** Forest, Freedom, Focus@Will  
4. **Reward pairing:** “30 minutes study = 10 minutes fun”  

---

## Key Takeaway

**You don’t need motivation to start—you need to start to get motivation.**  
When action becomes easier than avoidance, procrastination disappears.  
Small steps taken daily compound into massive progress.

> *“Someday is not a day of the week.”*
`
},


  {
  id: "ls-creating-routines",
  title: "Creating Effective Routines",
  description: "Learn how to build simple daily routines that work automatically to support your goals and lifestyle.",
  category: "Life Skills",
  difficulty: "Intermediate" as const,
  duration: "20 min",
  points: 130,
  image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
  tags: ["habits", "routine", "discipline", "productivity", "consistency"],
  content: `
# Creating Effective Routines

## Automating Success

**Willpower is limited, but routines are reliable.**  
Habits remove the need for daily motivation by turning important actions into automatic behavior.

Willpower:
"I should study today" → Mental fight → Often skipped  

Routine:
"It's study time" → Automatic action → Done  

When actions become routine, progress happens quietly every single day.

![Daily routine and coffee](https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop)

---

## Habit Stacking Method

One of the easiest ways to build habits is to **attach new habits to existing ones**.

**Formula:**  
*After [Current Habit], I will [New Habit]*

### Examples:
- After brushing teeth → Drink a glass of water  
- After morning tea → Write 3 priorities  
- After dinner → Track expenses for 2 minutes  
- After shower → Stretch for 1 minute  
- After waking up → Make the bed  

**Why it works:**  
Your existing habits act as triggers. New habits “ride along” naturally.

---

## The Power Morning Routine (15 Minutes)

Start your day **intentionally**, not reactively.

**Sample routine:**
- 7:00–7:02 → Drink water (rehydrate body)  
- 7:02–7:07 → Light movement (stretching or jumping jacks)  
- 7:07–7:12 → Review top 3 priorities  
- 7:12–7:15 → Hygiene check (face, teeth, clothes)  

**Rule:**  
🚫 No screens for the first 30 minutes.  
This protects focus and mental clarity.

---

## The Evening Wind-Down (10 Minutes)

End your day with preparation instead of chaos.

**Sample routine:**
- 9:30–9:35 → Review wins + tomorrow’s priorities  
- 9:35–9:40 → Track money, food, or exercise  
- 9:40–9:45 → Prepare clothes, bag, and workspace  
- 9:45–10:00 → Relax (reading, stretching, no screens)  

**Benefits:**  
Better sleep, calmer mornings, less stress.

---

## Consistency Beats Intensity

**Small daily actions compound over time.**

| Daily Habit (15 min) | Monthly | Yearly |\n
|---------------------|---------|--------|\n
| Studying | 7.5 hours | 90 hours |\n
| Exercise | 7.5 hours | 90 hours |\n
| Reading | 7.5 hours | 90 hours |\n 

15 minutes every day → **91 hours per year**  
Big weekend efforts → Inconsistent and fragile

**Truth:** Consistency wins because it compounds.

---

## The 1% Better Rule

Instead of trying to be perfect, aim to be **1% better each day**.

Example:
- Day 1 → Study 15 minutes  
- Day 10 → Study ~17 minutes  
- Day 100 → Study ~30 minutes  
- Day 365 → Study nearly 1 hour (automatically)  

**Small improvements stay sustainable and grow naturally.**

---

## Routine-Building Framework

Build routines gradually over time.

**Simple 4-week approach:**
- Week 1 → Add one tiny habit  
- Week 2 → Add one more, keep the first  
- Week 3 → Strengthen both with environment cues  
- Week 4 → Habit becomes automatic, then scale up  

### Environment design matters:
- Study desk always clean  
- Workout clothes visible  
- Water bottle filled at night  
- Phone charger kept outside bedroom  

Your environment shapes your behavior more than motivation.

---

## Common Routine Killers

Protect your routines from these mistakes:
- “I’ll skip today and restart tomorrow”  
- Using the phone first thing in the morning  
- No night-before preparation  
- Trying to build too many habits at once  
- Perfectionism (80% consistency beats 100% sometimes)  

**Recovery rule:**  
Miss one day? Do 50% the next day.  
Never miss two days in a row.

---

## Sample Student Power Routine

**Just 25 minutes per day → major life upgrade**

**Morning (15 min):**
- Water + light stretching  
- Review top 3 priorities  
- Hygiene check  

**Evening (10 min):**
- Review wins and plan tomorrow  
- Track money (2 minutes)  
- Wind-down without screens  

---

## Key Takeaway

**Your habits quietly shape your future every single day.**  
Routines don’t need motivation—they create momentum.  
Start small, stay consistent, and let time do the rest.

> *“Motivation is what gets you started. Habit is what keeps you going.”* — Jim Ryun
`
},

];