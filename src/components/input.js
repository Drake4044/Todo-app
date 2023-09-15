    const Input = ({children , type, name, onChange, value}) => {
        return(
        <div class="relative z-0">
            <input type={type} name={name} onChange={onChange} value={value} id="floating_standard" class="block py-2 px-0 w-64 text-x1 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-sky-700 dark:focus:border-sky-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder= " " />
            <label for="floating_standard" class="absolute text-base duration-200 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
            peer-focus:-translate-y-6">{children}</label>
        </div>
        )
    }

    export default Input