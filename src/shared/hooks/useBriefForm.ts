import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { briefSchema, BriefFormData } from '@/entities/brief/model/schema'
import { useState } from 'react'
import { toast } from 'sonner'

type UseBriefFormReturn = {
  form: ReturnType<typeof useForm<BriefFormData>>,
  onSubmit: (data: BriefFormData) => Promise<void>,
  setCaptcha: (token: string | null) => void,
}

export const useBriefForm = (): UseBriefFormReturn => {
  const [captcha, setCaptcha] = useState<string | null>(null)

  const form = useForm<BriefFormData>({
    resolver: zodResolver(briefSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    },
  })

  const onSubmit = async (data: BriefFormData) => {
    if (!captcha) {
      toast.error('reCAPTCHA не пройдена. Подтвердите, что вы не робот.')
      return
    }

    try {
      const res = await fetch('/api/brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, captcha }),
      })

      const result = await res.json()

      toast.success(result.message || 'Форма успешно отправлена')
      form.reset()
      setCaptcha(null)

    } catch (error) {
      console.error('Ошибка отправки формы:', error)
      toast.error('Ошибка отправки. Попробуйте позже')
    }
  }

  return { form, onSubmit, setCaptcha }
}
