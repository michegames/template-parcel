# Phaser Parcel Template

This is a Phaser 3 project template that uses Parcel for bundling. It supports hot-reloading for quick development workflow and includes scripts to generate production-ready builds.

### modifications

I added ratio-based resolution management and a game area, fixed, this template is for landscape games.

## Node env

This package uses my system for managing virtual node systems, compatible with linux and mac, see:

https://github.com/micheg/node_env

### install

```bash
./bin/install
```

### develop

```bash
./bin/develop
```

### build

```bash
./bin/build
```

### profiles

link your profile.

*Landscape*

```bash
ln -s index.landscape.html index.html
```

*Portrait*
```bash
ln -s index.portrait.html index.html
```

## EJECT

* for landscape: ./bin/create-landscape
* for portrait ./bin/create-portrait

### Versions

This template has been updated for:

- [Phaser 3.70.0](https://github.com/phaserjs/phaser)
- [Parcel 2.11](https://github.com/parcel-bundler/parcel)

## Other

see: https://github.com/phaserjs/template-parcel for the original template

The Phaser logo and characters are &copy; 2011 - 2024 Phaser Studio Inc.

All rights reserved.
