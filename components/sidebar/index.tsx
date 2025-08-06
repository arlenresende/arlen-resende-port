import { Github, ExternalLink } from 'lucide-react'
import { ActionLink } from './_components/actionLink'
import { TechnologiesCard } from './_components/technologiesCard'

interface ArticleCardProps {
  github?: string
  demo?: string
}
export default function Sidebar({ github, demo }: ArticleCardProps) {
  return (
    <div className="w-full max-w-sm space-y-6">
      <div
        className="absolute inset-0 opacity-5 bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url('/git-logo.png')`,
          backgroundSize: '200px 200px',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Projeto</h3>
        <p className="text-gray-400">Explore o código e demonstração</p>
      </div>

      <div className="space-y-4 relative z-10">
        {github && (
          <ActionLink
            href={github}
            icon={<Github size={20} />}
            label="Ver no GitHub"
          />
        )}
        {demo && (
          <ActionLink
            href={demo}
            icon={<ExternalLink size={20} />}
            label="Ver Demonstração"
          />
        )}
      </div>

      <TechnologiesCard technologies={['React', 'TypeScript', 'Next.js']} />
    </div>
  )
}
