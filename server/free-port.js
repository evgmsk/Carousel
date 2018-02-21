/**
 * Carousel
 */
import net from 'net'

//helper function with promise to find unused port
const freePortPromise = (port) => new Promise( (resolve, reject) => {
    const test_port = net.createServer()
        .once('error', err => {
            if (err.code !== 'EADDRINUSE')
                return reject(err);
            else
                return resolve(freePortPromise(port + 1))
        })
        .once('listening', () => {
            test_port.once('close', () => resolve(port)).close()
        })
        .listen(port);
});

export default freePortPromise


//helper function with callback to find unused port
/*
 export const freePortCB = (port, fn) => {
 const test_port = net.createServer()
 .once('error', err => {
 if (err.code !== 'EADDRINUSE')
 return fn({err:err});
 else
 return freePort(port + 1, fn)
 })
 .once('listening', () => {
 test_port.once('close', () => fn({port: port})).close()
 })
 .listen(port);
 };
 */