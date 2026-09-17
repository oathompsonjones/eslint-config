import type { ReactElement } from "react";

type ErrorProps = {
    readonly code: number;
    readonly message: string;
};

/**
 * Displays when a page throws an error.
 * @param props - The arguments of the error page.
 * @returns An error page.
 */
export default function Error(props: ErrorProps): ReactElement {
    const { code, message } = props;
    const title = `Error ${code} - ${message}`;

    document.title = title;

    return (
        <>
            <h2>{title}</h2>
            <p>{message}</p>
        </>
    );
}
