import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
	experimental: {
		serverActions: {},
		typedRoutes: true
	}
}

export default withNextIntl(nextConfig)
