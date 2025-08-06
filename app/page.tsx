import { ArticleCard } from '@/components/articleCard'
import Footer from '@/components/footer'
import Header from '@/components/header'

import { client } from './lib/contentful'

// Tipagem simples que funciona com o retorno real do Contentful
interface ContentfulArticle {
  sys: {
    id: string
  }
  fields: {
    title?: unknown
    shortTitle?: unknown
    slug?: unknown
    date?: unknown
    content?: unknown
  }
}

export default async function Home() {
  const response = await client.getEntries({
    content_type: 'blogPost',
  })

  const articles = response.items as ContentfulArticle[]

  return (
    <div className="h-screen flex flex-col lg:flex-row overflow-hidden">
      <div className="flex-1 bg-white flex flex-col justify-between p-6 lg:p-8">
        <Header />
        <Footer />
      </div>

      <div className="flex-1 bg-black flex items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-2xl space-y-2 flex flex-col ">
          {articles.map((article: ContentfulArticle) => {
            const title = article.fields?.title || ''
            const shortTitle = article.fields?.shortTitle || ''
            const slug = article.fields?.slug || ''
            const date = article.fields?.date || ''

            return (
              <ArticleCard
                key={article.sys.id}
                href={`/${slug}`}
                category={''}
                title={String(title)}
                description={String(shortTitle)}
                date={new Date(String(date)).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
                isGithubUrl={false}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
