'use client'

import { ReactNode } from 'react'

interface ContactLinkProps {
  href: string
  label: string
  icon: ReactNode
}

export function ContactLink({ href, label, icon }: ContactLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors text-sm"
    >
      {icon}
      <span>{label}</span>
    </a>
  )
}
