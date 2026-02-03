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
Government is not just a building; it is the system of rules and people that manage a community. Without it, we would have anarchy (no rules) or tyranny (one person ruling everyone). Think of government as the operating system of society—it runs in the background, managing resources, resolving conflicts, and maintaining order so that citizens can pursue their lives, businesses, and dreams.

![Government building](https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800&q=80)

## Separation of Powers (The Three Branches)
To prevent one group from becoming too powerful, democratic governments are often split into three branches that check each other. This concept, developed by philosophers like Montesquieu, is the foundation of modern democracy.

### 1. The Legislative Branch (The Rule Makers)
* **Who:** Congress (Senate + House of Representatives), Parliament, City Council
* **Job:** They write, debate, and pass laws. They also control the budget (the power of the purse)
* **Power:** They can impeach the leader, override vetoes, and declare war
* **Real Example:** In 2010, the U.S. Congress passed the Affordable Care Act after months of debate, committee reviews, and amendments—showing how laws evolve through the legislative process

### 2. The Executive Branch (The Rule Enforcers)
* **Who:** President, Prime Minister, Governor, Mayor, Cabinet Members, Federal Agencies
* **Job:** They carry out and enforce the laws. They manage the day-to-day operations of the country
* **Power:** They command the military, negotiate treaties, appoint judges, and can veto laws
* **Real Example:** When a president issues an executive order (like DACA in 2012), they're using executive power to direct how laws are enforced

### 3. The Judicial Branch (The Rule Interpreters)
* **Who:** Supreme Court, Federal Courts, State Courts, Judges
* **Job:** They decide if laws are constitutional and resolve legal disputes. They interpret what the Constitution means
* **Power:** They can declare laws "unconstitutional" through judicial review, setting precedents that last generations
* **Real Example:** Brown v. Board of Education (1954) overturned "separate but equal" segregation laws, showing how courts can reshape society

## Checks and Balances in Action
This system ensures no branch becomes the "King." Here's how it works in practice:

**Legislative checks Executive:**
* Can override presidential veto with 2/3 vote
* Controls the budget (no money = no programs)
* Can impeach and remove the president

**Executive checks Legislative:**
* Can veto bills
* Can call special sessions of Congress
* Proposes the annual budget

**Judicial checks both:**
* Can declare laws unconstitutional
* Can declare executive actions illegal
* Interprets how laws should be applied

**Real-World Example:** In 2017, President Trump issued a travel ban. Federal courts blocked it (Judicial checking Executive). Congress debated new immigration laws (Legislative responding). This back-and-forth is the system working as designed—messy, but preventing tyranny.

## Comparative Government Systems

### Presidential System (USA, Brazil, Mexico)
* President is both head of state and head of government
* Separate elections for legislature and executive
* Fixed terms (can't be removed easily except by impeachment)
* **Pro:** Clear separation of powers
* **Con:** Can lead to gridlock when different parties control branches

### Parliamentary System (UK, Canada, India, Japan)
* Prime Minister is head of government, chosen by the legislature
* Head of state is separate (Queen, President—mostly ceremonial)
* Executive and legislative branches are fused
* **Pro:** More efficient lawmaking
* **Con:** Less separation of powers

### Semi-Presidential System (France, Russia)
* Both a president and a prime minister
* Power is shared between them
* Hybrid approach

## Federal vs. State vs. Local
Government is like a layer cake, with each level having specific responsibilities:

### 1. Federal (National)
**Powers:** War, currency, immigration, post office, foreign relations, interstate commerce
**Why this level?** These issues affect the entire nation and require unified policy
**Example:** Only the federal government can print money or sign treaties

### 2. State/Provincial
**Powers:** Driver's licenses, education standards, state roads, professional licensing, criminal law
**Why this level?** Allows regional differences while maintaining national unity
**Example:** Each state sets its own drinking age, marriage laws, and education curriculum

### 3. Local (City/County)
**Powers:** Trash collection, local police, fire departments, libraries, parks, zoning
**Why this level?** These services are most effective when managed close to the people
**Example:** Your city decides whether to build a new park, not the federal government

**The Tenth Amendment:** Any power not specifically given to the federal government belongs to the states or the people.

## How to Track Your Representatives

Your elected officials work for you. Here's how to monitor and influence them:

### Step 1: Know Who Represents You
* **Federal:** 2 Senators + 1 House Representative
* **State:** 1 State Senator + 1 State Representative
* **Local:** Mayor, City Council Member, School Board
* **Find them:** Use websites like usa.gov/elected-officials or your country's equivalent

### Step 2: Follow Their Voting Record
* Websites like GovTrack.us show every vote your representative makes
* Look for patterns: Do they vote with their party 100% of the time? Do they sponsor bills?

### Step 3: Contact Them
* **Phone calls** are most effective (staffers tally calls)
* **Emails** work but are less impactful
* **Town Halls** let you speak directly
* **Template:** "Hello, I'm [name], a constituent from [zip code]. I'm calling about [bill number]. I urge the representative to vote [yes/no] because [reason]. Thank you."

### Step 4: Vote Them Out
* If they don't represent your values, support their opponent in the next election
* Volunteer, donate, or simply vote

## Key Takeaway
Government belongs to the people. It is a machine designed to serve you, but it only works if you understand the instruction manual. Democracy is not a spectator sport—it requires active, informed participation.

---

## Practical Exercises

### Exercise 1: Map Your Government
Create a visual diagram showing all the elected officials who represent you. Include: (1) Their names, (2) Their party, (3) When they're up for re-election, (4) One major issue they champion. Use tools like BallotReady or your local election board website.

### Exercise 2: Track a Bill's Journey
Choose a current piece of legislation in your country (federal or state level). Track it for 2-4 weeks: (1) Who proposed it and why? (2) Which committees reviewed it? (3) What amendments were added? (4) Did it pass? Create a timeline with key dates and decisions. Reflect on why it succeeded or failed.

### Exercise 3: Attend a Government Meeting
Attend a local city council, school board, or town hall meeting (in-person or virtual). Observe: (1) What issues were discussed? (2) How did citizens participate? (3) How were decisions made? Write a one-page reflection on what surprised you and what you learned about local democracy.

### Exercise 4: Checks and Balances Case Study
Research a historical or recent example where checks and balances prevented abuse of power (examples: Watergate, judicial review of executive orders, congressional budget battles). Write a 300-word analysis explaining: (1) What happened, (2) Which branches were involved, (3) How the system worked (or failed), (4) What this teaches us about democratic design.

---

> "Democracy is the worst form of government, except for all the others." - Winston Churchill

> "The government is us; we are the government, you and I." - Theodore Roosevelt
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
You cannot have freedom without responsibility. A "Right" is what you are owed. A "Responsibility" is what you owe. They are inseparable—like breathing in and breathing out. A society that demands only rights without accepting responsibilities collapses into chaos. A society that demands only responsibilities without granting rights becomes tyranny.

![Scales of justice](https://images.unsplash.com/photo-1456518563096-0ff5ee08204e?w=800&q=80)

## Your Fundamental Rights

In many democracies, these are protected by a "Bill of Rights" or Constitution. Internationally, the Universal Declaration of Human Rights (1948) established that certain rights belong to all humans, regardless of where they live.

### 1. Freedom of Speech
You can criticize the government, express unpopular opinions, and engage in political discourse without fear of imprisonment.
* **Limit:** You cannot use speech to incite imminent violence, commit fraud, or spread dangerous lies (e.g., shouting "Fire!" in a crowded theater)
* **Real Example:** In 1969, the U.S. Supreme Court ruled in Tinker v. Des Moines that students wearing black armbands to protest the Vietnam War was protected speech, establishing that you don't "shed your constitutional rights at the schoolhouse gate"
* **Digital Age:** This extends to social media, but private platforms (like Twitter/X) can set their own rules

### 2. Freedom of Religion
You can practice any religion or *no* religion. The government cannot force you to pray, attend services, or fund religious institutions through your taxes.
* **Separation of Church and State:** Government stays out of religion; religion stays out of government
* **Real Example:** Public schools cannot require prayer, but students can pray voluntarily

### 3. Freedom of Assembly
You can gather with others to protest peacefully, form organizations, and petition the government for change.
* **Peaceful:** Violence or destruction voids this protection
* **Real Example:** The March on Washington (1963) where Dr. King gave his "I Have a Dream" speech was protected assembly

### 4. Right to Due Process
If accused of a crime, you have the right to a fair trial, a lawyer, and to remain silent. You are innocent until proven guilty.
* **Miranda Rights:** "You have the right to remain silent. Anything you say can be used against you..."
* **Why it matters:** Prevents false confessions and wrongful convictions
* **Real Example:** The Innocence Project has exonerated over 375 people using DNA evidence, showing why due process protections are critical

### 5. Right to Privacy
You have a right to personal privacy in your home, communications, and personal life.
* **Digital Privacy:** This is evolving—does the government need a warrant to access your phone? Your location data? Your emails?
* **Current Debate:** Balancing security (preventing terrorism) with privacy (preventing surveillance state)

### 6. Right to Education
Many countries recognize education as a fundamental right, not a privilege.
* **Why it matters:** Education is the foundation of opportunity and social mobility

## The Rights-Responsibilities Matrix

For every right, there's a corresponding responsibility:

| Right | Corresponding Responsibility |
|-------|------------------------------|
| Freedom of Speech | Speak truthfully; listen to others; engage in civil discourse |
| Freedom of Religion | Respect others' beliefs; don't impose your faith on others |
| Right to Vote | Stay informed; actually vote; accept election results |
| Right to Trial | Serve on juries when called |
| Right to Property | Pay taxes to fund public services |
| Right to Education | Attend school; pursue learning |

## Your Civic Responsibilities (Duties)

These are the price of living in a civilized society.

### 1. Obeying the Law
Laws protect everyone. Stopping at a red light protects you and the other driver. Paying for items instead of stealing protects businesses and keeps prices fair.
* **Civil Disobedience Exception:** When a law is unjust, peaceful protest and accepting consequences can highlight the injustice (see: Rosa Parks, Gandhi)

### 2. Paying Taxes
Schools, roads, firefighters, the military, and social safety nets are not free. Taxes are the subscription fee for civilization.
* **Progressive Taxation:** Those who earn more pay a higher percentage
* **Where it goes:** Infrastructure, defense, education, healthcare, social security
* **Real Perspective:** Countries with higher taxes often have better public services (healthcare, education, transit)

### 3. Jury Duty
If you want a fair trial, you must be willing to give others a fair trial. When called, you serve as a juror to decide a case.
* **Why it matters:** Jury of your peers is a cornerstone of justice
* **Time commitment:** Usually 1-2 weeks, sometimes just a day
* **You can't be fired:** Employers must allow you to serve

### 4. Voting
Democracy is "Use it or Lose it." If you don't vote, you let others decide your future.
* **Beyond presidential elections:** Local elections often have more direct impact on your daily life
* **Informed voting:** Research candidates and issues before voting

### 5. Being Informed
You have a duty to know what is happening. Ignorance allows corruption to spread.
* **Media Literacy:** Learn to distinguish facts from opinions, identify bias, and verify sources
* **Multiple Sources:** Don't get all your news from one place

### 6. Defending the Nation (in some countries)
Some countries require military or civil service (Israel, South Korea, Switzerland).
* **Selective Service:** In the U.S., males must register at 18, though there's currently no draft

## Know Your Rights: Practical Scenarios

### Scenario 1: Police Encounter
**Situation:** You're pulled over while driving.
**Your Rights:**
* You can remain silent (except for providing license, registration, insurance)
* You can refuse a search of your car (unless they have probable cause)
* You can ask "Am I free to go?" or "Am I being detained?"

**Your Responsibilities:**
* Keep hands visible
* Be respectful (even if you disagree)
* Follow lawful orders
* Don't run or resist

### Scenario 2: School Discipline
**Situation:** A teacher wants to search your backpack.
**Your Rights:**
* You have limited privacy rights at school
* Searches must have "reasonable suspicion"
* You can ask why you're being searched

**Your Responsibilities:**
* Follow school rules
* Don't bring prohibited items
* Cooperate with reasonable requests

### Scenario 3: Workplace
**Situation:** Your boss asks you to work unpaid overtime.
**Your Rights:**
* Fair Labor Standards Act requires overtime pay (time-and-a-half) for hourly workers over 40 hours/week
* You can report violations to the Department of Labor

**Your Responsibilities:**
* Fulfill your job duties
* Give notice if you quit
* Follow workplace policies

## Digital Rights in the Modern Age

### Data Privacy
* **Right:** Your personal data should be protected
* **Reality:** Companies collect massive amounts of data (search history, location, purchases)
* **Action:** Read privacy policies, use privacy settings, consider VPNs

### Freedom of Speech Online
* **Right:** You can express opinions online
* **Limit:** Private platforms (Facebook, Twitter) can moderate content
* **Nuance:** Government can't censor you, but private companies can

### Right to be Forgotten
* **Concept:** In some regions (EU), you can request removal of personal information from search engines
* **Debate:** Balancing privacy with public interest and free information

## Key Takeaway
Don't just ask "What are my rights?" Ask "What are my responsibilities?" A strong society needs both. Rights without responsibilities lead to chaos. Responsibilities without rights lead to oppression. The balance creates freedom.

---

## Practical Exercises

### Exercise 1: Personal Rights Audit
Create a chart listing your top 10 rights (speech, privacy, education, etc.). For each right, identify: (1) A time you exercised this right, (2) A corresponding responsibility, (3) One way this right is threatened or limited today. Reflect on which rights you take for granted.

### Exercise 2: Know Your Rights Role-Play
With a partner, role-play three scenarios: (1) Police traffic stop, (2) School locker search, (3) Workplace dispute. Practice asserting your rights respectfully while fulfilling your responsibilities. Switch roles. Discuss what felt comfortable and what felt difficult.

### Exercise 3: Universal Declaration of Human Rights Analysis
Read the UN Universal Declaration of Human Rights (30 articles). Choose 3 articles that resonate with you. For each, write: (1) Why it matters, (2) A country or situation where this right is violated, (3) What individuals can do to protect this right. Present your findings.

### Exercise 4: Digital Privacy Check
Audit your digital footprint: (1) Google yourself—what appears? (2) Check privacy settings on 3 social media accounts, (3) Review what data Google/Facebook has on you (download your data), (4) Install a privacy-focused browser extension. Write a reflection on what surprised you and what changes you'll make.

---

> "With great power comes great responsibility." - Uncle Ben (Spider-Man)

> "Ask not what your country can do for you—ask what you can do for your country." - John F. Kennedy

> "The rights of every man are diminished when the rights of one man are threatened." - John F. Kennedy
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
"My vote doesn't matter" is the lie that keeps bad leaders in power. In local elections, winners are sometimes decided by less than 50 votes. In 2017, a Virginia House of Delegates race was decided by a single vote—literally one person determined control of the legislature. Your vote is your voice in how society is run.

![Voting concept](https://images.unsplash.com/photo-1540910419868-474947cebacb?w=800&q=80)

## Types of Elections

### 1. General Elections (National)
Choosing the President, Prime Minister, or national legislature.
* **High media attention:** 24/7 news coverage, debates, advertising
* **Sets national direction:** War and peace, economy, healthcare, Supreme Court appointments
* **Turnout:** Usually 50-60% in democracies (higher in some countries)
* **Real Example:** The 2020 U.S. election had the highest turnout in 120 years (66.8%), showing that when people feel stakes are high, they vote

### 2. Midterm/Local Elections
Choosing Mayors, Governors, City Council, School Boards, Judges, Sheriffs.
* **Crucial Fact:** These people affect your daily life *more* than the President
* **They decide:** Are potholes fixed? How good are schools? Police funding? Park maintenance? Property taxes?
* **Turnout:** Often only 20-30%—meaning a small, motivated group controls outcomes
* **Real Example:** In 2021, school board elections became battlegrounds over curriculum, showing how "small" elections have huge impacts

### 3. Primary Elections
Choosing which candidate represents each party in the general election.
* **Why it matters:** Often more important than the general election in "safe" districts
* **Open vs. Closed:** Some states let anyone vote in any primary; others require party membership

## How Voting Works: Step-by-Step Guide

### Step 1: Register to Vote
* **When:** Register at least 30 days before election (varies by location)
* **Where:** Online (vote.gov in U.S.), DMV, or mail
* **What you need:** Proof of residency, ID (requirements vary)
* **Automatic registration:** Some states register you when you get a driver's license

### Step 2: Research the Ballot
* **Candidates:** Look up their positions, voting records, endorsements
* **Propositions:** Read non-partisan voter guides (League of Women Voters, Ballotpedia)
* **Time needed:** 30-60 minutes can make you more informed than 80% of voters

### Step 3: Vote
* **Early voting:** Many places allow voting weeks before Election Day (shorter lines!)
* **Mail-in ballot:** Request one, fill it out carefully, return it early
* **Election Day:** Find your polling place, bring ID if required, vote!
* **Provisional ballot:** If there's a problem, you can still cast a provisional ballot

### Step 4: Track Your Ballot
* Many states let you track your mail-in ballot online to confirm it was received and counted

## Electoral Systems: How Votes Become Seats

### First-Past-the-Post (USA, UK, Canada)
* **How it works:** Whoever gets the most votes wins, even if it's not a majority
* **Pro:** Simple, clear winner
* **Con:** Can lead to "spoiler" candidates; third parties struggle
* **Example:** In a three-way race (40%, 35%, 25%), the 40% candidate wins even though 60% voted against them

### Ranked Choice Voting (Australia, some U.S. cities)
* **How it works:** Rank candidates by preference. If no one gets 50%, the last-place candidate is eliminated and their votes go to voters' second choices
* **Pro:** Reduces negative campaigning; third parties viable; ensures majority support
* **Con:** More complex to understand
* **Real Example:** Maine and Alaska use this for state elections

### Proportional Representation (Most of Europe)
* **How it works:** Parties get seats based on percentage of votes (30% of votes = 30% of seats)
* **Pro:** Every vote counts; diverse representation
* **Con:** Can lead to coalition governments and instability

## Why People Don't Vote (And Why Those Reasons Don't Hold Up)

### "They're all the same"
* **Reality:** Voting records show stark differences on healthcare, taxes, environment, civil rights
* **Action:** Look up actual votes, not just campaign promises

### "It's too hard"
* **Reality:** Voter suppression is real (long lines, ID requirements, limited early voting)
* **Action:** Plan ahead, vote early, help others get to polls

### "I don't know enough"
* **Reality:** You don't need a PhD. 30 minutes of research is enough
* **Action:** Use non-partisan voter guides; focus on top 2-3 issues you care about

### "My state/district always goes one way"
* **Reality:** Local races and ballot measures are often close
* **Action:** Vote down-ballot; primaries matter more in safe districts

## Threats to Democracy

### Gerrymandering
Politicians drawing district lines to guarantee their party wins.
* **Packing:** Cram all opposition voters into one district (they win 1 seat by a lot, lose everywhere else)
* **Cracking:** Spread opposition voters thin across many districts (they lose everywhere)
* **Real Example:** In 2012, Democrats won more votes for U.S. House in Pennsylvania but Republicans won 13 of 18 seats due to gerrymandering
* **Solution:** Independent redistricting commissions

### Voter Suppression
Making it harder for certain groups to vote.
* **Tactics:** Strict ID laws, closing polling places in certain neighborhoods, purging voter rolls, limiting early voting
* **Who it affects:** Disproportionately impacts poor, elderly, minority, and young voters
* **Action:** Know your rights, help others register and get to polls

### Misinformation and Disinformation
* **Misinformation:** False information spread unintentionally
* **Disinformation:** False information spread deliberately to deceive
* **Examples:** Fake polling place info, false claims about voter fraud, deepfake videos
* **Defense:** Verify through official sources (vote.gov, local election board), check multiple sources, be skeptical of sensational claims

## How to Spot Fake News and Misinformation

### The SIFT Method
1. **Stop:** Don't share immediately
2. **Investigate the source:** Who published this? What's their track record?
3. **Find better coverage:** Do reputable sources report this?
4. **Trace to original:** Is this a primary source or someone's interpretation?

### Red Flags
* ALL CAPS HEADLINES!!!
* No author listed
* Emotional language designed to make you angry
* No sources cited
* URL looks weird (abcnews.com.co instead of abcnews.com)

## Beyond Voting: Year-Round Civic Engagement

Democracy is a 365-day job, not just one day a year.

### Attend Town Halls
* Local officials hold regular meetings
* You can speak directly to decision-makers
* Most meetings are now hybrid (in-person and virtual)

### Contact Your Representatives
* **Phone calls:** Most effective (staffers tally calls)
* **Emails:** Good for detailed positions
* **Social media:** Public pressure works
* **Template:** "I'm a constituent from [zip]. I urge you to [action] on [issue] because [reason]."

### Peaceful Protest
* Constitutionally protected right
* Shows strength of public opinion
* **Effective protests:** Clear message, organized, sustained pressure

### Join or Support Organizations
* Issue-based groups (environmental, civil rights, education)
* They do the research and organize collective action

### Run for Office
* Local offices often go uncontested
* School board, city council, planning commission—these shape daily life

## Key Takeaway
Bad officials are elected by good citizens who do not vote. Democracy is not a gift from the past; it's a responsibility for the present. Every generation must defend and renew it.

---

## Practical Exercises

### Exercise 1: Voter Registration Drive
Organize a voter registration drive at your school or community. Create: (1) Information sheets on how to register, (2) A table with registration forms, (3) A plan to follow up. Track how many people you help register. Reflect on barriers people face and how to overcome them.

### Exercise 2: Create a Voter Guide
For an upcoming election, create a non-partisan voter guide. Research: (1) All candidates and their positions, (2) All ballot measures with pro/con arguments, (3) Voting logistics (where, when, how). Share it with 10 people. Survey them: Did this help? Did they vote?

### Exercise 3: Electoral System Simulation
Using the same set of votes, calculate results under three systems: First-past-the-post, Ranked choice, and Proportional representation. Example votes: Candidate A (40%), B (35%), C (25%). How do results differ? Write a reflection on which system seems fairest and why.

### Exercise 4: Misinformation Audit
For one week, collect 5 political claims you see on social media. For each: (1) Identify the source, (2) Fact-check using Snopes, PolitiFact, or AP Fact Check, (3) Note if it was true, false, or misleading, (4) Analyze why it spread. What patterns do you notice?

### Exercise 5: Attend and Document a Public Meeting
Attend a city council, school board, or town hall meeting. Document: (1) Issues discussed, (2) Who spoke (officials vs. citizens), (3) Decisions made, (4) Your reaction. Write a letter to the editor or social media post summarizing what you learned.

---

> "The ballot is stronger than the bullet." - Abraham Lincoln

> "Nobody will ever deprive the American people of the right to vote except the American people themselves—and the only way they could do this is by not voting." - Franklin D. Roosevelt

> "Voting is not only our right—it is our power." - Loung Ung
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
Imagine a football game with no rules. No sidelines, no fouls, no clock. It wouldn't be a game; it would be a brawl. Laws are the rules of the game of Life. They create predictability, protect the weak from the strong, and allow society to function without constant conflict.

![Judge's gavel](https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80)

## The Rule of Law
This is a foundational concept of democracy. It means **No one is above the law.**
* The President, the billionaire, the celebrity, and the average citizen all have to follow the same rules
* In a dictatorship, the Leader *is* the law—their word is final. In a democracy, the Law is King—even leaders must obey it
* **Real Example:** In 1974, President Nixon was forced to resign during Watergate because the Supreme Court ruled he had to hand over incriminating tapes. The law was more powerful than the most powerful person in the country

### Why This Matters
Without rule of law:
* The powerful can exploit the weak with no consequences
* Contracts become meaningless (why honor an agreement if there's no enforcement?)
* Economic development stalls (businesses won't invest where property rights aren't protected)
* Trust in society collapses

## The Hierarchy of Law

Laws exist in a hierarchy—higher laws override lower ones:

### 1. Constitution (Highest)
* The supreme law of the land
* Establishes government structure and fundamental rights
* Very difficult to change (requires supermajority)
* **Example:** U.S. Constitution has only been amended 27 times in 235+ years

### 2. Federal/National Laws
* Passed by national legislature (Congress, Parliament)
* Apply to entire country
* Must comply with Constitution
* **Example:** Civil Rights Act, Clean Air Act

### 3. State/Provincial Laws
* Passed by state legislatures
* Apply only within that state
* Cannot contradict federal law or Constitution
* **Example:** State criminal codes, marriage laws, education standards

### 4. Local Ordinances (Lowest)
* Passed by city councils or county boards
* Apply only within that jurisdiction
* **Example:** Zoning laws, noise ordinances, parking regulations

**Supremacy Clause:** When laws conflict, higher law wins. If a city ordinance contradicts state law, state law prevails.

## Types of Law

### 1. Criminal Law (Society vs. You)
* **What:** Crimes against public order and safety
* **Who prosecutes:** The government ("The People" or "The State")
* **Examples:** Theft, murder, assault, drug possession, fraud
* **Penalty:** Jail/prison time, probation, fines paid to government, community service
* **Standard of proof:** "Beyond a Reasonable Doubt" (~99% sure)
* **Why higher standard:** We'd rather let a guilty person go free than imprison an innocent person
* **Your rights:** Right to attorney, right to remain silent, trial by jury

**Categories of Crimes:**
* **Felonies:** Serious crimes (murder, robbery) - prison time over 1 year
* **Misdemeanors:** Less serious (shoplifting, vandalism) - jail time under 1 year
* **Infractions:** Minor violations (speeding tickets) - fines only

### 2. Civil Law (Person vs. Person)
* **What:** Disputes between individuals or organizations
* **Who brings the case:** The person who was harmed (plaintiff)
* **Examples:** Contract disputes, divorce, property damage, copyright infringement, personal injury
* **Penalty:** Money paid to the other person (damages/compensation). No jail time
* **Standard of proof:** "Preponderance of the Evidence" (~51% sure - more likely than not)
* **Why lower standard:** We're not taking away freedom, just redistributing money

**Real Example:** O.J. Simpson was found "not guilty" in criminal court (couldn't prove beyond reasonable doubt) but "liable" in civil court (more likely than not he did it). Different standards, different outcomes.

### 3. Administrative Law
* **What:** Rules created by government agencies (EPA, FDA, FCC)
* **Examples:** Environmental regulations, food safety standards, broadcasting licenses
* **Why it exists:** Congress can't write detailed rules for every industry, so they delegate to expert agencies

### 4. Constitutional Law
* **What:** Interpretation of the Constitution
* **Who decides:** Supreme Court and other courts
* **Examples:** Is this law constitutional? Do you have a right to X?

## How a Bill Becomes a Law (Detailed)

### Step 1: Idea
A citizen, interest group, or lawmaker identifies a problem needing a solution.
* **Example:** Too many traffic deaths → idea for seatbelt law

### Step 2: Drafting
A legislator writes the proposal as a formal bill.
* Bills have numbers (H.R. 1234 in House, S. 567 in Senate)
* Often written with help from lawyers, experts, lobbyists

### Step 3: Committee Review
The bill goes to a specialized committee (Education, Defense, etc.).
* **Hearings:** Experts testify, debate the bill
* **Markup:** Committee makes changes
* **Vote:** Committee decides whether to send it to the full chamber
* **Reality:** Most bills die in committee (only ~10% make it out)

### Step 4: Floor Debate and Vote
The full House or Senate debates and votes.
* **Amendments:** Members can propose changes
* **Filibuster (Senate only):** Talking for hours to delay a vote
* **Passage:** Needs majority vote (sometimes supermajority)

### Step 5: Other Chamber
The bill goes through the same process in the other chamber (House → Senate or vice versa).
* If both chambers pass different versions, a conference committee reconciles them

### Step 6: Executive Approval
The President/Governor can:
* **Sign it:** Becomes law
* **Veto it:** Rejects it (sends back to legislature)
* **Do nothing:** After 10 days, it becomes law anyway (unless Congress has adjourned—"pocket veto")

### Step 7: Override (if vetoed)
Legislature can override a veto with a supermajority (usually 2/3 vote).

### Step 8: Implementation
Government agencies write detailed regulations and enforce the law.

**Real Example:** The Affordable Care Act (Obamacare) took over a year to pass, involved hundreds of hours of committee hearings, thousands of amendments, and intense debate before becoming law in 2010.

## Your First Court Appearance: What to Expect

### Before Court
* **Dress professionally:** Shows respect for the court
* **Arrive early:** Courts run on strict schedules
* **Bring documents:** Any paperwork related to your case
* **Turn off phone:** Phones ringing in court can result in contempt charges

### In the Courtroom
* **Stand when judge enters:** Show respect
* **Address judge as "Your Honor"**
* **Speak only when asked:** Don't interrupt
* **Be honest:** Lying to a judge is perjury (a crime)
* **Stay calm:** Emotional outbursts hurt your case

### Types of Hearings
* **Arraignment:** First appearance; you hear charges and enter a plea
* **Preliminary hearing:** Judge decides if there's enough evidence to proceed
* **Trial:** Full hearing with evidence, witnesses, and a verdict
* **Sentencing:** Judge decides punishment if found guilty

## Civil Disobedience: When Breaking the Law is Moral

Sometimes, a law is unjust (e.g., segregation laws, apartheid).

### What is Civil Disobedience?
* **Definition:** Peacefully breaking a law to show it is wrong, while accepting the punishment to highlight the injustice
* **Key elements:** Nonviolent, public, accepting consequences, aimed at changing unjust law

### Famous Examples
* **Rosa Parks (1955):** Refused to give up her bus seat, sparking Montgomery Bus Boycott
* **Gandhi's Salt March (1930):** Walked 240 miles to make salt, defying British monopoly
* **Lunch Counter Sit-ins (1960s):** Black students sat at "whites only" counters, enduring abuse peacefully
* **Extinction Rebellion (2018-present):** Climate activists blocking roads to demand action

### Civil Disobedience vs. Lawlessness
* **Civil disobedience:** Targeted, principled, nonviolent, accepts consequences
* **Lawlessness:** Random, selfish, often violent, evades consequences

**Martin Luther King Jr.'s Test:** An unjust law is one that:
1. Degrades human personality
2. Is imposed on a minority by a majority that doesn't follow it themselves
3. Was created without the affected group having a voice (no voting rights)

## Restorative Justice: An Alternative Approach

Traditional justice asks: "What law was broken? Who did it? What punishment do they deserve?"

Restorative justice asks: "Who was harmed? What do they need? Whose obligation is it to meet that need?"

### How It Works
* Offender meets with victim (if victim agrees)
* Offender hears impact of their actions
* Together, they create a plan to repair harm
* Focus on healing and rehabilitation, not just punishment

### Real Example
A teen vandalizes a school. Instead of jail:
* Teen meets with principal, janitor, students
* Hears how vandalism affected them (fear, extra work, wasted money)
* Teen agrees to clean, repair damage, and speak to other students about choices
* Teen learns empathy; school is repaired; community heals

**Success rates:** Lower recidivism (re-offending) than traditional punishment in many studies.

## Key Takeaway
Laws are not static. They are living agreements that reflect society's values. If a law is unjust, we have the power (through democracy, advocacy, and sometimes civil disobedience) to change it. The law serves the people; the people do not serve the law.

---

## Practical Exercises

### Exercise 1: Law Hierarchy Mapping
Find a current legal controversy (abortion, gun rights, immigration, etc.). Map the different levels of law involved: (1) Constitutional provisions, (2) Federal laws, (3) State laws, (4) Local ordinances. Identify conflicts between levels. Which law should prevail and why?

### Exercise 2: Mock Trial
Organize a mock trial with classmates. Assign roles: judge, prosecutor, defense attorney, defendant, witnesses, jury. Use a real or fictional case. Follow proper courtroom procedure. After the verdict, discuss: What was challenging? How did evidence and arguments affect the outcome?

### Exercise 3: Bill Tracking Project
Choose a current bill in your legislature. Track it for 4-6 weeks: (1) Read the full text, (2) Identify stakeholders (who supports/opposes and why), (3) Follow committee hearings, (4) Track amendments, (5) Predict outcome. Write a report on the legislative process you observed.

### Exercise 4: Civil Disobedience Case Study
Research a historical act of civil disobedience (Rosa Parks, Gandhi, Thoreau, Suffragettes, etc.). Analyze: (1) What law was broken and why was it unjust? (2) What were the consequences? (3) Did it lead to change? (4) Was it justified? Write a 500-word essay defending or critiquing the action.

### Exercise 5: Restorative Justice Circle
With a group, simulate a restorative justice circle for a school-based conflict (bullying, cheating, vandalism). Assign roles: offender, victim, facilitator, community members. Follow the process: (1) Victim shares impact, (2) Offender responds, (3) Group discusses repair, (4) Create agreement. Reflect: How did this differ from traditional punishment? What was more/less effective?

---

> "Where laws end, tyranny begins." - John Locke

> "One has a moral responsibility to disobey unjust laws." - Martin Luther King Jr.

> "The law is reason, free from passion." - Aristotle

> "Injustice anywhere is a threat to justice everywhere." - Martin Luther King Jr.
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

Culture is like an iceberg—what you see is just the tip.

* **10% Visible (Above Water):** Food, flags, festivals, clothing, music, dance, architecture, language
* **90% Invisible (Below Water):** Values, beliefs, body language, concept of time, definition of respect, attitude towards elders, personal space, eye contact norms, work ethic, individualism vs. collectivism

To truly understand a culture, you must dive below the water. The visible parts are interesting, but the invisible parts determine how people think, make decisions, and interact.

![Cultural diversity](https://images.unsplash.com/photo-1526199119161-4be1e3368d52?w=800&q=80)

## Cultural Relativism vs. Ethnocentrism

### Cultural Relativism
The idea that "different" does not mean "wrong." Every culture should be understood on its own terms, within its own context.

* **Example:** In Culture A, eating with hands is polite and shows appreciation for the food. In Culture B, using utensils is the norm. Neither is truly "correct"—it depends on the context
* **Why it matters:** Prevents judgment and promotes understanding
* **Limit:** Some practices (human rights violations) transcend cultural relativism

### Ethnocentrism
Judging other cultures by your own standards, assuming your way is the "right" way.

* **Example:** Thinking "They're weird/dirty/backwards" instead of "They're different"
* **Danger:** Leads to prejudice, colonialism, and cultural imperialism
* **How to avoid:** Ask "Why do they do it this way?" instead of "Why don't they do it my way?"

## Hofstede's Cultural Dimensions

Dutch psychologist Geert Hofstede identified six dimensions that vary across cultures. Understanding these helps navigate cultural differences.

### 1. Individualism vs. Collectivism

**Individualist Cultures ("I" culture):**
* Focus on personal goals, independence, and "standing out"
* Value: Self-reliance, personal achievement, freedom
* Examples: USA, UK, Australia, Netherlands
* **In practice:** "The squeaky wheel gets the grease" (speak up for yourself)

**Collectivist Cultures ("We" culture):**
* Focus on group harmony, family duty, and "fitting in"
* Value: Loyalty, tradition, group success over individual glory
* Examples: China, Japan, Korea, many Latin American and African countries
* **In practice:** "The nail that sticks out gets hammered down" (don't draw attention)

### 2. Power Distance (High vs. Low)

**High Power Distance:**
* Accept hierarchy as natural
* Respect authority without question
* Examples: Malaysia, Philippines, Russia, Arab countries
* **In practice:** Don't contradict your boss or teacher publicly

**Low Power Distance:**
* Question authority is acceptable
* Flat organizational structures
* Examples: Denmark, New Zealand, Austria
* **In practice:** Students can debate with professors; employees challenge bosses

### 3. Uncertainty Avoidance (High vs. Low)

**High Uncertainty Avoidance:**
* Prefer rules, structure, and predictability
* Uncomfortable with ambiguity
* Examples: Greece, Portugal, Japan
* **In practice:** Detailed plans, written contracts, resistance to change

**Low Uncertainty Avoidance:**
* Comfortable with ambiguity and risk
* Flexible, adaptable
* Examples: Singapore, Jamaica, Denmark
* **In practice:** "We'll figure it out as we go"

### 4. Masculinity vs. Femininity (Task vs. Relationship)

**Masculine Cultures:**
* Value competition, achievement, assertiveness
* Clear gender roles
* Examples: Japan, Germany, USA
* **In practice:** "Work to live" mentality; success measured by money/status

**Feminine Cultures:**
* Value cooperation, caring, quality of life
* Fluid gender roles
* Examples: Sweden, Norway, Netherlands
* **In practice:** "Live to work" mentality; success measured by work-life balance

### 5. Long-Term vs. Short-Term Orientation

**Long-Term:**
* Plan for the future, delayed gratification
* Value perseverance, thrift
* Examples: China, Japan, South Korea

**Short-Term:**
* Focus on present and past, quick results
* Value tradition, social obligations
* Examples: USA, UK, Australia

### 6. Indulgence vs. Restraint

**Indulgent:**
* Allow gratification of desires
* Value leisure and fun
* Examples: Mexico, Sweden, Australia

**Restrained:**
* Suppress gratification
* Strict social norms
* Examples: Russia, China, Egypt

## High Context vs. Low Context Communication

### Low Context (Direct Communication)
* **Cultures:** USA, Germany, Scandinavia, Australia
* **Style:** Explicit, literal, straightforward
* **"Yes" means:** Yes
* **"No" means:** No
* **Valued:** Efficiency, clarity, getting to the point
* **Business:** Contracts are detailed; written agreements are binding
* **Example:** "I disagree with your proposal" is acceptable and not rude

### High Context (Indirect Communication)
* **Cultures:** Japan, China, Arab countries, many Asian and Latin American cultures
* **Style:** Implicit, reading between the lines, subtle
* **"Maybe" might mean:** No (but saying no directly is rude)
* **"We'll consider it" might mean:** Absolutely not
* **Valued:** Relationships, harmony, saving face
* **Business:** Relationships matter more than contracts; trust is built over time
* **Example:** "That might be difficult" means "No, but I'm being polite"

**Real-World Impact:** An American manager says "Great job, but next time try X." The American employee hears constructive feedback. The Japanese employee hears harsh criticism because the negative came second (more weight in high-context cultures).

## Cultural Case Studies

### Case Study 1: Japan
* **Collectivist, High Context, High Power Distance**
* **Concept of "Wa" (Harmony):** Avoid conflict; group consensus is essential
* **Gift-giving:** Complex ritual with specific rules (never open gifts in front of giver)
* **Business cards:** Exchange with two hands, bow, study the card respectfully
* **Silence:** Comfortable; shows thoughtfulness, not awkwardness
* **Apology:** Frequent and expected, even when not at fault (maintains harmony)

### Case Study 2: Germany
* **Individualist, Low Context, Low Power Distance**
* **Punctuality:** Being late is deeply disrespectful
* **Direct communication:** Blunt honesty is valued over politeness
* **Planning:** Detailed, structured, follows rules
* **Privacy:** Personal questions (salary, religion) are inappropriate
* **Work-life separation:** Don't call colleagues after work hours

### Case Study 3: Brazil
* **Collectivist, High Context, Relationship-focused**
* **Personal relationships:** Business happens after trust is built (expect long lunches)
* **Physical contact:** Hugs, kisses on cheek (even in business)
* **Time:** Flexible; "Brazilian time" means meetings start late
* **Emotion:** Expressive; showing passion is positive
* **Hierarchy:** Respect for authority, but warm and personal

### Case Study 4: Saudi Arabia
* **Collectivist, High Power Distance, High Context**
* **Religion:** Islam shapes daily life (prayer times, Ramadan fasting, modesty)
* **Gender:** Segregation in many contexts; women's rights vary by region
* **Hospitality:** Offering tea/coffee is mandatory; refusing is rude
* **Left hand:** Never use for eating or handshakes (considered unclean)
* **Inshallah ("God willing"):** Plans are tentative; fate plays a role

## Cross-Cultural Communication Strategies

### 1. Do Your Research
* Learn basic customs before visiting or working with a culture
* Understand taboos (topics to avoid, gestures that offend)

### 2. Observe and Mirror
* Watch how locals behave and follow their lead
* Match their communication style (formal vs. casual, direct vs. indirect)

### 3. Ask Questions Respectfully
* "In your culture, how do people typically...?"
* Shows genuine interest and humility

### 4. Apologize for Mistakes
* "I'm still learning about your culture. Please let me know if I do something inappropriate."
* Most people appreciate the effort

### 5. Avoid Assumptions
* Don't assume everyone from a culture is the same
* Individuals vary within cultures

### 6. Be Patient
* Cultural adaptation takes time
* Misunderstandings will happen; learn from them

## Culture Shock and Adaptation

### The Culture Shock Curve

**Stage 1: Honeymoon (Weeks 1-4)**
* Everything is exciting and exotic
* Tourist mindset

**Stage 2: Frustration (Months 2-3)**
* Differences become annoying
* Homesickness, irritability, withdrawal
* "Why do they do it this way? My way is better!"

**Stage 3: Adjustment (Months 4-6)**
* Start understanding the logic behind differences
* Develop routines, make friends
* Bicultural competence emerges

**Stage 4: Acceptance (Months 6+)**
* Comfortable in both cultures
* Appreciate differences
* May experience reverse culture shock when returning home

### Coping Strategies
* **Stay connected:** Keep in touch with home, but don't isolate yourself
* **Learn the language:** Even basics show respect and ease daily life
* **Find community:** Connect with both locals and other expats
* **Stay curious:** Treat challenges as learning opportunities
* **Self-care:** Maintain routines, exercise, eat well

## Cultural Appreciation vs. Cultural Appropriation

### Cultural Appreciation
* **Definition:** Learning about a culture, being invited to participate, respecting the meaning
* **Examples:**
  - Learning to cook authentic cuisine from someone of that culture
  - Attending a cultural festival and participating respectfully
  - Learning a language
  - Wearing traditional clothing when invited (e.g., wearing a sari to an Indian wedding)
* **Key:** Permission, context, respect, giving credit

### Cultural Appropriation
* **Definition:** Taking a sacred or meaningful element of a culture for fashion/fun without respect, often by a dominant culture from a marginalized one
* **Examples:**
  - Wearing a Native American headdress as a Halloween costume (headdresses are earned honors)
  - Getting a tattoo of religious symbols you don't understand
  - Using Black hairstyles (locs, cornrows) as a "trend" while Black people face discrimination for the same styles
  - Yoga studios that strip yoga of its spiritual roots and sell it as just exercise
* **Key:** Power dynamics, lack of understanding, commodification, disrespect

**The Test:** Ask yourself:
1. Am I being invited to participate, or am I taking?
2. Do I understand the cultural/religious significance?
3. Would people from this culture be offended?
4. Am I giving credit and showing respect?

## Key Takeaway
Travel is fatal to prejudice, bigotry, and narrow-mindedness. The more you learn about how others live, the more you realize we all want the same things: safety, love, belonging, and purpose. Our methods differ, but our humanity is universal.

---

## Practical Exercises

### Exercise 1: Cultural Interview Project
Interview someone from a different cultural background (international student, immigrant, colleague). Ask: (1) What surprised you most about this culture? (2) What do you miss most from your culture? (3) What's one thing people misunderstand about your culture? (4) What advice would you give someone visiting your country? Write a 500-word reflection on what you learned.

### Exercise 2: Hofstede Dimensions Self-Assessment
Rate your own culture on Hofstede's six dimensions (1-10 scale). Then research a culture very different from yours and rate it. Create a visual comparison (spider chart or table). Reflect: How might these differences cause misunderstandings? How can you bridge the gap?

### Exercise 3: High vs. Low Context Communication Role-Play
With a partner, role-play a business negotiation twice: (1) Using low-context (direct) communication, (2) Using high-context (indirect) communication. Switch roles. Discuss: Which felt more natural? Which was more challenging? How did the outcomes differ?

### Exercise 4: Cultural Iceberg Analysis
Choose a culture you're interested in. Research and create an iceberg diagram: (1) Above water: visible elements (food, clothing, festivals), (2) Below water: invisible elements (values, beliefs, communication styles, time orientation). Present your findings. What surprised you most about the "below water" elements?

### Exercise 5: Appreciation vs. Appropriation Debate
Find 3 real-world examples of potential cultural appropriation (fashion, music, food, etc.). For each, debate: Is this appreciation or appropriation? Consider: (1) Power dynamics, (2) Context, (3) Respect shown, (4) Impact on the culture. Write a balanced analysis of each case.

---

> "Travel is fatal to prejudice, bigotry, and narrow-mindedness." - Mark Twain

> "The world is a book, and those who do not travel read only one page." - Saint Augustine

> "We are all different, which is great because we are all unique. Without diversity, life would be very boring." - Catherine Pulsifer
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
Problems no longer stay inside borders. A virus in one country, a war in another, or pollution in a third affects everyone. We are global citizens whether we acknowledge it or not. The question is: Will we be passive observers or active participants in shaping our shared future?

![Global connectivity](https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80)

## Major Global Challenges

### 1. Climate Change: The Defining Issue of Our Time

**The Science:**
* Earth's average temperature has risen 1.1°C since pre-industrial times
* Caused primarily by greenhouse gases (CO2, methane) from burning fossil fuels
* 97% of climate scientists agree: it's real, it's us, and it's urgent

**Current Impacts:**
* **Rising sea levels:** Threatening coastal cities (Miami, Mumbai, Shanghai)
* **Extreme weather:** More frequent hurricanes, droughts, wildfires, floods
* **Biodiversity loss:** Species going extinct 1,000x faster than natural rate
* **Food security:** Crop failures, changing growing seasons
* **Climate refugees:** 21.5 million people displaced annually by weather events

**The Challenge:**
* Transitioning from fossil fuels to renewable energy without economic collapse
* Balancing development needs of poor countries with emission reductions
* Overcoming political gridlock and fossil fuel industry resistance

**What's Being Done:**
* Paris Agreement: 195 countries committed to limiting warming to 1.5°C
* Renewable energy now cheaper than coal in many places
* Electric vehicles becoming mainstream
* Youth movements (Fridays for Future) demanding action

**Real Example:** Costa Rica ran on 99% renewable energy for 300 days in 2020, proving it's possible.

### 2. The Refugee and Migration Crisis

**By the Numbers:**
* 100+ million forcibly displaced people worldwide (2022)
* Highest number since WWII
* Half are children

**Root Causes:**
* **War and conflict:** Syria, Afghanistan, Ukraine, Myanmar
* **Persecution:** Ethnic, religious, political
* **Climate change:** Droughts, floods, rising seas ("climate refugees")
* **Economic desperation:** Seeking better opportunities

**The Human Reality:**
* Refugees are not tourists or immigrants—they're fleeing for their lives
* Most flee to neighboring countries (not wealthy Western nations)
* Average time in refugee camps: 17 years
* Children miss years of education; families are separated

**The Debate:**
* **Humanitarian argument:** We have a moral duty to help
* **Security concerns:** Vetting processes, integration challenges
* **Economic impact:** Do refugees take jobs or create them? (Research shows they contribute economically)

**Real Story:** Malala Yousafzai, shot by Taliban for advocating girls' education, became a refugee in UK, won Nobel Prize, now advocates for refugee education worldwide.

### 3. Water Scarcity: The Coming Crisis

**The Paradox:**
* Earth is 70% water, but only 3% is fresh
* Of that 3%, less than 1% is accessible (rest is in glaciers/ice caps)
* 2 billion people lack access to safe drinking water

**Why It's Getting Worse:**
* Population growth
* Climate change (droughts, changing rainfall patterns)
* Pollution (industrial waste, agricultural runoff)
* Overuse (agriculture uses 70% of freshwater)

**Conflict Potential:**
* Rivers cross borders—who controls them?
* Nile River: Egypt, Sudan, Ethiopia dispute over dam
* Jordan River: Israel, Palestine, Jordan tensions
* Some predict "water wars" in coming decades

**Solutions:**
* Desalination (removing salt from seawater)
* Water recycling and conservation
* Drip irrigation in agriculture
* Protecting watersheds and aquifers

### 4. Global Health and Pandemics

**COVID-19 Lessons:**
* Diseases spread as fast as airplanes (global in weeks)
* No country is safe until all are safe
* Vaccine inequality: Rich countries hoarded doses while poor countries waited
* Misinformation spreads faster than viruses

**Ongoing Health Challenges:**
* **Antimicrobial resistance:** Bacteria evolving faster than we can create antibiotics
* **Neglected tropical diseases:** Affect 1 billion+ people but get little funding
* **Mental health crisis:** Depression, anxiety rising globally, especially post-pandemic
* **Non-communicable diseases:** Heart disease, diabetes, cancer now leading killers worldwide

**The Equity Problem:**
* Life expectancy: 85 years in Japan, 54 years in some African countries
* Access to healthcare: Free in some countries, bankrupting in others
* **Brain drain:** Doctors from poor countries migrate to rich countries

### 5. Global Poverty and Inequality

**The Gap:**
* Richest 1% own 45% of global wealth
* Bottom 50% own less than 1%
* 700 million people live on less than $2/day

**Why It Persists:**
* Historical colonialism and exploitation
* Unfair trade agreements
* Corruption and weak governance
* Lack of education and infrastructure
* Debt traps (countries borrowing at high interest)

**Progress:**
* Extreme poverty has been cut in half since 1990 (UN goal)
* China lifted 800 million out of poverty
* But COVID-19 reversed some gains

### 6. Conflict and Terrorism

**Current Hotspots:**
* Ukraine-Russia war
* Middle East conflicts
* Ethnic tensions in Myanmar, Ethiopia
* Drug cartel violence in Latin America

**New Forms of Warfare:**
* Cyberattacks on infrastructure
* Drones and autonomous weapons
* Disinformation campaigns

## The UN Sustainable Development Goals (SDGs)

In 2015, all 193 UN member states agreed on 17 goals to achieve by 2030—a global "to-do list" for a better world.

### The 17 Goals:
1. **No Poverty:** End extreme poverty everywhere
2. **Zero Hunger:** End hunger, achieve food security
3. **Good Health and Well-Being:** Ensure healthy lives for all ages
4. **Quality Education:** Inclusive, equitable education for all
5. **Gender Equality:** Achieve gender equality and empower women/girls
6. **Clean Water and Sanitation:** Access for all
7. **Affordable and Clean Energy:** Renewable energy access
8. **Decent Work and Economic Growth:** Inclusive, sustainable growth
9. **Industry, Innovation, Infrastructure:** Resilient infrastructure
10. **Reduced Inequalities:** Within and among countries
11. **Sustainable Cities and Communities:** Safe, inclusive, resilient
12. **Responsible Consumption and Production:** Sustainable patterns
13. **Climate Action:** Urgent action on climate change
14. **Life Below Water:** Conserve oceans and marine resources
15. **Life on Land:** Protect ecosystems and biodiversity
16. **Peace, Justice, Strong Institutions:** Inclusive societies
17. **Partnerships for the Goals:** Global cooperation

**Progress Check (2024):**
* Some progress on poverty, health, education
* Falling behind on climate, inequality, biodiversity
* COVID-19 set back progress by years
* Need to accelerate efforts dramatically

## Your Sphere of Influence: What You Can Actually Control

Global problems feel overwhelming. This framework helps you focus your energy:

### Circle 1: Direct Control (Your Daily Choices)
* Your consumption (what you buy, eat, use)
* Your carbon footprint (transportation, energy use)
* Your education (learning about issues)
* Your voice (social media, conversations)
* Your vote (local and national elections)
* Your donations (supporting causes)

### Circle 2: Influence (Your Network)
* Family and friends (educating, persuading)
* School/workplace (starting initiatives)
* Community (volunteering, organizing)
* Local government (attending meetings, petitions)

### Circle 3: Concern (Global Systems)
* International politics
* Corporate behavior
* Global agreements
* *You can't control these directly, but Circles 1 & 2 collectively create pressure*

**Strategy:** Focus 80% of energy on Circles 1 & 2. Don't feel guilty about Circle 3—you're one person, not Atlas holding up the world.

## Youth Activism: Young People Leading Change

**Greta Thunberg (Climate):**
* Started school strike at age 15
* Sparked global Fridays for Future movement
* Addressed UN, confronted world leaders

**Malala Yousafzai (Education):**
* Advocated for girls' education despite Taliban threats
* Youngest Nobel Prize winner (age 17)
* Malala Fund has helped 130+ million girls access education

**Emma González and March for Our Lives (Gun Violence):**
* Parkland shooting survivors organized national movement
* Registered hundreds of thousands of young voters

**Lesson:** You don't have to wait until you're an adult to make a difference.

## Key Takeaway
These problems seem huge because they are. But they're solved by millions of small actions compounding over time. "Think Globally, Act Locally." You can't solve climate change alone, but you can reduce your footprint, educate others, vote for climate action, and support green businesses. Multiply that by millions, and you have a movement.

---

## Practical Exercises

### Exercise 1: SDG Action Plan
Choose one Sustainable Development Goal that resonates with you. Research: (1) Current status (are we on track?), (2) Major barriers, (3) Organizations working on it, (4) What you can do (3 actions in your sphere of control). Create a 30-day personal action plan and track your progress.

### Exercise 2: Global Issue Deep Dive
Pick one global issue (climate, refugees, water, health, poverty, conflict). Spend 3 hours researching from multiple sources (news, academic, NGO reports, personal stories). Create a presentation covering: (1) Causes, (2) Current status, (3) Who's affected most, (4) Proposed solutions, (5) Controversies/debates, (6) How individuals can help. Present to class or family.

### Exercise 3: Sphere of Influence Mapping
Draw three concentric circles (Control, Influence, Concern). For a global issue you care about, list specific actions in each circle. Focus on Circle 1: Choose 3 actions you'll commit to this month. Track your progress and reflect on impact.

### Exercise 4: Youth Activist Research
Research a young activist (Greta Thunberg, Malala, Emma González, or find local youth activists). Document: (1) What issue they're addressing, (2) How they got started, (3) Their strategies and tactics, (4) Impact they've had, (5) Challenges they faced. Write a reflection: What inspires you? What could you apply to an issue you care about?

### Exercise 5: Sustainable Development Goals Audit
Evaluate your school or community against the 17 SDGs. For each goal, rate progress (1-10). Identify the 3 goals where you're doing worst. Propose concrete, actionable improvements for each. Present your findings to school administration or local government.

---

> "Think globally, act locally." - Rene Dubos

> "The world is a dangerous place, not because of those who do evil, but because of those who look on and do nothing." - Albert Einstein

> "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has." - Margaret Mead
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

If everyone lived like the average American, we'd need 5 Earths. Like the average European, 3 Earths. We're currently using resources as if we had 1.7 Earths. This is called "ecological overshoot"—we're spending Earth's savings account, and the bill is coming due.

**Sustainability** means meeting our needs without destroying the ability of future generations to meet theirs. It's not about going back to caves—it's about smart choices that let us thrive without wrecking the planet.

![Environmental protection](https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80)

## The Waste Hierarchy (In Order of Effectiveness)

Most people focus on recycling, but it's actually the *least* effective strategy. Here's the proper order:

### 1. Refuse (Best)
* **What:** Don't accept it in the first place
* **Examples:** Say no to plastic straws, free promotional junk, single-use items, excessive packaging
* **Impact:** Prevents waste from being created

### 2. Reduce (Better)
* **What:** Buy and use less
* **Examples:** Minimalism, buying only what you need, choosing quality over quantity
* **Impact:** Less production = less resource extraction, pollution, waste

### 3. Reuse (Good)
* **What:** Use items multiple times
* **Examples:** Refillable water bottles, cloth bags, repairing instead of replacing, thrift shopping, borrowing/sharing
* **Impact:** Extends product life, reduces demand for new products

### 4. Repurpose (Okay)
* **What:** Turn something into something else
* **Examples:** Glass jars as storage, old t-shirts as cleaning rags, pallets as furniture
* **Impact:** Creative reuse before disposal

### 5. Recycle (Last Resort)
* **What:** Process materials into new products
* **Reality Check:**
  - **Plastic:** Only 9% of all plastic ever made has been recycled. Most "recyclable" plastic ends up in landfills or oceans
  - **Glass & Aluminum:** Infinitely recyclable with minimal quality loss—these are worth recycling!
  - **Paper:** Can be recycled 5-7 times before fibers break down
* **Why it's last:** Recycling still uses energy, water, and creates pollution

**The Best Option:** Refuse and Reduce so you don't need to recycle.

## Understanding Your Carbon Footprint

**Definition:** The total greenhouse gases (CO2, methane, etc.) generated by your actions, measured in tons of CO2 equivalent per year.

**Average Carbon Footprints:**
* USA: 16 tons/person/year
* Europe: 7 tons/person/year
* Global average: 4 tons/person/year
* **Target to limit warming to 1.5°C:** 2 tons/person/year by 2050

### Major Contributors (% of typical footprint):

**1. Transportation (29%)**
* **Driving:** Gas cars emit ~4.6 tons CO2/year
* **Flying:** One round-trip flight NYC to London = 1.6 tons CO2 (almost a year's budget!)
* **Lower impact:** Walk, bike, public transit, carpool, electric vehicles

**2. Home Energy (28%)**
* **Heating/Cooling:** Biggest energy user in most homes
* **Electricity:** Depends on your grid (coal vs. renewable)
* **Lower impact:** Insulation, LED bulbs, energy-efficient appliances, solar panels, lower thermostat

**3. Food (18%)**
* **Beef:** 27kg CO2 per kg of beef (cows produce methane)
* **Lamb:** 39kg CO2 per kg
* **Chicken:** 6.9kg CO2 per kg
* **Plant-based:** 2kg CO2 per kg
* **Lower impact:** Eat less meat (especially beef/lamb), buy local/seasonal, reduce food waste

**4. Goods & Services (25%)**
* Everything you buy has an embedded carbon cost (manufacturing, shipping)
* **Lower impact:** Buy less, buy used, buy quality that lasts, repair instead of replace

### Carbon Footprint Calculator Exercise
Use an online calculator (EPA, Nature Conservancy, or Carbon Footprint) to calculate your footprint. Identify your top 3 contributors and commit to reducing them.

### Carbon Offsetting: Solution or Greenwashing?
* **Concept:** Pay to fund projects that reduce CO2 (planting trees, renewable energy)
* **Pros:** Can neutralize unavoidable emissions (like necessary flights)
* **Cons:** Can be an excuse to keep polluting; some projects are scams; trees take decades to absorb CO2
* **Verdict:** Offset as a last resort after you've reduced as much as possible

## The Circular Economy

Our current system is **linear:** Take resources → Make products → Throw away ("take-make-waste")

A **circular economy** is: Design products to be reused, repaired, and recycled → Nothing is waste

### Principles:
1. **Design out waste:** Products designed to be disassembled and recycled
2. **Keep products in use:** Repair, refurbish, share, rent instead of own
3. **Regenerate natural systems:** Return nutrients to soil, restore ecosystems

### Real Examples:
* **Patagonia:** Repairs your clothes for free, buys back used gear
* **Fairphone:** Modular phone you can repair yourself
* **Loop:** Reusable packaging for common products (shampoo, ice cream)
* **Library of Things:** Borrow tools, equipment instead of buying

## Fast Fashion: The Hidden Environmental Disaster

**The Problem:**
* Fashion industry produces 10% of global CO2 emissions (more than aviation + shipping combined)
* 2nd largest consumer of water (2,700 liters to make one cotton t-shirt)
* 85% of textiles end up in landfills
* Microplastics from synthetic fabrics pollute oceans
* Toxic dyes poison rivers in manufacturing countries

**The Business Model:**
* Cheap, trendy clothes designed to fall apart quickly
* New "collections" every few weeks
* Encourages constant buying

**The Human Cost:**
* Garment workers (mostly women) paid poverty wages
* Unsafe factories (remember 2013 Rana Plaza collapse: 1,134 dead)
* Child labor in cotton fields

### Slow Fashion Alternatives:
* **Buy less:** Average person buys 60% more clothes than 15 years ago, keeps them half as long
* **Buy quality:** One $100 item worn 100 times beats ten $10 items worn 10 times
* **Buy secondhand:** Thrift stores, consignment, online resale (ThredUp, Poshmark)
* **Rent:** For special occasions
* **Swap:** Clothing swaps with friends
* **Repair:** Learn basic sewing, use tailors
* **Support ethical brands:** Fair wages, sustainable materials (but verify—lots of greenwashing)

**The 30-Wear Test:** Before buying, ask "Will I wear this at least 30 times?" If not, don't buy it.

## E-Waste: The Fastest Growing Waste Stream

**The Scale:**
* 50 million tons of e-waste generated globally per year
* Only 20% is properly recycled
* Average smartphone replaced every 2 years (could last 5+)

**The Danger:**
* Contains toxic heavy metals: lead, mercury, cadmium, arsenic
* Thrown in landfills → leaches into groundwater → poisons drinking water
* Often shipped to developing countries where it's "recycled" unsafely (workers, including children, burn electronics to extract metals, inhaling toxic fumes)

**What's Inside Your Phone:**
* Gold, silver, copper (valuable metals)
* Rare earth elements (limited supply)
* Conflict minerals (mined in war zones, funding violence)

### Responsible E-Waste Actions:
1. **Use longer:** Repair instead of replace, update software, replace battery
2. **Donate:** Working electronics to schools, nonprofits
3. **Recycle properly:** Take to certified e-waste recyclers (Best Buy, Staples, local programs)
4. **Trade-in:** Many manufacturers offer credit for old devices
5. **Support Right to Repair:** Laws requiring companies to let you fix your own devices

## Greenwashing: Don't Be Fooled

**Definition:** Companies making false or exaggerated environmental claims to appear eco-friendly.

### Red Flags:
* Vague terms: "Eco-friendly," "natural," "green" (no legal definition)
* Irrelevant claims: "CFC-free" (CFCs have been banned for decades)
* Hidden trade-offs: "Organic" cotton t-shirt made in sweatshop
* No proof: Claims without certifications
* Misleading images: Green leaves on petroleum products

### Legitimate Certifications:
* **Energy Star:** Energy-efficient appliances
* **USDA Organic:** Food grown without synthetic pesticides
* **Fair Trade:** Fair wages and working conditions
* **FSC (Forest Stewardship Council):** Sustainably sourced wood/paper
* **B Corp:** Companies meeting social and environmental standards
* **Cradle to Cradle:** Products designed for circular economy

**How to Verify:** Look for third-party certifications, research the company's actual practices, check watchdog sites (Greenwashing Index).

## The 30-Day Sustainability Challenge

Pick one action from each week and commit to it:

**Week 1: Reduce Waste**
* Carry reusable bags, water bottle, coffee cup
* Say no to single-use plastics
* Start composting food scraps

**Week 2: Energy**
* Unplug devices when not in use ("vampire power")
* Switch to LED bulbs
* Lower thermostat 2°F in winter, raise 2°F in summer

**Week 3: Food**
* Try "Meatless Monday"
* Buy local/seasonal produce
* Reduce food waste (meal plan, use leftovers)

**Week 4: Transportation**
* Bike/walk for trips under 2 miles
* Carpool or use public transit
* Combine errands to reduce driving

## Key Takeaway
We don't need a handful of people doing zero-waste perfectly. We need millions of people doing it imperfectly. Don't let perfection be the enemy of progress. Every small action matters when multiplied by millions.

---

## Practical Exercises

### Exercise 1: Waste Audit
For one week, collect all your trash (don't throw anything away). At the end, sort it into categories: recyclable, compostable, truly trash. Calculate percentages. Identify your top 3 waste sources and create a plan to reduce each by 50%. Implement for one month and measure results.

### Exercise 2: Carbon Footprint Calculation and Reduction Plan
Use an online carbon calculator to measure your footprint. Break it down by category (transport, home, food, goods). Identify your biggest contributors. Research and implement 5 specific actions to reduce your footprint by 20%. Track for 3 months and recalculate.

### Exercise 3: Fast Fashion Inventory
Count how many clothing items you own. How many have you worn in the past month? Past year? Calculate cost-per-wear for 10 items. Commit to a 30-day no-buy challenge. Instead, organize a clothing swap with friends or try 10 new outfit combinations from existing clothes.

### Exercise 4: Greenwashing Investigation
Find 5 products claiming to be "eco-friendly" or "sustainable." Research each: (1) What specific claims are made? (2) Is there third-party certification? (3) What's the company's actual environmental record? (4) Are there hidden trade-offs? Rate each as genuine or greenwashing. Present findings.

### Exercise 5: Circular Economy Business Pitch
Identify a product category with major waste (packaging, electronics, furniture, etc.). Design a circular economy business model for it: (1) How is the product designed for longevity and disassembly? (2) How do customers return it? (3) How is it refurbished/recycled? (4) What's the business model (rent vs. own)? Create a 5-minute pitch presentation.

---

> "We don't need a handful of people doing zero waste perfectly. We need millions of people doing it imperfectly." - Anne Marie Bonneau

> "The greatest threat to our planet is the belief that someone else will save it." - Robert Swan

> "We do not inherit the Earth from our ancestors; we borrow it from our children." - Native American Proverb
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

---

## Practical Exercises

### Exercise 1: Supply Chain Trace
Pick one item you own (phone, shirt, food item). Research its supply chain: Where were the raw materials sourced? Where was it manufactured? How did it reach you? Create a world map marking each location. This demonstrates how interconnected our daily lives are with global systems.

### Exercise 2: News Ripple Effect Analysis
When a major world event happens (economic, political, natural disaster), track its ripple effects for one week. How does an event in one country affect: stock markets globally, oil prices, supply chains, migration, or your local community? Document at least 5 connected impacts.

### Exercise 3: Cultural Homogenization Debate
Research \`glocalization\` - how global brands adapt to local cultures. Find 3 examples (like menu items at global restaurants in different countries). Then debate: Is globalization erasing unique cultures, or is it creating new hybrid cultures? Write a balanced 300-word reflection.

---

> \`No man is an island, entire of itself.\` - John Donne

> \`The world is getting smaller every day.\` - Bill Gates
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

---

## Practical Exercises

### Exercise 1: Passion to Service Mapping
Create a three-column chart: (1) Issues that break your heart (hunger, animals, education), (2) Skills you have, (3) Time you can commit. Find the intersection and research 3 local organizations that match. Reach out to one this week.

### Exercise 2: Charity vs. Mutual Aid Analysis
Research one traditional charity and one mutual aid organization in your area. Compare: Who makes decisions? Where does money go? How are recipients involved? Write a reflection on the differences and which approach you find more empowering.

### Exercise 3: Impact Assessment
Before your next volunteer activity, ask the organization: \`What does this community actually need? How can I help without taking away local jobs or imposing my ideas?\` Document their answer. After volunteering, reflect: Did my help actually help? What could be done better?

---

> \`The best way to find yourself is to lose yourself in the service of others.\` - Mahatma Gandhi

> \`No one has ever become poor by giving.\` - Anne Frank
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

---

## Practical Exercises

### Exercise 1: Emergency Call Practice
Role-play a 911 call with a family member. Practice: (1) Stating your location clearly, (2) Describing the emergency calmly, (3) Answering dispatcher questions. Time yourself - can you communicate essential information in under 30 seconds?

### Exercise 2: Go Bag Assembly
Assemble an emergency go-bag for your family. Include: water, non-perishable food, flashlight, batteries, first aid kit, cash, ID copies, phone charger. Check expiration dates. Store it somewhere accessible. Review contents every 6 months.

### Exercise 3: Family Emergency Plan
Create a comprehensive family emergency plan covering: (1) Meeting points if separated, (2) Out-of-area contact person, (3) Evacuation routes from home, (4) Location of emergency supplies, (5) Special needs (medications, pets). Post it visibly and practice it annually.

---

> \`In the middle of difficulty lies opportunity.\` - Albert Einstein

> \`Preparedness is the key to success and victory.\` - Douglas MacArthur
    `
  }
];