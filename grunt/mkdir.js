/* jshint node:true */
// https://github.com/rubenv/grunt-mkdir
module.exports = {
    logs: {
        options: {
            create: ['logs']
        }
    },

    lite: {
        options: {
            create: ['../<%= package.name %>-lite']
        }
    }
};