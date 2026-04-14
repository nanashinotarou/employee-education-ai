import urllib.request
import re

video_ids = [
    '0HVMf7wtPsI',
    'NOAvewGJNsw',
    'f6fPA0v7VPw',
    'RIULsBUilQs',
    'aOtfa9jRut0',
    'pQ8r3P_SCMI'
]

for vid in video_ids:
    url = f"https://www.youtube.com/watch?v={vid}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            title = re.search(r'<title>(.*?)</title>', html).group(1)
            print(f"{vid}: {title}")
    except Exception as e:
        print(f"{vid}: Error {e}")
