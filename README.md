If you use [jquery-tiny-pubsub](https://github.com/cowboy/jquery-tiny-pubsub)
and wish to trace all events as they are published and picked up, 
you can write your own cool script or just be lazy and use this lame excuse
for nothing.

This project contains a single Javascript file, 
[jquery-tiny-pubsub-trace.js](https://github.com/gigamorph/jquery-tiny-pubsub-trace/blob/master/jquery-tiny-pubsub-trace.js).
Include it AFTER `jquery-tiny-pubsub.js` to override the functions, and
remember to remove it for production build. Or you could set up your build system to include it IN PLACE OF the real script for a certain debugging mode.

All messages are printed using `console.log()`. In order not to log certain events,
add patterns to the variable `excludePatterns` in the source.
