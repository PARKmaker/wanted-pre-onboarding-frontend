export const isNotEmpty = (value) => value.trim() !== "";
export const isIncludeAt = (value) =>
  isNotEmpty(value) && value.trim().includes("@");
export const isEightChars = (value) => value.trim().length >= 8;
