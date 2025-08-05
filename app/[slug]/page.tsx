'use client'

import { Button } from '@/components/ui/button'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { use } from 'react'
import Sidebar from '@/components/sidebar'
import Footer from '@/components/footer'

const articles = {
  'desenvolvimento-mobile': {
    title: 'Desenvolvimento Mobile',
    icon: '📱',
    color: 'blue',
    content: `
# Desenvolvimento Mobile Moderno

## Introdução

O desenvolvimento mobile evoluiu drasticamente nos últimos anos. Com o surgimento de frameworks como React Native, Flutter e tecnologias híbridas, criar aplicativos móveis nunca foi tão acessível.

## Principais Tecnologias

### React Native
- **Vantagens**: Código compartilhado entre iOS e Android
- **Performance**: Próxima ao nativo
- **Comunidade**: Ampla e ativa

### Flutter
- **Linguagem**: Dart
- **Performance**: Excelente
- **UI**: Widgets customizáveis

## Melhores Práticas

1. **Otimização de Performance**
   - Lazy loading de componentes
   - Gerenciamento eficiente de estado
   - Otimização de imagens

2. **UX/UI Responsivo**
   - Design adaptativo
   - Gestos intuitivos
   - Feedback visual

3. **Testes**
   - Testes unitários
   - Testes de integração
   - Testes E2E

## Conclusão

O futuro do desenvolvimento mobile está na convergência entre performance nativa e produtividade de desenvolvimento cross-platform.
    `,
    github: 'https://github.com/exemplo/mobile-app',
    demo: 'https://exemplo-mobile.vercel.app',
  },
  'design-ui-ux': {
    title: 'Design UI/UX',
    icon: '🎨',
    color: 'green',
    content: `
# Design UI/UX: Criando Experiências Memoráveis

## Fundamentos do Design

O design de interface não é apenas sobre fazer algo bonito - é sobre criar experiências que funcionem perfeitamente para o usuário.

## Princípios Fundamentais

### 1. Usabilidade
- **Clareza**: Interface intuitiva
- **Consistência**: Padrões visuais
- **Feedback**: Resposta às ações do usuário

### 2. Hierarquia Visual
- **Tipografia**: Tamanhos e pesos adequados
- **Cores**: Paleta harmoniosa
- **Espaçamento**: Respiração entre elementos

### 3. Acessibilidade
- **Contraste**: Legibilidade para todos
- **Navegação**: Acessível via teclado
- **Semântica**: HTML estruturado

## Processo de Design

1. **Research**: Entender o usuário
2. **Wireframes**: Estrutura básica
3. **Protótipos**: Interações
4. **Testes**: Validação com usuários
5. **Iteração**: Melhorias contínuas

## Ferramentas Essenciais

- **Figma**: Design colaborativo
- **Adobe XD**: Prototipagem
- **Sketch**: Design de interface
- **InVision**: Testes de usabilidade

## Tendências Atuais

- **Neumorfismo**: Elementos suaves
- **Dark Mode**: Interfaces escuras
- **Micro-interações**: Detalhes que encantam
- **Design System**: Consistência em escala
    `,
    github: 'https://github.com/exemplo/design-system',
    demo: 'https://exemplo-design.vercel.app',
  },
  'performance-web': {
    title: 'Performance Web',
    icon: '⚡',
    color: 'purple',
    content: `
# Performance Web: Velocidade que Converte

## Por que Performance Importa?

Cada segundo de carregamento pode significar a diferença entre um usuário engajado e um usuário que abandona seu site.

## Métricas Essenciais

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Outras Métricas
- **TTFB**: Time to First Byte
- **FCP**: First Contentful Paint
- **TTI**: Time to Interactive

## Técnicas de Otimização

### 1. Otimização de Imagens
\`\`\`javascript
// Lazy loading nativo
<img src="image.jpg" loading="lazy" alt="Descrição" />

// WebP com fallback
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Descrição">
</picture>
\`\`\`

### 2. Code Splitting
\`\`\`javascript
// Dynamic imports
const LazyComponent = lazy(() => import('./LazyComponent'));

// Route-based splitting
const Home = lazy(() => import('./pages/Home'));
\`\`\`

### 3. Caching Estratégico
- **Browser Cache**: Headers apropriados
- **CDN**: Distribuição global
- **Service Workers**: Cache offline

## Ferramentas de Análise

- **Lighthouse**: Auditoria completa
- **WebPageTest**: Análise detalhada
- **GTmetrix**: Monitoramento contínuo
- **Chrome DevTools**: Debug em tempo real

## Checklist de Performance

- [ ] Imagens otimizadas
- [ ] CSS/JS minificados
- [ ] Gzip/Brotli habilitado
- [ ] HTTP/2 configurado
- [ ] Lazy loading implementado
- [ ] Service Worker ativo
- [ ] Métricas monitoradas
    `,
    github: 'https://github.com/exemplo/performance-web',
    demo: 'https://exemplo-performance.vercel.app',
  },
}

export default function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const router = useRouter()
  const article = articles[slug as keyof typeof articles]

  if (!article) {
    return <div>Artigo não encontrado</div>
  }

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <div className="flex-1 lg:flex-[7] bg-white h-screen flex flex-col">
        <div className="flex-shrink-0 p-6 lg:px-12 lg:pt-12 pb-0">
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="ghost"
              onClick={() => router.push('/')}
              className="flex items-center gap-2 hover:bg-gray-100"
            >
              <ArrowLeft size={20} />
              Voltar
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 lg:px-12 pb-12">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div className="flex items-center gap-4 mb-8">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {article.title}
                  </h1>
                  <p className="text-gray-600">Guia completo e atualizado</p>
                </div>
              </div>

              <div
                className="text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: article.content
                    .replace(
                      /^# (.*$)/gm,
                      '<h1 class="text-3xl font-bold mt-8 mb-4 text-gray-900">$1</h1>',
                    )
                    .replace(
                      /^## (.*$)/gm,
                      '<h2 class="text-2xl font-semibold mt-6 mb-3 text-gray-800">$2</h2>',
                    )
                    .replace(
                      /^### (.*$)/gm,
                      '<h3 class="text-xl font-medium mt-4 mb-2 text-gray-700">$3</h3>',
                    )
                    .replace(
                      /^\*\*(.*?)\*\*/gm,
                      '<strong class="font-semibold text-gray-900">$1</strong>',
                    )
                    .replace(/^- (.*$)/gm, '<li class="ml-4 mb-1">$1</li>')
                    .replace(
                      /^(\d+)\. (.*$)/gm,
                      '<li class="ml-4 mb-1">$2</li>',
                    )
                    .replace(
                      /```javascript\n([\s\S]*?)\n```/g,
                      '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code class="text-sm">$1</code></pre>',
                    )
                    .replace(
                      /`([^`]+)`/g,
                      '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>',
                    )
                    .replace(/\n\n/g, '</p><p class="mb-4">')
                    .replace(
                      /^(?!<[h|l|p|c])(.*$)/gm,
                      '<p class="mb-4">$1</p>',
                    ),
                }}
              />
            </article>
          </div>
        </div>
        <Footer />
      </div>

      <div className="flex-1 lg:flex-[3] bg-black flex flex-col justify-center items-center p-6 lg:p-8 relative">
        <Sidebar github={article.github} demo={article.demo} />
      </div>
    </div>
  )
}
