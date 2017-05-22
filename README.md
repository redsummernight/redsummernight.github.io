# [redsummernight.github.io](https://redsummernight.github.io/)

[![Build Status](https://travis-ci.org/redsummernight/redsummernight.github.io.svg?branch=master)][travis]

[travis]: https://travis-ci.org/redsummernight/redsummernight.github.io

My [Jekyll](http://jekyllrb.org) website.

## Setup

To run it on your machine:

```sh
git clone git@github.com:redsummernight/redsummernight.github.io.git
cd redsummernight.github.io
gem install bundler
bundle install
bundle exec jekyll serve # http://localhost:4000
```

## Dependencies

Any libraries we need will be added to `common/lib`. To recreate that folder, run this in the project root:

```sh
# npm install -g bower-installer
bower-installer --remove-install-path
```

## License

[MIT and CC BY 4.0](https://redsummernight.github.io/credits/).
