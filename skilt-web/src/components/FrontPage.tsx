import React, { useState } from 'react';
// Import your images - adjust the paths according to your project structure
import chef from '../assets/images/chef.png';
import earth from '../assets/images/earth.png';
import paint from '../assets/images/paint.png';
import user from '../assets/images/user.png';
import dumbbell from '../assets/images/dumbbell.png';

const FrontPage: React.FC = () => {
    const [extendingTopic, setExtendingTopic] = useState<number | null>(null);

    const handleTopicSelect = (index: number) => {
        setExtendingTopic(index);
        
        setTimeout(() => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }, 500);
    };

    return (
        <div>
            <div className="front-page-title">
                <h1>what will you explore today</h1>
            </div>
            <div className="front-page-option-container">
                <div 
                    className={`front-page-option-wrapper ${extendingTopic === 0 ? 'extending' : ''}`}
                    onClick={() => handleTopicSelect(0)}
                >
                    <img src={chef} alt="Cooking" />
                </div>
                <div 
                    className={`front-page-option-wrapper ${extendingTopic === 1 ? 'extending' : ''}`}
                    onClick={() => handleTopicSelect(1)}
                >
                    <img src={dumbbell} alt="Fitness" />
                </div>
                <div 
                    className={`front-page-option-wrapper ${extendingTopic === 2 ? 'extending' : ''}`}
                    onClick={() => handleTopicSelect(2)}
                >
                    <img src={paint} alt="Art" />
                </div>
                <div className="center-earth">
                    <img src={earth} alt="Earth icon" />
                </div>
            </div>
        </div>
    );
};

export default FrontPage;

