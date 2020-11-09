# 公式ブログから画像だけスクレイピング
- 画像の取得はapi gateway,lambda,python,seleniumでやった
- それをaxiosで叩く

lambdaのコードは以下。

```python
from selenium import webdriver
from bs4 import BeautifulSoup
import requests

def lambda_handler(event, context):
    options = webdriver.ChromeOptions()
    options.binary_location = "/opt/headless/python/bin/headless-chromium"
    options.add_argument("--headless")
    options.add_argument("--no-sandbox")
    options.add_argument("--single-process")

    driver = webdriver.Chrome(
        executable_path="/opt/headless/python/bin/chromedriver",
        options=options
    )

    url = "https://www.hinatazaka46.com/s/official/diary/member/list?ima=0000&ct=" + event['queryStringParameters']['member_code'] +"&dy=" + event['queryStringParameters']['year'] + event['queryStringParameters']['month']

    driver.get(url)

    html = requests.get(url)
    bs = BeautifulSoup(html.text, "html.parser")
    maincontents = bs.select('.l-maincontents--blog')
    images = maincontents[0].find_all("img")

    img_url_list = []
    for image in images:
        if image.get('src') != '':
            img_url_list.append(image.get('src'))
    driver.close()

    return img_url_list
```
