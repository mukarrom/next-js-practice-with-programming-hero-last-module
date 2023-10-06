// className function will take all arguments as 'args' parameter name. then these arguments will be filtered out from falsy value. then will join and every argument will take a space.
const classNames = (...args) => args.filter(Boolean).join(' ');

export default classNames;
