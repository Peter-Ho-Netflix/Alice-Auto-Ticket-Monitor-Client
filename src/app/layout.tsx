import './globals.css';

export const metadata = {
  title: '愛麗絲自動搶票系統',
  description: '愛麗絲自動票務監控系統',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
