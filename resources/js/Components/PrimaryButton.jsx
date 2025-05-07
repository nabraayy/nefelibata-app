export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            disabled={disabled}
            className={
                `relative overflow-hidden inline-flex items-center justify-center 
                rounded-xl px-6 py-2 text-sm font-medium tracking-wide 
                text-white transition duration-300 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF2D20] 
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'} ` + className
            }
        >
            {/* Fondo con imagen nube4 */}
            <span className="absolute inset-0 z-0 bg-[url('/nube4.png')] bg-cover bg-center opacity-80 transition duration-300"></span>

            {/* Texto en primer plano */}
            <span className="relative z-10">{children}</span>
        </button>
    );
}
