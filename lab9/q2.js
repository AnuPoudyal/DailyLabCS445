/*Write an implementation for the Observer Pattern where observers have the following format: {'event': [observers]}
For example:

{
   'eat': [function1, function2],
   'study': [function3, function4, function5]
}*/
class Subject {
    observers = {};

    on(event, fn) {
        if (!this.observers[event]) {
            this.observers[event] = [fn];
        } else {
            this.observers[event].push(fn);
        }
    }

    emit(event, message) {
        if (this.observers[event]) {
            this.observers[event].forEach(fn => fn(message));
        }
    }

    off(event, fn) {
        this.observers[event] = this.observers[event].filter(f => f !== fn);
    }

}
const subject = new Subject();
subject.on('eat', console.log);
subject.on('study', console.log);

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
subject.emit('study', 'cs445');
//output
// Corn
// foo: Corn
// cs445
// foo: cs445
subject.off('eat', foo);
subject.emit('eat', 'Banana');
//output
//Banana