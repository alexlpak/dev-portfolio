export const animations = {
    hidden: {
        opacity: 0,
        y: -25,
        transition: {
            type: 'spring',
            staggerChildren: 0.125
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            staggerChildren: 0.125
        }
    }
};