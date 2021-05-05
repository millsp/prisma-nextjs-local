module.exports = {
    // future: {
    //     // webpack5: true,
    // },
    webpack: (config, { isServer } ) => {
        // if (isServer) {
        //     config.externals.push('@prisma/client')
        //     config.externals.push('_http_common')
        //     config.externals.push('encoding')
        // }

        return config
    },
    target: "serverless"
}