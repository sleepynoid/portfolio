"use client";
import { useState, useEffect } from 'react';
import { FaAddressCard } from "react-icons/fa";

export default function About() {
    const [displayText, setDisplayText] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const txt = "Web Developer";
    const speed = 100;

    useEffect(() => {
        let i = 0;
        let typingTimeout;

        function typeWriter() {
            if (i < txt.length) {
                setDisplayText((prev) => prev + txt.charAt(i));
                i++;
                typingTimeout = setTimeout(typeWriter, speed);
            }
        }

        typeWriter();

        return () => clearTimeout(typingTimeout);
    }, []);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    // Function to close modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <main className="container">
                <div className="home-main">
                    {/* Typing effect on the h1 */}
                    <h1>Hi, my name is Sleepy</h1>
                    <h3>{displayText}</h3>
                    <p>
                        Created using PicoCSS. Pico is a lightweight CSS framework
                        that offers elegant styles for your projects.
                    </p>
                </div>

                <div className="grid">
                    <article className="custom-card">
                        <h2><FaAddressCard size={150} /></h2>

                        <button onClick={handleOpenModal}>About Me</button>
                    </article>
                    <article className="custom-card">
                        <h2>Project</h2>
                    </article>
                </div>
            </main>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-button" onClick={handleCloseModal}>
                            &times; {/* Close button */}
                        </button>
                        <h2>About Me</h2>
                        <p>This is where you can add more information about yourself.</p>
                        <p>Feel free to customize this modal with any content you like!</p>
                    </div>
                </div>
            )}

            <footer className="container footer-main">
                <small>&copy; 2024 My Website</small>
            </footer>
        </>
    );
}
