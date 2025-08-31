export const categories = [
  { id: "Food", name: "Food", image: "/homepage/food.jpg", hasSubcategories: true },
  { id: "Clothing", name: "Clothing", image: "/homepage/clothing.jpeg", hasSubcategories: true },
  { id: "Accessories", name: "Accessories", image: "/homepage/accesories.jpg", hasSubcategories: true },
  { id: "Home", name: "Home Decor", image: "/homepage/homedecore1.png", hasSubcategories: true },
  { id: "Organic", name: "Organic and Natural", image: "/homepage/organic1.jpg", hasSubcategories: true },
  { id: "Kids", name: "Kids Special", image: "/homepage/babycloth.jpg", hasSubcategories: true },
  { id: "Gifts", name: "Gifts and Festive", image: "/homepage/gift2.jpg", hasSubcategories: true },
  { id: "Musical", name: "Musical Instruments", image: "/homepage/instrument.jpg", hasSubcategories: true },
  { id: "Handmade", name: "Handmade Footwear", image: "/homepage/footware.jpg", hasSubcategories: true },
  { id: "Paintings", name: "Paintings and Arts", image: "/homepage/paint.jpg", hasSubcategories: true },
];

export const subcategories: Record<string, { name: string; image: string }[]> = {
  Food: [
    { name: "Pickles", image: "/homepage/Food/brinjal.jpg" },
    { name: "Jams and Spreads", image: "/homepage/jam/2.jpg" },
    { name: "Spices and Masalas", image: "/homepage/masala/tikka.jpg" },
    { name: "Bakery and Snacks", image: "/homepage/bakery/1.jpg" },
    { name: "Chocolates and Sweets", image: "/homepage/chocolate/1.jpg" },
  ],
  Clothing: [
    { name: "Men's Clothing", image: "/homepage/mens_cloth/2.jpg" },
    { name: "Dresses and Kurtis", image: "/homepage/kurti/1.jpg" },
    { name: "Sarees and Ethnic Wear", image: "/homepage/saree/1.jpg" },
    { name: "Woolen and Crochet Items", image: "/homepage/woolen/2.jpg" },
  ],
  Accessories: [
    { name: "Handmade Jewelry", image: "/homepage/jwellery/1.jpg" },
    { name: "Bags and Purses", image: "/homepage/bags/1.jpg" },
  ],
  Home: [
    { name: "Candles", image: "/homepage/candles/1.jpg" },
    { name: "Clay and Ceramic Items", image: "/homepage/clay/1.jpg" },
    { name: "Wall Hangings", image: "/homepage/wall_hangi/1.jpg" },
    { name: "Paintings", image: "/homepage/paint/1.jpg" },
    { name: "Wooden Craft", image: "/homepage/wooden_craft/1.jpg" },
    { name: "Macrame and Dreamcatchers", image: "/homepage/macrame/1.jpg" },
  ],
  Organic: [
    { name: "Herbal Beauty Products", image: "/homepage/harbal/1.jpg" },
    { name: "Essential Oils", image: "/homepage/organic_oil/1.jpg" },
    { name: "Skin Care", image: "/homepage/skincare/1.jpg" },
    { name: "Organic Cleaning Products", image: "/homepage/cleaning/1.jpg" },
  ],
  Kids: [
    { name: "Baby Clothes", image: "/homepage/baby_cloth/1.jpg" },
    { name: "Soft and Wooden Toys", image: "/homepage/toy/1.jpg" },
    { name: "Personalized Accessories", image: "/homepage/personal_accese/1.jpg" },
  ],
  Gifts: [
    { name: "Gift Hampers", image: "/homepage/gift_hampper/1.jpg" },
    { name: "Greeting Cards", image: "/homepage/greeting/1.jpg" },
    { name: "Wedding and Festival Decor", image: "/homepage/wedding_gift/1.jpg" },
  ],
  Musical: [
    { name: "Small Tabla", image: "/homepage/tabala/1.jpg" },
    { name: "Flute", image: "/homepage/flute/3.jpg" },
  ],
  Handmade: [
    { name: "Kolhapuri Chappal", image: "/homepage/footware/1.jpg" },
    { name: "Jute Sandals", image: "/homepage/footware/2.jpg" },
  ],
  Paintings: [
    { name: "Oil Painting", image: "/homepage/oil_paint/1.jpg" },
    { name: "Acrylic Painting", image: "/homepage/acrylic/1.jpg" },
    { name: "Spray Paint", image: "/homepage/sprey/1.jpg" },
  ],
};
