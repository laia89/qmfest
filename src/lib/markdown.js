import { readFile } from 'fs/promises'
import matter from 'gray-matter'
import path from 'path'

const contentDir = path.join(process.cwd(), 'src', 'content', 'pages')

/**
 * Load and parse a Markdown file by page and locale.
 * Returns { data, content } from gray-matter, or null if file doesn't exist.
 * @param {string} page - e.g. 'about'
 * @param {string} locale - e.g. 'en', 'es', 'ca'
 */
export async function getPageMarkdown(page, locale) {
  try {
    const filePath = path.join(contentDir, page, `${locale}.md`)
    const raw = await readFile(filePath, 'utf-8')
    const { data, content } = matter(raw)
    return { data, content }
  } catch {
    return null
  }
}
