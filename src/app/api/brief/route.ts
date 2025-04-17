import { briefSchema } from '@/entities/brief/model/schema'
import { sendToNotion } from '@/shared/lib/notion/sendToNotion'
import {sendMail} from '@/shared/lib/email/sendEmail'
import { isRateLimited } from '@/shared/rate-limit/index'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	const ip = req.headers.get('x-forwarded-for') || 'unknown'
	if (isRateLimited(ip)) {
		return NextResponse.json({ message: 'Слишком много запросов' }, { status: 429 })
	}

	try {
		const body = await req.json()
		const data = briefSchema.parse(body)

		const captchaRes = await fetch(
			`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${data.captcha}`,
			{ method: 'POST' }
		)
		const captchaJson = await captchaRes.json()
		if (!captchaJson.success) {
			return NextResponse.json({ message: 'Ошибка проверки reCAPTCHA' }, { status: 400 })
		}

		await sendToNotion(data)
		await sendMail(data)

		return NextResponse.json({ message: 'Успешно отправлено' })
	} catch (error: unknown) {
		if (error instanceof Error) {
		  return NextResponse.json({ message: error.message }, { status: 400 })
		}
	 
		return NextResponse.json({ message: 'Неизвестная ошибка' }, { status: 400 })
	 }
	 
}
