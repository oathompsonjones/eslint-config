import type { ReactElement } from "react";

/**
 * Handles any 404 errors.
 * @returns An error page.
 */
export default function Error(): ReactElement {
    const title = "Error 404 - Page not found";

    document.title = title;

    return (
        <>
            <h2>{title}</h2>
            <body>
                These aren't the droids you're looking for. Click <a href="/">here</a> to go to the homepage.
            </body>
        </>
    );
}
