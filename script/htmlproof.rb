#!/usr/bin/env ruby

require 'html-proofer'

HTMLProofer.check_directory('./_site', {
	:parallel => {
		:in_processes => 4,
	},
	:check_html => true,
	:cache => {
		:timeframe => '1w',
	},
	:typhoeus => {
		:timeout => 15, # seconds
	},
	:url_ignore => [
		# html-proofer removes the end slash;
		# this site will return 500 if the URL is not an exact match
		/script-tutorials.com/,
	],
}).run
