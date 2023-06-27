const FormFilter = (data, searched) => {
  const result = data.filter(
    (d) => (d.name.common.toLowerCase().includes(searched.toLowerCase()))
    || (d.capital === searched),
  );
  return result;
};

export default FormFilter;
