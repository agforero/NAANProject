# this first library requires you to pip install unidecode
from unidecode import unidecode
import json, requests
from bs4 import BeautifulSoup

def complexify(link):
  if link[0] == '/':
    return "https://www.complex.com" + link

  else:
    return link

def get_better_res(image_link):
  banana = image_link.split(',')

  good_link = ""
  for i, term in enumerate(banana):
    if term[:2] == "h_":
      continue

    elif term[:2] == "w_":
      cut = term.split('/')
      if len(cut) == 1:
        continue

      else:
        for sub_term in cut:
          good_link += f"/{sub_term}"

    elif i == 0:
      good_link += term

    else:
      good_link += f",{term}"

  return good_link

def custom_json_output(d):
  pass

def complex_scrape(original_page):
  url = original_page
  data = requests.get(url)
  soup = BeautifulSoup(data.text, "xml")

  articles = []

  # establishing articles list and finding titles
  titles = soup.find_all("title")
  for title in titles[2:]:
    articles.append({"title": unidecode(title.text)})

  # finding authors (Complex Style doesn't have this for some reason)
  if original_page != "http://assets.complex.com/feeds/channels/style.xml":
    authors = soup.find_all("dc:creator")
    for i, author in enumerate(authors):
      articles[i]["author"] = unidecode(author.text)

  else:
    for i in range(len(articles)):
      articles[i]["author"] = ""

  # finding descriptions
  descs = soup.find_all("description")
  for i, desc in enumerate(descs[1:]):
    articles[i]["desc"] = unidecode(desc.text)

  # finding URLs
  links = soup.find_all("guid")
  for i, link in enumerate(links):
    articles[i]["url"] = link.text

  # finding links to pictures
  pics = soup.find_all("enclosure")
  for i, pic in enumerate(pics):
    articles[i]["img_url"] = get_better_res(pic["url"])

  return articles

def main():
  base = "http://assets.complex.com/feeds/channels/"
  sites = {
      "main":     base + "all.xml",
      "music":    base + "music.xml",
      "pop":      base + "pop-culture.xml",
      "style":    base + "style.xml",
      "sneakers": base + "sneakers.xml",
      "sports":   base + "sports.xml",
      "life":     base + "life.xml"
  }

  data_to_json = {}
  for key in sites:
    data_to_json[key] = complex_scrape(sites[key])

  with open("react_env/assets/articles/complex_scrape.json", 'w') as w:
    json.dump(data_to_json, w, indent=4, sort_keys=True)

if __name__ == "__main__":
  main()