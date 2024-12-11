#!/usr/bin/env sh
# Documentation: 	https://github.com/envygeeks/jekyll-docker
# Blog Article: 	https://ddewaele.github.io/running-jekyll-in-docker/
# Open local website at: http://localhost:3000


# Removing container
# docker rm -f newblog
(
	set -e

	export JEKYLL_VERSION=4.0

	# Remove docker container if existing
	docker rm -f lepenonsurfhouse &>/dev/null 

	# Build and serve the website
	docker run --name lepenonsurfhouse --volume="$PWD:/srv/jekyll" -p 3000:4000 -it jekyll/jekyll:$JEKYLL_VERSION jekyll serve --config _config.yml,_translations.yml --incremental --watch
)