import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue Boot Template'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
