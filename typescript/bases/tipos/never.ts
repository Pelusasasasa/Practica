(() => {
    const error = ():never => {
        throw new Error('Error');
    };

    error();
})();