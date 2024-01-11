export const getCircleCoordinates = (
  start: number,
  end: number,
  current: number
) => {
  const totalTime = end - start;
  const currentTime = current - start;
  const progress = currentTime / totalTime;

  const radius = 40;
  const centerX = 50;
  const centerY = 50;

  const angle = progress * Math.PI;

  const x = centerX + radius * Math.sin(angle);
  const y = centerY - radius * Math.cos(angle);

  return { x, y };
};
