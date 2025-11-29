const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

// Tambahan utility functions
const getInitialData = () => {
  // Ini untuk compatibility dengan komponen dari repository lain
  // yang mungkin menggunakan fungsi ini
  return [];
};

export { showFormattedDate, getInitialData };
