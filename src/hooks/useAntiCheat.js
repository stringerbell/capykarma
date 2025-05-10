import { useState, useEffect } from 'react';

export function useAntiCheat(karma) {
    const [tamperDetected, setTamperDetected] = useState(false);

    useEffect(() => {
        // Console warning message
        console.log(
            '%c⚠️ KARMIC SECURITY SYSTEM ACTIVE ⚠️',
            'color: #ff0000; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);'
        );
        console.log(
            '%cThinking of cheating? The universe is watching...',
            'color: #ffaa00; font-size: 16px; font-weight: bold;'
        );
        console.log(
            '%cHere\'s exactly what NOT to do:',
            'color: #ffffff; font-size: 14px; font-style: italic;'
        );
        console.log(
            '%c❌ localStorage.setItem("karmic_journey_karma", "9999")',
            'color: #ff6666; font-size: 12px; font-family: monospace; background: #1a1a1a; padding: 4px;'
        );
        console.log(
            '%c❌ localStorage.setItem("karmic_journey_karma_backup", "9999")',
            'color: #ff6666; font-size: 12px; font-family: monospace; background: #1a1a1a; padding: 4px;'
        );
        console.log(
            '%c❌ sessionStorage.setItem("karmic_journey_karma", "9999")',
            'color: #ff6666; font-size: 12px; font-family: monospace; background: #1a1a1a; padding: 4px;'
        );
        console.log(
            '%c❌ Editing values in the Application tab',
            'color: #ff6666; font-size: 12px; font-family: monospace; background: #1a1a1a; padding: 4px;'
        );
        console.log(
            '%c\n⚡ WARNING: Attempting to manipulate karma will result in SEVERE penalties! ⚡',
            'color: #ffff00; font-size: 16px; font-weight: bold; background: #660000; padding: 8px; border: 2px solid #ffff00;'
        );
        console.log(
            '%c\nThe universe has a perfect memory. Every tampering attempt makes your karma worse.\nTrue redemption comes only through genuine choices.',
            'color: #aaaaaa; font-size: 12px; font-style: italic;'
        );
        console.log(
            '%c\n🧘 Play honestly. Build real karma. 🧘',
            'color: #00ff00; font-size: 14px; font-weight: bold;'
        );
    }, []);

    return { tamperDetected, setTamperDetected };
}