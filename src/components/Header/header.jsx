import React, { useRef, useEffect ,useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);


    const [activeTab, setActiveTab] = useState('#about');
    const stickyHeaderFunc = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current?.classList.add('sticky__header');
        } else {
            headerRef.current?.classList.remove('sticky__header');
        }
    };

    useEffect(() => {
        const handleScroll = () => stickyHeaderFunc();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (e ,tab) => {
        e.preventDefault();
        setActiveTab(tab);
        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr)?.offsetTop || 0;
        window.scrollTo({
            top: location - 80,
            left: 0,
            behavior: 'smooth'
        });
    };

    const toggleMenu = () => {
        menuRef.current?.classList.toggle('show__menu');
    };
    const handleScroll = () => {
        const sections = ['#about', '#services', '#portfolio', '#contact'];
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (let i = 0; i < sections.length; i++) {
            const section = document.querySelector(sections[i]);
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                setActiveTab(sections[i]);
                break;
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header ref={headerRef} className="w-full h-[80px] leading-[80px] flex items-center">
            <div className='container'>
                <div className='flex items-center justify-between'>
                    {/*========Logo========= */}
                    <div className='flex items-center gap-[10px]'>
                        <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>H</span>
                        <div className="leading-[20px]">
                            <h2 className='text-xl text-smallTextColor font-[700]'>Harshal</h2>
                            <p className='text-smallTextColor text-[16px] font-[500]'>Personal</p>
                        </div>
                    </div>
                    {/*========Logo end========= */}

                    {/*========menu start========= */}
                    <div className="menu" ref={menuRef}>
                        <ul className='flex items-center gap-10'>
                            <li><a  onClick={(e) => handleClick(e, '#about')} className={`text-smallTextColor font-[600] ${activeTab === '#about' ? 'bg-activeColor' : ''}`} href="#about">About</a></li>
                            <li><a  onClick={(e) => handleClick(e, '#services')} className={`text-smallTextColor font-[600] ${activeTab === '#services' ? 'bg-activeColor' : ''}`} href="#services">Services</a></li>
                            <li><a onClick={(e) =>handleClick (e,'#portfolio')} className={`text-smallTextColor font-[600] ${activeTab === '#portfolio' ? 'bg-activeColor' : ''}`} href="#portfolio">Projects</a></li>
                            <li><a onClick={(e) =>handleClick (e,'#contact')} className={`text-smallTextColor font-[600] ${activeTab === '#contact' ? 'bg-activeColor' : ''}`} href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    {/*========menu end========= */}

                    {/*========menu right start========= */}
                    <div className="flex items-center gap-4">
                        <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] 
                                             hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300'>
                            <i className="ri-send-plane-line"></i> 
                            <NavLink to="/chat">Let's Talk</NavLink>
                        </button>
                        <span onClick={toggleMenu} className='text-2xl text-smallTextColor md:hidden cursor-pointer'><i className="ri-menu-line"></i></span>
                    </div>
                    {/*========menu right end========= */}
                </div>
            </div>
        </header>
    );
};

export default Header;
 