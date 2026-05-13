export const BIRTHDAY_WIB = {
  year: 2026,
  month: 5,
  day: 14,
  hour: 0,
  minute: 0,
  second: 0,
};

export function getWibTargetTimestamp(target = BIRTHDAY_WIB) {
  const { year, month, day, hour = 0, minute = 0, second = 0 } = target;

  // WIB is UTC+7, so convert WIB clock time to UTC timestamp.
  return Date.UTC(year, month - 1, day, hour - 8, minute, second);
}

export function getCountdownFromNowWib(target = BIRTHDAY_WIB) {
  const diff = getWibTargetTimestamp(target) - Date.now();

  if (diff <= 0) {
    return {
      isUnlocked: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    isUnlocked: false,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}
