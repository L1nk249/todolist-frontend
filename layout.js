export const metadata = {
    title: "todolist"
};

export default function RootLayout({ children }) {
    return (
        <html lang='fr'>
            <body>{children}</body>
        </html>
    );
}