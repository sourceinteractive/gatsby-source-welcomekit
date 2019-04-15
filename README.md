# gatsby-source-welcomekit

Pull data from Welcome to the jungle [Welcome Kit](https://www.welcomekit.co/) to access it with GraphQL within your Gatsby project.

*For now it only retrieves data from the un-authenticated [embed endpoint](http://developers.welcomekit.co/#embed).*

- [Install](#install)
- [How to use](#how-to-use)
- [Options](#options)
- [Example](#example)

## Install

```
npm i --save @sourceinteractive/gatsby-source-welcomekit
or
yarn add --dev @sourceinteractive/gatsby-source-welcomekit
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

- List all your organization jobs
```graphql
query {
  allJobOffer {
    totalCount
    edges {
      node {
        id
        name
        slug
        description
        reference
        office {
          id
          name
          city
          country {
            fr
            en
          }
        }
        contract_type {
          en
          fr
          es
        }
        profile
        recruitment_process
        salary {
          min
          max
          currency
          period
        }
      }
    }
  }
}
```