const https = require('https');
https.get('https://www.youtube.com/playlist?list=PLoQApr14fcePthstdjcvII0vigl08Jk1Z', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    // extract "title":{"runs":[{"text":"..."}]} and "videoId":"..."
    const titleRegex = /"title":{"runs":\[{"text":"(.*?)"}\]}/g;
    const idRegex = /"videoId":"(.*?)"/g;
    let tMatch, iMatch;
    const titles = [];
    const ids = [];
    while ((tMatch = titleRegex.exec(data)) !== null) titles.push(tMatch[1]);
    while ((iMatch = idRegex.exec(data)) !== null) {
      if (iMatch[1].length === 11) ids.push(iMatch[1]);
    }
    console.log("Titles:", [...new Set(titles)].filter(t => !['YouTube', 'YouTube TV', 'YouTube Music'].includes(t)));
    console.log("IDs:", [...new Set(ids)]);
  });
});
