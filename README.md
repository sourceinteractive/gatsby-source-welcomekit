# gatsby-source-welcomekit

Pull your data from Welcome to the jungle [Welcome Kit](https://www.welcomekit.co/) to access it with GraphQL within your Gatsby project.

- [Install](#install)
- [How to use](#how-to-use)
- [Options](#options)
- [Example](#example)

## Install

```
npm i --save gatsby-plugin-offline
or
yarn add --dev gatsby-plugin-offline
```

## How to use

Note that `key` and `organization_reference` are required

*To avoid pushing keys to your repository, consider using env vars*

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-welcomekit',
      options: {
        access_token: `your_welcomekit_api_token`, // required
        organization_reference: `your_organization_reference`, // required
      },
    },
    ...
```

**To pull the data from Welcome Kit into GraphQL you need to restart your local Gatsby.**


## Options

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-source-welcomekit',
    options: {
      access_token: `your_welcomekit_api_token`,
      organization_reference: `your_organization_reference`,
    }
  }
]
```

## Example

```graphql
// @Todo
```