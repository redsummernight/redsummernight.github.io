#!/usr/bin/env bash

# halt script on error
set -e

bundle exec jekyll build
bundle exec ruby script/htmlproof.rb

jshint --verbose --extract=auto --extra-ext=html,js _site/

ignore_re=(
	# Workaround for FF, which persists the dynamic disabled state of buttons
	# across page loads: http://stackoverflow.com/q/5985839/
	"Attribute \"autocomplete\" not allowed on element \"button\" at this point."
	# Allow scrollbar-width, which is still in working draft
	# https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width
	"CSS: \"scrollbar-width\": Property \"scrollbar-width\" doesn't exist."
)

html5validator --also-check-css --root _site/ --ignore-re "${ignore_re[@]}" --log INFO
