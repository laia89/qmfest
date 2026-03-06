import { getPageMarkdown } from '@/lib/markdown'
import { setRequestLocale } from 'next-intl/server'
import AboutFallbackView from './AboutFallbackView'
import AboutMarkdownView from './AboutMarkdownView'

export default async function AboutPage({ params }) {
  const { locale } = await Promise.resolve(params)
  setRequestLocale(locale)
  const markdown = await getPageMarkdown('about', locale)

  if (markdown?.data && markdown?.content) {
    return <AboutMarkdownView data={markdown.data} content={markdown.content} />
  }

  return <AboutFallbackView />
}
