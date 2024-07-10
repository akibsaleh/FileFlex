import StoreProvider from '@/components/StoreProvider';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}
