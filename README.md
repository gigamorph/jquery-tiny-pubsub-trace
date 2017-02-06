# jquery-tiny-pubsub-trace

If you use [jquery-tiny-pubsub](https://github.com/cowboy/jquery-tiny-pubsub),
you may sometimes, for the purpose of debugging, want to trace all its events as they are subscribed and published, and also as 
the callbacks are called.

This package is a very simple-minded hack for that purpose but hopefully someone will still find it useful.

## Install

It contains a single Javascript file,
[jquery-tiny-pubsub-trace.js](https://github.com/gigamorph/jquery-tiny-pubsub-trace/blob/master/src/jquery-tiny-pubsub-trace.js).
You should include it after `jquery-tiny-pubsub` to override its functions. You probably want to include it only when debugging
if you are keen on performance.

## Use
All messages are printed using `console.log()` unless `trace` is set to `true` in the code, in which case `console.trace` is called.

If you set `debug` to false, it will behave just like the original Tiny Pub/Sub, with possibly some performance hit.

In order not to log certain events,
add patterns to the variable `excludePatterns` in the source.
For example,
```Javascript
excludePatterns = ['move.*fin', 'Coord'];
```
then event IDs such as "cursor_move_34_fin" and "DataCoordChanged" will be ignored.
