import { GetServerSideProps } from 'next'
import { getArticlesWithTag } from 'notion-to-markdown'
import { useRouter } from 'next/router'
import { DATABASE_ID } from '../../constant'
import React from 'react'
import Link from 'next/link'

const Category: React.FC<{
    articles: {
        pageId: string;
        title: string;
        tags: string[];
    }[]
}> = ({ articles }) => {
    const { cid } = useRouter().query
    return <div>
        <h1>{cid}</h1>
        <ul>
            {articles.map(article => <li key={article.pageId}>
                <Link href={`/post/${article.pageId.split('-')[0]}`}>
                    {article.title}
                </Link>
            </li>)}
        </ul>
    </div>
}

export default Category

export const getServerSideProps: GetServerSideProps = async (context) => {
    if(typeof context.query.cid === 'object') return
    const fetched = await getArticlesWithTag(DATABASE_ID, context.query.cid)
    if(fetched)
        return {
            props: {
                articles: fetched
            }
        }
}