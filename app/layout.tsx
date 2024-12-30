import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
<<<<<<< HEAD
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
=======
 
>>>>>>> 0e06572e51167caf3662a61b2e874cf186dd3e50
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 0e06572e51167caf3662a61b2e874cf186dd3e50
