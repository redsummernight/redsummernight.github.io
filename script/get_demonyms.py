#!/usr/bin/env python3

import json
import os
import urllib.request


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def get_json(building_url):
    data = urllib.request.urlopen(building_url).read().decode('utf8')
    return json.loads(data)


if __name__ == '__main__':
    countries = get_json('https://raw.githubusercontent.com/mledoze/countries/master/dist/countries-unescaped.json')
    demonyms = []
    for c in countries:
        demonym = c['demonym']
        if not demonym:
            continue

        # Requires splitting:
        # - Antiguan, Barbudan
        # - Kittitian or Nevisian
        multi_demonyms = []
        for delim in [' or ', ', ']:
            if delim in demonym:
                multi_demonyms = demonym.split(delim)

        # 'Wallis and Futuna Islander' to 'Wallis Islander' and 'Futuna Islander'
        islander = ' Islander'
        if islander in demonym:
            multi_demonyms = demonym.split(' and ')
            multi_demonyms = [md if islander in md else md + islander for md in multi_demonyms]

        if multi_demonyms:
            demonyms.extend(multi_demonyms)
        else:
            demonyms.append(demonym)

    # Remove duplicates with a set, then move back to a list for sorting... yeah, fine.
    demonyms = sorted(list(set(demonyms)))
    print('Found {0} demonyms.'.format(len(demonyms)))

    result_file = os.path.join(BASE_DIR, '_data/demonyms.json')
    print('Saving: ' + result_file)
    with open(result_file, 'w+', encoding='utf8') as f:
        json.dump(demonyms, f, sort_keys=True, indent=2, ensure_ascii=False)
    print('Done.')
