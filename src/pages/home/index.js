import { ProductGrid6, HeroSection1,  Divider, Banner1, ProductListing, Feature1, Feature2, Feature3 } from '../../components'

export default function Home() {
  return (
    <>
      <HeroSection1 extraClass="container mx-auto"/>
      <Divider extraClass="container mx-auto"/>
      <Feature1/>
      <Feature2/>
      <Feature3/>
      <ProductGrid6 extraClass="container mx-auto"/>
      <ProductListing extraClass="container mx-auto"/>
      <Divider extraClass="container mx-auto"/>
      <Banner1 extraClass="container mx-auto"/>
    </>
  )
}
