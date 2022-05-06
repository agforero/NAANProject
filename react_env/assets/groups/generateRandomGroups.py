from tokenize import group
import pandas as pd
import random
import string
import lorem
import json

"""
This program just creates a bunch of placeholder
groups using lorem ipsum to fill in the descriptions.
"""

def main():
    random.seed()

    groups_dict = {
        "int": [],
        "exp": []
    }

    cats = [
        ["music 🎵", "sneakers 👟", "style 👔"],
        ["pop culture 🎤", "sports 🏀", "life 📰"]
    ]

    for i, col in enumerate(["int", "exp"]):
        for j in range(50):
            members = random.randint(15, 70)
            group_name = random.choice(lorem.paragraph()\
                .split())\
                .translate(str.maketrans('', '', string.punctuation))

            groups_dict[col].append(
                {
                    "description": lorem.paragraph(),
                    "group_name": f"{group_name} Discussion Group",
                    "members": str(members),
                    "members_online": str(members - random.randint(3, 13)),
                    "subdivision": random.choice(cats[i]),
                    "id": str((i * 50) + j),
                    "lorem": group_name.capitalize()
                }
            )

    groups_dict["int_feature"] = groups_dict["int"].pop()
    groups_dict["int_feature"]["subdivision"] = "sneakers 👟"
    groups_dict["int_feature"]["members"] = str(int(groups_dict["int_feature"]["members"]) + 10)
    groups_dict["int_feature"]["members_online"] = str(int(groups_dict["int_feature"]["members"]) - 10)

    groups_dict["exp_feature"] = groups_dict["exp"].pop()
    groups_dict["exp_feature"]["subdivision"] = "sports 🏀"
    groups_dict["exp_feature"]["members"] = str(int(groups_dict["exp_feature"]["members"]) + 10)
    groups_dict["exp_feature"]["members_online"] = str(int(groups_dict["exp_feature"]["members"]) - 10)

    with open("groups_random.json", 'w') as w:
        json.dump(groups_dict, w, indent=4, sort_keys=True)

if __name__ == "__main__":
    main()