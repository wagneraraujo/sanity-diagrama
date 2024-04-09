import {defineField, defineType} from 'sanity'

export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'Titulo',
      description: 'Titulo do projeto',
      type: 'string',
    }),
    defineField({
      name: 'Descricao',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      description: 'Url personalizada ex: diagramacriativo.com/nome-do-projeto',
      options: {
        source: 'Titulo',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      name: 'embed',
      type: 'string',
      description: 'Se for diagramacao, inserir aqui o código embed',
    }),
    defineField({
      name: 'categorias',
      type: 'string',
      title: 'Categorias',
      initialValue: 'diagramacao',
      options: {
        list: [
          {title: 'Diagramação', value: 'diagramacao'},
          {title: 'Identidade Visual', value: 'identidade'},
          {title: 'Lançamentos', value: 'lançamento'},
        ],
      },
    }),
    defineField({
      name: 'Conteudo',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'Capa',
      type: 'image',
      description: 'Capa do projeto, tamanho recomendado 600x600',
    }),
    defineField({
      name: 'galeria',
      type: 'object',
      title: 'Galeria',
      fields: [
        {
          name: 'image',
          type: 'array',
          title: 'Imagens',
          of: [
            {
              name: 'image',
              type: 'image',
              title: 'Imagem',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Texto alternativo',
                },
              ],
            },
          ],
          options: {
            layout: 'grid',
          },
        },
      ],
    }),
  ],
})
