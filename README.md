# Furigana APP

## Usage

```sh
$ docker build -t furigana https://github.com/ayaka14732/kuroshiro.git#furigana
$ docker run -d -p "127.0.0.1:8080:8000" --name=furigana-box furigana
$ curl -d "感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！" -X POST http://127.0.0.1:8080/
感（かん）じ取（と）れたら手（て）を繋（つな）ごう、重（かさ）なるのは人生（じんせい）のライン and レミリア最高（さいこう）！
```
