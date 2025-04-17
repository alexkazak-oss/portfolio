import { Client } from '@notionhq/client'
import { BriefFormData } from '@/entities/brief/model/schema'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

export async function sendToNotion(data: BriefFormData) {
  await notion.pages.create({
    parent: { database_id: process.env.NOTION_DATABASE_ID! },
    properties: {
      Name: { title: [{ text: { content: data.name } }] },
      Email: { email: data.email },
      Phone: { phone_number: data.phone ?? '' },
      Company: { rich_text: [{ text: { content: data.company ?? '' } }] },
      Message: { rich_text: [{ text: { content: data.message } }] },
    },
  })
}
