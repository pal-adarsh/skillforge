export interface GKQuestion {
  id: string;
  question: string;
  type: "mcq" | "true_false";
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export interface GKTestCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  questions: GKQuestion[];
}

export const gkTestCategories: GKTestCategory[] = [

  // origin of everything
  {
  id: "origin-of-everything-quiz",
  title: "Origin of Everything",
  description: "Test your understanding of how the universe, Earth, and everything came into existence",
  icon: "Sparkles",
  color: "from-indigo-500 to-purple-600",
  questions: [

    // =========================
    // BASIC CONCEPTS
    // =========================

    {
      id: "oe-q1",
      question: "According to modern cosmology, why may the concept of 'before the universe' not apply?",
      type: "mcq",
      options: [
        "Because the universe existed forever",
        "Because time itself began with the universe",
        "Because space existed before time",
        "Because science has proven nothing existed"
      ],
      correctAnswer: "Because time itself began with the universe",
      explanation: "Modern cosmology suggests that time and space began together at the Big Bang, so asking what happened 'before' may not be meaningful."
    },

    {
      id: "oe-q2",
      question: "What is a singularity?",
      type: "mcq",
      options: [
        "A large empty region of space",
        "A point where gravity disappears",
        "An infinitely dense and hot point where physics breaks down",
        "The center of every galaxy"
      ],
      correctAnswer: "An infinitely dense and hot point where physics breaks down",
      explanation: "At the universe’s origin, all matter and energy were compressed into a singularity where current physical laws fail."
    },

    {
      id: "oe-q3",
      question: "The Big Bang was an explosion that occurred at a single point in space.",
      type: "true_false",
      correctAnswer: "false",
      explanation: "The Big Bang was the expansion of space itself, not an explosion within pre-existing space."
    },

    {
      id: "oe-q4",
      question: "Approximately how old is the universe?",
      type: "mcq",
      options: [
        "4.6 billion years",
        "9.2 billion years",
        "13.8 billion years",
        "20 billion years"
      ],
      correctAnswer: "13.8 billion years",
      explanation: "Observational evidence shows the universe began about 13.8 billion years ago."
    },

    {
      id: "oe-q5",
      question: "What evidence strongly supports the Big Bang Theory?",
      type: "mcq",
      options: [
        "Asteroid impacts",
        "Cosmic microwave background radiation",
        "Solar eclipses",
        "Black hole images"
      ],
      correctAnswer: "Cosmic microwave background radiation",
      explanation: "The cosmic microwave background is leftover radiation from when the universe became transparent."
    },

    // =========================
    // TIME, SPACE & PARTICLES
    // =========================

    {
      id: "oe-q6",
      question: "What does Einstein’s equation E = mc² show?",
      type: "mcq",
      options: [
        "Energy is faster than light",
        "Mass and energy are interchangeable",
        "Time controls gravity",
        "Space is infinite"
      ],
      correctAnswer: "Mass and energy are interchangeable",
      explanation: "Einstein showed that mass is a form of energy, meaning they can convert into each other."
    },

    {
      id: "oe-q7",
      question: "Which particles formed first after the Big Bang?",
      type: "mcq",
      options: [
        "Atoms",
        "Protons and electrons",
        "Quarks and leptons",
        "Stars"
      ],
      correctAnswer: "Quarks and leptons",
      explanation: "In the earliest moments, fundamental particles like quarks and leptons formed first."
    },

    {
      id: "oe-q8",
      question: "Why did matter survive instead of annihilating completely with antimatter?",
      type: "mcq",
      options: [
        "Matter was heavier than antimatter",
        "Antimatter disappeared instantly",
        "There was a tiny excess of matter",
        "Gravity favored matter"
      ],
      correctAnswer: "There was a tiny excess of matter",
      explanation: "For every billion antimatter particles, one extra matter particle survived, forming everything we see today."
    },

    {
      id: "oe-q9",
      question: "Stable atoms formed about 380,000 years after the Big Bang.",
      type: "true_false",
      correctAnswer: "true",
      explanation: "Once the universe cooled enough, electrons could attach to nuclei, forming stable atoms."
    },

    // =========================
    // STARS, GALAXIES & SOLAR SYSTEM
    // =========================

    {
      id: "oe-q10",
      question: "What process powers stars like the Sun?",
      type: "mcq",
      options: [
        "Chemical burning",
        "Radioactive decay",
        "Nuclear fusion",
        "Gravitational collapse"
      ],
      correctAnswer: "Nuclear fusion",
      explanation: "Stars generate energy by fusing hydrogen into helium in their cores."
    },

    {
      id: "oe-q11",
      question: "Which component played a crucial role in galaxy formation?",
      type: "mcq",
      options: [
        "Dark energy",
        "Dark matter",
        "Light elements",
        "Cosmic radiation"
      ],
      correctAnswer: "Dark matter",
      explanation: "Dark matter provided gravitational scaffolding that helped galaxies form."
    },

    {
      id: "oe-q12",
      question: "Our solar system formed approximately how many years ago?",
      type: "mcq",
      options: [
        "13.8 billion years",
        "9.2 billion years",
        "4.6 billion years",
        "3.8 billion years"
      ],
      correctAnswer: "4.6 billion years",
      explanation: "The solar system formed from a collapsing solar nebula about 4.6 billion years ago."
    },

    {
      id: "oe-q13",
      question: "Which planets formed closest to the Sun?",
      type: "mcq",
      options: [
        "Gas giants",
        "Ice giants",
        "Rocky planets",
        "Dwarf planets"
      ],
      correctAnswer: "Rocky planets",
      explanation: "High temperatures near the Sun allowed only rocky materials to survive."
    },

    // =========================
    // EARTH & MOON
    // =========================

    {
      id: "oe-q14",
      question: "Earth formed through which process?",
      type: "mcq",
      options: [
        "Fusion",
        "Accretion",
        "Evaporation",
        "Condensation"
      ],
      correctAnswer: "Accretion",
      explanation: "Earth formed as rocky material gradually accumulated under gravity."
    },

    {
      id: "oe-q15",
      question: "What event best explains the formation of the Moon?",
      type: "mcq",
      options: [
        "Capture Theory",
        "Fission Theory",
        "Giant Impact Hypothesis",
        "Co-formation Theory"
      ],
      correctAnswer: "Giant Impact Hypothesis",
      explanation: "A Mars-sized body collided with Earth, and debris formed the Moon."
    },

    {
      id: "oe-q16",
      question: "The Moon helps stabilize Earth’s climate.",
      type: "true_false",
      correctAnswer: "true",
      explanation: "The Moon stabilizes Earth’s axial tilt, preventing extreme climate changes."
    },

    // =========================
    // EXTRA / CONCEPTUAL QUESTIONS
    // =========================

    {
      id: "oe-q17",
      question: "Why are humans described as 'made of stardust'?",
      type: "mcq",
      options: [
        "Humans originated in space",
        "Stars created heavy elements found in our bodies",
        "Earth was once a star",
        "Dust entered human cells"
      ],
      correctAnswer: "Stars created heavy elements found in our bodies",
      explanation: "Elements like carbon, oxygen, and iron were formed inside stars and spread through supernovae. These elements later became part of planets and life. (Extra conceptual question)"
    },

    {
      id: "oe-q18",
      question: "Which era represents Earth’s most violent early period?",
      type: "mcq",
      options: [
        "Archean Eon",
        "Proterozoic Eon",
        "Hadean Eon",
        "Phanerozoic Eon"
      ],
      correctAnswer: "Hadean Eon",
      explanation: "The Hadean Eon (4.5–4 billion years ago) featured intense volcanism and heavy asteroid impacts. (Extra question)"
    },

    {
      id: "oe-q19",
      question: "If the universe’s history were one year long, humans would appear when?",
      type: "mcq",
      options: [
        "Mid-July",
        "Early December",
        "Last hour of December 31st",
        "January 1st"
      ],
      correctAnswer: "Last hour of December 31st",
      explanation: "Humans occupy only a tiny fraction of cosmic history, appearing extremely late in the timeline. (Extra question)"
    }

  ]
},


// earth - our home
{
  id: "earth-our-home-quiz",
  title: "Earth – Our Home",
  description: "Test your understanding of Earth’s structure, systems, and processes",
  icon: "Globe",
  color: "from-blue-500 to-green-500",
  questions: [

    // =========================
    // BASIC UNDERSTANDING
    // =========================

    {
      id: "eoh-q1",
      question: "Why is Earth located in the 'Goldilocks Zone' important for life?",
      type: "mcq",
      options: [
        "It has the strongest gravity",
        "It allows liquid water to exist",
        "It receives the most sunlight",
        "It has the largest atmosphere"
      ],
      correctAnswer: "It allows liquid water to exist",
      explanation: "Earth lies at a distance from the Sun where temperatures allow water to remain liquid, which is essential for life."
    },

    {
      id: "eoh-q2",
      question: "Earth is classified as which type of planet?",
      type: "mcq",
      options: [
        "Gas giant",
        "Ice giant",
        "Terrestrial planet",
        "Dwarf planet"
      ],
      correctAnswer: "Terrestrial planet",
      explanation: "Earth is a rocky planet made mainly of rock and metal, unlike gas giants such as Jupiter and Saturn."
    },

    {
      id: "eoh-q3",
      question: "Approximately how much of Earth's surface is covered by water?",
      type: "mcq",
      options: [
        "51%",
        "61%",
        "71%",
        "81%"
      ],
      correctAnswer: "71%",
      explanation: "Oceans cover nearly 71% of Earth's surface, giving it the nickname 'Blue Marble'."
    },

    {
      id: "eoh-q4",
      question: "Earth is a perfect sphere in shape.",
      type: "true_false",
      correctAnswer: "false",
      explanation: "Earth is an oblate spheroid—bulging at the equator and flattened at the poles."
    },

    // =========================
    // MOVEMENTS & STRUCTURE
    // =========================

    {
      id: "eoh-q5",
      question: "Which movement of Earth causes day and night?",
      type: "mcq",
      options: [
        "Revolution",
        "Rotation",
        "Precession",
        "Inclination"
      ],
      correctAnswer: "Rotation",
      explanation: "Earth’s rotation on its axis once every 24 hours causes day and night."
    },

    {
      id: "eoh-q6",
      question: "What causes seasons on Earth?",
      type: "mcq",
      options: [
        "Earth’s distance from the Sun",
        "Earth’s elliptical orbit",
        "Earth’s axial tilt",
        "Changes in solar output"
      ],
      correctAnswer: "Earth’s axial tilt",
      explanation: "The 23.5° tilt of Earth’s axis causes varying sunlight angles, producing seasons."
    },

    {
      id: "eoh-q7",
      question: "Which layer of Earth generates the magnetic field?",
      type: "mcq",
      options: [
        "Crust",
        "Mantle",
        "Inner Core",
        "Outer Core"
      ],
      correctAnswer: "Outer Core",
      explanation: "The movement of liquid iron and nickel in the outer core creates Earth’s magnetic field."
    },

    {
      id: "eoh-q8",
      question: "The mantle is the thickest layer of the Earth.",
      type: "true_false",
      correctAnswer: "true",
      explanation: "The mantle makes up about 84% of Earth’s total volume."
    },

    // =========================
    // CONTINENTS, ROCKS & ATMOSPHERE
    // =========================

    {
      id: "eoh-q9",
      question: "Which is the largest ocean on Earth?",
      type: "mcq",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Southern Ocean",
        "Pacific Ocean"
      ],
      correctAnswer: "Pacific Ocean",
      explanation: "The Pacific Ocean is the largest and deepest ocean on Earth."
    },

    {
      id: "eoh-q10",
      question: "Fossils are most commonly found in which type of rock?",
      type: "mcq",
      options: [
        "Igneous",
        "Metamorphic",
        "Sedimentary",
        "Volcanic"
      ],
      correctAnswer: "Sedimentary",
      explanation: "Sedimentary rocks form in layers, which can preserve fossils."
    },

    {
      id: "eoh-q11",
      question: "Which atmospheric layer contains the ozone layer?",
      type: "mcq",
      options: [
        "Troposphere",
        "Stratosphere",
        "Mesosphere",
        "Thermosphere"
      ],
      correctAnswer: "Stratosphere",
      explanation: "The ozone layer in the stratosphere absorbs harmful ultraviolet radiation."
    },

    {
      id: "eoh-q12",
      question: "Nitrogen is the most abundant gas in Earth’s atmosphere.",
      type: "true_false",
      correctAnswer: "true",
      explanation: "Nitrogen makes up about 78% of Earth’s atmosphere."
    },

    // =========================
    // WATER, WEATHER & DISASTERS
    // =========================

    {
      id: "eoh-q13",
      question: "What percentage of Earth’s water is fresh water?",
      type: "mcq",
      options: [
        "1%",
        "3%",
        "10%",
        "25%"
      ],
      correctAnswer: "3%",
      explanation: "Only about 3% of Earth’s water is fresh, and most of it is frozen."
    },

    {
      id: "eoh-q14",
      question: "Weather refers to long-term atmospheric patterns.",
      type: "true_false",
      correctAnswer: "false",
      explanation: "Weather is short-term atmospheric conditions; climate is long-term average weather."
    },

    {
      id: "eoh-q15",
      question: "Which natural disaster is caused by underwater earthquakes?",
      type: "mcq",
      options: [
        "Cyclone",
        "Tornado",
        "Tsunami",
        "Volcanic eruption"
      ],
      correctAnswer: "Tsunami",
      explanation: "Tsunamis are massive waves generated by underwater seismic activity."
    },

    // =========================
    // RESOURCES & HUMAN IMPACT
    // =========================

    {
      id: "eoh-q16",
      question: "Which of the following is a non-renewable resource?",
      type: "mcq",
      options: [
        "Solar energy",
        "Wind energy",
        "Coal",
        "Hydropower"
      ],
      correctAnswer: "Coal",
      explanation: "Coal is a fossil fuel that takes millions of years to form and cannot be replenished quickly."
    },

    {
      id: "eoh-q17",
      question: "The Anthropocene refers to a period dominated by natural geological forces.",
      type: "true_false",
      correctAnswer: "false",
      explanation: "The Anthropocene is marked by significant human impact on Earth’s systems."
    },

    // =========================
    // EXTRA / CONCEPTUAL QUESTIONS
    // =========================

    {
      id: "eoh-q18",
      question: "Why are oceans crucial for regulating Earth’s climate?",
      type: "mcq",
      options: [
        "They block solar radiation",
        "They store and distribute heat",
        "They prevent earthquakes",
        "They increase gravity"
      ],
      correctAnswer: "They store and distribute heat",
      explanation: "Oceans have a high heat capacity, absorbing and redistributing heat globally, which stabilizes climate. (Extra conceptual question)"
    },

    {
      id: "eoh-q19",
      question: "Which force builds mountains while another wears them down?",
      type: "mcq",
      options: [
        "Weathering and erosion",
        "Exogenic and endogenic forces",
        "Gravity and friction",
        "Volcanism and rainfall"
      ],
      correctAnswer: "Exogenic and endogenic forces",
      explanation: "Endogenic forces build landforms (mountains), while exogenic forces erode them over time. (Extra question)"
    },

    {
      id: "eoh-q20",
      question: "What is the main goal of sustainable development?",
      type: "mcq",
      options: [
        "Maximize resource extraction",
        "Stop all industrial growth",
        "Meet present needs without harming future generations",
        "Depend only on non-renewable resources"
      ],
      correctAnswer: "Meet present needs without harming future generations",
      explanation: "Sustainable development balances economic growth with environmental protection. (Extra question)"
    }

  ]
},

// Life on earth
{
  id: "life-on-earth-quiz",
  title: "Life on Earth",
  description: "Test your understanding of how life began, evolved, and diversified on Earth",
  icon: "Leaf",
  color: "from-green-500 to-emerald-600",
  questions: [

    // =========================
    // WHAT IS LIFE
    // =========================

    {
      id: "le-q1",
      question: "Which of the following is NOT a characteristic of living organisms?",
      type: "mcq",
      options: [
        "Metabolism",
        "Reproduction",
        "Response to stimuli",
        "Crystallization"
      ],
      correctAnswer: "Crystallization",
      explanation: "Living organisms show metabolism, growth, reproduction, response, and adaptation. Crystallization is a non-living process."
    },

    {
      id: "le-q2",
      question: "All living organisms are made up of cells.",
      type: "true_false",
      correctAnswer: "true",
      explanation: "Cells are the basic structural and functional units of all known living organisms."
    },

    {
      id: "le-q3",
      question: "Which elements are essential for life and summarized as CHNOPS?",
      type: "mcq",
      options: [
        "Carbon, Hydrogen, Nitrogen, Oxygen, Phosphorus, Sulfur",
        "Calcium, Helium, Neon, Oxygen, Potassium, Sulfur",
        "Carbon, Helium, Nitrogen, Oxygen, Phosphorus, Silicon",
        "Chlorine, Hydrogen, Nitrogen, Oxygen, Phosphorus, Sulfur"
      ],
      correctAnswer: "Carbon, Hydrogen, Nitrogen, Oxygen, Phosphorus, Sulfur",
      explanation: "CHNOPS elements form the basic chemical foundation of life."
    },

    // =========================
    // CONDITIONS FOR LIFE
    // =========================

    {
      id: "le-q4",
      question: "Why is liquid water essential for life?",
      type: "mcq",
      options: [
        "It reflects sunlight",
        "It dissolves nutrients and supports chemical reactions",
        "It blocks radiation",
        "It stores oxygen"
      ],
      correctAnswer: "It dissolves nutrients and supports chemical reactions",
      explanation: "Water is an excellent solvent, allowing biochemical reactions necessary for life."
    },

    {
      id: "le-q5",
      question: "Without the greenhouse effect, Earth’s average temperature would be approximately:",
      type: "mcq",
      options: [
        "15°C",
        "-18°C",
        "0°C",
        "50°C"
      ],
      correctAnswer: "-18°C",
      explanation: "The natural greenhouse effect keeps Earth warm enough for liquid water and life."
    },

    {
      id: "le-q6",
      question: "Which protects Earth from harmful solar wind?",
      type: "mcq",
      options: [
        "Ozone layer",
        "Atmosphere",
        "Magnetic field",
        "Cloud cover"
      ],
      correctAnswer: "Magnetic field",
      explanation: "Earth’s magnetic field deflects charged particles from the Sun."
    },

    // =========================
    // ORIGIN OF LIFE
    // =========================

    {
      id: "le-q7",
      question: "Life on Earth is believed to have originated approximately:",
      type: "mcq",
      options: [
        "1 billion years ago",
        "2.4 billion years ago",
        "3.8–4.1 billion years ago",
        "6 billion years ago"
      ],
      correctAnswer: "3.8–4.1 billion years ago",
      explanation: "Evidence suggests life appeared relatively soon after Earth cooled."
    },

    {
      id: "le-q8",
      question: "The Miller–Urey experiment demonstrated that:",
      type: "mcq",
      options: [
        "Life requires oxygen",
        "Cells formed directly from chemicals",
        "Organic molecules can form naturally",
        "DNA was the first molecule of life"
      ],
      correctAnswer: "Organic molecules can form naturally",
      explanation: "The experiment showed amino acids could form under early Earth-like conditions."
    },

    {
      id: "le-q9",
      question: "RNA is considered a strong candidate for the first self-replicating molecule because it can:",
      type: "mcq",
      options: [
        "Store energy",
        "Act as both information carrier and catalyst",
        "Create membranes",
        "Produce oxygen"
      ],
      correctAnswer: "Act as both information carrier and catalyst",
      explanation: "RNA can store genetic information and catalyze chemical reactions."
    },

    // =========================
    // FIRST LIFE & OXYGEN
    // =========================

    {
      id: "le-q10",
      question: "The earliest life forms on Earth were:",
      type: "mcq",
      options: [
        "Multicellular organisms",
        "Plants",
        "Single-celled prokaryotes",
        "Animals"
      ],
      correctAnswer: "Single-celled prokaryotes",
      explanation: "The first organisms were bacteria-like cells without nuclei."
    },

    {
      id: "le-q11",
      question: "Which organisms caused the Great Oxidation Event?",
      type: "mcq",
      options: [
        "Algae",
        "Plants",
        "Cyanobacteria",
        "Fungi"
      ],
      correctAnswer: "Cyanobacteria",
      explanation: "Cyanobacteria released oxygen through photosynthesis, transforming Earth’s atmosphere."
    },

    {
      id: "le-q12",
      question: "Oxygen was initially toxic to early life forms.",
      type: "true_false",
      correctAnswer: "true",
      explanation: "Early organisms evolved in oxygen-free conditions, so oxygen was deadly to many."
    },

    // =========================
    // EVOLUTION & MULTICELLULAR LIFE
    // =========================

    {
      id: "le-q13",
      question: "Evolution occurs when:",
      type: "mcq",
      options: [
        "Individuals change during their lifetime",
        "Populations change over generations",
        "Organisms consciously adapt",
        "Strong species survive"
      ],
      correctAnswer: "Populations change over generations",
      explanation: "Evolution acts on populations, not individuals."
    },

    {
      id: "le-q14",
      question: "Which process explains how mitochondria originated?",
      type: "mcq",
      options: [
        "Natural selection",
        "Mutation",
        "Endosymbiosis",
        "Photosynthesis"
      ],
      correctAnswer: "Endosymbiosis",
      explanation: "Mitochondria were once free-living bacteria that formed a symbiotic relationship."
    },

    {
      id: "le-q15",
      question: "Multicellular life emerged approximately:",
      type: "mcq",
      options: [
        "600 million years ago",
        "2.1 billion years ago",
        "3.5 billion years ago",
        "66 million years ago"
      ],
      correctAnswer: "2.1 billion years ago",
      explanation: "Multicellularity evolved when cells began cooperating and specializing."
    },

    // =========================
    // PLANTS & ANIMALS
    // =========================

    {
      id: "le-q16",
      question: "Which process produces oxygen and glucose?",
      type: "mcq",
      options: [
        "Respiration",
        "Photosynthesis",
        "Fermentation",
        "Transpiration"
      ],
      correctAnswer: "Photosynthesis",
      explanation: "Photosynthesis converts sunlight, CO₂, and water into glucose and oxygen."
    },

    {
      id: "le-q17",
      question: "The Cambrian Explosion refers to:",
      type: "mcq",
      options: [
        "The extinction of dinosaurs",
        "Rapid diversification of animal life",
        "Origin of plants on land",
        "Formation of oceans"
      ],
      correctAnswer: "Rapid diversification of animal life",
      explanation: "Most major animal groups appeared in a short geological time."
    },

    // =========================
    // ECOSYSTEMS & BIODIVERSITY
    // =========================

    {
      id: "le-q18",
      question: "Which organisms recycle nutrients back into the ecosystem?",
      type: "mcq",
      options: [
        "Producers",
        "Primary consumers",
        "Decomposers",
        "Predators"
      ],
      correctAnswer: "Decomposers",
      explanation: "Bacteria and fungi break down dead matter and return nutrients to the soil."
    },

    {
      id: "le-q19",
      question: "Only about what percentage of energy transfers to the next trophic level?",
      type: "mcq",
      options: [
        "50%",
        "25%",
        "10%",
        "1%"
      ],
      correctAnswer: "10%",
      explanation: "Most energy is lost as heat or used for life processes."
    },

    {
      id: "le-q20",
      question: "Which acronym summarizes major threats to biodiversity?",
      type: "mcq",
      options: [
        "CLIMATE",
        "H.I.P.P.O.",
        "GREEN",
        "EXTINCT"
      ],
      correctAnswer: "H.I.P.P.O.",
      explanation: "Habitat loss, Invasive species, Pollution, Population, Overharvesting."
    },

    // =========================
    // EXTINCTION & HUMANS
    // =========================

    {
      id: "le-q21",
      question: "How many major mass extinctions have occurred in Earth's history?",
      type: "mcq",
      options: [
        "Three",
        "Four",
        "Five",
        "Six"
      ],
      correctAnswer: "Five",
      explanation: "Five major mass extinctions reshaped life on Earth."
    },

    {
      id: "le-q22",
      question: "Humans are considered a 'Super-Keystone Species' because:",
      type: "mcq",
      options: [
        "We are the strongest species",
        "We dominate food chains",
        "We have a disproportionately large environmental impact",
        "We are the most intelligent"
      ],
      correctAnswer: "We have a disproportionately large environmental impact",
      explanation: "Human activity alters ecosystems on a global scale. (Extra conceptual question)"
    },

    {
      id: "le-q23",
      question: "The proposed geological epoch dominated by human activity is called:",
      type: "mcq",
      options: [
        "Holocene",
        "Anthropocene",
        "Cenozoic",
        "Quaternary"
      ],
      correctAnswer: "Anthropocene",
      explanation: "The Anthropocene highlights humanity’s dominant influence on Earth systems."
    }

  ]
},


  {
    id: "current-affairs",
    title: "Current Affairs",
    description: "Test your knowledge of recent national and international events",
    icon: "Newspaper",
    color: "from-blue-500 to-cyan-500",
    questions: [
      {
        id: "ca-q1",
        question: "Which scheme provides health insurance coverage up to ₹5 lakh per family per year?",
        type: "mcq",
        options: ["PM Jan Dhan Yojana", "Ayushman Bharat", "PM Kisan", "Sukanya Samriddhi"],
        correctAnswer: "Ayushman Bharat",
        explanation: "Ayushman Bharat (PM-JAY) provides health insurance coverage of ₹5 lakh per family per year for secondary and tertiary care hospitalization."
      },
      {
        id: "ca-q2",
        question: "The United Nations was founded in 1945.",
        type: "true_false",
        correctAnswer: "true",
        explanation: "The United Nations was established on October 24, 1945, after World War II."
      },
      {
        id: "ca-q3",
        question: "How many member states does the United Nations currently have?",
        type: "mcq",
        options: ["189", "193", "197", "201"],
        correctAnswer: "193",
        explanation: "The United Nations has 193 member states as of 2024."
      },
      {
        id: "ca-q4",
        question: "India is a permanent member of the UN Security Council.",
        type: "true_false",
        correctAnswer: "false",
        explanation: "India is not a permanent member of the UN Security Council. The five permanent members are USA, UK, France, Russia, and China."
      },
      {
        id: "ca-q5",
        question: "Which organization is responsible for international public health?",
        type: "mcq",
        options: ["UNICEF", "WHO", "IMF", "WTO"],
        correctAnswer: "WHO",
        explanation: "The World Health Organization (WHO) is the UN agency responsible for international public health."
      }
    ]
  },
  {
    id: "science-technology",
    title: "Science & Technology",
    description: "Test your understanding of scientific concepts and tech advancements",
    icon: "Atom",
    color: "from-purple-500 to-pink-500",
    questions: [
      {
        id: "st-q1",
        question: "Chandrayaan-3 landed near which region of the Moon?",
        type: "mcq",
        options: ["North Pole", "Equator", "South Pole", "Sea of Tranquility"],
        correctAnswer: "South Pole",
        explanation: "Chandrayaan-3 made history by successfully landing near the Moon's south pole in August 2023."
      },
      {
        id: "st-q2",
        question: "ISRO was established in 1969.",
        type: "true_false",
        correctAnswer: "true",
        explanation: "The Indian Space Research Organisation (ISRO) was established on August 15, 1969."
      },
      {
        id: "st-q3",
        question: "What is the name of India's Mars mission?",
        type: "mcq",
        options: ["Voyager", "Mangalyaan", "Chandrayaan", "Aryabhata"],
        correctAnswer: "Mangalyaan",
        explanation: "Mars Orbiter Mission (Mangalyaan) was India's first interplanetary mission, launched in 2013."
      },
      {
        id: "st-q4",
        question: "Machine Learning is a subset of Artificial Intelligence.",
        type: "true_false",
        correctAnswer: "true",
        explanation: "Machine Learning (ML) is indeed a subset of Artificial Intelligence that enables systems to learn from data."
      },
      {
        id: "st-q5",
        question: "Which country was the first to land near the Moon's south pole?",
        type: "mcq",
        options: ["USA", "China", "India", "Russia"],
        correctAnswer: "India",
        explanation: "India became the first country to land near the Moon's south pole with Chandrayaan-3 in August 2023."
      }
    ]
  },
  {
    id: "history",
    title: "History",
    description: "Test your knowledge of Indian and world history",
    icon: "Landmark",
    color: "from-amber-500 to-orange-500",
    questions: [
      {
        id: "h-q1",
        question: "When was the Indian National Congress founded?",
        type: "mcq",
        options: ["1857", "1885", "1905", "1920"],
        correctAnswer: "1885",
        explanation: "The Indian National Congress was founded in 1885 by A.O. Hume in Bombay."
      },
      {
        id: "h-q2",
        question: "India gained independence on August 15, 1947.",
        type: "true_false",
        correctAnswer: "true",
        explanation: "India achieved independence from British colonial rule on August 15, 1947."
      },
      {
        id: "h-q3",
        question: "Which Indus Valley city had an advanced drainage system?",
        type: "mcq",
        options: ["Delhi", "Pataliputra", "Mohenjo-daro", "Varanasi"],
        correctAnswer: "Mohenjo-daro",
        explanation: "Mohenjo-daro was one of the major cities of the Indus Valley Civilization with sophisticated urban planning and drainage."
      },
      {
        id: "h-q4",
        question: "The Quit India Movement was launched in 1942.",
        type: "true_false",
        correctAnswer: "true",
        explanation: "The Quit India Movement was launched by Mahatma Gandhi on August 8, 1942."
      },
      {
        id: "h-q5",
        question: "Which emperor is known for promoting Buddhism after the Kalinga War?",
        type: "mcq",
        options: ["Chandragupta Maurya", "Ashoka", "Akbar", "Samudragupta"],
        correctAnswer: "Ashoka",
        explanation: "Emperor Ashoka of the Maurya dynasty promoted Buddhism after witnessing the devastation of the Kalinga War."
      }
    ]
  },
  {
    id: "geography",
    title: "Geography",
    description: "Test your knowledge of physical and human geography",
    icon: "Globe",
    color: "from-green-500 to-emerald-500",
    questions: [
      {
        id: "g-q1",
        question: "Which is the longest river in the world?",
        type: "mcq",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correctAnswer: "Nile",
        explanation: "The Nile is the longest river in the world, flowing for approximately 6,650 km through 11 African countries."
      },
      {
        id: "g-q2",
        question: "The Himalayas are fold mountains.",
        type: "true_false",
        correctAnswer: "true",
        explanation: "The Himalayas are young fold mountains formed by the collision of the Indian and Eurasian tectonic plates."
      },
      {
        id: "g-q3",
        question: "Which is the world's deepest lake?",
        type: "mcq",
        options: ["Caspian Sea", "Lake Superior", "Lake Baikal", "Lake Victoria"],
        correctAnswer: "Lake Baikal",
        explanation: "Lake Baikal in Russia is the world's deepest lake with a maximum depth of about 1,642 meters."
      },
      {
        id: "g-q4",
        question: "The Deccan Plateau covers most of peninsular India.",
        type: "true_false",
        correctAnswer: "true",
        explanation: "The Deccan Plateau is a large triangular plateau that covers most of the Indian peninsula."
      },
      {
        id: "g-q5",
        question: "Which river has the largest drainage basin in the world?",
        type: "mcq",
        options: ["Nile", "Mississippi", "Amazon", "Ganges"],
        correctAnswer: "Amazon",
        explanation: "The Amazon River has the largest drainage basin in the world, covering about 7 million square kilometers."
      }
    ]
  },
  {
    id: "indian-polity",
    title: "Indian Polity",
    description: "Test your understanding of Indian Constitution and governance",
    icon: "Scale",
    color: "from-red-500 to-rose-500",
    questions: [
      {
        id: "ip-q1",
        question: "When did the Indian Constitution come into effect?",
        type: "mcq",
        options: ["August 15, 1947", "November 26, 1949", "January 26, 1950", "January 30, 1948"],
        correctAnswer: "January 26, 1950",
        explanation: "The Indian Constitution came into effect on January 26, 1950, which is celebrated as Republic Day."
      },
      {
        id: "ip-q2",
        question: "Dr. B.R. Ambedkar is known as the Father of the Indian Constitution.",
        type: "true_false",
        correctAnswer: "true",
        explanation: "Dr. B.R. Ambedkar was the chairman of the Constitution Drafting Committee and is called the Father of the Constitution."
      },
      {
        id: "ip-q3",
        question: "How many elected members are there in the Lok Sabha?",
        type: "mcq",
        options: ["250", "543", "545", "552"],
        correctAnswer: "543",
        explanation: "The Lok Sabha has 543 elected members representing constituencies across India."
      },
      {
        id: "ip-q4",
        question: "Fundamental Rights are mentioned in Part III of the Constitution.",
        type: "true_false",
        correctAnswer: "true",
        explanation: "Fundamental Rights are guaranteed in Part III of the Indian Constitution (Articles 12-35)."
      },
      {
        id: "ip-q5",
        question: "Who is the constitutional head of a state in India?",
        type: "mcq",
        options: ["Chief Minister", "Governor", "President", "Speaker"],
        correctAnswer: "Governor",
        explanation: "The Governor is the constitutional head of a state, appointed by the President of India."
      }
    ]
  },
  {
    id: "environment",
    title: "Environment",
    description: "Test your knowledge of ecology and environmental conservation",
    icon: "TreePine",
    color: "from-teal-500 to-green-500",
    questions: [
      {
        id: "e-q1",
        question: "What is India's target year for achieving net-zero emissions?",
        type: "mcq",
        options: ["2050", "2060", "2070", "2080"],
        correctAnswer: "2070",
        explanation: "India committed to achieving net-zero carbon emissions by 2070 at COP26 in Glasgow."
      },
      {
        id: "e-q2",
        question: "Project Tiger was launched in 1973.",
        type: "true_false",
        correctAnswer: "true",
        explanation: "Project Tiger was launched on April 1, 1973, to protect Bengal tigers and their habitats."
      },
      {
        id: "e-q3",
        question: "Which of these is a biodiversity hotspot in India?",
        type: "mcq",
        options: ["Thar Desert", "Indo-Gangetic Plains", "Western Ghats", "Central Highlands"],
        correctAnswer: "Western Ghats",
        explanation: "The Western Ghats and Eastern Himalayas are recognized biodiversity hotspots in India."
      },
      {
        id: "e-q4",
        question: "The Paris Agreement aims to limit global warming to 1.5°C above pre-industrial levels.",
        type: "true_false",
        correctAnswer: "true",
        explanation: "The Paris Agreement (2015) aims to limit global temperature rise to 1.5°C above pre-industrial levels."
      },
      {
        id: "e-q5",
        question: "How many national parks does India have?",
        type: "mcq",
        options: ["86", "96", "106", "116"],
        correctAnswer: "106",
        explanation: "India has 106 national parks that protect wildlife and natural habitats."
      }
    ]
  },
  {
    id: "sports",
    title: "Sports",
    description: "Test your knowledge of sports achievements and tournaments",
    icon: "Medal",
    color: "from-yellow-500 to-amber-500",
    questions: [
      {
        id: "sp-q1",
        question: "In which year did India first win the Cricket World Cup?",
        type: "mcq",
        options: ["1975", "1983", "2007", "2011"],
        correctAnswer: "1983",
        explanation: "India won the Cricket World Cup for the first time in 1983 under the captaincy of Kapil Dev."
      },
      {
        id: "sp-q2",
        question: "Neeraj Chopra won India's first Olympic gold in athletics.",
        type: "true_false",
        correctAnswer: "true",
        explanation: "Neeraj Chopra won India's first athletics gold medal in the javelin throw at the 2020 Tokyo Olympics."
      },
      {
        id: "sp-q3",
        question: "Who won India's first individual Olympic gold medal?",
        type: "mcq",
        options: ["Sachin Tendulkar", "P.T. Usha", "Abhinav Bindra", "Mary Kom"],
        correctAnswer: "Abhinav Bindra",
        explanation: "Abhinav Bindra won India's first individual Olympic gold medal in shooting at the 2008 Beijing Olympics."
      },
      {
        id: "sp-q4",
        question: "The first Cricket World Cup was held in Australia.",
        type: "true_false",
        correctAnswer: "false",
        explanation: "The first Cricket World Cup was held in England in 1975, not Australia."
      },
      {
        id: "sp-q5",
        question: "Which city hosted the 2021 Summer Olympics?",
        type: "mcq",
        options: ["Paris", "Tokyo", "London", "Rio de Janeiro"],
        correctAnswer: "Tokyo",
        explanation: "The 2020 Summer Olympics (held in 2021 due to COVID-19) were hosted by Tokyo, Japan."
      }
    ]
  },
  {
    id: "space-astronomy",
    title: "Space & Astronomy",
    description: "Test your knowledge of space exploration and celestial bodies",
    icon: "Rocket",
    color: "from-indigo-500 to-violet-500",
    questions: [
      {
        id: "sa-q1",
        question: "What is the largest planet in our Solar System?",
        type: "mcq",
        options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
        correctAnswer: "Jupiter",
        explanation: "Jupiter is the largest planet in our Solar System, with a mass more than twice that of all other planets combined."
      },
      {
        id: "sa-q2",
        question: "Pluto is currently classified as a dwarf planet.",
        type: "true_false",
        correctAnswer: "true",
        explanation: "Pluto was reclassified as a dwarf planet by the International Astronomical Union in 2006."
      },
      {
        id: "sa-q3",
        question: "What was the name of India's first satellite?",
        type: "mcq",
        options: ["Bhaskara", "Rohini", "Aryabhata", "INSAT"],
        correctAnswer: "Aryabhata",
        explanation: "Aryabhata, named after the ancient Indian mathematician, was India's first satellite launched in 1975."
      },
      {
        id: "sa-q4",
        question: "The Sun contains about 99.86% of the Solar System's mass.",
        type: "true_false",
        correctAnswer: "true",
        explanation: "The Sun is so massive that it contains approximately 99.86% of the total mass of the Solar System."
      },
      {
        id: "sa-q5",
        question: "Which planet is known as the 'Red Planet'?",
        type: "mcq",
        options: ["Venus", "Mars", "Mercury", "Jupiter"],
        correctAnswer: "Mars",
        explanation: "Mars is called the 'Red Planet' due to its reddish appearance caused by iron oxide on its surface."
      }
    ]
  },
  {
    id: "economy",
    title: "Economy",
    description: "Test your understanding of economic concepts and Indian economy",
    icon: "TrendingUp",
    color: "from-emerald-500 to-cyan-500",
    questions: [
      {
        id: "ec-q1",
        question: "When was the Reserve Bank of India established?",
        type: "mcq",
        options: ["1925", "1935", "1947", "1950"],
        correctAnswer: "1935",
        explanation: "The Reserve Bank of India (RBI) was established on April 1, 1935."
      },
      {
        id: "ec-q2",
        question: "India's economic liberalization reforms were introduced in 1991.",
        type: "true_false",
        correctAnswer: "true",
        explanation: "The landmark economic reforms of 1991, under PM Narasimha Rao and FM Manmohan Singh, liberalized the Indian economy."
      },
      {
        id: "ec-q3",
        question: "Which sector contributes the most to India's GDP?",
        type: "mcq",
        options: ["Agriculture", "Industry", "Services", "Mining"],
        correctAnswer: "Services",
        explanation: "The services sector contributes over 50% to India's GDP, making it the largest contributor."
      },
      {
        id: "ec-q4",
        question: "The repo rate is set by the Reserve Bank of India.",
        type: "true_false",
        correctAnswer: "true",
        explanation: "The RBI sets the repo rate as part of its monetary policy to control money supply and inflation."
      },
      {
        id: "ec-q5",
        question: "Which is the largest public sector bank in India?",
        type: "mcq",
        options: ["Punjab National Bank", "Bank of Baroda", "State Bank of India", "Canara Bank"],
        correctAnswer: "State Bank of India",
        explanation: "State Bank of India (SBI) is the largest public sector bank in India by assets and market capitalization."
      }
    ]
  },
  {
    id: "culture-heritage",
    title: "Culture & Heritage",
    description: "Test your knowledge of India's cultural heritage",
    icon: "Church",
    color: "from-pink-500 to-rose-500",
    questions: [
      {
        id: "ch-q1",
        question: "How many UNESCO World Heritage Sites does India have?",
        type: "mcq",
        options: ["32", "37", "42", "47"],
        correctAnswer: "42",
        explanation: "India has 42 UNESCO World Heritage Sites, including cultural, natural, and mixed sites."
      },
      {
        id: "ch-q2",
        question: "The Taj Mahal was built by Shah Jahan.",
        type: "true_false",
        correctAnswer: "true",
        explanation: "The Taj Mahal was commissioned in 1632 by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal."
      },
      {
        id: "ch-q3",
        question: "Which classical dance form originated in Tamil Nadu?",
        type: "mcq",
        options: ["Kathak", "Odissi", "Bharatanatyam", "Kathakali"],
        correctAnswer: "Bharatanatyam",
        explanation: "Bharatanatyam is a classical dance form that originated in the temples of Tamil Nadu."
      },
      {
        id: "ch-q4",
        question: "India has 8 classical dance forms recognized by Sangeet Natak Akademi.",
        type: "true_false",
        correctAnswer: "true",
        explanation: "Sangeet Natak Akademi recognizes 8 classical dance forms: Bharatanatyam, Kathak, Odissi, Kathakali, Kuchipudi, Manipuri, Mohiniyattam, and Sattriya."
      },
      {
        id: "ch-q5",
        question: "The Ajanta Caves are famous for which type of art?",
        type: "mcq",
        options: ["Mughal paintings", "Buddhist rock-cut paintings", "Hindu temple sculptures", "Jain miniatures"],
        correctAnswer: "Buddhist rock-cut paintings",
        explanation: "The Ajanta Caves are renowned for their Buddhist rock-cut paintings dating from the 2nd century BCE."
      }
    ]
  }
];
