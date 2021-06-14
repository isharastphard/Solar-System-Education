module.exports = {
    "*.{ts,tsx}": ["prettier --write"],
    "*.{ts,tsx}": () => 'tsc -p . --noEmit',
};
