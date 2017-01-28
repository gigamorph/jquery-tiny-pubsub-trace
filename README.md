If you use [jquery-tiny-pubsub](https://github.com/cowboy/jquery-tiny-pubsub),
you may sometimes, for debugging, want to trace all its events as they are subscribed, published 
and picked up.

This one is a very simple-minded hack for that purpose but hopefully someone will still find it useful.
It contains a single Javascript file, 
[jquery-tiny-pubsub-trace.js](https://github.com/gigamorph/jquery-tiny-pubsub-trace/blob/master/jquery-tiny-pubsub-trace.js).
You can either include it AFTER `jquery-tiny-pubsub.js` to override the functions and remember to remove it for production build, or you could set up your build system to include it IN PLACE OF `jquery-tiny-pubsub.js` for a certain debugging mode.

All messages are printed using `console.log()`. In order not to log certain events,
add patterns to the variable `excludePatterns` in the source.

