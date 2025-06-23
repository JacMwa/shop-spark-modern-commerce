
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
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop"
    ] },
    { name: "Makeup Palette", category: "Beauty", minPrice: 25, maxPrice: 100, images: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583241800122-4d9e0f0e6e76?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1586155024088-516ca11505ad?w=500&h=500&fit=crop"
    ] },
    { name: "Hair Care Bundle", category: "Beauty", minPrice: 35, maxPrice: 120, images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop"
    ] },
    { name: "Perfume", category: "Beauty", minPrice: 40, maxPrice: 200, images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=500&fit=crop"
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
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=500&h=500&fit=crop"
    ] },
    { name: "Protein Powder", category: "Food & Beverage", minPrice: 30, maxPrice: 100, images: [
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
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
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop"
    ] },
    { name: "Throw Pillow", category: "Home & Garden", minPrice: 15, maxPrice: 60, images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=500&h=500&fit=crop"
    ] },
    
    // Sports
    { name: "Yoga Mat", category: "Sports", minPrice: 20, maxPrice: 80, images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1506629905607-d405e8dcca19?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop"
    ] },
    { name: "Dumbbells", category: "Sports", minPrice: 30, maxPrice: 200, images: [
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?w=500&h=500&fit=crop"
    ] },
    { name: "Running Shoes", category: "Sports", minPrice: 50, maxPrice: 250, images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=500&fit=crop"
    ] },
    
    // Books
    { name: "Programming Book", category: "Books", minPrice: 20, maxPrice: 80, images: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&h=500&fit=crop"
    ] },
    { name: "Novel Collection", category: "Books", minPrice: 15, maxPrice: 60, images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop"
    ] },
    
    // Toys
    { name: "Building Blocks", category: "Toys", minPrice: 25, maxPrice: 100, images: [
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1566654363301-3de94c4c4eab?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=500&fit=crop"
    ] },
    { name: "Action Figure", category: "Toys", minPrice: 15, maxPrice: 80, images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1566654363301-3de94c4c4eab?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500&h=500&fit=crop"
    ] }
  ];

  const products = [];
  let id = 1;

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
        const randomImage = template.images[Math.floor(Math.random() * template.images.length)];
        
        products.push({
          id: id++,
          name: `${brand} ${template.name} ${variation} - ${color}`,
          price,
          originalPrice,
          image: randomImage,
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
