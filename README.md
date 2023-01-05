# Tuneradio

# Projects
## Web
`$ npm run web`

## Mobile
Using layout [Ionic-Angular](https://ionicframework.com/docs/angular/overview)

`$ npm run mobile`

## Base
This project will have base components that will be used in both projects (web and mobiel), like:

- header
- footer
- player

Also default services and interfaces/types.

# Development
To use the lib `base` you need to build the lib using the command `$ ng build base`,
or you can use the commands below:

```bash
$ npm run base:watch
```

with

```bash
$ npm run web
```

## Base Project
every module or component you create should be exported in the `public-api.ts` if you want to use it outside the project.

example:
```ts
export * from './lib/custom-module/custom-module.module';
```

# Contributing
## Commit conventions
following [Angular Conventions](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)
