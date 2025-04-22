import 'server-only'

const dictionaries = {
  en: () => import('@/messages/en.json').then((module) => module.default),
  it: () => import('@/messages/it.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'en' | 'it') => {
  if (!(locale in dictionaries)) {
    throw new Error(`Labrary language "${locale}" not found`)
  }

  return dictionaries[locale as 'en' | 'it']()
}
