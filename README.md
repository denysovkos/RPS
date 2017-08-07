# KD - RSK

## Install & run

Frontend:
```
npm i && npm run start
```

API Server:
```
cd backend && npm i && npm run start
```

Go to `http://localhost:3000/`.

## Build

```
npm run build
```

This will create a `dist/` folder with a `app.min.js` which will be used on any environment which isn't undefined (i.e. not local).

```
npm run start-prod
```

This will build and then run your app with environment set to production, so that `app.min.js` and `config/production.js` are used.

## Adding routes

Add your routes in `Routes.js`.

```js
<Route path='users' component={Users} />
```

## Title and Meta

The parent `App.js` defines the base title and meta in a `Helmet` component. Any sub-component can override/add properties (even adding scripts and css). See the [react-helmet docs](https://github.com/nfl/react-helmet) for more info.

## Config

You can store app settings under `app/config/`. A file matching `process.env.NODE_ENV` will be loaded, for example `app/config/production.js`. If `process.env.NODE_ENV` is undefined it will fallback to `app/config/default.js`. You can access the correct config with:

```js
import config from './config';
```
