import React from 'react';
import './Tag.scss'; // Import the corresponding styles

interface TagProps {
  text: string; // The text to display inside the tag
  color: string; // Background color for the tag
}

const Tag: React.FC<TagProps> = ({ text, color }) => {
  return <div className="tag" style={{ backgroundColor: color }}>{text}</div>;
};

export default Tag;