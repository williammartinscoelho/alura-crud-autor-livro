import React from 'react';

const LivrosContext = React.createContext([]);

export const LivrosProvider = LivrosContext.Provider;
export const LivrosConsumer = LivrosContext.Consumer;
export default LivrosContext;