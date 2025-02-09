import './globals.scss';
import Navbar from './Navbar';
import Globalfooter from './Globalfooter';

export const metadata = {
  title: 'Live 150',
  description:
    'Live150 helps you achieve your goals through personalized interventions in Nutrition, Activity, Mindfulness, and Sleep.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='flex w-full flex-col text-secondary'>
        <Navbar />
        <main className='px-2'>{children}</main>
        <footer>
          <Globalfooter />
        </footer>
      </body>
    </html>
  );
}
