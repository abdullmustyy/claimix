import type { SVGProps } from "react";

const EllipseMiniIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle cx="7.5" cy="8" r="2" fill="currentColor" />
        </svg>
    );
};

export default EllipseMiniIcon;
