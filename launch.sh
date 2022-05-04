#!/bin/bash

echo -e "\nscraping latest articles..."
python scraper.py

echo -e "\nchanging directory and starting android app..."
cd react_env
npx react-native run-android

echo -e "\ncding back up..."
cd ..