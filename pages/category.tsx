import { getTags } from 'notion-to-markdown'
import { GetServerSideProps } from "next"
import { DATABASE_ID } from '../constant'
import React from 'react'
import Link from 'next/link'

const CategoryList: React.FC<{
    category: string[]
}> = ({ category }) => {
    return <ul>
        {category.map(item => <li key={item}>
            <Link href={`/category/${item}`}>
                { item }
            </Link>
        </li>)}
    </ul>
}

export const getServerSideProps: GetServerSideProps = async () => {
    const tags = (await getTags(DATABASE_ID)).filter(tag => tag.startsWith('*'))
    return {
        props: {
            category: tags 
        }
    }
}

export default CategoryList