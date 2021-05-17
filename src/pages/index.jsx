import * as React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import {
  container,
  flex,
  intro,
  callOut,
  callToAction,
  linkButton,
  buttonGroup,
  ghostButton,
} from "./index.module.css"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
  }
`
export default function IndexPage({ data }) {
  return (
    <Layout>
      <div className={container}> 
        <div className={flex}>
          <div>
            <p className={callOut}>Demo Store</p>
            <h1 className={intro}>Controla cada detalle de tu tienda en linea</h1>
            <p className={callToAction}>
              Websites increíbles, 100% personalizables a tu gusto, que cargan en milisegundos y ofrecen experiencias de compra gratificantes a todos sus visitantes.
            </p>
            <div className={buttonGroup}>
              <a href="mailto:adinjesuha@gmail.com" target="_blank" className={linkButton}>adinjesuha@gmail.com
              </a>
              <a href="tel:504-9579-8520" target="_blank" className={ghostButton}>9579-8520
              </a>
            </div>
          </div>
          <div>
            <img src={`Keyvisual.png`} alt="Home image"/>
          </div>
        </div>
      </div>
      <ProductListing products={data.shopifyCollection.products} />
    </Layout>
  )
}
