'use client'

import Link from 'next/link'
import clsx from 'clsx'

interface ArticleCardProps {
  href: string
  category: string
  title: string
  description: string
  date: string
  isGithubUrl?: boolean
  className?: string
}

export function ArticleCard({
  href,
  category,
  title,
  description,
  date,
  isGithubUrl = false,
  className,
}: ArticleCardProps) {
  const backgroundImageUrl = isGithubUrl ? '/github.png' : undefined

  return (
    <Link href={href}>
      <div
        className={clsx(
          'relative overflow-hidden rounded-lg border border-white/10 bg-transparent p-5 transition-all duration-300 group',
          className,
        )}
      >
        {backgroundImageUrl && (
          <div
            className="absolute inset-0 opacity-10 filter grayscale brightness-75 bg-no-repeat bg-contain bg-right pointer-events-none z-0 bottom-[-50px] right-[-50px]"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundPosition: 'right center',
              backgroundSize: 'auto 80%',
            }}
          />
        )}

        <div className="relative z-10 space-y-3">
          <p className="text-xs uppercase text-white/50 tracking-widest">
            {category}
          </p>
          <h3 className="text-xl font-semibold text-white transition-colors">
            {title}
          </h3>
          <p className="text-sm text-white/70 leading-relaxed">{description}</p>
          <p className="text-xs text-white/40 pt-2">{date}</p>
        </div>
      </div>
    </Link>
  )
}
