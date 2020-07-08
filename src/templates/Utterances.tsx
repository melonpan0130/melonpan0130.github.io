import React, { createRef, useLayoutEffect } from 'react';

const src="https://utteranc.es/client.js";

export interface IUtterancesProps {
    repo: string;
}

const Utterances: React.FC<IUtterancesProps> = React.memo(({ repo }) => {
    const containerRef = createRef<HTMLDivElement>();

    useLayoutEffect(() => {
        const Utterances = document.createElement('script');

        const attributes = {
            src,
            repo,
            'issue-term': 'pathname',
            label: 'comment',
            theme: 'github-light',
            crossOrigin: 'anonymous',
            async: 'true',
        };

        Object.entries(attributes).forEach(([key, value]) => {
            Utterances.setAttribute(key, value);
        });

        containerRef.current.appendChild(Utterances);
    }, [repo]);

    return <div ref={containerRef} />;
});

Utterances.displayName = 'Utterances';

export default Utterances;