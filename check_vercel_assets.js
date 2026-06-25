const https = require('https');

const assets = [
  '/assets/js/17378_1.js',
  '/assets/js/slater/50007.js',
  '/assets/js/gsap.min.js',
  '/assets/js/weglot.min.js',
  '/assets/lottie/692e8ee2a284f5a96ea725c8_00_20-_20Intro_20to_20Sui_20Stack.json'
];

assets.forEach(asset => {
  const options = {
    hostname: 'sui-hazel.vercel.app',
    path: asset,
    method: 'GET',
    headers: {
      'User-Agent': 'Node.js'
    }
  };
  
  const req = https.request(options, (res) => {
    console.log(`${asset} -> Status: ${res.statusCode}`);
  });
  
  req.on('error', (err) => {
    console.error(`Error requesting ${asset}:`, err.message);
  });
  
  req.end();
});
