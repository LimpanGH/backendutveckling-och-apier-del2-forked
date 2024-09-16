# Queries and mutations

Add your queries and mutations here.
A tip is to use [GraphQL Formatter](https://jsonformatter.org/graphql-formatter) to format them to make them easier to read.

## This is an example

```graphql
mutation {
  addSale(
    saleDate: "1427144809506"
    items: [
      {
        name: "printer paper"
        tags: ["office", "stationary"]
        price: 40.01
        quantity: 2
      }
    ]
    storeLocation: "Denver"
    customer: {
      gender: "M"
      age: 42
      email: "cauhowitwuta.sv"
      satisfaction: 4
    }
    couponUsed: true
    purchaseMethod: "Online"
  ) {
    id
  }
}
```

## Queries

### products

```graphql
// add your query/mutation here
```

### product(id: ID!)

```graphql
// add your query/mutation here
```

### totalStockValue

```graphql
// add your query/mutation here
```

### totalStockValueByManufacturer

```graphql
// add your query/mutation here
```

### lowStockProducts

```graphql
// add your query/mutation here
```

### criticalStockProducts

```graphql
// add your query/mutation here
```

### manufacturers

```graphql
// add your query/mutation here
```

## Mutations

### addProduct

```graphql
// add your query/mutation here
```

### updateProduct

```graphql
// add your query/mutation here
```

### deleteProduct

```graphql
// add your query/mutation here
```
