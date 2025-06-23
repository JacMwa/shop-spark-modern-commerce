import { useState, useEffect, useMemo } from 'react';
import { ShoppingBag, User, Search, Menu, X, Star, Heart, ShoppingCart, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Cart from '@/components/Cart';
import AuthModal from '@/components/AuthModal';
import PaymentModal from '@/components/PaymentModal';
import { products } from '@/data/products';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface User {
  email: string;
  name: string;
}

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState<{role: 'user' | 'bot', message: string}[]>([]);
  const [chatInput, setChatInput] = useState('');
  const { toast } = useToast();

  // Mock product data - In real app, this would come from Django API
  const categories = ["All", "Electronics", "Fashion", "Beauty", "Gaming", "Food & Beverage", "Wearables", "Home & Garden", "Sports", "Books", "Toys"];

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // AI Assistant suggestions based on search
  const getAISuggestions = () => {
    if (!searchQuery) return [];
    
    const suggestions = [
      `Found ${filteredProducts.length} items matching "${searchQuery}"`,
      `💡 Special deals on ${selectedCategory !== 'All' ? selectedCategory : 'popular items'}`,
      `🔥 Trending: Similar items with 4.5+ star ratings`,
      `💰 Best value: Items under $50 in this category`
    ];
    
    return suggestions;
  };

  const addToCart = (product: any) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { 
        id: product.id, 
        name: product.name, 
        price: product.price, 
        image: product.image, 
        quantity: 1 
      }];
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleCheckout = () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    setShowPaymentModal(true);
  };

  const handleAuthSuccess = (userData: User) => {
    setUser(userData);
    toast({
      title: "Welcome!",
      description: `Hello ${userData.name}, you're now signed in.`,
    });
  };

  const handlePaymentSuccess = () => {
    setCart([]);
    toast({
      title: "Payment Successful!",
      description: "Your order has been placed successfully.",
    });
  };

  const handleSignOut = () => {
    setUser(null);
    toast({
      title: "Signed Out",
      description: "You have been signed out successfully.",
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = chatInput.trim();
    setChatMessages(prev => [...prev, { role: 'user', message: userMessage }]);
    setChatInput('');

    // Simulate AI response
    setTimeout(() => {
      let botResponse = '';
      const searchTerms = userMessage.toLowerCase();
      
      if (searchTerms.includes('deal') || searchTerms.includes('discount')) {
        botResponse = '🎉 Great news! I found some amazing deals for you. Check out our Sale section for up to 50% off on electronics and fashion items!';
      } else if (searchTerms.includes('recommend') || searchTerms.includes('suggest')) {
        botResponse = '💡 Based on popular trends, I recommend checking out our wireless headphones, smart watches, and gaming accessories. They\'re bestsellers!';
      } else if (searchTerms.includes('price') || searchTerms.includes('cheap') || searchTerms.includes('budget')) {
        botResponse = '💰 Looking for budget-friendly options? I can show you items under $50. What category interests you most?';
      } else {
        botResponse = `🛍️ I found ${filteredProducts.length} items related to "${userMessage}". Would you like me to show you the best deals or most popular items?`;
      }
      
      setChatMessages(prev => [...prev, { role: 'bot', message: botResponse }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ShopSpark
              </span>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600"
                    onClick={() => setShowAIAssistant(!showAIAssistant)}
                  >
                    <Bot className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            {/* Navigation Icons */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Hello, {user.name}</span>
                  <Button variant="ghost" size="sm" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </div>
              ) : (
                <AuthModal 
                  onAuthSuccess={handleAuthSuccess}
                  trigger={
                    <Button variant="ghost" size="sm" className="hidden md:flex">
                      <User className="h-5 w-5 mr-1" />
                      Sign In
                    </Button>
                  }
                />
              )}
              
              <Cart 
                cart={cart} 
                setCart={setCart} 
                onCheckout={handleCheckout}
              />
              
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600"
                  onClick={() => setShowAIAssistant(!showAIAssistant)}
                >
                  <Bot className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* AI Assistant Suggestions */}
      {showAIAssistant && searchQuery && (
        <div className="bg-blue-50 border-b border-blue-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 p-2 rounded-full">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-blue-900 mb-2">AI Shopping Assistant</h3>
                <div className="space-y-1">
                  {getAISuggestions().map((suggestion, index) => (
                    <p key={index} className="text-sm text-blue-800">{suggestion}</p>
                  ))}
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAIAssistant(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-400">
        <div className="absolute inset-0 bg-black/10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1200&h=600&fit=crop')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Welcome to
                <span className="block text-yellow-900 font-black">
                  ShopSpark
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-yellow-100 max-w-2xl">
                Your AI-powered shopping companion for amazing deals and personalized recommendations
              </p>
              <Button
                onClick={() => setShowChatbot(true)}
                className="bg-yellow-900 hover:bg-yellow-800 text-white px-8 py-4 text-lg rounded-full flex items-center space-x-2"
              >
                <Bot className="h-6 w-6" />
                <span>Chat with AI Assistant</span>
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=600&fit=crop"
                  alt="Happy saleswoman in yellow ShopSpark uniform"
                  className="w-80 h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <ShoppingBag className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <p className="text-sm font-bold text-gray-800">ShopSpark</p>
                    <p className="text-xs text-gray-600">Your Shopping Assistant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Modal */}
      {showChatbot && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-96 flex flex-col">
            {/* Chatbot Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">ShopSpark AI</h3>
                  <p className="text-xs opacity-80">Here to help you shop!</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowChatbot(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.length === 0 && (
                <div className="text-center text-gray-500 mt-8">
                  <Bot className="h-12 w-12 mx-auto mb-3 text-blue-500" />
                  <p className="text-sm">Hi! I'm your AI shopping assistant.</p>
                  <p className="text-xs">Ask me about deals, products, or recommendations!</p>
                </div>
              )}
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleChatSubmit} className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1"
                />
                <Button type="submit" size="sm">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                className="rounded-full px-6 py-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h2>
            <p className="text-lg text-gray-600">
              {filteredProducts.length} products found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.slice(0, 20).map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:scale-[1.02]">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500">
                        {product.badge}
                      </Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                        }`}
                      />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-600 ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <CardTitle className="text-sm mb-1 line-clamp-2 h-10">{product.name}</CardTitle>
                  <CardDescription className="text-xs text-gray-500 mb-3">
                    {product.category}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-bold text-blue-600">
                        ${product.price}
                      </span>
                      <span className="text-xs text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => addToCart(product)}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xs px-3 py-1"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length > 20 && (
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $50</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">100% satisfaction guaranteed</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-400 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Shopping Assistant</h3>
              <p className="text-gray-600">Personalized recommendations just for you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <ShoppingBag className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">ShopSpark</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your AI-powered shopping destination for amazing products at unbeatable prices.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fashion</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Beauty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gaming</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to get special offers and updates.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 ShopSpark. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal && !user}
        onOpenChange={setShowAuthModal}
        onAuthSuccess={(userData) => {
          handleAuthSuccess(userData);
          setShowPaymentModal(true);
        }}
      />

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onOpenChange={setShowPaymentModal}
        totalAmount={getTotalPrice()}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </div>
  );
};

export default Index;
