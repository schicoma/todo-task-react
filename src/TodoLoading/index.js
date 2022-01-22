const TodoLoading = () => {

    return (
        <svg
            role="img"
            width="100%"
            height="220"
            aria-labelledby="loading-aria"
            viewBox="0 0 100% 300"
            preserveAspectRatio="none"
        >
            <title id="loading-aria">Loading...</title>
            <rect
                x="0"
                y="0"
                width="100%"
                height="300"
                clipPath="url(#clip-path)"
                style={{ 'fill': 'url("#fill")' }}
            ></rect>
            <defs>
                <clipPath id="clip-path">
                    <rect x="0" y="0" rx="10" ry="10" width="452" height="60" />
                    <rect x="0" y="75" rx="10" ry="10" width="452" height="60" />
                    <rect x="0" y="150" rx="10" ry="10" width="452" height="60" />
                </clipPath>
                <linearGradient id="fill">
                    <stop
                        offset="0.599964"
                        stopColor="#f3f3f3"
                        stopOpacity="1"
                    >
                        <animate
                            attributeName="offset"
                            values="-2; -2; 1"
                            keyTimes="0; 0.25; 1"
                            dur="2s"
                            repeatCount="indefinite"
                        ></animate>
                    </stop>
                    <stop
                        offset="1.59996"
                        stopColor="#ecebeb"
                        stopOpacity="1"
                    >
                        <animate
                            attributeName="offset"
                            values="-1; -1; 2"
                            keyTimes="0; 0.25; 1"
                            dur="2s"
                            repeatCount="indefinite"
                        ></animate>
                    </stop>
                    <stop
                        offset="2.59996"
                        stopColor="#f3f3f3"
                        stopOpacity="1"
                    >
                        <animate
                            attributeName="offset"
                            values="0; 0; 3"
                            keyTimes="0; 0.25; 1"
                            dur="2s"
                            repeatCount="indefinite"
                        ></animate>
                    </stop>
                </linearGradient>
            </defs>
        </svg>
    );
};

export {TodoLoading};