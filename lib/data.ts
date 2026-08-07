// ============================================================
// THE DIET HUB — all menu, service and chart data lives here.
// Edit this one file to change what the site shows.
// ============================================================

export type Smoothie = {
  n: number;
  name: string;
  nameTe?: string;
  ingredients: string;
  ingredientsTe: string;
  kcal: number;
  protein: number;
  carbs: number;
};

/** Take 45–60 minutes before training. */
export const PRE_WORKOUT: Smoothie[] = [
  { n: 1,  name: "Banana Oats Smoothie",        ingredients: "Banana, oats, milk, dry fruits",        ingredientsTe: "అరటిపండు, ఓట్స్, పాలు, డ్రైఫ్రూట్స్",       kcal: 320, protein: 9,  carbs: 54 },
  { n: 2,  name: "Banana Peanut Smoothie",      ingredients: "Banana, peanut butter, milk",           ingredientsTe: "అరటిపండు, పీనట్ బటర్, పాలు",              kcal: 350, protein: 11, carbs: 45 },
  { n: 3,  name: "Dates Energy Smoothie",       ingredients: "Dates, banana, milk",                   ingredientsTe: "ఖర్జూరాలు, అరటిపండు, పాలు",              kcal: 330, protein: 8,  carbs: 53 },
  { n: 4,  name: "Apple Oats Smoothie",         ingredients: "Apple, oats, milk",                     ingredientsTe: "యాపిల్, ఓట్స్, పాలు",                    kcal: 300, protein: 8,  carbs: 48 },
  { n: 5,  name: "Mango Energy Smoothie",       ingredients: "Mango, oats, milk",                     ingredientsTe: "మామిడి, ఓట్స్, పాలు",                    kcal: 310, protein: 8,  carbs: 50 },
  { n: 6,  name: "Berry Smoothie",              ingredients: "Berries, honey, curd, oats",            ingredientsTe: "బెర్రీస్, తేనె, పెరుగు, ఓట్స్",           kcal: 280, protein: 9,  carbs: 42 },
  { n: 7,  name: "Coffee Banana Smoothie",      ingredients: "Banana, coffee powder, milk",           ingredientsTe: "అరటిపండు, కాఫీ పొడి, పాలు",              kcal: 290, protein: 7,  carbs: 46 },
  { n: 8,  name: "Pineapple Mint Smoothie",     ingredients: "Pineapple, mint, coconut water",        ingredientsTe: "అనాస, పుదీనా, కొబ్బరి నీళ్ళు",            kcal: 250, protein: 4,  carbs: 38 },
  { n: 9,  name: "Watermelon Hydration Smoothie", ingredients: "Watermelon, lemon, mint",             ingredientsTe: "పుచ్చకాయ, నిమ్మకాయ, పుదీనా",             kcal: 220, protein: 3,  carbs: 34 },
  { n: 10, name: "Beetroot Energy Smoothie",    ingredients: "Beetroot, apple, carrot, ginger",       ingredientsTe: "బీట్‌రూట్, యాపిల్, క్యారెట్, అల్లం",      kcal: 260, protein: 5,  carbs: 40 },
];

/** Take within 30 minutes of finishing training. */
export const POST_WORKOUT: Smoothie[] = [
  { n: 1,  name: "Greek Yogurt Banana Smoothie", ingredients: "Greek yogurt, banana, flax, honey",     ingredientsTe: "గ్రీక్ యోగర్ట్, అరటిపండు, ఫ్లాక్స్, తేనె", kcal: 310, protein: 16, carbs: 40 },
  { n: 2,  name: "Chocolate Protein Smoothie",   ingredients: "Milk, protein powder, banana, peanut butter", ingredientsTe: "పాలు, ప్రొటీన్ పొడి, అరటిపండు, పీనట్ బటర్", kcal: 380, protein: 18, carbs: 45 },
  { n: 3,  name: "Mango Yogurt Smoothie",        ingredients: "Mango, Greek yogurt",                   ingredientsTe: "మామిడి, గ్రీక్ యోగర్ట్",                  kcal: 300, protein: 15, carbs: 38 },
  { n: 4,  name: "Strawberry Protein Smoothie",  ingredients: "Strawberry, Greek yogurt, milk",        ingredientsTe: "స్ట్రాబెర్రీ, గ్రీక్ యోగర్ట్, పాలు",      kcal: 290, protein: 16, carbs: 36 },
  { n: 5,  name: "Peanut Butter Oats Smoothie",  ingredients: "Oats, peanut butter, milk",             ingredientsTe: "ఓట్స్, పీనట్ బటర్, పాలు",                kcal: 340, protein: 14, carbs: 42 },
  { n: 6,  name: "Avocado Recovery Smoothie",    ingredients: "Avocado, milk, honey",                  ingredientsTe: "అవకాడో, పాలు, తేనె",                     kcal: 330, protein: 11, carbs: 30 },
  { n: 7,  name: "Banana Chia Smoothie",         ingredients: "Banana, chia seeds, milk",              ingredientsTe: "అరటిపండు, చియా సీడ్స్, పాలు",            kcal: 310, protein: 12, carbs: 37 },
  { n: 8,  name: "Papaya Recovery Smoothie",     ingredients: "Papaya, curd, honey, oats",             ingredientsTe: "బొప్పాయి, పెరుగు, తేనె, ఓట్స్",          kcal: 270, protein: 9,  carbs: 32 },
  { n: 9,  name: "Mixed Fruit Protein Smoothie", ingredients: "Apple, banana, dates, protein powder",  ingredientsTe: "యాపిల్, అరటిపండు, ఖర్జూరం, ప్రొటీన్ పౌడర్", kcal: 320, protein: 15, carbs: 42 },
  { n: 10, name: "Spinach Power Smoothie",       ingredients: "Spinach, banana, pineapple, chia seeds", ingredientsTe: "పాలకూర, అరటిపండు, అనాస, చియా సీడ్స్",   kcal: 260, protein: 11, carbs: 28 },
];

export type Juice = {
  name: string;
  benefit: string;
  ingredients: string;
  ml: number;
  tint: string;
};

/** Cold pressed, made fresh every morning. */
export const JUICES: Juice[] = [
  { name: "Beetroot Carrot Apple", benefit: "Energy booster · immunity support", ingredients: "Beetroot, carrot, apple", ml: 250, tint: "#9b2242" },
  { name: "Green Detox",           benefit: "Detoxifies the body · improves digestion", ingredients: "Cucumber, spinach, mint, lemon", ml: 250, tint: "#4f7d2a" },
  { name: "Orange",                benefit: "Rich in vitamin C · boosts immunity", ingredients: "Fresh orange", ml: 250, tint: "#e07b12" },
  { name: "Watermelon",            benefit: "Hydrating & refreshing", ingredients: "Watermelon, lemon", ml: 250, tint: "#c93b4b" },
  { name: "Pineapple Mint",        benefit: "Aids digestion · refreshing and cool", ingredients: "Pineapple, mint", ml: 250, tint: "#d8a412" },
];

export const JUICE_PROMISES = [
  "100% fresh",
  "No added sugar",
  "No preservatives",
  "Made daily",
  "Cold pressed",
];

export type Service = {
  no: string;
  title: string;
  titleTe: string;
  body: string;
  bodyTe: string;
};

export const SERVICES: Service[] = [
  {
    no: "01",
    title: "Personalised diet planning",
    titleTe: "వ్యక్తిగత డైట్ ప్లానింగ్",
    body: "A plan built around your age, weight, lifestyle and current health condition — not a template.",
    bodyTe: "మీ వయస్సు, బరువు, జీవనశైలి, ఆరోగ్య పరిస్థితి ఆధారంగా ప్రత్యేక ఆహార ప్రణాళిక.",
  },
  {
    no: "02",
    title: "Weight loss programmes",
    titleTe: "బరువు తగ్గించే ప్రణాళికలు",
    body: "Balanced meals, correct timing and light exercise support — steady, healthy fat loss without crash dieting.",
    bodyTe: "సమతుల్యమైన పదార్థాలు, సమయాల్లో ఆహారం, తేలికపాటి వ్యాయామంతో ఆరోగ్యకరమైన రీతిలో బరువు తగ్గించుకోవడానికి సహాయం.",
  },
  {
    no: "03",
    title: "Weight gain programmes",
    titleTe: "బరువు పెంచే ప్రణాళికలు",
    body: "Nutrient-dense, protein-rich food plans that build healthy weight rather than empty calories.",
    bodyTe: "శరీరానికి అవసరమైన పోషకాహారం, ప్రొటీన్ సమృద్ధిగా ఉన్న ఆహారంతో ఆరోగ్యకరంగా బరువు పెరగడానికి ప్రత్యేక సూచనలు.",
  },
  {
    no: "04",
    title: "Diabetes & BP food guidance",
    titleTe: "మధుమేహం & బీపీ ఆహార మార్గదర్శకం",
    body: "Science-based eating plans for controlling diabetes, blood pressure and cholesterol.",
    bodyTe: "మధుమేహం, బీపీ, కొలెస్ట్రాల్ వంటి సమస్యల నియంత్రణకు అనువైన శాస్త్రీయ ఆహార ప్రణాళికలు.",
  },
  {
    no: "05",
    title: "Nutrition for children & mothers",
    titleTe: "పిల్లలు & గర్భిణీల పోషకాహారం",
    body: "Growth-focused nutrition for children and complete care plans through pregnancy.",
    bodyTe: "పిల్లల పెరుగుదల, గర్భిణీ స్త్రీల ఆరోగ్యం మెరుగుపరచడానికి అవసరమైన ప్రత్యేక పోషకాహార సూచనలు.",
  },
  {
    no: "06",
    title: "Ongoing follow-up & care",
    titleTe: "నిరంతర ఫాలో-అప్ & కేర్",
    body: "We track your progress and adjust the plan as you go — support that does not stop after day one.",
    bodyTe: "మీ ప్రగతిని నిరంతరం పర్యవేక్షిస్తూ, సమయానుసారంగా సూచనలు మార్చుతూ పూర్తి సహాయం అందిస్తాము.",
  },
  {
    no: "07",
    title: "Thyroid & PCOS nutrition",
    titleTe: "థైరాయిడ్ & పీసీఓఎస్ పోషకాహారం",
    body: "Eating plans that work with thyroid medication and PCOS, focused on steady energy and hormone-friendly food.",
    bodyTe: "థైరాయిడ్, పీసీఓఎస్ ఉన్నవారికి అనువైన ఆహార ప్రణాళికలు — స్థిరమైన శక్తి, హార్మోన్ సమతుల్యత కోసం.",
  },
  {
    no: "08",
    title: "Sports & gym nutrition",
    titleTe: "స్పోర్ట్స్ & జిమ్ పోషకాహారం",
    body: "Pre- and post-workout fuelling, protein targets and recovery smoothies built around your training schedule.",
    bodyTe: "వ్యాయామానికి ముందు, తర్వాత తీసుకోవాల్సిన ఆహారం, ప్రొటీన్ లక్ష్యాలు, రికవరీ స్మూతీలు.",
  },
  {
    no: "09",
    title: "Corporate & office plans",
    titleTe: "కార్పొరేట్ & ఆఫీస్ ప్లాన్స్",
    body: "Daily lunch boxes delivered to your office, priced per head, with a monthly review for the whole team.",
    bodyTe: "మీ ఆఫీసుకు రోజువారీ లంచ్ బాక్స్‌లు, ఒక్కొక్కరికి ధర, నెలవారీ సమీక్షతో.",
  },
  {
    no: "10",
    title: "Cold-pressed juices & smoothies",
    titleTe: "కోల్డ్ ప్రెస్డ్ జ్యూస్ & స్మూతీలు",
    body: "Fresh juices and workout smoothies pressed and blended every morning — no sugar, no preservatives.",
    bodyTe: "ప్రతి ఉదయం తాజాగా తయారుచేసే జ్యూస్‌లు, స్మూతీలు — చక్కెర లేదు, ప్రిజర్వేటివ్‌లు లేవు.",
  },
  {
    no: "11",
    title: "Home-cook diet charts",
    titleTe: "ఇంట్లో వండుకునేవారికి డైట్ చార్ట్",
    body: "Prefer to cook at home? We give you the written chart, portions and timings — no food order needed.",
    bodyTe: "ఇంట్లోనే వండుకోవాలనుకుంటే — రాసిన చార్ట్, పరిమాణాలు, సమయాలు ఇస్తాము. ఆర్డర్ అవసరం లేదు.",
  },
  {
    no: "12",
    title: "Festival & bulk orders",
    titleTe: "పండుగలు & బల్క్ ఆర్డర్లు",
    body: "Healthy platters, juice counters and diet-friendly sweets for events, offices and family functions.",
    bodyTe: "కార్యక్రమాలు, ఆఫీసులు, కుటుంబ వేడుకలకు ఆరోగ్యకరమైన ప్లేటర్లు, జ్యూస్ కౌంటర్లు.",
  },
];

/** Daily calorie split used for a typical weight-loss plan. */
export const CALORIE_GUIDE = [
  { meal: "Breakfast",         mealTe: "బ్రేక్‌ఫాస్ట్",   range: "300 – 350", accent: "leaf" },
  { meal: "Mid-morning snack", mealTe: "మధ్యాహ్నం స్నాక్", range: "100 – 150", accent: "leaf" },
  { meal: "Lunch",             mealTe: "లంచ్",            range: "450 – 500", accent: "leaf" },
  { meal: "Evening snack",     mealTe: "సాయంత్రం స్నాక్",  range: "100 – 150", accent: "leaf" },
  { meal: "Dinner",            mealTe: "డిన్నర్",          range: "350 – 450", accent: "leaf" },
] as const;

export const CALORIE_TOTAL = "1,300 – 1,600 kcal";

/** One worked example day, as printed on the calorie chart. */
export const SAMPLE_DAY = [
  { slot: "Breakfast", kcal: 320, items: ["Ragi upma", "Curd"] },
  { slot: "Lunch",     kcal: 480, items: ["Brown rice", "Mixed veg curry", "Salad"] },
  { slot: "Dinner",    kcal: 400, items: ["Quinoa / millet upma", "Veg soup + salad"] },
];

export const MEAL_PLAN = {
  title: "3-Day Meal Plan",
  titleTe: "3 రోజుల మీల్ ప్లాన్",
  includes: ["Breakfast", "Lunch", "Dinner"],
  priceVeg: 399,
  priceNonVeg: 499,
  note: "Choose to look smart. Quit junk.",
};

export const SPECIALITIES = [
  "100% natural & healthy food",
  "Made with fresh, quality ingredients",
  "Low oil, low spice cooking",
  "High in fibre & nutrition",
  "Supports weight management",
  "Good for all age groups",
  "Perfect balance of taste & health",
];

export const HYDRATION_NOTE =
  "Drink 2.5 – 3 litres of water a day. Choose fibre-rich, protein-rich, healthy-fat foods and avoid sugar and refined flour.";
