export default function Login() {
    return (
        <div className="bg-gray w-[100vw] h-[100vh] text-white">
            <div className="p-8 lg:p-12 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-fit h-fit bg-light rounded-[10%]">
            {/* <div className="py-8 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-1/2 h-1/2 bg-[#d3d3d3] rounded-xl flex flex-col"> */}
                <div className="relative flex flex-col justify-between h-full w-full gap-8">
                    <div className="mx-auto text-dark text-3xl xl:text-[2.5rem] xl:px-60 xl:pt-20 font-semibold">Connexion</div>
                    <div className="flex flex-col w-[50vw] lg:w-full mx-auto lg:px-10 xl:px-20">
                        <input 
                        className="tracking-widest mx-auto w-full flex flex-col bg-dark text-white font-semibold border-none p-2 lg:p-4 rounded-md my-3 shadow-lg" 
                        type="text" 
                        name="email" 
                        placeholder="EMAIL" 
                        />
                        <input 
                        className="tracking-widest mx-auto w-full flex flex-col bg-dark text-white font-semibold border-none p-2 lg:p-4 rounded-md my-3 shadow-lg" 
                        type="password" 
                        name="password" 
                        placeholder="MOT DE PASSE" 
                        />
                    </div>
                    <a 
                     className="bg-white text-black rounded-md w-fit py-3 px-8 m-auto text-3xl transition-all ease-in-out duration-200 shadow-lg hover:bg-dark hover:text-white xl:mb-20" 
                    href="/destinations"
                    >
                        Submit
                    </a>
                </div>
                
                {/* <div className="mx-auto text-black text-[45px] font-semibold">Connexion</div> */}
                {/* <input 
                 className="mx-auto w-3/5 flex flex-col bg-black text-white text-xl font-bold border-none p-8 rounded-sm my-4 shadow-lg" 
                 type="text" 
                 name="email" 
                 placeholder="EMAIL" 
                /> */}
                {/* <input 
                 className="mx-auto w-3/5 flex flex-col bg-black text-white text-xl font-bold border-none p-8 rounded-sm my-4 shadow-lg" 
                 type="password" 
                 name="password" 
                 placeholder="MOT DE PASSE" 
                /> */}
                {/* <a 
                 className="bg-white text-black rounded-md w-fit py-4 px-10 m-auto text-3xl transition-all ease-in-out duration-200 shadow-lg hover:bg-black hover:text-white" 
                 href="/"
                >
                    Submit
                </a> */}
            </div>
        </div>
    )
}


// E8E9F3 light
// 040404 dark
// 2B4141 gray (bg)
// 6564DB blue
// 76E5FC lightblue