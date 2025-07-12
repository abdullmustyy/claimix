type SheetIconProps = React.ComponentProps<"svg">;

const SheetIcon = (props: SheetIconProps) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M15.4163 18.75H4.58301C3.89259 18.75 3.33301 18.1904 3.33301 17.5V2.5C3.33301 1.80958 3.89259 1.25 4.58301 1.25H12.4997L16.6663 5.41667V17.5C16.6663 18.1904 16.1068 18.75 15.4163 18.75Z"
                fill="#2196F3"
            />
            <path
                d="M16.6667 5.41667H12.5V1.25L16.6667 5.41667Z"
                fill="#BBDEFB"
            />
            <path
                d="M12.5 5.41669L16.6667 9.58335V5.41669H12.5Z"
                fill="#1565C0"
            />
            <path
                d="M6.25 9.58331H13.75V10.4166H6.25V9.58331ZM6.25 11.25H13.75V12.0833H6.25V11.25ZM6.25 12.9166H13.75V13.75H6.25V12.9166ZM6.25 14.5833H10.4167V15.4166H6.25V14.5833Z"
                fill="#E3F2FD"
            />
        </svg>
    );
};

export default SheetIcon;
