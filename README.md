If you use [jquery-tiny-pubsub](https://github.com/cowboy/jquery-tiny-pubsub),
you may sometimes, for debugging, want to trace all its events as they are subscribed, published 
and picked up.

This one is a very simple-minded hack for that purpose but hopefully someone will still find it useful.
It contains a single Javascript file, 
[jquery-tiny-pubsub-trace.js](https://github.com/gigamorph/jquery-tiny-pubsub-trace/blob/master/jquery-tiny-pubsub-trace.js).
You could either include it AFTER `jquery-tiny-pubsub.js` to override the functions and or use it IN PLACE OF `jquery-tiny-pubsub.js`.

All messages are printed using `console.log()` unless `trace` is set to `true` in the code, in which case `console.trace` is called. 

If you set `debug` to false, it will behave just like the original Tiny Pub/Sub, with possibly some performance hit.

In order not to log certain events,
add patterns to the variable `excludePatterns` in the source.
