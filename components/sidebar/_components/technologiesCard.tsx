'use client'

interface TechnologiesCardProps {
  title?: string
  technologies: string[]
  className?: string
}

export function TechnologiesCard({
  title = 'Tecnologias',
  technologies,
  className = '',
}: TechnologiesCardProps) {
  return (
    <div
      className={`relative z-10 mt-8 p-6  rounded-lg shadow-sm ${className}`}
    >
      <h4 className="text-white text-lg font-semibold mb-5 tracking-wide">
        {title}
      </h4>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full cursor-default select-none"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
