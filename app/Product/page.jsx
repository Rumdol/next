'use client';
import PrimarySearchAppBar from '@/components/Appbar/AppBar';
import ProductTabs from '@/components/Tabbar/tapProduct';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <PrimarySearchAppBar />
      <div className="mt-8">
        <ProductTabs />
      </div>
    </div>
  );
}
