# How to contribute to react-text-gradient

This document contains information on how to contribute to the project.

## Report bugs using Github's issues

Please [open an issue](https://github.com/antondevv/react-text-gradient/issues/new) if you discover a bug or would want to suggest a new feature. Pull requests are welcomed.

## Project structure

This repository is a monorepo that uses [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) to manage it. There are quite a few benefits to using Yarn workspaces rather than merely using symlinks between folders in your repository, which may make you wonder why there is only one package. However, the main benefit here is simply being able to install `react-text-gradient` in any workspace for a good developer experience while developing and project dependencies will be installed together, providing Yarn more flexibility to better optimize them.

## Installing

Run `yarn` in the repository's root directory to install the project's dependencies.

## Building the project

You can either run `yarn build` from the root directory, or run `yarn build` from `/react-text-gradient`. Then spin up any of the apps in `/examples`.

## Branching

There are two branches: master and develop. Create a feature branch if possible, then submit a PR to develop. If everything goes according to plan, develop will be merged into master, and if there are direct changes to `/react-text-gradient` that call for a new release, I will manually create a new release from master.
