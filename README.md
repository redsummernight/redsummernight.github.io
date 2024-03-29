# redsummernight

[![Build Status](https://github.com/redsummernight/redsummernight.github.io/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/redsummernight/redsummernight.github.io/actions/workflows/ci.yml?query=branch%3Amain)

My [Jekyll](http://jekyllrb.org) website:

- Stable: https://redsummernight.neocities.org/
- Latest: https://redsummernight.github.io/

## Setup

To view the site on your machine:

```sh
git clone https://github.com/redsummernight/redsummernight.github.io.git
cd redsummernight.github.io
gem install bundler
bundle install
bundle exec jekyll serve # http://localhost:4000
```

### Building for Neocities

Note:

- The custom 404 page is `not_found.html` at the site root, unlike `404.html` for GitHub Pages.
- Neocities has [restricted file types](https://neocities.org/site_files/allowed_types) for free accounts.
- SVG files should have the XML declaration (e.g. `<?xml version="1.0" encoding="UTF-8"?>`), since
  certain MIME type detection tools (including the one used by Neocities)
  [will not recognize SVGs without it](https://github.com/svg/svgo/issues/836).

## Contributing

If you like to make neat text/art/interactive things with HTML/CSS/JS, I'm happy to have you on board.
Please check out the [contributing guide](https://github.com/redsummernight/redsummernight.github.io/blob/main/CONTRIBUTING.md) for more info.

## License

[MIT](https://github.com/redsummernight/redsummernight.github.io/blob/main/LICENSE) for code
and [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) for art/text/sound,
unless [otherwise noted](https://redsummernight.github.io/credits/).
