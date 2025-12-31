import { Standard } from "../types";

export const socialAwarenessCategory: Standard = {
  id: "social-awareness",
  name: "Social Awareness",
  displayName: "Social Awareness & Real-World Knowledge",
  description: "Understand society and the world around you",
  color: "bg-orange-500",
  subjects: [
    {
      id: "sa-civic-knowledge",
      name: "Civic Knowledge",
      icon: "Building",
      color: "text-orange-500",
      lessonIds: ["sa-how-government-works", "sa-rights-responsibilities", "sa-voting-democracy", "sa-laws-rules"]
    },
    {
      id: "sa-global-awareness",
      name: "Global Awareness",
      icon: "Globe",
      color: "text-blue-500",
      lessonIds: ["sa-world-cultures", "sa-global-issues", "sa-environmental-awareness", "sa-interconnected-world"]
    },
    {
      id: "sa-social-issues",
      name: "Social Issues",
      icon: "Users",
      color: "text-purple-500",
      lessonIds: ["sa-equality-fairness", "sa-poverty-awareness", "sa-discrimination", "sa-community-service"]
    },
    {
      id: "sa-practical-knowledge",
      name: "Practical Knowledge",
      icon: "Lightbulb",
      color: "text-yellow-500",
      lessonIds: ["sa-consumer-awareness", "sa-public-services", "sa-transportation-safety", "sa-emergency-services"]
    }
  ]
};

export const socialAwarenessLessons = [
  // ==================================================================================
  // CIVIC KNOWLEDGE
  // ==================================================================================
  { 
    id: "sa-how-government-works", 
    title: "How Government Works", 
    description: "Understand the basics of government structure", 
    category: "Social Awareness", 
    difficulty: "Intermediate" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800",
    tags: ["government", "civics", "democracy"],
    content: `
# How Government Works

## The Blueprint of Society
Government is not just a building; it is the system of rules and people that manage a community. Without it, we would have anarchy (no rules) or tyranny (one person ruling everyone).


## Separation of Powers (The Three Branches)
To prevent one group from becoming too powerful, democratic governments are often split into three branches that check each other.

### 1. The Legislative Branch (The Rule Makers)
* **Who:** Congress, Parliament, City Council.
* **Job:** They write, debate, and pass laws. They also control the budget (money).
* **Power:** They can impeach the leader and override vetoes.

### 2. The Executive Branch (The Rule Enforcers)
* **Who:** President, Prime Minister, Governor, Mayor, Police.
* **Job:** They carry out and enforce the laws. They manage the day-to-day operations of the country.
* **Power:** They command the military and can veto laws.

### 3. The Judicial Branch (The Rule Interpreters)
* **Who:** Supreme Court, Judges.
* **Job:** They decide if laws are fair and if people broke them. They interpret the Constitution.
* **Power:** They can declare laws "unconstitutional" and delete them.

## Checks and Balances
This system ensures no branch is the "King."
* The President can veto a law passed by Congress.
* Congress can override the veto with enough votes.
* The Supreme Court can say the law is illegal anyway.
* *Result:* Change is slow, but it prevents dictatorship.

## Federal vs. State vs. Local
Government is like a layer cake.
1.  **Federal (National):** Handles war, currency, post office, foreign relations.
2.  **State/Provincial:** Handles driver's licenses, schools, state roads.
3.  **Local (City/County):** Handles trash collection, police, fire, libraries, parks.

## Key Takeaway
Government belongs to the people. It is a machine designed to serve you, but it only works if you understand the instruction manual.
    `
  },
  { 
    id: "sa-rights-responsibilities", 
    title: "Rights & Responsibilities", 
    description: "Know your rights and civic duties", 
    category: "Social Awareness", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1456518563096-0ff5ee08204e?w=800",
    tags: ["rights", "duties", "citizenship"],
    content: `
# Rights & Responsibilities

## Two Sides of the Coin
You cannot have freedom without responsibility. A "Right" is what you are owed. A "Responsibility" is what you owe.

![Scales of justice](https://images.unsplash.com/photo-1456518563096-0ff5ee08204e?w=800&q=80)

## Your Fundamental Rights
In many democracies, these are protected by a "Bill of Rights."

### 1. Freedom of Speech
You can criticize the government without going to jail.
* *Limit:* You cannot use speech to incite violence or spread dangerous lies (e.g., shouting "Fire!" in a crowded theater).

### 2. Freedom of Religion
You can practice any religion or *no* religion. The government cannot force you to pray.

### 3. Freedom of Assembly
You can gather with others to protest peacefully.

### 4. Right to Due Process
If accused of a crime, you have the right to a fair trial, a lawyer, and to remain silent. You are innocent until proven guilty.

## Your Civic Responsibilities (Duties)
These are the price of living in a civilized society.

### 1. Obeying the Law
Laws protect everyone. Stopping at a red light protects you and the other driver.

### 2. Paying Taxes
Schools, roads, firefighters, and the military are not free. Taxes are the subscription fee for civilization.

### 3. Jury Duty
If you want a fair trial, you must be willing to give others a fair trial. When called, you serve as a juror to decide a case.

### 4. Voting
Democracy is "Use it or Lose it." If you don't vote, you let others decide your future.

### 5. Being Informed
You have a duty to know what is happening. Ignorance allows corruption to spread.

## Key Takeaway
Don't just ask "What are my rights?" Ask "What are my responsibilities?" A strong society needs both.
    `
  },
  { 
    id: "sa-voting-democracy", 
    title: "Voting & Democracy", 
    description: "The importance of participation in democracy", 
    category: "Social Awareness", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1540910419868-474947cebacb?w=800",
    tags: ["voting", "elections", "power"],
    content: `
# Voting & Democracy

## The Power of One Voice
"My vote doesn't matter" is the lie that keeps bad leaders in power. In local elections, winners are sometimes decided by less than 50 votes.


## Types of Elections

### 1. General Elections (National)
Choosing the President or Prime Minister.
* High media attention.
* Sets the direction for the country (War, Economy, Healthcare).

### 2. Midterm/Local Elections
Choosing Mayors, Governors, School Boards.
* **Crucial Fact:** These people affect your daily life *more* than the President.
* They decide: Are the roads fixed? How good are the schools? How fast do police respond?

## How Voting Works
1.  **Registration:** You must sign up to vote (in most places).
2.  **The Ballot:** A list of candidates and "Propositions" (specific laws you vote Yes/No on).
3.  **Casting:** You can vote in person or by mail.
4.  **The Count:** Independent officials count every ballot.

## Why People Don't Vote (Voter Apathy)
* "They are all the same." (False: Look at their voting records).
* "It's too hard." (It can be, but it's worth the effort).
* "I don't know enough." (Spend 30 minutes reading a non-partisan voter guide).

## Gerrymandering
A trick politicians use to redraw map lines so they can't lose.
* *Goal:* Lump all the opponent's voters into one district, or spread them out so thin they can't win anywhere.
* *Result:* It makes elections less fair. Awareness is the first step to fixing it.

## Beyond Voting
Democracy is a 365-day job, not just one day a year.
* **Town Halls:** Go to meetings and speak to leaders.
* **Protest:** Show up for causes.
* **Contact Reps:** Call or email your senator. They track these calls.

## Key Takeaway
Bad officials are elected by good citizens who do not vote.

> "The ballot is stronger than the bullet." - Abraham Lincoln
    `
  },
  { 
    id: "sa-laws-rules", 
    title: "Understanding Laws & Rules", 
    description: "Why rules and laws exist in society", 
    category: "Social Awareness", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800",
    tags: ["law", "justice", "order"],
    content: `
# Understanding Laws & Rules

## Why Do We Need Rules?
Imagine a football game with no rules. No sidelines, no fouls, no clock. It wouldn't be a game; it would be a brawl. Laws are the rules of the game of Life.

![Judge's gavel](https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80)

## The Rule of Law
This is a massive concept. It means **No one is above the law.**
* The President, the billionaire, and the average citizen all have to follow the same rules.
* In a dictatorship, the Leader *is* the law. In a democracy, the Law is King.

## Types of Law

### 1. Criminal Law (Society vs. You)
* **What:** Crimes against the public order.
* **Examples:** Theft, Murder, Assault.
* **Penalty:** Jail time, probation, fines paid to the government.
* **Standard:** "Beyond a Reasonable Doubt" (99% sure).

### 2. Civil Law (Person vs. Person)
* **What:** Disputes between individuals.
* **Examples:** Breaking a contract, divorce, property damage, copyright.
* **Penalty:** Money paid to the other person (Compensation). No jail.
* **Standard:** "Preponderance of the Evidence" (51% sure).

## How a Bill Becomes a Law
1.  **Idea:** A citizen or lawmaker suggests a problem needs fixing.
2.  **Bill:** It is written down as a proposal.
3.  **Vote:** The House and Senate (Legislature) vote on it.
4.  **Sign:** The Executive (President/Governor) signs it.
5.  **Law:** It is now a rule everyone must follow.

## Civil Disobedience
Sometimes, a law is unjust (e.g., Segregation laws).
* **Civil Disobedience:** Peacefully breaking a law to show it is wrong, and accepting the punishment to highlight the injustice.
* *Example:* Rosa Parks refusing to give up her bus seat.

## Key Takeaway
Laws are not static. They are living agreements. If a law is bad, we have the power (through democracy) to change it.
    `
  },

  // ==================================================================================
  // GLOBAL AWARENESS
  // ==================================================================================
  { 
    id: "sa-world-cultures", 
    title: "World Cultures & Diversity", 
    description: "Appreciate different cultures around the world", 
    category: "Social Awareness", 
    difficulty: "Beginner" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1526199119161-4be1e3368d52?w=800",
    tags: ["culture", "travel", "diversity"],
    content: `
# World Cultures & Diversity

## The Cultural Iceberg
Culture is like an iceberg.
* **10% Visible:** Food, flags, festivals, clothing, music.
* **90% Invisible:** Values, body language, concept of time, definition of respect, attitude towards elders.
* To understand a culture, you must dive below the water.

![Iceberg diagram showing culture levels](https://images.unsplash.com/photo-1526199119161-4be1e3368d52?w=800&q=80)

## Cultural Relativism
The idea that "different" does not mean "wrong."
* In Culture A, eating with hands is polite. In Culture B, it's rude.
* Neither is truly "correct." It depends on the context.
* **Ethnocentrism:** Judging other cultures by your own standards (Thinking "They are weird/dirty" instead of "They are different").

## High Context vs. Low Context
* **Low Context (e.g., USA, Germany):** Communication is direct. "Yes" means Yes. "No" means No. Efficiency is valued.
* **High Context (e.g., Japan, Arab cultures):** Communication is indirect. You must read between the lines. "Maybe" might mean No. Relationships are valued over efficiency.

## Individualism vs. Collectivism
* **Individualism ("I" culture):** Focus on personal goals, independence, and "standing out."
* **Collectivism ("We" culture):** Focus on group harmony, family duty, and "fitting in."

## Appreciation vs. Appropriation
* **Appreciation:** Learning about a culture, being invited to participate, respecting the meaning. (Eating sushi, learning Spanish).
* **Appropriation:** Taking a sacred or meaningful element of a culture for fashion/fun without respect. (Wearing a Native American headdress as a Halloween costume).

## Key Takeaway
Travel is fatal to prejudice. The more you learn about how others live, the more you realize we all want the same things: safety, love, and purpose.
    `
  },
  { 
    id: "sa-global-issues", 
    title: "Global Issues Today", 
    description: "Understand major challenges facing our world", 
    category: "Social Awareness", 
    difficulty: "Intermediate" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    tags: ["climate", "poverty", "refugees"],
    content: `
# Global Issues Today

## A Shrinking World
Problems no longer stay inside borders. A virus in one country, a war in another, or pollution in a third affects everyone. We are global citizens.


## 1. Climate Change
The planet is warming due to greenhouse gases (CO2).
* **Impacts:** Rising sea levels (flooding cities), extreme weather (hurricanes/droughts), loss of biodiversity.
* **The Challenge:** Transitioning from fossil fuels (oil/coal) to renewable energy (solar/wind) without crashing the economy.

## 2. The Refugee Crisis
More people are displaced now than at any time since WWII.
* **Why:** War, persecution, and increasingly, climate change ("Climate Refugees").
* **The Human Reality:** Refugees are not tourists. They are fleeing for their lives, often leaving everything behind.

## 3. Water Scarcity
Water is the "Blue Gold" of the 21st century.
* While the earth is 70% water, only 3% is fresh, and less than 1% is accessible.
* Conflicts are beginning to arise over who controls river sources.

## 4. Global Health (Pandemics)
Diseases move as fast as airplanes.
* Global health requires cooperation. A variant in a remote village can reach a major city in 24 hours.
* **Vaccine Equity:** We are not safe until everyone is safe.

## The UN Sustainable Development Goals (SDGs)
A global "To-Do List" agreed upon by the United Nations to be achieved by 2030.
1.  No Poverty.
2.  Zero Hunger.
3.  Good Health.
4.  Quality Education.
5.  Gender Equality.
...and 12 more.

## Key Takeaway
These problems seem huge, but they are solved by millions of small actions. "Think Globally, Act Locally."
    `
  },
  { 
    id: "sa-environmental-awareness", 
    title: "Environmental Responsibility", 
    description: "Our role in protecting the planet", 
    category: "Social Awareness", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
    tags: ["eco-friendly", "sustainability", "recycling"],
    content: `
# Environmental Responsibility

## There is No Planet B
We use resources as if we had 1.7 Earths. Sustainability means meeting our needs without destroying the ability of future generations to meet theirs.

![Recycling symbol](https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80)

## The 3 Rs (In Order of Importance)
Most people focus on Recycling, but it is the *least* effective.

1.  **Reduce (Best):** Don't buy it. Don't use it.
    * *Action:* Stop using single-use plastics. Buy less clothes.
2.  **Reuse (Better):** Use it again.
    * *Action:* Use a refillable water bottle. Repair broken items instead of trashing them. Thrifting clothes.
3.  **Recycle (Good):** Turn it into something new.
    * *Reality Check:* Plastic recycling is very inefficient. Glass and aluminum are great to recycle.

## Carbon Footprint
The total amount of greenhouse gases generated by your lifestyle.
* **Big Contributors:** Driving, Flying, Eating Red Meat (cows produce methane), Heating/Cooling homes.
* **Offsetting:** Planting trees to absorb the carbon you emit.

## Fast Fashion
The fashion industry is the second largest polluter in the world.
* Cheap clothes are made with toxic dyes and plastic fibers (polyester).
* They fall apart quickly and end up in landfills.
* **Slow Fashion:** Buy high quality, buy vintage, wear things for years.

## E-Waste
Old phones and laptops contain toxic heavy metals (lead, mercury).
* **Never** throw electronics in the trash. They poison the groundwater.
* Take them to certified e-waste recycling centers.

## Key Takeaway
We don't need a handful of people doing zero-waste perfectly. We need millions of people doing it imperfectly.
    `
  },
  { 
    id: "sa-interconnected-world", 
    title: "Our Interconnected World", 
    description: "How events affect people globally", 
    category: "Social Awareness", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?w=800",
    tags: ["globalization", "economics", "internet"],
    content: `
# Our Interconnected World

## The Butterfly Effect
A butterfly flaps its wings in Brazil and causes a tornado in Texas. In a globalized world, a small event in one place ripples everywhere.


## Global Supply Chains
Look at your smartphone.
* **Design:** California.
* **Microchips:** Taiwan.
* **Assembly:** China.
* **Minerals (Coltan):** Congo.
* **Marketing:** London.
* If a ship gets stuck in the Suez Canal (Egypt), factories in Germany stop working because they can't get parts. We are dependent on each other.

## The Internet: The Global Nervous System
Information travels instantly.
* A protest in Iran is seen live in New York.
* A K-Pop song trends in Brazil.
* **Benefit:** Cultural exchange and shared knowledge.
* **Risk:** Cyberattacks and rapid spread of misinformation.

## Economic Interdependence
* **Trade:** Countries sell what they are good at making (Comparative Advantage).
* **The Dollar:** The US Dollar is the world's "Reserve Currency," linking economies together.
* **Pros:** Cheaper goods, more variety, reduced poverty in developing nations.
* **Cons:** Loss of local jobs (outsourcing), exploitation of workers in poor countries.

## Cultural Homogenization
Is the world becoming too similar?
* You can find a McDonald's in Tokyo, Paris, and Moscow.
* **Glocalization:** Global brands adapting to local tastes (e.g., McDonald's serving paneer in India).

## Key Takeaway
Isolation is no longer possible. To understand your own life (prices, jobs, safety), you must understand the world.
    `
  },

  // ==================================================================================
  // SOCIAL ISSUES
  // ==================================================================================
  { 
    id: "sa-equality-fairness", 
    title: "Equality & Fairness", 
    description: "Understanding equal treatment for all", 
    category: "Social Awareness", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800",
    tags: ["equity", "justice", "society"],
    content: `
# Equality & Fairness

## Equality vs. Equity
These words sound the same but mean very different things.

* **Equality:** Giving everyone the *same thing*.
    * *Image:* Three people of different heights trying to watch a game over a fence. You give them all the same size box to stand on. The tall person sees great. The short person still can't see.
* **Equity:** Giving everyone *what they need* to have the same outcome.
    * *Image:* You give the short person two boxes, and the tall person zero boxes. Now, everyone can see the game.


## Systemic Fairness
Sometimes, the "rules" are fair on paper, but the "game" is rigged.
* **Systemic Racism/Sexism:** When policies or structures create unfairness, even if the individual people aren't trying to be mean.
* *Example:* Funding schools based on property taxes. Rich neighborhoods get rich schools. Poor neighborhoods get poor schools. The "rule" is the same for everyone, but the outcome is unfair.

## Privilege
Privilege doesn't mean your life is easy. It just means your life isn't harder *because* of a specific trait.
* **White Privilege:** You don't worry about being followed in a store.
* **Male Privilege:** You don't worry about walking alone at night.
* **Able-bodied Privilege:** You don't worry if a building has a ramp.
* *Action:* Don't feel guilty about privilege. Use it to help others (e.g., if you are able-bodied, advocate for ramps).

## Meritocracy
The ideal that "the best person gets the job."
* This is the goal, but we must recognize that not everyone starts at the same starting line.

## Key Takeaway
Fairness isn't always equal. Fairness is meeting people where they are and removing the barriers that hold them back.
    `
  },
  { 
    id: "sa-poverty-awareness", 
    title: "Understanding Poverty", 
    description: "Learn about economic inequality and its effects", 
    category: "Social Awareness", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800",
    tags: ["economy", "inequality", "compassion"],
    content: `
# Understanding Poverty

## It Costs Money to be Poor
This paradox is called the "Poverty Trap."
* If you can't afford a $100 pair of boots that last 5 years, you buy $20 boots that break every 6 months. Over 5 years, you spend $200.
* If you can't afford a dentist checkup ($100), you wait until your tooth rots ($1,000 root canal).

![Hands sharing bread](https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80)

## Types of Poverty
1.  **Absolute Poverty:** Lack of basic needs (Food, Water, Shelter). Living on less than $2 a day.
2.  **Relative Poverty:** Being significantly poorer than the average in your society. You have food, but you cannot afford to participate in normal life (internet, transport).

## The Cycle of Poverty
Poverty is sticky. It spans generations.
* Poor nutrition \u2192 Poor school performance \u2192 Low paying job \u2192 Poor nutrition for next generation.

## Food Deserts
Areas where it is impossible to buy fresh, healthy food without a car.
* People rely on gas stations and fast food.
* Result: Higher obesity and diabetes rates in poor communities.

## Minimum Wage vs. Living Wage
* **Minimum Wage:** The lowest amount legal to pay.
* **Living Wage:** The amount needed to actually afford rent, food, and bills in that city.
* In many places, a person working full-time on minimum wage cannot afford a 1-bedroom apartment.

## Homelessness
Most homeless people are not "lazy."
* Major causes: Mental illness, addiction, domestic violence, medical bankruptcy, and lack of affordable housing.
* **Housing First:** A strategy that gives people a home *first*, then helps with addiction/jobs. It has a high success rate.

## Key Takeaway
Poverty is not a character flaw; it is a lack of cash. Treat people in poverty with dignity, not judgment.
    `
  },
  { 
    id: "sa-discrimination", 
    title: "Recognizing Discrimination", 
    description: "Identify and stand against unfair treatment", 
    category: "Social Awareness", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800",
    tags: ["inclusion", "bias", "upstander"],
    content: `
# Recognizing Discrimination

## The Ladder of Prejudice
Discrimination starts small and escalates.
1.  **Stereotyping:** Forming an idea about a group (e.g., "All X are good at math").
2.  **Prejudice:** Creating a feeling based on that idea (e.g., "I don't like X").
3.  **Discrimination:** Acting on that feeling (e.g., "I won't hire X").
4.  **Systemic Oppression:** Laws/rules that hurt the group.

![Diverse hands together](https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80)

## Types of Discrimination
* **Racism:** Based on race/ethnicity.
* **Sexism:** Based on gender.
* **Ageism:** Based on age (too young or too old).
* **Ableism:** Discrimination against people with disabilities.
* **Homophobia/Transphobia:** Based on sexual orientation or gender identity.

## Microaggressions
Small, everyday comments that reinforce stereotypes. They are like mosquito bites—one is annoying, but 100 a day is unbearable.
* *Example:* Asking an Asian American, "No, where are you *really* from?" (Implies they aren't "real" Americans).
* *Example:* Telling a woman, "You're too emotional."

## Bystander vs. Upstander
* **Bystander:** Sees bullying/discrimination and does nothing.
* **Upstander:** Intervenes.
* **How to Intervene (The 5 Ds):**
    1.  **Direct:** "That's not cool. Stop."
    2.  **Distract:** Spill your coffee, ask a random question to break the tension.
    3.  **Delegate:** Get a teacher or manager.
    4.  **Delay:** Check on the victim after the incident.
    5.  **Document:** Record the incident (if safe).

## Key Takeaway
Silence is acceptance. If you see something wrong and say nothing, you have chosen the side of the oppressor.
    `
  },
  { 
    id: "sa-community-service", 
    title: "Value of Community Service", 
    description: "Making a difference through volunteering", 
    category: "Social Awareness", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800",
    tags: ["volunteering", "charity", "empathy"],
    content: `
# Value of Community Service

## Why Volunteer?
Volunteering is not just "free work." It is the glue that holds communities together.
* **Selfish reasons to volunteer:** It looks good on a resume, builds skills, and reduces depression (Helper's High).
* **Selfless reasons:** It alleviates suffering and solves problems money can't fix.

![Volunteers planting trees](https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80)

## Charity vs. Mutual Aid
* **Charity:** Top-down. Rich giving to poor. often creates a power dynamic. "I am saving you."
* **Mutual Aid:** Horizontal. Neighbors helping neighbors. "I help you today; you help me tomorrow." Solidarity, not charity.

## Ways to Serve
1.  **Direct Service:** serving food at a shelter, tutoring kids.
2.  **Advocacy:** Writing letters, protesting, raising awareness.
3.  **Skilled Volunteering:** Using your specific talent (e.g., an Accountant doing taxes for a non-profit).

## Assessing Impact
Not all helping is helpful.
* **Voluntourism:** Going to a poor country for a week to "build a school" often takes jobs away from local builders and is more about the traveler's Instagram than the community's needs.
* *Rule:* Ask the community what they need before assuming you know the answer.

## How to Start
1.  Identify what breaks your heart. (Animals? Hunger? loneliness?).
2.  Find a local org dealing with that.
3.  Commit to *consistency*. Showing up once a month for a year is better than showing up every day for a week and quitting.

## Key Takeaway
Service is the rent we pay for the privilege of living on this planet.
    `
  },

  // ==================================================================================
  // PRACTICAL KNOWLEDGE
  // ==================================================================================
  { 
    id: "sa-consumer-awareness", 
    title: "Being a Smart Consumer", 
    description: "Make informed purchasing decisions", 
    category: "Social Awareness", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800",
    tags: ["money", "shopping", "marketing"],
    content: `
# Being a Smart Consumer

## The Psychology of Shopping
Companies spend billions to hack your brain.
* **The Decoy Effect:** Popcorn sizes: Small $3, Medium $6.50, Large $7. The Medium exists only to make the Large look like a "great deal."
* **Scarcity:** "Only 2 left in stock!" (Creates panic buying).
* **Loss Aversion:** "Free Trial" (Once you have it, you don't want to lose it).

![Shopping cart concept](https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&q=80)

## Planned Obsolescence
Products designed to break.
* Lightbulbs, phones, and nylons are engineered to fail after a certain time so you *must* buy a new one.
* **Right to Repair:** A movement fighting for laws that let you fix your own phone without voiding the warranty.

## Unit Pricing
The Price Tag is a lie. Look at the **Unit Price** (Price per ounce/liter).
* *Big Box:* $10 for 100oz = $0.10/oz.
* *Small Box:* $3 for 20oz = $0.15/oz.
* The big box costs more now, but is cheaper in the long run.

## Ethical Consumption
"Voting with your wallet."
* Every dollar you spend supports the company's practices.
* **Fair Trade:** Certification ensuring farmers were paid a living wage.
* **Cruelty-Free:** Not tested on animals.
* **Boycotts:** Refusing to buy from unethical companies to force them to change.

## Protecting Yourself
* **Read the Fine Print:** Subscriptions often hide cancellation fees.
* **Check Statements:** Look at your bank/credit card bill monthly for "Zombie Charges" (subscriptions you forgot).
* **Return Policies:** Know them before you buy.

## Key Takeaway
A fool and his money are soon parted. Be a skeptic. Ask: "Do I need this, or is the marketing making me want this?"
    `
  },
  { 
    id: "sa-public-services", 
    title: "Using Public Services", 
    description: "Navigate libraries, post offices, and more", 
    category: "Social Awareness", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800",
    tags: ["library", "post-office", "community"],
    content: `
# Using Public Services

## The Library: The Last Free Place
Libraries are magical. They are one of the only places you can go without spending money.
* **Beyond Books:** They offer free Wi-Fi, computer access, 3D printers, tool rentals, museum passes, and movie streaming.
* **Librarians:** They are professional researchers. They can help you find *anything* (better than Google).

![Library shelves](https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80)

## The Post Office
* **How to Address an Envelope:**
    1.  **Top Left:** Your Address (Return Address).
    2.  **Center:** Recipient's Name and Address.
    3.  **Top Right:** Stamp.
* **Zip Codes:** Vital for speed. They tell the sorting machine exactly where to go.

## Public Parks
* Shared backyards for the community.
* **Etiquette:** Pack it in, pack it out (leave no trash). Keep dogs on leashes.
* **Funding:** They are paid for by local taxes.

## DMV (Department of Motor Vehicles)
* Where you get IDs, Driver's Licenses, and Car Registration.
* **Tips:** Make an appointment online (saves hours). Bring *physical* proof of address (utility bill).

## 311 (Non-Emergency City Services)
* In many cities, dialing 311 connects you to city services.
* Use it for: Potholes, graffiti, broken streetlights, noise complaints, dead animal removal.
* It keeps 911 free for real emergencies.

## Key Takeaway
You pay for these services with your taxes. Use them! They improve your quality of life and save you money.
    `
  },
  { 
    id: "sa-transportation-safety", 
    title: "Transportation & Road Safety", 
    description: "Stay safe as a pedestrian and commuter", 
    category: "Social Awareness", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
    tags: ["safety", "driving", "transit"],
    content: `
# Transportation & Road Safety

## Defensive Driving/Walking
Assume everyone else is distracted or crazy.
* **Drivers:** Don't assume the other car sees you. Don't assume they will stop at the red light. Check anyway.
* **Pedestrians:** Make eye contact with the driver before stepping into the crosswalk.

![Traffic lights](https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80)

## Right of Way
Who goes first?
* **4-Way Stop:** First to arrive goes first. If a tie, the person on the **Right** goes.
* **Pedestrians:** Always have the right of way (legally), but physics wins. A car hits harder. Be careful.

## Public Transit Etiquette
* **Seats:** Give up priority seats to elderly, pregnant, or disabled people.
* **Sound:** Use headphones. No one wants to hear your TikToks.
* **Backpacks:** Take them off and hold them by your feet to make room.
* **Exiting:** Let people off the train/bus *before* you try to get on.

## Bicycle Safety
* **Helmets:** Non-negotiable.
* **Flow:** Ride *with* traffic, not against it.
* **Signals:** Use hand signals for turning.
* **Lights:** Mandatory at night (White front, Red back).

## Distracted Driving
* Texting while driving increases crash risk by 23x. It is worse than drunk driving.
* **Action:** Put the phone in the glovebox. No text is worth a life.

## Key Takeaway
Getting there late is better than not getting there at all. Patience saves lives.
    `
  },
  { 
    id: "sa-emergency-services", 
    title: "Emergency Services", 
    description: "Know when and how to contact emergency help", 
    category: "Social Awareness", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1599700403969-f77b37778b97?w=800",
    tags: ["911", "emergency", "police"],
    content: `
# Emergency Services

## When to Call 911 (or local emergency number)
Call ONLY for immediate threats to life or property.
* **YES:** Fire, Heart Attack, Car Crash with injury, Robbery in progress, Gunshots.
* **NO:** Loud music next door (Call non-emergency), Cat stuck in tree, Power outage (Call utility co), Minor fender bender (Exchange info).

![Ambulance](https://images.unsplash.com/photo-1599700403969-f77b37778b97?w=800&q=80)

## What Happens When You Call
1.  **Dispatcher:** "911, what is your emergency?"
2.  **Location:** This is the #1 most important thing. If the call drops, they need to know where to go. "I am at 123 Main St."
3.  **Nature of Call:** "My dad collapsed." "There is a fire."
4.  **Instructions:** They may tell you how to do CPR. Stay on the line.

## Interacting with Police
If stopped by police:
* **Hands:** Keep them visible (on the steering wheel).
* **Movements:** Move slowly. "I am reaching for my license now."
* **Rights:** You have the right to remain silent. You do not have to consent to a search of your car (unless they have probable cause).

## Fire Safety
* **Get Out:** Do not try to pack. Just go.
* **Stay Low:** Smoke rises. Crawl on the floor where the air is cleaner.
* **Door Checks:** Feel the door handle with the back of your hand. If hot, do not open.

## Disaster Preparedness (Go Bag)
Have a bag ready for earthquakes/hurricanes.
* Water, non-perishable food, flashlight, batteries, first aid kit, cash, copies of ID.

## Key Takeaway
In an emergency, seconds count. Knowing what to do *before* the panic sets in is your best defense.
    `
  }
];