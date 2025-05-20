import React from "react";

const prices = [
    { name: "Básico", price: "$10", features: ["1 usuario", "Soporte básico"] },
    { name: "Estándar", price: "$20", features: ["5 usuarios", "Soporte estándar"] },
    { name: "Premium", price: "$30", features: ["Usuarios ilimitados", "Soporte premium"] },
];

export default function PricesPage() {
    return (
        <main style={{ padding: 24 }}>
            <h1>Precios</h1>
            <div style={{ display: "flex", gap: 24 }}>
                {prices.map((plan) => (
                    <div key={plan.name} style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16, minWidth: 200 }}>
                        <h2>{plan.name}</h2>
                        <p style={{ fontSize: 24, fontWeight: "bold" }}>{plan.price}</p>
                        <ul>
                            {plan.features.map((f) => (
                                <li key={f}>{f}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </main>
    );
}