import Arrow from '../assets/svg/Arrow';
import { useState } from "react";
import addPhoto from "../assets/addPhoto.svg";


export default function ChallengeCard( { incrementCount, nodeId}) {

    const slides = [
       { text: "this is the first challenge. Look at this cute kitty and try to recreate it!", image: null},
       { text: "this is the second challenge card", image: null},
       { text: "this is the third challenge card", image: null},
       { text: "this is the fourth challenge card", image: null},
    ]

    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideData, setSlideData] = useState(slides);

    const handleForwardArrowClick = () => {
        if (currentSlide < 3) {
          setCurrentSlide ((prevIndex) => (prevIndex + 1) % slides.length);
        }
    }

    const handleBackwardArrowClick = () => {
      if (currentSlide > 0) {
        setCurrentSlide((prevIndex) => prevIndex - 1);
      }
    };

    

    const handleImageUpload = (event) => { //event is the change event triggered when the user selects a file.
        const file = event.target.files[0]; // event.target refers to the <input> element where a user selected a file. 
        // event.target.files containst eh uploaded file(s) as a FileList object
        console.log(event.type);
        if (file) {
            const imageUrl = URL.createObjectURL(file);

            setSlideData((prevSlides) => {
                const updatedSlides = [...prevSlides]; // the ... is called the spread operator. used to create a shallow copy of an array or object by "spreading" its elements or properties
                //prevSlides is the current state of the slides array
                //...prevSlides: This spreads the elements of the prevSlides array into a new array
                updatedSlides[currentSlide].image = imageUrl;
                return updatedSlides;
            })
        }
    };


    return (
      <div className="w-[800px] h-[500px] bg-gradient-to-r from-red-500 to-pink-500 text-white p-8 rounded-lg relative flex ">

        <div className="flex pr-8 items-center">
            {/* Image Section */}
            <label 
              htmlFor="file-upload"
              className={`cursor-pointer w-[300px] h-[300px] flex items-center justify-center rounded-lg  ${
                    !slideData[currentSlide].image ? 'bg-gray-200' : ''}`}       
            >
              {slideData[currentSlide].image ? (
                <img
                  src={slideData[currentSlide].image}
                  alt={`Slide ${currentSlide + 1}`}
                  className="w-full h-full object-contain rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center justify-center">
                    <img
                        src={addPhoto}
                        alt="add photo placeholder"
                        className="w-[100px] h-[100px] object-contain-mb-2"
                    />
                    <p className="text-gray-500" >No Image Uploaded.</p>
                    <p className="text-gray-500" >Click to Add.</p>

                
                </div>
                
              )}
            </label>

            {/* Hidden File Input */}
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

          </div>



    
        <div className="flex-col items-center">
          <h1 className="mb-5 text-2xl italic">Challenge Card</h1>

          <h2 className="mb-5 text-2xl font-bold text-black"> Build a robot out of 10 shapes</h2>

          <ol className="list-decimal pl-5"> 
            <li>Start Simple: Use large shapes like rectangles or cylinders for the body and limbs as the base.</li>
            <li>Add Details: Use smaller shapes like spheres or triangles for features like eyes, joints, or antennas</li>
            <li>Experiment with Proportions: Combine big and small shapes to make your robot dynamic and unique</li>
            <li>Think Symmetry: Create balance by mirroring shapes for arms, legs, or other parts.</li>

          </ol>
          


          {/* Input and Text Section */}
            
          <p className="text-center mt-4">{slides[currentSlide].text}</p>
        
        </div>



          {/* Arrow Navigation */}
          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between px-4 cursor-pointer">

            <div onClick={handleBackwardArrowClick} className="transform scale-x-[-1]">
                <Arrow />
            </div>

            <p> slide {currentSlide + 1}</p>

            

            <div>
              {currentSlide === slides.length - 1 ? (
                <button
                  onClick={() => incrementCount(5, nodeId)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Complete
                </button>
                ) : (
                <div onClick={handleForwardArrowClick}>
                  <Arrow />
                </div>
              )}
            </div>
          </div>




      </div>
        

    
    
    );

  }