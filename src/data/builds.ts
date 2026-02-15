export interface Component {
  category: string;
  name: string;
  spec: string;
  why: string;
  asin: string;
  price: number;
}

export interface Build {
  tier: string;
  budget: number;
  tagline: string;
  description: string;
  performanceScores: {
    modeling: number;
    rendering: number;
    assemblies: number;
    simulation: number;
    multitasking: number;
  };
  components: Component[];
  bestFor: string[];
}

const TAG = "codyp0e-20";
export const affiliateUrl = (asin: string) =>
  `https://www.amazon.com/dp/${asin}?tag=${TAG}`;

export const builds: Build[] = [
  {
    tier: "Entry",
    budget: 1000,
    tagline: "Get Started with CAD",
    description:
      "A solid entry point for students, hobbyists, and freelancers working with small-to-medium assemblies. Handles SOLIDWORKS part modeling and basic assemblies without breaking a sweat.",
    performanceScores: {
      modeling: 70,
      rendering: 35,
      assemblies: 50,
      simulation: 25,
      multitasking: 55,
    },
    bestFor: [
      "Students & hobbyists",
      "Parts with < 100 features",
      "Assemblies under 200 parts",
      "Basic drawings & documentation",
    ],
    components: [
      {
        category: "CPU",
        name: "Intel Core i5-14600KF",
        spec: "6P+8E cores, 5.3 GHz boost",
        why: "SOLIDWORKS modeling is largely single-threaded — the 5.3 GHz boost clock handles feature rebuilds quickly. The efficiency cores manage background tasks.",
        asin: "B0CHCZWBXZ",
        price: 240,
      },
      {
        category: "GPU",
        name: "NVIDIA RTX 4060",
        spec: "8 GB GDDR6, CUDA cores: 3072",
        why: "Excellent OpenGL performance for real-time model rotation and shading. 8 GB VRAM handles large assemblies. CUDA cores accelerate Visualize rendering.",
        asin: "B0C9LBHP8L",
        price: 290,
      },
      {
        category: "RAM",
        name: "Corsair Vengeance DDR5 32 GB (2×16)",
        spec: "5600 MHz CL36",
        why: "32 GB is the minimum for professional CAD. DDR5 bandwidth helps when working with large assemblies and multitasking with PDM.",
        asin: "B0BF2LTDCX",
        price: 80,
      },
      {
        category: "Storage",
        name: "Samsung 990 EVO 1 TB NVMe",
        spec: "5,000 MB/s read, PCIe 5.0",
        why: "Fast file open/save times matter with large assemblies. NVMe eliminates storage as a bottleneck when loading referenced parts.",
        asin: "B0CXKGFPDN",
        price: 90,
      },
      {
        category: "Motherboard",
        name: "MSI PRO Z790-P WiFi",
        spec: "LGA 1700, DDR5, PCIe 5.0",
        why: "Reliable Z790 board with good VRM for sustained boost clocks. WiFi 6E built in, plenty of USB ports for peripherals.",
        asin: "B0BHJFY2F1",
        price: 180,
      },
      {
        category: "PSU",
        name: "Corsair RM750e",
        spec: "750W, 80+ Gold, Fully Modular",
        why: "Clean, stable power delivery for reliable operation. 750W leaves headroom for future GPU upgrades.",
        asin: "B0BYM2YDG6",
        price: 90,
      },
      {
        category: "Case",
        name: "Fractal Design Pop Air",
        spec: "ATX Mid Tower, Mesh Front",
        why: "Excellent airflow keeps components cool under sustained CAD workloads. Clean design for a professional workspace.",
        asin: "B09GFR2GZ5",
        price: 95,
      },
      {
        category: "Cooler",
        name: "Thermalright Peerless Assassin 120 SE",
        spec: "Dual tower, 6 heatpipes",
        why: "Keeps the i5 cool during sustained all-core boosts. Quiet operation for an office or studio environment.",
        asin: "B0BFC5QRMF",
        price: 35,
      },
    ],
  },
  {
    tier: "Mid-Range",
    budget: 1500,
    tagline: "The Professional Sweet Spot",
    description:
      "The best value for professional engineers. Handles complex assemblies, simulations, and Visualize rendering with room to grow.",
    performanceScores: {
      modeling: 82,
      rendering: 55,
      assemblies: 70,
      simulation: 50,
      multitasking: 72,
    },
    bestFor: [
      "Professional engineers & designers",
      "Assemblies with 500+ parts",
      "SOLIDWORKS Simulation basics",
      "Visualize rendering (moderate)",
    ],
    components: [
      {
        category: "CPU",
        name: "Intel Core i7-14700KF",
        spec: "8P+12E cores, 5.6 GHz boost",
        why: "The 5.6 GHz single-core boost demolishes feature rebuilds. 20 threads make simulation and rendering significantly faster than the i5.",
        asin: "B0CHCZQ1DP",
        price: 360,
      },
      {
        category: "GPU",
        name: "NVIDIA RTX 4070 SUPER",
        spec: "12 GB GDDR6X, 7168 CUDA cores",
        why: "12 GB VRAM handles very large assemblies without stuttering. Major step up for Visualize rendering and real-time RealView Graphics.",
        asin: "B0CS5FXHTJ",
        price: 580,
      },
      {
        category: "RAM",
        name: "Corsair Vengeance DDR5 64 GB (2×32)",
        spec: "5600 MHz CL36",
        why: "64 GB lets you keep large assemblies, drawings, and simulation studies open simultaneously without slowdown.",
        asin: "B0C32P8K3S",
        price: 155,
      },
      {
        category: "Storage",
        name: "Samsung 990 Pro 2 TB NVMe",
        spec: "7,450 MB/s read, PCIe 4.0",
        why: "2 TB holds your full project library locally. The 990 Pro's sustained write speeds handle large file saves effortlessly.",
        asin: "B0BHJJ9Y77",
        price: 170,
      },
      {
        category: "Motherboard",
        name: "MSI MAG Z790 Tomahawk WiFi",
        spec: "LGA 1700, DDR5, 2.5G LAN",
        why: "Beefy VRMs sustain the i7's boost clocks under load. 2.5G Ethernet is great for PDM vault connections.",
        asin: "B0BHC6MWC5",
        price: 220,
      },
      {
        category: "PSU",
        name: "Corsair RM850x",
        spec: "850W, 80+ Gold, Fully Modular",
        why: "850W handles the power-hungry RTX 4070 SUPER with headroom. Japanese capacitors for long-term reliability.",
        asin: "B0BYM4Y8VP",
        price: 130,
      },
      {
        category: "Case",
        name: "Fractal Design North",
        spec: "ATX Mid Tower, Mesh + Wood",
        why: "Premium build quality with excellent thermals. Wood accent panel looks great in a professional office setting.",
        asin: "B0BYFHP4YN",
        price: 130,
      },
      {
        category: "Cooler",
        name: "Noctua NH-D15S",
        spec: "Dual tower, 150mm clearance",
        why: "Near-silent cooling for the i7 even under sustained loads. Noctua's reliability is legendary — install and forget.",
        asin: "B0BWLWFMCJ",
        price: 100,
      },
    ],
  },
  {
    tier: "High Performance",
    budget: 2000,
    tagline: "Power Through Anything",
    description:
      "Built for engineers who push their tools hard — large assemblies, FEA simulation, and production rendering. No compromises on the workloads that matter.",
    performanceScores: {
      modeling: 90,
      rendering: 72,
      assemblies: 82,
      simulation: 70,
      multitasking: 85,
    },
    bestFor: [
      "Complex assemblies (1000+ parts)",
      "SOLIDWORKS Simulation Premium",
      "Visualize production rendering",
      "Multi-CAD workflows",
    ],
    components: [
      {
        category: "CPU",
        name: "Intel Core i9-14900KF",
        spec: "8P+16E cores, 6.0 GHz boost",
        why: "The fastest single-threaded desktop CPU available. 6 GHz boost means the fastest possible feature rebuilds. 24 cores shred rendering and simulation.",
        asin: "B0CHCZD3RP",
        price: 480,
      },
      {
        category: "GPU",
        name: "NVIDIA RTX 4070 Ti SUPER",
        spec: "16 GB GDDR6X, 8448 CUDA cores",
        why: "16 GB VRAM is critical for very large assemblies with textures. Massive CUDA count cuts Visualize render times nearly in half vs the 4070 SUPER.",
        asin: "B0CS5H6GVX",
        price: 770,
      },
      {
        category: "RAM",
        name: "G.Skill Trident Z5 DDR5 64 GB (2×32)",
        spec: "6400 MHz CL32",
        why: "Higher-speed DDR5 with tighter timings. The bandwidth improvement is measurable in large assembly operations and simulation solving.",
        asin: "B0BV7YLNC5",
        price: 190,
      },
      {
        category: "Storage",
        name: "Samsung 990 Pro 2 TB + 4 TB HDD",
        spec: "7,450 MB/s NVMe + bulk storage",
        why: "NVMe for active projects, HDD for archive. Keeps your workflow fast while storing years of project history.",
        asin: "B0BHJJ9Y77",
        price: 220,
      },
      {
        category: "Motherboard",
        name: "ASUS ROG Strix Z790-E Gaming WiFi II",
        spec: "LGA 1700, DDR5, Thunderbolt 4",
        why: "Premium VRMs handle the i9's power demands. Thunderbolt 4 enables fast external storage and professional docking stations.",
        asin: "B0CPHXLQ1L",
        price: 380,
      },
      {
        category: "PSU",
        name: "Corsair RM1000x",
        spec: "1000W, 80+ Gold, Fully Modular",
        why: "The i9 + RTX 4070 Ti SUPER can spike to 600W+. 1000W provides clean power with headroom for transient spikes.",
        asin: "B0BYM8P3MJ",
        price: 180,
      },
      {
        category: "Case",
        name: "Fractal Design Torrent",
        spec: "ATX, Open airflow design",
        why: "Best-in-class airflow for the heat output of high-end components. The i9 generates serious heat under sustained loads.",
        asin: "B09LG4LM87",
        price: 190,
      },
      {
        category: "Cooler",
        name: "Noctua NH-D15 chromax.black",
        spec: "Dual tower, 250W TDP",
        why: "One of the few air coolers that can handle the i9-14900K's 253W PBP. Alternative: consider a 360mm AIO if you prefer liquid cooling.",
        asin: "B09FDZQ4YL",
        price: 120,
      },
    ],
  },
  {
    tier: "Workstation",
    budget: 3000,
    tagline: "Enterprise-Grade Performance",
    description:
      "A true workstation build with ISV-certified GPU options and ECC-capable platform. Built for reliability and performance in mission-critical engineering environments.",
    performanceScores: {
      modeling: 95,
      rendering: 88,
      assemblies: 92,
      simulation: 85,
      multitasking: 92,
    },
    bestFor: [
      "Enterprise / ISV-certified workflows",
      "Massive assemblies (5000+ parts)",
      "CFD & advanced FEA simulation",
      "Production rendering farms",
    ],
    components: [
      {
        category: "CPU",
        name: "Intel Core i9-14900KS",
        spec: "8P+16E cores, 6.2 GHz boost",
        why: "The absolute pinnacle of single-thread performance at 6.2 GHz. Binned for the highest clocks — every millisecond matters in iterative design.",
        asin: "B0CZ5J1VSB",
        price: 620,
      },
      {
        category: "GPU",
        name: "NVIDIA RTX 4080 SUPER",
        spec: "16 GB GDDR6X, 10240 CUDA cores",
        why: "Near-workstation-class performance. 10K CUDA cores make Visualize rendering blazing fast. 16 GB VRAM handles any assembly size.",
        asin: "B0CS5FWXLT",
        price: 970,
      },
      {
        category: "RAM",
        name: "G.Skill Trident Z5 DDR5 128 GB (4×32)",
        spec: "6000 MHz CL30",
        why: "128 GB eliminates RAM as a bottleneck entirely. Run simulation, CAD, PDM, and documentation simultaneously without paging.",
        asin: "B0CHS57DJQ",
        price: 380,
      },
      {
        category: "Storage",
        name: "Samsung 990 Pro 4 TB NVMe",
        spec: "7,450 MB/s read, PCIe 4.0",
        why: "4 TB NVMe means your entire project library loads at SSD speed. No more waiting for referenced assemblies to open.",
        asin: "B0D5HMDBP9",
        price: 350,
      },
      {
        category: "Motherboard",
        name: "ASUS ProArt Z790-Creator WiFi",
        spec: "LGA 1700, DDR5, Thunderbolt 4, 10G LAN",
        why: "Creator-focused board with 10 Gigabit Ethernet for network PDM vaults. Thunderbolt 4 for professional peripherals.",
        asin: "B0BG6L7SH4",
        price: 420,
      },
      {
        category: "PSU",
        name: "Corsair HX1200",
        spec: "1200W, 80+ Platinum, Fully Modular",
        why: "Platinum efficiency reduces heat and electricity costs. 1200W handles any component combination with headroom.",
        asin: "B07VQFNN4F",
        price: 250,
      },
      {
        category: "Case",
        name: "Fractal Design Define 7 XL",
        spec: "Full Tower, Sound dampened",
        why: "Full tower accommodates all components with room for expansion. Sound dampening keeps noise low in office environments.",
        asin: "B084SD61VN",
        price: 200,
      },
      {
        category: "Cooler",
        name: "NZXT Kraken X73",
        spec: "360mm AIO Liquid Cooler",
        why: "360mm radiator tames the i9-14900KS's 253W TDP with ease. Maintains boost clocks under sustained simulation workloads.",
        asin: "B082DYSQVF",
        price: 160,
      },
    ],
  },
  {
    tier: "Ultimate",
    budget: 5000,
    tagline: "No Limits Engineering",
    description:
      "The ultimate engineering workstation. Designed for the most demanding workflows — massive assemblies, complex simulations, and professional rendering. This machine won't flinch at anything you throw at it.",
    performanceScores: {
      modeling: 98,
      rendering: 96,
      assemblies: 97,
      simulation: 95,
      multitasking: 98,
    },
    bestFor: [
      "The most demanding engineering workflows",
      "10,000+ part assemblies",
      "Multi-physics simulation",
      "Real-time ray-traced rendering",
      "Future-proofed for 5+ years",
    ],
    components: [
      {
        category: "CPU",
        name: "AMD Ryzen 9 9950X",
        spec: "16 cores / 32 threads, 5.7 GHz boost",
        why: "Zen 5 architecture delivers top-tier single-thread AND multi-thread performance. Best of both worlds for modeling + simulation.",
        asin: "B0D6NN6TBK",
        price: 550,
      },
      {
        category: "GPU",
        name: "NVIDIA RTX 4090",
        spec: "24 GB GDDR6X, 16384 CUDA cores",
        why: "The fastest consumer GPU ever made. 24 GB VRAM and 16K CUDA cores make Visualize rendering nearly instant. Also future-proofs for AI-assisted design tools.",
        asin: "B0BDP64V3Q",
        price: 1900,
      },
      {
        category: "RAM",
        name: "G.Skill Trident Z5 DDR5 128 GB (4×32)",
        spec: "6400 MHz CL32",
        why: "128 GB at 6400 MHz with tight timings. The bandwidth enables massive assembly operations with zero performance degradation.",
        asin: "B0BV7YLNC5",
        price: 450,
      },
      {
        category: "Storage",
        name: "Samsung 990 Pro 4 TB + 990 Pro 2 TB",
        spec: "Dual NVMe, 6 TB total SSD",
        why: "Dedicated project drive + OS/apps drive. Both running at 7,450 MB/s. No mechanical drives — pure SSD speed across the board.",
        asin: "B0D5HMDBP9",
        price: 520,
      },
      {
        category: "Motherboard",
        name: "ASUS ROG Crosshair X870E Hero",
        spec: "AM5, DDR5, Thunderbolt 4, WiFi 7",
        why: "Flagship AM5 board with the best VRM on the platform. WiFi 7 and Thunderbolt 4 for cutting-edge connectivity.",
        asin: "B0DH5MMD5G",
        price: 650,
      },
      {
        category: "PSU",
        name: "Corsair HX1500i",
        spec: "1500W, 80+ Platinum, Digital",
        why: "The RTX 4090 demands serious power delivery. 1500W Platinum ensures clean, efficient power with digital monitoring.",
        asin: "B0CL5NSBLD",
        price: 350,
      },
      {
        category: "Case",
        name: "Fractal Design Torrent RGB",
        spec: "ATX, Open airflow, RGB",
        why: "Best-in-class thermals for the hottest components. Open design ensures the RTX 4090 and Ryzen 9 stay cool under full load.",
        asin: "B09QKX7NTY",
        price: 240,
      },
      {
        category: "Cooler",
        name: "NZXT Kraken Elite 360",
        spec: "360mm AIO, LCD display",
        why: "Premium 360mm AIO with LCD pump head. Keeps the 9950X's 170W TDP in check while looking stunning.",
        asin: "B0CF73NH7H",
        price: 280,
      },
    ],
  },
];

export const cadInsights = [
  {
    title: "Single-Thread Performance is King for Modeling",
    content:
      "SOLIDWORKS modeling, feature rebuilds, and mate solving are primarily single-threaded operations. A CPU with the highest possible boost clock will feel faster in day-to-day modeling than one with more cores but lower clocks. This is why we prioritize Intel's K/KS series and AMD's X-series processors.",
  },
  {
    title: "Gaming GPUs Work Great for CAD",
    content:
      "While NVIDIA Quadro and AMD Pro cards are \"certified\" for SOLIDWORKS, modern GeForce RTX cards deliver identical or better performance at a fraction of the price. SOLIDWORKS' RealView and Visualize work perfectly with RTX 4000 series cards. The certification mostly matters for enterprise support contracts.",
  },
  {
    title: "RAM: 32 GB Minimum, 64 GB Recommended",
    content:
      "Large assemblies, simulation studies, and multi-document workflows consume RAM quickly. 32 GB is the minimum for professional work. If you regularly work with 500+ part assemblies or run simulations, 64 GB eliminates paging slowdowns.",
  },
  {
    title: "NVMe SSDs Transform the CAD Experience",
    content:
      "Opening large assemblies involves loading hundreds or thousands of referenced files. An NVMe SSD with 5,000+ MB/s read speeds makes this nearly instant compared to SATA SSDs or HDDs. Never install SOLIDWORKS on a mechanical drive.",
  },
  {
    title: "Rendering is the One Multi-Core CAD Task",
    content:
      "While modeling is single-threaded, SOLIDWORKS Visualize and KeyShot rendering scale linearly with core count AND can leverage GPU CUDA cores. If rendering is a major part of your workflow, invest in both CPU cores and GPU CUDA count.",
  },
];

export interface QuestionOption {
  label: string;
  value: string;
  weight: Record<string, number>;
}

export interface Question {
  id: string;
  question: string;
  subtitle: string;
  options: QuestionOption[];
}

export const questions: Question[] = [
  {
    id: "software",
    question: "What CAD software do you primarily use?",
    subtitle: "Different software has different hardware demands",
    options: [
      {
        label: "SOLIDWORKS",
        value: "solidworks",
        weight: { singleThread: 2, gpu: 1, ram: 1 },
      },
      {
        label: "Autodesk Inventor",
        value: "inventor",
        weight: { singleThread: 2, gpu: 1, ram: 1 },
      },
      {
        label: "Fusion 360",
        value: "fusion",
        weight: { singleThread: 1, gpu: 1.5, ram: 1 },
      },
      {
        label: "CATIA / NX / Creo",
        value: "enterprise",
        weight: { singleThread: 2, gpu: 1.5, ram: 2 },
      },
      {
        label: "Multiple CAD packages",
        value: "multi",
        weight: { singleThread: 2, gpu: 1.5, ram: 2 },
      },
    ],
  },
  {
    id: "complexity",
    question: "How complex are your typical assemblies?",
    subtitle: "Assembly size directly impacts RAM and CPU needs",
    options: [
      {
        label: "Simple parts & small assemblies (< 100 parts)",
        value: "simple",
        weight: { tier: 0 },
      },
      {
        label: "Medium assemblies (100–500 parts)",
        value: "medium",
        weight: { tier: 1 },
      },
      {
        label: "Large assemblies (500–2000 parts)",
        value: "large",
        weight: { tier: 2 },
      },
      {
        label: "Massive assemblies (2000+ parts)",
        value: "massive",
        weight: { tier: 3 },
      },
    ],
  },
  {
    id: "rendering",
    question: "Do you do rendering or visualization?",
    subtitle: "Rendering is the most GPU-intensive CAD workflow",
    options: [
      {
        label: "No — just modeling and drawings",
        value: "none",
        weight: { gpuBoost: 0, tier: 0 },
      },
      {
        label: "Occasionally — quick renders for presentations",
        value: "occasional",
        weight: { gpuBoost: 1, tier: 0 },
      },
      {
        label: "Regularly — Visualize or KeyShot for marketing",
        value: "regular",
        weight: { gpuBoost: 2, tier: 1 },
      },
      {
        label: "Heavy — production rendering is core to my workflow",
        value: "heavy",
        weight: { gpuBoost: 3, tier: 2 },
      },
    ],
  },
  {
    id: "simulation",
    question: "Do you run simulations (FEA, CFD, motion)?",
    subtitle: "Simulation is the most CPU and RAM intensive workflow",
    options: [
      {
        label: "No simulation work",
        value: "none",
        weight: { simBoost: 0, tier: 0 },
      },
      {
        label: "Basic stress/thermal analysis",
        value: "basic",
        weight: { simBoost: 1, tier: 1 },
      },
      {
        label: "Regular FEA with fine meshes",
        value: "regular",
        weight: { simBoost: 2, tier: 1 },
      },
      {
        label: "Advanced — CFD, nonlinear, or multi-physics",
        value: "advanced",
        weight: { simBoost: 3, tier: 2 },
      },
    ],
  },
  {
    id: "budget",
    question: "What's your budget range?",
    subtitle: "We'll find the best build within your budget",
    options: [
      {
        label: "Under $1,200",
        value: "low",
        weight: { maxTier: 0 },
      },
      {
        label: "$1,200 – $1,800",
        value: "mid",
        weight: { maxTier: 1 },
      },
      {
        label: "$1,800 – $2,500",
        value: "high",
        weight: { maxTier: 2 },
      },
      {
        label: "$2,500 – $3,500",
        value: "premium",
        weight: { maxTier: 3 },
      },
      {
        label: "$3,500+",
        value: "unlimited",
        weight: { maxTier: 4 },
      },
    ],
  },
  {
    id: "priority",
    question: "What matters most to you?",
    subtitle: "This helps us fine-tune the recommendation",
    options: [
      {
        label: "Best value — maximize performance per dollar",
        value: "value",
        weight: { valueBias: 1 },
      },
      {
        label: "Quiet operation — I work in a shared office",
        value: "quiet",
        weight: { quietBias: 1 },
      },
      {
        label: "Future-proof — I want this to last 5+ years",
        value: "future",
        weight: { tierBump: 1 },
      },
      {
        label: "Maximum performance — speed is everything",
        value: "performance",
        weight: { tierBump: 1 },
      },
    ],
  },
];

export function getRecommendation(answers: Record<string, string>): number[] {
  let tierScore = 0;

  // Complexity
  const complexity = answers.complexity;
  if (complexity === "medium") tierScore += 1;
  else if (complexity === "large") tierScore += 2;
  else if (complexity === "massive") tierScore += 3;

  // Rendering
  const rendering = answers.rendering;
  if (rendering === "regular") tierScore += 1;
  else if (rendering === "heavy") tierScore += 2;

  // Simulation
  const simulation = answers.simulation;
  if (simulation === "basic") tierScore += 0.5;
  else if (simulation === "regular") tierScore += 1;
  else if (simulation === "advanced") tierScore += 2;

  // Priority
  if (answers.priority === "future" || answers.priority === "performance") {
    tierScore += 1;
  }

  // Budget constraint
  const budgetMap: Record<string, number> = {
    low: 0,
    mid: 1,
    high: 2,
    premium: 3,
    unlimited: 4,
  };
  const maxTier = budgetMap[answers.budget] ?? 2;

  // Calculate recommended tier (0-indexed)
  let recommended = Math.min(Math.round(tierScore / 2), 4);
  recommended = Math.min(recommended, maxTier);

  // Return recommended + adjacent tiers
  const result = [recommended];
  if (recommended > 0) result.unshift(recommended - 1);
  if (recommended < 4) result.push(recommended + 1);

  return [...new Set(result)].sort((a, b) => a - b);
}
