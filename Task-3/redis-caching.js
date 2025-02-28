const redis = require('redis');
const { promisify } = require('util');

// Create Redis client
const redisClient = redis.createClient(process.env.REDIS_URL);

// Promisify Redis get and set methods
const getAsync = promisify(redisClient.get).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);

// Error handling for Redis client
redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

// Modified API endpoint with Redis caching
app.get("/products", async (req, res) => {
    try {
        // Create a cache key based on the request
        const cacheKey = 'products:all';
        
        // Check if data exists in Redis cache
        const cachedData = await getAsync(cacheKey);
        
        if (cachedData) {
            // If cached data exists, parse and return it
            console.log('Cache hit for products');
            return res.json(JSON.parse(cachedData));
        }
        
        // If no cached data, fetch from database
        console.log('Cache miss for products, fetching from DB');
        const products = await Product.find();
        
        // Store data in Redis with 5-minute expiration (300 seconds)
        await setAsync(cacheKey, JSON.stringify(products), 'EX', 300);
        
        // Return the fetched data
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: "Server error" });
    }
});