import React, { useState, useContext } from 'react';

const FormContext = React.createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <FormContext.Provider value={{ isFormOpen, setIsFormOpen }}>
      {children}
    </FormContext.Provider>
  );
};
