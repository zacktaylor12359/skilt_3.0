import React, { useState } from 'react';
import Arrow from '../assets/icons/arrow';
import addPhoto from '../assets/icons/addPhoto.svg';
import './ChallengeCard.scss'; // Import plain CSS styles
import Tag from './tag';


interface Slide {
    text: string;
    image: string | null;
    fileName?: string; // Add fileName
  }

interface ChallengeCardProps {
  incrementCount: (value: number, nodeId: string) => void;
  nodeId: string;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ incrementCount, nodeId }) => {
  const slides: Slide[] = [
    { text: 'This is the first challenge card', image: null },
    { text: 'This is the second challenge card', image: null },
    { text: 'This is the third challenge card', image: null },
    { text: 'This is the fourth challenge card', image: null },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [slideData, setSlideData] = useState<Slide[]>(slides);

  const handleForwardArrowClick = (): void => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prevIndex) => prevIndex + 1);
    }
  };

  const handleBackwardArrowClick = (): void => {
    if (currentSlide > 0) {
      setCurrentSlide((prevIndex) => prevIndex - 1);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Generate URL for the image
      const fileName = file.name; // Get the uploaded file name
  
      // Update the slide data
      setSlideData((prevSlides) => {
        const updatedSlides = [...prevSlides];
        updatedSlides[currentSlide] = {
          ...updatedSlides[currentSlide],
          image: imageUrl,
          fileName, // Save the file name for display
        };
        return updatedSlides;
      });
  
      // Clear the input value to allow re-uploading the same file
      event.target.value = '';
    }
  };
  

  return (
    <div className="challenge-card">
      <div className="image-section">
            <label
                htmlFor="file-upload"
                className={`image-upload ${slideData[currentSlide].image ? 'uploaded' : ''}`}
                >
            {slideData[currentSlide].image ? (
                <img
                src={slideData[currentSlide].image}
                alt={`Slide ${currentSlide + 1}`}
                className="uploaded-image"
                />
            ) : (
                <div>
                <img src={addPhoto} alt="Add photo placeholder" />
                <p>No Image Uploaded</p>
                <p>Click to Add</p>
                </div>
            )}
            <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden-file-input"
            />

            </label>

            

        </div>

      <div className="text-section">
        <h1>Challenge Card</h1>
        <h2>Build a robot out of 10 shapes</h2>
        <div>
            <Tag text="10 minutes" color="#1d9bf0" /> {/* Blue tag */}
            <Tag text="Completed" color="#28a745" /> {/* Green tag */}
            <Tag text="5 XP" color="#f39c12" /> {/* Orange tag */}
        </div>
        <ol>
          <li><strong>Start Simple:</strong> Use large shapes like rectangles or cylinders for the body and limbs as the base.</li>
          <li><strong>Add Details:</strong> Use smaller shapes like spheres or triangles for features like eyes, joints, or antennas.</li>
          <li><strong>Experiment with Proportions:</strong> Combine big and small shapes to make your robot dynamic and unique.</li>
          <li><strong>Think Symmetry:</strong> Create balance by mirroring shapes for arms, legs, or other parts.</li>
        </ol>
        <p>{slideData[currentSlide].text}</p>
      </div>

      <div className="navigation">
        <button
          onClick={handleBackwardArrowClick}
          disabled={currentSlide === 0}
        >
        <div className="flip-horizontal">
        <Arrow />
        </div>        
        </button>
        <p>Slide {currentSlide + 1}</p>
        {currentSlide === slides.length - 1 ? (
          <button onClick={() => incrementCount(5, nodeId)}>Complete</button>
        ) : (
          <button onClick={handleForwardArrowClick}>
            <Arrow />
          </button>
        )}
      </div>
    </div>
  );
};

export default ChallengeCard;
