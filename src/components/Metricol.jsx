"use client";
import React from 'react'
import Script from 'next/script';
const MetricolScript = () => {
    return (
        <div>
            <Script
                src="https://tracker.metricool.com/resources/be.js"
                strategy="afterInteractive"
                onLoad={() => {
                    if (window.beTracker) {
                        window.beTracker.t({ hash: "7c6da2d910078a900cf8fb9655788f35" });
                    }
                }}
            />
        </div>
    )
}

export default MetricolScript
