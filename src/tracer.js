console.log(process.env.DD_TRACE_AGENT_URL);
console.log(process.env.DD_TRACE_GLOBAL_TAGS);

const tracer = require('ls-trace').init({
    experimental: {
        b3: true
    }
});

module.exports = tracer;
