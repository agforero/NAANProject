import random
import json

"""
this file generates some users (their usernames and
profile pictures) to make the featured Links easier
to code.
"""

def main():
    d = {"fake_users": []}
    for i, user in enumerate([
        "Sarah_Hamm",
        "BananaBoy92",
        "AmericaTheBeautiful",
        "CheeseTouch",
        "NietzscheEnthusiast",
        "Karen",
        "CooperMama",
        "ElfOnAShelf",
        "BananaBoss95",
        "ScooterChad17"
    ]):
        d["fake_users"].append({
            "img_src": f"../assets/imgs/fakepeople/p{i}.jpg",
            "username": user
        })

    with open("fake_users.json", 'w') as w:
        json.dump(d, w, indent=4, sort_keys=True)

if __name__ == "__main__":
    main()