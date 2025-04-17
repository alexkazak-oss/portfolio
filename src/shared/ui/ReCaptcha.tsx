'use client'

import ReCAPTCHA from 'react-google-recaptcha'



export const ReCAPTCHAWrapper = ({ onChange }: { onChange: (token: string | null) => void }) => {
	console.log('sitekey:', process.env.NEXT_PUBLIC_RECAPTCHA_KEY) // ← добавь сюда
 
	return (
	  <div className="flex justify-center">
		 <ReCAPTCHA
			sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY!}
			onChange={onChange}
		 />
	  </div>
	)
 }
 
