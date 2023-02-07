import { Outlet } from 'react-router'
import { TopHeader, Header, Footer } from '../components'

export default function index() {
  return (
    <>
        <TopHeader/>
        <Header extraClass="container mx-auto"/>
        <Outlet/>
        <Footer extraClass="container mx-auto"/>
    </>
  )
}
