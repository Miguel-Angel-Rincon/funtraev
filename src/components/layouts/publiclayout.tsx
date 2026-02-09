import type { ReactNode } from 'react';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';

type Props = {
  children: ReactNode;
};

const PublicLayout = ({ children }: Props) => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh' 
    }}>
      <Navbar />

      <main style={{ flex: '1 0 auto' }}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default PublicLayout;