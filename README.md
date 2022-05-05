## Required Python libraries:

```
pip install unidecode
pip install bs4
pip install requests
pip install lxml
```

## Issues:

These are things that keep this hi-fi prototype from just being a fully-functional model for a Complex App.

* Transitions all use the same animation.
* The prototype assumes the user is interested in Complex Music, Sneakers and Style. The checkboxes at the beginning don't change this.
* Props always pass as `undefined` when using `react-navigation`, which prevents the app from porting dynamic information into templates (e.g., passing an object containing basic information on an article into a pretty-looking article page). To display what the page would look like despite this, the featured article on both **FOR YOU** and **EXPLORE** has its own page, generated from `.json` data received from `scraper.py`.
* Images look a little goofy when stretched sometimes.
* Not sure if this will be the case for every Android emulator, but Google Chrome on an emulator running a Pixel 5 (API 32) is pretty janky looking. See [here](react_env/assets/imgs/const/chrome_jank.png) for an example. This isn't necessarily a problem with the app, it just makes testing a little tougher.
* Sometimes, images don't load quickly enough for the app to display them.