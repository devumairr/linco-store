import React from 'react'

import MainSection from './MainSection'
import IndustrySection from './IndustrySection'
import Form from '../../components/form/Form'
import ArticleSection from './ArticleSection'
import ProductSection from './ProductSection'
import ServiceSection from './ServiceSection'

export default function Home(): ReactNode {
    return (
        <>
            <MainSection />
            <ServiceSection />
            <IndustrySection />
            <ProductSection />
            <ArticleSection />
            <Form />
        </>
    )
}
