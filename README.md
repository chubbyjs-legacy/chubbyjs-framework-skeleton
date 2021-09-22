# chubbyjs-framework-skeleton

[![CI](https://github.com/chubbyjs/chubbyjs-framework-skeleton/workflows/CI/badge.svg?branch=master)](https://github.com/chubbyjs/chubbyjs-framework-skeleton/actions?query=workflow%3ACI)
[![Coverage Status](https://coveralls.io/repos/github/chubbyjs/chubbyjs-framework-skeleton/badge.svg?branch=master)](https://coveralls.io/github/chubbyjs/chubbyjs-framework-skeleton?branch=master)
[![Infection MSI](https://badge.stryker-mutator.io/github.com/chubbyjs/chubbyjs-framework-skeleton/master)](https://dashboard.stryker-mutator.io/reports/github.com/chubbyjs/chubbyjs-framework-skeleton/master)

[![bugs](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-framework-skeleton&metric=bugs)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-framework-skeleton)
[![code_smells](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-framework-skeleton&metric=code_smells)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-framework-skeleton)
[![coverage](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-framework-skeleton&metric=coverage)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-framework-skeleton)
[![duplicated_lines_density](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-framework-skeleton&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-framework-skeleton)
[![ncloc](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-framework-skeleton&metric=ncloc)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-framework-skeleton)
[![sqale_rating](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-framework-skeleton&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-framework-skeleton)
[![alert_status](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-framework-skeleton&metric=alert_status)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-framework-skeleton)
[![reliability_rating](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-framework-skeleton&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-framework-skeleton)
[![security_rating](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-framework-skeleton&metric=security_rating)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-framework-skeleton)
[![sqale_index](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-framework-skeleton&metric=sqale_index)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-framework-skeleton)
[![vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=chubbyjs_chubbyjs-framework-skeleton&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=chubbyjs_chubbyjs-framework-skeleton)

## Description

A minimal skeleton for [chubbyjs-framework][2].

## Requirements

 * node: 14
 * [@chubbyjs/chubbyjs-framework][2]: ^1.1.7
 * [@chubbyjs/chubbyjs-framework-router-path-to-regexp][3]: ^1.0.1
 * [@chubbyjs/chubbyjs-http-message][4]: ^1.1.1
 * [@chubbyjs/chubbyjs-laminas-config][5]: ^1.0.2
 * [@chubbyjs/chubbyjs-node-psr-http-message-bridge][6]: ^1.2.1
 * [@chubbyjs/chubbyjs-pino-psr][7]: ^1.0.0
 * [commander][8]: ^8.2.0"

## Installation

```sh
git clone https://github.com/chubbyjs/chubbyjs-framework-skeleton.git my-project
cd my-project
rm -r .git
git init
```

## Run

```sh
npm start
```

## Structure

### Command

Commands is code that is meant to be executed on command line.

 * [src/Command][9]

### RequestHandler

RequestHandler alias Controller, or Controller actions to be more precise.

 * [src/RequestHandler][10]

### ServiceFactory

Service factories are the glue code of the dependeny injection container.

 * [App\ServiceFactory][11]

## Copyright

Dominik Zogg 2021

[1]: https://www.npmjs.com/package/@chubbyjs/chubbyjs-framework-skeleton
[2]: https://www.npmjs.com/package/@chubbyjs/chubbyjs-framework
[3]: https://www.npmjs.com/package/@chubbyjs/chubbyjs-framework-router-path-to-regexp
[4]: https://www.npmjs.com/package/@chubbyjs/chubbyjs-http-message
[5]: https://www.npmjs.com/package/@chubbyjs/chubbyjs-laminas-config
[6]: https://www.npmjs.com/package/@chubbyjs/chubbyjs-node-psr-http-message-bridg
[7]: https://www.npmjs.com/package/@chubbyjs/chubbyjs-pino-psr
[8]: https://www.npmjs.com/package/commander

[9]: src/Command
[10]: src/RequestHandler
[11]: src/ServiceFactory
