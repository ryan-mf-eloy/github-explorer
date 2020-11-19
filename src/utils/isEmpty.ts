const isEmpty = (value: string): boolean => {
  if(value === '' || !value || value.trim() === '') return true;

  return false;
}

export default isEmpty;