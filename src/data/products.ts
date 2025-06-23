
export const generateProducts = () => {
  const categories = ["Electronics", "Fashion", "Beauty", "Gaming", "Food & Beverage", "Wearables", "Home & Garden", "Sports", "Books", "Toys"];
  const badges = ["Best Seller", "New", "Sale", "Popular", "Limited Edition", "Organic", "Pro Choice", "Trending", "Hot Deal", "Exclusive"];
  
  const productTemplates = [
    // Electronics
    { name: "Wireless Headphones", category: "Electronics", minPrice: 50, maxPrice: 300, images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop"
    ] },
    { name: "Smart Watch", category: "Electronics", minPrice: 100, maxPrice: 500, images: [
      "https://images.unsplash.com/photo-1544117519-31a4b1f4d69e?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=500&h=500&fit=crop"
    ] },
    { name: "Bluetooth Speaker", category: "Electronics", minPrice: 30, maxPrice: 200, images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&h=500&fit=crop"
    ] },
    { name: "Gaming Mouse", category: "Gaming", minPrice: 25, maxPrice: 150, images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1563297007-0686b8b3a136?w=500&h=500&fit=crop"
    ] },
    { name: "Mechanical Keyboard", category: "Gaming", minPrice: 80, maxPrice: 250, images: [
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop"
    ] },
    { name: "Laptop Stand", category: "Electronics", minPrice: 20, maxPrice: 100, images: [
      "https://images.unsplash.com/photo-1527142879-c2d3ba04349d?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1587829719310-b0b4a5c6c39b?w=500&h=500&fit=crop"
    ] },
    
    // Fashion
    { name: "Designer Backpack", category: "Fashion", minPrice: 50, maxPrice: 200, images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=500&h=500&fit=crop"
    ] },
    { name: "Casual T-Shirt", category: "Fashion", minPrice: 15, maxPrice: 50, images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop"
    ] },
    { name: "Denim Jeans", category: "Fashion", minPrice: 40, maxPrice: 120, images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=500&h=500&fit=crop"
    ] },
    { name: "Sneakers", category: "Fashion", minPrice: 60, maxPrice: 300, images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&h=500&fit=crop"
    ] },
    { name: "Leather Jacket", category: "Fashion", minPrice: 100, maxPrice: 400, images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&h=500&fit=crop"
    ] },
    
    // Beauty
    { name: "Skincare Set", category: "Beauty", minPrice: 30, maxPrice: 150, images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop"
    ] },
    { name: "Makeup Palette", category: "Beauty", minPrice: 25, maxPrice: 100, images: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583241800122-4d9e0f0e6e76?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=500&fit=crop"
    ] },
    { name: "Hair Care Bundle", category: "Beauty", minPrice: 35, maxPrice: 120, images: [
      "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop"
    ] },
    { name: "Perfume", category: "Beauty", minPrice: 40, maxPrice: 200, images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=500&h=500&fit=crop"
    ] },
    
    // Food & Beverage
    { name: "Organic Coffee", category: "Food & Beverage", minPrice: 15, maxPrice: 50, images: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&h=500&fit=crop"
    ] },
    { name: "Tea Collection", category: "Food & Beverage", minPrice: 20, maxPrice: 80, images: [
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1597318628146-cf835ea8c58a?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1558618666-281c830d6b13?w=500&h=500&fit=crop"
    ] },
    { name: "Protein Powder", category: "Food & Beverage", minPrice: 30, maxPrice: 100, images: [
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1607424648511-b72fdf2f0e1a?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=500&h=500&fit=crop"
    ] },
    
    // Home & Garden
    { name: "Plant Pot", category: "Home & Garden", minPrice: 10, maxPrice: 50, images: [
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=500&h=500&fit=crop"
    ] },
    { name: "Table Lamp", category: "Home & Garden", minPrice: 25, maxPrice: 150, images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500&h=500&fit=crop"
    ] },
    { name: "Throw Pillow", category: "Home & Garden", minPrice: 15, maxPrice: 60, images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=500&fit=crop"
    ] },
    
    // Sports
    { name: "Yoga Mat", category: "Sports", minPrice: 20, maxPrice: 80, images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1506629905607-d405e8dcca19?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=500&h=500&fit=crop"
    ] },
    { name: "Dumbbells", category: "Sports", minPrice: 30, maxPrice: 200, images: [
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?w=500&h=500&fit=crop"
    ] },
    { name: "Running Shoes", category: "Sports", minPrice: 50, maxPrice: 250, images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=500&fit=crop"
    ] },
    
    // Books
    { name: "Programming Book", category: "Books", minPrice: 20, maxPrice: 80, images: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500&h=500&fit=crop"
    ] },
    { name: "Novel Collection", category: "Books", minPrice: 15, maxPrice: 60, images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1535905557558-afc4877cdf3f?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=500&fit=crop"
    ] },
    
    // Toys
    { name: "Building Blocks", category: "Toys", minPrice: 25, maxPrice: 100, images: [
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1566654363301-3de94c4c4eab?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500&fit=crop"
    ] },
    { name: "Action Figure", category: "Toys", minPrice: 15, maxPrice: 80, images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1518946222227-364f22132616?w=500&h=500&fit=crop"
    ] }
  ];

  // Create a pool of unique images to avoid repetition
  const uniqueImages = [
    // Electronics additional
    "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1593349480506-8433634cdcbe?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop",
    
    // Fashion additional
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&h=500&fit=crop",
    
    // Beauty additional
    "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&h=500&fit=crop",
    
    // Food additional
    "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=500&h=500&fit=crop",
    
    // Home additional
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1549497538-303791108f95?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=500&h=500&fit=crop",
    
    // Sports additional
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1571384492785-70ff8d3b9d14?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=500&h=500&fit=crop"
  ];

  const products = [];
  let id = 1;
  let imageIndex = 0;

  // Generate multiple variations of each template
  for (let i = 0; i < 50; i++) {
    productTemplates.forEach(template => {
      const variations = ["Basic", "Premium", "Deluxe", "Pro", "Standard", "Advanced", "Elite", "Ultimate"];
      const colors = ["Black", "White", "Blue", "Red", "Green", "Silver", "Gold", "Rose Gold"];
      const brands = ["TechPro", "StyleMax", "BeautyLux", "GameForce", "FitLife", "HomeCraft", "SportEdge"];
      
      variations.forEach(variation => {
        if (id > 1000) return;
        
        const basePrice = Math.random() * (template.maxPrice - template.minPrice) + template.minPrice;
        const price = Math.round(basePrice * 100) / 100;
        const originalPrice = Math.round(price * (1 + Math.random() * 0.5) * 100) / 100;
        
        const brand = brands[Math.floor(Math.random() * brands.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const badge = badges[Math.floor(Math.random() * badges.length)];
        
        // Use unique images with fallback to template images
        let selectedImage;
        if (imageIndex < uniqueImages.length) {
          selectedImage = uniqueImages[imageIndex];
          imageIndex++;
        } else {
          // Reset index and use template images with modification
          imageIndex = 0;
          selectedImage = template.images[Math.floor(Math.random() * template.images.length)];
        }
        
        products.push({
          id: id++,
          name: `${brand} ${template.name} ${variation} - ${color}`,
          price,
          originalPrice,
          image: selectedImage,
          category: template.category,
          rating: Math.round((3.5 + Math.random() * 1.5) * 10) / 10,
          reviews: Math.floor(Math.random() * 300) + 10,
          badge
        });
      });
    });
  }

  return products.slice(0, 1000);
};

export const products = generateProducts();
