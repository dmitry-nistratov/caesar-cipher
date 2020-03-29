const cipher = (chunk, shift, action) => {
  const text = chunk.toString().split('');
  if (action === 'encode') {
    const encoded = text.map(item => {
      const code = item.charCodeAt();

      if (code >= 65 && code <= 90) {
        if (code + +shift > 90) {
          return String.fromCharCode(64 + (code + +shift - 90));
        }
        return String.fromCharCode(code + +shift);
      }
      if (code >= 97 && code <= 122) {
        if (code + +shift > 122) {
          return String.fromCharCode(96 + (code + +shift - 122));
        }
        return String.fromCharCode(code + +shift);
      }
      return item;
    });
    return encoded.join('');
  }
  if (action === 'decode') {
    const decoded = text.map(item => {
      const code = item.charCodeAt();

      if (code >= 65 && code <= 90) {
        if (code - +shift < 65) {
          return String.fromCharCode(91 - (65 - (code - +shift)));
        }
        return String.fromCharCode(code - +shift);
      }
      if (code >= 97 && code <= 122) {
        if (code - +shift < 97) {
          return String.fromCharCode(123 - (97 - (code - +shift)));
        }
        return String.fromCharCode(code - +shift);
      }
      return item;
    });
    return decoded.join('');
  }
};

module.exports = cipher;
