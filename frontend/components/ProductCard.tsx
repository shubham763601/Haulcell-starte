// /frontend/components/ProductCard.tsx
import React from "react";

export default function ProductCard({ p }: { p: any }) {
  return (
    <article className="card overflow-hidden">
      <div className="h-44 w-full bg-slate-50 flex items-center justify-center">
        <img src={p.image || "https://picsum.photos/seed/" + p.id + "/800/600"} alt={p.name} className="object-cover h-full w-full" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900">{p.name}</h3>
        <p className="text-sm text-muted mt-2">{p.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-sm text-muted">Price</div>
            <div className="font-semibold">{p.price}</div>
          </div>
          <button className="btn btn-primary">Buy</button>
        </div>
      </div>
    </article>
  );
}