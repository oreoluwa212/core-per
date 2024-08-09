import { Link } from "react-router-dom";
import useSelection from "./useSelection";
import Header from "../../components/Header";
import { logo } from "../../assets";

const Selection = () => {
    const { selectedOption, handleSelect } = useSelection();

    return (
        <div className="w-full font-montserrat bg-white text-black px-[5%]">
            <Header />
            <div>
                <div>
                    <Link to={"/"}>
                        <div className='lg:justify-center lg:mx-0 flex px-6 pt-10'>
                            <img src={logo} alt="Logo" className='lg:h-[35px] h-[30px]' />
                        </div>
                    </Link>

                    <div className="pt-14 pb-10 text-center">
                        <h2 className="md:text-[32px] text-[20px] fw-bold font-abril uppercase">What brings you to Core?</h2>
                        <p className="text-[20px]">Tell us about you</p>
                    </div>
                </div>
                <div className="flex justify-center flex-col lg:flex-row gap-[40px] px-6">
                    <div
                        className={`border-[#AFAFAF] border-[1px] md:h-[400px] h-[300px] lg:w-[40%] w-full rounded-xl ${selectedOption === 'admin' ? 'bg-[#008080] text-white' : ''}`}
                        onClick={() => handleSelect('admin')}
                    >
                        <div className="md:pt-20 flex justify-center pt-10">
                            <svg width="48" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            </svg>
                        </div>
                        <div className="pt-20 text-center">
                            <h2 className={`text-[32px] fw-bold ${selectedOption === 'admin' ? 'text-white' : 'text-[#008080]'}`}>Admin</h2>
                            <h6 className={`text-[20px] ${selectedOption === 'admin' ? 'text-white' : ''}`}>Continue as an admin</h6>
                        </div>
                    </div>
                    <div
                        className={`border-[#AFAFAF] border-[1px] md:h-[400px] h-[300px] lg:w-[40%] w-full rounded-xl ${selectedOption === 'client' ? 'bg-[#008080] text-white' : ''}`}
                        onClick={() => handleSelect('client')}
                    >
                        <div className="md:pt-20 flex justify-center pt-10">
                            <svg width="48" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            </svg>
                        </div>
                        <div className="pt-20 text-center">
                            <h2 className={`text-[32px] fw-bold ${selectedOption === 'client' ? 'text-white' : 'text-[#008080]'}`}>Clients</h2>
                            <h6 className={`text-[20px] ${selectedOption === 'client' ? 'text-white' : ''}`}>I want to shop for art pieces</h6>
                        </div>
                    </div>
                </div>
                <div className="pt-14 flex justify-center px-6">
                    <Link to={selectedOption === 'admin' ? "/signup/admin" : "/signup/client"}>
                        <button
                            className={`h-[80px] lg:w-[400px] px-8 w-full rounded-xl text-[20px] fw-bold ${selectedOption ? 'bg-[#008080] text-white' : 'bg-[#8FCACA] text-[#6D6D6D]'}`}
                            disabled={!selectedOption}
                        >
                            Next
                        </button>
                    </Link>
                </div>
                <div>
                    <h2 className="text-center pt-2 pb-10 text-[16px]">
                        Already have an account?
                        <span className="text-[#008080] pl-2 fw-bold">
                            <Link to={selectedOption === 'admin' ? "/signin/admin" : "/signin/client"}>
                                Log in
                            </Link>
                        </span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Selection;
