import { api, RawResponse } from "encore.dev/api";






interface Message{
  message:string
}

const controller= async ({ name }: { name: string }) : Promise<Message>=>{
  const msg = `Hello ${name}!`;
 
  return { message: msg };
}
export const get = api(
  { expose: true, method: "POST", path: "/nome",auth:false },
  async ({ name }: { name: string })=> controller({name})
  
)






interface Response {
  message: string;
}

// ==================================================================

// Encore comes with a built-in development dashboard for
// exploring your API, viewing documentation, debugging with
// distributed tracing, and more. Visit your API URL in the browser:
//
//     http://localhost:9400
//

// ==================================================================

// Next steps
//
// 1. Deploy your application to the cloud
//
//     git add -A .
//     git commit -m 'Commit message'
//     git push encore
//
// 2. To continue exploring Encore, check out these topics in docs:
//
//    Creating services and APIs: https://encore.dev/docs/ts/primitives/services-and-apis
//    Using SQL databases: https://encore.dev/docs/ts/primitives/databases
//    Authentication: https://encore.dev/docs/ts/develop/auth
//    Using Pub/Sub: https://encore.dev/docs/ts/primitives/pubsub
//    Using Cron Jobs: https://encore.dev/docs/ts/primitives/cron-jobs
//    Using Secrets: https://encore.dev/docs/ts/primitives/secrets
