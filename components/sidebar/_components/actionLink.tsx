'use client'

import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface ActionLinkProps {
  href: string
  icon?: ReactNode
  label: string
  className?: string
}

export function ActionLink({ href, icon, label, className }: ActionLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'relative group flex items-center justify-between gap-3 w-full bg-black border border-white/10 text-white px-5 py-4 rounded-lg transition-all duration-300 hover:border-white/20',
        className,
      )}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-medium">{label}</span>
      </div>
      <ExternalLink
        size={16}
        className="opacity-0 group-hover:opacity-100 transition-opacity text-white/70"
      />
    </Link>
  )
}
