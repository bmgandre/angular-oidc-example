# anguar-oidc-example
>  SPA authentication using a node-oidc-provider (OpenID Connect)

[![Build Status](https://travis-ci.org/bmgandre/angular-oidc-example.svg?branch=master)](https://travis-ci.org/bmgandre/angular-oidc-example)

This repository contains both Angular client and the node-oidc-provider.

## Angular client

### Build
```console
cd client
npm install
export PATH=$(pwd)/node_modules/.bin:$PATH
ng build
```

### Run 
```console
cd client
npm install
export PATH=$(pwd)/node_modules/.bin:$PATH
ng serve
```

## OpenID Provider (node-oidc-provider)

### Build
```console
cd openid-server
npm install
export PATH=$(pwd)/node_modules/.bin:$PATH
npm run build
```

### Run 
```console
cd openid-server
npm install
export PATH=$(pwd)/node_modules/.bin:$PATH
npm run start
```