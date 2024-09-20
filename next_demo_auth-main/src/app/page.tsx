"use client";
import StoreProvider from '@/store/StoreProvider';
import Content from './content';

export default function page() {

  return <StoreProvider>
     <Content/>
  </StoreProvider>
}
