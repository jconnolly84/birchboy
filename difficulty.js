/* Endless difficulty: generous opening, then a deliberately unwinnable climb. */
function difficulty(index) {
  const stage = Math.max(0, Math.floor(index));
  const names = ['The first fence', 'Squirrel crossing', 'Birds of a feather',
    'Fox in the woods', 'Rabbit rush', 'The owl hour', 'Badger business'];
  return {
    name: names[stage] || `Birch mayhem ${stage + 1}`,
    target: Math.min(100, 30 + stage * 10),
    limit: Math.max(1, 50 - stage * 3),
    speed: Math.min(3, .55 + stage * .18),
    zone: Math.max(.05, .30 - stage * .025),
    gap: Math.max(.12, 5 - stage * .45),
    stay: Math.min(3, 1.4 + stage * .13),
    warning: Math.max(.25, .9 - stage * .035)
  };
}
if (typeof module !== 'undefined') module.exports = difficulty;
