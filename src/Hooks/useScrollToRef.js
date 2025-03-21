import { useCallback } from 'react';

const useScrollToRef = (setMobileMenuOpen) => {
  const scrollToRef = useCallback((ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after clicking
    }
  }, [setMobileMenuOpen]);

  return scrollToRef;
};

export default useScrollToRef;