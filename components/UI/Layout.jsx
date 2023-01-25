import ThemeToggle from '@/UI/ThemeToggle';
import Header from '@/components/Header/Header';

const Layout = ({ children }) => (
  <div className="relative h-full min-h-screen w-full bg-[#f3fdf2] transition-colors duration-500 dark:bg-black-800 dark:text-white">
    <Header />
    <main className="relative">
      <ThemeToggle className="hidden lg:block" />
      {children}
    </main>
  </div>
);

export default Layout;
