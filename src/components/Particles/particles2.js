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
         
          const particlesLoaded = (container) => {
            console.log(container);
          };
       
          return (
            <div className="canvas2">
           
             <Particles
                  id="tsparticles"
                  init={particlesInit}
                  loaded={particlesLoaded}
                  options={{
                    particles:{
                     number:{
                      value:150
                     },
                     opacity:{
                      random:true,
                      anim:{
                        enable:true
                      }
                     },
                     color:{
                      value:"#181818"
                     },
                     move:{
                        enable:true
                      },
                      line_linked:{
                        enable:true

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