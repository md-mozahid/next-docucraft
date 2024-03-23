import fs from 'fs' // file system from node js default command
import matter from 'gray-matter'
import path from 'path' //path  from node js default
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'docs') //cwd = current working directory

export function getDocuments() {
  const fileNames = fs.readdirSync(postsDirectory) // fileName is an array
  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace('.md', '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data,
    }
  })

  return allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1
    }
    if (a.order > b.order) {
      return 1
    }
    return 0
  })
}

// converted data html from .md file
export async function getDocumentContent(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
