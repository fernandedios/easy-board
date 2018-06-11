const create = (app) => {
    return {
        creator: (port) => {
            return new Promise((resolve, reject) => {
                const server = app.listen(port, () => {
                    resolve({
                        server: {
                            shutdown: () => {
                                server.close();
                            }
                        },
                        url: `http://localhost:${port}`
                    });
                });
            });
        }
    };
};

module.exports = create;
