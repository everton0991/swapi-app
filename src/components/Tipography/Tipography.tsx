import React from 'react';

import { Heading, Body, VariantTypes } from './styles';

interface TipographyTypes {
  children: any;
  variant?: VariantTypes;
}

const Tipography: React.FC<TipographyTypes> = ({
  children,
  variant = 'body'
}) => {
  const renderHeading = () => <Heading>{children}</Heading>;

  const renderBody = () => <Body>{children}</Body>;

  return variant === 'heading' ? renderHeading() : renderBody();
};

export default Tipography;
