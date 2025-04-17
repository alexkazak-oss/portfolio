import nodemailer from 'nodemailer'
import {BriefFormData} from '@/entities/brief/model/schema'

export async function sendMail(data: BriefFormData) {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL_FROM,
			pass: process.env.EMAIL_PASS,
		},
	})

	await transporter.sendMail({
		from: process.env.EMAIL_FROM,
		to: process.env.EMAIL_TO,
		subject: 'Новый бриф с сайта',
		text: `
Имя: ${data.name}
Email: ${data.email}
Телефон: ${data.phone ?? '—'}
Должность: ${data.company ?? '—'}
Предпочетаемый способ связи: ${data.message}
    `,
	})
}
