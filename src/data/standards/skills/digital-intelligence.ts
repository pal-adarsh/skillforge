import { Standard } from "../types";

export const digitalIntelligenceCategory: Standard = {
  id: "digital-intelligence",
  name: "Digital Intelligence",
  displayName: "Digital Intelligence & Online Safety",
  description: "Navigate the digital world safely and responsibly",
  color: "bg-cyan-500",
  subjects: [
    {
      id: "di-online-safety",
      name: "Online Safety",
      icon: "Shield",
      color: "text-cyan-500",
      lessonIds: ["di-password-security", "di-recognizing-scams", "di-privacy-settings", "di-safe-browsing"]
    },
    {
      id: "di-digital-citizenship",
      name: "Digital Citizenship",
      icon: "Globe",
      color: "text-blue-500",
      lessonIds: ["di-online-etiquette", "di-digital-footprint", "di-cyberbullying", "di-responsible-sharing"]
    },
    {
      id: "di-media-literacy",
      name: "Media Literacy",
      icon: "Eye",
      color: "text-purple-500",
      lessonIds: ["di-fake-news", "di-source-verification", "di-critical-media", "di-advertising-awareness"]
    },
    {
      id: "di-tech-basics",
      name: "Technology Basics",
      icon: "Laptop",
      color: "text-green-500",
      lessonIds: ["di-device-basics", "di-internet-works", "di-app-safety", "di-screen-time"]
    }
  ]
};

export const digitalIntelligenceLessons = [
  // ==================================================================================
  // ONLINE SAFETY
  // ==================================================================================
  { 
    id: "di-password-security", 
    title: "Creating Strong Passwords", 
    description: "Learn to create and manage secure passwords", 
    category: "Digital Intelligence", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120,
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800",
    tags: ["security", "passwords", "cybersecurity"],
    content: `
# Creating Strong Passwords

## The Keys to Your Kingdom

Your password is the only thing standing between a criminal and your bank account, email, and identity. Most people underestimate how easily weak passwords can be cracked.

![Padlock on keyboard](https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80)

## How Hackers Crack Passwords
Hackers don't guess your password by typing in "12345" manually. They use:
* **Brute Force:** Computers trying billions of combinations per second.
* **Dictionary Attacks:** Software that tries every word in the dictionary.
* **Credential Stuffing:** Using a password leaked from one site to unlock your accounts on other sites.

## The Rules of Strength

### 1. Length > Complexity
A short password with weird symbols (\`P@ss!\`) is easier to crack than a long password made of random words.
* **Weak:** \`Tr0ub4dor&3\` (Looks complex, but computers guess it easily).
* **Strong:** \`correct-horse-battery-staple\` (Hard for computers, easy for humans).

### 2. The Sentence Method
Think of a memorable sentence and use the first letter of each word.
* *Sentence:* "I bought my first red car in London in 2015!"
* *Password:* \`IbmfrciLi2015!\`

### 3. Never Reuse Passwords
This is the **Golden Rule**. If you use the same password for Facebook and a random shopping site, and the shopping site gets hacked, the hackers now have your Facebook password too.

## The Solution: Password Managers
You cannot remember 50 different, complex passwords. You need a **Password Manager** (like Bitwarden, 1Password, or LastPass).
* You remember **one** Master Password.
* The software generates and remembers complex, unique passwords for every other site.

## Two-Factor Authentication (2FA)
Turn this on everywhere (Email, Banking, Social Media).
* **Factor 1:** Something you know (Password).
* **Factor 2:** Something you have (Phone code, Authenticator App key).
* Even if a hacker steals your password, they can't log in without your phone.

## Key Takeaway
Treat your passwords like your toothbrush: Don't share them, change them if they get dirty (leaked), and never reuse them.

> "Passwords are like underwear: you don't let people see it, you should change it often, and you shouldn't share it with strangers." - Chris Pirillo
    `
  },
  { 
    id: "di-recognizing-scams", 
    title: "Spotting Online Scams", 
    description: "Identify and avoid common online scams", 
    category: "Digital Intelligence", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
    tags: ["scams", "phishing", "fraud"],
    content: `
# Spotting Online Scams

## The Human Hacking
Most modern hacking isn't about code; it's about psychology. Scammers manipulate your emotions (Fear, Greed, Curiosity) to get you to act without thinking.

![Hacker silhouette](https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80)

## Common Types of Scams

### 1. Phishing Emails
Emails that look like they come from Netflix, Apple, or your Bank.
* **The Hook:** "Your account is locked!" or "You won a prize!"
* **The Trap:** A link that takes you to a fake login page to steal your credentials.
* **The Tell:** * Check the **Sender Address** (e.g., \`support@netflix-security-alert.com\` instead of \`netflix.com\`).
    * Hover over the link without clicking to see the real URL.

### 2. Tech Support Scams
A popup appears on your screen: "VIRUS DETECTED! Call Microsoft immediately."
* **Reality:** Microsoft/Apple will NEVER ask you to call them via a popup.
* **The Goal:** They want remote access to your computer to "fix" it (and steal your data).

### 3. The Grandparent/Friend Scam
You get a message from a friend's account: "I'm stuck in London, I lost my wallet, please send money!"
* **Reality:** Your friend's account was hacked.
* **The Fix:** Call the friend on their phone number to verify.

## The Red Flags of Scams

| Red Flag | Explanation |
| :--- | :--- |
| **Urgency** | "Act NOW or your account will be deleted." They don't want you to think. |
| **Payment Methods** | Asking for payment via **Gift Cards**, **Crypto**, or **Wire Transfer**. These are untraceable. |
| **Too Good To Be True** | "You won a lottery you didn't enter!" or "Earn $5000/week from home!" |
| **Secrecy** | "Don't tell anyone about this deal." |

## What To Do If You Are Scammed
1.  **Disconnect:** Turn off Wi-Fi if you gave remote access.
2.  **Change Passwords:** Immediately change passwords for email and banking.
3.  **Contact Bank:** Freeze cards and report fraud.
4.  **Scan for Malware:** Run a virus scan.

## Key Takeaway
Skepticism is your best antivirus. If an email or message triggers an intense emotion (panic or excitement), PAUSE.

> "If it sounds too good to be true, it is."
    `
  },
  { 
    id: "di-privacy-settings", 
    title: "Managing Privacy Settings", 
    description: "Control your personal information online", 
    category: "Digital Intelligence", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    tags: ["privacy", "data", "social-media"],
    content: `
# Managing Privacy Settings

## You Are The Product
"If you are not paying for the product, you are the product."
Free apps (Instagram, TikTok, Google) make money by collecting your data and selling access to your attention.

![Privacy lock concept](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80)

## What Data Do They Collect?
* **Location:** Where you live, work, and hang out.
* **Contacts:** Who you know.
* **Behavior:** What you click, how long you hover, what you buy.
* **Metadata:** Time of day you are online, device type, battery level.

## Conducting a Privacy Audit

### 1. Social Media Cleanup
* **Audience:** Change default posts from "Public" to "Friends Only."
* **Tagging:** Turn on "Review tags before they appear on my profile."
* **Search:** Disable "Allow search engines to link to your profile" if possible.

### 2. Location Services (The Big One)
Go to your phone settings \u2192 Privacy \u2192 Location Services.
* Change apps from "Always Allow" to **"While Using App"** or **"Never."**
* Does a Flashlight app really need your location? No.

### 3. App Permissions
Periodically check what your apps have access to:
* **Microphone:** Does a calculator app need this?
* **Photos:** Giving access to "All Photos" lets an app scan your entire history. Choose "Selected Photos" when possible.

## Browser Privacy
* **Cookies:** These are small files that track you across the web.
* **Prevention:** * Use privacy-focused browsers (Firefox, Brave).
    * Install ad-blockers (uBlock Origin).
    * Clear your history and cookies regularly.

## Key Takeaway
Privacy isn't about hiding bad things; it's about protecting your autonomy. You should get to decide who knows what about you.

> "Arguing that you don't care about the right to privacy because you have nothing to hide is no different than saying you don't care about free speech because you have nothing to say." - Edward Snowden
    `
  },
  { 
    id: "di-safe-browsing", 
    title: "Safe Internet Browsing", 
    description: "Best practices for safe web browsing", 
    category: "Digital Intelligence", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120,
    image: "https://images.unsplash.com/photo-1481451046913-241775837908?w=800",
    tags: ["browsing", "internet", "security"],
    content: `
# Safe Internet Browsing

## Surfing Without Shark Bites
The internet is a public street, not a private room. You need to look both ways before crossing.

![Laptop browsing](https://images.unsplash.com/photo-1481451046913-241775837908?w=800&q=80)

## The Lock Icon (HTTPS)
Look at the URL bar.
* **HTTP:** Not secure. Anyone on the same Wi-Fi can see what you type (passwords, credit cards).
* **HTTPS:** Secure (Encrypted). The data is scrambled.
* *Rule:* Never enter a credit card number on a site that doesn't have the Lock icon.

## Public Wi-Fi Dangers
Coffee shop or Airport Wi-Fi is often unsecured.
* Hackers can set up fake hotspots (e.g., "Free_Starbucks_Wifi") to steal data.
* **The Fix:** * Avoid logging into banking apps on public Wi-Fi.
    * Use a **VPN (Virtual Private Network)**. It creates a secure tunnel for your data, making it unreadable to anyone watching.

## Downloads and Pop-ups
* **The Fake Download Button:** Many sites have fake "Download" buttons that are actually ads for malware. Hover to check the URL.
* **Drive-by Downloads:** Sometimes just visiting a bad site initiates a download.
* **Rule:** If a file downloads automatically that you didn't ask for, **DELETE** it immediately. Do not open it.

## Extension Safety
Browser extensions are powerful but risky.
* Malicious extensions can read everything you type in your browser.
* Only install extensions from official stores and check reviews/permissions.

## Key Takeaway
The internet is permanent. Assume everything you do is being watched by someone (ISP, advertisers, or hackers), and browse accordingly.

> "The internet is written in ink, not pencil."
    `
  },

  // ==================================================================================
  // DIGITAL CITIZENSHIP
  // ==================================================================================
  { 
    id: "di-online-etiquette", 
    title: "Online Etiquette & Respect", 
    description: "Be respectful and kind in digital spaces", 
    category: "Digital Intelligence", 
    difficulty: "Beginner" as const, 
    duration: "15 min", 
    points: 100,
    image: "https://images.unsplash.com/photo-1515168816537-c9715879603d?w=800",
    tags: ["etiquette", "kindness", "communication"],
    content: `
# Online Etiquette (Netiquette)

## The Human Behind the Screen
It is easy to forget that the username on your screen is a real person with feelings. Anonymity often brings out the worst in people; character is keeping the best in you.

![Typing comments](https://images.unsplash.com/photo-1515168816537-c9715879603d?w=800&q=80)

## The Core Rules of Netiquette

### 1. The "Grandma Rule"
Before you post, ask: "Would I be okay with my grandmother reading this?" If not, delete it.

### 2. Tone is Invisible
Sarcasm often fails online.
* *Typed:* "Nice job." (Could mean "Good work" or "You failed miserably").
* *Fix:* Use emojis or more words to clarify intent. "Nice job! That looks great \uD83D\uDC4D."

### 3. DON'T TYPE IN ALL CAPS
IT LOOKS LIKE YOU ARE SHOUTING. It is aggressive and hard to read. Use asterisks or bold for *emphasis*.

### 4. Respect Privacy
Don't forward private messages or photos without consent. Just because it was sent to you doesn't mean it belongs to you.

## Handling Trolls
A "Troll" is someone who posts to annoy or harass others for fun.
* **Don't Feed The Trolls:** They want a reaction. If you get angry, they win.
* **The Strategy:** Ignore, Block, Report.

## Key Takeaway
Be the person online that you are offline. Kindness costs nothing but means everything.

> "Remember the human."
    `
  },
  { 
    id: "di-digital-footprint", 
    title: "Your Digital Footprint", 
    description: "Understand how your online actions leave traces", 
    category: "Digital Intelligence", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150,
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800",
    tags: ["reputation", "data", "future"],
    content: `
# Your Digital Footprint

## The Trail You Leave Behind
Every click, post, comment, and like contributes to your digital footprint. This trail creates a permanent record of your identity.

![Footprints in sand](https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80)

## Active vs. Passive Footprints
* **Active:** Data you intentionally share (Instagram photos, Tweets, blog posts).
* **Passive:** Data collected without you knowing (IP address, search history, location data).

## The Long-Term Impact
* **College Admissions:** Admissions officers often Google applicants.
* **Employment:** 70% of employers screen candidates' social media. A racist joke from 5 years ago can cost you a job today.
* **Dating:** Potential partners will look you up.

## The Billboard Test
Before posting, imagine putting that image or text on a massive billboard in the middle of your town where your parents, teachers, and future boss can see it. 
* Still want to post it? Go ahead.
* Hesitating? Don't post.

## Curating Your Footprint
1.  **Google Yourself:** See what comes up.
2.  **Delete Old Accounts:** If you don't use it, delete it. It's just a security risk.
3.  **Post Positivity:** Use your footprint to show your hobbies, skills, and positive interactions.

## Key Takeaway
You cannot delete your footprint, but you can curate it. Make sure your digital reputation reflects who you truly are.
    `
  },
  { 
    id: "di-cyberbullying", 
    title: "Understanding Cyberbullying", 
    description: "Recognize, prevent, and respond to cyberbullying", 
    category: "Digital Intelligence", 
    difficulty: "Intermediate" as const, 
    duration: "30 min", 
    points: 180,
    image: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=800",
    tags: ["bullying", "mental-health", "safety"],
    content: `
# Understanding Cyberbullying

## No Safe Haven
Traditional bullying stops when you get home. Cyberbullying follows you into your bedroom, 24/7. It is relentless and invisible to parents/teachers.

![Person looking sad at phone](https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=800&q=80)

## What Counts as Cyberbullying?
* **Harassment:** Sending repeated mean messages.
* **Doxing:** Revealing someone's private info (address/phone) online.
* **Exclusion:** Intentionally leaving someone out of group chats.
* **Impersonation:** Creating fake profiles to damage someone's reputation.

## The Bystander Effect
Most people see bullying but do nothing because "someone else will handle it."
* **Upstander:** Be the person who intervenes.
    * Reach out to the victim privately ("Are you okay?").
    * Report the bully to the platform.
    * Don't like or share the bullying posts.

## Action Steps for Victims
1.  **Don't Respond:** Retaliation escalates the situation.
2.  **Save Evidence:** Screenshot everything (messages, dates, times). You may need this for legal or school action.
3.  **Block:** Cut off their access to you.
4.  **Tell Someone:** You cannot handle this alone. Tell a parent, teacher, or counselor.

## Key Takeaway
Your worth is not defined by a comment section. If you see something, say something.

> "Blowing out someone else's candle doesn't make yours shine any brighter."
    `
  },
  { 
    id: "di-responsible-sharing", 
    title: "Sharing Responsibly Online", 
    description: "Think before you post or share", 
    category: "Digital Intelligence", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    tags: ["sharing", "social-media", "copyright"],
    content: `
# Sharing Responsibly Online

## The Viral Power
Information spreads instantly. Once you hit "Share," you lose control of where that information goes.

![Share icon concept](https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80)

## The Checklist: T.H.I.N.K.
Before posting, ask yourself:
* **T - Is it True?** Have you verified the info?
* **H - Is it Helpful?** Does it add value?
* **I - Is it Inspiring?** Does it lift others up?
* **N - Is it Necessary?** Does this need to be said?
* **K - Is it Kind?** Will it hurt someone?

## Consent is Mandatory
Never post a photo of someone else without asking them.
* What looks like a "funny candid" to you might be humiliating to them.
* *Special Care:* Be very careful posting photos of children.

## Intellectual Property & Copyright
Just because an image is on Google doesn't mean it's free to use.
* **Copyright:** Assume everything is owned by the creator.
* **Fair Use:** Limited use for education/parody is okay, but claiming it as yours is theft.
* **Credit:** Always credit the artist/source if you share their work.

## Oversharing
Avoid sharing:
* Travel plans (tells burglars your house is empty).
* Home address or school name.
* High-resolution photos of keys (duplicates can be made from photos!).

## Key Takeaway
Your social media feed is a publication. Act like a responsible editor.
    `
  },

  // ==================================================================================
  // MEDIA LITERACY
  // ==================================================================================
  { 
    id: "di-fake-news", 
    title: "Identifying Fake News", 
    description: "Spot misinformation and false stories", 
    category: "Digital Intelligence", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150,
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800",
    tags: ["fake-news", "misinformation", "critical-thinking"],
    content: `
# Identifying Fake News

## Truth in the Age of Algorithms
False news spreads 6 times faster than the truth on Twitter. Why? Because lies are designed to be shocking and emotional.

![Newspapers](https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80)

## Types of False Information
1.  **Misinformation:** False info shared by mistake (no bad intent).
    * *Example:* Sharing an old photo thinking it's from a current event.
2.  **Disinformation:** Lies created intentionally to deceive or harm.
    * *Example:* Political propaganda or health hoaxes.
3.  **Satire:** Humor that mimics news (e.g., The Onion). It's not meant to be believed, but people often fall for it.

## The Emotional Trigger
If a headline makes you feel **EXTREMELY ANGRY** or **EXTREMELY SCARED**, pause.
* Fake news is weaponized emotion. It bypasses your logic to get you to click/share.

## Deepfakes and AI
We can no longer trust our eyes. AI can generate photos and videos of people saying things they never said.
* *Check:* Look for unnatural blinking, mismatched lip-syncing, or weird artifacts around hair/ears.

## How to Spot It
* **Check the URL:** \`abcnews.com.co\` is not \`abcnews.go.com\`.
* **Reverse Image Search:** Upload the photo to Google Images. Is it actually from a movie or an event 10 years ago?
* **Check the Date:** Old news is often recycled to stir up new anger.

## Key Takeaway
Don't be a "useful idiot." Verify before you amplify.

> "A lie can travel halfway around the world while the truth is putting on its shoes." - Mark Twain
    `
  },
  { 
    id: "di-source-verification", 
    title: "Verifying Information Sources", 
    description: "Check if information is reliable and accurate", 
    category: "Digital Intelligence", 
    difficulty: "Intermediate" as const, 
    duration: "25 min", 
    points: 150,
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800",
    tags: ["research", "verification", "facts"],
    content: `
# Verifying Information Sources

## Lateral Reading
Professional fact-checkers don't stay on the website they are checking. They open new tabs.
* **Vertical Reading (Bad):** Staying on the page, looking at the "About Us" section (which they wrote!).
* **Lateral Reading (Good):** Opening a new tab and searching *"Who funds [Website Name]?"* or *"[Website Name] controversy"*.

![Magnifying glass on text](https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80)

## The CRAAP Test
Use this to evaluate a source:
* **C - Currency:** Is the info up to date?
* **R - Relevance:** Is it related to your topic?
* **A - Authority:** Who is the author? What are their credentials?
* **A - Accuracy:** Is it supported by evidence? Can you find it elsewhere?
* **P - Purpose:** Is it trying to inform you, sell to you, or persuade you?

## Echo Chambers
Algorithms show you what you *want* to see, not what is true.
* If every news source you read agrees with you, you are in an echo chamber.
* **Challenge:** Intentionally follow one credible source that disagrees with your political view.

## Expert vs. Influencer
* **Expert:** Has degrees, experience, and peer-reviewed work (e.g., A Virologist).
* **Influencer:** Has followers and charisma (e.g., A YouTuber).
* *Rule:* Take health advice from doctors, not fitness models.

## Key Takeaway
Information is cheap; accurate information is expensive (it takes time to verify). Pay the price of time.
    `
  },
  { 
    id: "di-critical-media", 
    title: "Critical Media Consumption", 
    description: "Analyze and question media content", 
    category: "Digital Intelligence", 
    difficulty: "Advanced" as const, 
    duration: "30 min", 
    points: 180,
    image: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=800",
    tags: ["media", "bias", "analysis"],
    content: `
# Critical Media Consumption

## Reading Between the Lines
Media is not a window to the world; it is a frame. The creator chooses what to include within the frame and what to leave out.

![Camera lens](https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=800&q=80)

## Identifying Bias
Every source has bias. The goal is to recognize it.
* **Selection Bias:** What stories did they choose to cover? What did they ignore?
* **Framing:** How is the story presented?
    * *Headline A:* "Protestors clash with police." (Focus on conflict).
    * *Headline B:* "Citizens march for rights." (Focus on cause).

## The Agenda
Ask: **"Who benefits from me believing this?"**
* Is it a company selling a product?
* Is it a politician wanting a vote?
* Is it a news site wanting ad revenue (clicks)?

## Correlation vs. Causation
Media often confuses these to make sensational headlines.
* *Fact:* People who eat more ice cream get more sunburns.
* *Media:* "Ice Cream Causes Sunburns!"
* *Reality:* Both happen in summer (Correlation, not Causation).

## Representation Matters
Look at who is speaking in the story.
* If a story is about teenagers, did they interview teenagers?
* If a story is about a specific community, are members of that community quoted?

## Key Takeaway
Don't be a sponge absorbing everything. Be a filter. Question the narrative.
    `
  },
  { 
    id: "di-advertising-awareness", 
    title: "Understanding Online Advertising", 
    description: "Recognize how advertising influences you", 
    category: "Digital Intelligence", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120,
    image: "https://images.unsplash.com/photo-1557838402-e78d10b0e60c?w=800",
    tags: ["ads", "marketing", "influence"],
    content: `
# Understanding Online Advertising

## The Attention Economy
You see between 4,000 and 10,000 ads per day. Most are invisible to your conscious mind, but your subconscious sees them all.

![Neon signs](https://images.unsplash.com/photo-1557838402-e78d10b0e60c?w=800&q=80)

## Types of Sneaky Ads
1.  **Native Advertising:** Ads designed to look like news articles. Look for tiny "Sponsored" tags.
2.  **Influencer Marketing:** A YouTuber holding a soda isn't just thirsty; they are paid.
    * *Check:* Look for \`#ad\`, \`#sponsored\`, or \`#partner\`.
3.  **Retargeting:** You look at a pair of shoes, and then those shoes follow you to Facebook, Instagram, and YouTube.

## How They Target You
Advertisers build a "Psychographic Profile" of you.
* Not just your age/gender, but your fears, insecurities, and desires.
* *Example:* If you just broke up, you will see ads for dating apps or comfort food.

## The Scarcity Trick
"Only 2 items left!" or "Sale ends in 10 minutes!"
* This creates false urgency to bypass your rational brain. Often, if you refresh the page, the timer resets.

## Protecting Your Headspace
* **Ad Blockers:** Use them to declutter your web experience.
* **Conscious Consumption:** Ask, "Do I want this because I need it, or because I saw it 50 times today?"

## Key Takeaway
Advertising is the art of making you unhappy with what you have. Recognize the game so you don't have to play it.
    `
  },

  // ==================================================================================
  // TECHNOLOGY BASICS
  // ==================================================================================
  { 
    id: "di-device-basics", 
    title: "Device Care & Basics", 
    description: "Take care of your devices and use them efficiently", 
    category: "Digital Intelligence", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
    tags: ["hardware", "maintenance", "tech"],
    content: `
# Device Care & Basics

## Respect the Machine
Your laptop/phone is an expensive tool. Proper care doubles its lifespan.

![Repairing computer](https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80)

## Physical Care
* **Heat is the Enemy:** Never leave devices in a hot car or block the laptop fan vents (don't use it on a pillow!). Heat kills batteries and processors.
* **Cleaning:** Use a microfiber cloth. Do not spray water directly on the screen; spray the cloth first.
* **Battery Health:**
    * Don't keep it at 100% all the time.
    * Don't let it drain to 0% constantly.
    * The "sweet spot" is 20-80%.

## Software Maintenance
* **Updates:** "Update Later" is a bad habit. Updates contain critical security patches. Install them.
* **Storage:** A full hard drive slows down the computer. Keep at least 15% of space free.

## The Importance of Backups
There are two types of people: those who have lost data, and those who will.
* **The 3-2-1 Rule:**
    * **3** copies of data.
    * **2** different media types (e.g., Computer + External Drive).
    * **1** copy offsite (Cloud).

## Restarting
"Have you tried turning it off and on again?"
* It's a meme, but it works. Restarting clears the RAM (short-term memory) and fixes 90% of minor glitches.

## Key Takeaway
A well-maintained device is a reliable partner. Neglect it, and it will fail you when you need it most.
    `
  },
  { 
    id: "di-internet-works", 
    title: "How the Internet Works", 
    description: "Understand the basics of internet technology", 
    category: "Digital Intelligence", 
    difficulty: "Beginner" as const, 
    duration: "25 min", 
    points: 140,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800",
    tags: ["internet", "network", "infrastructure"],
    content: `
# How the Internet Works

## The Global Conversation
The internet is basically a wire (fiber optics, copper, or wireless) that connects computers together.

![Server room](https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80)

## Client and Server
* **Client:** You (Your phone/laptop). You *request* information.
* **Server:** A powerful computer in a warehouse (Data Center). It *serves* information.

## IP Addresses
Every device has an IP address (like \`192.168.1.1\`). It's your digital street address so data knows where to go.

## DNS (Domain Name System)
Computers speak numbers (IPs); Humans speak words (\`google.com\`).
* **DNS is the Phonebook:** When you type \`google.com\`, DNS translates it to \`142.250.190.46\` so your computer can find the server.

## Packets
Data doesn't travel in one big lump. It is chopped into tiny "packets."
* Imagine sending a puzzle via mail. You send each piece in a separate envelope.
* Your computer receives the envelopes, puts the puzzle back together, and displays the webpage.

## The Cloud
"The Cloud" is just a marketing term for **someone else's computer**.
* When you save photos to iCloud/Google Drive, you are saving them on a server farm owned by Apple/Google.

## Key Takeaway
The internet is a physical infrastructure of cables and servers, not magic. Understanding this helps you troubleshoot when things go wrong.
    `
  },
  { 
    id: "di-app-safety", 
    title: "App Safety & Permissions", 
    description: "Make smart choices about apps and permissions", 
    category: "Digital Intelligence", 
    difficulty: "Intermediate" as const, 
    duration: "20 min", 
    points: 130,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
    tags: ["apps", "permissions", "mobile"],
    content: `
# App Safety & Permissions

## The Gatekeepers
Apps are the main way we interact with our phones, but they are also the main way malware gets in.

![Smartphone apps](https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80)

## Official Stores Only
* **iOS:** App Store.
* **Android:** Google Play Store.
* **Sideloading (Installing from websites):** Extremely risky. Official stores scan for viruses; random websites do not.

## Permission Fatigue
We often just click "Allow" to get the app working. Stop doing that.
* **Context Matters:**
    * *Maps App* needs Location? \u2705 Yes.
    * *Flashlight App* needs Contacts? \u274C No. (Data mining).
    * *Social Media* needs Microphone? \u2705 Yes (for video), but monitor it.

## "Free" Apps
Developing apps costs money. If an app is free and has no ads, it is likely selling your data or installing malware (Cryptominers).

## Terms of Service (TOS)
Nobody reads the whole thing, but scan for:
* **Data Ownership:** Do you own your content, or do they?
* **Termination:** Can they delete your account for no reason?

## Cleaning House
Delete apps you haven't used in 3 months.
* Every installed app is a potential security hole.
* Clutter slows down your phone.

## Key Takeaway
Your phone is your digital house. Don't let strangers in, and definitely don't give them the keys (permissions) to your safe.
    `
  },
  { 
    id: "di-screen-time", 
    title: "Managing Screen Time", 
    description: "Balance technology use for well-being", 
    category: "Digital Intelligence", 
    difficulty: "Beginner" as const, 
    duration: "20 min", 
    points: 120,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800",
    tags: ["wellbeing", "health", "balance"],
    content: `
# Managing Screen Time

## Tool or Master?
Technology is a wonderful servant but a terrible master. If you can't be away from your phone for an hour without anxiety, it owns you.

![Person using phone in dark](https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80)

## The Dopamine Loop
Apps are engineered to be addictive (like slot machines).
* **Infinite Scroll:** No stopping point means you never feel "done."
* **Notifications:** Red badges trigger urgency.
* **Likes:** Random rewards keep you checking.

## Physical Effects
* **Tech Neck:** Looking down strains the spine.
* **Digital Eye Strain:** The 20-20-20 Rule: Every 20 minutes, look at something 20 feet away for 20 seconds.
* **Sleep Disruption:** Blue light tricks your brain into thinking it's daytime.

## Strategies for Balance
1.  **Phone-Free Zones:** No phones at the dinner table or in the bedroom.
2.  **Grayscale Mode:** Turn your screen black and white. It makes Instagram/TikTok much less stimulating.
3.  **The "Wait" Rule:** If you want to check your phone, wait 15 seconds. Usually, the urge passes.

## Digital Detox
Try a 24-hour break once a month.
* You will feel bored. That is good. Boredom is where creativity comes from.

## Key Takeaway
Life happens in the analog world. Don't scroll your life away.

> "Disconnect to reconnect."
    `
  }
];