import { getArticleWithBriefId } from 'notion-to-markdown'
import Markdown from 'react-markdown'
import { DATABASE_ID } from '../../constant'

export default function FirstPost({article}) {
    return <div>
        <h1>{article.title}</h1>
        <Markdown>{article.content}</Markdown>
    </div>
}

export async function getServerSideProps(context) {
    const fetched = await getArticleWithBriefId(DATABASE_ID, context.query.pid)
    console.log(fetched.content)
    if(fetched)
        return {
            props: {
                article: fetched
            }
        }
}