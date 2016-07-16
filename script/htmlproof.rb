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
	:validation => {
		# script tags containing markup are reported as errors; ignore them
		# https://github.com/gjtorikian/html-proofer/issues/233
		:ignore_script_embeds => true,
	},
	:verbose => true,
}).run
