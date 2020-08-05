export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f29f79a4552d3f2908ab32e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pusxn7gy',
                  apiId: 'b0a62394-26f5-4abb-950a-25273b5020eb'
                },
                {
                  buildHookId: '5f29f79a2ef8f2df6f5866da',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wc6ujo8v',
                  apiId: '386312ba-8449-4983-b89a-f8ab0aa669ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kapehe-ok/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wc6ujo8v.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
