import { ReactNode } from 'react'
import ClientLayout from './client-layout'
import '@/styles/globals.css'
export default function RootLayout({children}: {children: ReactNode}) {
	return (
		<html>
			<body>
				<ClientLayout>
					{children}
				</ClientLayout>
				{children}
			</body>
		</html>
	)
}
