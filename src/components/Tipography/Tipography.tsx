import React from 'react';

import { Heading, Body, VariantTypes, TextSizeTypes } from './styles';

interface TipographyTypes {
  children: any;
  textSize?: TextSizeTypes;
  variant?: VariantTypes;
}

const Tipography: React.FC<TipographyTypes> = ({
  children,
  textSize = 'regular',
  variant = 'body'
}) => {
  const renderHeading = () => <Heading textSize={textSize}>{children}</Heading>;

  const renderBody = () => <Body textSize={textSize}>{children}</Body>;

  return variant === 'heading' ? renderHeading() : renderBody();
};

export default Tipography;
