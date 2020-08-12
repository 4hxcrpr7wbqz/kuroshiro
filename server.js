const http = require('http');
const Kuroshiro = require('kuroshiro');
const KuromojiAnalyzer = require('kuroshiro-analyzer-kuromoji');

const kuroshiro = new Kuroshiro();

const settings = {
  to: "hiragana",
  mode: "okurigana",
  delimiter_start: "（",
  delimiter_end: "）"
};

async function handler(req, res) {
  req.setEncoding('utf8');
  req.on('data', async str => {
    res.end(await kuroshiro.convert(str, settings));
  });
}

async function run() {
  await kuroshiro.init(new KuromojiAnalyzer());
  http.createServer(handler).listen(8000);
}

run();
