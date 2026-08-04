'use client';

import Script from 'next/script';
const MetricolScript = () => {
    return (
        <Script
            src="https://tracker.metricool.com/resources/be.js"
            strategy="lazyOnload"
            onLoad={() => {
                if (window.beTracker) {
                    window.beTracker.t({ hash: "7c6da2d910078a900cf8fb9655788f35" });
                }
            }}
        />
    )
}

export default MetricolScript
