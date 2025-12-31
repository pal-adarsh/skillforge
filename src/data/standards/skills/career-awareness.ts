import { Standard } from "../types";

export const careerAwarenessCategory: Standard = {
  id: "career-awareness",
  name: "Career Awareness",
  displayName: "Career Awareness & Skill Discovery",
  description: "Explore career paths and discover your strengths",
  color: "bg-violet-500",
  subjects: [
    {
      id: "ca-self-discovery",
      name: "Self-Discovery",
      icon: "Compass",
      color: "text-violet-500",
      lessonIds: ["ca-strengths-weaknesses", "ca-interests-passions", "ca-personality-types", "ca-learning-styles"]
    },
    {
      id: "ca-career-exploration",
      name: "Career Exploration",
      icon: "Briefcase",
      color: "text-blue-500",
      lessonIds: ["ca-career-categories", "ca-traditional-careers", "ca-modern-careers", "ca-entrepreneurship"]
    },
    {
      id: "ca-skills-development",
      name: "Skills Development",
      icon: "TrendingUp",
      color: "text-green-500",
      lessonIds: ["ca-hard-vs-soft-skills", "ca-skill-building", "ca-goal-setting", "ca-action-planning"]
    },
    {
      id: "ca-workplace",
      name: "Workplace Readiness",
      icon: "Building",
      color: "text-orange-500",
      lessonIds: ["ca-teamwork", "ca-professional-behavior", "ca-work-ethic", "ca-networking-basics"]
    }
  ]
};

export const careerAwarenessLessons = [
  // ==================================================================================
  // SELF-DISCOVERY
  // ==================================================================================
  { 
    id: "ca-strengths-weaknesses", 
    title: "Discovering Your Strengths", 
    description: "Identify what you're naturally good at", 
    category: "Career Awareness", 
    difficulty: "Beginner" as const, 
    duration: "25 min", 
    points: 140, 
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800",
    tags: ["strengths", "swot", "self-analysis"],
    content: `
# Discovering Your Strengths

## The Foundation of Career Success
Your career should be built on your strengths, not just your interests. Interests change; strengths are often innate and enduring.

![Person standing on mountain top](https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&q=80)

## The SWOT Analysis
A classic business tool applied to YOU.

### 1. Strengths (Internal)
What are you good at naturally?
* **Ask:** What do I do effortlessly that others struggle with?
* **Examples:** Writing, Math, Empathy, Organization, Public Speaking.

### 2. Weaknesses (Internal)
What are your limitations?
* **Ask:** What tasks do I procrastinate on because they are hard?
* **Examples:** Impatience, Bad with details, Fear of confrontation.
* *Note:* You don't need to "fix" every weakness. Sometimes it's better to manage them or delegate them.

### 3. Opportunities (External)
What is happening in the world that you can use?
* **Examples:** Growth of AI, Remote work trends, New scholarship programs.

### 4. Threats (External)
What obstacles are in your way?
* **Examples:** Competitive job market, Automation replacing jobs, Lack of funds.

## The "Flow" Test
Think back to the last time you lost track of time while working.
* Were you coding? Drawing? Debating? Helping a friend?
* **Flow state** is the strongest indicator of a natural strength.

## Talent vs. Skill
* **Talent:** Natural aptitude (e.g., Good ear for music).
* **Skill:** Proficiency gained through practice (e.g., Knowing how to play chords).
* **Strength = Talent x Investment (Practice).**

## Key Takeaway
Don't try to be good at everything. Be great at what you are naturally designed to do, and manage the rest.

> "Everyone is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid." - Albert Einstein
    `
  },
  { 
    id: "ca-interests-passions", 
    title: "Finding Your Passions", 
    description: "Explore what truly excites and motivates you", 
    category: "Career Awareness", 
    difficulty: "Beginner" as const, 
    duration: "25 min", 
    points: 140, 
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800",
    tags: ["passion", "ikigai", "motivation"],
    content: `
# Finding Your Passions

## The Passion Trap
"Follow your passion" is common advice, but it can be dangerous if your passion is just a hobby (like playing video games).
* **Hobby:** Something you do for fun to relax.
* **Career Passion:** A problem you enjoy solving that people will pay you for.

![Compass on map](https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80)

## Ikigai (The Japanese Concept)
Ikigai means "A reason for being." It is the intersection of four circles:
1.  **What you Love** (Passion).
2.  **What the World Needs** (Mission).
3.  **What you can be Paid For** (Profession).
4.  **What you are Good At** (Vocation).
* *Goal:* Find a career that hits the center.

## Curiosity > Passion
Passion is rare. Curiosity is common.
* Don't wait for a "lightning bolt" of passion.
* Instead, follow your curiosity.
    * "How does this engine work?"
    * "Why do people buy this product?"
* Curiosity leads to learning \u2192 Learning leads to mastery \u2192 Mastery leads to passion.

## The "Saturday Morning" Test
What do you do on a Saturday morning when you have nothing to do?
* Do you read about history?
* Do you organize your room?
* Do you code?
* Do you write stories?
* This unforced behavior reveals your deepest interests.

## Passion is Grown, Not Found
Research shows that people often become passionate about a job *after* they get good at it.
* Competence creates passion.

## Key Takeaway
Don't stress if you don't have a "Burning Passion" yet. Just find something interesting and get good at it. Passion often follows mastery.
    `
  },
  { 
    id: "ca-personality-types", 
    title: "Understanding Personality Types", 
    description: "Learn how personality affects career choices", 
    category: "Career Awareness", 
    difficulty: "Intermediate" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800",
    tags: ["personality", "mbti", "holland-codes"],
    content: `
# Understanding Personality Types

## Why It Matters
A quiet, introverted person might be miserable in a loud, chaotic Sales job. A high-energy extrovert might hate being a Librarian. Matching personality to career prevents burnout.

![Group of diverse people](https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800&q=80)

## Holland Codes (RIASEC)
A scientifically valid framework for career choice.
1.  **Realistic (Doers):** Like working with hands, tools, animals. (Mechanic, Chef, Pilot).
2.  **Investigative (Thinkers):** Like solving problems, science, math. (Doctor, Scientist, Analyst).
3.  **Artistic (Creators):** Like self-expression, no rules. (Writer, Designer, Actor).
4.  **Social (Helpers):** Like teaching, healing, helping. (Teacher, Nurse, Counselor).
5.  **Enterprising (Persuaders):** Like leading, selling, business. (Manager, Lawyer, Entrepreneur).
6.  **Conventional (Organizers):** Like data, rules, structure. (Accountant, Admin, Clerk).
* *Task:* Pick your top 2 codes. Look for careers that match.

## Introvert vs. Extrovert
* **Introvert:** Gains energy from solitude. Prefers deep focus, small groups.
    * *Careers:* Coding, Writing, Accounting, Research.
* **Extrovert:** Gains energy from social interaction. Prefers variety, talking.
    * *Careers:* Sales, PR, Event Planning, Teaching.

## Big Five Personality Traits (OCEAN)
1.  **Openness:** Creative vs. Practical.
2.  **Conscientiousness:** Organized vs. Spontaneous. (High conscientiousness predicts career success).
3.  **Extraversion:** Outgoing vs. Reserved.
4.  **Agreeableness:** Cooperative vs. Competitive.
5.  **Neuroticism:** Anxious vs. Stable.

## Key Takeaway
There is no "wrong" personality. There are only wrong fits. Know yourself so you can choose an environment where you thrive.
    `
  },
  { 
    id: "ca-learning-styles", 
    title: "Your Learning Style", 
    description: "Discover how you learn best", 
    category: "Career Awareness", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
    tags: ["learning", "education", "growth"],
    content: `
# Your Learning Style

## How Do You Download Information?
Everyone's brain processes data differently. Knowing your style helps you study faster and master new job skills efficiently.

![Student studying](https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80)

## The VARK Model

### 1. Visual (See It)
* You prefer diagrams, charts, maps, and videos.
* *Study Tip:* Use highlighters, draw mind maps, watch YouTube tutorials.

### 2. Aural (Hear It)
* You prefer lectures, podcasts, and discussion.
* *Study Tip:* Record lectures, explain concepts out loud to yourself, study in groups.

### 3. Read/Write (Read It)
* You prefer lists, textbooks, and taking notes.
* *Study Tip:* Rewrite your notes, create bulleted lists, read the manual.

### 4. Kinesthetic (Do It)
* You prefer hands-on experience, trial and error.
* *Study Tip:* Build a model, do practice problems, walk around while studying.

## Multimodal
Most people are a mix (e.g., Visual + Kinesthetic).
* Don't box yourself in. Use whatever works for the specific task.
    * Learning Tennis? Kinesthetic.
    * Learning History? Read/Write.

## The 70-20-10 Model of Career Learning
How we learn at work:
* **70% Experience:** Learning by doing the job (Challenges, mistakes).
* **20% Exposure:** Learning from others (Mentors, feedback, watching bosses).
* **10% Education:** Formal training (Courses, books, workshops).
* *Lesson:* Don't stay in the classroom forever. Go do the work.

## Key Takeaway
If you are struggling to learn something, you aren't stupid. You might just be using the wrong method for your brain.
    `
  },

  // ==================================================================================
  // CAREER EXPLORATION
  // ==================================================================================
  { 
    id: "ca-career-categories", 
    title: "World of Careers", 
    description: "Overview of different career fields and industries", 
    category: "Career Awareness", 
    difficulty: "Beginner" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
    tags: ["industries", "sectors", "overview"],
    content: `
# World of Careers

## The Career Landscape
The economy is divided into huge sectors. Understanding these helps you see where you might fit.

![City skyline](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80)

## Major Career Clusters

### 1. STEM (Science, Tech, Engineering, Math)
* **Focus:** Innovation, logic, building.
* **Jobs:** Software Developer, Civil Engineer, Data Scientist, Biologist.

### 2. Healthcare
* **Focus:** Helping, healing, biology.
* **Jobs:** Nurse, Doctor, Physical Therapist, Medical Researcher.

### 3. Business & Finance
* **Focus:** Money, management, strategy.
* **Jobs:** Accountant, Marketing Manager, CEO, Real Estate Agent.

### 4. Arts & Communications
* **Focus:** Creativity, expression, media.
* **Jobs:** Graphic Designer, Journalist, Musician, Filmmaker.

### 5. Trades & Vocational
* **Focus:** Hands-on, building, fixing.
* **Jobs:** Electrician, Plumber, Welder, Chef, Pilot.

### 6. Public Service & Law
* **Focus:** Justice, community, safety.
* **Jobs:** Lawyer, Police Officer, Teacher, Social Worker, Politician.

## Sector Growth
When choosing, look at the future.
* **Growing:** Tech, Healthcare, Renewable Energy.
* **Declining:** Traditional Manufacturing, Print Media, Coal Mining.

## Public vs. Private vs. Non-Profit
* **Private Sector:** For-profit companies (Apple, Coke). Higher pay, higher pressure.
* **Public Sector:** Government (Schools, DMV). Stability, pension, lower pay.
* **Non-Profit:** Charities (Red Cross). Purpose-driven, lower pay.

## Key Takeaway
Don't just think about "Job Titles." Think about "Industries." If you love cars, you can be a Mechanic (Trades), a Car Designer (Arts), a Tesla Engineer (STEM), or a Car Salesman (Business).
    `
  },
  { 
    id: "ca-traditional-careers", 
    title: "Traditional Career Paths", 
    description: "Explore established professions and their requirements", 
    category: "Career Awareness", 
    difficulty: "Beginner" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    tags: ["professions", "degrees", "stability"],
    content: `
# Traditional Career Paths

## The "Tried and True"
These are professions that have existed for decades (or centuries). They usually have a clear, linear path: Degree \u2192 License \u2192 Job \u2192 Promotion.

![Doctor with stethoscope](https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80)

## Medicine (Doctor/Nurse)
* **Path:** Pre-Med Degree (4 yrs) \u2192 Med School (4 yrs) \u2192 Residency (3-7 yrs).
* **Pros:** High status, high pay, helping people.
* **Cons:** Massive student debt, high stress, long years of study.

## Law (Lawyer)
* **Path:** Bachelor's Degree \u2192 Law School (3 yrs) \u2192 Bar Exam.
* **Pros:** Intellectual challenge, high earning potential, power.
* **Cons:** Long hours, high stress, competitive.

## Engineering (Civil/Mechanical)
* **Path:** Bachelor's in Engineering (4 yrs) \u2192 PE License (Optional).
* **Pros:** Good starting salary, tangible results (building bridges/machines).
* **Cons:** Difficult math/physics requirements.

## Teaching (K-12)
* **Path:** Bachelor's + Teaching Certificate.
* **Pros:** Impact on youth, summer holidays, pension.
* **Cons:** Lower pay, emotional burnout, grading papers.

## Accounting (CPA)
* **Path:** Accounting Degree \u2192 CPA Exam.
* **Pros:** Very stable, clear career ladder, every business needs one.
* **Cons:** Can be repetitive, busy tax seasons.

## The "Ladder" Concept
Traditional careers act like a ladder. You start at the bottom (Junior Associate) and climb up rung by rung (Senior \u2192 Partner). The path is predictable.

## Key Takeaway
Traditional careers offer stability and prestige, but they require significant upfront investment in education. Make sure you want the lifestyle, not just the title.
    `
  },
  { 
    id: "ca-modern-careers", 
    title: "Emerging & Modern Careers", 
    description: "Discover new career opportunities in the digital age", 
    category: "Career Awareness", 
    difficulty: "Intermediate" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800",
    tags: ["tech", "remote-work", "future"],
    content: `
# Emerging & Modern Careers

## The Job Market is Changing
65% of children entering primary school today will end up working in job types that don't yet exist.

![Person working on laptop with VR headset](https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80)

## The Tech Explosion
* **Data Scientist:** Analyzing massive data sets to predict trends. (Need: Math + Coding).
* **UX/UI Designer:** Designing how apps look and feel. (Need: Psychology + Art).
* **Cybersecurity Analyst:** Protecting companies from hackers. (Need: Logic + Tech).

## The Creator Economy
* **Content Creator:** YouTubers, Podcasters, Streamers.
    * *Reality:* It looks like fun, but it is a business. You are a Writer, Editor, Marketer, and Actor all in one.
* **Social Media Manager:** Running corporate accounts.

## Green Energy
* **Solar/Wind Technician:** Installing renewable energy.
* **Sustainability Consultant:** Helping companies reduce carbon footprints.

## The Gig Economy
* **Freelancer:** Working for multiple clients instead of one boss.
* **Pros:** Freedom, work from anywhere.
* **Cons:** Unstable income, no insurance, must pay own taxes.

## The "Jungle Gym" Concept
Modern careers are not ladders; they are jungle gyms. You might move sideways, down, or jump to a completely different structure.
* *Example:* Marketing Manager \u2192 Learn Coding \u2192 Tech Product Manager \u2192 Start own Company.

## Skill Stacking
In modern careers, being the "best" is hard. But being "good" at two distinct things makes you rare.
* *Example:* An okay Lawyer is common. An okay Lawyer who also knows Blockchain? They are a highly paid Crypto-Legal Expert.

## Key Takeaway
The safest path is no longer a specific job title; it is adaptability. Learn how to learn.
    `
  },
  { 
    id: "ca-entrepreneurship", 
    title: "Introduction to Entrepreneurship", 
    description: "Learn about starting your own business", 
    category: "Career Awareness", 
    difficulty: "Intermediate" as const, 
    duration: "30 min", 
    points: 180, 
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    tags: ["business", "startup", "innovation"],
    content: `
# Introduction to Entrepreneurship

## What is an Entrepreneur?
Someone who creates a new business, bearing most of the risks and enjoying most of the rewards. It is about **Problem Solving** for profit.

![Lightbulb and planning](https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80)

## Types of Entrepreneurship
1.  **Small Business:** Local cafe, plumber, hair salon. Goal: Make a living, support family.
2.  **Scalable Startup:** Tech app, software. Goal: Grow huge, sell to investors (Unicorn).
3.  **Social Entrepreneurship:** Non-profit or for-profit with a mission (e.g., TOMS Shoes). Goal: Social impact.
4.  **Intrapreneurship:** Acting like an entrepreneur *inside* a big company (leading a new innovation team).

## The Entrepreneurial Mindset
* **Risk Tolerance:** Comfortable with the possibility of failing.
* **Resilience:** Hearing "No" 100 times and keeping going.
* **Autonomy:** Hating being told what to do.

## The Lean Startup Method
Don't spend 2 years building a perfect product in secret.
1.  **Build:** Create a "Minimum Viable Product" (MVP). The simplest version.
2.  **Measure:** Give it to customers. Do they like it? Do they pay?
3.  **Learn:** If they hate it, pivot. If they like it, improve it.

## The Myth of the "Great Idea"
Ideas are cheap. Execution is everything.
* Facebook wasn't the first social network (MySpace).
* Google wasn't the first search engine (Yahoo).
* They just executed better.

## Key Takeaway
Entrepreneurship is not a job; it is a lifestyle. It offers the highest highs and the lowest lows.

> "Entrepreneurs are the only people who work 80 hours a week to avoid working 40 hours a week." - Lori Greiner
    `
  },

  // ==================================================================================
  // SKILLS DEVELOPMENT
  // ==================================================================================
  { 
    id: "ca-hard-vs-soft-skills", 
    title: "Hard Skills vs Soft Skills", 
    description: "Understand different types of professional skills", 
    category: "Career Awareness", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    tags: ["skills", "training", "employability"],
    content: `
# Hard Skills vs Soft Skills

## The Two Halves of Success
To get hired, you need Hard Skills. To get promoted (and not fired), you need Soft Skills.

![Tools on table](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80)

## Hard Skills (Teachable Abilities)
Specific technical knowledge that is easy to measure.
* **Examples:** Coding (Python), Speaking Spanish, Typing speed, Operating a Forklift, Accounting.
* **How to learn:** Books, classes, tutorials.
* **Evidence:** Degrees, certificates, portfolio.

## Soft Skills (Interpersonal/People Skills)
Attributes that enable you to interact effectively with others.
* **Examples:** Communication, Teamwork, Adaptability, Problem-solving, Time Management.
* **How to learn:** Experience, self-reflection, feedback.
* **Evidence:** Hard to prove on a resume. Demonstrated in the interview and on the job.

## The "T-Shaped" Person
Employers love T-shaped people.
* **Horizontal Bar (Soft Skills):** Broad ability to collaborate across different teams (Marketing, Tech, Sales).
* **Vertical Bar (Hard Skills):** Deep expertise in ONE specific area.

## The Shift in Importance
* **Junior Roles:** Hired mostly for Hard Skills (Can you do the task?).
* **Senior/Management Roles:** Hired mostly for Soft Skills (Can you lead people?).

## Transferable Skills
Soft skills are "Transferable."
* If you leave Nursing to become a Teacher, your medical knowledge (Hard Skill) is lost, but your ability to handle stress and communicate with difficult people (Soft Skills) travels with you.

## Key Takeaway
Don't neglect soft skills. A brilliant coder who is rude to everyone will eventually be fired. A decent coder who is a great team player will become a manager.
    `
  },
  { 
    id: "ca-skill-building", 
    title: "Building Marketable Skills", 
    description: "Develop skills that employers value", 
    category: "Career Awareness", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
    tags: ["upskilling", "learning", "growth"],
    content: `
# Building Marketable Skills

## The Skills Gap
There is often a gap between what schools teach and what companies need. You must close that gap yourself.

![Worksheet and laptop](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80)

## High-Income Skills
These are skills that bring high value to a business and are hard to replace.
1.  **Digital Literacy:** Coding, Data Analysis, AI prompting.
2.  **Sales/Persuasion:** Copywriting, Public Speaking, Negotiation.
3.  **Project Management:** Organizing people and resources.

## How to Build Skills Cheaply
You don't need a $50k degree.
* **MOOCs:** Coursera, edX, Udemy. (Take courses from Harvard/Google for free/cheap).
* **YouTube University:** You can learn almost anything (Excel, Editing, Repair) on YouTube.
* **Volunteering:** Offer to run social media for a local charity. You get experience; they get help.

## The 10,000 Hour Rule (Caveat)
Malcolm Gladwell said it takes 10,000 hours to master a skill.
* **Correction:** It takes 20 hours to get *decent* at a skill.
* You don't need to be a Master. You just need to be competent enough to be useful.

## Building a Portfolio
"Show, Don't Tell."
* Instead of putting "Good at Graphic Design" on a resume...
* Build a website showing 5 logos you designed.
* **Proof beats Promise.**

## Continuous Learning (Kaizen)
The skill you learned 5 years ago might be obsolete today.
* Commit to being a lifelong learner.
* Read industry news 15 mins a day.

## Key Takeaway
Treat your skills like an investment portfolio. Diversify them and keep adding to them.
    `
  },
  { 
    id: "ca-goal-setting", 
    title: "Setting Career Goals", 
    description: "Create meaningful short and long-term career goals", 
    category: "Career Awareness", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
    tags: ["goals", "smart-goals", "planning"],
    content: `
# Setting Career Goals

## Vision vs. Goals
* **Vision:** The destination. "I want to be a wealthy architect."
* **Goal:** The mile markers. "I will finish my degree by 2026."

![Target with arrow](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80)

## SMART Goals
Don't say "I want a better job." Be SMART:
* **S - Specific:** "I want to be a Junior Python Developer."
* **M - Measurable:** "Earning at least $60k."
* **A - Achievable:** "I have the aptitude for code."
* **R - Relevant:** "This fits my interest in tech."
* **T - Time-Bound:** "By December 31st."

## Short, Medium, Long
1.  **Short-Term (0-1 Year):** Learn Skill X, update resume, get internship.
2.  **Medium-Term (1-5 Years):** Get promoted, pay off student loans.
3.  **Long-Term (10+ Years):** Start a firm, reach financial independence.

## The "Odd" Strategy
Look at the person who has the job you want in 10 years.
* Look at their LinkedIn.
* What did they do 8 years ago? 5 years ago?
* Reverse engineer their path.

## Flexibility
"Strong opinions, loosely held."
* Have a plan, but be ready to change it.
* You might discover a job next year that doesn't exist today.

## Key Takeaway
A goal without a plan is just a wish. Write it down. People who write down goals are 42% more likely to achieve them.
    `
  },
  { 
    id: "ca-action-planning", 
    title: "Creating an Action Plan", 
    description: "Map out steps to achieve your career goals", 
    category: "Career Awareness", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800",
    tags: ["action", "roadmap", "execution"],
    content: `
# Creating an Action Plan

## Turning Dreams into Deadlines
You have a SMART goal. Now you need a roadmap.

![Checklist on clipboard](https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800&q=80)

## Backward Design
Start at the Finish Line.
* **Goal:** Get hired as a Graphic Designer (Dec 1st).
* **Step -1:** Interviews (Nov).
* **Step -2:** Apply to 20 jobs (Oct).
* **Step -3:** Finish Portfolio (Sept).
* **Step -4:** Learn Photoshop (Aug).
* *Now you know what to do today.*

## The Weekly Review
Every Sunday, ask:
1.  What did I do for my career this week?
2.  What is the ONE thing I must do next week?

## Identifying Resources
Who/What can help?
* **People:** Mentors, Teachers, Parents.
* **Money:** Savings for courses.
* **Time:** Where can I find 5 hours a week? (Cut Netflix).

## Dealing with Obstacles (If-Then Planning)
Plan for failure.
* "If I get rejected from this internship, Then I will apply to these 3 backup companies."
* "If I am too tired to study at night, Then I will wake up 30 mins early."

## The "Bias for Action"
Don't get stuck in "Analysis Paralysis" (Planning forever).
* Taking an imperfect step is better than standing still perfectly.
* Send the email. Submit the application. Ask for the coffee chat.

## Key Takeaway
The difference between a dreamer and a doer is a date on the calendar.
    `
  },

  // ==================================================================================
  // WORKPLACE READINESS
  // ==================================================================================
  { 
    id: "ca-teamwork", 
    title: "Working in Teams", 
    description: "Collaborate effectively with others", 
    category: "Career Awareness", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    tags: ["collaboration", "teamwork", "communication"],
    content: `
# Working in Teams

## No One Succeeds Alone
Even "solo" geniuses like Steve Jobs had massive teams. Your ability to play nice with others determines how far you go.

![Team putting hands together](https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80)

## The Stages of Team Growth (Tuckman)
1.  **Forming:** Polite, getting to know each other.
2.  **Storming:** Conflict arises, personalities clash. (This is normal!).
3.  **Norming:** Resolving fights, establishing rules.
4.  **Performing:** High efficiency, trusting each other.

## Roles in a Team (Belbin)
You don't always have to be the Leader.
* **The Shaper:** Drives the team forward, energetic.
* **The Implementer:** Turns ideas into practical actions.
* **The Completer:** Checks details, finds errors.
* **The Peacemaker:** Resolves emotional conflict.
* *Know your natural role.*

## Handling Conflict
* Don't make it personal ("You're lazy").
* Make it about the work ("We missed the deadline").
* Listen to understand, not just to reply.

## Psychological Safety
Google found that the #1 trait of successful teams is Psychological Safety.
* Members feel safe to take risks and be wrong without being shamed.
* **Action:** Encourage quiet members to speak. Admit your own mistakes.

## Key Takeaway
If you want to go fast, go alone. If you want to go far, go together.
    `
  },
  { 
    id: "ca-professional-behavior", 
    title: "Professional Behavior", 
    description: "Conduct yourself appropriately in professional settings", 
    category: "Career Awareness", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120, 
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
    tags: ["professionalism", "etiquette", "attitude"],
    content: `
# Professional Behavior

## It's Not Just About the Suit
Professionalism isn't just dressing up. It's a set of behaviors that signal you can be trusted.

![Man adjusting tie](https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80)

## The Basics (That Many Miss)
1.  **Punctuality:** Early is on time. On time is late. Late is unacceptable.
2.  **Reliability:** Do what you say you will do. If you can't, communicate *before* the deadline.
3.  **Communication:** Professional emails (Subject lines, grammar). No slang in meetings.

## Emotional Intelligence at Work
* Leave drama at home.
* Don't gossip. If you gossip *with* someone, they know you will gossip *about* them.
* Stay calm under pressure.

## Dress Code
* **Formal:** Suit and tie. (Law, Banking).
* **Business Casual:** Shirt, slacks, nice shoes. (Most offices).
* **Casual:** Jeans/T-shirt. (Tech startups).
* *Rule:* Dress for the job you want, not the job you have. When in doubt, dress slightly better than everyone else.

## Digital Professionalism
* Your Slack/Teams messages are permanent. Don't complain about the boss in writing.
* Turn your camera ON during Zoom calls if possible. It shows engagement.

## Key Takeaway
Professionalism is a brand. It tells people: "I take this seriously, and you can rely on me."
    `
  },
  { 
    id: "ca-work-ethic", 
    title: "Developing Work Ethic", 
    description: "Build habits of responsibility and dedication", 
    category: "Career Awareness", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    tags: ["discipline", "integrity", "hard-work"],
    content: `
# Developing Work Ethic

## The Engine of Success
Talent gets you in the door. Work ethic keeps you there.

![Construction worker](https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80)

## Elements of Strong Work Ethic
1.  **Discipline:** Working when you don't feel like it.
2.  **Quality:** Doing it right the first time. Not cutting corners.
3.  **Initiative:** Doing things without being told. (e.g., Seeing the trash is full and taking it out, even if it's "not your job").

## Deep Work vs. Busyness
* **Busyness:** Looking busy. Answering emails instantly. Shuffling papers.
* **Deep Work:** Creating value. Solving hard problems.
* Strong work ethic means focusing on *results*, not just hours.

## The "Under-Promise, Over-Deliver" Rule
* If you think a task will take 3 days, tell your boss 4 days.
* Deliver it in 3. You look like a hero.
* If you tell them 2 days and deliver in 3, you look incompetent.

## Rest is Part of Work Ethic
Burnout is not a badge of honor.
* You cannot have a strong work ethic if you are asleep at your desk.
* Take breaks. Sleep. Recharge so you can attack the work again.

## Key Takeaway
How you do anything is how you do everything. If you sweep the floor, sweep it perfectly.
    `
  },
  { 
    id: "ca-networking-basics", 
    title: "Networking Basics", 
    description: "Learn to build professional connections", 
    category: "Career Awareness", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150, 
    image: "https://images.unsplash.com/photo-1515169067750-d51a73b05121?w=800",
    tags: ["networking", "connections", "mentorship"],
    content: `
# Networking Basics

## It's Not "Using" People
Networking gets a bad reputation. Don't think of it as "What can I get?" Think of it as "How can I help?" or "Making friends."
* 70-80% of jobs are not published online. They are filled through networking.

![Networking event](https://images.unsplash.com/photo-1515169067750-d51a73b05121?w=800&q=80)

## The Elevator Pitch
Can you explain who you are in 30 seconds?
* **Formula:** "I am a [Current Role]. I help [Target Audience] do [Solution]. I am looking to [Goal]."
* *Example:* "I'm a computer science student. I build websites for small non-profits to help them raise money. I'm looking for a summer internship in web development."

## Informational Interviews
The best way to network.
* Ask a professional: "Can I buy you a coffee for 15 mins to ask about your career?"
* **Do NOT ask for a job.** Ask for advice.
* "How did you get started?" "What do you wish you knew?"
* Often, they will offer to help you find a job later.

## LinkedIn
* It is your 24/7 resume.
* Connect with everyone you meet professionally.
* Send a personalized note: "Hi, I enjoyed meeting you at the event..."

## Maintenance
Networking is like gardening. You have to water the plants.
* Check in with old contacts every 6 months. "Saw this article and thought of you."

## Key Takeaway
Your network is your net worth. Dig the well before you are thirsty.
    `
  }
];