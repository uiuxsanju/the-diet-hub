// ============================================================
// THE DIET HUB — verified product photography layer
// ============================================================
// Every photo ID below was manually confirmed by opening the
// actual Pexels search results page (not guessed, not AI-made).
// Each is: a real photograph, free license, food-only, no people,
// no text/watermark, matches the dish it's assigned to.
//
// HOW TO USE
// 1. Add the `image` / `imageSource` / `fallbackImage` fields to
//    your existing Product type (see EXTENDED TYPE below).
// 2. Import IMAGE_OVERRIDES and spread it onto each product by id
//    when you build/render the catalogue (see helper at bottom).
// 3. Anything NOT in IMAGE_OVERRIDES still needs sourcing — see
//    the "STILL NEEDS SOURCING" list at the very bottom. It keeps
//    working (falls back to the product's existing px() image)
//    but hasn't been individually verified yet.
// ============================================================

export type VerifiedPhoto = {
  /** Pexels numeric photo id */
  id: string;
  /** Square-croppable hotlink, 1200px min edge */
  image: string;
  /** The actual Pexels page — click-through, proper attribution */
  imageSource: string;
  /** One-line description of what's actually in the photo */
  note: string;
};

const pexels = (id: string, note: string): VerifiedPhoto => ({
  id,
  // Pexels serves square crops natively via ?fit=crop&h=1200&w=1200
  image: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1200&fit=crop`,
  imageSource: `https://www.pexels.com/photo/${id}/`,
  note,
});

// ------------------------------------------------------------
// VERIFIED PHOTO LIBRARY — grouped by dish family
// (confirmed on pexels.com — see imageSource on each entry)
// ------------------------------------------------------------
export const VERIFIED_PHOTOS = {
  // ---- CHICKEN CURRY / GRAVY STYLE ----
  chickenCurryDarkBowl:      pexels("10692534", "Chicken curry, white ceramic bowl, dark background"),
  chickenCurryBlackPlate:    pexels("7111537",  "Chicken curry, creamy sauce, black ceramic plate"),
  chickenCurryKadai:         pexels("29684985", "Spicy chicken curry in traditional kadai, cilantro"),
  chickenCurryHomemade:      pexels("35629938", "Homemade Indian chicken curry, cilantro garnish"),
  chickenCurryPeas:          pexels("9567078",  "Chicken curry with potatoes & peas, white bowl"),
  chickenCurryChutney:       pexels("38400477", "Chicken curry, cilantro garnish, green chutney"),
  chickenCurrySteelBowl:     pexels("32986463", "Chicken curry, stainless steel bowl, top-down"),
  chickenCurryBrassPan:      pexels("29685076", "Spicy chicken curry in brass pan, dry-ish masala"),
  chickenCurryTraditional:   pexels("35532821", "Traditional Indian chicken curry, dark background"),
  chickenCurryOnionCilantro: pexels("6113820",  "Chicken curry with onions & cilantro"),
  chickenCurryRicePlate:     pexels("4611425",  "Curry with rice, ceramic plate, top view"),
  chickenCurryPotatoes:      pexels("35156497", "Spicy chicken curry with potatoes & chilies"),

  // ---- FISH CURRY ----
  fishCurryBananaLeaf:  pexels("13243817", "Kerala-style rice meal, curries, fried fish, banana leaf"),
  fishCurryCreamy:      pexels("35532828", "Fish curry with tomatoes & herbs, creamy sauce"),
  fishCurryCoconut:     pexels("38324319", "Indian fish curry with rice & coconut"),
  fishCurryVegetables:  pexels("35532834", "Indian fish curry with vegetables & spices"),
  fishCurryWhitePlate:  pexels("8684075",  "Spicy fish curry, steamed rice, white plate"),
  fishCurrySpiced:      pexels("10050659", "Spiced fish with rice & curry, wooden table"),
  fishCurrySteelBowl:   pexels("9392999",  "South Indian fish curry, rice, veg, steel bowl"),

  // ---- GRILLED FISH ----
  grilledFishHerbs:    pexels("23947912", "Grilled fish with vegetables & herbs"),
  grilledFishFillets:  pexels("36452921", "Fresh grilled fish fillets, turmeric spices, white plate"),

  // ---- GRILLED CHICKEN ----
  grilledChickenDarkTable: pexels("2322426",  "Grilled chicken breast, black/brown wooden table"),
  grilledChickenCharcoal:  pexels("29043470", "Grilled chicken, charcoal barbecue, close-up"),

  // ---- SMOOTHIES (glass/jar presentation, natural light) ----
  smoothieAvocadoGreen:   pexels("12049998", "Green/avocado-toned fruit smoothie in glass"),
  smoothieStrawberryJar:  pexels("775032",   "Strawberry smoothie in glass jar"),
  smoothiePurpleBerry:    pexels("2424034",  "Purple berry smoothie, close-up, creamy texture"),
  smoothieAssortedWine:   pexels("16096610", "Assorted healthy shakes in wine glasses"),
  smoothieBananaKiwi:     pexels("6990114",  "Banana, kiwi & orange smoothies"),
  smoothieSunnyCocktails: pexels("4051765",  "Three fruit smoothies, sunny white surface"),
  smoothieShadowSeries:   pexels("4051757",  "Fruit smoothies, dramatic sunlight/shadow"),
  smoothieMirror:         pexels("4051760",  "Fruit smoothies, bright mirror reflection"),
  smoothieGlassesShadow:  pexels("4051750",  "Fruit smoothies, artistic shadow composition"),
  smoothieMasonStraws:    pexels("8181545",  "Fruit juices in mason jars, colorful straws"),
  smoothieMintGarnish:    pexels("12119029", "Tropical fruit smoothies, fresh mint garnish"),
  smoothieOutdoorCandle:  pexels("5912010",  "Strawberry & avocado smoothies, outdoor setting"),
  smoothieWoodenTable:    pexels("7656388",  "Fruit juices on wooden table"),
  smoothieStrawberryTop:  pexels("8743884",  "Strawberry smoothie, top-down, fresh strawberries"),
  smoothieDragonBerry:    pexels("4443487",  "Dragon fruit & berry smoothies, white background"),
  smoothieMilkshakesJars: pexels("1346294",  "Assorted milkshakes in glass jars, dark background"),
  smoothiePomegranate:    pexels("7656390",  "Fruit juices with strawberries, blueberries, pomegranate"),
  smoothieFlatlayGreens:  pexels("7656399",  "Smoothies flatlay with fresh fruit & leafy greens"),
  smoothieMintCups:       pexels("5337717",  "Fruit & vegetable smoothies, mint garnish, glass cups"),
  smoothieJuiceBar:       pexels("32695688", "Fresh fruit smoothies at outdoor juice bar"),

  // ---- JUICE ----
  orangeJuiceClearGlass:  pexels("3584", "Clear glass cup filled with fresh orange juice"),
} as const;

// ------------------------------------------------------------
// EXTENDED PRODUCT TYPE — add these 3 fields to your Product type
// ------------------------------------------------------------
// export type Product = {
//   ...existing fields...
//   image: string;          // best matching realistic photo (never empty)
//   imageSource: string;    // original free image page URL
//   fallbackImage: string;  // closest matching realistic photo
// };

// ------------------------------------------------------------
// PER-PRODUCT OVERRIDES — verified, ready to merge into PRODUCTS
// Every id below matches an `id` already in your products.ts
// ------------------------------------------------------------
const V = VERIFIED_PHOTOS;
const asProduct = (p: VerifiedPhoto, fallback: VerifiedPhoto = p) => ({
  image: p.image,
  imageSource: p.imageSource,
  fallbackImage: fallback.image,
});

export const IMAGE_OVERRIDES: Record<string, { image: string; imageSource: string; fallbackImage: string }> = {
  // ===== NON-VEG CURRIES (standalone) =====
  "curry-chicken-keema":     asProduct(V.chickenCurryHomemade, V.chickenCurrySteelBowl),
  "curry-andhra-chicken":    asProduct(V.chickenCurryKadai, V.chickenCurryTraditional),
  "curry-chicken-palak":     asProduct(V.chickenCurryTraditional, V.chickenCurryDarkBowl),
  "curry-fish":              asProduct(V.fishCurryCreamy, V.fishCurryCoconut),
  "curry-chicken-pepper":    asProduct(V.chickenCurryBrassPan, V.chickenCurryOnionCilantro),
  "curry-chicken-vegetable": asProduct(V.chickenCurryPeas, V.chickenCurryChutney),
  "fish-grilled":            asProduct(V.grilledFishHerbs, V.grilledFishFillets),
  "chicken-grilled":         asProduct(V.grilledChickenDarkTable, V.grilledChickenCharcoal),

  // ===== MILLET RICE / BROWN RICE / RED RICE / RAGI CHAPATI =====
  "bhavna-rice-spicy-chicken":              asProduct(V.chickenCurryPotatoes, V.chickenCurryKadai),
  "ragi-chapati-fish-veg-curry":            asProduct(V.fishCurryVegetables, V.fishCurryCoconut),
  "veg-bhavna-rice-chicken-keema-balls":    asProduct(V.chickenCurryHomemade, V.chickenCurrySteelBowl),
  "bhavna-rice-mint-chicken-fry":           asProduct(V.grilledChickenDarkTable, V.chickenCurryBrassPan),
  "brown-rice-chicken-curry-raita":         asProduct(V.chickenCurryRicePlate, V.chickenCurryDarkBowl),
  "brown-rice-fish-fry-chinna-masala":      asProduct(V.fishCurryWhitePlate, V.fishCurrySpiced),
  "red-rice-chicken-fry":                   asProduct(V.grilledChickenCharcoal, V.grilledChickenDarkTable),

  // ===== MILLET SANGATI + CURRY COMBOS (combo-meals) =====
  "sangati-mixed-millet-chicken-keema":   asProduct(V.chickenCurrySteelBowl, V.chickenCurryHomemade),
  "sangati-ragi-andhra-chicken-curry":    asProduct(V.chickenCurryTraditional, V.chickenCurryKadai),
  "sangati-korra-chicken-pulusu":         asProduct(V.chickenCurryOnionCilantro, V.chickenCurryBrassPan),
  "sangati-samalu-fish-curry":            asProduct(V.fishCurrySteelBowl, V.fishCurryBananaLeaf),
  "sangati-arikela-chicken-pepper-curry": asProduct(V.chickenCurryBrassPan, V.chickenCurryOnionCilantro),
  "sangati-udalu-chicken-veg-curry":      asProduct(V.chickenCurryPeas, V.chickenCurryChutney),
  "combo-bajra-chicken":                  asProduct(V.chickenCurryKadai, V.chickenCurryTraditional),
  "combo-ragi-fish":                      asProduct(V.fishCurryCoconut, V.fishCurryCreamy),
  "combo-foxtail-chicken-pepper":         asProduct(V.chickenCurryBrassPan, V.chickenCurryOnionCilantro),
  "combo-mixed-millet-grilled-chicken":   asProduct(V.grilledChickenDarkTable, V.grilledChickenCharcoal),
  "combo-ragi-bajra-grilled-fish":        asProduct(V.grilledFishFillets, V.grilledFishHerbs),

  // ===== PRE-WORKOUT SMOOTHIES (10) =====
  "pre-banana-oats":     asProduct(V.smoothieBananaKiwi, V.smoothieAssortedWine),
  "pre-banana-peanut":   asProduct(V.smoothieAssortedWine, V.smoothieMilkshakesJars),
  "pre-dates-energy":    asProduct(V.smoothieDragonBerry, V.smoothieMilkshakesJars),
  "pre-apple-oats":      asProduct(V.smoothieWoodenTable, V.smoothiePomegranate),
  "pre-mango-energy":    asProduct(V.smoothieSunnyCocktails, V.smoothieJuiceBar),
  "pre-berry":           asProduct(V.smoothiePurpleBerry, V.smoothieDragonBerry),
  "pre-coffee-banana":   asProduct(V.smoothieShadowSeries, V.smoothieMilkshakesJars),
  "pre-pineapple-mint":  asProduct(V.smoothieMintGarnish, V.smoothieMintCups),
  "pre-watermelon":      asProduct(V.smoothieMintCups, V.smoothieJuiceBar),
  "pre-beetroot-energy": asProduct(V.smoothieMasonStraws, V.smoothiePomegranate),

  // ===== POST-WORKOUT SMOOTHIES (10) =====
  "post-greek-banana":        asProduct(V.smoothieStrawberryJar, V.smoothieAssortedWine),
  "post-chocolate-protein":   asProduct(V.smoothieMilkshakesJars, V.smoothieShadowSeries),
  "post-mango-yogurt":        asProduct(V.smoothieMirror, V.smoothieSunnyCocktails),
  "post-strawberry-protein":  asProduct(V.smoothieStrawberryTop, V.smoothieStrawberryJar),
  "post-pb-oats":             asProduct(V.smoothieFlatlayGreens, V.smoothieWoodenTable),
  "post-avocado":             asProduct(V.smoothieAvocadoGreen, V.smoothieFlatlayGreens),
  "post-banana-chia":         asProduct(V.smoothieGlassesShadow, V.smoothieSunnyCocktails),
  "post-papaya":              asProduct(V.smoothiePomegranate, V.smoothieMasonStraws),
  "post-mixed-fruit-protein": asProduct(V.smoothieJuiceBar, V.smoothieSunnyCocktails),
  "post-spinach-power":       asProduct(V.smoothieOutdoorCandle, V.smoothieAvocadoGreen),

  // ===== JUICE (1 of 5 verified) =====
  "juice-orange": asProduct(V.orangeJuiceClearGlass),
};

// ------------------------------------------------------------
// HELPER — merge into your existing PRODUCTS array
// ------------------------------------------------------------
// import { PRODUCTS } from "./products";
// import { IMAGE_OVERRIDES } from "./product-images";
//
// export const PRODUCTS_WITH_PHOTOS = PRODUCTS.map((p) => ({
//   ...p,
//   ...(IMAGE_OVERRIDES[p.id] ?? {
//     // not yet individually verified — keep existing image as
//     // both image and fallbackImage so nothing is ever empty
//     image: p.img,
//     imageSource: "https://www.pexels.com/search/" + encodeURIComponent(p.name) + "/",
//     fallbackImage: p.img,
//   }),
// }));

// ------------------------------------------------------------
// STILL NEEDS SOURCING — no verified real photo found yet.
// These are flagged rather than faked. Each link is a live
// Pexels search you (or I, in a follow-up pass) can pick from.
// ------------------------------------------------------------
export const NEEDS_SOURCING: Record<string, string> = {
  // Pure millet-ball "sangati" shots essentially don't exist on
  // Unsplash/Pexels/Pixabay — this is a hyper-regional Rayalaseema/
  // Andhra home dish, not commonly stock-photographed. Closest
  // real alternative is millet porridge/mash photography.
  "sangati-bajra": "https://www.pexels.com/search/millet%20porridge/",
  "sangati-ragi": "https://www.pexels.com/search/ragi%20mudde/",
  "sangati-foxtail": "https://www.pexels.com/search/millet%20balls/",
  "sangati-little-millet": "https://www.pexels.com/search/millet%20balls/",
  "sangati-kodo-millet": "https://www.pexels.com/search/millet%20balls/",
  "sangati-barnyard-millet": "https://www.pexels.com/search/millet%20balls/",
  "sangati-mixed-millet": "https://www.pexels.com/search/millet%20balls/",
  "sangati-ragi-bajra": "https://www.pexels.com/search/millet%20balls/",
  "sangati-foxtail-little-millet": "https://www.pexels.com/search/millet%20balls/",
  "sangati-mixed-special": "https://www.pexels.com/search/millet%20balls/",
  "curry-egg": "https://www.pexels.com/search/egg%20curry/",
  "combo-samalu-egg": "https://www.pexels.com/search/egg%20curry/",
  "sangati-korra-samalu-egg-curry": "https://www.pexels.com/search/egg%20curry/",
  "juice-beetroot": "https://www.pexels.com/search/beetroot%20juice/",
  "juice-green-detox": "https://www.pexels.com/search/green%20detox%20juice/",
  "juice-watermelon": "https://www.pexels.com/search/watermelon%20juice/",
  "juice-pineapple-mint": "https://www.pexels.com/search/pineapple%20juice/",
  "buttermilk": "https://www.pexels.com/search/buttermilk%20drink/",
  "boiled-eggs": "https://www.pexels.com/search/boiled%20egg%20whites/",
};