const dns = require('dns');

console.log('Default DNS servers:', dns.getServers());

try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
  console.log('Set DNS servers to [8.8.8.8, 1.1.1.1]');
} catch (e) {
  console.error('Error setting DNS servers:', e.message);
}

dns.resolve4('github.com', (err, addresses) => {
  if (err) {
    console.error('Error resolving github.com:', err);
  } else {
    console.log('github.com resolved to:', addresses);
  }
});

dns.resolve4('api.github.com', (err, addresses) => {
  if (err) {
    console.error('Error resolving api.github.com:', err);
  } else {
    console.log('api.github.com resolved to:', addresses);
  }
});
