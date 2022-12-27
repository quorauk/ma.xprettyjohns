---
slug: "typescript-grpc-service"
title: "Typescript Grpc Service"
date: 2019-11-10T00:28:18Z
tags: 
    - typescript
    - grpc
    - microservices
---

This weekend I thought I would play with typescript and GRPC a little. It seems docs on getting this up and running is a bit thin on the ground, so that makes it perfect candidate for a little blog post.

You can find example code [here](https://github.com/quorauk/grpc-typescript-example)

To get started we need to create project, do so with the following commands

    mkdir grpc-project
    yarn init
    mkdir -p src/proto
    yarn add typescript ts-node grpc grpc-tools ts-protoc-gen @grpc/proto-loader

now we will want to create a protoc service so we can do some tasty code generation, here is an example proto file to get started

    // service.proto

    syntax = "proto3";

    message Message {
        string message = 1;
    }

    service Greeter {
        rpc greet (Message) returns (Message) {}
    }

sweet, now we want to get a little typescript going, to do this we want a tsconfig.json file so the compiler knows how to compile your code.

    // tsconfig.json
    {
        "compilerOptions": {
            "target": "es6",
            "module": "commonjs",
            "noImplicitAny": true,
            "removeComments": true,
            "preserveConstEnums": true,
            "sourceMap": true
        }
    }

then we want to generate the code that will help us use this proto file in our typescript code. Add the following to package.json

    {
    ...
        "scripts": {
            "proto": "grpc_tools_node_protoc --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts -I . ./service.proto --js_out='import_style=commonjs,binary:src/proto' --grpc_out=src/proto --ts_out='service=grpc-node:src/proto'"
        }
    ...
    }

now you can run the code generation using

    yarn proto

and you should see the code appear in src/proto/

now we want to write our server code, here is an example to get you started

    // src/index.ts
    import { Message } from "./proto/service_pb";
    import * as grpc from "grpc";
    import { GreeterService } from "./proto/service_grpc_pb";

    function greet(
      call: grpc.ServerUnaryCall<Message>,
      callback: grpc.requestCallback<Message>
    ) {
      const resp = new Message();
      resp.setMessage(`hello ${call.request.getMessage()}`);
      callback(null, resp);
    }

    function main() {
      const server = new grpc.Server();
      server.addService(GreeterService, {
        greet: greet
      });
      const bindto = `0.0.0.0:50051`;
      server.bind(bindto, grpc.ServerCredentials.createInsecure());
      console.log(`STARTING SERVER ON ${bindto}`);
      server.start();
    }

    main();

we can run this with

    yarn run ts-node src/index.ts

and to create a basic client

    // src/client.ts
    import { message } from "./proto/service_pb";
    import * as grpc from "grpc";
    import { greeterclient } from "./proto/service_grpc_pb";

    function main() {
      const client = new greeterclient(
        "0.0.0.0:50051",
        grpc.credentials.createinsecure()
      );
      const request = new message();
      request.setmessage("max");
      client.greet(request, (error: grpc.serviceerror, value: message) => {
        if (error != null) {
            console.log(error);
            return
        }
        console.log(value.getmessage());
      });
    }

    main();


similarly run this in a separate terminal with 

    yarn run ts-node src/client.ts
    yarn run v1.19.1
    $ /home/max/workspace/quora/grpc-typescript-example/node_modules/.bin/ts-node src/client.ts
    hello Max
    Done in 1.03s.

And there we have it, a basic grpc endpoint in typescript!