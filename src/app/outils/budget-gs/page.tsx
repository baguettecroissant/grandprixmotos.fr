'use client';

import { useState, useEffect } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calculator, Euro, Wrench, Fuel, ShieldCheck, Info, RotateCcw } from "lucide-react";

type Model = 'r1200gs_air' | 'r1200gs_lc' | 'r1250gs' | 'r1300gs';
type ServiceType = 'dealer' | 'self';
type InsuranceType = 'third_party' | 'all_risk';

interface Costs {
    fuel: number;
    tires: number;
    service: number;
    insurance: number;
    total: number;
    perKm: number;
}

const MODELS: Record<Model, { name: string; consumption: number }> = {
    'r1200gs_air': { name: "R 1200 GS (2004-2012)", consumption: 5.5 },
    'r1200gs_lc': { name: "R 1200 GS LC (2013-2018)", consumption: 5.2 },
    'r1250gs': { name: "R 1250 GS (2019-2023)", consumption: 5.0 },
    'r1300gs': { name: "R 1300 GS (2024+)", consumption: 4.8 }
};

export default function BudgetGSPage() {
    const [model, setModel] = useState<Model>('r1250gs');
    const [mileage, setMileage] = useState(10000);
    const [serviceType, setServiceType] = useState<ServiceType>('dealer');
    const [insuranceType, setInsuranceType] = useState<InsuranceType>('all_risk');
    const [fuelPrice, setFuelPrice] = useState(1.85);

    const [costs, setCosts] = useState<Costs>({ fuel: 0, tires: 0, service: 0, insurance: 0, total: 0, perKm: 0 });

    useEffect(() => {
        calculateCosts();
    }, [model, mileage, serviceType, insuranceType, fuelPrice]);

    const calculateCosts = () => {
        // FUEL
        const annualFuel = (mileage / 100) * MODELS[model].consumption * fuelPrice;

        // TIRES (Avg set life 10k km, avg price 300€/set mounted)
        const tireSets = mileage / 10000;
        const annualTires = tireSets * 320;

        // SERVICE (Avg interval 10k km)
        // Dealer: Minor (~350€) / Major (~700€) alternating
        // Self: Parts only (~100€ / ~250€)
        const servicesPerYear = mileage / 10000;
        let avgServiceCost = 0;

        if (serviceType === 'dealer') {
            // Blended avg of minor/major
            avgServiceCost = 525 * servicesPerYear;
        } else {
            avgServiceCost = 175 * servicesPerYear;
        }

        // INSURANCE (Estimates)
        let insuranceCost = 0;
        if (insuranceType === 'third_party') insuranceCost = 450;
        if (insuranceType === 'all_risk') insuranceCost = 950;

        // Adjust insurance slightly by model value
        if (model === 'r1300gs') insuranceCost *= 1.3;
        if (model === 'r1250gs') insuranceCost *= 1.1;
        if (model === 'r1200gs_air') insuranceCost *= 0.7;

        const total = annualFuel + annualTires + avgServiceCost + insuranceCost;

        setCosts({
            fuel: Math.round(annualFuel),
            tires: Math.round(annualTires),
            service: Math.round(avgServiceCost),
            insurance: Math.round(insuranceCost),
            total: Math.round(total),
            perKm: parseFloat((total / mileage).toFixed(2))
        });
    };

    return (
        <div className="flex min-h-screen flex-col font-sans bg-background text-foreground selection:bg-primary selection:text-white">
            <Navbar />

            <main className="flex-1 flex flex-col">
                <section className="relative py-20 overflow-hidden border-b border-white/5 bg-card/30">
                    <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-background z-0"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6 skew-r">
                            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                            <span className="text-xs font-bold tracking-widest text-blue-500 uppercase">Zone Expert BMW</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase italic transform -skew-x-6 font-display">
                            Calculateur <span className="text-blue-500">Budget GS</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Combien coûte vraiment une année en GS ? <br />
                            Simulez votre budget annuel (essence, pneus, révisions, assurance) selon votre profil.
                        </p>
                    </div>
                </section>

                <section className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                        {/* INPUTS */}
                        <div className="bg-card border border-white/10 p-6 md:p-8 rounded-2xl h-fit">
                            <h2 className="text-xl font-bold text-white uppercase italic mb-8 flex items-center gap-2">
                                <Wrench className="h-5 w-5 text-blue-500" /> Paramètres
                            </h2>

                            <div className="space-y-8">
                                {/* Model Selection */}
                                <div>
                                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Modèle</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {Object.entries(MODELS).map(([key, val]) => (
                                            <button
                                                key={key}
                                                onClick={() => setModel(key as Model)}
                                                className={`p-3 rounded-lg border text-sm font-bold transition-all ${model === key ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10'}`}
                                            >
                                                {val.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Mileage Slider */}
                                <div>
                                    <label className="flex justify-between text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
                                        <span>Kilométrage Annuel</span>
                                        <span className="text-white">{mileage.toLocaleString()} km</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="2000"
                                        max="50000"
                                        step="1000"
                                        value={mileage}
                                        onChange={(e) => setMileage(parseInt(e.target.value))}
                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                    />
                                    <div className="flex justify-between text-[10px] text-muted-foreground mt-2 font-mono">
                                        <span>2 000</span>
                                        <span>50 000</span>
                                    </div>
                                </div>

                                {/* Service Type */}
                                <div>
                                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Entretien</label>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => setServiceType('dealer')}
                                            className={`flex-1 p-3 rounded-lg border text-sm font-bold transition-all ${serviceType === 'dealer' ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white/5 border-white/10 text-muted-foreground'}`}
                                        >
                                            Concessionnaire (BMW)
                                        </button>
                                        <button
                                            onClick={() => setServiceType('self')}
                                            className={`flex-1 p-3 rounded-lg border text-sm font-bold transition-all ${serviceType === 'self' ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white/5 border-white/10 text-muted-foreground'}`}
                                        >
                                            Soi-même (Self)
                                        </button>
                                    </div>
                                </div>

                                {/* Fuel Price */}
                                <div>
                                    <label className="flex justify-between text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
                                        <span>Prix Essence (€/L)</span>
                                        <span className="text-white">{fuelPrice.toFixed(2)} €</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="1.50"
                                        max="2.50"
                                        step="0.01"
                                        value={fuelPrice}
                                        onChange={(e) => setFuelPrice(parseFloat(e.target.value))}
                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* RESULTS */}
                        <div className="flex flex-col gap-6">

                            {/* Main Counters */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 p-6 rounded-2xl text-center">
                                    <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Coût par km</div>
                                    <div className="text-4xl font-black text-white font-display italic">{costs.perKm.toFixed(2)} €</div>
                                </div>
                                <div className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 p-6 rounded-2xl text-center">
                                    <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Total Annuel</div>
                                    <div className="text-4xl font-black text-white font-display italic">{costs.total.toLocaleString()} €</div>
                                </div>
                            </div>

                            {/* Breakdown Chart */}
                            <div className="bg-card border border-white/10 p-6 md:p-8 rounded-2xl flex-1 flex flex-col justify-center">
                                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">Répartition des Coûts</h3>

                                <div className="space-y-4">
                                    {/* Fuel Bar */}
                                    <div>
                                        <div className="flex justify-between text-sm font-medium mb-1">
                                            <span className="flex items-center gap-2"><Fuel className="h-4 w-4 text-purple-400" /> Carburant</span>
                                            <span className="text-white">{costs.fuel} €</span>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-purple-500" style={{ width: `${(costs.fuel / costs.total) * 100}%` }}></div>
                                        </div>
                                    </div>

                                    {/* Service Bar */}
                                    <div>
                                        <div className="flex justify-between text-sm font-medium mb-1">
                                            <span className="flex items-center gap-2"><Wrench className="h-4 w-4 text-orange-400" /> Entretien ({serviceType === 'dealer' ? 'Pro' : 'Self'})</span>
                                            <span className="text-white">{costs.service} €</span>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-orange-500" style={{ width: `${(costs.service / costs.total) * 100}%` }}></div>
                                        </div>
                                    </div>

                                    {/* Tires Bar */}
                                    <div>
                                        <div className="flex justify-between text-sm font-medium mb-1">
                                            <span className="flex items-center gap-2"><RotateCcw className="h-4 w-4 text-green-400" /> Pneus (~{(mileage / 10000).toFixed(1)} trains)</span>
                                            <span className="text-white">{costs.tires} €</span>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500" style={{ width: `${(costs.tires / costs.total) * 100}%` }}></div>
                                        </div>
                                    </div>

                                    {/* Insurance Bar */}
                                    <div>
                                        <div className="flex justify-between text-sm font-medium mb-1">
                                            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-blue-400" /> Assurance (Est.)</span>
                                            <span className="text-white">{costs.insurance} €</span>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-blue-500" style={{ width: `${(costs.insurance / costs.total) * 100}%` }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg flex gap-3 text-sm text-blue-200">
                                    <Info className="h-5 w-5 flex-shrink-0 text-blue-500" />
                                    <p>
                                        Estimation basée sur les moyennes utilisateurs 2024. Le coût réel dépend de votre style de conduite, de votre bonus assurance et de la région.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
