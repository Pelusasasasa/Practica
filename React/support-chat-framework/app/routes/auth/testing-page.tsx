import { Form, Link, NavLink, useNavigation } from "react-router";
import type { Route } from "./+types/testing-page";
import { sleep } from "~/lib/sleep";


export async function action({ request }: Route.ActionArgs) {
  await sleep(1500)
  const data = await request.formData();
  
  //title: data.get("title"),
  console.log('Server Side - Action')
  console.log({data})

  return { ok: true, message: 'Todo Bien' };
};

export async function clientAction({ serverAction, request }: Route.ClientActionArgs) {
  await sleep(1000);
  const formData = await request.clone().formData();
  const allData = Object.fromEntries(formData)
  const data = await serverAction();
  return {message: 'Hola Mundo de lado del cliente', data};
};

export async function loader() {
    console.log('Hola Mundo desde el cliente')
    return { message: 'Hola Mundo desde el server'};
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
    // call the server loader
    const serverData = await serverLoader();
    
    return { message: 'Hola Mundo desde el cliente', serverData};
};


  
export default function MyRouteComponent({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {

  const navigation = useNavigation();
  const isPosting = navigation.state === 'submitting';

  console.log({navigation, isPosting});

  return (
    <div>
      <h1 className="font-bold text-2xl">Testing Page</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>

      <NavLink to='/auth/testing-args/ABC-123/Juan/25' className={({isPending}) => 
        `transition-colors duration-200 ${isPending ? 'text-gray-400 cursor-not-allowed opacity-70' : 'text-blue-600 hover:text-blue-800 underline text-2xl'}`
      }>Testing args</NavLink>

      <Form className="mt-2 flex gap-2" method="post">
        <input type="text" className="border-2 border-gray-300 rounded-md p-2" name="name" />
        <input type="text" className="border-2 border-gray-300 rounded-md p-2" name="age"/>
        <button disabled={isPosting} className={`bg-blue-500 text-white rounded-md p-2 disabled:opacity-50`} type="submit">{isPosting ? 'Submitting...' : 'Submit'}</button>
      </Form>
    </div>
  );
}
