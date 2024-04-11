/**
 * @param {ReadableStream} stream
 * @returns {Promise<Array>} contents
 */
export async function collect(stream) {
  const arr = [];
  for await (const element of stream) {
    arr.push(element);
  }
  return arr;
}
