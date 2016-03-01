#!/usr/bin/env bash

# halt script on error
set -e

bundle exec jekyll build
bundle exec htmlproof ./_site --check-html --verbose
jshint --verbose --extract=auto --extra-ext=html,js ./_site/
