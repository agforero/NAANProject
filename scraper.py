# this first library requires you to pip install unidecode
from unidecode import unidecode
import json, requests, random
from bs4 import BeautifulSoup

"""
This program scrapes the RSS feed of Complex to ascertain
the different assets needed to display articles in the app.
"""

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

def give_unique_id(d):
  count = 0
  for key in d:
    for d_2 in d[key]:
      d_2["id"] = f"{key}_{count}"
      count += 1

def complex_scrape(original_page, subdivision):
  url = original_page
  data = requests.get(url)
  soup = BeautifulSoup(data.text, "xml")

  articles = []

  # establishing articles list and finding titles
  titles = soup.find_all("title")
  for title in titles[2:]:
    articles.append({"title": unidecode(title.text)})

  # finding authors (account for articles w/o an author)
  try:
    authors = soup.find_all("dc:creator")
    for i, author in enumerate(authors):
      articles[i]["author"] = unidecode(author.text)

  except IndexError:
    for i in range(len(articles)):
      articles[i]["author"] = "Complex"

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
    #articles[i]["img_url"] = get_better_res(pic["url"])
    articles[i]["img_url"] = pic["url"]

  # adding what subdivision it came from
  for i in range(len(articles)):
    articles[i]["subdivision"] = subdivision

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
  
  # scraping all articles
  data_to_json = {}
  for key in sites:
    data_to_json[key] = complex_scrape(sites[key], key)

  give_unique_id(data_to_json)

  with open("react_env/assets/articles/complex_scrape.json", 'w') as w:
    json.dump(data_to_json, w, indent=4, sort_keys=True)

  # scraping articles the prototype's user would find interesting (pooled)
  int_data_to_json = {"int": []}
  for int_key in ["music", "style", "sneakers"]:
    int_data_to_json["int"] += data_to_json[int_key]

  random.shuffle(int_data_to_json["int"])
  give_unique_id(int_data_to_json)
  int_data_to_json["int_featured"] = int_data_to_json["int"].pop()

  with open("react_env/assets/articles/int_complex_scrape.json", 'w') as w:
    json.dump(int_data_to_json, w, indent=4, sort_keys=True)

  # scraping articles normally out of the user's interests (pooled)
  exp_data_to_json = {"exp": []}
  for exp_key in ["pop", "sports", "life"]:
    exp_data_to_json["exp"] += data_to_json[exp_key]

  random.shuffle(exp_data_to_json["exp"])
  give_unique_id(exp_data_to_json)
  exp_data_to_json["exp_featured"] = exp_data_to_json["exp"].pop()

  with open("react_env/assets/articles/exp_complex_scrape.json", 'w') as w:
    json.dump(exp_data_to_json, w, indent=4, sort_keys=True)

if __name__ == "__main__":
  main()