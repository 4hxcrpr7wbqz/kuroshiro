const http = require('http');
const Kuroshiro = require('kuroshiro');
const KuromojiAnalyzer = require('kuroshiro-analyzer-kuromoji');

const kuroshiro = new Kuroshiro();

const settings = {
	to: 'hiragana',
	mode: 'okurigana',
	delimiter_start: '（',
	delimiter_end: '）'
};

const header = { 'Content-Type': 'text/plain; charset=utf-8' };

async function furigana(str) {
	return await kuroshiro.convert(str, settings);
}

function handler(req, res) {
	if (req.method !== 'POST') {
		res.writeHead(405, header);
		res.end('Only POST method is supported');
	} else {
		const body = [];
		req.on('data', chunk => body.push(chunk));
		req.on('end', () => {
			furigana(Buffer.concat(body).toString()).then(str => {
				res.writeHead(200, header);
				res.end(str);
			}).catch(err => {
				res.writeHead(500, header);
				res.end(err.message);
			});
		});
	}
}

async function run() {
	await kuroshiro.init(new KuromojiAnalyzer());
	http.createServer(handler).listen(8000);
}

run();
