import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
	experimental: {
		serverActions: {}
	 }
};

export default withNextIntl(nextConfig);
