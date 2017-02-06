describe('callback', function() {
  it('should subscribe and unsubscribe', function() {
    var callback = sinon.spy();
    jQuery.subscribe('foo', callback);
    jQuery.publish('foo');
    expect(callback.called).to.equal(true);
    callback.reset();
    jQuery.unsubscribe('foo', callback);
    jQuery.publish('foo');
    expect(callback.called).to.equal(false);
  });
});
