# 公式ブログから画像だけスクレイピング
- 画像の取得はapi gateway,lambda,python,seleniumでやった
- それをaxiosで叩く

lambdaのコードは以下。

```python
from selenium import webdriver
from bs4 import BeautifulSoup
import requests
import os
import re

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

    html = requests.get(url,timeout=1)
    bs = BeautifulSoup(html.text, "html.parser")
    images = bs.find_all("img")

    img_url_list = []
    i = 0
    for image in images:
        if re.match('https://cdn.hinatazaka46.com/files/14/diary', image.get('src')) :
            img_url_list.append(image.get('src'))
            # img_url_list[i] = image.get('src')
            i = i+1;
    driver.close()
    
    return img_url_list
```
