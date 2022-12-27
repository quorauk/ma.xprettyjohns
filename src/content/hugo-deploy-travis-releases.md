---
slug: "hugo-deploy-travis-releases"
title: "Deploying Hugo with Travis CI"
date: 2019-06-29T01:56:15+01:00
---

This blog is built with Hugo, and I wanted a simple way to build and then deploy it with Ansible. To do this I used Travis CI, this is relatively simple, but isn't documented very well. So Here I'll show you how I did it.

First up, you want a Hugo site, get started [here](https://gohugo.io). One simple thing that may immediately break in Travis is themes as submodules. Travis can't deal with ssh submodules, so check your .gitmodules file for ssh urls, and replace them with https if possible.

Next, you will want to setup your build and package pipeline. I like using a Makefile for this, but feel free to use what you are comfortable with.

    all: build

    clean:
        rm -rf public

    build: clean
        hugo -b https://ma.xprettyjohns.com/

    package: build
        tar -czf ma.xprettyjohns.com.tgz public

Essentially, the makefile will build the static hugo files to the ./public directory, then the package it into a tgz file for deployment. Now we need to get TravisCI to run this Makefile as part of the CI process. Create the following travis.yml file in the root of your repository.

    language: go
    install:
    - mkdir -p $HOME/bin
    - wget https://github.com/gohugoio/hugo/releases/download/v0.55.6/hugo_0.55.6_Linux-64bit.tar.gz
      -O /tmp/hugo.tar.gz
    - tar -xzf /tmp/hugo.tar.gz -C $HOME/bin/
    - export PATH=$PATH:$HOME/bin
    script: make package

This downloads the Hugo binary, adds it to the path, and then runs the Makefile package script. Now we want to set up deployment. 

    {{< highlight sh "linenos=table" >}}
    # install travis cli
    gem install travis
    # login to travisci.com
    travis login --pro
    # setup releases, follow the instructions
    travis setup releases -r quorauk/ma.xprettyjohns.com --pro
    {{</ highlight >}}

The last step is setting deploy.skip_cleanup: true, so that your deployment artifact isn't deleted before the deployment step. Set the branch you want to deploy from (probably master), and set on.tags: true. Your final travis.yml should look like this.

    language: go
    install:
    - mkdir -p $HOME/bin
    - wget https://github.com/gohugoio/hugo/releases/download/v0.55.6/hugo_0.55.6_Linux-64bit.tar.gz
      -O /tmp/hugo.tar.gz
    - tar -xzf /tmp/hugo.tar.gz -C $HOME/bin/
    - export PATH=$PATH:$HOME/bin
    script: make package
    deploy:
      provider: releases
      api_key:
        secure: <REDACTED>
      file: ma.xprettyjohns.com.tgz
      skip_cleanup: true
      on:
        repo: quorauk/ma.xprettyjohns.com
        tags: true
        branch: master
