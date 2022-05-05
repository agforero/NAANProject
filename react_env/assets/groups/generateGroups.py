import pandas as pd
import json

"""
This program takes in a .csv of dummy groups we created,
converts them into a Python dictionary, and exports them
to groups.json (which is then displayed in the app).
"""

def main():
    groups = pd.read_csv("dummy_groups.csv")
    groups["members"] = groups["members"].astype(str)
    
    groups_ls = groups.to_dict(orient='record')
    groups_int = []
    groups_exp = []

    for d in groups_ls:
        if d["subdivision"] == "music" \
        or d["subdivision"] == "sneakers" \
        or d["subdivision"] == "style":
            groups_int.append(d)

        else:
            groups_exp.append(d)

    groups_dict = {
        "int": groups_int,
        "exp": groups_exp
    }

    with open("groups.json", 'w') as w:
        json.dump(groups_dict, w, indent=4, sort_keys=True)

if __name__ == "__main__":
    main()