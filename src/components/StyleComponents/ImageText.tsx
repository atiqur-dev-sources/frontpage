import React from 'react';

type ImageTextProps = {
  imageUrl: string;
  imageAlt: string;
  text: string;
  textColor?: string;
};

const ImageText: React.FC<ImageTextProps> = ({
  imageUrl,
  imageAlt,
  text,
  textColor = 'black',
}) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const imageStyle = {
    maxWidth: '20%',
    height: 'auto',
    marginRight: '1rem',
  };

  const textStyle = {
    flex: 1,
    textAlign: 'center',
    color: textColor,
  };

  return (
    <div style={containerStyle}>
      <img src={imageUrl} alt={imageAlt} style={imageStyle} />
      <div style={textStyle}>{text}</div>
    </div>
  );
};

export default ImageText;
