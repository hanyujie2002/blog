import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  site: {
    title: '韩宇杰',
    subtitle: '流年印记',
    author: '韩宇杰',
    description: '记录个人的成长与探索',
    website: 'https://www.hanyujie.xyz/',
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/hanyujie2002',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
    ],
  },

  seo: { },
}
