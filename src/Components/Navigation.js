import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSprings, animated, useSpring } from '@react-spring/web'
import NavigationMenu from './NavigationMenu'

function Navigation() {
    const [showMenu, setShowMenu] = useState(false)

    const maskTransitions = useSprings(showMenu,  {
        from: { position: 'absolute', opacity: 0 },
        to: { opacity: 1 },
    })

    const menuTransitions = useSpring(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)'},
        to: { opacity: 1, transform: 'translateX(0%)'},
    })

    const { transform } = useSpring({
        to: { transform: showMenu ? 'translateX(0%)' : 'translateX(-100%)' }
    });

    return(
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>
            <div>
                {
                    maskTransitions.map(props =>(
                        <animated.div 
                            style={props} 
                            className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50" 
                            onClick={() => setShowMenu(false)} 
                        >
                        </animated.div>
                    ))
                    
                }

                {
                    menuTransitions.map(props =>(
                        <animated.div
                            style={{
                                transform: transform.interpolate(transform => `${transform}`),
                            }}
                            className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3" 
                        >
                            <NavigationMenu 
                                closeMenu={() => setShowMenu(false)}
                            />
                        </animated.div>
                    ))
                }
            </div>
            
        </nav>
    )
}

export default Navigation