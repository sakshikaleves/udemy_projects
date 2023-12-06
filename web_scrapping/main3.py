
import requests
from bs4 import BeautifulSoup

url = "https://codewithharry.com"

# Get the HTML
r = requests.get(url)
htmlcontent = r.content
# parse the html file 
soup = BeautifulSoup(htmlcontent, 'html.parser')
print(soup.prettify)
