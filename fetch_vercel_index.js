const https = require('https');

const options = {
  hostname: '76.76.21.21', // Vercel's Anycast IP
  port: 443,
  path: '/',
  method: 'GET',
  servername: 'sui-hazel.vercel.app', // TLS SNI header
  headers: {
    'Host': 'sui-hazel.vercel.app',
    'User-Agent': 'Node.js-Inspect'
  },
  rejectUnauthorized: false // Skip cert mismatch checks if any
};

console.log('Fetching index from Vercel IP directly...');
const req = https.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  let data = '';
  res.on('data', (c) => data += c);
  res.on('end', () => {
    // Look for our script paths in the html
    const hasAbsolute = data.includes('/assets/js/17378_1.js');
    const hasRelative = data.includes('assets/js/17378_1.js') && !data.includes('/assets/js/17378_1.js');
    console.log('Contains absolute path /assets/js/17378_1.js:', hasAbsolute);
    console.log('Contains relative path assets/js/17378_1.js:', hasRelative);
    
    // Print script tags
    const scriptRegex = /<script[^>]*>/g;
    let match;
    console.log('\n--- Script Tags on Vercel index.html ---');
    while ((match = scriptRegex.exec(data)) !== null) {
      const start = match.index;
      const end = data.indexOf('>', start) + 1;
      console.log(data.substring(start, end));
    }
  });
});

req.on('error', (e) => {
  console.error('Request Error:', e.message);
});

req.end();
