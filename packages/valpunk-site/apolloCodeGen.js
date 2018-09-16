const schemaDownload =
  `apollo schema:download types/download.json --endpoint=https://thenodbeanbagchairs.myshopify.com/api/graphql --header="X-Shopify-Storefront-Access-Token: 08fbaf9e35f68b45d468da3a79d442b0"`
const codegen =
  "apollo codegen:generate --queries=**/*.tsx  --schema=types/download.json --target=typescript"

const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjamVob25ycGQ5Y2g2MDE5N2tjM2NhcHMyIiwiaWF0IjoxNTMwNTk1NTc1fQ.UoIpHpAuY0rqfMYBDzT2Rmwx0qoH2Xu4hnQFsFoY1N0"
