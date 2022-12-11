# why-you-should-switch-away-from-npm-nodejs
This is a Collection of NodeJS NPM Related Arguments against the usage of NodeJS and NPM as also offering better alternatives.

## First of all what are the alternativs?
Usage of directly git and the git protocol is the key. It also saves you from bundling and packageing issues its all built in already. As the most people prefer easy over simple and the amount of developers exponential growth there is a gap between knowleg transfer from old expirenced to Young Coders or Coders that got teached by Coders that do not had time to care for the Bigger Picture. 

This book trys to Convince you and educate you to switch away from Packaging to Modular Composition in your Projects. No Matter what kind of Project that is also no Matter which languages it is written in this is a Universal Concept it applys to everything always it does not change it can only made incremental better we can change details and make variations but the fundamentals stay.

What is a VM? There are 2 Types of VM's Binary Once and so called Hardware Once which are Implemented via the Watch function of the Kernel the so called VMM Interfaces and API's 

Your Browser and your ECMAScript/JS Engine Are Fully blown container vms which implement binary sandboxing in a variaty of ways as this tech did evolve and not everything got always upgraded. But we are in fact at current point in time in a state where we can rethink some parts of the tooling and code we depend on to build our projects. I did a lot of research into common interfaces of code it self and virtual machines as also security and application development as also deployment and runtime observation.

I identified overlapping replication all over we did ruin in fact software development and the web at a whole the more deep i looked into over 10 000 Codebases the last 30 years and not only the old once also always tracking the most new exciting stuff and always identifing the key implementation details abstracted to the principles of simple software design. And i need to repeat simple is not easy simple means unwinded so a single circle the fundamentals of computing the turing principles.

## The Community Already Identified that it has problems.
- [ ] https://nodejs.medium.com/call-to-action-accelerating-node-js-growth-e4862bee2919
- [ ] Easy Solutions getting implemented all are claiming to solve the problem
  - [ ] Vite
   - See how we create wrapper over wrapper this gets more and more complex
     - https://github.com/originjs/vite-plugin-federation 
  - [ ] Svelt
  - [ ] React
  - [ ] lit-html
  - [ ] TypeScript
  - [ ] code-oss/vscode
  - [ ] npm
  - [ ] nodejs
  - [ ] nextJS
  - [ ] turbo loader (while this is a good compatiblity layer maybe in future) as it useses rollup which is the future. 
  - [ ] pnpm 
  - [ ] webpack
  - [ ] stackblitz browser-node webcontainer
  - [ ] serverless and serverless functions
  - [ ] grpc proxys virtual networking all the network issues.
  - [ ] cloud providers and ci and devOps.
  - [ ] .......

So the conclusion is we all agree and see a problem what we do not agree on how to solve it and or we did not all together identfied the root cause so i did investigate.

The conclusion is that the root cause is NPM and NodeJS which got created in a time as there was no Module System where all did agree on. That leads to a giant backslash of backward compat to nodejs and npm. And as NodeJS is not willing to Switch to ESModules the new Module System Exclusiv they are blocking the ecosystem thats why all the above tools do exist and why all the above issues are even there.

NPM does solve 2 fundamental things in the NodeJS Fundamentals it supplys specifier Resolution and version integrity management. the good thing is Both can get with 1 line of code inside ECMAScript it self by design. Combined with the Concepts of inmutablity which are also inhrerent in the ECMAScript Module system to be static analyzeable. This Forms already the fundation together with git to implement a nix like Linux Platform or Windows or Mac.

So lets sum up what we learned npm is a meta file for the nodejs loader if you use a other loader you do not need nodejs. npm is a file hosting service with a resolution pattern which can be expressiv written in a single line of ECMAScript Module code. 

esm-rollup.js a Rollup Implementation written in ECMAScript implements resolve and load hooks.
```js
const rollup = (specifier="mySoftware") => import(`/myUnifiedResolveMethod.js?id=${specifier}`).then( resolvedId => import(resolvedId) );
export const myLoadedSoftware = rollup('mySoftware');
```

The above implements a so called universal modular resolve load instantiation hook the mother of all loaderHookks combined with the ecmascript engines abilitys to dynamic create link and throw away any context as also automated manage references via garbage collection this is the ultimate packaging system and weapon to make your builds and anything modular even your core git workflows are represent and express able  in that pattern directly without anything additional.

this is a full http server can be used in the browser or any where else socket represents any stream implementation that emits on data can be anything that emits buffer so UInt8Array that is true for any nativ implementations anyway. 
http-including-json-post-support.js
```js
socket.on('data',data=>{
        const [requestHeader, ...bodyContent] = data.toString().split('\r\n\r\n');

        const [firstLine, ...otherLines] = requestHeader.split('\n');
        const [method, path, httpVersion] = firstLine.trim().split(' ');
        const headers = Object.fromEntries(otherLines.filter(_=>_)
            .map(line=>line.split(':').map(part=>part.trim()))
            .map(([name, ...rest]) => [name, rest.join(' ')]));

        var body;
        try {
            body = JSON.parse(bodyContent);
        } catch(err){/* ignore */}


        const request = {
            method, 
            path,
            httpVersion,
            headers,
            body
        };
        console.log(request)
        socket.write(`HTTP/1.1 200 OK\n\nhallo ${request.body.name}`)
        socket.end((err)=>{console.log(err)})
    });
```

## So above showed us the main problem is we apply the wrong patterns to ECMAScript Module creation and design.
Lets learn how to implement it in a way that it works everywhere with and without NodeJS in the middle. To Incremental move away from it.

As you want to build a large software stack you need to understand how scaling works in deployment processes and build processes as also some fundamentals about distributed systems and processing it self. 

the fundamentals of large scale processing are so called transactions applyed via append only logging streams. This are the fundamentals of every cloud bus that exists and that is for good reason. It gives us benefits and saves us from near all possible known errors. That why it is the core of every clusted database or other clustred structures so distributed computing at its core is transaction logging in a inmutable append only log style. That gets consumed by the participlants peers or what ever wants to use that. 

You can read about all this topics a lot of books but you do not need to if you simply folow me here and simply save in your head the above written maybe read it more then once to fully understand that as you got often told that this is not possible you maybe have blockers in your mind that tell you that this is not true and so you maybe not fully understand it.

# when you fully understood until this point your ready to deprecate docker libcontainer kubernetes any distributed builds and also packaging you also learned that you need no database your application it self is the database. 

The title says it Databases are historical got designed to implement caching for slow spinning disks to speed up random reads and writes. So every Pub/Sub provider every cloud provider is simply only a abstraction and i need to point out a bad one as they are not simple... over the above fundamentals. 

you will find a lot of articles all over the internet where people do replace databases via json it self on the filesystem for example to speed up development and also production speed. As that gave them also online caching like a cdn for the database querys. I will write a extra book about how to design a ECMAScript written Database but this is only about solving the packaging issues and shows you as much of the database knowlege to handle your build inside your distributed graph database that is in fact what your ECMAScript Engine is it offers a core implementation of btree but for Memory Pointers.

you maybe at this point observed we need no registry as our application is a btree programable memory grid database already from the strart till it exits. It is like Redis and Oracle Database and Couchbase Kubernets GlusterFS, Git, but on steroids. As it is dynamical program able via append only logging and memory pointers. All this is abstracted into the ECMAScript Syntax and the Context Linking is done via import export statements in the ECMAScript files.

So as The Import Export statements to produce static analyzeable links this implements the fundament for Capability based Protocols a concept where a Application only passes down a handle to the underleying component which inherent has the ability to do security related stuff like rule checking and so on. 

All the cloud providers and implementations are ways to lock you into tooling that is easy but not simple in fact it gets complex so interwinded when you combine more and more easyy tools.

this teaches you how to keep you code simple so that you need no additional stuff to run your main code and so your software directly. That gives you all the benefits of the above mentioned tools and even solves all problems that they have.

## The best code is the one that you did never write!
It is simple but not easy again if you do not write code it has zero bugs in fact the only thing that a normal and even most senior coders can do with data is Ruin it so we simply stop doing that and get all the benefits out of the box.

## What we aim for?
- Zero Time to Deployment directly load and launch the software give us feedback if it does what it should do.
- Zero Effort to change a code part to get a new version with added or less features even not loading the code twice that needs to get reused. 
- Zero need for external Monitoring and logging services as also databases getting full instrumentation observation abilitys out of the box.
- No External Servers or Software Providers needed to build and run our code. We can directly code and execute in dev and production.
- No Need for a CDN in fact we can create our own cdn out of the users it self and only offer some additional entrypoints into the system.
- No need for virtual networks and abstractions over networking secure networking by design fully audit and monitor able.


## How do we get that i want it?

#### What matters in software is: 
what matters in writing software not the look and feel of the experience writing the code or the cultural implications of it.
- does the software do what is supposed to do? 
- Is it of high quality? 
- Can we rely on it? 
- Can problems be fixed along the way? 
- Can requirements change over time? 

### The benefits of simplicity are: 
ease of understanding, ease of change, ease of debugging, flexibility, modules are pure functions that are recomposeable into a component. The mantra is alwas composition over inharitance. Never create a class or structure for data always view the data in your way.

### Complex constructs: 
State, Object, Methods, Syntax, Inheritance, Switch/matching, Vars, Imperative loops, Actors, ORM, Conditionals.

### Simple constructs: 
Const, Functions, Data, Polymorphism, Managed refs, Streams, Declarative data manipulation, Rules, Consistency.

### Build simple systems by: 
- Abstracting - design 
  - by answering questions related to 
    - what, 
    - who, 
    - when, 
    - where, 
    - why,
    - how,
- Choosing constructs that generate simple artifacts like modules 
  - that do not reference other modules without a unified resolver method 
    - that produces static in memory references...
- Simplify by encapsulation via composition of functions and streams.

### do not ruin the data
If you can avoid it never touch data never create a own state only your user creates state and there again never create own state the software that the user already uses creates state.

never ruin data do not touch it view it if you need it else let it as is that is fundamental importent do not code a framework do not do abstractions your ECMAScript Engine offers all needed abstractions to handle the data without touching or moving it.



# Declarativ Data Manipulation in ECMAScript
As ECMAScript is a declartiv language based on JSON which is based on UTF-8 its binary Buffer Representation is UInt8Array containing UTF-8 chars represented as Integers and additional view methods for the underlaying data which always stays UInt8 internal.

That leads us to the following observations. Everything in ECMAScript is basic UTF-8 Formated String Content as a Type. The Same is true for most of the source code that exists on the web if it is written in any country that depends on UTF-8 in the most used operating systems and software products thats the case even mostly in china. 

So we now come up with the idea what if we let ECMAScript write our source code in a declarativ way no matter what language it is written in and export that as module that we can compose with other software that uses the same principles?

## Examples:
WiP



## Migration Strategies

### Typescript 
can produce module ESNext target ESNext and your most time fine when using that result with rollup today you get a hashed reference in the build cache that you can use for a build grid like goma. or anything else that builds stuff at scale.

The most essential parts are components systems like jsx which replicate ECMAScript tagged template strings and over complicates interiop remember leave data untouched. 

### CJS
needs to get transpiled to esm and hashed then partial converted there exists not much usefull software that follows the simple design patterns anyway. They are all wrappers to create easy software that solves problems of easy software. And Templating systems which are all replace able by simple taggedTemplate strings supplyed by core ECMAScript.

- Code is most of the time a UTF-8 String 
- you want to apply sring manipulation to it in a declarativ way and ecmascript is a declarativ language that offers some dynamic sugar while still is static analyzeable.

### NodeJS nativ modules
Most exist out of the fact to produce easy software again they are not needed most of the time and if they are needed then they get offered by the underlaying Operating System which is accessable via the filesystem already observation the engine it self can some how load and execute code for it self to run and load dynamic modules we can use directly the same interfaces that any runtime uses to create modules.

for example what if we could search a filesystem in a fast way via a index database that gives us sub millisecund results without iterating over directorys? What if we would call via the shell that executes our runtime or any other filebased api the Operating system to return exactly the result of a query to that database? eg to find all possible existing node_modules folders in a single call and not iterating over and over?

That is possible on all operating systems linux, windows, android, macos, browsers, 
but we implement it always over the filesystem our self because we are programmers right? we can do that we are cool right?

here i spotted first time the issue when using nodejs compared to the operating system
- https://stackoverflow.com/questions/53125592/node-fs-readdir-freezing-in-folders-with-too-many-files/54307500#54307500

but i did not understood that i found there a problem and a general antipattern called easy and easy is not simple everything must be simple it is a core need to produce stable software that is self documented and understand able so fast fixable and fullfills our criterias.

so i did not understood fully my self that this implementation that i did would be the more clever i tought it is a workaround. 
but it is not as it is simple it uses the operating system via find to get a result directly with kernel optimization in a stream that pattern can be directly used in all other environments no matter how you call the module that implements that call it filesystem-lookup.js?=pattern or something like that this has zero context switching so again simple we do not touch the data we simple get our result in one turn and stream that.

## Size of the problem
you can observer the problem here:
- http://www.modulecounts.com/

it shows module counts on diffrent registries in fact v8 is a Operating System by default so it can replace all that modules by default with better build once it reduces the overall ecosystem of the web to less code by simply be used as universal declarativ dynamic build system ad web scale.

we aim not less as deprecation of millions of open source projects and working on improvements to the parts that matter that are mainly hardware drivers that then get exposed via memory addresses any way so something that a none low level driver provider needs to care about. As Also More fine grained Scheduler Implementations for web scale clocking virtual machines. Streams are the ultimate way to abstract async data flows they solve the so called locking issues of a distributed context that async produces values. 

as also management concepts like IAM services in clouds in a more user frindly way to over better security.

