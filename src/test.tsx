import type { ReactElement } from "react";

type ErrorProps = {
    code: number;
    message: string;
};

/**
 * Displays when a page throws an error.
 * @param props - The arguments of the error page.
 * @returns An error page.
 */
export default function Error(props: ErrorProps): ReactElement {
    const title = `Error ${props.code} - ${props.message}`;

    document.title = title;

    return (
        <>
            <h2>{title}</h2>
            <p>{props.message}</p>
        </>
    );
}
