import { getArticleWithBriefId } from 'notion-to-markdown'
import Markdown from 'react-markdown'
import { DATABASE_ID } from '../../constant'

const Post: React.FC<{
    article?: {
        content: string;
        pageId: string;
        title: string;
        tags: string[];
    };
    error?: string;
}> = ({ article, error }) => {
    if(error) {
        if(process.browser) {
            window.alert(error)
            history.back()
        }
        return <></>
    }
    return <div>
        <h1>{article.title}</h1>
        <p>Tag : {article.tags.join(', ')}</p>
        <Markdown>{article.content}</Markdown>
    </div>
}

export default Post

export async function getServerSideProps(context) {
    try {
        const fetched = await getArticleWithBriefId(DATABASE_ID, context.query.pid)
        console.log(fetched.content)
        if(fetched)
            return {
                props: {
                    article: fetched
                }
            }
    } catch {
        return {
            props: {
                error: "Forbidden"
            }
        }
    }
}