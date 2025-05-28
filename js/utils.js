// Simple utility functions in the @slack namespace
const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

const sanitizeInput = (input) => {
  return input.trim().replace(/[<>]/g, '');
};

module.exports = {
  formatDate,
  sanitizeInput
}; 