'use client'

import {useTranslations} from 'next-intl'
import {MainSection} from '@/widgets/Sections/main-sections/main-section'
import { IntroSection } from '@/widgets/Sections/main-sections/intro-section'
import Stats from '@/widgets/Sections/main-sections/ui/stats'
import Slider from '@/widgets/Sections/main-sections/ui/slider'

export default function Home() {
	const t = useTranslations('Home')

	const aboutStats = [
	  { value: '00', label: t('about.stats.stat1') },
	  { value: '15', label: t('about.stats.stat2') },
	  { value: '23', label: t('about.stats.stat3') },
	  { value: '72', label: t('about.stats.stat4') },
	]
	 


	return (
		<div className='flex flex-col w-full text-center md:text-left min-h-screen'>
			<IntroSection
				
				title={t.rich('title', {
					strong: (chunks) => (
						<span className='text-4xl md:text-5xl font-extrabold text-white'>
							{chunks}
						</span>
					),
					text: (chunks) => (
						<span className='text-4xl md:text-5xl font-normal text-gray-300 mt-2'>
							{chunks}
						</span>
					),
				})}
				subtitle={t('subtitle')}
				highlights={[t('highlight1'), t('highlight2')]}
				buttonLabel={t('button')}
				backgroundImage='/images/backgrounds/bg1.jpg'
			/>

			<MainSection
				title={t('about.title')}
				subtitle={t('about.subtitle')}
				description={t('about.description')}
				buttonLabel={t('about.buttonLabel')}
				content={ Stats({ stats: aboutStats }) }
			/>
				<MainSection
				title={t('projects.title')}
				subtitle={t('projects.subtitle')}
				description={t('projects.description')}
				
				buttonLabel={t('projects.buttonLabel')}
				content={ Slider() }
			/>
		</div>
	)
}
