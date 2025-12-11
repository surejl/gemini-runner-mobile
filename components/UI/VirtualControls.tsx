
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { ArrowLeft, ArrowRight, ArrowUp, Shield } from 'lucide-react';
import { useStore } from '../../store';

export const VirtualControls: React.FC = () => {
    const { hasImmortality, isImmortalityActive } = useStore();

    const trigger = (event: string) => {
        window.dispatchEvent(new Event(event));
    };

    return (
        <div className="absolute inset-x-0 bottom-8 px-6 flex justify-between items-end pointer-events-none z-[60]">
            {/* Movement Controls (Left/Right) */}
            <div className="flex gap-6 pointer-events-auto">
                <button
                    className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center active:bg-cyan-500/40 active:border-cyan-400 active:scale-95 transition-all touch-none shadow-[0_0_15px_rgba(0,255,255,0.2)]"
                    onPointerDown={() => trigger('player-move-left')}
                    aria-label="Move Left"
                >
                    <ArrowLeft className="w-8 h-8 text-white" />
                </button>
                <button
                    className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center active:bg-cyan-500/40 active:border-cyan-400 active:scale-95 transition-all touch-none shadow-[0_0_15px_rgba(0,255,255,0.2)]"
                    onPointerDown={() => trigger('player-move-right')}
                    aria-label="Move Right"
                >
                    <ArrowRight className="w-8 h-8 text-white" />
                </button>
            </div>

            {/* Action Controls (Jump / Ability) */}
            <div className="flex gap-6 items-end pointer-events-auto">
                {hasImmortality && (
                     <button
                        className={`w-12 h-12 mb-2 rounded-full flex items-center justify-center border transition-all touch-none active:scale-95 ${isImmortalityActive ? 'bg-yellow-500/50 border-yellow-400 animate-pulse shadow-[0_0_20px_rgba(255,215,0,0.6)]' : 'bg-white/10 border-white/30 active:bg-yellow-500/40 shadow-[0_0_10px_rgba(255,215,0,0.2)]'}`}
                        onPointerDown={() => trigger('player-ability')}
                        aria-label="Activate Immortality"
                    >
                        <Shield className={`w-6 h-6 ${isImmortalityActive ? 'text-yellow-100' : 'text-yellow-400'}`} />
                    </button>
                )}
                
                <button
                    className="w-20 h-20 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full flex items-center justify-center active:bg-purple-500/40 active:border-purple-400 active:scale-95 transition-all touch-none shadow-[0_0_20px_rgba(147,51,234,0.4)]"
                    onPointerDown={() => trigger('player-jump')}
                    aria-label="Jump"
                >
                    <ArrowUp className="w-10 h-10 text-white" />
                </button>
            </div>
        </div>
    );
};
