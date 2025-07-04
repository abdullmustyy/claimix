type ICircleOffIconProps = React.SVGProps<SVGSVGElement>;

const CircleOffIcon = (props: ICircleOffIconProps) => {
    return (
        <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M3.08058 2.58058L11.9194 11.4194M1.25 7C1.25 10.4518 4.04822 13.25 7.5 13.25C10.9518 13.25 13.75 10.4518 13.75 7C13.75 3.54822 10.9518 0.75 7.5 0.75C4.04822 0.75 1.25 3.54822 1.25 7Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
            />
        </svg>
    );
};

export default CircleOffIcon;
