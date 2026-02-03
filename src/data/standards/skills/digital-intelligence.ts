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

## The Keys to Your Digital Kingdom

Your password is the only thing standing between a criminal and your bank account, email, medical records, and entire digital identity. Yet most people treat passwords like sticky notes—weak, reused, and easily stolen.

**The Stakes:** The average cost of a data breach in 2023 was $4.45 million. For individuals, identity theft costs victims an average of $1,100 and 200+ hours to resolve.

![Padlock on keyboard](https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80)

## The Mathematics of Password Strength

### Password Entropy
**Entropy** measures how unpredictable your password is. It's calculated in bits.

**Formula:** Entropy = log₂(R^L)
- R = Range of possible characters (e.g., 26 lowercase + 26 uppercase + 10 digits + 32 symbols = 94)
- L = Length of password

**Examples:**
- \`password\` (8 lowercase letters): 26^8 = 37 bits (cracked instantly)
- \`P@ssw0rd\` (8 mixed characters): 94^8 = 52 bits (cracked in hours)
- \`correct-horse-battery-staple\` (28 characters): 26^28 = 131 bits (would take billions of years)

**The Rule:** Aim for at least **80 bits of entropy** (roughly 12-14 random characters or 5-6 random words).

### How Passwords Are Stored (Hash Functions)

Websites don't store your actual password. They store a **hash**—a one-way mathematical transformation.

**Example:**
- Password: \`MyPassword123\`
- SHA-256 Hash: \`8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92\`

**The Problem:** If two users have the same password, they have the same hash. Hackers use **rainbow tables** (pre-computed hash databases) to reverse-engineer common passwords.

**The Solution:** **Salting**—adding random data before hashing so identical passwords produce different hashes.

## How Hackers Crack Passwords

### 1. Brute Force Attacks
Computers trying every possible combination.
- **Speed:** Modern GPUs can try 100 billion passwords per second
- **Defense:** Length. Each additional character exponentially increases crack time

### 2. Dictionary Attacks
Software that tries every word in the dictionary, plus common variations.
- **Targets:** \`password\`, \`123456\`, \`qwerty\`, \`iloveyou\`
- **Defense:** Use random words or passphrases, not single dictionary words

### 3. Credential Stuffing
Using passwords leaked from one breach to access other accounts.
- **Reality:** 65% of people reuse passwords across multiple sites
- **Impact:** If your LinkedIn password was in the 2012 breach (117 million accounts), hackers try it on your email, bank, and social media
- **Defense:** **Never reuse passwords**

### 4. Social Engineering
Tricking you into revealing your password.
- **Example:** "Security questions" like "Mother's maiden name" are easily researched on social media
- **Defense:** Use fake answers. Your mother's maiden name can be "PurpleElephant47"

## Case Study: The LinkedIn Breach (2012)

**What Happened:**
- 117 million LinkedIn passwords stolen
- Passwords were hashed but **not salted**
- Hackers cracked 90% of passwords within days using rainbow tables

**The Aftermath:**
- Passwords sold on dark web for $5
- Used for credential stuffing attacks on banking sites
- LinkedIn paid $1.25 million in settlements

**Lessons:**
1. Even "secure" sites can be breached
2. Unsalted hashes are nearly useless
3. Password reuse turns one breach into many

## Case Study: The Yahoo Breach (2013-2014)

**What Happened:**
- **3 billion accounts** compromised (every Yahoo account)
- Stolen: Names, emails, dates of birth, security questions, **hashed passwords**
- Took Yahoo 3 years to disclose the full extent

**The Impact:**
- Yahoo's sale price to Verizon dropped by $350 million
- Class-action lawsuits totaling $117.5 million
- Millions of users had their email accounts hijacked

**Lessons:**
1. Breaches can go undetected for years
2. Security questions are a weak point
3. Check haveibeenpwned.com regularly

## The Anatomy of a Strong Password

### Bad Passwords (Common Patterns)
❌ \`password123\` - Dictionary word + predictable numbers
❌ \`P@ssw0rd\` - Simple substitutions (a→@, o→0) don't fool modern crackers
❌ \`Summer2024!\` - Seasonal + year + symbol (very common pattern)
❌ \`ilovejohn\` - Personal information easily found on social media
❌ \`qwerty123456\` - Keyboard patterns

### Good Passwords (High Entropy)
✅ \`correct-horse-battery-staple\` - Diceware method (4+ random words)
✅ \`Tr0ub4dor&3\` - Random characters, but hard to remember
✅ \`J8#mK2$pL9@nQ5\` - Password manager-generated
✅ \`MyDog8MyHomework@3AM!\` - Unique, memorable sentence

### The Diceware Method
1. Get a list of 7,776 words (Diceware word list)
2. Roll 5 dice to generate a random number (e.g., 43216)
3. Look up the word (e.g., "staple")
4. Repeat 4-6 times
5. Result: \`staple-correct-horse-battery-clip-moon\` (77 bits of entropy)

**Why it works:** Random words are easy for humans to remember but impossible for computers to guess.

## The Solution: Password Managers

You cannot remember 50+ unique, complex passwords. You need a **password manager**.

### How They Work
1. You create **one** master password (make it strong using Diceware)
2. The software generates and stores unique, random passwords for every site
3. Passwords are encrypted locally before syncing to the cloud
4. You only need to remember the master password

### Password Manager Comparison

| Feature | Bitwarden | 1Password | LastPass | Dashlane |
|---------|-----------|-----------|----------|----------|
| **Cost** | Free (Premium $10/yr) | $36/yr | Free (Limited) | $60/yr |
| **Open Source** | ✅ Yes | ❌ No | ❌ No | ❌ No |
| **Security Audits** | ✅ Regular | ✅ Regular | ⚠️ Breached 2022 | ✅ Regular |
| **Offline Access** | ✅ Yes | ✅ Yes | ⚠️ Premium only | ✅ Yes |
| **Family Sharing** | $40/yr (6 users) | $60/yr (5 users) | $48/yr (6 users) | $90/yr (6 users) |
| **Autofill** | ✅ Excellent | ✅ Excellent | ✅ Good | ✅ Excellent |
| **2FA Support** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |

**Recommendation:** Bitwarden (best value, open source) or 1Password (best UX).

**Concern:** "What if the password manager gets hacked?"
- **Answer:** Your passwords are encrypted with your master password before leaving your device. Even if the company's servers are breached, the attacker gets encrypted gibberish without your master password.
- **Reality:** Using a password manager is far safer than reusing weak passwords.

## Two-Factor Authentication (2FA) / Multi-Factor Authentication (MFA)

### The Three Factors
1. **Something you know:** Password
2. **Something you have:** Phone, security key
3. **Something you are:** Fingerprint, face

**2FA = Any two of these**

### Types of 2FA (Ranked by Security)

**🥇 Hardware Security Keys (Best)**
- Physical USB/NFC device (YubiKey, Titan Key)
- **Pros:** Immune to phishing, no internet needed
- **Cons:** Costs $25-50, can be lost
- **Use for:** Banking, email, work accounts

**🥈 Authenticator Apps (Good)**
- Apps like Authy, Google Authenticator, Microsoft Authenticator
- Generate time-based codes (TOTP) that change every 30 seconds
- **Pros:** Works offline, more secure than SMS
- **Cons:** Can be lost if phone is lost (use backup codes!)
- **Use for:** Most accounts

**🥉 SMS Codes (Weak)**
- Text message with a code
- **Pros:** Easy, works on any phone
- **Cons:** Vulnerable to SIM swapping attacks
- **Use for:** Low-value accounts only

**❌ Email Codes (Weakest)**
- If your email is compromised, this fails
- **Avoid when possible**

### SIM Swapping Attack
**How it works:**
1. Hacker calls your mobile carrier pretending to be you
2. They say "I lost my phone, transfer my number to a new SIM"
3. Carrier transfers your number to the hacker's SIM card
4. Hacker receives your SMS 2FA codes

**Defense:** Use authenticator apps or hardware keys, not SMS.

## Biometric Authentication (Fingerprints, Face ID)

### Pros
- Convenient (can't forget your face)
- Fast
- Difficult to replicate (for most attackers)

### Cons
- **You can't change it:** If your fingerprint is stolen, you can't get a new finger
- **Legal issues:** In some countries, police can force you to unlock with biometrics but not passwords (5th Amendment in US)
- **False positives:** Face ID can be fooled by twins or high-quality 3D masks

### Best Practice
Use biometrics for convenience, but have a strong password as backup.

## Password Hygiene Best Practices

### ✅ Do
- Use a password manager
- Enable 2FA on all important accounts (email, banking, social media)
- Use unique passwords for every site
- Make passwords at least 12 characters (or 4+ random words)
- Check haveibeenpwned.com quarterly
- Update passwords if a breach is detected
- Use passphrases for master passwords

### ❌ Don't
- Reuse passwords across sites
- Use personal information (birthdays, names, pet names)
- Share passwords (even with family—use password manager sharing)
- Write passwords on sticky notes
- Use "password" or "123456" (still the most common passwords!)
- Ignore breach notifications
- Use the same password with slight variations (\`Facebook1\`, \`Facebook2\`)

## The Password Lifecycle

1. **Creation:** Use password manager to generate random password
2. **Storage:** Save in password manager, never in browser (less secure)
3. **Usage:** Autofill from password manager
4. **Rotation:** Change if breached or every 1-2 years for critical accounts
5. **Deletion:** When closing accounts, delete from password manager

## Key Takeaway

Passwords are the weakest link in cybersecurity, but they're still the primary defense. Treat them like your toothbrush: Don't share them, change them if they get dirty (breached), and never reuse them.

**The Three Rules:**
1. **Long and random** (12+ characters or 4+ words)
2. **Unique** (never reuse)
3. **Protected** (use a password manager + 2FA)

---

## Practical Exercises

### Exercise 1: Breach Check and Password Audit
1. Visit haveibeenpwned.com
2. Enter your email addresses
3. If you've been in a breach, immediately change passwords for those accounts
4. Make a list of all accounts where you've reused passwords
5. Prioritize changing the most important ones first (email, banking, social media)

### Exercise 2: Password Strength Testing
1. Visit a password strength checker (e.g., Bitwarden's password strength tester)
2. Test 5 of your current passwords (don't enter real passwords on untrusted sites!)
3. Note which are weak, medium, or strong
4. Calculate the entropy of your weakest password
5. Create a new password with at least 80 bits of entropy

### Exercise 3: Password Manager Setup
1. Choose a password manager (Bitwarden recommended for beginners)
2. Create a strong master password using the Diceware method (5-7 words)
3. Install the browser extension and mobile app
4. Import or manually add your 10 most important accounts
5. Generate new random passwords for at least 3 accounts

### Exercise 4: Enable 2FA on Critical Accounts
1. Download an authenticator app (Authy or Google Authenticator)
2. Enable 2FA on your email account (Gmail, Outlook, etc.)
3. Enable 2FA on your banking app
4. Enable 2FA on your most-used social media account
5. Save backup codes in your password manager

### Exercise 5: Create a Diceware Passphrase
1. Find a Diceware word list online
2. Roll 5 dice (or use a virtual dice roller) 5 times
3. Look up each 5-digit number to get 5 random words
4. Combine them with hyphens: \`word1-word2-word3-word4-word5\`
5. Memorize this passphrase and use it as your password manager master password

---

> "Passwords are like underwear: you don't let people see it, you should change it often, and you shouldn't share it with strangers." - Chris Pirillo

> "The only secure password is the one you can't remember." - Bruce Schneier

> "Using the same password for everything is like using the same key for your house, car, and office." - Unknown

> "A password is like a toothbrush. Choose a good one, don't share it, and change it regularly." - Unknown
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

## The Human Hacking: Social Engineering

Most modern hacking isn't about breaking code; it's about breaking people. **Social engineering** is the art of manipulating human psychology to bypass security systems. Scammers exploit your emotions, cognitive biases, and trust to get you to act without thinking.

**The Statistics:**
- 98% of cyberattacks rely on social engineering
- Phishing attacks increased 61% in 2023
- Average loss per victim: $136,000 for businesses, $1,800 for individuals
- Only 3% of phishing emails are reported

![Hacker silhouette](https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80)

## The Psychology of Scams: Cialdini's Principles

Dr. Robert Cialdini identified 6 principles of persuasion that scammers weaponize:

### 1. Authority
**The Principle:** We obey authority figures without question.
**The Scam:** Emails pretending to be from the IRS, FBI, or your CEO.
**Example:** "This is the IRS. You owe $5,000 in back taxes. Pay immediately or face arrest."
**Defense:** Real authorities don't demand immediate payment via gift cards.

### 2. Urgency/Scarcity
**The Principle:** Limited time/quantity triggers panic buying.
**The Scam:** "Your account will be deleted in 24 hours!" or "Only 2 items left!"
**Example:** "Your Amazon account has been locked. Click here within 1 hour to restore access."
**Defense:** Legitimate companies give you time. Urgency is a red flag.

### 3. Social Proof
**The Principle:** We follow what others are doing.
**The Scam:** Fake reviews, testimonials, or "1 million users trust us!"
**Example:** Investment scams with fabricated success stories.
**Defense:** Verify reviews on multiple platforms. Look for patterns in fake reviews (similar language, posted same day).

### 4. Liking/Similarity
**The Principle:** We trust people we like or who are like us.
**The Scam:** Romance scams, fake profiles claiming shared interests.
**Example:** Dating app scammer who "coincidentally" loves the same obscure band as you.
**Defense:** Be skeptical of too-perfect matches. Video call before trusting.

### 5. Reciprocity
**The Principle:** We feel obligated to return favors.
**The Scam:** "Free" gifts that come with hidden costs or malware.
**Example:** "Download this free antivirus!" (It's actually malware).
**Defense:** Nothing is truly free. Research before downloading.

### 6. Commitment/Consistency
**The Principle:** Once we commit to something, we follow through.
**The Scam:** Getting you to say "yes" to small requests, then escalating.
**Example:** "Can you confirm your email?" → "Can you verify your password?" → "Can you send $500?"
**Defense:** Don't start down the path. Say no early.

## Common Types of Scams (Detailed)

### 1. Phishing Emails (Email Spoofing)
**What it is:** Emails that impersonate legitimate companies to steal credentials.

**Anatomy of a Phishing Email:**
\`\`\`
From: security@paypa1.com (Note the "1" instead of "l")
Subject: URGENT: Your account has been compromised!

Dear Valued Customer,

We detected suspicious activity on your account. Click here immediately to verify your identity or your account will be suspended within 24 hours.

[Verify Account] ← This button leads to fake-paypal-login.com

Thank you,
PayPal Security Team
\`\`\`

**Red Flags:**
- ❌ Generic greeting ("Dear Customer" instead of your name)
- ❌ Misspelled domain (\`paypa1.com\` vs. \`paypal.com\`)
- ❌ Urgency and threats
- ❌ Suspicious link (hover to see real URL)
- ❌ Grammar/spelling errors
- ❌ Requests for sensitive info

**Defense:**
- Hover over links without clicking
- Check sender's email address carefully
- Go directly to the website (don't click email links)
- Enable email authentication (SPF, DKIM, DMARC)

### 2. Spear Phishing (Targeted Attacks)
**What it is:** Personalized phishing using information from social media.

**Example:**
\`\`\`
From: boss@yourcompany.com (spoofed)
Subject: URGENT: Wire Transfer Needed

Hi Sarah,

I'm in a meeting with the Tokyo clients and need you to wire $50,000 to this account immediately for the deal. I'll explain later.

- John (Your CEO)
\`\`\`

**Why it works:** Uses your name, your boss's name, and creates urgency.
**Defense:** Verify via phone call. Establish a code word for urgent requests.

### 3. Tech Support Scams
**What it is:** Fake popups or calls claiming your computer has a virus.

**The Script:**
1. Popup: "CRITICAL ALERT: Your computer is infected! Call Microsoft: 1-800-XXX-XXXX"
2. You call. They answer: "Microsoft Support, how can I help?"
3. They ask for remote access to "fix" the problem
4. They install malware, steal data, or demand payment ($300-$500)

**The Reality:**
- Microsoft/Apple NEVER cold-call or use popups
- Real warnings come from your antivirus software, not web browsers
- Remote access = giving them full control

**Defense:**
- Close the popup (Ctrl+Alt+Delete → Task Manager → End Browser)
- Never call numbers from popups
- Never give remote access to unsolicited callers

### 4. Romance Scams (Catfishing)
**What it is:** Fake online relationships designed to extract money.

**The Pattern:**
1. **Love Bombing:** Intense affection, "You're my soulmate"
2. **Building Trust:** Months of daily communication
3. **The Crisis:** "I need $5,000 for emergency surgery" or "I'm stuck abroad"
4. **Escalation:** More crises, more money

**Statistics:**
- $1.3 billion lost to romance scams in 2022
- Average loss: $4,400 per victim
- Victims often too embarrassed to report

**Red Flags:**
- Moves to private messaging quickly
- Professes love very fast
- Can't video call (always an excuse)
- Asks for money (gift cards, wire transfers)
- Claims to be military/doctor/engineer working abroad

**Defense:**
- Reverse image search their photos
- Video call before trusting
- Never send money to someone you haven't met

### 5. Investment/Cryptocurrency Scams
**What it is:** Ponzi schemes and fake investment opportunities.

**Example:** "Invest $1,000 in Bitcoin, get $10,000 back in 30 days!"

**How it works:**
- Early investors are paid with money from new investors (Ponzi scheme)
- Creates illusion of legitimacy
- Eventually collapses when no new investors join

**Red Flags:**
- Guaranteed high returns with no risk
- Pressure to recruit others (pyramid scheme)
- Unregistered with SEC or financial authorities
- Celebrity endorsements (often fake)

**Defense:**
- If it sounds too good to be true, it is
- Check SEC's investor.gov for registered investments
- Consult a licensed financial advisor

### 6. The Grandparent Scam
**What it is:** Scammers call elderly people pretending to be a grandchild in trouble.

**The Script:**
"Grandma, it's me! I'm in jail in Mexico. I need $2,000 for bail. Please don't tell Mom and Dad, they'll be so mad. Wire the money to this account."

**Why it works:**
- Targets elderly (less tech-savvy)
- Exploits love and fear
- Demands secrecy

**Defense:**
- Ask a question only the real grandchild would know
- Hang up and call the grandchild directly
- Verify with other family members

## Case Study: The Twitter Bitcoin Scam (2020)

**What Happened:**
- Hackers compromised Twitter's internal tools
- Took over accounts of Elon Musk, Barack Obama, Bill Gates, Apple, and others
- Posted: "I'm giving back to the community. Send Bitcoin to this address, and I'll send double back!"

**The Result:**
- $118,000 stolen in 3 hours
- 400+ victims
- Exposed Twitter's weak internal security

**Lessons:**
1. Even verified accounts can be hacked
2. Celebrities don't give away free money
3. Cryptocurrency transactions are irreversible

## Case Study: The Nigerian Prince Evolution

**The Classic (1990s):**
"I am a Nigerian prince. I have $10 million trapped in a bank. Help me transfer it, and I'll give you 10%."

**Modern Versions:**
- Fake lottery winnings
- Inheritance from unknown relatives
- Overpayment scams ("I'll send you $5,000, keep $500, send back $4,500")

**Why it still works:**
- Targets greed
- Seems low-effort (just provide bank details)
- Scammers intentionally use poor grammar to filter out skeptics (only gullible people respond)

**Statistics:**
- Still generates $700,000+ annually
- Victims are often educated professionals

## The Red Flags Framework

| Red Flag | Why It's Suspicious | Example |
|----------|---------------------|---------|
| **Urgency** | Prevents rational thinking | "Act in 1 hour or lose access!" |
| **Untraceable Payment** | Can't be reversed or tracked | Gift cards, crypto, wire transfer |
| **Too Good To Be True** | Exploits greed | "Earn $10,000/week from home!" |
| **Requests for Secrecy** | Prevents you from getting advice | "Don't tell anyone about this deal" |
| **Unsolicited Contact** | You didn't initiate | Random email/call/DM |
| **Poor Grammar** | Automated translation or filter | "Dear Sir/Madam, kindly do the needful" |
| **Mismatched URLs** | Spoofed domain | \`paypa1.com\` vs. \`paypal.com\` |
| **Requests for Remote Access** | Full control of your device | "Let me fix your computer" |
| **Emotional Manipulation** | Bypasses logic | Fear, greed, love, urgency |

## What To Do If You Are Scammed

### Immediate Actions (First 24 Hours)
1. **Disconnect:** If you gave remote access, turn off Wi-Fi/unplug ethernet immediately
2. **Change Passwords:** Email, banking, social media (use a different device if compromised)
3. **Contact Bank:** Report fraud, freeze cards, dispute charges
4. **Scan for Malware:** Run full antivirus scan (Malwarebytes, Windows Defender)
5. **Document Everything:** Screenshots, emails, transaction IDs

### Reporting
- **FTC:** reportfraud.ftc.gov (US)
- **FBI IC3:** ic3.gov (Internet Crime Complaint Center)
- **Local Police:** File a report (needed for insurance/bank claims)
- **Platform:** Report to the platform where scam occurred (email provider, social media)

### Recovery
- **Credit Freeze:** Contact Equifax, Experian, TransUnion
- **Identity Theft Report:** identitytheft.gov
- **Monitor Credit:** Check for fraudulent accounts

### Emotional Support
- Don't blame yourself—scammers are professionals
- Talk to someone (friend, counselor)
- Join support groups (r/scams on Reddit)

## Prevention: The STOP Method

Before clicking, sending money, or sharing info:

**S - Slow Down**
- Scammers create urgency. Take a breath.

**T - Think Critically**
- Does this make sense? Why would they contact me?

**O - Observe Red Flags**
- Check the list above. How many red flags do you see?

**P - Protect Yourself**
- Verify independently (call the company directly)
- Report suspicious messages

## Key Takeaway

Scammers are professional manipulators who study psychology. They know exactly which emotional buttons to push. Your best defense is **skepticism and verification**.

If an email, call, or message triggers an intense emotion (panic, excitement, fear, greed), that's your brain's alarm system. PAUSE. Verify. Don't let emotion override logic.

---

## Practical Exercises

### Exercise 1: Phishing Email Analysis
1. Find 3 suspicious emails in your inbox (or spam folder)
2. For each, identify at least 5 red flags
3. Hover over links (don't click!) and note the real URLs
4. Check the sender's email address for spoofing
5. Report as phishing to your email provider

### Exercise 2: Social Engineering Audit
1. Review your social media profiles
2. List 5 pieces of information a scammer could use (workplace, family names, hobbies)
3. Adjust privacy settings to hide this information from strangers
4. Remove any posts that reveal security question answers (pet names, mother's maiden name)

### Exercise 3: Scam Simulation
With a friend or family member:
1. Create a fake (harmless) phishing scenario
2. Send them a suspicious message
3. See if they fall for it
4. Discuss the red flags they missed
5. Practice the STOP method together

### Exercise 4: Red Flag Checklist Creation
Create a laminated card with the 9 red flags from the framework above. Keep it near your computer. Before responding to any urgent request, check the card.

### Exercise 5: Elder Protection
Teach an older family member about:
1. The grandparent scam
2. Tech support scams
3. How to verify caller identity
4. The phrase: "I'll call you back at the number I have on file"

---

> "If it sounds too good to be true, it is."

> "The best defense against social engineering is a healthy dose of skepticism." - Kevin Mitnick

> "It's easier to fool people than to convince them they've been fooled." - Mark Twain

> "Trust, but verify." - Ronald Reagan
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

---

## Practical Exercises

### Exercise 1: Location Services Audit
Check your phone's location settings. Change apps from "Always" to "While Using" where appropriate.

### Exercise 2: Social Media Privacy Check
Review the privacy settings on your most-used social platform. Tighten at least 3 settings.

### Exercise 3: Browser Cleanup
Install a privacy-focused extension like uBlock Origin or Privacy Badger on your browser.

---

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

---

## Practical Exercises

### Exercise 1: HTTPS Check
Visit 5 websites you use regularly. Check if each uses HTTPS (lock icon). Note any that don't.

### Exercise 2: Extension Audit
Review all browser extensions you have installed. Remove any you don't recognize or use.

### Exercise 3: VPN Research
Research 3 reputable VPN services. Compare their features and privacy policies.

---

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

---

## Practical Exercises

### Exercise 1: The Grandma Test
Before your next 5 posts, ask: "Would I be comfortable showing this to my grandma?"

### Exercise 2: Tone Check
Re-read 3 recent messages you sent. Could any be misinterpreted? How might you rewrite them?

### Exercise 3: Kindness Comment
Leave one genuinely kind, supportive comment online today.

---

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

---

## Practical Exercises

### Exercise 1: Google Yourself
Search your name. What comes up? Is there anything you'd want to change?

### Exercise 2: Account Cleanup
List all online accounts you have. Delete any you no longer use.

### Exercise 3: Digital Footprint Audit
Review your last 20 social media posts. Would you be proud if a future employer saw them?

---

> "Your reputation is built in thousands of tiny moments." - Unknown
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

---

## Practical Exercises

### Exercise 1: Upstander Practice
Think of 3 ways you could support someone being bullied online without escalating the situation.

### Exercise 2: Evidence Documentation
Learn how to screenshot on your device. Practice documenting a hypothetical bullying scenario.

### Exercise 3: Resource List
Create a list of 3 trusted adults and 2 online resources you could turn to if you or a friend experienced cyberbullying.

---

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

---

## Practical Exercises

### Exercise 1: T.H.I.N.K. Practice
Before your next 5 shares, run each through the T.H.I.N.K. checklist.

### Exercise 2: Consent Check
Review the last 5 photos you posted. Did you have consent from everyone in them?

### Exercise 3: Copyright Awareness
Find 3 sources of free-to-use images (Creative Commons) for future use.

---

> "Share as if your reputation depends on it—because it does."
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

---

## Practical Exercises

### Exercise 1: Reverse Image Search
Practice using Google Reverse Image Search on 3 images from social media. Are they what they claim to be?

### Exercise 2: Headline Analysis
Find a sensational headline. Read the full article. Does the content match the headline?

### Exercise 3: Source Check
Pick a news story. Find the same story from 3 different sources. Note the differences in framing.

---

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

---

## Practical Exercises

### Exercise 1: CRAAP Test Application
Pick an article you've read recently. Run it through all 5 CRAAP criteria.

### Exercise 2: Lateral Reading Practice
Find a website making a claim. Open new tabs and research who runs the site and their agenda.

### Exercise 3: Echo Chamber Check
List your 5 most-visited news sources. Do they all share the same perspective?

---

> "Trust, but verify." - Ronald Reagan
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

---

## Practical Exercises

### Exercise 1: Bias Detection
Watch 2 different news channels cover the same story. List the differences in framing.

### Exercise 2: "Who Benefits?" Analysis
Pick 3 pieces of content you consumed today. For each, ask: "Who benefits if I believe this?"

### Exercise 3: Representation Audit
Find a news story about a specific group. Were members of that group interviewed?

---

> "The media's the most powerful entity on earth. They have the power to make the innocent guilty and to make the guilty innocent." - Malcolm X
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

---

## Practical Exercises

### Exercise 1: Sponsored Spotting
Scroll through social media for 10 minutes. Count and identify all sponsored content.

### Exercise 2: Ad Diary
For one day, note every time you feel the urge to buy something. Was an ad involved?

### Exercise 3: Retargeting Test
Search for a product you don't want. Over the next 24 hours, note how often it appears in ads.

---

> "The best minds of my generation are thinking about how to make people click ads." - Jeff Hammerbacher
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

---

## Practical Exercises

### Exercise 1: Storage Cleanup
Check your device storage. Delete unused apps and old files to free up at least 2GB.

### Exercise 2: Backup Check
Verify when your last backup was. If it was more than a week ago, do one now.

### Exercise 3: Update Audit
Check for pending software updates on all your devices. Install them.

---

> "An ounce of prevention is worth a pound of cure."
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

---

## Practical Exercises

### Exercise 1: Traceroute
Use the traceroute command (or online tool) to see the path data takes from your computer to a website.

### Exercise 2: DNS Lookup
Use an online DNS lookup tool to find the IP address behind your favorite website.

### Exercise 3: Data Center Research
Research where the nearest data center is to your location. What companies operate there?

---

> "The internet is the first thing that humanity has built that humanity doesn't understand." - Eric Schmidt
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

---

## Practical Exercises

### Exercise 1: Permission Review
Go through all apps on your phone. Revoke unnecessary permissions for at least 5 apps.

### Exercise 2: App Deletion
Delete 5 apps you haven't used in the last 3 months.

### Exercise 3: Free App Analysis
Pick 3 free apps you use. Research how they make money.

---

> "If you're not paying for the product, you are the product."
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

---

## Practical Exercises

### Exercise 1: Screen Time Check
Check your screen time report. Note your most-used apps. Are you happy with how you spent that time?

### Exercise 2: Phone-Free Hour
Try one hour without your phone today. Notice how you feel.

### Exercise 3: Grayscale Challenge
Turn your phone to grayscale for 24 hours. Notice how it affects your usage.

---

> "Disconnect to reconnect."

> "Almost everything will work again if you unplug it for a few minutes, including you." - Anne Lamott
    `
  }
];