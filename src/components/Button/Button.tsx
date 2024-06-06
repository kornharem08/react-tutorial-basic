import PropTypes from 'prop-types';
interface Props {
    text?: string
    onClick? : () => void
    // any props that come into the component
}
export default function Button ({ onClick ,text, ...props }: Props) {
    return (
        <>
           <button onClick={onClick } className='bg-red-500 text-white outline-none px-24 focus:outline-none border-none focus:ring-0' {...props}>{text}</button>
        </>
    )
}

Button.prototype = {
    text: PropTypes.string,
    onClick: PropTypes.func
}