import { motion } from "motion/react";

const menuItems = [
  {
    category: "Starters",
    items: [
      { name: "Burrata & Heirloom Tomato", price: "$18", desc: "Creamy burrata, balsamic glaze, fresh basil, sourdough crisps" },
      { name: "Truffle Arancini", price: "$16", desc: "Wild mushroom risotto balls, truffle aioli, parmesan" },
      { name: "Scallop Carpaccio", price: "$22", desc: "Thinly sliced scallops, citrus vinaigrette, chili, micro-greens" },
    ]
  },
  {
    category: "Main Course",
    items: [
      { name: "Pan-Seared Sea Bass", price: "$38", desc: "Saffron risotto, asparagus, lemon butter sauce" },
      { name: "Wagyu Beef Fillet", price: "$52", desc: "Potato pavé, red wine jus, roasted baby carrots" },
      { name: "Wild Mushroom Gnocchi", price: "$32", desc: "Handmade gnocchi, sage butter, toasted walnuts, pecorino" },
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Dark Chocolate Fondant", price: "$14", desc: "Warm center, vanilla bean gelato, raspberry coulis" },
      { name: "Lemon Myrtle Tart", price: "$12", desc: "Shortcrust pastry, citrus curd, toasted meringue" },
      { name: "Artisanal Cheese Board", price: "$24", desc: "Selection of local cheeses, honey, dried fruits, crackers" },
    ]
  }
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 italic">The Seasonal Menu</h2>
          <p className="text-stone-500 max-w-2xl mx-auto font-light">
            Our menu is a celebration of local producers and seasonal ingredients, 
            crafted with precision and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {menuItems.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <h3 className="text-2xl font-serif mb-8 text-primary border-b border-stone-100 pb-4">
                {section.category}
              </h3>
              <div className="space-y-10">
                {section.items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-lg font-medium group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-stone-400 font-serif italic">{item.price}</span>
                    </div>
                    <p className="text-sm text-stone-500 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
