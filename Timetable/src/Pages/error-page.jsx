import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError()
    console.log(error);

    return(
        <div id="error-page">
            <h1 className="text-3xl text-red-600 font-bold">Something&apos;s Amiss!</h1>
            <p>Sorry, the page you are looking for was not found</p>
            <p>Error: <span className="text-red-500">{error.statusText || error.message}</span></p>
        </div>
    )
}