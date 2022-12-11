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
  - [ ] .......

So the conclusion is we all agree and see a problem what we do not agree on how to solve it and or we did not all together identfied the root cause so i did investigate.

The conclusion is that the root cause is NPM and NodeJS which got created in a time as there was no Module System where all did agree on. That leads to a giant backslash of backward compat to nodejs and npm. And as NodeJS is not willing to Switch to ESModules the new Module System Exclusiv they are blocking the ecosystem thats why all the above tools do exist and why all the above issues are even there.

NPM does solve 2 fundamental things in the NodeJS Fundamentals it supplys specifier Resolution and version integrity management. the good thing is Both can get with 1 line of code inside ECMAScript it self by design. Combined with the Concepts of inmutablity which are also inhrerent in the ECMAScript Module system to be static analyzeable. This Forms already the fundation together with git to implement a nix like Linux Platform or Windows or Mac.

So lets sum up what we learned npm is a meta file for the nodejs loader if you use a other loader you do not need nodejs. npm is a file hosting service with a resolution pattern which can be expressiv written in a single line of ECMAScript Module code. 

## So above showed us the main problem is we apply the wrong patterns to ECMAScript Module creation and design.
Lets learn how to implement it in a way that it works everywhere with and without NodeJS in the middle. To Incremental move away from it.

As you want to build a large software stack you need to understand how scaling works in deployment processes and build processes as also some fundamentals about distributed systems and processing it self. 

the fundamentals of large scale processing are so called transactions applyed via append only logging streams. This are the fundamentals of every cloud bus that exists and that is for good reason. It gives us benefits and saves us from near all possible known errors. That why it is the core of every clusted database or other clustred structures so distributed computing at its core is transaction logging in a inmutable append only log style. That gets consumed by the participlants peers or what ever wants to use that. 

You can read about all this topics a lot of books but you do not need to if you simply folow me here and simply save in your head the above written maybe read it more then once to fully understand that as you got often told that this is not possible you maybe have blockers in your mind that tell you that this is not true and so you maybe not fully understand it.

# when you fully understood until this point your ready to deprecate docker libcontainer kubernetes any distributed builds and also packaging you also learned that you need no database your application it self is the database. 

The title says it Databases are historical got designed to implement caching for slow spinning disks to speed up random reads and writes. So every Pub/Sub provider every cloud provider is simply only a abstraction and i need to point out a bad one as they are not simple... over the above fundamentals. 

you will find a lot of articles all over the internet where people do replace databases via json it self on the filesystem for example to speed up development and also production speed. As that gave them also online caching like a cdn for the database querys. I will write a extra book about how to design a ECMAScript written Database but this is only about solving the packaging issues and shows you as much of the database knowlege to handle your build inside your distributed graph database that is in fact what your ECMAScript Engine is it offers a core implementation of btree but for Memory Pointers.
