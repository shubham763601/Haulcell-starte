// /frontend/pages/index.tsx
import React from "react";
import useSWR from "swr";
import ProductCard from "../components/ProductCard";

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function Home() {
  const apiBase = process.env.NEXT_PUBLIC_API_URL || "https://your-backend.example.com";
  const { data, error } = useSWR(apiBase + "/api/products/", fetcher);

  return (
    <main className="min-h-screen">
      <header className="bg-white p-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-primary-700 font-extrabold text-xl">Haulcell</div>
          <div className="text-sm text-muted">B2B marketplace (demo)</div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-2">Popular listings</h1>
        {error && <div className="text-red-600">Failed to load products</div>}
        {!data && <div className="text-muted">Loading...</div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {data && data.products.map((p: any) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
    </main>
  );
}