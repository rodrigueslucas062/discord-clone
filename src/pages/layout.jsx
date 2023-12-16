import ClerkProvider from '@clerk/nextjs'
require('./globals.scss');

function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>{children}</body>
            </html>
        </ClerkProvider>
    );
}

module.exports = RootLayout;
