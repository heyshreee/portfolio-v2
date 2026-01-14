export const formatVisitorCount = (count) => {
    if (typeof count !== 'number') return count;

    if (count < 1000) {
        return count.toString();
    } else if (count < 1000000) {
        const formatted = (count / 1000).toFixed(1);
        return formatted.endsWith('.0') ? formatted.slice(0, -2) + 'k' : formatted + 'k';
    } else {
        const formatted = (count / 1000000).toFixed(1);
        return formatted.endsWith('.0') ? formatted.slice(0, -2) + 'M' : formatted + 'M';
    }
};
