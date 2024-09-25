import { useState } from "react";

const useSelection = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  return { selectedOption, handleSelect };
};

export default useSelection;
