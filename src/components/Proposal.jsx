import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const Proposal = ({ onYes }) => {
    const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
    const [isMoved, setIsMoved] = useState(false);

    // Move the "No" button to a random position within the viewport
    const moveNoButton = () => {
        const btnWidth = 120;
        const btnHeight = 50;
        const padding = 20;

        const randomX = padding + Math.random() * (window.innerWidth - btnWidth - padding * 2);
        const randomY = padding + Math.random() * (window.innerHeight - btnHeight - padding * 2);

        setNoPosition({ x: randomX, y: randomY });
        setIsMoved(true);
    };

    // The No button rendered via portal so it escapes glass-card's overflow:hidden & backdrop-filter
    const noButton = (
        <motion.button
            className="btn btn-no"
            style={{
                position: isMoved ? "fixed" : undefined,
                left: isMoved ? `${noPosition.x}px` : undefined,
                top: isMoved ? `${noPosition.y}px` : undefined,
                zIndex: 9999,
            }}
            animate={
                isMoved
                    ? { left: noPosition.x, top: noPosition.y }
                    : {}
            }
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            onClick={(e) => {
                e.preventDefault();
                moveNoButton();
            }}
        >
            No 💔
        </motion.button>
    );

    return (
        <>
            <div className="glass-card">
                <h1 className="title">For My Love 💖</h1>

                <div className="apology-section">
                    <p>
                        I know things haven't been perfect lately, and I am truly sorry for
                        my mistakes. You mean the world to me, and I can't imagine my life
                        without you. My love for you grows stronger every single day.
                    </p>
                </div>

                <div className="proposal-section">
                    <div className="heart-icon">💖</div>
                    <h2>Will you be my Valentine?</h2>

                    <div className="button-group">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-yes"
                            onClick={onYes}
                        >
                            Yes! 💖
                        </motion.button>

                        {/* Show the No button inline only when it hasn't moved yet */}
                        {!isMoved && noButton}
                    </div>
                </div>
            </div>

            {/* Once moved, render via portal so it's outside the glass-card's clipping context */}
            {isMoved && createPortal(noButton, document.body)}
        </>
    );
};

export default Proposal;
