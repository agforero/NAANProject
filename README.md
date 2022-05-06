# NAANProject: Complex App

## A hi-fi prototype for a mobile app for [Complex](https://www.complex.com/) as a part of [Cornell Tech's BigCo Studio](https://tech.cornell.edu/studio/curriculum/bigco-studio/) course.

### Summary:

This is a hi-fi prototype for the Complex app, which would help Complex engage with their Generation Z audience, and enrich their community by bringing their fans together.

**Complex Central** is essentially a mobile version of their website, with some ML thrown in for effect. A Python script (`scraper.py`) scrapes [Complex's RSS feed](https://www.complex.com/share) for their latest articles and compiles them on the front page. The user is recommended articles that appeal to their tastes, and the machine learning algorithm learns over time what articles they're most likely to click on (though, in this prototype, there is no such model).

**Complex Links** is a forum-based discussion service that enables Complex fans to come together and discuss their common interests: sneakers, style, sports, whatever they like. It's simple, doesn't take much effort to navigate, and brings people together (especially during these weird COVID times). 

### Required technologies:

1. [Python 3](https://www.python.org/downloads/)
2. [React Native (latest version) for Android](https://reactnative.dev/docs/environment-setup)
    * Please do yourself a favor and use the **React Native CLI Quickstart** instructions. Following the other set of instructions led to some inexplicable errors.
3. [Android Studio](https://developer.android.com/studio)
    * You'll need this to [set up an Android Emulator](https://developer.android.com/studio/run/managing-avds). We developed this prototype with a **Pixel 5** running **API 32**, so you should set up the same device. Some UI elements might be contorted otherwise.

### Required Python libraries:

```
pip install unidecode
pip install bs4
pip install requests
pip install lxml
```

### To launch:

1. Open the Pixel 5 emulator in the background.
2. `cd` into this directory.
3. Run `./launch.sh`.

That's it. The app will install itself onto the emulator, and you can mess with it from there. If `./launch.sh` lacks permissions to execute, run: 

```bash
chmod u+x launch.sh
```

In your terminal.

### Issues:

These are things that keep this hi-fi prototype from just being a fully-functional model for a Complex App.

* Transitions all use the same animation.
* The prototype's name, username and password are `Agustin Forero`, `agforero` and `NAANForever` respectively. Entry fields in second screen don't have `onChangeText()`s that save custom info.
* The prototype assumes the user is interested in Complex Music, Sneakers and Style. The checkboxes at the beginning don't change this.
* Props always pass as `undefined` when using `react-navigation`, which prevents the app from porting dynamic information into templates (e.g., passing an object containing basic information on an article into a pretty-looking article page). To display what the page would look like despite this, the featured article on both **FOR YOU** and **EXPLORE** has its own page, generated from `.json` data received from `scraper.py`.
* Images look a little goofy when stretched sometimes.
* Not sure if this will be the case for every Android emulator, but Google Chrome on an emulator running a Pixel 5 (API 32) is pretty janky looking. See [here](react_env/assets/imgs/const/chrome_jank.png) for an example. This isn't necessarily a problem with the app, it just makes testing a little tougher.
* Sometimes, images don't load quickly enough for the app to display them. (Might be fixed? We added `resizeMethod='resize'` as an attribute of the `<Image>`s and it seems to work).
* Hamburger always returns back to Home instead of Explore for both Central and Links.
* Articles displayed in the app are not scraped from React itself (by running requests on the RSS feed of Complex or something). Rather, they're scraped by a Python script (`scraper.py`) and stored as `.json` data in `/react_env/assets/articles/`.