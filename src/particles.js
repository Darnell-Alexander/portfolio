import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


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
            <div className="App">
           
             <Particles
                  id="tsparticles"
                  init={particlesInit}
                  loaded={particlesLoaded}
                  options={{
                    particles:{
                     number:{
                      value:100
                     },
                     color:{
                      value:"#181818"
                     },
                      move:{
                        enable:true
                      }
                    },
                    interactivity:{
                      events:{
                        onhover:{
                          enable:true,
                        }
                      }
                    }
                  }}
              />  
          </div>
    )
}

export default BackgroundParticles;