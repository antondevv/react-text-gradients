# How to contribute to react-text-gradients

This document contains information on how to contribute to the project.

## Report bugs using Github's issues

Please [open an issue](https://github.com/antondevv/react-text-gradients/issues/new) if you discover a bug or would want to suggest a new feature. Pull requests are welcomed.

## Project structure

This repository is a monorepo that uses [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) to manage it. There are quite a few benefits to using Yarn workspaces rather than merely using symlinks between folders in your repository, which may make you wonder why there is only one package. However, the main benefit here is simply being able to install `react-text-gradients` in any workspace for a good developer experience while developing and project dependencies will be installed together, providing Yarn more flexibility to better optimize them.

## Installing

Run `yarn` in the repository's root directory to install the project's dependencies.

## Building the project

You can either run `yarn build` from the root directory, or run `yarn build` from `/react-text-gradients`. Then spin up any of the apps in `/examples`.

## Branching

There are two branches: master and develop. Create a feature branch, then submit a PR to master if it contains any of the following: A small bug, a small feature, update to the demo website, update to the readme documentaion. If everything goes according to plan, your branch will be merged into master, and if there are direct changes to `/react-text-gradients` that call for a new release, I will manually create a new release from master.

Now, if it's massive change like breaking changes, then please submit a PR to develop.
