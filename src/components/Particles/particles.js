import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './index.scss'

const BackgroundParticles = () =>{
     const particlesInit = async (main) => {
            // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            await loadFull(main);
          };
         
       
          return (
            <div className="canvas">
           
             <Particles
                  id="tsparticles"
                  init={particlesInit}
                  options={{
                    particles:{
                     number:{
                      value:70
                     },
                     fpslimit:30,
                     opacity:{
                      random:true,
                      anim:{
                        enable:true
                      }
                     },
                     color:{
                      value:"#fff"
                     },
                     move:{
                        enable:true
                      },
                      line_linked:{
                        enable:true,
                        distance:200

                      }
                    },
                    
                    interactivity:{
                      events:{
                        onhover:{
                          enable:true,
                          mode:['grab' , 'repulse']
                        }
                      }
                    }
                  }}
              />  
          </div>
    )
}

export default BackgroundParticles;