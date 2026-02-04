const TEMP = () => {
    return (
        // Laptop
        <div className={`w-full py-[60px] px-[20px] tablet:py-[80px] tablet:px-[30px] laptop:py-[100px] laptop:px-[200px] bg-green-400`}>
            <div className={`mx-auto w-full tablet:max-w-[800px] laptop:max-w-full flex flex-col gap-y-[40px] tablet:gap-y-[50px] laptop:gap-y-[72px] bg-black`}>
                <div className={`h-[169px] w-full max-w-[766px] bg-red-500`}></div>

                <div className={`h-[236px] w-full max-w-[1040px] bg-red-500`}></div>

                <div className={`h-[168px] w-full max-w-[1046px] bg-red-500`}></div>
            </div>
        </div>
    )
}

export default TEMP