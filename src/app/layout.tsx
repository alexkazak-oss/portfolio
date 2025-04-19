import { ReactNode } from 'react'
import '@/styles/globals.css'
import Header from '@/widgets/Header/Header'
export default function RootLayout({children}: {children: ReactNode}) {
	return (
		<html>
			<body>
				<Header/>
					{children}
			</body>
		</html>
	)
}
