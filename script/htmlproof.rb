#!/usr/bin/env ruby

require 'html-proofer'

HTMLProofer.check_directory('./_site', {
	check_html: true,
	check_img_http: true,
	cache: {
		timeframe: '1w',
	},
	parallel: {
		in_processes: 4,
	},
	typhoeus: {
		ssl_verifypeer: false,
		ssl_verifyhost: 0,
		timeout: 15, # seconds
	},
	url_ignore: [
		/web.archive.org/,
	],
	validation: {
		report_missing_names: true,
	},
}).run
