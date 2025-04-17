'use server'


export async function submitBriefAction(data: FormData, token: string) {
	const formData = Object.fromEntries(data.entries())

if(!token){return {success: false, mesage: 'No token found'}}

	return {
		success: true,
		message: 'Form submitted successfully',
		data: formData,
		token: token,
	}
}

