import React from 'react';
import { createRoot } from 'react-dom/client';

export const replaceHydrateFunction = () => {
  return (element, container) => {
    const root = createRoot(container);
    root.render(element);
  };
};
