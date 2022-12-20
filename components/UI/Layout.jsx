import Header from '@/UI/Header';

const Layout = ({ children }) => (
  <div className="h-full w-full relative">
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
