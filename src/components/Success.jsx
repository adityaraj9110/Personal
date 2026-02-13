import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

const Success = () => {
    useEffect(() => {
        // Fire confetti immediately on mount
        const duration = 15 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ["#ff4d6d", "#ff8fa3", "#fff0f3"]
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ["#ff4d6d", "#ff8fa3", "#fff0f3"]
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }, []);

    return (
        <div className="glass-card success-card">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1>YAY!!! 🎉💖</h1>
                <div className="heart-icon" style={{ fontSize: "6rem" }}>🥰</div>
                <p>
                    I knew you'd say YES! <br />
                    I promise to make every day special for you. <br />
                    Happy Valentine's! 🌹
                </p>
                <p>I love you so much! Meri Bhutki 🥰</p>
            </motion.div>
        </div>
    );
};

export default Success;
