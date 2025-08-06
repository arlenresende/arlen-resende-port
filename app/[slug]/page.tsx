import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Sidebar from '@/components/sidebar'
import Footer from '@/components/footer'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { client } from '../lib/contentful'

interface ContentfulArticle {
  sys: {
    id: string
  }
  fields: {
    title?: string
    shortTitle?: string
    slug?: string
    date?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content?: any
    categoria?: string
    github?: string
    demo?: string
  }
}

// Função para buscar artigo por slug
async function getArticleBySlug(
  slug: string,
): Promise<ContentfulArticle | null> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    })

    const articles = response.items as ContentfulArticle[]
    return articles.length > 0 ? articles[0] : null
  } catch (error) {
    console.error('Erro ao buscar artigo:', error)
    return null
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function processContentfulRichText(content: any): string {
  if (!content || !content.content) {
    return '<p>Conteúdo não disponível</p>'
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function nodeToHtml(node: any): string {
    if (node.nodeType === 'text') {
      return node.value
    }

    if (node.nodeType === 'paragraph') {
      return `<p class="mb-4">${node.content?.map(nodeToHtml).join('') || ''}</p>`
    }

    if (node.nodeType === 'heading-1') {
      return `<h1 class="text-3xl font-bold mt-8 mb-4 text-gray-900">${node.content?.map(nodeToHtml).join('') || ''}</h1>`
    }

    if (node.nodeType === 'heading-2') {
      return `<h2 class="text-2xl font-semibold mt-6 mb-3 text-gray-800">${node.content?.map(nodeToHtml).join('') || ''}</h2>`
    }

    if (node.nodeType === 'heading-3') {
      return `<h3 class="text-xl font-medium mt-4 mb-2 text-gray-700">${node.content?.map(nodeToHtml).join('') || ''}</h3>`
    }

    if (node.nodeType === 'unordered-list') {
      return `<ul class="mb-4 ml-4">${node.content?.map(nodeToHtml).join('') || ''}</ul>`
    }

    if (node.nodeType === 'ordered-list') {
      return `<ol class="mb-4 ml-4 list-decimal">${node.content?.map(nodeToHtml).join('') || ''}</ol>`
    }

    if (node.nodeType === 'list-item') {
      return `<li class="mb-1 list-disc">${node.content?.map(nodeToHtml).join('') || ''}</li>`
    }

    if (node.nodeType === 'blockquote') {
      return `<blockquote class="border-l-4 border-gray-300 pl-4 mb-4 italic">${node.content?.map(nodeToHtml).join('') || ''}</blockquote>`
    }

    if (node.nodeType === 'hr') {
      return '<hr class="my-6 border-gray-300">'
    }

    if (node.content) {
      let html = node.content.map(nodeToHtml).join('')

      if (node.marks) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        node.marks.forEach((mark: any) => {
          if (mark.type === 'bold') {
            html = `<strong class="font-semibold text-gray-900">${html}</strong>`
          }
          if (mark.type === 'italic') {
            html = `<em class="italic">${html}</em>`
          }
          if (mark.type === 'code') {
            html = `<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono">${html}</code>`
          }
        })
      }

      return html
    }

    return ''
  }

  try {
    return content.content.map(nodeToHtml).join('')
  } catch (error) {
    console.error('Erro ao processar Rich Text:', error)
    return '<p>Erro ao carregar conteúdo</p>'
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const title = article.fields?.title || 'Sem título'
  const shortTitle = article.fields?.shortTitle || ''
  const categoria = article.fields?.categoria || ''
  const rawContent = article.fields?.content
  const github = article.fields?.github || ''
  const demo = article.fields?.demo || ''
  const date = article.fields?.date || ''

  const processedContent = processContentfulRichText(rawContent)

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <div className="flex-1 lg:flex-[7] bg-white h-screen flex flex-col">
        <div className="flex-shrink-0 p-6 lg:px-12 lg:pt-12 pb-0">
          <div className="flex items-center justify-between mb-8">
            <Link href="/">
              <Button
                variant="ghost"
                className="flex items-center gap-2 hover:bg-gray-100"
              >
                <ArrowLeft size={20} />
                Voltar
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 lg:px-12 pb-12">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div className="flex items-center gap-4 mb-8">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {title}
                  </h1>
                  {shortTitle && <p className="text-gray-600">{shortTitle}</p>}
                  <div className="flex items-center gap-4 mt-2">
                    {categoria && (
                      <span className="text-xs uppercase text-blue-600 bg-blue-50 px-2 py-1 rounded tracking-widest">
                        {categoria}
                      </span>
                    )}
                    {date && (
                      <p className="text-sm text-gray-500">
                        {new Date(date).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="text-gray-800 leading-relaxed prose-headings:text-gray-900 prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />
            </article>
          </div>
        </div>
        <Footer />
      </div>

      <div className="flex-1 lg:flex-[3] bg-black flex flex-col justify-center items-center p-6 lg:p-8 relative">
        <Sidebar github={github || undefined} demo={demo || undefined} />
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
    })

    const articles = response.items as ContentfulArticle[]

    return articles
      .map((article) => ({
        slug: String(article.fields?.slug || ''),
      }))
      .filter(({ slug }) => slug)
  } catch (error) {
    console.error('Erro ao gerar params estáticos:', error)
    return []
  }
}
