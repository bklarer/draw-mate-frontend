export const fetchTimezone = (): string => {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return userTimezone;
};
