#!/usr/bin/env ruby

require 'html/proofer'

HTML::Proofer.new('./_site', {
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
	:verbose => true,
}).run
