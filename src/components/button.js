const Button = ({ children, onClick, hover, type, onSubmit }) => {
    return(
    <button 
    type={type}
    onSubmit={onSubmit}
    class={`border-solid border-b-2 border-sky-700 rounded-lg px-3 py-1 shadow-md 
        bg-gradient-to-r from-teal-100 to-teal-500 text-sky-700 transition-all 
        active:transform active:translate-y-1 font-bold hover:shadow-slate-500 ${hover}`} 
        onClick={onClick} >
            {children}
        </button>)
}

export default Button