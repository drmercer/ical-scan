
/**
 * Retrieves the cached value from localStorage, or uses prompt() if it hasn't been cached
 *
 * @param {string} key - The key to use for caching
 * @param {string} promptText - The prompt to use if the value is not cached
 */
export function cachedPrompt(key, promptText) {
  const cachedValue = localStorage.getItem(key);
  if (cachedValue) {
    return cachedValue;
  } else {
    const value = prompt(promptText);
    localStorage.setItem(key, value);
    return value;
  }
}
