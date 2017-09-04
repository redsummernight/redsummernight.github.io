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
		:ssl_verifypeer => false,
		:timeout => 15, # seconds
	},
	:url_ignore => [
		/martin.ankerl.com/,
		/soundcloud.com/,
	],
}).run
