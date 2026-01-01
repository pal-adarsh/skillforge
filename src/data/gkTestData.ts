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

// Earth, Oceans & Environment
{
  id: "earth-oceans-environment-quiz",
  title: "Earth, Oceans & Environment",
  description: "Assess your understanding of Earth’s water systems, oceans, climate, and environmental balance",
  icon: "GlobeAmericas",
  color: "from-cyan-500 to-blue-700",
  questions: [

    // =========================
    // WATER ON EARTH
    // =========================

    {
      id: "eoe-q1",
      question: "What percentage of Earth’s surface is covered by water?",
      type: "mcq",
      options: ["51%", "61%", "71%", "81%"],
      correctAnswer: "71%",
      explanation: "Water covers about 71% of Earth’s surface, giving it the nickname ‘Blue Marble’."
    },

    {
      id: "eoe-q2",
      question: "What percentage of Earth’s total water is freshwater?",
      type: "mcq",
      options: ["1%", "3%", "10%", "25%"],
      correctAnswer: "3%",
      explanation: "Only about 3% of Earth’s water is freshwater; most of it is frozen in glaciers."
    },

    {
      id: "eoe-q3",
      question: "Most of Earth’s freshwater is directly available for human use.",
      type: "true_false",
      correctAnswer: "false",
      explanation: "Over two-thirds of freshwater is locked in glaciers and ice caps."
    },

    // =========================
    // OCEANS & MARINE LIFE
    // =========================

    {
      id: "eoe-q4",
      question: "Which is the largest and deepest ocean on Earth?",
      type: "mcq",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Southern Ocean"],
      correctAnswer: "Pacific Ocean",
      explanation: "The Pacific Ocean covers more area than all Earth’s land combined."
    },

    {
      id: "eoe-q5",
      question: "Oceans help regulate Earth’s climate primarily by:",
      type: "mcq",
      options: [
        "Producing clouds",
        "Absorbing and distributing heat",
        "Blocking sunlight",
        "Creating tides"
      ],
      correctAnswer: "Absorbing and distributing heat",
      explanation: "Oceans absorb heat near the equator and redistribute it toward the poles via currents."
    },

    {
      id: "eoe-q6",
      question: "Which organisms produce about half of Earth’s oxygen?",
      type: "mcq",
      options: ["Coral reefs", "Seaweed", "Phytoplankton", "Mangroves"],
      correctAnswer: "Phytoplankton",
      explanation: "Tiny phytoplankton form the base of marine food webs and generate ~50% of Earth’s oxygen."
    },

    // =========================
    // OCEAN MOVEMENTS & WATER CYCLE
    // =========================

    {
      id: "eoe-q7",
      question: "Ocean tides are mainly caused by the gravitational pull of the:",
      type: "mcq",
      options: ["Sun only", "Moon only", "Moon and Sun", "Earth’s core"],
      correctAnswer: "Moon and Sun",
      explanation: "The Moon has the strongest influence, with the Sun contributing as well."
    },

    {
      id: "eoe-q8",
      question: "The Global Conveyor Belt refers to:",
      type: "mcq",
      options: [
        "A system of surface winds",
        "A deep-ocean circulation system",
        "Tidal movements near the coast",
        "Seasonal monsoon winds"
      ],
      correctAnswer: "A deep-ocean circulation system",
      explanation: "It is a global system of currents that circulates water and nutrients over ~1,000 years."
    },

    {
      id: "eoe-q9",
      question: "Which process describes water vapor being released from plant leaves?",
      type: "mcq",
      options: ["Evaporation", "Condensation", "Transpiration", "Precipitation"],
      correctAnswer: "Transpiration",
      explanation: "Transpiration is the evaporation of water from plant leaves."
    },

    // =========================
    // ATMOSPHERE & CLIMATE
    // =========================

    {
      id: "eoe-q10",
      question: "Which gas makes up about 78% of Earth’s atmosphere?",
      type: "mcq",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correctAnswer: "Nitrogen",
      explanation: "Nitrogen is the most abundant gas in Earth’s atmosphere."
    },

    {
      id: "eoe-q11",
      question: "The ozone layer is located in which atmospheric layer?",
      type: "mcq",
      options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
      correctAnswer: "Stratosphere",
      explanation: "The ozone layer in the stratosphere blocks harmful ultraviolet radiation."
    },

    {
      id: "eoe-q12",
      question: "Weather occurs mainly in the stratosphere.",
      type: "true_false",
      correctAnswer: "false",
      explanation: "Weather phenomena occur in the lowest layer, the troposphere."
    },

    // =========================
    // NATURAL DISASTERS & ECOSYSTEM BALANCE
    // =========================

    {
      id: "eoe-q13",
      question: "Which natural disaster is triggered by underwater earthquakes?",
      type: "mcq",
      options: ["Cyclone", "Tsunami", "Volcano", "Tornado"],
      correctAnswer: "Tsunami",
      explanation: "Tsunamis are massive waves caused by seismic activity under the ocean."
    },

    {
      id: "eoe-q14",
      question: "A trophic cascade occurs when:",
      type: "mcq",
      options: [
        "Rainfall increases suddenly",
        "A keystone species is removed",
        "New species evolve rapidly",
        "Glaciers melt"
      ],
      correctAnswer: "A keystone species is removed",
      explanation: "Removing a key species disrupts the entire food web, collapsing ecosystem balance."
    },

    // =========================
    // POLLUTION & CONSERVATION
    // =========================

    {
      id: "eoe-q15",
      question: "Microplastics are especially dangerous because they:",
      type: "mcq",
      options: [
        "Evaporate quickly",
        "Biodegrade in water",
        "Enter the food chain",
        "Increase soil fertility"
      ],
      correctAnswer: "Enter the food chain",
      explanation: "Microplastics are consumed by organisms and accumulate up the food chain."
    },

    {
      id: "eoe-q16",
      question: "Which approach focuses on protecting ecosystems for future generations?",
      type: "mcq",
      options: [
        "Industrialization",
        "Urbanization",
        "Conservation",
        "Overconsumption"
      ],
      correctAnswer: "Conservation",
      explanation: "Conservation aims to preserve biodiversity and natural resources."
    },

    // =========================
    // HUMAN IMPACT & FUTURE
    // =========================

    {
      id: "eoe-q17",
      question: "The term 'Anthropocene' refers to:",
      type: "mcq",
      options: [
        "The age of ice",
        "The age of oceans",
        "The age of human impact",
        "The age of volcanoes"
      ],
      correctAnswer: "The age of human impact",
      explanation: "The Anthropocene highlights humanity’s dominant influence on Earth systems."
    },

    {
      id: "eoe-q18",
      question: "Which solution focuses on eliminating waste by reuse and recycling?",
      type: "mcq",
      options: [
        "Linear economy",
        "Carbon economy",
        "Circular economy",
        "Digital economy"
      ],
      correctAnswer: "Circular economy",
      explanation: "A circular economy reduces waste by reusing and recycling materials. (Extra conceptual question)"
    },

    {
      id: "eoe-q19",
      question: "Renewable energy sources include:",
      type: "mcq",
      options: [
        "Coal and oil",
        "Nuclear and gas",
        "Solar and wind",
        "Petroleum and diesel"
      ],
      correctAnswer: "Solar and wind",
      explanation: "Renewable energy sources replenish naturally and reduce pollution."
    },

    {
      id: "eoe-q20",
      question: "Individual actions like conserving water and reducing plastic use can make a difference.",
      type: "true_false",
      correctAnswer: "true",
      explanation: "Collective individual actions drive market change and environmental protection."
    },

    // Advanced section questions
    {
      id: "eoe-aq1",
      question: "Why are oceans considered the planet’s largest carbon sink?",
      type: "mcq",
      options: [
        "They store carbon only in sediments",
        "They absorb CO₂ through physical and biological processes",
        "Carbon settles permanently on the ocean floor",
        "Marine animals convert CO₂ directly into oxygen"
      ],
      correctAnswer: "They absorb CO₂ through physical and biological processes",
      explanation: "Oceans absorb carbon dioxide through direct dissolution (physical pump) and via photosynthesis by phytoplankton (biological pump). This helps regulate atmospheric CO₂ and climate."
    },

    {
      id: "eoe-aq2",
      question: "Ocean acidification primarily occurs due to:",
      type: "mcq",
      options: [
        "Increase in ocean temperature",
        "Mixing of freshwater with seawater",
        "Absorption of excess atmospheric CO₂",
        "Underwater volcanic eruptions"
      ],
      correctAnswer: "Absorption of excess atmospheric CO₂",
      explanation: "When CO₂ dissolves in seawater, it forms carbonic acid, lowering pH. This harms corals and shell-forming organisms by reducing calcium carbonate availability."
    },

    {
      id: "eoe-aq3",
      question: "Coral bleaching happens mainly because:",
      type: "mcq",
      options: [
        "Pollution blocks sunlight",
        "Corals lose symbiotic algae due to heat stress",
        "Oceans become too salty",
        "Predators consume coral polyps"
      ],
      correctAnswer: "Corals lose symbiotic algae due to heat stress",
      explanation: "Rising ocean temperatures stress corals, causing them to expel zooxanthellae algae, which provide food and color. Without them, corals starve and turn white."
    },

    // =========================
    // OCEAN CIRCULATION & CLIMATE
    // =========================

    {
      id: "eoe-aq4",
      question: "The Global Conveyor Belt is primarily driven by differences in:",
      type: "mcq",
      options: [
        "Wind speed and tides",
        "Salinity and temperature",
        "Moon–Sun gravitational forces",
        "Ocean depth and pressure"
      ],
      correctAnswer: "Salinity and temperature",
      explanation: "This thermohaline circulation depends on density differences caused by temperature (thermo) and salinity (haline), driving deep-ocean currents globally."
    },

    {
      id: "eoe-aq5",
      question: "If the Global Conveyor Belt were to slow significantly, what would be a major consequence?",
      type: "mcq",
      options: [
        "Increase in earthquakes",
        "Extreme cooling in Europe",
        "Disappearance of tides",
        "Stronger monsoons worldwide"
      ],
      correctAnswer: "Extreme cooling in Europe",
      explanation: "Warm currents like the Gulf Stream moderate Europe’s climate. Slowing circulation could drastically cool the region, despite global warming."
    },

    {
      id: "eoe-aq6",
      question: "El Niño events reduce fish populations along the west coast of South America mainly because:",
      type: "mcq",
      options: [
        "Ocean temperatures drop suddenly",
        "Upwelling of nutrient-rich water weakens",
        "Coral reefs expand rapidly",
        "Salinity increases sharply"
      ],
      correctAnswer: "Upwelling of nutrient-rich water weakens",
      explanation: "El Niño suppresses cold, nutrient-rich upwelling, reducing plankton growth and collapsing fish food chains."
    },

    // =========================
    // ATMOSPHERE & CLIMATE CHANGE
    // =========================

    {
      id: "eoe-aq7",
      question: "Which greenhouse gas is most effective at trapping heat per molecule?",
      type: "mcq",
      options: [
        "Carbon Dioxide (CO₂)",
        "Methane (CH₄)",
        "Nitrous Oxide (N₂O)",
        "Water Vapor"
      ],
      correctAnswer: "Methane (CH₄)",
      explanation: "Methane traps ~25 times more heat than CO₂ over a 100-year period, though it remains in the atmosphere for a shorter time."
    },

    {
      id: "eoe-aq8",
      question: "Why are polar regions warming faster than the rest of the planet?",
      type: "mcq",
      options: [
        "More volcanic activity",
        "Higher greenhouse gas concentration",
        "Ice–albedo feedback",
        "Stronger ocean currents"
      ],
      correctAnswer: "Ice–albedo feedback",
      explanation: "As ice melts, darker surfaces absorb more heat, causing further warming and accelerating ice loss—a positive feedback loop."
    },

    {
      id: "eoe-aq9",
      question: "Climate models are considered reliable because they:",
      type: "mcq",
      options: [
        "Predict exact future temperatures",
        "Ignore natural climate factors",
        "Successfully reproduce past climate trends",
        "Use assumptions instead of physics"
      ],
      correctAnswer: "Successfully reproduce past climate trends",
      explanation: "Models are validated using hindcasting—running them backward to see if they match historical climate data."
    },

    // =========================
    // ECOSYSTEMS & ENVIRONMENTAL SCIENCE
    // =========================

    {
      id: "eoe-aq10",
      question: "Why is biodiversity critical for ecosystem resilience?",
      type: "mcq",
      options: [
        "It increases population growth",
        "It allows ecosystems to adapt to disturbances",
        "It reduces energy transfer losses",
        "It eliminates invasive species"
      ],
      correctAnswer: "It allows ecosystems to adapt to disturbances",
      explanation: "High biodiversity provides functional redundancy—if one species fails, others can fulfill similar roles, stabilizing ecosystems."
    },

    {
      id: "eoe-aq11",
      question: "Which best explains why wetlands are called 'nature’s kidneys'?",
      type: "mcq",
      options: [
        "They produce oxygen",
        "They regulate temperature",
        "They filter pollutants and excess nutrients",
        "They store groundwater permanently"
      ],
      correctAnswer: "They filter pollutants and excess nutrients",
      explanation: "Wetlands trap sediments, absorb toxins, and remove excess nutrients, improving water quality naturally."
    },

    {
      id: "eoe-aq12",
      question: "The concept of an 'ecological footprint' refers to:",
      type: "mcq",
      options: [
        "Total land area of a country",
        "Amount of pollution produced",
        "Resources required to support a lifestyle",
        "Carbon stored in ecosystems"
      ],
      correctAnswer: "Resources required to support a lifestyle",
      explanation: "It measures how much land and water area is needed to produce resources and absorb waste generated by humans."
    },

    // =========================
    // TRUE / FALSE (ADVANCED)
    // =========================

    {
      id: "eoe-aq13",
      question: "Ocean warming reduces the ocean’s ability to absorb carbon dioxide.",
      type: "true_false",
      correctAnswer: "true",
      explanation: "Warm water holds less dissolved gas, so as oceans heat up, their CO₂ absorption capacity decreases."
    },

    {
      id: "eoe-aq14",
      question: "All climate change observed today is entirely natural.",
      type: "true_false",
      correctAnswer: "false",
      explanation: "While natural factors exist, the current rapid warming trend is primarily driven by human greenhouse gas emissions."
    }

  ]
},


// Pre human evolution
{
  id: "pre-human-evolution-quiz",
  title: "Pre-Human Evolution",
  description: "Questions covering evolutionary principles, transitions, mass extinctions, and early ancestors",
  icon: "Footprints",
  color: "from-amber-500 to-orange-600",
  questions: [

    // =================================================
    // 🟢 BASIC LEVEL (FOUNDATION)
    // =================================================

    {
      id: "phe-q1",
      question: "Evolution refers to:",
      type: "mcq",
      options: [
        "Sudden change in individuals",
        "Gradual change in populations over generations",
        "Development of intelligence only",
        "Growth of a single organism"
      ],
      correctAnswer: "Gradual change in populations over generations",
      explanation: "Evolution acts on populations across generations through inherited traits, not on individuals."
    },

    {
      id: "phe-q2",
      question: "Natural selection was independently proposed by:",
      type: "mcq",
      options: [
        "Charles Darwin and Newton",
        "Darwin and Alfred Russel Wallace",
        "Gregor Mendel and Darwin",
        "Lamarck and Wallace"
      ],
      correctAnswer: "Darwin and Alfred Russel Wallace",
      explanation: "Both scientists independently arrived at the idea of natural selection in the 19th century."
    },

    {
      id: "phe-q3",
      question: "Which trait is an example of a structural adaptation?",
      type: "mcq",
      options: [
        "Migration of birds",
        "Producing venom",
        "Sharp teeth in carnivores",
        "Hibernation"
      ],
      correctAnswer: "Sharp teeth in carnivores",
      explanation: "Structural adaptations involve physical body features."
    },

    {
      id: "phe-q4",
      question: "Evolution has a fixed goal toward humans.",
      type: "true_false",
      correctAnswer: "false",
      explanation: "Evolution has no direction or goal; humans are not its endpoint."
    },

    // =================================================
    // 🟡 INTERMEDIATE LEVEL (CONCEPTUAL LINKS)
    // =================================================

    {
      id: "phe-q5",
      question: "Which group of fish gave rise to the first land vertebrates?",
      type: "mcq",
      options: [
        "Jawless fish",
        "Ray-finned fish",
        "Lobe-finned fish",
        "Cartilaginous fish"
      ],
      correctAnswer: "Lobe-finned fish",
      explanation: "Their muscular fins with internal bones evolved into limbs."
    },

    {
      id: "phe-q6",
      question: "Why were amphibians not fully adapted to land?",
      type: "mcq",
      options: [
        "They lacked lungs",
        "They could not walk",
        "They needed water for reproduction",
        "They were cold-blooded"
      ],
      correctAnswer: "They needed water for reproduction",
      explanation: "Amphibians lay soft eggs that must remain moist."
    },

    {
      id: "phe-q7",
      question: "Which innovation allowed reptiles to reproduce away from water?",
      type: "mcq",
      options: [
        "Scales",
        "Claws",
        "Amniotic egg",
        "Warm-bloodedness"
      ],
      correctAnswer: "Amniotic egg",
      explanation: "The amniotic egg contains protective membranes and nutrients, enabling land reproduction."
    },

    {
      id: "phe-q8",
      question: "Dinosaurs were divided into Saurischian and Ornithischian based on:",
      type: "mcq",
      options: [
        "Diet",
        "Size",
        "Hip structure",
        "Habitat"
      ],
      correctAnswer: "Hip structure",
      explanation: "The division is based on the orientation of hip bones."
    },

    {
      id: "phe-q9",
      question: "Modern birds evolved from which dinosaur group?",
      type: "mcq",
      options: [
        "Sauropods",
        "Ornithischians",
        "Theropods",
        "Ankylosaurs"
      ],
      correctAnswer: "Theropods",
      explanation: "Small, bipedal theropod dinosaurs gave rise to birds."
    },

    // =================================================
    // 🔵 INTERMEDIATE → ADVANCED
    // =================================================

    {
      id: "phe-q10",
      question: "Which mass extinction allowed mammals to become dominant?",
      type: "mcq",
      options: [
        "Permian–Triassic",
        "Ordovician–Silurian",
        "Triassic–Jurassic",
        "Cretaceous–Paleogene"
      ],
      correctAnswer: "Cretaceous–Paleogene",
      explanation: "The asteroid impact 66 MYA eliminated dinosaurs, opening niches for mammals."
    },

    {
      id: "phe-q11",
      question: "Why were small mammals more likely to survive the dinosaur extinction?",
      type: "mcq",
      options: [
        "They could fly",
        "They needed less food",
        "They were cold-blooded",
        "They lived in oceans"
      ],
      correctAnswer: "They needed less food",
      explanation: "Small size and omnivorous diets allowed survival during food shortages."
    },

    {
      id: "phe-q12",
      question: "Which trait evolved FIRST in the human lineage?",
      type: "mcq",
      options: [
        "Language",
        "Large brain",
        "Tool-making",
        "Bipedalism"
      ],
      correctAnswer: "Bipedalism",
      explanation: "Walking upright appeared before brain expansion and tool use."
    },

    // =================================================
    // 🔴 ADVANCED LEVEL (COMPETITIVE / ANALYTICAL)
    // =================================================

    {
      id: "phe-q13",
      question: "Tiktaalik is considered a transitional fossil because it:",
      type: "mcq",
      options: [
        "Is half fish and half reptile",
        "Lived during dinosaur age",
        "Has both fish and amphibian traits",
        "Was the first mammal"
      ],
      correctAnswer: "Has both fish and amphibian traits",
      explanation: "Tiktaalik had fins with bones, a neck, and lungs—bridging water and land vertebrates."
    },

    {
      id: "phe-q14",
      question: "Which extinction event is known as the 'Great Dying'?",
      type: "mcq",
      options: [
        "Ordovician–Silurian",
        "Permian–Triassic",
        "Triassic–Jurassic",
        "Cretaceous–Paleogene"
      ],
      correctAnswer: "Permian–Triassic",
      explanation: "It wiped out ~96% of marine species, the worst extinction in Earth’s history."
    },

    {
      id: "phe-q15",
      question: "Why is Archaeopteryx important in evolution?",
      type: "mcq",
      options: [
        "First mammal",
        "First reptile",
        "Link between dinosaurs and birds",
        "Ancestor of amphibians"
      ],
      correctAnswer: "Link between dinosaurs and birds",
      explanation: "It had feathers and wings but also teeth and a long bony tail."
    },

    {
      id: "phe-q16",
      question: "Which dating method is best for fossils millions of years old?",
      type: "mcq",
      options: [
        "Carbon-14 dating",
        "Potassium-Argon dating",
        "DNA sequencing",
        "Relative dating only"
      ],
      correctAnswer: "Potassium-Argon dating",
      explanation: "Carbon-14 works only up to ~50,000 years; K–Ar dates deep geological time."
    },

    {
      id: "phe-q17",
      question: "Molecular clocks estimate evolutionary divergence by analyzing:",
      type: "mcq",
      options: [
        "Bone thickness",
        "Mutation rates in DNA",
        "Fossil depth",
        "Climate data"
      ],
      correctAnswer: "Mutation rates in DNA",
      explanation: "DNA accumulates mutations at roughly constant rates over time."
    },

    {
      id: "phe-q18",
      question: "Humans and chimpanzees split from a common ancestor approximately:",
      type: "mcq",
      options: [
        "1 million years ago",
        "3 million years ago",
        "6–7 million years ago",
        "15 million years ago"
      ],
      correctAnswer: "6–7 million years ago",
      explanation: "Genetic and fossil evidence place the split around 6–7 MYA."
    },

    {
      id: "phe-q19",
      question: "The Cambrian Explosion is important for human evolution because it:",
      type: "mcq",
      options: [
        "Created mammals",
        "Produced dinosaurs",
        "Introduced chordates (backbone ancestors)",
        "Caused mass extinction"
      ],
      correctAnswer: "Introduced chordates (backbone ancestors)",
      explanation: "Chordates like Pikaia gave rise to vertebrates, including humans."
    },

    {
      id: "phe-q20",
      question: "Evolution is best described as:",
      type: "mcq",
      options: [
        "Random and purposeless",
        "Completely predictable",
        "Random mutation filtered by non-random selection",
        "Driven by need"
      ],
      correctAnswer: "Random mutation filtered by non-random selection",
      explanation: "Mutations are random, but natural selection is non-random."
    }

  ]
},


// Early Humans & Prehistoric Era 
{
  id: "early-humans-quiz",
  title: "Early Humans & Prehistoric Era",
  description: "From early hominins to the rise of prehistoric culture and civilization",
  icon: "Footprints",
  color: "from-orange-500 to-amber-700",
  questions: [

    // =================================================
    // 🟢 BASIC LEVEL (FOUNDATION)
    // =================================================

    {
      id: "eh-q1",
      question: "Early humans are scientifically known as:",
      type: "mcq",
      options: ["Primates", "Hominins", "Anthropoids", "Mammals"],
      correctAnswer: "Hominins",
      explanation: "Hominins include modern humans and all extinct species closely related to us."
    },

    {
      id: "eh-q2",
      question: "Which trait most clearly separates early humans from other animals?",
      type: "mcq",
      options: ["Sharp teeth", "Bipedalism", "Body hair", "Tail"],
      correctAnswer: "Bipedalism",
      explanation: "Walking upright on two legs freed the hands and shaped human evolution."
    },

    {
      id: "eh-q3",
      question: "Humans share approximately how much DNA with chimpanzees?",
      type: "mcq",
      options: ["85%", "90%", "98.8%", "75%"],
      correctAnswer: "98.8%",
      explanation: "Chimpanzees are our closest living relatives genetically."
    },

    {
      id: "eh-q4",
      question: "Early humans appeared suddenly on Earth.",
      type: "true_false",
      correctAnswer: "false",
      explanation: "Humans evolved gradually over millions of years."
    },

    {
      id: "eh-q5",
      question: "Which evolutionary change happened first?",
      type: "mcq",
      options: ["Language", "Tool-making", "Bipedalism", "Large brain"],
      correctAnswer: "Bipedalism",
      explanation: "Upright walking appeared before brain enlargement and tools."
    },

    // =================================================
    // 🟡 INTERMEDIATE LEVEL (UNDERSTANDING)
    // =================================================

    {
      id: "eh-q6",
      question: "Which species is associated with the fossil 'Lucy'?",
      type: "mcq",
      options: ["Homo habilis", "Homo erectus", "Australopithecus", "Homo sapiens"],
      correctAnswer: "Australopithecus",
      explanation: "Lucy was an Australopithecus afarensis fossil found in Africa."
    },

    {
      id: "eh-q7",
      question: "Why is Homo habilis called the 'Handy Man'?",
      type: "mcq",
      options: [
        "Used fire",
        "Made stone tools",
        "Built houses",
        "Painted caves"
      ],
      correctAnswer: "Made stone tools",
      explanation: "Homo habilis was the first species to extensively use stone tools."
    },

    {
      id: "eh-q8",
      question: "Which human ancestor first migrated out of Africa?",
      type: "mcq",
      options: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"],
      correctAnswer: "Homo erectus",
      explanation: "Homo erectus spread from Africa into Asia and Europe."
    },

    {
      id: "eh-q9",
      question: "The Stone Age is divided into how many phases?",
      type: "mcq",
      options: ["Two", "Three", "Four", "Five"],
      correctAnswer: "Three",
      explanation: "Paleolithic, Mesolithic, and Neolithic."
    },

    {
      id: "eh-q10",
      question: "Which age is known as the age of hunter-gatherers?",
      type: "mcq",
      options: ["Neolithic", "Mesolithic", "Paleolithic", "Bronze Age"],
      correctAnswer: "Paleolithic",
      explanation: "Paleolithic humans hunted animals and gathered wild plants."
    },

    {
      id: "eh-q11",
      question: "Which innovation marked the Neolithic Revolution?",
      type: "mcq",
      options: ["Fire", "Tool-making", "Agriculture", "Cave art"],
      correctAnswer: "Agriculture",
      explanation: "Farming allowed permanent settlements and surplus food."
    },

    {
      id: "eh-q12",
      question: "Microliths were characteristic of which age?",
      type: "mcq",
      options: ["Paleolithic", "Mesolithic", "Neolithic", "Bronze Age"],
      correctAnswer: "Mesolithic",
      explanation: "Microliths were small stone tools used in composite weapons."
    },

    {
      id: "eh-q13",
      question: "Which animal was first domesticated by humans?",
      type: "mcq",
      options: ["Cow", "Goat", "Dog", "Horse"],
      correctAnswer: "Dog",
      explanation: "Dogs helped humans hunt and protect camps."
    },

    {
      id: "eh-q14",
      question: "Stone tools were primarily made using which technique?",
      type: "mcq",
      options: ["Polishing", "Knapping", "Casting", "Smelting"],
      correctAnswer: "Knapping",
      explanation: "Knapping involves striking stone to create sharp edges."
    },

    {
      id: "eh-q15",
      question: "Control of fire is associated mainly with:",
      type: "mcq",
      options: ["Homo habilis", "Australopithecus", "Homo erectus", "Homo sapiens"],
      correctAnswer: "Homo erectus",
      explanation: "Fire provided warmth, protection, and cooking benefits."
    },

    // =================================================
    // 🔵 ADVANCED LEVEL (ANALYTICAL)
    // =================================================

    {
      id: "eh-q16",
      question: "Why did cooking food contribute to brain expansion?",
      type: "mcq",
      options: [
        "Reduced need for hunting",
        "Provided more digestible calories",
        "Made food tastier",
        "Improved tool quality"
      ],
      correctAnswer: "Provided more digestible calories",
      explanation: "Cooked food releases more energy, supporting the energy-hungry brain."
    },

    {
      id: "eh-q17",
      question: "Cave paintings suggest early humans had:",
      type: "mcq",
      options: [
        "Basic survival instincts only",
        "Symbolic thinking and culture",
        "Agricultural knowledge",
        "Written language"
      ],
      correctAnswer: "Symbolic thinking and culture",
      explanation: "Art reflects abstract thought and shared beliefs."
    },

    {
      id: "eh-q18",
      question: "Which material was NOT commonly used by early humans?",
      type: "mcq",
      options: ["Stone", "Bone", "Plastic", "Wood"],
      correctAnswer: "Plastic",
      explanation: "Plastic is a modern synthetic material."
    },

    {
      id: "eh-q19",
      question: "Why are caves often misleading as permanent homes?",
      type: "mcq",
      options: [
        "They were dangerous",
        "Used only by animals",
        "Mostly used temporarily or for rituals",
        "Too cold year-round"
      ],
      correctAnswer: "Mostly used temporarily or for rituals",
      explanation: "Most early humans lived in open-air camps."
    },

    {
      id: "eh-q20",
      question: "Which factor mainly drove early human migration?",
      type: "mcq",
      options: ["Religion", "Climate and food availability", "Curiosity", "Trade"],
      correctAnswer: "Climate and food availability",
      explanation: "Changing climates forced humans to search for resources."
    },

    {
      id: "eh-q21",
      question: "The Bering Land Bridge connected:",
      type: "mcq",
      options: [
        "Africa and Europe",
        "Asia and Australia",
        "Asia and North America",
        "Europe and America"
      ],
      correctAnswer: "Asia and North America",
      explanation: "Lower sea levels allowed humans to enter the Americas."
    },

    {
      id: "eh-q22",
      question: "Prehistory ended with the invention of:",
      type: "mcq",
      options: ["Fire", "Agriculture", "Writing", "Stone tools"],
      correctAnswer: "Writing",
      explanation: "Written records mark the beginning of history."
    },

    {
      id: "eh-q23",
      question: "Bronze is an alloy of:",
      type: "mcq",
      options: ["Iron and carbon", "Copper and tin", "Gold and silver", "Copper and zinc"],
      correctAnswer: "Copper and tin",
      explanation: "Bronze replaced stone tools in many societies."
    },

    {
      id: "eh-q24",
      question: "Early human societies became more complex mainly due to:",
      type: "mcq",
      options: [
        "Fire discovery",
        "Tool-making",
        "Agricultural surplus",
        "Migration"
      ],
      correctAnswer: "Agricultural surplus",
      explanation: "Surplus food enabled population growth and specialization."
    },

    {
      id: "eh-q25",
      question: "Which statement best describes early human evolution?",
      type: "mcq",
      options: [
        "Linear and goal-directed",
        "Random and chaotic",
        "Branching with many extinct species",
        "Driven by intelligence alone"
      ],
      correctAnswer: "Branching with many extinct species",
      explanation: "Human evolution resembled a bush with many branches, not a straight line."
    },

    {
      id: "eh-q26",
      question: "Early humans were successful mainly because they:",
      type: "mcq",
      options: [
        "Were physically strongest",
        "Could adapt using tools and culture",
        "Had sharp teeth",
        "Lived in caves"
      ],
      correctAnswer: "Could adapt using tools and culture",
      explanation: "Adaptability, not strength, ensured survival."
    },

    {
      id: "eh-q27",
      question: "Neolithic settlements led directly to:",
      type: "mcq",
      options: [
        "Nomadic life",
        "Decline in population",
        "Social inequality",
        "Extinction of humans"
      ],
      correctAnswer: "Social inequality",
      explanation: "Food surplus created wealth differences."
    },

    {
      id: "eh-q28",
      question: "Why is early human history called 'Prehistoric'?",
      type: "mcq",
      options: [
        "No humans existed",
        "Lack of fossils",
        "No written records",
        "No agriculture"
      ],
      correctAnswer: "No written records",
      explanation: "History begins when writing starts."
    },

    {
      id: "eh-q29",
      question: "Which innovation best marks the dawn of civilization?",
      type: "mcq",
      options: ["Fire", "Stone tools", "Agriculture and writing", "Hunting"],
      correctAnswer: "Agriculture and writing",
      explanation: "Together they enabled cities, administration, and history."
    },

    {
      id: "eh-q30",
      question: "Early humans should best be described as:",
      type: "mcq",
      options: [
        "Primitive and unintelligent",
        "Biologically inferior",
        "Highly adaptable problem-solvers",
        "Identical to modern humans"
      ],
      correctAnswer: "Highly adaptable problem-solvers",
      explanation: "Their creativity and adaptability shaped modern humanity."
    }

  ]
},

// ancient civilizations
{
  id: "ancient-civilizations-quiz",
  title: "Ancient Civilizations (World)",
  description: "From river valleys to empires that shaped modern society",
  icon: "Temple",
  color: "from-green-500 to-teal-700",
  questions: [

    // =================================================
    // 🟢 BASIC LEVEL (FOUNDATION)
    // =================================================

    {
      id: "ac-q1",
      question: "A civilization is best described as:",
      type: "mcq",
      options: [
        "A nomadic tribe",
        "A group of hunters",
        "An organized society with cities and government",
        "A religious group"
      ],
      correctAnswer: "An organized society with cities and government",
      explanation: "Civilizations are complex societies with cities, laws, and social structure."
    },

    {
      id: "ac-q2",
      question: "Which factor was most important for the rise of early civilizations?",
      type: "mcq",
      options: ["Hunting", "Rivers", "Mountains", "Forests"],
      correctAnswer: "Rivers",
      explanation: "Rivers provided water, fertile soil, and transport."
    },

    {
      id: "ac-q3",
      question: "Early civilizations mainly developed near:",
      type: "mcq",
      options: ["Oceans", "Deserts", "River valleys", "Mountains"],
      correctAnswer: "River valleys",
      explanation: "River valleys supported agriculture and permanent settlement."
    },

    {
      id: "ac-q4",
      question: "Which is NOT a feature of civilization?",
      type: "mcq",
      options: ["Writing", "Social classes", "Nomadic lifestyle", "Government"],
      correctAnswer: "Nomadic lifestyle",
      explanation: "Civilizations are settled, not nomadic."
    },

    {
      id: "ac-q5",
      question: "Food surplus mainly led to:",
      type: "mcq",
      options: [
        "Hunting decline",
        "Population decrease",
        "Specialization of labor",
        "End of trade"
      ],
      correctAnswer: "Specialization of labor",
      explanation: "Surplus food allowed people to take non-farming jobs."
    },

    // =================================================
    // 🟡 INTERMEDIATE LEVEL (UNDERSTANDING)
    // =================================================

    {
      id: "ac-q6",
      question: "Mesopotamia was located between which two rivers?",
      type: "mcq",
      options: [
        "Nile & Congo",
        "Indus & Ganga",
        "Tigris & Euphrates",
        "Yellow & Yangtze"
      ],
      correctAnswer: "Tigris & Euphrates",
      explanation: "Mesopotamia literally means 'land between two rivers'."
    },

    {
      id: "ac-q7",
      question: "The first known writing system was:",
      type: "mcq",
      options: ["Hieroglyphics", "Alphabet", "Cuneiform", "Sanskrit"],
      correctAnswer: "Cuneiform",
      explanation: "Cuneiform was developed by the Sumerians."
    },

    {
      id: "ac-q8",
      question: "Which civilization is called the 'Gift of the Nile'?",
      type: "mcq",
      options: ["Mesopotamian", "Egyptian", "Indus Valley", "Chinese"],
      correctAnswer: "Egyptian",
      explanation: "Egypt depended completely on the Nile River."
    },

    {
      id: "ac-q9",
      question: "Which civilization had advanced drainage and sanitation systems?",
      type: "mcq",
      options: ["Greek", "Roman", "Indus Valley", "Egyptian"],
      correctAnswer: "Indus Valley",
      explanation: "Harappa and Mohenjo-Daro had covered drains and toilets."
    },

    {
      id: "ac-q10",
      question: "The Code of Hammurabi is related to:",
      type: "mcq",
      options: ["Religion", "Trade", "Law", "Agriculture"],
      correctAnswer: "Law",
      explanation: "It was the earliest known written law code."
    },

    {
      id: "ac-q11",
      question: "The Mandate of Heaven was a political idea from:",
      type: "mcq",
      options: ["Rome", "Greece", "China", "Egypt"],
      correctAnswer: "China",
      explanation: "It justified the rule of Chinese emperors."
    },

    {
      id: "ac-q12",
      question: "Which civilization invented Democracy?",
      type: "mcq",
      options: ["Rome", "Greece", "Egypt", "China"],
      correctAnswer: "Greece",
      explanation: "Athens introduced direct democracy."
    },

    {
      id: "ac-q13",
      question: "Rome is best known for excellence in:",
      type: "mcq",
      options: ["Philosophy", "Engineering and Law", "Agriculture", "Writing"],
      correctAnswer: "Engineering and Law",
      explanation: "Roman roads, aqueducts, and laws shaped Europe."
    },

    {
      id: "ac-q14",
      question: "Which structure was used as a Mesopotamian temple?",
      type: "mcq",
      options: ["Pyramid", "Pagoda", "Ziggurat", "Stupa"],
      correctAnswer: "Ziggurat",
      explanation: "Ziggurats were stepped temple towers."
    },

    {
      id: "ac-q15",
      question: "Which civilization used Hieroglyphics?",
      type: "mcq",
      options: ["Egyptian", "Chinese", "Roman", "Greek"],
      correctAnswer: "Egyptian",
      explanation: "Hieroglyphics were sacred Egyptian writings."
    },

    // =================================================
    // 🔵 ADVANCED LEVEL (ANALYTICAL)
    // =================================================

    {
      id: "ac-q16",
      question: "Why were river valley civilizations more stable than others?",
      type: "mcq",
      options: [
        "Strong armies",
        "Predictable agriculture",
        "Advanced weapons",
        "Isolation only"
      ],
      correctAnswer: "Predictable agriculture",
      explanation: "Regular floods ensured consistent food supply."
    },

    {
      id: "ac-q17",
      question: "Which civilization remained mostly peaceful based on archaeological evidence?",
      type: "mcq",
      options: ["Roman", "Greek", "Indus Valley", "Assyrian"],
      correctAnswer: "Indus Valley",
      explanation: "Few weapons and fortifications have been found."
    },

    {
      id: "ac-q18",
      question: "The Silk Road was important because it:",
      type: "mcq",
      options: [
        "Connected villages",
        "Transported only silk",
        "Spread goods, ideas, and culture",
        "Was used only by China"
      ],
      correctAnswer: "Spread goods, ideas, and culture",
      explanation: "Trade routes enabled cultural diffusion."
    },

    {
      id: "ac-q19",
      question: "Which civilization invented concrete?",
      type: "mcq",
      options: ["Greek", "Roman", "Egyptian", "Chinese"],
      correctAnswer: "Roman",
      explanation: "Roman concrete revolutionized architecture."
    },

    {
      id: "ac-q20",
      question: "Most ancient societies were:",
      type: "mcq",
      options: ["Matriarchal", "Egalitarian", "Patriarchal", "Democratic"],
      correctAnswer: "Patriarchal",
      explanation: "Men held political and social power."
    },

    {
      id: "ac-q21",
      question: "Polytheism means:",
      type: "mcq",
      options: [
        "Belief in one god",
        "Belief in many gods",
        "No belief in gods",
        "Worship of ancestors"
      ],
      correctAnswer: "Belief in many gods",
      explanation: "Most ancient civilizations were polytheistic."
    },

    {
      id: "ac-q22",
      question: "Which factor did NOT usually cause the fall of civilizations?",
      type: "mcq",
      options: [
        "Invasions",
        "Environmental damage",
        "Economic collapse",
        "Advanced technology"
      ],
      correctAnswer: "Advanced technology",
      explanation: "Collapse usually resulted from weakness, not progress."
    },

    {
      id: "ac-q23",
      question: "The Bronze Age Collapse affected mainly:",
      type: "mcq",
      options: [
        "Asia only",
        "Mediterranean civilizations",
        "Africa only",
        "China only"
      ],
      correctAnswer: "Mediterranean civilizations",
      explanation: "Many cultures collapsed around 1200 BCE."
    },

    {
      id: "ac-q24",
      question: "Alphabetic writing was revolutionary because it:",
      type: "mcq",
      options: [
        "Used pictures",
        "Required few symbols",
        "Was sacred",
        "Was carved on stone"
      ],
      correctAnswer: "Required few symbols",
      explanation: "It made literacy easier and widespread."
    },

    {
      id: "ac-q25",
      question: "The Rosetta Stone helped historians to:",
      type: "mcq",
      options: [
        "Find pyramids",
        "Translate Hieroglyphics",
        "Date fossils",
        "Locate cities"
      ],
      correctAnswer: "Translate Hieroglyphics",
      explanation: "It had the same text in multiple scripts."
    },

    {
      id: "ac-q26",
      question: "Which ancient city was preserved by volcanic ash?",
      type: "mcq",
      options: ["Athens", "Rome", "Pompeii", "Babylon"],
      correctAnswer: "Pompeii",
      explanation: "Pompeii was buried by Mount Vesuvius."
    },

    {
      id: "ac-q27",
      question: "Why is archaeology considered destructive?",
      type: "mcq",
      options: [
        "Artifacts break",
        "Sites cannot be reburied exactly",
        "It removes soil",
        "Tools are sharp"
      ],
      correctAnswer: "Sites cannot be reburied exactly",
      explanation: "Once excavated, original context is lost forever."
    },

    {
      id: "ac-q28",
      question: "Which idea from Rome influences modern law?",
      type: "mcq",
      options: [
        "Divine rule",
        "Innocent until proven guilty",
        "Absolute monarchy",
        "Slavery"
      ],
      correctAnswer: "Innocent until proven guilty",
      explanation: "Roman legal principles shaped modern justice systems."
    },

    {
      id: "ac-q29",
      question: "Which civilization laid the foundation of Western philosophy?",
      type: "mcq",
      options: ["Roman", "Egyptian", "Greek", "Chinese"],
      correctAnswer: "Greek",
      explanation: "Philosophers like Socrates and Aristotle shaped thought."
    },

    {
      id: "ac-q30",
      question: "Studying ancient civilizations teaches us mainly about:",
      type: "mcq",
      options: [
        "How wars started",
        "Human adaptability and cooperation",
        "Only religion",
        "Only kings"
      ],
      correctAnswer: "Human adaptability and cooperation",
      explanation: "Civilizations show how humans organize and innovate."
    }

  ]
},

// History of india
{
  id: "history-of-india-quiz",
  title: "History of India",
  description: "From prehistoric settlements to independent modern India",
  icon: "Landmark",
  color: "from-orange-500 to-green-600",
  questions: [

    // =================================================
    // 🟢 BASIC LEVEL (FOUNDATION)
    // =================================================

    {
      id: "hi-q1",
      question: "History is best defined as:",
      type: "mcq",
      options: [
        "A list of kings",
        "Study of future events",
        "Scientific study of the past",
        "Religious teachings"
      ],
      correctAnswer: "Scientific study of the past",
      explanation: "History studies past human activities using evidence and analysis."
    },

    {
      id: "hi-q2",
      question: "Which are the two main sources of Indian history?",
      type: "mcq",
      options: [
        "Foreign and Indian",
        "Archaeological and Literary",
        "Ancient and Modern",
        "Religious and Secular"
      ],
      correctAnswer: "Archaeological and Literary",
      explanation: "Coins, inscriptions, monuments and texts form historical evidence."
    },

    {
      id: "hi-q3",
      question: "Indian history is commonly divided into:",
      type: "mcq",
      options: [
        "Two periods",
        "Three periods",
        "Four periods",
        "Five periods"
      ],
      correctAnswer: "Three periods",
      explanation: "Ancient, Medieval, and Modern periods."
    },

    {
      id: "hi-q4",
      question: "The name 'India' is derived from which river?",
      type: "mcq",
      options: ["Ganga", "Saraswati", "Indus", "Brahmaputra"],
      correctAnswer: "Indus",
      explanation: "The Greeks called the region 'Indos', later India."
    },

    {
      id: "hi-q5",
      question: "Which geographical feature protected India from invasions?",
      type: "mcq",
      options: ["Thar Desert", "Himalayas", "Plateaus", "Forests"],
      correctAnswer: "Himalayas",
      explanation: "The Himalayas acted as a natural barrier."
    },

    // =================================================
    // 🟡 INTERMEDIATE LEVEL (UNDERSTANDING)
    // =================================================

    {
      id: "hi-q6",
      question: "Bhimbetka caves are famous for:",
      type: "mcq",
      options: [
        "Temple ruins",
        "Rock paintings",
        "Metal tools",
        "Buddhist stupas"
      ],
      correctAnswer: "Rock paintings",
      explanation: "They show prehistoric human life and culture."
    },

    {
      id: "hi-q7",
      question: "Mehrgarh is associated with which phase?",
      type: "mcq",
      options: [
        "Paleolithic",
        "Mesolithic",
        "Neolithic",
        "Chalcolithic"
      ],
      correctAnswer: "Neolithic",
      explanation: "Mehrgarh shows early farming and village life."
    },

    {
      id: "hi-q8",
      question: "Which feature best describes the Indus Valley Civilization?",
      type: "mcq",
      options: [
        "Large palaces",
        "Advanced drainage system",
        "Stone temples",
        "Fortified capitals"
      ],
      correctAnswer: "Advanced drainage system",
      explanation: "Every house was connected to covered drains."
    },

    {
      id: "hi-q9",
      question: "The script of the Indus Valley Civilization is:",
      type: "mcq",
      options: ["Brahmi", "Kharosthi", "Sanskrit", "Undeciphered"],
      correctAnswer: "Undeciphered",
      explanation: "Scholars have not been able to read it yet."
    },

    {
      id: "hi-q10",
      question: "The Rig Veda belongs to which period?",
      type: "mcq",
      options: [
        "Harappan",
        "Early Vedic",
        "Later Vedic",
        "Mauryan"
      ],
      correctAnswer: "Early Vedic",
      explanation: "It reflects pastoral Aryan society."
    },

    {
      id: "hi-q11",
      question: "The Varna system became rigid during the:",
      type: "mcq",
      options: [
        "Early Vedic Period",
        "Later Vedic Period",
        "Mauryan Period",
        "Gupta Period"
      ],
      correctAnswer: "Later Vedic Period",
      explanation: "Social divisions hardened with agriculture and land ownership."
    },

    {
      id: "hi-q12",
      question: "Which Mahajanapada became most powerful?",
      type: "mcq",
      options: ["Avanti", "Kosala", "Vatsa", "Magadha"],
      correctAnswer: "Magadha",
      explanation: "It had iron resources, elephants, and fertile land."
    },

    {
      id: "hi-q13",
      question: "Who founded the Mauryan Empire?",
      type: "mcq",
      options: [
        "Bindusara",
        "Ashoka",
        "Chandragupta Maurya",
        "Chanakya"
      ],
      correctAnswer: "Chandragupta Maurya",
      explanation: "With guidance from Chanakya."
    },

    {
      id: "hi-q14",
      question: "Ashoka adopted Buddhism after which event?",
      type: "mcq",
      options: [
        "Battle of Panipat",
        "Battle of Kalinga",
        "Battle of Hydaspes",
        "Battle of Plassey"
      ],
      correctAnswer: "Battle of Kalinga",
      explanation: "The massive bloodshed transformed Ashoka."
    },

    {
      id: "hi-q15",
      question: "Which empire is known as the Golden Age of India?",
      type: "mcq",
      options: [
        "Maurya",
        "Kushan",
        "Gupta",
        "Chola"
      ],
      correctAnswer: "Gupta",
      explanation: "It saw progress in science, art, and literature."
    },

    // =================================================
    // 🔵 ADVANCED LEVEL (ANALYTICAL)
    // =================================================

    {
      id: "hi-q16",
      question: "Samudragupta is called the 'Napoleon of India' because:",
      type: "mcq",
      options: [
        "He ruled France",
        "He expanded empire through conquests",
        "He introduced democracy",
        "He built monuments"
      ],
      correctAnswer: "He expanded empire through conquests",
      explanation: "His military campaigns are detailed in the Allahabad Pillar Inscription."
    },

    {
      id: "hi-q17",
      question: "Which South Indian dynasty was known for naval power?",
      type: "mcq",
      options: ["Pallava", "Pandya", "Chola", "Chera"],
      correctAnswer: "Chola",
      explanation: "They controlled maritime trade in Southeast Asia."
    },

    {
      id: "hi-q18",
      question: "The Tripartite Struggle was for control of:",
      type: "mcq",
      options: ["Delhi", "Kannauj", "Ujjain", "Pataliputra"],
      correctAnswer: "Kannauj",
      explanation: "Palas, Pratiharas, and Rashtrakutas fought for it."
    },

    {
      id: "hi-q19",
      question: "Who started the Qutub Minar?",
      type: "mcq",
      options: [
        "Alauddin Khalji",
        "Qutb-ud-din Aibak",
        "Iltutmish",
        "Balban"
      ],
      correctAnswer: "Qutb-ud-din Aibak",
      explanation: "It symbolized the beginning of Sultanate rule."
    },

    {
      id: "hi-q20",
      question: "Which Mughal emperor followed 'Sulh-i-kul'?",
      type: "mcq",
      options: ["Babur", "Humayun", "Akbar", "Aurangzeb"],
      correctAnswer: "Akbar",
      explanation: "It promoted religious tolerance."
    },

    {
      id: "hi-q21",
      question: "The Third Battle of Panipat weakened:",
      type: "mcq",
      options: [
        "Mughals",
        "British",
        "Marathas",
        "French"
      ],
      correctAnswer: "Marathas",
      explanation: "They were defeated by Ahmad Shah Abdali."
    },

    {
      id: "hi-q22",
      question: "Battle of Plassey marked the beginning of:",
      type: "mcq",
      options: [
        "Crown Rule",
        "Company Rule",
        "Freedom Movement",
        "Economic reforms"
      ],
      correctAnswer: "Company Rule",
      explanation: "East India Company gained political power."
    },

    {
      id: "hi-q23",
      question: "The 'Drain of Wealth' theory was given by:",
      type: "mcq",
      options: [
        "Gandhi",
        "Dadabhai Naoroji",
        "Tilak",
        "Nehru"
      ],
      correctAnswer: "Dadabhai Naoroji",
      explanation: "He exposed British economic exploitation."
    },

    {
      id: "hi-q24",
      question: "Which movement transformed the freedom struggle into a mass movement?",
      type: "mcq",
      options: [
        "Revolt of 1857",
        "Home Rule Movement",
        "Gandhian movements",
        "Swadeshi Movement"
      ],
      correctAnswer: "Gandhian movements",
      explanation: "Non-violence mobilized peasants, workers, and women."
    },

    {
      id: "hi-q25",
      question: "The Constitution of India came into force on:",
      type: "mcq",
      options: [
        "15 August 1947",
        "26 January 1950",
        "26 November 1949",
        "2 October 1950"
      ],
      correctAnswer: "26 January 1950",
      explanation: "India became a Republic on this day."
    },

    {
      id: "hi-q26",
      question: "Who is known as the 'Iron Man of India'?",
      type: "mcq",
      options: [
        "Jawaharlal Nehru",
        "Dr. B.R. Ambedkar",
        "Sardar Vallabhbhai Patel",
        "Rajendra Prasad"
      ],
      correctAnswer: "Sardar Vallabhbhai Patel",
      explanation: "He integrated princely states."
    },

    {
      id: "hi-q27",
      question: "Economic reforms of 1991 introduced:",
      type: "mcq",
      options: [
        "Socialism",
        "Liberalization, Privatization, Globalization",
        "Land reforms",
        "Green Revolution"
      ],
      correctAnswer: "Liberalization, Privatization, Globalization",
      explanation: "They opened India’s economy globally."
    },

    {
      id: "hi-q28",
      question: "Which sector boomed after 1991 reforms?",
      type: "mcq",
      options: ["Agriculture", "Mining", "Information Technology", "Handicrafts"],
      correctAnswer: "Information Technology",
      explanation: "IT turned India into a global service hub."
    },

    {
      id: "hi-q29",
      question: "Universal Adult Franchise means:",
      type: "mcq",
      options: [
        "Only educated can vote",
        "Only men can vote",
        "Every adult has voting rights",
        "Only property owners vote"
      ],
      correctAnswer: "Every adult has voting rights",
      explanation: "India adopted it from the start."
    },

    {
      id: "hi-q30",
      question: "Indian history is best understood as:",
      type: "mcq",
      options: [
        "A story of invasions",
        "A continuous cultural evolution",
        "Only political events",
        "Only religious change"
      ],
      correctAnswer: "A continuous cultural evolution",
      explanation: "Ancient traditions still survive in modern India."
    }

  ]
},

// Geography Module
{
  id: "world-geography-quiz",
  title: "World Geography & Resources",
  description: "Physical features, human geography, and global resources",
  icon: "Map",
  color: "from-blue-600 to-teal-500",
  questions: [

    // =================================================
    // 🟢 BEGINNER LEVEL
    // =================================================

    {
      id: "wg-q1",
      question: "Geography is best defined as the study of:",
      type: "mcq",
      options: [
        "Only maps and capitals",
        "Earth as the home of man",
        "Weather conditions",
        "Natural disasters only"
      ],
      correctAnswer: "Earth as the home of man",
      explanation: "Geography studies the relationship between humans and their environment."
    },

    {
      id: "wg-q2",
      question: "Which branch of geography deals with landforms and climate?",
      type: "mcq",
      options: [
        "Human Geography",
        "Economic Geography",
        "Physical Geography",
        "Political Geography"
      ],
      correctAnswer: "Physical Geography",
      explanation: "Physical geography studies natural features like mountains, rivers, and climate."
    },

    {
      id: "wg-q3",
      question: "Cartography is the science of:",
      type: "mcq",
      options: [
        "Climate study",
        "Map-making",
        "Population study",
        "Satellite imaging"
      ],
      correctAnswer: "Map-making",
      explanation: "Cartography deals with designing and interpreting maps."
    },

    {
      id: "wg-q4",
      question: "A large-scale map shows:",
      type: "mcq",
      options: [
        "Less detail",
        "Entire continents",
        "More detail",
        "Only oceans"
      ],
      correctAnswer: "More detail",
      explanation: "Large-scale maps cover smaller areas with greater detail."
    },

    {
      id: "wg-q5",
      question: "The shape of the Earth is best described as:",
      type: "mcq",
      options: [
        "Perfect sphere",
        "Flat disk",
        "Oblate spheroid",
        "Elliptical cone"
      ],
      correctAnswer: "Oblate spheroid",
      explanation: "Earth bulges at the equator and is flattened at the poles."
    },

    {
      id: "wg-q6",
      question: "Latitude lines measure distance:",
      type: "mcq",
      options: [
        "East or West of Prime Meridian",
        "North or South of Equator",
        "From sea level",
        "From International Date Line"
      ],
      correctAnswer: "North or South of Equator",
      explanation: "Latitudes are horizontal lines parallel to the Equator."
    },

    {
      id: "wg-q7",
      question: "Which line divides Earth into Eastern and Western Hemispheres?",
      type: "mcq",
      options: [
        "Equator",
        "Tropic of Cancer",
        "Prime Meridian",
        "International Date Line"
      ],
      correctAnswer: "Prime Meridian",
      explanation: "The Prime Meridian (0° longitude) passes through Greenwich."
    },

    {
      id: "wg-q8",
      question: "Which continent is the largest by area?",
      type: "mcq",
      options: ["Africa", "Asia", "Europe", "North America"],
      correctAnswer: "Asia",
      explanation: "Asia covers about 30% of Earth's land area."
    },

    {
      id: "wg-q9",
      question: "Which continent has no permanent human population?",
      type: "mcq",
      options: ["Australia", "Africa", "Antarctica", "Europe"],
      correctAnswer: "Antarctica",
      explanation: "Antarctica is reserved for scientific research."
    },

    {
      id: "wg-q10",
      question: "The Pacific Ocean is:",
      type: "mcq",
      options: [
        "The shallowest ocean",
        "The warmest ocean",
        "The largest ocean",
        "The saltiest ocean"
      ],
      correctAnswer: "The largest ocean",
      explanation: "The Pacific Ocean is larger than all landmasses combined."
    },

    // =================================================
    // 🟡 INTERMEDIATE LEVEL
    // =================================================

    {
      id: "wg-q11",
      question: "Continental shelves are important because they are:",
      type: "mcq",
      options: [
        "Deep ocean trenches",
        "Rich in oil and fish",
        "Volcanic zones",
        "Earthquake belts"
      ],
      correctAnswer: "Rich in oil and fish",
      explanation: "Shallow waters support marine life and energy resources."
    },

    {
      id: "wg-q12",
      question: "Which landform is known as the 'Food Basket of the world'?",
      type: "mcq",
      options: ["Mountains", "Plateaus", "Plains", "Deserts"],
      correctAnswer: "Plains",
      explanation: "Plains have fertile soil and are easy to cultivate."
    },

    {
      id: "wg-q13",
      question: "The Himalayas are an example of:",
      type: "mcq",
      options: [
        "Block mountains",
        "Fold mountains",
        "Volcanic mountains",
        "Residual mountains"
      ],
      correctAnswer: "Fold mountains",
      explanation: "They were formed due to collision of tectonic plates."
    },

    {
      id: "wg-q14",
      question: "Which mountain range is the longest in the world?",
      type: "mcq",
      options: ["Himalayas", "Rockies", "Andes", "Alps"],
      correctAnswer: "Andes",
      explanation: "The Andes stretch along the west coast of South America."
    },

    {
      id: "wg-q15",
      question: "A river basin is:",
      type: "mcq",
      options: [
        "The mouth of a river",
        "Area drained by a river and its tributaries",
        "A water storage dam",
        "A delta region"
      ],
      correctAnswer: "Area drained by a river and its tributaries",
      explanation: "It includes all land where rainfall flows into the river."
    },

    {
      id: "wg-q16",
      question: "Which river carries the largest volume of water?",
      type: "mcq",
      options: ["Nile", "Amazon", "Yangtze", "Ganga"],
      correctAnswer: "Amazon",
      explanation: "The Amazon contributes about 20% of global river discharge."
    },

    {
      id: "wg-q17",
      question: "Lake Baikal is famous for being:",
      type: "mcq",
      options: [
        "Largest lake",
        "Saltiest lake",
        "Deepest freshwater lake",
        "Warmest lake"
      ],
      correctAnswer: "Deepest freshwater lake",
      explanation: "It holds 20% of Earth's unfrozen freshwater."
    },

    {
      id: "wg-q18",
      question: "Climate is defined as:",
      type: "mcq",
      options: [
        "Daily weather conditions",
        "Seasonal rainfall",
        "Average weather over long period",
        "Extreme weather events"
      ],
      correctAnswer: "Average weather over long period",
      explanation: "Climate is usually measured over 30 years or more."
    },

    {
      id: "wg-q19",
      question: "Which factor mainly determines climate zones?",
      type: "mcq",
      options: ["Latitude", "Longitude", "Population", "Vegetation"],
      correctAnswer: "Latitude",
      explanation: "Latitude affects solar energy received."
    },

    {
      id: "wg-q20",
      question: "The largest terrestrial biome is:",
      type: "mcq",
      options: [
        "Tropical rainforest",
        "Savanna",
        "Taiga",
        "Desert"
      ],
      correctAnswer: "Taiga",
      explanation: "Taiga (Boreal Forest) stretches across northern continents."
    },

    // =================================================
    // 🔵 ADVANCED LEVEL
    // =================================================

    {
      id: "wg-q21",
      question: "Population density is calculated as:",
      type: "mcq",
      options: [
        "Population ÷ total land area",
        "Population × land area",
        "Urban population only",
        "Rural population only"
      ],
      correctAnswer: "Population ÷ total land area",
      explanation: "It shows people per square kilometer."
    },

    {
      id: "wg-q22",
      question: "Which area has the highest population density?",
      type: "mcq",
      options: [
        "Deserts",
        "Polar regions",
        "River valleys",
        "Mountain ranges"
      ],
      correctAnswer: "River valleys",
      explanation: "Availability of water and fertile soil attracts settlement."
    },

    {
      id: "wg-q23",
      question: "Megacities are defined as cities with population over:",
      type: "mcq",
      options: [
        "5 million",
        "8 million",
        "10 million",
        "15 million"
      ],
      correctAnswer: "10 million",
      explanation: "Examples include Tokyo, Delhi, and New York."
    },

    {
      id: "wg-q24",
      question: "Which of the following is a renewable resource?",
      type: "mcq",
      options: ["Coal", "Petroleum", "Natural Gas", "Solar Energy"],
      correctAnswer: "Solar Energy",
      explanation: "Solar energy replenishes continuously."
    },

    {
      id: "wg-q25",
      question: "Iron ore belongs to which category?",
      type: "mcq",
      options: [
        "Non-metallic mineral",
        "Ferrous mineral",
        "Non-ferrous mineral",
        "Energy mineral"
      ],
      correctAnswer: "Ferrous mineral",
      explanation: "Ferrous minerals contain iron."
    },

    {
      id: "wg-q26",
      question: "Which fossil fuel is considered the cleanest?",
      type: "mcq",
      options: ["Coal", "Petroleum", "Natural Gas", "Nuclear"],
      correctAnswer: "Natural Gas",
      explanation: "It emits fewer pollutants than coal and oil."
    },

    {
      id: "wg-q27",
      question: "The main cause of desertification is:",
      type: "mcq",
      options: [
        "Earthquakes",
        "Overgrazing and deforestation",
        "Volcanic eruptions",
        "Glacial melting"
      ],
      correctAnswer: "Overgrazing and deforestation",
      explanation: "Human misuse of land degrades soil."
    },

    {
      id: "wg-q28",
      question: "Sustainable development means:",
      type: "mcq",
      options: [
        "Using resources rapidly",
        "Stopping all development",
        "Meeting present needs without harming future",
        "Depending only on fossil fuels"
      ],
      correctAnswer: "Meeting present needs without harming future",
      explanation: "It balances environment, economy, and society."
    },

    {
      id: "wg-q29",
      question: "Which plate boundary creates fold mountains?",
      type: "mcq",
      options: [
        "Divergent",
        "Transform",
        "Convergent",
        "Hot spot"
      ],
      correctAnswer: "Convergent",
      explanation: "Collision of plates forms mountains like Himalayas."
    },

    {
      id: "wg-q30",
      question: "Resource geopolitics mainly refers to:",
      type: "mcq",
      options: [
        "Tourism management",
        "Political borders",
        "Control of strategic natural resources",
        "Cultural exchange"
      ],
      correctAnswer: "Control of strategic natural resources",
      explanation: "Resources like oil, water, and minerals influence global power."
    }

  ]
},

// world-society-culture
{
  id: "world-society-culture-quiz",
  title: "World, Society & Culture",
  description: "Human societies, cultures, beliefs, and global interactions",
  icon: "Globe",
  color: "from-blue-500 to-cyan-600",
  questions: [

    // =================================================
    // 🟢 BEGINNER LEVEL
    // =================================================

    {
      id: "wsc-q1",
      question: "Society can best be defined as:",
      type: "mcq",
      options: [
        "A group of people living randomly",
        "A group sharing common territory, culture, and institutions",
        "Only a political organization",
        "A collection of families"
      ],
      correctAnswer: "A group sharing common territory, culture, and institutions",
      explanation: "Society is an organized community with shared culture, relationships, and institutions."
    },

    {
      id: "wsc-q2",
      question: "Which of the following is NOT a key element of society?",
      type: "mcq",
      options: [
        "Social interaction",
        "Common culture",
        "Collective identity",
        "Biological similarity"
      ],
      correctAnswer: "Biological similarity",
      explanation: "Society is defined socially and culturally, not biologically."
    },

    {
      id: "wsc-q3",
      question: "Humans are considered social beings primarily because they:",
      type: "mcq",
      options: [
        "Live longer than animals",
        "Depend on cooperation for survival",
        "Have stronger instincts",
        "Avoid isolation naturally"
      ],
      correctAnswer: "Depend on cooperation for survival",
      explanation: "Human survival and progress rely on cooperation, communication, and shared effort."
    },

    {
      id: "wsc-q4",
      question: "Communities are best described as:",
      type: "mcq",
      options: [
        "Entire nations",
        "Smaller groups within a society",
        "Only rural populations",
        "Political parties"
      ],
      correctAnswer: "Smaller groups within a society",
      explanation: "Communities can be geographic, interest-based, or virtual subgroups of society."
    },

    {
      id: "wsc-q5",
      question: "Which concept refers to working together for common goals?",
      type: "mcq",
      options: ["Competition", "Cooperation", "Isolation", "Segregation"],
      correctAnswer: "Cooperation",
      explanation: "Cooperation enables division of labor, shared defense, and large-scale achievements."
    },

    {
      id: "wsc-q6",
      question: "Ethnicity mainly refers to:",
      type: "mcq",
      options: [
        "Biological differences",
        "Skin color",
        "Cultural identity",
        "Geographical location"
      ],
      correctAnswer: "Cultural identity",
      explanation: "Ethnicity is based on shared culture, language, traditions, and history."
    },

    {
      id: "wsc-q7",
      question: "Scientists reject the idea of biological race because:",
      type: "mcq",
      options: [
        "Humans look identical",
        "Genetic differences are continuous and minimal",
        "Culture determines biology",
        "Race changes every generation"
      ],
      correctAnswer: "Genetic differences are continuous and minimal",
      explanation: "Humans share 99.9% of DNA; variation does not form clear racial boundaries."
    },

    {
      id: "wsc-q8",
      question: "The phrase 'unity in diversity' means:",
      type: "mcq",
      options: [
        "Everyone must be the same",
        "Differences weaken society",
        "Diversity enriches while unity binds",
        "Culture should be uniform"
      ],
      correctAnswer: "Diversity enriches while unity binds",
      explanation: "Human differences add strength while shared values create unity."
    },

    {
      id: "wsc-q9",
      question: "Culture is best described as:",
      type: "mcq",
      options: [
        "Genetically inherited behavior",
        "Learned and shared patterns of life",
        "Only art and music",
        "Unchanging traditions"
      ],
      correctAnswer: "Learned and shared patterns of life",
      explanation: "Culture is socially transmitted and evolves over time."
    },

    {
      id: "wsc-q10",
      question: "Material culture includes:",
      type: "mcq",
      options: [
        "Beliefs and values",
        "Languages and symbols",
        "Tools, clothing, and buildings",
        "Customs only"
      ],
      correctAnswer: "Tools, clothing, and buildings",
      explanation: "Material culture consists of physical objects created by society."
    },

    // =================================================
    // 🟡 INTERMEDIATE LEVEL
    // =================================================

    {
      id: "wsc-q11",
      question: "Norms that involve strong moral judgments are called:",
      type: "mcq",
      options: ["Folkways", "Mores", "Laws", "Habits"],
      correctAnswer: "Mores",
      explanation: "Mores are norms with moral significance; violations cause strong disapproval."
    },

    {
      id: "wsc-q12",
      question: "Taboos are:",
      type: "mcq",
      options: [
        "Casual customs",
        "Written laws",
        "Strongly prohibited behaviors",
        "Personal preferences"
      ],
      correctAnswer: "Strongly prohibited behaviors",
      explanation: "Taboos are actions considered unacceptable or forbidden in a culture."
    },

    {
      id: "wsc-q13",
      question: "Which language family has the largest number of speakers?",
      type: "mcq",
      options: [
        "Dravidian",
        "Niger-Congo",
        "Indo-European",
        "Altaic"
      ],
      correctAnswer: "Indo-European",
      explanation: "Indo-European languages have over 3 billion speakers worldwide."
    },

    {
      id: "wsc-q14",
      question: "The most spoken language by total speakers worldwide is:",
      type: "mcq",
      options: ["Mandarin", "Spanish", "Hindi", "English"],
      correctAnswer: "English",
      explanation: "English is widely used as a second language globally."
    },

    {
      id: "wsc-q15",
      question: "Which religion is the oldest among the following?",
      type: "mcq",
      options: ["Christianity", "Islam", "Hinduism", "Buddhism"],
      correctAnswer: "Hinduism",
      explanation: "Hinduism dates back over 4,000 years."
    },

    {
      id: "wsc-q16",
      question: "The Five Pillars are associated with:",
      type: "mcq",
      options: ["Christianity", "Judaism", "Islam", "Sikhism"],
      correctAnswer: "Islam",
      explanation: "They define core beliefs and practices in Islam."
    },

    {
      id: "wsc-q17",
      question: "Which family type includes multiple generations living together?",
      type: "mcq",
      options: [
        "Nuclear family",
        "Single-parent family",
        "Extended family",
        "Blended family"
      ],
      correctAnswer: "Extended family",
      explanation: "Extended families emphasize interdependence across generations."
    },

    {
      id: "wsc-q18",
      question: "Education primarily functions to:",
      type: "mcq",
      options: [
        "Control population",
        "Transmit culture and skills",
        "Replace families",
        "Eliminate inequality"
      ],
      correctAnswer: "Transmit culture and skills",
      explanation: "Education socializes individuals and prepares them for social roles."
    },

    {
      id: "wsc-q19",
      question: "Festivals mainly help societies by:",
      type: "mcq",
      options: [
        "Increasing conflict",
        "Promoting social bonding",
        "Replacing traditions",
        "Encouraging isolation"
      ],
      correctAnswer: "Promoting social bonding",
      explanation: "Festivals strengthen unity, joy, and shared identity."
    },

    {
      id: "wsc-q20",
      question: "Traditional clothing primarily reflects:",
      type: "mcq",
      options: [
        "Personal taste only",
        "Climate and culture",
        "Economic class only",
        "Political system"
      ],
      correctAnswer: "Climate and culture",
      explanation: "Clothing adapts to environment, occupation, and beliefs."
    },

    // =================================================
    // 🔵 ADVANCED LEVEL
    // =================================================

    {
      id: "wsc-q21",
      question: "Ethnocentrism refers to:",
      type: "mcq",
      options: [
        "Appreciating all cultures equally",
        "Judging other cultures by one's own standards",
        "Adopting foreign cultures",
        "Studying human evolution"
      ],
      correctAnswer: "Judging other cultures by one's own standards",
      explanation: "Ethnocentrism often leads to prejudice and cultural conflict."
    },

    {
      id: "wsc-q22",
      question: "Cultural relativism suggests that:",
      type: "mcq",
      options: [
        "All cultures are identical",
        "Cultures must be judged in their own context",
        "Only modern cultures matter",
        "Traditions should never change"
      ],
      correctAnswer: "Cultures must be judged in their own context",
      explanation: "Practices should be understood within their cultural framework."
    },

    {
      id: "wsc-q23",
      question: "Assimilation occurs when:",
      type: "mcq",
      options: [
        "Cultures coexist equally",
        "Minority loses its cultural identity",
        "Global culture dominates",
        "Traditions are preserved"
      ],
      correctAnswer: "Minority loses its cultural identity",
      explanation: "Assimilation involves adopting the dominant culture completely."
    },

    {
      id: "wsc-q24",
      question: "Multiculturalism is best described as:",
      type: "mcq",
      options: [
        "Cultural isolation",
        "Single dominant culture",
        "Coexistence of multiple cultures",
        "Rejection of traditions"
      ],
      correctAnswer: "Coexistence of multiple cultures",
      explanation: "Different cultures maintain identity while sharing a society."
    },

    {
      id: "wsc-q25",
      question: "Which sociological theory focuses on inequality and power struggle?",
      type: "mcq",
      options: [
        "Functionalism",
        "Symbolic Interactionism",
        "Conflict Theory",
        "Cultural Relativism"
      ],
      correctAnswer: "Conflict Theory",
      explanation: "Conflict theory views society as competition for resources."
    },

    {
      id: "wsc-q26",
      question: "Hybrid identity refers to:",
      type: "mcq",
      options: [
        "Losing cultural roots",
        "Combining multiple cultural identities",
        "Rejecting globalization",
        "Uniform global culture"
      ],
      correctAnswer: "Combining multiple cultural identities",
      explanation: "Globalization allows individuals to blend cultural influences."
    },

    {
      id: "wsc-q27",
      question: "Glocalization means:",
      type: "mcq",
      options: [
        "Rejecting global products",
        "Global domination of culture",
        "Adapting global ideas to local contexts",
        "Cultural isolation"
      ],
      correctAnswer: "Adapting global ideas to local contexts",
      explanation: "Global products are modified to suit local tastes."
    },

    {
      id: "wsc-q28",
      question: "Agenda-setting theory suggests media:",
      type: "mcq",
      options: [
        "Controls human behavior",
        "Decides what people should buy",
        "Influences what issues people think about",
        "Eliminates public opinion"
      ],
      correctAnswer: "Influences what issues people think about",
      explanation: "Media highlights certain topics, shaping public focus."
    },

    {
      id: "wsc-q29",
      question: "An echo chamber is created when:",
      type: "mcq",
      options: [
        "People hear multiple perspectives",
        "Algorithms reinforce existing beliefs",
        "Media is regulated",
        "Cultures mix freely"
      ],
      correctAnswer: "Algorithms reinforce existing beliefs",
      explanation: "Social media often shows content aligned with existing views."
    },

    {
      id: "wsc-q30",
      question: "Preserving cultural heritage is important because:",
      type: "mcq",
      options: [
        "It stops modernization",
        "It maintains identity and history",
        "It benefits only tourism",
        "It prevents globalization"
      ],
      correctAnswer: "It maintains identity and history",
      explanation: "Heritage connects generations and preserves collective memory."
    }

  ]
},

// Human Body 
{
  id: "human-body-quiz",
  title: "Human Body",
  description: "Explore cells, tissues, organs, systems, and advanced human biology",
  icon: "Heart",
  color: "from-red-500 to-pink-600",
  questions: [

    // =================================================
    // 🟢 BEGINNER LEVEL
    // =================================================

    {
      id: "hb-q1",
      question: "The human body is made up of approximately how many cells?",
      type: "mcq",
      options: ["10 trillion", "20 trillion", "37 trillion", "100 trillion"],
      correctAnswer: "37 trillion",
      explanation: "The human body contains approximately 37 trillion cells working together."
    },

    {
      id: "hb-q2",
      question: "Which is the smallest living unit of the human body?",
      type: "mcq",
      options: ["Tissue", "Organ", "Cell", "Molecule"],
      correctAnswer: "Cell",
      explanation: "Cells are the basic structural and functional units of life."
    },

    {
      id: "hb-q3",
      question: "Which level of organization comes immediately after cells?",
      type: "mcq",
      options: ["Organs", "Systems", "Tissues", "Organism"],
      correctAnswer: "Tissues",
      explanation: "Similar cells group together to form tissues."
    },

    {
      id: "hb-q4",
      question: "Which tissue type is responsible for movement?",
      type: "mcq",
      options: ["Epithelial", "Connective", "Muscle", "Nervous"],
      correctAnswer: "Muscle",
      explanation: "Muscle tissue contracts to produce movement."
    },

    {
      id: "hb-q5",
      question: "Which organ pumps blood throughout the body?",
      type: "mcq",
      options: ["Lungs", "Brain", "Heart", "Kidneys"],
      correctAnswer: "Heart",
      explanation: "The heart pumps blood through the circulatory system."
    },

    {
      id: "hb-q6",
      question: "How many bones are present in an adult human body?",
      type: "mcq",
      options: ["300", "250", "206", "180"],
      correctAnswer: "206",
      explanation: "Adults have 206 bones after many fuse during growth."
    },

    {
      id: "hb-q7",
      question: "Which muscle type is involuntary and found in the heart?",
      type: "mcq",
      options: ["Skeletal", "Smooth", "Cardiac", "Voluntary"],
      correctAnswer: "Cardiac",
      explanation: "Cardiac muscle contracts rhythmically without conscious control."
    },

    {
      id: "hb-q8",
      question: "The small intestine is mainly responsible for:",
      type: "mcq",
      options: [
        "Breaking food mechanically",
        "Absorbing nutrients",
        "Storing waste",
        "Producing bile"
      ],
      correctAnswer: "Absorbing nutrients",
      explanation: "Most nutrient absorption occurs in the small intestine."
    },

    {
      id: "hb-q9",
      question: "Which organ produces bile to help digest fats?",
      type: "mcq",
      options: ["Pancreas", "Gallbladder", "Liver", "Stomach"],
      correctAnswer: "Liver",
      explanation: "The liver produces bile; the gallbladder stores it."
    },

    {
      id: "hb-q10",
      question: "Which system controls thinking, memory, and reflex actions?",
      type: "mcq",
      options: ["Endocrine", "Muscular", "Nervous", "Digestive"],
      correctAnswer: "Nervous",
      explanation: "The nervous system coordinates and controls body activities."
    },

    // =================================================
    // 🟡 INTERMEDIATE LEVEL
    // =================================================

    {
      id: "hb-q11",
      question: "Which organelle is known as the powerhouse of the cell?",
      type: "mcq",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"],
      correctAnswer: "Mitochondria",
      explanation: "Mitochondria produce ATP, the energy currency of the cell."
    },

    {
      id: "hb-q12",
      question: "Which tissue connects muscles to bones?",
      type: "mcq",
      options: ["Ligament", "Cartilage", "Tendon", "Bone"],
      correctAnswer: "Tendon",
      explanation: "Tendons attach muscles to bones."
    },

    {
      id: "hb-q13",
      question: "Which blood cells help fight infections?",
      type: "mcq",
      options: [
        "Red blood cells",
        "Platelets",
        "White blood cells",
        "Plasma"
      ],
      correctAnswer: "White blood cells",
      explanation: "White blood cells defend the body against pathogens."
    },

    {
      id: "hb-q14",
      question: "Which gland is known as the master gland of the endocrine system?",
      type: "mcq",
      options: ["Thyroid", "Adrenal", "Pituitary", "Pancreas"],
      correctAnswer: "Pituitary",
      explanation: "The pituitary gland regulates other endocrine glands."
    },

    {
      id: "hb-q15",
      question: "Which part of the respiratory system allows gas exchange?",
      type: "mcq",
      options: ["Trachea", "Bronchi", "Alveoli", "Diaphragm"],
      correctAnswer: "Alveoli",
      explanation: "Alveoli allow oxygen and carbon dioxide exchange via diffusion."
    },

    {
      id: "hb-q16",
      question: "Which system removes waste and maintains fluid balance?",
      type: "mcq",
      options: ["Digestive", "Excretory", "Respiratory", "Circulatory"],
      correctAnswer: "Excretory",
      explanation: "The excretory system filters blood and removes waste as urine."
    },

    {
      id: "hb-q17",
      question: "Which sense organ is the largest in the human body?",
      type: "mcq",
      options: ["Eyes", "Ears", "Skin", "Nose"],
      correctAnswer: "Skin",
      explanation: "Skin is the largest organ and sense organ."
    },

    {
      id: "hb-q18",
      question: "Homeostasis refers to:",
      type: "mcq",
      options: [
        "Growth of the body",
        "Energy production",
        "Maintaining internal balance",
        "Disease resistance"
      ],
      correctAnswer: "Maintaining internal balance",
      explanation: "Homeostasis keeps body conditions stable despite changes."
    },

    // =================================================
    // 🔵 ADVANCED LEVEL (LOCKED)
    // =================================================

    {
      id: "hb-q19",
      question: "Cellular respiration primarily occurs in which organelle?",
      type: "mcq",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
      correctAnswer: "Mitochondria",
      explanation: "Mitochondria generate ATP through cellular respiration."
    },

    {
      id: "hb-q20",
      question: "Which molecule stores genetic information?",
      type: "mcq",
      options: ["RNA", "Protein", "DNA", "ATP"],
      correctAnswer: "DNA",
      explanation: "DNA carries hereditary instructions passed from parents to offspring."
    },

    {
      id: "hb-q21",
      question: "Which brain lobe is responsible for vision?",
      type: "mcq",
      options: ["Frontal", "Temporal", "Parietal", "Occipital"],
      correctAnswer: "Occipital",
      explanation: "The occipital lobe processes visual information."
    },

    {
      id: "hb-q22",
      question: "Neurotransmitters are best described as:",
      type: "mcq",
      options: [
        "Electrical impulses",
        "Chemical messengers",
        "Hormones",
        "Blood proteins"
      ],
      correctAnswer: "Chemical messengers",
      explanation: "Neurotransmitters transmit signals between nerve cells."
    },

    {
      id: "hb-q23",
      question: "Which feedback mechanism stabilizes hormone levels?",
      type: "mcq",
      options: [
        "Positive feedback",
        "Negative feedback",
        "Random signaling",
        "Electrical feedback"
      ],
      correctAnswer: "Negative feedback",
      explanation: "Negative feedback prevents overproduction of hormones."
    }, 
    {
      id: "hb-q24",
      question: "Which level of organization represents a complete human being?",
      type: "mcq",
      options: ["Organ", "Organ system", "Cell", "Organism"],
      correctAnswer: "Organism",
      explanation: "All organ systems together form a complete living human being."
    },

    {
      id: "hb-q25",
      question: "Which tissue type lines organs and body surfaces?",
      type: "mcq",
      options: ["Muscle", "Connective", "Nervous", "Epithelial"],
      correctAnswer: "Epithelial",
      explanation: "Epithelial tissue forms coverings, linings, and glands."
    },

    {
      id: "hb-q26",
      question: "Which organ is considered the largest organ of the body?",
      type: "mcq",
      options: ["Liver", "Skin", "Lungs", "Brain"],
      correctAnswer: "Skin",
      explanation: "Skin is the largest organ and part of the integumentary system."
    },

    {
      id: "hb-q27",
      question: "Which muscle type is found in the walls of the stomach and intestines?",
      type: "mcq",
      options: ["Skeletal", "Cardiac", "Smooth", "Voluntary"],
      correctAnswer: "Smooth",
      explanation: "Smooth muscle controls involuntary movements inside organs."
    },

    {
      id: "hb-q28",
      question: "Which system helps the body fight diseases?",
      type: "mcq",
      options: ["Digestive", "Immune", "Respiratory", "Muscular"],
      correctAnswer: "Immune",
      explanation: "The immune system defends the body against pathogens."
    },

    // =================================================
    // 🟡 INTERMEDIATE (SYSTEM CONNECTIONS)
    // =================================================

    {
      id: "hb-q29",
      question: "Which organ system works closely with the muscular system to produce movement?",
      type: "mcq",
      options: ["Digestive", "Skeletal", "Respiratory", "Excretory"],
      correctAnswer: "Skeletal",
      explanation: "Muscles pull on bones to create movement."
    },

    {
      id: "hb-q30",
      question: "Which organ produces insulin?",
      type: "mcq",
      options: ["Liver", "Pancreas", "Kidney", "Adrenal gland"],
      correctAnswer: "Pancreas",
      explanation: "The pancreas releases insulin to regulate blood sugar."
    },

    {
      id: "hb-q31",
      question: "Which blood vessels carry blood away from the heart?",
      type: "mcq",
      options: ["Veins", "Capillaries", "Arteries", "Venules"],
      correctAnswer: "Arteries",
      explanation: "Arteries transport oxygenated blood away from the heart."
    },

    {
      id: "hb-q32",
      question: "Which system controls long-term body processes using hormones?",
      type: "mcq",
      options: ["Nervous", "Endocrine", "Circulatory", "Respiratory"],
      correctAnswer: "Endocrine",
      explanation: "The endocrine system regulates growth, metabolism, and development."
    },

    {
      id: "hb-q33",
      question: "Which part of the digestive system absorbs most of the water?",
      type: "mcq",
      options: ["Stomach", "Small intestine", "Large intestine", "Esophagus"],
      correctAnswer: "Large intestine",
      explanation: "The large intestine absorbs water and forms solid waste."
    },

    {
      id: "hb-q34",
      question: "Reflex actions are mainly controlled by the:",
      type: "mcq",
      options: ["Brain", "Heart", "Spinal cord", "Endocrine glands"],
      correctAnswer: "Spinal cord",
      explanation: "Reflex actions bypass the brain for faster response."
    },

    // =================================================
    // 🔵 ADVANCED (CONCEPTUAL + EXPLANATORY)
    // =================================================

    {
      id: "hb-q35",
      question: "Why are mitochondria more numerous in muscle cells?",
      type: "mcq",
      options: [
        "They control muscle movement",
        "They store calcium",
        "They provide more energy",
        "They protect muscle fibers"
      ],
      correctAnswer: "They provide more energy",
      explanation: "Muscle cells need large amounts of ATP for contraction, so they contain many mitochondria."
    },

    {
      id: "hb-q36",
      question: "Why are red blood cells shaped like biconcave discs?",
      type: "mcq",
      options: [
        "To store more DNA",
        "To move faster",
        "To increase surface area for oxygen exchange",
        "To protect against bacteria"
      ],
      correctAnswer: "To increase surface area for oxygen exchange",
      explanation: "The biconcave shape increases surface area and allows flexibility in capillaries."
    },

    {
      id: "hb-q37",
      question: "What happens if homeostasis is not maintained?",
      type: "mcq",
      options: [
        "The body becomes stronger",
        "Cells stop dividing",
        "Body systems fail",
        "Digestion improves"
      ],
      correctAnswer: "Body systems fail",
      explanation: "Without stable internal conditions, enzymes and cells cannot function properly."
    },

    {
      id: "hb-q38",
      question: "Why is negative feedback important in hormonal regulation?",
      type: "mcq",
      options: [
        "It increases hormone production",
        "It stops all hormones",
        "It maintains balance",
        "It causes growth"
      ],
      correctAnswer: "It maintains balance",
      explanation: "Negative feedback prevents excessive hormone secretion and keeps levels stable."
    },

    {
      id: "hb-q39",
      question: "Why is oxygen essential for cellular respiration?",
      type: "mcq",
      options: [
        "It cools the cell",
        "It removes carbon dioxide",
        "It helps release maximum energy from glucose",
        "It produces hormones"
      ],
      correctAnswer: "It helps release maximum energy from glucose",
      explanation: "Oxygen allows complete breakdown of glucose to produce ATP efficiently."
    },

    {
      id: "hb-q40",
      question: "Why are neurons unable to divide after maturity?",
      type: "mcq",
      options: [
        "They lack nucleus",
        "They lose DNA",
        "They are highly specialized",
        "They consume too much energy"
      ],
      correctAnswer: "They are highly specialized",
      explanation: "Neurons lose their ability to divide as they specialize for signal transmission."
    }

  ]
},

// Health & Well-Being
{
  id: "health-well-being-quiz",
  title: "Health & Well-Being",
  description: "Physical vitality, mental balance, and healthy living",
  icon: "Heart",
  color: "from-red-500 to-pink-600",
  questions: [

    // =================================================
    // 🟢 BEGINNER LEVEL
    // =================================================

    {
      id: "hw-q1",
      question: "According to WHO, health is defined as:",
      type: "mcq",
      options: [
        "Absence of disease",
        "Physical fitness only",
        "Complete physical, mental, and social well-being",
        "Freedom from illness"
      ],
      correctAnswer: "Complete physical, mental, and social well-being",
      explanation: "WHO emphasizes a holistic definition of health."
    },

    {
      id: "hw-q2",
      question: "Which is NOT a dimension of health?",
      type: "mcq",
      options: ["Physical", "Mental", "Social", "Financial"],
      correctAnswer: "Financial",
      explanation: "WHO includes physical, mental, and social well-being."
    },

    {
      id: "hw-q3",
      question: "Well-being is best described as:",
      type: "mcq",
      options: [
        "A destination",
        "Absence of illness",
        "An active lifelong process",
        "Medical treatment"
      ],
      correctAnswer: "An active lifelong process",
      explanation: "Well-being depends on daily healthy choices."
    },

    {
      id: "hw-q4",
      question: "Which nutrient is the body's main source of energy?",
      type: "mcq",
      options: ["Protein", "Fat", "Carbohydrates", "Vitamins"],
      correctAnswer: "Carbohydrates",
      explanation: "Carbohydrates provide quick and efficient energy."
    },

    {
      id: "hw-q5",
      question: "Which nutrient is essential for muscle repair?",
      type: "mcq",
      options: ["Fat", "Protein", "Vitamin C", "Carbohydrate"],
      correctAnswer: "Protein",
      explanation: "Proteins build and repair body tissues."
    },

    {
      id: "hw-q6",
      question: "Which nutrient helps regulate body functions?",
      type: "mcq",
      options: ["Carbohydrates", "Fats", "Proteins", "Vitamins & Minerals"],
      correctAnswer: "Vitamins & Minerals",
      explanation: "Micronutrients regulate metabolism and immunity."
    },

    {
      id: "hw-q7",
      question: "Mindful eating helps prevent:",
      type: "mcq",
      options: ["Hunger", "Overeating", "Digestion", "Nutrition"],
      correctAnswer: "Overeating",
      explanation: "Eating slowly allows fullness signals to reach the brain."
    },

    {
      id: "hw-q8",
      question: "Digestion begins in the:",
      type: "mcq",
      options: ["Stomach", "Intestine", "Mouth", "Liver"],
      correctAnswer: "Mouth",
      explanation: "Chewing and saliva start digestion."
    },

    {
      id: "hw-q9",
      question: "Which type of exercise improves heart health?",
      type: "mcq",
      options: ["Flexibility", "Strength training", "Aerobic", "Stretching"],
      correctAnswer: "Aerobic",
      explanation: "Cardio exercises strengthen the heart and lungs."
    },

    {
      id: "hw-q10",
      question: "Which chemical released during exercise improves mood?",
      type: "mcq",
      options: ["Insulin", "Cortisol", "Endorphins", "Adrenaline"],
      correctAnswer: "Endorphins",
      explanation: "Endorphins are natural feel-good chemicals."
    },

    // =================================================
    // 🟡 INTERMEDIATE LEVEL
    // =================================================

    {
      id: "hw-q11",
      question: "The most effective way to prevent infections is:",
      type: "mcq",
      options: [
        "Taking antibiotics",
        "Handwashing with soap",
        "Wearing gloves",
        "Using sanitizer occasionally"
      ],
      correctAnswer: "Handwashing with soap",
      explanation: "Handwashing breaks the chain of infection."
    },

    {
      id: "hw-q12",
      question: "Plaque buildup in the mouth causes:",
      type: "mcq",
      options: ["Hair loss", "Heartburn", "Cavities and gum disease", "Fatigue"],
      correctAnswer: "Cavities and gum disease",
      explanation: "Plaque is a film of bacteria damaging teeth."
    },

    {
      id: "hw-q13",
      question: "Which disease is communicable?",
      type: "mcq",
      options: ["Diabetes", "Cancer", "Tuberculosis", "Heart disease"],
      correctAnswer: "Tuberculosis",
      explanation: "TB spreads from person to person."
    },

    {
      id: "hw-q14",
      question: "Non-communicable diseases are mainly caused by:",
      type: "mcq",
      options: [
        "Viruses",
        "Bacteria",
        "Lifestyle factors",
        "Fungi"
      ],
      correctAnswer: "Lifestyle factors",
      explanation: "Poor diet, inactivity, and smoking increase risk."
    },

    {
      id: "hw-q15",
      question: "Which system fights disease in the body?",
      type: "mcq",
      options: ["Digestive", "Respiratory", "Immune", "Nervous"],
      correctAnswer: "Immune",
      explanation: "White blood cells defend the body."
    },

    {
      id: "hw-q16",
      question: "Vaccines work by:",
      type: "mcq",
      options: [
        "Killing all viruses",
        "Replacing immunity",
        "Training the immune system",
        "Curing diseases instantly"
      ],
      correctAnswer: "Training the immune system",
      explanation: "Vaccines prepare the body to fight infections."
    },

    {
      id: "hw-q17",
      question: "Chronic stress mainly increases which hormone?",
      type: "mcq",
      options: ["Insulin", "Melatonin", "Cortisol", "Serotonin"],
      correctAnswer: "Cortisol",
      explanation: "High cortisol damages long-term health."
    },

    {
      id: "hw-q18",
      question: "Which activity improves Emotional Intelligence?",
      type: "mcq",
      options: [
        "Avoiding emotions",
        "Ignoring others",
        "Understanding feelings",
        "Suppressing stress"
      ],
      correctAnswer: "Understanding feelings",
      explanation: "EQ is awareness of emotions in self and others."
    },

    {
      id: "hw-q19",
      question: "REM sleep is mainly responsible for:",
      type: "mcq",
      options: [
        "Muscle repair",
        "Bone growth",
        "Memory consolidation",
        "Digestion"
      ],
      correctAnswer: "Memory consolidation",
      explanation: "REM sleep supports brain function and learning."
    },

    {
      id: "hw-q20",
      question: "Blue light exposure at night reduces:",
      type: "mcq",
      options: ["Cortisol", "Serotonin", "Melatonin", "Insulin"],
      correctAnswer: "Melatonin",
      explanation: "Melatonin controls sleep cycles."
    },

    // =================================================
    // 🔵 ADVANCED LEVEL
    // =================================================

    {
      id: "hw-q21",
      question: "Type 2 diabetes is primarily caused by:",
      type: "mcq",
      options: [
        "Insulin deficiency",
        "Insulin resistance",
        "Lack of sugar",
        "Infection"
      ],
      correctAnswer: "Insulin resistance",
      explanation: "Cells stop responding to insulin due to lifestyle factors."
    },

    {
      id: "hw-q22",
      question: "Hypertension is often called the 'Silent Killer' because:",
      type: "mcq",
      options: [
        "It spreads silently",
        "It shows no early symptoms",
        "It causes instant death",
        "It affects only elderly"
      ],
      correctAnswer: "It shows no early symptoms",
      explanation: "People may not know they have high BP."
    },

    {
      id: "hw-q23",
      question: "ATP is best described as:",
      type: "mcq",
      options: [
        "A hormone",
        "A vitamin",
        "Energy currency of the cell",
        "A protein"
      ],
      correctAnswer: "Energy currency of the cell",
      explanation: "ATP powers all cellular activity."
    },

    {
      id: "hw-q24",
      question: "The gut microbiome mainly influences:",
      type: "mcq",
      options: [
        "Vision",
        "Hair growth",
        "Immunity and mood",
        "Bone size"
      ],
      correctAnswer: "Immunity and mood",
      explanation: "Gut bacteria affect serotonin and immune response."
    },

    {
      id: "hw-q25",
      question: "R0 in epidemiology refers to:",
      type: "mcq",
      options: [
        "Recovery rate",
        "Death rate",
        "Reproduction number",
        "Risk factor"
      ],
      correctAnswer: "Reproduction number",
      explanation: "It shows how fast a disease spreads."
    },

    {
      id: "hw-q26",
      question: "A disease transmitted from animals to humans is called:",
      type: "mcq",
      options: ["Endemic", "Epidemic", "Zoonotic", "Genetic"],
      correctAnswer: "Zoonotic",
      explanation: "Examples include COVID-19 and Ebola."
    },

    {
      id: "hw-q27",
      question: "Herd immunity protects:",
      type: "mcq",
      options: [
        "Only vaccinated people",
        "Only infected people",
        "Vulnerable populations",
        "Governments"
      ],
      correctAnswer: "Vulnerable populations",
      explanation: "It reduces disease spread in the community."
    },

    {
      id: "hw-q28",
      question: "Which healthcare model aims to cover everyone without financial hardship?",
      type: "mcq",
      options: [
        "Private insurance",
        "Out-of-pocket",
        "Universal Health Coverage",
        "Charity model"
      ],
      correctAnswer: "Universal Health Coverage",
      explanation: "UHC ensures access to essential healthcare."
    },

    {
      id: "hw-q29",
      question: "Primary healthcare is most effective because it:",
      type: "mcq",
      options: [
        "Is expensive",
        "Handles early prevention",
        "Requires hospitals",
        "Needs specialists"
      ],
      correctAnswer: "Handles early prevention",
      explanation: "It reduces long-term healthcare costs."
    },

    {
      id: "hw-q30",
      question: "Health & well-being is best maintained through:",
      type: "mcq",
      options: [
        "Medication alone",
        "Occasional exercise",
        "Balanced lifestyle and habits",
        "Avoiding illness"
      ],
      correctAnswer: "Balanced lifestyle and habits",
      explanation: "Daily habits shape long-term health."
    }

  ]
},

// Science and technology
{
  id: "science-technology-quiz",
  title: "Science & Technology",
  description: "Conceptual understanding of science, discoveries, and modern technologies",
  icon: "Atom",
  color: "from-indigo-500 to-blue-600",
  questions: [

    // =================================================
    // 🟢 BEGINNER LEVEL
    // =================================================

    {
      id: "st-q1",
      question: "The word 'science' comes from the Latin word 'scientia', which means:",
      type: "mcq",
      options: ["Experiment", "Nature", "Knowledge", "Observation"],
      correctAnswer: "Knowledge",
      explanation: "‘Scientia’ literally means knowledge, reflecting science’s goal of understanding the natural world."
    },

    {
      id: "st-q2",
      question: "Which of the following is essential for a scientific idea to be reliable?",
      type: "mcq",
      options: [
        "It must be popular",
        "It must be testable and repeatable",
        "It must be old",
        "It must be approved by authority"
      ],
      correctAnswer: "It must be testable and repeatable",
      explanation: "Scientific knowledge must be verifiable through repeated experiments."
    },

    {
      id: "st-q3",
      question: "Which branch of science studies living organisms?",
      type: "mcq",
      options: ["Physics", "Chemistry", "Biology", "Astronomy"],
      correctAnswer: "Biology",
      explanation: "Biology focuses on life and living systems."
    },

    {
      id: "st-q4",
      question: "Which of the following is a physical science?",
      type: "mcq",
      options: ["Botany", "Zoology", "Physics", "Ecology"],
      correctAnswer: "Physics",
      explanation: "Physics studies matter, energy, and forces."
    },

    {
      id: "st-q5",
      question: "Which scientific process involves changing variables under controlled conditions?",
      type: "mcq",
      options: ["Observation", "Experimentation", "Prediction", "Conclusion"],
      correctAnswer: "Experimentation",
      explanation: "Experiments test hypotheses by controlling variables."
    },

    {
      id: "st-q6",
      question: "Which invention helped spread knowledge rapidly during early modern history?",
      type: "mcq",
      options: ["Wheel", "Printing Press", "Steam Engine", "Telephone"],
      correctAnswer: "Printing Press",
      explanation: "The printing press enabled mass production of books and knowledge."
    },

    {
      id: "st-q7",
      question: "Which tool is used to measure temperature?",
      type: "mcq",
      options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
      correctAnswer: "Thermometer",
      explanation: "A thermometer measures temperature."
    },

    {
      id: "st-q8",
      question: "Which form of energy comes directly from the Sun?",
      type: "mcq",
      options: ["Nuclear", "Solar", "Chemical", "Thermal"],
      correctAnswer: "Solar",
      explanation: "Solar energy is harnessed from sunlight."
    },

    {
      id: "st-q9",
      question: "Which type of transport travels through the air?",
      type: "mcq",
      options: ["Ship", "Train", "Airplane", "Submarine"],
      correctAnswer: "Airplane",
      explanation: "Airplanes use aerodynamic lift to fly."
    },

    {
      id: "st-q10",
      question: "Which technology allows instant global communication?",
      type: "mcq",
      options: ["Telegraph", "Postal service", "Internet", "Printing"],
      correctAnswer: "Internet",
      explanation: "The internet enables real-time digital communication worldwide."
    },

    // =================================================
    // 🟡 INTERMEDIATE LEVEL
    // =================================================

    {
      id: "st-q11",
      question: "Which law states that energy cannot be created or destroyed?",
      type: "mcq",
      options: [
        "Newton’s First Law",
        "Law of Conservation of Energy",
        "Ohm’s Law",
        "Boyle’s Law"
      ],
      correctAnswer: "Law of Conservation of Energy",
      explanation: "Energy only changes form, not amount."
    },

    {
      id: "st-q12",
      question: "Light is classified as:",
      type: "mcq",
      options: [
        "Only a particle",
        "Only a wave",
        "A mechanical wave",
        "An electromagnetic wave"
      ],
      correctAnswer: "An electromagnetic wave",
      explanation: "Light can travel through vacuum and shows wave–particle duality."
    },

    {
      id: "st-q13",
      question: "Which state of matter has particles that move freely and spread out?",
      type: "mcq",
      options: ["Solid", "Liquid", "Gas", "Plasma"],
      correctAnswer: "Gas",
      explanation: "Gas particles move rapidly and occupy available space."
    },

    {
      id: "st-q14",
      question: "Which process converts sunlight into chemical energy in plants?",
      type: "mcq",
      options: ["Respiration", "Transpiration", "Photosynthesis", "Fermentation"],
      correctAnswer: "Photosynthesis",
      explanation: "Photosynthesis forms the base of most food chains."
    },

    {
      id: "st-q15",
      question: "Which Earth system includes oceans, rivers, and ice?",
      type: "mcq",
      options: ["Atmosphere", "Biosphere", "Geosphere", "Hydrosphere"],
      correctAnswer: "Hydrosphere",
      explanation: "The hydrosphere includes all water on Earth."
    },

    {
      id: "st-q16",
      question: "Greenhouse gases primarily affect:",
      type: "mcq",
      options: ["Soil fertility", "Global temperature", "Ocean salinity", "Wind speed"],
      correctAnswer: "Global temperature",
      explanation: "They trap heat and influence climate."
    },

    {
      id: "st-q17",
      question: "Which is a renewable energy source?",
      type: "mcq",
      options: ["Coal", "Petroleum", "Natural Gas", "Wind"],
      correctAnswer: "Wind",
      explanation: "Wind energy is naturally replenished."
    },

    {
      id: "st-q18",
      question: "Which invention made modern computing possible?",
      type: "mcq",
      options: ["Wheel", "Steam engine", "Semiconductor transistor", "Telegraph"],
      correctAnswer: "Semiconductor transistor",
      explanation: "Transistors are the building blocks of electronic circuits."
    },

    {
      id: "st-q19",
      question: "Satellites are mainly used for:",
      type: "mcq",
      options: [
        "Mining",
        "Communication and navigation",
        "Manufacturing",
        "Agriculture only"
      ],
      correctAnswer: "Communication and navigation",
      explanation: "Satellites enable GPS, TV, internet, and weather monitoring."
    },

    {
      id: "st-q20",
      question: "Automation primarily improves:",
      type: "mcq",
      options: ["Creativity", "Speed and precision", "Manual labor", "Random output"],
      correctAnswer: "Speed and precision",
      explanation: "Automated systems perform tasks efficiently and accurately."
    },

    // =================================================
    // 🔵 ADVANCED LEVEL (EXTRA – WITH DETAILED EXPLANATIONS)
    // =================================================

    {
      id: "st-q21",
      question: "Wave–particle duality means that light and electrons:",
      type: "mcq",
      options: [
        "Are always waves",
        "Are always particles",
        "Show both wave and particle behavior",
        "Have no physical properties"
      ],
      correctAnswer: "Show both wave and particle behavior",
      explanation: "Quantum experiments show particles can interfere like waves yet hit detectors like particles."
    },

    {
      id: "st-q22",
      question: "Which quantum property allows particles to exist in multiple states at once?",
      type: "mcq",
      options: ["Tunneling", "Entanglement", "Superposition", "Diffraction"],
      correctAnswer: "Superposition",
      explanation: "In quantum mechanics, systems remain in combined states until measured."
    },

    {
      id: "st-q23",
      question: "CRISPR technology is primarily used for:",
      type: "mcq",
      options: [
        "Protein digestion",
        "Gene editing",
        "Vaccination",
        "DNA replication"
      ],
      correctAnswer: "Gene editing",
      explanation: "CRISPR allows precise cutting and modification of DNA sequences."
    },

    {
      id: "st-q24",
      question: "Einstein’s equation E = mc² shows that:",
      type: "mcq",
      options: [
        "Energy and mass are independent",
        "Mass can be converted into energy",
        "Energy travels faster than light",
        "Time is absolute"
      ],
      correctAnswer: "Mass can be converted into energy",
      explanation: "This principle explains nuclear energy and stellar processes."
    },

    {
      id: "st-q25",
      question: "Nuclear fusion differs from fission because fusion:",
      type: "mcq",
      options: [
        "Splits heavy atoms",
        "Releases less energy",
        "Combines light nuclei",
        "Produces radioactive waste only"
      ],
      correctAnswer: "Combines light nuclei",
      explanation: "Fusion powers the Sun and releases enormous energy."
    },

    {
      id: "st-q26",
      question: "Machine learning differs from traditional programming because it:",
      type: "mcq",
      options: [
        "Uses no algorithms",
        "Learns patterns from data",
        "Cannot improve over time",
        "Does not require computers"
      ],
      correctAnswer: "Learns patterns from data",
      explanation: "ML models improve by learning from examples rather than fixed rules."
    },

    {
      id: "st-q27",
      question: "Nanotechnology works at the scale of:",
      type: "mcq",
      options: [
        "Meters",
        "Millimeters",
        "Micrometers",
        "Nanometers"
      ],
      correctAnswer: "Nanometers",
      explanation: "Nanotechnology manipulates matter at billionths of a meter."
    },

    {
      id: "st-q28",
      question: "GPS systems require relativistic corrections because:",
      type: "mcq",
      options: [
        "Satellites are heavy",
        "Signals travel slowly",
        "Time runs differently in orbit",
        "Earth is flat"
      ],
      correctAnswer: "Time runs differently in orbit",
      explanation: "Relativity predicts time dilation affecting satellite clocks."
    },

    {
      id: "st-q29",
      question: "Ethical responsibility in science mainly ensures:",
      type: "mcq",
      options: [
        "Faster inventions",
        "Profit maximization",
        "Safe and fair use of knowledge",
        "No regulation"
      ],
      correctAnswer: "Safe and fair use of knowledge",
      explanation: "Ethics prevent misuse and harm from scientific advances."
    },

    {
      id: "st-q30",
      question: "Which emerging technology combines data, algorithms, and computing power?",
      type: "mcq",
      options: [
        "Biotechnology",
        "Artificial Intelligence",
        "Nuclear physics",
        "Geology"
      ],
      correctAnswer: "Artificial Intelligence",
      explanation: "AI systems learn from data to make predictions and decisions."
    }

  ]
},


// Technology & Digital World







  // {
  //   id: "current-affairs",
  //   title: "Current Affairs",
  //   description: "Test your knowledge of recent national and international events",
  //   icon: "Newspaper",
  //   color: "from-blue-500 to-cyan-500",
  //   questions: [
  //     {
  //       id: "ca-q1",
  //       question: "Which scheme provides health insurance coverage up to ₹5 lakh per family per year?",
  //       type: "mcq",
  //       options: ["PM Jan Dhan Yojana", "Ayushman Bharat", "PM Kisan", "Sukanya Samriddhi"],
  //       correctAnswer: "Ayushman Bharat",
  //       explanation: "Ayushman Bharat (PM-JAY) provides health insurance coverage of ₹5 lakh per family per year for secondary and tertiary care hospitalization."
  //     },
  //     {
  //       id: "ca-q2",
  //       question: "The United Nations was founded in 1945.",
  //       type: "true_false",
  //       correctAnswer: "true",
  //       explanation: "The United Nations was established on October 24, 1945, after World War II."
  //     },
  //     {
  //       id: "ca-q3",
  //       question: "How many member states does the United Nations currently have?",
  //       type: "mcq",
  //       options: ["189", "193", "197", "201"],
  //       correctAnswer: "193",
  //       explanation: "The United Nations has 193 member states as of 2024."
  //     },
  //     {
  //       id: "ca-q4",
  //       question: "India is a permanent member of the UN Security Council.",
  //       type: "true_false",
  //       correctAnswer: "false",
  //       explanation: "India is not a permanent member of the UN Security Council. The five permanent members are USA, UK, France, Russia, and China."
  //     },
  //     {
  //       id: "ca-q5",
  //       question: "Which organization is responsible for international public health?",
  //       type: "mcq",
  //       options: ["UNICEF", "WHO", "IMF", "WTO"],
  //       correctAnswer: "WHO",
  //       explanation: "The World Health Organization (WHO) is the UN agency responsible for international public health."
  //     }
  //   ]
  // },
  // {
  //   id: "science-technology",
  //   title: "Science & Technology",
  //   description: "Test your understanding of scientific concepts and tech advancements",
  //   icon: "Atom",
  //   color: "from-purple-500 to-pink-500",
  //   questions: [
  //     {
  //       id: "st-q1",
  //       question: "Chandrayaan-3 landed near which region of the Moon?",
  //       type: "mcq",
  //       options: ["North Pole", "Equator", "South Pole", "Sea of Tranquility"],
  //       correctAnswer: "South Pole",
  //       explanation: "Chandrayaan-3 made history by successfully landing near the Moon's south pole in August 2023."
  //     },
  //     {
  //       id: "st-q2",
  //       question: "ISRO was established in 1969.",
  //       type: "true_false",
  //       correctAnswer: "true",
  //       explanation: "The Indian Space Research Organisation (ISRO) was established on August 15, 1969."
  //     },
  //     {
  //       id: "st-q3",
  //       question: "What is the name of India's Mars mission?",
  //       type: "mcq",
  //       options: ["Voyager", "Mangalyaan", "Chandrayaan", "Aryabhata"],
  //       correctAnswer: "Mangalyaan",
  //       explanation: "Mars Orbiter Mission (Mangalyaan) was India's first interplanetary mission, launched in 2013."
  //     },
  //     {
  //       id: "st-q4",
  //       question: "Machine Learning is a subset of Artificial Intelligence.",
  //       type: "true_false",
  //       correctAnswer: "true",
  //       explanation: "Machine Learning (ML) is indeed a subset of Artificial Intelligence that enables systems to learn from data."
  //     },
  //     {
  //       id: "st-q5",
  //       question: "Which country was the first to land near the Moon's south pole?",
  //       type: "mcq",
  //       options: ["USA", "China", "India", "Russia"],
  //       correctAnswer: "India",
  //       explanation: "India became the first country to land near the Moon's south pole with Chandrayaan-3 in August 2023."
  //     }
  //   ]
  // },
  // {
  //   id: "history",
  //   title: "History",
  //   description: "Test your knowledge of Indian and world history",
  //   icon: "Landmark",
  //   color: "from-amber-500 to-orange-500",
  //   questions: [
  //     {
  //       id: "h-q1",
  //       question: "When was the Indian National Congress founded?",
  //       type: "mcq",
  //       options: ["1857", "1885", "1905", "1920"],
  //       correctAnswer: "1885",
  //       explanation: "The Indian National Congress was founded in 1885 by A.O. Hume in Bombay."
  //     },
  //     {
  //       id: "h-q2",
  //       question: "India gained independence on August 15, 1947.",
  //       type: "true_false",
  //       correctAnswer: "true",
  //       explanation: "India achieved independence from British colonial rule on August 15, 1947."
  //     },
  //     {
  //       id: "h-q3",
  //       question: "Which Indus Valley city had an advanced drainage system?",
  //       type: "mcq",
  //       options: ["Delhi", "Pataliputra", "Mohenjo-daro", "Varanasi"],
  //       correctAnswer: "Mohenjo-daro",
  //       explanation: "Mohenjo-daro was one of the major cities of the Indus Valley Civilization with sophisticated urban planning and drainage."
  //     },
  //     {
  //       id: "h-q4",
  //       question: "The Quit India Movement was launched in 1942.",
  //       type: "true_false",
  //       correctAnswer: "true",
  //       explanation: "The Quit India Movement was launched by Mahatma Gandhi on August 8, 1942."
  //     },
  //     {
  //       id: "h-q5",
  //       question: "Which emperor is known for promoting Buddhism after the Kalinga War?",
  //       type: "mcq",
  //       options: ["Chandragupta Maurya", "Ashoka", "Akbar", "Samudragupta"],
  //       correctAnswer: "Ashoka",
  //       explanation: "Emperor Ashoka of the Maurya dynasty promoted Buddhism after witnessing the devastation of the Kalinga War."
  //     }
  //   ]
  // },
  // {
  //   id: "geography",
  //   title: "Geography",
  //   description: "Test your knowledge of physical and human geography",
  //   icon: "Globe",
  //   color: "from-green-500 to-emerald-500",
  //   questions: [
  //     {
  //       id: "g-q1",
  //       question: "Which is the longest river in the world?",
  //       type: "mcq",
  //       options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
  //       correctAnswer: "Nile",
  //       explanation: "The Nile is the longest river in the world, flowing for approximately 6,650 km through 11 African countries."
  //     },
  //     {
  //       id: "g-q2",
  //       question: "The Himalayas are fold mountains.",
  //       type: "true_false",
  //       correctAnswer: "true",
  //       explanation: "The Himalayas are young fold mountains formed by the collision of the Indian and Eurasian tectonic plates."
  //     },
  //     {
  //       id: "g-q3",
  //       question: "Which is the world's deepest lake?",
  //       type: "mcq",
  //       options: ["Caspian Sea", "Lake Superior", "Lake Baikal", "Lake Victoria"],
  //       correctAnswer: "Lake Baikal",
  //       explanation: "Lake Baikal in Russia is the world's deepest lake with a maximum depth of about 1,642 meters."
  //     },
  //     {
  //       id: "g-q4",
  //       question: "The Deccan Plateau covers most of peninsular India.",
  //       type: "true_false",
  //       correctAnswer: "true",
  //       explanation: "The Deccan Plateau is a large triangular plateau that covers most of the Indian peninsula."
  //     },
  //     {
  //       id: "g-q5",
  //       question: "Which river has the largest drainage basin in the world?",
  //       type: "mcq",
  //       options: ["Nile", "Mississippi", "Amazon", "Ganges"],
  //       correctAnswer: "Amazon",
  //       explanation: "The Amazon River has the largest drainage basin in the world, covering about 7 million square kilometers."
  //     }
  //   ]
  // },
  // {
  //   id: "indian-polity",
  //   title: "Indian Polity",
  //   description: "Test your understanding of Indian Constitution and governance",
  //   icon: "Scale",
  //   color: "from-red-500 to-rose-500",
  //   questions: [
  //     {
  //       id: "ip-q1",
  //       question: "When did the Indian Constitution come into effect?",
  //       type: "mcq",
  //       options: ["August 15, 1947", "November 26, 1949", "January 26, 1950", "January 30, 1948"],
  //       correctAnswer: "January 26, 1950",
  //       explanation: "The Indian Constitution came into effect on January 26, 1950, which is celebrated as Republic Day."
  //     },
  //     {
  //       id: "ip-q2",
  //       question: "Dr. B.R. Ambedkar is known as the Father of the Indian Constitution.",
  //       type: "true_false",
  //       correctAnswer: "true",
  //       explanation: "Dr. B.R. Ambedkar was the chairman of the Constitution Drafting Committee and is called the Father of the Constitution."
  //     },
  //     {
  //       id: "ip-q3",
  //       question: "How many elected members are there in the Lok Sabha?",
  //       type: "mcq",
  //       options: ["250", "543", "545", "552"],
  //       correctAnswer: "543",
  //       explanation: "The Lok Sabha has 543 elected members representing constituencies across India."
  //     },
  //     {
  //       id: "ip-q4",
  //       question: "Fundamental Rights are mentioned in Part III of the Constitution.",
  //       type: "true_false",
  //       correctAnswer: "true",
  //       explanation: "Fundamental Rights are guaranteed in Part III of the Indian Constitution (Articles 12-35)."
  //     },
  //     {
  //       id: "ip-q5",
  //       question: "Who is the constitutional head of a state in India?",
  //       type: "mcq",
  //       options: ["Chief Minister", "Governor", "President", "Speaker"],
  //       correctAnswer: "Governor",
  //       explanation: "The Governor is the constitutional head of a state, appointed by the President of India."
  //     }
  //   ]
  // },
  // {
  //   id: "environment",
  //   title: "Environment",
  //   description: "Test your knowledge of ecology and environmental conservation",
  //   icon: "TreePine",
  //   color: "from-teal-500 to-green-500",
  //   questions: [
  //     {
  //       id: "e-q1",
  //       question: "What is India's target year for achieving net-zero emissions?",
  //       type: "mcq",
  //       options: ["2050", "2060", "2070", "2080"],
  //       correctAnswer: "2070",
  //       explanation: "India committed to achieving net-zero carbon emissions by 2070 at COP26 in Glasgow."
  //     },
  //     {
  //       id: "e-q2",
  //       question: "Project Tiger was launched in 1973.",
  //       type: "true_false",
  //       correctAnswer: "true",
  //       explanation: "Project Tiger was launched on April 1, 1973, to protect Bengal tigers and their habitats."
  //     },
  //     {
  //       id: "e-q3",
  //       question: "Which of these is a biodiversity hotspot in India?",
  //       type: "mcq",
  //       options: ["Thar Desert", "Indo-Gangetic Plains", "Western Ghats", "Central Highlands"],
  //       correctAnswer: "Western Ghats",
  //       explanation: "The Western Ghats and Eastern Himalayas are recognized biodiversity hotspots in India."
  //     },
  //     {
  //       id: "e-q4",
  //       question: "The Paris Agreement aims to limit global warming to 1.5°C above pre-industrial levels.",
  //       type: "true_false",
  //       correctAnswer: "true",
  //       explanation: "The Paris Agreement (2015) aims to limit global temperature rise to 1.5°C above pre-industrial levels."
  //     },
  //     {
  //       id: "e-q5",
  //       question: "How many national parks does India have?",
  //       type: "mcq",
  //       options: ["86", "96", "106", "116"],
  //       correctAnswer: "106",
  //       explanation: "India has 106 national parks that protect wildlife and natural habitats."
  //     }
  //   ]
  // },
  // {
  //   id: "sports",
  //   title: "Sports",
  //   description: "Test your knowledge of sports achievements and tournaments",
  //   icon: "Medal",
  //   color: "from-yellow-500 to-amber-500",
  //   questions: [
  //     {
  //       id: "sp-q1",
  //       question: "In which year did India first win the Cricket World Cup?",
  //       type: "mcq",
  //       options: ["1975", "1983", "2007", "2011"],
  //       correctAnswer: "1983",
  //       explanation: "India won the Cricket World Cup for the first time in 1983 under the captaincy of Kapil Dev."
  //     },
  //     {
  //       id: "sp-q2",
  //       question: "Neeraj Chopra won India's first Olympic gold in athletics.",
  //       type: "true_false",
  //       correctAnswer: "true",
  //       explanation: "Neeraj Chopra won India's first athletics gold medal in the javelin throw at the 2020 Tokyo Olympics."
  //     },
  //     {
  //       id: "sp-q3",
  //       question: "Who won India's first individual Olympic gold medal?",
  //       type: "mcq",
  //       options: ["Sachin Tendulkar", "P.T. Usha", "Abhinav Bindra", "Mary Kom"],
  //       correctAnswer: "Abhinav Bindra",
  //       explanation: "Abhinav Bindra won India's first individual Olympic gold medal in shooting at the 2008 Beijing Olympics."
  //     },
  //     {
  //       id: "sp-q4",
  //       question: "The first Cricket World Cup was held in Australia.",
  //       type: "true_false",
  //       correctAnswer: "false",
  //       explanation: "The first Cricket World Cup was held in England in 1975, not Australia."
  //     },
  //     {
  //       id: "sp-q5",
  //       question: "Which city hosted the 2021 Summer Olympics?",
  //       type: "mcq",
  //       options: ["Paris", "Tokyo", "London", "Rio de Janeiro"],
  //       correctAnswer: "Tokyo",
  //       explanation: "The 2020 Summer Olympics (held in 2021 due to COVID-19) were hosted by Tokyo, Japan."
  //     }
  //   ]
  // },
  // {
  //   id: "space-astronomy",
  //   title: "Space & Astronomy",
  //   description: "Test your knowledge of space exploration and celestial bodies",
  //   icon: "Rocket",
  //   color: "from-indigo-500 to-violet-500",
  //   questions: [
  //     {
  //       id: "sa-q1",
  //       question: "What is the largest planet in our Solar System?",
  //       type: "mcq",
  //       options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
  //       correctAnswer: "Jupiter",
  //       explanation: "Jupiter is the largest planet in our Solar System, with a mass more than twice that of all other planets combined."
  //     },
  //     {
  //       id: "sa-q2",
  //       question: "Pluto is currently classified as a dwarf planet.",
  //       type: "true_false",
  //       correctAnswer: "true",
  //       explanation: "Pluto was reclassified as a dwarf planet by the International Astronomical Union in 2006."
  //     },
  //     {
  //       id: "sa-q3",
  //       question: "What was the name of India's first satellite?",
  //       type: "mcq",
  //       options: ["Bhaskara", "Rohini", "Aryabhata", "INSAT"],
  //       correctAnswer: "Aryabhata",
  //       explanation: "Aryabhata, named after the ancient Indian mathematician, was India's first satellite launched in 1975."
  //     },
  //     {
  //       id: "sa-q4",
  //       question: "The Sun contains about 99.86% of the Solar System's mass.",
  //       type: "true_false",
  //       correctAnswer: "true",
  //       explanation: "The Sun is so massive that it contains approximately 99.86% of the total mass of the Solar System."
  //     },
  //     {
  //       id: "sa-q5",
  //       question: "Which planet is known as the 'Red Planet'?",
  //       type: "mcq",
  //       options: ["Venus", "Mars", "Mercury", "Jupiter"],
  //       correctAnswer: "Mars",
  //       explanation: "Mars is called the 'Red Planet' due to its reddish appearance caused by iron oxide on its surface."
  //     }
  //   ]
  // },
  // {
  //   id: "economy",
  //   title: "Economy",
  //   description: "Test your understanding of economic concepts and Indian economy",
  //   icon: "TrendingUp",
  //   color: "from-emerald-500 to-cyan-500",
  //   questions: [
  //     {
  //       id: "ec-q1",
  //       question: "When was the Reserve Bank of India established?",
  //       type: "mcq",
  //       options: ["1925", "1935", "1947", "1950"],
  //       correctAnswer: "1935",
  //       explanation: "The Reserve Bank of India (RBI) was established on April 1, 1935."
  //     },
  //     {
  //       id: "ec-q2",
  //       question: "India's economic liberalization reforms were introduced in 1991.",
  //       type: "true_false",
  //       correctAnswer: "true",
  //       explanation: "The landmark economic reforms of 1991, under PM Narasimha Rao and FM Manmohan Singh, liberalized the Indian economy."
  //     },
  //     {
  //       id: "ec-q3",
  //       question: "Which sector contributes the most to India's GDP?",
  //       type: "mcq",
  //       options: ["Agriculture", "Industry", "Services", "Mining"],
  //       correctAnswer: "Services",
  //       explanation: "The services sector contributes over 50% to India's GDP, making it the largest contributor."
  //     },
  //     {
  //       id: "ec-q4",
  //       question: "The repo rate is set by the Reserve Bank of India.",
  //       type: "true_false",
  //       correctAnswer: "true",
  //       explanation: "The RBI sets the repo rate as part of its monetary policy to control money supply and inflation."
  //     },
  //     {
  //       id: "ec-q5",
  //       question: "Which is the largest public sector bank in India?",
  //       type: "mcq",
  //       options: ["Punjab National Bank", "Bank of Baroda", "State Bank of India", "Canara Bank"],
  //       correctAnswer: "State Bank of India",
  //       explanation: "State Bank of India (SBI) is the largest public sector bank in India by assets and market capitalization."
  //     }
  //   ]
  // },
  // {
  //   id: "culture-heritage",
  //   title: "Culture & Heritage",
  //   description: "Test your knowledge of India's cultural heritage",
  //   icon: "Church",
  //   color: "from-pink-500 to-rose-500",
  //   questions: [
  //     {
  //       id: "ch-q1",
  //       question: "How many UNESCO World Heritage Sites does India have?",
  //       type: "mcq",
  //       options: ["32", "37", "42", "47"],
  //       correctAnswer: "42",
  //       explanation: "India has 42 UNESCO World Heritage Sites, including cultural, natural, and mixed sites."
  //     },
  //     {
  //       id: "ch-q2",
  //       question: "The Taj Mahal was built by Shah Jahan.",
  //       type: "true_false",
  //       correctAnswer: "true",
  //       explanation: "The Taj Mahal was commissioned in 1632 by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal."
  //     },
  //     {
  //       id: "ch-q3",
  //       question: "Which classical dance form originated in Tamil Nadu?",
  //       type: "mcq",
  //       options: ["Kathak", "Odissi", "Bharatanatyam", "Kathakali"],
  //       correctAnswer: "Bharatanatyam",
  //       explanation: "Bharatanatyam is a classical dance form that originated in the temples of Tamil Nadu."
  //     },
  //     {
  //       id: "ch-q4",
  //       question: "India has 8 classical dance forms recognized by Sangeet Natak Akademi.",
  //       type: "true_false",
  //       correctAnswer: "true",
  //       explanation: "Sangeet Natak Akademi recognizes 8 classical dance forms: Bharatanatyam, Kathak, Odissi, Kathakali, Kuchipudi, Manipuri, Mohiniyattam, and Sattriya."
  //     },
  //     {
  //       id: "ch-q5",
  //       question: "The Ajanta Caves are famous for which type of art?",
  //       type: "mcq",
  //       options: ["Mughal paintings", "Buddhist rock-cut paintings", "Hindu temple sculptures", "Jain miniatures"],
  //       correctAnswer: "Buddhist rock-cut paintings",
  //       explanation: "The Ajanta Caves are renowned for their Buddhist rock-cut paintings dating from the 2nd century BCE."
  //     }
  //   ]
  // },


];
