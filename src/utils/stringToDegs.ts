const stringToDegs = (str: string): number => {
  let hash = 0;
  const len = str.length;

  if (!len) return hash;

  for (let i = 0; i < len; i += 1) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
  }

  return (hash > 0 ? hash : hash * (-1)) % 360;
}

export { stringToDegs };
