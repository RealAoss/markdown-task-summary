function fail(message) {
    throw new Error(message);
}
export function transform(s) {
    if (!s.trim()) fail('Enter some source text.');
    const items = s.split(/\r?\n/).map(l => l.match(/^\s*[-*+]\s+\[([xX ])\]\s+(.+)$/)).filter(Boolean);
    if (!items.length) fail('No checkbox tasks found');
    const open = items.filter(m => m[1] === ' ');
    return (items.length - open.length) + ' completed / ' + items.length + ' total\n\nOpen tasks\n' + open.map(m => '• ' + m[2]).join('\n')
}
