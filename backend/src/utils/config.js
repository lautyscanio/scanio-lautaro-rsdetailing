const config = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "rs-detailing-secret"
};

export default config;