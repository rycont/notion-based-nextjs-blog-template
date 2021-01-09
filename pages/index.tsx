import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getTable } from 'notion-to-markdown'
import { TableRow } from 'notion-to-markdown/src/types'
import { DATABASE_ID } from '../constant'

const Home: React.FC<{
  articles: TableRow[]
}> = ({
  articles
}) => {
  return (
    <div>
      <Head>
        <title>Blog Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/category">Category</Link>
      <ul>
      {
        articles.map(article => <li key={article.pageId}>
          <Link href={`/post/${article.pageId.split('-')[0]}`}>
          {article.title}
        </Link>
        </li>)
      }
      </ul>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const articles = await getTable(DATABASE_ID)
  return {
    props: {
      articles
    }
  }
}