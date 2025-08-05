'use client'

import { ArticleCard } from '@/components/articleCard'
import Footer from '@/components/footer'
import Header from '@/components/header'

export default function Component() {
  return (
    <div className="h-screen flex flex-col lg:flex-row overflow-hidden">
      <div className="flex-1 bg-white flex flex-col justify-between p-6 lg:p-8">
        <Header />
        <Footer />
      </div>

      <div className="flex-1 bg-black flex items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-2xl space-y-6">
          <ArticleCard
            href="/artigo/como-usar-o-github"
            category="Ferramentas"
            title="Como usar o GitHub"
            description="Descubra como versionar seus projetos e colaborar com outros desenvolvedores usando GitHub."
            date="05 de agosto de 2025"
            isGithubUrl
          />
        </div>
      </div>
    </div>
  )
}
