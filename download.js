const https = require('https');
const fs = require('fs');

const options = {
  hostname: 'cdn.pixabay.com',
  path: '/download/audio/2022/03/10/audio_f55e09b1f5.mp3?filename=happy-birthday-to-you-110098.mp3',
  headers: { 
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'en-US,en;q=0.9'
  }
};

https.get(options, (res) => {
  console.log('Status 1:', res.statusCode);
  if (res.statusCode === 302 || res.statusCode === 301) {
    https.get(res.headers.location, { headers: options.headers }, (res2) => {
      console.log('Status 2:', res2.statusCode);
      res2.pipe(fs.createWriteStream('public/assets/hbd.mp3')).on('finish', () => console.log('Done!'));
    });
  } else {
    res.pipe(fs.createWriteStream('public/assets/hbd.mp3')).on('finish', () => console.log('Done!'));
  }
});
