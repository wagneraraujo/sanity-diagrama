import {defineField, defineType} from 'sanity'

export const cardType = defineType({
  name: 'card',
  title: 'Cards',
  type: 'document',
  fields: [
    defineField({
      name: 'Title',
      description: 'Apenas para organização, não vai aparecer no site',
      type: 'string',
    }),
    defineField({
      name: 'Texto',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'Icone',
      type: 'image',
      description: 'Icone para o card, tamanho sugerido 80px x 80px',
    }),
  ],
})
